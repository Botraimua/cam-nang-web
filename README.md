# Biết Liền! — trang cẩm nang việc đời thường

Trang web dạng "cẩm nang sống" xây bằng **Next.js 15 (App Router)**, mô phỏng cấu trúc đã kiểm chứng của trang tham khảo `ua-gio-lam-sao.vercel.app`, kèm 4 nâng cấp: sitemap, robots.txt, thẻ chia sẻ mạng xã hội (og meta), và **checklist đánh dấu từng bước** (lưu localStorage).

> ⚠️ **13 bài hiện tại là NỘI DUNG MẪU do AI soạn** — hãy đọc lại, chỉnh cho đúng thực tế rồi mới công bố.

## Chạy trang trên máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000. (Nếu báo không tìm thấy `node`/`npm`: khởi động lại máy sau khi cài Node.js, hoặc thêm `C:\Program Files\nodejs` vào PATH.)

## Sửa nội dung — không cần đụng vào code

| Muốn sửa gì | Mở file |
|---|---|
| Tên trang, câu chào, lời văn mọi section | `data/site.js` |
| Danh mục (tên, emoji, màu) | `data/categories.js` |
| **Bài cẩm nang** (thêm/sửa/xoá) | `data/guides.js` |

### Thêm 1 bài mới

Mở `data/guides.js`, copy 1 khối `{ ... }` có sẵn, sửa lại rồi lưu — trang tự cập nhật. Các trường bắt buộc: `slug` (không dấu, không trùng), `title`, `excerpt`, `readTimeMinutes`, `category` (slug trong `data/categories.js`), `quickAnswer`, `steps`. Tuỳ chọn: `prepare`, `notes`, `faq`, `sources`, `author`.

**Ghi công nội dung cộng đồng**: nếu bài lấy từ chia sẻ của người khác (Threads, Facebook...), PHẢI xin phép và điền `author: { name: "@tênhọ", url: "link bài gốc" }` — trang sẽ tự hiện "Hướng dẫn bởi @tênhọ" + link nguồn, giống cách trang tham khảo ghi công.

## Đưa trang lên mạng (miễn phí)

1. Tạo tài khoản [GitHub](https://github.com) và [Vercel](https://vercel.com) (đăng nhập Vercel bằng GitHub).
2. Đẩy thư mục này lên một repo GitHub (nhờ Claude Code làm giúp: "đẩy cam-nang-web lên GitHub").
3. Vào Vercel → **Add New Project** → chọn repo → **Deploy**. Vercel tự nhận Next.js, không cần cấu hình.
4. Nhận domain dạng `tên-bạn-chọn.vercel.app`. Từ đó về sau: mỗi lần push code mới → web tự cập nhật.
5. **Sau khi deploy**: mở `data/site.js`, sửa `url` thành domain thật (để sitemap + og meta trỏ đúng).

## Cấu trúc thư mục

```
data/          ← NỘI DUNG (site.js, categories.js, guides.js) — chỉnh ở đây là chính
app/           ← khung trang: layout, trang chủ, trang chi tiết /cam-nang/[slug],
                  sitemap.js, robots.js, icon.svg (favicon), not-found (404)
components/    ← từng mảnh giao diện + CSS Module đi kèm
lib/text.js    ← tìm kiếm không phân biệt dấu tiếng Việt
```

## Tính năng

- Render tĩnh (SSG) toàn bộ trang — nhanh và SEO tốt; mỗi bài tự sinh title/description riêng
- Tìm kiếm **không cần gõ dấu** ("thue tro" vẫn ra "thuê trọ"), lọc theo 8 danh mục
- Hiện 12 thẻ/lượt + cuộn vô hạn (infinite scroll)
- Trang chi tiết 6 phần: Bạn cần làm gì? → Chuẩn bị gì trước? → Làm từng bước → Điều cần lưu ý → Câu hỏi thường gặp → Nguồn tham khảo
- Checklist từng bước có lưu tiến độ (localStorage) — tắt trang mở lại vẫn nhớ
- Bảng màu + font (Nunito & DM Sans) theo đúng design tokens đã kiểm chứng từ trang tham khảo
