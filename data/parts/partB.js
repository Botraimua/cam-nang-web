// Phần B — 14 bài do AI soạn, cần người duyệt lại trước khi công bố
export const partB = [
  {
    slug: "di-buu-dien-gui-hang-lan-dau",
    title: "Đi bưu điện gửi hàng lần đầu",
    excerpt: "Bí quyết số một: đừng dán kín hộp ở nhà. Còn lại nhân viên sẽ lo giúp bạn gần hết.",
    readTimeMinutes: 2,
    category: "khac",
    author: null,
    quickAnswer:
      "Mang hàng CHƯA đóng kín cùng tên, địa chỉ, số điện thoại người nhận ra quầy và nói \"mình muốn gửi hàng\". Nhân viên sẽ kiểm tra, cân, báo giá và hướng dẫn phần còn lại — nhớ giữ biên lai có mã vận đơn.",
    prepare: [
      "Hàng cần gửi — đừng dán băng keo kín mít, nhân viên thường cần xem bên trong",
      "Tên, địa chỉ chi tiết và số điện thoại người nhận (lưu sẵn trong điện thoại)",
      "Một ít tiền mặt hoặc tài khoản chuyển khoản — phí tuỳ cân nặng và khoảng cách",
    ],
    steps: [
      {
        title: "Để hộp mở, ra thẳng quầy gửi hàng",
        detail:
          "Bưu điện thường yêu cầu kiểm tra hàng trước khi gửi. Nếu chưa có hộp, đa số bưu cục bán sẵn thùng và băng keo ngay tại chỗ.",
      },
      {
        title: "Đọc thông tin người nhận",
        detail:
          "Nhân viên sẽ nhập tên, địa chỉ, số điện thoại hai bên. Đọc chậm và kiểm tra lại số điện thoại — sai một số là shipper gọi không được.",
      },
      {
        title: "Cân hàng, chọn dịch vụ",
        detail:
          "Thường có gói tiết kiệm (chậm hơn) và gói nhanh. Hỏi luôn \"khoảng mấy ngày tới nơi\" để chọn cho hợp túi tiền.",
      },
      {
        title: "Trả phí, giữ kỹ biên lai",
        detail:
          "Trên biên lai có mã vận đơn để tra hành trình đơn hàng. Chụp lại một tấm cho chắc.",
      },
      {
        title: "Nhắn mã vận đơn cho người nhận",
        detail: "Người nhận tra được hàng đi tới đâu và chủ động nghe điện thoại shipper.",
      },
    ],
    notes: [
      "Một số thứ không được gửi hoặc gửi có điều kiện (chất lỏng, pin, bình xịt, đồ dễ cháy...) — cứ hỏi thẳng nhân viên trước khi đóng gói.",
      "Đồ dễ vỡ nên nói rõ để được bọc thêm; phí bọc thường không đáng bao nhiêu so với món đồ.",
    ],
    faq: [
      {
        q: "Gửi hàng có cần CCCD không?",
        a: "Thường không cần với hàng hoá thông thường, nhưng một số dịch vụ hoặc mặt hàng có thể yêu cầu — mang theo cho yên tâm, chẳng nặng thêm bao nhiêu.",
      },
      {
        q: "Gửi đồ ăn được không?",
        a: "Đồ khô đóng gói kín thường được; đồ tươi sống hoặc dễ hư thì tuỳ dịch vụ — hỏi trước ở quầy để khỏi mất công đóng gói lại.",
      },
    ],
    sources: [],
  },

  {
    slug: "dung-tiem-giat-say-tu-phuc-vu-lan-dau",
    title: "Dùng tiệm giặt sấy tự phục vụ lần đầu",
    excerpt: "Đứng trước dàn máy to đùng đầy nút bấm? Bình tĩnh — quy trình chỉ có 4 bước và máy nào cũng dán hướng dẫn.",
    readTimeMinutes: 2,
    category: "khac",
    author: null,
    quickAnswer:
      "Phân loại đồ trắng riêng đồ màu, móc sạch túi quần áo, cho đồ và nước giặt vào máy, chọn chế độ rồi thanh toán. Giặt xong chuyển qua máy sấy — nhớ canh giờ quay lại lấy đồ.",
    prepare: [
      "Túi đựng đồ và nước giặt/bột giặt (nhiều tiệm bán lẻ từng gói ngay tại chỗ)",
      "Tiền lẻ, thẻ hoặc app thanh toán — mỗi tiệm một kiểu, nhìn hướng dẫn dán trên máy",
      "Khoảng một tiếng rưỡi trống, hoặc quán cà phê gần đó để ngồi chờ",
    ],
    steps: [
      {
        title: "Kiểm tra hết túi áo túi quần",
        detail:
          "Giấy tờ, tai nghe, son môi trong túi quần là những \"nạn nhân\" kinh điển của máy giặt. Móc túi kỹ trước khi cho đồ vào.",
      },
      {
        title: "Phân loại đồ",
        detail:
          "Đồ trắng và đồ màu tách riêng nếu giặt nhiều; đồ len, đồ ren mỏng dễ hỏng thì cân nhắc giặt tay ở nhà.",
      },
      {
        title: "Cho đồ và nước giặt vào, chọn chế độ",
        detail:
          "Đừng nhét chật cứng — đồ cần chỗ để xoay mới sạch. Chế độ thường (normal) là lựa chọn an toàn cho lần đầu.",
      },
      {
        title: "Thanh toán và canh giờ",
        detail:
          "Máy thường hiện số phút còn lại. Chụp lại màn hình hoặc đặt báo thức để quay lại đúng lúc.",
      },
      {
        title: "Chuyển qua máy sấy",
        detail:
          "Giũ nhẹ từng món trước khi cho vào máy sấy để đồ bớt nhăn. Đồ mỏng chọn nhiệt thấp, đồ dày như khăn tắm chịu được nhiệt cao hơn.",
      },
    ],
    notes: [
      "Đừng để đồ \"ngâm\" trong máy quá lâu sau khi xong — người chờ máy có thể lấy đồ bạn ra ngoài, hơi ngại đấy.",
      "Đồ có in hình, đồ len hoặc đồ co giãn dễ hỏng khi sấy nóng — nhiệt thấp hoặc mang về phơi cho lành.",
    ],
    faq: [
      {
        q: "Giặt với sấy mất bao lâu?",
        a: "Thường mỗi công đoạn khoảng 30–45 phút tuỳ máy và lượng đồ — nguyên buổi tối là dư sức xong, vừa đủ một tập phim.",
      },
      {
        q: "Có cần ngồi canh máy suốt không?",
        a: "Không cần, nhưng nên quay lại đúng giờ. Đồ quý hay đồ dễ hỏng thì ở lại trông cho yên tâm.",
      },
    ],
    sources: [],
  },

  {
    slug: "sao-luu-anh-va-du-lieu-dien-thoai",
    title: "Sao lưu ảnh và dữ liệu điện thoại",
    excerpt: "Điện thoại rơi xuống nước lúc nào không báo trước. Mười lăm phút cài đặt hôm nay đổi lấy sự bình thản cả đời.",
    readTimeMinutes: 3,
    category: "khac",
    author: null,
    quickAnswer:
      "Bật sao lưu tự động lên đám mây (Google Photos với Android, iCloud với iPhone) cho ảnh, danh bạ và dữ liệu app quan trọng. Sau đó thỉnh thoảng kiểm tra xem nó có thật sự chạy không — đừng bật xong rồi quên.",
    prepare: [
      "Wifi ổn định và điện thoại cắm sạc (sao lưu lần đầu có thể chạy khá lâu)",
      "Tài khoản Google hoặc Apple ID — nhớ đúng mật khẩu, đây là chìa khoá của mọi thứ",
      "Mười lăm phút không vội vàng",
    ],
    steps: [
      {
        title: "Bật sao lưu ảnh tự động",
        detail:
          "Android: mở Google Photos, bật \"Sao lưu\". iPhone: Cài đặt → tên bạn → iCloud → Ảnh. Từ giờ ảnh mới sẽ tự lên mây khi có wifi.",
      },
      {
        title: "Kiểm tra danh bạ đã đồng bộ chưa",
        detail:
          "Danh bạ nên lưu theo tài khoản Google/iCloud chứ đừng lưu \"trong máy\" — mất máy là mất sạch số. Vào phần cài đặt danh bạ xem đang lưu ở đâu.",
      },
      {
        title: "Sao lưu tin nhắn và app hay dùng",
        detail:
          "Zalo, Messenger... thường có mục sao lưu riêng trong cài đặt của từng app. Bật lên nếu bạn không muốn mất lịch sử trò chuyện.",
      },
      {
        title: "Thử khôi phục một tấm ảnh",
        detail:
          "Mở photos.google.com hoặc icloud.com trên máy tính, xem ảnh có trên đó thật không. Sao lưu mà chưa từng kiểm tra thì mới chỉ là... niềm tin.",
      },
      {
        title: "Đặt lịch dọn dẹp định kỳ",
        detail:
          "Mỗi tháng xoá bớt ảnh trùng, video nặng không cần giữ — vừa nhẹ máy vừa đỡ đầy dung lượng đám mây.",
      },
    ],
    notes: [
      "Gói miễn phí của các dịch vụ đám mây có hạn — đầy thì dọn bớt, mua thêm gói nhỏ, hoặc chép ảnh cũ về máy tính/ổ cứng.",
      "Sao lưu thường chỉ chạy khi có wifi và đủ pin — cắm sạc qua đêm là thời điểm vàng để máy tự làm việc.",
      "Mật khẩu tài khoản Google/Apple ID quan trọng hơn bạn nghĩ — quên nó là mất luôn quyền lấy lại dữ liệu.",
    ],
    faq: [
      {
        q: "Hết dung lượng miễn phí thì sao?",
        a: "Ba lựa chọn: dọn bớt ảnh video nặng, mua gói dung lượng nhỏ hàng tháng (thường rẻ hơn ly trà sữa), hoặc chép ảnh cũ về máy tính rồi xoá trên mây.",
      },
      {
        q: "Đổi điện thoại mới thì lấy lại dữ liệu kiểu gì?",
        a: "Đăng nhập đúng tài khoản Google/Apple ID cũ trên máy mới, làm theo hướng dẫn khôi phục lúc mở máy — ảnh và danh bạ sẽ tự về dần.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-xe-buyt-thanh-pho-lan-dau",
    title: "Đi xe buýt thành phố lần đầu",
    excerpt: "Rẻ, mát, khỏi lo gửi xe — chỉ cần biết cách tra tuyến và một cú vẫy tay dứt khoát.",
    readTimeMinutes: 2,
    category: "khac",
    author: null,
    quickAnswer:
      "Tra tuyến trên Google Maps hoặc app xe buýt của thành phố, ra đúng trạm chờ, vẫy tay khi xe đến, lên xe mua vé. Gần đến nơi thì bấm chuông hoặc báo phụ xe để xuống trạm.",
    prepare: [
      "App bản đồ hoặc app xe buýt của thành phố để tra tuyến và giờ xe",
      "Tiền lẻ mua vé (giá vé thường vài nghìn đến hơn chục nghìn tuỳ tuyến — chuẩn bị sẵn cho nhanh)",
      "Ra trạm sớm hơn giờ dự kiến một chút, xe buýt không chờ ai",
    ],
    steps: [
      {
        title: "Tra tuyến trước ở nhà",
        detail:
          "Nhập điểm đi và điểm đến vào app bản đồ, chọn biểu tượng phương tiện công cộng. App sẽ chỉ số tuyến, trạm lên, trạm xuống và cả giờ xe chạy.",
      },
      {
        title: "Đứng đúng trạm, vẫy khi xe tới",
        detail:
          "Nhìn số tuyến to đùng trước đầu xe. Đúng số mình cần thì giơ tay vẫy dứt khoát — đứng im là xe đi thẳng đấy.",
      },
      {
        title: "Lên xe, mua vé",
        detail:
          "Thường lên cửa trước, mua vé từ phụ xe hoặc quẹt thẻ/app tuỳ thành phố. Giữ vé đến khi xuống xe phòng khi được kiểm tra.",
      },
      {
        title: "Theo dõi lộ trình",
        detail:
          "Mở bản đồ xem chấm xanh của mình di chuyển, hoặc nghe loa thông báo trạm. Sắp đến nơi thì di chuyển dần ra cửa xuống.",
      },
      {
        title: "Báo xuống trạm",
        detail:
          "Bấm chuông (nếu xe có) hoặc nói với phụ xe \"cho em xuống trạm X\". Xuống xe xong lùi khỏi lòng đường rồi hãy mở điện thoại xem tiếp.",
      },
    ],
    notes: [
      "Giờ cao điểm xe đông, để ý túi xách và điện thoại — đeo balo ra phía trước cho chắc.",
      "Ghế đầu xe thường ưu tiên người già, phụ nữ mang thai, trẻ nhỏ — được nhường ghế là văn hoá đẹp trên xe buýt.",
      "Đứng thì bám chặt tay vịn, xe buýt phanh không báo trước bao giờ.",
    ],
    faq: [
      {
        q: "Lỡ xuống nhầm trạm thì sao?",
        a: "Chuyện thường ở huyện! Mở bản đồ lên tra lại — đa số trường hợp chỉ cần đi bộ một đoạn hoặc chờ chuyến sau đi tiếp, coi như dạo phố ngoài kế hoạch.",
      },
      {
        q: "Đi thường xuyên có cách nào rẻ hơn mua vé lẻ?",
        a: "Nhiều thành phố có vé tháng hoặc thẻ nạp tiền cho người đi thường xuyên — hỏi phụ xe hoặc tra trang xe buýt của thành phố bạn.",
      },
    ],
    sources: [],
  },

  {
    slug: "dat-xe-cong-nghe-an-toan-khi-ve-khuya",
    title: "Đặt xe công nghệ an toàn khi về khuya",
    excerpt: "Về khuya một mình không đáng sợ nếu bạn có sẵn vài thói quen nhỏ: check biển số, chia sẻ hành trình, và tin vào trực giác.",
    readTimeMinutes: 2,
    category: "khac",
    author: null,
    quickAnswer:
      "Luôn đặt xe qua app thay vì vẫy xe lạ, đối chiếu đúng biển số và tên tài xế trước khi lên, bật chia sẻ hành trình cho người thân, và đi ô tô thì ngồi ghế sau. Thấy không ổn ở bất kỳ điểm nào — cứ huỷ chuyến, không cần ngại.",
    prepare: [
      "Điện thoại còn đủ pin — sạc trước khi tan tiệc, đừng để 5% mới cuống",
      "App đặt xe đã đăng nhập sẵn và một người thân biết bạn đang trên đường về",
      "Điểm đón sáng sủa, đông người (cửa quán, sảnh toà nhà thay vì góc đường tối)",
    ],
    steps: [
      {
        title: "Đặt xe từ nơi an toàn",
        detail:
          "Chờ xe ở chỗ có đèn và có người, đừng đứng một mình nơi vắng. Trong app xem trước tên, ảnh tài xế và biển số xe.",
      },
      {
        title: "Đối chiếu biển số trước khi lên",
        detail:
          "Xe đến thì so biển số với app trước, khớp rồi mới lên. Có thể hỏi \"anh đón ai ạ?\" để tài xế nói tên bạn — đừng tự xưng tên trước.",
      },
      {
        title: "Bật chia sẻ hành trình",
        detail:
          "Hầu hết app đặt xe có nút chia sẻ chuyến đi — gửi cho người thân hoặc bạn bè. Chỉ mất 3 giây mà ai đó luôn biết bạn đang ở đâu.",
      },
      {
        title: "Ngồi ghế sau, theo dõi lộ trình",
        detail:
          "Đi ô tô thì ghế sau là vị trí chủ động nhất. Thỉnh thoảng liếc bản đồ xem xe có đi đúng đường không — sai lộ trình thì hỏi tài xế ngay, lịch sự nhưng rõ ràng.",
      },
      {
        title: "Kết thúc chuyến văn minh",
        detail:
          "Kiểm tra không bỏ quên đồ, đánh giá chuyến đi trong app. Chuyến nào có vấn đề thì báo cáo qua app để hệ thống xử lý.",
      },
    ],
    notes: [
      "Cố gắng đừng ngủ gật trên xe khi đi một mình — nghe nhạc nhẹ, nhắn tin với bạn cho tỉnh.",
      "Cảm thấy bất kỳ điều gì không ổn, yêu cầu dừng ở nơi đông người và xuống xe — an toàn của bạn quan trọng hơn phép lịch sự.",
      "Giá giờ khuya thường nhỉnh hơn do ít tài xế — so nhanh 2–3 app trước khi đặt nếu không quá gấp.",
    ],
    faq: [
      {
        q: "Tài xế gọi bảo huỷ chuyến trên app rồi đi \"ngoài\" cho rẻ, có nên không?",
        a: "Không nên, nhất là lúc khuya — đi ngoài app là mất hết dấu vết hành trình, bảo hiểm và hỗ trợ khi có sự cố. Rẻ hơn vài nghìn không đáng đâu.",
      },
      {
        q: "Điện thoại sắp hết pin giữa đường thì làm gì?",
        a: "Nhắn nhanh cho người thân biển số xe và điểm đến trước khi máy sập nguồn. Lần sau thủ sẵn cục sạc dự phòng nhỏ trong túi — bạn thân của hội hay về khuya.",
      },
    ],
    sources: [],
  },

  {
    slug: "hoi-duong-va-dung-ban-do-tren-dien-thoai",
    title: "Hỏi đường và dùng bản đồ trên điện thoại",
    excerpt: "Hết thời chạy lòng vòng vì ngại hỏi — phối hợp bản đồ với một câu hỏi khéo là tới nơi.",
    readTimeMinutes: 2,
    category: "khac",
    author: null,
    quickAnswer:
      "Mở app bản đồ, gõ tên địa điểm hoặc dán địa chỉ, bấm chỉ đường và chọn đúng phương tiện. Khi bản đồ mơ hồ (hẻm sâu, địa chỉ lạ), hỏi người địa phương kèm tên mốc gần đó — kết hợp cả hai là chuẩn nhất.",
    prepare: [
      "App bản đồ đã bật định vị (GPS) trong cài đặt điện thoại",
      "Địa chỉ đầy đủ hoặc tên chính xác của nơi cần đến — copy sẵn từ tin nhắn",
      "Đi xa thì tải bản đồ offline khu vực đó phòng khi mất mạng",
    ],
    steps: [
      {
        title: "Nhập đúng địa điểm",
        detail:
          "Gõ tên cụ thể hoặc dán nguyên địa chỉ. Cẩn thận địa danh trùng tên — nhìn quận/thành phố trong kết quả trước khi bấm chỉ đường.",
      },
      {
        title: "Chọn đúng phương tiện",
        detail:
          "Xe máy, ô tô, đi bộ cho ra đường khác nhau đấy — ô tô bị cấm rẽ chỗ xe máy đi vô tư. Nhìn kỹ biểu tượng đang chọn.",
      },
      {
        title: "Nhìn tổng thể lộ trình trước khi đi",
        detail:
          "Lướt qua toàn tuyến một lượt để nắm hướng chính. Biết mình đại khái đi hướng nào giúp bạn không hoảng khi lỡ rẽ nhầm.",
      },
      {
        title: "Vừa đi vừa để ý chấm xanh",
        detail:
          "Chấm xanh là bạn. Đi vài bước mà chấm đi ngược hướng thì mình đang... quay lưng với đích. Đứng chỗ thoáng cho định vị chính xác hơn.",
      },
      {
        title: "Hỏi người địa phương khi cần",
        detail:
          "Vào hẻm sâu hay địa chỉ cũ, hỏi cô bán nước, chú xe ôm: \"Cô ơi, cho con hỏi số nhà X hẻm này ở phía nào ạ?\" — kèm tên mốc gần đó càng dễ được chỉ chuẩn.",
      },
    ],
    notes: [
      "Bản đồ đôi khi dẫn vào đường cấm, đường ngược chiều hoặc hẻm cụt — biển báo thực tế luôn thắng app.",
      "Vừa lái xe vừa nhìn bản đồ rất nguy hiểm — gắn điện thoại lên giá đỡ, nghe chỉ đường bằng giọng nói, hoặc dừng hẳn lại xem.",
    ],
    faq: [
      {
        q: "Định vị nhảy lung tung, mũi tên xoay sai hướng thì sao?",
        a: "Ra chỗ thoáng (không bị nhà cao che), bật tắt lại định vị, rồi đi bộ vài bước — mũi tên sẽ tự xoay theo hướng bạn di chuyển.",
      },
      {
        q: "Địa chỉ kiểu \"số 15/3/7\" đọc sao?",
        a: "Đó là nhà trong hẻm nhiều cấp: vào hẻm 15, rồi hẻm nhánh 3, tìm nhà số 7. Cứ mỗi dấu gạch là rẽ vào một lớp hẻm — hỏi người trong hẻm là nhanh nhất.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-cat-toc-mo-ta-kieu-minh-muon",
    title: "Đi cắt tóc: mô tả kiểu mình muốn",
    excerpt: "Khoảng cách giữa \"cắt nhẹ thôi anh\" và cái đầu bạn nhận về đôi khi là cả một câu chuyện. Học cách nói cho thợ hiểu.",
    readTimeMinutes: 2,
    category: "khac",
    author: null,
    quickAnswer:
      "Đưa 2–3 ảnh mẫu là cách chắc ăn nhất, kèm một câu về độ dài muốn giữ. Quan trọng không kém: nói rõ điều bạn KHÔNG muốn (\"đừng hớt trắng hai bên\", \"đừng tỉa mái\") trước khi thợ cầm kéo.",
    prepare: [
      "Lưu sẵn 2–3 ảnh kiểu tóc muốn cắt (chụp nhiều góc càng tốt)",
      "Nhớ lại lần cắt ưng nhất và lần \"thảm hoạ\" nhất để rút kinh nghiệm mô tả",
      "Gội đầu sạch trước khi đi — tóc sạch giúp thợ nhìn đúng nếp tóc của bạn",
    ],
    steps: [
      {
        title: "Mở ảnh mẫu ra trước tiên",
        detail:
          "Một tấm ảnh hơn nghìn lời mô tả. Đưa ảnh và nói \"em muốn kiểu này, nhưng...\" rồi thêm điều chỉnh riêng của bạn.",
      },
      {
        title: "Nói độ dài bằng đơn vị cụ thể",
        detail:
          "\"Cắt ngắn thôi\" với thợ có thể là 5 phân, với bạn là 1 phân. Dùng ngón tay ước lượng hoặc nói hẳn số phân muốn cắt bớt.",
      },
      {
        title: "Nói rõ điều không muốn",
        detail:
          "\"Đừng cạo trắng hai bên\", \"giữ mái giùm em\", \"đừng tỉa mỏng đuôi tóc\" — những câu này cứu bạn khỏi 90% ca về nhà muốn khóc.",
      },
      {
        title: "Hỏi ý thợ một câu",
        detail:
          "\"Tóc em để kiểu này hợp không anh/chị?\" Thợ nhìn chất tóc và khuôn mặt bạn rõ hơn bạn nghĩ — kiểu trong ảnh chưa chắc hợp tóc mỏng hay tóc xoăn của mình.",
      },
      {
        title: "Nghiệm thu ngay tại ghế",
        detail:
          "Xong đừng vội đứng dậy — soi gương cả hai bên và sau gáy, chỗ nào chưa ưng nhờ chỉnh liền. Về nhà rồi mới phát hiện thì đã muộn.",
      },
    ],
    notes: [
      "Nguyên tắc vàng: cắt dài còn cắt ngắn thêm được, cắt lố rồi thì chỉ có... chờ mọc. Lần đầu ở tiệm lạ nên cắt bảo thủ một chút.",
      "Giá cắt tóc mỗi nơi mỗi khác — hỏi giá trước khi ngồi vào ghế cho thoải mái đôi bên.",
    ],
    faq: [
      {
        q: "Không có ảnh mẫu thì mô tả kiểu gì?",
        a: "Dùng công thức 3 phần: chỗ nào giữ nguyên, chỗ nào cắt, cắt bao nhiêu. Ví dụ: \"Hai bên hớt gọn, phía trên giữ dài, mái tỉa nhẹ 2 phân thôi ạ.\"",
      },
      {
        q: "Thợ cắt hỏng thì có nên nói không?",
        a: "Nên, nhưng nói lúc còn ngồi trên ghế và nói cụ thể: \"Bên trái còn dày hơn bên phải, anh tỉa thêm giúp em.\" Thợ nào cũng muốn khách ưng trước khi rời tiệm.",
      },
    ],
    sources: [],
  },

  {
    slug: "bao-quan-thuc-pham-trong-tu-lanh-dung-cach",
    title: "Bảo quản thực phẩm trong tủ lạnh đúng cách",
    excerpt: "Tủ lạnh không phải hộp thần kỳ giữ đồ tươi mãi mãi — nhưng xếp đúng chỗ thì đồ ăn ngon lâu hơn hẳn.",
    readTimeMinutes: 3,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Quy tắc cốt lõi: chín trên — sống dưới. Đồ ăn chín, ăn liền để ngăn trên; thịt cá sống bọc kín để ngăn dưới cùng hoặc ngăn đông; rau củ vào đúng ngăn rau. Và đừng nhét tủ chật cứng — hơi lạnh cần chỗ để lưu thông.",
    prepare: [
      "Vài hộp đựng thực phẩm có nắp kín (hộp thuỷ tinh hoặc nhựa đều được)",
      "Cuộn màng bọc hoặc túi zip cho đồ sống",
      "Bút lông ghi ngày lên hộp — trí nhớ của chúng ta không đáng tin như ta tưởng",
    ],
    steps: [
      {
        title: "Xếp theo tầng: chín trên, sống dưới",
        detail:
          "Đồ chín và đồ ăn liền ở ngăn trên; thịt cá sống bọc kín nằm ngăn dưới cùng. Lý do đơn giản: nước từ đồ sống không thể nhỏ giọt xuống đồ chín.",
      },
      {
        title: "Bọc kín mọi thứ trước khi cho vào",
        detail:
          "Đồ không đậy nắp vừa khô queo vừa ám mùi cả tủ. Hộp kín hoặc màng bọc là bạn thân của tủ lạnh.",
      },
      {
        title: "Rau củ vào ngăn rau",
        detail:
          "Ngăn rau có độ ẩm phù hợp hơn cho rau củ. Rau lá lót thêm giấy ăn khô để hút ẩm thừa — đỡ bị nhũn nhớt sau vài ngày.",
      },
      {
        title: "Đồ thừa: hộp kín + dán ngày",
        detail:
          "Thức ăn thừa cho vào hộp, ghi ngày nấu. Đợi nguội bớt rồi hãy cất — món nóng hổi cho thẳng vào làm tủ phải gồng mình và ảnh hưởng đồ xung quanh.",
      },
      {
        title: "Đông lạnh những gì chưa dùng ngay",
        detail:
          "Thịt cá mua nhiều thì chia nhỏ từng bữa rồi mới cấp đông — cần bao nhiêu rã bấy nhiêu, không phải rã cả tảng rồi tiếc.",
      },
      {
        title: "Mỗi tuần một vòng kiểm kê",
        detail:
          "Trước ngày đi chợ, mở tủ dọn một lượt: món nào sắp \"hết hạn thanh xuân\" thì ưu tiên nấu trước, món nào có mùi lạ thì chia tay dứt khoát.",
      },
    ],
    notes: [
      "Cánh cửa tủ là vùng ấm nhất — sữa tươi, trứng dùng lâu nên để trong thân tủ, cánh cửa dành cho gia vị và đồ uống.",
      "Đồ đã rã đông thì nấu luôn, đừng cấp đông lại lần nữa — vi khuẩn thích trò tan-đông lặp lại này lắm.",
      "Ngửi thấy lạ, nhìn thấy nhớt hay đổi màu — bỏ, đừng tiếc. Một bữa đau bụng đắt hơn miếng thịt nhiều.",
    ],
    faq: [
      {
        q: "Cơm nguội để tủ lạnh được mấy ngày?",
        a: "Thường 1–2 ngày trong hộp đậy kín là an toàn nhất, khi ăn hâm nóng kỹ. Cơm để ngoài quạt qua đêm mới là thứ nên tránh.",
      },
      {
        q: "Chuối, cà chua, hành tỏi có cần bỏ tủ lạnh không?",
        a: "Mấy bạn này thường thích ở ngoài hơn: chuối để tủ dễ thâm vỏ, cà chua mất vị, hành tỏi khoai tây chỉ cần chỗ khô thoáng là vui rồi.",
      },
    ],
    sources: [],
  },

  {
    slug: "nau-com-bang-noi-com-dien-ti-le-nuoc-co-ban",
    title: "Nấu cơm bằng nồi cơm điện: tỉ lệ nước cơ bản",
    excerpt: "Cơm khô như sỏi hay nhão như cháo đều có thuốc chữa — bắt đầu từ vạch nước trong nồi và một đốt ngón tay.",
    readTimeMinutes: 2,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Đong gạo bằng cốc kèm nồi, vo 2–3 lần, thêm nước theo vạch tương ứng trong lòng nồi (2 cốc gạo → vạch số 2). Không có vạch thì dùng mẹo đốt ngón tay: nước cao hơn mặt gạo khoảng một đốt. Bấm Cook, nồi nhảy Warm thì ủ thêm 10 phút rồi xới.",
    prepare: [
      "Gạo và cốc đong đi kèm nồi (mất cốc thì dùng chén, miễn là đong gạo và nhớ tỉ lệ)",
      "Nước sạch",
      "Khăn khô để lau đáy lòng nồi trước khi nấu",
    ],
    steps: [
      {
        title: "Đong gạo, vo 2–3 lần",
        detail:
          "Vo tới khi nước bớt đục là được, không cần trong vắt — vo kỹ quá trôi mất chất. Chắt nước vo thật ráo trước khi đong nước nấu.",
      },
      {
        title: "Đong nước theo vạch trong nồi",
        detail:
          "Lòng nồi thường in sẵn vạch: nấu 2 cốc gạo thì đổ nước tới vạch số 2. Đây là tỉ lệ nhà sản xuất đã tính giúp bạn — cứ tin họ ở lần đầu.",
      },
      {
        title: "Không có vạch? Dùng đốt ngón tay",
        detail:
          "Dàn phẳng mặt gạo, chạm đầu ngón trỏ lên mặt gạo — nước ngập đến khoảng một đốt ngón tay là mức khởi điểm ổn cho gạo trắng thông thường.",
      },
      {
        title: "Lau khô đáy nồi, bấm Cook",
        detail:
          "Đáy lòng nồi ướt dễ làm nồi kêu lạch tạch và nhảy nút sớm. Lau khô, đặt vào, xoay nhẹ cho khớp mâm nhiệt rồi bấm nấu.",
      },
      {
        title: "Nồi nhảy Warm — khoan mở nắp",
        detail:
          "Ủ thêm 10–15 phút cho hạt cơm chín đều rồi mới mở nắp, xới tơi từ dưới lên. Mở sớm cơm dễ bị sượng mặt trên.",
      },
    ],
    notes: [
      "Mỗi loại gạo mỗi tính: gạo dẻo cần ít nước hơn, gạo cũ khô hơn cần thêm chút nước. Lần đầu theo vạch, các lần sau chỉnh dần theo khẩu vị nhà mình.",
      "Cơm hay sống hoặc nồi nhảy quá sớm dù làm đúng — kiểm tra đáy nồi có ướt, mâm nhiệt có dính hạt cơm cũ không.",
    ],
    faq: [
      {
        q: "Cơm nhão hoặc khô quá thì cứu kiểu gì?",
        a: "Nhão: xới tơi rồi bấm Cook thêm một lần cho bay bớt hơi nước. Khô: rưới ít nước sôi lên, đậy nắp bấm Cook lại — cơm sẽ mềm ra kha khá.",
      },
      {
        q: "Nấu nửa cốc gạo cho một người được không?",
        a: "Được, nhưng nồi to nấu ít gạo dễ khê đáy — canh nước sát hơn một chút. Ăn một mình thường xuyên thì nồi mini là khoản đầu tư xứng đáng.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-an-quan-mot-minh-van-tu-tin",
    title: "Đi ăn quán một mình vẫn tự tin",
    excerpt: "Sự thật giải phóng: chẳng ai trong quán quan tâm bạn đi mấy người đâu — họ còn bận chọn món.",
    readTimeMinutes: 2,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Chọn quán, bước vào, gọi món, ăn ngon lành — đơn giản vậy thôi. Cảm giác \"mọi người đang nhìn mình\" gần như hoàn toàn nằm trong đầu bạn; ai cũng đang bận với tô phở của họ.",
    prepare: [
      "Chọn trước một quán cho lần đầu — quán cơm, bún, phở là dễ nhất vì khách lẻ vào ra suốt",
      "Điện thoại hoặc cuốn sách làm \"bạn đồng hành\" nếu cần",
      "Một cái bụng đói — động lực mạnh nhất để vượt qua mọi ngại ngùng",
    ],
    steps: [
      {
        title: "Bắt đầu từ quán \"dễ\"",
        detail:
          "Quán bình dân đông vừa phải là sân tập lý tưởng: khách một mình nhiều vô kể, chẳng ai để ý ai. Để dành nhà hàng sang cho cấp độ sau.",
      },
      {
        title: "Chọn chỗ ngồi thoải mái",
        detail:
          "Bàn nhỏ ven tường hoặc quầy bar (nếu có) là vị trí đẹp cho khách lẻ — vừa gọn vừa có góc quan sát quán rất thú vị.",
      },
      {
        title: "Gọi món như mọi khách khác",
        detail:
          "\"Cho em một tô bún bò ạ\" — không cần giải thích vì sao đi một mình. Nhân viên phục vụ khách lẻ mỗi ngày, với họ bạn là khách bình thường tuyệt đối.",
      },
      {
        title: "Thử vài phút không nhìn điện thoại",
        detail:
          "Cứ cầm điện thoại nếu thấy thoải mái, nhưng thử vài phút chỉ tập trung ăn — đồ ăn ngon hơn hẳn khi được chú ý, nghe hơi thiền nhưng thật đấy.",
      },
      {
        title: "Tính tiền, đi về, tự thưởng một điểm cộng",
        detail:
          "Xong bữa đầu tiên là bạn đã mở khoá một kỹ năng sống mới: muốn ăn gì là đi ăn, khỏi chờ rủ được ai.",
      },
    ],
    notes: [
      "Giờ trưa cao điểm, quán đông có thể xếp bạn ngồi ghép bàn với khách lẻ khác — chuyện hết sức bình thường, gật đầu chào một cái là xong.",
      "Món lẩu hay nướng cho một người hơi khó gọi ở quán truyền thống — một số nơi có suất lẻ, cứ hỏi thử trước khi vào.",
    ],
    faq: [
      {
        q: "Vẫn thấy ngại thì làm sao cho đỡ?",
        a: "Đi giờ vắng (trước 11h30 hoặc sau 13h) cho lần đầu, và nhớ quy luật này: bạn để ý bạn 100%, người khác để ý bạn chưa được 1%.",
      },
      {
        q: "Ăn một mình có bị quán khó chịu vì tốn bàn không?",
        a: "Quán bình dân thì hoàn toàn không. Nhà hàng đông khách giờ vàng, ngồi bàn nhỏ hoặc quầy là vui vẻ cả làng — mà bạn là khách trả tiền, cứ tự tin.",
      },
    ],
    sources: [],
  },

  {
    slug: "doc-nhan-thuc-pham-han-dung-thanh-phan",
    title: "Đọc nhãn thực phẩm: hạn dùng, thành phần",
    excerpt: "Ba mươi giây đọc nhãn trước khi bỏ vào giỏ — kỹ năng nhỏ mà ví tiền và cái bụng đều cảm ơn.",
    readTimeMinutes: 3,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Nhìn 3 chỗ: hạn sử dụng (NSX/HSD), bảng thành phần (xếp từ nhiều nhất đến ít nhất), và hướng dẫn bảo quản. Mẹo quan trọng nhất: thành phần đứng ĐẦU danh sách là thứ chiếm nhiều nhất trong món đó.",
    prepare: [
      "Thói quen lật mặt sau bao bì trước khi bỏ giỏ — mặt trước là quảng cáo, mặt sau mới là sự thật",
      "Biết mình hoặc người nhà dị ứng gì (đậu phộng, hải sản, sữa...) để dò cho nhanh",
    ],
    steps: [
      {
        title: "Tìm NSX và HSD",
        detail:
          "NSX là ngày sản xuất, HSD là hạn sử dụng — thường in ở đáy hộp, mép túi hoặc nắp chai. Mua đồ dùng lâu thì với tay lấy hàng phía trong kệ, thường mới hơn hàng ngoài cùng.",
      },
      {
        title: "Phân biệt hai kiểu hạn",
        detail:
          "\"Hạn sử dụng\" là mốc an toàn — quá hạn thì nên bỏ, nhất là đồ tươi, sữa. \"Sử dụng tốt nhất trước\" thiên về chất lượng — quá mốc đồ có thể giảm ngon chứ chưa chắc đã hỏng.",
      },
      {
        title: "Đọc bảng thành phần theo thứ tự",
        detail:
          "Luật chơi: đứng đầu = nhiều nhất. Hộp \"nước ép trái cây\" mà thành phần đầu tiên là nước và đường thì bạn hiểu mình đang mua gì rồi đấy.",
      },
      {
        title: "Soi bảng dinh dưỡng theo khẩu phần",
        detail:
          "Con số calo, đường, muối thường tính trên MỘT khẩu phần — mà một gói có thể chứa 2–3 khẩu phần. Ăn hết gói nghĩa là nhân lên tương ứng nhé.",
      },
      {
        title: "Check dòng cảnh báo dị ứng và cách bảo quản",
        detail:
          "Dòng \"chứa\" / \"có thể chứa\" (đậu phộng, sữa, gluten...) thường in đậm gần bảng thành phần. Đọc luôn mục bảo quản sau mở nắp — nhiều món mở rồi phải để tủ lạnh và dùng nhanh.",
      },
    ],
    notes: [
      "Đường có nhiều nghệ danh: siro ngô, siro glucose, maltose, mật ong, nước mía cô đặc... — thấy vài cái tên ngọt ngào đứng đầu danh sách thì món đó ngọt thật đấy.",
      "Chữ to mặt trước như \"ít béo\", \"organic\", \"không đường\" là ngôn ngữ marketing — mặt sau bao bì mới là nơi kiểm chứng.",
    ],
    faq: [
      {
        q: "Đồ quá hạn 1–2 ngày còn ăn được không?",
        a: "Tuỳ loại: đồ khô ghi \"sử dụng tốt nhất trước\" mà nhìn, ngửi vẫn bình thường thì nhiều người vẫn dùng. Riêng sữa tươi, thịt cá, đồ hộp phồng nắp quá \"hạn sử dụng\" thì đừng liều — bỏ.",
      },
      {
        q: "Không có thời gian đọc hết thì ưu tiên gì?",
        a: "Ba giây tối thiểu: liếc HSD và liếc 3 thành phần đầu tiên. Chỉ vậy thôi đã lọc được kha khá quyết định mua sáng suốt hơn rồi.",
      },
    ],
    sources: [],
  },

  {
    slug: "viet-email-cong-viec-co-ban",
    title: "Viết email công việc cơ bản",
    excerpt: "Email không cần văn hay — cần người nhận đọc 10 giây là hiểu bạn muốn gì và cần làm gì.",
    readTimeMinutes: 3,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Công thức 5 phần: tiêu đề nói rõ việc → chào đúng tên → câu đầu nêu thẳng mục đích → nội dung ngắn gọn (gạch đầu dòng nếu nhiều ý) → kết bằng đề nghị cụ thể + chữ ký. Trước khi bấm Gửi: đọc lại một lượt và kiểm tra file đính kèm.",
    prepare: [
      "Xác định rõ trong đầu: email này muốn người nhận LÀM gì? (trả lời, duyệt, gửi file, hay chỉ cần biết thông tin)",
      "Tên và cách xưng hô đúng của người nhận — sai tên là mất điểm từ dòng đầu",
      "File cần đính kèm để sẵn ra desktop cho khỏi quên",
    ],
    steps: [
      {
        title: "Viết tiêu đề rõ việc",
        detail:
          "Người bận rộn đọc tiêu đề để quyết định mở hay không. So sánh: \"Hỏi chút ạ\" và \"[Báo cáo tuần 32] Xin anh duyệt trước thứ Sáu\" — cái nào được mở trước?",
      },
      {
        title: "Chào và vào thẳng mục đích",
        detail:
          "\"Dear anh Nam,\" hoặc \"Chào chị Hoa,\" rồi câu đầu tiên nêu luôn lý do viết: \"Em gửi anh báo cáo tuần này và xin ý kiến về phần chi phí.\" Đừng bắt người đọc dò đến dòng thứ mười mới hiểu bạn cần gì.",
      },
      {
        title: "Trình bày nội dung dễ quét mắt",
        detail:
          "Nhiều ý thì gạch đầu dòng, mỗi ý một dòng. Đoạn văn dài như tường thành khiến người nhận muốn \"để mai đọc\" — và mai không bao giờ tới.",
      },
      {
        title: "Kết bằng đề nghị cụ thể",
        detail:
          "\"Nhờ anh phản hồi giúp em trước 17h thứ Sáu ạ\" rõ hơn hẳn \"mong anh xem qua\". Xong thêm câu cảm ơn và chữ ký (tên, chức danh, số điện thoại).",
      },
      {
        title: "Đọc lại một lượt trước khi gửi",
        detail:
          "Soát chính tả, kiểm tra đúng người nhận, và đặc biệt: viết \"file đính kèm\" thì file phải thật sự nằm trong email — lỗi kinh điển của muôn thế hệ đi làm.",
      },
    ],
    notes: [
      "Reply All chỉ khi tất cả mọi người trong luồng thật sự cần biết — hộp thư đồng nghiệp không phải thùng rác chung.",
      "Đang bực thì cứ viết nháp cho hả dạ, nhưng ĐỪNG điền người nhận vội — để một tiếng sau đọc lại, thường bạn sẽ viết lại mềm hơn nhiều.",
      "Trong công việc, email là văn bản có thể được lưu và chuyển tiếp — viết gì cũng nghĩ đến cảnh nó được đọc bởi người thứ ba.",
    ],
    faq: [
      {
        q: "Xưng hô trong email thế nào cho đúng?",
        a: "Quan sát cách mọi người trong công ty đang viết rồi bắt nhịp theo. Chưa rõ thì \"anh/chị + tên\" là lựa chọn an toàn; thân quen rồi có thể giản dị hơn.",
      },
      {
        q: "Bao lâu chưa được trả lời thì nhắc?",
        a: "Việc thường thì sau 1–2 ngày làm việc nhắn nhẹ: \"Em nhắc lại email hôm trước, nhờ anh xem giúp em ạ.\" Việc gấp thì nhắn tin hoặc gọi trực tiếp, đừng ngồi chờ email.",
      },
    ],
    sources: [],
  },

  {
    slug: "xin-nghi-phep-dung-cach",
    title: "Xin nghỉ phép đúng cách",
    excerpt: "Nghỉ phép là quyền lợi, không phải đặc ân — nhưng xin khéo thì cả bạn lẫn team đều nhẹ nhõm.",
    readTimeMinutes: 2,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Báo sớm nhất có thể, đúng kênh công ty quy định (app chấm công, email, đơn giấy...), kèm phương án bàn giao công việc. Được duyệt rồi mới chốt vé tàu xe. Ốm đột xuất thì nhắn quản lý ngay khi biết, đừng chờ đến giờ làm.",
    prepare: [
      "Đọc quy định phép của công ty: còn bao nhiêu ngày phép, cần báo trước bao lâu, xin qua kênh nào",
      "Xem lịch team và deadline để chọn ngày nghỉ ít ảnh hưởng nhất",
      "Nghĩ sẵn phương án: việc nào xong trước, việc nào nhờ ai cover",
    ],
    steps: [
      {
        title: "Chọn ngày khôn ngoan",
        detail:
          "Tránh ngay ngày chốt số liệu, ngày họp lớn hay lúc team đang cháy deadline. Nghỉ dính cuối tuần hoặc lễ thì càng nên báo sớm vì nhiều người cùng ý tưởng với bạn đấy.",
      },
      {
        title: "Nói với quản lý trước, ghi hệ thống sau",
        detail:
          "Trao đổi miệng hoặc nhắn tin trước để sếp không bất ngờ, rồi mới tạo đơn trên hệ thống. Sếp bị \"úp sọt\" bởi cái đơn tự nhiên xuất hiện thường không vui lắm.",
      },
      {
        title: "Viết đơn rõ ràng, kèm phương án bàn giao",
        detail:
          "Đủ 3 ý: nghỉ ngày nào, lý do ngắn gọn, ai cover việc gì. Ví dụ: \"Em xin nghỉ phép thứ Năm 14/8 vì việc gia đình. Báo cáo ngày em đã nhờ chị Lan hỗ trợ.\"",
      },
      {
        title: "Chờ duyệt rồi mới chốt kế hoạch",
        detail:
          "Được đồng ý rồi hãy đặt vé tàu xe, khách sạn. Đặt trước khi duyệt là tự đưa mình vào thế khó nếu công việc phát sinh.",
      },
      {
        title: "Bàn giao gọn trước khi nghỉ",
        detail:
          "Nhắn cho người cover: việc đang ở đâu, file nằm chỗ nào, có gì gấp liên hệ ai. Bàn giao tốt hôm nay đổi lấy kỳ nghỉ không bị gọi điện hỏi han.",
      },
    ],
    notes: [
      "Ốm đột xuất: nhắn quản lý ngay khi biết mình không đi làm được, càng sớm càng tốt. Nghỉ ốm dài ngày có thể cần giấy khám — tuỳ quy định từng công ty.",
      "Số ngày phép năm và cách tính mỗi công ty một khác — đọc hợp đồng và sổ tay nhân viên, hoặc hỏi HR cho chắc.",
      "Nghỉ phép xong không cần áy náy — phép là quyền lợi trong hợp đồng, nghỉ ngơi đàng hoàng rồi quay lại làm tốt hơn.",
    ],
    faq: [
      {
        q: "Có cần kể lý do chi tiết không?",
        a: "Thường không — \"việc gia đình\" hay \"việc cá nhân\" là đủ lịch sự. Lý do càng cụ thể càng dễ thông cảm trong mùa bận, nhưng đó là lựa chọn của bạn, không phải nghĩa vụ.",
      },
      {
        q: "Sếp từ chối thì làm gì?",
        a: "Hỏi lý do và đề xuất phương án khác: đổi ngày, nghỉ nửa ngày, hoặc cam kết xử lý việc gấp từ xa. Thiện chí hai chiều thường gỡ được kha khá tình huống.",
      },
    ],
    sources: [],
  },

  {
    slug: "nhan-luong-thang-dau-kiem-tra-gi-tren-phieu-luong",
    title: "Nhận lương tháng đầu: kiểm tra gì trên phiếu lương",
    excerpt: "Tiền về tài khoản khoan vội chỉ ăn mừng — dành 5 phút đối chiếu phiếu lương với hợp đồng đã ký.",
    readTimeMinutes: 3,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Đối chiếu phiếu lương với hợp đồng: lương cơ bản, phụ cấp, số ngày công, và các khoản khấu trừ (bảo hiểm bắt buộc, thuế nếu có). Vào làm giữa tháng thì tháng đầu thường nhận theo số ngày công thực tế — thấy \"thiếu\" đừng hoảng, nhưng thấy lệch khó hiểu thì hỏi HR ngay.",
    prepare: [
      "Hợp đồng lao động hoặc thư mời nhận việc (offer) — căn cứ đối chiếu quan trọng nhất",
      "Phiếu lương tháng đầu (bản giấy, email hoặc trên hệ thống nội bộ)",
      "Ghi chú lại số ngày mình đi làm thực tế trong tháng",
    ],
    steps: [
      {
        title: "Kiểm tra số ngày công",
        detail:
          "Số ngày công trên phiếu có khớp số ngày bạn đi làm thật không? Vào làm từ giữa tháng thì lương tháng đầu tính theo ngày công thực tế là chuyện bình thường.",
      },
      {
        title: "Đối chiếu lương và phụ cấp với hợp đồng",
        detail:
          "Lương cơ bản, phụ cấp ăn trưa, xăng xe, điện thoại... từng khoản có đúng mức đã ký không? Đang thử việc thì đối chiếu với tỉ lệ lương thử việc ghi trong hợp đồng.",
      },
      {
        title: "Xem các khoản khấu trừ",
        detail:
          "Phiếu lương thường có mục trừ bảo hiểm bắt buộc, có thể thêm thuế thu nhập cá nhân, phí công đoàn... tuỳ mức lương và quy định. Chưa hiểu khoản nào cứ hỏi HR — đó là quyền của bạn.",
      },
      {
        title: "So khoản thực nhận với tiền về tài khoản",
        detail:
          "Con số \"thực lãnh\" cuối phiếu phải khớp số tiền vào tài khoản. Lệch dù chỉ ít cũng nên hỏi cho rõ.",
      },
      {
        title: "Thắc mắc thì hỏi lịch sự, kèm con số",
        detail:
          "Nhắn HR kiểu: \"Em thấy phiếu lương ghi 22 công nhưng em đi làm 24 ngày, chị kiểm tra giúp em với ạ.\" Có số liệu cụ thể, mọi chuyện giải quyết nhanh gọn — sai sót tính lương tháng đầu không hiếm và thường được chỉnh ngay.",
      },
      {
        title: "Lưu phiếu lương lại",
        detail:
          "Tạo một thư mục lưu phiếu lương hàng tháng. Sau này làm hồ sơ vay, chứng minh thu nhập hay quyết toán thuế đều cần đến — lúc đó khỏi đi xin lại từng tờ.",
      },
    ],
    notes: [
      "Ngày trả lương mỗi công ty một lịch (đầu tháng, mùng 5, mùng 10...) — hỏi HR ngày cố định để khỏi thấp thỏm.",
      "Cách tính lương thử việc, thuế và bảo hiểm theo quy định hiện hành và thoả thuận hợp đồng — nguồn chuẩn nhất là HR công ty bạn, đừng chỉ nghe \"nghe nói\" trên mạng.",
    ],
    faq: [
      {
        q: "Công ty không gửi phiếu lương thì làm sao?",
        a: "Cứ hỏi HR xin phiếu lương hoặc bảng tính lương chi tiết — người lao động có quyền biết lương mình được tính thế nào. Đa số công ty gửi qua email hoặc hệ thống nội bộ.",
      },
      {
        q: "Lương về trễ vài ngày có sao không?",
        a: "Trước tiên hỏi HR xem lịch trả lương chuẩn của công ty — nhiều khi bạn chỉ đoán nhầm ngày. Nếu trễ kéo dài và lặp lại thường xuyên thì đó là tín hiệu nên lưu tâm về công ty.",
      },
    ],
    sources: [],
  },
];
