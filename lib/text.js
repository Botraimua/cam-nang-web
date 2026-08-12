// Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu ("thue tro" khớp "thuê trọ")
export function stripDiacritics(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function toWords(text) {
  return stripDiacritics(text)
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

// Chấm điểm mức liên quan của một bài với từ khoá. 0 nghĩa là không khớp.
//
// So khớp theo ĐẦU TỪ chứ không phải chuỗi con bất kỳ: nếu dùng chuỗi con thì gõ
// "ai" sẽ dính cả "ngoài", "phải", "tại" — ra gần hết kho bài.
//
// Vẫn còn trùng ngẫu nhiên (bỏ dấu xong "khoảng" cũng bắt đầu bằng "khoa"), nên
// chấm điểm để bài khớp ngay ở TIÊU ĐỀ được xếp lên trước.
export function scoreMatch(guide, categoryName, query) {
  const q = stripDiacritics(query.trim());
  if (!q) return 1; // không tìm kiếm thì bài nào cũng hợp lệ

  const terms = q.split(/\s+/).filter(Boolean);
  const khop = (words) => terms.every((term) => words.some((w) => w.startsWith(term)));

  const tuTieuDe = toWords(guide.title);
  if (khop(tuTieuDe)) return 3;

  const tuDanhMuc = toWords(categoryName);
  if (khop([...tuTieuDe, ...tuDanhMuc])) return 2;

  const tuNoiDung = toWords(`${guide.excerpt} ${guide.quickAnswer || ""}`);
  if (khop([...tuTieuDe, ...tuDanhMuc, ...tuNoiDung])) return 1;

  return 0;
}
