// 📚 KHO BÀI CẨM NANG — file này chỉ GỘP các nhóm bài lại.
// Muốn thêm hoặc sửa bài thì mở đúng file trong thư mục data/parts/
//
// ❗ LƯU Ý: toàn bộ nội dung do AI soạn — chị hãy đọc lại và chỉnh cho đúng
// thực tế trước khi công bố rộng rãi.
//
// 📏 CHUẨN VIẾT MỘT BÀI (xem thêm ghi chú đầu file data/parts/co-ban.js):
//   slug            – địa chỉ trang (không dấu, nối bằng gạch ngang, không trùng)
//   title           – tiêu đề, nên có móc câu nhưng đúng sự thật
//   excerpt         – 1–2 câu hiện trên thẻ, nói trúng nỗi bí của người đọc
//   readTimeMinutes – số phút đọc
//   category        – slug danh mục (xem data/categories.js)
//   adult           – true nếu là bài tế nhị (sẽ ẩn khỏi trang chủ mặc định)
//   author          – null, hoặc { name, url } nếu lấy từ cộng đồng (phải xin phép)
//   quickAnswer     – trả lời gọn nhưng đủ làm được ngay, 3–5 câu
//   prepare         – 3–5 món cần chuẩn bị, ghi rõ vì sao cần
//   steps           – [{ title, detail }] — BAO NHIÊU BƯỚC CŨNG ĐƯỢC, ưu tiên đủ chi tiết
//   notes           – 3–4 điều cần lưu ý, ưu tiên cảnh báo và mẹo
//   faq             – [{ q, a }] 3–4 câu người đọc thật sự hay hỏi
//   sources         – [{ label, url }] nguồn tham khảo (có thể để [])

// Nhóm việc đời thường cơ bản
import { coBan } from "./parts/co-ban.js";
import { partA } from "./parts/partA.js";
import { partB } from "./parts/partB.js";
import { partC } from "./parts/partC.js";
// Nhóm bài theo chủ đề đang được quan tâm — cần rà lại định kỳ vì quy định hay đổi
import { xuHuong } from "./parts/xu-huong.js";
// Nhóm bài về dùng trợ lý AI trong việc đời thường
import { aiGuides } from "./parts/ai.js";
// Nhóm theo nhóm người đọc
import { treEm } from "./parts/tre-em.js";
import { namGioi } from "./parts/nam-gioi.js";
import { nuGioi } from "./parts/nu-gioi.js";
// Nhóm 18+ — chỉ hiện khi người đọc chủ động chọn bộ lọc 18+ hoặc đang tìm kiếm
import { muoiTamCong } from "./parts/muoi-tam-cong.js";
// Bài người lớn nằm trong mục Nam giới / Nữ giới (đánh dấu adult: true nên cũng được ẩn)
import { namGioiNguoiLon } from "./parts/nam-gioi-nguoi-lon.js";
import { nuGioiNguoiLon } from "./parts/nu-gioi-nguoi-lon.js";
// Bài đăng hằng ngày — mỗi ngày một file trong data/parts/daily/
import { dailyGuides } from "./parts/daily/index.js";
// Bài do bạn đọc gửi, tự thêm vào khi biên tập viên duyệt (xem HUONG-DAN-DUYET.md)
import community from "./parts/community.json";

// Đóng dấu ngày đăng cho cả nhóm bài. Bài nào tự có publishedAt riêng thì
// giữ nguyên ngày của nó (nhờ ...g đặt sau) — sửa bài thì nhớ cập nhật ngày.
const stamp = (list, date) => list.map((g) => ({ publishedAt: date, ...g }));

// Gộp tất cả các nhóm bài, xếp BÀI MỚI NHẤT LÊN ĐẦU.
// Cùng ngày thì xếp theo vần cho ổn định, không nhảy lung tung mỗi lần tải trang.
export const guides = [
  ...stamp(coBan, "2026-08-13"),
  ...stamp(partA, "2026-08-11"),
  ...stamp(partB, "2026-08-11"),
  ...stamp(partC, "2026-08-11"),
  ...stamp(xuHuong, "2026-08-12"),
  ...stamp(aiGuides, "2026-08-12"),
  ...stamp(treEm, "2026-08-12"),
  ...stamp(namGioi, "2026-08-12"),
  ...stamp(nuGioi, "2026-08-12"),
  ...stamp(namGioiNguoiLon, "2026-08-12"),
  ...stamp(nuGioiNguoiLon, "2026-08-12"),
  ...stamp(muoiTamCong, "2026-08-12"),
  ...dailyGuides, // bài đăng hằng ngày, mỗi bài tự mang publishedAt của ngày đó
  ...community, // bài cộng đồng đã có sẵn ngày do máy đóng dấu lúc duyệt
].sort(
  (a, b) =>
    (b.publishedAt || "").localeCompare(a.publishedAt || "") ||
    a.slug.localeCompare(b.slug, "en")
);

export const guideMap = Object.fromEntries(guides.map((g) => [g.slug, g]));
