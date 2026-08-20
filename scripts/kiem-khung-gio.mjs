// Cuối ngày kiểm xem 4 khung giờ đã đăng đủ chưa, thiếu thì báo email.
//
// Dùng:  node scripts/kiem-khung-gio.mjs            (kiểm ngày hôm nay)
//        node scripts/kiem-khung-gio.mjs 2026-08-20 (kiểm một ngày cụ thể)
//
// Việc này cần thiết vì tác vụ đăng bài chỉ chạy khi app Claude đang mở.
// Hôm nào máy tắt hoặc app đóng thì sẽ không có bài mà cũng không ai báo —
// script này chính là cái lưới hứng trường hợp đó.

import fs from "node:fs";
import path from "node:path";

const GOC = process.cwd();
const THU_MUC_NGAY = path.join(GOC, "data", "parts", "daily");
const THU_MUC_RA = path.join(GOC, "bao-cao");

const KHUNG = [
  { ma: "sang", ten: "Khung sáng (7h)", muc: "Xe cộ · Giấy tờ · Tiền bạc" },
  { ma: "trua", ten: "Khung trưa (12h)", muc: "Ăn uống · Nhà cửa · Sức khỏe" },
  { ma: "chieu", ten: "Khung chiều (18h)", muc: "Công việc · Kỹ năng khác · Trẻ em" },
  { ma: "toi", ten: "Khung tối (22h)", muc: "Nam giới · Nữ giới · 18+" },
];

// Giờ Việt Nam (UTC+7) — máy chạy GitHub Actions dùng giờ UTC nên phải tự bù
function ngayVietNam() {
  const t = new Date(Date.now() + 7 * 60 * 60 * 1000);
  const hai = (n) => String(n).padStart(2, "0");
  return `${t.getUTCFullYear()}-${hai(t.getUTCMonth() + 1)}-${hai(t.getUTCDate())}`;
}

function demBaiTrongFile(duongDan) {
  if (!fs.existsSync(duongDan)) return null; // chưa tạo file
  const src = fs.readFileSync(duongDan, "utf8");
  return (src.match(/slug:\s*"/g) || []).length;
}

const ngay = process.argv[2] || ngayVietNam();
const [nam, thang, ngayTrongThang] = ngay.split("-");
const ngayDep = `${ngayTrongThang}/${thang}/${nam}`;

const ketQua = KHUNG.map((k) => {
  const so = demBaiTrongFile(path.join(THU_MUC_NGAY, `${ngay}-${k.ma}.js`));
  return { ...k, so };
});

const thieu = ketQua.filter((k) => k.so === null || k.so === 0);
const tongBai = ketQua.reduce((n, k) => n + (k.so || 0), 0);

// In ra cho người xem log Actions
console.log(`Ngay ${ngay}: dang duoc ${tongBai} bai / ${KHUNG.length} khung gio`);
for (const k of ketQua) {
  console.log(`  ${k.ma.padEnd(6)} ${k.so === null ? "CHUA CO FILE" : k.so + " bai"}`);
}

// Báo cho workflow biết có thiếu hay không
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    `thieu=${thieu.map((k) => k.ma).join(",")}\n`
  );
}

if (!thieu.length) {
  console.log("Du ca 4 khung — khong can bao.");
  process.exit(0);
}

// ── Soạn báo cáo thiếu bài ──
const d = [];
d.push(`Ngày **${ngayDep}** mới đăng được **${tongBai} bài**, thiếu **${thieu.length}/4 khung giờ**.`);
d.push("");
d.push("| Khung giờ | Nội dung | Kết quả |");
d.push("| --- | --- | --- |");
for (const k of ketQua) {
  const tinh =
    k.so === null ? "❌ chưa chạy" : k.so === 0 ? "❌ file rỗng" : `✅ ${k.so} bài`;
  d.push(`| ${k.ten} | ${k.muc} | ${tinh} |`);
}
d.push("");
d.push("### Vì sao có thể thiếu");
d.push("");
d.push("Tác vụ đăng bài **chỉ chạy khi app Claude đang mở**. Nếu lúc đó máy tắt,");
d.push("app đóng, hoặc mất mạng thì khung giờ đó bị bỏ qua.");
d.push("");
d.push("### Muốn bù thì làm gì");
d.push("");
d.push("Mở app Claude lên và nhắn: *“chạy bù khung sáng”* (hoặc trưa / chiều / tối).");
d.push("");
d.push("---");
d.push("");
d.push("*Thông báo tự động lúc 23h mỗi ngày. Chị không cần trả lời — phiếu này tự đóng lại.*");

fs.mkdirSync(THU_MUC_RA, { recursive: true });
fs.writeFileSync(
  path.join(THU_MUC_RA, "tieu-de.txt"),
  `⚠️ Ngày ${ngayDep} thiếu ${thieu.length}/4 khung đăng bài`,
  "utf8"
);
fs.writeFileSync(path.join(THU_MUC_RA, "noi-dung.md"), d.join("\n"), "utf8");

console.log(`Thieu: ${thieu.map((k) => k.ma).join(", ")} — da soan bao cao.`);
