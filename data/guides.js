// 📚 KHO BÀI CẨM NANG — thêm bài mới = thêm 1 khối { ... } vào mảng này.
//
// ❗ LƯU Ý: 13 bài dưới đây là NỘI DUNG MẪU do AI soạn để trang có hình hài —
// chị hãy đọc lại và chỉnh cho đúng thực tế trước khi công bố.
//
// Cấu trúc 1 bài:
//   slug            – địa chỉ trang (không dấu, nối bằng gạch ngang, không trùng nhau)
//   title           – tiêu đề
//   excerpt         – mô tả ngắn hiện trên thẻ (1–2 câu)
//   readTimeMinutes – số phút đọc
//   category        – slug danh mục (xem data/categories.js)
//   author          – null, hoặc { name: "@tênngười", url: "https://..." } nếu nội dung
//                     lấy từ cộng đồng (PHẢI xin phép + ghi công như vậy)
//   quickAnswer     – trả lời nhanh "Bạn cần làm gì?"
//   prepare         – danh sách "Chuẩn bị gì trước?"
//   steps           – các bước [{ title, detail }]
//   notes           – "Điều cần lưu ý"
//   faq             – [{ q, a }]
//   sources         – [{ label, url }] nguồn tham khảo (có thể để [])

import { partA } from "./parts/partA.js";
import { partB } from "./parts/partB.js";
import { partC } from "./parts/partC.js";
// Nhóm bài theo chủ đề đang được quan tâm — cần rà lại định kỳ vì quy định hay đổi
import { xuHuong } from "./parts/xu-huong.js";
// Bài do bạn đọc gửi, tự thêm vào khi biên tập viên duyệt (xem HUONG-DAN-DUYET.md)
import community from "./parts/community.json";

const baseGuides = [
  {
    slug: "lam-lai-cccd-khi-bi-mat",
    title: "Làm lại CCCD khi bị mất",
    excerpt: "Bình tĩnh — báo mất, đặt lịch làm lại và chuẩn bị đúng giấy tờ là xong trong một buổi.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Đến công an phường/xã để báo mất và làm thủ tục cấp lại, hoặc khai trước trên ứng dụng VNeID/Cổng dịch vụ công nếu nơi bạn ở hỗ trợ. Mang theo giấy tờ tuỳ thân còn lại nếu có.",
    prepare: [
      "Giấy tờ tuỳ thân khác nếu còn (hộ chiếu, bằng lái xe...)",
      "Điện thoại đã cài VNeID (nếu bạn có tài khoản định danh)",
      "Một buổi rảnh — tránh sáng đầu tuần cho đỡ đông",
    ],
    steps: [
      {
        title: "Trình báo mất",
        detail:
          "Đến công an phường/xã nơi thường trú hoặc tạm trú, báo mất CCCD và hỏi thủ tục cấp lại — mỗi nơi có thể hướng dẫn hơi khác nhau.",
      },
      {
        title: "Điền tờ khai cấp lại",
        detail: "Điền theo mẫu tại chỗ, hoặc khai online trước trên Cổng dịch vụ công để tiết kiệm thời gian.",
      },
      {
        title: "Chụp ảnh, lấy vân tay",
        detail: "Làm ngay tại quầy theo hướng dẫn của cán bộ, chỉ mất vài phút.",
      },
      {
        title: "Nhận giấy hẹn và chờ thẻ",
        detail:
          "Giữ kỹ giấy hẹn. Nhiều nơi cho đăng ký nhận thẻ qua bưu điện để khỏi phải quay lại lần nữa.",
      },
    ],
    notes: [
      "Lệ phí và thời gian trả thẻ thay đổi theo quy định từng thời điểm — hỏi trực tiếp tại quầy cho chắc.",
      "Trong lúc chờ, giấy hẹn kèm hộ chiếu/bằng lái vẫn dùng tạm được trong nhiều tình huống.",
    ],
    faq: [
      {
        q: "Mất CCCD có bị phạt không?",
        a: "Báo mất và làm lại sớm thì thường chỉ tốn lệ phí cấp lại — cứ hỏi thẳng cán bộ tiếp nhận cho yên tâm.",
      },
      {
        q: "Đang ở trọ xa quê, làm ở nơi tạm trú được không?",
        a: "Nhiều nơi hiện nhận làm CCCD không phụ thuộc hộ khẩu — mang giấy tờ đến điểm gần nhất hỏi trước khi xếp hàng.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "lam-ho-chieu-online-lan-dau",
    title: "Làm hộ chiếu online lần đầu",
    excerpt: "Khai hồ sơ trên Cổng dịch vụ công, nộp phí online và nhận hộ chiếu tại nhà qua bưu điện.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Đăng nhập Cổng dịch vụ công bằng tài khoản định danh (VNeID), chọn thủ tục cấp hộ chiếu phổ thông, tải ảnh chân dung nền trắng đúng chuẩn, đóng lệ phí online và chọn nhận kết quả qua bưu điện.",
    prepare: [
      "Tài khoản VNeID đã kích hoạt",
      "Ảnh chân dung nền trắng chụp trong 6 tháng (chụp ở tiệm cho chắc chuẩn)",
      "Thẻ ngân hàng/ví điện tử để đóng lệ phí online",
    ],
    steps: [
      { title: "Đăng nhập Cổng dịch vụ công", detail: "Dùng tài khoản định danh điện tử VNeID của bạn để đăng nhập." },
      {
        title: "Chọn thủ tục cấp hộ chiếu",
        detail: "Tìm \"cấp hộ chiếu phổ thông\", chọn nơi tiếp nhận phù hợp với nơi bạn đang ở.",
      },
      {
        title: "Điền tờ khai và tải ảnh",
        detail: "Khai đúng thông tin CCCD, tải ảnh nền trắng đúng chuẩn — ảnh sai chuẩn là lý do bị trả hồ sơ nhiều nhất.",
      },
      { title: "Đóng lệ phí online", detail: "Thanh toán ngay trên cổng và chọn nhận hộ chiếu qua bưu điện về địa chỉ của bạn." },
      { title: "Theo dõi trạng thái hồ sơ", detail: "Kiểm tra tiến độ trong mục hồ sơ của bạn; có vấn đề hệ thống sẽ ghi rõ lý do." },
    ],
    notes: [
      "Một số trường hợp vẫn được hẹn đến chụp ảnh/đối chiếu trực tiếp — làm theo thông báo của hệ thống.",
      "Thời gian xử lý thay đổi theo đợt, nên làm sớm trước chuyến đi ít nhất vài tuần.",
    ],
    faq: [
      {
        q: "Chưa có tài khoản VNeID thì sao?",
        a: "Ra công an phường/xã kích hoạt định danh điện tử trước, hoặc đến trực tiếp nơi làm hộ chiếu để nộp hồ sơ giấy.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "di-kham-benh-vien-cong-lan-dau",
    title: "Đi khám bệnh viện công lần đầu",
    excerpt: "Bệnh viện đông và rộng dễ ngợp — nắm đúng trình tự các quầy là mọi thứ trơn tru.",
    readTimeMinutes: 3,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Mang CCCD (và thẻ BHYT/app nếu có), đến sớm, tìm quầy đăng ký gần cổng để lấy số, rồi đi theo hướng dẫn trên phiếu từng chặng. Không rõ gì cứ hỏi quầy hướng dẫn — đó là việc của họ.",
    prepare: [
      "CCCD + thẻ BHYT (hoặc app BHYT điện tử) nếu có",
      "Ít tiền tạm ứng phòng khi cần xét nghiệm",
      "Nếu nghĩ sẽ xét nghiệm máu: hỏi trước có cần nhịn ăn sáng không",
    ],
    steps: [
      { title: "Lấy số ở quầy đăng ký", detail: "Quầy thường nằm ngay gần cổng chính. Đưa CCCD và nói bạn muốn khám gì." },
      {
        title: "Chọn hình thức khám",
        detail: "Có BHYT thì đăng ký khám BHYT, không có thì khám dịch vụ — nhân viên sẽ hỏi và hướng dẫn.",
      },
      { title: "Đóng phí và nhận phiếu khám", detail: "Trên phiếu có số phòng khám và số thứ tự của bạn." },
      { title: "Đến phòng khám, chờ gọi tên", detail: "Vào khám thì mô tả thẳng triệu chứng: đau gì, từ bao giờ, đã uống thuốc gì." },
      {
        title: "Làm xét nghiệm nếu được chỉ định",
        detail: "Đóng phí xét nghiệm, làm xong quay lại phòng khám ban đầu nghe kết luận và nhận toa thuốc.",
      },
    ],
    notes: [
      "Sáng thứ Hai thường đông nhất — tránh được thì tránh.",
      "Giữ tất cả phiếu, hoá đơn cho đến khi xong buổi khám.",
      "Nhiều bệnh viện có app đặt lịch trước — đặt được thì đỡ chờ bốc số.",
    ],
    faq: [
      { q: "Không có BHYT có khám được không?", a: "Được — chọn khám dịch vụ, chi phí tự trả và thường được báo trước." },
      { q: "Nên đến lúc mấy giờ?", a: "Trước giờ mở quầy 15–30 phút là đẹp; đi càng muộn số thứ tự càng xa." },
    ],
    sources: [],
  },

  {
    slug: "mua-thuoc-o-nha-thuoc-noi-gi-voi-duoc-si",
    title: "Mua thuốc ở nhà thuốc: nói gì với dược sĩ",
    excerpt: "Không cần nhớ tên thuốc — chỉ cần mô tả đúng triệu chứng và trả lời vài câu hỏi.",
    readTimeMinutes: 1,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Mô tả triệu chứng + bị từ bao giờ, báo thuốc đang dùng và tiền sử dị ứng (nếu có), rồi hỏi kỹ cách dùng. Thuốc kê đơn thì phải có toa của bác sĩ — dược sĩ từ chối bán là đúng.",
    prepare: ["Nhớ lại: triệu chứng bắt đầu khi nào, đã uống gì chưa", "Mang toa bác sĩ nếu mua thuốc kê đơn"],
    steps: [
      { title: "Mô tả triệu chứng cụ thể", detail: "Ví dụ: \"Em ho khan 3 ngày, không sốt, đêm ho nhiều hơn\" — càng cụ thể càng được tư vấn đúng." },
      { title: "Báo thuốc đang dùng và dị ứng", detail: "Rất quan trọng để tránh trùng thuốc hoặc tương tác thuốc." },
      { title: "Hỏi kỹ cách dùng", detail: "Uống mấy lần/ngày, trước hay sau ăn, dùng tối đa mấy ngày thì ngưng." },
      { title: "Hỏi dấu hiệu phải đi khám", detail: "Nếu sau X ngày không đỡ, hoặc xuất hiện dấu hiệu nào thì phải đến bác sĩ ngay." },
    ],
    notes: [
      "Nội dung này chỉ giúp bạn giao tiếp ở nhà thuốc, không thay thế tư vấn y khoa.",
      "Triệu chứng nặng (sốt cao, khó thở, đau dữ dội...) — đi khám ngay, đừng tự mua thuốc.",
    ],
    faq: [{ q: "Nhà thuốc nào đáng tin?", a: "Ưu tiên nhà thuốc đạt chuẩn có dược sĩ tư vấn, hoá đơn rõ ràng; mua lẻ ở đâu quen càng tốt." }],
    sources: [],
  },

  {
    slug: "thay-nhot-xe-may-dung-luc",
    title: "Thay nhớt xe máy đúng lúc",
    excerpt: "Xe chạy êm hay ì phụ thuộc nhiều vào chuyện nhỏ này — và cách để không bị quên.",
    readTimeMinutes: 1,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Thay nhớt định kỳ theo số km (tham khảo: mỗi 2.000–3.000 km với nhớt thường, tuỳ xe và loại nhớt). Ra tiệm uy tín, yêu cầu khui chai nhớt trước mặt mình, và chụp lại số km để nhớ lần sau.",
    prepare: ["Nhớ (hoặc chụp) số km hiện tại trên đồng hồ xe", "Biết xe mình là xe số hay tay ga"],
    steps: [
      { title: "Ghi lại mốc km mỗi lần thay", detail: "Chụp màn hình đồng hồ km ngay sau khi thay — lần sau nhìn lại là biết đến hạn chưa." },
      { title: "Chọn tiệm uy tín", detail: "Tiệm quen, cửa hàng chính hãng, hoặc nơi bạn bè giới thiệu. Hỏi giá trước khi thay." },
      { title: "Yêu cầu khui nhớt trước mặt", detail: "Chai nguyên seal khui tại chỗ — tránh bị thay nhớt trôi nổi." },
      { title: "Hỏi luôn mốc lần sau", detail: "Xe tay ga hỏi thêm về nhớt láp (nhớt hộp số) — thường vài lần thay nhớt máy mới cần 1 lần." },
    ],
    notes: [
      "Con số km chỉ là tham khảo — chạy nhiều đường ngập, kẹt xe thì nên thay sớm hơn; xem thêm sổ bảo dưỡng của hãng xe.",
      "Đừng đợi xe ì, nóng máy mới thay — lúc đó máy đã chịu thiệt rồi.",
    ],
    faq: [{ q: "Không nhớ lần cuối thay nhớt khi nào?", a: "Cứ ra tiệm thay luôn một lần rồi bắt đầu ghi mốc từ đó — coi như làm lại từ đầu." }],
    sources: [],
  },

  {
    slug: "xu-ly-khi-xe-thung-lop-giua-duong",
    title: "Xử lý khi xe thủng lốp giữa đường",
    excerpt: "Đừng cố chạy tiếp! Vài bước gọn để không hư vành xe và không bị chặt chém.",
    readTimeMinutes: 1,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Tấp vào lề chỗ an toàn, KHÔNG chạy tiếp bằng lốp xẹp (dễ hư vành), dắt bộ chậm rãi tìm tiệm gần nhất — tìm trên bản đồ với từ khoá \"vá xe gần đây\", và hỏi giá trước khi vá.",
    prepare: ["Điện thoại còn pin để tra bản đồ", "Một chút bình tĩnh — chuyện này ai đi xe cũng gặp"],
    steps: [
      { title: "Tấp lề an toàn", detail: "Bật xi nhan, giảm tốc từ từ, dừng ở nơi có lề rộng, tránh khúc cua và chỗ tối." },
      { title: "Kiểm tra nhanh", detail: "Lốp xẹp hẳn thì dắt bộ; chỉ non hơi thì có thể chạy rất chậm đến chỗ bơm gần nhất." },
      { title: "Tìm tiệm sửa xe", detail: "Tra bản đồ \"vá xe gần đây\" hoặc hỏi người dân xung quanh — tiệm vá xe ở Việt Nam thường không xa." },
      { title: "Hỏi giá trước khi làm", detail: "Vá thường và thay săm/lốp giá khác nhau — hỏi trước để không bị bất ngờ." },
    ],
    notes: [
      "Đêm khuya vắng: ưu tiên gọi người thân hoặc app cứu hộ/xe ôm chở đi thay vì dắt bộ đoạn dài.",
      "Nếu hay đi xa, cân nhắc mang theo bình xịt tự vá dùng khẩn cấp.",
    ],
    faq: [{ q: "Vá rồi có bền không?", a: "Vết thủng nhỏ vá đúng cách dùng bình thường; thủng lớn hoặc vá nhiều lần thì nên thay săm/lốp mới." }],
    sources: [],
  },

  {
    slug: "mo-tai-khoan-ngan-hang-dau-tien",
    title: "Mở tài khoản ngân hàng đầu tiên",
    excerpt: "15 phút với chiếc CCCD gắn chip — mở online ngay trên điện thoại, không cần ra quầy.",
    readTimeMinutes: 2,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Chọn một ngân hàng có app phổ biến, tải app chính chủ từ App Store/CH Play, mở tài khoản online bằng eKYC với CCCD gắn chip — hoặc ra quầy nếu thích được hướng dẫn tận tay.",
    prepare: ["CCCD gắn chip", "Điện thoại chính chủ có mạng", "Số điện thoại đang dùng lâu dài (sẽ gắn với tài khoản)"],
    steps: [
      { title: "Chọn ngân hàng", detail: "Cách đơn giản: hỏi bạn bè/người nhà đang dùng gì thuận tiện — chuyển khoản cùng hệ càng nhanh gọn." },
      { title: "Tải app chính chủ", detail: "Chỉ tải từ App Store/CH Play, kiểm tra đúng tên ngân hàng phát hành — tuyệt đối không cài từ link lạ." },
      { title: "Mở tài khoản bằng eKYC", detail: "Làm theo app: chụp CCCD 2 mặt, quét NFC (áp CCCD vào lưng điện thoại) và quay video khuôn mặt." },
      { title: "Đặt mật khẩu và bật bảo mật", detail: "Bật xác thực vân tay/khuôn mặt, ghi nhớ mật khẩu — không lưu trong ghi chú điện thoại." },
      { title: "Thử giao dịch nhỏ", detail: "Nhờ người thân chuyển thử 10–20 nghìn để chắc tài khoản nhận tiền bình thường." },
    ],
    notes: [
      "Hỏi rõ biểu phí: phí duy trì, phí chuyển khoản, phí thẻ — nhiều ngân hàng đang miễn phí hết, đừng ngại so sánh.",
      "KHÔNG BAO GIỜ đọc mã OTP cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng.",
    ],
    faq: [
      { q: "eKYC bị kẹt ở bước quét NFC?", a: "Tháo ốp lưng, áp CCCD sát mặt lưng điện thoại và giữ yên vài giây; vẫn kẹt thì ra quầy mở trực tiếp." },
    ],
    sources: [],
  },

  {
    slug: "bat-dau-ghi-chep-chi-tieu",
    title: "Bắt đầu ghi chép chi tiêu",
    excerpt: "Không cần app xịn hay Excel phức tạp — chỉ cần thói quen 5 giây mỗi lần móc ví.",
    readTimeMinutes: 2,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Chọn MỘT công cụ duy nhất (app ghi chú, sổ tay, hay app quản lý chi tiêu), ghi ngay mỗi khi tiêu tiền, cuối tuần cộng lại theo 3 nhóm: bắt buộc – mong muốn – để dành.",
    prepare: ["Chọn 1 công cụ bạn chắc chắn mở mỗi ngày (ghi chú điện thoại là đủ)", "Quyết tâm duy trì đúng 30 ngày đầu"],
    steps: [
      { title: "Ghi ngay khi tiêu", detail: "Chỉ cần \"35k – cơm trưa\". Ghi liền trong 5 giây, đừng để dồn cuối ngày rồi quên." },
      { title: "Cuối tuần cộng theo 3 nhóm", detail: "Bắt buộc (ăn, ở, đi lại) – Mong muốn (cà phê, mua sắm) – Để dành. Chưa cần tỉ lệ chuẩn, cứ nhìn số thật." },
      { title: "Cuối tháng nhìn lại 1 lần", detail: "Tự hỏi: khoản nào làm mình bất ngờ nhất? Tháng sau chỉnh đúng MỘT thứ thôi." },
      { title: "Lặp lại và nâng dần", detail: "Quen rồi hãy nghĩ đến app chuyên dụng, ngân sách từng nhóm, hay quỹ dự phòng." },
    ],
    notes: [
      "Đừng cầu toàn phân loại chi li — ghi được đều đặn quan trọng hơn ghi đẹp.",
      "Quên 1-2 ngày không sao, đừng bỏ luôn; ghi tiếp từ hôm nay là được.",
    ],
    faq: [{ q: "Dùng app nào tốt?", a: "App nào bạn mở mỗi ngày là app tốt nhất. Ghi chú mặc định của điện thoại là khởi đầu hoàn hảo." }],
    sources: [],
  },

  {
    slug: "thue-tro-lan-dau-kiem-tra-gi-truoc-khi-coc",
    title: "Thuê trọ lần đầu: kiểm tra gì trước khi cọc",
    excerpt: "Tiền cọc là chỗ dễ mất tiền oan nhất — checklist này giúp bạn xem phòng như người có kinh nghiệm.",
    readTimeMinutes: 3,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Trước khi đặt cọc: xem phòng trực tiếp (cả ban ngày lẫn buổi tối càng tốt), hỏi rõ mọi khoản phí, đọc kỹ điều khoản cọc trong hợp đồng, chụp ảnh hiện trạng — và tuyệt đối không chuyển khoản \"giữ chỗ\" khi chưa gặp chủ nhà thật.",
    prepare: [
      "Hẹn xem phòng trực tiếp, rủ thêm 1 người đi cùng",
      "Danh sách câu hỏi (điện, nước, rác, wifi, giữ xe, giờ giấc)",
      "Điện thoại để chụp ảnh hiện trạng",
    ],
    steps: [
      { title: "Kiểm tra thực tế phòng", detail: "Thử vòi nước (mạnh/yếu), ổ điện, sóng điện thoại, cửa sổ thoáng không, có ẩm mốc không." },
      { title: "Xem an ninh và sinh hoạt", detail: "Chỗ để xe, khoá cổng, camera, giờ đóng cổng, hàng xóm xung quanh ồn hay yên." },
      { title: "Hỏi rõ TẤT CẢ các khoản tiền", detail: "Giá phòng, điện bao nhiêu 1 số, nước tính theo người hay đồng hồ, rác, wifi, giữ xe — cộng lại mới là chi phí thật." },
      { title: "Đọc kỹ điều khoản cọc", detail: "Cọc bao nhiêu, khi nào được trả lại, báo trước bao lâu khi chuyển đi, điều kiện nào bị trừ cọc." },
      { title: "Chụp ảnh hiện trạng + lấy biên nhận", detail: "Chụp mọi vết hỏng có sẵn, và tiền cọc phải có biên nhận/ghi trong hợp đồng có chữ ký hai bên." },
    ],
    notes: [
      "Tin đăng giá rẻ bất thường + đòi chuyển khoản giữ chỗ gấp = dấu hiệu lừa đảo phổ biến.",
      "Tiền cọc thường tương đương 1 tháng tiền phòng — nơi đòi cao hơn nhiều thì nên hỏi lý do.",
    ],
    faq: [
      { q: "Cọc rồi đổi ý có lấy lại được không?", a: "Tuỳ thoả thuận trong biên nhận/hợp đồng — vì vậy phải ghi rõ điều kiện hoàn cọc TRƯỚC khi đưa tiền." },
      { q: "Hợp đồng miệng có sao không?", a: "Rủi ro cao khi có tranh chấp. Luôn yêu cầu giấy trắng mực đen, dù chỉ là tờ thoả thuận đơn giản." },
    ],
    sources: [],
  },

  {
    slug: "chuyen-tro-gon-trong-mot-ngay",
    title: "Chuyển trọ gọn trong một ngày",
    excerpt: "Bí quyết không nằm ở hôm chuyển, mà ở một tuần trước đó.",
    readTimeMinutes: 2,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Bắt đầu gom và vứt bớt đồ từ 1 tuần trước, đóng thùng dán nhãn theo khu vực, chốt điện nước với chủ cũ (chụp công tơ), và để riêng một túi \"đồ sống còn\" dùng ngay đêm đầu ở chỗ mới.",
    prepare: ["Thùng carton + băng keo + bút lông", "Chốt phương tiện: tự chở, thuê xe ba gác hay xe tải nhỏ", "Báo chủ trọ cũ đúng hạn theo hợp đồng"],
    steps: [
      { title: "Thanh lọc đồ trước 1 tuần", detail: "Cái gì 6 tháng không đụng tới: cho, bán, hoặc bỏ. Chuyển ít đồ = đỡ mệt một nửa." },
      { title: "Đóng thùng theo khu vực, dán nhãn", detail: "\"Bếp\", \"Quần áo\", \"Giấy tờ\"... Đồ quý giá và giấy tờ luôn mang theo người." },
      { title: "Chuẩn bị túi đồ sống còn", detail: "Sạc, đồ vệ sinh cá nhân, 1 bộ đồ, thuốc — để đêm đầu không phải bới thùng." },
      { title: "Chốt sổ với chủ cũ", detail: "Chụp số công tơ điện nước, thanh toán nốt, dọn sạch phòng rồi hẹn nhận lại tiền cọc." },
      { title: "Đến nơi mới: lắp giường trước", detail: "Ưu tiên chỗ ngủ và nhà tắm dùng được ngay — mọi thứ khác từ từ tính." },
    ],
    notes: ["Chuyển buổi sáng ngày thường thường dễ thuê xe và đỡ kẹt hơn cuối tuần.", "Đọc lại điều khoản trả phòng để không mất cọc vì báo trễ."],
    faq: [{ q: "Thuê xe chở đồ kiểu gì?", a: "Đồ ít: xe ôm/ba gác qua app hoặc hỏi tiệm gần nhà. Đồ nhiều: tìm \"xe tải chở đồ chuyển trọ\" và hỏi giá 2-3 nơi." }],
    sources: [],
  },

  {
    slug: "di-sieu-thi-mua-do-tuoi-lan-dau",
    title: "Đi siêu thị mua đồ tươi lần đầu",
    excerpt: "Chọn thịt cá rau củ không cần kinh nghiệm bà nội trợ — chỉ cần vài mẹo nhìn-là-biết.",
    readTimeMinutes: 2,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Đi với danh sách món định nấu, lấy hàng khô trước – đồ lạnh sau cùng, xem kỹ hạn dùng và so giá theo đơn vị (giá/kg). Mới tập nấu thì mua ở siêu thị dễ hơn chợ vì có nhãn tên từng loại.",
    prepare: ["Danh sách món ăn 2-3 ngày tới", "Ăn nhẹ trước khi đi (đói bụng là mua lung tung thật đấy)"],
    steps: [
      { title: "Lên danh sách theo món", detail: "Định nấu gì thì liệt kê nguyên liệu nấy — tránh mua cảm hứng rồi bỏ tủ lạnh." },
      { title: "Đi theo thứ tự khôn ngoan", detail: "Hàng khô, gia vị trước; thịt cá, đồ đông lạnh lấy sau cùng để không bị tan lạnh." },
      { title: "Nhìn nhãn: hạn dùng + xuất xứ", detail: "Đồ tươi đóng khay thường có ngày đóng gói — càng gần hôm nay càng tốt." },
      { title: "So giá theo đơn vị", detail: "Nhìn dòng \"giá/kg\" hoặc \"giá/100g\" trên kệ để so sánh thật, đừng chỉ nhìn giá bịch to bịch nhỏ." },
      { title: "Về nhà chia phần luôn", detail: "Thịt cá chia từng bữa bỏ hộp/túi rồi cấp đông — nấu bữa nào rã đông bữa đó." },
    ],
    notes: ["Rau lá mua vừa đủ 2-3 ngày; củ quả trữ được lâu hơn.", "Hỏi nhân viên quầy tươi sống thoải mái — nhờ họ chặt, cắt, làm sạch được luôn."],
    faq: [{ q: "Siêu thị hay chợ rẻ hơn?", a: "Chợ thường rẻ hơn nếu biết chọn và trả giá; mới bắt đầu thì siêu thị dễ hơn, quen rồi ra chợ sau." }],
    sources: [],
  },

  {
    slug: "ngay-dau-nhan-viec-can-chuan-bi-gi",
    title: "Ngày đầu nhận việc cần chuẩn bị gì",
    excerpt: "Hồ sơ đầy đủ + vài thói quen nhỏ giúp tuần đầu đi làm suôn sẻ hơn hẳn.",
    readTimeMinutes: 2,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Chuẩn bị sẵn giấy tờ HR yêu cầu (CCCD, bằng cấp, số tài khoản...), đọc kỹ hợp đồng trước khi ký, đến sớm 10–15 phút ngày đầu, và mạnh dạn hỏi người hướng dẫn trực tiếp của mình là ai.",
    prepare: [
      "Bản photo CCCD, bằng cấp/chứng chỉ theo yêu cầu HR",
      "Số tài khoản ngân hàng nhận lương",
      "Sổ/mã số BHXH nếu từng đi làm trước đó",
    ],
    steps: [
      { title: "Hỏi HR danh sách giấy tờ và hạn nộp", detail: "Hỏi một lần cho đủ, nộp một lần cho xong — đỡ bị nhắc nhiều lần." },
      { title: "Đọc kỹ hợp đồng trước khi ký", detail: "Chú ý: lương thử việc, thời gian thử việc, giờ làm, phụ cấp, ngày phép. Chỗ nào mơ hồ — hỏi ngay khi chưa ký." },
      { title: "Ngày đầu: đến sớm 10–15 phút", detail: "Chào hỏi, xác định người hướng dẫn trực tiếp của mình và cách liên lạc nhanh với họ." },
      { title: "Ghi chú mọi thứ trong tuần đầu", detail: "Tên người, quy trình, tài khoản được cấp — ghi lại hết, không ai chê người mới ghi chép nhiều." },
      { title: "Cuối tuần đầu: hỏi kỳ vọng", detail: "Hỏi quản lý: \"Trong 1 tháng đầu, em làm tốt điều gì thì được xem là ổn?\" — câu hỏi ghi điểm và cực kỳ hữu ích." },
    ],
    notes: ["Giữ một bản hợp đồng có chữ ký cho riêng mình.", "Chưa rõ về BHXH, thuế thu nhập? Cứ hỏi HR — trả lời là việc của họ, không ai đánh giá cả."],
    faq: [{ q: "Thử việc có được đóng bảo hiểm không?", a: "Tuỳ thoả thuận và quy định hiện hành — hỏi thẳng HR ngay từ đầu để rõ ràng quyền lợi." }],
    sources: [],
  },

  {
    slug: "di-may-bay-lan-dau-tu-a-den-z",
    title: "Đi máy bay lần đầu: từ A đến Z",
    excerpt: "Từ lúc đặt vé đến lúc ngồi vào ghế — trình tự đầy đủ để không bỡ ngỡ ở sân bay.",
    readTimeMinutes: 3,
    category: "khac",
    author: null,
    quickAnswer:
      "Check-in online khi hãng mở (thường 24h trước giờ bay), đến sân bay trước 1,5–2 tiếng với chuyến nội địa, mang CCCD, rồi đi theo trình tự: ký gửi hành lý (nếu có) → kiểm tra an ninh → tìm cửa ra máy bay → lên máy bay theo số ghế.",
    prepare: [
      "CCCD còn hạn (giấy tờ quan trọng nhất!)",
      "Vé/mã đặt chỗ lưu trong điện thoại + chụp màn hình phòng mất mạng",
      "Hành lý đúng quy định: chai lọ >100ml phải để vali ký gửi; sạc dự phòng phải xách tay",
    ],
    steps: [
      { title: "Check-in online trước", detail: "Làm trên app/web của hãng khi mở check-in, chọn ghế và lưu thẻ lên máy bay điện tử — đỡ xếp hàng ở quầy." },
      { title: "Đến sân bay sớm", detail: "Nội địa: trước 1,5–2 tiếng. Nhìn bảng thông tin để biết quầy của hãng mình ở khu nào." },
      { title: "Ký gửi hành lý (nếu có)", detail: "Ra quầy hãng, đưa CCCD, đặt vali lên cân. Chỉ xách tay thì bỏ qua bước này." },
      { title: "Qua kiểm tra an ninh", detail: "Bỏ điện thoại, laptop, chìa khoá, thắt lưng vào khay; nước uống phải bỏ lại trước khi qua." },
      { title: "Tìm cửa ra máy bay (gate)", detail: "Số gate in trên thẻ lên máy bay và hiện trên màn hình — gate có thể ĐỔI, chú ý nghe loa thông báo." },
      { title: "Lên máy bay theo số ghế", detail: "Xếp hàng khi được gọi, đưa thẻ + CCCD, tìm đúng số ghế (17A = hàng 17, ghế cạnh cửa sổ phía A)." },
    ],
    notes: [
      "Cửa lên máy bay thường ĐÓNG trước giờ cất cánh 15–30 phút — đừng la cà quán xá quên giờ.",
      "Tên trên vé phải khớp CCCD từng chữ — kiểm tra ngay lúc đặt.",
    ],
    faq: [
      { q: "Lỡ đến trễ thì sao?", a: "Chạy thẳng đến quầy hãng báo ngay — có thể được đổi chuyến sau (thường mất phí), chậm nhưng báo sớm vẫn hơn." },
      { q: "Ngồi cạnh cửa thoát hiểm có sao không?", a: "Được thêm chỗ để chân nhưng phải nghe hướng dẫn hỗ trợ thoát hiểm — tiếp viên sẽ dặn cụ thể." },
    ],
    sources: [],
  },
];

// Đóng dấu ngày đăng cho cả nhóm bài. Bài nào tự có publishedAt riêng thì
// giữ nguyên ngày của nó (nhờ ...g đặt sau) — sửa bài thì nhớ cập nhật ngày.
const stamp = (list, date) => list.map((g) => ({ publishedAt: date, ...g }));

// Gộp bài gốc + 3 phần do AI soạn (data/parts/), xếp alphabet theo slug
// (giống cách trang tham khảo sắp xếp kho bài)
export const guides = [
  ...stamp(baseGuides, "2026-08-11"),
  ...stamp(partA, "2026-08-11"),
  ...stamp(partB, "2026-08-11"),
  ...stamp(partC, "2026-08-11"),
  ...stamp(xuHuong, "2026-08-12"),
  ...community, // bài cộng đồng đã có sẵn ngày do máy đóng dấu lúc duyệt
].sort((a, b) => a.slug.localeCompare(b.slug, "en"));

export const guideMap = Object.fromEntries(guides.map((g) => [g.slug, g]));
