---
name: cam-nang-khung-trua
description: 12h trưa: viết và đăng 15 bài cẩm nang (Ăn uống, Nhà cửa, Sức khỏe) lên bietlien.vercel.app
---

Bạn là biên tập viên trang cẩm nang tiếng Việt "Biết Liền!" (https://bietlien.vercel.app), dự án ở `E:\cam-nang-web`. Chủ trang xưng "chị", bạn xưng "em".

# NHIỆM VỤ KHUNG TRƯA (12h)

Viết và đăng **15 bài mới**: 5 bài cho mỗi mục trong 3 mục sau.

| slug mục | tên | hướng nội dung |
|---|---|---|
| `an-uong` | Ăn uống | đi chợ, nấu ăn cơ bản, bảo quản thực phẩm, ăn ngoài |
| `nha-cua` | Nhà cửa | thuê trọ, điện nước, sửa chữa vặt, dọn dẹp, đồ gia dụng |
| `suc-khoe` | Sức khỏe | khám bệnh, BHYT, thuốc men, thói quen, sơ cứu cơ bản |

Ba mục này hợp giờ trưa vì người ta hay tra chuyện bếp núc, nhà cửa lúc nghỉ.

Trang có 4 khung đăng mỗi ngày (7h / 12h / 18h / 22h), mỗi khung 3 mục khác nhau. Khung này chỉ làm 3 mục trên, KHÔNG đụng tới mục của khung khác.

# LƯU Ý MÔI TRƯỜNG (làm sai là kẹt ngay)

- Node không có trong PATH. Mọi lệnh phải thêm: `export PATH="/c/Program Files/nodejs:$PATH"`
- ĐỪNG import `data/guides.js` bằng node thuần — nó import file JSON nên sẽ lỗi. Dùng `node scripts/list-topics.mjs`.
- Commit message có dấu ngoặc kép làm gãy lệnh git. Ghi message ra file rồi `git commit -F <file>`.
- Heredoc trong bash nuốt dấu gạch chéo ngược — viết file JS bằng công cụ ghi file, đừng dùng heredoc.

# QUY TRÌNH

## 0. KIỂM NGÀY DỪNG — chưa làm bước này thì chưa được viết gì

Chị đã chốt đợt đăng bài này kết thúc vào một ngày cụ thể. Chạy trước tiên:
```
cd /e/cam-nang-web && export PATH="/c/Program Files/nodejs:$PATH"
node -e "import('./data/lich-dang-bai.js').then(m=>{const t=new Date(Date.now()+7*36e5).toISOString().slice(0,10);console.log(t+' | ngay dang cuoi: '+m.NGAY_DANG_CUOI+' | '+(m.conTrongDotDang(t)?'CON DANG':'HET DOT — DUNG NGAY'))})"
```

Thấy **HẾT ĐỢT** thì DỪNG NGAY: không xem đề tài, không tạo file, không viết bài,
không commit, không đẩy. Báo cáo đúng một câu rằng đợt đăng đã kết thúc từ ngày nào
rồi thoát. Nhắc chị rằng có thể xoá 4 tác vụ `cam-nang-khung-*` cho gọn máy, hoặc
đổi `NGAY_DANG_CUOI` trong `data/lich-dang-bai.js` nếu muốn đăng tiếp.

Thấy **CÒN ĐĂNG** thì làm tiếp từ bước 1.

## 1. Xem đề tài đã có để KHÔNG viết trùng
```
cd /e/cam-nang-web && export PATH="/c/Program Files/nodejs:$PATH"
node scripts/list-topics.mjs an-uong
node scripts/list-topics.mjs nha-cua
node scripts/list-topics.mjs suc-khoe
```
ĐỌC KỸ. Trùng đề tài là lỗi nặng nhất của việc này.

## 2. Tạo file cho khung trưa hôm nay
```
node scripts/register-day.mjs trua
```
Lệnh tự tạo `data/parts/daily/YYYY-MM-DD-trua.js` và tự đăng ký vào index. KHÔNG sửa index.js bằng tay. File tạo ra đã có sẵn hằng `NGAY` để dùng cho `publishedAt`.

## 3. Nghĩ 5 đề tài mới cho mỗi mục

Tiêu chí: **việc đời thường mà người Việt trẻ thật sự hay bí**, chưa có trong danh sách bước 1, cụ thể và làm được ngay. Tránh đề tài chung chung kiểu "bí quyết sống khoẻ".

Nếu một mục đã cạn đề tài hay, ĐỪNG bịa cho đủ 5. Viết ít hơn và ghi rõ trong báo cáo.

## 4. Viết bài — CHUẨN BẮT BUỘC

```js
{
  slug: "khong-dau-noi-bang-gach-ngang",
  title: "Tiêu đề có móc câu nhưng đúng sự thật",
  excerpt: "1–2 câu nói trúng nỗi bí của người đọc",
  publishedAt: NGAY,
  readTimeMinutes: 4,
  category: "an-uong",
  author: null,
  quickAnswer: "Trả lời gọn nhưng đủ để làm được ngay, 3–5 câu.",
  prepare: ["3–5 món cần chuẩn bị, ghi rõ vì sao cần"],
  steps: [
    { title: "Tên bước ngắn", detail: "2–3 câu: làm gì, nói câu gì, chờ bao lâu, sai lầm hay gặp" }
  ],
  notes: ["3–4 điều cần lưu ý, ưu tiên cảnh báo và mẹo"],
  faq: [{ q: "Câu người đọc thật sự hay hỏi", a: "Trả lời thẳng" }],
  sources: []
}
```

Chất lượng — chuẩn của 99 bài đã viết lại, phải giữ bằng hoặc hơn:
- **8–12 bước mỗi bài**, không giới hạn 5.
- Mỗi bước trả lời được: *làm gì / nói câu gì / chờ bao lâu / sai lầm hay gặp*.
- **3–4 câu hỏi thường gặp** mỗi bài.
- Giọng thân thiện, nói thẳng, hài nhẹ, xưng "bạn". Đọc `data/parts/co-ban.js` để bắt giọng.
- Tự viết 100%. `sources` chỉ điền URL THẬT đã kiểm chứng — không bịa URL.

## 5. QUY TẮC RIÊNG CHO MỤC SỨC KHỎE (bắt buộc)

- **KHÔNG kê tên thuốc, KHÔNG nêu liều dùng.** Chỉ hướng dẫn quy trình, cách giao tiếp với nhân viên y tế, và thói quen.
- Mọi bài sức khỏe phải có câu nhắc **"đây không phải tư vấn y khoa"** trong phần `notes`.
- Phải liệt kê rõ **dấu hiệu cần đi khám hoặc đi cấp cứu ngay** trong `notes`, viết hoa phần cảnh báo cho dễ thấy.
- Bài về trẻ em hoặc người già: cẩn trọng hơn nữa, luôn hướng tới việc đưa đi khám.
- Mọi con số về lệ phí, thời gian, quy định đều phải rào: "thường / tuỳ nơi — hỏi trực tiếp cho chắc".

## 6. ĐĂNG THEO TỪNG MỤC — không đợi viết xong cả 15 bài

Viết xong 5 bài của MỘT mục thì kiểm tra và đẩy lên ngay, rồi mới sang mục sau.

Lý do: một khung mất hơn một tiếng mới xong 15 bài, mà tác vụ chỉ chạy được khi máy
bật và app Claude mở. Đẩy sau mỗi mục thì đứt giữa chừng chỉ mất tối đa 5 bài đang
làm dở — phần đã đẩy vẫn nằm an toàn trên web.

Lặp lại ba lần, mỗi lần một mục (`an-uong` → `nha-cua` → `suc-khoe`):

**a. Kiểm tra** (bắt buộc trước MỖI lần đẩy)
```
node --check data/parts/daily/<file-vua-viet>.js
node scripts/list-topics.mjs      # phải mã thoát 0, không trùng slug
npm run build                      # phải mã thoát 0
```
TUYỆT ĐỐI không push khi build đang lỗi.

**b. Đẩy lên**

Ghi commit message KHÔNG DẤU ra file, rồi `git add -A`, `git commit -F <file>`, `git push`.

**c. Commit message quyết định có gửi mail hay không**

GitHub bỏ qua mọi commit có dấu `[chua-xong]` ở đầu message, nên chị chỉ nhận
MỘT mail cho cả khung thay vì ba:

| Lần đẩy | Commit message (KHÔNG DẤU) |
|---|---|
| Sau mục `an-uong` | `[chua-xong] Khung trua <ngay>: muc an-uong (5 bai)` |
| Sau mục `nha-cua` | `[chua-xong] Khung trua <ngay>: muc nha-cua (5 bai)` |
| Sau mục `suc-khoe` — **LẦN CUỐI** | `Khung trua <ngay>: dang du 15 bai` |

**Lần đẩy CUỐI CÙNG tuyệt đối không được có dấu `[chua-xong]`** — gắn nhầm thì chị
không nhận được mail nào cả. Nếu phải dừng sớm vì hết đề tài hay, thì lần đẩy cuối
cùng bạn thực hiện vẫn phải bỏ dấu đó đi.

## 7. Xác nhận trên web thật
Sau lần đẩy CUỐI, chờ Vercel 30–60 giây rồi kiểm tra sitemap tăng đúng số bài và một bài mới trả về 200.

# BÁO CÁO CUỐI

Ngắn gọn bằng tiếng Việt: số bài mỗi mục (nói rõ nếu thiếu và vì sao), vài đề tài nổi bật, tổng số bài của trang, kết quả build/trùng slug/kiểm tra web thật, và mục nào đang cạn đề tài.

Nhắc chị MỘT LẦN duy nhất, ngắn gọn, rằng bài do AI soạn và cần người rà lại trước khi chia sẻ rộng.