# Kế hoạch & hồ sơ phân tích — trang cẩm nang

> Lưu lại từ phiên làm việc 2026-08-11. Quy trình: 2 agent nghiên cứu độc lập + 1 trọng tài kiểm chứng đối kháng trên trang tham khảo https://ua-gio-lam-sao.vercel.app/. Nhãn: ✅ = trọng tài tự xác minh trên trang thật; ⚠️ = hợp lý nhưng chưa kiểm được.

## Trang tham khảo là gì (✅)

"Ủa, Giờ Làm Sao?" — thư viện 133 cẩm nang ngắn (1–4 phút đọc) về kỹ năng sống, chia 8 danh mục, nội dung gom từ bài đăng Threads có ghi công tác giả + link bài gốc. Tìm kiếm, lọc danh mục, cuộn vô hạn 12 bài/lượt.

## Thông số kỹ thuật đã kiểm chứng (✅)

- **Stack**: Next.js App Router (RSC), prerender/SSG toàn bộ, build Turbopack, deploy Vercel, không database ngoài, không auth, không analytics.
- **Styling**: CSS Modules (KHÔNG Tailwind). 16 biến màu: ink #202844, ink-soft #566078, paper #fffaf1, surface #fff, purple #6548e8, purple-dark #4b32c4, purple-pale #e9e2ff, coral #ff7557, yellow #ffd45c, mint #a8e7ca, sky #acdffa, pink #ffc9db, lavender #c8baff, peach #ffc89f, border #dcd6c9, focus #2d6cdf.
- **Font**: Nunito (heading) + DM Sans (body), self-host qua next/font.
- **Dữ liệu**: API nội bộ `/api/guides?offset&query&category` → `{guides[], hasMore}`, 12 bài/trang, tổng 133 bài; schema: slug, title, excerpt, readTimeMinutes, sourceUsername, category{slug,name,description,iconKey,tone}.
- **8 danh mục** (slug/icon/tone): xe-co/car/coral, giay-to/file-text/lavender, tien-bac/coins/yellow, nha-cua/house/mint, an-uong/fork-knife/pink, suc-khoe/heart/sky, cong-viec/briefcase/peach, khac/file-text/peach.
- **Trang chủ**: header anchor nav → hero (eyebrow + H1) → search (placeholder "Bạn đang không biết làm gì?", 3 chip gợi ý) → dải ✦ trang trí → khu cẩm nang (eyebrow "Được tìm nhiều gần đây" chỉ là nhãn trang trí — thứ tự thật là alphabet theo slug; 9 pill lọc; lưới 12 thẻ + infinite scroll bằng IntersectionObserver, KHÔNG có nút load-more) → section 3 bước → CTA → footer credit.
- **Trang chi tiết** `/cam-nang/[slug]`: breadcrumb → chip + phút đọc + tác giả → H1 + mô tả → sticker trang trí → h2 "Bạn cần làm gì?" → "Chuẩn bị gì trước?" → "Làm từng bước" → "Điều cần lưu ý" → "Câu hỏi thường gặp" → "Nguồn tham khảo" (id=nguon) → CTA cuối. "Biết cách rồi!"/"Nói ngắn gọn" chỉ là chữ trang trí/kicker, KHÔNG phải nút; KHÔNG có checkbox (lời hứa "đánh dấu xong" trên trang chủ là copy suông).
- **Thiếu (cơ hội làm tốt hơn)**: sitemap.xml 404, robots.txt 404, không og/twitter meta, không analytics.

## Điểm chưa chắc (⚠️)

Version Next.js chính xác; cách chủ site lưu dữ liệu server-side (nhiều khả năng file tĩnh trong repo — chỉ có bằng chứng gián tiếp); tên bộ icon (kiểu Phosphor); quy trình họ thu thập bài Threads.

## Những gì bản của mình đã làm khác/tốt hơn

1. Nội dung tự soạn (không sao chép bài + lời văn thương hiệu của trang gốc — tránh vấn đề bản quyền), tên riêng "Biết Liền!" đổi được trong `data/site.js`.
2. Bỏ API route — dữ liệu ít thì lọc client-side, đơn giản hơn mà trải nghiệm y hệt (khuyến nghị đã đồng thuận của 2 agent). Khi kho bài > vài nghìn mới cần thêm API.
3. Thêm: sitemap.js, robots.js, og meta, checklist từng bước có localStorage (làm thật tính năng mà trang gốc chỉ hứa), emoji icon danh mục, slug giữ chữ "d" cho "đ" (trang gốc bỏ hẳn chữ đ).

## Việc còn lại

- [ ] Chị duyệt/sửa 13 bài mẫu trong `data/guides.js` (nội dung AI soạn — PHẢI rà lại trước khi công bố)
- [ ] Chốt tên trang + lời văn trong `data/site.js`
- [ ] Tạo tài khoản GitHub + Vercel → nhờ Claude Code deploy
- [ ] Sau deploy: cập nhật `site.url` thành domain thật
- [ ] (Tuỳ chọn) gắn domain riêng, thêm Vercel Analytics
