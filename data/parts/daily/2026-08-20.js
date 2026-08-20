// Bài đăng ngày 2026-08-20
// Mỗi bài phải có publishedAt: "2026-08-20"
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-20";

export const day20260820 = [
  // ═══════════════════════ XE CỘ ═══════════════════════
  {
    slug: "dang-ky-xe-may-moi-mua",
    title: "Đăng ký xe máy mới mua: giấy tờ và các bước",
    excerpt:
      "Mua xe xong chưa phải là xong. Đây là toàn bộ đường đi để chiếc xe có biển số hợp pháp mang tên bạn.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Cửa hàng sẽ giao cho bạn hoá đơn, phiếu kiểm tra chất lượng và giấy tờ nguồn gốc xe. Mang bộ đó cùng CCCD tới cơ quan công an nơi bạn cư trú để nộp lệ phí trước bạ, đăng ký và bấm biển. Nhiều nơi đã cho khai trước trên cổng dịch vụ công. Nhiều cửa hàng cũng nhận làm trọn gói — hỏi giá trước rồi quyết.",
    prepare: [
      "Toàn bộ giấy tờ cửa hàng giao: hoá đơn, phiếu kiểm tra chất lượng, giấy chứng nhận nguồn gốc",
      "CCCD của người sẽ đứng tên xe",
      "Tiền lệ phí trước bạ và lệ phí đăng ký — hỏi cửa hàng ước lượng trước để mang đủ",
      "Nửa buổi rảnh, tránh sáng thứ Hai vì thường rất đông",
    ],
    steps: [
      {
        title: "Kiểm tra bộ giấy tờ ngay tại cửa hàng",
        detail:
          "Trước khi rời cửa hàng, đối chiếu số khung số máy trên giấy với số dập trên xe. Sai một ký tự là hồ sơ bị trả về và bạn phải quay lại cửa hàng.",
      },
      {
        title: "Hỏi cửa hàng có làm trọn gói không",
        detail:
          "Nhiều nơi nhận làm thay và cộng phí dịch vụ. Hỏi rõ phí bao nhiêu, mất mấy ngày. Tiện thì dùng, còn muốn tiết kiệm thì tự đi.",
      },
      {
        title: "Xác định nơi đăng ký",
        detail:
          "Thường là cơ quan công an nơi bạn thường trú hoặc tạm trú. Gọi hỏi trước xem họ nhận hồ sơ vào buổi nào và cần thêm giấy tờ gì.",
      },
      {
        title: "Khai trước trên cổng dịch vụ công nếu được",
        detail:
          "Nhiều địa phương đã cho khai online rồi mang mã hồ sơ tới. Làm vậy thì tới nơi chỉ còn phần nộp phí và bấm biển.",
      },
      {
        title: "Nộp lệ phí trước bạ",
        detail:
          "Đây là khoản riêng, thường nộp trước hoặc nộp cùng lúc tuỳ quy trình từng nơi. Giữ biên lai vì bước sau cần xuất trình.",
      },
      {
        title: "Nộp hồ sơ đăng ký",
        detail:
          "Nộp bộ giấy tờ cùng CCCD. Cán bộ sẽ kiểm tra và có thể yêu cầu bạn đưa xe tới để đối chiếu số khung số máy.",
      },
      {
        title: "Cà số khung số máy nếu được yêu cầu",
        detail:
          "Có nơi yêu cầu mang xe tới để cà số lên giấy. Hỏi trước khi đi để khỏi phải chạy về lấy xe.",
      },
      {
        title: "Bấm biển số",
        detail:
          "Hiện nhiều nơi bấm biển ngẫu nhiên trên máy tính. Nhận biển và giấy hẹn lấy giấy đăng ký xe.",
      },
      {
        title: "Lắp biển và giữ giấy hẹn",
        detail:
          "Lắp biển đúng vị trí, không che khuất, không bẻ cong. Chụp ảnh giấy hẹn lưu trong máy phòng khi làm rơi.",
      },
      {
        title: "Nhận giấy đăng ký và kiểm tra từng dòng",
        detail:
          "Soi kỹ họ tên, số CCCD, nhãn hiệu, số khung số máy, biển số. Sai sót phát hiện sớm dễ sửa hơn nhiều so với phát hiện lúc bán xe.",
      },
      {
        title: "Mua bảo hiểm bắt buộc",
        detail:
          "Đây là giấy tờ bạn phải mang theo khi đi đường. Mua ngay cho xong, giá không đáng bao nhiêu so với mức phạt khi thiếu.",
      },
    ],
    notes: [
      "Lệ phí trước bạ và lệ phí đăng ký khác nhau theo loại xe và theo địa phương — hỏi cửa hàng hoặc cơ quan đăng ký để mang đủ tiền.",
      "Giữ giấy đăng ký xe ở nhà và mang bản sao khi đi đường; nhiều nơi đã chấp nhận giấy tờ tích hợp trên VNeID.",
      "Đừng mua xe không có giấy tờ nguồn gốc dù giá rẻ tới đâu — bạn sẽ không đăng ký được và có nguy cơ mua phải xe gian.",
      "Người đứng tên xe nên là người sử dụng chính, để sau này bán hoặc xử lý sự cố đỡ rắc rối.",
    ],
    faq: [
      {
        q: "Đăng ký xe có bắt buộc chính chủ không?",
        a: "Xe nên đứng tên người sử dụng. Đi xe của người thân thì thường không sao, nhưng mua bán xong mà không sang tên thì rắc rối khi có sự cố hoặc phạt nguội.",
      },
      {
        q: "Bao lâu thì có giấy đăng ký?",
        a: "Thay đổi theo địa phương và thời điểm. Hỏi ngay lúc nộp hồ sơ và ghi lại ngày hẹn, đừng ước lượng theo lời kể.",
      },
      {
        q: "Có được chọn biển số đẹp không?",
        a: "Hiện nhiều nơi bấm ngẫu nhiên trên máy. Đấu giá biển số là hình thức riêng có quy định riêng — hỏi cơ quan đăng ký nếu bạn quan tâm.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "sang-ten-xe-may-khi-mua-ban",
    title: "Sang tên xe máy khi mua bán",
    excerpt:
      "Không sang tên thì người bán vẫn chịu phạt nguội thay bạn, còn bạn thì khó bán lại. Đây là cách làm cho gọn.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Hai bên ký hợp đồng mua bán có công chứng hoặc chứng thực, người bán làm thủ tục thu hồi đăng ký ở nơi đã đăng ký cũ, rồi người mua mang hồ sơ tới cơ quan công an nơi mình cư trú để đăng ký sang tên. Làm ngay lúc mua bán, đừng để lâu vì tìm lại người bán sau vài năm là chuyện rất mệt.",
    prepare: [
      "Giấy đăng ký xe bản gốc",
      "CCCD của cả người mua và người bán",
      "Hợp đồng mua bán — nên công chứng hoặc chứng thực để chắc chắn",
      "Số điện thoại người bán, giữ liên lạc cho tới khi xong thủ tục",
    ],
    steps: [
      {
        title: "Kiểm tra xe trước khi trả tiền",
        detail:
          "Đối chiếu số khung số máy trên xe với giấy đăng ký. Kiểm tra xem xe có đang cầm cố, thế chấp hay dính phạt nguội không — hỏi thẳng người bán và tra cứu nếu được.",
      },
      {
        title: "Làm hợp đồng mua bán đàng hoàng",
        detail:
          "Ghi rõ thông tin hai bên, thông tin xe, giá, ngày. Mang ra phòng công chứng hoặc UBND phường xã chứng thực. Đừng chỉ viết tay rồi thôi.",
      },
      {
        title: "Chốt trách nhiệm trước ngày bàn giao",
        detail:
          "Ghi vào hợp đồng: mọi vi phạm và phạt nguội phát sinh trước ngày bàn giao thuộc về người bán. Câu này cứu bạn khỏi nhiều rắc rối.",
      },
      {
        title: "Người bán làm thủ tục thu hồi",
        detail:
          "Người bán tới nơi đã đăng ký xe để làm thủ tục thu hồi đăng ký và biển số theo quy định hiện hành. Nhắc họ làm sớm.",
      },
      {
        title: "Người mua chuẩn bị hồ sơ",
        detail:
          "Hợp đồng mua bán đã công chứng, giấy đăng ký cũ, giấy tờ thu hồi (nếu có), CCCD. Hỏi cơ quan tiếp nhận xem còn cần gì.",
      },
      {
        title: "Nộp lệ phí trước bạ",
        detail:
          "Xe cũ vẫn phải nộp lệ phí trước bạ khi sang tên, mức tính theo quy định. Giữ biên lai.",
      },
      {
        title: "Nộp hồ sơ đăng ký sang tên",
        detail:
          "Tại cơ quan công an nơi bạn cư trú. Có thể phải mang xe tới để cà số khung số máy — hỏi trước.",
      },
      {
        title: "Nhận biển số mới nếu khác tỉnh",
        detail:
          "Sang tên khác tỉnh thường phải đổi biển. Cùng tỉnh thì tuỳ quy định hiện hành, hỏi cán bộ tiếp nhận.",
      },
      {
        title: "Nhận giấy đăng ký mang tên bạn",
        detail:
          "Kiểm tra kỹ từng dòng trước khi rời quầy. Từ lúc này chiếc xe mới thật sự là của bạn về mặt giấy tờ.",
      },
      {
        title: "Cập nhật bảo hiểm",
        detail:
          "Mua bảo hiểm bắt buộc mới mang tên bạn, hoặc làm thủ tục chuyển nếu bảo hiểm cũ còn hạn.",
      },
    ],
    notes: [
      "Chưa sang tên thì phạt nguội vẫn về người đứng tên cũ, và bạn sẽ rất khó bán lại xe.",
      "Xe mua qua nhiều đời chủ mà giấy tờ đứt đoạn thì thủ tục phức tạp hơn nhiều — hỏi kỹ cơ quan đăng ký trước khi trả tiền mua.",
      "Thủ tục và lệ phí thay đổi theo quy định từng thời điểm; hỏi trực tiếp cơ quan tiếp nhận cho chắc.",
      "Đừng mua xe mà người bán không có giấy đăng ký bản gốc, dù họ giải thích thế nào.",
    ],
    faq: [
      {
        q: "Mua xe lâu rồi giờ mới sang tên có được không?",
        a: "Được, nhưng khó hơn vì phải liên hệ lại người bán. Có quy định riêng cho trường hợp xe qua nhiều đời chủ — hỏi cơ quan công an nơi bạn ở.",
      },
      {
        q: "Không tìm được người bán thì sao?",
        a: "Mang toàn bộ giấy tờ đang có tới cơ quan đăng ký xe hỏi hướng xử lý. Có trường hợp giải quyết được nhưng thủ tục dài hơn.",
      },
      {
        q: "Sang tên tốn khoảng bao nhiêu?",
        a: "Gồm lệ phí trước bạ tính theo giá trị xe và lệ phí đăng ký. Hỏi cơ quan tiếp nhận để biết con số cho trường hợp của bạn.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "bi-csgt-dung-xe-xuat-trinh-gi",
    title: "Bị CSGT dừng xe: xuất trình gì, cư xử sao",
    excerpt:
      "Tim đập nhanh là phản ứng bình thường. Biết trước trình tự thì bạn bình tĩnh và mọi chuyện xong nhanh hơn.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Tấp vào lề an toàn, tắt máy, bỏ mũ bảo hiểm, chào và xuất trình giấy tờ khi được yêu cầu: giấy phép lái xe, đăng ký xe, bảo hiểm bắt buộc, CCCD. Giấy tờ tích hợp trên VNeID nhiều nơi đã chấp nhận. Giữ thái độ bình tĩnh và lịch sự — đây là yếu tố ảnh hưởng tới cả buổi làm việc nhiều hơn bạn nghĩ.",
    prepare: [
      "Luôn mang đủ: giấy phép lái xe, đăng ký xe, bảo hiểm bắt buộc, CCCD",
      "Cài sẵn VNeID và biết cách mở phần giấy tờ, phòng khi quên bản giấy",
      "Điện thoại còn pin",
      "Biết trước quyền của mình: được hỏi lý do dừng xe và được xem biên bản trước khi ký",
    ],
    steps: [
      {
        title: "Tấp vào lề an toàn rồi mới dừng",
        detail:
          "Bật xi nhan, giảm tốc từ từ, tấp vào lề phải ở chỗ không cản giao thông. Đừng phanh gấp giữa đường.",
      },
      {
        title: "Tắt máy, bỏ mũ bảo hiểm",
        detail:
          "Hai việc nhỏ này thể hiện thái độ hợp tác và giúp cuộc trao đổi diễn ra dễ chịu hơn ngay từ đầu.",
      },
      {
        title: "Chào và chờ được yêu cầu",
        detail:
          "Một câu chào bình thường là đủ. Đừng vội rút ví ra hay hỏi dồn dập.",
      },
      {
        title: "Hỏi lý do dừng xe một cách lịch sự",
        detail:
          "Bạn có quyền biết mình bị dừng vì lý do gì. Cách hỏi: dạ cho em hỏi em vi phạm lỗi gì ạ.",
      },
      {
        title: "Xuất trình giấy tờ được yêu cầu",
        detail:
          "Đưa từng thứ được hỏi, không đưa cả xấp. Nếu dùng giấy tờ trên VNeID thì mở sẵn màn hình và giơ cho xem, đừng đưa điện thoại đã mở khoá cho người khác cầm.",
      },
      {
        title: "Nghe lỗi và giữ bình tĩnh",
        detail:
          "Tranh cãi to tiếng không giúp gì và có thể làm tình huống nặng thêm. Không đồng ý thì trình bày ngắn gọn, rõ ràng.",
      },
      {
        title: "Đọc kỹ biên bản trước khi ký",
        detail:
          "Xem lỗi ghi có đúng không, thông tin cá nhân có chính xác không. Không đồng ý với nội dung nào thì ghi ý kiến của bạn vào phần dành cho người vi phạm rồi mới ký.",
      },
      {
        title: "Giữ biên bản và hỏi cách nộp phạt",
        detail:
          "Hỏi rõ nộp ở đâu, hạn bao lâu, có nộp online được không. Nhiều nơi đã cho nộp phạt qua cổng dịch vụ công.",
      },
      {
        title: "Nếu xe bị tạm giữ",
        detail:
          "Hỏi rõ giữ ở đâu, bao lâu, cần giấy tờ gì để lấy lại. Kiểm tra biên bản tạm giữ ghi đúng tình trạng xe và đồ đạc trên xe.",
      },
      {
        title: "Nộp phạt đúng hạn",
        detail:
          "Quá hạn thường bị tính thêm. Nộp xong giữ biên lai, và kiểm tra lại trên hệ thống nếu nộp online.",
      },
    ],
    notes: [
      "Không đưa tiền để xin bỏ qua — đây là hành vi vi phạm pháp luật cho cả hai bên.",
      "Bạn có quyền yêu cầu người làm nhiệm vụ cho biết họ tên, đơn vị. Đề nghị một cách lịch sự.",
      "Ghi hình được phép ở nơi công cộng nhưng đừng gí sát mặt người khác hay cản trở công việc của họ — làm vậy chỉ khiến tình huống căng thẳng thêm.",
      "Quy định về giấy tờ phải mang và mức phạt thay đổi theo thời điểm — tra cứu văn bản mới nhất nếu bạn cần chắc chắn.",
    ],
    faq: [
      {
        q: "Quên mang giấy tờ thì sao?",
        a: "Thử mở giấy tờ tích hợp trên VNeID — nhiều nơi đã chấp nhận. Nếu không có gì cả thì trình bày thật và làm theo hướng dẫn; đừng bịa lý do.",
      },
      {
        q: "Không đồng ý với lỗi bị lập thì làm gì?",
        a: "Ghi rõ ý kiến của bạn vào biên bản trước khi ký, giữ một bản, và làm thủ tục khiếu nại theo hướng dẫn ghi trên biên bản.",
      },
      {
        q: "Có bắt buộc ký biên bản không?",
        a: "Không ký thì biên bản vẫn có giá trị khi có người chứng kiến theo quy định. Ký kèm ý kiến của bạn thường có lợi hơn là từ chối ký.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-xe-may-duong-dai-chuan-bi-gi",
    title: "Đi xe máy đường dài: chuẩn bị gì",
    excerpt:
      "Chuyến đi hỏng thường không phải vì xe hỏng, mà vì người lái kiệt sức. Đây là cách chuẩn bị cho cả hai.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Bảo dưỡng xe trước chuyến đi ít nhất một hai ngày (nhớt, lốp, phanh, đèn, xích), chia chặng để nghỉ mỗi 60–90 phút, và mang theo bộ giấy tờ cùng ít đồ sửa chữa cơ bản. Quan trọng nhất: đừng cố chạy khi đã buồn ngủ — đây là nguyên nhân tai nạn hàng đầu trên đường dài.",
    prepare: [
      "Bảo dưỡng xe trước 1–2 ngày, không làm ngay sáng hôm đi",
      "Giấy tờ đầy đủ: bằng lái, đăng ký xe, bảo hiểm, CCCD",
      "Áo mưa, găng tay, kính chắn gió hoặc kính râm",
      "Sạc dự phòng, giá đỡ điện thoại, ít tiền mặt",
      "Nước uống và đồ ăn nhẹ để không phải dừng tìm quán khi đói",
    ],
    steps: [
      {
        title: "Mang xe đi bảo dưỡng trước vài ngày",
        detail:
          "Thay nhớt nếu tới hạn, kiểm tra lốp, phanh, đèn, còi, xích. Làm trước vài ngày để nếu có vấn đề thì còn kịp xử lý.",
      },
      {
        title: "Kiểm tra lốp kỹ hơn bình thường",
        detail:
          "Xem độ mòn gai, có vết nứt hay phồng không, bơm đúng áp suất. Lốp mòn đi đường dài rất nguy hiểm khi gặp mưa.",
      },
      {
        title: "Lên lịch trình có chỗ nghỉ",
        detail:
          "Chia đường thành các chặng 60–90 phút. Đánh dấu sẵn cây xăng, quán nước, trạm dừng trên bản đồ.",
      },
      {
        title: "Xuất phát sớm, tránh đi đêm",
        detail:
          "Đi ban ngày an toàn hơn nhiều. Nếu bắt buộc đi tối thì giảm tốc và tăng khoảng cách với xe trước.",
      },
      {
        title: "Đóng đồ gọn và cân đối",
        detail:
          "Buộc chắc, không để đồ lệch một bên hay che đèn hậu và biển số. Đồ quý giá và giấy tờ để trong người.",
      },
      {
        title: "Mặc đồ bảo hộ tối thiểu",
        detail:
          "Mũ bảo hiểm đạt chuẩn cài quai đúng, áo dài tay, găng tay, giày kín mũi. Nghe nóng nực nhưng ngã một lần là hiểu vì sao.",
      },
      {
        title: "Nghỉ theo lịch chứ đừng nghỉ theo cảm giác",
        detail:
          "Cứ 60–90 phút dừng 10 phút dù chưa thấy mệt. Mệt tới lúc cảm nhận được thì phản xạ đã giảm từ lâu rồi.",
      },
      {
        title: "Nhận diện dấu hiệu buồn ngủ",
        detail:
          "Chớp mắt lâu, không nhớ vừa qua đoạn nào, lấn làn nhẹ. Có bất kỳ dấu hiệu nào thì dừng ngay và chợp mắt 15 phút — không có chuyến đi nào đáng đánh đổi.",
      },
      {
        title: "Mang bộ dụng cụ tối thiểu",
        detail:
          "Bình xịt tự vá, bộ vá nhanh, dây buộc, đèn pin nhỏ. Không cần cả thùng đồ nghề, chỉ cần đủ để đi tiếp tới tiệm gần nhất.",
      },
      {
        title: "Báo lịch trình cho người nhà",
        detail:
          "Gửi cho ai đó biết bạn đi đâu, dự kiến tới lúc nào. Chia sẻ vị trí trực tiếp nếu điện thoại hỗ trợ.",
      },
      {
        title: "Gặp mưa thì tấp vào chờ",
        detail:
          "Mưa lớn làm đường trơn và tầm nhìn kém. Dừng lại 20 phút an toàn hơn nhiều so với cố chạy cho kịp giờ.",
      },
    ],
    notes: [
      "Buồn ngủ khi lái là nguyên nhân tai nạn hàng đầu trên đường dài. Cà phê chỉ trì hoãn chứ không thay được giấc ngủ.",
      "Không chở quá tải và không kẹp ba — vừa nguy hiểm vừa bị phạt.",
      "Nếu đường đi có đoạn cao tốc thì nhớ xe máy không được vào — kiểm tra lộ trình trước.",
      "Đi nhóm thì thống nhất trước tốc độ, điểm dừng và cách ra hiệu cho nhau.",
    ],
    faq: [
      {
        q: "Một ngày chạy bao nhiêu km là hợp lý?",
        a: "Tuỳ sức và tuỳ đường, nhưng người ít kinh nghiệm nên giữ trong khoảng vừa phải và ưu tiên nghỉ đủ. Chạy cố cho đủ chỉ tiêu là cách hỏng chuyến đi.",
      },
      {
        q: "Xe số hay tay ga đi đường dài tốt hơn?",
        a: "Xe số thường bền và tiết kiệm hơn cho đường dài, tay ga đỡ mỏi tay hơn. Quan trọng là xe được bảo dưỡng tốt và bạn quen tay với nó.",
      },
      {
        q: "Nên gửi xe theo tàu hay tự chạy?",
        a: "Đường quá dài hoặc thời tiết xấu thì gửi xe theo tàu, xe khách rồi bay hoặc đi tàu là lựa chọn hợp lý. Hỏi giá vài nhà xe để so.",
      },
    ],
    sources: [],
  },

  {
    slug: "gui-xe-may-theo-tau-xe-khach",
    title: "Gửi xe máy theo tàu hoặc xe khách",
    excerpt:
      "Rẻ hơn và đỡ mệt hơn tự chạy đường dài. Nhưng có mấy chỗ dễ mất đồ và mất tiền oan nếu không biết trước.",
    publishedAt: NGAY,
    readTimeMinutes: 3,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Gọi hỏi giá vài nhà xe hoặc ga tàu trước, mang theo giấy đăng ký xe và CCCD, rút hết xăng theo yêu cầu, tháo gương và đồ dễ rơi, chụp ảnh xe từ nhiều góc trước khi giao, và giữ kỹ biên nhận. Đối chiếu ảnh khi nhận lại.",
    prepare: [
      "Giấy đăng ký xe và CCCD",
      "Số điện thoại người nhận ở đầu kia",
      "Điện thoại để chụp ảnh hiện trạng xe",
      "Vài dây buộc và túi để đựng gương, đồ tháo rời",
    ],
    steps: [
      {
        title: "Gọi hỏi giá vài nơi",
        detail:
          "Ga tàu, nhà xe khách, dịch vụ vận chuyển đều nhận. Giá chênh nhau khá xa. Hỏi luôn thời gian tới nơi và có giao tận nhà không.",
      },
      {
        title: "Hỏi rõ yêu cầu về xăng",
        detail:
          "Phần lớn yêu cầu rút gần hết xăng vì lý do an toàn. Hỏi trước để khỏi bị từ chối nhận hàng lúc đã tới nơi.",
      },
      {
        title: "Tháo gương và đồ dễ rơi",
        detail:
          "Gương, baga rời, đồ trang trí, thảm để chân. Cho vào túi mang theo hoặc gửi kèm nhưng ghi rõ trong biên nhận.",
      },
      {
        title: "Chụp ảnh xe từ nhiều góc",
        detail:
          "Chụp bốn phía, đồng hồ công-tơ-mét, và cận cảnh những vết xước có sẵn. Đây là bằng chứng duy nhất nếu xe bị hư hỏng trên đường.",
      },
      {
        title: "Đọc kỹ biên nhận trước khi ký",
        detail:
          "Xem có ghi đúng biển số, tình trạng xe, giá cước, và điều khoản bồi thường nếu hư hỏng hay mất mát không.",
      },
      {
        title: "Hỏi về bảo hiểm hàng hoá",
        detail:
          "Một số nơi có, một số không. Nếu xe giá trị cao thì hỏi rõ mức bồi thường tối đa họ chịu trách nhiệm.",
      },
      {
        title: "Giữ biên nhận và chụp lại",
        detail:
          "Chụp một tấm lưu điện thoại. Gửi luôn cho người nhận ở đầu kia nếu không phải bạn đi nhận.",
      },
      {
        title: "Theo dõi hành trình",
        detail:
          "Hỏi cách tra cứu hoặc số điện thoại liên hệ. Gọi trước một buổi để biết giờ xe tới.",
      },
      {
        title: "Kiểm tra kỹ khi nhận lại",
        detail:
          "Đối chiếu với ảnh đã chụp NGAY TẠI CHỖ trước khi ký nhận. Phát hiện hư hỏng sau khi đã ký và rời đi thì rất khó đòi.",
      },
      {
        title: "Đổ xăng và kiểm tra trước khi chạy",
        detail:
          "Xe để lâu không nổ có thể yếu bình. Kiểm tra phanh, đèn, lốp trước khi chạy về nhà.",
      },
    ],
    notes: [
      "Đừng để giấy tờ, tiền hay đồ giá trị trong cốp xe khi gửi.",
      "Giá cước thay đổi theo mùa, dịp lễ Tết thường tăng mạnh và cần đặt trước.",
      "Xe điện có quy định riêng về vận chuyển pin — hỏi kỹ trước khi mang tới.",
      "Nếu xe hư hỏng khi nhận, lập biên bản tại chỗ với nhà xe trước khi rời đi.",
    ],
    faq: [
      {
        q: "Gửi xe mất bao lâu?",
        a: "Tuỳ tuyến và phương tiện, thường vài ngày với đường dài. Hỏi cụ thể khi đặt và cộng thêm vài ngày dự phòng vào kế hoạch của bạn.",
      },
      {
        q: "Có cần đi cùng chuyến với xe không?",
        a: "Không bắt buộc. Nhiều người gửi xe trước rồi bay hoặc đi tàu, tới nơi thì nhận. Nhớ để lại số điện thoại người nhận.",
      },
      {
        q: "Xe bị mất thì sao?",
        a: "Đây là lý do phải giữ biên nhận và hỏi rõ mức bồi thường trước khi gửi. Chọn nhà xe có địa chỉ rõ ràng thay vì người nhận vận chuyển tự phát.",
      },
    ],
    sources: [],
  },

  // ═══════════════════════ GIẤY TỜ ═══════════════════════
  {
    slug: "dang-ky-ket-hon-thu-tuc-va-giay-to",
    title: "Đăng ký kết hôn: thủ tục và giấy tờ",
    excerpt:
      "Thủ tục nhẹ nhàng hơn nhiều người tưởng — nhưng có một giấy tờ mà rất nhiều cặp quên, phải đi lại lần hai.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Hai người cùng tới UBND phường xã nơi một trong hai bên cư trú, mang CCCD và giấy xác nhận tình trạng hôn nhân. Giấy xác nhận tình trạng hôn nhân chính là thứ nhiều người quên — phải xin ở nơi mình từng thường trú. Nhiều nơi đã cho khai trước trên cổng dịch vụ công.",
    prepare: [
      "CCCD của cả hai người, còn hạn",
      "Giấy xác nhận tình trạng hôn nhân của mỗi bên — xin tại nơi từng thường trú, đây là giấy hay bị quên nhất",
      "Nếu từng kết hôn: bản án hoặc quyết định ly hôn đã có hiệu lực, hoặc giấy chứng tử",
      "Cả hai phải có mặt cùng lúc — không ai ký thay được",
    ],
    steps: [
      {
        title: "Xin giấy xác nhận tình trạng hôn nhân trước",
        detail:
          "Đây là bước phải làm TRƯỚC. Xin tại UBND phường xã nơi bạn từng thường trú. Ai đã chuyển nơi ở nhiều lần thì hỏi kỹ vì có thể phải xin ở nơi cũ.",
      },
      {
        title: "Kiểm tra thời hạn của giấy xác nhận",
        detail:
          "Giấy này có hạn sử dụng. Xin quá sớm rồi để lâu là phải xin lại — hỏi rõ hạn khi nhận giấy và tính lịch cho khớp.",
      },
      {
        title: "Chọn nơi đăng ký",
        detail:
          "UBND phường xã nơi thường trú hoặc tạm trú của một trong hai người. Chọn nơi tiện đi lại cho cả hai.",
      },
      {
        title: "Khai trước trên cổng dịch vụ công nếu được",
        detail:
          "Nhiều nơi đã cho khai online rồi hẹn ngày tới ký. Làm vậy đỡ được thời gian chờ ở quầy.",
      },
      {
        title: "Cả hai cùng tới, mang đủ giấy tờ",
        detail:
          "Đây là thủ tục bắt buộc hai người có mặt. Không ai làm thay hay ký thay được, kể cả có giấy uỷ quyền.",
      },
      {
        title: "Điền tờ khai và kiểm tra chính tả",
        detail:
          "Họ tên, ngày sinh, quê quán, số CCCD của cả hai. Sai một chữ trên giấy chứng nhận kết hôn thì sửa rất mất công vì kéo theo nhiều giấy tờ khác.",
      },
      {
        title: "Ký vào sổ và nhận giấy chứng nhận",
        detail:
          "Cả hai ký trước mặt cán bộ. Thường nhận giấy ngay trong buổi nếu hồ sơ đầy đủ.",
      },
      {
        title: "Xin thêm bản sao",
        detail:
          "Xin vài bản sao trích lục ngay từ đầu. Sau này làm bảo hiểm, vay ngân hàng, thủ tục cho con đều cần.",
      },
      {
        title: "Cập nhật thông tin ở những nơi cần",
        detail:
          "Bảo hiểm, ngân hàng, cơ quan làm việc, và cập nhật tình trạng hôn nhân trong hồ sơ cư trú nếu được yêu cầu.",
      },
    ],
    notes: [
      "Trường hợp có yếu tố nước ngoài, kết hôn với người đang ở nước ngoài, hoặc một bên chưa đủ tuổi theo quy định đều có hướng dẫn riêng — hỏi thẳng UBND phường xã.",
      "Lệ phí và thời gian giải quyết thay đổi theo quy định và địa phương — hỏi cán bộ tiếp nhận cho chắc.",
      "Đám cưới và đăng ký kết hôn là hai việc khác nhau; chỉ giấy chứng nhận kết hôn mới có giá trị pháp lý.",
      "Cân nhắc đi khám sức khỏe tiền hôn nhân trước — xem bài riêng trong mục 18+.",
    ],
    faq: [
      {
        q: "Có bắt buộc đăng ký ở quê không?",
        a: "Không. Đăng ký được ở nơi thường trú hoặc tạm trú của một trong hai người. Hỏi UBND nơi bạn đang ở để xác nhận.",
      },
      {
        q: "Mất bao lâu?",
        a: "Nếu hồ sơ đầy đủ thì nhiều nơi trả kết quả ngay trong buổi. Phần tốn thời gian nhất thường là xin giấy xác nhận tình trạng hôn nhân.",
      },
      {
        q: "Đã ly hôn thì cần thêm gì?",
        a: "Bản án hoặc quyết định ly hôn đã có hiệu lực pháp luật. Mang bản chính và bản sao để đối chiếu.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "lam-phieu-ly-lich-tu-phap",
    title: "Làm phiếu lý lịch tư pháp",
    excerpt:
      "Nhiều công ty và hồ sơ du học đòi giấy này. Có hai loại phiếu và xin nhầm loại là phải làm lại từ đầu.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Có hai loại: phiếu số 1 cấp cho cá nhân hoặc cơ quan, phiếu số 2 cấp cho chính người đó và cơ quan tố tụng, ghi đầy đủ hơn. HỎI NƠI YÊU CẦU xem họ cần loại nào trước khi đi làm. Nộp tại Sở Tư pháp nơi bạn thường trú, hoặc làm online qua cổng dịch vụ công ở nhiều địa phương; giấy tờ tích hợp trên VNeID cũng đã hỗ trợ ở một số nơi.",
    prepare: [
      "Hỏi trước nơi yêu cầu: cần phiếu số 1 hay số 2 — đây là việc phải làm đầu tiên",
      "CCCD còn hạn",
      "Thông tin nơi thường trú các giai đoạn trước nếu bạn từng chuyển nhiều nơi",
      "Tiền lệ phí và một buổi rảnh, hoặc tài khoản VNeID mức 2 nếu làm online",
    ],
    steps: [
      {
        title: "HỎI RÕ nơi yêu cầu cần loại nào",
        detail:
          "Phiếu số 1 và số 2 khác nhau về nội dung ghi. Xin nhầm là phải làm lại và tốn thêm một vòng thời gian. Nhắn hỏi công ty hoặc trường trước khi đi.",
      },
      {
        title: "Xác định nơi nộp",
        detail:
          "Thường là Sở Tư pháp tỉnh thành nơi bạn thường trú. Người Việt đang ở nước ngoài có hướng dẫn riêng qua cơ quan đại diện.",
      },
      {
        title: "Kiểm tra xem địa phương có làm online không",
        detail:
          "Nhiều nơi đã cho nộp hồ sơ qua cổng dịch vụ công hoặc qua VNeID. Làm online thì đỡ hẳn việc xếp hàng và có thể nhận kết quả qua bưu điện.",
      },
      {
        title: "Điền tờ khai",
        detail:
          "Khai thông tin cá nhân và quá trình cư trú. Ai từng chuyển chỗ ở nhiều lần thì chuẩn bị sẵn mốc thời gian để khai cho đúng.",
      },
      {
        title: "Nộp hồ sơ và lệ phí",
        detail:
          "Hỏi rõ lệ phí và trường hợp nào được miễn giảm. Giữ biên lai và giấy hẹn.",
      },
      {
        title: "Chọn cách nhận kết quả",
        detail:
          "Chọn nhận qua bưu điện nếu có, để khỏi phải đi lần nữa. Điền địa chỉ và số điện thoại thật kỹ.",
      },
      {
        title: "Theo dõi hồ sơ",
        detail:
          "Nếu nộp online thì trạng thái hiện trên hệ thống. Nộp trực tiếp thì giữ giấy hẹn và gọi hỏi nếu quá hạn.",
      },
      {
        title: "Nhận phiếu và kiểm tra ngay",
        detail:
          "Soi kỹ họ tên, ngày sinh, số CCCD, và đúng loại phiếu bạn cần. Sai sót phát hiện muộn là phải làm lại.",
      },
      {
        title: "Photo công chứng nếu cần nộp nhiều nơi",
        detail:
          "Phiếu lý lịch tư pháp có thời hạn sử dụng theo yêu cầu của từng nơi. Hỏi nơi nhận xem họ chấp nhận bản sao hay đòi bản chính.",
      },
    ],
    notes: [
      "Phiếu này thường có thời hạn theo yêu cầu của nơi nhận (nhiều nơi yêu cầu trong vòng vài tháng gần nhất) — đừng làm quá sớm.",
      "Thời gian giải quyết và lệ phí thay đổi theo địa phương và thời điểm — hỏi trực tiếp Sở Tư pháp.",
      "Cẩn thận với dịch vụ làm nhanh rao trên mạng: vừa tốn tiền vừa có nguy cơ lộ thông tin cá nhân.",
      "Nếu bạn từng có án tích đã được xoá, hãy hỏi rõ cán bộ về việc ghi nhận trên từng loại phiếu.",
    ],
    faq: [
      {
        q: "Phiếu số 1 và số 2 khác nhau thế nào?",
        a: "Khác về đối tượng được cấp và mức độ thông tin ghi trên phiếu. Cách đúng nhất là hỏi nơi yêu cầu bạn nộp — họ biết chính xác cần loại nào.",
      },
      {
        q: "Đang ở xa nơi thường trú thì làm sao?",
        a: "Kiểm tra xem địa phương có nhận hồ sơ online không. Nhiều nơi đã triển khai và trả kết quả qua bưu điện.",
      },
      {
        q: "Bao lâu thì có?",
        a: "Thay đổi theo địa phương và số lượng hồ sơ. Hỏi ngay lúc nộp và cộng thêm vài ngày dự phòng vào kế hoạch của bạn.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "dang-ky-thuong-tru-khi-chuyen-nha",
    title: "Đăng ký thường trú khi chuyển nhà",
    excerpt:
      "Sổ hộ khẩu giấy đã bỏ, nhưng thông tin cư trú thì vẫn cần cập nhật. Đây là cách làm và những giấy tờ cần có.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Nộp hồ sơ tại công an phường xã nơi ở mới, hoặc khai qua cổng dịch vụ công và VNeID. Điều quyết định là bạn phải chứng minh được chỗ ở hợp pháp: giấy tờ nhà đất nếu là nhà mình, hoặc hợp đồng thuê cùng văn bản đồng ý của chủ nhà nếu ở thuê.",
    prepare: [
      "CCCD của bạn và của các thành viên cùng đăng ký",
      "Giấy tờ chứng minh chỗ ở hợp pháp: sổ đỏ, hợp đồng mua bán, hoặc hợp đồng thuê nhà",
      "Văn bản đồng ý của chủ hộ và chủ sở hữu nếu bạn ở nhờ hoặc thuê",
      "Giấy tờ chứng minh quan hệ nhân thân nếu đăng ký theo gia đình",
    ],
    steps: [
      {
        title: "Xác định bạn thuộc trường hợp nào",
        detail:
          "Có nhà riêng, ở nhà người thân, hay ở thuê — mỗi trường hợp cần bộ giấy tờ khác nhau. Gọi hỏi công an phường trước để chuẩn bị đúng.",
      },
      {
        title: "Xin văn bản đồng ý nếu ở nhờ hoặc thuê",
        detail:
          "Đây là chỗ hay vướng nhất. Chủ nhà phải đồng ý bằng văn bản. Nói chuyện với chủ nhà từ sớm, đừng để tới lúc nộp hồ sơ mới hỏi.",
      },
      {
        title: "Chuẩn bị hợp đồng thuê đàng hoàng",
        detail:
          "Hợp đồng miệng không dùng được cho thủ tục này. Nếu bạn đang thuê mà chưa có hợp đồng giấy, hãy làm một bản có chữ ký hai bên.",
      },
      {
        title: "Chọn cách nộp",
        detail:
          "Nộp trực tiếp tại công an phường xã nơi ở mới, hoặc khai qua cổng dịch vụ công và VNeID nếu địa phương đã triển khai.",
      },
      {
        title: "Điền tờ khai thay đổi thông tin cư trú",
        detail:
          "Khai đúng địa chỉ mới, quan hệ với chủ hộ, và thông tin từng người trong hồ sơ. Kiểm tra chính tả trước khi gửi.",
      },
      {
        title: "Nộp hồ sơ và nhận giấy hẹn",
        detail:
          "Cán bộ kiểm tra hồ sơ, có thể yêu cầu bổ sung. Giữ giấy hẹn hoặc mã hồ sơ để theo dõi.",
      },
      {
        title: "Chờ xác minh",
        detail:
          "Có thể có bước xác minh nơi ở. Giữ điện thoại liên lạc được trong thời gian này.",
      },
      {
        title: "Kiểm tra thông tin đã cập nhật",
        detail:
          "Sau khi giải quyết xong, mở VNeID xem thông tin cư trú đã đổi chưa. Chưa đổi thì liên hệ lại nơi tiếp nhận.",
      },
      {
        title: "Xin giấy xác nhận cư trú nếu cần",
        detail:
          "Nhiều thủ tục khác yêu cầu giấy này. Xin luôn một bản khi đã xong cho tiện.",
      },
      {
        title: "Cập nhật địa chỉ ở nơi khác",
        detail:
          "Ngân hàng, bảo hiểm, nơi làm việc, địa chỉ giao hàng. Làm luôn trong tuần để khỏi quên.",
      },
    ],
    notes: [
      "Sổ hộ khẩu giấy đã bỏ; thông tin cư trú giờ nằm trong cơ sở dữ liệu và tra được qua VNeID.",
      "Đăng ký thường trú khác với đăng ký tạm trú — nếu bạn chỉ ở tạm một thời gian thì làm tạm trú, xem bài riêng.",
      "Điều kiện đăng ký thường trú có quy định riêng theo từng loại chỗ ở và từng địa phương lớn — hỏi công an phường để biết trường hợp của bạn.",
      "Chủ nhà không đồng ý cho đăng ký là chuyện có thật; nên hỏi rõ điều này TRƯỚC khi ký hợp đồng thuê nếu bạn cần đăng ký.",
    ],
    faq: [
      {
        q: "Ở thuê có đăng ký thường trú được không?",
        a: "Có thể được nếu đáp ứng điều kiện theo quy định và chủ nhà đồng ý bằng văn bản. Hỏi công an phường nơi bạn thuê để biết trường hợp cụ thể.",
      },
      {
        q: "Không đăng ký thì có sao không?",
        a: "Nhiều thủ tục cần thông tin cư trú đúng: học cho con, bảo hiểm, vay vốn. Ngoài ra còn có quy định về trách nhiệm khai báo cư trú.",
      },
      {
        q: "Bao lâu thì xong?",
        a: "Thay đổi theo địa phương. Hỏi ngay khi nộp hồ sơ và giữ giấy hẹn để đối chiếu.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "xin-cap-lai-bang-tot-nghiep-bang-diem",
    title: "Xin cấp lại bằng tốt nghiệp, bảng điểm",
    excerpt:
      "Mất bằng gốc thì KHÔNG cấp lại được bản chính — nhưng có thứ thay thế mà nhiều người không biết.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Bằng tốt nghiệp bản chính thường chỉ cấp một lần, mất thì không cấp lại. Thay vào đó bạn xin BẢN SAO TỪ SỔ GỐC tại trường hoặc sở giáo dục — bản sao này có giá trị sử dụng thay bản chính trong hầu hết trường hợp. Bảng điểm thì xin cấp lại được tại phòng đào tạo của trường.",
    prepare: [
      "CCCD",
      "Thông tin khoá học: năm tốt nghiệp, lớp, khoa, mã sinh viên nếu nhớ",
      "Đơn xin cấp bản sao theo mẫu của trường",
      "Ít tiền lệ phí và số điện thoại phòng đào tạo",
    ],
    steps: [
      {
        title: "Hiểu đúng bạn cần thứ gì",
        detail:
          "Bản chính mất thì không cấp lại. Thứ bạn xin là bản sao từ sổ gốc — có giá trị pháp lý và dùng thay bản chính được trong hầu hết trường hợp.",
      },
      {
        title: "Gọi hỏi trường trước khi đi",
        detail:
          "Hỏi ba câu: xin bản sao ở phòng nào, cần giấy tờ gì, mất bao lâu. Một cuộc gọi tiết kiệm cả buổi đi lại.",
      },
      {
        title: "Xác định nơi cấp",
        detail:
          "Bằng đại học, cao đẳng thường do trường cấp. Bằng tốt nghiệp phổ thông thường do sở giáo dục và đào tạo nơi bạn thi cấp. Hỏi cho đúng chỗ.",
      },
      {
        title: "Chuẩn bị thông tin khoá học",
        detail:
          "Năm tốt nghiệp, ngành, lớp, mã sinh viên. Không nhớ thì tìm trong giấy tờ cũ, ảnh chụp bằng, hoặc hỏi bạn cùng khoá.",
      },
      {
        title: "Viết đơn theo mẫu",
        detail:
          "Trường thường có mẫu sẵn. Ghi rõ lý do xin cấp bản sao và số bản cần.",
      },
      {
        title: "Xin nhiều bản một lần",
        detail:
          "Xin 3–5 bản để dùng dần. Đi lại một lần cho nhiều bản đỡ mất công hơn nhiều so với mỗi lần cần lại đi xin.",
      },
      {
        title: "Nộp đơn và lệ phí",
        detail:
          "Giữ biên lai và giấy hẹn. Hỏi có nhận kết quả qua bưu điện không nếu bạn ở xa.",
      },
      {
        title: "Xin luôn bảng điểm nếu cần",
        detail:
          "Bảng điểm cấp lại được và thường làm cùng lúc. Hỏi luôn để đi một chuyến.",
      },
      {
        title: "Kiểm tra kỹ khi nhận",
        detail:
          "Họ tên, ngày sinh, ngành học, xếp loại, năm tốt nghiệp. Sai sót phải báo ngay tại chỗ.",
      },
      {
        title: "Cất giữ cẩn thận và scan lưu",
        detail:
          "Scan hoặc chụp lưu vào máy và lưu trữ đám mây. Lần sau cần gấp thì ít nhất bạn có bản mềm để đối chiếu.",
      },
    ],
    notes: [
      "Trường đã sáp nhập hoặc giải thể thì hồ sơ thường được chuyển về cơ quan quản lý — hỏi sở giáo dục và đào tạo địa phương.",
      "Thời gian và lệ phí khác nhau theo từng trường — hỏi trực tiếp phòng đào tạo.",
      "Cẩn thận với dịch vụ làm bằng rao trên mạng: dùng bằng giả là hành vi vi phạm pháp luật với hậu quả nặng.",
      "Nhiều nơi tuyển dụng chấp nhận bản sao công chứng — hỏi trước để biết bạn cần mấy bản.",
    ],
    faq: [
      {
        q: "Bản sao từ sổ gốc có dùng thay bản chính được không?",
        a: "Trong hầu hết trường hợp là được. Nếu nơi nhận hồ sơ đòi bản chính, hãy hỏi họ cụ thể vì bản chính đã mất thì không cấp lại được.",
      },
      {
        q: "Trường cũ đã đóng cửa thì sao?",
        a: "Hồ sơ thường được bàn giao cho cơ quan quản lý. Liên hệ sở giáo dục và đào tạo nơi trường đóng để được hướng dẫn.",
      },
      {
        q: "Học ở nước ngoài thì làm sao?",
        a: "Liên hệ trực tiếp trường đã học. Nếu cần dùng ở Việt Nam thì tìm hiểu thêm về thủ tục công nhận văn bằng.",
      },
    ],
    sources: [],
  },

  {
    slug: "uy-quyen-cho-nguoi-khac-lam-thu-tuc",
    title: "Uỷ quyền cho người khác làm thủ tục thay mình",
    excerpt:
      "Ở xa hoặc bận không đi được? Giấy uỷ quyền giải quyết được nhiều việc — nhưng không phải việc nào cũng uỷ quyền được.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Làm giấy uỷ quyền có công chứng hoặc chứng thực, ghi RÕ phạm vi công việc được uỷ quyền và thời hạn. Người được uỷ quyền mang giấy đó cùng CCCD của cả hai bên tới nơi làm thủ tục. Lưu ý: một số việc như đăng ký kết hôn, ly hôn, lấy vân tay làm căn cước thì bắt buộc chính chủ, không uỷ quyền được.",
    prepare: [
      "CCCD của cả người uỷ quyền và người được uỷ quyền",
      "Thông tin cụ thể về công việc cần uỷ quyền",
      "Hỏi trước nơi làm thủ tục xem việc đó có uỷ quyền được không",
      "Tiền lệ phí công chứng hoặc chứng thực",
    ],
    steps: [
      {
        title: "HỎI TRƯỚC xem việc đó có uỷ quyền được không",
        detail:
          "Đây là bước đầu tiên và quan trọng nhất. Một số thủ tục bắt buộc chính chủ có mặt. Gọi hỏi nơi tiếp nhận trước khi tốn tiền làm giấy uỷ quyền.",
      },
      {
        title: "Chọn người đáng tin",
        detail:
          "Người được uỷ quyền sẽ thay bạn quyết định trong phạm vi ghi trên giấy. Chọn người bạn thật sự tin, thường là người thân.",
      },
      {
        title: "Ghi RÕ phạm vi công việc",
        detail:
          "Đừng ghi chung chung kiểu thay mặt tôi làm mọi việc. Ghi cụ thể: nộp hồ sơ nào, nhận kết quả gì, ký giấy tờ nào. Phạm vi càng hẹp càng an toàn cho bạn.",
      },
      {
        title: "Ghi rõ thời hạn uỷ quyền",
        detail:
          "Đặt thời hạn vừa đủ cho công việc. Giấy uỷ quyền vô thời hạn là rủi ro không cần thiết.",
      },
      {
        title: "Ra phòng công chứng hoặc UBND phường xã",
        detail:
          "Cả hai bên nên có mặt. Mang CCCD bản chính. Cán bộ sẽ hướng dẫn mẫu và kiểm tra nội dung.",
      },
      {
        title: "Đọc kỹ trước khi ký",
        detail:
          "Kiểm tra tên, số CCCD của cả hai, phạm vi công việc, thời hạn. Ký rồi thì người kia có quyền làm đúng những gì ghi trong đó.",
      },
      {
        title: "Giữ một bản cho mình",
        detail:
          "Làm ít nhất hai bản, mỗi bên giữ một. Chụp ảnh lưu trong máy.",
      },
      {
        title: "Hướng dẫn người được uỷ quyền",
        detail:
          "Gửi họ danh sách giấy tờ cần mang, và số điện thoại của bạn để gọi hỏi khi cán bộ cần xác nhận gì.",
      },
      {
        title: "Theo dõi tiến độ",
        detail:
          "Hỏi họ chụp ảnh giấy hẹn hoặc biên nhận gửi cho bạn. Đừng giao rồi mặc kệ.",
      },
      {
        title: "Huỷ uỷ quyền khi xong việc",
        detail:
          "Nếu giấy còn thời hạn dài mà việc đã xong, làm thủ tục chấm dứt uỷ quyền cho an toàn.",
      },
    ],
    notes: [
      "Việc bắt buộc chính chủ, không uỷ quyền được: đăng ký kết hôn, ly hôn, lấy vân tay và chụp ảnh làm căn cước, một số thủ tục ngân hàng.",
      "Uỷ quyền liên quan tới nhà đất, tài sản lớn thì nên hỏi thêm ý kiến người có chuyên môn pháp lý trước khi ký.",
      "Đừng ký giấy uỷ quyền trắng hoặc chưa điền đủ nội dung — đây là rủi ro rất lớn.",
      "Lệ phí và mẫu giấy khác nhau giữa phòng công chứng và UBND — hỏi giá trước.",
    ],
    faq: [
      {
        q: "Giấy uỷ quyền viết tay có giá trị không?",
        a: "Nhiều nơi tiếp nhận yêu cầu có công chứng hoặc chứng thực. Hỏi trước nơi làm thủ tục để khỏi mất công đi lại.",
      },
      {
        q: "Uỷ quyền cho người không phải người thân được không?",
        a: "Được về mặt pháp lý, nhưng rủi ro cao hơn. Nếu buộc phải làm thì thu hẹp phạm vi và thời hạn tối đa.",
      },
      {
        q: "Người được uỷ quyền làm sai thì sao?",
        a: "Trong phạm vi được uỷ quyền, hậu quả thường thuộc về bạn. Đây chính là lý do phải ghi phạm vi thật cụ thể và chọn người thật đáng tin.",
      },
    ],
    sources: [],
  },

  // ═══════════════════════ TIỀN BẠC ═══════════════════════
  {
    slug: "doc-hieu-sao-ke-ngan-hang",
    title: "Đọc hiểu sao kê ngân hàng",
    excerpt:
      "Nhìn vào bảng số là hoa mắt? Chỉ cần hiểu bốn cột là bạn kiểm soát được toàn bộ dòng tiền của mình.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Sao kê có bốn thứ cần nhìn: ngày giao dịch, nội dung, số tiền vào hoặc ra, và số dư sau giao dịch. Đọc từ trên xuống, đối chiếu với ghi chép của bạn. Thấy giao dịch lạ thì gọi ngay tổng đài ngân hàng — càng sớm càng dễ xử lý.",
    prepare: [
      "Ứng dụng ngân hàng hoặc bản sao kê đã tải về",
      "Ghi chép chi tiêu của bạn để đối chiếu (nếu có)",
      "Số tổng đài chính thức của ngân hàng, lưu sẵn trong danh bạ",
      "15 phút yên tĩnh mỗi tháng",
    ],
    steps: [
      {
        title: "Lấy sao kê",
        detail:
          "Trong ứng dụng ngân hàng thường có mục lịch sử giao dịch hoặc sao kê. Chọn khoảng thời gian một tháng và xuất ra file nếu muốn xem trên máy tính.",
      },
      {
        title: "Hiểu cột ngày giao dịch",
        detail:
          "Có nơi ghi hai ngày: ngày bạn thực hiện và ngày ngân hàng hạch toán. Chênh nhau một hai ngày là bình thường, nhất là với giao dịch cuối tuần.",
      },
      {
        title: "Đọc cột nội dung",
        detail:
          "Đây là chỗ ghi bạn chuyển cho ai, mua ở đâu. Tên cửa hàng đôi khi hiện dưới tên công ty mẹ nên trông lạ — tra tên đó trên mạng nếu không nhận ra.",
      },
      {
        title: "Phân biệt tiền vào và tiền ra",
        detail:
          "Thường có dấu cộng trừ hoặc hai cột riêng. Cộng tổng tiền ra trong tháng là bạn biết mình đã tiêu bao nhiêu.",
      },
      {
        title: "Kiểm tra cột số dư",
        detail:
          "Số dư sau mỗi giao dịch phải khớp với phép tính. Không khớp thì có giao dịch bạn chưa thấy — xem kỹ lại.",
      },
      {
        title: "Soi các khoản phí",
        detail:
          "Phí duy trì, phí thường niên thẻ, phí chuyển khoản, phí SMS. Đây là chỗ tiền rò rỉ âm thầm mà nhiều người không để ý suốt nhiều năm.",
      },
      {
        title: "Tìm các khoản trừ tự động",
        detail:
          "Đăng ký ứng dụng, gói cước, bảo hiểm tự gia hạn. Nhiều người trả tiền cho dịch vụ đã không dùng từ lâu.",
      },
      {
        title: "Đối chiếu với ghi chép của bạn",
        detail:
          "Nếu bạn có ghi chép chi tiêu thì đây là lúc so. Chênh lệch giúp bạn nhớ ra những khoản đã quên ghi.",
      },
      {
        title: "Đánh dấu giao dịch không nhận ra",
        detail:
          "Chưa vội hoảng — nhiều khi chỉ là tên cửa hàng lạ. Nhưng ghi lại để hỏi.",
      },
      {
        title: "Gọi tổng đài nếu có giao dịch lạ",
        detail:
          "Gọi số chính thức lưu trong danh bạ hoặc in trên thẻ, KHÔNG gọi số ai nhắn cho bạn. Báo sớm thì cơ hội xử lý cao hơn nhiều.",
      },
      {
        title: "Đặt lịch xem sao kê hằng tháng",
        detail:
          "Chọn một ngày cố định, ví dụ ngày nhận lương. 15 phút mỗi tháng đủ để bạn không bao giờ bị bất ngờ về tiền.",
      },
    ],
    notes: [
      "Bật thông báo biến động số dư để biết ngay khi có giao dịch, thay vì chờ tới cuối tháng.",
      "TUYỆT ĐỐI không gửi ảnh sao kê cho người lạ — nó chứa đủ thông tin để kẻ gian dựng kịch bản lừa đảo nhắm vào bạn.",
      "Sao kê là giấy tờ nhiều nơi yêu cầu khi vay vốn hoặc xin visa — biết cách lấy sẵn thì lúc cần đỡ luống cuống.",
      "Thấy giao dịch lạ: gọi tổng đài ngay, đừng chờ tới hôm sau.",
    ],
    faq: [
      {
        q: "Sao kê giữ được bao lâu trong ứng dụng?",
        a: "Thường xem lại được vài tháng tới vài năm tuỳ ngân hàng. Cần bản cũ hơn thì ra quầy hoặc gọi tổng đài yêu cầu.",
      },
      {
        q: "Xin sao kê có mất phí không?",
        a: "Xem trên ứng dụng thường miễn phí. Bản in có dấu của ngân hàng thì nhiều nơi thu phí — hỏi trước khi yêu cầu.",
      },
      {
        q: "Không nhận ra một giao dịch thì làm gì trước?",
        a: "Tra tên trên mạng xem có phải tên công ty của cửa hàng nào không, hỏi người nhà xem có ai dùng thẻ của bạn không, rồi mới gọi tổng đài.",
      },
    ],
    sources: [],
  },

  {
    slug: "vay-tieu-dung-hieu-lai-suat-that",
    title: "Vay tiêu dùng: hiểu lãi suất thật trước khi ký",
    excerpt:
      "Con số quảng cáo và con số bạn thật sự trả thường khác nhau khá xa. Đây là cách tự tính trước khi đặt bút.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Đừng nhìn lãi suất phần trăm mỗi tháng. Hãy hỏi thẳng một câu: tổng cộng tôi phải trả bao nhiêu tiền cho tới khi hết nợ. Con số đó trừ đi số tiền vay chính là giá thật của khoản vay. Yêu cầu bảng trả nợ chi tiết từng tháng và đọc kỹ phần phí phạt trả trước hạn.",
    prepare: [
      "Biết chính xác bạn cần vay bao nhiêu và để làm gì",
      "Thu nhập thật hằng tháng và các khoản đang phải trả",
      "Máy tính điện thoại để tự cộng",
      "Thời gian đọc hợp đồng — đừng ký trong lúc vội",
    ],
    steps: [
      {
        title: "Tự hỏi khoản vay này có thật sự cần không",
        detail:
          "Vay cho việc sinh lời hoặc việc khẩn thì khác với vay để mua thứ mình muốn. Câu hỏi này tiết kiệm cho bạn nhiều hơn mọi mẹo đàm phán.",
      },
      {
        title: "Hỏi câu quan trọng nhất",
        detail:
          "Tổng cộng tôi phải trả bao nhiêu tiền tính tới khi hết nợ. Nhân viên tư vấn phải trả lời được con số này. Không trả lời được là dấu hiệu xấu.",
      },
      {
        title: "Tính giá thật của khoản vay",
        detail:
          "Lấy tổng phải trả trừ đi số tiền vay. Đó là số tiền bạn mất đi để dùng khoản vay này. Nhìn con số tuyệt đối dễ hiểu hơn nhiều so với phần trăm.",
      },
      {
        title: "Phân biệt hai cách tính lãi",
        detail:
          "Lãi trên dư nợ giảm dần thì tiền lãi giảm theo thời gian. Lãi trên dư nợ gốc ban đầu thì tháng nào cũng như nhau và tổng trả cao hơn nhiều. Hỏi rõ nơi cho vay dùng cách nào.",
      },
      {
        title: "Yêu cầu bảng trả nợ chi tiết",
        detail:
          "Bảng ghi từng tháng trả bao nhiêu, trong đó gốc bao nhiêu lãi bao nhiêu. Không đưa được bảng này thì đừng ký.",
      },
      {
        title: "Cộng hết các loại phí",
        detail:
          "Phí thẩm định, phí bảo hiểm khoản vay, phí quản lý, phí thu hộ. Có nơi cộng vào rất nhiều mà không nhắc tới trong lúc tư vấn.",
      },
      {
        title: "Đọc kỹ phí phạt trả trước hạn",
        detail:
          "Nhiều hợp đồng phạt nếu bạn trả hết sớm. Nếu bạn dự định trả sớm khi có tiền thì đây là điều khoản quyết định.",
      },
      {
        title: "Xem điều khoản phạt trả chậm",
        detail:
          "Trễ một ngày bị tính thế nào, bao nhiêu ngày thì chuyển nhóm nợ xấu. Nợ xấu ảnh hưởng tới khả năng vay của bạn trong nhiều năm.",
      },
      {
        title: "So sánh ít nhất ba nơi",
        detail:
          "Ngân hàng, công ty tài chính, và nếu được thì hỏi vay người thân. Chênh lệch giữa các nơi thường lớn hơn bạn tưởng.",
      },
      {
        title: "Kiểm tra khả năng trả của mình",
        detail:
          "Cộng tất cả khoản phải trả hằng tháng, xem còn lại đủ sống không. Vay tới mức phải thắt lưng buộc bụng là công thức dẫn tới vay thêm để trả nợ cũ.",
      },
      {
        title: "Đọc hợp đồng trước khi ký, đừng ký tại chỗ",
        detail:
          "Xin mang về đọc hoặc chụp ảnh đọc kỹ. Nơi nào không cho bạn thời gian đọc thì đó là nơi bạn không nên vay.",
      },
      {
        title: "Giữ hợp đồng và biên lai từng lần trả",
        detail:
          "Chụp ảnh lưu. Có tranh chấp thì đây là thứ đầu tiên bạn cần.",
      },
    ],
    notes: [
      "Cảnh giác tuyệt đối với vay qua ứng dụng lạ hoặc quảng cáo giải ngân trong 5 phút không cần giấy tờ — nhóm này thường có lãi và phí cực cao, kèm đòi nợ kiểu khủng bố.",
      "Không ai được giữ CCCD bản gốc của bạn làm tin. Không chụp ảnh CCCD gửi cho người lạ.",
      "Nợ xấu ảnh hưởng tới khả năng vay của bạn trong nhiều năm — cân nhắc kỹ trước khi vay khoản mình không chắc trả nổi.",
      "Bài viết không phải tư vấn tài chính cho trường hợp cụ thể; hãy hỏi ngân hàng hoặc người có chuyên môn.",
    ],
    faq: [
      {
        q: "Lãi suất bao nhiêu là hợp lý?",
        a: "Thay đổi theo thời điểm và loại vay. Cách thực tế nhất là so ít nhất ba nơi và nhìn TỔNG SỐ TIỀN phải trả, chứ không nhìn con số phần trăm.",
      },
      {
        q: "Vay qua ứng dụng có an toàn không?",
        a: "Ứng dụng của ngân hàng và công ty tài chính có giấy phép thì khác với ứng dụng trôi nổi. Kiểm tra tên đơn vị cho vay và tìm hiểu trước khi cài bất cứ thứ gì.",
      },
      {
        q: "Đang khó khăn không trả nổi thì làm gì?",
        a: "Liên hệ nơi cho vay TRƯỚC khi trễ hạn để bàn phương án. Trốn tránh chỉ làm mọi thứ tệ hơn và đẩy bạn vào nhóm nợ xấu.",
      },
      {
        q: "Bị đòi nợ kiểu quấy rối người thân thì sao?",
        a: "Hành vi đe doạ, bôi nhọ, quấy rối người không liên quan là vi phạm pháp luật. Lưu bằng chứng và trình báo công an.",
      },
    ],
    sources: [],
  },

  {
    slug: "mat-the-lo-so-tai-khoan-xu-ly-ngay",
    title: "Mất thẻ hoặc lộ số tài khoản: xử lý ngay",
    excerpt:
      "Mười phút đầu quyết định bạn mất bao nhiêu. Đây là thứ tự việc cần làm, không cần suy nghĩ.",
    publishedAt: NGAY,
    readTimeMinutes: 3,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Việc đầu tiên và duy nhất cần làm ngay: KHOÁ THẺ. Khoá trong ứng dụng ngân hàng chỉ mất vài giây, hoặc gọi tổng đài. Sau đó mới kiểm tra giao dịch, đổi mật khẩu, và ra quầy làm thẻ mới nếu cần. Đừng ngồi tìm thẻ trước rồi mới khoá.",
    prepare: [
      "Số tổng đài ngân hàng lưu sẵn trong danh bạ — làm việc này NGAY HÔM NAY, đừng đợi tới lúc mất thẻ",
      "Ứng dụng ngân hàng đã cài và đăng nhập được",
      "Biết chức năng khoá thẻ nằm ở đâu trong ứng dụng",
    ],
    steps: [
      {
        title: "KHOÁ THẺ ngay lập tức",
        detail:
          "Mở ứng dụng ngân hàng, tìm mục khoá thẻ hoặc tạm dừng thẻ. Mất vài giây. Đừng dành 20 phút lục túi tìm thẻ trước — khoá xong tìm sau cũng được, thẻ khoá rồi mở lại dễ dàng.",
      },
      {
        title: "Không mở được ứng dụng thì gọi tổng đài",
        detail:
          "Gọi số in trên thẻ hoặc số bạn đã lưu. Nói rõ bạn muốn khoá thẻ khẩn cấp. Chuẩn bị sẵn thông tin cá nhân để họ xác minh.",
      },
      {
        title: "Kiểm tra lịch sử giao dịch",
        detail:
          "Xem có giao dịch nào bạn không thực hiện không. Chụp màn hình lại làm bằng chứng.",
      },
      {
        title: "Báo ngay nếu có giao dịch lạ",
        detail:
          "Gọi tổng đài báo tra soát. Càng sớm càng có cơ hội chặn hoặc đòi lại. Hỏi rõ quy trình và thời gian xử lý.",
      },
      {
        title: "Đổi mật khẩu ứng dụng ngân hàng",
        detail:
          "Nếu bạn nghi ngờ điện thoại hoặc tài khoản bị xâm nhập chứ không chỉ mất thẻ vật lý.",
      },
      {
        title: "Kiểm tra các tài khoản liên kết",
        detail:
          "Ví điện tử, tài khoản mua sắm có lưu thẻ. Gỡ thẻ cũ khỏi những nơi đó.",
      },
      {
        title: "Ra quầy hoặc đặt làm thẻ mới",
        detail:
          "Nhiều ngân hàng cho đặt thẻ mới ngay trên ứng dụng và gửi về nhà. Hỏi phí phát hành lại.",
      },
      {
        title: "Nếu chỉ LỘ SỐ TÀI KHOẢN thì bình tĩnh",
        detail:
          "Chỉ biết số tài khoản thì người ta chuyển tiền vào được chứ không rút ra được. Cái nguy hiểm là lộ số thẻ kèm ngày hết hạn và mã bảo mật, hoặc lộ mã OTP.",
      },
      {
        title: "Cảnh giác với cuộc gọi sau đó",
        detail:
          "Kẻ gian hay gọi tới xưng là nhân viên ngân hàng hỗ trợ lấy lại tiền, rồi hỏi OTP. Ngân hàng KHÔNG BAO GIỜ hỏi OTP.",
      },
      {
        title: "Trình báo công an nếu mất số tiền lớn",
        detail:
          "Mang theo ảnh chụp giao dịch và biên bản tra soát của ngân hàng.",
      },
    ],
    notes: [
      "Việc quan trọng nhất bạn làm được HÔM NAY: lưu số tổng đài ngân hàng vào danh bạ và tìm xem nút khoá thẻ nằm ở đâu trong ứng dụng.",
      "KHÔNG BAO GIỜ đọc mã OTP cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng hay công an.",
      "Không chụp ảnh mặt trước và mặt sau thẻ gửi cho ai — mặt sau có mã bảo mật đủ để người khác thanh toán online.",
      "Bật thông báo biến động số dư để biết ngay khi có giao dịch bất thường.",
    ],
    faq: [
      {
        q: "Khoá thẻ rồi có mở lại được không?",
        a: "Được, nếu bạn tìm thấy thẻ thì mở lại trong ứng dụng. Đây chính là lý do nên khoá trước tìm sau.",
      },
      {
        q: "Lộ số tài khoản có nguy hiểm không?",
        a: "Riêng số tài khoản thì người ta chỉ chuyển tiền vào được. Nguy hiểm là khi lộ thêm thông tin thẻ đầy đủ hoặc mã OTP.",
      },
      {
        q: "Bị trừ tiền oan có đòi lại được không?",
        a: "Tuỳ trường hợp và tuỳ bạn báo sớm hay muộn. Báo tra soát ngay và giữ mọi bằng chứng là cách tăng cơ hội nhất.",
      },
    ],
    sources: [],
  },

  {
    slug: "gui-tiet-kiem-lan-dau",
    title: "Gửi tiết kiệm lần đầu",
    excerpt:
      "Không phức tạp như bạn nghĩ, nhưng chọn sai kỳ hạn thì rút sớm gần như mất hết lãi.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Gửi ngay trên ứng dụng ngân hàng chỉ mất vài phút, hoặc ra quầy nếu bạn muốn có sổ giấy. Điều quan trọng nhất là chọn kỳ hạn phù hợp: rút trước hạn thường chỉ được hưởng lãi không kỳ hạn, tức gần như mất hết phần lãi. Chia tiền thành nhiều sổ nhỏ để lúc cần chỉ phải rút một sổ.",
    prepare: [
      "Xác định số tiền bạn chắc chắn không đụng tới trong thời gian gửi",
      "Ứng dụng ngân hàng hoặc CCCD nếu ra quầy",
      "So lãi suất vài ngân hàng — chênh nhau đáng kể",
      "Biết trước bạn có thể cần tiền lúc nào",
    ],
    steps: [
      {
        title: "Tách khoản dự phòng ra trước",
        detail:
          "Giữ lại một khoản đủ chi tiêu vài tháng ở tài khoản thường. Gửi hết vào tiết kiệm rồi lại phải rút sớm là mất lãi vô ích.",
      },
      {
        title: "So lãi suất vài ngân hàng",
        detail:
          "Xem trên website chính thức của từng ngân hàng. Chênh lệch giữa các nơi và giữa các kỳ hạn thường đáng kể.",
      },
      {
        title: "Hiểu về kỳ hạn",
        detail:
          "Kỳ hạn dài thường lãi cao hơn nhưng tiền bị khoá lâu hơn. Chọn theo lúc bạn thật sự cần tiền, đừng chọn theo lãi cao nhất.",
      },
      {
        title: "Hỏi rõ điều gì xảy ra khi rút trước hạn",
        detail:
          "Phần lớn chỉ trả lãi không kỳ hạn, tức gần như bằng không. Đây là điều quan trọng nhất phải biết trước khi gửi.",
      },
      {
        title: "Chia thành nhiều sổ nhỏ",
        detail:
          "Thay vì một sổ 100 triệu, chia thành bốn sổ 25 triệu. Cần tiền thì chỉ rút một sổ, ba sổ còn lại vẫn hưởng lãi đủ kỳ hạn. Đây là mẹo ăn tiền nhất trong bài.",
      },
      {
        title: "Chọn hình thức trả lãi",
        detail:
          "Lãi cuối kỳ, lãi hằng tháng, hay lãi nhập gốc. Nhập gốc thì kỳ sau tính lãi trên số lớn hơn — hợp với người không cần tiêu lãi.",
      },
      {
        title: "Gửi trên ứng dụng hoặc ra quầy",
        detail:
          "Gửi online thường nhanh và có khi lãi nhỉnh hơn. Ra quầy thì có sổ giấy, hợp với người thích cầm được. Cả hai đều hợp lệ.",
      },
      {
        title: "Chọn cách xử lý khi đáo hạn",
        detail:
          "Tự động gia hạn hay chuyển về tài khoản thanh toán. Nếu chọn tự gia hạn thì nhớ đặt lịch nhắc để xem lại lãi suất mới.",
      },
      {
        title: "Kiểm tra thông tin trên chứng từ",
        detail:
          "Số tiền, kỳ hạn, lãi suất, ngày đáo hạn. Chụp ảnh hoặc lưu file lại.",
      },
      {
        title: "Đặt nhắc trước ngày đáo hạn",
        detail:
          "Đặt nhắc trước vài ngày để bạn kịp quyết định gửi tiếp hay rút ra, thay vì bị tự động gia hạn với lãi suất bạn chưa xem.",
      },
    ],
    notes: [
      "Tiền gửi tại ngân hàng có cơ chế bảo hiểm tiền gửi theo quy định — hỏi ngân hàng nếu bạn muốn tìm hiểu mức bảo hiểm hiện hành.",
      "Cảnh giác với lời mời gửi tiền lãi cao bất thường ngoài ngân hàng — lãi cao bất thường luôn đi kèm rủi ro cao bất thường.",
      "Bài viết không phải tư vấn đầu tư; đây chỉ là hướng dẫn thao tác cho người mới.",
      "Lãi suất thay đổi liên tục — con số hôm nay không còn đúng sau vài tháng.",
    ],
    faq: [
      {
        q: "Gửi bao nhiêu tiền thì đáng?",
        a: "Không có mức tối thiểu bắt buộc ở nhiều ngân hàng. Quan trọng là tạo thói quen; số tiền nhỏ gửi đều vẫn tốt hơn chờ có nhiều mới gửi.",
      },
      {
        q: "Gửi online có an toàn như ra quầy không?",
        a: "Có, miễn là bạn dùng ứng dụng chính thức của ngân hàng. Chứng từ điện tử có giá trị như sổ giấy.",
      },
      {
        q: "Cần tiền gấp trước hạn thì sao?",
        a: "Rút trước hạn thường mất phần lớn lãi. Một số ngân hàng có sản phẩm cho rút một phần — hỏi trước khi gửi nếu bạn thấy khả năng này cao.",
      },
    ],
    sources: [],
  },

  {
    slug: "mua-tra-gop-0-phan-tram-doc-ky-cho-nao",
    title: "Mua trả góp 0%: đọc kỹ chỗ nào",
    excerpt:
      "Lãi 0% nhưng tổng tiền vẫn cao hơn giá gốc — mấy khoản phí nằm ở chỗ ít ai đọc tới.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Hỏi đúng một câu trước khi ký: mua trả thẳng thì bao nhiêu, mua trả góp thì tổng cộng bao nhiêu. Chênh lệch giữa hai con số chính là giá thật của việc trả góp, dù họ ghi lãi suất 0%. Xem kỹ phí chuyển đổi trả góp, phí thu hộ hằng tháng và phí phạt trả trước hạn.",
    prepare: [
      "Biết giá bán trả thẳng của món đồ tại vài nơi khác nhau",
      "Máy tính điện thoại để cộng",
      "Thu nhập thật và các khoản đang phải trả hằng tháng",
      "Thời gian đọc hợp đồng — đừng ký ngay tại quầy trong lúc vội",
    ],
    steps: [
      {
        title: "Hỏi giá trả thẳng trước",
        detail:
          "Nhiều nơi giá trả góp cao hơn giá trả thẳng ngay từ đầu. Hỏi câu này trước khi bàn tới trả góp.",
      },
      {
        title: "So giá ở vài nơi khác",
        detail:
          "Cửa hàng khác có thể bán rẻ hơn dù không có chương trình trả góp. So trước rồi tính sau.",
      },
      {
        title: "Yêu cầu con số TỔNG phải trả",
        detail:
          "Số tiền trả mỗi tháng nhân số tháng, cộng khoản trả trước, cộng mọi loại phí. Đây là con số duy nhất đáng so sánh.",
      },
      {
        title: "Tìm phí chuyển đổi trả góp",
        detail:
          "Nhiều chương trình 0% thu một khoản phí chuyển đổi tính theo phần trăm giá trị món hàng. Đây chính là chỗ lãi suất ẩn nấp.",
      },
      {
        title: "Tìm phí thu hộ hằng tháng",
        detail:
          "Một khoản nhỏ mỗi tháng nhưng nhân lên 12 hoặc 24 tháng thì không nhỏ nữa. Hỏi rõ có hay không.",
      },
      {
        title: "Hỏi về bảo hiểm khoản vay",
        detail:
          "Một số nơi gộp bảo hiểm vào và mặc định bạn đồng ý. Hỏi có bắt buộc không và giá bao nhiêu.",
      },
      {
        title: "Đọc điều khoản trả trước hạn",
        detail:
          "Muốn trả hết sớm mà bị phạt thì lợi thế của trả góp mất đi. Hỏi rõ trước.",
      },
      {
        title: "Xem điều khoản trả chậm",
        detail:
          "Trễ một ngày bị tính thế nào, bao lâu thì bị chuyển nhóm nợ. Nợ xấu vì một chiếc điện thoại là chuyện có thật và rất không đáng.",
      },
      {
        title: "Kiểm tra bạn đang vay của ai",
        detail:
          "Cửa hàng chỉ là nơi bán; bên cho vay thường là ngân hàng hoặc công ty tài chính. Xem tên đơn vị đó trên hợp đồng và tìm hiểu qua.",
      },
      {
        title: "Tính khả năng trả hằng tháng",
        detail:
          "Cộng khoản này vào các khoản đang trả. Nếu tổng vượt quá mức bạn thấy an toàn thì đừng mua, hoặc chọn món rẻ hơn.",
      },
      {
        title: "Đọc hợp đồng trước khi ký",
        detail:
          "Chụp ảnh đọc kỹ, đừng ký ngay giữa cửa hàng đông người. Nơi nào giục ký gấp thì càng phải chậm lại.",
      },
      {
        title: "Giữ hợp đồng và biên lai từng kỳ",
        detail:
          "Chụp lưu trong máy. Trả xong kỳ cuối thì xin giấy xác nhận đã tất toán.",
      },
    ],
    notes: [
      "Trả góp 0% không có nghĩa là miễn phí — hãy so TỔNG phải trả với giá trả thẳng để thấy chênh lệch thật.",
      "Trả góp làm món đồ trông rẻ hơn thực tế và khiến người ta mua thứ vượt khả năng. Tự hỏi: nếu phải trả một lần, bạn có mua không.",
      "Nợ xấu ảnh hưởng tới khả năng vay của bạn trong nhiều năm sau.",
      "Đừng để cửa hàng giữ CCCD bản gốc, và cẩn thận khi ký giấy tờ chưa điền đủ nội dung.",
    ],
    faq: [
      {
        q: "Trả góp qua thẻ tín dụng có khác không?",
        a: "Khác. Chuyển đổi trả góp qua thẻ thường có phí chuyển đổi riêng do ngân hàng thu. Hỏi ngân hàng phát hành thẻ trước khi làm.",
      },
      {
        q: "Trả góp có ảnh hưởng điểm tín dụng không?",
        a: "Trả đúng hạn thì thường là lịch sử tốt. Trả trễ thì ảnh hưởng xấu và lưu lại nhiều năm.",
      },
      {
        q: "Có nên trả góp không?",
        a: "Hợp lý khi bạn thật sự cần món đó, tổng phải trả không chênh nhiều so với giá trả thẳng, và khoản trả hằng tháng nằm trong khả năng thoải mái của bạn.",
      },
    ],
    sources: [],
  },
];
