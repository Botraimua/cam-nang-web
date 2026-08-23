// Bài đăng ngày 2026-08-24 — khung 7h sáng
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-24";

export const day20260824sang = [
  // ═══════════════════════ TIỀN BẠC ═══════════════════════
  {
    slug: "lap-ngan-sach-chia-hu",
    title: "Chia lương thành các hũ: cách quản tiền không cần ghi từng đồng",
    excerpt:
      "Ghi chép chi tiêu rồi vẫn hết tiền cuối tháng, vì ghi chép chỉ cho biết tiền đã đi đâu — nó không ngăn tiền đi.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Thay vì theo dõi từng khoản chi, hãy chia lương ngay khi vừa nhận thành vài phần cố định, mỗi phần một mục đích, tốt nhất là ở các tài khoản riêng. Khi hũ nào hết thì phần đó ngừng, không lấy lấn sang hũ khác. Bắt đầu bằng ba hũ đơn giản: chi phí bắt buộc, tiết kiệm, và chi tiêu tự do. Điểm quyết định là chuyển tiền vào các hũ NGAY trong ngày nhận lương, không phải để cuối tháng còn bao nhiêu mới tiết kiệm.",
    prepare: [
      "Sao kê ba tháng gần nhất để biết mình thật sự chi bao nhiêu cho từng nhóm",
      "Ít nhất hai tài khoản ngân hàng, hoặc một tài khoản chính cộng vài tài khoản phụ mở online",
      "Danh sách các khoản cố định hằng tháng: nhà, điện nước, mạng, trả góp",
      "Một buổi tối rảnh để ngồi tính, và giấy bút",
    ],
    steps: [
      {
        title: "Hiểu vì sao ghi chép thôi là chưa đủ",
        detail:
          "Ghi chép là nhìn về quá khứ, nó cho biết tiền đã đi đâu sau khi đã đi. Chia hũ là quyết định trước, nó dựng hàng rào trước khi tiền chạy. Hai việc bổ sung cho nhau, nhưng nếu chỉ làm được một thì chia hũ có tác dụng hơn.",
      },
      {
        title: "Nhìn lại ba tháng để biết con số thật",
        detail:
          "Mở sao kê, cộng riêng các nhóm: nhà cửa, ăn uống, đi lại, con cái, giải trí, các khoản trả góp. Đừng dùng con số bạn nghĩ mình chi — dùng con số thật. Gần như ai cũng ngạc nhiên ở bước này.",
      },
      {
        title: "Bắt đầu bằng ba hũ, đừng làm sáu hũ ngay",
        detail:
          "Hũ một: chi phí bắt buộc — nhà, điện nước, ăn uống, đi lại, trả nợ. Hũ hai: tiết kiệm và dự phòng. Hũ ba: chi tiêu tự do — cà phê, mua sắm, giải trí. Ba hũ đủ đơn giản để duy trì được, và duy trì được mới là điều quan trọng nhất.",
      },
      {
        title: "Đặt tỉ lệ theo hoàn cảnh của mình, không copy công thức",
        detail:
          "Các tỉ lệ nổi tiếng trên mạng được xây cho hoàn cảnh khác. Người thuê nhà ở thành phố lớn có tỉ trọng nhà cửa cao hơn hẳn người ở nhà bố mẹ. Lấy con số thật ở bước 2 làm gốc, rồi điều chỉnh dần.",
      },
      {
        title: "Mở tài khoản riêng cho từng hũ",
        detail:
          "Đây là điểm biến ý tưởng thành hiệu quả. Tiền nằm chung một chỗ thì rất dễ tiêu lấn. Nhiều ngân hàng cho mở tài khoản phụ ngay trên ứng dụng trong vài phút, miễn phí. Đặt tên rõ ràng cho từng tài khoản.",
      },
      {
        title: "Chuyển tiền ngay trong ngày nhận lương",
        detail:
          "Đây là quy tắc quan trọng nhất. Đợi cuối tháng xem còn bao nhiêu rồi mới tiết kiệm thì gần như luôn không còn gì. Đặt lệnh chuyển tự động vào đúng ngày lương về, để bạn không phải dựa vào ý chí.",
      },
      {
        title: "Tách riêng các khoản cố định lớn",
        detail:
          "Tiền nhà, trả góp, học phí con — chuyển ngay vào một tài khoản riêng và không đụng tới. Nhóm này không thương lượng được, nên đưa nó ra khỏi tầm mắt là cách an toàn nhất.",
      },
      {
        title: "Đừng quên các khoản chi theo năm",
        detail:
          "Bảo hiểm, đăng kiểm, sửa xe lớn, Tết, đám cưới, du lịch. Cộng chúng lại rồi chia cho mười hai, để dành mỗi tháng một phần vào hũ riêng. Đây là nhóm phá vỡ ngân sách của rất nhiều người vì nó không xuất hiện hằng tháng.",
      },
      {
        title: "Cho phép mình tiêu hũ tự do mà không áy náy",
        detail:
          "Ngân sách quá khắc nghiệt thì bỏ cuộc sau vài tuần. Hũ tự do là phần bạn được tiêu thoải mái, không cần giải trình với chính mình. Chính phần này giữ cho hệ thống sống được lâu dài.",
      },
      {
        title: "Khi một hũ cạn thì dừng, đừng vay hũ khác",
        detail:
          "Đây là kỷ luật cốt lõi. Hết tiền hũ tự do giữa tháng thì tháng đó thôi ăn ngoài. Vay lấn một lần thì lần sau dễ hơn, và hệ thống mất hết ý nghĩa.",
      },
      {
        title: "Rà lại mỗi ba tháng",
        detail:
          "Hoàn cảnh thay đổi: tăng lương, thêm con, đổi nhà. Ngồi lại và chỉnh tỉ lệ. Nếu tháng nào cũng thiếu ở một hũ thì đó không phải lỗi ý chí — đó là dấu hiệu tỉ lệ đặt sai.",
      },
      {
        title: "Ưu tiên quỹ dự phòng trước khi nghĩ tới thứ khác",
        detail:
          "Trước khi tính chuyện tăng tiết kiệm dài hạn hay bất kỳ khoản đầu tư nào, hãy có một khoản dự phòng đủ chi tiêu vài tháng. Không có nó thì chỉ một sự cố là bạn phải vay và mọi kế hoạch đổ.",
      },
    ],
    notes: [
      "Nếu thu nhập không đều — làm tự do, bán hàng, theo mùa — hãy lấy mức thu nhập của tháng THẤP nhất trong năm làm chuẩn cho các hũ bắt buộc. Tháng cao hơn thì phần dôi ra đưa vào dự phòng.",
      "Nếu sau khi tính ra mà thu không đủ chi cho các khoản bắt buộc, thì vấn đề không nằm ở cách chia hũ. Đó là lúc phải xem lại các khoản lớn nhất — thường là nhà ở và trả nợ.",
      "Đừng chia quá nhiều hũ ngay từ đầu. Hệ thống phức tạp là hệ thống bị bỏ sau vài tuần.",
      "Bài này là kinh nghiệm quản lý chi tiêu thường ngày, không phải tư vấn tài chính cá nhân.",
    ],
    faq: [
      {
        q: "Thu nhập thấp thì có chia hũ được không?",
        a: "Được, và càng cần thiết. Chỉ là tỉ lệ khác đi và hũ tự do nhỏ hơn. Nguyên tắc chuyển tiền ngay khi nhận lương vẫn giữ nguyên, dù số tiền chuyển vào tiết kiệm chỉ là một khoản nhỏ.",
      },
      {
        q: "Có nên dùng ứng dụng quản lý chi tiêu không?",
        a: "Hữu ích nếu bạn duy trì được. Nhưng nhiều người nhập được hai tuần rồi bỏ. Chia hũ bằng tài khoản riêng vận hành gần như tự động nên bền hơn.",
      },
      {
        q: "Vợ chồng thì chia hũ thế nào?",
        a: "Thường có một hũ chung cho các khoản gia đình, cộng với hũ riêng của mỗi người. Điều quan trọng là thống nhất từ đầu về tỉ lệ đóng góp và về việc ai được tiêu gì mà không cần hỏi.",
      },
      {
        q: "Tháng nào cũng bội chi hũ ăn uống thì sao?",
        a: "Đầu tiên hãy chỉnh cho tỉ lệ đúng với thực tế thay vì tự trách. Sau đó mới tìm cách giảm: nấu ở nhà nhiều hơn, mang cơm đi làm, giảm đặt đồ ăn qua app.",
      },
    ],
    sources: [],
  },
  {
    slug: "tra-no-nhieu-khoan-chon-thu-tu",
    title: "Nợ nhiều nơi cùng lúc: trả khoản nào trước cho đỡ mất tiền nhất",
    excerpt:
      "Rải tiền đều cho tất cả các khoản là cách trả nợ chậm nhất và tốn nhất. Có hai chiến lược rõ ràng, và mỗi cái hợp một kiểu người.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Trước hết liệt kê tất cả các khoản nợ với ba con số: dư nợ, lãi suất, và số tiền phải trả tối thiểu mỗi tháng. Luôn trả đủ mức tối thiểu cho mọi khoản để không bị phạt và không bị nhảy nhóm nợ. Phần tiền dư ra thì dồn hết vào MỘT khoản: hoặc khoản lãi cao nhất để tiết kiệm tiền nhất, hoặc khoản dư nợ nhỏ nhất để có cảm giác thắng sớm. Đừng rải đều.",
    prepare: [
      "Danh sách mọi khoản nợ: ngân hàng, thẻ tín dụng, vay tiêu dùng, vay người quen",
      "Sao kê hoặc hợp đồng để biết lãi suất thật của từng khoản",
      "Số tiền dư ra mỗi tháng sau khi đã trả các chi phí bắt buộc",
      "Một tờ giấy hoặc bảng tính để xếp thứ tự",
    ],
    steps: [
      {
        title: "Liệt kê hết, kể cả khoản bạn ngại nhìn",
        detail:
          "Viết ra tất cả: dư nợ còn lại, lãi suất, khoản phải trả tối thiểu, ngày đến hạn. Kể cả nợ người thân. Bước này khó về mặt tâm lý nhưng không làm thì không có kế hoạch nào cả.",
      },
      {
        title: "Tìm lãi suất THẬT chứ không phải con số quảng cáo",
        detail:
          "Nhiều hợp đồng ghi lãi trên dư nợ gốc ban đầu chứ không phải dư nợ giảm dần, khiến lãi thật cao hơn nhiều con số ghi trên tờ rơi. Đọc hợp đồng hoặc gọi hỏi tổng đài để biết con số thật của từng khoản.",
      },
      {
        title: "Luôn trả đủ mức tối thiểu cho MỌI khoản",
        detail:
          "Đây là điều kiện tiên quyết trước mọi chiến lược. Bỏ một kỳ trả tối thiểu là phát sinh phí phạt, lãi phạt, và có thể bị chuyển nhóm nợ trên hệ thống thông tin tín dụng — ảnh hưởng nhiều năm.",
      },
      {
        title: "Chọn chiến lược lãi cao nhất trước nếu bạn muốn tiết kiệm tiền",
        detail:
          "Sau khi trả tối thiểu hết, dồn toàn bộ tiền dư vào khoản có lãi suất CAO nhất. Trả xong khoản đó thì dồn tiếp sang khoản lãi cao thứ hai. Về mặt số học đây là cách tốn ít tiền lãi nhất.",
      },
      {
        title: "Chọn chiến lược dư nợ nhỏ nhất trước nếu bạn cần động lực",
        detail:
          "Dồn tiền dư vào khoản có dư nợ NHỎ nhất để trả dứt sớm. Mất thêm một ít tiền lãi so với cách trên, nhưng cảm giác tất toán được một khoản tạo động lực rất mạnh. Với người từng bỏ cuộc nhiều lần thì cách này thực tế hơn.",
      },
      {
        title: "Xử lý nợ thẻ tín dụng như ưu tiên hàng đầu",
        detail:
          "Lãi thẻ tín dụng khi trả chậm thường thuộc nhóm cao nhất, và cách tính lãi kèm phí làm dư nợ phình rất nhanh. Nếu có nợ thẻ, gần như luôn nên xử lý nhóm này trước.",
      },
      {
        title: "Gọi hỏi khả năng cơ cấu lại khoản vay",
        detail:
          "Nếu đang khó khăn thật sự, hãy chủ động gọi cho ngân hàng hoặc công ty tài chính trước khi trễ hạn. Một số nơi có phương án giãn nợ hoặc điều chỉnh kỳ hạn. Chủ động liên hệ luôn tốt hơn im lặng rồi bị nhắc nợ.",
      },
      {
        title: "Cân nhắc gộp nợ nhưng đọc thật kỹ",
        detail:
          "Gộp nhiều khoản lãi cao thành một khoản lãi thấp hơn có thể có ích. Nhưng phải tính cả phí chuyển đổi, phí trả nợ trước hạn của khoản cũ, và kỳ hạn mới có kéo dài ra không. Gộp mà kéo dài gấp đôi thời gian thì tổng tiền lãi có khi còn nhiều hơn.",
      },
      {
        title: "Kiểm phí trả nợ trước hạn trước khi trả sớm",
        detail:
          "Nhiều hợp đồng có phí phạt khi tất toán sớm, tính theo phần trăm dư nợ còn lại. Gọi hỏi con số cụ thể rồi so với số tiền lãi tiết kiệm được. Đôi khi trả sớm không lợi bằng bạn nghĩ.",
      },
      {
        title: "Dừng vay thêm trong lúc đang trả",
        detail:
          "Không thể tát nước ra khỏi thuyền khi nước vẫn chảy vào. Cất thẻ tín dụng ở nhà, gỡ các ứng dụng vay nhanh khỏi điện thoại. Đây là phần khó nhất và cũng quyết định nhất.",
      },
      {
        title: "Theo dõi tiến độ bằng một con số duy nhất",
        detail:
          "Tổng dư nợ. Ghi lại mỗi tháng. Nhìn con số giảm dần là thứ giữ bạn đi tiếp qua giai đoạn dài. Đừng theo dõi quá nhiều chỉ số, một con số là đủ.",
      },
      {
        title: "Tăng thu nếu cắt giảm đã kịch trần",
        detail:
          "Có ngưỡng mà cắt chi không cắt được nữa. Khi đó phần tiền dư chỉ tăng được nếu thu nhập tăng: làm thêm, bán bớt đồ không dùng, thương lượng tăng lương. Đây là hướng nên tính tới sớm chứ không phải sau cùng.",
      },
    ],
    notes: [
      "TUYỆT ĐỐI không vay khoản mới lãi cao hơn để trả khoản cũ. Đây là vòng xoáy khiến rất nhiều người mất khả năng chi trả hoàn toàn.",
      "Cảnh giác với dịch vụ hứa xoá nợ xấu, đáo hạn ngân hàng, hoặc cho vay không cần thẩm định. Nhóm này thường có lãi và phí rất cao, có nơi vi phạm pháp luật.",
      "Nếu bị đe doạ, khủng bố điện thoại hoặc bôi nhọ khi đòi nợ, hãy lưu bằng chứng và trình báo công an. Đòi nợ có giới hạn pháp luật, kể cả khi bạn thật sự đang nợ.",
      "Bài này là kinh nghiệm phổ thông, KHÔNG PHẢI TƯ VẤN TÀI CHÍNH. Với khoản nợ lớn hoặc phức tạp, hãy tìm tư vấn chuyên môn.",
    ],
    faq: [
      {
        q: "Nên chọn chiến lược nào trong hai cái?",
        a: "Nếu bạn kỷ luật và muốn tối ưu tiền thì chọn lãi cao nhất trước. Nếu bạn từng bỏ cuộc và cần thấy kết quả sớm thì chọn dư nợ nhỏ nhất trước. Chiến lược bạn duy trì được là chiến lược đúng.",
      },
      {
        q: "Nợ người thân có nên trả trước không?",
        a: "Về số học thì thường không, vì lãi bằng không. Nhưng nợ người thân có cái giá về quan hệ. Cách dung hoà là nói chuyện thẳng thắn, cam kết mốc trả cụ thể, và trả đều dù ít.",
      },
      {
        q: "Đang nợ có nên tiết kiệm không?",
        a: "Nên giữ một khoản dự phòng nhỏ để không phải vay thêm khi có sự cố. Sau đó mới dồn hết cho việc trả nợ, vì lãi vay thường cao hơn lãi tiết kiệm nhiều.",
      },
      {
        q: "Trả chậm một kỳ có bị nợ xấu ngay không?",
        a: "Việc phân nhóm nợ dựa trên số ngày quá hạn theo quy định. Trễ vài ngày khác với trễ vài tháng. Nhưng đừng thử — hãy gọi cho tổ chức cho vay ngay khi biết mình sắp không trả kịp.",
      },
    ],
    sources: [],
  },
  {
    slug: "vay-mua-nha-hieu-lai-tha-noi",
    title: "Vay mua nhà: lãi ưu đãi hết hạn rồi mới là lúc bắt đầu",
    excerpt:
      "Năm đầu trả nhẹ nhàng, sang năm thứ hai khoản trả hằng tháng nhảy vọt. Đó không phải sự cố — đó là điều đã ghi trong hợp đồng.",
    publishedAt: NGAY,
    readTimeMinutes: 7,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Điều quan trọng nhất phải hỏi không phải lãi suất ưu đãi, mà là công thức tính lãi SAU khi hết ưu đãi — thường là lãi cơ sở của ngân hàng cộng thêm một biên độ cố định. Hãy bắt nhân viên tín dụng tính cho bạn khoản trả hằng tháng ở kịch bản lãi cao, và tự hỏi mình có trả nổi mức đó không. Ngoài ra phải hỏi rõ phí trả nợ trước hạn và cách tính lãi trên dư nợ giảm dần hay dư nợ ban đầu.",
    prepare: [
      "Bảng thu chi thật của gia đình trong sáu tháng gần nhất",
      "Số tiền có sẵn để trả trước, và nguồn dự phòng riêng không đụng tới",
      "Danh sách câu hỏi viết sẵn để hỏi nhân viên tín dụng",
      "Máy tính hoặc bảng tính để tự kiểm các con số họ đưa",
    ],
    steps: [
      {
        title: "Tính khả năng trả trước khi nghĩ tới căn nhà",
        detail:
          "Nhiều hướng dẫn khuyên khoản trả nợ hằng tháng không nên vượt quá một tỉ lệ nhất định của thu nhập. Quan trọng hơn con số ấy là câu hỏi thật: sau khi trả nợ, gia đình còn đủ sống và còn dự phòng không? Tính bằng thu nhập chắc chắn, đừng tính cả thưởng và thu nhập không ổn định.",
      },
      {
        title: "Hỏi lãi suất sau ưu đãi trước khi hỏi lãi ưu đãi",
        detail:
          "Lãi ưu đãi chỉ áp dụng vài tháng tới vài năm đầu. Sau đó thường tính bằng lãi suất cơ sở của ngân hàng cộng một biên độ. Hãy hỏi rõ biên độ đó là bao nhiêu và lãi cơ sở hiện đang ở mức nào — đây là con số quyết định cả chục năm sau.",
      },
      {
        title: "Yêu cầu bảng tính ở kịch bản lãi cao",
        detail:
          "Bảo nhân viên tín dụng tính khoản trả hằng tháng nếu lãi tăng thêm vài điểm phần trăm so với hiện tại. Nhìn con số đó và tự hỏi mình có trả nổi không. Nếu câu trả lời là không thì khoản vay này quá sức, dù năm đầu trông rất dễ chịu.",
      },
      {
        title: "Phân biệt hai cách tính lãi",
        detail:
          "Lãi trên dư nợ giảm dần tính trên số tiền còn nợ, nên tiền lãi giảm dần theo thời gian. Lãi trên dư nợ ban đầu tính trên số vay lúc đầu suốt kỳ hạn, khiến tổng lãi cao hơn nhiều. Hỏi rõ hợp đồng của bạn theo cách nào.",
      },
      {
        title: "Hỏi phí trả nợ trước hạn ngay từ đầu",
        detail:
          "Nhiều hợp đồng phạt khi bạn trả sớm trong những năm đầu, tính theo phần trăm dư nợ trả trước. Nếu bạn dự định có tiền là trả bớt, đây là điều khoản quan trọng ngang với lãi suất.",
      },
      {
        title: "Liệt kê toàn bộ chi phí ngoài lãi",
        detail:
          "Phí thẩm định, phí công chứng, phí đăng ký giao dịch bảo đảm, phí định giá tài sản, bảo hiểm khoản vay, bảo hiểm cháy nổ. Cộng hết lại để biết số tiền thật phải chuẩn bị, thường lớn hơn dự tính ban đầu.",
      },
      {
        title: "Hỏi rõ về bảo hiểm đi kèm",
        detail:
          "Một số nơi đề nghị mua bảo hiểm kèm khoản vay. Hỏi rõ loại nào bắt buộc theo quy định, loại nào là tự nguyện, phí bao nhiêu, và quyền lợi thế nào. Bạn có quyền hỏi và có quyền từ chối phần không bắt buộc.",
      },
      {
        title: "So ít nhất ba ngân hàng",
        detail:
          "Đừng chỉ so lãi ưu đãi năm đầu. Lập một bảng so sánh gồm: lãi ưu đãi, thời gian ưu đãi, biên độ sau ưu đãi, cách tính lãi, phí trả trước hạn, tổng phí ban đầu. Nhìn cả bảng thì lựa chọn tốt nhất thường khác với nơi quảng cáo hấp dẫn nhất.",
      },
      {
        title: "Giữ lại một khoản dự phòng riêng",
        detail:
          "Đừng dồn hết tiền vào phần trả trước để vay ít đi. Bạn cần một khoản dự phòng đủ trả nợ vài tháng khi có biến cố: mất việc, ốm đau, sửa nhà. Không có nó là rủi ro lớn nhất của người vay mua nhà.",
      },
      {
        title: "Đọc kỹ hợp đồng, nhất là phần điều chỉnh lãi",
        detail:
          "Xem điều khoản về thời điểm điều chỉnh lãi, cách thông báo cho bạn, và quyền của ngân hàng. Nếu có chỗ chưa rõ, yêu cầu giải thích bằng văn bản. Đừng ký khi còn điều gì bạn không hiểu.",
      },
      {
        title: "Chuẩn bị cho ngày hết ưu đãi",
        detail:
          "Ghi mốc hết ưu đãi vào lịch, trước đó vài tháng bắt đầu tăng khoản để dành. Đây là thời điểm rất nhiều gia đình bị hụt vì đã quen với mức trả thấp của năm đầu.",
      },
      {
        title: "Theo dõi lãi suất và cân nhắc chuyển khoản vay",
        detail:
          "Sau vài năm, nếu thị trường có mức tốt hơn nhiều, có thể cân nhắc chuyển khoản vay sang ngân hàng khác. Nhưng phải tính đủ phí trả nợ trước hạn ở nơi cũ và toàn bộ phí ở nơi mới rồi mới quyết.",
      },
    ],
    notes: [
      "Đây là cam kết tài chính dài hạn nhất mà phần lớn người Việt từng ký. Đừng quyết trong một buổi, và đừng quyết khi đang bị thúc bởi lời hứa giữ chỗ hay ưu đãi sắp hết.",
      "Nhà mua bằng vốn vay thường bị thế chấp cho ngân hàng. Hiểu rõ điều đó có nghĩa gì nếu bạn mất khả năng trả nợ — hỏi ngân hàng giải thích quy trình xử lý tài sản bảo đảm.",
      "Lãi suất, biểu phí và chính sách thay đổi liên tục giữa các ngân hàng và theo từng thời kỳ. Mọi con số phải lấy trực tiếp từ ngân hàng tại thời điểm bạn vay.",
      "Bài này là kiến thức phổ thông giúp bạn biết cần hỏi gì, KHÔNG PHẢI TƯ VẤN TÀI CHÍNH hay tư vấn đầu tư.",
    ],
    faq: [
      {
        q: "Vay bao nhiêu phần trăm giá trị nhà là hợp lý?",
        a: "Không có con số đúng cho mọi người. Điều quan trọng là khoản trả hằng tháng ở kịch bản lãi cao vẫn nằm trong khả năng của bạn, và bạn vẫn còn dự phòng. Hãy tính ngược từ đó.",
      },
      {
        q: "Kỳ hạn dài hay ngắn thì tốt hơn?",
        a: "Kỳ hạn dài làm khoản trả hằng tháng nhẹ nhưng tổng lãi cao hơn nhiều. Kỳ hạn ngắn ngược lại. Một cách dung hoà là chọn kỳ hạn dài cho an toàn dòng tiền, rồi trả thêm khi có điều kiện — nhưng phải kiểm phí trả trước hạn.",
      },
      {
        q: "Lãi suất thả nổi có thể tăng tới đâu?",
        a: "Phụ thuộc lãi suất cơ sở của ngân hàng, mà cái đó thay đổi theo thị trường. Đó chính là lý do phải tính trước kịch bản lãi cao thay vì hy vọng lãi sẽ luôn thấp.",
      },
      {
        q: "Có nên vay để mua nhà cho thuê không?",
        a: "Đây là quyết định đầu tư và phụ thuộc rất nhiều yếu tố cá nhân. Em không đưa lời khuyên đầu tư — hãy tính kỹ dòng tiền ở kịch bản xấu và cân nhắc tư vấn chuyên môn.",
      },
    ],
    sources: [],
  },
  {
    slug: "gui-tiet-kiem-chon-ky-han",
    title: "Gửi tiết kiệm: chọn kỳ hạn, hiểu lãi, và tránh mấy cái bẫy nhỏ",
    excerpt:
      "Gửi mười hai tháng lãi cao hơn, nhưng rút trước hạn một ngày là mất gần hết phần lãi đó. Có cách chia để không bao giờ phải chọn.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Kỳ hạn dài thường lãi cao hơn, nhưng rút trước hạn thì phần lớn hợp đồng chỉ trả lãi không kỳ hạn — rất thấp. Cách xử lý phổ biến là chia khoản tiền thành nhiều sổ có kỳ hạn lệch nhau, để lúc nào cũng có một sổ sắp đáo hạn mà không phải phá sổ nào. Gửi online thường lãi nhỉnh hơn gửi tại quầy. Và luôn kiểm tra ngân hàng có tham gia bảo hiểm tiền gửi không.",
    prepare: [
      "Số tiền định gửi, và xác định phần nào có thể để yên lâu dài",
      "Ứng dụng ngân hàng đã cài và đã xác thực",
      "So sánh lãi suất của vài ngân hàng cho cùng kỳ hạn",
      "CCCD nếu gửi lần đầu tại quầy",
    ],
    steps: [
      {
        title: "Tách phần dự phòng ra khỏi phần gửi dài",
        detail:
          "Khoản dự phòng khẩn cấp phải rút được bất cứ lúc nào, nên để ở kỳ hạn ngắn hoặc tài khoản thanh toán. Chỉ gửi kỳ hạn dài phần tiền bạn chắc chắn không đụng tới. Nhầm hai loại này là lý do phải phá sổ.",
      },
      {
        title: "Hiểu cái giá của việc rút trước hạn",
        detail:
          "Phần lớn hợp đồng quy định rút trước hạn thì hưởng lãi suất không kỳ hạn, thường rất thấp. Nghĩa là gửi mười một tháng rồi rút ở tháng thứ mười một cũng gần như mất trắng phần lãi. Đây là điều nhiều người chỉ biết khi đã cần tiền.",
      },
      {
        title: "Chia thành nhiều sổ có kỳ hạn lệch nhau",
        detail:
          "Thay vì một sổ lớn mười hai tháng, chia thành vài sổ đáo hạn lệch nhau vài tháng. Cần tiền thì chỉ rút sổ gần đáo hạn nhất hoặc sổ nhỏ nhất, các sổ còn lại vẫn giữ nguyên lãi. Đây là cách đơn giản mà hiệu quả nhất trong cả bài.",
      },
      {
        title: "So lãi suất giữa các ngân hàng cho cùng kỳ hạn",
        detail:
          "Chênh lệch giữa các ngân hàng có thể đáng kể. Nhưng so cho đúng: cùng kỳ hạn, cùng hình thức lĩnh lãi. So lãi kỳ hạn sáu tháng của nơi này với mười hai tháng của nơi kia là so sai.",
      },
      {
        title: "Ưu tiên gửi online nếu ngân hàng có",
        detail:
          "Nhiều ngân hàng trả lãi cao hơn cho tiền gửi mở qua ứng dụng, vì tiết kiệm chi phí quầy. Mở trong vài phút, và sổ tiết kiệm điện tử có giá trị như sổ giấy.",
      },
      {
        title: "Chọn hình thức lĩnh lãi cho phù hợp",
        detail:
          "Lĩnh lãi cuối kỳ thường cho tổng lãi cao nhất. Lĩnh lãi hằng tháng thì nhận đều đặn nhưng tổng thấp hơn. Chọn theo nhu cầu dòng tiền của bạn chứ không phải theo con số lãi suất trên bảng.",
      },
      {
        title: "Kiểm ngân hàng có tham gia bảo hiểm tiền gửi không",
        detail:
          "Tiền gửi tại các tổ chức tham gia bảo hiểm tiền gửi được bảo vệ tới một hạn mức theo quy định. Đây là lý do nên cẩn trọng với những nơi hứa lãi cao bất thường mà không phải ngân hàng.",
      },
      {
        title: "Cảnh giác với lãi suất cao bất thường",
        detail:
          "Lãi cao hơn hẳn mặt bằng chung là dấu hiệu cần dừng lại tìm hiểu. Đặc biệt cảnh giác nếu người ta mời bạn ký hợp đồng không phải hợp đồng tiền gửi, hay chuyển tiền vào tài khoản cá nhân.",
      },
      {
        title: "Đọc kỹ khi nhân viên mời sản phẩm khác",
        detail:
          "Tới gửi tiết kiệm nhưng được mời ký hợp đồng bảo hiểm nhân thọ hoặc chứng chỉ quỹ là tình huống đã xảy ra nhiều. Hai thứ đó KHÔNG phải tiền gửi tiết kiệm, có rủi ro và điều kiện rút khác hẳn. Đọc kỹ tên loại hợp đồng trước khi ký.",
      },
      {
        title: "Kiểm cài đặt tự động gia hạn",
        detail:
          "Nhiều sổ mặc định tự động gia hạn khi đáo hạn, theo lãi suất tại thời điểm đó. Tiện, nhưng nếu bạn cần tiền đúng ngày đáo hạn thì phải nhớ. Đặt nhắc trên điện thoại trước ngày đáo hạn vài ngày.",
      },
      {
        title: "Giữ bằng chứng gửi tiền",
        detail:
          "Sổ giấy cất kỹ, sổ điện tử thì chụp màn hình lưu. Kiểm thông tin trên sổ khớp với số tiền và kỳ hạn bạn gửi ngay tại chỗ trước khi rời quầy.",
      },
      {
        title: "Đừng để tiền lớn nằm ở tài khoản thanh toán",
        detail:
          "Tài khoản thanh toán lãi rất thấp và cũng là nơi rủi ro nhất nếu tài khoản bị xâm nhập. Chuyển phần không dùng tới sang tiết kiệm, kể cả kỳ hạn ngắn.",
      },
    ],
    notes: [
      "Bảo hiểm tiền gửi có hạn mức chi trả theo quy định. Nếu số tiền của bạn lớn, cân nhắc chia ra nhiều ngân hàng — hỏi ngân hàng hoặc tra cứu quy định hiện hành về hạn mức.",
      "Tiết kiệm là nơi giữ tiền an toàn, không phải công cụ làm giàu. Trong giai đoạn lạm phát cao, sức mua của tiền gửi có thể giảm dù số dư vẫn tăng.",
      "Lãi suất thay đổi liên tục theo thị trường và theo từng ngân hàng. Mọi con số phải lấy trực tiếp tại thời điểm bạn gửi.",
      "Bài này là kinh nghiệm phổ thông, KHÔNG PHẢI TƯ VẤN TÀI CHÍNH hay tư vấn đầu tư.",
    ],
    faq: [
      {
        q: "Gửi kỳ hạn nào là tốt nhất?",
        a: "Không có kỳ hạn tốt nhất cho mọi người. Điều quan trọng là khớp kỳ hạn với thời điểm bạn cần dùng tiền. Không chắc thì chia nhiều sổ lệch kỳ hạn.",
      },
      {
        q: "Sổ tiết kiệm điện tử có an toàn như sổ giấy không?",
        a: "Có giá trị pháp lý tương đương. Quan trọng là bảo mật tài khoản ngân hàng của bạn: mật khẩu mạnh, bật xác thực hai lớp, không đưa mã OTP cho ai.",
      },
      {
        q: "Có nên rút sổ trước hạn để gửi nơi lãi cao hơn không?",
        a: "Thường không lợi, vì rút trước hạn mất gần hết lãi đã tích luỹ. Hãy tính phần lãi mất đi so với phần chênh lệch được thêm trước khi quyết.",
      },
      {
        q: "Gửi tiết kiệm cho con thì đứng tên ai?",
        a: "Có hình thức gửi cho người chưa thành niên với quy định riêng về người giám hộ và điều kiện rút. Hỏi ngân hàng về sản phẩm cụ thể và các ràng buộc đi kèm.",
      },
    ],
    sources: [],
  },
  {
    slug: "bao-hiem-suc-khoe-tu-nguyen",
    title: "Bảo hiểm sức khoẻ tự nguyện: mua thêm ngoài BHYT có đáng không",
    excerpt:
      "Đọc bảng quyền lợi thấy hấp dẫn, tới lúc nằm viện mới biết phần mình cần lại nằm trong danh mục loại trừ.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Bảo hiểm y tế nhà nước là nền tảng và ai cũng nên có trước tiên. Bảo hiểm sức khoẻ tự nguyện của công ty bảo hiểm là phần bổ sung, chi trả cho những thứ BHYT không chi hoặc chi ít, và cho phép khám ở bệnh viện tư. Trước khi mua, đọc ba phần quan trọng nhất: danh mục LOẠI TRỪ, thời gian chờ, và cách chi trả là bảo lãnh viện phí hay tự trả rồi đòi lại.",
    prepare: [
      "Thẻ bảo hiểm y tế của bạn — kiểm còn hạn và đúng nơi đăng ký khám chưa",
      "Danh sách bệnh nền và tiền sử bệnh của bản thân và gia đình",
      "Bảng quyền lợi và bộ quy tắc bảo hiểm đầy đủ, không chỉ tờ rơi tóm tắt",
      "Danh sách bệnh viện bạn thường khám, để đối chiếu với mạng lưới bảo lãnh",
    ],
    steps: [
      {
        title: "Có bảo hiểm y tế nhà nước trước đã",
        detail:
          "Đây là nền tảng rẻ nhất và bao phủ rộng nhất, gồm cả các bệnh mạn tính và điều trị dài ngày mà bảo hiểm thương mại thường loại trừ. Nếu chưa có, hãy mua bảo hiểm y tế hộ gia đình trước khi nghĩ tới sản phẩm nào khác.",
      },
      {
        title: "Xác định mình muốn bảo hiểm giải quyết vấn đề gì",
        detail:
          "Muốn khám ở bệnh viện tư cho nhanh? Muốn được chi trả khi nằm viện dài ngày? Muốn phòng trường hợp bệnh hiểm nghèo? Mỗi mục tiêu ứng với loại sản phẩm khác nhau. Mua mà không rõ mục tiêu thì gần như chắc chắn mua sai.",
      },
      {
        title: "ĐỌC DANH MỤC LOẠI TRỪ TRƯỚC KHI ĐỌC QUYỀN LỢI",
        detail:
          "Đây là phần quan trọng nhất và cũng là phần người bán ít nói tới nhất. Thường loại trừ: bệnh có sẵn trước khi mua, thai sản trong thời gian đầu, điều trị răng thẩm mỹ, bệnh liên quan tới rượu bia, và một số bệnh cụ thể. Đọc hết trước, rồi mới xem quyền lợi.",
      },
      {
        title: "Hỏi rõ về bệnh có sẵn",
        detail:
          "Nếu bạn đã có bệnh trước khi mua, phần lớn hợp đồng không chi trả cho bệnh đó. Khai báo trung thực khi mua — khai gian thì tới lúc cần bồi thường sẽ bị từ chối và bạn mất toàn bộ phí đã đóng.",
      },
      {
        title: "Nắm rõ thời gian chờ",
        detail:
          "Mua hôm nay không dùng được ngay. Mỗi nhóm quyền lợi có thời gian chờ riêng, có nhóm vài chục ngày, có nhóm cả năm. Đừng mua khi đã biết mình sắp phải điều trị — vừa không được chi trả vừa mất phí.",
      },
      {
        title: "Phân biệt bảo lãnh viện phí và hoàn trả sau",
        detail:
          "Bảo lãnh viện phí là bảo hiểm trả thẳng cho bệnh viện, bạn không phải ứng tiền. Hoàn trả sau là bạn tự trả rồi nộp hồ sơ đòi lại, mất thời gian và phải ứng tiền trước. Với người không sẵn tiền mặt, đây là khác biệt rất lớn.",
      },
      {
        title: "Đối chiếu mạng lưới bệnh viện",
        detail:
          "Bảo lãnh viện phí chỉ áp dụng tại các bệnh viện trong mạng lưới liên kết. Kiểm xem bệnh viện bạn hay đi và bệnh viện gần nhà có trong danh sách không. Gói tốt mà không dùng được ở đâu gần bạn thì không có ý nghĩa.",
      },
      {
        title: "Xem kỹ các giới hạn chi trả",
        detail:
          "Thường có giới hạn theo từng hạng mục: tiền phòng mỗi ngày, số ngày nằm viện, chi phí phẫu thuật, tổng chi trả mỗi năm. Con số tổng nghe to nhưng giới hạn từng mục mới quyết định bạn nhận được bao nhiêu trên thực tế.",
      },
      {
        title: "Hỏi về đồng chi trả và mức khấu trừ",
        detail:
          "Một số hợp đồng quy định bạn tự chịu một phần trăm hoặc một khoản cố định trước khi bảo hiểm chi. Đây là con số ảnh hưởng trực tiếp tới số tiền bạn thật sự nhận được.",
      },
      {
        title: "Cẩn thận phân biệt với bảo hiểm nhân thọ",
        detail:
          "Bảo hiểm sức khoẻ và bảo hiểm nhân thọ là hai thứ khác nhau, dù nhiều nơi bán kèm. Nhân thọ là hợp đồng dài hạn, cam kết đóng nhiều năm, huỷ sớm thường mất phần lớn tiền. Đọc rõ tên loại hợp đồng bạn đang ký.",
      },
      {
        title: "Biết quyền cân nhắc sau khi ký",
        detail:
          "Nhiều hợp đồng bảo hiểm có khoảng thời gian để bạn xem lại và huỷ, nhận lại phí đã đóng sau khi trừ chi phí theo quy định. Hỏi rõ thời hạn này ngay khi ký và đọc lại toàn bộ hợp đồng trong khoảng đó.",
      },
      {
        title: "Rà lại mỗi năm khi tái tục",
        detail:
          "Điều kiện, phí và quyền lợi có thể thay đổi khi tái tục, và phí thường tăng theo tuổi. Đọc lại bảng quyền lợi mới thay vì gia hạn tự động không xem gì.",
      },
    ],
    notes: [
      "Khai báo tình trạng sức khoẻ TRUNG THỰC khi mua. Khai thiếu hoặc khai sai là căn cứ để công ty bảo hiểm từ chối chi trả, và khi đó bạn đã mất cả tiền lẫn sự bảo vệ.",
      "Bảo hiểm sức khoẻ tự nguyện KHÔNG thay thế được bảo hiểm y tế nhà nước. Hãy có BHYT trước, rồi mới cân nhắc mua thêm.",
      "Không mua chỉ vì nể người quen bán hàng. Đây là hợp đồng nhiều năm và bạn là người trả tiền — hãy đọc kỹ và hỏi tới khi hiểu.",
      "Bài này là kiến thức phổ thông giúp bạn biết cần hỏi gì, KHÔNG PHẢI TƯ VẤN TÀI CHÍNH, tư vấn bảo hiểm hay tư vấn y tế.",
    ],
    faq: [
      {
        q: "Có BHYT rồi thì có cần mua thêm không?",
        a: "Tuỳ nhu cầu và khả năng tài chính. BHYT bao phủ tốt cho điều trị tại bệnh viện công. Mua thêm chủ yếu để khám ở bệnh viện tư, giảm thời gian chờ, và tăng mức chi trả cho một số hạng mục.",
      },
      {
        q: "Bệnh có sẵn thì có mua được không?",
        a: "Thường vẫn mua được nhưng bệnh đó bị loại trừ khỏi phạm vi chi trả. Hãy khai báo đầy đủ và hỏi rõ điều đó có nghĩa gì với trường hợp cụ thể của bạn.",
      },
      {
        q: "Mua cho cả gia đình có rẻ hơn không?",
        a: "Nhiều sản phẩm có gói gia đình với mức phí ưu đãi hơn. Nhưng vẫn phải đọc kỹ quyền lợi cho từng người, nhất là trẻ nhỏ và người cao tuổi vì họ thường có điều kiện riêng.",
      },
      {
        q: "Bảo hiểm từ chối chi trả thì làm gì?",
        a: "Yêu cầu văn bản nêu rõ lý do và điều khoản áp dụng. Đối chiếu với hợp đồng. Nếu cho rằng việc từ chối không đúng, có thể khiếu nại lên công ty bảo hiểm và tới cơ quan quản lý — giữ đầy đủ hồ sơ y tế và chứng từ.",
      },
    ],
    sources: [],
  },
  {
    slug: "day-con-ve-tien-theo-do-tuoi",
    title: "Dạy con về tiền: nói gì ở tuổi nào và ba sai lầm hay gặp",
    excerpt:
      "Cho tiền tiêu vặt rồi bảo con tiết kiệm là chưa đủ. Trẻ học về tiền chủ yếu bằng cách nhìn cha mẹ tiêu, chứ không phải nghe cha mẹ giảng.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Bắt đầu từ mẫu giáo với khái niệm đơn giản: muốn có thì phải đổi bằng tiền, và tiền có giới hạn. Tiểu học thì cho tiền tiêu vặt đều đặn và để con tự quyết một phần. Cấp hai cấp ba thì dạy phân biệt cần và muốn, và cho con quản một ngân sách nhỏ có thật. Ba sai lầm hay gặp: dùng tiền làm phần thưởng cho mọi việc, luôn cứu con khi con tiêu hết, và giấu hoàn toàn chuyện tiền bạc của gia đình.",
    prepare: [
      "Một khoản tiền tiêu vặt cố định phù hợp với thu nhập gia đình",
      "Ba cái hộp hoặc ba cái lọ trong suốt cho trẻ nhỏ: tiêu, để dành, cho đi",
      "Sự thống nhất giữa hai vợ chồng về nguyên tắc — trẻ rất nhanh nhận ra chỗ hở",
      "Sự sẵn sàng để con mắc sai lầm nhỏ mà không nhảy vào cứu",
    ],
    steps: [
      {
        title: "Nhớ rằng con học bằng cách nhìn, không phải nghe",
        detail:
          "Trẻ quan sát cha mẹ có bàn bạc trước khi mua đồ lớn không, có cãi nhau về tiền không, có mua theo hứng không. Bài học mạnh nhất đến từ đó chứ không phải từ những lời dặn. Đây là điều nên nhận ra trước khi bắt đầu dạy gì.",
      },
      {
        title: "Tuổi mẫu giáo: tiền đổi lấy đồ, và tiền có hạn",
        detail:
          "Cho con cầm tiền trả ở quầy và nhận tiền thối. Ở siêu thị, nói rõ hôm nay mình mua một món thôi, con chọn món nào. Khái niệm cần dạy ở tuổi này chỉ có hai: muốn có thì phải trả, và không mua được tất cả.",
      },
      {
        title: "Dùng ba cái lọ trong suốt",
        detail:
          "Một lọ để tiêu, một lọ để dành, một lọ để cho đi hoặc giúp người khác. Lọ trong suốt để con nhìn thấy tiền tăng lên — với trẻ nhỏ, nhìn thấy quan trọng hơn con số. Cách này đơn giản mà bền qua nhiều năm.",
      },
      {
        title: "Tiểu học: cho tiền tiêu vặt đều đặn và đúng hẹn",
        detail:
          "Một khoản nhỏ, cùng một ngày mỗi tuần. Điều quan trọng là đều đặn và có thể dự đoán, để con học lập kế hoạch. Số tiền không quan trọng bằng tính đều đặn.",
      },
      {
        title: "Để con tự quyết và tự chịu hậu quả nhỏ",
        detail:
          "Con tiêu hết trong hai ngày rồi tiếc — đó chính là bài học. Đừng ứng trước, đừng bù thêm. Một bài học mất vài chục nghìn ở tuổi lên tám rẻ hơn rất nhiều so với bài học tương tự ở tuổi hai mươi tám.",
      },
      {
        title: "Cẩn thận với việc trả tiền cho mọi việc nhà",
        detail:
          "Việc nhà chung là trách nhiệm của thành viên trong nhà, không nên trả tiền. Nếu muốn con kiếm thêm, hãy tách riêng những việc ngoài phần trách nhiệm đó. Trả tiền cho mọi thứ dạy con rằng không có tiền thì không làm.",
      },
      {
        title: "Cấp hai: dạy phân biệt cần và muốn",
        detail:
          "Trước khi mua món gì đáng kể, hỏi con ba câu: con cần hay con muốn, con sẽ dùng bao lâu, và nếu chờ một tuần con còn muốn nữa không. Quy tắc chờ một tuần loại bỏ được phần lớn các món mua theo cảm xúc.",
      },
      {
        title: "Cho con quản một ngân sách có thật",
        detail:
          "Ví dụ đưa tiền mua đồ dùng học tập hoặc quần áo cho cả học kỳ, để con tự phân bổ. Đây là bước nhảy lớn về kỹ năng, và sai lầm ở đây vẫn còn trong vùng an toàn.",
      },
      {
        title: "Cấp ba: nói về những thứ người lớn thật sự dùng",
        detail:
          "Tài khoản ngân hàng, chuyển khoản an toàn, lãi suất, vay nợ, và các chiêu lừa đảo phổ biến. Nhiều bạn trẻ vào đại học là đối mặt ngay với vay tiêu dùng và đầu tư online — dạy trước còn hơn xử lý sau.",
      },
      {
        title: "Nói về tiền của gia đình ở mức phù hợp",
        detail:
          "Không cần kể hết thu nhập, nhưng cũng đừng giấu hoàn toàn. Cho con biết nhà mình đang tiết kiệm cho việc gì, vì sao năm nay chưa đi du lịch. Trẻ hiểu được nhiều hơn ta tưởng, và sự mù mờ tạo ra lo lắng chứ không tạo ra an tâm.",
      },
      {
        title: "Đừng dùng tiền để bù đắp cảm xúc",
        detail:
          "Mua đồ cho con vì mình bận, vì mình thấy có lỗi, vì con buồn — đây là thói quen dạy con rằng tiền giải quyết được cảm xúc. Hậu quả xuất hiện rất muộn nhưng rất bền.",
      },
      {
        title: "Cho con thấy cả phần cho đi",
        detail:
          "Cùng con chọn một việc để dùng lọ thứ ba: mua đồ cho một hoàn cảnh khó khăn, góp cho một quỹ. Trẻ hiểu tiền không chỉ để tiêu cho mình, và đây là phần hình thành thái độ chứ không phải kỹ năng.",
      },
    ],
    notes: [
      "Cảnh giác với các trò chơi và ứng dụng có mua vật phẩm trong game — nhiều trẻ tiêu số tiền rất lớn mà cha mẹ chỉ biết khi nhận sao kê. Tắt chức năng mua hàng và không lưu thẻ trên thiết bị của con.",
      "Dạy con TUYỆT ĐỐI không đọc mã OTP cho ai, kể cả người tự xưng là người nhà, và không chuyển tiền cho người quen qua mạng khi chưa gọi điện xác nhận.",
      "Nếu gia đình đang khó khăn, hãy nói với con bằng ngôn ngữ phù hợp thay vì để con tự đoán. Trẻ cảm nhận được căng thẳng và thường tự trách mình.",
      "Bài này là kinh nghiệm nuôi dạy phổ thông, không phải tư vấn tài chính hay tư vấn tâm lý.",
    ],
    faq: [
      {
        q: "Nên cho con bao nhiêu tiền tiêu vặt?",
        a: "Không có con số chung. Hãy đặt theo thu nhập gia đình và theo những gì con thật sự cần tự chi. Tính đều đặn quan trọng hơn số tiền.",
      },
      {
        q: "Con đòi mua theo bạn bè thì nói sao?",
        a: "Đừng bác bỏ ngay. Nói rằng nhà mình có ngân sách, nếu con thật sự muốn thì mình cùng tính xem để dành bao lâu thì đủ. Cách này biến cuộc tranh cãi thành một bài học lập kế hoạch.",
      },
      {
        q: "Có nên mở tài khoản ngân hàng cho con không?",
        a: "Có sản phẩm dành cho người chưa thành niên với quy định riêng về người giám hộ. Hỏi ngân hàng về điều kiện. Đây là cách tốt để dạy con ở tuổi cấp hai cấp ba.",
      },
      {
        q: "Ông bà cho tiền nhiều thì xử lý thế nào?",
        a: "Nói riêng với ông bà về nguyên tắc của gia đình, nhẹ nhàng và không trách móc. Với con thì hướng phần lớn khoản đó vào lọ để dành, giữ lại một phần nhỏ cho con tự tiêu.",
      },
    ],
    sources: [],
  },
  {
    slug: "vo-chong-quan-tien-chung-hay-rieng",
    title: "Vợ chồng quản tiền: chung hết, riêng hết, hay cách thứ ba",
    excerpt:
      "Phần lớn mâu thuẫn tiền bạc trong hôn nhân không đến từ thiếu tiền, mà từ việc hai người chưa từng nói rõ luật chơi.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Có ba mô hình phổ biến: gộp chung hoàn toàn, giữ riêng hoàn toàn, và mô hình lai — mỗi người góp một phần vào quỹ chung theo tỉ lệ thu nhập, phần còn lại giữ riêng. Mô hình lai thường ít mâu thuẫn nhất vì vừa lo được việc chung vừa giữ được quyền tự chủ. Điều quyết định không phải chọn mô hình nào, mà là hai người có ngồi xuống thống nhất rõ ràng hay không, và có xem lại định kỳ hay không.",
    prepare: [
      "Con số thu nhập thật của cả hai, kể cả các khoản không đều",
      "Danh sách chi phí chung hằng tháng và các khoản lớn theo năm",
      "Một buổi tối yên tĩnh, không có con, không ai đang mệt hay đang giận",
      "Tinh thần rằng đây là cuộc bàn bạc, không phải cuộc đối chất",
    ],
    steps: [
      {
        title: "Chọn thời điểm nói chuyện cho đúng",
        detail:
          "Không nói khi vừa cãi nhau về một khoản chi, không nói lúc mệt, không nói trước mặt con. Hẹn hẳn một buổi và nói trước rằng mình muốn cùng ngồi lại sắp xếp chuyện tiền — báo trước làm người kia không thấy bị phục kích.",
      },
      {
        title: "Mở đầu bằng mục tiêu chung, không bằng phàn nàn",
        detail:
          "Bắt đầu bằng việc hai người muốn gì trong ba năm tới: mua nhà, sinh con, đổi việc, cho con học trường nào. Có mục tiêu chung rồi thì bàn tiền dễ hơn nhiều so với bắt đầu bằng câu tháng này em tiêu nhiều quá.",
      },
      {
        title: "Đặt hết lên bàn, kể cả nợ",
        detail:
          "Thu nhập thật, các khoản nợ, các khoản đang hỗ trợ gia đình hai bên. Giấu một khoản nợ để rồi bên kia phát hiện sau là tổn thương lớn hơn nhiều so với chuyện khoản nợ đó. Trung thực ở bước này là nền của mọi thứ sau đó.",
      },
      {
        title: "Hiểu ba mô hình để chọn",
        detail:
          "Gộp chung hoàn toàn thì đơn giản và gắn kết nhưng dễ ngột ngạt nếu một người tiêu thoáng hơn. Giữ riêng hoàn toàn thì tự chủ nhưng khó lo việc chung và dễ thành sống chung tính riêng. Mô hình lai dung hoà được cả hai.",
      },
      {
        title: "Nếu chọn mô hình lai, đặt tỉ lệ theo thu nhập",
        detail:
          "Người thu nhập cao góp nhiều hơn theo tỉ lệ, không phải chia đôi cứng. Chia đôi khi thu nhập chênh lệch lớn khiến người thu nhập thấp gần như không còn gì cho riêng mình — đó là nguồn ấm ức âm ỉ.",
      },
      {
        title: "Mở một tài khoản chung riêng biệt",
        detail:
          "Quỹ chung nằm ở tài khoản riêng, cả hai cùng thấy được. Mọi chi phí chung đi qua đó. Sự minh bạch này loại bỏ phần lớn nghi ngờ mà không cần ai phải giải trình từng khoản.",
      },
      {
        title: "Thống nhất ngưỡng phải hỏi ý kiến",
        detail:
          "Đặt một con số cụ thể: chi trên mức đó thì bàn với nhau, dưới mức đó thì tự quyết. Đây là quy ước đơn giản mà giải quyết được rất nhiều mâu thuẫn vặt. Con số tuỳ thu nhập từng nhà.",
      },
      {
        title: "Giữ cho mỗi người một khoản tự do",
        detail:
          "Một khoản mỗi tháng mà người kia không hỏi tới. Đây là phần quan trọng về mặt tâm lý hơn là về mặt số học — nó giữ cho người ta không thấy mình phải xin phép để sống.",
      },
      {
        title: "Ghi rõ ai lo khoản nào",
        detail:
          "Ai trả tiền nhà, ai đóng học cho con, ai theo dõi các khoản trả góp. Chia việc rõ ràng thì không có khoản nào rơi vào khoảng giữa và không ai phải nhắc ai.",
      },
      {
        title: "Bàn trước về chuyện hỗ trợ hai bên gia đình",
        detail:
          "Đây là chủ đề gây căng thẳng bậc nhất và cũng hay bị né tránh nhất. Thống nhất một khoản định kỳ cho mỗi bên, và cách xử lý khi có việc lớn đột xuất. Bàn lúc bình thường dễ hơn nhiều so với bàn lúc có chuyện.",
      },
      {
        title: "Hẹn xem lại định kỳ",
        detail:
          "Mỗi ba hoặc sáu tháng ngồi lại nửa tiếng: tỉ lệ còn hợp lý không, mục tiêu tới đâu, có gì cần đổi. Xem lại định kỳ biến chuyện tiền thành việc thường lệ thay vì thành cuộc khủng hoảng.",
      },
      {
        title: "Nếu người kia không muốn nói chuyện",
        detail:
          "Đừng ép trong một buổi. Bắt đầu bằng một việc nhỏ và cụ thể, ví dụ cùng liệt kê chi phí cố định hằng tháng. Làm được việc nhỏ thì lần sau dễ hơn. Nếu bế tắc kéo dài và ảnh hưởng tới hôn nhân, tư vấn hôn nhân là lựa chọn hợp lý.",
      },
    ],
    notes: [
      "Việc kiểm soát hoàn toàn tiền bạc của người kia, bắt xin từng đồng, hoặc giấu nguồn lực để người kia lệ thuộc — đó là dấu hiệu của quan hệ kiểm soát, không phải cách quản lý tài chính. Nếu bạn thấy mình trong tình huống đó, hãy nói với người thân tin cậy.",
      "Mỗi người nên có một khoản dự phòng riêng mà mình biết rõ, kể cả khi tài chính gộp chung. Đây là vấn đề an toàn cá nhân, không phải thiếu tin tưởng.",
      "Tài sản hình thành trong thời kỳ hôn nhân có quy định pháp lý riêng. Nếu bạn có tài sản riêng đáng kể trước hôn nhân, hãy tìm hiểu quy định hoặc hỏi luật sư.",
      "Bài này là kinh nghiệm sắp xếp trong gia đình, không phải tư vấn tài chính hay tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Một người không đi làm thì chia thế nào?",
        a: "Người ở nhà chăm con và lo việc nhà đang đóng góp bằng công sức có giá trị thật. Quỹ chung nên lo mọi chi phí, và người ở nhà vẫn cần một khoản tự do riêng — điều này quan trọng cho sự tôn trọng lẫn nhau.",
      },
      {
        q: "Người kia tiêu nhiều mà không chịu ghi chép thì sao?",
        a: "Đừng đòi họ ghi chép. Chuyển sang mô hình lai: góp đủ vào quỹ chung, phần còn lại tự do. Cách này bảo đảm việc chung không bị ảnh hưởng mà không ai phải giải trình.",
      },
      {
        q: "Có nên biết hết thu nhập của nhau không?",
        a: "Ít nhất phải biết đủ để lập kế hoạch chung. Giấu hoàn toàn thu nhập thường tạo nghi ngờ. Nhưng biết tổng thu nhập khác với kiểm soát từng khoản chi.",
      },
      {
        q: "Nợ trước hôn nhân thì ai trả?",
        a: "Về nguyên tắc là của người vay, nhưng thực tế nó ảnh hưởng tới cả nhà. Điều quan trọng là nói ra từ đầu và cùng thống nhất kế hoạch trả, thay vì để nó thành bí mật.",
      },
    ],
    sources: [],
  },
  {
    slug: "luong-ve-la-het-tra-cho-minh-truoc",
    title: "Lương về là hết: đảo ngược thứ tự để tháng nào cũng còn dư",
    excerpt:
      "Tiết kiệm phần còn lại sau khi tiêu thì gần như không bao giờ còn gì. Đảo ngược thứ tự là thay đổi nhỏ nhất có tác dụng lớn nhất.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Nguyên tắc là trả cho mình trước: ngay ngày lương về, chuyển một khoản cố định sang tài khoản tiết kiệm rồi mới tiêu phần còn lại. Đặt lệnh chuyển tự động để không phụ thuộc vào ý chí. Bắt đầu bằng con số nhỏ mà bạn chắc chắn duy trì được, thậm chí chỉ vài phần trăm lương, rồi tăng dần mỗi lần tăng lương. Quan trọng là không đứt, chứ không phải nhiều.",
    prepare: [
      "Ngày lương về hằng tháng — con số chính xác",
      "Một tài khoản tiết kiệm riêng, tốt nhất là ở ngân hàng khác hoặc khó rút",
      "Sao kê ba tháng để biết mình thật sự dư được bao nhiêu",
      "Chức năng chuyển tiền định kỳ trong ứng dụng ngân hàng",
    ],
    steps: [
      {
        title: "Hiểu vì sao thứ tự lại quan trọng đến vậy",
        detail:
          "Chi tiêu có xu hướng giãn ra vừa đúng bằng số tiền có sẵn. Để dành phần còn lại nghĩa là để dành phần không bao giờ tồn tại. Cắt ra trước khi tiêu thì phần chi tiêu tự co lại cho vừa — điều này xảy ra gần như tự động.",
      },
      {
        title: "Tìm con số bạn chắc chắn duy trì được",
        detail:
          "Nhìn ba tháng sao kê, xem tháng khó khăn nhất bạn còn dư bao nhiêu. Lấy con số đó làm mức khởi đầu. Đặt mục tiêu quá cao rồi phải rút ra tiêu là cách nhanh nhất để bỏ cuộc.",
      },
      {
        title: "Bắt đầu nhỏ nhưng bắt đầu ngay",
        detail:
          "Nếu chỉ để được một khoản rất nhỏ thì vẫn cứ bắt đầu. Mục tiêu của tháng đầu không phải số tiền mà là dựng được thói quen và thấy nó chạy được. Số tiền tăng sau.",
      },
      {
        title: "Đặt lệnh chuyển tự động vào đúng ngày lương",
        detail:
          "Đây là bước biến ý định thành hệ thống. Hầu hết ứng dụng ngân hàng đều có chức năng chuyển định kỳ. Đặt vào ngày lương về hoặc ngày hôm sau. Bạn sẽ không phải quyết định lại mỗi tháng.",
      },
      {
        title: "Để tiền ở nơi khó rút",
        detail:
          "Tài khoản tiết kiệm có kỳ hạn, hoặc ở một ngân hàng khác mà bạn không cài ứng dụng trên điện thoại chính. Ma sát nhỏ này ngăn được rất nhiều lần rút bốc đồng.",
      },
      {
        title: "Đừng gắn thẻ vào tài khoản tiết kiệm",
        detail:
          "Không phát hành thẻ, không liên kết ví điện tử, không lưu tài khoản đó trong các ứng dụng mua sắm. Tiền phải cần vài thao tác mới lấy ra được.",
      },
      {
        title: "Tách quỹ dự phòng ra khỏi tiết kiệm dài hạn",
        detail:
          "Quỹ dự phòng dùng cho sự cố: ốm đau, hỏng xe, mất việc. Nó phải rút được nhanh. Tiết kiệm dài hạn thì để yên. Trộn hai thứ là lý do khiến quỹ dài hạn bị moi ra liên tục.",
      },
      {
        title: "Tăng khoản mỗi lần thu nhập tăng",
        detail:
          "Được tăng lương thì tăng luôn mức chuyển tự động trước khi kịp quen với mức sống mới. Đây là cách tăng tiết kiệm mà gần như không cảm thấy hy sinh gì.",
      },
      {
        title: "Xử lý các khoản tiền bất thường ngay khi nhận",
        detail:
          "Thưởng Tết, tiền làm thêm, tiền được cho. Quyết định trước tỉ lệ sẽ để dành, chuyển ngay trong ngày nhận. Để vài hôm là nó tan mất mà bạn không nhớ đã tiêu vào đâu.",
      },
      {
        title: "Đặt tên tài khoản theo mục tiêu",
        detail:
          "Đổi tên tài khoản thành mua nhà, học phí cho con, hoặc chuyến đi năm sau. Nghe đơn giản nhưng nó khiến việc rút tiền ra có cảm giác như phá hỏng một thứ cụ thể, chứ không chỉ là giảm một con số.",
      },
      {
        title: "Cho phép mình một khoản tiêu thoải mái",
        detail:
          "Kế hoạch quá khắc nghiệt sẽ vỡ. Giữ một khoản mỗi tháng bạn được tiêu không cần lý do. Chính phần này làm cho hệ thống sống được qua nhiều năm.",
      },
      {
        title: "Nếu thật sự không dư được đồng nào",
        detail:
          "Thì vấn đề không nằm ở kỷ luật. Hãy nhìn vào ba khoản lớn nhất — thường là nhà ở, trả nợ, đi lại — và xem có khoản nào giảm được không. Hoặc tính tới việc tăng thu nhập. Đừng tự trách mình về một bài toán không giải được bằng ý chí.",
      },
    ],
    notes: [
      "Trước khi nghĩ tới bất kỳ khoản đầu tư nào, hãy có quỹ dự phòng đủ chi tiêu vài tháng. Không có nó thì chỉ một sự cố là bạn phải vay, và lãi vay xoá sạch mọi thứ bạn tích luỹ được.",
      "Cảnh giác với những nơi hứa lãi cao mỗi ngày hoặc mỗi tuần cho khoản tiết kiệm của bạn. Tiền để dành nên nằm ở nơi an toàn, không phải nơi hứa hẹn nhiều nhất.",
      "Nếu đang có nợ lãi cao, hãy cân đối: giữ một khoản dự phòng nhỏ, phần còn lại ưu tiên trả nợ, vì lãi vay thường cao hơn lãi tiết kiệm.",
      "Bài này là kinh nghiệm phổ thông, không phải tư vấn tài chính cá nhân.",
    ],
    faq: [
      {
        q: "Nên để dành bao nhiêu phần trăm lương?",
        a: "Con số lý tưởng trên mạng thường không hợp với thu nhập thật của nhiều người. Hãy bắt đầu bằng mức bạn chắc chắn duy trì được, rồi tăng dần. Đều đặn quan trọng hơn tỉ lệ.",
      },
      {
        q: "Thu nhập không đều thì làm sao chuyển tự động?",
        a: "Lấy mức thu nhập của tháng thấp nhất trong năm làm chuẩn cho khoản chuyển tự động. Tháng nào cao hơn thì chuyển thêm thủ công. Như vậy hệ thống không bị đứt vào tháng ế.",
      },
      {
        q: "Lỡ phải rút ra tiêu thì có phải bắt đầu lại từ đầu không?",
        a: "Không. Rút vì việc thật sự cần thì đó chính là mục đích của quỹ dự phòng. Chỉ cần tiếp tục chuyển đều tháng sau. Đứt một tháng không phải thất bại, bỏ hẳn mới là.",
      },
      {
        q: "Để tiền mặt ở nhà hay gửi ngân hàng?",
        a: "Gửi ngân hàng an toàn hơn và có lãi. Tiền mặt ở nhà nên giữ một khoản nhỏ cho tình huống khẩn cấp, còn lại thì gửi.",
      },
    ],
    sources: [],
  },
  {
    slug: "mua-sam-online-tranh-bay-gia",
    title: "Mua sắm online: bẫy giá, đánh giá ảo, và cách đòi lại tiền",
    excerpt:
      "Giá gạch ngang giảm bảy mươi phần trăm thường là giá chưa từng tồn tại. Có vài cách kiểm rất nhanh trước khi bấm mua.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Ba việc kiểm trước khi mua: so giá ở ít nhất hai sàn khác nhau chứ đừng tin con số gạch ngang; đọc đánh giá một sao và hai sao trước khi đọc đánh giá năm sao; và kiểm chính sách đổi trả cùng đơn vị bán là ai. Khi nhận hàng, quay video lúc mở gói — đây là bằng chứng quan trọng nhất nếu phải khiếu nại. Thanh toán qua sàn an toàn hơn chuyển khoản riêng cho người bán.",
    prepare: [
      "Điện thoại có sẵn chức năng quay video để quay lúc mở gói",
      "Thói quen chụp màn hình trang sản phẩm trước khi đặt",
      "Tài khoản trên ít nhất hai sàn để so giá",
      "Danh sách những gì mình thật sự cần, để không mua theo thông báo giảm giá",
    ],
    steps: [
      {
        title: "Bỏ qua con số gạch ngang",
        detail:
          "Giá gốc bị gạch thường là con số do người bán tự đặt để tạo cảm giác giảm sâu. Cách duy nhất biết giá thật là so với nơi khác. Đừng để tỉ lệ phần trăm giảm quyết định thay bạn.",
      },
      {
        title: "So giá ở ít nhất hai sàn và một cửa hàng thật",
        detail:
          "Tìm đúng tên model trên sàn khác, và nếu là món lớn thì hỏi giá ở cửa hàng ngoài. Chênh lệch thường lớn hơn bạn nghĩ, nhất là với đồ điện tử và đồ gia dụng.",
      },
      {
        title: "Đọc đánh giá một sao trước",
        detail:
          "Đánh giá năm sao thường chung chung và có thể được tạo ra. Đánh giá một sao và hai sao cho biết sản phẩm hỏng ở đâu và người bán xử lý thế nào. Nếu nhiều người phàn nàn cùng một lỗi thì đó là lỗi thật.",
      },
      {
        title: "Nhận ra đánh giá ảo",
        detail:
          "Dấu hiệu: hàng loạt đánh giá cùng ngày, câu chữ giống nhau, ảnh trùng lặp, chỉ toàn năm sao mà không có nội dung cụ thể, hoặc người đánh giá không có lịch sử mua hàng khác. Lọc xem ảnh do người mua thật chụp thì đáng tin hơn.",
      },
      {
        title: "Kiểm ai là người bán",
        detail:
          "Gian hàng chính hãng, gian hàng của sàn, hay người bán cá nhân — mức bảo đảm khác nhau rất nhiều. Xem thời gian hoạt động của gian hàng, số lượng đã bán, và tỉ lệ phản hồi. Gian hàng mới lập bán món đắt tiền giá rẻ bất thường là dấu hiệu cần dừng lại.",
      },
      {
        title: "Đọc chính sách đổi trả TRƯỚC khi đặt",
        detail:
          "Bao nhiêu ngày được trả, ai chịu phí vận chuyển trả hàng, có yêu cầu giữ nguyên tem hộp không. Nhiều món ghi rõ không hỗ trợ đổi trả — biết trước thì bạn cân nhắc khác đi.",
      },
      {
        title: "Chụp màn hình trang sản phẩm trước khi đặt",
        detail:
          "Chụp phần mô tả, thông số, ảnh sản phẩm, giá và cam kết của người bán. Người bán có thể sửa nội dung sau đó. Ảnh chụp này là bằng chứng khi hàng nhận không đúng mô tả.",
      },
      {
        title: "Thanh toán qua sàn, đừng chuyển khoản riêng",
        detail:
          "Người bán mời chuyển khoản trực tiếp để giảm giá là dấu hiệu rất đáng ngờ — làm vậy bạn mất toàn bộ cơ chế bảo vệ của sàn. Đây là cách mất tiền phổ biến nhất khi mua online.",
      },
      {
        title: "QUAY VIDEO KHI MỞ GÓI",
        detail:
          "Quay liên tục từ lúc gói hàng còn nguyên niêm phong, thấy rõ mã vận đơn, tới lúc lấy sản phẩm ra. Đây là bằng chứng quan trọng nhất khi khiếu nại thiếu hàng hoặc sai hàng, và nhiều sàn yêu cầu đúng loại video này.",
      },
      {
        title: "Kiểm hàng ngay, đừng để quá hạn khiếu nại",
        detail:
          "Mỗi sàn có thời hạn để yêu cầu trả hàng hoàn tiền, tính từ khi nhận. Mở kiểm ngay trong ngày. Để quá hạn thì tiền đã chuyển cho người bán và việc đòi lại khó hơn nhiều.",
      },
      {
        title: "Khiếu nại theo đúng quy trình của sàn",
        detail:
          "Mở yêu cầu trả hàng hoàn tiền ngay trong ứng dụng, đính kèm video mở gói và ảnh chụp. Trình bày ngắn gọn và đúng sự việc. Nếu sàn xử lý không thoả đáng, có thể phản ánh tới cơ quan bảo vệ quyền lợi người tiêu dùng.",
      },
      {
        title: "Tắt bớt thông báo khuyến mãi",
        detail:
          "Phần lớn khoản chi thừa đến từ việc mở ứng dụng khi không định mua gì. Tắt thông báo, gỡ ứng dụng khỏi màn hình chính, và giữ thói quen chỉ mở khi đã có danh sách cần mua.",
      },
    ],
    notes: [
      "TUYỆT ĐỐI không đọc mã OTP cho bất kỳ ai, kể cả người tự xưng là nhân viên sàn hay shipper. Không ai cần mã OTP của bạn để giao hàng hay hoàn tiền.",
      "Cảnh giác với đường link lạ gửi qua tin nhắn hoặc mạng xã hội báo trúng thưởng, hoàn tiền, hay yêu cầu cập nhật thông tin. Chỉ thao tác trong ứng dụng chính thức đã cài.",
      "Với hàng giá trị lớn như điện thoại, laptop, hãy ưu tiên gian hàng chính hãng và giữ hoá đơn để còn bảo hành. Giá rẻ bất thường thường đi kèm hàng không rõ nguồn gốc hoặc không được bảo hành.",
      "Bài này là kinh nghiệm mua sắm phổ thông, không phải tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Có nên chọn thanh toán khi nhận hàng không?",
        a: "Cách này giúp bạn không mất tiền nếu hàng không tới, nhưng nhiều nơi không cho mở kiểm trước khi trả tiền. Dù thanh toán cách nào, video mở gói vẫn là thứ bảo vệ bạn tốt nhất.",
      },
      {
        q: "Người bán nhắn tin xin đừng đánh giá xấu, hứa hoàn tiền riêng, có nên không?",
        a: "Nên xử lý qua kênh chính thức của sàn để có lưu vết. Thoả thuận riêng ngoài sàn thì bạn không còn cơ chế bảo vệ nếu họ đổi ý.",
      },
      {
        q: "Mua hàng livestream có khác gì không?",
        a: "Nguyên tắc giống nhau, nhưng livestream tạo áp lực thời gian khiến người ta mua vội. Hãy ghi lại tên sản phẩm rồi tra giá bình tĩnh, đừng bấm mua vì sợ hết suất.",
      },
      {
        q: "Hàng nhận đúng nhưng không ưng thì trả được không?",
        a: "Tuỳ chính sách của sàn và của người bán. Nhiều nơi cho trả trong một số ngày nhưng bạn chịu phí vận chuyển. Đọc chính sách trước khi đặt để biết mình có quyền gì.",
      },
    ],
    sources: [],
  },
];
