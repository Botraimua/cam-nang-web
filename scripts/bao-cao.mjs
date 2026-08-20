// Soạn báo cáo sau mỗi lần đăng bài, để GitHub gửi email về hộp thư chị.
//
// Dùng:  node scripts/bao-cao.mjs
//
// Ghi ra 3 file trong thư mục bao-cao/ (thư mục tạm, không commit):
//   tieu-de.txt  – tiêu đề phiếu, cũng chính là tiêu đề email
//   noi-dung.md  – nội dung phiếu
//   slugs.txt    – danh sách slug để workflow kiểm tra trên web thật
//
// Script tìm các file trong data/parts/daily/ vừa đổi ở commit mới nhất,
// nên chỉ báo đúng số bài của LẦN ĐĂNG NÀY, không báo lại bài cũ.

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { categoryMap, ADULT_CATEGORY } from "../data/categories.js";

const GOC = process.cwd();
const THU_MUC_RA = path.join(GOC, "bao-cao");

const TEN_KHUNG = {
  sang: "khung sáng",
  trua: "khung trưa",
  chieu: "khung chiều",
  toi: "khung tối",
};

// Thứ tự thời gian thật trong ngày, dùng để xếp file cho đúng
const THU_TU_KHUNG = ["sang", "trua", "chieu", "toi"];

// ── Giờ Việt Nam (UTC+7). Máy chạy GitHub Actions dùng giờ UTC nên phải tự bù. ──
function gioVietNam() {
  const t = new Date(Date.now() + 7 * 60 * 60 * 1000);
  const hai = (n) => String(n).padStart(2, "0");
  return {
    ngay: `${t.getUTCFullYear()}-${hai(t.getUTCMonth() + 1)}-${hai(t.getUTCDate())}`,
    ngayDep: `${hai(t.getUTCDate())}/${hai(t.getUTCMonth() + 1)}/${t.getUTCFullYear()}`,
    gio: `${hai(t.getUTCHours())}:${hai(t.getUTCMinutes())}`,
  };
}

// ── Địa chỉ trang lấy từ data/site.js, đổi tên miền là tự khớp ──
function diaChiTrang() {
  const src = fs.readFileSync(path.join(GOC, "data", "site.js"), "utf8");
  const url = (src.match(/url:\s*"(https?:\/\/[^"]+)"/) || [])[1];
  return (url || "https://bietlien.vercel.app").replace(/\/$/, "");
}

// ── Đếm tổng số bài toàn trang bằng regex, không import (tránh vướng file JSON) ──
function demTongBai() {
  const dem = (thuMuc) => {
    let n = 0;
    for (const ten of fs.readdirSync(thuMuc)) {
      const p = path.join(thuMuc, ten);
      if (fs.statSync(p).isDirectory()) n += dem(p);
      else if (ten.endsWith(".js") && ten !== "index.js")
        n += (fs.readFileSync(p, "utf8").match(/slug:\s*"/g) || []).length;
    }
    return n;
  };
  return dem(path.join(GOC, "data", "parts"));
}

// ── Tìm file bài vừa đổi ở commit mới nhất ──
function fileVuaDoi() {
  let ra = "";
  try {
    ra = execSync("git diff --name-only HEAD~1 HEAD -- data/parts/daily/", {
      encoding: "utf8",
    });
  } catch {
    // Không có commit trước (repo mới clone nông) — quay sang lấy file mới nhất
    ra = "";
  }
  const ds = ra
    .split("\n")
    .map((d) => d.trim())
    .filter((d) => d.endsWith(".js") && !d.endsWith("index.js"))
    // Bỏ file đã bị xoá trong chính commit đó, không thì import sẽ vấp
    .filter((d) => fs.existsSync(path.join(GOC, d)));

  if (ds.length) return ds;

  // Dự phòng (chạy tay từ tab Actions): lấy lần đăng gần nhất CÓ BÀI.
  // Phải xếp theo thứ tự thời gian thật, không xếp theo vần — vì theo vần thì
  // "trua" lại đứng sau "toi", chọn nhầm khung.
  const thuMuc = path.join(GOC, "data", "parts", "daily");
  const moiNhat = fs
    .readdirSync(thuMuc)
    .filter((t) => /^\d{4}-\d{2}-\d{2}-(sang|trua|chieu|toi)\.js$/.test(t))
    .map((t) => ({
      ten: t,
      ngay: t.slice(0, 10),
      thuTu: THU_TU_KHUNG.indexOf(t.slice(11, -3)),
      soBai: (fs.readFileSync(path.join(thuMuc, t), "utf8").match(/slug:\s*"/g) || []).length,
    }))
    .filter((f) => f.soBai > 0)
    .sort((a, b) => a.ngay.localeCompare(b.ngay) || a.thuTu - b.thuTu);

  return moiNhat.length ? [`data/parts/daily/${moiNhat[moiNhat.length - 1].ten}`] : [];
}

// ── Đọc bài trong một file ngày ──
async function docBai(duongDanTuongDoi) {
  const mod = await import(pathToFileURL(path.join(GOC, duongDanTuongDoi)).href);
  const ds = Object.values(mod).find(Array.isArray);
  return ds || [];
}

// ══════════════════════════════════════════════════════════════════

const dsFile = fileVuaDoi();
if (!dsFile.length) {
  console.error("Khong tim thay file bai nao vua doi — bo qua bao cao.");
  process.exit(78); // 78 = không có gì để làm, workflow sẽ bỏ qua
}

const bai = [];
const khungDaDang = [];
for (const f of dsFile) {
  const ten = path.basename(f, ".js"); // 2026-08-20-toi
  const khung = ten.split("-")[3] || "";
  khungDaDang.push(TEN_KHUNG[khung] || ten);
  bai.push(...(await docBai(f)));
}

if (!bai.length) {
  console.error("File vua doi khong co bai nao — bo qua bao cao.");
  process.exit(78);
}

const t = gioVietNam();
const base = diaChiTrang();
const tong = demTongBai();

// Gom theo danh mục, giữ đúng thứ tự nút lọc trên trang chủ
const theoMuc = new Map();
for (const g of bai) {
  if (!theoMuc.has(g.category)) theoMuc.set(g.category, []);
  theoMuc.get(g.category).push(g);
}

const nhanKhung = khungDaDang.join(" + ");
const tieuDe = `📮 ${nhanKhung.charAt(0).toUpperCase()}${nhanKhung.slice(1)} ${t.ngayDep} — đã đăng ${bai.length} bài`;

const d = [];
d.push(`Đã đăng **${bai.length} bài mới** lúc **${t.gio} ngày ${t.ngayDep}** (giờ Việt Nam).`);
d.push("");
d.push(`Toàn trang giờ có **${tong} bài**.`);
d.push("");

for (const [slugMuc, ds] of theoMuc) {
  const muc = categoryMap[slugMuc];
  const ten = muc ? `${muc.emoji} ${muc.name}` : slugMuc;
  const ghiChu =
    slugMuc === ADULT_CATEGORY ? " — chỉ hiện khi bạn đọc bấm bộ lọc 18+" : "";
  d.push(`### ${ten} — ${ds.length} bài${ghiChu}`);
  for (const g of ds) {
    const an = g.adult === true && slugMuc !== ADULT_CATEGORY ? " 🔒" : "";
    d.push(`- [${g.title}](${base}/cam-nang/${g.slug})${an} · ${g.steps.length} bước`);
  }
  d.push("");
}

const soAn = bai.filter((g) => g.adult === true || g.category === ADULT_CATEGORY).length;
if (soAn) {
  d.push(`> 🔒 ${soAn}/${bai.length} bài được đánh dấu tế nhị nên không hiện trên trang chủ mặc định.`);
  d.push("");
}

// Phần kết quả kiểm tra trên web thật do workflow nối thêm vào cuối file này,
// vì lúc chạy script thì Vercel còn đang dựng lại trang.

fs.mkdirSync(THU_MUC_RA, { recursive: true });
fs.writeFileSync(path.join(THU_MUC_RA, "tieu-de.txt"), tieuDe, "utf8");
fs.writeFileSync(path.join(THU_MUC_RA, "noi-dung.md"), d.join("\n"), "utf8");
fs.writeFileSync(path.join(THU_MUC_RA, "base-url.txt"), base, "utf8");
fs.writeFileSync(
  path.join(THU_MUC_RA, "slugs.txt"),
  bai.map((g) => g.slug).join("\n"),
  "utf8"
);

console.log(tieuDe);
console.log(`Da soan bao cao cho ${bai.length} bai (${dsFile.length} file).`);
