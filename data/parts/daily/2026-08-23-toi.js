// Bài đăng ngày 2026-08-23 — khung 22h tối
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-23";

export const day20260823toi = [
  // ═══════════════════════ GIẤY TỜ ═══════════════════════
  {
    slug: "ly-hon-thu-tuc-thuan-tinh-don-phuong",
    title: "Ly hôn: hai con đường thủ tục và những gì cần chuẩn bị trước",
    excerpt:
      "Thuận tình hay đơn phương là hai quy trình khác hẳn nhau về thời gian và giấy tờ. Biết mình đang ở đường nào là bước đầu tiên.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Nếu cả hai cùng đồng ý và thoả thuận xong về con cái, tài sản thì làm thủ tục thuận tình — nhanh hơn và ít căng thẳng hơn. Nếu một bên không đồng ý hoặc không thoả thuận được thì là đơn phương, toà sẽ xét xử. Hồ sơ nộp tại toà án nhân dân có thẩm quyền. Ba nhóm giấy tờ luôn cần: giấy đăng ký kết hôn bản chính, giấy tờ tuỳ thân của hai bên, và giấy khai sinh của con nếu có. Đây là việc nên hỏi luật sư hoặc trợ giúp pháp lý.",
    prepare: [
      "Giấy chứng nhận đăng ký kết hôn bản chính — nếu mất thì xin trích lục trước",
      "CCCD và giấy tờ cư trú của cả hai bên",
      "Giấy khai sinh của các con, nếu có con chung",
      "Danh sách tài sản chung và giấy tờ chứng minh: sổ đỏ, đăng ký xe, sao kê ngân hàng",
    ],
    steps: [
      {
        title: "Xác định mình đi con đường nào",
        detail:
          "Thuận tình là khi hai bên cùng muốn ly hôn VÀ đã thống nhất được về nuôi con, cấp dưỡng, chia tài sản. Chỉ cần một trong ba khoản đó chưa thống nhất thì thực tế sẽ chuyển thành tranh chấp. Đơn phương là khi một bên yêu cầu và bên kia không đồng ý.",
      },
      {
        title: "Thu thập giấy tờ trước khi làm gì khác",
        detail:
          "Giấy đăng ký kết hôn bản chính là thứ hay thiếu nhất. Nếu mất, xin trích lục tại nơi đã đăng ký kết hôn hoặc theo hướng dẫn hiện hành. Làm việc này sớm vì nó mất thời gian riêng.",
      },
      {
        title: "Chuẩn bị hồ sơ tài sản một cách bình tĩnh",
        detail:
          "Liệt kê tài sản chung, tài sản riêng, các khoản nợ chung. Thu thập sổ đỏ, đăng ký xe, hợp đồng, sao kê. Làm việc này sớm và có bản sao lưu ở nơi an toàn — đừng để tới lúc căng thẳng mới đi tìm.",
      },
      {
        title: "Nghĩ kỹ về phần con cái trước khi nộp đơn",
        detail:
          "Toà quan tâm tới quyền lợi của trẻ hơn là mong muốn của cha mẹ. Chuẩn bị được câu trả lời cho: ai nuôi, nuôi ở đâu, học ở đâu, người kia thăm nom thế nào, mức cấp dưỡng bao nhiêu. Thoả thuận được trước thì đỡ rất nhiều thời gian ở toà.",
      },
      {
        title: "Nộp đơn tại toà án có thẩm quyền",
        detail:
          "Thẩm quyền thường theo nơi cư trú của bị đơn với vụ đơn phương, hoặc nơi cư trú của một trong hai bên với vụ thuận tình. Có yếu tố nước ngoài thì thẩm quyền khác. Gọi hỏi toà án trước để nộp đúng nơi, tránh mất một chuyến.",
      },
      {
        title: "Nộp án phí và giữ biên lai",
        detail:
          "Sau khi toà nhận đơn, bạn sẽ được thông báo nộp tạm ứng án phí tại cơ quan thi hành án. Giữ biên lai và nộp lại cho toà. Mức án phí tuỳ loại vụ việc và giá trị tài sản tranh chấp — hỏi toà cho con số hiện hành.",
      },
      {
        title: "Chuẩn bị cho buổi hoà giải",
        detail:
          "Toà thường tổ chức hoà giải trước khi xét xử. Đây không phải hình thức — nhiều vụ thoả thuận được ở bước này và kết thúc nhanh hơn hẳn. Đi đúng hẹn, mang đủ giấy tờ, và giữ thái độ bình tĩnh.",
      },
      {
        title: "Ghi chép mọi buổi làm việc",
        detail:
          "Ngày giờ, tên cán bộ, nội dung, giấy tờ đã nộp. Giữ tất cả giấy hẹn và biên nhận. Quá trình này kéo dài nhiều tháng và trí nhớ sẽ không đủ.",
      },
      {
        title: "Cân nhắc nhờ luật sư hoặc trợ giúp pháp lý",
        detail:
          "Vụ thuận tình đơn giản thì nhiều người tự làm được. Vụ có tranh chấp tài sản hoặc tranh chấp quyền nuôi con thì nên có luật sư. Nếu khó khăn về tài chính, hãy tìm trung tâm trợ giúp pháp lý nhà nước tại tỉnh — dịch vụ này miễn phí cho các đối tượng theo quy định.",
      },
      {
        title: "Giữ ổn định cho con trong suốt quá trình",
        detail:
          "Đừng để con nghe cha mẹ nói xấu nhau, đừng dùng con làm người đưa tin, và cố giữ nguyên trường lớp cùng nếp sinh hoạt. Đây không phải thủ tục nhưng là phần ảnh hưởng lâu dài nhất.",
      },
      {
        title: "Nhận bản án hoặc quyết định và kiểm kỹ",
        detail:
          "Đọc kỹ phần về quyền nuôi con, cấp dưỡng và chia tài sản. Nếu thấy sai sót hoặc không đồng ý, có thời hạn để kháng cáo — hỏi toà về thời hạn cụ thể ngay khi nhận.",
      },
      {
        title: "Làm nốt các thủ tục sau ly hôn",
        detail:
          "Cập nhật tình trạng hôn nhân, sang tên tài sản theo bản án, điều chỉnh thông tin người phụ thuộc khi quyết toán thuế, và cập nhật người thụ hưởng trong các hợp đồng bảo hiểm. Đây là phần rất hay bị quên.",
      },
    ],
    notes: [
      "NẾU CÓ BẠO LỰC GIA ĐÌNH: an toàn của bạn và con là ưu tiên trước mọi thủ tục. Liên hệ công an nơi cư trú, tổng đài quốc gia bảo vệ trẻ em 111, hoặc các cơ sở hỗ trợ nạn nhân bạo lực gia đình tại địa phương. Giữ lại bằng chứng và nói với người thân tin cậy.",
      "Thủ tục, thẩm quyền toà án, án phí và thời gian giải quyết thay đổi theo quy định từng thời kỳ. Hãy hỏi trực tiếp toà án nơi bạn nộp đơn hoặc luật sư.",
      "Cảnh giác với dịch vụ quảng cáo ly hôn nhanh, ly hôn không cần ra toà. Ly hôn phải qua toà án và có bản án hoặc quyết định mới có giá trị pháp lý.",
      "Bài này là thông tin thủ tục phổ thông, KHÔNG PHẢI TƯ VẤN PHÁP LÝ cho trường hợp cụ thể của bạn.",
    ],
    faq: [
      {
        q: "Mất giấy đăng ký kết hôn thì có ly hôn được không?",
        a: "Được, nhưng phải xin bản sao trích lục tại cơ quan hộ tịch nơi đã đăng ký kết hôn trước. Làm việc này sớm vì nó là bước tốn thời gian riêng.",
      },
      {
        q: "Chồng hoặc vợ không chịu ký thì sao?",
        a: "Đó là trường hợp ly hôn đơn phương. Toà vẫn thụ lý và giải quyết theo trình tự, chỉ là mất thời gian hơn. Không ai bị buộc phải ở trong hôn nhân vì bên kia không ký.",
      },
      {
        q: "Không biết bên kia đang ở đâu thì làm sao?",
        a: "Vẫn nộp đơn được, nhưng trình tự phức tạp hơn vì toà phải thực hiện các thủ tục thông báo. Đây là trường hợp nên nhờ luật sư hoặc trợ giúp pháp lý hướng dẫn.",
      },
      {
        q: "Ai được quyền nuôi con?",
        a: "Toà quyết định dựa trên quyền lợi mọi mặt của con, xem xét điều kiện nuôi dưỡng của mỗi bên, và có tính tới nguyện vọng của con từ một độ tuổi nhất định. Không có công thức cố định — hãy chuẩn bị chứng minh điều kiện thực tế của mình.",
      },
    ],
    sources: [],
  },
  {
    slug: "doi-ten-doi-ho-thu-tuc",
    title: "Đổi tên, đổi họ: khi nào được, làm ở đâu, và đổi rồi phải sửa gì",
    excerpt:
      "Đổi được cái tên trên giấy khai sinh mới chỉ là một nửa. Nửa còn lại là hàng chục giấy tờ khác đang mang tên cũ.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Thay đổi họ tên là thủ tục hộ tịch, khác với cải chính khi giấy tờ ghi sai. Pháp luật cho phép thay đổi trong những trường hợp có lý do chính đáng — bạn phải trình bày lý do và cơ quan hộ tịch xem xét. Nộp tại UBND cấp xã hoặc cấp huyện tuỳ trường hợp. Sau khi được chấp thuận, việc lớn nhất là đi cập nhật hàng loạt giấy tờ khác cho khớp.",
    prepare: [
      "Giấy khai sinh bản chính hoặc bản sao trích lục",
      "CCCD và giấy tờ cư trú",
      "Đơn theo mẫu, trong đó phần trình bày lý do là quan trọng nhất",
      "Danh sách toàn bộ giấy tờ đang mang tên cũ, viết ra trước để không sót",
    ],
    steps: [
      {
        title: "Phân biệt thay đổi với cải chính",
        detail:
          "Cải chính là sửa lại cho đúng khi giấy tờ ghi SAI so với thực tế — ví dụ đánh máy nhầm một chữ. Thay đổi là đổi sang một họ tên KHÁC dù giấy tờ cũ vẫn ghi đúng. Hai thủ tục khác nhau và yêu cầu giấy tờ khác nhau, nên xác định đúng ngay từ đầu.",
      },
      {
        title: "Xem lý do của mình có thuộc trường hợp được xem xét không",
        detail:
          "Pháp luật quy định các trường hợp có thể thay đổi họ tên, thường liên quan tới việc tên gây nhầm lẫn, ảnh hưởng tới tình cảm gia đình, danh dự, quyền lợi, hoặc theo cha mẹ nuôi, cha mẹ đẻ. Đây là phần bạn nên đọc kỹ quy định hiện hành hoặc hỏi cán bộ hộ tịch trước khi nộp.",
      },
      {
        title: "Chuẩn bị phần trình bày lý do cho rõ ràng",
        detail:
          "Đây là phần cơ quan hộ tịch đọc kỹ nhất. Viết cụ thể, trung thực, nêu ảnh hưởng thực tế của tên hiện tại tới cuộc sống của bạn. Nếu có giấy tờ chứng minh thì đính kèm. Trình bày mơ hồ là lý do hồ sơ bị trả về nhiều nhất.",
      },
      {
        title: "Xác định nộp ở cấp nào",
        detail:
          "Thẩm quyền khác nhau tuỳ độ tuổi người thay đổi và tuỳ có yếu tố nước ngoài hay không. Gọi hỏi UBND xã phường nơi bạn cư trú trước, họ sẽ chỉ đúng nơi nộp. Nộp sai cấp là mất một chuyến đi.",
      },
      {
        title: "Nếu đổi cho con thì cần thêm phần đồng ý",
        detail:
          "Thay đổi họ tên cho người chưa thành niên cần sự đồng ý của cha mẹ, và từ một độ tuổi nhất định thì cần cả sự đồng ý của chính đứa trẻ. Hỏi rõ mốc tuổi và mẫu văn bản đồng ý.",
      },
      {
        title: "Nộp hồ sơ và giữ giấy hẹn",
        detail:
          "Nộp đơn theo mẫu cùng giấy tờ. Hỏi rõ thời gian giải quyết và cách nhận kết quả. Giữ giấy hẹn cẩn thận và chụp ảnh lưu.",
      },
      {
        title: "Nhận kết quả và xin trích lục mới",
        detail:
          "Sau khi được chấp thuận, thông tin trong sổ hộ tịch được ghi chú thay đổi. Xin luôn vài bản sao trích lục khai sinh mới — bạn sẽ cần nhiều bản cho các bước tiếp theo, và xin một lần đỡ phải đi lại.",
      },
      {
        title: "Lập danh sách mọi giấy tờ mang tên cũ",
        detail:
          "CCCD, hộ chiếu, bằng lái, sổ bảo hiểm xã hội, thẻ bảo hiểm y tế, mã số thuế, tài khoản ngân hàng, sổ đỏ, đăng ký xe, hợp đồng lao động, bằng cấp, hợp đồng bảo hiểm, sim điện thoại. Viết hết ra giấy rồi đánh dấu từng cái khi làm xong.",
      },
      {
        title: "Làm CCCD trước, vì nó là gốc cho các thứ khác",
        detail:
          "Hầu hết thủ tục sau đó đều cần CCCD mang tên mới. Vì vậy đây là việc nên làm ngay sau khi có trích lục khai sinh mới, trước khi đụng tới ngân hàng hay bảo hiểm.",
      },
      {
        title: "Cập nhật ngân hàng và bảo hiểm sớm",
        detail:
          "Tên trên tài khoản ngân hàng không khớp CCCD sẽ gây rắc rối khi giao dịch lớn. Sổ bảo hiểm xã hội sai tên gây phiền khi làm chế độ sau này. Hai nhóm này nên ưu tiên làm sớm.",
      },
      {
        title: "Đừng quên bằng cấp và hồ sơ công việc",
        detail:
          "Bằng tốt nghiệp thường không đổi tên được, nhưng bạn cần giữ trích lục ghi chú thay đổi để chứng minh người trên bằng và người trên CCCD là một. Báo cho phòng nhân sự nơi làm việc để họ cập nhật hợp đồng và hồ sơ.",
      },
      {
        title: "Giữ một bộ hồ sơ chứng minh sự thay đổi",
        detail:
          "Quyết định thay đổi hộ tịch, trích lục cũ và mới — giữ cả bản giấy lẫn bản chụp trên mây. Bạn sẽ cần nó nhiều năm sau, mỗi khi có ai đó hỏi vì sao tên trên hai giấy tờ khác nhau.",
      },
    ],
    notes: [
      "Thay đổi họ tên KHÔNG làm mất đi các quyền và nghĩa vụ đã xác lập trước đó — nợ, hợp đồng, trách nhiệm pháp lý đều theo bạn. Đừng nghe ai nói đổi tên để tránh nợ.",
      "Quy định về trường hợp được thay đổi, thẩm quyền và lệ phí thay đổi theo thời kỳ. Hỏi cán bộ hộ tịch tại UBND xã phường để có thông tin hiện hành.",
      "Nếu chỉ là giấy tờ ghi sai chính tả so với thực tế, hãy làm thủ tục cải chính chứ không phải thay đổi — nhanh hơn và đơn giản hơn nhiều.",
      "Bài này là thông tin thủ tục phổ thông, không phải tư vấn pháp lý cho trường hợp cụ thể.",
    ],
    faq: [
      {
        q: "Đổi tên vì thấy tên xấu, không hợp tuổi có được không?",
        a: "Phải xem lý do có thuộc các trường hợp pháp luật cho phép hay không, và cơ quan hộ tịch sẽ xem xét. Hãy trình bày ảnh hưởng thực tế tới cuộc sống thay vì chỉ nói không thích.",
      },
      {
        q: "Mất bao lâu?",
        a: "Phần giải quyết hộ tịch thường không lâu, nhưng phần cập nhật hàng chục giấy tờ khác mới là phần kéo dài nhiều tuần tới vài tháng. Hãy tính cả phần đó khi lên kế hoạch.",
      },
      {
        q: "Bằng đại học có đổi tên được không?",
        a: "Thường không cấp lại bằng theo tên mới. Bạn dùng trích lục ghi chú thay đổi hộ tịch để chứng minh. Hỏi trường cấp bằng về cách xử lý cụ thể của họ.",
      },
      {
        q: "Đổi họ cho con theo họ mẹ được không?",
        a: "Có những trường hợp được xem xét, thường liên quan tới quan hệ cha mẹ con và cần sự đồng ý của các bên liên quan. Đây là câu nên hỏi trực tiếp cán bộ hộ tịch với hoàn cảnh cụ thể của bạn.",
      },
    ],
    sources: [],
  },
  {
    slug: "so-do-so-hong-doc-va-tra-cuu-quy-hoach",
    title: "Sổ đỏ sổ hồng: đọc từng mục và tra quy hoạch trước khi xuống tiền",
    excerpt:
      "Cầm cuốn sổ trên tay mà không biết đọc trang hai là chỗ nhiều người mất tiền nhất — vì phần hạn chế quyền nằm ở đó.",
    publishedAt: NGAY,
    readTimeMinutes: 7,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Giấy chứng nhận quyền sử dụng đất có nhiều mục quan trọng: người đứng tên, thửa đất số mấy tờ bản đồ nào, diện tích, mục đích sử dụng, thời hạn, nguồn gốc, và phần ghi chú về thay đổi hoặc thế chấp. Hai việc bắt buộc trước khi mua: kiểm tra thông tin quy hoạch tại phòng tài nguyên môi trường hoặc cổng thông tin của địa phương, và kiểm tra tình trạng thế chấp tại văn phòng đăng ký đất đai.",
    prepare: [
      "Bản chính giấy chứng nhận để xem tận tay, không chỉ xem ảnh chụp",
      "CCCD của người đứng tên để đối chiếu",
      "Điện thoại chụp lại toàn bộ các trang, cả những trang trông như trống",
      "Số điện thoại hoặc địa chỉ văn phòng đăng ký đất đai của địa phương",
    ],
    steps: [
      {
        title: "Xem người đứng tên và tình trạng hôn nhân",
        detail:
          "Nếu chỉ ghi tên một người mà tài sản hình thành trong thời kỳ hôn nhân thì đó có thể là tài sản chung, cần cả vợ và chồng cùng ký khi chuyển nhượng. Đây là nguồn tranh chấp rất phổ biến. Hỏi và kiểm tra giấy xác nhận tình trạng hôn nhân.",
      },
      {
        title: "Đối chiếu số thửa và số tờ bản đồ",
        detail:
          "Đây là toạ độ pháp lý của mảnh đất. Ghi lại chính xác để dùng khi đi tra cứu quy hoạch và kiểm tra thông tin. Đừng dựa vào địa chỉ nhà vì địa chỉ có thể thay đổi hoặc trùng lặp.",
      },
      {
        title: "Đọc kỹ mục đích sử dụng đất",
        detail:
          "Đất ở, đất trồng cây lâu năm, đất nông nghiệp — mỗi loại có quyền khác nhau. Mua đất nông nghiệp rồi mới biết không xây nhà được là tình huống xảy ra thường xuyên. Nếu định xây, phải xem có phần diện tích đất ở hay không, và bao nhiêu mét vuông.",
      },
      {
        title: "Xem thời hạn sử dụng",
        detail:
          "Có loại lâu dài, có loại có thời hạn tính bằng năm. Thời hạn còn lại ảnh hưởng trực tiếp tới giá trị và tới khả năng thế chấp vay ngân hàng.",
      },
      {
        title: "Đọc phần nguồn gốc sử dụng đất",
        detail:
          "Mục này cho biết đất được nhà nước giao, cho thuê, công nhận, hay nhận chuyển nhượng. Nó liên quan tới nghĩa vụ tài chính và tới việc có phải nộp thêm tiền sử dụng đất khi chuyển mục đích hay không.",
      },
      {
        title: "LẬT TỚI TRANG GHI CHÚ VÀ BIẾN ĐỘNG",
        detail:
          "Đây là phần nhiều người bỏ qua và cũng là phần quan trọng nhất. Ở đó ghi các thay đổi: đã thế chấp ngân hàng nào, đã tách thửa, có hạn chế quyền gì. Chụp ảnh tất cả các trang, kể cả trang trông như trắng.",
      },
      {
        title: "So sơ đồ thửa đất với thực địa",
        detail:
          "Ra tận nơi, so hình dạng và kích thước trên sơ đồ với hàng rào, tường, lối đi thực tế. Chênh lệch giữa giấy và thực địa là nguyên nhân tranh chấp với hàng xóm sau này. Nếu chênh nhiều, nên thuê đo đạc trước khi mua.",
      },
      {
        title: "Tra cứu quy hoạch trước khi đặt cọc",
        detail:
          "Đây là bước không được bỏ. Mang số thửa và số tờ bản đồ tới phòng tài nguyên môi trường cấp huyện, hoặc tra trên cổng thông tin quy hoạch của địa phương nếu có. Đất nằm trong quy hoạch đường, công viên, hay dự án thì giá trị và quyền xây dựng khác hẳn.",
      },
      {
        title: "Kiểm tra tình trạng thế chấp và ngăn chặn",
        detail:
          "Tới văn phòng đăng ký đất đai để hỏi thông tin về thửa đất: có đang thế chấp không, có bị kê biên hay có văn bản ngăn chặn nào không. Sổ trong tay người bán không có nghĩa là sổ sạch.",
      },
      {
        title: "Cẩn thận với sổ chung và đất chưa tách thửa",
        detail:
          "Một sổ đứng tên nhiều người, hoặc mua một phần trong thửa lớn chưa tách — cả hai đều rất rủi ro vì bạn không toàn quyền định đoạt. Hỏi rõ khả năng tách thửa tại địa phương trước, vì mỗi nơi có điều kiện diện tích tối thiểu khác nhau.",
      },
      {
        title: "Giao dịch qua công chứng, không viết tay",
        detail:
          "Hợp đồng chuyển nhượng quyền sử dụng đất phải được công chứng hoặc chứng thực theo quy định. Giấy viết tay giữa hai bên không đủ để sang tên, và khi có tranh chấp thì bạn ở thế rất yếu.",
      },
      {
        title: "Đừng đặt cọc lớn trước khi kiểm xong",
        detail:
          "Thứ tự đúng là: xem sổ, tra quy hoạch, kiểm thế chấp, rồi mới đặt cọc. Đặt cọc lớn trước rồi mới phát hiện vấn đề là lúc bạn mất quyền thương lượng. Nếu phải cọc, viết giấy ghi rõ điều kiện hoàn cọc nếu phát hiện vướng mắc pháp lý.",
      },
    ],
    notes: [
      "Cảnh giác với sổ giả. Xem bản chính dưới ánh sáng, kiểm các yếu tố bảo an, và quan trọng nhất là ĐỐI CHIẾU với thông tin tại văn phòng đăng ký đất đai — đó mới là nguồn xác thực.",
      "Không giao dịch với người chỉ cầm bản photo hoặc chỉ có giấy uỷ quyền mà bạn chưa kiểm tra tính hợp lệ của uỷ quyền đó.",
      "Quy định về điều kiện tách thửa, chuyển mục đích sử dụng, thuế phí và mẫu giấy chứng nhận thay đổi theo thời kỳ và khác nhau giữa các địa phương. Hỏi trực tiếp cơ quan quản lý đất đai nơi có thửa đất.",
      "Bài này là kiến thức phổ thông giúp bạn biết cần kiểm gì, KHÔNG PHẢI TƯ VẤN PHÁP LÝ. Giao dịch giá trị lớn nên có luật sư hoặc công chứng viên tư vấn.",
    ],
    faq: [
      {
        q: "Sổ đỏ và sổ hồng khác nhau thế nào?",
        a: "Đó là cách gọi dân gian theo màu bìa của các mẫu giấy qua từng thời kỳ. Hiện nay đã thống nhất một mẫu giấy chứng nhận chung. Điều quan trọng là nội dung bên trong, không phải màu bìa.",
      },
      {
        q: "Đất có quy hoạch thì có mua được không?",
        a: "Tuỳ loại quy hoạch và mức độ ảnh hưởng. Có loại chỉ hạn chế xây dựng, có loại nằm trong diện thu hồi. Phải tra cứu cụ thể rồi mới quyết, và giá phải phản ánh đúng tình trạng đó.",
      },
      {
        q: "Người bán nói sổ đang thế chấp nhưng sẽ giải chấp khi nhận tiền, có nên không?",
        a: "Đây là tình huống rủi ro cao và cần quy trình chặt chẽ, thường phải làm qua ngân hàng và có công chứng viên hướng dẫn. Đừng tự thoả thuận và chuyển tiền mặt.",
      },
      {
        q: "Mua đất bằng giấy viết tay có sang tên được không?",
        a: "Rất khó và tuỳ trường hợp cụ thể theo quy định. Cách an toàn là làm đúng thủ tục công chứng ngay từ đầu. Nếu đã lỡ mua giấy tay, hãy hỏi văn phòng đăng ký đất đai hoặc luật sư về hướng xử lý.",
      },
    ],
    sources: [],
  },
  {
    slug: "sang-ten-nha-dat-khi-mua-ban",
    title: "Sang tên nhà đất: trình tự các bước và những khoản phải nộp",
    excerpt:
      "Ký hợp đồng công chứng xong chưa phải là xong. Chừng nào chưa đăng ký biến động thì trên giấy tờ mảnh đất vẫn chưa phải của bạn.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Trình tự thường là: kiểm tra pháp lý, ký hợp đồng chuyển nhượng tại tổ chức công chứng, kê khai và nộp nghĩa vụ tài chính tại cơ quan thuế, rồi nộp hồ sơ đăng ký biến động tại văn phòng đăng ký đất đai để được cấp giấy chứng nhận mang tên mình. Các khoản thường phải nộp gồm thuế thu nhập cá nhân của bên bán, lệ phí trước bạ của bên mua, và các loại phí lệ phí khác. Mức và cách tính theo quy định hiện hành.",
    prepare: [
      "Giấy chứng nhận bản chính và giấy tờ tuỳ thân của cả hai bên",
      "Giấy xác nhận tình trạng hôn nhân hoặc giấy đăng ký kết hôn của bên bán",
      "Tiền cho các khoản thuế phí — hỏi trước để chuẩn bị đủ",
      "Một cuốn sổ ghi lại từng bước, ngày nộp và người tiếp nhận",
    ],
    steps: [
      {
        title: "Hoàn tất phần kiểm tra pháp lý trước",
        detail:
          "Tra quy hoạch, kiểm tình trạng thế chấp và ngăn chặn, đối chiếu thực địa. Đây phải xong TRƯỚC khi ký bất cứ giấy tờ gì. Bỏ qua bước này rồi mới phát hiện vướng mắc là lúc bạn đã mất tiền cọc.",
      },
      {
        title: "Thống nhất rõ ai nộp khoản nào",
        detail:
          "Theo quy định thì mỗi bên có nghĩa vụ riêng, nhưng thực tế hai bên có thể thoả thuận khác. Ghi rõ vào hợp đồng ai chịu khoản nào, tránh cãi nhau lúc ra cơ quan thuế. Đây là chỗ mâu thuẫn rất hay xảy ra.",
      },
      {
        title: "Ký hợp đồng chuyển nhượng tại tổ chức công chứng",
        detail:
          "Cả hai bên cùng có mặt với đầy đủ giấy tờ tuỳ thân. Nếu bên bán có vợ hoặc chồng thì thường phải có mặt cả hai, hoặc có văn bản đồng ý hợp lệ. Công chứng viên sẽ kiểm tra hồ sơ và giải thích nội dung — hãy hỏi mọi điều bạn chưa rõ tại đó.",
      },
      {
        title: "Đọc kỹ hợp đồng trước khi ký",
        detail:
          "Kiểm tên, số CCCD, số thửa, diện tích, giá, phương thức và thời điểm thanh toán, thời điểm bàn giao. Sai một con số trên hợp đồng công chứng thì sửa rất phiền. Đừng ngại bảo công chứng viên đọc lại từng dòng.",
      },
      {
        title: "Cẩn thận với việc ghi giá thấp hơn thực tế",
        detail:
          "Nhiều người ghi giá thấp để giảm thuế. Đây là hành vi có rủi ro pháp lý, và nếu có tranh chấp thì bên mua chỉ được bảo vệ theo giá ghi trên hợp đồng. Cân nhắc kỹ, và biết rằng cơ quan thuế có cơ sở dữ liệu để đối chiếu.",
      },
      {
        title: "Sắp xếp việc thanh toán cho an toàn",
        detail:
          "Cách phổ biến và an toàn là thanh toán qua ngân hàng ngay tại thời điểm công chứng, hoặc dùng dịch vụ phong toả tài khoản. Chuyển tiền mặt số lượng lớn trước khi ký là rủi ro không cần thiết. Giữ toàn bộ chứng từ chuyển tiền.",
      },
      {
        title: "Kê khai nghĩa vụ tài chính đúng hạn",
        detail:
          "Sau công chứng, nộp hồ sơ kê khai tại cơ quan thuế hoặc theo cơ chế một cửa của địa phương. Có thời hạn kê khai, nộp muộn có thể bị phạt. Hỏi rõ thời hạn ngay khi công chứng xong.",
      },
      {
        title: "Nộp các khoản và giữ biên lai",
        detail:
          "Thường gồm thuế thu nhập cá nhân của bên bán, lệ phí trước bạ của bên mua, và các loại phí thẩm định, lệ phí cấp giấy. Mức và cách tính theo quy định hiện hành — hỏi cơ quan thuế cho con số cụ thể. Giữ mọi biên lai vì bước sau cần xuất trình.",
      },
      {
        title: "Nộp hồ sơ đăng ký biến động",
        detail:
          "Đây mới là bước làm cho mảnh đất mang tên bạn trên hệ thống. Nộp tại văn phòng đăng ký đất đai hoặc bộ phận một cửa. Nhiều nơi gộp chung các bước qua cơ chế một cửa — hỏi để đi một lần thay vì nhiều lần.",
      },
      {
        title: "Theo dõi hồ sơ theo giấy hẹn",
        detail:
          "Giữ giấy hẹn và chụp ảnh lưu. Nếu quá hẹn chưa có kết quả thì liên hệ hỏi, đừng chờ thụ động. Nhiều nơi tra cứu được tiến độ trên mạng bằng mã hồ sơ.",
      },
      {
        title: "Nhận giấy chứng nhận và kiểm ngay tại chỗ",
        detail:
          "Kiểm họ tên, số CCCD, số thửa, diện tích, mục đích sử dụng, và phần ghi chú. Phát hiện sai sót thì báo ngay khi còn ở quầy. Về nhà rồi mới thấy thì phải làm thủ tục đính chính.",
      },
      {
        title: "Làm nốt việc sau khi có sổ",
        detail:
          "Cập nhật thông tin chủ sử dụng với UBND phường xã nếu cần, chuyển tên các hợp đồng điện nước, và cất giấy chứng nhận ở nơi an toàn kèm bản chụp lưu trên mây.",
      },
    ],
    notes: [
      "Chưa đăng ký biến động thì về mặt pháp lý bạn chưa phải người sử dụng đất được ghi nhận, dù đã trả đủ tiền và có hợp đồng công chứng. Đừng dừng lại ở bước công chứng.",
      "Cảnh giác với dịch vụ nhận làm sang tên trọn gói giá rẻ bất thường hoặc hứa làm nhanh bất thường. Hãy tự nắm quy trình để biết mình đang ở bước nào.",
      "Mức thuế, lệ phí, thời hạn và trình tự thay đổi theo quy định từng thời kỳ và có khác biệt giữa các địa phương. Hỏi trực tiếp cơ quan thuế và văn phòng đăng ký đất đai.",
      "Bài này là thông tin thủ tục phổ thông, KHÔNG PHẢI TƯ VẤN PHÁP LÝ. Giao dịch giá trị lớn nên có luật sư hoặc công chứng viên tư vấn.",
    ],
    faq: [
      {
        q: "Mất bao lâu để có sổ mang tên mình?",
        a: "Tuỳ địa phương và tuỳ hồ sơ, thường tính bằng tuần. Hỏi thời hạn giải quyết ngay khi nộp và giữ giấy hẹn để theo dõi.",
      },
      {
        q: "Có bắt buộc cả vợ chồng bên bán cùng ký không?",
        a: "Nếu là tài sản chung của vợ chồng thì thường cần cả hai, hoặc có văn bản đồng ý hợp lệ. Đây là điểm công chứng viên sẽ kiểm tra — và cũng là chỗ hay phát sinh tranh chấp về sau.",
      },
      {
        q: "Bên bán không hợp tác làm thủ tục thì sao?",
        a: "Hợp đồng công chứng là căn cứ pháp lý để bạn yêu cầu thực hiện. Nếu bên kia không hợp tác, đây là lúc cần luật sư. Đó cũng là lý do nên gắn việc thanh toán với từng mốc thủ tục.",
      },
      {
        q: "Mua nhà đang thế chấp ngân hàng thì làm thế nào?",
        a: "Phải giải chấp trước hoặc làm theo quy trình ba bên có sự tham gia của ngân hàng. Đừng tự thoả thuận riêng với bên bán — hãy để ngân hàng và công chứng viên hướng dẫn trình tự.",
      },
    ],
    sources: [],
  },
  {
    slug: "khai-nhan-di-san-thua-ke-nha-dat",
    title: "Thừa kế nhà đất: khai nhận di sản và những chỗ hay bế tắc",
    excerpt:
      "Cha mẹ mất để lại căn nhà, anh chị em ai cũng nghĩ chuyện đơn giản. Rồi phát hiện thiếu một người đang ở nước ngoài là mọi thứ dừng lại.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Có di chúc hợp pháp thì chia theo di chúc; không có thì chia theo pháp luật cho những người thuộc hàng thừa kế. Thủ tục thường bắt đầu bằng văn bản khai nhận hoặc thoả thuận phân chia di sản lập tại tổ chức công chứng, sau đó niêm yết theo quy định, rồi mới đăng ký sang tên. Điểm hay bế tắc nhất: phải có mặt hoặc có văn bản hợp lệ của TẤT CẢ những người thừa kế, kể cả người ở xa và người đã mất.",
    prepare: [
      "Giấy chứng tử của người để lại di sản",
      "Giấy tờ chứng minh quan hệ nhân thân của từng người thừa kế: khai sinh, kết hôn, hộ khẩu cũ",
      "Giấy chứng nhận quyền sử dụng đất bản chính",
      "Di chúc nếu có, và danh sách đầy đủ những người thừa kế kể cả người ở nước ngoài",
    ],
    steps: [
      {
        title: "Xác định có di chúc hay không",
        detail:
          "Tìm trong giấy tờ của người mất, hỏi các tổ chức công chứng ở địa phương, hỏi người thân. Có di chúc hợp pháp thì chia theo đó; không có hoặc di chúc không hợp pháp thì chia theo pháp luật. Đây là điều đầu tiên phải làm rõ.",
      },
      {
        title: "Lập danh sách đầy đủ những người thừa kế",
        detail:
          "Theo pháp luật có các hàng thừa kế, hàng thứ nhất thường gồm vợ hoặc chồng, cha mẹ, và các con. Phải liệt kê đủ, kể cả con riêng, con nuôi hợp pháp, người đang ở nước ngoài, và cả người thừa kế đã mất — vì phần của họ chuyển cho người khác theo quy định.",
      },
      {
        title: "Thu thập giấy tờ chứng minh quan hệ",
        detail:
          "Mỗi người thừa kế cần giấy tờ chứng minh quan hệ với người mất: giấy khai sinh, giấy đăng ký kết hôn, sổ hộ khẩu cũ. Đây là phần tốn thời gian nhất, nhất là với giấy tờ cũ hoặc đã thất lạc — bắt đầu sớm.",
      },
      {
        title: "Xin trích lục nếu giấy tờ đã mất",
        detail:
          "Giấy khai sinh, giấy kết hôn mất thì xin bản sao trích lục tại cơ quan hộ tịch nơi đã đăng ký. Với giấy tờ rất cũ, có thể phải tìm ở lưu trữ cấp tỉnh. Việc này nên làm song song để tiết kiệm thời gian.",
      },
      {
        title: "Xử lý sớm trường hợp người thừa kế ở nước ngoài",
        detail:
          "Đây là nguyên nhân bế tắc phổ biến nhất. Người ở xa có thể lập văn bản uỷ quyền hoặc văn bản từ chối nhận di sản, nhưng phải làm tại cơ quan đại diện Việt Nam ở nước sở tại hoặc làm ở nước ngoài rồi hợp pháp hoá lãnh sự. Quy trình này mất nhiều tuần — khởi động ngay từ đầu.",
      },
      {
        title: "Chuẩn bị cho trường hợp có người chưa thành niên",
        detail:
          "Người thừa kế chưa thành niên hoặc mất năng lực hành vi cần người đại diện theo pháp luật, và việc định đoạt phần của họ có quy định riêng chặt chẽ. Hỏi công chứng viên về trình tự cho trường hợp này.",
      },
      {
        title: "Tới tổ chức công chứng để lập văn bản",
        detail:
          "Mang toàn bộ giấy tờ tới. Công chứng viên sẽ hướng dẫn lập văn bản khai nhận di sản hoặc văn bản thoả thuận phân chia di sản, tuỳ các bên muốn chia thế nào. Đây là nơi bạn nên hỏi kỹ mọi thắc mắc.",
      },
      {
        title: "Chờ hết thời gian niêm yết",
        detail:
          "Theo quy định, thông báo về việc khai nhận di sản được niêm yết công khai trong một khoảng thời gian để ai có quyền lợi liên quan còn lên tiếng. Đây là bước bắt buộc và không rút ngắn được — hãy tính vào kế hoạch.",
      },
      {
        title: "Thống nhất chuyện chia trước khi ra công chứng",
        detail:
          "Bàn bạc trong gia đình trước, ghi ra giấy ai nhận gì. Ra tới nơi mới bắt đầu tranh luận thì buổi làm việc sẽ hỏng và tình cảm cũng hỏng theo. Nếu không thoả thuận được, phần này phải đưa ra toà án.",
      },
      {
        title: "Nộp nghĩa vụ tài chính",
        detail:
          "Thừa kế giữa những người thân thuộc theo quy định có thể được miễn một số khoản. Nhưng vẫn có các loại lệ phí và phí. Hỏi cơ quan thuế về trường hợp cụ thể của gia đình bạn thay vì suy đoán.",
      },
      {
        title: "Đăng ký sang tên tại văn phòng đăng ký đất đai",
        detail:
          "Nộp văn bản khai nhận hoặc phân chia di sản đã công chứng cùng hồ sơ theo hướng dẫn. Sau bước này mới có giấy chứng nhận mang tên người thừa kế. Chưa làm bước này thì việc chia vẫn chưa hoàn tất trên giấy tờ.",
      },
      {
        title: "Nếu không thoả thuận được thì đưa ra toà",
        detail:
          "Khi các bên tranh chấp, thủ tục công chứng không giải quyết được và phải khởi kiện chia di sản thừa kế tại toà án. Quá trình dài và tốn kém hơn nhiều — đó là lý do nên cố thoả thuận trong gia đình trước.",
      },
    ],
    notes: [
      "Pháp luật có quy định về THỜI HIỆU thừa kế. Để quá lâu không làm thủ tục có thể ảnh hưởng tới quyền khởi kiện chia di sản. Nếu người thân đã mất từ lâu mà chưa làm gì, hãy hỏi luật sư sớm.",
      "Có những người được hưởng di sản theo quy định ngay cả khi di chúc không cho họ, trong một số trường hợp nhất định. Đây là điểm nên hỏi công chứng viên hoặc luật sư khi có di chúc.",
      "Trình tự, thời gian niêm yết, thuế phí và giấy tờ cần thiết thay đổi theo quy định từng thời kỳ. Hỏi trực tiếp tổ chức công chứng và văn phòng đăng ký đất đai.",
      "Bài này là thông tin thủ tục phổ thông, KHÔNG PHẢI TƯ VẤN PHÁP LÝ. Thừa kế là lĩnh vực nhiều tình huống đặc thù, nên có luật sư khi phức tạp.",
    ],
    faq: [
      {
        q: "Một người thừa kế không chịu ký thì làm sao?",
        a: "Thủ tục công chứng sẽ dừng lại vì cần sự đồng thuận. Khi đó phải khởi kiện ra toà để chia di sản. Hãy cố thuyết phục và tìm hiểu lý do trước khi đi tới bước kiện tụng.",
      },
      {
        q: "Anh chị em ở nước ngoài không về được thì sao?",
        a: "Họ có thể lập văn bản uỷ quyền hoặc từ chối nhận di sản tại cơ quan đại diện Việt Nam ở nước đó, hoặc lập ở nước sở tại rồi hợp pháp hoá lãnh sự. Bắt đầu sớm vì quy trình mất nhiều tuần.",
      },
      {
        q: "Nhà đang có người ở thì có chia được không?",
        a: "Việc chia di sản và việc ai đang ở là hai chuyện khác nhau. Nên thoả thuận cả phương án thực tế về chỗ ở khi phân chia, ghi rõ vào văn bản, để tránh mâu thuẫn về sau.",
      },
      {
        q: "Di chúc viết tay có giá trị không?",
        a: "Có những điều kiện về hình thức để di chúc hợp pháp, và di chúc viết tay có thể hợp pháp nếu đáp ứng đủ. Nhưng di chúc có công chứng thì ít bị tranh cãi hơn nhiều. Hỏi công chứng viên để đánh giá bản di chúc cụ thể.",
      },
    ],
    sources: [],
  },
  {
    slug: "lam-di-chuc-cho-dung",
    title: "Làm di chúc: viết thế nào để con cháu không phải kiện nhau",
    excerpt:
      "Di chúc viết vội một tờ giấy rồi cất tủ là thứ gây tranh chấp nhiều nhất — vì thiếu vài yếu tố hình thức mà người viết không biết.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Di chúc muốn có hiệu lực phải đáp ứng các điều kiện về người lập, về sự minh mẫn tự nguyện, và về hình thức. Cách chắc chắn nhất là lập tại tổ chức công chứng — công chứng viên kiểm tra điều kiện, lưu giữ bản gốc, và bản di chúc đó rất khó bị tranh cãi. Trước khi lập, hãy liệt kê rõ tài sản và nhớ rằng pháp luật vẫn dành phần cho một số người thân nhất định dù di chúc không cho họ.",
    prepare: [
      "Danh sách tài sản kèm giấy tờ chứng minh: sổ đỏ, sổ tiết kiệm, đăng ký xe",
      "Giấy tờ tuỳ thân của người lập di chúc",
      "Thông tin đầy đủ của những người sẽ nhận: họ tên, năm sinh, quan hệ",
      "Nếu tuổi cao, chuẩn bị giấy khám sức khoẻ xác nhận minh mẫn — điều này tránh tranh cãi về sau",
    ],
    steps: [
      {
        title: "Liệt kê tài sản trước khi viết một chữ nào",
        detail:
          "Nhà đất ghi rõ số thửa số tờ bản đồ, tài khoản ngân hàng ghi rõ ngân hàng nào, xe ghi biển số. Mô tả chung chung kiểu căn nhà ở quê là nguồn tranh chấp. Càng cụ thể càng ít cãi nhau.",
      },
      {
        title: "Kiểm xem tài sản có thật sự là của mình không",
        detail:
          "Tài sản chung của vợ chồng thì mỗi người chỉ định đoạt được phần của mình. Tài sản đang thế chấp, đang tranh chấp thì phức tạp hơn. Định đoạt thứ không phải của mình thì phần đó vô hiệu.",
      },
      {
        title: "Biết rằng có những người vẫn được hưởng dù di chúc không cho",
        detail:
          "Pháp luật quy định một số người thân nhất định vẫn được hưởng một phần di sản ngay cả khi di chúc không nhắc tới họ, trong những điều kiện cụ thể. Hỏi công chứng viên về quy định hiện hành để di chúc của bạn không bị vô hiệu một phần.",
      },
      {
        title: "Chọn cách lập di chúc",
        detail:
          "Có nhiều hình thức được pháp luật công nhận, từ di chúc viết tay tới di chúc có công chứng hoặc chứng thực. Mỗi hình thức có điều kiện riêng về người làm chứng và về cách thể hiện. Hình thức có công chứng là chắc chắn nhất.",
      },
      {
        title: "Ưu tiên lập tại tổ chức công chứng",
        detail:
          "Công chứng viên kiểm tra năng lực hành vi, sự tự nguyện, tính hợp pháp của nội dung, và lưu giữ hồ sơ. Bản di chúc như vậy rất khó bị người khác phủ nhận sau này. Chi phí không lớn so với cái giá của một vụ kiện trong gia đình.",
      },
      {
        title: "Nếu tự viết tay thì cẩn thận từng chi tiết",
        detail:
          "Viết tay toàn bộ, ghi rõ ngày tháng năm, ký tên. Không tẩy xoá, không dùng bút xoá. Nếu có nhiều trang thì ký từng trang. Thiếu ngày tháng là lỗi khiến di chúc bị tranh cãi rất thường xuyên.",
      },
      {
        title: "Cẩn thận với người làm chứng",
        detail:
          "Một số hình thức di chúc cần người làm chứng, và pháp luật quy định ai KHÔNG được làm chứng — thường là người thừa kế và người có quyền lợi liên quan. Chọn nhầm người làm chứng là lỗi làm hỏng cả bản di chúc.",
      },
      {
        title: "Viết rõ ràng, tránh câu chữ mơ hồ",
        detail:
          "Ghi ai nhận cái gì, phần bao nhiêu. Tránh câu kiểu chia đều cho các con mà không nói rõ tài sản nào chia thế nào. Nếu muốn kèm điều kiện, hãy hỏi công chứng viên xem điều kiện đó có hợp pháp và khả thi không.",
      },
      {
        title: "Nghĩ tới cả trường hợp người nhận mất trước mình",
        detail:
          "Nên có dự phòng: nếu người này mất trước thì phần đó chuyển cho ai. Không có dự phòng thì phần đó sẽ chia theo pháp luật, có thể không đúng ý bạn.",
      },
      {
        title: "Cất giữ và cho người tin cậy biết chỗ",
        detail:
          "Di chúc lập ra mà không ai tìm thấy thì vô nghĩa. Lập tại công chứng thì bản gốc được lưu giữ. Nếu tự giữ, hãy nói cho ít nhất một người tin cậy biết chỗ cất, và không cất chung với những giấy tờ dễ bị thất lạc.",
      },
      {
        title: "Cập nhật khi hoàn cảnh đổi",
        detail:
          "Bán tài sản, mua thêm, ly hôn, có thêm con cháu, người nhận qua đời — mỗi thay đổi lớn đều là lý do xem lại di chúc. Di chúc lập sau thay thế di chúc lập trước ở những phần mâu thuẫn.",
      },
      {
        title: "Nói chuyện với gia đình nếu có thể",
        detail:
          "Không bắt buộc, nhưng rất nhiều tranh chấp bắt nguồn từ bất ngờ chứ không phải từ nội dung. Nói trước lý do vì sao chia như vậy giúp người ở lại hiểu và ít oán trách nhau hơn.",
      },
    ],
    notes: [
      "Người lập di chúc phải minh mẫn, sáng suốt và tự nguyện. Nếu bạn hoặc người thân đã cao tuổi hoặc có bệnh ảnh hưởng nhận thức, hãy làm sớm và có giấy khám sức khoẻ kèm theo — đây là điểm hay bị dùng để tranh cãi tính hợp pháp.",
      "Di chúc bị lập do bị lừa dối, ép buộc thì không có giá trị. Nếu bạn nghi ngờ người thân bị ép lập di chúc, hãy tìm luật sư.",
      "Quy định về hình thức di chúc, người làm chứng và người được hưởng không phụ thuộc nội dung di chúc thay đổi theo thời kỳ. Hỏi công chứng viên hoặc luật sư về quy định hiện hành.",
      "Bài này là thông tin phổ thông, KHÔNG PHẢI TƯ VẤN PHÁP LÝ. Với tài sản lớn hoặc gia đình phức tạp, hãy làm việc với luật sư.",
    ],
    faq: [
      {
        q: "Di chúc có cần công chứng mới có hiệu lực không?",
        a: "Không bắt buộc với mọi hình thức, nhưng công chứng làm bản di chúc vững chắc hơn rất nhiều trước tranh chấp. Nếu tài sản đáng kể, đây là khoản chi rất đáng.",
      },
      {
        q: "Lập di chúc rồi có bán tài sản được không?",
        a: "Được. Di chúc chỉ có hiệu lực khi người lập qua đời. Nhưng nếu đã bán thì phần đó trong di chúc không còn đối tượng — nên hãy cập nhật di chúc sau những thay đổi lớn.",
      },
      {
        q: "Có thể để lại tài sản cho người ngoài gia đình không?",
        a: "Về nguyên tắc bạn được định đoạt tài sản của mình. Nhưng vẫn có quy định dành phần cho một số người thân nhất định. Hỏi công chứng viên để cân đối cho đúng.",
      },
      {
        q: "Hai bản di chúc khác nhau thì theo bản nào?",
        a: "Thông thường bản lập sau thay thế bản trước ở những nội dung mâu thuẫn. Đây chính là lý do phải ghi rõ ngày tháng năm trên di chúc.",
      },
    ],
    sources: [],
  },
  {
    slug: "xin-giay-phep-xay-dung-nha-o",
    title: "Xin giấy phép xây dựng nhà ở: hồ sơ, các bước, và lỗi hay bị trả về",
    excerpt:
      "Xây trước xin sau là con đường dẫn tới đình chỉ công trình và phạt. Mà hồ sơ thì thường chỉ vướng ở hai ba chỗ lặp đi lặp lại.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Trước tiên phải kiểm đất của bạn có phải đất ở không và có nằm trong quy hoạch nào không — đây là điều kiện gốc. Hồ sơ thường gồm đơn theo mẫu, giấy tờ về quyền sử dụng đất, và bộ bản vẽ thiết kế do đơn vị có đủ điều kiện lập. Nộp tại UBND cấp huyện hoặc bộ phận một cửa. Có những trường hợp được miễn giấy phép — hỏi trước để khỏi làm thừa.",
    prepare: [
      "Giấy chứng nhận quyền sử dụng đất bản chính và bản sao",
      "Thông tin quy hoạch của thửa đất, xin tại phòng quản lý đô thị hoặc tài nguyên môi trường",
      "Hồ sơ thiết kế do đơn vị có đủ điều kiện năng lực lập",
      "CCCD và giấy tờ cư trú của chủ đầu tư",
    ],
    steps: [
      {
        title: "Kiểm điều kiện gốc: đất có được xây không",
        detail:
          "Phải là đất ở, hoặc phần diện tích đất ở trong thửa. Đất nông nghiệp thì phải chuyển mục đích sử dụng trước — đó là một thủ tục riêng và có thể phải nộp tiền sử dụng đất. Kiểm điều này trước khi thuê ai vẽ gì.",
      },
      {
        title: "Xin thông tin quy hoạch của thửa đất",
        detail:
          "Đây là bước quyết định bạn được xây bao nhiêu tầng, chừa lộ giới bao nhiêu, mật độ xây dựng thế nào. Mang số thửa số tờ bản đồ tới phòng quản lý đô thị cấp huyện. Vẽ thiết kế trước khi biết chỉ tiêu quy hoạch là làm ngược.",
      },
      {
        title: "Hỏi xem trường hợp của mình có được miễn phép không",
        detail:
          "Pháp luật quy định một số trường hợp được miễn giấy phép xây dựng, thường liên quan tới vị trí và quy mô công trình. Hỏi cán bộ một cửa trước — nếu thuộc diện miễn thì bạn tiết kiệm được cả một quy trình.",
      },
      {
        title: "Chọn đơn vị thiết kế có đủ điều kiện",
        detail:
          "Bản vẽ phải do tổ chức hoặc cá nhân có đủ điều kiện năng lực lập và có chữ ký, dấu hợp lệ. Bản vẽ tự vẽ hoặc thuê người không đủ điều kiện là lý do hồ sơ bị trả về. Hỏi đơn vị thiết kế cho xem chứng chỉ năng lực.",
      },
      {
        title: "Yêu cầu bộ bản vẽ đúng và đủ",
        detail:
          "Thường gồm mặt bằng các tầng, mặt đứng, mặt cắt, mặt bằng móng, và bản vẽ hệ thống kỹ thuật. Hỏi bộ phận một cửa danh mục bản vẽ cụ thể họ yêu cầu rồi đưa cho đơn vị thiết kế — mỗi nơi có thể yêu cầu khác nhau đôi chút.",
      },
      {
        title: "Kiểm bản vẽ có tuân thủ chỉ tiêu quy hoạch không",
        detail:
          "Số tầng, chiều cao, mật độ xây dựng, khoảng lùi. Đây là chỗ hồ sơ bị trả về nhiều nhất — thiết kế đẹp nhưng vượt chỉ tiêu. Đối chiếu bản vẽ với thông tin quy hoạch trước khi nộp.",
      },
      {
        title: "Chuẩn bị phần giáp ranh với hàng xóm",
        detail:
          "Nếu công trình sát nhà bên cạnh, nhiều nơi yêu cầu có biện pháp thi công bảo đảm an toàn, và trên thực tế bạn nên có văn bản thoả thuận với hàng xóm. Đây là chỗ dễ phát sinh tranh chấp nhất trong cả quá trình xây.",
      },
      {
        title: "Nộp hồ sơ và lấy giấy hẹn",
        detail:
          "Nộp tại bộ phận một cửa của UBND cấp huyện, hoặc qua cổng dịch vụ công nếu địa phương đã triển khai. Hỏi rõ thời hạn giải quyết và giữ giấy hẹn. Chụp lại toàn bộ hồ sơ đã nộp.",
      },
      {
        title: "Xử lý khi hồ sơ bị yêu cầu bổ sung",
        detail:
          "Rất thường gặp và không có gì nghiêm trọng. Yêu cầu cán bộ ghi rõ cần bổ sung gì bằng văn bản, mang về cho đơn vị thiết kế chỉnh, rồi nộp lại. Đừng nản — phần lớn hồ sơ đều qua một vòng bổ sung.",
      },
      {
        title: "Nhận giấy phép và đọc kỹ các điều kiện kèm theo",
        detail:
          "Giấy phép ghi rõ quy mô được xây, và thường kèm các điều kiện về thời gian khởi công, thông báo cho chính quyền, biện pháp an toàn. Đọc hết và làm đúng, vì xây sai giấy phép còn phiền hơn xây không phép.",
      },
      {
        title: "Thông báo khởi công theo quy định",
        detail:
          "Thường phải thông báo cho UBND phường xã trước khi khởi công. Treo biển công trình nếu được yêu cầu. Bỏ bước này là lý do bị lập biên bản dù bạn đã có giấy phép đầy đủ.",
      },
      {
        title: "Giữ hồ sơ suốt quá trình xây và sau khi xong",
        detail:
          "Giấy phép, bản vẽ được duyệt, các biên bản. Bạn cần chúng khi hoàn công, khi làm thủ tục cập nhật tài sản trên giấy chứng nhận, và khi bán nhà sau này. Chụp ảnh lưu trên mây.",
      },
    ],
    notes: [
      "XÂY KHÔNG PHÉP hoặc SAI PHÉP có thể bị đình chỉ thi công, xử phạt và buộc tháo dỡ phần vi phạm. Chi phí và thiệt hại lớn hơn nhiều so với công sức làm giấy phép cho đúng.",
      "Thủ tục, thẩm quyền, danh mục hồ sơ và các trường hợp miễn phép thay đổi theo quy định từng thời kỳ và khác nhau giữa các địa phương. Hỏi trực tiếp bộ phận một cửa nơi có đất.",
      "An toàn thi công là trách nhiệm thực tế của chủ nhà. Nhà sát vách nhau thì việc đào móng có thể gây nứt lún nhà bên cạnh — hãy chụp ảnh hiện trạng nhà hàng xóm trước khi khởi công.",
      "Bài này là thông tin thủ tục phổ thông, không phải tư vấn pháp lý hay tư vấn kỹ thuật xây dựng.",
    ],
    faq: [
      {
        q: "Sửa nhà có cần xin phép không?",
        a: "Tuỳ mức độ. Sửa chữa không thay đổi kết cấu chịu lực, công năng và không ảnh hưởng môi trường thường thuộc diện được miễn. Nhưng cải tạo lớn thì có thể phải xin phép — hỏi bộ phận một cửa với trường hợp cụ thể.",
      },
      {
        q: "Giấy phép có thời hạn không?",
        a: "Thường có quy định về thời gian phải khởi công kể từ ngày được cấp, quá hạn có thể phải xin gia hạn. Hỏi ngay khi nhận giấy phép và ghi mốc đó vào lịch.",
      },
      {
        q: "Hàng xóm phản đối thì có xin phép được không?",
        a: "Việc cấp phép dựa trên quy định và quy hoạch, nhưng tranh chấp ranh giới hoặc ảnh hưởng thi công có thể làm quá trình phức tạp. Nên trao đổi và thoả thuận với hàng xóm từ sớm.",
      },
      {
        q: "Đất chưa có sổ thì xin phép được không?",
        a: "Rất khó vì giấy tờ về quyền sử dụng đất là thành phần hồ sơ cơ bản. Hãy hoàn tất thủ tục cấp giấy chứng nhận trước — hỏi văn phòng đăng ký đất đai về hướng xử lý.",
      },
    ],
    sources: [],
  },
  {
    slug: "dich-thuat-cong-chung-hop-phap-hoa-lanh-su",
    title: "Dịch thuật công chứng và hợp pháp hoá lãnh sự: giấy tờ đi nước ngoài",
    excerpt:
      "Dịch xong công chứng xong rồi bên kia vẫn không chấp nhận — vì thiếu một bước mà ít ai nghe tên: hợp pháp hoá lãnh sự.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Có ba việc khác nhau hay bị gộp làm một: dịch thuật, chứng thực chữ ký người dịch, và hợp pháp hoá lãnh sự. Giấy tờ Việt Nam dùng ở nước ngoài thường cần chứng nhận lãnh sự tại Bộ Ngoại giao rồi hợp pháp hoá tại cơ quan đại diện của nước đó. Việc đầu tiên phải làm là HỎI NƠI NHẬN họ yêu cầu chính xác những gì — vì mỗi nước, mỗi trường học, mỗi cơ quan yêu cầu khác nhau.",
    prepare: [
      "Bản chính giấy tờ cần dịch — nhiều nơi yêu cầu xuất trình bản chính",
      "Yêu cầu bằng văn bản hoặc email của nơi tiếp nhận ở nước ngoài",
      "Danh sách tên riêng viết đúng như trên hộ chiếu, để dịch cho khớp",
      "Thời gian dự phòng vài tuần — đây là quy trình nhiều chặng",
    ],
    steps: [
      {
        title: "HỎI NƠI NHẬN TRƯỚC TIÊN",
        detail:
          "Trường đại học, sở di trú, hay nhà tuyển dụng ở nước ngoài — mỗi nơi có yêu cầu riêng. Có nơi chỉ cần bản dịch có chứng thực, có nơi bắt buộc hợp pháp hoá lãnh sự, có nơi yêu cầu dịch bởi đơn vị họ chỉ định. Làm sai thứ tự là làm lại từ đầu.",
      },
      {
        title: "Phân biệt ba việc khác nhau",
        detail:
          "Dịch thuật là chuyển ngôn ngữ. Chứng thực chữ ký người dịch là cơ quan xác nhận người dịch có đủ điều kiện. Hợp pháp hoá lãnh sự là xác nhận con dấu và chữ ký trên giấy tờ để nước ngoài công nhận. Ba việc, ba nơi làm, ba khoản phí.",
      },
      {
        title: "Chuẩn bị bản chính hoặc bản sao hợp lệ",
        detail:
          "Nhiều nơi yêu cầu xuất trình bản chính khi dịch và chứng thực. Nếu giấy tờ hộ tịch thì nên xin bản sao trích lục mới thay vì dùng bản cũ đã mờ. Bản photo thường không đủ.",
      },
      {
        title: "Chọn nơi dịch thuật cho đúng",
        detail:
          "Phòng tư pháp cấp huyện, tổ chức hành nghề công chứng, hoặc công ty dịch thuật có cộng tác viên dịch đã đăng ký. Hỏi trước xem họ có làm được cặp ngôn ngữ bạn cần và có làm luôn phần chứng thực không.",
      },
      {
        title: "Thống nhất cách viết tên riêng",
        detail:
          "Tên người, tên địa danh, tên trường phải viết THỐNG NHẤT giữa các giấy tờ và khớp với hộ chiếu. Đưa cho người dịch bản chụp hộ chiếu để họ viết đúng. Sai lệch một chữ giữa hai giấy tờ là lý do bị từ chối rất phổ biến.",
      },
      {
        title: "Kiểm bản dịch kỹ trước khi đóng dấu",
        detail:
          "Đọc lại số liệu, ngày tháng, tên riêng, tên môn học và điểm số nếu là bảng điểm. Sai sót phát hiện sau khi đã chứng thực thì phải làm lại toàn bộ. Đây là năm phút đáng bỏ ra nhất.",
      },
      {
        title: "Làm chứng nhận lãnh sự tại Bộ Ngoại giao",
        detail:
          "Giấy tờ Việt Nam muốn dùng ở nước ngoài thường phải được chứng nhận lãnh sự tại Cục Lãnh sự hoặc Sở Ngoại vụ được uỷ quyền. Đây là bước xác nhận con dấu và chữ ký trên giấy tờ là thật.",
      },
      {
        title: "Hợp pháp hoá tại cơ quan đại diện nước sở tại",
        detail:
          "Sau khi có chứng nhận lãnh sự, mang tới đại sứ quán hoặc lãnh sự quán của nước bạn sẽ đến để họ hợp pháp hoá. Mỗi nước có quy trình, biểu mẫu, lệ phí và lịch hẹn riêng — xem trên trang web chính thức của họ.",
      },
      {
        title: "Hỏi xem nước đó có tham gia công ước miễn hợp pháp hoá không",
        detail:
          "Một số nước có thoả thuận cho phép dùng hình thức chứng nhận đơn giản hơn thay vì hợp pháp hoá đầy đủ. Hỏi cơ quan đại diện của nước đó — nếu áp dụng được thì bạn tiết kiệm được cả một chặng.",
      },
      {
        title: "Làm nhiều bản cùng lúc",
        detail:
          "Bạn sẽ cần nộp bản gốc đã hợp pháp hoá cho nhiều nơi: trường, sở di trú, nhà tuyển dụng. Làm ba tới năm bộ ngay từ đầu rẻ và nhanh hơn nhiều so với quay lại làm từng bộ.",
      },
      {
        title: "Chụp lưu toàn bộ trước khi gửi đi",
        detail:
          "Chụp mọi trang của mọi bản, lưu lên mây. Bưu kiện quốc tế có thể thất lạc, và khi làm lại bạn cần biết chính xác mình đã có những gì.",
      },
      {
        title: "Tính dư thời gian",
        detail:
          "Mỗi chặng mất vài ngày tới vài tuần, cộng thời gian gửi bưu điện quốc tế. Bắt đầu sớm hơn hạn ít nhất một tháng rưỡi. Đây là loại thủ tục không rút ngắn được bằng cách trả thêm tiền.",
      },
    ],
    notes: [
      "Có những loại giấy tờ không được hợp pháp hoá lãnh sự theo quy định. Hỏi Cục Lãnh sự trước nếu giấy tờ của bạn thuộc dạng đặc biệt.",
      "Cảnh giác với dịch vụ hứa làm siêu tốc mọi loại giấy tờ. Các chặng do cơ quan nhà nước và cơ quan đại diện nước ngoài thực hiện đều có thời hạn riêng không thể rút ngắn tuỳ tiện.",
      "Lệ phí, quy trình và danh mục giấy tờ thay đổi theo thời kỳ và khác nhau giữa các nước. Luôn kiểm tra trên trang chính thức của Cục Lãnh sự và của cơ quan đại diện nước bạn sẽ đến.",
      "Bài này là thông tin thủ tục phổ thông, không phải tư vấn pháp lý hay tư vấn di trú.",
    ],
    faq: [
      {
        q: "Dịch công chứng và dịch thuật thường khác nhau thế nào?",
        a: "Dịch thuật thường chỉ là bản dịch. Dịch công chứng có thêm phần chứng thực chữ ký người dịch bởi cơ quan có thẩm quyền, và đó mới là thứ các cơ quan chính thức chấp nhận.",
      },
      {
        q: "Có phải giấy tờ nào cũng cần hợp pháp hoá không?",
        a: "Không. Tuỳ nước tiếp nhận và tuỳ mục đích. Có nước và có trường hợp chỉ cần bản dịch có chứng thực. Hỏi nơi nhận là cách duy nhất biết chắc.",
      },
      {
        q: "Làm ở đâu nếu tôi đang ở nước ngoài?",
        a: "Liên hệ cơ quan đại diện Việt Nam tại nước đó. Họ hướng dẫn quy trình cho giấy tờ Việt Nam cần dùng ở sở tại, và cả chiều ngược lại.",
      },
      {
        q: "Bản dịch có thời hạn không?",
        a: "Bản dịch thì không, nhưng nhiều cơ quan tiếp nhận yêu cầu giấy tờ được cấp hoặc chứng thực trong vòng một số tháng gần đây. Hỏi nơi nhận về yêu cầu này trước khi làm.",
      },
    ],
    sources: [],
  },
  {
    slug: "dang-ky-nhan-cha-me-con",
    title: "Đăng ký nhận cha mẹ con: thủ tục và những trường hợp hay vướng",
    excerpt:
      "Con sinh ra khi cha mẹ chưa đăng ký kết hôn, hoặc giấy khai sinh để trống phần cha — đây là thủ tục để hoàn chỉnh lại.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Đây là thủ tục hộ tịch xác lập quan hệ cha con, mẹ con trên giấy tờ. Nộp tại UBND cấp xã nơi cư trú, hoặc cấp huyện nếu có yếu tố nước ngoài. Hồ sơ gồm tờ khai theo mẫu và chứng cứ chứng minh quan hệ. Khi cả hai bên đều tự nguyện và thống nhất thì thủ tục khá nhanh. Nếu một bên không thừa nhận thì phải đưa ra toà án chứ không giải quyết tại cơ quan hộ tịch.",
    prepare: [
      "Giấy khai sinh của con",
      "CCCD của người nhận và của người được nhận, hoặc của người đại diện",
      "Chứng cứ chứng minh quan hệ — hỏi cán bộ hộ tịch chấp nhận những gì",
      "Giấy tờ cư trú của các bên",
    ],
    steps: [
      {
        title: "Xác định trường hợp của mình",
        detail:
          "Phổ biến nhất là: con sinh ra khi cha mẹ chưa đăng ký kết hôn nên khai sinh để trống phần cha; hoặc muốn bổ sung tên cha vào giấy khai sinh sau này. Mỗi tình huống có hồ sơ hơi khác nhau — mô tả rõ hoàn cảnh khi hỏi cán bộ hộ tịch.",
      },
      {
        title: "Hỏi cơ quan hộ tịch chấp nhận chứng cứ gì",
        detail:
          "Đây là bước quan trọng nhất và nên làm trước tiên. Chứng cứ có thể là văn bản cam đoan của các bên, thư từ, ảnh, hoặc kết quả giám định. Hỏi để biết mình cần chuẩn bị gì, thay vì tự đoán rồi phải bổ sung nhiều lần.",
      },
      {
        title: "Xác định nộp ở cấp nào",
        detail:
          "Thông thường nộp tại UBND cấp xã nơi cư trú của một trong các bên. Nếu có yếu tố nước ngoài thì thẩm quyền thuộc cấp huyện. Gọi hỏi trước để đi đúng nơi.",
      },
      {
        title: "Chuẩn bị sự có mặt của các bên",
        detail:
          "Thủ tục này thường yêu cầu cả hai bên có mặt để xác nhận sự tự nguyện. Nếu người được nhận là trẻ nhỏ thì cần người đang nuôi dưỡng có mặt. Sắp xếp lịch trước để đi một lần.",
      },
      {
        title: "Nếu con đã đủ lớn thì cần ý kiến của con",
        detail:
          "Từ một độ tuổi nhất định theo quy định, việc nhận cha mẹ con cần có sự đồng ý của chính người con. Hỏi cán bộ hộ tịch về mốc tuổi cụ thể và cách thể hiện ý kiến đó.",
      },
      {
        title: "Cân nhắc giám định nếu cần chứng cứ mạnh",
        detail:
          "Khi chứng cứ khác không đủ, kết quả giám định là chứng cứ thuyết phục nhất. Làm tại cơ sở giám định được công nhận. Chi phí không nhỏ nên hỏi cán bộ hộ tịch xem trường hợp của bạn có thật sự cần không.",
      },
      {
        title: "Nộp hồ sơ và giữ giấy hẹn",
        detail:
          "Nộp tờ khai theo mẫu cùng giấy tờ và chứng cứ. Hỏi thời gian giải quyết. Chụp lại toàn bộ hồ sơ đã nộp trước khi rời đi.",
      },
      {
        title: "Nhận trích lục và kiểm kỹ",
        detail:
          "Sau khi được giải quyết, bạn nhận trích lục đăng ký nhận cha mẹ con. Kiểm họ tên, ngày sinh, quan hệ. Sai sót thì báo ngay tại chỗ.",
      },
      {
        title: "Làm thủ tục bổ sung vào giấy khai sinh",
        detail:
          "Sau khi có trích lục, làm tiếp thủ tục để bổ sung hoặc thay đổi thông tin trên giấy khai sinh của con. Hỏi cán bộ hộ tịch xem hai việc này làm gộp được không tại nơi bạn nộp.",
      },
      {
        title: "Cập nhật các giấy tờ liên quan của con",
        detail:
          "Sau khi khai sinh được cập nhật, kiểm lại thông tin cư trú, thẻ bảo hiểm y tế, hồ sơ học bạ của con. Đây là phần hay bị quên và gây phiền lúc con đi học hoặc đi khám bệnh.",
      },
      {
        title: "Hiểu hệ quả pháp lý đi kèm",
        detail:
          "Quan hệ cha con, mẹ con được xác lập kéo theo quyền và nghĩa vụ về nuôi dưỡng, cấp dưỡng và thừa kế. Đây là điều cả hai bên nên hiểu rõ trước khi làm, chứ không chỉ là thêm một cái tên trên giấy.",
      },
      {
        title: "Nếu có tranh chấp thì đưa ra toà",
        detail:
          "Cơ quan hộ tịch chỉ giải quyết khi các bên tự nguyện và không có tranh chấp. Nếu một bên không thừa nhận, phải khởi kiện tại toà án để xác định quan hệ cha mẹ con. Đây là lúc nên có luật sư hoặc trợ giúp pháp lý.",
      },
    ],
    notes: [
      "Thủ tục này ảnh hưởng tới quyền lợi lâu dài của đứa trẻ — quyền được nuôi dưỡng, cấp dưỡng và thừa kế. Đừng trì hoãn vì ngại thủ tục.",
      "Thẩm quyền, hồ sơ, chứng cứ được chấp nhận và mốc tuổi cần ý kiến của con thay đổi theo quy định từng thời kỳ. Hỏi trực tiếp cán bộ hộ tịch tại UBND xã phường.",
      "Nếu bạn khó khăn về tài chính hoặc thuộc đối tượng được hỗ trợ, hãy tìm trung tâm trợ giúp pháp lý nhà nước tại tỉnh — họ hỗ trợ miễn phí theo quy định.",
      "Bài này là thông tin thủ tục phổ thông, không phải tư vấn pháp lý cho trường hợp cụ thể.",
    ],
    faq: [
      {
        q: "Cha mẹ chưa kết hôn thì con có được mang họ cha không?",
        a: "Sau khi đăng ký nhận cha con và cập nhật giấy khai sinh, việc mang họ nào do các bên thoả thuận theo quy định. Hỏi cán bộ hộ tịch về cách thể hiện thoả thuận đó.",
      },
      {
        q: "Có bắt buộc giám định không?",
        a: "Không bắt buộc trong mọi trường hợp. Khi các bên tự nguyện và có chứng cứ khác được chấp nhận thì không cần. Giám định thường dùng khi có nghi ngờ hoặc có tranh chấp.",
      },
      {
        q: "Người cha ở nước ngoài thì làm thế nào?",
        a: "Trường hợp có yếu tố nước ngoài thuộc thẩm quyền cấp huyện, và có thể cần giấy tờ được hợp pháp hoá lãnh sự. Hỏi phòng tư pháp cấp huyện về trình tự cụ thể.",
      },
      {
        q: "Làm thủ tục này có ảnh hưởng tới quyền nuôi con không?",
        a: "Việc xác lập quan hệ cha mẹ con và việc ai trực tiếp nuôi dưỡng là hai vấn đề khác nhau. Nếu có tranh chấp về nuôi con, đó là việc do toà án giải quyết.",
      },
    ],
    sources: [],
  },
  {
    slug: "gop-so-bhxh-nhieu-so",
    title: "Có nhiều sổ bảo hiểm xã hội: gộp lại trước khi nó thành rắc rối",
    excerpt:
      "Đổi việc vài lần, mỗi nơi cấp một sổ, và bạn đang có hai ba mã số. Tới lúc làm chế độ mới phát hiện thì mọi thứ chậm lại hàng tháng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Mỗi người chỉ nên có một mã số bảo hiểm xã hội duy nhất, dùng suốt đời. Có nhiều sổ thường do khi vào công ty mới bạn không cung cấp mã cũ nên họ cấp mã mới. Kiểm bằng ứng dụng VssID hoặc tra trên cổng thông tin của cơ quan bảo hiểm xã hội. Phát hiện trùng thì nộp hồ sơ gộp sổ tại cơ quan bảo hiểm xã hội — làm sớm, vì để tới lúc hưởng chế độ mới xử lý là chậm hàng tháng.",
    prepare: [
      "Tất cả các sổ bảo hiểm xã hội bạn đang có, kể cả sổ cũ tưởng đã bỏ",
      "CCCD và thông tin cá nhân chính xác",
      "Danh sách các công ty đã làm và khoảng thời gian ở mỗi nơi",
      "Ứng dụng VssID cài sẵn trên điện thoại",
    ],
    steps: [
      {
        title: "Hiểu vì sao mình có nhiều sổ",
        detail:
          "Khi vào công ty mới mà bạn không đưa mã số cũ, hoặc đưa thông tin cá nhân khác đi một chút, hệ thống sẽ cấp mã mới. Chuyện này rất phổ biến với người đổi việc nhiều lần hoặc từng làm ở tỉnh khác.",
      },
      {
        title: "Kiểm xem mình có bao nhiêu mã số",
        detail:
          "Cài VssID và đăng nhập, hoặc tra trên cổng thông tin của cơ quan bảo hiểm xã hội bằng CCCD. Nếu thấy quá trình đóng bị đứt quãng bất thường, hoặc thiếu hẳn một giai đoạn bạn nhớ là có đi làm, thì rất có thể có sổ thứ hai.",
      },
      {
        title: "Đối chiếu với lịch sử làm việc của mình",
        detail:
          "Viết ra danh sách các công ty đã làm và thời gian ở mỗi nơi. So với những gì hiển thị trên VssID. Chỗ nào thiếu thì đó là manh mối — hoặc công ty không đóng, hoặc thời gian đó nằm ở một mã số khác.",
      },
      {
        title: "Tìm lại các sổ cũ",
        detail:
          "Lục lại giấy tờ, hỏi phòng nhân sự nơi cũ. Nhiều công ty giữ sổ của nhân viên và trả khi nghỉ việc — nếu bạn nghỉ vội có thể chưa lấy. Không tìm được bản giấy vẫn làm được, nhưng có thì nhanh hơn.",
      },
      {
        title: "Kiểm thông tin cá nhân trên từng sổ",
        detail:
          "Họ tên, ngày sinh, số CCCD hoặc chứng minh nhân dân cũ. Nếu các sổ ghi khác nhau thì phải điều chỉnh cho khớp trước hoặc cùng lúc với việc gộp. Đây là nguyên nhân hồ sơ bị trả về nhiều nhất.",
      },
      {
        title: "Chuẩn bị hồ sơ gộp sổ",
        detail:
          "Thường gồm tờ khai theo mẫu và các sổ bạn đang có. Danh mục cụ thể hỏi cơ quan bảo hiểm xã hội hoặc xem hướng dẫn trên cổng thông tin của họ. Nếu đang đi làm, phòng nhân sự thường hỗ trợ nộp thay.",
      },
      {
        title: "Nộp qua công ty nếu đang đi làm",
        detail:
          "Đây là cách nhanh nhất. Phòng nhân sự làm việc này thường xuyên và có kênh riêng với cơ quan bảo hiểm. Đưa cho họ toàn bộ sổ và thông tin, rồi hỏi lại tiến độ sau vài tuần.",
      },
      {
        title: "Nếu đang không đi làm thì tự nộp",
        detail:
          "Nộp trực tiếp tại cơ quan bảo hiểm xã hội nơi cư trú, hoặc qua cổng dịch vụ công nếu địa phương đã triển khai. Hỏi rõ thời gian giải quyết và cách nhận kết quả.",
      },
      {
        title: "Xử lý trường hợp trùng thời gian đóng",
        detail:
          "Nếu hai sổ có giai đoạn đóng trùng nhau, cơ quan bảo hiểm sẽ xử lý theo quy định và có thể hoàn trả phần đóng thừa. Đừng tự tính toán — cứ nộp hồ sơ và để họ đối chiếu.",
      },
      {
        title: "Kiểm lại sau khi gộp xong",
        detail:
          "Mở VssID xem tổng thời gian đóng đã cộng đủ chưa, có đúng các giai đoạn bạn đã làm không. Sai sót thì báo ngay, đừng để tới lúc làm chế độ mới phát hiện.",
      },
      {
        title: "Ghi nhớ mã số cho lần đổi việc sau",
        detail:
          "Lưu mã số bảo hiểm xã hội vào ghi chú điện thoại. Mỗi lần vào công ty mới, đưa mã này cho nhân sự ngay từ hồ sơ đầu vào. Đây là cách đơn giản nhất để không bao giờ bị cấp thêm sổ mới.",
      },
      {
        title: "Kiểm VssID định kỳ",
        detail:
          "Mỗi vài tháng mở ra xem công ty có đóng đủ và đúng không. Phát hiện sớm thì còn xử lý được với công ty; phát hiện sau nhiều năm thì rất khó đòi.",
      },
    ],
    notes: [
      "Có nhiều sổ mà không gộp có thể khiến thời gian đóng bị tính thiếu khi hưởng chế độ hưu trí, thất nghiệp hay thai sản. Đây là thiệt hại thật bằng tiền.",
      "Nếu phát hiện công ty không đóng hoặc đóng thiếu cho bạn, hãy làm việc với phòng nhân sự trước bằng văn bản. Không giải quyết được thì phản ánh tới cơ quan bảo hiểm xã hội hoặc thanh tra lao động.",
      "Thủ tục, biểu mẫu và thời gian giải quyết thay đổi theo quy định từng thời kỳ. Hỏi trực tiếp cơ quan bảo hiểm xã hội nơi cư trú.",
      "Bài này là thông tin thủ tục phổ thông, không phải tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Mất sổ bảo hiểm xã hội thì có gộp được không?",
        a: "Được. Dữ liệu nằm trên hệ thống của cơ quan bảo hiểm xã hội, sổ giấy chỉ là bản in. Trình bày rõ tình trạng khi nộp hồ sơ và làm theo hướng dẫn của họ.",
      },
      {
        q: "Gộp sổ có mất phí không?",
        a: "Đây là thủ tục hành chính về bảo hiểm xã hội. Hỏi cơ quan bảo hiểm xã hội về lệ phí hiện hành, và cảnh giác với dịch vụ trung gian thu phí cao.",
      },
      {
        q: "Bao lâu thì xong?",
        a: "Tuỳ mức độ phức tạp, nhất là khi thông tin cá nhân giữa các sổ khác nhau. Hỏi thời hạn khi nộp và giữ giấy hẹn để theo dõi.",
      },
      {
        q: "Làm ở tỉnh khác thì nộp ở đâu?",
        a: "Thường nộp tại cơ quan bảo hiểm xã hội nơi bạn đang cư trú hoặc nơi công ty hiện tại đóng bảo hiểm. Gọi hỏi trước để đi đúng chỗ.",
      },
    ],
    sources: [],
  },
  {
    slug: "rut-bhxh-mot-lan-hieu-truoc-khi-quyet",
    title: "Rút bảo hiểm xã hội một lần: hiểu mình đánh đổi gì trước khi quyết",
    excerpt:
      "Cầm một khoản tiền ngay bây giờ, đổi lại là mất toàn bộ thời gian đã đóng và cả lương hưu sau này. Đây là phép tính nên làm trước, không phải sau.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Rút một lần nghĩa là bạn nhận một khoản tiền và toàn bộ thời gian đã đóng bị xoá khỏi hệ thống — sau này muốn có lương hưu thì phải đóng lại từ đầu. Điều kiện, cách tính và thời gian chờ được quy định cụ thể và có thay đổi theo từng giai đoạn. Trước khi quyết, hãy tới cơ quan bảo hiểm xã hội hỏi ba con số: bạn đã đóng bao nhiêu năm, rút được khoảng bao nhiêu, và nếu giữ thì cần đóng thêm bao lâu nữa để đủ điều kiện hưởng lương hưu.",
    prepare: [
      "Sổ bảo hiểm xã hội đã gộp hết nếu bạn có nhiều sổ",
      "Ứng dụng VssID để xem tổng thời gian đóng của mình",
      "CCCD và giấy tờ cư trú",
      "Một buổi tới cơ quan bảo hiểm xã hội để hỏi con số cụ thể trước khi quyết",
    ],
    steps: [
      {
        title: "Hiểu bản chất của việc rút một lần",
        detail:
          "Đây không phải rút tiền tiết kiệm của mình. Bạn nhận một khoản và toàn bộ thời gian đã đóng bị xoá. Muốn có lương hưu sau này thì phải bắt đầu tích luỹ lại từ con số không. Đây là điểm nhiều người không nắm rõ khi quyết định.",
      },
      {
        title: "Xem mình đã đóng được bao nhiêu",
        detail:
          "Mở VssID xem tổng thời gian đóng. Nếu số năm đã khá nhiều, hãy cân nhắc rất kỹ — vì bạn đang bỏ đi phần đã đi được của một chặng đường dài. Người đóng ít năm thì tính toán khác hẳn người đóng nhiều năm.",
      },
      {
        title: "Kiểm điều kiện rút theo quy định hiện hành",
        detail:
          "Pháp luật quy định các trường hợp được hưởng bảo hiểm xã hội một lần, thường liên quan tới thời gian đã nghỉ việc, tuổi, tình trạng sức khoẻ, hoặc việc ra nước ngoài định cư. Điều kiện này có thay đổi theo từng giai đoạn — hỏi cơ quan bảo hiểm xã hội về quy định đang áp dụng.",
      },
      {
        title: "Hỏi ba con số trước khi quyết",
        detail:
          "Một, tổng thời gian đã đóng của tôi là bao nhiêu? Hai, nếu rút một lần thì được khoảng bao nhiêu? Ba, nếu giữ lại thì cần đóng thêm bao lâu nữa để đủ điều kiện hưởng lương hưu? Ba con số này đặt cạnh nhau thì quyết định trở nên rõ ràng.",
      },
      {
        title: "Cân nhắc phương án đóng tiếp tự nguyện",
        detail:
          "Nếu nghỉ việc nhưng chưa muốn mất thời gian đã đóng, có hình thức tham gia bảo hiểm xã hội tự nguyện để duy trì. Mức đóng linh hoạt theo khả năng. Hỏi cơ quan bảo hiểm xã hội về mức thấp nhất và cách tham gia.",
      },
      {
        title: "Nghĩ tới những quyền lợi đi kèm mà bạn sẽ mất",
        detail:
          "Không chỉ là lương hưu. Người hưởng lương hưu còn được cấp thẻ bảo hiểm y tế, và có chế độ cho thân nhân khi qua đời. Rút một lần là bỏ luôn cả những phần này. Hãy tính đầy đủ chứ không chỉ tính khoản tiền nhận ngay.",
      },
      {
        title: "Nếu vẫn quyết rút, chuẩn bị hồ sơ",
        detail:
          "Thường gồm sổ bảo hiểm xã hội, đơn theo mẫu, CCCD. Trường hợp đặc biệt như bệnh hiểm nghèo hay ra nước ngoài định cư cần giấy tờ riêng. Hỏi danh mục cụ thể tại cơ quan bảo hiểm xã hội.",
      },
      {
        title: "Gộp sổ trước khi nộp hồ sơ rút",
        detail:
          "Nếu bạn có nhiều sổ mà chưa gộp, hãy gộp trước. Nếu không, phần thời gian ở sổ kia sẽ không được tính vào khoản chi trả và bạn bị thiệt.",
      },
      {
        title: "Nộp hồ sơ và giữ giấy hẹn",
        detail:
          "Nộp tại cơ quan bảo hiểm xã hội nơi cư trú, hoặc qua cổng dịch vụ công nếu đã triển khai. Hỏi thời gian giải quyết và hình thức nhận tiền — chuyển khoản thường nhanh và an toàn hơn nhận tiền mặt.",
      },
      {
        title: "Kiểm số tiền nhận được so với thông báo",
        detail:
          "Đối chiếu với bảng tính mà cơ quan bảo hiểm đưa. Có thắc mắc thì hỏi ngay, đừng để lâu. Giữ lại toàn bộ giấy tờ và quyết định hưởng.",
      },
      {
        title: "Có kế hoạch cho khoản tiền đó",
        detail:
          "Đây là khoản thay thế cho an sinh tuổi già của bạn. Nếu rút để trả nợ hay chữa bệnh thì đó là lý do rõ ràng. Nếu rút mà chưa biết dùng vào việc gì thì hãy dừng lại và nghĩ thêm.",
      },
      {
        title: "TUYỆT ĐỐI không bán sổ bảo hiểm xã hội",
        detail:
          "Có những nơi mua lại sổ hoặc nhận uỷ quyền rút hộ với giá thấp hơn nhiều giá trị thật. Đây là hoạt động có dấu hiệu vi phạm pháp luật và bạn là người thiệt. Sổ bảo hiểm gắn với nhân thân, không phải hàng hoá.",
      },
    ],
    notes: [
      "Quy định về điều kiện hưởng, cách tính và thời gian chờ THAY ĐỔI theo từng giai đoạn và đã có nhiều điều chỉnh trong những năm gần đây. Mọi thông tin trong bài chỉ là hướng chung — hãy hỏi trực tiếp cơ quan bảo hiểm xã hội về quy định đang áp dụng cho trường hợp của bạn.",
      "Cảnh giác tuyệt đối với dịch vụ mua bán sổ bảo hiểm xã hội, nhận uỷ quyền rút hộ, hoặc hứa rút nhanh không cần chờ. Đây là nhóm hoạt động rủi ro cao và bạn có thể mất trắng.",
      "Nếu bạn đang cần tiền gấp vì lý do y tế hoặc nợ nần, hãy tìm hiểu các phương án khác trước — vay ưu đãi, hỗ trợ xã hội — vì rút một lần là quyết định gần như không đảo ngược được.",
      "Bài này là thông tin phổ thông giúp bạn biết cần hỏi gì, KHÔNG PHẢI TƯ VẤN TÀI CHÍNH hay tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Rút rồi có đóng lại được không?",
        a: "Bạn có thể tham gia lại, nhưng thời gian đóng bắt đầu tính lại từ đầu. Phần đã rút không khôi phục được. Đây là điểm quan trọng nhất cần hiểu trước khi quyết.",
      },
      {
        q: "Đóng được vài năm rồi nghỉ việc, nên rút hay giữ?",
        a: "Không có câu trả lời chung. Hãy tới cơ quan bảo hiểm xã hội hỏi ba con số ở bước 4, rồi tự cân nhắc theo hoàn cảnh. Nếu bạn còn trẻ và sẽ đi làm tiếp thì giữ thường có lợi hơn.",
      },
      {
        q: "Đang ở tỉnh khác thì nộp ở đâu?",
        a: "Thường nộp tại cơ quan bảo hiểm xã hội nơi bạn cư trú. Gọi hỏi trước để chắc chắn và để biết cần mang gì.",
      },
      {
        q: "Có phải chờ một thời gian sau khi nghỉ việc mới rút được không?",
        a: "Thông thường có quy định về thời gian chờ kể từ khi nghỉ việc và không tiếp tục đóng. Mốc cụ thể theo quy định hiện hành — hỏi cơ quan bảo hiểm xã hội.",
      },
    ],
    sources: [],
  },
  {
    slug: "xin-tro-cap-thai-san",
    title: "Chế độ thai sản: điều kiện, hồ sơ và mốc thời gian phải nhớ",
    excerpt:
      "Nhiều người mất quyền lợi chỉ vì nộp hồ sơ muộn, hoặc vì không biết mình đã đủ điều kiện từ trước khi nghỉ.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Điều kiện cơ bản là có đóng bảo hiểm xã hội đủ số tháng theo quy định trong khoảng thời gian trước khi sinh. Hồ sơ thường gồm giấy khai sinh hoặc giấy chứng sinh của con và các giấy tờ theo mẫu. Nếu còn đang làm việc thì nộp qua công ty; đã nghỉ việc thì nộp trực tiếp cho cơ quan bảo hiểm xã hội. Có thời hạn nộp hồ sơ — nộp muộn có thể mất quyền lợi, nên đây là việc phải làm sớm.",
    prepare: [
      "Giấy chứng sinh hoặc giấy khai sinh của con",
      "Sổ bảo hiểm xã hội, đã gộp nếu có nhiều sổ",
      "Thông tin về quá trình đóng bảo hiểm, xem trên VssID",
      "Số tài khoản ngân hàng mang tên mình để nhận tiền",
    ],
    steps: [
      {
        title: "Kiểm điều kiện của mình từ khi mang thai",
        detail:
          "Điều kiện hưởng liên quan tới số tháng đã đóng bảo hiểm xã hội trong khoảng thời gian trước khi sinh. Mở VssID xem quá trình đóng của mình ngay từ những tháng đầu thai kỳ, để nếu còn thiếu thì còn kịp xoay xở.",
      },
      {
        title: "Hỏi cơ quan bảo hiểm xã hội cho chắc",
        detail:
          "Quy định có nhiều tình huống: đóng không liên tục, nghỉ việc giữa chừng, sinh non, sinh đôi, nhận con nuôi. Gọi hoặc tới hỏi trực tiếp với hoàn cảnh cụ thể của bạn thay vì đọc thông tin chung trên mạng.",
      },
      {
        title: "Biết chế độ không chỉ có phần nghỉ sinh",
        detail:
          "Ngoài thời gian nghỉ khi sinh con, còn có chế độ khi đi khám thai, khi sẩy thai, và trợ cấp một lần khi sinh con. Người chồng đang đóng bảo hiểm xã hội cũng có chế độ nghỉ khi vợ sinh. Hỏi đủ để không bỏ sót phần nào.",
      },
      {
        title: "Giữ mọi giấy tờ y tế trong thai kỳ",
        detail:
          "Giấy khám thai, giấy ra viện, giấy chứng sinh. Cất chung một chỗ và chụp ảnh lưu. Đây là những thứ bạn sẽ cần và rất khó xin lại nếu thất lạc.",
      },
      {
        title: "Báo cho phòng nhân sự sớm",
        detail:
          "Nói với nhân sự về thời điểm dự sinh và kế hoạch nghỉ. Họ là người làm hồ sơ và biết quy trình của công ty. Báo sớm cũng giúp công ty sắp xếp và giúp bạn tránh hiểu lầm về hợp đồng.",
      },
      {
        title: "Chuẩn bị hồ sơ ngay sau sinh",
        detail:
          "Ngay khi có giấy chứng sinh, làm khai sinh cho con và nộp hồ sơ cho công ty. Đừng để tới khi hết thời gian nghỉ mới làm — có thời hạn nộp và nộp muộn có thể ảnh hưởng quyền lợi.",
      },
      {
        title: "Nếu đã nghỉ việc trước khi sinh thì tự nộp",
        detail:
          "Trường hợp nghỉ việc trước khi sinh mà vẫn đủ điều kiện, bạn nộp hồ sơ trực tiếp cho cơ quan bảo hiểm xã hội nơi cư trú. Hỏi họ danh mục giấy tờ và biểu mẫu cần dùng cho trường hợp này.",
      },
      {
        title: "Cung cấp số tài khoản đúng tên mình",
        detail:
          "Tiền thường được chuyển khoản. Tài khoản phải mang tên người hưởng và thông tin phải khớp với hồ sơ. Sai lệch tên là lý do chậm chi trả rất phổ biến.",
      },
      {
        title: "Theo dõi tiến độ trên VssID",
        detail:
          "Ứng dụng cho xem tình trạng hồ sơ và lịch sử chi trả. Nếu quá thời hạn giải quyết mà chưa thấy gì, hỏi lại nhân sự hoặc cơ quan bảo hiểm xã hội, đừng chờ thụ động.",
      },
      {
        title: "Kiểm số tiền nhận được",
        detail:
          "Đối chiếu với cách tính mà cơ quan bảo hiểm xã hội thông báo. Có thắc mắc thì hỏi ngay và giữ lại quyết định hưởng chế độ. Đây là giấy tờ nên lưu lâu dài.",
      },
      {
        title: "Biết quyền của mình khi quay lại làm việc",
        detail:
          "Pháp luật lao động có quy định bảo vệ lao động nữ mang thai và nuôi con nhỏ, gồm cả việc không được đơn phương chấm dứt hợp đồng vì lý do thai sản trong những trường hợp nhất định. Nếu gặp vấn đề, hãy tìm hiểu quy định hiện hành hoặc liên hệ thanh tra lao động.",
      },
      {
        title: "Hỏi về chế độ dưỡng sức sau sinh",
        detail:
          "Có chế độ nghỉ dưỡng sức phục hồi sức khoẻ sau thai sản trong một số trường hợp. Nhiều người không biết nên bỏ qua. Hỏi nhân sự hoặc cơ quan bảo hiểm xã hội xem bạn có thuộc diện được hưởng không.",
      },
    ],
    notes: [
      "CÓ THỜI HẠN NỘP HỒ SƠ. Nộp muộn có thể ảnh hưởng hoặc mất quyền lợi. Hỏi rõ mốc thời hạn ngay khi bắt đầu chuẩn bị và đặt nhắc trên điện thoại.",
      "Nếu công ty không nộp hồ sơ cho bạn hoặc chậm trễ, hãy yêu cầu bằng văn bản hoặc email để có lưu vết. Không giải quyết được thì phản ánh tới cơ quan bảo hiểm xã hội hoặc thanh tra lao động.",
      "Điều kiện hưởng, thời gian nghỉ, mức trợ cấp và thời hạn nộp hồ sơ thay đổi theo quy định từng thời kỳ. Hỏi trực tiếp cơ quan bảo hiểm xã hội về quy định đang áp dụng.",
      "Bài này là thông tin thủ tục phổ thông, không phải tư vấn pháp lý hay tư vấn y tế.",
    ],
    faq: [
      {
        q: "Nghỉ việc trước khi sinh có được hưởng không?",
        a: "Có thể, nếu quá trình đóng bảo hiểm xã hội trước đó đáp ứng điều kiện theo quy định. Hãy hỏi cơ quan bảo hiểm xã hội với số tháng đóng cụ thể của bạn.",
      },
      {
        q: "Chồng có được nghỉ khi vợ sinh không?",
        a: "Người chồng đang đóng bảo hiểm xã hội có chế độ nghỉ việc hưởng chế độ khi vợ sinh con, số ngày tuỳ trường hợp sinh thường hay sinh mổ, sinh một hay sinh đôi. Hỏi nhân sự về thủ tục.",
      },
      {
        q: "Bao lâu thì nhận được tiền?",
        a: "Có thời hạn giải quyết theo quy định tính từ khi cơ quan bảo hiểm nhận đủ hồ sơ hợp lệ. Theo dõi trên VssID và hỏi lại nếu quá hạn.",
      },
      {
        q: "Sinh con ở bệnh viện tư có được hưởng không?",
        a: "Chế độ thai sản dựa trên việc bạn tham gia bảo hiểm xã hội, không phụ thuộc sinh ở bệnh viện công hay tư. Chỉ cần có giấy chứng sinh hợp lệ. Phần chi phí sinh nở lại là chuyện của bảo hiểm y tế, khác với chế độ thai sản.",
      },
    ],
    sources: [],
  },
  {
    slug: "chuyen-bhxh-bhyt-khi-doi-noi-lam-viec",
    title: "Đổi việc, chuyển tỉnh: bảo hiểm xã hội và bảo hiểm y tế phải làm gì",
    excerpt:
      "Nghỉ việc rồi đi làm nơi mới, tưởng nhân sự lo hết. Có ba thứ nếu bạn không tự kiểm thì vài năm sau mới phát hiện là đã hỏng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Ba việc phải làm khi đổi việc: lấy lại sổ bảo hiểm xã hội và quyết định thôi việc từ công ty cũ; đưa đúng mã số bảo hiểm xã hội cũ cho công ty mới để không bị cấp sổ thứ hai; và trong khoảng thời gian trống giữa hai công việc thì kiểm xem thẻ bảo hiểm y tế còn giá trị tới ngày nào. Nếu khoảng trống dài, cân nhắc mua bảo hiểm y tế hộ gia đình để không bị gián đoạn.",
    prepare: [
      "Mã số bảo hiểm xã hội của bạn, lưu sẵn trong ghi chú điện thoại",
      "Ứng dụng VssID để tự kiểm quá trình đóng và hạn thẻ bảo hiểm y tế",
      "Quyết định thôi việc và sổ bảo hiểm xã hội lấy từ công ty cũ",
      "Lịch trình: ngày nghỉ việc và ngày bắt đầu ở nơi mới",
    ],
    steps: [
      {
        title: "Trước khi nghỉ, lấy đủ giấy tờ từ công ty cũ",
        detail:
          "Quyết định thôi việc hoặc quyết định chấm dứt hợp đồng, sổ bảo hiểm xã hội đã chốt, và bản thanh lý hợp đồng nếu có. Đừng rời đi khi chưa cầm được sổ — đòi lại sau khi đã nghỉ khó hơn nhiều.",
      },
      {
        title: "Kiểm sổ đã được chốt tới đúng tháng chưa",
        detail:
          "Mở VssID xem quá trình đóng có ghi nhận tới tháng cuối cùng bạn làm không. Nếu thiếu, báo ngay cho nhân sự công ty cũ khi mọi việc còn nóng hổi. Để vài tháng sau mới hỏi là rất khó xử lý.",
      },
      {
        title: "Lưu mã số bảo hiểm xã hội của mình",
        detail:
          "Ghi vào ghi chú điện thoại cùng với số CCCD. Đây là con số bạn sẽ dùng suốt đời và sẽ cần ở mọi nơi làm việc sau này.",
      },
      {
        title: "Đưa mã số cũ cho công ty mới ngay từ hồ sơ đầu vào",
        detail:
          "Đây là bước ngăn chặn việc bị cấp sổ thứ hai — nguyên nhân của rất nhiều rắc rối sau này. Ghi rõ mã số vào tờ khai và nhắc nhân sự rằng bạn đã có sổ.",
      },
      {
        title: "Kiểm thông tin cá nhân cho khớp",
        detail:
          "Họ tên, ngày sinh, số CCCD phải giống hệt giữa hồ sơ cũ và mới. Một khác biệt nhỏ cũng đủ để hệ thống coi bạn là người khác và cấp mã mới.",
      },
      {
        title: "Xem thẻ bảo hiểm y tế còn giá trị tới ngày nào",
        detail:
          "Thẻ do công ty cũ đóng thường còn giá trị tới hết tháng bạn nghỉ hoặc theo quy định hiện hành. Mở VssID xem hạn cụ thể. Đây là thông tin bạn cần biết chính xác, không đoán.",
      },
      {
        title: "Nếu có khoảng trống, cân nhắc mua bảo hiểm y tế hộ gia đình",
        detail:
          "Nghỉ vài tháng mới đi làm lại thì khoảng đó bạn không có thẻ. Ốm đau trong thời gian ấy phải tự trả toàn bộ. Mua bảo hiểm y tế hộ gia đình tại UBND xã phường hoặc đại lý thu — và nhớ là thẻ có thời gian chờ trước khi dùng được.",
      },
      {
        title: "Chú ý việc gián đoạn ảnh hưởng tới quyền lợi",
        detail:
          "Tham gia bảo hiểm y tế liên tục nhiều năm có ảnh hưởng tới một số quyền lợi. Đứt quãng có thể làm mất phần đã tích luỹ. Hỏi cơ quan bảo hiểm xã hội xem trường hợp của bạn có bị ảnh hưởng không.",
      },
      {
        title: "Xem xét chế độ thất nghiệp nếu nghỉ dài",
        detail:
          "Nếu bạn đủ điều kiện và chưa có việc mới, hãy làm hồ sơ hưởng trợ cấp thất nghiệp tại trung tâm dịch vụ việc làm. Có thời hạn nộp kể từ ngày chấm dứt hợp đồng — hỏi mốc cụ thể và đừng để quá.",
      },
      {
        title: "Chuyển tỉnh thì kiểm nơi đăng ký khám chữa bệnh",
        detail:
          "Thẻ bảo hiểm y tế có nơi đăng ký khám chữa bệnh ban đầu. Chuyển tỉnh mà không đổi thì đi khám sẽ bị coi là trái tuyến ở nhiều trường hợp. Làm thủ tục thay đổi nơi đăng ký theo hướng dẫn của cơ quan bảo hiểm xã hội.",
      },
      {
        title: "Sau vài tháng ở chỗ mới, kiểm lại trên VssID",
        detail:
          "Xem công ty mới có đóng đủ và đúng mã số của bạn không. Kiểm sớm thì sửa dễ. Đây là thói quen nên duy trì mỗi vài tháng chứ không chỉ khi đổi việc.",
      },
      {
        title: "Cập nhật thông tin người phụ thuộc nếu có thay đổi",
        detail:
          "Đổi việc là dịp rà lại phần đăng ký người phụ thuộc cho thuế thu nhập cá nhân. Nhân sự nơi mới cần thông tin này để tính giảm trừ đúng cho bạn.",
      },
    ],
    notes: [
      "Không để công ty cũ giữ sổ bảo hiểm xã hội của bạn sau khi đã nghỉ việc. Nếu họ chậm trả, gửi yêu cầu bằng văn bản hoặc email để có lưu vết, rồi phản ánh tới cơ quan bảo hiểm xã hội hoặc thanh tra lao động nếu cần.",
      "Có thời hạn nộp hồ sơ hưởng trợ cấp thất nghiệp kể từ khi chấm dứt hợp đồng. Quá hạn là mất quyền lợi — hỏi trung tâm dịch vụ việc làm ngay khi nghỉ.",
      "Quy định về thời hạn thẻ bảo hiểm y tế, thời gian chờ và quyền lợi khi tham gia liên tục thay đổi theo thời kỳ. Hỏi cơ quan bảo hiểm xã hội cho trường hợp cụ thể.",
      "Bài này là thông tin thủ tục phổ thông, không phải tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Công ty cũ chưa trả sổ thì công ty mới có đóng được không?",
        a: "Việc đóng dựa trên mã số bảo hiểm xã hội chứ không phải cuốn sổ giấy. Nhưng bạn vẫn nên đòi sổ và quyết định thôi việc, vì cần cho các thủ tục sau này.",
      },
      {
        q: "Nghỉ giữa chừng một hai tháng có sao không?",
        a: "Về thời gian đóng bảo hiểm xã hội thì phần đã đóng vẫn được giữ. Nhưng bạn sẽ không có thẻ bảo hiểm y tế trong khoảng đó, và việc tham gia không liên tục có thể ảnh hưởng một số quyền lợi.",
      },
      {
        q: "Mua bảo hiểm y tế hộ gia đình có dùng được ngay không?",
        a: "Thường có thời gian chờ kể từ ngày đóng mới được sử dụng. Vì vậy đừng đợi tới lúc ốm mới mua. Hỏi đại lý thu về mốc cụ thể.",
      },
      {
        q: "Làm freelance không có công ty thì đóng thế nào?",
        a: "Có hình thức bảo hiểm xã hội tự nguyện với mức đóng linh hoạt, và bảo hiểm y tế hộ gia đình. Hỏi cơ quan bảo hiểm xã hội hoặc UBND xã phường nơi cư trú về cách tham gia.",
      },
    ],
    sources: [],
  },
];
