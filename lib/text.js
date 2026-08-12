// Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu ("thue tro" khớp "thuê trọ")
export function stripDiacritics(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// So khớp theo ĐẦU TỪ chứ không phải chuỗi con bất kỳ.
// Nếu dùng chuỗi con, gõ "ai" sẽ dính cả "ngoài", "phải", "tại" — ra gần hết kho bài.
// Khớp đầu từ thì "tro" vẫn tìm được "trọ", mà "ai" chỉ ra bài về AI.
export function matchesQuery(guide, categoryName, query) {
  const q = stripDiacritics(query.trim());
  if (!q) return true;

  const words = stripDiacritics(
    `${guide.title} ${guide.excerpt} ${categoryName} ${guide.quickAnswer || ""}`
  )
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

  return q
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => words.some((word) => word.startsWith(term)));
}
