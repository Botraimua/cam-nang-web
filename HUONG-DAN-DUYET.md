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

## ✅ PHẦN 2 — Duyệt bài hằng ngày

### Xem bài đang chờ

Vào https://github.com/Botraimua/cam-nang-web/issues (nên cài **app GitHub trên điện thoại** để nhận thông báo và duyệt mọi lúc).

GitHub cũng tự gửi email cho chị mỗi khi có bài mới.

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

Bình luận vào phiếu:

```
/duyet
```

Rồi ngồi chơi ~1 phút. Máy sẽ tự: dựng bài → kiểm tra web không lỗi → đăng lên → bình luận lại kèm link bài → đóng phiếu.

Nếu nội dung có chỗ máy không hiểu, nó sẽ bình luận báo lý do cụ thể; chị sửa phiếu rồi gõ `/duyet` lần nữa.

### Từ chối bài

Chỉ cần bấm **Close issue** — không đăng gì cả.

### Gỡ bài đã đăng

Mở file `data/parts/community.json`, xoá khối `{ ... }` của bài đó, lưu lại. Hoặc nhắn Claude Code một câu: *"gỡ bài <tên bài>"*.

---

## 🛡️ Chống spam

Form đã có sẵn: bẫy bot ẩn, giới hạn 3 bài/phút cho mỗi người, chặn bài quá ngắn hoặc rải quá nhiều link. Quan trọng nhất là **không bài nào lên web nếu chị chưa gõ `/duyet`**.

Nếu bị spam nặng, vào Vercel xoá biến `GH_TOKEN` là form quay về chế độ gửi thủ công ngay lập tức.
