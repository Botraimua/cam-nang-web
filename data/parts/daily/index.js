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


import { day20260820 } from "./2026-08-20.js";

export const dailyGuides = [
  ...day20260820,
];
