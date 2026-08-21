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
import { NGAY_DANG_CUOI, BAI_MOI_KHUNG, conTrongDotDang } from "../data/lich-dang-bai.js";

const GOC = process.cwd();
const THU_MUC_NGAY = path.join(GOC, "data", "parts", "daily");
const THU_MUC_RA = path.join(GOC, "bao-cao");

const KHUNG = [
  { ma: "sang", ten: "Khung sáng (7h)", muc: "Xe cộ · Giấy tờ · Tiền bạc" },
  { ma: "trua", ten: "Khung trưa (12h)", muc: "Ăn uống · Nhà cửa · Sức khỏe" },
  { ma: "chieu", ten: "Khung chiều (18h)", muc: "Công việc · Kỹ năng khác · Trẻ em" },
  { ma: "toi", ten: "Khung tối (22h)", muc: "Nam giới · Nữ giới · 18+" },
];

// Mỗi khung đăng 3 mục × 5 bài. Từ khi tác vụ đẩy lên sau MỖI MỤC thay vì đợi
// xong cả khung, một khung có thể dừng giữa chừng ở 5 hoặc 10 bài. Trước đây
// script chỉ bắt khung rỗng nên khung đăng dở lọt lưới — giờ bắt cả hai.
const DU_MOI_KHUNG = BAI_MOI_KHUNG;

// Ngày cần kiểm = ngày VỪA KẾT THÚC lúc 23h giờ Việt Nam, KHÔNG phải ngày lúc
// script tình cờ chạy. Máy chạy GitHub Actions dùng giờ UTC nên phải tự bù +7.
//
// ❗ Vì sao có đoạn lùi ngày bên dưới: GitHub chạy lịch cron TRỄ khá thường.
// Đêm 20/08/2026 lịch đặt 16:00 UTC mà chạy lúc 17:15 UTC — trễ 75 phút. Cộng 7
// tiếng thành 00:15 ngày 21/08 giờ Việt Nam, nên script đi kiểm ngày 21/08 vừa
// bắt đầu được 15 phút và báo "0/60 bài, 4/4 khung chưa chạy" — trong khi ngày
// 20/08 thực tế đăng đủ 60/60. Báo động giả, và sẽ lặp lại mỗi lần cron trễ quá
// 17:00 UTC.
//
// Lịch đặt lúc 23h tối, nên nếu quy ra giờ Việt Nam mà đang là buổi sáng thì
// chắc chắn cron đã trễ qua nửa đêm — lùi lại một ngày là về đúng ngày cần kiểm.
function ngayCanKiem() {
  const t = new Date(Date.now() + 7 * 60 * 60 * 1000);
  if (t.getUTCHours() < 12) t.setUTCDate(t.getUTCDate() - 1);
  const hai = (n) => String(n).padStart(2, "0");
  return `${t.getUTCFullYear()}-${hai(t.getUTCMonth() + 1)}-${hai(t.getUTCDate())}`;
}

function demBaiTrongFile(duongDan) {
  if (!fs.existsSync(duongDan)) return null; // chưa tạo file
  const src = fs.readFileSync(duongDan, "utf8");
  return (src.match(/slug:\s*"/g) || []).length;
}

const ngay = process.argv[2] || ngayCanKiem();
const [nam, thang, ngayTrongThang] = ngay.split("-");
const ngayDep = `${ngayTrongThang}/${thang}/${nam}`;

// ── Chốt chặn: hết đợt đăng thì im lặng ──
// Lịch 23h này chạy trên máy chủ GitHub nên nó KHÔNG tự biết chị đã dừng đăng
// bài. Không có đoạn này thì từ ngày đầu tiên sau đợt, đêm nào chị cũng nhận
// một mail "thiếu 4/4 khung" — mãi mãi. Ngày dừng nằm ở data/lich-dang-bai.js.
if (!conTrongDotDang(ngay)) {
  console.log(
    `Ngay ${ngay} da qua ngay dang cuoi (${NGAY_DANG_CUOI}) — dot dang bai da ket thuc, khong bao gi.`
  );
  process.exit(0);
}

const ketQua = KHUNG.map((k) => {
  const so = demBaiTrongFile(path.join(THU_MUC_NGAY, `${ngay}-${k.ma}.js`));
  return { ...k, so };
});

const thieu = ketQua.filter((k) => k.so === null || k.so < DU_MOI_KHUNG);
const dangDo = thieu.filter((k) => k.so > 0);
const tongBai = ketQua.reduce((n, k) => n + (k.so || 0), 0);

// In ra cho người xem log Actions
console.log(`Ngay ${ngay}: dang duoc ${tongBai} bai / ${KHUNG.length} khung gio`);
for (const k of ketQua) {
  const tinh =
    k.so === null
      ? "CHUA CO FILE"
      : k.so === 0
        ? "FILE RONG"
        : k.so < DU_MOI_KHUNG
          ? `DANG DO ${k.so}/${DU_MOI_KHUNG}`
          : `${k.so} bai`;
  console.log(`  ${k.ma.padEnd(6)} ${tinh}`);
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
d.push(
  `Ngày **${ngayDep}** mới đăng được **${tongBai}/${DU_MOI_KHUNG * KHUNG.length} bài**, ` +
    `có **${thieu.length}/4 khung giờ** chưa đăng đủ.`
);
d.push("");
d.push("| Khung giờ | Nội dung | Kết quả |");
d.push("| --- | --- | --- |");
for (const k of ketQua) {
  const tinh =
    k.so === null
      ? "❌ chưa chạy"
      : k.so === 0
        ? "❌ file rỗng"
        : k.so < DU_MOI_KHUNG
          ? `⚠️ đăng dở ${k.so}/${DU_MOI_KHUNG} bài`
          : `✅ ${k.so} bài`;
  d.push(`| ${k.ten} | ${k.muc} | ${tinh} |`);
}
d.push("");
d.push("### Vì sao có thể thiếu");
d.push("");
d.push("Tác vụ đăng bài **chỉ chạy khi app Claude đang mở**, và mỗi khung mất khá lâu");
d.push("để viết đủ 15 bài. Nếu giữa chừng máy tắt, máy ngủ, app đóng hay mất mạng thì");
d.push("khung đó dừng lại ở chỗ đang làm.");
d.push("");
if (dangDo.length) {
  d.push(
    `**Khung đăng dở** (${dangDo.map((k) => k.ten).join(", ")}) nghĩa là bài đã viết ` +
      "vẫn còn và đã lên web — chỉ thiếu phần chưa kịp làm. Chạy bù sẽ viết tiếp cho đủ, " +
      "không viết lại từ đầu."
  );
  d.push("");
}
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
  `⚠️ Ngày ${ngayDep}: ${thieu.length}/4 khung chưa đăng đủ bài`,
  "utf8"
);
fs.writeFileSync(path.join(THU_MUC_RA, "noi-dung.md"), d.join("\n"), "utf8");

console.log(`Thieu: ${thieu.map((k) => k.ma).join(", ")} — da soan bao cao.`);
