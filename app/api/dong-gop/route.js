import { categories, categoryMap } from "@/data/categories";

export const runtime = "nodejs";

// Nhận bài đóng góp từ form và tạo một "phiếu chờ duyệt" (GitHub Issue).
// Biên tập viên duyệt bằng cách bình luận /duyet — xem HUONG-DAN-DUYET.md
//
// Cần biến môi trường trên Vercel:
//   GH_TOKEN  – fine-grained token, quyền Issues: Read and write cho repo này
//   GH_REPO   – "chu-repo/ten-repo" (không đặt thì dùng mặc định bên dưới)

const REPO = process.env.GH_REPO || "Botraimua/cam-nang-web";
const TOKEN = process.env.GH_TOKEN;

const LIMIT_WINDOW_MS = 60_000;
const LIMIT_MAX = 3;
const recentHits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const times = (recentHits.get(ip) || []).filter((t) => now - t < LIMIT_WINDOW_MS);
  times.push(now);
  recentHits.set(ip, times);
  if (recentHits.size > 500) {
    for (const [key, list] of recentHits) {
      if (!list.some((t) => now - t < LIMIT_WINDOW_MS)) recentHits.delete(key);
    }
  }
  return times.length > LIMIT_MAX;
}

// Tách nội dung thô của người gửi thành: tóm tắt / các bước / lưu ý
function splitContent(raw) {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const bulletRe = /^(\d+[.)]|[-*•+])\s+/;
  const steps = [];
  const intro = [];
  const notes = [];

  for (const line of lines) {
    if (bulletRe.test(line)) {
      steps.push(line.replace(bulletRe, "").trim());
    } else if (steps.length === 0) {
      intro.push(line);
    } else {
      notes.push(line);
    }
  }

  // Không có gạch đầu dòng: coi dòng đầu là tóm tắt, các dòng sau là bước
  if (steps.length === 0) {
    const [first, ...rest] = intro;
    return {
      summary: first || "",
      steps: rest.length ? rest : [first].filter(Boolean),
      notes: [],
    };
  }

  return { summary: intro.join(" "), steps, notes };
}

function buildIssueBody({ title, category, name, content }) {
  const { summary, steps, notes } = splitContent(content);
  const cat = categoryMap[category];

  const parts = [
    "<!-- dong-gop -->",
    "> Bài do bạn đọc gửi từ form Đóng góp. Sửa thoải mái phần bên dưới, xong bình luận `/duyet` để đăng.",
    "",
    "## Danh mục",
    `${cat.slug} (${cat.name})`,
    "",
    "## Tóm tắt",
    summary || title,
    "",
    "## Các bước",
    ...steps.map((s, i) => `${i + 1}. ${s}`),
  ];

  if (notes.length) {
    parts.push("", "## Lưu ý", ...notes.map((n) => `- ${n}`));
  }

  parts.push("", "## Người gửi", name || "(không ghi tên)");

  return parts.join("\n");
}

export async function POST(request) {
  if (!TOKEN) {
    // Chưa gắn token: báo để form quay về cách gửi thủ công (email/sao chép)
    return Response.json({ error: "chua-cau-hinh" }, { status: 503 });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "du-lieu-khong-hop-le" }, { status: 400 });
  }

  // Bẫy bot: trường ẩn phải rỗng
  if (data.website) {
    return Response.json({ ok: true, skipped: true });
  }

  const title = String(data.title || "").trim();
  const category = String(data.category || "").trim();
  const name = String(data.name || "").trim().slice(0, 80);
  const content = String(data.content || "").trim();

  if (title.length < 6 || title.length > 120) {
    return Response.json({ error: "tieu-de-khong-hop-le" }, { status: 400 });
  }
  if (!categoryMap[category]) {
    return Response.json({ error: "danh-muc-khong-hop-le" }, { status: 400 });
  }
  if (content.length < 30 || content.length > 4000) {
    return Response.json({ error: "noi-dung-khong-hop-le" }, { status: 400 });
  }
  // Chặn spam rải link
  if ((content.match(/https?:\/\//g) || []).length > 5) {
    return Response.json({ error: "qua-nhieu-lien-ket" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "gui-qua-nhanh" }, { status: 429 });
  }

  const res = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: `[Đóng góp] ${title}`,
      body: buildIssueBody({ title, category, name, content }),
      labels: ["cho-duyet"],
    }),
  });

  if (!res.ok) {
    return Response.json({ error: "khong-gui-duoc" }, { status: 502 });
  }

  const issue = await res.json();
  return Response.json({ ok: true, number: issue.number });
}

export async function GET() {
  return Response.json({
    ready: Boolean(TOKEN),
    categories: categories.map((c) => c.slug),
  });
}
