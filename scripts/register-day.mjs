// Tạo file bài đăng cho một ngày và tự đăng ký vào data/parts/daily/index.js
//
// Dùng:  node scripts/register-day.mjs 2026-08-14
//        node scripts/register-day.mjs            (mặc định lấy ngày hôm nay)
//
// Chạy lại cho cùng một ngày thì không sao — script tự nhận ra và không ghi đè.

import fs from "node:fs";
import path from "node:path";

const ngay = process.argv[2] || new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(ngay)) {
  console.error("LOI: ngay phai theo dang YYYY-MM-DD, vi du 2026-08-14");
  process.exit(1);
}

const thuMuc = path.join(process.cwd(), "data", "parts", "daily");
const fileNgay = path.join(thuMuc, `${ngay}.js`);
const fileIndex = path.join(thuMuc, "index.js");
const tenBien = "day" + ngay.replace(/-/g, "");

// 1. Tạo file ngày nếu chưa có
if (fs.existsSync(fileNgay)) {
  console.log(`File ${ngay}.js da ton tai — giu nguyen noi dung cu.`);
} else {
  fs.writeFileSync(
    fileNgay,
    `// Bài đăng ngày ${ngay}\n` +
      `// Mỗi bài phải có publishedAt: "${ngay}"\n` +
      `// Bài tế nhị nhớ thêm adult: true\n\n` +
      `export const ${tenBien} = [\n];\n`,
    "utf8"
  );
  console.log(`Da tao file ${ngay}.js`);
}

// 2. Đăng ký vào index.js
let index = fs.readFileSync(fileIndex, "utf8").replace(/^﻿/, "");

if (index.includes(`./${ngay}.js`)) {
  console.log("Da dang ky truoc do — khong can them.");
} else {
  const dongImport = `import { ${tenBien} } from "./${ngay}.js";`;
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

  // Chèn vào mảng, ngày mới nhất lên đầu cho dễ nhìn
  index = index.replace(
    /export const dailyGuides = \[([\s\S]*?)\];/,
    (_, ruot) => `export const dailyGuides = [\n  ...${tenBien},${ruot.trimEnd()}\n];`
  );

  fs.writeFileSync(fileIndex, index, "utf8");
  console.log(`Da dang ky ${tenBien} vao index.js`);
}

console.log(`\nGio hay mo file nay va viet bai vao:\n  data/parts/daily/${ngay}.js`);
