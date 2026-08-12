// Đổi "2026-08-12" thành "12/08/2026" — cắt chuỗi thay vì dùng Date
// để ngày không bị lệch theo múi giờ của người xem.
export function formatDate(iso) {
  if (typeof iso !== "string") return "";
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return "";
  return `${d}/${m}/${y}`;
}
