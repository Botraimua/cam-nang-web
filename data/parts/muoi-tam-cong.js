// Phần 18+ — chuyện tế nhị và sức khỏe giới tính cho người lớn.
//
// ❗ NGUYÊN TẮC KHI VIẾT / SỬA NHÓM BÀI NÀY:
//    1. Giọng bình thản như tờ rơi y tế, không phán xét, không câu view.
//    2. Chỉ hướng dẫn quy trình, cách giao tiếp và cách tiếp cận dịch vụ y tế.
//       KHÔNG mô tả chi tiết nhạy cảm, KHÔNG kê tên thuốc hay liều dùng.
//    3. Mọi bài đều phải nhắc: đây không phải tư vấn y khoa, hãy hỏi bác sĩ.
//    4. Nhóm này không hiện trong lượt xem mặc định ở trang chủ (xem ADULT_CATEGORY).

export const muoiTamCong = [
  {
    slug: "di-kham-phu-khoa-lan-dau",
    title: "Đi khám phụ khoa lần đầu",
    excerpt:
      "Ngại là chuyện bình thường, nhưng biết trước quy trình thì buổi khám nhẹ nhàng hơn nhiều so với tưởng tượng.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đặt lịch ở bệnh viện hoặc phòng khám sản phụ khoa uy tín, tránh những ngày đang hành kinh nếu không phải việc gấp, mặc đồ dễ thay. Bác sĩ sẽ hỏi bệnh sử rồi khám theo mức độ cần thiết — bạn có quyền hỏi rõ từng bước và có quyền từ chối bất kỳ thao tác nào.",
    prepare: [
      "Nhớ ngày đầu của kỳ kinh gần nhất và chu kỳ thường dài bao nhiêu ngày",
      "Danh sách thuốc đang dùng và tiền sử dị ứng",
      "Ghi sẵn câu hỏi ra giấy — vào phòng khám dễ quên sạch",
      "Mặc váy hoặc quần rộng cho dễ thay đồ",
    ],
    steps: [
      {
        title: "Chọn nơi khám và đặt lịch",
        detail:
          "Bệnh viện sản phụ khoa, khoa sản của bệnh viện đa khoa, hoặc phòng khám có giấy phép. Muốn bác sĩ nữ thì nói rõ khi đặt lịch.",
      },
      {
        title: "Chuẩn bị trước khi đi",
        detail:
          "Vệ sinh bình thường bằng nước sạch, không thụt rửa sâu và không dùng dung dịch mạnh vì có thể làm sai kết quả xét nghiệm.",
      },
      {
        title: "Trả lời thật khi bác sĩ hỏi bệnh sử",
        detail:
          "Bác sĩ hỏi về kinh nguyệt, quan hệ tình dục, biện pháp tránh thai đang dùng. Đây là câu hỏi chuyên môn, không phải phán xét — trả lời thật thì mới khám đúng.",
      },
      {
        title: "Hỏi trước mỗi bước nếu thấy lo",
        detail:
          "Bạn có thể nói: bác sĩ giải thích giúp em sắp làm gì ạ. Nếu chưa từng quan hệ tình dục, hãy nói rõ để bác sĩ chọn cách khám phù hợp.",
      },
      {
        title: "Hỏi kỹ trước khi rời phòng",
        detail:
          "Kết quả nghĩa là gì, có cần uống thuốc không, khi nào tái khám, dấu hiệu nào phải quay lại ngay.",
      },
    ],
    notes: [
      "Bài viết mô tả quy trình chung, không thay thế tư vấn của bác sĩ cho trường hợp của bạn.",
      "Bạn có quyền yêu cầu có người nhà hoặc nhân viên y tế nữ ở cùng phòng trong lúc khám.",
      "Ra máu bất thường, đau dữ dội, sốt cao kèm đau bụng dưới: đi khám ngay, đừng chờ hết ngại.",
    ],
    faq: [
      {
        q: "Chưa quan hệ tình dục có khám phụ khoa được không?",
        a: "Được. Hãy nói rõ với bác sĩ ngay từ đầu để họ chọn phương pháp thăm khám phù hợp, thường là các cách không xâm lấn.",
      },
      {
        q: "Bao lâu nên khám một lần?",
        a: "Tần suất tuỳ độ tuổi, tình trạng sức khỏe và yếu tố nguy cơ của mỗi người — hỏi bác sĩ khám cho bạn để có lịch phù hợp.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-kham-nam-khoa-lan-dau",
    title: "Đi khám nam khoa lần đầu",
    excerpt:
      "Nhiều người để dành nỗi lo cả năm trời vì ngại. Buổi khám thật ra ngắn và kín đáo hơn bạn nghĩ.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đặt lịch ở khoa nam học hoặc tiết niệu của bệnh viện, hoặc phòng khám có giấy phép. Mô tả thẳng triệu chứng và thời gian xuất hiện. Bác sĩ hỏi bệnh sử rồi khám, đôi khi kèm siêu âm hoặc xét nghiệm — cả buổi thường nhanh hơn bạn tưởng.",
    prepare: [
      "Ghi lại triệu chứng: bắt đầu khi nào, tần suất, có gì làm nặng thêm",
      "Danh sách thuốc và thực phẩm chức năng đang dùng",
      "Câu hỏi viết sẵn — vào phòng khám hay quên",
    ],
    steps: [
      {
        title: "Chọn đúng chuyên khoa",
        detail:
          "Khoa nam học hoặc tiết niệu. Đừng tự tìm tới các quảng cáo chữa dứt điểm trên mạng — ưu tiên cơ sở có giấy phép rõ ràng.",
      },
      {
        title: "Nói thẳng vấn đề",
        detail:
          "Bác sĩ nghe chuyện này mỗi ngày. Nói vòng vo chỉ làm mất thời gian của cả hai và dễ chẩn đoán sai.",
      },
      {
        title: "Hỏi rõ chi phí trước khi làm thêm dịch vụ",
        detail:
          "Trước khi đồng ý siêu âm, xét nghiệm hay thủ thuật, hỏi giá và lý do cần làm. Đây là quyền của bạn.",
      },
      {
        title: "Cẩn thận với gói điều trị đắt bất thường",
        detail:
          "Bị hối thúc quyết định ngay, giá đội lên giữa chừng, chẩn đoán mơ hồ — dừng lại, xin kết quả và đi khám nơi khác cho chắc.",
      },
      {
        title: "Hỏi kỹ trước khi về",
        detail: "Chẩn đoán là gì, uống thuốc bao lâu, kiêng gì, khi nào tái khám.",
      },
    ],
    notes: [
      "Nội dung này mô tả quy trình chung, không phải chẩn đoán hay tư vấn điều trị.",
      "Đau dữ dội vùng bìu, sưng nóng đỏ, sốt, tiểu ra máu: đi khám ngay trong ngày.",
      "Đừng tự mua thuốc theo lời mách trên mạng — nhiều loại có tác dụng phụ nghiêm trọng.",
    ],
    faq: [
      {
        q: "Bác sĩ có nhìn thấy hồ sơ của tôi rồi kể cho người khác không?",
        a: "Cơ sở y tế có nghĩa vụ bảo mật thông tin người bệnh. Nếu lo, cứ hỏi thẳng về chính sách bảo mật khi đăng ký.",
      },
    ],
    sources: [],
  },

  {
    slug: "xet-nghiem-benh-lay-qua-duong-tinh-duc",
    title: "Xét nghiệm bệnh lây qua đường tình dục",
    excerpt:
      "Nhiều bệnh không có triệu chứng gì cả — nghĩa là thấy khỏe không đồng nghĩa với an toàn.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đến bệnh viện da liễu, khoa truyền nhiễm, trung tâm kiểm soát bệnh tật hoặc phòng xét nghiệm có giấy phép và nói bạn muốn tầm soát các bệnh lây qua đường tình dục. Nhân viên y tế sẽ tư vấn nên làm những xét nghiệm nào dựa trên tình huống của bạn.",
    prepare: [
      "Mốc thời gian: lần có nguy cơ gần nhất cách đây bao lâu",
      "Giấy tờ tuỳ thân (một số nơi yêu cầu khi đăng ký)",
      "Chuẩn bị tinh thần: đi xét nghiệm là hành động có trách nhiệm, không phải chuyện đáng xấu hổ",
    ],
    steps: [
      {
        title: "Chọn cơ sở có giấy phép",
        detail:
          "Bệnh viện da liễu, khoa truyền nhiễm, trung tâm kiểm soát bệnh tật (CDC) tỉnh thành, hoặc hệ thống xét nghiệm lớn. Nhiều nơi có dịch vụ tư vấn kín đáo.",
      },
      {
        title: "Nói rõ tình huống để được chọn đúng xét nghiệm",
        detail:
          "Có nhiều loại xét nghiệm khác nhau cho từng tác nhân. Nhân viên y tế cần biết bối cảnh mới tư vấn đúng gói, tránh làm thừa hoặc thiếu.",
      },
      {
        title: "Hỏi về thời điểm xét nghiệm có ý nghĩa",
        detail:
          "Mỗi bệnh có khoảng thời gian mà xét nghiệm mới phát hiện được. Xét nghiệm quá sớm có thể ra âm tính dù đã nhiễm — hỏi kỹ khi nào nên làm và có cần làm lại không.",
      },
      {
        title: "Nhận kết quả và nghe tư vấn",
        detail:
          "Đừng tự đọc kết quả rồi tự kết luận. Nhờ bác sĩ giải thích, kể cả khi mọi chỉ số trông có vẻ bình thường.",
      },
      {
        title: "Nếu dương tính: điều trị và báo cho bạn tình",
        detail:
          "Phần lớn các bệnh này điều trị được, càng sớm càng đơn giản. Báo cho bạn tình để họ cũng đi kiểm tra — đây là phần khó nói nhất nhưng cần thiết.",
      },
    ],
    notes: [
      "Bài viết không thay thế tư vấn y tế. Việc chọn xét nghiệm nào phải do nhân viên y tế quyết định.",
      "Kết quả âm tính không có nghĩa là an toàn vĩnh viễn — nó chỉ phản ánh thời điểm xét nghiệm.",
      "Cẩn thận với quảng cáo xét nghiệm giá rẻ bất thường hoặc cam kết chữa khỏi mọi thứ.",
    ],
    faq: [
      {
        q: "Không có triệu chứng thì cần xét nghiệm không?",
        a: "Nhiều bệnh lây qua đường tình dục diễn ra âm thầm không triệu chứng, nên nếu có yếu tố nguy cơ thì vẫn nên kiểm tra. Hỏi nhân viên y tế để biết trường hợp của bạn cần gì.",
      },
      {
        q: "Xét nghiệm có bị lộ thông tin không?",
        a: "Cơ sở y tế có nghĩa vụ bảo mật hồ sơ người bệnh. Bạn có thể hỏi thẳng về quy trình bảo mật trước khi đăng ký.",
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
      "Không chỉ dành cho nữ, và cũng không phải quá tuổi là hết cơ hội — nhưng có vài điều nên hỏi bác sĩ trước.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Vắc xin HPV được chỉ định cho cả nam và nữ trong độ tuổi khoảng 9 đến 45. Từ năm 2026 vắc xin này bắt đầu được đưa vào chương trình tiêm chủng mở rộng, triển khai miễn phí cho trẻ em gái ở một số địa phương thí điểm; ngoài diện đó thì tiêm dịch vụ tại các trung tâm tiêm chủng.",
    prepare: [
      "Tuổi của bạn và tình trạng sức khỏe hiện tại",
      "Sổ tiêm chủng cũ nếu còn giữ",
      "Ngân sách dự trù nếu tiêm dịch vụ — thường chia làm nhiều mũi",
    ],
    steps: [
      {
        title: "Gọi hỏi trung tâm tiêm chủng gần nhà",
        detail:
          "Hỏi ba câu: có vắc xin HPV không, loại nào đang có, và trường hợp của tôi tiêm mấy mũi.",
      },
      {
        title: "Hỏi xem mình có thuộc diện miễn phí không",
        detail:
          "Chương trình mở rộng đang triển khai theo lộ trình và theo địa phương. Trạm y tế phường xã nơi bạn ở là chỗ hỏi chính xác nhất.",
      },
      {
        title: "Khám sàng lọc trước tiêm",
        detail:
          "Báo với nhân viên y tế nếu bạn đang mang thai, dự định có thai, đang ốm sốt hoặc có tiền sử dị ứng.",
      },
      {
        title: "Ghi nhớ lịch các mũi tiếp theo",
        detail:
          "Số mũi và khoảng cách giữa các mũi tuỳ độ tuổi và loại vắc xin. Đặt nhắc trong điện thoại ngay khi tiêm mũi đầu.",
      },
      {
        title: "Tiêm rồi vẫn giữ thói quen tầm soát",
        detail:
          "Vắc xin không thay thế việc khám và tầm soát định kỳ theo hướng dẫn của bác sĩ.",
      },
    ],
    notes: [
      "Độ tuổi chỉ định, số mũi, giá và phạm vi miễn phí thay đổi theo thời điểm và địa phương — hỏi trực tiếp cơ sở tiêm chủng cho chắc.",
      "Bài viết không thay thế tư vấn y khoa; quyết định tiêm nên có ý kiến của nhân viên y tế.",
    ],
    faq: [
      {
        q: "Nam giới có nên tiêm không?",
        a: "Bộ Y tế khuyến nghị tiêm cho cả nam và nữ. Hỏi cơ sở tiêm chủng để biết loại vắc xin phù hợp với bạn.",
      },
      {
        q: "Đã quan hệ tình dục rồi tiêm còn tác dụng không?",
        a: "Đây là câu nên hỏi bác sĩ vì phụ thuộc vào từng trường hợp. Đừng tự kết luận là quá muộn rồi bỏ luôn ý định.",
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
      "Mua thì ngại, dùng thì tưởng ai cũng biết — nhưng dùng sai vẫn là chuyện rất phổ biến.",
    readTimeMinutes: 2,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Mua ở nhà thuốc, siêu thị hoặc cửa hàng tiện lợi — không ai để ý bạn đâu, và mua online cũng được. Quan trọng nhất là kiểm tra hạn dùng, bảo quản nơi mát, mở bằng tay chứ đừng dùng răng hay kéo, và dùng loại mới cho mỗi lần.",
    prepare: [
      "Biết hạn dùng in trên vỏ hộp và từng gói nhỏ",
      "Chỗ cất mát mẻ, tránh nắng nóng — đừng để lâu trong ví hay cốp xe",
      "Nếu cần dùng chất bôi trơn: chọn loại gốc nước, vì loại gốc dầu có thể làm hỏng bao",
    ],
    steps: [
      {
        title: "Mua ở nơi đáng tin",
        detail:
          "Nhà thuốc, siêu thị, cửa hàng tiện lợi hoặc trang bán hàng chính hãng. Tránh hàng trôi nổi giá rẻ bất thường.",
      },
      {
        title: "Kiểm tra hạn dùng và bao bì",
        detail:
          "Gói phải còn nguyên vẹn, có hơi khí bên trong khi bóp nhẹ. Gói bị rách, dẹp lép hoặc quá hạn thì bỏ.",
      },
      {
        title: "Bảo quản đúng chỗ",
        detail:
          "Nơi khô mát. Để lâu trong ví hoặc cốp xe nóng làm chất liệu xuống cấp nhanh.",
      },
      {
        title: "Mở gói cẩn thận",
        detail: "Xé theo rãnh có sẵn bằng tay. Dùng răng, kéo hay móng tay dài dễ làm rách.",
      },
      {
        title: "Dùng một lần rồi bỏ",
        detail:
          "Mỗi lần một cái mới, bỏ vào thùng rác chứ đừng xả xuống bồn cầu vì gây tắc.",
      },
    ],
    notes: [
      "Không có biện pháp nào hiệu quả tuyệt đối. Nếu lo lắng sau sự cố, hãy đến cơ sở y tế hoặc hỏi dược sĩ càng sớm càng tốt vì một số phương án có giới hạn thời gian.",
      "Bài viết mang tính hướng dẫn chung, không thay thế tư vấn của nhân viên y tế.",
    ],
    faq: [
      {
        q: "Ngại đứng mua ở quầy thì sao?",
        a: "Mua ở siêu thị hoặc cửa hàng tiện lợi tự chọn, hoặc đặt online giao tận nhà. Người bán hàng gặp chuyện này mỗi ngày và không để tâm như bạn nghĩ đâu.",
      },
      {
        q: "Dùng hai cái cùng lúc cho chắc hơn không?",
        a: "Không. Hai lớp cọ vào nhau dễ rách hơn. Dùng đúng một cái, đúng cách.",
      },
    ],
    sources: [],
  },

  {
    slug: "cac-bien-phap-tranh-thai-hieu-de-di-hoi-bac-si",
    title: "Các biện pháp tránh thai: hiểu để đi hỏi bác sĩ",
    excerpt:
      "Không có lựa chọn nào tốt nhất cho tất cả mọi người — bài này giúp bạn biết nên hỏi bác sĩ điều gì.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Các biện pháp chia thành vài nhóm chính: dùng hàng ngày, dùng theo lần, tác dụng dài hạn, và biện pháp vĩnh viễn. Mỗi nhóm có ưu nhược điểm và chống chỉ định riêng, phụ thuộc vào sức khỏe của bạn — nên chọn cùng bác sĩ chứ đừng theo lời mách.",
    prepare: [
      "Tiền sử bệnh của bạn: huyết áp, tim mạch, đau nửa đầu, bệnh gan, rối loạn đông máu",
      "Thuốc đang dùng, kể cả thực phẩm chức năng",
      "Dự định có con trong bao lâu tới — câu này quyết định khá nhiều",
    ],
    steps: [
      {
        title: "Biết các nhóm biện pháp tồn tại",
        detail:
          "Có nhóm dùng theo từng lần, nhóm dùng đều mỗi ngày, nhóm đặt hoặc cấy có tác dụng dài, và biện pháp triệt sản. Chỉ cần biết chúng tồn tại để hỏi cho đúng.",
      },
      {
        title: "Xác định điều bạn ưu tiên",
        detail:
          "Sợ quên uống mỗi ngày? Muốn có con trong một hai năm tới? Ngại thủ thuật? Nói rõ những điều này với bác sĩ.",
      },
      {
        title: "Đi khám và hỏi thẳng",
        detail:
          "Ba câu quan trọng: với sức khỏe của tôi thì biện pháp nào phù hợp, tác dụng phụ thường gặp là gì, và nếu muốn dừng thì bao lâu có thể có thai lại.",
      },
      {
        title: "Đừng dùng theo đơn của người khác",
        detail:
          "Thuốc hợp với bạn bè có thể chống chỉ định với bạn. Đây là loại thuốc cần bác sĩ hoặc dược sĩ tư vấn dựa trên tiền sử của chính bạn.",
      },
      {
        title: "Theo dõi và tái khám",
        detail:
          "Có tác dụng phụ khó chịu thì quay lại nói với bác sĩ để đổi, đừng âm thầm bỏ ngang.",
      },
    ],
    notes: [
      "Bài viết KHÔNG khuyến nghị bất kỳ loại thuốc hay biện pháp cụ thể nào — mọi lựa chọn phải qua tư vấn y tế.",
      "Biện pháp khẩn cấp sau sự cố có giới hạn thời gian và không dùng thay cho biện pháp thường xuyên. Hỏi dược sĩ hoặc bác sĩ ngay khi cần.",
      "Chỉ một số biện pháp có tác dụng phòng bệnh lây qua đường tình dục — đây là hai vấn đề khác nhau, đừng gộp làm một.",
    ],
    faq: [
      {
        q: "Mua thuốc ở nhà thuốc có cần đơn không?",
        a: "Tuỳ loại thuốc và quy định hiện hành. Dù có mua được thì vẫn nên hỏi dược sĩ về tiền sử bệnh và thuốc bạn đang dùng.",
      },
      {
        q: "Bạn tôi dùng loại đó thấy ổn, tôi dùng theo được không?",
        a: "Không nên. Cùng một biện pháp có thể an toàn với người này nhưng chống chỉ định với người kia.",
      },
    ],
    sources: [],
  },

  {
    slug: "noi-chuyen-ve-ranh-gioi-va-dong-thuan",
    title: "Nói chuyện về ranh giới và sự đồng thuận",
    excerpt:
      "Chuyện khó mở lời nhất trong một mối quan hệ — nhưng nói được thì nhẹ cả hai bên.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đồng thuận nghĩa là cả hai đều rõ ràng muốn, nói ra được, và có thể đổi ý bất cứ lúc nào. Im lặng không phải là đồng ý, và đồng ý lần trước không có nghĩa đồng ý mãi mãi. Chọn lúc bình thường mà nói chuyện, đừng đợi tới lúc đang căng thẳng.",
    prepare: [
      "Biết rõ ranh giới của chính mình: điều gì bạn thoải mái, điều gì không",
      "Chọn thời điểm cả hai tỉnh táo và không vội",
      "Tinh thần lắng nghe: đây là cuộc trò chuyện hai chiều, không phải bản yêu sách",
    ],
    steps: [
      {
        title: "Nói bằng câu bắt đầu bằng mình",
        detail:
          "Ví dụ: mình thấy chưa sẵn sàng chuyện này. Cách nói này ít gây phòng thủ hơn là chỉ trích đối phương.",
      },
      {
        title: "Nói cụ thể thay vì nói chung chung",
        detail:
          "Điều gì được, điều gì không, và trong hoàn cảnh nào. Càng rõ càng đỡ hiểu lầm.",
      },
      {
        title: "Hỏi lại phía bên kia",
        detail:
          "Còn bạn thì sao, có điều gì bạn không thoải mái mà chưa nói không. Nghe thật chứ đừng nghe cho có.",
      },
      {
        title: "Thống nhất cách dừng lại",
        detail:
          "Cả hai đồng ý rằng khi một người nói dừng thì dừng ngay, không hỏi vặn, không giận dỗi.",
      },
      {
        title: "Xem lại khi hoàn cảnh đổi",
        detail:
          "Ranh giới thay đổi theo thời gian và tâm trạng. Hỏi lại nhau là chuyện bình thường, không phải làm mất hứng.",
      },
    ],
    notes: [
      "Người tôn trọng bạn sẽ không dùng giận dỗi, đe doạ hay chuyện tiền bạc để ép bạn làm điều bạn không muốn. Đó là dấu hiệu của mối quan hệ không lành mạnh.",
      "Bị ép buộc hoặc xâm hại là chuyện nghiêm trọng và không phải lỗi của bạn. Hãy tìm tới người thân đáng tin, cơ sở y tế hoặc cơ quan công an để được hỗ trợ.",
      "Không có chất kích thích nào khiến việc ép buộc trở nên chấp nhận được — say không phải là lý do biện minh.",
    ],
    faq: [
      {
        q: "Nói ra sợ người kia tự ái thì sao?",
        a: "Một người thật lòng quan tâm bạn sẽ thấy nhẹ nhõm vì biết rõ ranh giới, chứ không tự ái. Nếu họ giận dữ vì bạn đặt ranh giới, đó chính là câu trả lời về mối quan hệ này.",
      },
      {
        q: "Đang yêu lâu rồi có cần hỏi nữa không?",
        a: "Có. Mỗi lần là một lần, và cảm giác của con người thay đổi theo ngày. Hỏi một câu ngắn thôi cũng đủ.",
      },
    ],
    sources: [],
  },

  {
    slug: "theo-doi-chu-ky-kinh-nguyet-va-khi-nao-di-kham",
    title: "Theo dõi chu kỳ kinh nguyệt và khi nào đi khám",
    excerpt:
      "Ghi lại vài con số mỗi tháng giúp bạn biết cơ thể mình bình thường ra sao — và nhận ra ngay khi có gì đó khác.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Ghi lại ba thứ mỗi kỳ: ngày bắt đầu, số ngày ra máu, và mức độ đau hoặc lượng máu so với bình thường. Sau vài tháng bạn sẽ có bức tranh riêng của cơ thể mình — và đó chính là thứ bác sĩ cần khi bạn đi khám.",
    prepare: [
      "Một ứng dụng theo dõi chu kỳ, hoặc đơn giản là ghi chú trong điện thoại",
      "Kiên nhẫn vài tháng — một kỳ đơn lẻ chưa nói lên điều gì",
      "Biết chu kỳ của mỗi người mỗi khác, không cần giống ai cả",
    ],
    steps: [
      {
        title: "Ghi ngày đầu tiên ra máu",
        detail:
          "Đây là mốc quan trọng nhất và cũng là con số bác sĩ luôn hỏi khi bạn đi khám.",
      },
      {
        title: "Ghi số ngày và mức độ",
        detail:
          "Ra máu mấy ngày, nhiều hay ít hơn bình thường, đau ở mức chịu được hay phải nghỉ làm.",
      },
      {
        title: "Ghi thêm triệu chứng kèm theo",
        detail:
          "Đau đầu, buồn nôn, thay đổi tâm trạng rõ rệt. Những chi tiết này giúp bác sĩ nhìn ra bức tranh tổng thể.",
      },
      {
        title: "So sánh sau vài tháng",
        detail:
          "Chu kỳ của bạn dài bao nhiêu ngày, đều hay không. Biết cái bình thường của mình thì mới nhận ra cái bất thường.",
      },
      {
        title: "Mang dữ liệu này đi khám",
        detail:
          "Đưa bác sĩ xem ghi chú vài tháng gần nhất — hữu ích hơn nhiều so với cố nhớ lại tại chỗ.",
      },
    ],
    notes: [
      "Đi khám khi: mất kinh nhiều kỳ liên tiếp mà không rõ lý do, ra máu nhiều bất thường, đau tới mức không sinh hoạt được, ra máu giữa kỳ, hoặc chu kỳ thay đổi đột ngột so với thói quen của bạn.",
      "Đau dữ dội kèm choáng, sốt cao, ra máu ồ ạt: đến cơ sở y tế ngay.",
      "Bài viết không thay thế thăm khám; mọi bất thường nên được bác sĩ đánh giá trực tiếp.",
    ],
    faq: [
      {
        q: "Chu kỳ không đều có sao không?",
        a: "Có nhiều nguyên nhân từ nhẹ tới cần điều trị, gồm cả căng thẳng và thay đổi cân nặng. Ghi chép vài tháng rồi mang đi khám là cách tốt nhất để biết.",
      },
      {
        q: "Ứng dụng dự đoán ngày rụng trứng có chính xác không?",
        a: "Đó là ước lượng dựa trên chu kỳ trước, không phải kết quả đo lường. Đừng dùng ứng dụng làm biện pháp tránh thai.",
      },
    ],
    sources: [],
  },
];
