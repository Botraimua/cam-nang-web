# Hướng dẫn duyệt bài đóng góp

Người đọc gửi bài qua nút **"Đóng góp"** trên web → bài rơi vào **hàng chờ duyệt** → chị duyệt → **bài tự lên web** sau khoảng 1 phút. Không cần ai đụng vào code.

---

## 🔑 PHẦN 1 — Cài đặt (làm MỘT LẦN, khoảng 5 phút)

Hiện tại form vẫn chạy được nhưng ở chế độ "gửi thủ công" (người gửi phải tự bấm mở email). Làm xong phần này thì mọi thứ tự động hoàn toàn.

### Bước 1 — Tạo chìa khoá cho web

1. Vào https://github.com/settings/personal-access-tokens/new (đăng nhập tài khoản GitHub của chị)
2. Điền:
   - **Token name**: `cam-nang-web`
   - **Expiration**: chọn thời hạn dài nhất có thể (nhớ gia hạn khi hết hạn)
   - **Repository access**: chọn **Only select repositories** → chọn `cam-nang-web`
   - **Permissions** → mục **Repository permissions** → tìm dòng **Issues** → đổi thành **Read and write**
     *(chỉ cấp đúng quyền này thôi, không cấp thêm gì khác)*
3. Bấm **Generate token** → GitHub hiện một chuỗi ký tự dài bắt đầu bằng `github_pat_...`
4. **Sao chép chuỗi đó ngay** — GitHub chỉ cho xem một lần duy nhất

> ⚠️ Chuỗi này là chìa khoá riêng của chị. Đừng gửi cho ai, đừng dán vào chat hay tài liệu công khai.

### Bước 2 — Dán chìa khoá vào Vercel

1. Vào https://vercel.com → mở dự án **cam-nang-web**
2. Vào tab **Settings** → mục **Environment Variables**
3. Thêm biến mới:
   - **Key**: `GH_TOKEN`
   - **Value**: dán chuỗi vừa sao chép
   - **Environments**: tick cả ba (Production, Preview, Development)
4. Bấm **Save**
5. Vào tab **Deployments** → deploy mới nhất → bấm dấu **⋯** → **Redeploy** (để web nhận chìa khoá mới)

Xong! Từ giờ mỗi bài gửi sẽ tự vào hàng chờ.

### Bước 3 — Kiểm tra

Vào web, bấm **Đóng góp**, điền thử một bài rồi gửi. Nếu hiện **"Đã gửi rồi, cảm ơn bạn!"** là thành công — vào https://github.com/Botraimua/cam-nang-web/issues sẽ thấy phiếu vừa gửi.

---

## 📬 PHẦN 1B — Nhận thông báo và duyệt ngay trong Gmail (làm MỘT LẦN)

Làm xong phần này thì **không cần mở GitHub nữa**: bài mới về thẳng Gmail, chị bấm **Trả lời** gõ `/duyet` là bài lên web.

### Bước 1 — Thêm Gmail vào tài khoản GitHub

1. Vào https://github.com/settings/emails
2. Ô **Add email address** → nhập `contimbanggia11@gmail.com` → bấm **Add**
3. Mở Gmail đó, tìm thư từ GitHub → bấm **Verify email address** (xác nhận)

### Bước 2 — Cho GitHub gửi thông báo về Gmail đó

1. Vào https://github.com/settings/notifications
2. Mục **Default notification email** → chọn `contimbanggia11@gmail.com`
3. Ngay bên dưới, mục **Email notification preferences** → **tick ô "Include your own updates"**
   *(rất quan trọng: phiếu do web tạo ra mang danh tài khoản của chị, không tick ô này thì GitHub tưởng chị tự làm nên không báo)*

### Bước 3 — Bật theo dõi kho code

1. Vào https://github.com/Botraimua/cam-nang-web
2. Nút **Watch** góc trên bên phải → chọn **All Activity**

Xong! Từ giờ mỗi bài gửi mới sẽ vào Gmail của chị.

### Duyệt ngay trong Gmail

Mở thư thông báo → bấm **Trả lời (Reply)** → gõ vào **dòng đầu tiên**:

| Gõ | Kết quả |
|---|---|
| `/duyet` | Bài được dựng và đăng lên web (~1 phút) |
| `/tuchoi` | Bỏ qua bài, không đăng gì cả |

Rồi bấm Gửi. Máy sẽ trả lời lại bằng một email nữa báo đã đăng xong kèm link bài.

> 💡 Muốn **sửa nội dung** trước khi đăng thì phải mở GitHub (bấm link trong email). Còn duyệt/từ chối thẳng thì làm trong Gmail là đủ.

---

## ✅ PHẦN 2 — Duyệt bài hằng ngày

### Xem bài đang chờ

Cách tiện nhất: **trả lời email** như hướng dẫn ở Phần 1B.

Muốn xem toàn bộ hàng chờ: https://github.com/Botraimua/cam-nang-web/issues (cài thêm **app GitHub trên điện thoại** cũng tiện).

### Sửa nội dung trước khi đăng

Mở phiếu → bấm nút **⋯** góc trên bên phải phần nội dung → **Edit** → sửa thoải mái → **Update comment**.

Cấu trúc phiếu (giữ nguyên các dòng `## ...` nhé, máy dựa vào đó để dựng bài):

```
## Danh mục
xe-co

## Tóm tắt
Một hai câu giới thiệu, sẽ hiện trên thẻ ngoài trang chủ.

## Các bước
1. Tên bước — Giải thích ngắn cho bước đó.
2. Tên bước — Giải thích ngắn cho bước đó.

## Lưu ý
- Điều cần cẩn thận.

## Người gửi
Tên người gửi
```

Mẹo nhỏ:
- Viết **Tên bước — Giải thích** (có dấu gạch ngang) thì bài lên đẹp nhất
- Thêm mục `## Chuẩn bị` nếu muốn có phần "Chuẩn bị gì trước?"
- Link `https://...` nào có trong phiếu sẽ tự thành "Nguồn tham khảo"

Mã danh mục hợp lệ: `xe-co`, `giay-to`, `tien-bac`, `nha-cua`, `an-uong`, `suc-khoe`, `cong-viec`, `khac`

### Duyệt — chỉ một chữ

Trả lời email thông báo, hoặc bình luận vào phiếu:

```
/duyet
```

Rồi ngồi chơi ~1 phút. Máy sẽ tự: dựng bài → kiểm tra web không lỗi → đăng lên → bình luận lại kèm link bài → đóng phiếu.

Nếu nội dung có chỗ máy không hiểu, nó sẽ bình luận báo lý do cụ thể; chị sửa phiếu rồi gõ `/duyet` lần nữa.

### Từ chối bài

Trả lời email bằng `/tuchoi`, hoặc bấm **Close issue** trên GitHub — không đăng gì cả.

### Gỡ bài đã đăng

Mở file `data/parts/community.json`, xoá khối `{ ... }` của bài đó, lưu lại. Hoặc nhắn Claude Code một câu: *"gỡ bài <tên bài>"*.

---

## 🛡️ Chống spam

Form đã có sẵn: bẫy bot ẩn, giới hạn 3 bài/phút cho mỗi người, chặn bài quá ngắn hoặc rải quá nhiều link. Quan trọng nhất là **không bài nào lên web nếu chị chưa gõ `/duyet`**.

Nếu bị spam nặng, vào Vercel xoá biến `GH_TOKEN` là form quay về chế độ gửi thủ công ngay lập tức.
