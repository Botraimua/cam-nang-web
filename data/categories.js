// 8 danh mục — thứ tự ở đây = thứ tự nút lọc trên trang chủ.
// tone phải là 1 trong: coral, yellow, mint, sky, pink, lavender, peach (khai báo trong globals.css)

export const categories = [
  { slug: "xe-co", name: "Xe cộ", description: "Nhớt, lốp, giấy xe", emoji: "🛵", tone: "coral" },
  { slug: "giay-to", name: "Giấy tờ", description: "CCCD, hộ chiếu, thủ tục", emoji: "📄", tone: "lavender" },
  { slug: "tien-bac", name: "Tiền bạc", description: "Ngân hàng, chi tiêu, phí", emoji: "💰", tone: "yellow" },
  { slug: "nha-cua", name: "Nhà cửa", description: "Thuê trọ, điện nước", emoji: "🏠", tone: "mint" },
  { slug: "an-uong", name: "Ăn uống", description: "Đi chợ, bếp núc, bảo quản", emoji: "🍜", tone: "pink" },
  { slug: "suc-khoe", name: "Sức khỏe", description: "Khám bệnh, thuốc men", emoji: "🩺", tone: "sky" },
  { slug: "cong-viec", name: "Công việc", description: "Hồ sơ, hợp đồng, ngày phép", emoji: "💼", tone: "peach" },
  { slug: "khac", name: "Kỹ năng khác", description: "Chuyện lặt vặt mà quan trọng", emoji: "✨", tone: "peach" },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c]));
