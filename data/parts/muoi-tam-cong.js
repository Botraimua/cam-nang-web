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

  {
    slug: "bi-doa-tung-anh-nhay-cam-xu-ly-sao",
    title: "Bị doạ tung ảnh nhạy cảm: xử lý sao",
    excerpt:
      "Đừng chuyển tiền. Đừng im lặng một mình. Đây là kịch bản lừa đảo có công thức, và bạn không phải người đầu tiên.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Ba việc làm ngay: KHÔNG chuyển tiền (trả rồi chúng sẽ đòi tiếp), chụp màn hình toàn bộ tin nhắn và thông tin tài khoản của kẻ đe doạ, rồi trình báo công an nơi bạn ở. Sau đó khoá quyền xem danh bạ, đổi mật khẩu và kể cho một người bạn tin tưởng.",
    prepare: [
      "Bình tĩnh — kẻ lừa đảo sống nhờ việc bạn hoảng loạn và làm liều",
      "Điện thoại còn pin để chụp màn hình làm bằng chứng",
      "Một người bạn hoặc người thân để kể — đừng gánh một mình",
    ],
    steps: [
      {
        title: "Dừng lại, đừng trả tiền",
        detail:
          "Trả một lần là chúng biết bạn sợ và sẽ đòi tiếp, lần sau nhiều hơn. Rất nhiều trường hợp trả xong vẫn bị doạ tiếp.",
      },
      {
        title: "Lưu bằng chứng trước khi chặn",
        detail:
          "Chụp màn hình cuộc trò chuyện, tên tài khoản, số tài khoản ngân hàng hoặc ví điện tử chúng đưa. Chặn trước khi chụp là mất sạch bằng chứng.",
      },
      {
        title: "Trình báo công an",
        detail:
          "Đến công an phường xã nơi bạn cư trú, mang theo bằng chứng. Đây là hành vi phạm tội, bạn là người bị hại chứ không phải người có lỗi.",
      },
      {
        title: "Cắt đường chúng doạ bạn",
        detail:
          "Khoá hoặc giới hạn danh sách bạn bè trên mạng xã hội, đổi mật khẩu các tài khoản, bật xác thực hai lớp. Chúng doạ tung cho người quen thì hãy làm khó việc đó.",
      },
      {
        title: "Nói với một người bạn tin",
        detail:
          "Kẻ lừa đảo mạnh nhất khi bạn giấu. Nói ra một câu thôi cũng đủ làm nhẹ đi rất nhiều, và bạn có người tỉnh táo cùng xử lý.",
      },
    ],
    notes: [
      "Rất nhiều vụ chỉ là doạ suông: chúng cắt ghép ảnh hoặc không có gì trong tay cả, chỉ đánh vào nỗi sợ.",
      "Chiêu quen thuộc: tài khoản giả mạo người xinh đẹp trên Facebook, Instagram, Telegram — làm quen, gợi chuyện, rồi ghi hình.",
      "Chúng thường đòi chuyển bằng tiền điện tử vì khó truy vết. Thấy yêu cầu này là gần như chắc chắn lừa đảo.",
      "Nếu bạn dưới 18 tuổi hoặc người bị hại là trẻ vị thành niên: báo ngay cho người lớn tin cậy và công an, đây là tội nghiêm trọng.",
    ],
    faq: [
      {
        q: "Tôi thấy xấu hổ quá, có cần báo công an không?",
        a: "Có. Cán bộ tiếp nhận xử lý loại vụ này thường xuyên và họ nhìn nó như một vụ lừa đảo, không nhìn bạn. Im lặng chỉ khiến kẻ lừa đảo tiếp tục với người khác.",
      },
      {
        q: "Lỡ chuyển tiền rồi thì sao?",
        a: "Gọi ngay tổng đài ngân hàng đề nghị hỗ trợ khẩn và trình báo công an càng sớm càng tốt — vẫn có cơ hội chặn dòng tiền nếu kịp.",
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
      "Nhiều người chưa từng nghe tên hai thứ này, dù ở Việt Nam có chương trình cấp miễn phí. Một trong hai loại chỉ có tác dụng trong vòng 72 giờ.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "PrEP là thuốc uống trước, dành cho người có nguy cơ cao, dùng đều đặn theo hướng dẫn. PEP là thuốc uống sau khi đã có phơi nhiễm và phải bắt đầu càng sớm càng tốt, trong vòng 72 giờ. Cả hai đều phải do cơ sở y tế chỉ định — đến phòng khám HIV, trung tâm kiểm soát bệnh tật hoặc bệnh viện có chuyên khoa truyền nhiễm.",
    prepare: [
      "Biết mốc thời gian: nguy cơ xảy ra cách đây bao lâu (quan trọng nhất với PEP)",
      "Danh sách thuốc đang dùng và bệnh nền nếu có",
      "Số điện thoại hoặc địa chỉ cơ sở y tế gần nhất có dịch vụ HIV",
    ],
    steps: [
      {
        title: "Có nguy cơ vừa xảy ra: đi ngay trong ngày",
        detail:
          "PEP càng uống sớm càng có ý nghĩa và có giới hạn 72 giờ. Đừng ngồi tra mạng cả buổi rồi mới đi — tới cơ sở y tế trước, hỏi sau.",
      },
      {
        title: "Tìm đúng nơi",
        detail:
          "Phòng khám ngoại trú HIV, trung tâm kiểm soát bệnh tật (CDC) tỉnh thành, bệnh viện có khoa truyền nhiễm, hoặc các tổ chức cộng đồng có kết nối dịch vụ.",
      },
      {
        title: "Nói thật tình huống của bạn",
        detail:
          "Nhân viên y tế cần biết chuyện gì đã xảy ra và khi nào để chỉ định đúng. Họ làm việc này hằng ngày và có quy định bảo mật.",
      },
      {
        title: "Làm xét nghiệm theo hướng dẫn",
        detail:
          "Trước khi dùng và trong quá trình dùng đều cần xét nghiệm định kỳ. Đây là phần bắt buộc, không phải thủ tục cho có.",
      },
      {
        title: "Hỏi về chi phí và chương trình hỗ trợ",
        detail:
          "Ở Việt Nam có chương trình cấp thuốc dự phòng miễn phí cho nhiều nhóm đối tượng. Cứ hỏi thẳng nơi tiếp nhận xem bạn có thuộc diện được hỗ trợ không.",
      },
    ],
    notes: [
      "Đây là thuốc kê đơn, phải có chỉ định và theo dõi của nhân viên y tế — tuyệt đối không tự mua uống theo lời mách.",
      "Thuốc dự phòng HIV không phòng được các bệnh lây qua đường tình dục khác.",
      "Bài viết chỉ giới thiệu để bạn biết mà đi hỏi, không phải hướng dẫn điều trị.",
    ],
    faq: [
      {
        q: "Uống PEP có nghĩa là tôi đã nhiễm HIV?",
        a: "Không. Đây là biện pháp dự phòng sau phơi nhiễm, dùng để giảm nguy cơ. Việc xác định tình trạng phải qua xét nghiệm theo lịch bác sĩ hẹn.",
      },
      {
        q: "Đi khám có bị lộ danh tính không?",
        a: "Cơ sở y tế có quy định bảo mật thông tin người bệnh. Nếu lo, bạn có thể hỏi thẳng về quy trình bảo mật ngay khi đăng ký.",
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
      "Gặp người lạ từ mạng là chuyện bình thường bây giờ. Vài quy tắc nhỏ giúp buổi hẹn chỉ dừng ở mức vui hoặc chán, chứ không thành rắc rối.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Ba quy tắc vàng cho lần gặp đầu: hẹn ở chỗ đông người, tự đi tự về bằng phương tiện của mình, và báo cho một người bạn biết bạn đi đâu với ai. Đừng để đồ uống rời mắt, và đừng chuyển tiền cho người mới quen dù lý do nghe thương tới đâu.",
    prepare: [
      "Chia sẻ vị trí trực tiếp cho một người bạn trong buổi hẹn",
      "Sạc đầy pin, chuẩn bị sẵn tiền hoặc app gọi xe để về",
      "Kiểm tra sơ tài khoản đối phương: ảnh có bị lấy từ nơi khác không, có mạng xã hội thật không",
    ],
    steps: [
      {
        title: "Gọi video ngắn trước khi gặp",
        detail:
          "Một cuộc gọi hai phút loại bỏ được phần lớn tài khoản giả mạo. Người thật sẽ không ngại việc này.",
      },
      {
        title: "Chọn địa điểm công cộng, ban ngày càng tốt",
        detail:
          "Quán cà phê đông người cho lần đầu. Đừng để họ đón tận nhà và đừng tới nhà riêng của người mới quen.",
      },
      {
        title: "Báo lịch trình cho một người bạn",
        detail:
          "Gặp ai, ở đâu, mấy giờ về. Hẹn luôn giờ nhắn tin báo an toàn — nghe hơi quá nhưng rất đáng.",
      },
      {
        title: "Giữ đồ uống trong tầm mắt",
        detail:
          "Đi vệ sinh thì gọi ly mới khi quay lại. Thấy chóng mặt bất thường không giải thích được thì nhờ nhân viên quán giúp và về ngay.",
      },
      {
        title: "Cảnh giác với chuyện tiền bạc",
        detail:
          "Người mới quen kể chuyện khó khăn rồi mượn tiền, hoặc rủ đầu tư sinh lời — đây là kịch bản lừa đảo cực phổ biến, không phải chuyện tình cảm.",
      },
    ],
    notes: [
      "Không thoải mái thì có quyền về bất cứ lúc nào, không cần lý do và không cần lịch sự quá mức.",
      "Đừng gửi ảnh nhạy cảm cho người mới quen — đây là nguyên liệu chính của các vụ tống tiền.",
      "Người thật sự tử tế sẽ tôn trọng việc bạn cẩn thận, chứ không dỗi vì điều đó.",
    ],
    faq: [
      {
        q: "Làm sao biết tài khoản là thật?",
        a: "Gọi video, kiểm tra ảnh bằng tìm kiếm hình ảnh ngược, xem họ có mạng xã hội với hoạt động lâu dài không. Ảnh quá hoàn hảo và hồ sơ quá mới là dấu hiệu đáng ngờ.",
      },
      {
        q: "Có nên nhận lời đi xa ngay lần đầu không?",
        a: "Không nên. Đi xa, đi qua đêm hay tới nơi bạn không biết đường về đều làm bạn mất thế chủ động. Để dành cho lúc đã hiểu nhau hơn.",
      },
    ],
    sources: [],
  },

  {
    slug: "kham-suc-khoe-tien-hon-nhan",
    title: "Khám sức khỏe tiền hôn nhân",
    excerpt:
      "Nghe hơi nghiêm trọng nhưng thật ra khá nhẹ nhàng — và giúp hai người tránh được vài chuyện khó xử về sau.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đến bệnh viện phụ sản hoặc bệnh viện đa khoa có gói khám tiền hôn nhân, đăng ký gói dành cho cặp đôi. Thường gồm khám tổng quát, xét nghiệm máu, tầm soát bệnh lây truyền và bệnh di truyền, tư vấn sinh sản. Nên đi trước cưới vài tháng để còn thời gian xử lý nếu có gì cần điều trị.",
    prepare: [
      "Đi cùng nhau — đây là việc của cả hai, không phải của riêng ai",
      "Nhịn ăn sáng nếu gói khám có xét nghiệm máu (hỏi trước khi đặt lịch)",
      "Tiền sử bệnh của gia đình hai bên nếu biết",
    ],
    steps: [
      {
        title: "Chọn cơ sở và hỏi gói khám",
        detail:
          "Gọi trước hỏi gói tiền hôn nhân gồm những gì, giá bao nhiêu, mất mấy buổi. Giá chênh nhau khá xa giữa các nơi.",
      },
      {
        title: "Đặt lịch sớm trước ngày cưới",
        detail:
          "Nên trước vài tháng. Nếu phát hiện điều gì cần điều trị hoặc cần tiêm phòng thì còn kịp thời gian.",
      },
      {
        title: "Khám và làm xét nghiệm",
        detail:
          "Thường có khám tổng quát, xét nghiệm máu và nước tiểu, tầm soát bệnh lây truyền, đôi khi có siêu âm và các xét nghiệm di truyền tuỳ gói.",
      },
      {
        title: "Nghe tư vấn cùng nhau",
        detail:
          "Đây là phần giá trị nhất mà nhiều cặp bỏ qua: hỏi bác sĩ về kế hoạch có con, biện pháp tránh thai phù hợp, tiêm phòng nên làm trước khi mang thai.",
      },
      {
        title: "Nói chuyện thẳng với nhau sau khi có kết quả",
        detail:
          "Kết quả là chuyện của hai người. Giấu nhau mới là vấn đề, chứ bản thân một chỉ số bất thường thường có cách xử lý.",
      },
    ],
    notes: [
      "Đây không phải cuộc kiểm tra để chấm điểm nhau. Mục đích là biết sớm để chuẩn bị, không phải để phán xét.",
      "Danh mục khám và chi phí khác nhau theo cơ sở và theo gói — hỏi rõ trước khi đăng ký.",
      "Bài viết mô tả quy trình chung, không thay thế tư vấn y tế.",
    ],
    faq: [
      {
        q: "Không cưới, chỉ sống chung thì có nên khám không?",
        a: "Vẫn nên. Gói khám này thực chất là kiểm tra sức khỏe sinh sản và bệnh lây truyền cho hai người — không phụ thuộc vào việc có đăng ký kết hôn hay không.",
      },
      {
        q: "Bạn đời ngại đi cùng thì sao?",
        a: "Nói rõ đây là việc cho cả hai và cho con cái sau này. Nếu vẫn từ chối thẳng thừng, bản thân điều đó cũng là thông tin đáng để hai người nói chuyện thêm.",
      },
    ],
    sources: [],
  },

  {
    slug: "viem-nhiem-phu-khoa-chuyen-rat-thuong",
    title: "Viêm nhiễm phụ khoa: chuyện rất thường",
    excerpt:
      "Ngứa, khí hư đổi màu, có mùi lạ — phần lớn phụ nữ gặp ít nhất một lần trong đời. Vấn đề nằm ở chỗ tự chữa lung tung.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đừng tự mua thuốc đặt hay dung dịch rửa theo lời mách trên mạng, vì mỗi nguyên nhân cần thuốc khác nhau và dùng sai làm bệnh dai dẳng hơn. Đi khám để biết đúng nguyên nhân, và cứ vệ sinh bình thường bằng nước sạch, không thụt rửa sâu.",
    prepare: [
      "Ghi lại: triệu chứng bắt đầu khi nào, khí hư màu gì, có mùi không, có ngứa rát không",
      "Nhớ những gì bạn đã dùng để tự xử lý trước đó",
      "Sắp xếp đi khám khi không trong kỳ kinh nếu không phải việc gấp",
    ],
    steps: [
      {
        title: "Ngừng tự chữa",
        detail:
          "Thuốc đặt mua theo mách nước, dung dịch rửa mạnh, xông lá — nhiều thứ trong số này làm mất cân bằng tự nhiên và khiến tình trạng nặng thêm.",
      },
      {
        title: "Đi khám để biết nguyên nhân",
        detail:
          "Do nấm, do vi khuẩn hay do nguyên nhân khác đều có biểu hiện na ná nhau nhưng cách điều trị khác hẳn. Bác sĩ có thể lấy mẫu xét nghiệm để xác định.",
      },
      {
        title: "Dùng thuốc đủ liệu trình",
        detail:
          "Hết triệu chứng chưa chắc đã hết bệnh. Bỏ ngang giữa chừng là lý do phổ biến khiến bệnh quay lại.",
      },
      {
        title: "Vệ sinh đơn giản thôi",
        detail:
          "Nước sạch, rửa bên ngoài, lau khô, đồ lót cotton thoáng. Không thụt rửa sâu, không dùng xà phòng mạnh.",
      },
      {
        title: "Tái phát nhiều lần thì nói với bác sĩ",
        detail:
          "Lặp đi lặp lại có thể liên quan tới nguyên nhân khác hoặc cần điều trị cả bạn tình. Đừng cứ mỗi lần lại mua thuốc cũ dùng lại.",
      },
    ],
    notes: [
      "Bài viết không phải chẩn đoán hay chỉ định điều trị. Mọi loại thuốc phải do bác sĩ hoặc dược sĩ hướng dẫn.",
      "Đi khám ngay nếu: sốt, đau bụng dưới nhiều, ra máu bất thường, hoặc đang mang thai.",
      "Chuyện này phổ biến tới mức bác sĩ gặp mỗi ngày — không có gì đáng xấu hổ, và cũng không đồng nghĩa với việc bạn ở bẩn.",
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
    ],
    sources: [],
  },

  {
    slug: "roi-loan-cuong-va-xuat-tinh-som",
    title: "Rối loạn cương và xuất tinh sớm: khi nào đi khám",
    excerpt:
      "Chuyện thỉnh thoảng trục trặc là bình thường và ai cũng gặp. Vấn đề là nhiều người im lặng nhiều năm thay vì đi khám một buổi.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Thỉnh thoảng gặp trục trặc do mệt, stress, rượu bia là chuyện bình thường. Nhưng nếu tình trạng kéo dài nhiều tuần, lặp lại thường xuyên và ảnh hưởng tới cuộc sống thì nên đi khám nam khoa — đôi khi đây là dấu hiệu sớm của bệnh tim mạch, tiểu đường hoặc vấn đề nội tiết.",
    prepare: [
      "Ghi lại: bắt đầu từ khi nào, xảy ra trong mọi tình huống hay chỉ với một người",
      "Liệt kê thuốc đang dùng — một số loại có tác dụng phụ lên chuyện này",
      "Thành thật với chính mình về rượu bia, thuốc lá, giấc ngủ và mức độ căng thẳng gần đây",
    ],
    steps: [
      {
        title: "Phân biệt trục trặc nhất thời và kéo dài",
        detail:
          "Vài lần trong giai đoạn căng thẳng thì thường tự hết. Kéo dài nhiều tuần và lặp lại đều đặn mới là lúc cần khám.",
      },
      {
        title: "Đừng tự mua thuốc trên mạng",
        detail:
          "Thuốc trôi nổi không rõ thành phần có thể gây tụt huyết áp nguy hiểm, nhất là khi bạn đang dùng thuốc tim mạch. Đây là nhóm thuốc bắt buộc phải có bác sĩ.",
      },
      {
        title: "Đi khám nam khoa hoặc tiết niệu",
        detail:
          "Bác sĩ hỏi bệnh sử, có thể cho xét nghiệm máu để kiểm tra đường huyết, mỡ máu, nội tiết. Buổi khám thường ngắn hơn bạn tưởng.",
      },
      {
        title: "Xem lại lối sống trong lúc chờ",
        detail:
          "Ngủ đủ, bớt rượu bia, bỏ thuốc lá, vận động đều. Nghe cũ kỹ nhưng đây là nhóm yếu tố ảnh hưởng rõ rệt nhất.",
      },
      {
        title: "Nói với bạn đời nếu thấy được",
        detail:
          "Im lặng thường khiến người kia tự suy diễn là do họ. Một câu giải thích ngắn gỡ được nhiều hiểu lầm.",
      },
    ],
    notes: [
      "Cảnh giác với quảng cáo cam kết chữa dứt điểm sau một liệu trình, hoặc phòng khám hối thúc đóng gói tiền lớn ngay.",
      "Bài viết không chẩn đoán và không chỉ định điều trị — hãy để bác sĩ đánh giá trường hợp của bạn.",
      "Đây là vấn đề y khoa như mọi vấn đề khác, không phải thước đo giá trị của bạn.",
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
    ],
    sources: [],
  },

  {
    slug: "coc-nguyet-san-va-cac-lua-chon-khac",
    title: "Cốc nguyệt san và các lựa chọn khác",
    excerpt:
      "Băng vệ sinh không phải lựa chọn duy nhất. Mỗi loại hợp với một kiểu sinh hoạt khác nhau — và lần đầu dùng thường hơi lóng ngóng.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Có mấy nhóm chính: băng vệ sinh, tampon, cốc nguyệt san và quần lót nguyệt san. Chọn theo sinh hoạt của bạn — đi bơi, chơi thể thao, đi làm cả ngày hay ngủ đêm đều có loại phù hợp hơn. Lần đầu dùng loại đưa vào bên trong thì đọc kỹ hướng dẫn và cho phép mình lóng ngóng vài lần.",
    prepare: [
      "Biết lượng máu kinh của bạn thường nhiều hay ít",
      "Đọc kỹ hướng dẫn của nhà sản xuất trước khi dùng lần đầu",
      "Chọn size phù hợp — cốc nguyệt san có nhiều cỡ khác nhau",
    ],
    steps: [
      {
        title: "Hiểu nhanh từng loại",
        detail:
          "Băng vệ sinh dùng ngoài, dễ nhất cho người mới. Tampon và cốc nguyệt san đưa vào bên trong, tiện khi vận động. Quần lót nguyệt san giặt dùng lại được.",
      },
      {
        title: "Chú ý thời gian thay",
        detail:
          "Mỗi loại có khuyến cáo thời gian tối đa riêng của nhà sản xuất. Để quá lâu có thể gây nhiễm trùng — đây là điều quan trọng nhất cần nhớ.",
      },
      {
        title: "Rửa tay trước và sau",
        detail: "Áp dụng với mọi loại, đặc biệt với loại đưa vào bên trong.",
      },
      {
        title: "Cốc nguyệt san: tiệt trùng theo hướng dẫn",
        detail:
          "Đầu và cuối mỗi kỳ thường cần tiệt trùng bằng nước sôi theo hướng dẫn. Trong kỳ thì rửa sạch giữa các lần dùng.",
      },
      {
        title: "Lần đầu cứ tập ở nhà",
        detail:
          "Đừng thử loại mới vào ngày đi làm hay đi chơi xa. Tập vài lần ở nhà cho quen tay rồi hãy mang ra ngoài.",
      },
    ],
    notes: [
      "Đau bất thường, khó lấy ra, sốt cao kèm nổi ban trong lúc dùng sản phẩm đưa vào bên trong: tháo ra và đi khám ngay.",
      "Làm theo hướng dẫn của nhà sản xuất trên bao bì — mỗi sản phẩm có khuyến cáo riêng.",
      "Bài viết không thay thế tư vấn y tế; có bệnh lý phụ khoa thì hỏi bác sĩ trước khi đổi loại.",
    ],
    faq: [
      {
        q: "Chưa quan hệ dùng cốc nguyệt san hay tampon được không?",
        a: "Nhiều người vẫn dùng được, nhưng nên đọc kỹ hướng dẫn và chọn cỡ nhỏ. Băn khoăn thì hỏi bác sĩ phụ khoa cho yên tâm.",
      },
      {
        q: "Cốc nguyệt san có đắt không?",
        a: "Chi phí ban đầu cao hơn nhưng dùng lại được nhiều kỳ, nên tính đường dài thường rẻ hơn. Đổi lại bạn phải chịu khó vệ sinh đúng cách.",
      },
    ],
    sources: [],
  },

  {
    slug: "thuoc-tranh-thai-khan-cap-hieu-dung",
    title: "Thuốc tránh thai khẩn cấp: hiểu cho đúng",
    excerpt:
      "Có giới hạn thời gian, không phải thuốc dùng thường xuyên, và không phải ai cũng phù hợp. Vài điều nên biết trước khi cần tới.",
    readTimeMinutes: 2,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đây là biện pháp dùng cho tình huống ngoài ý muốn, càng sớm càng có ý nghĩa vì hiệu quả giảm dần theo thời gian. Ra nhà thuốc và nói thẳng tình huống để dược sĩ tư vấn loại phù hợp, hoặc tới cơ sở y tế. Không dùng thay cho biện pháp tránh thai thường xuyên.",
    prepare: [
      "Nhớ mốc thời gian: sự cố xảy ra cách đây bao lâu",
      "Danh sách thuốc đang dùng và bệnh nền nếu có",
      "Chuẩn bị nói thẳng với dược sĩ — họ cần thông tin đúng mới tư vấn đúng",
    ],
    steps: [
      {
        title: "Đi càng sớm càng tốt",
        detail:
          "Hiệu quả phụ thuộc nhiều vào thời gian. Đừng chờ tới hôm sau vì ngại, cũng đừng ngồi đọc diễn đàn cả buổi.",
      },
      {
        title: "Nói thật tình huống với dược sĩ",
        detail:
          "Bao lâu rồi, đang dùng thuốc gì, có bệnh nền không. Dược sĩ hỏi để chọn đúng, không phải để tò mò.",
      },
      {
        title: "Hỏi kỹ cách dùng và tác dụng phụ",
        detail:
          "Uống lúc nào, nếu nôn sau khi uống thì làm gì, tác dụng phụ nào là bình thường và dấu hiệu nào cần đi khám.",
      },
      {
        title: "Theo dõi kỳ kinh tiếp theo",
        detail:
          "Kỳ kinh có thể tới sớm hoặc muộn hơn bình thường. Trễ quá lâu thì thử thai và đi khám.",
      },
      {
        title: "Tính chuyện lâu dài",
        detail:
          "Nếu bạn phải dùng tới biện pháp khẩn cấp, đó là dấu hiệu nên đi khám để chọn một biện pháp tránh thai thường xuyên phù hợp.",
      },
    ],
    notes: [
      "Đây KHÔNG phải thuốc dùng thường xuyên và không có tác dụng phòng bệnh lây qua đường tình dục.",
      "Bài viết không nêu tên thuốc, không hướng dẫn liều dùng — việc đó thuộc về dược sĩ và bác sĩ.",
      "Đau bụng dữ dội, ra máu nhiều bất thường sau khi dùng: đi khám ngay.",
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
    ],
    sources: [],
  },

  {
    slug: "dau-khi-quan-he-dung-can-rang-chiu",
    title: "Đau khi quan hệ: đừng cắn răng chịu",
    excerpt:
      "Nhiều người nghĩ đau là chuyện phải chấp nhận. Không phải vậy — và phần lớn nguyên nhân đều xử lý được.",
    readTimeMinutes: 2,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Đau không phải là điều bình thường phải chịu đựng. Nguyên nhân có thể là khô, viêm nhiễm, co thắt do căng thẳng, hoặc bệnh lý cần điều trị. Việc đầu tiên là dừng lại và nói với bạn đời, việc thứ hai là đi khám phụ khoa hoặc nam khoa để tìm nguyên nhân.",
    prepare: [
      "Ghi lại: đau ở thời điểm nào, đau kiểu gì, xảy ra thường xuyên hay thỉnh thoảng",
      "Nhớ xem có trùng với giai đoạn nào không: sau sinh, đang dùng thuốc, đang căng thẳng",
      "Sẵn sàng nói chuyện thẳng với bạn đời",
    ],
    steps: [
      {
        title: "Dừng lại khi đau",
        detail:
          "Cố chịu cho xong chỉ khiến cơ thể phản ứng phòng vệ mạnh hơn ở những lần sau, và làm bạn sợ hãi chuyện đó.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Nói cụ thể đau ở đâu và lúc nào. Người tôn trọng bạn sẽ muốn biết chứ không phật ý.",
      },
      {
        title: "Đi khám tìm nguyên nhân",
        detail:
          "Phụ khoa hoặc nam khoa tuỳ trường hợp. Mô tả thẳng để bác sĩ khoanh vùng nhanh — họ không phán xét đâu.",
      },
      {
        title: "Điều trị theo nguyên nhân",
        detail:
          "Mỗi nguyên nhân một hướng xử lý. Đừng tự mua thuốc bôi hay thuốc đặt theo lời mách trên mạng.",
      },
      {
        title: "Đừng bỏ qua yếu tố tâm lý",
        detail:
          "Căng thẳng, lo âu, trải nghiệm không tốt trước đây đều có thể gây đau thật sự chứ không phải tưởng tượng. Có chuyên gia hỗ trợ mảng này.",
      },
    ],
    notes: [
      "Đi khám ngay nếu kèm ra máu, sốt, đau bụng dưới dữ dội hoặc đau kéo dài sau khi đã kết thúc.",
      "Bài viết không chẩn đoán; nguyên nhân phải do bác sĩ xác định.",
      "Bị ép tiếp tục dù bạn đã nói đau là hành vi không thể chấp nhận trong bất kỳ mối quan hệ nào.",
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
    ],
    sources: [],
  },

  {
    slug: "lo-co-thai-ngoai-ke-hoach-lam-gi-truoc",
    title: "Lỡ có thai ngoài kế hoạch: làm gì trước",
    excerpt:
      "Hoảng là phản ứng bình thường. Nhưng vài bước đầu tiên nên làm bình tĩnh và đúng thứ tự.",
    readTimeMinutes: 3,
    category: "18-plus",
    author: null,
    quickAnswer:
      "Việc đầu tiên là xác nhận cho chắc: thử thai tại nhà rồi đến cơ sở y tế kiểm tra. Việc thứ hai là tìm tư vấn y tế chính thống để hiểu rõ tình trạng, mốc thời gian và các lựa chọn hợp pháp. Đừng tự mua thuốc trên mạng và đừng tìm tới dịch vụ chui — đây là chỗ nguy hiểm tới tính mạng.",
    prepare: [
      "Que thử thai mua ở nhà thuốc",
      "Nhớ ngày đầu kỳ kinh gần nhất",
      "Một người bạn hoặc người thân đáng tin để đi cùng — đừng xoay xở một mình nếu tránh được",
    ],
    steps: [
      {
        title: "Thử thai rồi đi khám xác nhận",
        detail:
          "Que thử tại nhà cho kết quả sơ bộ. Đến cơ sở y tế để xác nhận và biết chính xác tình trạng, vì có những trường hợp cần xử trí y tế khẩn.",
      },
      {
        title: "Tìm tư vấn ở cơ sở y tế chính thống",
        detail:
          "Bệnh viện phụ sản, trung tâm chăm sóc sức khỏe sinh sản. Ở đó có người tư vấn đúng chuyên môn và có nghĩa vụ bảo mật thông tin của bạn.",
      },
      {
        title: "Hỏi rõ mốc thời gian và các lựa chọn",
        detail:
          "Thời gian là yếu tố quan trọng trong mọi hướng đi. Hỏi thẳng: tình trạng hiện tại của tôi là gì, tôi có những lựa chọn hợp pháp nào, mỗi lựa chọn cần làm gì.",
      },
      {
        title: "Tuyệt đối tránh thuốc và dịch vụ trôi nổi",
        detail:
          "Thuốc rao bán trên mạng và cơ sở không phép là nguyên nhân của nhiều ca biến chứng nặng. Rẻ và kín đáo không đáng đánh đổi bằng tính mạng.",
      },
      {
        title: "Tìm chỗ dựa",
        detail:
          "Bạn thân, người nhà, hoặc dịch vụ tư vấn tâm lý. Quyết định lớn không nên đưa ra lúc đang hoảng loạn và cô độc.",
      },
    ],
    notes: [
      "Bài viết KHÔNG khuyên bạn chọn hướng nào. Mọi quyết định là của bạn, và cần dựa trên tư vấn y tế trực tiếp cho trường hợp cụ thể.",
      "Đau bụng dữ dội, ra máu nhiều, choáng ngất: đi cấp cứu ngay, đây có thể là tình huống nguy hiểm tính mạng.",
      "Bạn có quyền được tư vấn và chăm sóc y tế mà không bị phán xét. Cơ sở nào tỏ thái độ, hãy đổi nơi khác.",
    ],
    faq: [
      {
        q: "Tôi chưa muốn ai biết thì sao?",
        a: "Cơ sở y tế có nghĩa vụ bảo mật thông tin người bệnh. Bạn có thể đi khám trước, hiểu rõ tình trạng rồi mới quyết định kể với ai.",
      },
      {
        q: "Bạn trai không chịu trách nhiệm thì làm sao?",
        a: "Đó là chuyện đáng buồn nhưng không làm thay đổi việc bạn cần chăm sóc y tế. Tìm người thân hoặc bạn thân đi cùng, và cân nhắc tư vấn tâm lý cho giai đoạn này.",
      },
    ],
    sources: [],
  },
];
