// Biến một "phiếu chờ duyệt" (GitHub Issue) thành bài đăng thật.
// Chạy bởi .github/workflows/duyet-dong-gop.yml khi biên tập viên duyệt.

import fs from "node:fs";
import path from "node:path";

const COMMUNITY_FILE = path.join(process.cwd(), "data", "parts", "community.json");
const CATEGORIES_FILE = path.join(process.cwd(), "data", "categories.js");

const issueBody = process.env.ISSUE_BODY || "";
const issueTitle = process.env.ISSUE_TITLE || "";
const issueNumber = process.env.ISSUE_NUMBER || "";

function fail(message) {
  console.error(`LOI: ${message}`);
  // Ghi lý do ra để workflow bình luận lại cho người duyệt
  fs.writeFileSync("publish-error.txt", message, "utf8");
  process.exit(1);
}

if (!issueBody.includes("<!-- dong-gop -->")) {
  fail("Phiếu này không phải bài đóng góp từ form (thiếu dấu <!-- dong-gop -->).");
}

// ===== Đọc danh sách danh mục hợp lệ từ data/categories.js =====
const catSource = fs.readFileSync(CATEGORIES_FILE, "utf8");
const validCategories = [];
const catRe = /slug:\s*"([^"]+)",\s*name:\s*"([^"]+)"/g;
let m;
while ((m = catRe.exec(catSource)) !== null) {
  validCategories.push({ slug: m[1], name: m[2] });
}
if (!validCategories.length) fail("Không đọc được danh mục từ data/categories.js");

// ===== Tách các mục "## ..." trong nội dung phiếu =====
// Cắt theo từng dòng tiêu đề "## " — cách này giữ được cả mục nằm CUỐI phiếu
const sections = new Map();
for (const chunk of issueBody.split(/^##[ \t]+/m).slice(1)) {
  const lineBreak = chunk.indexOf("\n");
  const heading = (lineBreak === -1 ? chunk : chunk.slice(0, lineBreak)).trim();
  const content = lineBreak === -1 ? "" : chunk.slice(lineBreak + 1);
  sections.set(heading.toLowerCase(), content.trim());
}

function getSection(name) {
  return sections.get(name.toLowerCase()) || "";
}

function toLines(block) {
  return block
    .split(/\r?\n/)
    .map((l) => l.replace(/^(\d+[.)]|[-*•+])\s+/, "").trim())
    .filter(Boolean);
}

function stripDiacritics(str) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase();
}

function slugify(str) {
  return stripDiacritics(str)
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 70)
    .replace(/^-|-$/g, "");
}

// ===== Lấy dữ liệu =====
const title = issueTitle.replace(/^\[Đóng góp\]\s*/i, "").trim();
if (title.length < 6) fail("Tiêu đề quá ngắn.");

const catRaw = getSection("Danh mục").split(/\s|\(/)[0].trim();
const category =
  validCategories.find((c) => c.slug === catRaw) ||
  validCategories.find((c) => stripDiacritics(c.name) === stripDiacritics(getSection("Danh mục")));
if (!category) {
  fail(
    `Danh mục "${catRaw}" không hợp lệ. Chọn một trong: ${validCategories.map((c) => c.slug).join(", ")}`
  );
}

const summary = getSection("Tóm tắt").replace(/\s+/g, " ").trim();
const stepLines = toLines(getSection("Các bước"));
const noteLines = toLines(getSection("Lưu ý"));
const prepareLines = toLines(getSection("Chuẩn bị"));
const senderRaw = getSection("Người gửi").trim();

if (!stepLines.length) fail("Phiếu chưa có mục '## Các bước' hoặc mục này đang trống.");

// ===== Chuyển từng dòng thành bước có tiêu đề + mô tả =====
function tidy(text) {
  const t = text.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function toStep(line) {
  const dash = line.match(/^(.{4,80}?)\s+[—–-]\s+(.+)$/);
  if (dash) return { title: tidy(dash[1]), detail: tidy(dash[2]) };

  const colon = line.match(/^(.{4,70}?):\s+(.+)$/);
  if (colon) return { title: tidy(colon[1]), detail: tidy(colon[2]) };

  const sentence = line.match(/^(.{10,90}?[.!?])\s+(.+)$/);
  if (sentence) return { title: tidy(sentence[1].replace(/[.!?]$/, "")), detail: tidy(sentence[2]) };

  const single = line.length > 90 ? `${line.slice(0, 87)}...` : line.replace(/[.。]$/, "");
  return { title: tidy(single), detail: "" };
}

const steps = stepLines.map(toStep);

// ===== Nguồn: lấy các link http trong toàn phiếu =====
const urls = [...new Set(issueBody.match(/https?:\/\/[^\s)\]]+/g) || [])]
  .filter((u) => !u.includes("github.com"))
  .slice(0, 5);
const sources = urls.map((url) => {
  let label = url;
  try {
    label = new URL(url).hostname.replace(/^www\./, "");
  } catch {}
  return { label, url };
});

// ===== Người gửi: chỉ gắn link nếu họ tự dán link, không tự suy đoán =====
let author = null;
if (senderRaw && !/^\(kh[ôo]ng ghi t[êe]n\)$/i.test(senderRaw)) {
  const urlInName = senderRaw.match(/https?:\/\/\S+/);
  const name = senderRaw.replace(/https?:\/\/\S+/, "").trim() || senderRaw.trim();
  author = { name: name.slice(0, 60), url: urlInName ? urlInName[0] : null };
}

// ===== Ước lượng thời gian đọc =====
const wordCount = [summary, ...stepLines, ...noteLines, ...prepareLines].join(" ").split(/\s+/).length;
const readTimeMinutes = Math.min(6, Math.max(1, Math.round(wordCount / 180)));

// ===== Chống trùng slug =====
// replace(/^﻿/, ""): bỏ ký tự ẩn đầu file nếu ai đó lỡ lưu bằng trình soạn thảo Windows
const community = JSON.parse(fs.readFileSync(COMMUNITY_FILE, "utf8").replace(/^﻿/, ""));
const existingSlugs = new Set(community.map((g) => g.slug));
for (const file of ["guides.js", "parts/partA.js", "parts/partB.js", "parts/partC.js"]) {
  const src = fs.readFileSync(path.join(process.cwd(), "data", file), "utf8");
  for (const found of src.matchAll(/slug:\s*"([^"]+)"/g)) existingSlugs.add(found[1]);
}

let slug = slugify(title);
if (!slug) fail("Không tạo được đường dẫn từ tiêu đề.");
if (existingSlugs.has(slug)) {
  let n = 2;
  while (existingSlugs.has(`${slug}-${n}`)) n += 1;
  slug = `${slug}-${n}`;
}

const excerpt = (summary || stepLines[0] || title).slice(0, 200);

const guide = {
  slug,
  title,
  excerpt,
  readTimeMinutes,
  category: category.slug,
  author,
  quickAnswer: summary || excerpt,
  prepare: prepareLines,
  steps,
  notes: noteLines,
  faq: [],
  sources,
  fromIssue: Number(issueNumber) || null,
};

community.push(guide);
fs.writeFileSync(COMMUNITY_FILE, `${JSON.stringify(community, null, 2)}\n`, "utf8");

fs.writeFileSync("published-slug.txt", slug, "utf8");
console.log(`Da them bai: ${slug} (${steps.length} buoc, ${readTimeMinutes} phut doc)`);
