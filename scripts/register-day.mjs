// Tạo file bài đăng cho một KHUNG GIỜ trong ngày và tự đăng ký vào index.js
//
// Dùng:  node scripts/register-day.mjs sang           (khung 7h, ngày hôm nay)
//        node scripts/register-day.mjs trua
//        node scripts/register-day.mjs chieu
//        node scripts/register-day.mjs toi
//        node scripts/register-day.mjs sang 2026-08-21   (chỉ định ngày khác)
//
// Chạy lại cho cùng một khung thì không sao — script giữ nguyên nội dung đã có,
// chỉ đảm bảo file đã được đăng ký.

import fs from "node:fs";
import path from "node:path";

const KHUNG_HOP_LE = ["sang", "trua", "chieu", "toi"];

const doiSo = process.argv.slice(2);
const khung = doiSo.find((a) => KHUNG_HOP_LE.includes(a));
const ngay = doiSo.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) || new Date().toISOString().slice(0, 10);

if (!khung) {
  console.error("LOI: phai chi ro khung gio — sang | trua | chieu | toi");
  console.error("Vi du: node scripts/register-day.mjs sang");
  process.exit(1);
}

const thuMuc = path.join(process.cwd(), "data", "parts", "daily");
const tenFile = `${ngay}-${khung}`;
const fileNgay = path.join(thuMuc, `${tenFile}.js`);
const fileIndex = path.join(thuMuc, "index.js");
const tenBien = "day" + ngay.replace(/-/g, "") + khung;

const MO_TA_KHUNG = {
  sang: "7h sáng",
  trua: "12h trưa",
  chieu: "18h chiều",
  toi: "22h tối",
};

// 1. Tạo file nếu chưa có
if (fs.existsSync(fileNgay)) {
  console.log(`File ${tenFile}.js da ton tai — giu nguyen noi dung cu.`);
} else {
  fs.writeFileSync(
    fileNgay,
    `// Bài đăng ngày ${ngay} — khung ${MO_TA_KHUNG[khung]}\n` +
      `// Mỗi bài phải có publishedAt: NGAY\n` +
      `// Bài tế nhị nhớ thêm adult: true\n\n` +
      `const NGAY = "${ngay}";\n\n` +
      `export const ${tenBien} = [\n];\n`,
    "utf8"
  );
  console.log(`Da tao file ${tenFile}.js`);
}

// 2. Đăng ký vào index.js
let index = fs.readFileSync(fileIndex, "utf8").replace(/^﻿/, "");

if (index.includes(`./${tenFile}.js`)) {
  console.log("Da dang ky truoc do — khong can them.");
} else {
  const dongImport = `import { ${tenBien} } from "./${tenFile}.js";`;
  const cacImport = [...index.matchAll(/^import .+$/gm)].map((m) => m[0]);

  if (cacImport.length) {
    const cuoiCung = cacImport[cacImport.length - 1];
    index = index.replace(cuoiCung, `${cuoiCung}\n${dongImport}`);
  } else {
    index = index.replace(
      /^export const dailyGuides/m,
      `${dongImport}\n\nexport const dailyGuides`
    );
  }

  index = index.replace(
    /export const dailyGuides = \[([\s\S]*?)\];/,
    (_, ruot) => `export const dailyGuides = [\n  ...${tenBien},${ruot.trimEnd()}\n];`
  );

  fs.writeFileSync(fileIndex, index, "utf8");
  console.log(`Da dang ky ${tenBien} vao index.js`);
}

console.log(`\nGio hay mo file nay va viet bai vao:\n  data/parts/daily/${tenFile}.js`);
