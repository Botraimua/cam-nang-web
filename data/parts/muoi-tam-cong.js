// Phần 18+ — chuyện tế nhị và sức khỏe giới tính cho người lớn.
//
// ❗ NGUYÊN TẮC KHI VIẾT / SỬA NHÓM BÀI NÀY:
//    1. Nói thẳng và bình thản, không phán xét, không câu view.
//    2. Chỉ hướng dẫn quy trình, cách giao tiếp và cách tiếp cận dịch vụ y tế.
//       KHÔNG mô tả chi tiết nhạy cảm, KHÔNG kê tên thuốc hay liều dùng.
//    3. Mọi bài đều phải nhắc: đây không phải tư vấn y khoa, hãy hỏi bác sĩ.
//    4. Nhóm này không hiện trong lượt xem mặc định ở trang chủ.
//    5. Số bước không giới hạn — ưu tiên đủ chi tiết để người đọc làm theo được.

export const muoiTamCong = [
  {
    slug: "di-kham-phu-khoa-lan-dau",
    title: "Đi khám phụ khoa lần đầu",
    excerpt:
      "Nỗi sợ lớn nhất thường là sợ cái mình không biết. Đây là toàn bộ những gì sẽ xảy ra, theo đúng thứ tự.",
    readTimeMinutes: 5,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đặt lịch ở bệnh viện sản phụ khoa hoặc phòng khám có giấy phép, tránh những ngày đang hành kinh nếu không phải việc gấp, mặc đồ dễ thay. Bác sĩ sẽ hỏi bệnh sử rồi khám ở mức cần thiết cho trường hợp của bạn. Nhớ hai điều quan trọng nhất: bạn có quyền hỏi rõ từng bước, và bạn có quyền từ chối bất kỳ thao tác nào.",
    prepare: [
      "Nhớ ngày đầu của kỳ kinh gần nhất và chu kỳ thường dài bao nhiêu ngày — bác sĩ luôn hỏi câu này đầu tiên",
      "Danh sách thuốc đang dùng, kể cả thuốc tránh thai và thực phẩm chức năng",
      "Tiền sử dị ứng thuốc nếu có",
      "Ghi sẵn câu hỏi ra giấy hoặc note điện thoại — vào phòng khám rất dễ quên sạch",
      "Mặc váy hoặc quần rộng cho dễ thay đồ",
      "Rủ một người đi cùng nếu bạn thấy lo — hoàn toàn bình thường",
    ],
    steps: [
      {
        title: "Chọn nơi khám và đặt lịch",
        detail:
          "Bệnh viện sản phụ khoa, khoa sản của bệnh viện đa khoa, hoặc phòng khám có giấy phép rõ ràng. Muốn bác sĩ nữ thì nói ngay lúc đặt lịch chứ đừng đợi tới nơi mới xin đổi.",
      },
      {
        title: "Chọn thời điểm hợp lý",
        detail:
          "Tránh những ngày đang hành kinh nếu không phải việc gấp, vì máu kinh có thể làm sai kết quả một số xét nghiệm. Sau khi sạch kinh vài ngày là khoảng đẹp.",
      },
      {
        title: "Chuẩn bị vệ sinh đúng cách trước khi đi",
        detail:
          "Rửa bên ngoài bằng nước sạch như bình thường. KHÔNG thụt rửa sâu, không dùng dung dịch mạnh và không đặt thuốc trong vài ngày trước — những thứ này làm sai kết quả xét nghiệm.",
      },
      {
        title: "Làm thủ tục đăng ký",
        detail:
          "Đưa CCCD và thẻ BHYT nếu có. Ở quầy sẽ hỏi bạn khám gì — cứ nói ngắn gọn: em đi khám phụ khoa định kỳ, hoặc em bị ngứa mấy hôm nay ạ.",
      },
      {
        title: "Phần hỏi bệnh sử — trả lời thật",
        detail:
          "Bác sĩ sẽ hỏi về kinh nguyệt, đã quan hệ chưa, biện pháp tránh thai đang dùng, đã sinh con chưa. Đây là câu hỏi chuyên môn để chọn cách khám phù hợp, không phải để phán xét. Trả lời thật thì mới khám đúng.",
      },
      {
        title: "Nói rõ nếu bạn chưa từng quan hệ",
        detail:
          "Đây là thông tin quan trọng nhất bạn cần chủ động nói ra. Bác sĩ sẽ chọn phương pháp thăm khám khác, thường là không xâm lấn.",
      },
      {
        title: "Trước khi khám, hỏi bác sĩ sắp làm gì",
        detail:
          "Một câu đơn giản: bác sĩ giải thích giúp em sắp làm gì với ạ. Biết trước thì cơ thể bớt căng, mà cơ thể bớt căng thì khám cũng nhẹ nhàng hơn.",
      },
      {
        title: "Trong lúc khám — thở đều và nói khi khó chịu",
        detail:
          "Thở chậm và sâu giúp cơ bụng giãn ra. Thấy đau thì nói ngay, đừng cắn răng chịu. Bạn có thể yêu cầu dừng lại bất cứ lúc nào.",
      },
      {
        title: "Yêu cầu có người thứ ba nếu bạn muốn",
        detail:
          "Bạn có quyền đề nghị một nhân viên y tế nữ hoặc người nhà ở trong phòng. Đây là quyền của người bệnh, không phải đòi hỏi phiền phức.",
      },
      {
        title: "Làm xét nghiệm nếu được chỉ định",
        detail:
          "Có thể lấy mẫu dịch, siêu âm, hoặc lấy mẫu tầm soát. Hỏi luôn chi phí và khi nào có kết quả trước khi làm.",
      },
      {
        title: "Hỏi cho hết thắc mắc trước khi rời phòng",
        detail:
          "Bốn câu nên hỏi: kết quả nghĩa là gì, có phải dùng thuốc không và dùng thế nào, bao lâu tái khám, dấu hiệu nào phải quay lại ngay.",
      },
      {
        title: "Giữ toàn bộ kết quả",
        detail:
          "Chụp ảnh lưu trong máy và giữ bản giấy. Lần khám sau bác sĩ cần đối chiếu, và nếu đổi bác sĩ thì đây là thứ đầu tiên họ hỏi.",
      },
    ],
    notes: [
      "Bài viết mô tả quy trình chung, không thay thế tư vấn của bác sĩ cho trường hợp cụ thể của bạn.",
      "ĐI KHÁM NGAY, đừng chờ hết ngại: ra máu bất thường ngoài kỳ kinh, đau bụng dưới dữ dội, sốt cao kèm đau bụng, ra máu sau quan hệ, hoặc ra máu sau khi đã mãn kinh.",
      "Bác sĩ tỏ thái độ phán xét về đời sống cá nhân của bạn là lý do chính đáng để đổi nơi khám. Cảm giác an toàn quyết định việc bạn có duy trì khám định kỳ hay không.",
      "Cẩn thận với phòng khám quảng cáo rầm rộ trên mạng, chẩn đoán nghe rất nặng rồi hối thúc đóng gói tiền lớn ngay trong buổi đầu.",
    ],
    faq: [
      {
        q: "Chưa quan hệ tình dục có khám phụ khoa được không?",
        a: "Được. Hãy nói rõ với bác sĩ ngay từ đầu để họ chọn phương pháp phù hợp, thường là siêu âm qua thành bụng hoặc thăm khám không xâm lấn.",
      },
      {
        q: "Khám có đau không?",
        a: "Phần lớn người mô tả là khó chịu chứ không đau. Căng thẳng làm cơ siết lại nên càng khó chịu hơn — thở sâu và báo bác sĩ nếu bạn thấy đau thật.",
      },
      {
        q: "Bao lâu nên khám một lần?",
        a: "Tần suất tuỳ độ tuổi, tình trạng sức khỏe và yếu tố nguy cơ. Hỏi bác sĩ khám cho bạn để có lịch phù hợp thay vì làm theo lời mách chung chung.",
      },
      {
        q: "Đi khám có bị lộ thông tin không?",
        a: "Cơ sở y tế có nghĩa vụ bảo mật hồ sơ người bệnh. Nếu lo, cứ hỏi thẳng về chính sách bảo mật ngay khi đăng ký.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-kham-nam-khoa-lan-dau",
    title: "Đi khám nam khoa lần đầu",
    excerpt:
      "Rất nhiều người ôm nỗi lo cả năm trời vì ngại. Buổi khám thực tế ngắn và kín đáo hơn bạn tưởng nhiều.",
    readTimeMinutes: 5,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đặt lịch ở khoa nam học hoặc tiết niệu của bệnh viện, hoặc phòng khám có giấy phép rõ ràng. Mô tả thẳng triệu chứng và thời điểm bắt đầu. Bác sĩ hỏi bệnh sử rồi khám, đôi khi kèm siêu âm hoặc xét nghiệm. Điều quan trọng nhất cần nhớ: hỏi giá TRƯỚC khi đồng ý làm bất kỳ dịch vụ nào.",
    prepare: [
      "Ghi lại triệu chứng: bắt đầu khi nào, tần suất, có gì làm nặng thêm hay đỡ hơn",
      "Danh sách thuốc và thực phẩm chức năng đang dùng",
      "Tiền sử: quai bị lúc nhỏ, chấn thương vùng bẹn, phẫu thuật, bệnh nền",
      "Câu hỏi viết sẵn — vào phòng khám hay quên",
      "Chuẩn bị tinh thần hỏi giá, đây là chỗ nhiều người ngại rồi thiệt",
    ],
    steps: [
      {
        title: "Chọn đúng chuyên khoa",
        detail:
          "Khoa nam học hoặc tiết niệu tại bệnh viện lớn là lựa chọn an toàn nhất. Tránh các phòng khám quảng cáo chữa dứt điểm, cam kết khỏi sau một liệu trình.",
      },
      {
        title: "Kiểm tra giấy phép của cơ sở",
        detail:
          "Phòng khám hợp pháp có biển hiệu ghi rõ tên, giấy phép hoạt động treo công khai và bảng giá niêm yết. Không thấy bảng giá là dấu hiệu đầu tiên nên cảnh giác.",
      },
      {
        title: "Đặt lịch và hỏi trước về chuẩn bị",
        detail:
          "Gọi hỏi: em cần nhịn ăn hay nhịn xuất tinh trước không ạ. Một số xét nghiệm có yêu cầu riêng, biết trước thì khỏi phải đi hai lần.",
      },
      {
        title: "Làm thủ tục và khai lý do khám",
        detail:
          "Đưa CCCD, thẻ BHYT nếu có. Nói ngắn gọn lý do — nhân viên tiếp nhận nghe những chuyện này mỗi ngày và không để tâm như bạn nghĩ.",
      },
      {
        title: "Nói thẳng vấn đề với bác sĩ",
        detail:
          "Nói vòng vo chỉ làm mất thời gian của cả hai và dễ chẩn đoán sai. Bác sĩ nam khoa nghe những chuyện này hằng ngày, không ai đánh giá bạn cả.",
      },
      {
        title: "Trả lời trung thực phần bệnh sử",
        detail:
          "Rượu bia, thuốc lá, giấc ngủ, mức độ căng thẳng, thuốc đang dùng — những thứ này ảnh hưởng trực tiếp tới chẩn đoán. Giấu là tự làm khó mình.",
      },
      {
        title: "Phần khám lâm sàng",
        detail:
          "Thường nhanh, bác sĩ quan sát và sờ nắn để đánh giá. Bạn có quyền hỏi trước từng thao tác và có quyền yêu cầu dừng lại.",
      },
      {
        title: "HỎI GIÁ trước khi đồng ý làm thêm",
        detail:
          "Trước mỗi siêu âm, xét nghiệm hay thủ thuật, hỏi rõ: cái này bao nhiêu tiền và vì sao cần làm ạ. Đây là quyền của bạn và là cách tự bảo vệ tốt nhất.",
      },
      {
        title: "Nhận diện dấu hiệu bị chặt chém",
        detail:
          "Bị hối thúc quyết định ngay, giá đội lên giữa chừng, chẩn đoán mơ hồ nghe rất nặng, đòi đóng gói tiền lớn trong buổi đầu — gặp mấy dấu hiệu này thì DỪNG LẠI, xin kết quả và đi nơi khác.",
      },
      {
        title: "Hỏi kỹ trước khi ra về",
        detail:
          "Chẩn đoán là gì, uống thuốc bao lâu, kiêng gì, khi nào tái khám, dấu hiệu nào phải quay lại ngay.",
      },
      {
        title: "Giữ toàn bộ kết quả và hoá đơn",
        detail:
          "Cần cho lần tái khám, và cần nếu bạn muốn đi khám nơi khác để xin ý kiến thứ hai.",
      },
    ],
    notes: [
      "Nội dung này mô tả quy trình chung, không phải chẩn đoán hay tư vấn điều trị.",
      "ĐI KHÁM NGAY TRONG NGÀY: đau dữ dội đột ngột vùng bìu, sưng nóng đỏ, sốt cao, tiểu ra máu, hoặc bí tiểu hoàn toàn.",
      "Đừng tự mua thuốc theo lời mách trên mạng — nhiều loại trôi nổi chứa chất cấm gây tụt huyết áp nguy hiểm, nhất là khi bạn đang dùng thuốc tim mạch.",
      "Muốn chắc chắn thì xin ý kiến thứ hai ở bệnh viện công. Chi phí khám thường thấp và bạn có cơ sở để so sánh.",
    ],
    faq: [
      {
        q: "Bác sĩ có kể chuyện của tôi cho ai không?",
        a: "Cơ sở y tế có nghĩa vụ bảo mật thông tin người bệnh. Nếu lo, cứ hỏi thẳng về chính sách bảo mật khi đăng ký.",
      },
      {
        q: "Khám nam khoa có phải cởi đồ không?",
        a: "Thường phải bộc lộ vùng cần khám trong thời gian ngắn, trong phòng riêng. Bạn có quyền hỏi trước và có quyền từ chối thao tác bạn chưa hiểu.",
      },
      {
        q: "Chi phí khoảng bao nhiêu?",
        a: "Rất khác nhau giữa bệnh viện công và phòng khám tư. Bệnh viện công thường rẻ hơn nhiều. Cứ hỏi bảng giá ngay khi tới quầy đăng ký.",
      },
      {
        q: "Đi một mình có ngại không?",
        a: "Hầu hết mọi người đi một mình và đó là chuyện bình thường. Nhân viên y tế làm việc này mỗi ngày, họ nhìn nó như một ca khám chứ không nhìn bạn.",
      },
    ],
    sources: [],
  },

  {
    slug: "xet-nghiem-benh-lay-qua-duong-tinh-duc",
    title: "Xét nghiệm bệnh lây qua đường tình dục",
    excerpt:
      "Nhiều bệnh không có triệu chứng gì cả — nghĩa là cảm thấy khoẻ không đồng nghĩa với an toàn. Đây là cách đi xét nghiệm cho đúng.",
    readTimeMinutes: 5,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Tới bệnh viện da liễu, khoa truyền nhiễm, trung tâm kiểm soát bệnh tật (CDC) tỉnh thành, hoặc phòng xét nghiệm có giấy phép, và nói bạn muốn tầm soát các bệnh lây qua đường tình dục. Nhân viên y tế sẽ tư vấn nên làm những xét nghiệm nào dựa trên tình huống của bạn. Điều quan trọng nhất: mỗi bệnh có một khoảng thời gian riêng mà xét nghiệm mới phát hiện được — nên phải hỏi kỹ về thời điểm.",
    prepare: [
      "Mốc thời gian: lần có nguy cơ gần nhất cách đây bao lâu — đây là thông tin quyết định",
      "Giấy tờ tuỳ thân (một số nơi yêu cầu khi đăng ký)",
      "Ít tiền hoặc thẻ — chi phí khác nhau nhiều tuỳ số lượng xét nghiệm",
      "Chuẩn bị tinh thần: đi xét nghiệm là hành động có trách nhiệm với mình và với bạn tình",
    ],
    steps: [
      {
        title: "Xác định mốc thời gian có nguy cơ",
        detail:
          "Ghi lại ngày cụ thể. Con số này quyết định bạn nên xét nghiệm gì và vào lúc nào — quan trọng hơn mọi thông tin khác bạn mang tới.",
      },
      {
        title: "Chọn cơ sở có giấy phép",
        detail:
          "Bệnh viện da liễu, khoa truyền nhiễm bệnh viện đa khoa, CDC tỉnh thành, hoặc hệ thống xét nghiệm lớn. Nhiều nơi có phòng tư vấn riêng và quy trình kín đáo.",
      },
      {
        title: "Nói rõ tình huống để được tư vấn đúng gói",
        detail:
          "Có nhiều loại xét nghiệm cho từng tác nhân khác nhau. Nhân viên y tế cần biết bối cảnh để chọn đúng, tránh làm thừa tốn tiền hoặc làm thiếu bỏ sót.",
      },
      {
        title: "Hỏi về cửa sổ thời gian của từng xét nghiệm",
        detail:
          "Câu bắt buộc phải hỏi: xét nghiệm này bao lâu sau phơi nhiễm thì có ý nghĩa ạ. Làm quá sớm có thể ra âm tính dù đã nhiễm — đây là hiểu lầm khiến nhiều người yên tâm nhầm.",
      },
      {
        title: "Hỏi chi phí trước khi làm",
        detail:
          "Gói tầm soát nhiều tác nhân có thể tốn kha khá. Hỏi bảng giá và chọn theo tư vấn chuyên môn chứ không chọn theo gói đắt nhất.",
      },
      {
        title: "Lấy mẫu",
        detail:
          "Tuỳ loại xét nghiệm mà lấy máu, nước tiểu hoặc dịch. Quá trình thường nhanh. Hỏi luôn khi nào có kết quả và lấy bằng cách nào.",
      },
      {
        title: "Nhận kết quả và nghe bác sĩ giải thích",
        detail:
          "Đừng tự đọc chỉ số rồi tự kết luận. Nhờ bác sĩ giải thích kể cả khi mọi thứ trông bình thường — có thể bạn vẫn cần làm lại sau một khoảng thời gian.",
      },
      {
        title: "Nếu cần, làm lại theo lịch hẹn",
        detail:
          "Một số trường hợp phải xét nghiệm lại sau vài tuần tới vài tháng mới đủ kết luận. Đặt nhắc trong điện thoại ngay để không quên.",
      },
      {
        title: "Nếu dương tính: điều trị sớm",
        detail:
          "Phần lớn các bệnh này điều trị được, và càng sớm càng đơn giản. Tuân thủ đủ liệu trình, đừng ngưng khi thấy hết triệu chứng.",
      },
      {
        title: "Báo cho bạn tình",
        detail:
          "Đây là phần khó nói nhất nhưng cần thiết, để họ đi kiểm tra và tránh lây qua lây lại. Nói ngắn gọn và không đổ lỗi: mình vừa xét nghiệm ra kết quả này, bạn nên đi kiểm tra nhé.",
      },
      {
        title: "Rà lại thói quen phòng ngừa",
        detail:
          "Dùng biện pháp bảo vệ đều đặn, và cân nhắc tầm soát định kỳ nếu bạn có yếu tố nguy cơ. Hỏi bác sĩ tần suất phù hợp với bạn.",
      },
    ],
    notes: [
      "Bài viết không thay thế tư vấn y tế. Việc chọn xét nghiệm nào phải do nhân viên y tế quyết định dựa trên tình huống cụ thể.",
      "Kết quả âm tính chỉ phản ánh thời điểm xét nghiệm, không phải giấy chứng nhận an toàn vĩnh viễn.",
      "Nếu vừa có nguy cơ với HIV trong vòng 72 giờ, hỏi ngay về thuốc dự phòng sau phơi nhiễm — thứ này có giới hạn thời gian rất ngắn.",
      "Cảnh giác với quảng cáo xét nghiệm giá rẻ bất thường hoặc cam kết chữa khỏi mọi thứ trong một liệu trình.",
    ],
    faq: [
      {
        q: "Không có triệu chứng thì cần xét nghiệm không?",
        a: "Nhiều bệnh lây qua đường tình dục diễn ra âm thầm không triệu chứng. Nếu có yếu tố nguy cơ thì vẫn nên kiểm tra — hỏi nhân viên y tế để biết trường hợp của bạn cần gì.",
      },
      {
        q: "Xét nghiệm có bị lộ thông tin không?",
        a: "Cơ sở y tế có nghĩa vụ bảo mật hồ sơ. Bạn có thể hỏi thẳng về quy trình bảo mật trước khi đăng ký, và nhiều nơi có dịch vụ tư vấn riêng tư.",
      },
      {
        q: "Bạn tình không chịu đi xét nghiệm thì sao?",
        a: "Bạn chỉ kiểm soát được phần của mình: điều trị đủ liệu trình và dùng biện pháp bảo vệ. Người từ chối quan tâm tới sức khỏe chung cũng là thông tin đáng để bạn suy nghĩ.",
      },
      {
        q: "Chi phí khoảng bao nhiêu?",
        a: "Rất khác nhau tuỳ số lượng và loại xét nghiệm. Cơ sở công lập thường rẻ hơn. Hỏi bảng giá và chọn theo tư vấn chuyên môn.",
      },
    ],
    sources: [
      {
        label: "Vinmec — Các xét nghiệm chẩn đoán bệnh lây truyền qua đường tình dục",
        url: "https://www.vinmec.com/vie/bai-viet/xet-nghiem-chan-doan-benh-lay-truyen-qua-duong-tinh-duc-vi",
      },
    ],
  },

  {
    slug: "tiem-vac-xin-hpv-ai-nen-tiem",
    title: "Tiêm vắc xin HPV: ai nên tiêm, tiêm ở đâu",
    excerpt:
      "Không chỉ dành cho nữ, và quá tuổi cũng chưa chắc đã hết cơ hội. Đây là ba câu cần hỏi trước khi đặt lịch.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Vắc xin HPV được chỉ định cho cả nam và nữ trong độ tuổi khoảng 9 đến 45. Từ năm 2026 vắc xin này bắt đầu vào chương trình tiêm chủng mở rộng, triển khai miễn phí cho trẻ em gái ở một số địa phương thí điểm; ngoài diện đó thì tiêm dịch vụ tại trung tâm tiêm chủng. Gọi hỏi trước ba câu: có vắc xin không, loại nào, và trường hợp của tôi tiêm mấy mũi.",
    prepare: [
      "Tuổi của bạn và tình trạng sức khỏe hiện tại",
      "Sổ tiêm chủng cũ nếu còn giữ — tránh tiêm trùng",
      "Ngân sách dự trù nếu tiêm dịch vụ, vì thường chia làm nhiều mũi",
      "Danh sách thuốc đang dùng và tiền sử dị ứng",
    ],
    steps: [
      {
        title: "Gọi hỏi trung tâm tiêm chủng gần nhà",
        detail:
          "Ba câu cần hỏi: có vắc xin HPV không, đang có loại nào, và với tuổi của tôi thì tiêm mấy mũi. Hỏi luôn tổng chi phí cho đủ phác đồ chứ đừng chỉ hỏi giá một mũi.",
      },
      {
        title: "Hỏi trạm y tế phường xã xem có thuộc diện miễn phí không",
        detail:
          "Chương trình mở rộng triển khai theo lộ trình và theo địa phương. Trạm y tế nơi bạn ở là chỗ nắm chính xác nhất, chính xác hơn thông tin trên mạng.",
      },
      {
        title: "Đặt lịch và sắp xếp thời gian cho cả phác đồ",
        detail:
          "Phác đồ nhiều mũi kéo dài vài tháng. Nhìn lịch công việc và lịch đi lại của bạn trước khi bắt đầu mũi đầu tiên.",
      },
      {
        title: "Khám sàng lọc trước tiêm",
        detail:
          "Báo rõ nếu bạn đang mang thai, dự định có thai, đang ốm sốt, đang dùng thuốc ức chế miễn dịch, hoặc có tiền sử dị ứng nặng.",
      },
      {
        title: "Tiêm mũi đầu và ở lại theo dõi",
        detail:
          "Ở lại đủ thời gian nhân viên y tế dặn, thường là 30 phút. Đây là quy định an toàn, đừng tiêm xong là về ngay.",
      },
      {
        title: "Đặt nhắc cho các mũi tiếp theo NGAY",
        detail:
          "Mở điện thoại đặt lịch nhắc ngay tại phòng tiêm, trước khi bạn rời khỏi đó. Đây là bước nhiều người bỏ qua rồi trễ mũi.",
      },
      {
        title: "Theo dõi phản ứng sau tiêm",
        detail:
          "Đau chỗ tiêm, hơi sốt nhẹ, mệt là phản ứng thường gặp và tự hết. Phản ứng nặng thì đi khám ngay.",
      },
      {
        title: "Hoàn thành đủ phác đồ",
        detail:
          "Tiêm nửa chừng rồi bỏ thì hiệu quả không như mong đợi. Trễ mũi thì đừng bỏ luôn — mang sổ tới hỏi để được hướng dẫn tiêm tiếp.",
      },
      {
        title: "Tiêm rồi vẫn giữ thói quen tầm soát",
        detail:
          "Vắc xin không thay thế việc khám và tầm soát định kỳ theo hướng dẫn của bác sĩ. Hai việc này bổ trợ cho nhau chứ không thay nhau.",
      },
    ],
    notes: [
      "Độ tuổi chỉ định, số mũi, giá và phạm vi miễn phí thay đổi theo thời điểm và địa phương — hỏi trực tiếp cơ sở tiêm chủng cho chắc.",
      "Bài viết không thay thế tư vấn y khoa; quyết định tiêm nên có ý kiến của nhân viên y tế.",
      "Đang mang thai thì thường hoãn tiêm — nói rõ với nhân viên y tế trước khi tiêm.",
      "Sốt cao khó hạ, khó thở, nổi mề đay lan rộng, choáng sau tiêm: tới cơ sở y tế ngay.",
    ],
    faq: [
      {
        q: "Nam giới có nên tiêm không?",
        a: "Bộ Y tế khuyến nghị tiêm cho cả nam và nữ. Hỏi cơ sở tiêm chủng để biết loại vắc xin phù hợp với bạn.",
      },
      {
        q: "Đã quan hệ tình dục rồi tiêm còn tác dụng không?",
        a: "Đây là câu nên hỏi bác sĩ vì phụ thuộc từng trường hợp. Đừng tự kết luận là quá muộn rồi bỏ luôn ý định.",
      },
      {
        q: "Tiêm xong bao lâu thì có tác dụng?",
        a: "Hiệu quả bảo vệ hình thành dần theo phác đồ. Hỏi cơ sở tiêm chủng về mốc cụ thể của loại vắc xin bạn tiêm.",
      },
      {
        q: "Chi phí có đắt không?",
        a: "Tiêm dịch vụ tính theo mũi và tổng phác đồ thường không nhỏ. Hỏi trạm y tế xem bạn có thuộc diện được hỗ trợ không trước khi quyết định.",
      },
    ],
    sources: [
      {
        label: "Thư viện pháp luật — Tiêm HPV miễn phí trong chương trình tiêm chủng mở rộng từ 2026",
        url: "https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/chinh-sach-moi/98439/tu-2026-vaccine-phong-virus-hpv-se-duoc-tiem-mien-phi-trong-chuong-trinh-tiem-chung-mo-rong",
      },
    ],
  },

  {
    slug: "mua-va-dung-bao-cao-su-dung-cach",
    title: "Mua và dùng bao cao su đúng cách",
    excerpt:
      "Ai cũng nghĩ mình biết dùng. Nhưng mấy lỗi phổ biến nhất lại nằm ở khâu bảo quản và khâu mở gói.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Mua ở nhà thuốc, siêu thị hoặc cửa hàng tiện lợi — hoặc đặt online nếu ngại. Bốn điều quyết định hiệu quả: còn hạn dùng, bảo quản nơi mát, mở gói bằng tay theo rãnh có sẵn, và dùng một cái mới cho mỗi lần. Cần chất bôi trơn thì chọn loại gốc nước, vì loại gốc dầu làm hỏng chất liệu.",
    prepare: [
      "Biết chỗ mua thuận tiện: nhà thuốc, siêu thị, cửa hàng tiện lợi, hoặc đặt online",
      "Chỗ cất khô mát trong nhà — không phải ví hay cốp xe",
      "Chất bôi trơn gốc nước nếu cần",
      "Kiểm tra hạn dùng in trên vỏ hộp và trên từng gói nhỏ",
    ],
    steps: [
      {
        title: "Mua ở nơi đáng tin",
        detail:
          "Nhà thuốc, siêu thị, cửa hàng tiện lợi hoặc trang bán hàng chính hãng. Tránh hàng trôi nổi giá rẻ bất thường vì chất lượng không đảm bảo.",
      },
      {
        title: "Ngại thì có cách mua không cần nói gì",
        detail:
          "Siêu thị và cửa hàng tiện lợi bày ở kệ tự chọn, chỉ việc lấy và ra quầy. Hoặc đặt online giao tận nhà. Người bán hàng gặp chuyện này mỗi ngày và không nhớ mặt bạn đâu.",
      },
      {
        title: "Chọn size cho vừa",
        detail:
          "Quá chật dễ rách, quá rộng dễ tuột — cả hai đều làm mất tác dụng. Nhiều hãng có ghi thông số trên hộp, thử vài loại để biết loại nào hợp.",
      },
      {
        title: "Kiểm tra hạn dùng và bao bì trước khi dùng",
        detail:
          "Gói phải còn nguyên vẹn và có hơi khí bên trong khi bóp nhẹ — đó là dấu hiệu gói chưa thủng. Gói rách, dẹp lép hoặc quá hạn thì bỏ, đừng tiếc.",
      },
      {
        title: "Bảo quản đúng chỗ",
        detail:
          "Nơi khô mát trong nhà. Để lâu trong ví hoặc cốp xe nóng làm chất liệu xuống cấp nhanh — đây là lỗi rất phổ biến mà ít ai để ý.",
      },
      {
        title: "Mở gói bằng tay theo rãnh có sẵn",
        detail:
          "Gạt sản phẩm sang một bên rồi xé theo rãnh. Dùng răng, kéo hay móng tay dài là nguyên nhân rách thường gặp nhất.",
      },
      {
        title: "Đeo trước khi có bất kỳ tiếp xúc nào",
        detail:
          "Không phải đợi tới phút cuối. Đeo đúng chiều — thấy khó lăn xuống thì thường là đang ngược, bỏ cái đó và dùng cái mới.",
      },
      {
        title: "Bóp đầu túi chứa để đẩy hết không khí",
        detail:
          "Khí kẹt lại là nguyên nhân bục thường gặp. Bóp nhẹ phần đầu trong lúc đeo là xong.",
      },
      {
        title: "Dùng chất bôi trơn đúng loại nếu cần",
        detail:
          "Gốc nước thì an toàn. Dầu ăn, kem dưỡng, vaseline làm hỏng chất liệu và gây rách — đây là hiểu lầm khá phổ biến.",
      },
      {
        title: "Một lần một cái, bỏ đúng chỗ",
        detail:
          "Không dùng lại, không dùng hai cái cùng lúc vì cọ vào nhau càng dễ rách. Bỏ vào thùng rác, đừng xả bồn cầu vì gây tắc.",
      },
      {
        title: "Nếu bị rách hoặc tuột",
        detail:
          "Đừng hoảng. Có những phương án dự phòng nhưng đều có giới hạn thời gian — hỏi dược sĩ hoặc tới cơ sở y tế càng sớm càng tốt, tính bằng giờ chứ không phải bằng ngày.",
      },
    ],
    notes: [
      "Không có biện pháp nào hiệu quả tuyệt đối. Dùng đúng cách thì hiệu quả cao hơn hẳn dùng qua loa.",
      "Đây là một trong số ít biện pháp vừa tránh thai vừa giảm nguy cơ lây bệnh qua đường tình dục.",
      "Sau sự cố mà lo lắng: đến cơ sở y tế hoặc hỏi dược sĩ ngay trong ngày, vì các phương án dự phòng đều tính theo giờ.",
      "Bài viết mang tính hướng dẫn chung, không thay thế tư vấn của nhân viên y tế.",
    ],
    faq: [
      {
        q: "Dùng hai cái cùng lúc cho chắc hơn không?",
        a: "Không. Hai lớp cọ vào nhau làm tăng nguy cơ rách. Dùng đúng một cái, đúng cách và đúng size.",
      },
      {
        q: "Bao cao su hết hạn dùng được không?",
        a: "Không. Chất liệu giòn đi theo thời gian và rất dễ rách. Bỏ và mua cái mới, giá không đáng gì so với rủi ro.",
      },
      {
        q: "Mua online có an toàn không?",
        a: "An toàn nếu mua ở trang chính hãng hoặc nhà thuốc trực tuyến có địa chỉ rõ ràng. Kiểm tra hạn dùng ngay khi nhận hàng.",
      },
      {
        q: "Bị dị ứng thì sao?",
        a: "Có loại làm từ chất liệu khác cho người dị ứng latex. Hỏi dược sĩ và đi khám nếu bạn từng bị ngứa, đỏ, rát sau khi dùng.",
      },
    ],
    sources: [],
  },

  {
    slug: "cac-bien-phap-tranh-thai-hieu-de-di-hoi-bac-si",
    title: "Các biện pháp tránh thai: hiểu để đi hỏi bác sĩ",
    excerpt:
      "Không có lựa chọn tốt nhất cho tất cả mọi người. Bài này giúp bạn biết hỏi bác sĩ đúng câu.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Các biện pháp chia thành vài nhóm: dùng theo từng lần, dùng đều mỗi ngày, loại đặt hoặc cấy có tác dụng dài, và biện pháp vĩnh viễn. Mỗi nhóm có ưu nhược điểm và chống chỉ định riêng phụ thuộc sức khỏe của bạn. Hãy chọn cùng bác sĩ chứ đừng chọn theo lời mách — thuốc hợp với bạn bè có thể chống chỉ định với bạn.",
    prepare: [
      "Tiền sử bệnh: huyết áp, tim mạch, đau nửa đầu, bệnh gan, rối loạn đông máu, tiểu đường",
      "Danh sách thuốc đang dùng kể cả thực phẩm chức năng",
      "Kế hoạch có con: bao lâu nữa bạn muốn sinh — câu này quyết định khá nhiều",
      "Thói quen thực tế của bạn: có nhớ uống thuốc mỗi ngày được không",
      "Ghi sẵn câu hỏi ra giấy",
    ],
    steps: [
      {
        title: "Biết các nhóm biện pháp đang tồn tại",
        detail:
          "Nhóm dùng theo từng lần, nhóm dùng đều mỗi ngày, nhóm đặt hoặc cấy có tác dụng kéo dài nhiều năm, và nhóm triệt sản. Chỉ cần biết chúng tồn tại để hỏi cho đúng.",
      },
      {
        title: "Tự trả lời ba câu trước khi đi khám",
        detail:
          "Bạn có nhớ uống thuốc mỗi ngày được không; bạn muốn có con trong bao lâu nữa; bạn có ngại thủ thuật không. Ba câu này giúp bác sĩ khoanh vùng rất nhanh.",
      },
      {
        title: "Chuẩn bị thông tin sức khỏe",
        detail:
          "Huyết áp cao, đau nửa đầu có tiền triệu, tiền sử huyết khối, đang cho con bú — những thứ này ảnh hưởng trực tiếp tới việc biện pháp nào an toàn cho bạn.",
      },
      {
        title: "Đi khám và hỏi thẳng ba câu chính",
        detail:
          "Với sức khỏe của tôi thì biện pháp nào phù hợp; tác dụng phụ thường gặp là gì; nếu muốn dừng thì bao lâu có thể có thai lại.",
      },
      {
        title: "Hỏi thêm về chi phí và tần suất theo dõi",
        detail:
          "Loại dùng hằng ngày rẻ mỗi tháng nhưng cộng dồn nhiều năm. Loại tác dụng dài tốn nhiều lúc đầu nhưng tính ra có khi rẻ hơn. Hỏi cả lịch tái khám.",
      },
      {
        title: "Hỏi phải làm gì khi lỡ quên hoặc sai lịch",
        detail:
          "Đây là câu rất thực tế mà ít người hỏi. Mỗi biện pháp có cách xử lý khác nhau khi lỡ quên — biết trước thì đỡ hoảng.",
      },
      {
        title: "Đừng dùng theo đơn của người khác",
        detail:
          "Cùng một loại có thể an toàn với người này nhưng nguy hiểm với người kia. Đây là nhóm thuốc bắt buộc phải có tư vấn dựa trên tiền sử của chính bạn.",
      },
      {
        title: "Theo dõi cơ thể trong vài tháng đầu",
        detail:
          "Ghi lại thay đổi về chu kỳ, tâm trạng, cân nặng, ham muốn. Nhiều tác dụng phụ giảm dần sau vài tháng, nhưng có thứ cần đổi biện pháp.",
      },
      {
        title: "Tái khám và nói thật nếu khó chịu",
        detail:
          "Có tác dụng phụ khó chịu thì quay lại nói với bác sĩ để đổi, đừng âm thầm bỏ ngang — bỏ ngang không báo là lý do phổ biến dẫn tới mang thai ngoài ý muốn.",
      },
      {
        title: "Nhớ phân biệt hai mục tiêu khác nhau",
        detail:
          "Tránh thai và phòng bệnh lây qua đường tình dục là hai chuyện khác nhau. Chỉ một số biện pháp làm được cả hai — hỏi bác sĩ để biết bạn có cần kết hợp không.",
      },
    ],
    notes: [
      "Bài viết KHÔNG khuyến nghị bất kỳ loại thuốc hay biện pháp cụ thể nào — mọi lựa chọn phải qua tư vấn y tế.",
      "Biện pháp khẩn cấp sau sự cố có giới hạn thời gian và không dùng thay cho biện pháp thường xuyên.",
      "Đau đầu dữ dội bất thường, đau ngực, khó thở, đau sưng một bên chân khi đang dùng biện pháp nội tiết: đi khám ngay.",
      "Đang cho con bú thì lựa chọn khác với bình thường — nói rõ với bác sĩ.",
    ],
    faq: [
      {
        q: "Mua thuốc ở nhà thuốc có cần đơn không?",
        a: "Tuỳ loại và quy định hiện hành. Dù mua được thì vẫn nên hỏi dược sĩ về tiền sử bệnh và thuốc bạn đang dùng.",
      },
      {
        q: "Bạn tôi dùng loại đó thấy ổn, tôi dùng theo được không?",
        a: "Không nên. Cùng một biện pháp có thể an toàn với người này nhưng chống chỉ định với người kia, nhất là khi bạn có bệnh nền.",
      },
      {
        q: "Dùng lâu dài có ảnh hưởng khả năng có con không?",
        a: "Đây là câu nên hỏi bác sĩ vì câu trả lời khác nhau theo từng biện pháp. Đừng lo theo tin đồn, hãy hỏi người có chuyên môn.",
      },
      {
        q: "Nam giới có lựa chọn nào không?",
        a: "Có, gồm biện pháp dùng theo lần và biện pháp triệt sản. Đây là chuyện của cả hai người nên tốt nhất là cùng đi tư vấn.",
      },
    ],
    sources: [],
  },

  {
    slug: "noi-chuyen-ve-ranh-gioi-va-dong-thuan",
    title: "Nói chuyện về ranh giới và sự đồng thuận",
    excerpt:
      "Chuyện khó mở lời nhất trong một mối quan hệ. Nhưng nói được rồi thì cả hai đều nhẹ đầu.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đồng thuận nghĩa là cả hai đều rõ ràng muốn, nói ra được, và có thể đổi ý bất cứ lúc nào. Im lặng không phải là đồng ý, và đồng ý lần trước không có nghĩa đồng ý mãi mãi. Chọn lúc bình thường mà nói chuyện, đừng đợi tới lúc đang trong tình huống hoặc đang căng thẳng.",
    prepare: [
      "Biết rõ ranh giới của chính mình: điều gì bạn thoải mái, điều gì không",
      "Chọn thời điểm cả hai tỉnh táo, không vội và không giận",
      "Tinh thần lắng nghe — đây là trò chuyện hai chiều, không phải bản yêu sách",
      "Chuẩn bị vài câu ngắn để dùng khi cần từ chối",
    ],
    steps: [
      {
        title: "Chọn đúng thời điểm và nơi chốn",
        detail:
          "Lúc đi dạo, lúc nấu ăn cùng nhau, lúc ngồi cà phê — những lúc bình thường dễ nói hơn nhiều so với lúc đang trong phòng ngủ.",
      },
      {
        title: "Mở đầu bằng lý do tích cực",
        detail:
          "Mình muốn nói chuyện này vì mình muốn cả hai đều thoải mái. Cách mở này khiến người kia không cảm thấy đang bị phê bình.",
      },
      {
        title: "Nói bằng câu bắt đầu bằng mình",
        detail:
          "Mình thấy chưa sẵn sàng chuyện này — thay vì anh cứ ép em. Cách nói này ít gây phòng thủ hơn hẳn.",
      },
      {
        title: "Nói cụ thể thay vì nói chung chung",
        detail:
          "Điều gì được, điều gì không, trong hoàn cảnh nào. Càng rõ càng đỡ hiểu lầm và đỡ phải nói lại nhiều lần.",
      },
      {
        title: "Hỏi lại phía bên kia",
        detail:
          "Còn bạn thì sao, có điều gì bạn không thoải mái mà chưa nói không. Nghe thật chứ đừng nghe cho có — đây là phần khiến cuộc trò chuyện thành hai chiều.",
      },
      {
        title: "Thống nhất cách dừng lại",
        detail:
          "Cả hai đồng ý rằng khi một người nói dừng thì dừng ngay, không hỏi vặn, không giận dỗi, không đòi giải thích.",
      },
      {
        title: "Nhận diện các kiểu ép buộc mềm",
        detail:
          "Giận dỗi, im lặng trừng phạt, doạ chia tay, nhắc chuyện tiền bạc, so sánh với người khác — đây đều là ép buộc dù không có bạo lực.",
      },
      {
        title: "Nhớ rằng rượu bia thay đổi mọi thứ",
        detail:
          "Người say không thể đưa ra đồng thuận rõ ràng. Đây không phải chi tiết phụ mà là điểm mấu chốt về mặt pháp lý lẫn đạo đức.",
      },
      {
        title: "Xem lại khi hoàn cảnh đổi",
        detail:
          "Ranh giới thay đổi theo thời gian, sức khoẻ và tâm trạng. Hỏi lại nhau là chuyện bình thường, không phải làm mất hứng.",
      },
      {
        title: "Quan sát phản ứng của người kia sau cuộc trò chuyện",
        detail:
          "Người tôn trọng bạn sẽ thấy nhẹ nhõm vì biết rõ hơn. Người nổi giận vì bạn đặt ranh giới đã cho bạn câu trả lời về mối quan hệ này.",
      },
    ],
    notes: [
      "Người tôn trọng bạn sẽ không dùng giận dỗi, đe doạ hay chuyện tiền bạc để ép bạn làm điều bạn không muốn. Đó là dấu hiệu của mối quan hệ không lành mạnh.",
      "Bị ép buộc hoặc xâm hại là chuyện nghiêm trọng và KHÔNG phải lỗi của bạn. Hãy tìm tới người thân đáng tin, cơ sở y tế hoặc cơ quan công an.",
      "Xâm hại trong hôn nhân vẫn là xâm hại — hôn nhân không tạo ra sự đồng thuận vĩnh viễn.",
      "Phản ứng đông cứng, không chống cự được là phản ứng tự nhiên của cơ thể trong tình huống sợ hãi, không đồng nghĩa với đồng ý.",
    ],
    faq: [
      {
        q: "Nói ra sợ người kia tự ái thì sao?",
        a: "Một người thật lòng quan tâm bạn sẽ thấy nhẹ nhõm vì biết rõ ranh giới. Nếu họ giận dữ vì bạn đặt ranh giới, đó chính là câu trả lời về mối quan hệ.",
      },
      {
        q: "Đang yêu lâu rồi có cần hỏi nữa không?",
        a: "Có. Mỗi lần là một lần, và cảm giác con người thay đổi theo ngày. Một câu ngắn thôi cũng đủ.",
      },
      {
        q: "Đã đồng ý rồi mà đổi ý giữa chừng có được không?",
        a: "Được, bất cứ lúc nào. Người tôn trọng bạn sẽ dừng lại ngay mà không hỏi vặn hay giận dỗi.",
      },
      {
        q: "Làm sao biết đối phương thật sự đồng ý?",
        a: "Hỏi thẳng và nghe câu trả lời rõ ràng. Im lặng, ngập ngừng, hay chỉ không phản đối đều không phải là đồng thuận.",
      },
    ],
    sources: [],
  },

  {
    slug: "theo-doi-chu-ky-kinh-nguyet-va-khi-nao-di-kham",
    title: "Theo dõi chu kỳ kinh nguyệt và khi nào đi khám",
    excerpt:
      "Ghi lại ba con số mỗi tháng là bạn có được thứ mà bác sĩ luôn hỏi mà chẳng mấy ai trả lời được.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Ghi ba thứ mỗi kỳ: ngày bắt đầu, số ngày ra máu, và mức độ đau hoặc lượng máu so với bình thường. Sau vài tháng bạn có bức tranh riêng của cơ thể mình — và đó chính là thứ bác sĩ cần khi bạn đi khám. Biết cái bình thường của mình là cách duy nhất để nhận ra cái bất thường.",
    prepare: [
      "Một ứng dụng theo dõi chu kỳ, hoặc đơn giản là ghi chú trong điện thoại",
      "Kiên nhẫn vài tháng — một kỳ đơn lẻ chưa nói lên điều gì",
      "Biết rằng chu kỳ mỗi người mỗi khác, không cần giống ai cả",
    ],
    steps: [
      {
        title: "Ghi ngày đầu tiên ra máu",
        detail:
          "Đây là mốc quan trọng nhất và cũng là con số bác sĩ luôn hỏi đầu tiên khi bạn đi khám bất kỳ chuyên khoa nào liên quan.",
      },
      {
        title: "Đếm số ngày ra máu",
        detail:
          "Từ ngày đầu tới ngày sạch hẳn. Ghi cả những ngày ra ít. Con số này thay đổi rõ là một dấu hiệu đáng chú ý.",
      },
      {
        title: "Đánh giá lượng máu theo cách đo được",
        detail:
          "Đếm số lần thay băng hoặc cốc trong ngày. Cách này khách quan hơn nhiều so với cảm giác nhiều hay ít.",
      },
      {
        title: "Chấm điểm mức đau từ 1 tới 10",
        detail:
          "Ghi thêm: có phải nghỉ làm không, có phải uống thuốc giảm đau không. Bác sĩ đánh giá dựa trên tác động lên cuộc sống chứ không chỉ dựa vào chữ đau.",
      },
      {
        title: "Ghi triệu chứng kèm theo",
        detail:
          "Đau đầu, buồn nôn, tiêu chảy, thay đổi tâm trạng rõ rệt, đau khi quan hệ. Những chi tiết này giúp bác sĩ nhìn ra bức tranh tổng thể.",
      },
      {
        title: "Ghi cả yếu tố bên ngoài",
        detail:
          "Giai đoạn căng thẳng, thay đổi cân nặng nhanh, tập luyện nặng, đổi thuốc — tất cả đều ảnh hưởng tới chu kỳ và giải thích được nhiều bất thường.",
      },
      {
        title: "Sau vài tháng, tính chu kỳ của bạn",
        detail:
          "Đếm từ ngày đầu kỳ này tới ngày đầu kỳ sau. Xem con số đó có ổn định không. Đây mới là lúc dữ liệu bắt đầu có giá trị.",
      },
      {
        title: "Mang dữ liệu đi khám",
        detail:
          "Đưa bác sĩ xem ghi chú vài tháng gần nhất. Hữu ích hơn rất nhiều so với việc ngồi cố nhớ lại tại chỗ.",
      },
      {
        title: "Đặt nhắc theo dõi định kỳ",
        detail:
          "Cùng với việc ghi chép, đặt lịch khám phụ khoa định kỳ theo hướng dẫn của bác sĩ. Ghi chép là để phát hiện sớm, khám là để xác định.",
      },
    ],
    notes: [
      "ĐI KHÁM khi: mất kinh nhiều kỳ liên tiếp mà không rõ lý do, ra máu nhiều bất thường, đau tới mức không sinh hoạt được, ra máu giữa kỳ hoặc sau quan hệ, hoặc chu kỳ thay đổi đột ngột so với thói quen của bạn.",
      "ĐI CẤP CỨU nếu: đau dữ dội kèm choáng, sốt cao, ra máu ồ ạt thấm ướt băng liên tục trong một giờ.",
      "Ra máu sau khi đã mãn kinh luôn cần đi khám, không có ngoại lệ.",
      "Bài viết không thay thế thăm khám; mọi bất thường nên được bác sĩ đánh giá trực tiếp.",
    ],
    faq: [
      {
        q: "Chu kỳ không đều có sao không?",
        a: "Có nhiều nguyên nhân từ nhẹ tới cần điều trị, gồm cả căng thẳng và thay đổi cân nặng. Ghi chép vài tháng rồi mang đi khám là cách tốt nhất để biết.",
      },
      {
        q: "Ứng dụng dự đoán ngày rụng trứng có chính xác không?",
        a: "Đó là ước lượng dựa trên chu kỳ trước, không phải kết quả đo lường. Tuyệt đối đừng dùng ứng dụng làm biện pháp tránh thai.",
      },
      {
        q: "Chu kỳ bao nhiêu ngày là bình thường?",
        a: "Khoảng dao động khá rộng và mỗi người mỗi khác. Quan trọng là chu kỳ của BẠN có ổn định hay không, chứ không phải so với con số chuẩn nào.",
      },
      {
        q: "Đang dùng biện pháp tránh thai nội tiết thì theo dõi thế nào?",
        a: "Vẫn ghi bình thường, và ghi rõ bạn đang dùng biện pháp gì. Nhiều biện pháp làm thay đổi chu kỳ — bác sĩ cần biết để đánh giá đúng.",
      },
    ],
    sources: [],
  },

  {
    slug: "bi-doa-tung-anh-nhay-cam-xu-ly-sao",
    title: "Bị tống tiền bằng ảnh nhạy cảm: xử lý sao",
    excerpt:
      "Đừng chuyển tiền. Đừng im lặng một mình. Đây là kịch bản có công thức, và bạn không phải người đầu tiên.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Ba việc làm ngay theo đúng thứ tự: KHÔNG chuyển tiền (trả rồi chúng sẽ đòi tiếp), chụp màn hình toàn bộ tin nhắn và thông tin tài khoản của kẻ đe doạ TRƯỚC khi chặn, rồi trình báo công an nơi bạn ở. Sau đó khoá quyền xem danh bạ trên mạng xã hội, đổi mật khẩu, và kể cho một người bạn tin tưởng.",
    prepare: [
      "Bình tĩnh — kẻ tống tiền sống nhờ việc bạn hoảng loạn và làm liều trong 10 phút đầu",
      "Điện thoại còn pin để chụp màn hình làm bằng chứng",
      "Một người bạn hoặc người thân để kể — đừng gánh một mình",
      "Địa chỉ công an phường/xã nơi bạn cư trú",
    ],
    steps: [
      {
        title: "Dừng lại, hít thở, đừng trả tiền",
        detail:
          "Trả một lần là chúng biết bạn sợ và sẽ đòi tiếp, lần sau nhiều hơn. Rất nhiều trường hợp đã trả xong vẫn bị doạ tiếp cho tới khi hết tiền.",
      },
      {
        title: "Đừng trả lời theo cảm xúc",
        detail:
          "Van xin, doạ lại, chửi bới đều cho chúng biết bạn đang hoảng. Im lặng và bắt đầu thu thập bằng chứng là phản ứng đúng nhất.",
      },
      {
        title: "Chụp màn hình TRƯỚC KHI chặn",
        detail:
          "Toàn bộ cuộc trò chuyện, tên tài khoản, ảnh đại diện, số tài khoản ngân hàng hoặc ví điện tử chúng đưa, đường link chúng gửi. Chặn trước khi chụp là mất sạch bằng chứng — đây là sai lầm phổ biến nhất.",
      },
      {
        title: "Lưu bằng chứng ra nơi khác",
        detail:
          "Gửi ảnh chụp màn hình sang email của chính bạn hoặc lưu vào máy tính. Phòng khi điện thoại hỏng hoặc bị mất.",
      },
      {
        title: "Trình báo công an",
        detail:
          "Đến công an phường/xã nơi bạn cư trú, mang theo bằng chứng. Đây là hành vi phạm tội và bạn là người bị hại, không phải người có lỗi.",
      },
      {
        title: "Khoá đường chúng tiếp cận người quen của bạn",
        detail:
          "Đổi danh sách bạn bè trên mạng xã hội sang chế độ riêng tư, ẩn danh sách bạn bè, hạn chế ai nhắn tin cho bạn. Chúng doạ tung cho người quen thì hãy làm khó việc đó.",
      },
      {
        title: "Đổi mật khẩu và bật xác thực hai lớp",
        detail:
          "Email, mạng xã hội, ngân hàng. Nếu chúng nói có mã độc trong máy bạn thì phần lớn là bịa, nhưng đổi mật khẩu vẫn là việc nên làm.",
      },
      {
        title: "Không bấm vào bất kỳ đường link nào chúng gửi",
        detail:
          "Link kiểm tra ảnh, link xem clip, file đính kèm — đây là cách phát tán mã độc để lấy thêm dữ liệu của bạn.",
      },
      {
        title: "Nói với một người bạn tin",
        detail:
          "Kẻ tống tiền mạnh nhất khi bạn giấu. Nói ra một câu thôi cũng làm nhẹ đi rất nhiều, và bạn có người tỉnh táo cùng xử lý.",
      },
      {
        title: "Nếu lỡ chuyển tiền rồi",
        detail:
          "Gọi ngay tổng đài ngân hàng đề nghị hỗ trợ khẩn và trình báo công an càng sớm càng tốt. Vẫn có cơ hội chặn dòng tiền nếu kịp thời.",
      },
      {
        title: "Chuẩn bị tinh thần cho khả năng xấu nhất",
        detail:
          "Nếu chúng thật sự phát tán, hãy nhớ: người phạm tội là chúng, không phải bạn. Nói trước với vài người thân thiết để họ hiểu chuyện, và tiếp tục làm việc với công an.",
      },
    ],
    notes: [
      "Rất nhiều vụ chỉ là doạ suông: chúng cắt ghép ảnh hoặc không hề có gì trong tay, chỉ đánh vào nỗi sợ của bạn.",
      "Chiêu quen thuộc: tài khoản giả mạo người xinh đẹp trên Facebook, Instagram, Telegram — làm quen, gợi chuyện riêng tư, rồi ghi hình.",
      "Chúng thường đòi chuyển bằng tiền điện tử vì khó truy vết. Thấy yêu cầu này gần như chắc chắn là lừa đảo.",
      "Nếu người bị hại dưới 18 tuổi: báo ngay cho người lớn tin cậy và công an. Đây là tội đặc biệt nghiêm trọng và có quy định bảo vệ riêng.",
    ],
    faq: [
      {
        q: "Tôi thấy xấu hổ quá, có nhất thiết phải báo công an không?",
        a: "Nên. Cán bộ tiếp nhận xử lý loại vụ này thường xuyên và họ nhìn nó như một vụ lừa đảo, không nhìn bạn. Im lặng chỉ khiến kẻ tống tiền tiếp tục với người khác.",
      },
      {
        q: "Chúng nói đã có danh bạ của tôi, có thật không?",
        a: "Có thể chúng chỉ nhìn thấy danh sách bạn bè công khai trên mạng xã hội. Chuyển tài khoản sang riêng tư là cắt được phần lớn đường tiếp cận này.",
      },
      {
        q: "Nếu ảnh đó là ảnh ghép thì sao?",
        a: "Vẫn là hành vi phạm pháp và vẫn nên trình báo. Ảnh ghép cũng gây tổn hại thật, và cơ quan chức năng có nghiệp vụ xác minh.",
      },
      {
        q: "Làm sao để không bị lần sau?",
        a: "Không gửi ảnh riêng tư cho người mới quen dù họ nói gì. Cảnh giác với tài khoản mới lập, ảnh quá hoàn hảo, và người vội vàng chuyển sang trò chuyện riêng tư.",
      },
    ],
    sources: [
      {
        label: "Pháp Luật TP.HCM — Chiêu lừa chat sex, gửi ảnh nhạy cảm tái diễn",
        url: "https://plo.vn/chieu-lua-chat-sex-gui-anh-nhay-cam-tai-dien-post838578.html",
      },
      {
        label: "ANTV — Thủ đoạn cắt ghép hình ảnh, video nhạy cảm để tống tiền",
        url: "https://antv.gov.vn/phap-luat-3/canh-giac-thu-doan-cat-ghep-hinh-anh-video-nhay-cam-de-tong-tien-AEE0F0AC1.html",
      },
    ],
  },

  {
    slug: "prep-va-pep-thuoc-du-phong-hiv",
    title: "PrEP và PEP: thuốc dự phòng HIV",
    excerpt:
      "Nhiều người chưa từng nghe tên hai thứ này, dù Việt Nam có chương trình cấp miễn phí. Một trong hai chỉ còn tác dụng trong 72 giờ.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "PrEP là thuốc uống TRƯỚC, dành cho người có nguy cơ cao, dùng đều đặn theo hướng dẫn. PEP là thuốc uống SAU khi đã có phơi nhiễm và phải bắt đầu càng sớm càng tốt, trong vòng 72 giờ. Cả hai đều phải do cơ sở y tế chỉ định. Nếu vừa có nguy cơ: đi ngay hôm nay, đừng ngồi tra mạng cả buổi.",
    prepare: [
      "Mốc thời gian: nguy cơ xảy ra cách đây bao lâu — quan trọng sống còn với PEP",
      "Danh sách thuốc đang dùng và bệnh nền nếu có",
      "Địa chỉ cơ sở y tế gần nhất có dịch vụ HIV",
      "Giấy tờ tuỳ thân",
    ],
    steps: [
      {
        title: "Nếu nguy cơ vừa xảy ra: đi NGAY trong ngày",
        detail:
          "PEP càng uống sớm càng có ý nghĩa và có giới hạn 72 giờ. Mỗi giờ trôi qua là hiệu quả giảm đi. Tới cơ sở y tế trước, hỏi sau.",
      },
      {
        title: "Tìm đúng nơi có dịch vụ",
        detail:
          "Phòng khám ngoại trú HIV, trung tâm kiểm soát bệnh tật (CDC) tỉnh thành, bệnh viện có khoa truyền nhiễm, hoặc các tổ chức cộng đồng có kết nối dịch vụ.",
      },
      {
        title: "Gọi trước nếu ngoài giờ hành chính",
        detail:
          "Hỏi xem nơi nào trực và có thuốc. Đừng chờ tới sáng hôm sau nếu đang trong khung 72 giờ — khoa cấp cứu bệnh viện lớn là phương án dự phòng.",
      },
      {
        title: "Nói thật tình huống của bạn",
        detail:
          "Chuyện gì đã xảy ra và khi nào. Nhân viên y tế cần thông tin này để chỉ định đúng. Họ làm việc này hằng ngày và có quy định bảo mật.",
      },
      {
        title: "Làm xét nghiệm ban đầu",
        detail:
          "Trước khi dùng thuốc cần xét nghiệm để biết tình trạng hiện tại. Đây là phần bắt buộc, không phải thủ tục cho có.",
      },
      {
        title: "Hỏi về chi phí và chương trình hỗ trợ",
        detail:
          "Việt Nam có chương trình cấp thuốc dự phòng miễn phí cho nhiều nhóm đối tượng. Cứ hỏi thẳng nơi tiếp nhận xem bạn có thuộc diện được hỗ trợ không.",
      },
      {
        title: "Uống đúng và đủ theo chỉ định",
        detail:
          "PEP thường phải uống liên tục một số ngày theo phác đồ. Uống nửa chừng rồi bỏ là mất tác dụng. Đặt nhắc trong điện thoại theo giờ cố định.",
      },
      {
        title: "Báo tác dụng phụ nếu có",
        detail:
          "Buồn nôn, mệt là phản ứng có thể gặp. Đừng tự bỏ thuốc — gọi cho cơ sở y tế để được hướng dẫn cách xử lý.",
      },
      {
        title: "Tái khám và xét nghiệm theo lịch",
        detail:
          "Cần làm lại xét nghiệm sau một khoảng thời gian mới đủ kết luận. Đặt nhắc ngay khi nhận lịch hẹn.",
      },
      {
        title: "Nếu bạn có nguy cơ lặp lại: hỏi về PrEP",
        detail:
          "PEP là giải pháp cho tình huống khẩn. Nếu bạn thuộc nhóm nguy cơ cao thường xuyên, hãy hỏi bác sĩ về PrEP để dự phòng lâu dài.",
      },
    ],
    notes: [
      "Đây là thuốc kê đơn, phải có chỉ định và theo dõi của nhân viên y tế — tuyệt đối không tự mua uống theo lời mách.",
      "Thuốc dự phòng HIV không phòng được các bệnh lây qua đường tình dục khác — vẫn cần biện pháp bảo vệ.",
      "PEP chỉ dành cho tình huống khẩn cấp, không phải biện pháp dùng thường xuyên.",
      "Bài viết chỉ giới thiệu để bạn biết mà đi hỏi, không phải hướng dẫn điều trị.",
    ],
    faq: [
      {
        q: "Uống PEP có nghĩa là tôi đã nhiễm HIV?",
        a: "Không. Đây là biện pháp dự phòng sau phơi nhiễm để giảm nguy cơ. Việc xác định tình trạng phải qua xét nghiệm theo lịch bác sĩ hẹn.",
      },
      {
        q: "Đi khám có bị lộ danh tính không?",
        a: "Cơ sở y tế có quy định bảo mật thông tin người bệnh. Nếu lo, cứ hỏi thẳng về quy trình bảo mật ngay khi đăng ký.",
      },
      {
        q: "Quá 72 giờ rồi thì sao?",
        a: "Vẫn nên đi khám và tư vấn. Bác sĩ sẽ hướng dẫn lịch xét nghiệm theo dõi phù hợp cho trường hợp của bạn.",
      },
      {
        q: "PrEP có phải uống suốt đời không?",
        a: "Không nhất thiết. Đây là dự phòng theo giai đoạn nguy cơ, và bác sĩ sẽ đánh giá cùng bạn. Hỏi trực tiếp nơi cung cấp dịch vụ.",
      },
    ],
    sources: [
      {
        label: "VietnamPlus — Việt Nam mở rộng dịch vụ dự phòng trước phơi nhiễm HIV (PrEP)",
        url: "https://en.vietnamplus.vn/vietnam-expands-pre-exposure-prophylaxis-prep-service-for-hiv-prevention-post182220.vnp",
      },
    ],
  },

  {
    slug: "dung-app-hen-ho-sao-cho-an-toan",
    title: "Dùng app hẹn hò sao cho an toàn",
    excerpt:
      "Gặp người lạ từ mạng là chuyện bình thường bây giờ. Vài quy tắc giúp buổi hẹn chỉ dừng ở mức vui hoặc chán, chứ không thành rắc rối.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Ba quy tắc vàng cho lần gặp đầu: hẹn ở chỗ đông người, tự đi tự về bằng phương tiện của mình, và báo cho một người bạn biết bạn đi đâu với ai. Không để đồ uống rời mắt, và tuyệt đối không chuyển tiền cho người mới quen dù lý do nghe thương tới đâu.",
    prepare: [
      "Bật chia sẻ vị trí trực tiếp cho một người bạn trong buổi hẹn",
      "Sạc đầy pin, chuẩn bị sẵn tiền hoặc app gọi xe để tự về",
      "Kiểm tra sơ tài khoản đối phương: ảnh có bị lấy từ nơi khác không, có mạng xã hội thật không",
      "Chọn sẵn quán quen hoặc quán đông người",
    ],
    steps: [
      {
        title: "Kiểm tra hồ sơ trước khi nhận lời",
        detail:
          "Tài khoản mới lập, ít ảnh, ảnh quá hoàn hảo như người mẫu, không có mạng xã hội nào khác — đây là nhóm dấu hiệu đáng ngờ.",
      },
      {
        title: "Tìm kiếm ngược ảnh của họ",
        detail:
          "Đưa ảnh vào công cụ tìm kiếm hình ảnh. Nếu ảnh xuất hiện dưới tên người khác ở nơi khác thì đó là tài khoản giả.",
      },
      {
        title: "Gọi video ngắn trước khi gặp",
        detail:
          "Hai phút thôi cũng loại bỏ được phần lớn tài khoản giả mạo. Người thật không ngại việc này. Ai liên tục viện cớ né gọi video thì nên cân nhắc.",
      },
      {
        title: "Nhắn tin trong app một thời gian trước khi chuyển sang số riêng",
        detail:
          "Vội chuyển sang ứng dụng nhắn tin riêng là chiêu quen của kẻ lừa đảo, vì ngoài app thì không còn cơ chế báo cáo.",
      },
      {
        title: "Chọn địa điểm công cộng, ban ngày càng tốt",
        detail:
          "Quán cà phê đông người cho lần đầu. Đừng để họ đón tận nhà, đừng tới nhà riêng, và đừng nhận lời đi xa ngay lần đầu.",
      },
      {
        title: "Báo lịch trình cho một người bạn",
        detail:
          "Gặp ai, ở đâu, mấy giờ về. Hẹn luôn một giờ để nhắn tin báo an toàn. Nghe hơi quá nhưng rất đáng, và cũng chỉ tốn một tin nhắn.",
      },
      {
        title: "Tự đi tự về",
        detail:
          "Chủ động phương tiện là chủ động thời điểm kết thúc. Đây là điều quan trọng nhất trong cả bài.",
      },
      {
        title: "Giữ đồ uống trong tầm mắt",
        detail:
          "Đi vệ sinh thì gọi ly mới khi quay lại. Thấy chóng mặt bất thường không giải thích được thì nhờ nhân viên quán giúp và về ngay.",
      },
      {
        title: "Cảnh giác tuyệt đối với chuyện tiền bạc",
        detail:
          "Người mới quen kể chuyện khó khăn rồi mượn tiền, hoặc rủ đầu tư sinh lời nhanh — đây là kịch bản lừa đảo cực phổ biến, không phải chuyện tình cảm.",
      },
      {
        title: "Không gửi ảnh riêng tư",
        detail:
          "Đây là nguyên liệu chính của các vụ tống tiền. Dù đã trò chuyện lâu và thấy tin tưởng, vẫn đừng gửi.",
      },
      {
        title: "Về sớm nếu thấy không ổn",
        detail:
          "Bạn không nợ ai một buổi tối. Không thoải mái thì về, không cần lý do và không cần lịch sự quá mức.",
      },
      {
        title: "Báo cáo tài khoản nếu gặp vấn đề",
        detail:
          "Các app đều có nút báo cáo. Làm việc này giúp người sau tránh được, và mất của bạn đúng 30 giây.",
      },
    ],
    notes: [
      "Người thật sự tử tế sẽ tôn trọng việc bạn cẩn thận, chứ không dỗi vì điều đó.",
      "Bị ép uống rượu, bị giữ lại không cho về, bị đụng chạm khi không đồng ý — nhờ nhân viên quán giúp và gọi người thân ngay.",
      "Đừng cho biết địa chỉ nhà, nơi làm việc cụ thể trong vài buổi đầu.",
      "Nếu bị lừa tiền: lưu bằng chứng và trình báo công an, càng sớm càng có cơ hội chặn dòng tiền.",
    ],
    faq: [
      {
        q: "Làm sao biết tài khoản là thật?",
        a: "Gọi video, tìm kiếm ngược ảnh, xem họ có mạng xã hội với hoạt động lâu dài không. Ảnh quá hoàn hảo cộng hồ sơ quá mới là dấu hiệu đáng ngờ.",
      },
      {
        q: "Có nên nhận lời đi xa ngay lần đầu không?",
        a: "Không nên. Đi xa, đi qua đêm hay tới nơi bạn không biết đường về đều làm bạn mất thế chủ động.",
      },
      {
        q: "Họ giận vì tôi cẩn thận quá thì sao?",
        a: "Đó là thông tin có giá trị về con người họ. Người tử tế hiểu vì sao bạn cần an toàn, nhất là trong lần gặp đầu.",
      },
      {
        q: "Nam giới có cần cẩn thận không?",
        a: "Có. Nam giới cũng bị lừa tiền, bị dàn cảnh tống tiền và bị chuốc thuốc. Các quy tắc trên áp dụng cho mọi giới.",
      },
    ],
    sources: [],
  },

  {
    slug: "kham-suc-khoe-tien-hon-nhan",
    title: "Khám sức khỏe tiền hôn nhân",
    excerpt:
      "Nghe hơi nghiêm trọng nhưng thực tế khá nhẹ nhàng — và giúp hai người tránh được vài chuyện khó xử về sau.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đến bệnh viện phụ sản hoặc bệnh viện đa khoa có gói khám tiền hôn nhân, đăng ký gói dành cho cặp đôi. Thường gồm khám tổng quát, xét nghiệm máu, tầm soát bệnh lây truyền và bệnh di truyền, cùng tư vấn sinh sản. Nên đi trước cưới vài tháng để còn thời gian xử lý nếu có gì cần điều trị hoặc cần tiêm phòng.",
    prepare: [
      "Đi cùng nhau — đây là việc của cả hai, không phải của riêng ai",
      "Hỏi trước xem có phải nhịn ăn sáng không nếu gói có xét nghiệm máu",
      "Tiền sử bệnh của gia đình hai bên nếu biết",
      "Sổ tiêm chủng cũ nếu còn giữ",
      "Ngân sách: giá gói chênh nhau khá xa giữa các cơ sở",
    ],
    steps: [
      {
        title: "Gọi hỏi vài cơ sở để so gói",
        detail:
          "Hỏi ba điều: gói gồm những xét nghiệm gì, giá bao nhiêu, mất mấy buổi. Giá và danh mục chênh nhau đáng kể nên hỏi 2–3 nơi.",
      },
      {
        title: "Đặt lịch sớm trước ngày cưới",
        detail:
          "Nên trước vài tháng. Nếu phát hiện điều gì cần điều trị hoặc cần tiêm phòng thì còn kịp thời gian, và cũng đỡ áp lực tâm lý.",
      },
      {
        title: "Chuẩn bị theo hướng dẫn",
        detail:
          "Nhịn ăn nếu được yêu cầu, tránh những ngày đang hành kinh với nữ nếu gói có khám phụ khoa. Hỏi rõ lúc đặt lịch.",
      },
      {
        title: "Khai bệnh sử trung thực",
        detail:
          "Bệnh di truyền trong gia đình, bệnh mạn tính, tiền sử phẫu thuật, thuốc đang dùng. Đây là phần quyết định bác sĩ tư vấn được gì cho hai bạn.",
      },
      {
        title: "Khám tổng quát và làm xét nghiệm",
        detail:
          "Thường có khám lâm sàng, xét nghiệm máu và nước tiểu, tầm soát bệnh lây truyền, đôi khi có siêu âm và xét nghiệm di truyền tuỳ gói.",
      },
      {
        title: "Nghe tư vấn CÙNG NHAU",
        detail:
          "Đây là phần giá trị nhất mà nhiều cặp bỏ qua vì bận. Đừng để một người đi nghe rồi về kể lại.",
      },
      {
        title: "Hỏi bốn câu quan trọng",
        detail:
          "Kế hoạch có con nên chuẩn bị gì; biện pháp tránh thai nào phù hợp nếu chưa muốn có ngay; cần tiêm phòng gì trước khi mang thai; có yếu tố nào cần theo dõi không.",
      },
      {
        title: "Nhận kết quả và đọc cùng nhau",
        detail:
          "Kết quả là chuyện của hai người. Giấu nhau mới là vấn đề, chứ bản thân một chỉ số bất thường thường đã có cách xử lý.",
      },
      {
        title: "Xử lý nếu có phát hiện",
        detail:
          "Phần lớn phát hiện đều có hướng giải quyết. Hỏi bác sĩ về các bước tiếp theo và mốc thời gian cụ thể.",
      },
      {
        title: "Giữ hồ sơ",
        detail:
          "Lưu kết quả để dùng cho khám thai sau này và cho các lần khám sức khỏe tiếp theo.",
      },
    ],
    notes: [
      "Đây không phải cuộc kiểm tra để chấm điểm nhau. Mục đích là biết sớm để chuẩn bị, không phải để phán xét.",
      "Danh mục khám và chi phí khác nhau theo cơ sở và theo gói — hỏi rõ trước khi đăng ký để không bị phát sinh.",
      "Bài viết mô tả quy trình chung, không thay thế tư vấn y tế.",
      "Nếu một người từ chối đi hoàn toàn, bản thân điều đó cũng là chuyện đáng để hai người nói chuyện thẳng thắn.",
    ],
    faq: [
      {
        q: "Không cưới, chỉ sống chung thì có nên khám không?",
        a: "Vẫn nên. Gói khám này thực chất là kiểm tra sức khỏe sinh sản và bệnh lây truyền cho hai người — không phụ thuộc việc có đăng ký kết hôn hay không.",
      },
      {
        q: "Bạn đời ngại đi cùng thì sao?",
        a: "Nói rõ đây là việc cho cả hai và cho con cái sau này. Có thể bắt đầu bằng gói cơ bản cho nhẹ nhàng, rồi tính tiếp.",
      },
      {
        q: "Có bắt buộc theo luật không?",
        a: "Đây là khuyến khích chứ không phải thủ tục bắt buộc để đăng ký kết hôn. Nhưng lợi ích thực tế thì rất rõ.",
      },
      {
        q: "Chi phí khoảng bao nhiêu?",
        a: "Chênh nhau nhiều tuỳ cơ sở và danh mục. Bệnh viện công thường rẻ hơn. Hỏi 2–3 nơi trước khi quyết.",
      },
    ],
    sources: [],
  },

  {
    slug: "viem-nhiem-phu-khoa-chuyen-rat-thuong",
    title: "Viêm nhiễm phụ khoa: chuyện rất thường",
    excerpt:
      "Phần lớn phụ nữ gặp ít nhất một lần trong đời. Vấn đề nằm ở chỗ tự chữa lung tung khiến nó dai dẳng.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đừng tự mua thuốc đặt hay dung dịch rửa theo lời mách trên mạng, vì mỗi nguyên nhân cần thuốc khác nhau và dùng sai làm bệnh dai dẳng hơn. Đi khám để biết đúng nguyên nhân, dùng đủ liệu trình, và giữ vệ sinh thật đơn giản: nước sạch, rửa bên ngoài, không thụt rửa sâu.",
    prepare: [
      "Ghi lại: triệu chứng bắt đầu khi nào, khí hư màu gì, có mùi không, có ngứa rát không",
      "Nhớ những gì bạn đã dùng để tự xử lý trước đó — bác sĩ cần biết",
      "Sắp xếp đi khám khi không trong kỳ kinh nếu không gấp",
      "Không thụt rửa và không đặt thuốc trong vài ngày trước khi khám",
    ],
    steps: [
      {
        title: "NGỪNG tự chữa ngay",
        detail:
          "Thuốc đặt mua theo mách nước, dung dịch rửa mạnh, xông lá, đắp lá — nhiều thứ trong số này làm mất cân bằng tự nhiên và khiến tình trạng nặng thêm.",
      },
      {
        title: "Ghi lại triệu chứng cụ thể",
        detail:
          "Khí hư màu gì, đặc hay loãng, có vón cục không, mùi thế nào, ngứa hay rát, có đau bụng dưới không. Mô tả càng rõ thì bác sĩ khoanh vùng càng nhanh.",
      },
      {
        title: "Nhớ lại yếu tố khởi phát",
        detail:
          "Vừa uống kháng sinh, vừa đổi dung dịch vệ sinh, vừa đi bơi, đang căng thẳng, thay đổi bạn tình — những thông tin này rất có giá trị.",
      },
      {
        title: "Đi khám để biết nguyên nhân",
        detail:
          "Do nấm, do vi khuẩn hay do nguyên nhân khác đều có biểu hiện na ná nhau nhưng cách điều trị khác hẳn. Bác sĩ có thể lấy mẫu xét nghiệm để xác định chính xác.",
      },
      {
        title: "Hỏi rõ cách dùng thuốc",
        detail:
          "Đặt vào lúc nào, bao nhiêu ngày, có kiêng quan hệ trong thời gian điều trị không, có kiêng gì khác không.",
      },
      {
        title: "Dùng ĐỦ liệu trình",
        detail:
          "Hết triệu chứng chưa chắc đã hết bệnh. Bỏ ngang giữa chừng là lý do phổ biến nhất khiến bệnh quay lại và khó trị hơn.",
      },
      {
        title: "Điều chỉnh vệ sinh cho đơn giản",
        detail:
          "Nước sạch, rửa bên ngoài, lau khô từ trước ra sau, đồ lót cotton thoáng. Không thụt rửa sâu, không xà phòng mạnh, không xịt thơm.",
      },
      {
        title: "Thay đồ ngay sau khi vận động hoặc bơi",
        detail:
          "Mặc đồ ẩm lâu là môi trường lý tưởng cho vi khuẩn và nấm. Đây là thói quen nhỏ mà giảm tái phát rõ rệt.",
      },
      {
        title: "Tái khám nếu không đỡ",
        detail:
          "Đúng lịch hẹn hoặc khi triệu chứng không giảm sau thời gian bác sĩ dặn. Đừng tự mua lại toa cũ dùng tiếp.",
      },
      {
        title: "Tái phát nhiều lần thì nói rõ với bác sĩ",
        detail:
          "Lặp đi lặp lại có thể liên quan tới nguyên nhân khác, tới bệnh nền như tiểu đường, hoặc cần điều trị cả bạn tình.",
      },
    ],
    notes: [
      "Bài viết không phải chẩn đoán hay chỉ định điều trị. Mọi loại thuốc phải do bác sĩ hoặc dược sĩ hướng dẫn.",
      "ĐI KHÁM NGAY nếu: sốt, đau bụng dưới nhiều, ra máu bất thường, hoặc đang mang thai.",
      "Chuyện này phổ biến tới mức bác sĩ gặp mỗi ngày — không có gì đáng xấu hổ, và cũng không đồng nghĩa với việc bạn ở bẩn hay có lối sống gì.",
      "Cẩn thận với các sản phẩm quảng cáo se khít, làm hồng, khử mùi vùng kín — nhiều loại gây kích ứng và làm nặng thêm tình trạng.",
    ],
    faq: [
      {
        q: "Có phải do quan hệ mới bị không?",
        a: "Không hẳn. Nhiều trường hợp liên quan tới thay đổi nội tiết, dùng kháng sinh, mặc đồ bí, hoặc thói quen vệ sinh — người chưa từng quan hệ vẫn có thể gặp.",
      },
      {
        q: "Bạn tình có cần điều trị không?",
        a: "Tuỳ nguyên nhân. Có loại cần điều trị cả hai để tránh lây qua lây lại — hỏi bác sĩ khám cho bạn.",
      },
      {
        q: "Có nên dùng dung dịch vệ sinh hàng ngày?",
        a: "Nhiều bác sĩ khuyên chỉ cần nước sạch. Dung dịch mạnh hoặc thụt rửa làm mất cân bằng tự nhiên và dễ gây viêm hơn.",
      },
      {
        q: "Đang điều trị có quan hệ được không?",
        a: "Hỏi bác sĩ vì tuỳ nguyên nhân và loại thuốc. Nhiều trường hợp được khuyên kiêng trong thời gian điều trị để tránh lây qua lại.",
      },
    ],
    sources: [],
  },

  {
    slug: "roi-loan-cuong-va-xuat-tinh-som",
    title: "Rối loạn cương và xuất tinh sớm: khi nào đi khám",
    excerpt:
      "Thỉnh thoảng trục trặc là bình thường và ai cũng gặp. Vấn đề là nhiều người im lặng nhiều năm thay vì đi khám một buổi.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Thỉnh thoảng gặp trục trặc do mệt, stress, rượu bia là chuyện bình thường. Nhưng nếu kéo dài nhiều tuần, lặp lại thường xuyên và ảnh hưởng tới cuộc sống thì nên đi khám nam khoa — đôi khi đây là dấu hiệu sớm của bệnh tim mạch, tiểu đường hoặc vấn đề nội tiết. Một mẹo tự đánh giá: nếu vẫn bình thường khi ở một mình thì nguyên nhân thường thiên về tâm lý.",
    prepare: [
      "Ghi lại: bắt đầu từ khi nào, xảy ra trong mọi tình huống hay chỉ với một người",
      "Liệt kê thuốc đang dùng — nhiều loại có tác dụng phụ lên chuyện này",
      "Thành thật với chính mình về rượu bia, thuốc lá, giấc ngủ và mức độ căng thẳng",
      "Tiền sử bệnh: huyết áp, tiểu đường, mỡ máu, tim mạch",
    ],
    steps: [
      {
        title: "Phân biệt trục trặc nhất thời và kéo dài",
        detail:
          "Vài lần trong giai đoạn căng thẳng thì thường tự hết. Kéo dài nhiều tuần và lặp lại đều đặn mới là lúc cần đi khám.",
      },
      {
        title: "Tự đánh giá bằng một câu hỏi",
        detail:
          "Khi ở một mình thì có bình thường không. Nếu có thì nguyên nhân thường thiên về tâm lý; nếu không thì khả năng có nguyên nhân thực thể cao hơn.",
      },
      {
        title: "Rà lại thuốc đang dùng",
        detail:
          "Một số nhóm thuốc huyết áp, thuốc tâm thần, thuốc dạ dày có tác dụng phụ này. Nói với bác sĩ kê đơn để đổi, TUYỆT ĐỐI không tự bỏ thuốc.",
      },
      {
        title: "Xem lại rượu bia, thuốc lá và giấc ngủ",
        detail:
          "Đây là nhóm nguyên nhân dễ sửa nhất mà ít người muốn nhìn. Thử giảm trong vài tuần và quan sát xem có khác không.",
      },
      {
        title: "Đi khám nam khoa hoặc tiết niệu",
        detail:
          "Bác sĩ hỏi bệnh sử, khám lâm sàng, có thể cho xét nghiệm máu kiểm tra đường huyết, mỡ máu, nội tiết. Buổi khám thường ngắn hơn bạn tưởng.",
      },
      {
        title: "Hiểu vì sao bác sĩ quan tâm tới tim mạch",
        detail:
          "Chuyện cương phụ thuộc vào mạch máu. Rối loạn cương đôi khi là dấu hiệu sớm của vấn đề mạch máu toàn thân — đi khám sớm có khi phát hiện được thứ quan trọng hơn.",
      },
      {
        title: "Hỏi rõ về phương án điều trị",
        detail:
          "Có nhiều hướng tuỳ nguyên nhân: điều chỉnh lối sống, điều trị bệnh nền, hỗ trợ tâm lý, hoặc thuốc theo chỉ định. Hỏi ưu nhược điểm của từng hướng.",
      },
      {
        title: "Cải thiện lối sống song song",
        detail:
          "Ngủ đủ, bớt rượu bia, bỏ thuốc lá, vận động đều, giảm cân nếu thừa. Nghe cũ kỹ nhưng đây là nhóm yếu tố có tác động rõ rệt nhất.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Im lặng thường khiến người kia tự suy diễn là do họ không còn hấp dẫn. Một câu giải thích ngắn gỡ được rất nhiều hiểu lầm.",
      },
      {
        title: "Cân nhắc hỗ trợ tâm lý nếu do lo âu",
        detail:
          "Vòng lặp lo lắng dẫn tới thất bại dẫn tới lo lắng hơn là chuyện rất phổ biến. Chuyên gia tâm lý có thể giúp phá vòng lặp này.",
      },
    ],
    notes: [
      "Cảnh giác với quảng cáo cam kết chữa dứt điểm sau một liệu trình, hoặc phòng khám hối thúc đóng gói tiền lớn ngay buổi đầu.",
      "TUYỆT ĐỐI không tự mua thuốc cường dương trôi nổi — nhiều loại chứa chất cấm gây tụt huyết áp nguy hiểm, đặc biệt nguy hiểm nếu bạn đang dùng thuốc tim mạch.",
      "Bài viết không chẩn đoán và không chỉ định điều trị — hãy để bác sĩ đánh giá trường hợp của bạn.",
      "Đây là vấn đề y khoa như mọi vấn đề khác, không phải thước đo giá trị con người bạn.",
    ],
    faq: [
      {
        q: "Còn trẻ mà bị thì có bất thường không?",
        a: "Người trẻ cũng gặp, thường liên quan tới căng thẳng, lo âu, thiếu ngủ hoặc rượu bia. Đi khám để loại trừ nguyên nhân thực thể rồi mới tính tiếp.",
      },
      {
        q: "Đi khám có phải làm gì đáng sợ không?",
        a: "Phần lớn là hỏi bệnh sử và xét nghiệm máu. Bạn có quyền hỏi trước từng bước và từ chối thủ thuật mà bạn chưa hiểu.",
      },
      {
        q: "Thực phẩm chức năng tăng cường sinh lý có tác dụng không?",
        a: "Nhiều sản phẩm không có bằng chứng rõ ràng, và một số bị phát hiện trộn chất cấm. Hỏi bác sĩ trước khi dùng bất cứ thứ gì.",
      },
      {
        q: "Có nên nói với bạn đời không?",
        a: "Nên. Người kia thường đang tự trách mình. Một câu ngắn kiểu dạo này anh mệt và căng thẳng, không phải do em — đã gỡ được rất nhiều.",
      },
    ],
    sources: [],
  },

  {
    slug: "coc-nguyet-san-va-cac-lua-chon-khac",
    title: "Cốc nguyệt san và các lựa chọn khác",
    excerpt:
      "Băng vệ sinh không phải lựa chọn duy nhất. Mỗi loại hợp một kiểu sinh hoạt — và lần đầu dùng thì ai cũng lóng ngóng.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Có mấy nhóm chính: băng vệ sinh (dễ nhất cho người mới), tampon và cốc nguyệt san (tiện khi vận động), quần lót nguyệt san (giặt dùng lại). Chọn theo sinh hoạt của bạn. Điều quan trọng nhất phải nhớ với loại đưa vào bên trong: thời gian tối đa được để, theo đúng hướng dẫn của nhà sản xuất.",
    prepare: [
      "Biết lượng máu kinh của bạn thường nhiều hay ít",
      "Đọc kỹ hướng dẫn của nhà sản xuất trước khi dùng lần đầu",
      "Chọn size phù hợp — cốc nguyệt san có nhiều cỡ theo tuổi và tình trạng sinh nở",
      "Nồi nhỏ để tiệt trùng nếu dùng cốc",
      "Vài ngày rảnh ở nhà để tập lần đầu",
    ],
    steps: [
      {
        title: "Hiểu nhanh từng loại",
        detail:
          "Băng vệ sinh dùng ngoài, dễ nhất. Tampon đưa vào bên trong, gọn khi vận động. Cốc nguyệt san đựng được nhiều và dùng lại nhiều năm. Quần lót nguyệt san giặt dùng lại, tiện cho ngày ít.",
      },
      {
        title: "Chọn theo hoạt động của bạn",
        detail:
          "Đi bơi hoặc chơi thể thao thì tampon hoặc cốc. Đi làm cả ngày ít vào nhà vệ sinh được thì cốc tiện hơn. Ngủ đêm thì băng ban đêm hoặc quần lót nguyệt san.",
      },
      {
        title: "Ghi nhớ thời gian thay tối đa",
        detail:
          "Mỗi loại có khuyến cáo riêng của nhà sản xuất. Để quá lâu có thể gây nhiễm trùng — đây là điều quan trọng nhất trong cả bài, đặt nhắc điện thoại nếu hay quên.",
      },
      {
        title: "Rửa tay trước và sau",
        detail: "Áp dụng với mọi loại, đặc biệt quan trọng với loại đưa vào bên trong.",
      },
      {
        title: "Cốc nguyệt san: tiệt trùng đầu và cuối kỳ",
        detail:
          "Đun trong nước sôi theo đúng thời gian nhà sản xuất hướng dẫn. Trong kỳ thì rửa sạch bằng nước giữa các lần dùng.",
      },
      {
        title: "Tập gấp cốc trước khi đưa vào",
        detail:
          "Có nhiều kiểu gấp khác nhau, thử vài kiểu xem kiểu nào bạn thấy dễ. Đây là phần cần luyện tay vài lần.",
      },
      {
        title: "Thư giãn — căng thẳng làm mọi thứ khó hơn",
        detail:
          "Cơ siết lại thì đưa vào khó và đau. Thở đều, ngồi xổm hoặc gác một chân lên, và cho phép mình thử vài lần.",
      },
      {
        title: "Kiểm tra đã đúng vị trí chưa",
        detail:
          "Đúng vị trí thì bạn không cảm thấy gì cả. Còn cộm, còn khó chịu nghĩa là chưa đúng — lấy ra và thử lại.",
      },
      {
        title: "Lần đầu cứ tập ở nhà",
        detail:
          "Đừng thử loại mới vào ngày đi làm hay đi chơi xa. Tập vài lần ở nhà cho quen tay rồi hãy mang ra ngoài.",
      },
      {
        title: "Chuẩn bị phương án dự phòng",
        detail:
          "Những lần đầu nên dùng kèm băng mỏng để yên tâm. Mang theo một túi nhỏ đựng đồ dự phòng khi ra ngoài.",
      },
    ],
    notes: [
      "ĐI KHÁM NGAY: đau bất thường, không lấy ra được, hoặc sốt cao kèm nổi ban trong lúc đang dùng sản phẩm đưa vào bên trong.",
      "Luôn ưu tiên hướng dẫn của nhà sản xuất in trên bao bì — mỗi sản phẩm có khuyến cáo riêng.",
      "Bài viết không thay thế tư vấn y tế; có bệnh lý phụ khoa hoặc đang đặt vòng thì hỏi bác sĩ trước khi đổi loại.",
      "Đừng dùng chung cốc nguyệt san với người khác trong bất kỳ trường hợp nào.",
    ],
    faq: [
      {
        q: "Chưa quan hệ dùng cốc nguyệt san hay tampon được không?",
        a: "Nhiều người vẫn dùng được, nên chọn cỡ nhỏ và đọc kỹ hướng dẫn. Băn khoăn thì hỏi bác sĩ phụ khoa cho yên tâm.",
      },
      {
        q: "Cốc nguyệt san có đắt không?",
        a: "Chi phí ban đầu cao hơn nhưng dùng lại được nhiều năm, nên tính đường dài thường rẻ hơn nhiều. Đổi lại bạn phải chịu khó vệ sinh đúng cách.",
      },
      {
        q: "Lần đầu không đưa vào được thì sao?",
        a: "Rất bình thường. Thư giãn, thử tư thế khác, thử kiểu gấp khác. Nhiều người mất vài kỳ mới quen — đừng nản.",
      },
      {
        q: "Dùng cốc có đi vệ sinh bình thường được không?",
        a: "Được. Nếu thấy cốc bị xê dịch thì kiểm tra lại vị trí sau đó.",
      },
    ],
    sources: [],
  },

  {
    slug: "thuoc-tranh-thai-khan-cap-hieu-dung",
    title: "Thuốc tránh thai khẩn cấp: hiểu cho đúng",
    excerpt:
      "Có giới hạn thời gian, không phải thuốc dùng thường xuyên, và không phải ai cũng phù hợp. Nên biết trước khi cần tới.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đây là biện pháp cho tình huống ngoài ý muốn, càng sớm càng có ý nghĩa vì hiệu quả giảm dần theo thời gian. Ra nhà thuốc nói thẳng tình huống để dược sĩ tư vấn loại phù hợp, hoặc tới cơ sở y tế. Tuyệt đối không dùng thay cho biện pháp tránh thai thường xuyên.",
    prepare: [
      "Nhớ mốc thời gian: sự cố xảy ra cách đây bao lâu — thông tin quan trọng nhất",
      "Danh sách thuốc đang dùng và bệnh nền nếu có",
      "Cân nặng nếu bạn biết — một số loại có lưu ý liên quan",
      "Chuẩn bị nói thẳng với dược sĩ, họ cần thông tin đúng mới tư vấn đúng",
    ],
    steps: [
      {
        title: "Đi càng sớm càng tốt",
        detail:
          "Hiệu quả phụ thuộc rất nhiều vào thời gian. Đừng chờ tới hôm sau vì ngại, và đừng ngồi đọc diễn đàn cả buổi.",
      },
      {
        title: "Tới nhà thuốc hoặc cơ sở y tế",
        detail:
          "Nhà thuốc có dược sĩ tư vấn là đủ cho hầu hết trường hợp. Nếu bạn có bệnh nền hoặc đang dùng nhiều thuốc thì tới cơ sở y tế tốt hơn.",
      },
      {
        title: "Nói thật tình huống",
        detail:
          "Bao lâu rồi, đang dùng thuốc gì, có bệnh nền không, đang cho con bú không. Dược sĩ hỏi để chọn đúng, không phải để tò mò.",
      },
      {
        title: "Hỏi kỹ cách dùng",
        detail:
          "Uống lúc nào, uống mấy viên, nếu nôn sau khi uống thì phải làm gì. Nhờ dược sĩ ghi lên vỏ hộp nếu bạn sợ quên.",
      },
      {
        title: "Hỏi về tác dụng phụ có thể gặp",
        detail:
          "Buồn nôn, mệt, đau đầu, chảy máu bất thường là những phản ứng có thể gặp. Biết trước thì đỡ hoảng.",
      },
      {
        title: "Theo dõi kỳ kinh tiếp theo",
        detail:
          "Kỳ kinh có thể tới sớm hoặc muộn hơn bình thường. Ghi lại ngày để đối chiếu.",
      },
      {
        title: "Thử thai nếu trễ kinh",
        detail:
          "Trễ quá một tuần so với dự kiến thì thử thai và đi khám. Đừng chỉ chờ và lo.",
      },
      {
        title: "Tính chuyện lâu dài",
        detail:
          "Nếu bạn phải dùng tới biện pháp khẩn cấp, đó là dấu hiệu nên đi khám để chọn một biện pháp tránh thai thường xuyên phù hợp với bạn.",
      },
      {
        title: "Cân nhắc kiểm tra bệnh lây truyền",
        detail:
          "Nếu sự cố là do không dùng biện pháp bảo vệ, hãy nhớ rằng thuốc này không phòng bệnh lây qua đường tình dục. Cân nhắc đi xét nghiệm.",
      },
    ],
    notes: [
      "Đây KHÔNG phải thuốc dùng thường xuyên và không có tác dụng phòng bệnh lây qua đường tình dục.",
      "Bài viết không nêu tên thuốc, không hướng dẫn liều dùng — việc đó thuộc về dược sĩ và bác sĩ.",
      "ĐI KHÁM NGAY: đau bụng dữ dội, ra máu nhiều bất thường, hoặc choáng sau khi dùng.",
      "Đang cho con bú hoặc có bệnh nền thì nói rõ, vì lựa chọn có thể khác.",
    ],
    faq: [
      {
        q: "Dùng nhiều lần có sao không?",
        a: "Đây là biện pháp cho tình huống ngoài dự kiến, không thiết kế để dùng thường xuyên. Dùng lặp lại nhiều lần thì nên đi khám để chọn biện pháp phù hợp hơn.",
      },
      {
        q: "Ngại ra nhà thuốc thì sao?",
        a: "Dược sĩ nghe chuyện này mỗi ngày và không nhớ mặt bạn đâu. Ngại một phút vẫn hơn lo lắng cả tháng.",
      },
      {
        q: "Uống rồi có chắc chắn không mang thai không?",
        a: "Không có biện pháp nào tuyệt đối. Vì vậy vẫn cần theo dõi kỳ kinh và thử thai nếu trễ.",
      },
      {
        q: "Có ảnh hưởng khả năng có con sau này không?",
        a: "Đây là câu nên hỏi bác sĩ. Đừng lo theo tin đồn trên mạng, hãy hỏi người có chuyên môn.",
      },
    ],
    sources: [],
  },

  {
    slug: "dau-khi-quan-he-dung-can-rang-chiu",
    title: "Đau khi quan hệ: đừng cắn răng chịu",
    excerpt:
      "Nhiều người nghĩ đau là chuyện phải chấp nhận. Không phải vậy — và phần lớn nguyên nhân đều xử lý được.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đau không phải điều bình thường phải chịu đựng. Nguyên nhân có thể là khô, viêm nhiễm, co thắt do căng thẳng, hoặc bệnh lý cần điều trị. Việc đầu tiên là dừng lại và nói với bạn đời, việc thứ hai là đi khám để tìm nguyên nhân. Cố chịu cho xong chỉ làm cơ thể phản ứng phòng vệ mạnh hơn ở những lần sau.",
    prepare: [
      "Ghi lại: đau ở thời điểm nào (lúc bắt đầu, lúc sâu, hay sau khi xong), đau kiểu gì, thường xuyên hay thỉnh thoảng",
      "Nhớ xem có trùng với giai đoạn nào không: sau sinh, đang cho con bú, đang dùng thuốc, đang căng thẳng",
      "Sẵn sàng nói chuyện thẳng với bạn đời",
      "Danh sách thuốc và sản phẩm vệ sinh đang dùng",
    ],
    steps: [
      {
        title: "Dừng lại khi đau",
        detail:
          "Cố chịu cho xong khiến cơ thể học phản ứng phòng vệ, và những lần sau càng khó hơn. Dừng là cách bảo vệ cả sức khỏe lẫn mối quan hệ.",
      },
      {
        title: "Xác định kiểu đau",
        detail:
          "Đau ngay lúc bắt đầu thường liên quan tới khô hoặc co thắt. Đau sâu bên trong có thể liên quan tới nguyên nhân khác. Ghi lại chi tiết này để nói với bác sĩ.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Nói cụ thể đau ở đâu và lúc nào. Người tôn trọng bạn sẽ muốn biết chứ không phật ý. Im lặng dễ khiến họ hiểu nhầm là bạn không muốn họ.",
      },
      {
        title: "Thử điều chỉnh những thứ đơn giản trước",
        detail:
          "Dành nhiều thời gian hơn, dùng chất bôi trơn gốc nước, đổi tư thế. Nhiều trường hợp cải thiện chỉ nhờ những điều chỉnh này.",
      },
      {
        title: "Rà lại sản phẩm vệ sinh",
        detail:
          "Xà phòng mạnh, dung dịch có hương, thụt rửa đều gây khô và kích ứng. Ngưng dùng thử một thời gian.",
      },
      {
        title: "Đi khám tìm nguyên nhân",
        detail:
          "Phụ khoa hoặc nam khoa tuỳ trường hợp. Mô tả thẳng để bác sĩ khoanh vùng nhanh — họ không phán xét đâu.",
      },
      {
        title: "Điều trị theo đúng nguyên nhân",
        detail:
          "Mỗi nguyên nhân một hướng xử lý. Đừng tự mua thuốc bôi hay thuốc đặt theo lời mách trên mạng vì có thể làm nặng thêm.",
      },
      {
        title: "Đừng bỏ qua yếu tố tâm lý",
        detail:
          "Căng thẳng, lo âu, trải nghiệm không tốt trước đây đều có thể gây đau THẬT chứ không phải tưởng tượng. Có chuyên gia hỗ trợ riêng cho mảng này.",
      },
      {
        title: "Cho cơ thể thời gian hồi phục",
        detail:
          "Sau khi điều trị, đừng vội quay lại như cũ. Bắt đầu từ những gì bạn thấy an toàn và tăng dần.",
      },
      {
        title: "Tái khám nếu không cải thiện",
        detail:
          "Đã điều trị mà vẫn đau thì quay lại nói với bác sĩ, có thể cần đánh giá lại hoặc chuyển chuyên khoa khác.",
      },
    ],
    notes: [
      "ĐI KHÁM NGAY nếu đau kèm ra máu, sốt, đau bụng dưới dữ dội, hoặc đau kéo dài sau khi đã kết thúc.",
      "Bài viết không chẩn đoán; nguyên nhân phải do bác sĩ xác định.",
      "Bị ép tiếp tục dù bạn đã nói đau là hành vi không thể chấp nhận trong bất kỳ mối quan hệ nào.",
      "Sau sinh và trong thời gian cho con bú, khô và đau là chuyện rất phổ biến do nội tiết — hãy nói với bác sĩ thay vì tự chịu đựng.",
    ],
    faq: [
      {
        q: "Lần đầu đau có bình thường không?",
        a: "Có thể khó chịu, nhưng đau nhiều hoặc kéo dài thì không nên bỏ qua. Nếu lần nào cũng đau thì cần đi khám.",
      },
      {
        q: "Ngại kể với bác sĩ thì sao?",
        a: "Bạn có thể viết ra giấy đưa họ đọc. Nói được một câu ngắn cũng đủ để bác sĩ bắt đầu tìm nguyên nhân.",
      },
      {
        q: "Chất bôi trơn có phải giải pháp cho mọi trường hợp không?",
        a: "Giúp ích với nguyên nhân do khô, nhưng không giải quyết được nguyên nhân bệnh lý. Nếu dùng rồi vẫn đau thì phải đi khám.",
      },
      {
        q: "Đàn ông có bị đau không?",
        a: "Có. Đau khi quan hệ ở nam cũng có nhiều nguyên nhân và cũng cần đi khám nam khoa thay vì chịu đựng.",
      },
    ],
    sources: [],
  },

  {
    slug: "lo-co-thai-ngoai-ke-hoach-lam-gi-truoc",
    title: "Lỡ có thai ngoài kế hoạch: làm gì trước",
    excerpt:
      "Hoảng là phản ứng bình thường. Nhưng vài bước đầu tiên nên làm bình tĩnh và đúng thứ tự.",
    readTimeMinutes: 4,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Việc đầu tiên là xác nhận cho chắc: thử thai tại nhà rồi đến cơ sở y tế kiểm tra. Việc thứ hai là tìm tư vấn y tế chính thống để hiểu rõ tình trạng, mốc thời gian và các lựa chọn hợp pháp. Đừng tự mua thuốc trên mạng và đừng tìm tới dịch vụ chui — đây là chỗ nguy hiểm tới tính mạng.",
    prepare: [
      "Que thử thai mua ở nhà thuốc",
      "Nhớ ngày đầu kỳ kinh gần nhất — bác sĩ luôn hỏi câu này",
      "Một người bạn hoặc người thân đáng tin để đi cùng nếu có thể",
      "Giấy tờ tuỳ thân và ít tiền cho lần khám đầu",
    ],
    steps: [
      {
        title: "Thử thai đúng cách",
        detail:
          "Dùng nước tiểu đầu tiên buổi sáng, đọc kết quả trong khung thời gian ghi trên bao bì. Âm tính mà vẫn trễ kinh thì thử lại sau vài ngày.",
      },
      {
        title: "Đi khám để xác nhận",
        detail:
          "Que thử chỉ cho kết quả sơ bộ. Cơ sở y tế xác nhận bằng xét nghiệm và siêu âm, đồng thời kiểm tra vị trí thai — bước này quan trọng vì có tình huống cần xử trí khẩn.",
      },
      {
        title: "Cho phép mình bình tĩnh lại",
        detail:
          "Đừng đưa ra quyết định lớn trong vài giờ đầu khi đang hoảng loạn. Hít thở, và nhớ rằng bạn có thời gian để tìm hiểu.",
      },
      {
        title: "Tìm tư vấn ở cơ sở y tế chính thống",
        detail:
          "Bệnh viện phụ sản, trung tâm chăm sóc sức khỏe sinh sản. Ở đó có người tư vấn đúng chuyên môn và có nghĩa vụ bảo mật thông tin của bạn.",
      },
      {
        title: "Hỏi rõ tình trạng hiện tại",
        detail:
          "Thai được bao nhiêu tuần, vị trí có bình thường không, sức khỏe của bạn thế nào. Đây là nền để hiểu mọi lựa chọn tiếp theo.",
      },
      {
        title: "Hỏi về mốc thời gian và các lựa chọn hợp pháp",
        detail:
          "Hỏi thẳng: tôi có những lựa chọn hợp pháp nào, mỗi lựa chọn cần làm gì và có giới hạn thời gian ra sao. Thời gian là yếu tố quan trọng trong mọi hướng đi.",
      },
      {
        title: "TUYỆT ĐỐI tránh thuốc và dịch vụ trôi nổi",
        detail:
          "Thuốc rao bán trên mạng và cơ sở không phép là nguyên nhân của nhiều ca biến chứng nặng, thậm chí tử vong. Rẻ và kín đáo không đáng đánh đổi bằng tính mạng.",
      },
      {
        title: "Tìm chỗ dựa",
        detail:
          "Bạn thân, người nhà, hoặc dịch vụ tư vấn tâm lý. Quyết định lớn không nên đưa ra lúc đang hoảng loạn và cô độc.",
      },
      {
        title: "Nói chuyện với bạn tình nếu bạn thấy an toàn",
        detail:
          "Đây là chuyện của hai người. Nhưng nếu mối quan hệ có bạo lực hoặc bạn thấy không an toàn thì ưu tiên sự an toàn của bạn trước.",
      },
      {
        title: "Chăm sóc sức khỏe dù bạn chọn hướng nào",
        detail:
          "Mỗi hướng đều cần theo dõi y tế sau đó. Đừng bỏ tái khám, và đừng ngại quay lại nếu có bất thường.",
      },
    ],
    notes: [
      "Bài viết KHÔNG khuyên bạn chọn hướng nào. Mọi quyết định là của bạn, và cần dựa trên tư vấn y tế trực tiếp cho trường hợp cụ thể.",
      "ĐI CẤP CỨU NGAY: đau bụng dữ dội một bên, ra máu nhiều, choáng ngất — đây có thể là thai ngoài tử cung, tình huống nguy hiểm tính mạng.",
      "Bạn có quyền được tư vấn và chăm sóc y tế mà không bị phán xét. Cơ sở nào tỏ thái độ, hãy đổi nơi khác.",
      "Nếu bạn dưới 18 tuổi, hãy tìm một người lớn đáng tin đi cùng — bạn không nên xoay xở một mình.",
    ],
    faq: [
      {
        q: "Tôi chưa muốn ai biết thì sao?",
        a: "Cơ sở y tế có nghĩa vụ bảo mật thông tin người bệnh. Bạn có thể đi khám trước, hiểu rõ tình trạng rồi mới quyết định kể với ai.",
      },
      {
        q: "Bạn trai không chịu trách nhiệm thì làm sao?",
        a: "Đó là chuyện đáng buồn nhưng không thay đổi việc bạn cần chăm sóc y tế. Tìm người thân hoặc bạn thân đi cùng, và cân nhắc tư vấn tâm lý cho giai đoạn này.",
      },
      {
        q: "Que thử hai vạch mờ có tính không?",
        a: "Vạch mờ trong khung thời gian quy định thường được tính, nhưng phải đi khám để xác nhận. Đừng dựa vào que thử để quyết định bất cứ điều gì.",
      },
      {
        q: "Chi phí khám khoảng bao nhiêu?",
        a: "Khám và siêu âm cơ bản ở cơ sở công thường không cao. Cứ hỏi bảng giá ở quầy đăng ký, đừng ngại.",
      },
    ],
    sources: [],
  },
];
