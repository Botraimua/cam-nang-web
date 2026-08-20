// Liệt kê toàn bộ đề tài đã có, để không viết trùng.
//
// Dùng:  node scripts/list-topics.mjs            → thống kê + danh sách theo mục
//        node scripts/list-topics.mjs --slugs    → chỉ in slug, mỗi dòng một cái
//        node scripts/list-topics.mjs suc-khoe   → chỉ mục đó
//
// Trả về mã thoát 1 nếu phát hiện slug trùng.

import fs from "node:fs";
import path from "node:path";

const thuMucParts = path.join(process.cwd(), "data", "parts");

function docBaiTuFile(duongDan) {
  // Đọc thô bằng regex thay vì import, để không vướng chuyện import JSON
  const src = fs.readFileSync(duongDan, "utf8").replace(/^﻿/, "");
  const catChung = (src.match(/const chung = \{ category: "([^"]+)"/) || [])[1];
  const bai = [];
  const reSlug = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = reSlug.exec(src)) !== null) {
    const sau = src.slice(m.index, m.index + 800);
    const title = (sau.match(/title:\s*"([^"]+)"/) || [])[1] || "(khong doc duoc tieu de)";
    const cat = (sau.match(/category:\s*"([^"]+)"/) || [])[1] || catChung || "?";
    bai.push({ slug: m[1], title, category: cat });
  }
  return bai;
}

function quetThuMuc(thuMuc) {
  let ketQua = [];
  for (const ten of fs.readdirSync(thuMuc)) {
    const p = path.join(thuMuc, ten);
    if (fs.statSync(p).isDirectory()) {
      ketQua = ketQua.concat(quetThuMuc(p));
    } else if (ten.endsWith(".js") && ten !== "index.js") {
      ketQua = ketQua.concat(docBaiTuFile(p));
    }
  }
  return ketQua;
}

const tatCa = quetThuMuc(thuMucParts);

if (process.argv.includes("--slugs")) {
  tatCa.forEach((b) => console.log(b.slug));
  process.exit(0);
}

const locMuc = process.argv[2];
const theoMuc = {};
tatCa.forEach((b) => {
  (theoMuc[b.category] = theoMuc[b.category] || []).push(b);
});

console.log("TONG CONG: " + tatCa.length + " bai\n");
for (const [muc, ds] of Object.entries(theoMuc).sort()) {
  if (locMuc && muc !== locMuc) continue;
  console.log("=== " + muc + " (" + ds.length + " bai) ===");
  ds.forEach((b) => console.log("  - " + b.title));
  console.log("");
}

const slugs = tatCa.map((b) => b.slug);
const trung = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (trung.length) {
  console.log("!!! SLUG TRUNG: " + [...new Set(trung)].join(", "));
  process.exit(1);
}
