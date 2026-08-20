// 🗓️ LỊCH ĐĂNG BÀI TỰ ĐỘNG — chỗ duy nhất giữ ngày dừng
//
// Trang đang đăng 60 bài mỗi ngày, chia 4 khung giờ (7h / 12h / 18h / 22h),
// mỗi khung 3 mục × 5 bài. Chị chốt đăng tới hết ngày dưới đây rồi dừng.
//
// ❗ ĐỔI NGÀY THÌ CHỈ ĐỔI Ở ĐÂY. Ba chỗ cùng đọc file này:
//    1. Bốn tác vụ đăng bài trong ~/.claude/scheduled-tasks/cam-nang-khung-*
//       — quá ngày thì không viết bài nữa, thoát ngay.
//    2. scripts/kiem-khung-gio.mjs (thư nhắc 23h chạy trên máy chủ GitHub)
//       — quá ngày thì im lặng, KHÔNG gửi mail "thiếu khung" nữa.
//    3. Bất cứ ai muốn biết đợt đăng này kéo dài tới bao giờ.
//
// Vì sao phải có chốt chặn này: tác vụ trên máy dừng được bằng cách xoá,
// nhưng thư nhắc 23h là lịch chạy trên máy chủ GitHub — không ai tắt thì
// nó gửi mail "thiếu 4/4 khung" mỗi đêm, mãi mãi.
//
// Muốn đăng tiếp: đổi NGAY_DANG_CUOI thành ngày mới rồi commit. Muốn dừng
// hẳn: giữ nguyên ngày cũ, và xoá 4 tác vụ cho gọn máy.

// Ngày đăng bài cuối cùng (giờ Việt Nam), định dạng YYYY-MM-DD.
// Sau ngày này mọi thứ tự im, không cần ai nhớ tắt.
export const NGAY_DANG_CUOI = "2026-08-28";

// Mỗi khung đăng 3 mục × 5 bài.
export const BAI_MOI_KHUNG = 15;

// Trả về true nếu ngày truyền vào vẫn còn trong đợt đăng.
export function conTrongDotDang(ngay) {
  return ngay <= NGAY_DANG_CUOI;
}
