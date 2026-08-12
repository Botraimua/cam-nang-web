// Phần NỮ GIỚI — NGƯỜI LỚN: chuyện khó nói về cơ thể, tình dục, giới tính.
//
// ❗ Mọi bài ở đây đều có adult: true — ẩn khỏi lượt xem mặc định ở trang chủ,
//    chỉ hiện khi người đọc bấm đúng mục Nữ giới / 18+ hoặc đang tìm kiếm.
//
// ❗ NGUYÊN TẮC: nói thẳng và bình thản về sức khỏe, cảm xúc và giao tiếp.
//    KHÔNG mô tả kỹ thuật tình dục, KHÔNG kê tên thuốc hay liều dùng,
//    mọi bài đều nhắc đây không phải tư vấn y khoa.

const chung = { category: "nu-gioi", author: null, adult: true };

export const nuGioiNguoiLon = [
  {
    ...chung,
    slug: "tu-kiem-tra-nguc-hang-thang",
    title: "Tự kiểm tra ngực hàng tháng",
    excerpt:
      "Vài phút mỗi tháng để quen với cơ thể mình — việc đơn giản nhưng nhiều người chưa từng được hướng dẫn.",
    readTimeMinutes: 3,
    quickAnswer:
      "Chọn một thời điểm cố định trong tháng, tốt nhất là vài ngày sau khi sạch kinh khi ngực ít căng nhất. Quan sát trước gương rồi sờ theo đường xoắn ốc hoặc theo dải dọc, kiểm tra cả vùng nách. Mục tiêu là quen với cái bình thường của mình để nhận ra thay đổi.",
    prepare: [
      "Đặt nhắc trong điện thoại vào một ngày cố định mỗi tháng",
      "Chỗ riêng tư có gương và đủ sáng",
      "Bình tĩnh: phần lớn thay đổi ở ngực là lành tính",
    ],
    steps: [
      {
        title: "Quan sát trước gương",
        detail:
          "Buông tay, rồi giơ tay lên. Nhìn xem có thay đổi hình dạng, da lõm, núm vú tụt vào hay đổi hướng không.",
      },
      {
        title: "Sờ khi đứng hoặc trong lúc tắm",
        detail:
          "Dùng đầu ba ngón tay, ấn theo ba mức nông, vừa, sâu. Đi theo đường xoắn ốc từ ngoài vào hoặc theo từng dải dọc.",
      },
      {
        title: "Đừng quên vùng nách và xương đòn",
        detail: "Hạch vùng này cũng cần được kiểm tra, nhiều người bỏ sót.",
      },
      {
        title: "Nằm xuống kiểm tra lại",
        detail: "Kê gối dưới vai bên cần khám, mô ngực dàn đều nên dễ cảm nhận hơn.",
      },
      {
        title: "Ghi nhớ cái bình thường của bạn",
        detail:
          "Ngực lổn nhổn nhẹ và thay đổi theo chu kỳ là chuyện thường. Quan trọng là bạn nhận ra khi có gì khác đi.",
      },
    ],
    notes: [
      "ĐI KHÁM nếu: sờ thấy khối cứng không di động, da lõm hoặc sần như vỏ cam, núm vú tụt vào bất thường, tiết dịch nhất là dịch máu, hoặc một bên thay đổi rõ so với bên kia.",
      "Tự kiểm tra không thay thế tầm soát định kỳ theo chỉ định của bác sĩ, nhất là khi gia đình có tiền sử.",
      "Bài viết không phải chẩn đoán; mọi bất thường phải do bác sĩ đánh giá.",
    ],
    faq: [
      {
        q: "Sờ thấy cục, có phải ung thư không?",
        a: "Phần lớn là u xơ hoặc nang lành tính, đặc biệt ở người trẻ. Nhưng đừng tự kết luận theo hướng nào, hãy đi khám.",
      },
      {
        q: "Ngực đau trước kỳ kinh có sao không?",
        a: "Căng đau theo chu kỳ rất phổ biến và thường là do nội tiết. Đau một điểm cố định không liên quan chu kỳ thì nên đi khám.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tam-soat-ung-thu-co-tu-cung",
    title: "Tầm soát ung thư cổ tử cung",
    excerpt:
      "Một trong số ít bệnh ung thư có thể phát hiện từ giai đoạn tiền ung thư. Vậy mà rất nhiều người chưa từng đi tầm soát.",
    readTimeMinutes: 3,
    quickAnswer:
      "Đây là xét nghiệm lấy mẫu tế bào ở cổ tử cung, làm nhanh tại phòng khám phụ khoa. Độ tuổi bắt đầu và khoảng cách giữa các lần do bác sĩ chỉ định tuỳ loại xét nghiệm và tình trạng của bạn. Kết hợp với tiêm vắc xin HPV là cách bảo vệ hiệu quả nhất hiện nay.",
    prepare: [
      "Đặt lịch khi không trong kỳ kinh",
      "Hỏi trước cơ sở về việc kiêng quan hệ hay dùng thuốc đặt trước ngày lấy mẫu",
      "Mang theo kết quả tầm soát cũ nếu có",
    ],
    steps: [
      {
        title: "Đặt lịch ở cơ sở phụ khoa uy tín",
        detail: "Bệnh viện phụ sản, khoa sản bệnh viện đa khoa, hoặc phòng khám có giấy phép.",
      },
      {
        title: "Chuẩn bị theo hướng dẫn",
        detail:
          "Một số yêu cầu kiêng quan hệ hoặc không dùng thuốc đặt trong vài ngày trước để mẫu không bị nhiễu.",
      },
      {
        title: "Quá trình lấy mẫu rất nhanh",
        detail:
          "Thường chỉ vài phút, cảm giác hơi khó chịu chứ không đau như nhiều người tưởng tượng.",
      },
      {
        title: "Nghe bác sĩ giải thích kết quả",
        detail:
          "Kết quả bất thường không đồng nghĩa với ung thư. Nhiều trường hợp chỉ cần theo dõi hoặc xử lý sớm là ổn.",
      },
      {
        title: "Đặt nhắc cho lần tiếp theo",
        detail: "Hỏi bác sĩ khoảng cách phù hợp với bạn rồi đặt lịch nhắc ngay.",
      },
    ],
    notes: [
      "Đã tiêm vắc xin HPV vẫn cần tầm soát theo hướng dẫn — vắc xin không thay thế việc này.",
      "Ra máu bất thường giữa kỳ, sau quan hệ, hoặc sau mãn kinh: đi khám ngay, đừng chờ tới lịch tầm soát.",
      "Độ tuổi và tần suất cụ thể do bác sĩ quyết định — bài viết không thay thế chỉ định y tế.",
    ],
    faq: [
      {
        q: "Chưa quan hệ có cần tầm soát không?",
        a: "Chỉ định khác nhau tuỳ trường hợp. Hãy hỏi bác sĩ phụ khoa về tình huống cụ thể của bạn.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Đau nhẹ tới vừa, chịu được, giảm khi chườm ấm là thường gặp. Đau tới mức phải nghỉ làm, nôn, ngất, đau cả ngoài kỳ kinh, hoặc đau ngày càng nặng lên theo năm tháng thì cần đi khám — có thể liên quan tới bệnh lý cần điều trị.",
    prepare: [
      "Ghi lại vài chu kỳ: mức đau, thời gian, thuốc đã dùng, có phải nghỉ làm không",
      "Ghi cả triệu chứng kèm theo: nôn, tiêu chảy, đau khi quan hệ",
      "Mang ghi chép này đi khám",
    ],
    steps: [
      {
        title: "Ghi lại mức đau theo thang điểm",
        detail:
          "Từ 1 tới 10 mỗi kỳ. Con số cụ thể giúp bác sĩ đánh giá tốt hơn nhiều so với mô tả chung chung.",
      },
      {
        title: "Thử biện pháp cơ bản",
        detail:
          "Chườm ấm, nghỉ ngơi, vận động nhẹ. Có hiệu quả với nhiều người và không hại gì.",
      },
      {
        title: "Đừng tự tăng liều thuốc giảm đau",
        detail:
          "Phải dùng thường xuyên hoặc liều cao mới chịu nổi là dấu hiệu cần đi khám, không phải dấu hiệu cần uống thêm.",
      },
      {
        title: "Đi khám phụ khoa nếu có dấu hiệu cảnh báo",
        detail:
          "Bác sĩ có thể siêu âm và làm thêm xét nghiệm để tìm nguyên nhân như lạc nội mạc tử cung hay u xơ.",
      },
    ],
    notes: [
      "Đau tới mức ngất, nôn liên tục, hoặc đau dữ dội đột ngột kèm sốt: đi cấp cứu.",
      "Đau kèm khó thụ thai, đau khi quan hệ, đau khi đi vệ sinh trong kỳ kinh là nhóm dấu hiệu nên khám sớm.",
      "Bài viết không chẩn đoán và không nêu tên thuốc.",
    ],
    faq: [
      {
        q: "Uống thuốc giảm đau mỗi kỳ có hại không?",
        a: "Dùng đúng loại đúng liều theo hướng dẫn của dược sĩ hoặc bác sĩ thì nhiều người dùng được. Nhưng phải phụ thuộc thuốc mỗi kỳ là lý do nên đi tìm nguyên nhân.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "khi-hu-the-nao-la-binh-thuong",
    title: "Khí hư: thế nào là bình thường",
    excerpt:
      "Có khí hư là chuyện bình thường của cơ thể khoẻ mạnh. Vấn đề nằm ở chỗ nhận ra khi nào nó đổi khác.",
    readTimeMinutes: 2,
    quickAnswer:
      "Khí hư bình thường thường trong hoặc trắng đục, không mùi khó chịu, và thay đổi độ đặc loãng theo chu kỳ. Cần đi khám khi đổi màu vàng xanh hoặc xám, vón cục như bã đậu, có mùi hôi tanh rõ, hoặc kèm ngứa rát và đau.",
    prepare: [
      "Quan sát và ghi lại vài ngày: màu, độ đặc, mùi, có ngứa không",
      "Nhớ lại: có dùng dung dịch mới, kháng sinh, hay thay đổi gì gần đây không",
      "Đặt lịch khám khi không trong kỳ kinh nếu không gấp",
    ],
    steps: [
      {
        title: "Hiểu thay đổi theo chu kỳ",
        detail:
          "Giữa chu kỳ thường trong và dai hơn, gần kỳ kinh thì đặc hơn. Đây là biến đổi sinh lý bình thường.",
      },
      {
        title: "Nhận biết dấu hiệu bất thường",
        detail:
          "Đổi màu rõ, vón cục, mùi hôi tanh, kèm ngứa rát hoặc đau bụng dưới — những dấu hiệu này cần khám.",
      },
      {
        title: "Đừng tự chữa bằng thuốc đặt mua theo mách",
        detail:
          "Mỗi nguyên nhân cần thuốc khác nhau. Dùng sai làm tình trạng dai dẳng và khó chẩn đoán hơn.",
      },
      {
        title: "Giữ vệ sinh đơn giản",
        detail: "Nước sạch, rửa bên ngoài, không thụt rửa sâu, đồ lót cotton thoáng.",
      },
    ],
    notes: [
      "Đi khám ngay nếu kèm sốt, đau bụng dưới nhiều, hoặc đang mang thai.",
      "Bài viết không chẩn đoán; nguyên nhân phải do bác sĩ xác định.",
    ],
    faq: [
      {
        q: "Có nên dùng dung dịch vệ sinh hàng ngày không?",
        a: "Nhiều bác sĩ khuyên chỉ cần nước sạch. Dung dịch mạnh hoặc thụt rửa làm mất cân bằng tự nhiên và dễ gây viêm hơn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "mui-vung-kin-su-that-va-quang-cao",
    title: "Mùi vùng kín: sự thật và quảng cáo",
    excerpt:
      "Cả một ngành hàng được xây trên nỗi xấu hổ của phụ nữ. Sự thật y tế đơn giản hơn nhiều.",
    readTimeMinutes: 2,
    quickAnswer:
      "Vùng kín khoẻ mạnh có mùi nhẹ đặc trưng và thay đổi theo chu kỳ, sau vận động hay sau quan hệ — đó là bình thường, không cần khử. Chỉ cần đi khám khi mùi hôi tanh rõ rệt, kèm đổi màu khí hư, ngứa hoặc rát.",
    prepare: [
      "Bỏ suy nghĩ vùng kín phải thơm như quảng cáo",
      "Ghi lại nếu thấy mùi thay đổi rõ và kéo dài",
      "Đồ lót cotton thoáng, thay hằng ngày",
    ],
    steps: [
      {
        title: "Biết cái gì là bình thường",
        detail:
          "Mùi nhẹ, thay đổi theo ngày trong chu kỳ và sau vận động. Cơ thể khoẻ mạnh vẫn có mùi.",
      },
      {
        title: "Tránh sản phẩm khử mùi vùng kín",
        detail:
          "Xịt thơm, giấy ướt có hương, thụt rửa đều có thể gây kích ứng và làm mất cân bằng, dẫn tới mùi khó chịu hơn.",
      },
      {
        title: "Ưu tiên thoáng và khô",
        detail:
          "Thay đồ ngay sau khi tập hoặc bơi, chọn đồ lót cotton, tránh mặc đồ bó ẩm cả ngày.",
      },
      {
        title: "Đi khám khi mùi thay đổi rõ",
        detail:
          "Mùi tanh nồng, kèm khí hư bất thường hoặc ngứa là dấu hiệu cần bác sĩ xác định nguyên nhân.",
      },
    ],
    notes: [
      "Đừng dùng các phương pháp xông hơ vùng kín theo lời truyền miệng — nguy cơ bỏng và viêm nhiễm là có thật.",
      "Bài viết không chẩn đoán; mọi bất thường kéo dài nên đi khám phụ khoa.",
    ],
    faq: [
      {
        q: "Bạn đời phàn nàn về mùi thì sao?",
        a: "Đi khám để loại trừ nguyên nhân bệnh lý. Nếu mọi thứ bình thường mà họ vẫn dùng chuyện này để hạ thấp bạn, thì đó là vấn đề trong cách cư xử của họ.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "kho-han-nguyen-nhan-va-cach-xu-ly",
    title: "Khô hạn: nguyên nhân và cách xử lý",
    excerpt:
      "Không phải cứ khô là do không còn yêu. Danh sách nguyên nhân thật ra rất đời thường và phần lớn xử lý được.",
    readTimeMinutes: 3,
    quickAnswer:
      "Nguyên nhân phổ biến gồm căng thẳng, thiếu thời gian chuẩn bị, thay đổi nội tiết (sau sinh, cho con bú, tiền mãn kinh), một số thuốc đang dùng, và cả việc dùng xà phòng mạnh ở vùng kín. Chất bôi trơn gốc nước là giải pháp đơn giản và an toàn với hầu hết người.",
    prepare: [
      "Ghi lại: bắt đầu khi nào, có trùng với giai đoạn nào không",
      "Liệt kê thuốc đang dùng",
      "Sẵn sàng nói chuyện với bạn đời, vì đây là chuyện của hai người",
    ],
    steps: [
      {
        title: "Loại trừ nguyên nhân đời thường trước",
        detail:
          "Căng thẳng, mệt mỏi, vội vàng là những lý do phổ biến nhất và cũng dễ điều chỉnh nhất.",
      },
      {
        title: "Xem lại sản phẩm vệ sinh",
        detail:
          "Xà phòng mạnh, dung dịch có hương, thụt rửa đều làm khô và kích ứng vùng này.",
      },
      {
        title: "Dùng chất bôi trơn gốc nước",
        detail:
          "Đơn giản, an toàn với hầu hết người và dùng được cùng bao cao su. Loại gốc dầu có thể làm hỏng bao.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Cần thêm thời gian và sự thoải mái là nhu cầu chính đáng, không phải điều gì đáng ngại.",
      },
      {
        title: "Đi khám nếu kéo dài hoặc gây đau",
        detail:
          "Nhất là khi kèm đau rát, sau sinh, đang cho con bú hoặc bước vào tuổi tiền mãn kinh — có hướng xử lý y tế phù hợp.",
      },
    ],
    notes: [
      "Không tự dùng kem hoặc thuốc nội tiết bôi tại chỗ nếu chưa có chỉ định bác sĩ.",
      "Đau rát kèm chảy máu sau quan hệ: đi khám, đừng bỏ qua.",
    ],
    faq: [
      {
        q: "Dùng chất bôi trơn có phải là bất thường không?",
        a: "Hoàn toàn không. Rất nhiều người dùng và đó chỉ là một sản phẩm hỗ trợ bình thường như bao sản phẩm khác.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "khong-dat-cuc-khoai-chuyen-rat-pho-bien",
    title: "Không đạt cực khoái: chuyện rất phổ biến",
    excerpt:
      "Nhiều người tưởng chỉ mình mình như vậy nên im lặng suốt nhiều năm. Thực tế thì con số cao hơn bạn nghĩ rất nhiều.",
    readTimeMinutes: 3,
    quickAnswer:
      "Đây là tình trạng rất phổ biến và thường liên quan tới căng thẳng, thiếu hiểu biết về cơ thể mình, thiếu giao tiếp, hoặc kỳ vọng lệch lạc học từ phim ảnh. Bước hữu ích nhất thường là tự tìm hiểu cơ thể mình và nói được với bạn đời điều mình muốn.",
    prepare: [
      "Bỏ tiêu chuẩn học từ phim ảnh — đó là sản phẩm dàn dựng",
      "Chấp nhận rằng đây là chuyện phổ biến, không phải khiếm khuyết của riêng bạn",
      "Sẵn sàng cho một cuộc trò chuyện thật với bạn đời",
    ],
    steps: [
      {
        title: "Bỏ áp lực phải đạt được",
        detail:
          "Càng đặt mục tiêu càng căng thẳng, mà căng thẳng lại chính là rào cản lớn nhất.",
      },
      {
        title: "Tự tìm hiểu cơ thể mình trước",
        detail:
          "Biết mình thích gì là điều kiện để nói cho người khác biết. Đây là bước nhiều người bỏ qua.",
      },
      {
        title: "Nói cụ thể với bạn đời",
        detail:
          "Chỉ dẫn cụ thể hữu ích hơn nhiều so với mong người kia tự đoán. Không ai đọc được suy nghĩ.",
      },
      {
        title: "Xem lại yếu tố sức khỏe",
        detail:
          "Một số thuốc, thay đổi nội tiết và bệnh lý có ảnh hưởng. Kéo dài thì nên hỏi bác sĩ phụ khoa.",
      },
      {
        title: "Cân nhắc chuyên gia tâm lý",
        detail:
          "Nếu có trải nghiệm cũ khó khăn hoặc cảm giác tội lỗi liên quan tới chuyện này, chuyên gia có thể giúp.",
      },
    ],
    notes: [
      "Không có chuẩn nào về tần suất hay cách thức. Thoải mái mới là tiêu chí, không phải thành tích.",
      "Đau khi quan hệ là chuyện khác và cần đi khám — không nên chịu đựng.",
    ],
    faq: [
      {
        q: "Có phải do bạn đời không đủ giỏi?",
        a: "Không nên quy về một phía. Đây thường là chuyện của giao tiếp giữa hai người và của việc mỗi bên hiểu cơ thể mình tới đâu.",
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
    readTimeMinutes: 2,
    quickAnswer:
      "Cấu tạo cơ thể nữ khiến nhiễm trùng tiểu dễ xảy ra hơn, nhất là sau quan hệ. Thói quen giúp giảm nguy cơ: đi tiểu ngay sau khi quan hệ, uống đủ nước, vệ sinh nhẹ nhàng và lau từ trước ra sau. Đã có triệu chứng thì phải đi khám để dùng thuốc đúng, không tự mua kháng sinh.",
    prepare: [
      "Chai nước để uống đủ trong ngày",
      "Ghi lại triệu chứng: tiểu buốt, tiểu rắt, đau bụng dưới, có sốt không",
      "Biết cơ sở y tế gần nhất",
    ],
    steps: [
      {
        title: "Đi tiểu ngay sau khi quan hệ",
        detail: "Việc nhỏ nhưng được nhiều tài liệu y tế nhắc tới như biện pháp đơn giản hữu ích.",
      },
      { title: "Uống đủ nước trong ngày", detail: "Giúp đường tiểu được làm sạch thường xuyên hơn." },
      {
        title: "Lau từ trước ra sau",
        detail: "Thói quen nhỏ này giảm nguy cơ đưa vi khuẩn từ vùng hậu môn sang đường tiểu.",
      },
      {
        title: "Có triệu chứng thì đi khám sớm",
        detail:
          "Đừng chờ tự khỏi. Nhiễm trùng tiểu lan lên thận là biến chứng nặng và hoàn toàn có thể tránh được.",
      },
    ],
    notes: [
      "ĐI KHÁM NGAY nếu kèm sốt, đau lưng vùng thận, nôn, hoặc tiểu ra máu.",
      "Không tự mua kháng sinh uống theo đơn cũ — dùng sai loại hoặc thiếu liệu trình khiến bệnh dai dẳng và kháng thuốc.",
      "Tái phát nhiều lần thì nói với bác sĩ để tìm nguyên nhân sâu hơn.",
    ],
    faq: [
      {
        q: "Có phải do bạn đời không sạch sẽ?",
        a: "Không hẳn. Đây chủ yếu liên quan tới cấu tạo cơ thể và vi khuẩn vốn có của chính bạn. Nhưng vệ sinh của cả hai vẫn quan trọng.",
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
    readTimeMinutes: 2,
    quickAnswer:
      "Thử vào buổi sáng sớm với nước tiểu đầu tiên trong ngày, và thử sau khi đã trễ kinh — thử quá sớm rất dễ ra âm tính giả. Đọc kết quả trong khung thời gian nhà sản xuất ghi trên bao bì; vệt mờ xuất hiện sau nhiều giờ không được tính.",
    prepare: [
      "Que thử mua ở nhà thuốc, kiểm tra hạn dùng",
      "Nhớ ngày đầu kỳ kinh gần nhất",
      "Đọc kỹ hướng dẫn trước khi mở que",
    ],
    steps: [
      {
        title: "Chọn thời điểm đúng",
        detail:
          "Sau khi trễ kinh và dùng nước tiểu đầu tiên buổi sáng cho kết quả đáng tin nhất.",
      },
      {
        title: "Làm theo đúng hướng dẫn",
        detail:
          "Thời gian nhúng và thời gian chờ khác nhau giữa các loại. Đọc bao bì thay vì làm theo trí nhớ.",
      },
      {
        title: "Đọc trong khung thời gian quy định",
        detail:
          "Đọc quá muộn có thể thấy vệt bay hơi và tưởng nhầm là dương tính.",
      },
      {
        title: "Âm tính nhưng vẫn trễ kinh thì thử lại",
        detail: "Thử lại sau vài ngày, hoặc đi khám để xét nghiệm chính xác hơn.",
      },
      {
        title: "Dương tính thì đi khám xác nhận",
        detail:
          "Cần cơ sở y tế xác nhận và kiểm tra vị trí thai, vì có những tình huống cần xử trí sớm.",
      },
    ],
    notes: [
      "Đau bụng dữ dội một bên, ra máu bất thường kèm chóng mặt: đi cấp cứu ngay, đây có thể là thai ngoài tử cung.",
      "Bài viết mô tả cách dùng chung; luôn ưu tiên hướng dẫn của nhà sản xuất trên bao bì.",
    ],
    faq: [
      {
        q: "Vạch mờ có tính là dương tính không?",
        a: "Vạch mờ xuất hiện trong khung thời gian quy định thường được tính, nhưng nên thử lại sau vài ngày và đi khám để xác nhận.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Ngoài mang thai, các nguyên nhân phổ biến gồm căng thẳng, thay đổi cân nặng nhanh, tập luyện cường độ cao, mất ngủ kéo dài, bệnh tuyến giáp, hội chứng buồng trứng đa nang, và tác dụng của một số thuốc. Trễ liên tục nhiều chu kỳ thì nên đi khám.",
    prepare: [
      "Que thử thai để loại trừ khả năng đầu tiên",
      "Ghi lại vài chu kỳ gần nhất",
      "Nhìn lại: có giảm cân nhanh, tập nặng, hay giai đoạn căng thẳng nào không",
    ],
    steps: [
      {
        title: "Loại trừ mang thai trước",
        detail: "Thử thai đúng cách để yên tâm rồi mới tính tiếp các khả năng khác.",
      },
      {
        title: "Rà soát yếu tố lối sống",
        detail:
          "Căng thẳng lớn, giảm cân nhanh, tập luyện quá sức và thiếu ngủ đều có thể làm chu kỳ xáo trộn.",
      },
      {
        title: "Xem lại thuốc đang dùng",
        detail: "Một số thuốc và biện pháp tránh thai ảnh hưởng tới chu kỳ.",
      },
      {
        title: "Đi khám nếu kéo dài",
        detail:
          "Trễ nhiều chu kỳ liên tiếp, hoặc kèm rậm lông, mụn nhiều, tăng cân khó kiểm soát thì nên khám nội tiết và phụ khoa.",
      },
    ],
    notes: [
      "Chu kỳ không đều kéo dài có thể ảnh hưởng tới khả năng có con sau này — đi khám sớm có lợi hơn là chờ.",
      "Bài viết không chẩn đoán; nguyên nhân phải do bác sĩ xác định.",
    ],
    faq: [
      {
        q: "Trễ bao nhiêu ngày thì cần lo?",
        a: "Trễ vài ngày và thỉnh thoảng xảy ra thì thường không đáng ngại. Trễ liên tục nhiều chu kỳ hoặc mất kinh vài tháng thì nên đi khám.",
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
    readTimeMinutes: 2,
    quickAnswer:
      "Đây hoàn toàn là lựa chọn cá nhân, không liên quan tới vệ sinh hay sức khỏe. Nếu làm, hãy chọn phương pháp phù hợp với da bạn, luôn dùng dụng cụ sạch, làm mềm da trước, và đừng làm khi da đang viêm hay tổn thương.",
    prepare: [
      "Dụng cụ sạch, dao cạo riêng chỉ dùng cho vùng này",
      "Kem hoặc gel làm mềm, không dùng xà phòng khô",
      "Thử sản phẩm mới ở vùng da nhỏ trước",
    ],
    steps: [
      {
        title: "Nhớ rằng đây là lựa chọn, không phải yêu cầu",
        detail:
          "Lông vùng kín có vai trò bảo vệ tự nhiên. Không cạo không có nghĩa là kém vệ sinh.",
      },
      {
        title: "Làm mềm da trước",
        detail: "Tắm nước ấm vài phút giúp da và lông mềm, giảm xước khi cạo.",
      },
      {
        title: "Cạo xuôi chiều lông mọc",
        detail:
          "Cạo ngược cho sát hơn nhưng dễ gây lông mọc ngược và viêm nang lông.",
      },
      {
        title: "Dưỡng ẩm nhẹ sau đó",
        detail: "Chọn loại không hương liệu. Tránh mặc đồ bó ngay sau khi làm.",
      },
      {
        title: "Đi tiệm thì kiểm tra vệ sinh",
        detail:
          "Dụng cụ dùng một lần, sáp không dùng lại cho nhiều khách. Đây là nơi dễ lây nhiễm nếu làm ẩu.",
      },
    ],
    notes: [
      "Đỏ, mưng mủ, đau tăng dần sau khi làm: đi khám, có thể đã nhiễm trùng.",
      "Đang có vết thương, viêm da hoặc mụn nhọt ở vùng đó thì đừng làm.",
    ],
    faq: [
      {
        q: "Cạo có làm lông mọc lại dày hơn không?",
        a: "Không. Lông mọc lại có đầu cắt ngang nên cảm giác cứng hơn, chứ số lượng và độ dày không đổi.",
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
    readTimeMinutes: 2,
    quickAnswer:
      "Nội tiết thay đổi trong suốt chu kỳ và kéo theo thay đổi về ham muốn, năng lượng và tâm trạng. Nhiều người thấy ham muốn tăng vào khoảng giữa chu kỳ. Đây là biến động sinh lý bình thường, không phải dấu hiệu bạn có vấn đề hay hết yêu.",
    prepare: [
      "Ứng dụng theo dõi chu kỳ hoặc ghi chú đơn giản",
      "Kiên nhẫn theo dõi vài tháng mới thấy quy luật",
      "Sẵn sàng chia sẻ với bạn đời",
    ],
    steps: [
      {
        title: "Ghi lại cùng với chu kỳ",
        detail: "Mỗi ngày một chữ: cao, bình thường, thấp. Sau vài tháng bạn sẽ thấy quy luật riêng.",
      },
      {
        title: "Nhận ra yếu tố ngoài nội tiết",
        detail: "Thiếu ngủ, căng thẳng, mâu thuẫn trong quan hệ ảnh hưởng mạnh không kém.",
      },
      {
        title: "Chia sẻ với bạn đời",
        detail:
          "Biết trước quy luật giúp cả hai bớt hiểu lầm và bớt tự ái vào những ngày thấp.",
      },
      {
        title: "Đi khám nếu thay đổi đột ngột và kéo dài",
        detail:
          "Mất ham muốn hẳn trong nhiều tháng, nhất là khi kèm mệt mỏi hay rối loạn chu kỳ, thì nên kiểm tra nội tiết.",
      },
    ],
    notes: [
      "Biện pháp tránh thai nội tiết có thể ảnh hưởng tới ham muốn ở một số người — nói với bác sĩ nếu bạn nhận thấy điều đó.",
      "Không có mức ham muốn nào là chuẩn. So sánh với người khác không có ý nghĩa gì.",
    ],
    faq: [
      {
        q: "Ham muốn thấp hơn bạn đời có phải vấn đề không?",
        a: "Chênh lệch là chuyện rất phổ biến. Vấn đề chỉ nảy sinh khi hai người không nói được với nhau về điều đó.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Thay đổi tâm trạng, dễ cáu, mệt và thèm ăn trước kỳ kinh là chuyện phổ biến do nội tiết dao động. Nhưng nếu tâm trạng xuống tới mức ảnh hưởng công việc và các mối quan hệ mỗi tháng, đó có thể là tình trạng nặng hơn cần bác sĩ đánh giá.",
    prepare: [
      "Ghi lại tâm trạng theo ngày trong 2-3 chu kỳ",
      "Ghi cả tác động: có phải nghỉ làm, có cãi nhau, có mất ngủ không",
      "Mang ghi chép này đi khám nếu cần",
    ],
    steps: [
      {
        title: "Theo dõi để thấy quy luật",
        detail:
          "Ghi mỗi ngày một dòng. Nhìn thấy quy luật giúp bạn bớt nghĩ là do tính cách mình có vấn đề.",
      },
      {
        title: "Chuẩn bị trước cho những ngày khó",
        detail:
          "Giảm lịch hẹn căng thẳng, ngủ sớm hơn, báo trước cho người thân nếu cần.",
      },
      {
        title: "Chăm phần cơ bản",
        detail:
          "Ngủ đủ, vận động nhẹ, ăn đều. Nghe đơn giản nhưng tác động rõ với nhiều người.",
      },
      {
        title: "Đi khám nếu nặng",
        detail:
          "Buồn bã sâu, lo âu nhiều, dễ bùng nổ tới mức ảnh hưởng cuộc sống mỗi tháng là lý do chính đáng để gặp bác sĩ.",
      },
    ],
    notes: [
      "Có ý nghĩ làm hại bản thân: tìm hỗ trợ ngay, nói với người thân và tới cơ sở y tế.",
      "Bài viết không chẩn đoán và không nêu tên thuốc.",
    ],
    faq: [
      {
        q: "Nói với người khác họ có cho là mình viện cớ không?",
        a: "Đây là hiện tượng sinh lý đã được y học ghi nhận. Bạn không cần chứng minh gì cả, và người thật sự quan tâm sẽ hiểu.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Thời điểm an toàn về mặt y tế do bác sĩ xác định ở lần tái khám sau sinh. Nhưng sẵn sàng về mặt cảm xúc là chuyện khác và thường lâu hơn. Cả hai yếu tố đều quan trọng, và không ai có quyền thúc ép bạn.",
    prepare: [
      "Đi tái khám sau sinh theo lịch hẹn",
      "Chuẩn bị nói chuyện thật với bạn đời",
      "Biết rằng cần thêm thời gian là hoàn toàn bình thường",
    ],
    steps: [
      {
        title: "Hỏi bác sĩ ở lần tái khám",
        detail:
          "Bác sĩ đánh giá vết thương, tình trạng hồi phục và tư vấn cả biện pháp tránh thai phù hợp giai đoạn này.",
      },
      {
        title: "Đừng bỏ qua chuyện tránh thai",
        detail:
          "Cho con bú không phải biện pháp tránh thai đáng tin cậy. Hỏi bác sĩ về lựa chọn phù hợp khi đang cho bú.",
      },
      {
        title: "Chuẩn bị cho việc khô và đau",
        detail:
          "Thay đổi nội tiết sau sinh và khi cho con bú thường gây khô. Chất bôi trơn gốc nước giúp ích, và đau kéo dài thì phải nói với bác sĩ.",
      },
      {
        title: "Nói thật với bạn đời",
        detail:
          "Mệt, thiếu ngủ, thay đổi cảm nhận về cơ thể đều là lý do chính đáng. Người đồng hành thật sự sẽ chờ được.",
      },
      {
        title: "Chú ý tới tâm trạng của mình",
        detail:
          "Buồn bã kéo dài, khóc nhiều, mất hứng thú với mọi thứ sau sinh cần được bác sĩ đánh giá.",
      },
    ],
    notes: [
      "Ra máu bất thường, sốt, đau tăng dần, dịch có mùi hôi sau sinh: đi khám ngay.",
      "Bị ép buộc khi bạn chưa sẵn sàng là điều không chấp nhận được, kể cả trong hôn nhân.",
    ],
    faq: [
      {
        q: "Mấy tháng chưa muốn thì có bất thường không?",
        a: "Không. Rất nhiều người cần vài tháng hoặc lâu hơn. Điều quan trọng là hai người nói được với nhau về việc đó.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tien-man-kinh-som-dau-hieu",
    title: "Tiền mãn kinh sớm: dấu hiệu nên biết",
    excerpt:
      "Nhiều người nghĩ chuyện này chỉ tới ở tuổi năm mươi. Thực tế có thể bắt đầu sớm hơn nhiều và dễ bị nhầm với stress.",
    readTimeMinutes: 3,
    quickAnswer:
      "Dấu hiệu thường gặp: chu kỳ thay đổi bất thường, bốc hoả, đổ mồ hôi đêm, khó ngủ, khô, thay đổi tâm trạng và giảm ham muốn. Xuất hiện sớm hơn tuổi thông thường thì nên đi khám để loại trừ các nguyên nhân khác và được tư vấn hướng xử lý.",
    prepare: [
      "Ghi lại chu kỳ và triệu chứng vài tháng",
      "Tiền sử gia đình: mẹ hoặc chị em mãn kinh ở tuổi nào",
      "Danh sách thuốc đang dùng",
    ],
    steps: [
      {
        title: "Theo dõi chu kỳ và triệu chứng",
        detail:
          "Chu kỳ ngắn lại, dài ra hoặc thất thường là dấu hiệu sớm thường gặp nhất.",
      },
      {
        title: "Đừng mặc định là do stress",
        detail:
          "Triệu chứng rất giống nhau, đó là lý do nhiều người bỏ qua nhiều năm. Đi khám để phân biệt.",
      },
      {
        title: "Khám và làm xét nghiệm theo chỉ định",
        detail:
          "Bác sĩ có thể cho xét nghiệm nội tiết và tuyến giáp để phân biệt các nguyên nhân.",
      },
      {
        title: "Hỏi về các hướng hỗ trợ",
        detail:
          "Có nhiều cách hỗ trợ triệu chứng, từ điều chỉnh lối sống tới các phương án y tế. Bác sĩ sẽ tư vấn theo trường hợp của bạn.",
      },
      {
        title: "Chăm xương và tim mạch từ sớm",
        detail:
          "Đây là giai đoạn nên chú ý vận động, dinh dưỡng và khám sức khỏe định kỳ.",
      },
    ],
    notes: [
      "Ra máu bất thường giữa kỳ hoặc sau khi đã mãn kinh: đi khám ngay, không chờ.",
      "Không tự dùng liệu pháp nội tiết hay thực phẩm chức năng nội tiết — phải có chỉ định và theo dõi của bác sĩ.",
    ],
    faq: [
      {
        q: "Còn trẻ mà có triệu chứng thì sao?",
        a: "Nên đi khám sớm. Suy buồng trứng sớm là tình trạng có thật, và phát hiện sớm giúp có hướng xử lý phù hợp.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Nói ngoài lúc thân mật, dùng câu bắt đầu bằng mình thay vì bạn, nói cụ thể điều bạn thích thay vì chỉ nói điều bạn không thích, và hỏi lại phía bên kia. Bắt đầu bằng một điều tích cực giúp cuộc trò chuyện không biến thành buổi phê bình.",
    prepare: [
      "Biết rõ điều bạn muốn — nếu chưa rõ thì tự tìm hiểu cơ thể mình trước",
      "Chọn lúc cả hai thoải mái, không phải lúc vừa xong hoặc đang giận",
      "Chuẩn bị tinh thần nghe điều họ muốn nói",
    ],
    steps: [
      {
        title: "Chọn thời điểm ngoài phòng ngủ",
        detail:
          "Nói lúc đang trong tình huống dễ khiến người kia thấy bị chê ngay tại chỗ.",
      },
      {
        title: "Bắt đầu bằng điều tích cực",
        detail:
          "Mình rất thích khi anh làm điều này, và mình muốn thử thêm... — cách mở đầu này dễ nghe hơn nhiều.",
      },
      {
        title: "Nói cụ thể, không nói chung chung",
        detail:
          "Chậm hơn một chút, nhẹ hơn một chút là chỉ dẫn dùng được. Anh chẳng hiểu gì cả thì không.",
      },
      {
        title: "Hỏi lại họ",
        detail: "Còn anh, có điều gì anh muốn mà chưa nói không. Trò chuyện hai chiều mới bền.",
      },
      {
        title: "Chấp nhận cần vài lần",
        detail: "Một cuộc nói chuyện không đổi được thói quen nhiều năm. Nhắc lại nhẹ nhàng.",
      },
    ],
    notes: [
      "Nếu mỗi lần bạn nói điều mình muốn đều bị giận dỗi hoặc chế nhạo, đó là vấn đề của mối quan hệ chứ không phải cách bạn nói.",
      "Không ai có nghĩa vụ làm điều mình không thoải mái — điều này đúng với cả hai phía.",
    ],
    faq: [
      {
        q: "Sợ bạn đời tự ái thì sao?",
        a: "Cách mở đầu bằng điều tích cực và dùng câu bắt đầu bằng mình giảm hẳn nguy cơ đó. Còn tự ái tới mức không nói chuyện được thì đó là chuyện cần giải quyết ở tầng khác.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Tự ti về cơ thể ảnh hưởng trực tiếp tới sự thân mật vì tâm trí bạn đang bận theo dõi bản thân thay vì tận hưởng. Ba việc giúp ích: giảm tiếp xúc với nội dung khiến bạn so sánh, nói với bạn đời, và tìm hỗ trợ tâm lý nếu nó chiếm hết tâm trí.",
    prepare: [
      "Nhận ra bạn đang so với cái gì: ảnh chỉnh sửa hay người thật",
      "Sẵn sàng nói với bạn đời một câu ngắn",
      "Biết rằng có chuyên gia hỗ trợ mảng hình ảnh cơ thể",
    ],
    steps: [
      {
        title: "Xem lại nguồn so sánh",
        detail:
          "Bỏ theo dõi những tài khoản khiến bạn thấy tệ về bản thân. Đây là việc dễ làm mà hiệu quả nhanh.",
      },
      {
        title: "Gọi tên vòng lặp",
        detail:
          "Càng quan sát và phán xét bản thân trong lúc thân mật thì càng khó thoải mái. Nhận ra vòng lặp là bước đầu để bước ra.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Một câu đơn giản kiểu mình đang thấy ngại về cơ thể mình cũng đủ để họ hiểu và điều chỉnh.",
      },
      {
        title: "Điều chỉnh hoàn cảnh cho dễ chịu hơn",
        detail:
          "Ánh sáng dịu, mặc đồ bạn thấy tự tin — không có gì sai khi bắt đầu từ chỗ bạn thấy an toàn.",
      },
      {
        title: "Tìm chuyên gia nếu nó chiếm hết tâm trí",
        detail:
          "Ám ảnh về hình ảnh cơ thể là vấn đề tâm lý có thật và điều trị được, không phải chuyện phải tự vượt qua.",
      },
    ],
    notes: [
      "Nhịn ăn cực đoan hoặc tập luyện tới kiệt sức để thay đổi ngoại hình là dấu hiệu cần hỗ trợ chuyên môn.",
      "Người thật sự yêu quý bạn không dùng ngoại hình của bạn làm điều kiện.",
    ],
    faq: [
      {
        q: "Sau sinh cơ thể thay đổi nhiều thì sao?",
        a: "Đây là giai đoạn cực kỳ phổ biến để cảm thấy như vậy. Cho mình thời gian, và nói với bác sĩ nếu tâm trạng đi xuống kéo dài.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "nhan-ra-moi-quan-he-kiem-soat",
    title: "Nhận ra mối quan hệ kiểm soát",
    excerpt:
      "Nó hiếm khi bắt đầu bằng bạo lực. Thường bắt đầu bằng những thứ trông giống như quan tâm.",
    readTimeMinutes: 3,
    quickAnswer:
      "Dấu hiệu cần chú ý: kiểm soát tiền bạc, kiểm tra điện thoại, hạn chế bạn gặp gỡ gia đình bạn bè, ghen tuông cực đoan, hạ thấp bạn rồi bảo là đùa, ép buộc chuyện thân mật, và khiến bạn luôn phải xin lỗi. Nếu bạn đang phải cân nhắc từng lời để không làm họ nổi giận, đó là tín hiệu.",
    prepare: [
      "Giữ liên lạc với ít nhất một người bạn hoặc người thân bên ngoài mối quan hệ",
      "Biết mình có thể tới đâu nếu cần rời đi gấp",
      "Giữ giấy tờ tuỳ thân và một khoản tiền riêng ở nơi an toàn",
    ],
    steps: [
      {
        title: "Nhận diện dấu hiệu sớm",
        detail:
          "Kiểm soát thường được gói trong lớp vỏ quan tâm: anh chỉ lo cho em, anh ghen vì anh yêu em.",
      },
      {
        title: "Chú ý tới việc bị cô lập",
        detail:
          "Dần dần xa gia đình và bạn bè là bước đi phổ biến nhất, vì nó khiến bạn không còn ai để đối chiếu.",
      },
      {
        title: "Ghi lại sự việc",
        detail:
          "Ghi ngày tháng và chuyện gì đã xảy ra, lưu ở nơi họ không truy cập được. Hữu ích cho cả việc nhìn rõ vấn đề lẫn khi cần tới pháp lý.",
      },
      {
        title: "Nói với một người bên ngoài",
        detail:
          "Người ngoài cuộc thường nhìn ra điều mà bạn đã quen tới mức không thấy nữa.",
      },
      {
        title: "Chuẩn bị phương án an toàn",
        detail:
          "Nơi có thể tới, người có thể gọi, giấy tờ và tiền để sẵn. Chuẩn bị không có nghĩa là bạn phải đi ngay hôm nay.",
      },
    ],
    notes: [
      "Bị đe doạ hoặc bạo hành: gọi công an. Rời đi là giai đoạn nguy hiểm nhất, nên hãy có người biết kế hoạch của bạn.",
      "Ép buộc chuyện thân mật là xâm hại, kể cả trong hôn nhân.",
      "Không phải lỗi của bạn, và bạn không có nghĩa vụ phải sửa chữa họ.",
    ],
    faq: [
      {
        q: "Họ chỉ như vậy khi say, có tính không?",
        a: "Có. Rượu không tạo ra hành vi kiểm soát, nó chỉ bỏ đi lớp che. Lời hứa thay đổi cần đi kèm hành động thật và kéo dài.",
      },
      {
        q: "Tôi vẫn còn yêu thì sao?",
        a: "Yêu và bị tổn thương có thể tồn tại cùng lúc, và điều đó khiến mọi thứ khó hơn. Hãy nói chuyện với chuyên gia tâm lý hoặc người bạn tin để nhìn rõ hơn.",
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
    readTimeMinutes: 2,
    quickAnswer:
      "Bạn có quyền chọn bác sĩ nữ, có quyền yêu cầu người thứ ba ở trong phòng, có quyền hỏi trước mỗi thao tác và có quyền dừng lại. Không thấy thoải mái với một bác sĩ thì tìm người khác — đó là chuyện bình thường, không phải làm khó ai.",
    prepare: [
      "Hỏi bạn bè hoặc người thân giới thiệu",
      "Ghi sẵn câu hỏi ra giấy",
      "Nói rõ yêu cầu của bạn ngay khi đặt lịch",
    ],
    steps: [
      {
        title: "Nói yêu cầu ngay lúc đặt lịch",
        detail: "Muốn bác sĩ nữ hay muốn có người nhà vào cùng thì báo trước, đừng đợi tới lúc khám.",
      },
      {
        title: "Quan sát cách họ giao tiếp",
        detail:
          "Bác sĩ tốt sẽ giải thích trước khi làm, hỏi bạn có ổn không và không phán xét lựa chọn cá nhân của bạn.",
      },
      {
        title: "Đặt câu hỏi thoải mái",
        detail:
          "Không có câu hỏi nào ngớ ngẩn ở đây. Họ nghe những câu này mỗi ngày.",
      },
      {
        title: "Đổi nếu không phù hợp",
        detail:
          "Bị phán xét, bị vội vàng, không được giải thích — đủ lý do để tìm người khác. Sức khỏe của bạn quan trọng hơn phép lịch sự.",
      },
    ],
    notes: [
      "Bạn có quyền từ chối bất kỳ thao tác nào và yêu cầu dừng lại bất cứ lúc nào.",
      "Cảm giác an toàn khi khám không phải đòi hỏi quá đáng — đó là điều kiện để bạn duy trì việc khám định kỳ.",
    ],
    faq: [
      {
        q: "Đổi bác sĩ nhiều lần có sao không?",
        a: "Không sao. Chỉ nên mang theo hồ sơ và kết quả cũ để bác sĩ mới nắm được diễn tiến.",
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
    readTimeMinutes: 2,
    quickAnswer:
      "Hiểu cơ thể mình gồm hai phần: biết cấu tạo cơ bản và tên gọi đúng, và biết trạng thái bình thường của chính bạn để nhận ra khi có gì đổi khác. Đây là kiến thức sức khỏe cơ bản, không phải điều gì đáng ngại.",
    prepare: [
      "Một nguồn thông tin y tế đáng tin thay vì hội nhóm mạng xã hội",
      "Chỗ riêng tư và thời gian không vội",
      "Bỏ cảm giác đây là chuyện xấu hổ",
    ],
    steps: [
      {
        title: "Học tên gọi đúng",
        detail:
          "Dùng đúng từ giúp bạn mô tả chính xác với bác sĩ và không phải nói vòng vo khi đi khám.",
      },
      {
        title: "Biết trạng thái bình thường của bạn",
        detail:
          "Khí hư, chu kỳ, cảm giác — mỗi người một kiểu. Biết cái bình thường của mình là cách phát hiện bất thường sớm nhất.",
      },
      {
        title: "Ghi lại thay đổi",
        detail: "Vài dòng ghi chú mỗi tháng đủ để bạn thấy quy luật và mang đi khám khi cần.",
      },
      {
        title: "Hỏi bác sĩ những điều chưa rõ",
        detail:
          "Đây là câu hỏi sức khỏe bình thường. Bác sĩ phụ khoa trả lời những câu này hằng ngày.",
      },
    ],
    notes: [
      "Thông tin trên mạng xã hội rất nhiều nhưng chất lượng không đồng đều — ưu tiên nguồn từ cơ sở y tế.",
      "Bài viết mang tính kiến thức sức khỏe chung, không thay thế thăm khám.",
    ],
    faq: [
      {
        q: "Tìm hiểu cơ thể mình có bình thường không?",
        a: "Hoàn toàn bình thường và có ích cho sức khỏe. Đây là kiến thức cơ bản mà nhiều người không được dạy từ nhỏ.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Đồng thuận phải là tự nguyện, rõ ràng và có thể rút lại bất cứ lúc nào. Im lặng không phải đồng ý, đồng ý lần trước không phải đồng ý mãi mãi, và đồng ý một việc không phải đồng ý mọi việc. Bạn không nợ ai sự thân mật vì bất kỳ lý do nào.",
    prepare: [
      "Biết rõ ranh giới của chính mình",
      "Vài câu từ chối ngắn để dùng khi cần",
      "Một người bạn tin để nói chuyện khi có sự việc",
    ],
    steps: [
      {
        title: "Nhớ ba nguyên tắc",
        detail:
          "Tự nguyện, rõ ràng, rút lại được. Thiếu một trong ba thì không còn là đồng thuận.",
      },
      {
        title: "Biết mình không nợ ai điều gì",
        detail:
          "Được mời ăn, được tặng quà, đang trong mối quan hệ, đã kết hôn — không điều nào tạo ra nghĩa vụ.",
      },
      {
        title: "Từ chối không cần giải thích dài",
        detail:
          "Mình không muốn là một câu hoàn chỉnh. Không cần lý do, không cần xin lỗi.",
      },
      {
        title: "Chú ý dấu hiệu ép buộc mềm",
        detail:
          "Giận dỗi, dằn vặt, doạ chia tay, nhắc chuyện tiền bạc — đây đều là ép buộc dù không có bạo lực.",
      },
      {
        title: "Nếu đã có chuyện xảy ra",
        detail:
          "Không phải lỗi của bạn. Tìm hỗ trợ y tế nếu cần vì một số biện pháp dự phòng có giới hạn thời gian, và bạn có quyền trình báo.",
      },
    ],
    notes: [
      "Rượu và chất kích thích làm mất khả năng đồng thuận — người lợi dụng điều đó là người có lỗi, không phải bạn.",
      "Xâm hại trong hôn nhân vẫn là xâm hại.",
      "Phản ứng đông cứng, không chống cự được là phản ứng tự nhiên của cơ thể và không đồng nghĩa với đồng ý.",
    ],
    faq: [
      {
        q: "Đã đồng ý rồi mà đổi ý giữa chừng có được không?",
        a: "Được, bất cứ lúc nào. Người tôn trọng bạn sẽ dừng lại ngay mà không hỏi vặn.",
      },
    ],
    sources: [],
  },
];
