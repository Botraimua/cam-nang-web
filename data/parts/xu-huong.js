// Phần XU HƯỚNG — các chủ đề đang được quan tâm nhất, viết tháng 8/2026.
//
// ❗ Đây là nhóm bài "hạn dùng ngắn": quy định, mức phạt, thủ tục có thể đổi.
//    Nên rà lại mỗi vài tháng, cập nhật hoặc gỡ bài đã lỗi thời.
//    Mỗi bài đều có mục sources trỏ tới nguồn chính thống để đối chiếu.

export const xuHuong = [
  {
    slug: "sap-nhap-tinh-co-phai-doi-can-cuoc-khong",
    title: "Sáp nhập tỉnh: có bắt buộc đổi căn cước không?",
    excerpt:
      "Câu trả lời ngắn gọn: không bắt buộc. Giấy tờ cũ còn hạn vẫn dùng bình thường — nhưng có vài trường hợp nên đổi.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Thẻ căn cước và các giấy tờ cấp theo địa danh cũ, nếu còn hạn thì vẫn sử dụng bình thường, không bắt buộc phải đi đổi. Ai muốn cập nhật cho khớp địa chỉ mới thì làm ngay trên ứng dụng VNeID — chọn đúng lý do liên quan đến sắp xếp đơn vị hành chính thì thường được miễn lệ phí.",
    prepare: [
      "Điện thoại đã cài VNeID và đăng nhập được tài khoản định danh mức 2",
      "Kiểm tra thẻ căn cước của bạn còn hạn hay sắp hết hạn",
      "Nếu sắp làm thủ tục nhà đất, vay vốn hay xuất nhập cảnh: hỏi trước nơi tiếp nhận xem họ có yêu cầu địa chỉ mới không",
    ],
    steps: [
      {
        title: "Đừng vội đi xếp hàng",
        detail:
          "Quy định hiện hành cho phép dùng tiếp giấy tờ đã cấp trước khi sắp xếp địa giới, miễn là còn hạn. Đổi hay không là quyền của bạn.",
      },
      {
        title: "Kiểm tra thông tin trong VNeID",
        detail:
          "Mở ứng dụng, xem mục thông tin cá nhân đã hiển thị địa danh mới chưa. Nhiều trường hợp hệ thống tự cập nhật, bạn không phải làm gì.",
      },
      {
        title: "Nếu muốn đổi, gửi đề nghị ngay trên ứng dụng",
        detail:
          "Chọn thủ tục cấp đổi thẻ căn cước, khai lý do đúng là do sắp xếp hoặc điều chỉnh đơn vị hành chính — đây là chỗ quyết định việc bạn có được miễn lệ phí hay không.",
      },
      {
        title: "Theo dõi hồ sơ và nhận thẻ",
        detail:
          "Trạng thái hồ sơ hiện trong ứng dụng. Có thể chọn nhận thẻ qua bưu điện để khỏi phải đi lại.",
      },
    ],
    notes: [
      "Thẻ sắp hết hạn thì nên đổi luôn một thể, vừa cập nhật địa chỉ vừa gia hạn, đỡ đi hai lần.",
      "Một số nơi tiếp nhận hồ sơ (ngân hàng, công chứng, nhà đất) có thể hỏi giấy xác nhận thông tin cư trú — cứ hỏi trước cho chắc thay vì đoán.",
      "Quy định và lệ phí có thể thay đổi theo thời điểm; xem lại nguồn chính thống bên dưới trước khi đi.",
    ],
    faq: [
      {
        q: "Sổ đỏ, hợp đồng ghi địa chỉ cũ có phải làm lại không?",
        a: "Giấy tờ đã cấp hợp lệ vẫn có giá trị. Khi cần giao dịch, nơi tiếp nhận thường đối chiếu qua dữ liệu dân cư — nhưng mỗi nơi mỗi khác, nên hỏi trực tiếp nơi bạn sắp làm thủ tục.",
      },
      {
        q: "Đổi thẻ có mất tiền không?",
        a: "Nếu đổi vì lý do sắp xếp đơn vị hành chính và làm trực tuyến, thường được miễn lệ phí. Chọn sai lý do thì có thể vẫn bị thu — nên đọc kỹ bước khai lý do.",
      },
    ],
    sources: [
      {
        label: "VnExpress — Cách đổi địa chỉ trên thẻ căn cước cho khớp địa danh mới",
        url: "https://vnexpress.net/cach-doi-dia-chi-tren-the-can-cuoc-de-khop-voi-dia-danh-hanh-chinh-moi-4926081.html",
      },
      { label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" },
    ],
  },

  {
    slug: "lam-thu-tuc-can-cuoc-ngay-tren-vneid",
    title: "Làm thủ tục căn cước ngay trên VNeID",
    excerpt:
      "Cấp mới, cấp đổi, cấp lại giờ có thể khai thẳng trên điện thoại — đỡ được kha khá thời gian xếp hàng.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Mở VNeID bằng tài khoản định danh mức 2, vào mục thủ tục hành chính về căn cước, chọn loại việc cần làm (cấp mới, cấp đổi hoặc cấp lại), khai theo hướng dẫn và nộp lệ phí ngay trên ứng dụng nếu có. Một số trường hợp vẫn được hẹn đến chụp ảnh và lấy vân tay trực tiếp.",
    prepare: [
      "Tài khoản VNeID mức 2 đã kích hoạt",
      "Thông tin thẻ cũ nếu là cấp đổi hoặc cấp lại",
      "Thẻ ngân hàng hoặc ví điện tử để nộp lệ phí khi hệ thống yêu cầu",
    ],
    steps: [
      {
        title: "Đăng nhập và tìm đúng mục",
        detail:
          "Trong ứng dụng, tìm nhóm thủ tục hành chính rồi chọn phần liên quan tới thẻ căn cước. Giao diện có thể đổi theo từng bản cập nhật, cứ đọc tên mục cho kỹ.",
      },
      {
        title: "Chọn đúng loại việc",
        detail:
          "Cấp mới, cấp đổi (hết hạn, sai thông tin, thay đổi địa giới) hay cấp lại (mất, hỏng) — chọn sai là hồ sơ bị trả về.",
      },
      {
        title: "Kiểm tra kỹ thông tin hiển thị",
        detail:
          "Hệ thống lấy sẵn dữ liệu từ cơ sở dữ liệu dân cư. Thấy sai chỗ nào thì báo ngay tại bước này, đừng gửi rồi mới sửa.",
      },
      {
        title: "Nộp hồ sơ, đóng lệ phí và chọn cách nhận",
        detail: "Nên chọn nhận qua bưu điện về địa chỉ đang ở để khỏi phải quay lại.",
      },
      {
        title: "Theo dõi trạng thái",
        detail:
          "Hồ sơ chạy tới đâu hiện tới đó. Nếu được hẹn tới trực tiếp, mang theo giấy hẹn và giấy tờ tuỳ thân còn lại.",
      },
    ],
    notes: [
      "Chưa có tài khoản mức 2 thì phải ra công an phường hoặc xã kích hoạt trước, phần này không làm online được.",
      "Thời gian trả thẻ và lệ phí thay đổi theo từng thời điểm và địa phương — hỏi trực tiếp nơi tiếp nhận cho chắc.",
    ],
    faq: [
      {
        q: "Trẻ em có làm được trên ứng dụng không?",
        a: "Thủ tục cho trẻ em có quy định riêng và thường cần người đại diện làm cùng. Cứ hỏi công an phường, xã nơi bạn ở để được hướng dẫn đúng trường hợp.",
      },
    ],
    sources: [
      {
        label: "LuatVietnam — Hướng dẫn làm thủ tục thẻ căn cước qua VNeID",
        url: "https://luatvietnam.vn/hanh-chinh/huong-dan-lam-thu-tuc-cap-cap-doi-cap-lai-the-can-cuoc-qua-vneid-tu-15-3-2026-570-107698-article.html",
      },
      { label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" },
    ],
  },

  {
    slug: "giay-to-tren-vneid-khi-nao-dung-thay-ban-cung",
    title: "Giấy tờ trên VNeID: khi nào dùng thay bản cứng được?",
    excerpt:
      "Ví bớt dày đi nhiều nếu bạn biết giấy tờ nào đã tích hợp — và trường hợp nào vẫn nên mang bản giấy theo.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Ứng dụng VNeID đã tích hợp nhiều loại giấy tờ cá nhân và được dùng thay bản cứng khi làm thủ tục hành chính. Nhưng không phải nơi nào cũng chấp nhận trong mọi tình huống, nên với việc quan trọng vẫn nên mang bản giấy dự phòng.",
    prepare: [
      "Tài khoản định danh mức 2",
      "Điện thoại đủ pin và có mạng — hết pin giữa chừng là kẹt",
      "Đã thử mở phần giấy tờ trong ứng dụng ít nhất một lần trước khi cần dùng thật",
    ],
    steps: [
      {
        title: "Kiểm tra giấy tờ nào đã có sẵn",
        detail:
          "Mở mục ví giấy tờ trong ứng dụng để xem những gì đã được tích hợp cho tài khoản của bạn.",
      },
      {
        title: "Tập thao tác trước khi cần",
        detail:
          "Biết trước phải bấm mấy bước để hiện mã hoặc màn hình xác thực, đỡ luống cuống khi có người đang đợi.",
      },
      {
        title: "Khi làm thủ tục, hỏi thẳng nhân viên",
        detail:
          "Một câu đơn giản: dùng giấy tờ trên VNeID được không ạ. Được thì mở ra, không thì lấy bản giấy ra dùng.",
      },
      {
        title: "Giữ bản cứng cho việc quan trọng",
        detail:
          "Nhà đất, ngân hàng, xuất nhập cảnh, bệnh viện tuyến trên: mang theo bản giấy cho chắc, đỡ mất công đi lại.",
      },
    ],
    notes: [
      "Danh sách giấy tờ tích hợp được bổ sung dần theo từng bản cập nhật ứng dụng — thỉnh thoảng mở ra xem lại.",
      "Đừng đưa điện thoại đã mở khoá cho người lạ cầm; chỉ giơ màn hình cho họ xem.",
    ],
    faq: [
      {
        q: "Điện thoại hết pin giữa chừng thì sao?",
        a: "Đó chính là lý do nên có bản giấy hoặc ảnh chụp giấy tờ lưu sẵn, và mang theo sạc dự phòng khi đi làm thủ tục.",
      },
    ],
    sources: [
      {
        label: "LuatVietnam — Các loại giấy tờ được cập nhật trên VNeID",
        url: "https://luatvietnam.vn/linh-vuc-khac/cac-loai-giay-to-duoc-cap-nhat-tren-vneid-cap-nhat-moi-nhat-883-108980-article.html",
      },
    ],
  },

  {
    slug: "cho-tre-em-tren-o-to-quy-dinh-ghe-an-toan-moi",
    title: "Chở trẻ em trên ô tô: quy định ghế an toàn mới",
    excerpt:
      "Từ 15/8/2026 mức phạt đổi khác, nhưng có một lỗi vẫn bị phạt tiền nặng mà nhiều người tưởng đã được bỏ.",
    readTimeMinutes: 3,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Trẻ dưới 10 tuổi và cao dưới 1,35 m đi ô tô phải dùng thiết bị an toàn phù hợp. Từ 15/8/2026, xe gia đình và xe cá nhân không lắp ghế an toàn chỉ bị phạt cảnh cáo thay vì phạt tiền. NHƯNG để trẻ ngồi cùng hàng ghế với tài xế (trừ xe chỉ có một hàng ghế) thì vẫn bị phạt tiền, khoảng 800 nghìn đến 1 triệu đồng.",
    prepare: [
      "Đo chiều cao con và nhớ số tuổi — hai mốc cần nhớ là dưới 10 tuổi và dưới 1,35 mét",
      "Xem xe nhà mình có mấy hàng ghế và có móc gài chuẩn cho ghế trẻ em không",
      "Ngân sách mua ghế: nhiều mẫu, giá chênh nhau khá xa, nên tham khảo trước",
    ],
    steps: [
      {
        title: "Nhớ hai mốc để biết con thuộc diện nào",
        detail:
          "Quy định áp dụng khi trẻ vừa dưới 10 tuổi vừa cao dưới 1,35 mét. Vượt một trong hai mốc thì cách áp dụng khác đi, cứ hỏi cho rõ nếu con bạn ở ngưỡng giữa.",
      },
      {
        title: "Chuyển con xuống hàng ghế sau",
        detail:
          "Đây là điều quan trọng nhất và cũng là lỗi vẫn bị phạt tiền. Xe chỉ có một hàng ghế là trường hợp ngoại lệ.",
      },
      {
        title: "Chọn thiết bị phù hợp lứa tuổi",
        detail:
          "Ghế cho bé nhỏ, đệm nâng cho bé lớn hơn. Chọn loại đạt quy chuẩn kỹ thuật và lắp đúng chiều theo hướng dẫn của nhà sản xuất.",
      },
      {
        title: "Lắp thử và kiểm tra độ chắc",
        detail:
          "Lắp xong lắc thử: ghế không được xê dịch nhiều. Lắp lỏng thì có ghế cũng như không.",
      },
      {
        title: "Xe kinh doanh vận tải thì khác",
        detail:
          "Quy định phạt cảnh cáo nêu trên không áp dụng cho xe kinh doanh vận tải — nhóm này có yêu cầu và mức phạt riêng, nặng hơn.",
      },
    ],
    notes: [
      "Phạt cảnh cáo không có nghĩa là quy định bị bỏ: yêu cầu dùng thiết bị an toàn vẫn còn nguyên, chỉ là cách xử phạt nhẹ đi.",
      "Quan trọng hơn chuyện phạt: ghế an toàn là để bảo vệ con lúc phanh gấp hoặc va chạm.",
      "Mức phạt và văn bản áp dụng có thể tiếp tục thay đổi — đối chiếu nguồn bên dưới trước khi tin một tin nhắn lan truyền nào đó.",
    ],
    faq: [
      {
        q: "Vậy từ 15/8 không cần mua ghế nữa đúng không?",
        a: "Không đúng. Quy định vẫn yêu cầu dùng thiết bị an toàn, chỉ là mức xử phạt với xe gia đình chuyển thành cảnh cáo. Bỏ ghế là bỏ lớp bảo vệ cho con.",
      },
      {
        q: "Bé ngồi lòng người lớn ở ghế sau có được không?",
        a: "Không nên. Khi va chạm, người lớn không thể giữ nổi trẻ, và túi khí có thể gây nguy hiểm thêm. Hãy dùng thiết bị chuyên dụng.",
      },
    ],
    sources: [
      {
        label: "Thư viện pháp luật — Quy định ghế trẻ em trên ô tô và mức phạt từ 15/8/2026",
        url: "https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/chinh-sach-moi/116168/bo-quy-dinh-phat-tien-loi-khong-co-ghe-tre-em-tren-xe-o-to-tu-15-8-2026-thay-bang-phat-canh-cao",
      },
      {
        label: "Thanh Niên — Từ 15/8 xe gia đình không lắp ghế trẻ em không còn bị phạt tiền",
        url: "https://thanhnien.vn/tu-158-xe-gia-dinh-khong-lap-ghe-tre-em-khong-con-bi-phat-tien-185260630135047282.htm",
      },
    ],
  },

  {
    slug: "cuoc-goi-video-deepfake-va-gia-danh-cong-an",
    title: "Cuộc gọi deepfake và chiêu giả danh công an",
    excerpt:
      "Kẻ lừa đảo giờ gọi được video có mặt và giọng người quen. Vài dấu hiệu nhận ra, và một nguyên tắc cứu bạn mọi lúc.",
    readTimeMinutes: 3,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Nguyên tắc cứu bạn trong mọi tình huống: cúp máy, rồi tự gọi lại bằng số bạn đã lưu hoặc số tổng đài chính thức. Cơ quan chức năng không làm việc và không yêu cầu chuyển tiền qua điện thoại. Càng bị hối thúc, càng phải chậm lại.",
    prepare: [
      "Lưu sẵn số tổng đài chính thức của ngân hàng bạn dùng",
      "Thống nhất với gia đình một câu hỏi riêng chỉ người nhà mới trả lời được",
      "Nhớ nguyên tắc: không đọc mã OTP cho bất kỳ ai, không cài ứng dụng theo link lạ",
    ],
    steps: [
      {
        title: "Nhận ra ba dấu hiệu quen thuộc",
        detail:
          "Tạo sợ hãi (doạ dính pháp luật, doạ khoá tài khoản), tạo khẩn cấp (phải làm ngay), và yêu cầu giữ bí mật (đừng kể ai). Đủ ba dấu hiệu này là gần như chắc chắn lừa đảo.",
      },
      {
        title: "Soi kỹ cuộc gọi video",
        detail:
          "Hình hay giật nhẹ, khuôn mặt cứng và ít biểu cảm, khẩu hình không khớp lời nói, chất lượng hình và tiếng kém bất thường, cuộc gọi rất ngắn rồi viện cớ mạng yếu.",
      },
      {
        title: "Cúp máy và gọi lại bằng số bạn tự tìm",
        detail:
          "Đây là bước quan trọng nhất. Đừng bấm gọi lại vào số vừa gọi tới, hãy dùng số đã lưu trong danh bạ hoặc số in trên thẻ ngân hàng.",
      },
      {
        title: "Hỏi câu chỉ người thật trả lời được",
        detail:
          "Một kỷ niệm chung, một chi tiết nhỏ trong nhà. Người giả sẽ lúng túng hoặc lảng sang chuyện khác.",
      },
      {
        title: "Lỡ chuyển tiền rồi thì báo ngay",
        detail:
          "Gọi tổng đài ngân hàng đề nghị hỗ trợ khẩn, rồi trình báo công an nơi bạn ở. Càng sớm càng có cơ hội chặn được dòng tiền.",
      },
    ],
    notes: [
      "Kẻ lừa đảo thường tránh giả người cực thân với bạn, vì dễ bị phát hiện — nên đừng chủ quan chỉ vì thấy mặt người quen sơ sơ.",
      "Đừng ngại làm phiền: gọi lại xác minh mất một phút, mất tiền thì mất nhiều hơn thế.",
      "Thủ đoạn đổi liên tục; thấy tình huống lạ thì hỏi người thân trước khi làm bất cứ điều gì với tiền.",
    ],
    faq: [
      {
        q: "Họ đọc đúng tên, số căn cước của tôi thì sao?",
        a: "Thông tin cá nhân có thể bị lộ từ nhiều nguồn, nên biết đúng thông tin không chứng minh họ là người thật. Cứ cúp máy và gọi lại số chính thức.",
      },
      {
        q: "Có nên cài ứng dụng họ gửi để hợp tác điều tra không?",
        a: "Tuyệt đối không. Đó là cách phổ biến để chiếm quyền điều khiển điện thoại và rút sạch tài khoản.",
      },
    ],
    sources: [
      {
        label: "VnExpress — Chuyên gia chỉ cách phòng tránh lừa đảo AI, deepfake",
        url: "https://vnexpress.net/chuyen-gia-chi-cach-phong-tranh-lua-dao-ai-deepfake-5084715.html",
      },
      {
        label: "Báo Chính phủ — Dự báo lừa đảo trực tuyến tinh vi hơn trong 2026",
        url: "https://baochinhphu.vn/du-bao-nam-2026-muc-do-tinh-vi-cua-cac-hinh-thuc-lua-dao-truc-tuyen-se-tang-102260107101756364.htm",
      },
    ],
  },

  {
    slug: "ban-hang-online-ke-khai-thue-tu-2026",
    title: "Bán hàng online: kê khai thuế thế nào từ 2026",
    excerpt:
      "Doanh thu giờ hiện ra qua hoá đơn điện tử và dòng tiền ngân hàng. Bán online tay ngang cũng nên nắm mấy điều cơ bản.",
    readTimeMinutes: 3,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Từ năm 2026, cách tính thuế chuyển sang dựa trên doanh thu thực tế thể hiện qua hoá đơn điện tử, dữ liệu giao dịch và dòng tiền, thay cho mức khoán ấn định trước đây. Việc đầu tiên nên làm là tách bạch tài khoản bán hàng với tài khoản cá nhân và ghi chép doanh thu đều đặn.",
    prepare: [
      "Một tài khoản ngân hàng dùng riêng cho việc bán hàng",
      "Sổ hoặc bảng tính ghi doanh thu theo ngày",
      "Cài ứng dụng thuế trên điện thoại và đăng nhập được",
    ],
    steps: [
      {
        title: "Tách tài khoản bán hàng khỏi tài khoản tiêu xài",
        detail:
          "Đây là việc dễ nhất mà lợi nhất: cuối kỳ nhìn vào là biết doanh thu, khỏi phải bới từng giao dịch cá nhân.",
      },
      {
        title: "Ghi doanh thu mỗi ngày",
        detail:
          "Chỉ cần ngày, số đơn, tổng tiền. Ghi đều còn hơn ghi đẹp mà bỏ giữa chừng.",
      },
      {
        title: "Xem mình thuộc ngưỡng nào",
        detail:
          "Quy định phân theo mức doanh thu năm, ngưỡng nào thì bắt buộc dùng hoá đơn điện tử, ngưỡng nào thì không. Doanh thu của bạn đang ở đâu quyết định bạn phải làm gì.",
      },
      {
        title: "Nếu bán qua sàn, hỏi rõ ai xuất hoá đơn",
        detail:
          "Bạn tự xuất hay uỷ quyền cho sàn xuất thay — chọn một cách và thống nhất, tránh cảnh hoá đơn bị trùng.",
      },
      {
        title: "Chưa rõ thì hỏi đúng chỗ",
        detail:
          "Cơ quan thuế nơi bạn đăng ký có bộ phận hướng dẫn. Hỏi trực tiếp vẫn chắc hơn làm theo lời truyền tai trong hội nhóm.",
      },
    ],
    notes: [
      "Bài này chỉ giúp bạn hình dung việc cần làm, không thay thế tư vấn thuế cho trường hợp cụ thể của bạn.",
      "Ngưỡng doanh thu, mẫu biểu và hạn nộp có thể thay đổi — luôn đối chiếu thông tin từ cơ quan thuế trước mỗi kỳ kê khai.",
      "Giữ lại chứng từ mua vào và bán ra, kể cả ảnh chụp màn hình chuyển khoản.",
    ],
    faq: [
      {
        q: "Bán lai rai vài đơn một tháng có phải kê khai không?",
        a: "Tuỳ mức doanh thu và tính chất hoạt động của bạn. Đừng tự suy đoán — hỏi cơ quan thuế nơi bạn ở, câu trả lời miễn phí và chính xác hơn nhiều.",
      },
      {
        q: "Khách chuyển khoản vào tài khoản cá nhân thì có bị tính không?",
        a: "Dòng tiền là một trong những căn cứ được nhắc tới, nên tách tài khoản ngay từ đầu là cách đơn giản nhất để mọi thứ rõ ràng.",
      },
    ],
    sources: [
      {
        label: "VnExpress — Cơ quan thuế hướng dẫn hộ kinh doanh kê khai nộp thuế từ 2026",
        url: "https://vnexpress.net/co-quan-thue-huong-dan-ho-kinh-doanh-ke-khai-nop-thue-tu-2026-5013509.html",
      },
    ],
  },

  {
    slug: "ho-kinh-doanh-bo-thue-khoan-can-lam-gi",
    title: "Hộ kinh doanh bỏ thuế khoán: cần chuẩn bị gì",
    excerpt:
      "Không còn mức khoán cố định hằng tháng. Chủ quán, chủ tiệm nhỏ nên bắt đầu từ ba việc đơn giản này.",
    readTimeMinutes: 3,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Hộ kinh doanh chuyển từ nộp thuế khoán sang kê khai theo doanh thu thực tế. Ba việc nên làm ngay: ghi chép doanh thu hằng ngày, dùng một tài khoản ngân hàng riêng cho cửa hàng, và hỏi cơ quan thuế xem trường hợp của mình có phải dùng hoá đơn điện tử không.",
    prepare: [
      "Số liệu doanh thu vài tháng gần nhất, ước lượng cũng được",
      "Tài khoản ngân hàng riêng cho việc kinh doanh",
      "Điện thoại cài sẵn ứng dụng thuế và đăng nhập được",
    ],
    steps: [
      {
        title: "Ước lượng doanh thu một năm của mình",
        detail:
          "Con số này quyết định bạn rơi vào nhóm nào, phải dùng hoá đơn điện tử hay không. Không cần chính xác tuyệt đối, nhưng đừng đoán bừa.",
      },
      {
        title: "Bắt đầu ghi chép ngay từ hôm nay",
        detail:
          "Doanh thu theo ngày, chi phí lớn theo tháng. Cuốn sổ hoặc file bảng tính đơn giản là đủ cho lúc bắt đầu.",
      },
      {
        title: "Dùng tài khoản ngân hàng riêng",
        detail:
          "Tiền hàng đi một đường, tiền nhà đi một đường. Việc này giúp bạn đỡ đau đầu khi cần giải trình.",
      },
      {
        title: "Hỏi cơ quan thuế về trường hợp của mình",
        detail:
          "Mang theo con số doanh thu ước lượng và hỏi thẳng: tôi cần đăng ký gì, nộp mẫu nào, hạn khi nào. Ghi lại câu trả lời.",
      },
      {
        title: "Nếu cần hoá đơn điện tử, chọn nhà cung cấp rồi tập dùng",
        detail:
          "Xuất thử vài hoá đơn lúc chưa gấp, quen tay rồi thì lúc đông khách mới không lúng túng.",
      },
    ],
    notes: [
      "Nội dung mang tính định hướng, không thay thế tư vấn cho tình huống cụ thể của cửa hàng bạn.",
      "Ngưỡng doanh thu và yêu cầu hoá đơn có thể được điều chỉnh — kiểm tra lại trước mỗi kỳ kê khai.",
      "Đừng chờ tới hạn mới hỏi; cơ quan thuế những ngày cuối kỳ rất đông.",
    ],
    faq: [
      {
        q: "Tôi bán hàng nhỏ ở chợ, có cần làm gì không?",
        a: "Vẫn nên bắt đầu ghi chép doanh thu và hỏi cơ quan thuế nơi đăng ký. Trường hợp mỗi người mỗi khác, hỏi một lần cho yên tâm.",
      },
      {
        q: "Không rành máy tính thì sao?",
        a: "Nhiều đơn vị cung cấp hoá đơn điện tử có hỗ trợ cài đặt và hướng dẫn. Nhờ người nhà rành công nghệ ngồi cùng buổi đầu là ổn.",
      },
    ],
    sources: [
      {
        label: "VnExpress — Hướng dẫn hộ kinh doanh kê khai nộp thuế từ 2026",
        url: "https://vnexpress.net/co-quan-thue-huong-dan-ho-kinh-doanh-ke-khai-nop-thue-tu-2026-5013509.html",
      },
    ],
  },

  {
    slug: "kham-bhyt-ngoai-tru-trai-tuyen-co-gi-moi",
    title: "Khám BHYT ngoại trú trái tuyến có gì mới",
    excerpt:
      "Từ 1/7/2026, một số trường hợp khám ngoại trú không đúng nơi đăng ký ban đầu đã được quỹ chi trả một phần.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Người có thẻ BHYT tự đi khám ngoại trú ở một số cơ sở thuộc cấp cơ bản và cấp chuyên sâu có thể được quỹ thanh toán 50% mức hưởng với những bệnh, nhóm bệnh trước đây chưa được chi trả. Muốn được hưởng, bạn phải xuất trình thẻ BHYT (thẻ giấy hoặc trên VNeID) kèm giấy tờ tuỳ thân có ảnh ngay từ bước đăng ký.",
    prepare: [
      "Thẻ BHYT giấy hoặc thẻ trên ứng dụng VNeID",
      "CCCD hoặc hộ chiếu còn hạn — bắt buộc phải có giấy tờ tuỳ thân có ảnh",
      "Hỏi trước bệnh viện định đến thuộc cấp nào và có áp dụng không",
    ],
    steps: [
      {
        title: "Gọi hỏi bệnh viện trước khi đi",
        detail:
          "Chính sách chỉ áp dụng ở một số nhóm cơ sở nhất định, không phải mọi bệnh viện. Một cuộc gọi tiết kiệm cả buổi đi lại.",
      },
      {
        title: "Xuất trình giấy tờ ngay từ bước đăng ký",
        detail:
          "Đưa thẻ BHYT cùng giấy tờ tuỳ thân có ảnh ở quầy tiếp nhận. Bỏ qua bước này là mất quyền lợi dù có thẻ.",
      },
      {
        title: "Hỏi rõ phần mình phải trả",
        detail:
          "Mức được thanh toán phụ thuộc cấp chuyên môn của cơ sở, bệnh được chẩn đoán và mức hưởng ghi trên thẻ. Hỏi trước khi làm dịch vụ để không bất ngờ.",
      },
      {
        title: "Giữ lại toàn bộ hoá đơn, phiếu khám",
        detail: "Cần khi đối chiếu hoặc khi làm thủ tục với bảo hiểm khác nếu bạn có mua thêm.",
      },
    ],
    notes: [
      "Bài viết chỉ mô tả thủ tục, không phải tư vấn y khoa. Triệu chứng nặng thì đến cơ sở y tế gần nhất ngay.",
      "Mức hưởng và danh mục áp dụng có thể được điều chỉnh — hỏi trực tiếp cơ sở khám chữa bệnh hoặc cơ quan bảo hiểm xã hội cho chắc.",
    ],
    faq: [
      {
        q: "Có phải cứ trái tuyến là được thanh toán 50% không?",
        a: "Không. Chính sách áp dụng cho một số nhóm cơ sở và một số bệnh, nhóm bệnh theo quy định. Cách chắc nhất là hỏi trực tiếp nơi bạn định đến khám.",
      },
      {
        q: "Dùng thẻ BHYT trên VNeID có được không?",
        a: "Được, thẻ trên ứng dụng được chấp nhận, nhưng vẫn phải kèm giấy tờ tuỳ thân có ảnh còn giá trị sử dụng.",
      },
    ],
    sources: [
      {
        label: "Cổng Thông tin Chính phủ — Mở rộng quyền lợi BHYT khi khám ngoại trú trái tuyến",
        url: "https://xaydungchinhsach.chinhphu.vn/tu-01-7-2026-mo-rong-quyen-loi-bao-hiem-y-te-khi-kham-ngoai-tru-trai-tuyen-119260627080614844.htm",
      },
      { label: "Bảo hiểm xã hội Việt Nam", url: "https://baohiemxahoi.gov.vn" },
    ],
  },
];
