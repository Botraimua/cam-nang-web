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
//
// 📌 23/08/2026: đợt đăng KẾT THÚC SỚM theo yêu cầu của chị, thay vì chạy tới
//    28/08 như dự định. Bốn tác vụ đăng bài đã xoá khỏi bộ lập lịch.
//
//    Để ngày 2026-08-22 chứ không phải 2026-08-23, dù ngày 23 vẫn có bài đăng.
//    Lý do: thư nhắc 23h tối nay sẽ kiểm ngày 23/08, thấy khung chiều và khung
//    tối trống rồi gửi mail báo thiếu — trong khi đó là thiếu có chủ ý vì đã
//    dừng. Lùi một ngày là mọi thứ im ngay từ tối nay.
//
//    Ngày 22/08 cũng chính là ngày cuối cùng đăng đủ 60/60 bài.
export const NGAY_DANG_CUOI = "2026-08-22";

// Mỗi khung đăng 3 mục × 5 bài.
export const BAI_MOI_KHUNG = 15;

// Trả về true nếu ngày truyền vào vẫn còn trong đợt đăng.
export function conTrongDotDang(ngay) {
  return ngay <= NGAY_DANG_CUOI;
}
