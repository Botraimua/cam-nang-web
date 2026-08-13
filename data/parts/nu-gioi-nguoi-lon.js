// Phần NỮ GIỚI — NGƯỜI LỚN: chuyện khó nói về cơ thể, tình dục, giới tính.
//
// ❗ Mọi bài ở đây đều có adult: true — ẩn khỏi lượt xem mặc định ở trang chủ,
//    chỉ hiện khi người đọc bấm đúng mục Nữ giới / 18+ hoặc đang tìm kiếm.
//
// ❗ NGUYÊN TẮC: nói thẳng và bình thản về sức khỏe, cảm xúc và giao tiếp.
//    KHÔNG mô tả kỹ thuật tình dục, KHÔNG kê tên thuốc hay liều dùng,
//    mọi bài đều nhắc đây không phải tư vấn y khoa.
//    Số bước không giới hạn — ưu tiên đủ chi tiết để làm theo được.

const chung = { category: "nu-gioi", author: null, adult: true };

export const nuGioiNguoiLon = [
  {
    ...chung,
    slug: "tu-kiem-tra-nguc-hang-thang",
    title: "Tự kiểm tra ngực hàng tháng",
    excerpt:
      "Vài phút mỗi tháng để quen với cơ thể mình. Việc đơn giản này nhiều người chưa từng được hướng dẫn tử tế lần nào.",
    readTimeMinutes: 4,
    quickAnswer:
      "Chọn một thời điểm cố định trong tháng, tốt nhất là vài ngày sau khi sạch kinh khi ngực ít căng nhất. Quan sát trước gương, rồi sờ theo đường xoắn ốc hoặc theo dải dọc, nhớ kiểm tra cả vùng nách. Mục tiêu không phải tìm bệnh mà là quen với cái bình thường của mình để nhận ra thay đổi.",
    prepare: [
      "Đặt nhắc trong điện thoại vào một ngày cố định mỗi tháng",
      "Chọn thời điểm vài ngày sau khi sạch kinh — lúc ngực ít căng và ít lổn nhổn nhất",
      "Chỗ riêng tư có gương và đủ ánh sáng",
      "Tinh thần bình thản: phần lớn thay đổi ở ngực là lành tính, nhất là ở người trẻ",
    ],
    steps: [
      {
        title: "Chọn đúng thời điểm trong chu kỳ",
        detail:
          "Ngực thay đổi theo nội tiết trong tháng. Kiểm tra ngay trước kỳ kinh sẽ thấy căng và lổn nhổn hơn, dễ tưởng nhầm là bất thường. Sau sạch kinh vài ngày là thời điểm chuẩn nhất.",
      },
      {
        title: "Quan sát trước gương, buông tay",
        detail:
          "Nhìn hình dạng, kích thước, đường viền. Hai bên không bằng nhau là bình thường — bạn đang tìm sự THAY ĐỔI so với chính bạn tháng trước.",
      },
      {
        title: "Giơ tay lên và quan sát tiếp",
        detail:
          "Tư thế này làm lộ ra những chỗ da bị co kéo. Nhìn xem có vùng nào lõm vào, da sần như vỏ cam, hay núm vú bị tụt vào bất thường không.",
      },
      {
        title: "Chống tay lên hông và gồng nhẹ ngực",
        detail:
          "Tư thế thứ ba giúp thấy rõ hơn những thay đổi về đường nét. Ba tư thế này mất tổng cộng chưa tới một phút.",
      },
      {
        title: "Sờ khi đứng hoặc trong lúc tắm",
        detail:
          "Da ướt và có xà phòng thì tay trượt dễ hơn, cảm nhận tốt hơn. Dùng đầu ba ngón tay giữa, không dùng đầu ngón tay nhọn.",
      },
      {
        title: "Ấn theo ba mức nông, vừa, sâu",
        detail:
          "Ở mỗi điểm, ấn nhẹ để cảm nhận lớp ngay dưới da, rồi vừa, rồi sâu hơn để cảm nhận lớp sát thành ngực. Đây là phần nhiều người làm thiếu.",
      },
      {
        title: "Đi theo một đường có hệ thống",
        detail:
          "Xoắn ốc từ ngoài vào trong quanh núm vú, hoặc theo từng dải dọc từ trên xuống. Chọn một cách rồi làm y như vậy mỗi tháng để dễ so sánh.",
      },
      {
        title: "ĐỪNG QUÊN vùng nách và xương đòn",
        detail:
          "Mô tuyến vú kéo dài tới nách và hạch bạch huyết nằm ở đó. Đây là vùng nhiều người bỏ sót nhất.",
      },
      {
        title: "Nằm xuống kiểm tra lại một lượt",
        detail:
          "Kê gối hoặc khăn cuộn dưới vai bên cần khám, đưa tay bên đó lên đầu. Mô ngực dàn đều ra nên dễ cảm nhận hơn hẳn.",
      },
      {
        title: "Kiểm tra núm vú",
        detail:
          "Bóp nhẹ xem có tiết dịch không. Dịch trong hoặc dịch máu chảy tự nhiên không do bóp là dấu hiệu cần đi khám.",
      },
      {
        title: "Ghi nhớ cái bình thường của bạn",
        detail:
          "Ngực lổn nhổn nhẹ và thay đổi theo chu kỳ là chuyện rất thường. Quan trọng là bạn nhận ra khi có gì khác đi so với chính mình.",
      },
    ],
    notes: [
      "ĐI KHÁM nếu: sờ thấy khối cứng không di động, da lõm hoặc sần như vỏ cam, núm vú tụt vào bất thường, tiết dịch nhất là dịch máu, hoặc một bên thay đổi rõ so với bên kia.",
      "Tự kiểm tra KHÔNG thay thế tầm soát định kỳ theo chỉ định của bác sĩ, đặc biệt khi gia đình có tiền sử ung thư vú.",
      "Nam giới cũng có mô tuyến vú và cũng có thể mắc bệnh, dù hiếm hơn nhiều — bất thường ở vùng ngực nam cũng cần đi khám.",
      "Bài viết không phải chẩn đoán; mọi bất thường phải do bác sĩ đánh giá.",
    ],
    faq: [
      {
        q: "Sờ thấy cục, có phải ung thư không?",
        a: "Phần lớn là u xơ hoặc nang lành tính, đặc biệt ở người trẻ. Nhưng đừng tự kết luận theo hướng nào — hãy đi khám để biết chắc.",
      },
      {
        q: "Ngực đau trước kỳ kinh có sao không?",
        a: "Căng đau theo chu kỳ rất phổ biến và thường do nội tiết. Đau một điểm cố định, không liên quan chu kỳ, kéo dài thì nên đi khám.",
      },
      {
        q: "Bao nhiêu tuổi thì nên bắt đầu?",
        a: "Có thể bắt đầu từ tuổi trưởng thành. Còn lịch tầm soát bằng chụp nhũ ảnh thì theo chỉ định bác sĩ, phụ thuộc tuổi và yếu tố nguy cơ.",
      },
      {
        q: "Đang cho con bú thì kiểm tra thế nào?",
        a: "Vẫn kiểm tra được, tốt nhất là sau khi cho bú hoặc vắt sữa để ngực bớt căng. Thấy khối cứng kéo dài không tan sau khi bú thì đi khám.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tam-soat-ung-thu-co-tu-cung",
    title: "Tầm soát ung thư cổ tử cung",
    excerpt:
      "Một trong số rất ít bệnh ung thư phát hiện được từ giai đoạn TIỀN ung thư. Vậy mà nhiều người chưa từng đi lần nào.",
    readTimeMinutes: 4,
    quickAnswer:
      "Đây là xét nghiệm lấy mẫu tế bào ở cổ tử cung, làm nhanh tại phòng khám phụ khoa, thường chỉ vài phút và không đau như nhiều người tưởng. Độ tuổi bắt đầu và khoảng cách giữa các lần do bác sĩ chỉ định tuỳ loại xét nghiệm. Kết hợp với tiêm vắc xin HPV là cách bảo vệ hiệu quả nhất hiện nay.",
    prepare: [
      "Đặt lịch khi không trong kỳ kinh",
      "Hỏi trước cơ sở về việc kiêng quan hệ hay dùng thuốc đặt mấy ngày trước khi lấy mẫu",
      "Mang theo kết quả tầm soát cũ nếu có — bác sĩ cần so sánh",
      "Mặc đồ dễ thay",
    ],
    steps: [
      {
        title: "Đặt lịch ở cơ sở phụ khoa uy tín",
        detail:
          "Bệnh viện phụ sản, khoa sản bệnh viện đa khoa, hoặc phòng khám có giấy phép. Hỏi luôn loại xét nghiệm họ làm và giá.",
      },
      {
        title: "Chọn thời điểm ngoài kỳ kinh",
        detail:
          "Máu kinh làm nhiễu mẫu và có thể phải làm lại. Khoảng giữa chu kỳ là thời điểm thuận tiện nhất.",
      },
      {
        title: "Chuẩn bị theo đúng hướng dẫn",
        detail:
          "Nhiều nơi yêu cầu kiêng quan hệ, không thụt rửa và không dùng thuốc đặt trong vài ngày trước. Hỏi rõ khi đặt lịch — làm sai là mẫu bị nhiễu.",
      },
      {
        title: "Khai bệnh sử ngắn gọn",
        detail:
          "Bác sĩ sẽ hỏi về kỳ kinh, số lần sinh, tiền sử bất thường, đã tiêm HPV chưa. Trả lời thật để họ chọn đúng loại tầm soát.",
      },
      {
        title: "Quá trình lấy mẫu rất nhanh",
        detail:
          "Thường chỉ vài phút. Cảm giác được mô tả là hơi khó chịu hoặc tưng tức chứ không đau. Thở đều và thả lỏng thì càng nhanh.",
      },
      {
        title: "Có thể ra chút máu sau đó",
        detail:
          "Ra ít máu hoặc dịch hồng trong một hai ngày là bình thường. Ra máu nhiều hoặc kéo dài thì gọi lại cho cơ sở.",
      },
      {
        title: "Nhận kết quả và nghe bác sĩ giải thích",
        detail:
          "Kết quả bất thường KHÔNG đồng nghĩa với ung thư. Nhiều trường hợp chỉ cần theo dõi hoặc xử lý sớm là ổn hoàn toàn.",
      },
      {
        title: "Làm theo hướng dẫn nếu kết quả bất thường",
        detail:
          "Có thể cần soi cổ tử cung, sinh thiết, hoặc chỉ cần lặp lại sau một khoảng thời gian. Đừng bỏ lịch hẹn theo dõi — đây là chỗ nhiều người bỏ cuộc rồi mất cơ hội phát hiện sớm.",
      },
      {
        title: "Đặt nhắc cho lần tiếp theo",
        detail:
          "Hỏi bác sĩ khoảng cách phù hợp với bạn rồi đặt lịch nhắc ngay trong điện thoại. Vài năm sau bạn sẽ không nhớ nổi.",
      },
      {
        title: "Kết hợp với tiêm vắc xin HPV nếu chưa tiêm",
        detail:
          "Hai việc bổ trợ nhau chứ không thay nhau. Xem bài về tiêm HPV để biết bạn có nằm trong độ tuổi chỉ định không.",
      },
    ],
    notes: [
      "Đã tiêm vắc xin HPV vẫn cần tầm soát theo hướng dẫn — vắc xin không thay thế việc này.",
      "ĐI KHÁM NGAY, đừng chờ tới lịch tầm soát: ra máu bất thường giữa kỳ, ra máu sau quan hệ, hoặc ra máu sau khi đã mãn kinh.",
      "Độ tuổi và tần suất cụ thể do bác sĩ quyết định — bài viết không thay thế chỉ định y tế.",
      "Đây là bệnh ung thư có tỉ lệ chữa khỏi rất cao nếu phát hiện ở giai đoạn sớm, và tầm soát chính là cách phát hiện sớm.",
    ],
    faq: [
      {
        q: "Chưa quan hệ có cần tầm soát không?",
        a: "Chỉ định khác nhau tuỳ trường hợp. Hãy hỏi bác sĩ phụ khoa về tình huống cụ thể của bạn thay vì tự quyết định.",
      },
      {
        q: "Làm có đau không?",
        a: "Phần lớn người mô tả là hơi khó chịu trong vài giây chứ không đau. Căng thẳng làm cơ siết lại nên càng khó chịu — thở sâu giúp ích rất nhiều.",
      },
      {
        q: "Kết quả bất thường thì có nghĩa là ung thư?",
        a: "Không. Phần lớn bất thường là thay đổi tế bào nhẹ, có thể tự hồi phục hoặc chỉ cần theo dõi. Nghe bác sĩ giải thích thay vì tự tra mạng.",
      },
      {
        q: "Chi phí khoảng bao nhiêu?",
        a: "Khác nhau tuỳ loại xét nghiệm và cơ sở; bệnh viện công thường rẻ hơn. Hỏi bảng giá khi đặt lịch.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "dau-bung-kinh-du-doi-khi-nao-la-bat-thuong",
    title: "Đau bụng kinh dữ dội: khi nào là bất thường",
    excerpt:
      "Câu ai cũng nghe là con gái thì phải chịu. Nhưng đau tới mức nghỉ học nghỉ làm thì không nằm trong nhóm bình thường.",
    readTimeMinutes: 4,
    quickAnswer:
      "Đau nhẹ tới vừa, chịu được, giảm khi chườm ấm là chuyện thường gặp. Nhưng đau tới mức phải nghỉ làm, nôn, ngất, đau cả ngoài kỳ kinh, hoặc đau ngày càng nặng lên theo năm tháng thì CẦN ĐI KHÁM — có thể liên quan tới bệnh lý điều trị được như lạc nội mạc tử cung hoặc u xơ.",
    prepare: [
      "Ghi lại vài chu kỳ: mức đau theo thang 1–10, thời gian, thuốc đã dùng, có phải nghỉ làm không",
      "Ghi cả triệu chứng kèm theo: nôn, tiêu chảy, đau khi quan hệ, đau khi đi vệ sinh",
      "Mang ghi chép này đi khám — hữu ích hơn nhiều so với cố nhớ tại chỗ",
      "Túi chườm ấm hoặc chai nước ấm",
    ],
    steps: [
      {
        title: "Chấm điểm mức đau mỗi kỳ",
        detail:
          "Từ 1 tới 10. Con số cụ thể giúp bác sĩ đánh giá tốt hơn nhiều so với mô tả đau lắm. Ghi cả việc bạn có phải nghỉ làm hay không.",
      },
      {
        title: "Ghi thời điểm đau trong chu kỳ",
        detail:
          "Đau trước kỳ, trong kỳ, hay cả giữa chu kỳ. Đau ngoài kỳ kinh là dấu hiệu cần chú ý hơn hẳn.",
      },
      {
        title: "Thử các biện pháp cơ bản",
        detail:
          "Chườm ấm bụng dưới, nghỉ ngơi, vận động nhẹ như đi bộ. Có hiệu quả với nhiều người, không hại gì và không tốn tiền.",
      },
      {
        title: "Chú ý tới ăn uống và nghỉ ngơi",
        detail:
          "Ngủ đủ, uống đủ nước, hạn chế rượu bia trong những ngày này. Không phải phép màu nhưng nhiều người thấy dễ chịu hơn.",
      },
      {
        title: "Dùng thuốc giảm đau đúng cách",
        detail:
          "Hỏi dược sĩ loại nào phù hợp và uống thế nào. Nhiều loại hiệu quả hơn khi uống sớm ngay khi bắt đầu đau thay vì đợi đau dữ dội.",
      },
      {
        title: "Đừng tự tăng liều",
        detail:
          "Phải dùng liều cao hoặc dùng thường xuyên mới chịu nổi là DẤU HIỆU CẦN ĐI KHÁM, không phải dấu hiệu cần uống thêm.",
      },
      {
        title: "Nhận diện các dấu hiệu cảnh báo",
        detail:
          "Đau tăng dần qua các năm, đau khi quan hệ, đau khi đi vệ sinh trong kỳ kinh, khó thụ thai — nhóm dấu hiệu này gợi ý bệnh lý cần khám.",
      },
      {
        title: "Đi khám phụ khoa mang theo ghi chép",
        detail:
          "Bác sĩ có thể siêu âm và làm thêm xét nghiệm để tìm nguyên nhân. Dữ liệu vài tháng của bạn giúp họ rất nhiều.",
      },
      {
        title: "Hỏi rõ các hướng điều trị",
        detail:
          "Có nhiều hướng tuỳ nguyên nhân, từ điều chỉnh nội tiết tới can thiệp. Hỏi ưu nhược điểm của từng hướng và tác động tới khả năng sinh sản.",
      },
      {
        title: "Theo dõi sau điều trị",
        detail:
          "Tiếp tục ghi chép để đánh giá điều trị có hiệu quả không. Không đỡ thì quay lại nói với bác sĩ thay vì chịu đựng tiếp.",
      },
    ],
    notes: [
      "ĐI CẤP CỨU: đau tới mức ngất, nôn liên tục, hoặc đau dữ dội đột ngột kèm sốt.",
      "Đau bụng kinh dữ dội KHÔNG phải điều phụ nữ buộc phải chịu đựng. Đây là quan niệm cũ khiến nhiều người bỏ lỡ chẩn đoán quan trọng.",
      "Lạc nội mạc tử cung thường mất nhiều năm mới được chẩn đoán vì bị coi là đau bụng kinh bình thường — nói rõ mức độ đau với bác sĩ.",
      "Bài viết không chẩn đoán và không nêu tên thuốc.",
    ],
    faq: [
      {
        q: "Uống thuốc giảm đau mỗi kỳ có hại không?",
        a: "Dùng đúng loại đúng liều theo hướng dẫn của dược sĩ thì nhiều người dùng được. Nhưng phải phụ thuộc thuốc mỗi kỳ là lý do nên đi tìm nguyên nhân.",
      },
      {
        q: "Sinh con xong có hết đau không?",
        a: "Một số người thấy đỡ, một số không. Đừng coi đó là giải pháp và đừng trì hoãn việc đi khám vì lời khuyên này.",
      },
      {
        q: "Đau nhiều có ảnh hưởng khả năng có con không?",
        a: "Tuỳ nguyên nhân. Một số bệnh lý gây đau cũng ảnh hưởng tới khả năng thụ thai — thêm một lý do để đi khám sớm.",
      },
      {
        q: "Chườm nóng hay chườm lạnh?",
        a: "Chườm ấm thường được nhắc tới nhiều hơn cho đau bụng kinh. Thử xem cách nào hợp với bạn, miễn là không quá nóng gây bỏng da.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "khi-hu-the-nao-la-binh-thuong",
    title: "Khí hư: thế nào là bình thường",
    excerpt:
      "Có khí hư là dấu hiệu của cơ thể khoẻ mạnh. Vấn đề nằm ở chỗ nhận ra khi nào nó đổi khác.",
    readTimeMinutes: 3,
    quickAnswer:
      "Khí hư bình thường thường trong hoặc trắng đục, không mùi khó chịu, và thay đổi độ đặc loãng theo chu kỳ. Cần đi khám khi đổi màu vàng xanh hoặc xám, vón cục như bã đậu, có mùi hôi tanh rõ, hoặc kèm ngứa rát và đau bụng dưới.",
    prepare: [
      "Quan sát và ghi lại vài ngày: màu, độ đặc, mùi, có ngứa không",
      "Nhớ lại: có dùng dung dịch mới, kháng sinh, hay thay đổi gì gần đây không",
      "Đặt lịch khám khi không trong kỳ kinh nếu không gấp",
      "Không thụt rửa và không đặt thuốc trước khi đi khám",
    ],
    steps: [
      {
        title: "Hiểu thay đổi theo chu kỳ là bình thường",
        detail:
          "Giữa chu kỳ thường trong, dai và nhiều hơn. Gần kỳ kinh thì đặc và ít hơn. Đây là biến đổi sinh lý theo nội tiết, không phải bệnh.",
      },
      {
        title: "Biết cái bình thường của riêng bạn",
        detail:
          "Mỗi người một kiểu. Quan sát vài tháng để biết trạng thái nền của mình — đó là cách duy nhất nhận ra thay đổi.",
      },
      {
        title: "Nhận biết dấu hiệu bất thường",
        detail:
          "Đổi màu rõ sang vàng, xanh hoặc xám; vón cục như bã đậu; mùi hôi tanh; kèm ngứa rát hoặc đau bụng dưới — những dấu hiệu này cần khám.",
      },
      {
        title: "Ghi lại yếu tố có thể liên quan",
        detail:
          "Vừa uống kháng sinh, đổi dung dịch vệ sinh, đi bơi, mặc đồ ẩm lâu, đang căng thẳng, thay đổi bạn tình. Thông tin này giúp bác sĩ rất nhiều.",
      },
      {
        title: "ĐỪNG tự chữa bằng thuốc đặt mua theo mách",
        detail:
          "Mỗi nguyên nhân cần thuốc khác nhau. Dùng sai làm tình trạng dai dẳng, khó chẩn đoán, và có khi làm nặng thêm.",
      },
      {
        title: "Giữ vệ sinh thật đơn giản",
        detail:
          "Nước sạch, rửa bên ngoài, lau khô từ trước ra sau, đồ lót cotton thoáng. Không thụt rửa sâu, không xà phòng mạnh, không xịt thơm.",
      },
      {
        title: "Đi khám nếu bất thường kéo dài",
        detail:
          "Bác sĩ có thể lấy mẫu soi để xác định nguyên nhân. Đây là xét nghiệm nhanh và cho câu trả lời rõ ràng thay vì đoán.",
      },
      {
        title: "Dùng đủ liệu trình nếu được kê thuốc",
        detail:
          "Hết triệu chứng chưa chắc hết bệnh. Bỏ ngang là lý do phổ biến nhất khiến tình trạng quay lại.",
      },
    ],
    notes: [
      "ĐI KHÁM NGAY nếu kèm sốt, đau bụng dưới nhiều, ra máu bất thường, hoặc đang mang thai.",
      "Bài viết không chẩn đoán; nguyên nhân phải do bác sĩ xác định.",
      "Khí hư nhiều lên quanh ngày rụng trứng và trước kỳ kinh là bình thường, không cần lo.",
    ],
    faq: [
      {
        q: "Có nên dùng dung dịch vệ sinh hàng ngày không?",
        a: "Nhiều bác sĩ khuyên chỉ cần nước sạch. Dung dịch mạnh hoặc thụt rửa làm mất cân bằng tự nhiên và dễ gây viêm hơn.",
      },
      {
        q: "Dùng băng vệ sinh hàng ngày có tốt không?",
        a: "Dùng liên tục cả ngày làm vùng đó bí và ẩm. Nếu dùng thì nên thay thường xuyên và ưu tiên loại thoáng.",
      },
      {
        q: "Khí hư nhiều có phải bệnh không?",
        a: "Nhiều mà vẫn trong, không mùi, không ngứa thì thường là sinh lý. Kèm đổi màu, mùi hoặc ngứa mới là dấu hiệu cần khám.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "mui-vung-kin-su-that-va-quang-cao",
    title: "Mùi vùng kín: sự thật và quảng cáo",
    excerpt:
      "Cả một ngành hàng được xây trên nỗi xấu hổ của phụ nữ. Sự thật y tế thì đơn giản hơn nhiều.",
    readTimeMinutes: 3,
    quickAnswer:
      "Vùng kín khoẻ mạnh CÓ mùi nhẹ đặc trưng, thay đổi theo chu kỳ, sau vận động hay sau quan hệ — đó là bình thường và không cần khử. Chỉ cần đi khám khi mùi hôi tanh rõ rệt, kèm đổi màu khí hư, ngứa hoặc rát.",
    prepare: [
      "Bỏ suy nghĩ vùng kín phải thơm như quảng cáo",
      "Ghi lại nếu thấy mùi thay đổi rõ và kéo dài",
      "Đồ lót cotton thoáng, thay hằng ngày",
    ],
    steps: [
      {
        title: "Biết cái gì là bình thường",
        detail:
          "Mùi nhẹ, thay đổi theo ngày trong chu kỳ, nồng hơn sau vận động hoặc cuối ngày. Cơ thể khoẻ mạnh vẫn có mùi — đây không phải khiếm khuyết.",
      },
      {
        title: "Hiểu vì sao có mùi",
        detail:
          "Vùng này có hệ vi sinh riêng giữ độ cân bằng tự nhiên. Chính hệ đó bảo vệ bạn khỏi viêm nhiễm, và nó tạo ra mùi đặc trưng.",
      },
      {
        title: "TRÁNH sản phẩm khử mùi vùng kín",
        detail:
          "Xịt thơm, giấy ướt có hương, viên đặt thơm, thụt rửa đều có thể phá hệ cân bằng đó — dẫn tới viêm nhiễm và mùi khó chịu HƠN.",
      },
      {
        title: "Rửa đúng cách",
        detail:
          "Nước sạch, rửa bên ngoài, không thụt rửa sâu. Nếu dùng sản phẩm thì chọn loại dịu nhẹ không hương liệu.",
      },
      {
        title: "Ưu tiên thoáng và khô",
        detail:
          "Thay đồ ngay sau khi tập hoặc bơi, chọn đồ lót cotton, tránh mặc quần bó ẩm cả ngày. Đây là yếu tố ảnh hưởng nhiều hơn mọi sản phẩm.",
      },
      {
        title: "Chú ý tới yếu tố khác ảnh hưởng mùi",
        detail:
          "Đồ ăn, thuốc kháng sinh, thay đổi nội tiết, và cả việc để băng vệ sinh quá lâu. Một số nguyên nhân rất đơn giản.",
      },
      {
        title: "Đi khám khi mùi thay đổi rõ",
        detail:
          "Mùi tanh nồng, kèm khí hư bất thường hoặc ngứa là dấu hiệu cần bác sĩ xác định nguyên nhân — chứ không phải cần mua thêm sản phẩm.",
      },
    ],
    notes: [
      "TUYỆT ĐỐI không xông hơ vùng kín theo lời truyền miệng — nguy cơ bỏng và viêm nhiễm là có thật và đã có nhiều ca ghi nhận.",
      "Quên rút băng vệ sinh hoặc tampon có thể gây mùi rất nặng và nguy hiểm — nếu nghi ngờ, đi khám ngay.",
      "Bài viết không chẩn đoán; mọi bất thường kéo dài nên đi khám phụ khoa.",
    ],
    faq: [
      {
        q: "Bạn đời phàn nàn về mùi thì sao?",
        a: "Đi khám để loại trừ nguyên nhân bệnh lý. Nếu mọi thứ bình thường mà họ vẫn dùng chuyện này để hạ thấp bạn, đó là vấn đề trong cách cư xử của họ.",
      },
      {
        q: "Ăn gì để thơm hơn?",
        a: "Các mẹo lan truyền trên mạng phần lớn không có cơ sở. Uống đủ nước và ăn cân bằng là điều hợp lý, còn lại đừng tin quảng cáo.",
      },
      {
        q: "Sau quan hệ thấy mùi khác có sao không?",
        a: "Thay đổi tạm thời là bình thường. Mùi tanh nồng kéo dài nhiều ngày kèm khí hư bất thường thì nên đi khám.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "kho-han-nguyen-nhan-va-cach-xu-ly",
    title: "Khô hạn: nguyên nhân và cách xử lý",
    excerpt:
      "Không phải cứ khô là do hết yêu. Danh sách nguyên nhân rất đời thường và phần lớn xử lý được.",
    readTimeMinutes: 4,
    quickAnswer:
      "Nguyên nhân phổ biến gồm căng thẳng, thiếu thời gian chuẩn bị, thay đổi nội tiết (sau sinh, cho con bú, tiền mãn kinh), một số thuốc đang dùng, và cả việc dùng xà phòng mạnh ở vùng kín. Chất bôi trơn gốc nước là giải pháp đơn giản, an toàn với hầu hết người và dùng được cùng bao cao su.",
    prepare: [
      "Ghi lại: bắt đầu khi nào, có trùng với giai đoạn nào không",
      "Liệt kê thuốc đang dùng, kể cả thuốc tránh thai và thuốc dị ứng",
      "Sẵn sàng nói chuyện với bạn đời — đây là chuyện của hai người",
      "Chất bôi trơn gốc nước mua ở nhà thuốc hoặc siêu thị",
    ],
    steps: [
      {
        title: "Loại trừ nguyên nhân đời thường trước",
        detail:
          "Căng thẳng, mệt mỏi, vội vàng, thiếu ngủ là những lý do phổ biến nhất và cũng dễ điều chỉnh nhất. Đừng vội nghĩ tới bệnh.",
      },
      {
        title: "Xem lại sản phẩm vệ sinh đang dùng",
        detail:
          "Xà phòng mạnh, dung dịch có hương, thụt rửa đều làm khô và kích ứng vùng này. Ngưng dùng thử vài tuần và quan sát.",
      },
      {
        title: "Rà soát thuốc đang dùng",
        detail:
          "Một số thuốc dị ứng, thuốc chống trầm cảm, và một số biện pháp tránh thai nội tiết có thể gây khô. Nói với bác sĩ kê đơn, đừng tự bỏ thuốc.",
      },
      {
        title: "Dành nhiều thời gian hơn",
        detail:
          "Cơ thể cần thời gian để chuẩn bị, và điều này thay đổi theo tuổi và theo giai đoạn. Vội vàng là nguyên nhân rất phổ biến mà ít ai nói ra.",
      },
      {
        title: "Dùng chất bôi trơn gốc nước",
        detail:
          "Đơn giản, an toàn với hầu hết người, dùng được cùng bao cao su. Loại gốc dầu có thể làm hỏng bao cao su nên tránh.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Cần thêm thời gian và sự thoải mái là nhu cầu chính đáng, không phải điều gì đáng ngại hay đáng xấu hổ.",
      },
      {
        title: "Chú ý nếu đang ở giai đoạn nội tiết thay đổi",
        detail:
          "Sau sinh, đang cho con bú, tiền mãn kinh đều làm giảm độ ẩm tự nhiên. Đây là hiện tượng sinh lý và có hướng hỗ trợ y tế.",
      },
      {
        title: "Đi khám nếu kéo dài hoặc gây đau",
        detail:
          "Nhất là khi kèm đau rát, chảy máu, hoặc ảnh hưởng tới cuộc sống. Có những hướng xử lý y tế phù hợp cho từng nguyên nhân.",
      },
      {
        title: "Đừng tự dùng kem nội tiết",
        detail:
          "Kem hoặc thuốc nội tiết bôi tại chỗ phải có chỉ định của bác sĩ. Tự dùng có thể gây tác dụng không mong muốn.",
      },
    ],
    notes: [
      "Đau rát kèm chảy máu sau quan hệ: đi khám, đừng bỏ qua và đừng chỉ dùng thêm chất bôi trơn.",
      "Chất bôi trơn là sản phẩm bình thường như mọi sản phẩm khác — rất nhiều người dùng và không có gì đáng ngại.",
      "Bài viết không phải tư vấn y khoa; tình trạng kéo dài cần bác sĩ đánh giá.",
    ],
    faq: [
      {
        q: "Dùng chất bôi trơn có phải là bất thường không?",
        a: "Hoàn toàn không. Rất nhiều người dùng, kể cả khi không có vấn đề gì — nó chỉ là một sản phẩm hỗ trợ bình thường.",
      },
      {
        q: "Loại nào an toàn?",
        a: "Gốc nước là lựa chọn phổ biến và an toàn với hầu hết người, dùng được cùng bao cao su. Chọn loại không hương liệu nếu bạn dễ kích ứng.",
      },
      {
        q: "Dầu dừa hoặc dầu ăn có dùng được không?",
        a: "Không nên dùng cùng bao cao su vì làm hỏng chất liệu. Ngoài ra dầu có thể ảnh hưởng cân bằng tự nhiên — ưu tiên sản phẩm chuyên dụng.",
      },
      {
        q: "Sau sinh bao lâu thì hết khô?",
        a: "Thường cải thiện dần khi nội tiết ổn định lại, nhưng có thể kéo dài suốt thời gian cho con bú. Nói với bác sĩ nếu nó ảnh hưởng tới bạn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "khong-dat-cuc-khoai-chuyen-rat-pho-bien",
    title: "Không đạt cực khoái: chuyện rất phổ biến",
    excerpt:
      "Nhiều người tưởng chỉ mình mình như vậy nên im lặng nhiều năm. Thực tế con số cao hơn bạn nghĩ rất nhiều.",
    readTimeMinutes: 4,
    quickAnswer:
      "Đây là tình trạng rất phổ biến, thường liên quan tới căng thẳng, thiếu hiểu biết về cơ thể mình, thiếu giao tiếp, hoặc kỳ vọng lệch học từ phim ảnh. Bước hữu ích nhất thường không phải cố gắng hơn mà là tự tìm hiểu cơ thể mình và nói được với bạn đời điều mình muốn.",
    prepare: [
      "Bỏ tiêu chuẩn học từ phim ảnh — đó là sản phẩm dàn dựng có kịch bản",
      "Chấp nhận rằng đây là chuyện phổ biến, không phải khiếm khuyết của riêng bạn",
      "Sẵn sàng cho một cuộc trò chuyện thật với bạn đời",
      "Thời gian và không gian riêng tư không bị vội",
    ],
    steps: [
      {
        title: "Bỏ áp lực phải đạt được",
        detail:
          "Càng đặt mục tiêu càng căng thẳng, mà căng thẳng lại chính là rào cản lớn nhất. Nghe ngược đời nhưng đây là bước đầu tiên và quan trọng nhất.",
      },
      {
        title: "Bỏ luôn khái niệm phải cùng lúc",
        detail:
          "Kỳ vọng hai người phải đạt cùng lúc là thứ học từ phim, không phải chuẩn mực sinh học. Bỏ nó đi thì mọi thứ nhẹ hơn hẳn.",
      },
      {
        title: "Tự tìm hiểu cơ thể mình trước",
        detail:
          "Biết mình thích gì là điều kiện để nói cho người khác biết. Đây là bước nhiều người bỏ qua rồi mong người kia tự đoán.",
      },
      {
        title: "Nói cụ thể với bạn đời",
        detail:
          "Chỉ dẫn cụ thể hữu ích hơn nhiều so với mong người kia tự hiểu. Không ai đọc được suy nghĩ, kể cả người yêu bạn nhất.",
      },
      {
        title: "Dành nhiều thời gian hơn",
        detail:
          "Thời gian chuẩn bị cần thiết ở nữ thường dài hơn nam đáng kể. Vội vàng là nguyên nhân rất phổ biến mà ít ai nói ra.",
      },
      {
        title: "Xem lại yếu tố sức khỏe",
        detail:
          "Một số thuốc (nhất là nhóm chống trầm cảm), thay đổi nội tiết, và một số bệnh lý có ảnh hưởng. Nói với bác sĩ nếu bạn nghi ngờ.",
      },
      {
        title: "Chú ý tới mệt mỏi và căng thẳng",
        detail:
          "Thiếu ngủ, áp lực công việc, chăm con nhỏ đều ảnh hưởng rất mạnh. Đôi khi vấn đề nằm ở cuộc sống chứ không nằm ở phòng ngủ.",
      },
      {
        title: "Xử lý cảm giác tội lỗi nếu có",
        detail:
          "Nhiều người lớn lên với thông điệp rằng phụ nữ không nên chủ động hay không nên tận hưởng. Điều này ảnh hưởng thật và chuyên gia tâm lý có thể giúp.",
      },
      {
        title: "Cân nhắc gặp chuyên gia",
        detail:
          "Nếu có trải nghiệm cũ khó khăn, đau khi quan hệ, hoặc cảm giác tội lỗi dai dẳng thì chuyên gia tâm lý là hướng đi đúng.",
      },
    ],
    notes: [
      "Không có chuẩn nào về tần suất hay cách thức. Thoải mái mới là tiêu chí, không phải thành tích.",
      "Đau khi quan hệ là chuyện KHÁC và cần đi khám — không nên chịu đựng. Xem bài riêng về chủ đề này.",
      "Bài viết không phải tư vấn y khoa cho trường hợp cụ thể.",
    ],
    faq: [
      {
        q: "Có phải do bạn đời không đủ giỏi?",
        a: "Không nên quy về một phía. Đây thường là chuyện của giao tiếp giữa hai người và của việc mỗi bên hiểu cơ thể mình tới đâu.",
      },
      {
        q: "Chưa bao giờ đạt được thì có bất thường không?",
        a: "Không hiếm như bạn nghĩ. Nhưng nếu điều đó làm bạn phiền lòng thì đáng để nói với bác sĩ phụ khoa hoặc chuyên gia tâm lý.",
      },
      {
        q: "Nên giả vờ để bạn đời vui không?",
        a: "Giả vờ tạo ra thông tin sai và khiến vấn đề kéo dài thêm nhiều năm. Nói thật một lần khó hơn nhưng giải quyết được.",
      },
      {
        q: "Sau sinh thấy khác hẳn thì sao?",
        a: "Rất phổ biến do nội tiết, mệt mỏi và thay đổi cơ thể. Thường cải thiện dần — nói với bác sĩ nếu kéo dài hoặc kèm đau.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "nhiem-trung-tieu-sau-quan-he",
    title: "Nhiễm trùng tiểu sau quan hệ",
    excerpt:
      "Tiểu buốt, tiểu rắt sau vài lần gần gũi là chuyện rất nhiều phụ nữ gặp — và có mấy thói quen giúp giảm hẳn.",
    readTimeMinutes: 4,
    quickAnswer:
      "Cấu tạo cơ thể nữ khiến nhiễm trùng tiểu dễ xảy ra hơn, nhất là sau quan hệ. Thói quen giúp giảm nguy cơ: đi tiểu ngay sau khi quan hệ, uống đủ nước, vệ sinh nhẹ nhàng và lau từ trước ra sau. Đã có triệu chứng thì phải đi khám để dùng thuốc đúng, KHÔNG tự mua kháng sinh.",
    prepare: [
      "Chai nước để nhắc mình uống đủ trong ngày",
      "Ghi lại triệu chứng: tiểu buốt, tiểu rắt, đau bụng dưới, có sốt không, nước tiểu có màu lạ không",
      "Biết cơ sở y tế gần nhất",
      "Đơn thuốc cũ nếu từng bị — để bác sĩ tham khảo, KHÔNG phải để tự uống lại",
    ],
    steps: [
      {
        title: "Đi tiểu ngay sau khi quan hệ",
        detail:
          "Việc nhỏ nhưng được nhiều tài liệu y tế nhắc tới như biện pháp đơn giản hữu ích. Đừng để tới sáng hôm sau.",
      },
      {
        title: "Uống đủ nước trong ngày",
        detail:
          "Giúp đường tiểu được làm sạch thường xuyên hơn. Đây là biện pháp rẻ nhất và dễ nhất mà nhiều người vẫn bỏ qua.",
      },
      {
        title: "Lau từ trước ra sau",
        detail:
          "Thói quen nhỏ này giảm nguy cơ đưa vi khuẩn từ vùng hậu môn sang đường tiểu. Áp dụng mỗi lần đi vệ sinh chứ không chỉ sau quan hệ.",
      },
      {
        title: "Đừng nhịn tiểu",
        detail:
          "Nhịn lâu tạo điều kiện cho vi khuẩn sinh sôi. Nghe đơn giản nhưng rất nhiều người nhịn vì bận hoặc ngại nhà vệ sinh công cộng.",
      },
      {
        title: "Vệ sinh nhẹ nhàng, không thụt rửa",
        detail:
          "Thụt rửa và dung dịch mạnh phá cân bằng tự nhiên, làm tăng nguy cơ. Nước sạch là đủ.",
      },
      {
        title: "Nhận biết triệu chứng sớm",
        detail:
          "Tiểu buốt, tiểu rắt, cảm giác buồn tiểu liên tục nhưng ra ít, đau tức bụng dưới, nước tiểu đục hoặc có mùi lạ.",
      },
      {
        title: "Đi khám sớm khi có triệu chứng",
        detail:
          "Đừng chờ tự khỏi. Nhiễm trùng tiểu lan lên thận là biến chứng nặng và hoàn toàn có thể tránh được nếu điều trị sớm.",
      },
      {
        title: "KHÔNG tự mua kháng sinh",
        detail:
          "Dùng sai loại hoặc thiếu liệu trình khiến bệnh dai dẳng và gây kháng thuốc. Bác sĩ có thể cần xét nghiệm nước tiểu để chọn đúng thuốc.",
      },
      {
        title: "Uống đủ liệu trình dù đã đỡ",
        detail:
          "Triệu chứng thường giảm sau vài liều đầu nhưng vi khuẩn chưa hết. Bỏ ngang là nguyên nhân tái phát phổ biến nhất.",
      },
      {
        title: "Nói với bác sĩ nếu tái phát nhiều lần",
        detail:
          "Tái phát thường xuyên có thể cần đánh giá sâu hơn hoặc có biện pháp dự phòng riêng. Đừng cứ mỗi lần lại tự xử lý.",
      },
    ],
    notes: [
      "ĐI KHÁM NGAY nếu kèm sốt, đau lưng vùng thận, nôn, hoặc tiểu ra máu — đây có thể là dấu hiệu nhiễm trùng đã lan lên thận.",
      "Đang mang thai mà có triệu chứng nhiễm trùng tiểu: đi khám ngay, không tự xử lý.",
      "Bài viết không chẩn đoán và không nêu tên thuốc.",
    ],
    faq: [
      {
        q: "Có phải do bạn đời không sạch sẽ?",
        a: "Không hẳn. Đây chủ yếu liên quan tới cấu tạo cơ thể và vi khuẩn vốn có của chính bạn. Nhưng vệ sinh của cả hai vẫn quan trọng.",
      },
      {
        q: "Uống nước ép nam việt quất có tác dụng không?",
        a: "Bằng chứng còn khác nhau và nó không thay thế được điều trị. Uống đủ nước nói chung thì chắc chắn có ích.",
      },
      {
        q: "Bao lâu thì khỏi?",
        a: "Thường cải thiện nhanh sau khi dùng đúng thuốc, nhưng phải uống đủ liệu trình bác sĩ kê. Không đỡ sau vài ngày thì quay lại khám.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "que-thu-thai-dung-dung-luc-doc-dung-ket-qua",
    title: "Que thử thai: dùng đúng lúc, đọc đúng kết quả",
    excerpt:
      "Thử quá sớm hoặc đọc quá muộn đều cho kết quả sai. Vài phút tìm hiểu tránh được cả tuần hoang mang.",
    readTimeMinutes: 3,
    quickAnswer:
      "Thử vào buổi sáng sớm với nước tiểu đầu tiên trong ngày, và thử SAU khi đã trễ kinh — thử quá sớm rất dễ ra âm tính giả. Đọc kết quả trong khung thời gian nhà sản xuất ghi trên bao bì; vệt mờ xuất hiện sau nhiều giờ KHÔNG được tính.",
    prepare: [
      "Que thử mua ở nhà thuốc, kiểm tra hạn dùng trên bao bì",
      "Nhớ ngày đầu kỳ kinh gần nhất",
      "Đọc kỹ hướng dẫn TRƯỚC khi mở que",
      "Đồng hồ hoặc hẹn giờ điện thoại để canh đúng thời gian đọc",
    ],
    steps: [
      {
        title: "Chọn thời điểm đúng",
        detail:
          "Sau khi đã trễ kinh, và dùng nước tiểu đầu tiên buổi sáng — lúc đó nồng độ hormone đậm đặc nhất nên kết quả đáng tin nhất.",
      },
      {
        title: "Kiểm tra hạn dùng của que",
        detail:
          "Que hết hạn cho kết quả không đáng tin. Kiểm tra ngay tại quầy trước khi trả tiền.",
      },
      {
        title: "Đọc hướng dẫn trước khi mở",
        detail:
          "Thời gian nhúng, cách hứng, thời gian chờ khác nhau giữa các loại. Đọc bao bì thay vì làm theo trí nhớ hoặc theo lời kể của người khác.",
      },
      {
        title: "Đừng uống quá nhiều nước trước khi thử",
        detail:
          "Nước tiểu loãng làm giảm nồng độ hormone và có thể ra âm tính giả. Đây là lỗi khá phổ biến.",
      },
      {
        title: "Làm theo đúng thời gian nhúng",
        detail:
          "Nhúng đủ giây theo hướng dẫn, không ít hơn cũng không lâu hơn. Đặt que nằm ngang trên mặt phẳng khô trong lúc chờ.",
      },
      {
        title: "Canh giờ và đọc đúng khung thời gian",
        detail:
          "Hẹn giờ điện thoại. Đọc quá muộn có thể thấy vệt bay hơi và tưởng nhầm là dương tính — đây là nguyên nhân gây hoang mang phổ biến nhất.",
      },
      {
        title: "Đọc cả vạch chứng",
        detail:
          "Nếu vạch chứng không hiện thì que hỏng, kết quả vô nghĩa dù có thấy gì đi nữa. Phải thử lại bằng que khác.",
      },
      {
        title: "Âm tính nhưng vẫn trễ kinh thì thử lại",
        detail:
          "Thử lại sau vài ngày tới một tuần, hoặc đi khám để xét nghiệm máu — cách này chính xác hơn và phát hiện sớm hơn.",
      },
      {
        title: "Dương tính thì đi khám xác nhận",
        detail:
          "Cần cơ sở y tế xác nhận và kiểm tra vị trí thai. Đây là bước quan trọng vì có tình huống cần xử trí sớm.",
      },
    ],
    notes: [
      "ĐI CẤP CỨU NGAY: đau bụng dữ dội một bên, ra máu bất thường kèm chóng mặt — đây có thể là thai ngoài tử cung.",
      "Bài viết mô tả cách dùng chung; luôn ưu tiên hướng dẫn của nhà sản xuất trên bao bì.",
      "Một số thuốc và tình trạng sức khỏe có thể ảnh hưởng kết quả — nói với bác sĩ nếu kết quả không khớp với triệu chứng của bạn.",
    ],
    faq: [
      {
        q: "Vạch mờ có tính là dương tính không?",
        a: "Vạch mờ xuất hiện trong khung thời gian quy định thường được tính, nhưng nên thử lại sau vài ngày và đi khám để xác nhận.",
      },
      {
        q: "Thử sớm nhất là khi nào?",
        a: "Một số que ghi có thể thử trước ngày trễ kinh, nhưng độ chính xác thấp hơn. Chờ tới khi trễ kinh rồi thử thì đáng tin hơn nhiều.",
      },
      {
        q: "Thử hai que ra hai kết quả khác nhau?",
        a: "Có thể do thời điểm, độ loãng nước tiểu, hoặc que lỗi. Thử lại sau vài ngày vào buổi sáng, hoặc đi xét nghiệm máu cho chắc.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "cham-kinh-nguyen-nhan-ngoai-mang-thai",
    title: "Chậm kinh: những nguyên nhân ngoài mang thai",
    excerpt:
      "Trễ vài ngày là hoảng — nhưng danh sách nguyên nhân dài hơn nhiều so với điều bạn đang nghĩ tới.",
    readTimeMinutes: 4,
    quickAnswer:
      "Ngoài mang thai, các nguyên nhân phổ biến gồm căng thẳng, thay đổi cân nặng nhanh, tập luyện cường độ cao, mất ngủ kéo dài, bệnh tuyến giáp, hội chứng buồng trứng đa nang, và tác dụng của một số thuốc. Trễ liên tục nhiều chu kỳ thì nên đi khám.",
    prepare: [
      "Que thử thai để loại trừ khả năng đầu tiên",
      "Ghi lại vài chu kỳ gần nhất: ngày bắt đầu, độ dài",
      "Nhìn lại: có giảm cân nhanh, tập nặng, hay giai đoạn căng thẳng nào không",
      "Danh sách thuốc và biện pháp tránh thai đang dùng",
    ],
    steps: [
      {
        title: "Loại trừ mang thai trước",
        detail:
          "Thử thai đúng cách để yên tâm rồi mới tính tiếp các khả năng khác. Cứ lo mà không thử thì càng căng thẳng, mà căng thẳng lại càng làm trễ thêm.",
      },
      {
        title: "Nhớ lại giai đoạn 2–3 tháng trước",
        detail:
          "Chu kỳ phản ánh những gì xảy ra trước đó vài tuần tới vài tháng. Đợt căng thẳng hay ốm hồi tháng trước có thể là nguyên nhân của tháng này.",
      },
      {
        title: "Rà soát yếu tố lối sống",
        detail:
          "Căng thẳng lớn, giảm cân nhanh, tăng cân nhanh, tập luyện quá sức, thiếu ngủ, đi công tác lệch múi giờ — tất cả đều có thể làm chu kỳ xáo trộn.",
      },
      {
        title: "Xem lại thuốc và biện pháp tránh thai",
        detail:
          "Một số thuốc và nhiều biện pháp tránh thai nội tiết ảnh hưởng tới chu kỳ, có loại làm mất kinh hoàn toàn — đó có thể là tác dụng bình thường của thuốc.",
      },
      {
        title: "Chú ý các dấu hiệu đi kèm",
        detail:
          "Rậm lông, mụn nhiều, tăng cân khó kiểm soát, rụng tóc, mệt mỏi bất thường, tim đập nhanh — những dấu hiệu này gợi ý nguyên nhân nội tiết cần khám.",
      },
      {
        title: "Theo dõi thêm một chu kỳ nếu chỉ trễ ít",
        detail:
          "Trễ vài ngày và thỉnh thoảng xảy ra thì thường không đáng ngại. Ghi lại và quan sát chu kỳ tiếp theo.",
      },
      {
        title: "Đi khám nếu trễ nhiều chu kỳ",
        detail:
          "Mất kinh vài tháng liên tiếp không rõ lý do thì nên khám nội tiết và phụ khoa. Bác sĩ có thể cho xét nghiệm nội tiết, tuyến giáp và siêu âm.",
      },
      {
        title: "Mang theo dữ liệu ghi chép",
        detail:
          "Ghi chép vài tháng là thứ có giá trị nhất bạn mang tới phòng khám, hơn hẳn việc cố nhớ tại chỗ.",
      },
    ],
    notes: [
      "Chu kỳ không đều kéo dài có thể ảnh hưởng tới khả năng có con sau này — đi khám sớm có lợi hơn là chờ đợi.",
      "Tập luyện quá sức kết hợp ăn kiêng khắt khe là nguyên nhân mất kinh khá phổ biến ở người trẻ, và ảnh hưởng cả tới xương.",
      "Bài viết không chẩn đoán; nguyên nhân phải do bác sĩ xác định.",
    ],
    faq: [
      {
        q: "Trễ bao nhiêu ngày thì cần lo?",
        a: "Trễ vài ngày và thỉnh thoảng xảy ra thì thường không đáng ngại. Trễ liên tục nhiều chu kỳ hoặc mất kinh vài tháng thì nên đi khám.",
      },
      {
        q: "Căng thẳng có thể làm mất kinh hẳn không?",
        a: "Có. Căng thẳng kéo dài ảnh hưởng tới trục nội tiết điều hoà chu kỳ và có thể làm mất kinh nhiều tháng.",
      },
      {
        q: "Đang dùng thuốc tránh thai mà không thấy kinh?",
        a: "Với một số biện pháp thì đây là tác dụng bình thường. Nhưng hãy hỏi bác sĩ hoặc dược sĩ để chắc chắn, và loại trừ mang thai nếu bạn có quên liều.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tay-long-vung-kin-an-toan",
    title: "Tẩy lông vùng kín an toàn",
    excerpt:
      "Không có quy định nào bắt bạn phải làm. Nhưng nếu làm thì có mấy điều nên biết để tránh viêm và lông mọc ngược.",
    readTimeMinutes: 3,
    quickAnswer:
      "Đây hoàn toàn là lựa chọn cá nhân, không liên quan tới vệ sinh hay sức khỏe. Nếu làm, hãy chọn phương pháp phù hợp với da bạn, luôn dùng dụng cụ sạch, làm mềm da trước, và đừng làm khi da đang viêm hay tổn thương.",
    prepare: [
      "Dụng cụ sạch, dao cạo RIÊNG chỉ dùng cho vùng này",
      "Kem hoặc gel làm mềm — không cạo khô, không dùng xà phòng khô",
      "Thử sản phẩm mới ở vùng da nhỏ trước 24 giờ",
      "Gương và ánh sáng đủ",
    ],
    steps: [
      {
        title: "Nhớ rằng đây là lựa chọn, không phải yêu cầu",
        detail:
          "Lông vùng kín có vai trò bảo vệ tự nhiên, giảm ma sát và giữ ẩm. Không cạo KHÔNG có nghĩa là kém vệ sinh.",
      },
      {
        title: "Chọn phương pháp phù hợp",
        detail:
          "Cạo nhanh và rẻ nhưng mọc lại nhanh. Wax lâu hơn nhưng đau và dễ kích ứng. Kem tẩy có nguy cơ dị ứng cao ở vùng da nhạy cảm này.",
      },
      {
        title: "Làm mềm da trước",
        detail:
          "Tắm nước ấm vài phút giúp da và lông mềm, giảm xước khi cạo. Đừng bao giờ cạo trên da khô.",
      },
      {
        title: "Tỉa ngắn trước nếu lông dài",
        detail:
          "Dùng kéo nhỏ tỉa bớt trước khi cạo. Cạo thẳng lông dài làm dao bị kẹt và dễ xước.",
      },
      {
        title: "Cạo xuôi chiều lông mọc",
        detail:
          "Cạo ngược cho sát hơn nhưng dễ gây lông mọc ngược và viêm nang lông. Kéo căng da nhẹ và cạo từng đoạn ngắn.",
      },
      {
        title: "Rửa dao thường xuyên trong lúc làm",
        detail:
          "Dao bị kẹt lông thì kéo chứ không cắt, gây xước. Rửa sau mỗi vài đường cạo.",
      },
      {
        title: "Dưỡng ẩm nhẹ sau đó",
        detail:
          "Chọn loại không hương liệu, không cồn. Tránh mặc đồ bó ngay sau khi làm để da không bị cọ xát.",
      },
      {
        title: "Thay lưỡi dao đều đặn",
        detail:
          "Lưỡi cùn là nguyên nhân chính gây xước và viêm. Cảm thấy rát khi cạo là lúc nên thay.",
      },
      {
        title: "Đi tiệm thì kiểm tra vệ sinh",
        detail:
          "Dụng cụ dùng một lần, sáp không dùng lại cho nhiều khách (không nhúng lại que vào hũ sáp). Đây là nơi dễ lây nhiễm nếu làm ẩu.",
      },
      {
        title: "Xử lý lông mọc ngược đúng cách",
        detail:
          "Chườm ấm và tẩy tế bào chết nhẹ nhàng. ĐỪNG dùng nhíp khều hay nặn — dễ gây nhiễm trùng và sẹo.",
      },
    ],
    notes: [
      "Đỏ, mưng mủ, đau tăng dần sau khi làm: đi khám, có thể đã nhiễm trùng.",
      "Đang có vết thương, viêm da, mụn nhọt hoặc đang điều trị da ở vùng đó thì đừng làm.",
      "Không dùng chung dao cạo với bất kỳ ai — nguy cơ lây bệnh qua đường máu là có thật.",
    ],
    faq: [
      {
        q: "Cạo có làm lông mọc lại dày hơn không?",
        a: "Không. Lông mọc lại có đầu cắt ngang nên cảm giác cứng hơn, chứ số lượng và độ dày không đổi.",
      },
      {
        q: "Wax hay cạo tốt hơn?",
        a: "Tuỳ da và tuỳ mức chịu đau của bạn. Wax lâu mọc lại hơn nhưng nguy cơ kích ứng và lông mọc ngược cũng cao hơn.",
      },
      {
        q: "Triệt lông vĩnh viễn có an toàn không?",
        a: "Nên làm ở cơ sở y tế hoặc thẩm mỹ có giấy phép, với người có chuyên môn. Hỏi kỹ về rủi ro với vùng da nhạy cảm này.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ham-muon-thay-doi-theo-chu-ky",
    title: "Ham muốn thay đổi theo chu kỳ",
    excerpt:
      "Có tuần thấy khác hẳn tuần trước mà không hiểu vì sao — thường là cơ thể đang làm đúng việc của nó.",
    readTimeMinutes: 3,
    quickAnswer:
      "Nội tiết thay đổi suốt chu kỳ và kéo theo thay đổi về ham muốn, năng lượng và tâm trạng. Nhiều người thấy ham muốn tăng vào khoảng giữa chu kỳ. Đây là biến động sinh lý bình thường, không phải dấu hiệu bạn có vấn đề hay hết yêu.",
    prepare: [
      "Ứng dụng theo dõi chu kỳ hoặc ghi chú đơn giản trong điện thoại",
      "Kiên nhẫn theo dõi vài tháng mới thấy quy luật",
      "Sẵn sàng chia sẻ với bạn đời",
    ],
    steps: [
      {
        title: "Ghi lại cùng với chu kỳ",
        detail:
          "Mỗi ngày một chữ: cao, bình thường, thấp. Sau vài tháng bạn sẽ thấy quy luật riêng của mình — mỗi người một kiểu.",
      },
      {
        title: "Ghi thêm năng lượng và tâm trạng",
        detail:
          "Ba thứ này thường đi cùng nhau. Nhìn cả ba giúp bạn hiểu bức tranh đầy đủ hơn là chỉ nhìn một.",
      },
      {
        title: "Nhận ra yếu tố ngoài nội tiết",
        detail:
          "Thiếu ngủ, căng thẳng, mâu thuẫn trong quan hệ, khối lượng công việc ảnh hưởng mạnh không kém nội tiết. Ghi cả những thứ này.",
      },
      {
        title: "Chia sẻ quy luật với bạn đời",
        detail:
          "Biết trước giúp cả hai bớt hiểu lầm và bớt tự ái vào những ngày thấp. Đây là thông tin hữu ích chứ không phải lời từ chối.",
      },
      {
        title: "Đừng ép mình theo lịch",
        detail:
          "Biết quy luật không có nghĩa là phải tuân theo nó. Ngày cao mà bạn mệt thì vẫn có quyền nói không.",
      },
      {
        title: "Chú ý ảnh hưởng của biện pháp tránh thai",
        detail:
          "Biện pháp nội tiết có thể làm phẳng đường biến động này hoặc thay đổi ham muốn. Nói với bác sĩ nếu bạn nhận thấy khác biệt rõ.",
      },
      {
        title: "Đi khám nếu thay đổi đột ngột và kéo dài",
        detail:
          "Mất ham muốn hẳn trong nhiều tháng, nhất là khi kèm mệt mỏi, rối loạn chu kỳ hoặc thay đổi tâm trạng rõ, thì nên kiểm tra nội tiết.",
      },
    ],
    notes: [
      "Không có mức ham muốn nào là chuẩn. So sánh với người khác hoặc với phim ảnh không có ý nghĩa gì.",
      "Chênh lệch ham muốn giữa hai người là chuyện rất phổ biến — cái cần là nói chuyện được với nhau chứ không phải ai đó phải thay đổi.",
      "Bài viết không phải tư vấn y khoa.",
    ],
    faq: [
      {
        q: "Ham muốn thấp hơn bạn đời có phải vấn đề không?",
        a: "Chênh lệch là chuyện rất phổ biến. Vấn đề chỉ nảy sinh khi hai người không nói được với nhau về điều đó.",
      },
      {
        q: "Sau sinh mất ham muốn có bình thường không?",
        a: "Rất phổ biến do nội tiết, mệt mỏi và thay đổi vai trò. Thường cải thiện dần — nói với bác sĩ nếu kéo dài hoặc kèm buồn bã.",
      },
      {
        q: "Có cách nào tăng ham muốn không?",
        a: "Ngủ đủ, giảm căng thẳng, cải thiện mối quan hệ là những thứ có tác động thật. Cẩn thận với sản phẩm quảng cáo tăng ham muốn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "noi-tiet-va-tam-trang-truoc-ky-kinh",
    title: "Nội tiết và tâm trạng trước kỳ kinh",
    excerpt:
      "Không phải bạn khó tính. Nhưng cũng có ranh giới giữa khó chịu bình thường và tình trạng cần đi khám.",
    readTimeMinutes: 4,
    quickAnswer:
      "Thay đổi tâm trạng, dễ cáu, mệt và thèm ăn trước kỳ kinh là chuyện phổ biến do nội tiết dao động. Nhưng nếu tâm trạng xuống tới mức ảnh hưởng công việc và các mối quan hệ MỖI THÁNG, đó có thể là tình trạng nặng hơn cần bác sĩ đánh giá.",
    prepare: [
      "Ghi lại tâm trạng theo ngày trong 2–3 chu kỳ",
      "Ghi cả tác động: có phải nghỉ làm, có cãi nhau, có mất ngủ không",
      "Mang ghi chép này đi khám nếu cần",
      "Nói trước với người thân về giai đoạn này nếu bạn thấy tiện",
    ],
    steps: [
      {
        title: "Theo dõi để thấy quy luật",
        detail:
          "Ghi mỗi ngày một dòng ngắn về tâm trạng. Nhìn thấy quy luật giúp bạn bớt nghĩ là do tính cách mình có vấn đề.",
      },
      {
        title: "Đánh dấu mức độ ảnh hưởng",
        detail:
          "Khó chịu nhưng vẫn làm việc bình thường, hay tới mức phải nghỉ và cãi nhau với người thân. Đây là điều bác sĩ cần biết nhất.",
      },
      {
        title: "Chuẩn bị trước cho những ngày khó",
        detail:
          "Nhìn lịch và tránh xếp việc căng thẳng vào những ngày đó nếu được. Ngủ sớm hơn, giảm cam kết xã hội.",
      },
      {
        title: "Báo trước cho người thân",
        detail:
          "Một câu đơn giản giúp giảm hẳn xung đột: mấy hôm nay em hơi nhạy cảm, không phải do anh đâu.",
      },
      {
        title: "Chăm phần cơ bản",
        detail:
          "Ngủ đủ, vận động nhẹ, ăn đều đặn, hạn chế rượu và cà phê trong những ngày này. Nghe đơn giản nhưng tác động rõ với nhiều người.",
      },
      {
        title: "Đừng tự trách mình",
        detail:
          "Đây là hiện tượng sinh lý đã được y học ghi nhận, không phải bạn yếu đuối hay khó tính. Tự trách chỉ làm tâm trạng tệ thêm.",
      },
      {
        title: "Đi khám nếu nặng",
        detail:
          "Buồn bã sâu, lo âu nhiều, dễ bùng nổ tới mức ảnh hưởng cuộc sống mỗi tháng là lý do chính đáng để gặp bác sĩ. Có tình trạng nặng hơn cần điều trị.",
      },
      {
        title: "Mang dữ liệu theo dõi khi đi khám",
        detail:
          "Ghi chép 2–3 chu kỳ giúp bác sĩ phân biệt giữa dao động nội tiết và các vấn đề tâm lý khác.",
      },
    ],
    notes: [
      "Có ý nghĩ làm hại bản thân: tìm hỗ trợ NGAY, nói với người thân và tới cơ sở y tế. Đây là dấu hiệu nghiêm trọng, không phải chuyện của kỳ kinh.",
      "Nếu tâm trạng xuống kéo dài cả tháng chứ không chỉ trước kỳ kinh, hãy nghĩ tới trầm cảm và tìm hỗ trợ chuyên môn.",
      "Bài viết không chẩn đoán và không nêu tên thuốc.",
    ],
    faq: [
      {
        q: "Nói với người khác họ có cho là mình viện cớ không?",
        a: "Đây là hiện tượng sinh lý đã được y học ghi nhận. Bạn không cần chứng minh gì cả, và người thật sự quan tâm sẽ hiểu.",
      },
      {
        q: "Có thuốc nào giúp không?",
        a: "Có nhiều hướng hỗ trợ tuỳ mức độ, từ điều chỉnh lối sống tới can thiệp y tế. Phải qua bác sĩ đánh giá chứ không tự mua.",
      },
      {
        q: "Vì sao lại thèm ăn ngọt trước kỳ kinh?",
        a: "Liên quan tới thay đổi nội tiết. Ăn đều đặn trong ngày và có sẵn đồ ăn nhẹ lành mạnh giúp bạn đỡ ăn vô độ.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "sau-sinh-chuyen-gan-gui-quay-lai-luc-nao",
    title: "Sau sinh: chuyện gần gũi quay lại lúc nào",
    excerpt:
      "Không có mốc chung cho mọi người, và cảm giác chưa sẵn sàng kéo dài vài tháng là chuyện rất bình thường.",
    readTimeMinutes: 4,
    quickAnswer:
      "Thời điểm an toàn về mặt y tế do bác sĩ xác định ở lần tái khám sau sinh. Nhưng sẵn sàng về mặt cảm xúc là chuyện khác và thường lâu hơn. Cả hai yếu tố đều quan trọng, và không ai có quyền thúc ép bạn — kể cả bạn đời.",
    prepare: [
      "Đi tái khám sau sinh theo đúng lịch hẹn",
      "Chuẩn bị nói chuyện thật với bạn đời",
      "Chất bôi trơn gốc nước — khô là chuyện rất phổ biến giai đoạn này",
      "Biết rằng cần thêm thời gian là hoàn toàn bình thường",
    ],
    steps: [
      {
        title: "Đi tái khám sau sinh",
        detail:
          "Bác sĩ đánh giá vết thương, tình trạng hồi phục và tư vấn cả biện pháp tránh thai phù hợp giai đoạn này. Đừng bỏ lần khám này.",
      },
      {
        title: "ĐỪNG bỏ qua chuyện tránh thai",
        detail:
          "Cho con bú KHÔNG phải biện pháp tránh thai đáng tin cậy. Rất nhiều trường hợp mang thai lại sớm ngoài ý muốn vì hiểu nhầm điều này.",
      },
      {
        title: "Chuẩn bị cho việc khô và đau",
        detail:
          "Thay đổi nội tiết sau sinh và khi cho con bú thường gây khô. Chất bôi trơn gốc nước giúp ích, và đau kéo dài thì phải nói với bác sĩ.",
      },
      {
        title: "Bắt đầu từ những gì bạn thấy an toàn",
        detail:
          "Không nhất thiết phải quay lại như cũ ngay. Ôm, nằm cạnh nhau, chạm nhẹ — giữ kết nối theo nhịp của bạn.",
      },
      {
        title: "Nói thật với bạn đời",
        detail:
          "Mệt, thiếu ngủ, thay đổi cảm nhận về cơ thể đều là lý do chính đáng. Người đồng hành thật sự sẽ chờ được và sẽ hiểu.",
      },
      {
        title: "Chia sẻ việc chăm con",
        detail:
          "Nghe không liên quan nhưng lại rất liên quan: người kiệt sức vì thức đêm một mình thì khó có tâm trạng cho bất cứ điều gì.",
      },
      {
        title: "Chú ý tới tâm trạng của mình",
        detail:
          "Buồn bã kéo dài, khóc nhiều, mất hứng thú với mọi thứ, khó gắn bó với con — đây là dấu hiệu trầm cảm sau sinh, cần bác sĩ đánh giá chứ không phải chuyện tự vượt qua.",
      },
      {
        title: "Nói với bác sĩ nếu đau kéo dài",
        detail:
          "Đau ở vết khâu, đau sâu, hoặc chảy máu sau quan hệ đều cần được khám. Đừng chịu đựng vì nghĩ đó là chuyện đương nhiên sau sinh.",
      },
      {
        title: "Cho mình thời gian, không so sánh",
        detail:
          "Người khác quay lại sau sáu tuần không có nghĩa bạn phải vậy. Cơ thể và hoàn cảnh mỗi người mỗi khác.",
      },
    ],
    notes: [
      "ĐI KHÁM NGAY: ra máu bất thường, sốt, đau tăng dần, dịch có mùi hôi sau sinh.",
      "Bị ép buộc khi bạn chưa sẵn sàng là điều KHÔNG chấp nhận được, kể cả trong hôn nhân.",
      "Trầm cảm sau sinh là bệnh có thật và điều trị được — nói với bác sĩ thay vì cố gồng.",
      "Bài viết không phải tư vấn y khoa cho trường hợp cụ thể.",
    ],
    faq: [
      {
        q: "Mấy tháng chưa muốn thì có bất thường không?",
        a: "Không. Rất nhiều người cần vài tháng hoặc lâu hơn. Điều quan trọng là hai người nói được với nhau về việc đó.",
      },
      {
        q: "Sinh mổ có khác không?",
        a: "Thời gian hồi phục và những điều cần lưu ý có khác. Hỏi bác sĩ ở lần tái khám để có hướng dẫn đúng cho trường hợp của bạn.",
      },
      {
        q: "Bạn đời không hiểu và giận thì sao?",
        a: "Thử nói cụ thể về cảm giác cơ thể và mức độ mệt của bạn. Nếu vẫn bị ép, đó là vấn đề nghiêm trọng của mối quan hệ chứ không phải của bạn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tien-man-kinh-som-dau-hieu",
    title: "Tiền mãn kinh sớm: dấu hiệu nên biết",
    excerpt:
      "Nhiều người nghĩ chuyện này chỉ tới ở tuổi năm mươi. Thực tế có thể bắt đầu sớm hơn nhiều và rất dễ bị nhầm với stress.",
    readTimeMinutes: 4,
    quickAnswer:
      "Dấu hiệu thường gặp: chu kỳ thay đổi bất thường, bốc hoả, đổ mồ hôi đêm, khó ngủ, khô, thay đổi tâm trạng và giảm ham muốn. Xuất hiện sớm hơn tuổi thông thường thì nên đi khám để loại trừ các nguyên nhân khác và được tư vấn hướng xử lý.",
    prepare: [
      "Ghi lại chu kỳ và triệu chứng trong vài tháng",
      "Tiền sử gia đình: mẹ hoặc chị em mãn kinh ở tuổi nào",
      "Danh sách thuốc đang dùng",
      "Ghi cả tác động lên giấc ngủ và công việc",
    ],
    steps: [
      {
        title: "Theo dõi chu kỳ và triệu chứng",
        detail:
          "Chu kỳ ngắn lại, dài ra hoặc thất thường là dấu hiệu sớm thường gặp nhất, và cũng dễ nhận ra nhất nếu bạn có ghi chép.",
      },
      {
        title: "Ghi lại các triệu chứng khác",
        detail:
          "Bốc hoả, đổ mồ hôi đêm, khó ngủ, tim đập nhanh, khô, thay đổi tâm trạng, giảm tập trung. Ghi tần suất chứ không chỉ ghi có hay không.",
      },
      {
        title: "ĐỪNG mặc định là do stress",
        detail:
          "Triệu chứng rất giống nhau, đó là lý do nhiều người bỏ qua nhiều năm. Đi khám để phân biệt thay vì tự chẩn đoán.",
      },
      {
        title: "Hỏi tiền sử gia đình",
        detail:
          "Tuổi mãn kinh có yếu tố di truyền. Hỏi mẹ hoặc chị em gái là thông tin hữu ích mang tới phòng khám.",
      },
      {
        title: "Khám và làm xét nghiệm theo chỉ định",
        detail:
          "Bác sĩ có thể cho xét nghiệm nội tiết và tuyến giáp để phân biệt các nguyên nhân — nhiều triệu chứng trùng với bệnh tuyến giáp.",
      },
      {
        title: "Hỏi về các hướng hỗ trợ",
        detail:
          "Có nhiều cách hỗ trợ triệu chứng, từ điều chỉnh lối sống tới các phương án y tế. Bác sĩ sẽ tư vấn theo trường hợp và tiền sử của bạn.",
      },
      {
        title: "Chăm xương và tim mạch từ sớm",
        detail:
          "Đây là giai đoạn nên chú ý vận động có chịu lực, dinh dưỡng đủ canxi và vitamin D, và khám sức khỏe định kỳ.",
      },
      {
        title: "Chú ý tới giấc ngủ và tâm trạng",
        detail:
          "Mất ngủ và thay đổi tâm trạng ảnh hưởng mạnh tới chất lượng sống. Nói rõ với bác sĩ vì đây là phần hỗ trợ được.",
      },
      {
        title: "Nếu còn muốn có con, hỏi sớm",
        detail:
          "Suy buồng trứng sớm ảnh hưởng tới khả năng sinh sản. Nếu bạn còn kế hoạch có con thì đây là lý do đi khám càng sớm càng tốt.",
      },
    ],
    notes: [
      "Ra máu bất thường giữa kỳ hoặc sau khi đã mãn kinh: đi khám NGAY, không chờ.",
      "KHÔNG tự dùng liệu pháp nội tiết hay thực phẩm chức năng nội tiết — phải có chỉ định và theo dõi của bác sĩ.",
      "Bài viết không chẩn đoán; mọi triệu chứng cần bác sĩ đánh giá trực tiếp.",
    ],
    faq: [
      {
        q: "Còn trẻ mà có triệu chứng thì sao?",
        a: "Nên đi khám sớm. Suy buồng trứng sớm là tình trạng có thật, và phát hiện sớm giúp có hướng xử lý phù hợp, nhất là nếu bạn còn muốn có con.",
      },
      {
        q: "Có phải cứ tiền mãn kinh là phải dùng nội tiết không?",
        a: "Không. Nhiều người chỉ cần điều chỉnh lối sống. Việc dùng hay không phải do bác sĩ cân nhắc dựa trên triệu chứng và tiền sử của bạn.",
      },
      {
        q: "Giai đoạn này kéo dài bao lâu?",
        a: "Rất khác nhau ở mỗi người, có thể vài năm. Hỏi bác sĩ để biết những gì có thể mong đợi trong trường hợp của bạn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "noi-voi-ban-doi-dieu-ban-muon",
    title: "Nói với bạn đời điều bạn muốn",
    excerpt:
      "Không ai đọc được suy nghĩ của ai. Nhưng nói ra thế nào để không thành lời chê trách thì cần chút kỹ thuật.",
    readTimeMinutes: 4,
    quickAnswer:
      "Nói ngoài lúc thân mật, dùng câu bắt đầu bằng mình thay vì bạn, nói cụ thể điều bạn THÍCH thay vì chỉ nói điều bạn không thích, và hỏi lại phía bên kia. Mở đầu bằng một điều tích cực giúp cuộc trò chuyện không biến thành buổi phê bình.",
    prepare: [
      "Biết rõ điều bạn muốn — nếu chưa rõ thì tự tìm hiểu cơ thể mình trước",
      "Chọn lúc cả hai thoải mái, không phải lúc vừa xong hoặc đang giận",
      "Chuẩn bị tinh thần nghe điều họ muốn nói",
      "Một hai ví dụ cụ thể để nói cho rõ",
    ],
    steps: [
      {
        title: "Chọn thời điểm ngoài phòng ngủ",
        detail:
          "Nói lúc đang trong tình huống dễ khiến người kia thấy bị chê ngay tại chỗ. Lúc đi dạo, nấu ăn cùng nhau, hoặc trên xe là những lúc dễ nói hơn.",
      },
      {
        title: "Nói rõ mục đích trước khi vào chuyện",
        detail:
          "Mình muốn nói chuyện này vì mình muốn cả hai đều thoải mái hơn. Câu mở đầu này định khung cả cuộc trò chuyện.",
      },
      {
        title: "Bắt đầu bằng điều tích cực",
        detail:
          "Mình rất thích khi anh làm điều này, và mình muốn thử thêm... — cách mở đầu này dễ nghe hơn nhiều so với vào thẳng phần chê.",
      },
      {
        title: "Nói cụ thể, không nói chung chung",
        detail:
          "Chậm hơn một chút, nhẹ hơn một chút, dành thêm thời gian là những chỉ dẫn dùng được. Anh chẳng hiểu gì cả thì không.",
      },
      {
        title: "Dùng câu bắt đầu bằng mình",
        detail:
          "Mình thấy thích hơn khi... thay vì anh làm sai rồi. Cách nói này ít gây phòng thủ và giữ được không khí.",
      },
      {
        title: "Hỏi lại họ",
        detail:
          "Còn anh, có điều gì anh muốn mà chưa nói không. Trò chuyện hai chiều mới bền, và có khi bạn nhận lại thông tin bất ngờ.",
      },
      {
        title: "Chấp nhận cần vài lần",
        detail:
          "Một cuộc nói chuyện không đổi được thói quen nhiều năm. Nhắc lại nhẹ nhàng, và ghi nhận khi họ có thay đổi.",
      },
      {
        title: "Khen khi có thay đổi",
        detail:
          "Ghi nhận rõ ràng khiến thay đổi được duy trì. Đây là phần nhiều người quên sau khi đã nói xong điều mình muốn.",
      },
      {
        title: "Quan sát phản ứng của họ",
        detail:
          "Nếu mỗi lần bạn nói điều mình muốn đều bị giận dỗi hoặc chế nhạo, đó là vấn đề của mối quan hệ chứ không phải cách bạn nói.",
      },
    ],
    notes: [
      "Không ai có nghĩa vụ làm điều mình không thoải mái — điều này đúng với cả hai phía.",
      "Nếu bạn thấy sợ khi nói ra điều mình muốn hoặc điều mình không muốn, hãy xem lại mối quan hệ đó. Sợ không phải là cảm giác bình thường trong tình yêu.",
      "Có thể viết ra giấy hoặc nhắn tin nếu nói trực tiếp quá khó — cách nào cũng được, miễn là nói ra.",
    ],
    faq: [
      {
        q: "Sợ bạn đời tự ái thì sao?",
        a: "Cách mở đầu bằng điều tích cực và dùng câu bắt đầu bằng mình giảm hẳn nguy cơ đó. Còn tự ái tới mức không nói chuyện được thì đó là chuyện cần giải quyết ở tầng khác.",
      },
      {
        q: "Đã nói mà không thay đổi gì thì sao?",
        a: "Thử nói cụ thể hơn và chọn thời điểm khác. Nếu vẫn không có gì thay đổi sau nhiều lần, đó là thông tin về mức độ họ quan tâm tới cảm giác của bạn.",
      },
      {
        q: "Nói thế nào nếu chưa từng nói bao giờ?",
        a: "Bắt đầu bằng một điều nhỏ và tích cực. Không cần nói hết mọi thứ trong một lần — mở được cánh cửa đã là thành công.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ap-luc-ngoai-hinh-va-su-than-mat",
    title: "Áp lực ngoại hình và sự thân mật",
    excerpt:
      "Bận tâm về bụng, về ngực, về vết rạn tới mức không tận hưởng được gì — chuyện phổ biến hơn bạn nghĩ nhiều.",
    readTimeMinutes: 4,
    quickAnswer:
      "Tự ti về cơ thể ảnh hưởng trực tiếp tới sự thân mật vì tâm trí bạn đang bận theo dõi và chấm điểm bản thân thay vì tận hưởng. Ba việc giúp ích: giảm tiếp xúc với nội dung khiến bạn so sánh, nói với bạn đời, và tìm hỗ trợ tâm lý nếu nó chiếm hết tâm trí.",
    prepare: [
      "Nhận ra bạn đang so với cái gì: ảnh chỉnh sửa hay người thật",
      "Sẵn sàng nói với bạn đời một câu ngắn",
      "Biết rằng có chuyên gia hỗ trợ mảng hình ảnh cơ thể",
    ],
    steps: [
      {
        title: "Xem lại nguồn so sánh của bạn",
        detail:
          "Bỏ theo dõi những tài khoản khiến bạn thấy tệ về bản thân. Đây là việc dễ làm nhất mà hiệu quả nhanh nhất — làm ngay hôm nay được.",
      },
      {
        title: "Nhớ rằng ảnh trên mạng đã qua xử lý",
        detail:
          "Ánh sáng, góc chụp, tư thế, chỉnh sửa. Bạn đang so cơ thể thật của mình với một sản phẩm được làm ra để trông hoàn hảo.",
      },
      {
        title: "Gọi tên vòng lặp",
        detail:
          "Càng quan sát và phán xét bản thân trong lúc thân mật thì càng khó thoải mái. Nhận ra vòng lặp là bước đầu để bước ra khỏi nó.",
      },
      {
        title: "Chuyển chú ý sang cảm giác cơ thể",
        detail:
          "Thay vì nghĩ trông mình thế nào, tập trung vào bạn đang cảm thấy gì. Nghe đơn giản nhưng đây là kỹ thuật được dùng thật trong trị liệu.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Một câu đơn giản kiểu mình đang thấy ngại về cơ thể mình cũng đủ để họ hiểu và điều chỉnh. Họ có thể đã không hề nhận ra.",
      },
      {
        title: "Điều chỉnh hoàn cảnh cho dễ chịu hơn",
        detail:
          "Ánh sáng dịu, mặc đồ bạn thấy tự tin. Không có gì sai khi bắt đầu từ chỗ bạn thấy an toàn rồi mở rộng dần.",
      },
      {
        title: "Chăm cơ thể vì sức khỏe, không vì hình ảnh",
        detail:
          "Vận động và ăn uống vì thấy khoẻ hơn, ngủ ngon hơn — mục tiêu này bền hơn nhiều so với mục tiêu để trông giống ai đó.",
      },
      {
        title: "Nhận diện dấu hiệu cần hỗ trợ chuyên môn",
        detail:
          "Nhịn ăn cực đoan, tập tới kiệt sức, tránh soi gương, tránh mọi tình huống thân mật — đây là lúc cần chuyên gia chứ không phải cần cố gắng hơn.",
      },
      {
        title: "Tìm chuyên gia nếu nó chiếm hết tâm trí",
        detail:
          "Ám ảnh về hình ảnh cơ thể là vấn đề tâm lý có thật và điều trị được, không phải chuyện phải tự vượt qua bằng ý chí.",
      },
    ],
    notes: [
      "Nhịn ăn cực đoan hoặc tập luyện tới kiệt sức để thay đổi ngoại hình là dấu hiệu cần hỗ trợ chuyên môn, không phải quyết tâm đáng khen.",
      "Người thật sự yêu quý bạn không dùng ngoại hình của bạn làm điều kiện. Nếu có, đó là vấn đề của họ chứ không phải của cơ thể bạn.",
      "Sau sinh và ở tuổi trung niên là hai giai đoạn cực kỳ phổ biến để cảm thấy như vậy — bạn không hề đơn độc.",
    ],
    faq: [
      {
        q: "Sau sinh cơ thể thay đổi nhiều thì sao?",
        a: "Đây là giai đoạn rất phổ biến để cảm thấy như vậy. Cho mình thời gian, và nói với bác sĩ nếu tâm trạng đi xuống kéo dài.",
      },
      {
        q: "Bạn đời nói không sao mà tôi vẫn ngại?",
        a: "Rất bình thường — vấn đề nằm ở cách bạn nhìn mình chứ không ở cách họ nhìn bạn. Đó cũng là lý do trấn an từ người khác thường không đủ, và chuyên gia tâm lý mới giúp được.",
      },
      {
        q: "Có nên giảm cân để tự tin hơn không?",
        a: "Chăm sức khỏe là tốt, nhưng nếu sự tự tin phụ thuộc hoàn toàn vào con số trên cân thì giảm được rồi vẫn sẽ thấy chưa đủ. Xử lý phần nhìn nhận bản thân mới bền.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "nhan-ra-moi-quan-he-kiem-soat",
    title: "Nhận ra mối quan hệ kiểm soát",
    excerpt:
      "Nó hiếm khi bắt đầu bằng bạo lực. Thường bắt đầu bằng những thứ trông giống hệt như quan tâm.",
    readTimeMinutes: 5,
    quickAnswer:
      "Dấu hiệu cần chú ý: kiểm soát tiền bạc, kiểm tra điện thoại, hạn chế bạn gặp gia đình bạn bè, ghen tuông cực đoan, hạ thấp bạn rồi bảo là đùa, ép buộc chuyện thân mật, và khiến bạn luôn phải xin lỗi. Nếu bạn đang phải cân nhắc từng lời để không làm họ nổi giận, đó là tín hiệu rõ ràng.",
    prepare: [
      "Giữ liên lạc với ít nhất một người bạn hoặc người thân bên ngoài mối quan hệ",
      "Biết mình có thể tới đâu nếu cần rời đi gấp",
      "Giữ giấy tờ tuỳ thân và một khoản tiền riêng ở nơi an toàn",
      "Số điện thoại công an phường và một người có thể tới ngay",
    ],
    steps: [
      {
        title: "Nhận diện dấu hiệu sớm",
        detail:
          "Kiểm soát thường được gói trong lớp vỏ quan tâm: anh chỉ lo cho em, anh ghen vì anh yêu em, anh giữ tiền cho em đỡ tiêu hoang.",
      },
      {
        title: "Chú ý tới việc bị cô lập dần",
        detail:
          "Dần dần xa gia đình và bạn bè là bước đi phổ biến nhất, vì nó khiến bạn không còn ai để đối chiếu xem điều gì là bình thường.",
      },
      {
        title: "Để ý tới kiểm soát tài chính",
        detail:
          "Giữ hết tiền, bắt xin từng khoản, ngăn bạn đi làm, hoặc vay nợ dưới tên bạn. Đây là cách khiến bạn không thể rời đi.",
      },
      {
        title: "Nhận ra kiểu hạ thấp có vỏ bọc",
        detail:
          "Chê rồi bảo là đùa, so sánh với người khác, nói bạn quá nhạy cảm khi bạn buồn. Kiểu này bào mòn dần lòng tin của bạn vào chính mình.",
      },
      {
        title: "Ghi lại sự việc",
        detail:
          "Ghi ngày tháng và chuyện gì xảy ra, lưu ở nơi họ không truy cập được (email riêng, sổ gửi nhà bạn thân). Hữu ích cho cả việc nhìn rõ vấn đề lẫn khi cần tới pháp lý.",
      },
      {
        title: "Nói với một người bên ngoài",
        detail:
          "Người ngoài cuộc thường nhìn ra điều mà bạn đã quen tới mức không thấy nữa. Chọn người bạn tin và kể thật.",
      },
      {
        title: "Bảo vệ thiết bị và tài khoản của bạn",
        detail:
          "Đổi mật khẩu, kiểm tra xem có ứng dụng theo dõi nào không, tắt chia sẻ vị trí nếu bạn thấy không an toàn. Làm ở nơi họ không thấy.",
      },
      {
        title: "Chuẩn bị phương án an toàn",
        detail:
          "Nơi có thể tới, người có thể gọi, giấy tờ tuỳ thân, một ít tiền, thuốc đang dùng để sẵn ở chỗ dễ lấy. Chuẩn bị KHÔNG có nghĩa là bạn phải đi ngay hôm nay.",
      },
      {
        title: "Nếu có con, tính cả phương án cho con",
        detail:
          "Giấy tờ của con, đồ dùng cần thiết, và người có thể giúp trông. Nói với giáo viên hoặc người bạn tin về tình hình nếu cần.",
      },
      {
        title: "Khi quyết định rời đi, đừng đi một mình",
        detail:
          "Giai đoạn rời đi là giai đoạn nguy hiểm nhất theo ghi nhận của các tổ chức hỗ trợ. Hãy có người biết kế hoạch và ở cùng bạn.",
      },
    ],
    notes: [
      "Bị đe doạ hoặc bạo hành: gọi công an. Bạo lực gia đình là hành vi bị pháp luật xử lý, không phải chuyện riêng của nhà ai.",
      "Ép buộc chuyện thân mật là xâm hại, kể cả trong hôn nhân.",
      "Không phải lỗi của bạn, và bạn KHÔNG có nghĩa vụ phải sửa chữa họ hay chịu đựng để giữ gia đình.",
      "Nếu bạn đang đọc bài này và thấy quen thuộc — hãy nói với một người. Chỉ cần một người biết là mọi thứ đã khác.",
    ],
    faq: [
      {
        q: "Họ chỉ như vậy khi say, có tính không?",
        a: "Có. Rượu không tạo ra hành vi kiểm soát, nó chỉ bỏ đi lớp che. Lời hứa thay đổi cần đi kèm hành động thật và kéo dài, không phải vài tuần rồi lặp lại.",
      },
      {
        q: "Tôi vẫn còn yêu thì sao?",
        a: "Yêu và bị tổn thương có thể tồn tại cùng lúc, và điều đó khiến mọi thứ khó hơn nhiều. Hãy nói chuyện với chuyên gia tâm lý hoặc người bạn tin để nhìn rõ hơn.",
      },
      {
        q: "Họ nói sẽ thay đổi, có nên tin không?",
        a: "Chu kỳ căng thẳng rồi bùng nổ rồi xin lỗi ngọt ngào là mô hình rất quen thuộc. Nhìn vào hành động kéo dài nhiều tháng chứ đừng nhìn lời hứa.",
      },
      {
        q: "Không có tiền và không có chỗ ở thì làm sao?",
        a: "Đây chính là lý do nên chuẩn bị từ sớm và nói với người thân. Có các tổ chức hỗ trợ phụ nữ — hỏi hội phụ nữ địa phương hoặc công an phường.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tim-bac-si-phu-khoa-ban-thay-thoai-mai",
    title: "Tìm bác sĩ phụ khoa bạn thấy thoải mái",
    excerpt:
      "Một buổi khám khó chịu có thể khiến người ta né tránh nhiều năm. Bạn hoàn toàn có quyền đổi bác sĩ.",
    readTimeMinutes: 3,
    quickAnswer:
      "Bạn có quyền chọn bác sĩ nữ, có quyền yêu cầu người thứ ba ở trong phòng, có quyền hỏi trước mỗi thao tác và có quyền dừng lại. Không thấy thoải mái với một bác sĩ thì tìm người khác — đó là chuyện bình thường, không phải làm khó ai.",
    prepare: [
      "Hỏi bạn bè hoặc người thân giới thiệu — đây là cách tìm hiệu quả nhất",
      "Ghi sẵn câu hỏi ra giấy",
      "Nói rõ yêu cầu của bạn ngay khi đặt lịch",
      "Mang theo hồ sơ và kết quả cũ nếu có",
    ],
    steps: [
      {
        title: "Hỏi người quen giới thiệu",
        detail:
          "Lời giới thiệu từ người từng khám đáng tin hơn quảng cáo nhiều. Hỏi cụ thể: bác sĩ đó có giải thích kỹ không, có vội không.",
      },
      {
        title: "Nói yêu cầu ngay lúc đặt lịch",
        detail:
          "Muốn bác sĩ nữ hay muốn có người nhà vào cùng thì báo trước, đừng đợi tới lúc đã nằm lên bàn khám mới nói.",
      },
      {
        title: "Chuẩn bị câu hỏi ra giấy",
        detail:
          "Buổi khám thường ngắn và bạn dễ quên. Danh sách câu hỏi giúp bạn không ra về rồi mới nhớ điều quan trọng nhất.",
      },
      {
        title: "Quan sát cách họ giao tiếp",
        detail:
          "Bác sĩ tốt sẽ giải thích trước khi làm, hỏi bạn có ổn không, và không phán xét lựa chọn cá nhân của bạn.",
      },
      {
        title: "Đặt câu hỏi thoải mái",
        detail:
          "Không có câu hỏi nào ngớ ngẩn ở đây. Họ nghe những câu này mỗi ngày và đó là công việc của họ.",
      },
      {
        title: "Nhận diện dấu hiệu nên đổi",
        detail:
          "Bị phán xét về đời sống cá nhân, bị vội vàng, không được giải thích, bị ép làm dịch vụ đắt tiền — đủ lý do để tìm người khác.",
      },
      {
        title: "Xin bản sao hồ sơ khi đổi",
        detail:
          "Mang theo kết quả xét nghiệm và ghi chú cũ để bác sĩ mới nắm được diễn tiến. Đây là quyền của bạn với hồ sơ của mình.",
      },
      {
        title: "Duy trì khám định kỳ khi đã tìm được người hợp",
        detail:
          "Đây chính là lợi ích lớn nhất của việc tìm đúng người: bạn sẽ không né tránh nữa, và khám định kỳ mới là thứ bảo vệ bạn.",
      },
    ],
    notes: [
      "Bạn có quyền từ chối bất kỳ thao tác nào và yêu cầu dừng lại bất cứ lúc nào.",
      "Cảm giác an toàn khi khám không phải đòi hỏi quá đáng — đó là điều kiện để bạn duy trì việc khám định kỳ suốt nhiều năm.",
      "Cẩn thận với phòng khám quảng cáo rầm rộ, chẩn đoán nghe rất nặng rồi hối thúc đóng gói tiền lớn ngay buổi đầu.",
    ],
    faq: [
      {
        q: "Đổi bác sĩ nhiều lần có sao không?",
        a: "Không sao. Chỉ nên mang theo hồ sơ và kết quả cũ để bác sĩ mới nắm được diễn tiến.",
      },
      {
        q: "Bác sĩ nam thì sao?",
        a: "Chuyên môn không phụ thuộc giới tính. Nhưng nếu bạn thấy thoải mái hơn với bác sĩ nữ thì cứ yêu cầu — đó là quyền chính đáng.",
      },
      {
        q: "Bệnh viện công hay phòng khám tư?",
        a: "Bệnh viện công thường rẻ hơn và có chuyên môn tốt nhưng đông. Phòng khám tư nhanh hơn nhưng cần chọn nơi có giấy phép rõ ràng.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tu-tim-hieu-co-the-minh",
    title: "Tự tìm hiểu cơ thể mình",
    excerpt:
      "Biết cơ thể mình bình thường ra sao là nền tảng của mọi thứ: phát hiện bất thường sớm, và nói được điều mình muốn.",
    readTimeMinutes: 3,
    quickAnswer:
      "Hiểu cơ thể mình gồm hai phần: biết cấu tạo cơ bản và tên gọi đúng, và biết trạng thái bình thường của chính bạn để nhận ra khi có gì đổi khác. Đây là kiến thức sức khỏe cơ bản, không phải điều gì đáng ngại hay đáng xấu hổ.",
    prepare: [
      "Một nguồn thông tin y tế đáng tin thay vì hội nhóm mạng xã hội",
      "Chỗ riêng tư và thời gian không vội",
      "Bỏ cảm giác đây là chuyện xấu hổ — đây là kiến thức sức khỏe",
      "Sổ hoặc ghi chú điện thoại để ghi lại",
    ],
    steps: [
      {
        title: "Học tên gọi đúng của các bộ phận",
        detail:
          "Dùng đúng từ giúp bạn mô tả chính xác với bác sĩ và không phải nói vòng vo khi đi khám. Nghe đơn giản nhưng rất nhiều người lúng túng ở đây.",
      },
      {
        title: "Tìm hiểu cấu tạo cơ bản",
        detail:
          "Biết bộ phận nào nằm ở đâu, chức năng gì. Sách sức khỏe, tài liệu từ cơ sở y tế, hoặc hỏi thẳng bác sĩ phụ khoa đều được.",
      },
      {
        title: "Quan sát để biết trạng thái bình thường của bạn",
        detail:
          "Khí hư, chu kỳ, cảm giác — mỗi người một kiểu. Biết cái bình thường của mình là cách phát hiện bất thường sớm nhất và rẻ nhất.",
      },
      {
        title: "Ghi lại thay đổi theo tháng",
        detail:
          "Vài dòng ghi chú mỗi tháng đủ để bạn thấy quy luật và mang đi khám khi cần. Trí nhớ không đáng tin bằng ghi chép.",
      },
      {
        title: "Kết hợp với các bài tự kiểm tra",
        detail:
          "Tự kiểm tra ngực hàng tháng và theo dõi chu kỳ là hai việc cụ thể nhất. Xem các bài riêng về hai chủ đề này.",
      },
      {
        title: "Hỏi bác sĩ những điều chưa rõ",
        detail:
          "Đây là câu hỏi sức khỏe bình thường. Bác sĩ phụ khoa trả lời những câu này hằng ngày và không thấy chúng kỳ lạ chút nào.",
      },
      {
        title: "Chọn nguồn thông tin cẩn thận",
        detail:
          "Mạng xã hội có nhiều thông tin sai và nhiều quảng cáo trá hình. Ưu tiên nguồn từ cơ sở y tế và tổ chức y tế uy tín.",
      },
    ],
    notes: [
      "Bài viết mang tính kiến thức sức khỏe chung, không thay thế thăm khám.",
      "Hiểu cơ thể mình cũng giúp bạn nhận ra khi ai đó đưa thông tin sai để bán sản phẩm cho bạn.",
      "Nếu bạn lớn lên với thông điệp rằng chuyện này là xấu hổ, việc thấy ngại là dễ hiểu — nhưng kiến thức về cơ thể mình là quyền của bạn.",
    ],
    faq: [
      {
        q: "Tìm hiểu cơ thể mình có bình thường không?",
        a: "Hoàn toàn bình thường và có ích cho sức khỏe. Đây là kiến thức cơ bản mà nhiều người không được dạy từ nhỏ.",
      },
      {
        q: "Nên đọc ở đâu cho đáng tin?",
        a: "Tài liệu của bệnh viện, tổ chức y tế lớn, hoặc hỏi trực tiếp bác sĩ phụ khoa. Tránh các trang bán sản phẩm kèm nội dung tư vấn.",
      },
      {
        q: "Con gái tôi nên biết những gì?",
        a: "Kiến thức phù hợp lứa tuổi về cơ thể và ranh giới thân thể giúp trẻ tự bảo vệ mình. Xem bài dạy con quy tắc an toàn thân thể trong mục Trẻ em.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "hieu-ve-dong-thuan-tu-goc-nhin-nu-gioi",
    title: "Hiểu về đồng thuận từ góc nhìn nữ giới",
    excerpt:
      "Nhiều người lớn lên với thông điệp rằng từ chối là làm khó người khác. Đây là góc nhìn khác, rõ ràng hơn.",
    readTimeMinutes: 4,
    quickAnswer:
      "Đồng thuận phải là tự nguyện, rõ ràng và có thể rút lại bất cứ lúc nào. Im lặng không phải đồng ý, đồng ý lần trước không phải đồng ý mãi mãi, và đồng ý một việc không phải đồng ý mọi việc. Bạn không nợ ai sự thân mật vì bất kỳ lý do nào.",
    prepare: [
      "Biết rõ ranh giới của chính mình",
      "Vài câu từ chối ngắn để dùng khi cần — chuẩn bị trước thì lúc cần dễ nói hơn",
      "Một người bạn tin để nói chuyện khi có sự việc",
      "Số điện thoại người có thể tới đón bạn bất cứ lúc nào",
    ],
    steps: [
      {
        title: "Nhớ ba nguyên tắc",
        detail:
          "Tự nguyện, rõ ràng, rút lại được. Thiếu một trong ba thì không còn là đồng thuận, dù người kia có nói gì đi nữa.",
      },
      {
        title: "Biết mình không nợ ai điều gì",
        detail:
          "Được mời ăn, được tặng quà, được chở về, đang trong mối quan hệ, đã kết hôn — không điều nào tạo ra nghĩa vụ.",
      },
      {
        title: "Từ chối không cần giải thích dài",
        detail:
          "Mình không muốn là một câu hoàn chỉnh. Không cần lý do, không cần xin lỗi, không cần bịa cớ.",
      },
      {
        title: "Chuẩn bị sẵn vài câu",
        detail:
          "Mình muốn về rồi. Mình không thoải mái. Dừng lại nhé. Có sẵn trong đầu thì lúc căng thẳng dễ nói ra hơn nhiều.",
      },
      {
        title: "Nhận diện ép buộc mềm",
        detail:
          "Giận dỗi, im lặng trừng phạt, doạ chia tay, nhắc chuyện tiền bạc, so sánh với người cũ — đây đều là ép buộc dù không có bạo lực.",
      },
      {
        title: "Chú ý tới rượu và chất kích thích",
        detail:
          "Người say không thể đưa ra đồng thuận rõ ràng. Ai lợi dụng điều đó là người có lỗi — không phải bạn.",
      },
      {
        title: "Tin vào cảm giác không ổn của mình",
        detail:
          "Nếu bạn thấy có gì đó sai, đừng gạt đi vì sợ mất lịch sự. Rời khỏi tình huống trước, phân tích sau.",
      },
      {
        title: "Nếu đã có chuyện xảy ra",
        detail:
          "Không phải lỗi của bạn. Tìm hỗ trợ y tế sớm vì một số biện pháp dự phòng có giới hạn thời gian tính bằng giờ, và bạn có quyền trình báo.",
      },
      {
        title: "Tìm người để nói",
        detail:
          "Một người bạn tin, người thân, hoặc chuyên gia tâm lý. Không cần kể chi tiết nếu chưa sẵn sàng — chỉ cần không ở một mình với nó.",
      },
    ],
    notes: [
      "Rượu và chất kích thích làm mất khả năng đồng thuận — người lợi dụng điều đó là người có lỗi, không phải bạn.",
      "Xâm hại trong hôn nhân vẫn là xâm hại. Kết hôn không tạo ra sự đồng thuận vĩnh viễn.",
      "Phản ứng đông cứng, không chống cự được là phản ứng tự nhiên của hệ thần kinh khi sợ hãi — điều đó KHÔNG đồng nghĩa với đồng ý, và không phải lý do để bạn tự trách.",
      "Bạn không có lỗi vì mặc gì, uống gì, hay đã đi cùng ai.",
    ],
    faq: [
      {
        q: "Đã đồng ý rồi mà đổi ý giữa chừng có được không?",
        a: "Được, bất cứ lúc nào. Người tôn trọng bạn sẽ dừng lại ngay mà không hỏi vặn hay giận dỗi.",
      },
      {
        q: "Từ chối rồi họ giận thì sao?",
        a: "Phản ứng giận dữ trước một lời từ chối là thông tin quan trọng về con người đó. Bạn không có trách nhiệm quản lý cảm xúc của người khác bằng cơ thể mình.",
      },
      {
        q: "Trong hôn nhân có cần hỏi nữa không?",
        a: "Có. Hôn nhân không phải sự đồng thuận trọn đời. Mỗi lần vẫn là mỗi lần, và điều này áp dụng cho cả hai phía.",
      },
      {
        q: "Tôi không nói gì thì có tính là đồng ý không?",
        a: "Không. Im lặng, ngập ngừng, hay chỉ đơn giản là không phản đối đều KHÔNG phải đồng thuận.",
      },
    ],
    sources: [],
  },
];
