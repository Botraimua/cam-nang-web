// Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu ("thue tro" khớp "thuê trọ")
export function stripDiacritics(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

export function matchesQuery(guide, categoryName, query) {
  const q = stripDiacritics(query.trim());
  if (!q) return true;
  const haystack = stripDiacritics(
    `${guide.title} ${guide.excerpt} ${categoryName} ${guide.quickAnswer || ""}`
  );
  return q.split(/\s+/).every((word) => haystack.includes(word));
}
