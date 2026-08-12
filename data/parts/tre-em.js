// Phần TRẺ EM — nuôi con, thủ tục giấy tờ cho con, an toàn cho trẻ.
//
// ❗ Bài liên quan tới sức khỏe của trẻ phải cực kỳ thận trọng:
//    không nêu tên thuốc, không liều dùng, luôn liệt kê dấu hiệu phải đi viện ngay.

export const treEm = [
  {
    slug: "chuan-bi-do-di-sinh",
    title: "Chuẩn bị đồ đi sinh",
    excerpt:
      "Danh sách này để sẵn trong túi từ tuần 36 — tới lúc cần thì không ai còn đầu óc mà nghĩ nữa.",
    readTimeMinutes: 3,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Chuẩn bị một túi từ khoảng tuần 36, chia làm ba phần: giấy tờ, đồ cho mẹ, đồ cho bé. Quan trọng nhất là nhóm giấy tờ — thiếu là rắc rối ngay tại quầy tiếp nhận. Gọi hỏi bệnh viện trước xem họ cấp sẵn những gì để khỏi mang thừa.",
    prepare: [
      "Gọi bệnh viện hỏi danh sách họ yêu cầu — mỗi nơi mỗi khác",
      "Một túi riêng để sẵn ở chỗ dễ lấy, cả nhà đều biết chỗ",
      "Sạc dự phòng và ít tiền mặt",
    ],
    steps: [
      {
        title: "Nhóm giấy tờ để riêng một ngăn",
        detail:
          "CCCD của mẹ, thẻ BHYT, sổ khám thai và toàn bộ kết quả siêu âm, xét nghiệm. Nên photo sẵn vài bản.",
      },
      {
        title: "Đồ cho mẹ",
        detail:
          "Đồ lót dùng một lần, băng vệ sinh loại chuyên dùng sau sinh, áo cho con bú, dép chống trượt, đồ vệ sinh cá nhân, khăn.",
      },
      {
        title: "Đồ cho bé",
        detail:
          "Quần áo sơ sinh, tã, khăn sữa, khăn quấn, mũ và bao tay. Hỏi trước vì nhiều bệnh viện cấp sẵn phần lớn đồ này.",
      },
      {
        title: "Chuẩn bị cho người đi cùng",
        detail:
          "Chờ đợi có thể rất lâu: nước, đồ ăn nhẹ, áo khoác, sạc điện thoại. Người nhà kiệt sức thì mẹ cũng mệt theo.",
      },
      {
        title: "Ghi sẵn số điện thoại quan trọng",
        detail:
          "Bệnh viện, bác sĩ theo dõi thai, người thân. Viết ra giấy dán trong túi phòng khi điện thoại hết pin.",
      },
    ],
    notes: [
      "Ra máu, vỡ ối, đau bụng dữ dội, thai máy ít bất thường: đến bệnh viện ngay, không chờ đủ đồ.",
      "Mỗi bệnh viện có quy định riêng về đồ được mang vào — hỏi trước để khỏi phải xách về.",
    ],
    faq: [
      {
        q: "Nên chuẩn bị từ tuần bao nhiêu?",
        a: "Khoảng tuần 36 là hợp lý để không bị động. Có dấu hiệu sinh sớm thì chuẩn bị sớm hơn theo dặn dò của bác sĩ.",
      },
    ],
    sources: [],
  },

  {
    slug: "lam-giay-khai-sinh-cho-con",
    title: "Làm giấy khai sinh cho con",
    excerpt:
      "Thủ tục không khó, nhưng làm sớm thì mọi việc sau đó (bảo hiểm, hộ khẩu, đi học) đều trôi.",
    readTimeMinutes: 2,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Mang giấy chứng sinh do bệnh viện cấp cùng giấy tờ tuỳ thân của cha mẹ đến UBND phường xã để đăng ký khai sinh. Nhiều nơi đã làm được trực tuyến qua Cổng dịch vụ công, gộp luôn với đăng ký thường trú và cấp thẻ bảo hiểm y tế cho trẻ.",
    prepare: [
      "Giấy chứng sinh bệnh viện cấp — giữ kỹ, đây là giấy gốc quan trọng nhất",
      "CCCD của cha mẹ, giấy đăng ký kết hôn nếu có",
      "Thống nhất trước tên con và cách viết chính xác từng chữ",
    ],
    steps: [
      {
        title: "Giữ kỹ giấy chứng sinh",
        detail:
          "Nhận từ bệnh viện lúc xuất viện. Kiểm tra ngay thông tin họ tên mẹ, ngày giờ sinh, giới tính có đúng không.",
      },
      {
        title: "Chọn cách làm: trực tiếp hay online",
        detail:
          "Ra UBND phường xã, hoặc khai trên Cổng dịch vụ công nếu nơi bạn ở đã triển khai liên thông.",
      },
      {
        title: "Khai đúng chính tả tên con",
        detail:
          "Sai một dấu là sau này sửa rất mất công vì kéo theo mọi giấy tờ khác. Đọc lại thật kỹ trước khi ký.",
      },
      {
        title: "Hỏi luôn về thủ tục liên thông",
        detail:
          "Nhiều nơi làm một lần được cả ba việc: khai sinh, đăng ký thường trú và cấp thẻ bảo hiểm y tế cho trẻ.",
      },
      {
        title: "Nhận bản chính và xin thêm bản sao",
        detail: "Xin vài bản sao trích lục ngay từ đầu — sau này đi học, làm hồ sơ đều cần.",
      },
    ],
    notes: [
      "Thời hạn đăng ký khai sinh và mức lệ phí theo quy định hiện hành — hỏi cán bộ tiếp nhận cho chắc.",
      "Trường hợp cha mẹ chưa đăng ký kết hôn, sinh ở nơi khác nơi thường trú, hoặc có yếu tố nước ngoài đều có hướng dẫn riêng — cứ hỏi thẳng phường xã.",
    ],
    faq: [
      {
        q: "Mất giấy chứng sinh thì sao?",
        a: "Liên hệ ngay bệnh viện nơi sinh để xin cấp lại, và hỏi UBND phường xã về thủ tục thay thế trong trường hợp của bạn.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "theo-doi-lich-tiem-chung-cho-tre",
    title: "Theo dõi lịch tiêm chủng cho trẻ",
    excerpt:
      "Sót một mũi là chuyện rất dễ xảy ra khi cả nhà đang bận. Vài cách đơn giản để không bao giờ quên.",
    readTimeMinutes: 2,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Giữ sổ tiêm chủng như giữ giấy tờ quan trọng, chụp lại mỗi lần tiêm xong, và đặt nhắc trong điện thoại ngay tại chỗ cho mũi kế tiếp. Trạm y tế phường xã là nơi nắm rõ nhất lịch tiêm chủng mở rộng cho trẻ ở khu vực bạn.",
    prepare: [
      "Sổ tiêm chủng của bé",
      "Điện thoại để chụp và đặt lịch nhắc",
      "Số điện thoại trạm y tế phường xã",
    ],
    steps: [
      {
        title: "Chụp lại sổ sau mỗi lần tiêm",
        detail:
          "Sổ giấy có thể mất hoặc quên mang. Ảnh trong điện thoại thì luôn có sẵn khi cần.",
      },
      {
        title: "Đặt nhắc ngay tại phòng tiêm",
        detail:
          "Y tá dặn ngày quay lại thì mở điện thoại đặt luôn, đừng để về nhà rồi mới định ghi.",
      },
      {
        title: "Hỏi trạm y tế về lịch trong chương trình",
        detail:
          "Nhiều mũi nằm trong chương trình tiêm chủng mở rộng và được tiêm miễn phí theo lịch cố định.",
      },
      {
        title: "Báo tình trạng của bé trước khi tiêm",
        detail:
          "Bé đang sốt, đang uống thuốc, có tiền sử dị ứng hay phản ứng lần tiêm trước đều phải nói với nhân viên y tế.",
      },
      {
        title: "Ở lại theo dõi đủ thời gian",
        detail:
          "Nhân viên y tế dặn ở lại bao lâu thì ở đủ, và theo dõi bé tiếp tại nhà trong ngày hôm đó.",
      },
    ],
    notes: [
      "Sau tiêm nếu bé sốt cao khó hạ, co giật, khó thở, tím tái, quấy khóc bất thường kéo dài: đưa đi cấp cứu ngay.",
      "Lịch tiêm cụ thể do nhân viên y tế chỉ định — bài viết chỉ nói về cách theo dõi cho khỏi sót.",
    ],
    faq: [
      {
        q: "Lỡ trễ một mũi có phải tiêm lại từ đầu không?",
        a: "Thường là không, nhưng cách xử lý tuỳ loại vắc xin và khoảng trễ. Mang sổ tới trạm y tế để được hướng dẫn đúng.",
      },
    ],
    sources: [],
  },

  {
    slug: "tre-sot-xu-ly-tai-nha-va-khi-nao-di-vien",
    title: "Trẻ sốt: xử lý tại nhà và khi nào đi viện",
    excerpt:
      "Điều quan trọng nhất không phải con số trên nhiệt kế, mà là bé trông thế nào.",
    readTimeMinutes: 3,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Cho bé mặc thoáng, uống đủ nước, nghỉ ngơi và theo dõi sát. Đừng chỉ nhìn nhiệt độ — bé tỉnh táo, chịu chơi, chịu bú thì thường yên tâm hơn; bé lừ đừ, bỏ bú, khó đánh thức thì phải đi khám dù sốt không cao. Thuốc hạ sốt phải theo chỉ định của bác sĩ hoặc dược sĩ theo đúng cân nặng.",
    prepare: [
      "Nhiệt kế dùng được và biết cách đo",
      "Ghi lại: sốt từ lúc nào, cao nhất bao nhiêu, đã dùng gì chưa",
      "Số điện thoại cơ sở y tế gần nhất",
    ],
    steps: [
      {
        title: "Đo và ghi lại",
        detail:
          "Ghi giờ và nhiệt độ mỗi lần đo. Bác sĩ cần chuỗi số này chứ không chỉ con số hiện tại.",
      },
      {
        title: "Cho bé thoáng và uống đủ",
        detail:
          "Mặc đồ mỏng, phòng thoáng, cho uống nước hoặc bú nhiều hơn bình thường. Không ủ kín, không chườm lạnh, không lau cồn.",
      },
      {
        title: "Quan sát bé chứ đừng chỉ nhìn nhiệt kế",
        detail:
          "Bé vẫn chơi, vẫn bú, tỉnh táo là dấu hiệu tốt. Bé lừ đừ, khó đánh thức, bỏ bú là dấu hiệu đáng lo hơn nhiều so với con số cao.",
      },
      {
        title: "Thuốc hạ sốt phải hỏi trước",
        detail:
          "Liều tính theo cân nặng của bé và khoảng cách giữa các lần dùng rất quan trọng. Hỏi bác sĩ hoặc dược sĩ, đừng ước lượng và đừng dùng đơn của bé khác.",
      },
      {
        title: "Biết khi nào phải đi ngay",
        detail:
          "Không chần chừ nếu thấy bất kỳ dấu hiệu nguy hiểm nào ở phần lưu ý bên dưới.",
      },
    ],
    notes: [
      "ĐI VIỆN NGAY nếu: bé dưới 3 tháng tuổi mà sốt, co giật, khó thở, tím tái, li bì khó đánh thức, nôn nhiều, cổ cứng, phát ban không mờ khi ấn, bỏ bú hoàn toàn, hoặc sốt kéo dài quá vài ngày.",
      "Bài viết KHÔNG phải hướng dẫn điều trị và không nêu tên thuốc — mọi loại thuốc phải theo chỉ định.",
      "Không tự ý dùng kháng sinh; phần lớn trường hợp sốt ở trẻ không cần tới nó.",
    ],
    faq: [
      {
        q: "Sốt bao nhiêu độ thì phải lo?",
        a: "Không có một con số áp dụng cho mọi bé. Tuổi của bé và biểu hiện toàn trạng quan trọng hơn con số — đặc biệt trẻ dưới 3 tháng thì sốt là phải đi khám ngay.",
      },
      {
        q: "Có nên chườm lạnh cho nhanh hạ không?",
        a: "Không nên. Cách này có thể khiến bé run và khó chịu hơn. Cứ mặc thoáng, uống đủ nước và làm theo hướng dẫn của nhân viên y tế.",
      },
    ],
    sources: [],
  },

  {
    slug: "day-con-quy-tac-an-toan-than-the",
    title: "Dạy con quy tắc an toàn thân thể",
    excerpt:
      "Nói sớm và nói bình thản, để con biết cách từ chối và biết tìm ai khi có chuyện.",
    readTimeMinutes: 3,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Dạy con ba điều cốt lõi: những vùng đồ lót che là riêng tư, không ai được nhìn hay chạm vào trừ khi để chăm sóc y tế có bố mẹ bên cạnh; con có quyền nói KHÔNG với bất kỳ ai kể cả người quen; và bí mật khiến con sợ thì phải kể ngay cho bố mẹ.",
    prepare: [
      "Chọn lúc bình thường để nói, ví dụ lúc tắm cho con — đừng biến nó thành buổi họp nghiêm trọng",
      "Dùng đúng tên gọi các bộ phận cơ thể, không dùng từ né tránh",
      "Xác định trước 2-3 người con có thể tìm tới nếu bố mẹ vắng",
    ],
    steps: [
      {
        title: "Giải thích vùng riêng tư đơn giản",
        detail:
          "Những chỗ đồ lót che là của riêng con. Bác sĩ khám hay bố mẹ vệ sinh cho con thì phải có sự đồng ý và có người lớn tin cậy ở đó.",
      },
      {
        title: "Dạy con quyền nói không",
        detail:
          "Kể cả với người quen, người lớn tuổi hay họ hàng. Ôm hôn khi con không muốn thì con được phép từ chối, và người lớn phải tôn trọng.",
      },
      {
        title: "Phân biệt bí mật vui và bí mật đáng sợ",
        detail:
          "Bí mật về quà sinh nhật thì vui. Bí mật khiến con thấy sợ, thấy khó chịu, hoặc bị dặn đừng kể bố mẹ thì phải kể ngay.",
      },
      {
        title: "Lập danh sách người tin cậy",
        detail:
          "Ghi tên và số điện thoại 2-3 người con có thể gọi. Dán ở chỗ con thấy được.",
      },
      {
        title: "Nhắc lại nhẹ nhàng theo thời gian",
        detail:
          "Nói một lần rồi thôi thì con quên. Nhắc lại vài tháng một lần bằng câu chuyện thường ngày.",
      },
    ],
    notes: [
      "Nếu con kể chuyện gì đó: giữ bình tĩnh, tin con, không tra hỏi dồn dập và không trách con. Phản ứng hoảng loạn khiến trẻ sợ và không kể tiếp.",
      "Nghi ngờ con bị xâm hại: đưa con tới cơ sở y tế và trình báo công an. Đừng tự điều tra và đừng im lặng vì sợ tai tiếng.",
      "Phần lớn trường hợp xâm hại trẻ em do người quen gây ra — dạy con quy tắc chứ đừng chỉ dặn tránh người lạ.",
    ],
    faq: [
      {
        q: "Con mấy tuổi thì bắt đầu dạy được?",
        a: "Có thể bắt đầu rất sớm bằng ngôn ngữ đơn giản, ngay từ tuổi mẫu giáo, rồi tăng dần độ chi tiết theo tuổi.",
      },
      {
        q: "Nói vậy con có sợ người lớn không?",
        a: "Không, nếu bạn nói bình thản như dạy sang đường an toàn. Mục tiêu là con biết cách xử lý, chứ không phải sợ hãi mọi người.",
      },
    ],
    sources: [],
  },

  {
    slug: "cho-con-dung-dien-thoai-dat-gioi-han",
    title: "Cho con dùng điện thoại: đặt giới hạn",
    excerpt:
      "Cấm tiệt thì khó, thả nổi thì lo. Đặt luật rõ ràng từ đầu dễ hơn nhiều so với đi giành lại điện thoại về sau.",
    readTimeMinutes: 3,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Thống nhất luật trước khi đưa máy cho con: dùng lúc nào, ở đâu, xem gì, và điều gì thì phải hỏi bố mẹ. Bật chế độ kiểm soát của phụ huynh trên máy, để máy dùng ở nơi chung thay vì trong phòng riêng, và quan trọng nhất là làm gương.",
    prepare: [
      "Thống nhất giữa bố và mẹ trước, tránh mỗi người một luật",
      "Tìm phần cài đặt kiểm soát của phụ huynh trên hệ điều hành máy",
      "Chuẩn bị vài hoạt động thay thế — cấm mà không có gì thay thế thì khó bền",
    ],
    steps: [
      {
        title: "Viết ra luật cùng con",
        detail:
          "Cho con tham gia đặt luật thì con giữ luật tốt hơn nhiều. Ghi ra giấy dán lên tủ lạnh.",
      },
      {
        title: "Bật kiểm soát của phụ huynh",
        detail:
          "Giới hạn thời gian, chặn nội dung theo tuổi, kiểm soát việc tải ứng dụng và mua trong ứng dụng.",
      },
      {
        title: "Đặt vùng không điện thoại",
        detail:
          "Bàn ăn và phòng ngủ là hai chỗ nên giữ. Máy sạc qua đêm ở phòng khách, không sạc trong phòng con.",
      },
      {
        title: "Dạy con về người lạ trên mạng",
        detail:
          "Không cho thông tin cá nhân, không gửi ảnh, không hẹn gặp. Ai đó dặn con giữ bí mật với bố mẹ là dấu hiệu nguy hiểm.",
      },
      {
        title: "Làm gương",
        detail:
          "Bố mẹ vừa cấm vừa lướt suốt bữa cơm thì luật mất hiệu lực ngay. Đây là phần khó nhất.",
      },
    ],
    notes: [
      "Con bị bắt nạt trên mạng hoặc bị người lạ gạ gẫm: lưu bằng chứng, chặn, và báo nhà trường hoặc công an nếu nghiêm trọng.",
      "Phản ứng gay gắt khi con kể sẽ khiến lần sau con giấu. Ưu tiên giữ đường dây liên lạc mở.",
    ],
    faq: [
      {
        q: "Mấy tuổi thì cho con dùng điện thoại riêng?",
        a: "Không có mốc chung cho mọi nhà. Quan trọng hơn là con đã hiểu và giữ được luật hay chưa, và bạn có theo dõi được không.",
      },
      {
        q: "Con phản ứng dữ dội khi bị lấy máy thì sao?",
        a: "Báo trước 10 phút thay vì giật ngang, và giữ nguyên luật đã thống nhất. Nhượng bộ một lần là lần sau khó hơn gấp đôi.",
      },
    ],
    sources: [],
  },
];
