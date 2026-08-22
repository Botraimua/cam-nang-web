// 📅 BÀI ĐĂNG HẰNG NGÀY
//
// Mỗi ngày một file: data/parts/daily/YYYY-MM-DD.js
// File đó export một mảng tên theo ngày, ví dụ: export const day20260814 = [...]
//
// ❗ ĐỪNG sửa file này bằng tay — dùng lệnh:
//      node scripts/register-day.mjs YYYY-MM-DD
//    Lệnh đó tự tạo file ngày mới và tự thêm vào danh sách bên dưới.
//
// Muốn GỠ nguyên một ngày: xoá dòng import và dòng spread tương ứng, rồi xoá file.
//
// 📮 MỘT KHUNG ĐƯỢC ĐẨY LÊN LÀM 3 LẦN, mỗi mục một lần, để đứt giữa chừng không
//    mất sạch. Hai lần đầu gắn dấu [chua-xong] ở đầu commit message nên GitHub
//    bỏ qua, không gửi mail; lần cuối bỏ dấu đó đi thì mail mới gửi — và báo cáo
//    vốn đọc cả file nên vẫn đủ 15 bài. Xem .github/workflows/bao-cao-dang-bai.yml.
//    Vì vậy một file khung có thể tạm thời ít hơn 15 bài — đó là bình thường
//    trong lúc đang đăng, chỉ bất thường nếu tới 23h vẫn chưa đủ.


import { day20260820sang } from "./2026-08-20-sang.js";
import { day20260820trua } from "./2026-08-20-trua.js";
import { day20260820toi } from "./2026-08-20-toi.js";
import { day20260820chieu } from "./2026-08-20-chieu.js";
import { day20260821trua } from "./2026-08-21-trua.js";
import { day20260821sang } from "./2026-08-21-sang.js";
import { day20260821chieu } from "./2026-08-21-chieu.js";
import { day20260821toi } from "./2026-08-21-toi.js";
import { day20260822sang } from "./2026-08-22-sang.js";

export const dailyGuides = [
  ...day20260822sang,
  ...day20260821toi,
  ...day20260821chieu,
  ...day20260821sang,
  ...day20260821trua,
  ...day20260820chieu,
  ...day20260820toi,
  ...day20260820trua,
  ...day20260820sang,
];
