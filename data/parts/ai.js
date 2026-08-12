// Phần AI — dùng trợ lý AI trong việc đời thường, viết tháng 8/2026.
//
// ❗ Cố ý KHÔNG gọi tên phiên bản cụ thể của từng ứng dụng, vì chúng đổi liên tục.
//    Nội dung tập trung vào thói quen dùng đúng cách — phần này bền hơn nhiều.

export const aiGuides = [
  {
    slug: "bat-dau-dung-ai-hoi-sao-cho-ra-viec",
    title: "Bắt đầu dùng AI: hỏi sao cho ra việc",
    excerpt:
      "Hỏi cụt lủn thì nhận lại câu trả lời chung chung. Thêm ba thứ vào câu hỏi là chất lượng khác hẳn.",
    readTimeMinutes: 3,
    category: "khac",
    author: null,
    quickAnswer:
      "Câu hỏi tốt cần ba thứ: bạn là ai trong tình huống này, bạn muốn nhận về cái gì, và giới hạn nào cần tuân theo. Cứ viết như đang nhờ một người mới vào làm giúp việc — họ không biết gì về hoàn cảnh của bạn cho tới khi bạn kể.",
    prepare: [
      "Chọn một ứng dụng AI và dùng quen nó trước, đừng nhảy qua lại nhiều app",
      "Nghĩ trước xem mình muốn nhận về cái gì: một đoạn văn, một danh sách, hay một lời khuyên",
      "Sẵn sàng hỏi lại vài lần — hiếm khi lần đầu đã ra đúng ý",
    ],
    steps: [
      {
        title: "Kể hoàn cảnh trước khi hỏi",
        detail:
          "Thay vì hỏi cách viết đơn xin nghỉ, hãy nói: tôi làm văn phòng, xin nghỉ hai ngày về quê có việc gia đình, sếp khá nghiêm.",
      },
      {
        title: "Nói rõ muốn nhận về dạng gì",
        detail:
          "Một đoạn ngắn, danh sách gạch đầu dòng, hay bảng so sánh. Nói luôn độ dài mong muốn để khỏi phải cắt bớt.",
      },
      {
        title: "Đặt giới hạn",
        detail:
          "Ví dụ: viết bằng tiếng Việt đời thường, đừng dùng từ hoa mỹ, đừng bịa số liệu, chỗ nào không chắc thì nói là không chắc.",
      },
      {
        title: "Chê thẳng và yêu cầu sửa",
        detail:
          "Nhận được bản chưa ưng thì nói cụ thể: dài quá, cắt còn một nửa; giọng cứng quá, viết thân thiện hơn. Sửa dần nhanh hơn viết lại từ đầu.",
      },
      {
        title: "Đưa ví dụ mẫu nếu có",
        detail:
          "Dán một đoạn bạn thấy hay và nói viết theo giọng như thế này. Đây là cách nhanh nhất để ra đúng ý bạn.",
      },
    ],
    notes: [
      "AI không biết chuyện riêng của bạn, cũng không nhớ hoàn cảnh nếu bạn mở cuộc trò chuyện mới.",
      "Câu trả lời nghe trôi chảy không đồng nghĩa với đúng — phần kiểm chứng vẫn là việc của bạn.",
    ],
    faq: [
      {
        q: "Hỏi bằng tiếng Việt được không hay phải tiếng Anh?",
        a: "Tiếng Việt dùng tốt cho hầu hết việc hằng ngày. Người Việt nằm trong nhóm dùng tiếng mẹ đẻ với trợ lý AI nhiều nhất khu vực.",
      },
      {
        q: "Nên dùng ứng dụng nào?",
        a: "Ứng dụng nào bạn mở hằng ngày là ứng dụng tốt nhất. Quen một cái rồi hãy thử cái khác để so.",
      },
    ],
    sources: [
      {
        label: "Tiền Phong — Người Việt dùng trợ lý AI Gemini nhiều nhất Đông Nam Á",
        url: "https://tienphong.vn/nguoi-viet-dung-tro-ly-ai-gemini-nhieu-nhat-dong-nam-a-post1860634.tpo",
      },
    ],
  },

  {
    slug: "kiem-chung-thong-tin-ai-dua-ra",
    title: "Kiểm chứng thông tin AI đưa ra",
    excerpt:
      "AI có thể bịa tên người, số liệu, thậm chí cả nguồn trích dẫn — mà giọng văn vẫn tự tin y như thật.",
    readTimeMinutes: 3,
    category: "khac",
    author: null,
    quickAnswer:
      "Coi mọi câu trả lời của AI là bản nháp thông minh, chưa phải kết luận. Ba thứ luôn phải kiểm lại trước khi dùng: số liệu, tên riêng và mốc thời gian. Việc càng quan trọng (tiền bạc, pháp lý, sức khỏe) thì càng phải đối chiếu nguồn chính thống.",
    prepare: [
      "Thói quen hỏi lại: cái này lấy từ đâu",
      "Một hai trang nguồn chính thống cho lĩnh vực bạn hay tra",
      "Chấp nhận mất thêm hai phút kiểm tra — rẻ hơn nhiều so với dùng nhầm thông tin sai",
    ],
    steps: [
      {
        title: "Nghi ngờ đúng chỗ: số, tên, ngày",
        detail:
          "Đây là ba loại thông tin AI hay sai nhất. Văn phong mượt mà không bảo chứng cho độ chính xác.",
      },
      {
        title: "Yêu cầu AI tự chỉ ra chỗ chưa chắc",
        detail:
          "Hỏi thẳng: phần nào trong câu trả lời trên bạn không chắc chắn. Câu hỏi này thường lộ ra vài chỗ đáng ngờ.",
      },
      {
        title: "Kiểm tra đường link trước khi tin",
        detail:
          "AI có thể đưa ra đường link trông rất thật nhưng không tồn tại. Bấm thử vào xem có mở được và có đúng nội dung không.",
      },
      {
        title: "Đối chiếu với nguồn gốc",
        detail:
          "Chuyện thủ tục thì xem cổng thông tin của cơ quan nhà nước; chuyện sản phẩm thì xem trang chính hãng. Đừng dừng ở lời kể lại.",
      },
      {
        title: "Việc hệ trọng thì hỏi người thật",
        detail:
          "Hợp đồng, thuế, bệnh tật, kiện tụng: dùng AI để hiểu vấn đề và biết nên hỏi gì, rồi hỏi người có chuyên môn.",
      },
    ],
    notes: [
      "Tỉ lệ bài báo chứa trích dẫn giả đang tăng nhanh theo từng năm — nghĩa là thông tin bịa đang len cả vào nơi ta hay tin.",
      "Cùng một câu hỏi hỏi lại lần nữa có thể ra đáp án khác. Khác nhau là dấu hiệu nên kiểm tra kỹ.",
    ],
    faq: [
      {
        q: "AI có tự biết là mình đang sai không?",
        a: "Thường là không. Nó tạo câu trả lời nghe hợp lý, chứ không có cách tự đối chiếu với sự thật. Vì vậy phần kiểm chứng vẫn thuộc về bạn.",
      },
      {
        q: "Vậy còn dùng AI làm gì cho mệt?",
        a: "AI rất mạnh ở việc soạn nháp, tóm tắt, gợi ý hướng làm và giải thích chuyện khó hiểu. Chỉ cần đừng giao cho nó vai trò người quyết định cuối cùng.",
      },
    ],
    sources: [
      {
        label: "GenK — AI vẫn khó thay con người trong kiểm chứng thông tin",
        url: "https://genk.vn/ai-van-kho-thay-con-nguoi-trong-kiem-chung-thong-tin-165260529083235074.chn",
      },
      {
        label: "Đại Đoàn Kết — Cảnh báo nguy cơ thông tin sai lệch từ AI",
        url: "https://daidoanket.vn/canh-bao-nguy-co-thong-tin-sai-lech-tu-ai.html",
      },
    ],
  },

  {
    slug: "dung-ai-nhung-dung-dua-thong-tin-ca-nhan",
    title: "Dùng AI nhưng đừng đưa thông tin cá nhân",
    excerpt:
      "Mấy trend tạo ảnh, tạo giấy tờ vui vui bằng AI có thể lấy đi nhiều thứ hơn bạn tưởng.",
    readTimeMinutes: 2,
    category: "khac",
    author: null,
    quickAnswer:
      "Nguyên tắc đơn giản: đừng gõ vào AI thứ gì bạn không muốn thấy trên mạng. Cụ thể là số căn cước, số tài khoản, mật khẩu, mã OTP, ảnh chụp giấy tờ, hồ sơ bệnh án và thông tin của người khác. Cần đưa ví dụ thì thay bằng thông tin giả.",
    prepare: [
      "Nhìn lại xem mình từng dán những gì vào ứng dụng AI",
      "Biết cách xoá lịch sử trò chuyện trong ứng dụng đang dùng",
      "Thói quen thay thông tin thật bằng thông tin giả khi cần đưa ví dụ",
    ],
    steps: [
      {
        title: "Nhớ danh sách cấm",
        detail:
          "Số căn cước, số thẻ, mật khẩu, mã OTP, ảnh giấy tờ, hồ sơ bệnh án, thông tin khách hàng hoặc đồng nghiệp.",
      },
      {
        title: "Thay bằng thông tin giả khi cần ví dụ",
        detail:
          "Muốn nhờ soạn đơn thì viết Nguyễn Văn A, số 0123..., rồi tự điền thông tin thật vào lúc hoàn thiện.",
      },
      {
        title: "Cẩn thận với trend tạo ảnh, tạo giấy tờ",
        detail:
          "Những trò vui yêu cầu bạn tải lên ảnh mặt hoặc giấy tờ thật đều có rủi ro: ảnh có thể bị cắt ghép phục vụ kịch bản lừa đảo.",
      },
      {
        title: "Xem lại quyền riêng tư trong ứng dụng",
        detail:
          "Nhiều ứng dụng cho tắt việc lưu lịch sử hoặc dùng dữ liệu để cải thiện dịch vụ. Vào phần cài đặt xem một lần cho biết.",
      },
      {
        title: "Việc công ty thì hỏi quy định nội bộ",
        detail:
          "Nhiều nơi có quy định riêng về dữ liệu được phép đưa lên công cụ bên ngoài. Hỏi trước vẫn hơn.",
      },
    ],
    notes: [
      "Thông tin đã gửi đi thì khó lấy lại — xoá lịch sử chưa chắc xoá hết mọi bản sao.",
      "Đề phòng cả những ứng dụng lạ hứa hẹn tính năng hấp dẫn: cài từ nguồn không rõ ràng là rủi ro kép.",
    ],
    faq: [
      {
        q: "Tôi lỡ dán số căn cước vào rồi thì sao?",
        a: "Xoá cuộc trò chuyện đó, kiểm tra phần cài đặt xem có tắt được việc lưu dữ liệu không, và cảnh giác hơn với các cuộc gọi lạ nhắc đúng thông tin của bạn.",
      },
    ],
    sources: [
      {
        label: "Pháp Luật TP.HCM — Coi chừng lộ thông tin cá nhân từ trend tạo giấy tờ bằng AI",
        url: "https://plo.vn/coi-chung-lo-thong-tin-ca-nhan-tu-trend-tao-phieu-dang-ky-thi-thpt-2026-bang-ai-post907123.html",
      },
      {
        label: "Tuổi Trẻ — Nguy cơ lộ dữ liệu cá nhân từ chatbot AI",
        url: "https://tuoitre.vn/nld/nguy-co-lo-du-lieu-ca-nhan-tu-chatbot-ai-196260207205513516.htm",
      },
    ],
  },

  {
    slug: "nhan-ra-anh-va-video-do-ai-tao",
    title: "Nhận ra ảnh và video do AI tạo",
    excerpt:
      "Không có mẹo nào đúng 100%, nhưng vài thói quen nhỏ giúp bạn khỏi chia sẻ nhầm tin giả.",
    readTimeMinutes: 3,
    category: "khac",
    author: null,
    quickAnswer:
      "Đừng chỉ soi hình, hãy soi nguồn: ai đăng đầu tiên, có báo chính thống nào đưa tin không, ảnh này đã xuất hiện ở đâu trước đó. Kết hợp thêm vài dấu hiệu hình ảnh, nhưng nhớ là công nghệ ngày càng khó nhận ra bằng mắt thường.",
    prepare: [
      "Thói quen dừng ba giây trước khi bấm chia sẻ",
      "Biết cách tìm kiếm ngược bằng hình ảnh trên điện thoại",
      "Một câu hỏi luôn tự đặt: tin này nếu thật thì báo nào đã đưa",
    ],
    steps: [
      {
        title: "Soi nguồn trước khi soi hình",
        detail:
          "Tài khoản mới lập, không có lịch sử, đăng nội dung gây sốc là dấu hiệu đáng ngờ hơn bất kỳ chi tiết hình ảnh nào.",
      },
      {
        title: "Tìm kiếm ngược bằng hình ảnh",
        detail:
          "Đưa ảnh vào công cụ tìm kiếm hình để xem nó đã xuất hiện ở đâu, từ bao giờ, trong ngữ cảnh nào.",
      },
      {
        title: "Nhìn kỹ những chỗ AI hay lỗi",
        detail:
          "Bàn tay và ngón tay, chữ viết trong ảnh, hoa văn lặp lại bất thường, ánh sáng và bóng đổ không khớp nhau.",
      },
      {
        title: "Với video, để ý chuyển động",
        detail:
          "Khẩu hình lệch tiếng, chớp mắt bất thường, viền tóc và viền mặt nhoè, hình giật nhẹ khi quay đầu.",
      },
      {
        title: "Chưa chắc thì đừng chia sẻ",
        detail:
          "Chia sẻ tin giả dù vô ý vẫn góp phần lan truyền. Chờ thêm một ngày cũng không mất gì.",
      },
    ],
    notes: [
      "Các dấu hiệu trên ngày càng ít tin cậy khi công nghệ tiến bộ — kiểm tra nguồn vẫn là cách bền nhất.",
      "Nội dung khiến bạn giận dữ hoặc sợ hãi ngay lập tức thường là nội dung được thiết kế để lan truyền. Càng thấy bức xúc, càng nên kiểm tra kỹ.",
    ],
    faq: [
      {
        q: "Có app nào phát hiện ảnh AI chính xác không?",
        a: "Các công cụ hiện có chỉ đưa ra dự đoán, có thể sai cả hai chiều. Đừng dựa vào một công cụ duy nhất để kết luận.",
      },
    ],
    sources: [
      {
        label: "Đại Đoàn Kết — Cảnh báo nguy cơ thông tin sai lệch từ AI",
        url: "https://daidoanket.vn/canh-bao-nguy-co-thong-tin-sai-lech-tu-ai.html",
      },
    ],
  },

  {
    slug: "dung-ai-viet-email-va-tin-nhan-cong-viec",
    title: "Dùng AI viết email và tin nhắn công việc",
    excerpt:
      "Bí không biết mở lời thế nào? Có cách nhờ AI mà email vẫn ra giọng của bạn, không bị máy móc.",
    readTimeMinutes: 3,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Đừng bảo AI viết hộ từ đầu. Hãy viết nháp thô bằng lời của bạn — dù lủng củng — rồi nhờ AI sắp xếp lại cho gọn và lịch sự. Cách này giữ được giọng của bạn và nhanh hơn nhiều so với sửa một bản văn hoa nhưng xa lạ.",
    prepare: [
      "Nội dung chính bạn muốn nói, viết thô cũng được",
      "Biết người nhận là ai: sếp, đồng nghiệp, khách hàng hay đối tác",
      "Vài email cũ bạn thấy ổn, để làm mẫu giọng văn",
    ],
    steps: [
      {
        title: "Viết ý thô trước",
        detail:
          "Ba bốn gạch đầu dòng: tôi muốn xin gì, vì sao, mong nhận lại gì. Chưa cần câu chữ đẹp.",
      },
      {
        title: "Nói rõ người nhận và mức trang trọng",
        detail:
          "Gửi sếp thì lịch sự vừa phải, gửi đồng nghiệp thân thì tự nhiên hơn. AI không tự đoán được mối quan hệ này.",
      },
      {
        title: "Dán email mẫu để giữ giọng",
        detail:
          "Đưa một email cũ bạn từng gửi và nói viết theo giọng như thế này. Đây là bước khiến thư ra giống bạn nhất.",
      },
      {
        title: "Đọc lại và sửa cho giống mình",
        detail:
          "Bỏ những từ bạn không bao giờ dùng, cắt câu sáo rỗng. Một email hơi vụng mà thật vẫn hơn một email hoàn hảo mà giả.",
      },
      {
        title: "Kiểm tra thông tin thật trước khi gửi",
        detail:
          "Tên người, ngày giờ, số tiền, tên dự án — AI có thể điền sai. Đây là chỗ sai một chữ là phiền to.",
      },
    ],
    notes: [
      "Đừng dán thông tin khách hàng, hợp đồng hay số liệu nội bộ vào công cụ bên ngoài khi chưa rõ quy định công ty.",
      "Thư nhạy cảm (xin lỗi khách, xử lý mâu thuẫn) nên tự viết rồi chỉ nhờ AI góp ý, đừng để nó viết thay.",
    ],
    faq: [
      {
        q: "Người nhận có nhận ra email do AI viết không?",
        a: "Nếu bạn để nguyên bản AI với đầy từ hoa mỹ thì rất dễ nhận ra. Sửa lại bằng giọng của bạn là hết vấn đề.",
      },
      {
        q: "Có nên nhờ AI viết CV không?",
        a: "Dùng để sắp xếp bố cục và diễn đạt gọn hơn thì tốt. Nhưng kinh nghiệm và con số phải là của bạn, khai không đúng là tự làm khó mình lúc phỏng vấn.",
      },
    ],
    sources: [],
  },

  {
    slug: "dung-ai-len-thuc-don-va-di-cho",
    title: "Dùng AI lên thực đơn và đi chợ",
    excerpt:
      "Hết nghĩ ra món để nấu? Đây là cách nhờ AI lên thực đơn cả tuần kèm danh sách mua đúng lượng.",
    readTimeMinutes: 2,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Cho AI biết bốn thứ: mấy người ăn, ngân sách, mấy phút nấu được mỗi bữa, và những gì bạn không ăn được. Rồi yêu cầu trả về thực đơn theo ngày kèm danh sách đi chợ gom theo quầy hàng.",
    prepare: [
      "Số người ăn và khẩu vị chung của nhà",
      "Ngân sách ước lượng cho một tuần",
      "Danh sách món bạn dị ứng hoặc không ăn được",
    ],
    steps: [
      {
        title: "Mô tả hoàn cảnh thật của bạn",
        detail:
          "Ví dụ: hai người, đi làm về 7 giờ tối, chỉ nấu được khoảng 30 phút, bếp nhỏ, không ăn được hải sản.",
      },
      {
        title: "Xin thực đơn theo ngày",
        detail:
          "Yêu cầu ghi rõ món nào nấu hôm nào, món nào dùng lại nguyên liệu của hôm trước để đỡ phí đồ.",
      },
      {
        title: "Xin danh sách đi chợ gom theo quầy",
        detail:
          "Rau riêng, thịt cá riêng, đồ khô riêng — đi siêu thị theo danh sách này nhanh hơn hẳn.",
      },
      {
        title: "Nhờ ước lượng số lượng",
        detail:
          "Bao nhiêu gam thịt, mấy bó rau cho từng ấy người. Số này chỉ để tham khảo, mua vài lần là bạn tự canh được.",
      },
      {
        title: "Hỏi cách xử lý đồ thừa",
        detail:
          "Còn nửa bó rau, còn ít thịt: hỏi luôn nấu được món gì để không phải bỏ đi.",
      },
    ],
    notes: [
      "Giá cả và mùa vụ thay đổi theo vùng — AI ước lượng thôi, ra chợ vẫn phải nhìn hàng.",
      "Người có bệnh cần ăn kiêng theo chỉ định thì làm theo hướng dẫn của bác sĩ, đừng theo thực đơn AI.",
    ],
    faq: [
      {
        q: "AI có biết món Việt không?",
        a: "Các món phổ biến thì biết khá ổn. Món vùng miền đặc thù có thể sai công thức — cứ đối chiếu thêm với người nhà hoặc video hướng dẫn.",
      },
    ],
    sources: [],
  },

  {
    slug: "dung-ai-hoc-tieng-anh-moi-ngay",
    title: "Dùng AI học tiếng Anh mỗi ngày",
    excerpt:
      "Có sẵn một người bạn không bao giờ chê bạn nói sai — vấn đề là biết cách nhờ họ dạy.",
    readTimeMinutes: 3,
    category: "khac",
    author: null,
    quickAnswer:
      "Đừng học kiểu hỏi ngữ pháp lan man. Hãy chọn một tình huống thật bạn sắp gặp (phỏng vấn, đặt phòng, họp online), nhờ AI đóng vai đối phương, nói chuyện với nó rồi xin nhận xét về lỗi hay lặp lại.",
    prepare: [
      "Một tình huống cụ thể bạn cần dùng tiếng Anh",
      "15 phút mỗi ngày, đều đặn hơn là học dồn cuối tuần",
      "Ứng dụng có tính năng trò chuyện bằng giọng nói nếu bạn muốn luyện nghe nói",
    ],
    steps: [
      {
        title: "Nhờ AI đóng vai",
        detail:
          "Ví dụ: bạn là nhân viên lễ tân khách sạn, tôi là khách đến nhận phòng, hãy nói chuyện với tôi bằng tiếng Anh đơn giản.",
      },
      {
        title: "Cứ nói sai thoải mái",
        detail:
          "Sai là chuyện bình thường và đây là chỗ an toàn để sai. Đừng dừng lại tra từ giữa chừng, cứ nói hết đã.",
      },
      {
        title: "Xin nhận xét sau khi xong",
        detail:
          "Yêu cầu liệt kê ba lỗi bạn lặp nhiều nhất và cách sửa, kèm ví dụ câu đúng cho từng lỗi.",
      },
      {
        title: "Xin bản diễn đạt tự nhiên hơn",
        detail:
          "Dán câu bạn vừa nói và hỏi người bản xứ sẽ nói câu này thế nào. So sánh hai bản là học được nhiều nhất.",
      },
      {
        title: "Lặp lại tình huống đó vài ngày",
        detail:
          "Lần đầu vấp, lần ba trôi chảy. Cảm giác tiến bộ rõ rệt này giúp bạn duy trì thói quen.",
      },
    ],
    notes: [
      "AI có thể giải thích ngữ pháp sai — gặp điểm ngữ pháp quan trọng thì đối chiếu thêm từ điển hoặc sách.",
      "Muốn thi chứng chỉ thì vẫn cần đề thi thật và người chấm có chuyên môn.",
    ],
    faq: [
      {
        q: "Học kiểu này thay được lớp học không?",
        a: "Thay được phần luyện tập lặp đi lặp lại, nhưng lộ trình bài bản và việc sửa phát âm kỹ thì giáo viên vẫn hơn.",
      },
    ],
    sources: [],
  },

  {
    slug: "hoi-ai-ve-suc-khoe-dung-sao-cho-an-toan",
    title: "Hỏi AI về sức khỏe: dùng sao cho an toàn",
    excerpt:
      "AI giúp bạn hiểu vấn đề và biết nên hỏi bác sĩ điều gì — nhưng tuyệt đối không thay được người khám cho bạn.",
    readTimeMinutes: 3,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Dùng AI để hiểu thuật ngữ trong kết quả xét nghiệm, chuẩn bị câu hỏi trước khi đi khám, và biết dấu hiệu nào cần đi khám ngay. Tuyệt đối không dùng để tự chẩn đoán bệnh hay tự quyết định uống thuốc gì.",
    prepare: [
      "Ghi lại triệu chứng: bắt đầu khi nào, mức độ ra sao, có gì làm nặng thêm",
      "Danh sách thuốc bạn đang dùng",
      "Tinh thần: đây là bước chuẩn bị trước khi gặp bác sĩ, không phải thay bác sĩ",
    ],
    steps: [
      {
        title: "Nhờ giải thích thuật ngữ khó hiểu",
        detail:
          "Kết quả xét nghiệm hay đơn thuốc đầy chữ lạ, nhờ AI giải thích bằng lời dễ hiểu để bạn đỡ hoang mang.",
      },
      {
        title: "Nhờ soạn câu hỏi cho bác sĩ",
        detail:
          "Đây là cách dùng hữu ích nhất: có sẵn năm câu hỏi trong tay, buổi khám ngắn ngủi trở nên đáng giá hơn nhiều.",
      },
      {
        title: "Hỏi về dấu hiệu cần đi khám ngay",
        detail:
          "Biết ngưỡng nào là phải đến bệnh viện giúp bạn không chủ quan mà cũng không lo lắng thái quá.",
      },
      {
        title: "Đừng bao giờ hỏi nên uống thuốc gì",
        detail:
          "Thuốc phụ thuộc vào bệnh sử, dị ứng, thuốc đang dùng và tình trạng cụ thể của bạn. Đây là việc của bác sĩ và dược sĩ.",
      },
      {
        title: "Mang câu trả lời đi hỏi lại người có chuyên môn",
        detail:
          "Nói với bác sĩ rằng bạn có đọc được thông tin này, nhờ họ xác nhận. Đừng tự kết luận ở nhà.",
      },
    ],
    notes: [
      "Nội dung AI đưa ra không phải chẩn đoán y khoa và có thể sai hoàn toàn với trường hợp của bạn.",
      "Dấu hiệu nguy hiểm như đau ngực, khó thở, sốt cao, chảy máu không cầm, lú lẫn: đi cấp cứu ngay, đừng ngồi hỏi ứng dụng.",
      "Đừng tải ảnh chụp hồ sơ bệnh án hay giấy tờ tuỳ thân lên các ứng dụng bạn chưa tin tưởng.",
    ],
    faq: [
      {
        q: "AI trả lời rất hợp lý, sao vẫn không tin được?",
        a: "Vì nó không khám được cho bạn và không biết bệnh sử của bạn. Cùng một triệu chứng có thể là chuyện nhỏ hoặc chuyện lớn, chỉ người khám trực tiếp mới phân biệt được.",
      },
      {
        q: "Vậy dùng vào việc gì là an toàn nhất?",
        a: "Hiểu thuật ngữ, chuẩn bị câu hỏi, và học các thói quen sinh hoạt chung. Ba việc này giúp ích thật mà không gây rủi ro.",
      },
    ],
    sources: [],
  },
];
