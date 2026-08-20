// Bài đăng ngày 2026-08-20 — khung 18h chiều
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-20";

export const day20260820chieu = [
  {
    slug: "doc-hop-dong-lao-dong-truoc-khi-ky",
    title: "Đọc hợp đồng lao động trước khi ký: nhìn vào đâu",
    excerpt:
      "Người ta đưa tờ hợp đồng, bạn ngại đọc lâu nên ký luôn. Vài tháng sau mới biết mình đã đồng ý những gì. Đây là những dòng cần soi kỹ trước khi đặt bút.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Xin bản hợp đồng mang về đọc một đêm — đây là quyền của bạn, không phải đòi hỏi quá đáng. Soi tám chỗ: loại hợp đồng và thời hạn, mức lương ghi bằng số cụ thể, các khoản phụ cấp có tính đóng bảo hiểm không, thời gian thử việc, giờ làm và làm thêm, điều khoản chấm dứt, điều khoản bồi thường hay cam kết làm đủ số năm, và mức đóng bảo hiểm xã hội trên bao nhiêu. Cái gì nói miệng mà không có trong giấy thì coi như không có. Ký xong nhớ đòi lại một bản có chữ ký và dấu của công ty.",
    prepare: [
      "Bản hợp đồng đầy đủ, kể cả các phụ lục — nhiều điều khoản khó nằm ở phụ lục chứ không ở trang chính",
      "Bản mô tả công việc lúc tuyển dụng, để đối chiếu xem việc trong hợp đồng có giống việc người ta hứa không",
      "Tin nhắn và email trao đổi về lương thưởng — bằng chứng cho những gì đã thoả thuận miệng",
      "Bút và giấy ghi lại câu hỏi, để hỏi HR một lần cho gọn thay vì nhắn lắt nhắt",
      "Một người quen từng đi làm lâu năm để hỏi ý kiến nếu bạn thấy có điều khoản lạ",
    ],
    steps: [
      {
        title: "Xin mang bản nháp về đọc",
        detail:
          "Nói thẳng: em xin bản hợp đồng đọc kỹ tối nay, sáng mai em ký ạ. Công ty đàng hoàng sẽ đồng ý ngay. Nếu ai đó thúc bạn ký ngay tại chỗ và không cho đọc, đó là dấu hiệu đáng ngại chứ không phải chuyện bình thường.",
      },
      {
        title: "Xem đây là loại hợp đồng gì, dài bao lâu",
        detail:
          "Hợp đồng thường có hai loại: xác định thời hạn (ghi rõ từ ngày nào đến ngày nào) và không xác định thời hạn. Loại có thời hạn thì hết hạn là hết, công ty không cần lý do để không ký tiếp. Nếu bạn được hứa làm lâu dài mà giấy ghi 6 tháng, hỏi luôn: sau 6 tháng thì hợp đồng tiếp theo là loại nào ạ?",
      },
      {
        title: "Soi phần lương — phải là con số, không phải chữ theo quy chế công ty",
        detail:
          "Lương phải ghi bằng số cụ thể. Nếu chỉ ghi theo thang bảng lương của công ty thì bạn không có gì để đối chiếu khi tranh chấp. Đồng thời phân biệt lương cơ bản và tổng thu nhập: nhiều nơi lương cơ bản thấp, phần còn lại gọi là phụ cấp — điều này ảnh hưởng trực tiếp đến tiền bảo hiểm và tiền làm thêm giờ của bạn.",
      },
      {
        title: "Hỏi rõ đóng bảo hiểm xã hội trên mức nào",
        detail:
          "Câu hỏi để nguyên văn cho HR: công ty đóng bảo hiểm xã hội cho em trên mức bao nhiêu ạ? Nhiều nơi đóng trên lương cơ bản chứ không trên tổng thu nhập, nên sau này tiền thai sản, thất nghiệp, hưu trí đều tính theo mức thấp đó. Mức đóng và tỉ lệ thay đổi theo thời điểm và theo nơi — hỏi HR hoặc cơ quan bảo hiểm xã hội cho chắc.",
      },
      {
        title: "Xem kỹ thời gian thử việc và lương thử việc",
        detail:
          "Thử việc phải có thời hạn rõ ràng, và lương thử việc thường được quy định không thấp hơn một tỉ lệ nhất định so với lương chính thức — tỉ lệ này tuỳ quy định từng thời điểm, hỏi HR cho chắc. Cảnh giác với kiểu thử việc 3 tháng rồi thử tiếp 3 tháng nữa: thử việc hết hạn mà bạn vẫn làm thì bạn đang làm chính thức.",
      },
      {
        title: "Đọc phần giờ làm việc và làm thêm giờ",
        detail:
          "Tìm câu trả lời cho: một tuần làm mấy ngày, mấy giờ mỗi ngày, làm thêm có được trả tiền hay nghỉ bù. Nếu hợp đồng chỉ ghi kiểu làm theo yêu cầu công việc mà không nói gì về tiền làm thêm, hỏi thẳng: nếu em làm thêm buổi tối hoặc cuối tuần thì tính công thế nào ạ? Ghi lại câu trả lời qua email.",
      },
      {
        title: "Tìm điều khoản cam kết làm đủ số năm và bồi thường",
        detail:
          "Đây là chỗ hay đau nhất. Một số nơi có điều khoản: nghỉ trước bao nhiêu tháng thì phải bồi thường chi phí đào tạo, hoặc trả lại tiền thưởng ký hợp đồng. Đọc kỹ con số và cách tính. Nếu thấy mức bồi thường vô lý so với thứ bạn thực sự được đào tạo, đề nghị sửa hoặc bỏ trước khi ký — sau khi ký thì rất khó nói lại.",
      },
      {
        title: "Xem điều khoản chấm dứt hợp đồng của cả hai bên",
        detail:
          "Bạn muốn nghỉ thì báo trước bao nhiêu ngày? Công ty cho bạn nghỉ thì báo trước bao nhiêu? Nếu hợp đồng bắt bạn báo trước 60 ngày trong khi công ty chỉ cần báo bạn 7 ngày, đó là bất cân xứng đáng để hỏi lại.",
      },
      {
        title: "Kiểm tra phần bảo mật và không làm cho đối thủ",
        detail:
          "Điều khoản bảo mật thông tin là bình thường. Nhưng điều khoản kiểu không được làm cho công ty cùng ngành trong hai năm sau khi nghỉ thì nên cân nhắc kỹ — nó có thể chặn đường nghề của bạn. Hỏi phạm vi cụ thể: ngành nào, khu vực nào, bao lâu.",
      },
      {
        title: "Đối chiếu với những gì được hứa miệng",
        detail:
          "Lấy tờ giấy ghi lại mọi thứ người tuyển dụng đã hứa: thưởng tháng 13, review lương sau 6 tháng, được làm từ xa hai ngày mỗi tuần. Cái nào không có trong hợp đồng, nhắn HR: chị ơi phần thưởng tháng 13 mình có ghi vào hợp đồng hoặc phụ lục được không ạ? Không ghi được thì ít nhất giữ lại email xác nhận.",
      },
      {
        title: "Ký và đòi lại bản của mình",
        detail:
          "Ký xong đừng ra về tay không. Hợp đồng phải có hai bản, bạn giữ một bản có chữ ký của cả hai bên và dấu công ty. Rất nhiều người chỉ ký rồi đưa lại hết, đến lúc cần thì không có gì trong tay. Nếu công ty nói để chị đóng dấu rồi gửi lại sau, đặt lịch nhắc mình đòi sau một tuần.",
      },
      {
        title: "Chụp ảnh lưu và cất bản gốc",
        detail:
          "Chụp toàn bộ hợp đồng, lưu vào thư mục riêng trong điện thoại và một bản trên email của chính bạn — không phải email công ty, vì nghỉ việc là mất quyền truy cập. Bản giấy cất cùng chỗ với giấy tờ tuỳ thân.",
      },
    ],
    notes: [
      "Nói miệng không có giá trị khi tranh chấp. Câu yên tâm đi em, công ty mình toàn vậy không cứu được bạn trước một tờ giấy có chữ ký của chính bạn.",
      "Đừng ngại đàm phán trước khi ký — đây là lúc bạn có sức mạnh nhất. Sau khi ký, mọi thứ khó thay đổi hơn nhiều.",
      "Nếu công ty né tránh việc đưa hợp đồng bằng văn bản, hoặc kéo dài kiểu làm thử vài tháng rồi ký sau, hãy coi đó là cảnh báo chứ không phải sự thoải mái.",
      "Mọi con số về lương tối thiểu, tỉ lệ đóng bảo hiểm, số ngày báo trước đều thay đổi theo thời điểm và tuỳ nơi — hỏi HR hoặc cơ quan bảo hiểm xã hội cho chắc.",
    ],
    faq: [
      {
        q: "Em xin mang hợp đồng về đọc mà HR có vẻ khó chịu, có phải em làm quá không?",
        a: "Không hề. Đọc trước khi ký là chuyện bình thường ở mọi nơi làm ăn tử tế. Phản ứng khó chịu của họ là thông tin về công ty đó, không phải về bạn.",
      },
      {
        q: "Em đã đi làm mấy tháng rồi mà chưa ký hợp đồng nào, giờ sao?",
        a: "Bạn vẫn được coi là có quan hệ lao động dựa trên thực tế làm việc và bằng chứng nhận lương. Giữ lại sao kê ngân hàng, tin nhắn phân công việc, bảng chấm công. Đồng thời chủ động hỏi HR bằng email để có dấu vết về việc ký hợp đồng.",
      },
      {
        q: "Hợp đồng ghi lương thấp hơn lương thật, công ty bảo để đóng bảo hiểm ít cho em đỡ trừ tiền. Có nên đồng ý?",
        a: "Nghe thì được lợi trước mắt nhưng thiệt về sau: thai sản, thất nghiệp, hưu trí đều tính trên mức đã đóng. Chưa kể khi tranh chấp, cái công ty phải trả bạn cũng tính theo con số trong giấy.",
      },
      {
        q: "Em phát hiện điều khoản bất lợi sau khi đã ký rồi, còn làm gì được không?",
        a: "Vẫn có thể thương lượng ký phụ lục sửa đổi — cả hai bên đồng ý là được. Nêu vấn đề bằng email lịch sự, cụ thể, đề xuất phương án thay vì chỉ phàn nàn. Nếu điều khoản đó trái luật lao động thì tự nó không có hiệu lực, nhưng bạn nên hỏi ý kiến người có chuyên môn trước khi đối đầu.",
      },
    ],
    sources: [],
  },

  {
    slug: "nghi-viec-dung-cach-va-chot-so-bhxh",
    title: "Nghỉ việc đúng cách và chốt sổ bảo hiểm xã hội",
    excerpt:
      "Nghỉ việc không chỉ là gửi cái đơn rồi biến mất. Làm sai một bước là mất tiền, mất sổ bảo hiểm, và mất luôn người sẵn sàng nói tốt về bạn sau này.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Trình tự an toàn: xem hợp đồng để biết phải báo trước bao nhiêu ngày, nói trực tiếp với sếp trước rồi mới gửi đơn bằng văn bản, làm biên bản bàn giao có ký nhận, và đừng rời đi khi chưa cầm được sổ bảo hiểm xã hội đã chốt cùng quyết định thôi việc. Ba giấy tờ bạn phải có trong tay trước khi rời hẳn: quyết định hoặc thông báo chấm dứt hợp đồng, sổ bảo hiểm xã hội đã chốt, và bảng tính lương cuối cùng gồm cả phép chưa nghỉ.",
    prepare: [
      "Bản hợp đồng lao động để tra số ngày phải báo trước — báo thiếu ngày có thể bị trừ tiền",
      "Danh sách việc và tài khoản mình đang giữ, để làm biên bản bàn giao cho gọn",
      "Số ngày phép còn lại (hỏi HR hoặc xem trên hệ thống chấm công) — phép chưa nghỉ thường được thanh toán",
      "Email cá nhân để chuyển những gì thuộc về bạn: hợp đồng, phiếu lương, chứng chỉ khoá học",
      "Số điện thoại và email cá nhân của vài đồng nghiệp bạn muốn giữ liên lạc",
    ],
    steps: [
      {
        title: "Tra số ngày phải báo trước trong hợp đồng",
        detail:
          "Số ngày báo trước phụ thuộc loại hợp đồng và quy định hiện hành — thường 30 hoặc 45 ngày với hợp đồng dài hạn, ít hơn với hợp đồng ngắn. Đếm ngược từ ngày bạn muốn nghỉ. Báo thiếu ngày thì bạn có thể phải bồi thường tiền lương những ngày thiếu đó.",
      },
      {
        title: "Nói với sếp trực tiếp trước, đừng để sếp biết qua HR",
        detail:
          "Xin 15 phút riêng. Nói ngắn gọn, không kể tội ai: em đã suy nghĩ kỹ và quyết định dừng ở đây, ngày làm việc cuối của em dự kiến là ngày X, em sẽ bàn giao đầy đủ. Đừng dùng buổi này để trút bức xúc — bạn cần người này nói tốt về bạn trong nhiều năm tới.",
      },
      {
        title: "Chuẩn bị sẵn tinh thần cho lời giữ lại",
        detail:
          "Rất hay gặp: sếp đề nghị tăng lương để bạn ở lại. Nếu lý do bạn đi không phải là tiền thì tiền không giải quyết được, và vài tháng sau bạn lại ở đúng chỗ cũ. Cứ trả lời: em cảm ơn anh chị, nhưng em đã quyết rồi ạ.",
      },
      {
        title: "Gửi đơn xin nghỉ bằng văn bản",
        detail:
          "Đơn cần: họ tên, vị trí, ngày làm việc cuối cùng, lời cảm ơn ngắn. Không cần giải thích dài. Gửi email cho cả sếp và HR để có dấu vết thời gian, kèm bản ký tay nếu công ty yêu cầu. Giữ lại email đã gửi.",
      },
      {
        title: "Làm danh sách bàn giao ngay từ tuần đầu",
        detail:
          "Liệt kê: việc đang dở, file ở đâu, tài khoản nào bạn đang giữ, đầu mối liên hệ bên ngoài, việc định kỳ hàng tháng ai sẽ làm. Viết như thể người nhận chưa biết gì — vì thật sự họ chưa biết gì.",
      },
      {
        title: "Bàn giao có biên bản, có chữ ký",
        detail:
          "Đây là bước nhiều người bỏ qua rồi hối hận. Biên bản ghi rõ đã giao gì, cho ai, ngày nào, hai bên ký. Sau này nếu có chuyện hồi đó bạn không giao cái này thì bạn có giấy trắng mực đen.",
      },
      {
        title: "Lấy lại những gì thuộc về bạn trước ngày cuối",
        detail:
          "Chứng chỉ khoá học, hợp đồng, phiếu lương các tháng, ảnh sản phẩm bạn làm để đưa vào hồ sơ nghề nghiệp. Chuyển sang email cá nhân. Đừng lấy dữ liệu khách hàng hay tài liệu nội bộ của công ty — vừa sai vừa có thể vướng điều khoản bảo mật.",
      },
      {
        title: "Chốt phép năm còn lại và tiền lương cuối",
        detail:
          "Hỏi HR bằng email: chị cho em xin bảng tính lương cuối cùng, bao gồm cả số ngày phép chưa nghỉ được thanh toán ạ. Đối chiếu với số phép bạn tự đếm. Chênh lệch thì hỏi ngay khi còn đang làm, đừng đợi nghỉ rồi mới nhắn.",
      },
      {
        title: "Đòi cho được sổ bảo hiểm xã hội đã chốt",
        detail:
          "Đây là thứ quan trọng nhất và cũng hay bị kéo dài nhất. Công ty có trách nhiệm chốt sổ và trả lại cho bạn sau khi chấm dứt hợp đồng. Nhắn HR: chị ơi dự kiến khi nào em nhận được sổ bảo hiểm đã chốt ạ, em cần nộp cho nơi mới. Không có sổ chốt thì nơi mới khó nối tiếp, và bạn cũng không làm được trợ cấp thất nghiệp.",
      },
      {
        title: "Lấy quyết định thôi việc bằng văn bản",
        detail:
          "Tờ này là bằng chứng bạn đã chấm dứt hợp đồng hợp pháp, cần khi làm trợ cấp thất nghiệp và khi công ty mới xác minh. Xin luôn một bản mềm gửi email cá nhân, phòng khi mất bản giấy.",
      },
      {
        title: "Chào tạm biệt tử tế trong ngày cuối",
        detail:
          "Một email ngắn cảm ơn cả nhóm, để lại email cá nhân. Không nói xấu, không nói cho hả. Thế giới nghề nghiệp nhỏ hơn bạn tưởng — người bạn dỗi hôm nay có thể là người phỏng vấn bạn ba năm sau.",
      },
      {
        title: "Sau một hai tuần, kiểm tra lại xem đã nhận đủ chưa",
        detail:
          "Đặt nhắc trong điện thoại: đã nhận lương cuối chưa, sổ bảo hiểm về chưa, quyết định thôi việc có chưa. Thiếu cái nào thì nhắn HR nhắc lịch sự, có mốc thời gian: chị ơi em nhắc chị giúp em phần sổ bảo hiểm với ạ, em cần trước ngày X.",
      },
    ],
    notes: [
      "ĐỪNG bỏ ngang không báo. Nghỉ ngang có thể mất tiền lương những ngày báo thiếu, mất trợ cấp thất nghiệp, và để lại tiếng xấu trong ngành.",
      "Đừng ký bất kỳ giấy tờ nào trong ngày cuối mà chưa đọc — đôi khi có tờ cam kết không khiếu nại kẹp trong xấp giấy bàn giao.",
      "Nếu công ty giữ sổ bảo hiểm quá lâu mà không có lý do, bạn có thể liên hệ cơ quan bảo hiểm xã hội nơi công ty đóng để hỏi tình trạng sổ của mình.",
      "Số ngày báo trước, quy định thanh toán phép năm và thủ tục chốt sổ đều tuỳ thời điểm và tuỳ nơi — hỏi HR hoặc cơ quan bảo hiểm xã hội cho chắc.",
    ],
    faq: [
      {
        q: "Em có việc mới rồi, họ giục em đi làm sớm, em rút ngắn thời gian báo trước được không?",
        a: "Được nếu công ty cũ đồng ý — cứ thoả thuận thẳng thắn và xin xác nhận bằng email. Nếu họ không đồng ý mà bạn vẫn đi sớm, bạn có thể phải bồi thường tiền lương những ngày còn thiếu.",
      },
      {
        q: "Công ty nói em phải bàn giao xong mới trả lương tháng cuối, có đúng không?",
        a: "Bàn giao là nghĩa vụ của bạn, nhưng lương là tiền công bạn đã làm ra. Cách an toàn nhất là bàn giao đầy đủ, có biên bản ký nhận, rồi lấy chính biên bản đó làm cơ sở yêu cầu thanh toán. Nếu vẫn bị giữ lương quá lâu, bạn có thể hỏi cơ quan quản lý lao động tại địa phương.",
      },
      {
        q: "Em nghỉ vì sếp đối xử tệ, có nên nói thật trong buổi phỏng vấn nghỉ việc không?",
        a: "Nói được, nhưng nói bằng sự việc chứ không bằng cảm xúc: em nghỉ vì phản hồi công việc thường đến muộn và em không rõ tiêu chí đánh giá. Kiểu đó hữu ích cho công ty và an toàn cho bạn hơn là kể tội một người cụ thể.",
      },
      {
        q: "Em chưa có việc mới, nghỉ rồi làm trợ cấp thất nghiệp được không?",
        a: "Được nếu bạn đã đóng bảo hiểm thất nghiệp đủ thời gian theo quy định và chấm dứt hợp đồng đúng luật. Nghỉ ngang thường mất quyền này. Chuẩn bị sẵn quyết định thôi việc và sổ bảo hiểm đã chốt rồi nộp hồ sơ trong thời hạn quy định — hỏi trung tâm dịch vụ việc làm nơi bạn ở cho chắc.",
      },
    ],
    sources: [],
  },

  {
    slug: "lam-ho-so-tro-cap-that-nghiep",
    title: "Làm hồ sơ trợ cấp thất nghiệp: đi đâu, nộp gì",
    excerpt:
      "Bạn đóng bảo hiểm thất nghiệp bao nhiêu năm nay rồi. Lúc mất việc mà không biết đường đi lấy lại thì phí quá. Đây là đường đi từ đầu tới lúc tiền về tài khoản.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Sau khi nghỉ việc hợp pháp và có sổ bảo hiểm xã hội đã chốt, mang hồ sơ tới trung tâm dịch vụ việc làm để nộp — nhiều nơi đã cho nộp online qua Cổng dịch vụ công. Có thời hạn nộp tính từ ngày chấm dứt hợp đồng, để quá hạn là mất quyền, nên đây là việc làm sớm chứ không phải để thư thư. Sau khi có quyết định hưởng, mỗi tháng bạn phải đến khai báo tình trạng tìm việc thì tháng đó mới được chi trả.",
    prepare: [
      "Quyết định thôi việc hoặc thông báo chấm dứt hợp đồng lao động — bản gốc để đối chiếu",
      "Sổ bảo hiểm xã hội đã được công ty chốt — thiếu cái này thì hồ sơ không chạy được",
      "CCCD và một bản photo, phòng khi nơi tiếp nhận cần lưu",
      "Số tài khoản ngân hàng chính chủ để nhận tiền — ghi sẵn ra giấy cho khỏi nhầm số",
      "Điện thoại có VNeID nếu bạn muốn nộp online",
    ],
    steps: [
      {
        title: "Kiểm tra xem mình có đủ điều kiện không",
        detail:
          "Hai điều kiện cốt lõi: đã đóng bảo hiểm thất nghiệp đủ thời gian tối thiểu theo quy định, và chấm dứt hợp đồng đúng luật (không nghỉ ngang, không bị sa thải vì kỷ luật). Thời gian tối thiểu và mức hưởng tuỳ thời điểm — hỏi trung tâm dịch vụ việc làm nơi bạn ở cho chắc.",
      },
      {
        title: "Đòi cho xong sổ bảo hiểm đã chốt từ công ty cũ",
        detail:
          "Không có sổ chốt thì mọi bước sau đều đứng. Nhắn HR có mốc thời gian cụ thể: chị ơi em cần sổ bảo hiểm đã chốt trước ngày X để làm hồ sơ thất nghiệp, chị hỗ trợ em với ạ. Nếu bị lờ, liên hệ cơ quan bảo hiểm xã hội nơi công ty đóng để hỏi tình trạng.",
      },
      {
        title: "Nhớ mốc thời gian nộp và đừng để trôi",
        detail:
          "Có thời hạn nộp hồ sơ tính từ ngày chấm dứt hợp đồng — quá hạn thì thời gian đã đóng vẫn được bảo lưu nhưng bạn mất khoản trợ cấp lần này. Ngay khi nghỉ việc, đặt luôn một lời nhắc trong điện thoại.",
      },
      {
        title: "Tìm trung tâm dịch vụ việc làm gần bạn",
        detail:
          "Tìm trên mạng cụm trung tâm dịch vụ việc làm kèm tên tỉnh thành của bạn. Nhiều nơi có văn phòng đại diện ở các quận huyện, nộp chỗ nào cũng được. Gọi điện hỏi trước giờ tiếp nhận và giấy tờ cần mang — một cuộc gọi hai phút tiết kiệm cả buổi đi lại.",
      },
      {
        title: "Cân nhắc nộp online trước",
        detail:
          "Nhiều địa phương đã cho nộp qua Cổng dịch vụ công quốc gia bằng tài khoản VNeID mức 2. Nộp online thì bạn có mã hồ sơ để theo dõi và thường chỉ phải đến một lần để đối chiếu bản gốc. Nếu thao tác online rối, cứ đi nộp trực tiếp, không sao cả.",
      },
      {
        title: "Điền tờ khai đề nghị hưởng trợ cấp",
        detail:
          "Mẫu có sẵn tại nơi tiếp nhận hoặc tải trên cổng. Điền đúng số sổ bảo hiểm, thời gian làm việc, lý do chấm dứt hợp đồng — lý do phải khớp với quyết định thôi việc, lệch là hồ sơ bị trả lại.",
      },
      {
        title: "Nộp hồ sơ và lấy giấy hẹn",
        detail:
          "Nộp xong nhất định phải cầm giấy hẹn hoặc mã hồ sơ. Chụp ảnh lại ngay. Hỏi luôn: bao lâu thì em có kết quả, và ngày nào em phải quay lại ạ? Ghi ngày đó vào lịch điện thoại kèm báo trước một ngày.",
      },
      {
        title: "Chờ xét duyệt và nhận quyết định",
        detail:
          "Sau thời gian xử lý theo quy định, bạn sẽ nhận quyết định hưởng trợ cấp thất nghiệp, trong đó ghi mức hưởng mỗi tháng và số tháng được hưởng. Đọc kỹ và giữ lại — tờ này cần cho các lần khai báo sau.",
      },
      {
        title: "Đi khai báo tìm việc hàng tháng, không bỏ buổi nào",
        detail:
          "Đây là chỗ nhiều người mất tiền oan. Mỗi tháng bạn phải đến đúng ngày hẹn để khai báo tình trạng tìm việc. Quên một buổi là có thể bị dừng chi trả tháng đó. Nếu bận đột xuất hoặc ốm, gọi cho trung tâm trước ngày hẹn để hỏi cách xử lý, đừng im lặng rồi tự vắng.",
      },
      {
        title: "Báo ngay khi bạn có việc mới",
        detail:
          "Có việc rồi mà vẫn nhận trợ cấp là sai và sẽ phải hoàn trả. Chủ động thông báo cho trung tâm, họ sẽ làm thủ tục chấm dứt hưởng và bảo lưu thời gian đóng còn lại cho lần sau. Phần bảo lưu này là tài sản của bạn, đừng đánh mất nó.",
      },
      {
        title: "Tận dụng phần hỗ trợ học nghề và giới thiệu việc",
        detail:
          "Trung tâm dịch vụ việc làm thường có chương trình hỗ trợ học nghề miễn phí hoặc giảm phí cho người đang hưởng trợ cấp, và có sàn giao dịch việc làm. Hỏi thẳng khi nộp hồ sơ: em đang hưởng trợ cấp thì có được hỗ trợ học nghề gì không ạ?",
      },
      {
        title: "Lưu hết giấy tờ vào một chỗ",
        detail:
          "Quyết định hưởng, giấy hẹn, biên lai khai báo hàng tháng — chụp lại hết vào một album trong điện thoại. Đến lúc cần đối chiếu số tháng đã hưởng, bạn không phải lục tung nhà.",
      },
    ],
    notes: [
      "Thời hạn nộp hồ sơ là thứ dễ mất tiền nhất trong toàn bộ quy trình. Nghỉ việc xong là đặt nhắc ngay, đừng đợi nghỉ ngơi vài tuần rồi tính.",
      "Nghỉ ngang không báo trước thường bị loại khỏi diện hưởng trợ cấp. Đây là một lý do rất thực tế để nghỉ việc cho đúng thủ tục.",
      "Cẩn thận với các dịch vụ làm hồ sơ thất nghiệp nhanh thu phí trên mạng. Thủ tục này bạn tự làm được, và bạn không nên đưa sổ bảo hiểm gốc cho người lạ.",
      "Mọi con số về thời gian đóng tối thiểu, mức hưởng, số tháng hưởng, thời hạn nộp đều thay đổi theo thời điểm — hỏi trung tâm dịch vụ việc làm hoặc cơ quan bảo hiểm xã hội cho chắc.",
    ],
    faq: [
      {
        q: "Em làm ở tỉnh khác nhưng giờ về quê, nộp hồ sơ ở đâu?",
        a: "Thường bạn được nộp tại trung tâm dịch vụ việc làm nơi bạn muốn nhận trợ cấp, không bắt buộc phải là nơi từng làm việc. Gọi hỏi trung tâm ở quê trước khi đi cho chắc.",
      },
      {
        q: "Em đang hưởng trợ cấp mà nhận việc thời vụ vài buổi thì có sao không?",
        a: "Nguyên tắc là có việc làm thì phải khai báo. Đừng giấu — bị phát hiện thì phải hoàn trả và có thể bị xử phạt. Cứ hỏi thẳng cán bộ trung tâm về trường hợp cụ thể của bạn.",
      },
      {
        q: "Công ty cũ chậm chốt sổ nên em sắp trễ hạn nộp, làm sao?",
        a: "Cứ đến trung tâm dịch vụ việc làm trình bày sớm, mang theo quyết định thôi việc và bằng chứng bạn đã yêu cầu công ty chốt sổ như email hay tin nhắn. Nhiều nơi có hướng xử lý cho trường hợp lỗi thuộc về người sử dụng lao động.",
      },
      {
        q: "Em chưa hưởng hết số tháng thì đi làm lại, phần còn lại có mất không?",
        a: "Thông thường thời gian đóng chưa hưởng hết được bảo lưu để cộng dồn cho lần sau, miễn là bạn làm thủ tục chấm dứt hưởng đàng hoàng. Đây chính là lý do phải báo khi có việc mới.",
      },
    ],
    sources: [],
  },

  {
    slug: "viet-cv-khi-chua-co-kinh-nghiem",
    title: "Viết CV khi chưa có kinh nghiệm làm việc",
    excerpt:
      "Trang giấy trắng, mục kinh nghiệm trống trơn, càng nhìn càng nản. Nhưng CV của người mới không cần dày — nó cần đúng chỗ.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Một trang là đủ. Bố cục: thông tin liên hệ, một đoạn giới thiệu hai ba dòng nói rõ bạn muốn làm gì, học vấn, rồi phần quan trọng nhất là những gì bạn đã thực sự làm — đồ án, việc làm thêm, hoạt động câu lạc bộ, dự án cá nhân. Mỗi gạch đầu dòng viết theo kiểu làm gì rồi ra kết quả gì, có con số càng tốt. Cuối cùng là kỹ năng và công cụ. Lưu file PDF, đặt tên file bằng tên bạn, và sửa lại CV cho khớp với từng tin tuyển dụng thay vì gửi một bản cho tất cả.",
    prepare: [
      "Một tin tuyển dụng cụ thể bạn nhắm tới — CV chung chung luôn yếu hơn CV viết cho một chỗ",
      "Danh sách mọi thứ bạn từng làm: đồ án, làm thêm, tình nguyện, dự án tự học, quản trị fanpage cho ai đó",
      "Bảng điểm hoặc chứng chỉ nếu có, để lấy con số chính xác",
      "Một mẫu CV sạch sẽ từ các công cụ miễn phí — tránh mẫu quá nhiều màu và hình",
      "Một người bạn hoặc anh chị đi trước để nhờ đọc lại trước khi gửi",
    ],
    steps: [
      {
        title: "Đọc kỹ tin tuyển dụng và gạch chân từ khoá",
        detail:
          "Nhà tuyển dụng viết sẵn cho bạn biết họ cần gì. Gạch chân các cụm lặp lại: chăm sóc khách hàng, Excel, làm việc nhóm. Những từ này nên xuất hiện trong CV của bạn — nếu bạn thật sự có.",
      },
      {
        title: "Đặt thông tin liên hệ cho chuyên nghiệp",
        detail:
          "Họ tên, số điện thoại, email, thành phố đang ở. Email phải nghiêm túc, dạng họ tên chứ không phải biệt danh hồi cấp ba. Nếu có trang cá nhân nghề nghiệp hay hồ sơ dự án thì thêm liên kết.",
      },
      {
        title: "Viết đoạn giới thiệu hai ba dòng, nói rõ bạn muốn gì",
        detail:
          "Không viết năng động, ham học hỏi, chịu khó — ai cũng viết thế và nó không nói gì cả. Viết cụ thể: sinh viên mới tốt nghiệp ngành kế toán, đã làm bốn tháng thực tập nhập liệu tại một cửa hàng bán lẻ, muốn ứng tuyển vị trí kế toán kho.",
      },
      {
        title: "Đưa học vấn lên trên khi bạn chưa có kinh nghiệm",
        detail:
          "Ghi trường, ngành, năm tốt nghiệp. Điểm cao thì ghi, điểm không nổi bật thì bỏ qua. Thêm một hai môn học hoặc đồ án liên quan trực tiếp đến vị trí ứng tuyển.",
      },
      {
        title: "Biến mọi thứ bạn từng làm thành kinh nghiệm",
        detail:
          "Chạy bàn quán cà phê là kinh nghiệm phục vụ khách và xử lý tình huống. Làm bí thư lớp là kinh nghiệm tổ chức. Bán hàng online cho gia đình là kinh nghiệm bán hàng và chăm sóc khách. Đừng coi thường những việc này — vấn đề là bạn kể chúng thế nào.",
      },
      {
        title: "Viết mỗi gạch đầu dòng theo công thức việc rồi kết quả",
        detail:
          "Thay vì phụ trách fanpage lớp, hãy viết quản lý fanpage lớp 300 thành viên, đăng ba bài mỗi tuần, tổ chức hai sự kiện có hơn 80 người tham dự. Con số làm câu văn có sức nặng ngay lập tức. Không có số thì mô tả quy mô: bao nhiêu người, bao lâu, bao nhiêu lần.",
      },
      {
        title: "Liệt kê kỹ năng thật, không liệt kê kỹ năng mơ",
        detail:
          "Ghi công cụ cụ thể bạn dùng được: Excel với hàm cơ bản và pivot, Google Sheets, Canva, phần mềm bán hàng nào đó. Đừng ghi thành thạo nếu bạn chỉ mới xem hướng dẫn — người phỏng vấn sẽ hỏi tới và bạn mất điểm nặng hơn là không ghi.",
      },
      {
        title: "Ghi ngoại ngữ kèm bằng chứng nếu có",
        detail:
          "Có chứng chỉ thì ghi tên và điểm. Không có thì mô tả thật: đọc hiểu tài liệu chuyên ngành, giao tiếp cơ bản. Nói quá về ngoại ngữ là thứ dễ bị lộ nhất trong 30 giây đầu buổi phỏng vấn.",
      },
      {
        title: "Cắt xuống còn một trang",
        detail:
          "Người sàng CV nhìn mỗi bản vài chục giây. Bỏ sở thích chung chung, bỏ ảnh nếu tin tuyển dụng không yêu cầu, bỏ thông tin cá nhân không cần thiết như tình trạng hôn nhân. Giữ khoảng trắng cho dễ đọc.",
      },
      {
        title: "Soát lỗi chính tả, soát hai lần",
        detail:
          "Lỗi chính tả trong CV là thứ khiến người ta loại bạn mà không cần lý do nào khác. Đọc to lên một lượt, rồi nhờ một người khác đọc. Kiểm tra kỹ tên công ty bạn ứng tuyển — gửi nhầm tên công ty là lỗi chí mạng.",
      },
      {
        title: "Lưu PDF và đặt tên file tử tế",
        detail:
          "Đặt tên kiểu HoTen-CV-ViTri.pdf. Đừng gửi file Word vì hay vỡ định dạng ở máy người khác, và đừng để tên kiểu CV cuối cùng sửa lần 3. Chi tiết nhỏ nhưng nói lên nhiều điều.",
      },
      {
        title: "Viết email gửi CV cho ra dáng",
        detail:
          "Tiêu đề: Ứng tuyển vị trí ... - Họ tên. Nội dung bốn năm dòng: bạn thấy tin ở đâu, vì sao bạn phù hợp, đính kèm CV, cảm ơn. Đừng gửi email trống chỉ có file đính kèm.",
      },
    ],
    notes: [
      "Đừng bịa kinh nghiệm. Người phỏng vấn hỏi sâu hai câu là lộ, và mất niềm tin thì không cứu lại được bằng gì cả.",
      "Mỗi nơi ứng tuyển nên sửa lại CV một chút cho khớp tin tuyển dụng. Mất 10 phút nhưng tăng cơ hội rõ rệt so với rải một bản cho 50 chỗ.",
      "Cẩn thận với dịch vụ viết CV thu phí cao và các tin tuyển dụng đòi bạn nộp tiền cọc, giữ giấy tờ gốc, hoặc phỏng vấn ở địa điểm lạ. Việc làm thật không bao giờ bắt bạn trả tiền để được nhận.",
      "Đừng để số CCCD, địa chỉ nhà chi tiết hay ảnh giấy tờ trong CV đăng công khai trên các trang tuyển dụng — thông tin đó dễ bị lợi dụng.",
    ],
    faq: [
      {
        q: "Em chưa đi làm bao giờ thật, mục kinh nghiệm để trống có sao không?",
        a: "Đổi tên mục thành Dự án và hoạt động rồi điền đồ án, hoạt động đoàn hội, việc tự học, việc làm thêm. Trống hoàn toàn thì mới đáng lo, còn kể được ba việc bạn từng làm thật là đủ để được gọi phỏng vấn.",
      },
      {
        q: "Có nên để ảnh trong CV không?",
        a: "Tuỳ nơi. Vị trí tiếp xúc khách hàng thì nhiều nơi vẫn thích có ảnh. Nếu để thì dùng ảnh nghiêm túc, nền đơn giản, không dùng ảnh chụp ở tiệc hay ảnh chỉnh quá tay.",
      },
      {
        q: "Em học trái ngành, viết sao cho họ không loại luôn?",
        a: "Dùng đoạn giới thiệu đầu CV để nói thẳng và nói tích cực: bạn học ngành gì, đã tự học hoặc làm gì để chuyển sang lĩnh vực này, và điểm mạnh từ ngành cũ giúp gì cho việc mới. Giấu thì họ vẫn thấy ở phần học vấn, nói trước thì bạn kiểm soát được câu chuyện.",
      },
      {
        q: "Gửi CV cả tuần không ai trả lời, có nên nhắn hỏi lại không?",
        a: "Nên, sau khoảng năm bảy ngày làm việc. Một email ngắn, lịch sự, nhắc lại vị trí đã ứng tuyển và bày tỏ mong muốn được trao đổi. Hỏi một lần thôi, không nhắn liên tục.",
      },
    ],
    sources: [],
  },

  {
    slug: "tra-loi-cau-hoi-luong-khi-phong-van",
    title: "Bị hỏi mong muốn mức lương bao nhiêu thì trả lời sao",
    excerpt:
      "Câu hỏi khiến người ta toát mồ hôi nhất buổi phỏng vấn. Nói cao sợ mất cơ hội, nói thấp thì thiệt cả năm. Đây là cách trả lời không phải đoán mò.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Đừng nói một con số duy nhất, hãy nói một khoảng dựa trên tìm hiểu thật — và đặt mức bạn thực sự muốn ở phần dưới của khoảng đó, vì người ta hay đàm phán xuống. Trước buổi phỏng vấn, tìm hiểu mức lương thị trường cho vị trí đó qua tin tuyển dụng cùng loại và hỏi người trong ngành. Nếu bị hỏi quá sớm, lịch sự hỏi ngược lại xem công ty có khoảng ngân sách cho vị trí này chưa. Và luôn hỏi con số đó là lương gộp hay lương thực nhận.",
    prepare: [
      "Ba đến năm tin tuyển dụng cùng vị trí, cùng khu vực để biết khoảng lương thị trường",
      "Con số chi tiêu tối thiểu mỗi tháng của bạn — biết sàn của mình ở đâu",
      "Danh sách những gì bạn mang lại được: kinh nghiệm, kỹ năng, công cụ dùng được",
      "Một câu trả lời đã tập nói to vài lần — tập trước thì lúc bị hỏi giọng sẽ không run",
      "Danh sách phúc lợi ngoài lương bạn quan tâm: bảo hiểm, thưởng, làm từ xa, học phí",
    ],
    steps: [
      {
        title: "Tìm hiểu khoảng lương trước khi đi phỏng vấn",
        detail:
          "Vào các trang tuyển dụng, lọc đúng vị trí và khu vực, xem năm mười tin. Nhiều tin ghi khoảng lương. Hỏi thêm người quen trong ngành bằng câu dễ trả lời: anh ơi vị trí này ở thị trường giờ khoảng bao nhiêu ạ — hỏi khoảng dễ được trả lời hơn hỏi lương của chính họ.",
      },
      {
        title: "Xác định ba con số của riêng bạn",
        detail:
          "Số sàn là mức dưới đó bạn từ chối, số mục tiêu là mức bạn thực sự muốn, số mơ là mức bạn sẽ rất vui. Viết ra giấy trước buổi phỏng vấn. Không có ba con số này thì lúc bị hỏi bạn sẽ nói theo cảm tính.",
      },
      {
        title: "Cố gắng để họ nói trước",
        detail:
          "Câu để nguyên văn: dạ trước khi em đưa con số, anh chị cho em hỏi công ty đã có khoảng ngân sách cho vị trí này chưa ạ? Nhiều nơi sẽ nói. Họ nói trước thì bạn có mốc để bàn, đỡ phải đoán.",
      },
      {
        title: "Nếu buộc phải nói trước, hãy nói một khoảng",
        detail:
          "Ví dụ: dựa trên tìm hiểu của em về vị trí này và kinh nghiệm em có, em mong muốn khoảng từ A đến B, nếu công ty có thêm các phúc lợi khác thì em sẵn sàng trao đổi thêm ạ. Đặt A là mức bạn thật sự thấy ổn, đừng đặt A bằng số sàn.",
      },
      {
        title: "Luôn hỏi rõ gộp hay thực nhận",
        detail:
          "Đây là chỗ hiểu nhầm nhiều nhất. Hỏi: con số này là lương gộp trước thuế và bảo hiểm, hay là số em nhận về tài khoản ạ? Chênh lệch giữa hai con số có thể vài triệu mỗi tháng.",
      },
      {
        title: "Hỏi cấu trúc lương: cố định bao nhiêu, thưởng bao nhiêu",
        detail:
          "Một số nơi báo con số to nhưng phần lớn là thưởng theo doanh số hoặc theo hiệu suất, nghĩa là không chắc chắn. Hỏi: trong mức đó, phần cố định hàng tháng là bao nhiêu ạ, và phần thưởng dựa trên tiêu chí nào?",
      },
      {
        title: "Hỏi luôn về đóng bảo hiểm trên mức nào",
        detail:
          "Công ty đóng bảo hiểm xã hội cho em trên mức nào ạ? Đóng trên lương cơ bản thấp thì sau này thai sản, thất nghiệp, hưu trí của bạn đều thấp theo. Đây là phần lương ẩn mà rất ít người mới đi làm để ý.",
      },
      {
        title: "Đếm cả phúc lợi ngoài lương",
        detail:
          "Bảo hiểm sức khoẻ thêm, thưởng tháng 13, hỗ trợ ăn trưa, gửi xe, học phí đào tạo, số ngày phép, được làm từ xa mấy ngày — quy hết ra tiền và thời gian rồi so sánh. Có khi mức lương thấp hơn một triệu nhưng phúc lợi bù lại nhiều hơn thế.",
      },
      {
        title: "Nếu mức họ đưa thấp hơn mong muốn, đừng từ chối ngay tại chỗ",
        detail:
          "Nói: em cảm ơn anh chị, em rất hứng thú với vị trí này, mức anh chị đưa hơi thấp hơn khoảng em kỳ vọng, công ty có thể cân nhắc thêm không ạ? Rồi im lặng chờ. Khoảng im lặng vài giây này khó chịu nhưng thường có tác dụng.",
      },
      {
        title: "Đưa ra phương án thay thế nếu họ không tăng được lương",
        detail:
          "Nếu phần lương cố định khó điều chỉnh, mình có thể xem xét review lương sau sáu tháng, hoặc thêm ngày phép và hỗ trợ đào tạo không ạ? Nhiều quản lý bị khoá ngân sách lương nhưng vẫn linh động được các khoản khác.",
      },
      {
        title: "Chốt bằng văn bản, không chốt bằng lời hứa",
        detail:
          "Mọi thứ đã thoả thuận — mức lương, thời điểm review, thưởng — phải nằm trong thư mời làm việc hoặc hợp đồng. Nhắn lại: anh chị gửi giúp em thư mời làm việc có ghi rõ các nội dung mình vừa trao đổi ạ. Hứa miệng không phải là thoả thuận.",
      },
      {
        title: "Xin thời gian suy nghĩ trước khi nhận",
        detail:
          "Em xin phép suy nghĩ đến hết ngày mai rồi phản hồi anh chị ạ là câu hoàn toàn bình thường. Nơi nào ép bạn quyết ngay trong 10 phút thì đó là dấu hiệu đáng cân nhắc.",
      },
    ],
    notes: [
      "Đừng nói dối mức lương cũ của bạn. Nhiều nơi kiểm tra được qua sao kê hoặc bảo hiểm, và bị bắt gặp là mất luôn cơ hội.",
      "Nói lương gộp mà tưởng thực nhận là hiểu nhầm phổ biến nhất. Hỏi rõ một câu, tránh cả năm ấm ức.",
      "Đàm phán lương không làm bạn thành người khó tính. Người tuyển dụng làm việc này hàng tuần và họ mong đợi bạn có ý kiến.",
      "Mọi con số về mức lương thị trường, tỉ lệ đóng bảo hiểm, thuế thu nhập cá nhân đều thay đổi theo thời điểm và tuỳ nơi — hỏi HR hoặc người trong ngành cho chắc.",
    ],
    faq: [
      {
        q: "Em mới ra trường, có nên đàm phán lương không hay cứ nhận cho có việc?",
        a: "Vẫn nên hỏi rõ cấu trúc lương và phúc lợi, dù bạn không mặc cả con số. Mức lương đầu tiên là mốc cho những lần tăng sau, nên nhận thấp quá thì mất nhiều năm mới bù lại được.",
      },
      {
        q: "Họ hỏi lương cũ của em bao nhiêu, em có phải nói không?",
        a: "Bạn có thể lịch sự chuyển hướng: dạ mức cũ của em gắn với phạm vi công việc khác, nên em xin phép nói về mức mong muốn cho vị trí này là khoảng A đến B ạ. Nếu họ vẫn hỏi, hãy nói số thật.",
      },
      {
        q: "Em nói mức mong muốn xong họ im lặng, có phải em nói cao quá không?",
        a: "Chưa chắc — im lặng cũng là một cách đàm phán. Đừng vội hạ giá xuống để lấp khoảng trống. Cứ chờ họ phản hồi, rồi hỏi: mức đó so với ngân sách của công ty thì thế nào ạ?",
      },
      {
        q: "Đã nhận việc rồi mới thấy mình nhận thấp, có xin tăng ngay được không?",
        a: "Xin ngay tuần đầu thì rất khó và dễ gây ấn tượng xấu. Cách thực tế hơn: làm tốt ba đến sáu tháng, ghi lại kết quả cụ thể bằng con số, rồi đặt lịch trao đổi review lương dựa trên kết quả đó.",
      },
    ],
    sources: [],
  },

  {
    slug: "mat-dien-thoai-lam-gi-trong-gio-dau",
    title: "Mất điện thoại: làm gì trong một giờ đầu tiên",
    excerpt:
      "Cái máy đắt tiền là chuyện nhỏ. Thứ đáng lo là ngân hàng, Zalo, email và ảnh giấy tờ nằm trong đó. Đây là thứ tự việc cần làm ngay.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Thứ tự ưu tiên: gọi tổng đài nhà mạng khoá SIM ngay (vì SIM là chìa khoá nhận mã OTP), rồi khoá ứng dụng ngân hàng qua tổng đài hoặc web, rồi đăng xuất từ xa và đổi mật khẩu email chính, cuối cùng mới tính chuyện định vị máy. Mượn điện thoại người khác cũng làm được hết. Đừng đi tìm máy trước rồi mới khoá tài khoản — kẻ lấy máy cần đúng khoảng thời gian bạn đang loay hoay đó.",
    prepare: [
      "Một điện thoại mượn tạm và chỗ ngồi yên tĩnh vài phút — việc này cần bình tĩnh chứ không cần chạy",
      "Số tổng đài nhà mạng và tổng đài ngân hàng — nên lưu sẵn trong sổ tay hoặc nhớ trong đầu từ hôm nay",
      "Email chính và mật khẩu của bạn, hoặc cách khôi phục email nếu bạn không nhớ",
      "CCCD để ra cửa hàng nhà mạng cấp lại SIM",
      "Địa chỉ cửa hàng nhà mạng gần nhất và giờ mở cửa",
    ],
    steps: [
      {
        title: "Gọi ngay vào máy mình một lần",
        detail:
          "Mượn máy người khác gọi vào số của bạn. Có khi máy chỉ rơi ở quán và ai đó nhặt được sẽ nghe. Đổ chuông vài lần không ai nghe, hoặc thuê bao ngay lập tức, thì chuyển sang bước tiếp theo — đừng gọi mãi mất thời gian vàng.",
      },
      {
        title: "Khoá SIM trước tất cả mọi thứ",
        detail:
          "SIM là thứ nhận mã OTP của ngân hàng và của mọi tài khoản. Gọi tổng đài nhà mạng của bạn, nói: em bị mất điện thoại, em muốn khoá SIM số này ngay ạ. Họ sẽ hỏi thông tin chủ thuê bao để xác minh. Khoá SIM xong là kẻ lấy máy mất cửa quan trọng nhất.",
      },
      {
        title: "Khoá ứng dụng ngân hàng và ví điện tử",
        detail:
          "Gọi tổng đài từng ngân hàng bạn có tài khoản, yêu cầu khoá dịch vụ ngân hàng số. Nếu bạn còn đăng nhập được trên máy tính thì tự đăng xuất mọi thiết bị và đổi mật khẩu. Đừng bỏ qua ví điện tử và ứng dụng mua sắm có lưu thẻ.",
      },
      {
        title: "Đổi mật khẩu email chính và đăng xuất từ xa",
        detail:
          "Email chính là cửa để lấy lại hoặc chiếm mọi tài khoản khác. Vào email trên máy tính, đổi mật khẩu, rồi tìm mục thiết bị đang đăng nhập và đăng xuất hết. Việc này quan trọng ngang với khoá ngân hàng.",
      },
      {
        title: "Dùng chức năng tìm thiết bị của hãng",
        detail:
          "Máy Android vào trang tìm thiết bị của Google, máy iPhone vào iCloud. Bạn xem được vị trí gần đúng, phát âm thanh, và quan trọng nhất là bật chế độ mất máy để khoá màn hình kèm số liên lạc.",
      },
      {
        title: "Bật chế độ mất máy, đừng vội xoá dữ liệu",
        detail:
          "Chế độ mất máy khoá máy lại nhưng vẫn cho bạn theo dõi vị trí. Xoá dữ liệu từ xa là bước cuối cùng, vì xoá xong là mất luôn khả năng định vị. Chỉ xoá khi bạn đã chắc không lấy lại được máy.",
      },
      {
        title: "Đăng xuất Zalo, Facebook, Messenger từ xa",
        detail:
          "Đăng nhập trên máy tính, vào phần bảo mật, xem danh sách phiên đang hoạt động và thoát hết các thiết bị lạ. Rất nhiều vụ lừa vay tiền bạn bè bắt đầu từ một cái điện thoại bị mất mà chủ nhân quên đăng xuất.",
      },
      {
        title: "Nhắn cho người thân biết bạn mất máy",
        detail:
          "Nhắn vào nhóm gia đình hoặc nhóm bạn thân: mình mất điện thoại, nếu có ai nhắn tin vay tiền từ số hoặc tài khoản của mình thì đừng chuyển, gọi kiểm tra trước. Câu nhắn này chặn được kiểu lừa phổ biến nhất.",
      },
      {
        title: "Ra cửa hàng nhà mạng cấp lại SIM",
        detail:
          "Mang CCCD chính chủ. Nếu SIM đăng ký tên người khác thì phải có người đó đi cùng hoặc uỷ quyền — đây là lý do nên đăng ký SIM chính chủ ngay từ đầu. Có SIM mới là bạn lấy lại được hầu hết tài khoản.",
      },
      {
        title: "Trình báo công an nếu nghi bị lấy cắp",
        detail:
          "Ra công an phường nơi xảy ra việc, khai rõ thời gian, địa điểm, loại máy, số IMEI nếu có. Giữ giấy xác nhận trình báo — nhiều trường hợp cần tờ này khi làm việc với bảo hiểm hoặc nhà mạng.",
      },
      {
        title: "Cảnh giác với tin nhắn dụ đăng nhập iCloud hoặc tài khoản Google",
        detail:
          "Vài ngày sau, bạn có thể nhận tin nhắn báo đã tìm thấy máy kèm một đường dẫn lạ. Đó gần như chắc chắn là lừa đảo để lấy tài khoản của bạn và mở khoá máy. Không bấm vào, không nhập mật khẩu ở bất cứ trang nào đến từ tin nhắn lạ.",
      },
      {
        title: "Sau khi ổn định, dựng lại hàng phòng thủ",
        detail:
          "Máy mới thì đặt khoá màn hình, bật xác thực hai lớp bằng ứng dụng chứ không chỉ bằng tin nhắn, bật sao lưu tự động, và ghi số IMEI của máy ra một chỗ ngoài máy. Lần sau nếu có chuyện, bạn sẽ mất 10 phút thay vì cả tuần.",
      },
    ],
    notes: [
      "Thứ tự rất quan trọng: SIM trước, ngân hàng sau, email tiếp theo. Nhiều người mất tiền vì đi tìm máy trong 30 phút đầu thay vì khoá tài khoản.",
      "ĐỪNG lưu ảnh chụp CCCD, sổ đỏ, hay ảnh thẻ ngân hàng trong thư viện ảnh điện thoại. Đây là kho vàng cho kẻ lấy máy.",
      "Ghi số IMEI của máy ra giấy hoặc lưu ở nơi khác ngay hôm nay. Bấm mã bàn phím quen thuộc hoặc xem trong phần thông tin máy, và cũng có trên vỏ hộp máy.",
      "Đăng ký SIM chính chủ. SIM đứng tên người khác thì lúc cần cấp lại gấp bạn sẽ rất khổ.",
    ],
    faq: [
      {
        q: "Máy em có mật khẩu màn hình rồi, vẫn phải khoá SIM gấp thế à?",
        a: "Vẫn phải. SIM tháo ra lắp sang máy khác là dùng được ngay, không cần biết mật khẩu máy của bạn — và SIM chính là thứ nhận mã OTP.",
      },
      {
        q: "Em nhìn thấy vị trí máy trên bản đồ, có nên tự tới lấy không?",
        a: "Không nên đi một mình tới địa chỉ lạ. Vị trí hiển thị có sai số vài chục mét, và bạn không biết mình sẽ gặp ai. Cung cấp thông tin đó cho công an khi trình báo thì an toàn hơn nhiều.",
      },
      {
        q: "Em không nhớ mật khẩu email, giờ đăng xuất từ xa kiểu gì?",
        a: "Dùng chức năng quên mật khẩu trên máy tính và khôi phục bằng email phụ hoặc câu hỏi bảo mật. Nếu khôi phục lại cần mã gửi về số điện thoại đã mất, hãy làm SIM mới trước rồi quay lại bước này.",
      },
      {
        q: "Xoá dữ liệu từ xa rồi thì có lấy lại ảnh được không?",
        a: "Chỉ khi bạn đã bật sao lưu lên tài khoản đám mây từ trước. Đây là lý do rất thực tế để bật sao lưu tự động ngay hôm nay, đừng đợi tới lúc mất máy.",
      },
    ],
    sources: [],
  },

  {
    slug: "chuyen-khoan-nham-hoac-bi-lua-lam-gi",
    title: "Chuyển khoản nhầm hoặc bị lừa: làm gì trong giờ đầu",
    excerpt:
      "Bấm xong mới thấy sai số tài khoản, hoặc mới hiểu ra mình vừa bị lừa. Vài chục phút đầu quyết định bạn có lấy lại được tiền hay không.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Gọi ngay tổng đài ngân hàng của bạn, đọc mã giao dịch và yêu cầu tra soát, đồng thời nói rõ là bị lừa hay chuyển nhầm — hai trường hợp có quy trình khác nhau. Nếu là lừa đảo, ra công an phường trình báo trong ngày và mang theo mọi bằng chứng. Chụp màn hình mọi thứ trước khi kẻ lừa kịp xoá tin nhắn hoặc khoá tài khoản. Tiền còn nằm trong tài khoản nhận thì cơ hội phong toả cao; tiền đã bị rút ra thì rất khó.",
    prepare: [
      "Mã giao dịch và ảnh chụp biên lai chuyển tiền — ngân hàng cần con số này để tra soát",
      "Ảnh chụp toàn bộ tin nhắn, cuộc gọi, trang web đã dẫn bạn tới việc chuyển tiền",
      "Số tổng đài ngân hàng lấy từ mặt sau thẻ hoặc từ ứng dụng chính thức, không lấy từ tin nhắn lạ",
      "CCCD để đi trình báo và làm đơn tra soát tại quầy",
      "Một người thân đi cùng nếu bạn đang hoảng — người bình tĩnh giúp bạn kể sự việc mạch lạc hơn",
    ],
    steps: [
      {
        title: "Dừng lại, đừng chuyển thêm đồng nào nữa",
        detail:
          "Kịch bản lừa đảo phổ biến là dụ bạn chuyển tiếp lần hai, lần ba với lý do sai cú pháp, cần nộp phí gỡ phong toả. Không có khoản nào đúng cả. Ngắt máy, chặn số, và bắt đầu từ bước dưới.",
      },
      {
        title: "Chụp màn hình mọi bằng chứng ngay lập tức",
        detail:
          "Tin nhắn, số điện thoại gọi tới, tên tài khoản nhận, số tài khoản, đường dẫn trang web, biên lai giao dịch. Kẻ lừa thường thu hồi tin nhắn sau vài phút. Chụp trước rồi tính sau.",
      },
      {
        title: "Gọi tổng đài ngân hàng ngay, đúng số chính thức",
        detail:
          "Lấy số tổng đài từ mặt sau thẻ hoặc trong ứng dụng ngân hàng. Nói thẳng: em vừa chuyển nhầm hoặc em vừa bị lừa chuyển tiền, em muốn tra soát và phong toả giao dịch, mã giao dịch là ... Càng sớm thì khả năng tiền chưa bị rút càng cao.",
      },
      {
        title: "Nói rõ đây là chuyển nhầm hay bị lừa",
        detail:
          "Hai việc khác nhau. Chuyển nhầm là bạn gõ sai số tài khoản, ngân hàng sẽ liên hệ chủ tài khoản nhận đề nghị hoàn trả. Bị lừa là có dấu hiệu tội phạm, ngân hàng sẽ hướng dẫn bạn kết hợp trình báo công an. Nói sai loại là hồ sơ đi sai đường.",
      },
      {
        title: "Ra quầy ngân hàng làm đơn tra soát bằng văn bản",
        detail:
          "Gọi điện là để chặn nhanh, nhưng đơn giấy mới là hồ sơ chính thức. Mang CCCD, biên lai, và bản in bằng chứng. Xin giữ một bản đơn có dấu tiếp nhận và hỏi: bao lâu thì em có kết quả tra soát ạ?",
      },
      {
        title: "Trình báo công an trong ngày nếu bị lừa",
        detail:
          "Ra công an phường nơi bạn ở. Mang bằng chứng đã in. Kể theo trình tự thời gian, tránh kể lộn xộn. Xin giấy tiếp nhận tin báo — ngân hàng thường cần giấy này để xử lý tiếp phần phong toả.",
      },
      {
        title: "Đổi ngay mật khẩu nếu bạn từng nhập vào trang lạ",
        detail:
          "Nếu bạn đã nhập tài khoản, mật khẩu, hoặc mã OTP vào một trang web nào đó, coi như tài khoản đó đã bị lộ. Đổi mật khẩu ngân hàng, email, và bật xác thực hai lớp. Kiểm tra cả các tài khoản dùng chung mật khẩu đó.",
      },
      {
        title: "Kiểm tra xem có khoản vay lạ đứng tên mình không",
        detail:
          "Một số vụ lừa nhắm tới giấy tờ chứ không chỉ tiền. Nếu bạn đã gửi ảnh CCCD hoặc video khuôn mặt cho người lạ, hãy theo dõi kỹ và kiểm tra thông tin tín dụng của mình để phát hiện khoản vay không phải của bạn.",
      },
      {
        title: "Nếu là chuyển nhầm, hãy kiên nhẫn theo quy trình",
        detail:
          "Ngân hàng không được tự ý trừ tiền của người nhận. Họ liên hệ và đề nghị hoàn trả. Người nhận thiện chí thì vài ngày là xong; người nhận cố tình giữ thì bạn có thể phải nhờ tới cơ quan chức năng. Đừng tự nhắn tin đe doạ người nhận.",
      },
      {
        title: "Theo dõi hồ sơ, đừng nộp xong rồi để đó",
        detail:
          "Ghi lại tên cán bộ tiếp nhận, mã hồ sơ, ngày hẹn trả kết quả. Gọi hỏi lại đúng hẹn. Hồ sơ được nhắc thường được xử lý nhanh hơn hồ sơ im lặng.",
      },
      {
        title: "Cảnh giác với dịch vụ lấy lại tiền bị lừa",
        detail:
          "Ngay sau khi bạn bị lừa, sẽ có tài khoản nhắn tin nhận lấy lại tiền với phí trả trước. Đó là lớp lừa thứ hai nhắm vào chính nạn nhân. Không có dịch vụ tư nhân nào lấy lại được tiền cho bạn.",
      },
      {
        title: "Dựng hàng rào cho lần sau",
        detail:
          "Đặt hạn mức chuyển tiền mỗi ngày ở mức vừa đủ dùng, bật thông báo biến động số dư, và tạo thói quen gọi thoại xác nhận trước khi chuyển bất kỳ khoản lớn nào, kể cả khi người nhắn là người thân.",
      },
    ],
    notes: [
      "Thời gian là yếu tố quyết định. Gọi ngân hàng trong 15 phút đầu khác hẳn gọi sau hai ngày.",
      "KHÔNG bao giờ đọc mã OTP cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng, công an, hay nhân viên giao hàng. Không cơ quan nào cần mã OTP của bạn.",
      "Không có ai gọi điện yêu cầu bạn chuyển tiền vào tài khoản để chứng minh trong sạch. Đó luôn là lừa đảo, không có ngoại lệ.",
      "Cảm giác xấu hổ khiến nhiều người im lặng và mất trắng. Bị lừa không phải là ngu — các kịch bản này được dựng rất công phu. Nói ra sớm mới có cơ hội cứu tiền.",
    ],
    faq: [
      {
        q: "Em chuyển nhầm cho người lạ, ngân hàng có tự lấy lại giúp em không?",
        a: "Ngân hàng liên hệ và đề nghị người nhận hoàn trả, nhưng không được tự động trừ tiền tài khoản của người khác. Nếu họ không hợp tác, bạn có thể nhờ cơ quan chức năng can thiệp.",
      },
      {
        q: "Em bị lừa số tiền nhỏ, có đáng đi trình báo không?",
        a: "Đáng. Một mình bạn thì nhỏ, nhưng cùng một tài khoản đó lừa hàng chục người thì hồ sơ mới đủ để xử lý. Trình báo cũng là cách bảo vệ người khác.",
      },
      {
        q: "Người nhận nói sẽ trả nhưng đòi em chuyển phí trước, có nên không?",
        a: "Không. Không có loại phí nào để nhận lại tiền của chính mình. Đây là chiêu lừa tiếp theo. Mọi việc hoàn trả nên đi qua ngân hàng, không đi qua thoả thuận riêng.",
      },
      {
        q: "Em lỡ bấm vào đường dẫn lạ nhưng chưa nhập gì, có sao không?",
        a: "Thường thì bấm vào chưa mất tiền, nhưng vẫn nên kiểm tra máy, không cài ứng dụng ngoài kho chính thức, đổi mật khẩu ngân hàng cho chắc và theo dõi thông báo biến động số dư vài ngày.",
      },
    ],
    sources: [],
  },

  {
    slug: "bat-xac-thuc-hai-lop-cho-tai-khoan",
    title: "Bật xác thực hai lớp cho các tài khoản quan trọng",
    excerpt:
      "Mật khẩu mạnh tới đâu cũng có ngày lộ. Xác thực hai lớp là cái chốt cửa thứ hai, bật một lần dùng mãi mãi, mất chừng 20 phút cho hết mọi tài khoản.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Bật theo thứ tự quan trọng: email chính trước, rồi ngân hàng và ví điện tử, rồi Facebook và Zalo, cuối cùng là các tài khoản mua sắm. Ưu tiên dùng ứng dụng tạo mã như Google Authenticator hoặc Microsoft Authenticator thay vì nhận mã qua tin nhắn, vì tin nhắn có thể bị chiếm khi mất SIM. Sau khi bật, nhớ lưu mã dự phòng ra giấy và cất cùng giấy tờ quan trọng — không lưu trong chính cái điện thoại đó.",
    prepare: [
      "Điện thoại đang dùng và một chỗ ngồi yên 20 phút",
      "Một ứng dụng tạo mã xác thực tải từ kho ứng dụng chính thức",
      "Danh sách tài khoản quan trọng của bạn, viết ra giấy để không bỏ sót",
      "Một tờ giấy để chép mã dự phòng, cất chung với giấy tờ tuỳ thân",
      "Mật khẩu hiện tại của các tài khoản đó — bật xác thực hai lớp thường phải đăng nhập lại",
    ],
    steps: [
      {
        title: "Hiểu nhanh xác thực hai lớp là gì",
        detail:
          "Là cái chốt thứ hai sau mật khẩu. Người lạ có mật khẩu của bạn vẫn không vào được vì thiếu mã đổi mỗi 30 giây trên máy bạn. Nghe kỹ thuật nhưng thao tác chỉ là bật một công tắc và quét một mã vuông.",
      },
      {
        title: "Liệt kê tài khoản theo mức thiệt hại nếu mất",
        detail:
          "Email chính đứng đầu vì nó khôi phục được mọi tài khoản khác. Rồi tới ngân hàng, ví điện tử, mạng xã hội, tài khoản mua sắm có lưu thẻ. Làm theo thứ tự này, nếu hết thời gian thì ít nhất bạn đã khoá những cửa lớn nhất.",
      },
      {
        title: "Cài ứng dụng tạo mã trước",
        detail:
          "Vào kho ứng dụng chính thức của máy, tìm Google Authenticator hoặc Microsoft Authenticator, cài đặt. Đừng tải từ đường dẫn ai gửi cho bạn. Ứng dụng này chạy được cả khi không có mạng.",
      },
      {
        title: "Bắt đầu từ email chính",
        detail:
          "Vào phần cài đặt tài khoản, tìm mục bảo mật rồi tìm dòng có chữ xác minh hai bước hoặc xác thực hai yếu tố. Chọn dùng ứng dụng tạo mã, màn hình sẽ hiện một mã vuông. Mở ứng dụng vừa cài, bấm thêm tài khoản, quét mã vuông đó.",
      },
      {
        title: "Nhập mã sáu số để hoàn tất",
        detail:
          "Ứng dụng hiện dãy sáu số đổi mỗi 30 giây. Gõ dãy đó vào trang web để xác nhận. Nếu báo sai, thường là do bạn gõ chậm quá và mã đã đổi — chờ dãy mới rồi gõ lại nhanh hơn.",
      },
      {
        title: "Lưu mã dự phòng ra giấy ngay lúc đó",
        detail:
          "Sau khi bật, hệ thống cho bạn một loạt mã dự phòng dùng khi mất điện thoại. Đây là bước nhiều người bấm bỏ qua rồi khóc sau. Chép ra giấy, cất cùng giấy tờ tuỳ thân, hoặc chụp lại và cất ở một nơi khác với chiếc điện thoại đó.",
      },
      {
        title: "Làm tiếp với ngân hàng và ví điện tử",
        detail:
          "Ngân hàng thường dùng phương thức riêng của họ như xác thực trong ứng dụng hoặc mã do ứng dụng ngân hàng tạo. Vào mục cài đặt bảo mật trong ứng dụng và chọn phương thức mạnh nhất họ có, thường là xác thực trong ứng dụng chứ không phải tin nhắn.",
      },
      {
        title: "Bật cho Facebook, Zalo và các mạng xã hội",
        detail:
          "Tài khoản mạng xã hội bị chiếm là nguồn của những vụ nhắn tin vay tiền bạn bè. Vào phần bảo mật, bật xác thực hai lớp, chọn ứng dụng tạo mã nếu có. Đồng thời xem lại danh sách thiết bị đang đăng nhập và thoát các thiết bị lạ.",
      },
      {
        title: "Kiểm tra lại số điện thoại và email khôi phục",
        detail:
          "Nhiều tài khoản vẫn còn số điện thoại từ mười năm trước. Cập nhật lại cho đúng số và email bạn đang dùng, nếu không thì lúc cần khôi phục bạn sẽ bị chặn ở đúng bước đó.",
      },
      {
        title: "Thử đăng xuất rồi đăng nhập lại một lần",
        detail:
          "Làm thử ngay khi bạn còn đang rảnh, để chắc chắn quy trình chạy. Phát hiện trục trặc lúc này dễ chịu hơn nhiều so với phát hiện lúc bạn đang gấp.",
      },
      {
        title: "Sao lưu ứng dụng tạo mã hoặc bật đồng bộ",
        detail:
          "Một số ứng dụng tạo mã cho phép đồng bộ lên tài khoản đám mây. Bật lên thì đổi máy đỡ khổ. Nếu bạn không muốn đồng bộ, hãy chắc chắn mình đã giữ mã dự phòng của từng tài khoản.",
      },
      {
        title: "Đặt lịch rà lại mỗi sáu tháng",
        detail:
          "Đặt một lời nhắc định kỳ: kiểm tra thiết bị lạ đang đăng nhập, cập nhật số điện thoại khôi phục, đổi mật khẩu những chỗ quan trọng. Mười phút mỗi nửa năm, rẻ hơn nhiều so với một lần bị chiếm tài khoản.",
      },
    ],
    notes: [
      "Nhận mã qua tin nhắn vẫn tốt hơn không có gì, nhưng yếu hơn ứng dụng tạo mã vì kẻ xấu có thể chiếm số điện thoại của bạn.",
      "KHÔNG đọc mã sáu số cho bất kỳ ai gọi tới, kể cả người xưng là nhân viên hỗ trợ. Mã đó chỉ để bạn tự gõ vào màn hình đăng nhập của mình.",
      "Nếu mất điện thoại mà không có mã dự phòng, việc lấy lại tài khoản có thể mất nhiều ngày và đôi khi không lấy lại được. Đừng bỏ qua bước lưu mã dự phòng.",
      "Đừng dùng chung một mật khẩu cho email và ngân hàng. Xác thực hai lớp không cứu được nếu bạn tự dùng một chìa khoá cho mọi ổ.",
    ],
    faq: [
      {
        q: "Bật xác thực hai lớp thì mỗi lần đăng nhập đều phải nhập mã à, có phiền không?",
        a: "Trên thiết bị quen thuộc bạn có thể chọn ghi nhớ, nên thực tế chỉ phải nhập khi đăng nhập ở máy mới. Đổi lại, người lạ có mật khẩu của bạn cũng không vào được.",
      },
      {
        q: "Em đổi điện thoại thì các mã trong ứng dụng có mất không?",
        a: "Có, nếu bạn không bật đồng bộ hoặc không chuyển sang máy mới trước khi xoá máy cũ. Trước khi đổi máy, hãy dùng chức năng chuyển tài khoản trong ứng dụng tạo mã, hoặc chuẩn bị sẵn mã dự phòng.",
      },
      {
        q: "Em không rành công nghệ, có cách nào đơn giản hơn không?",
        a: "Có: dùng mã gửi qua tin nhắn cho các tài khoản ít quan trọng, và nhờ người thân giúp cài ứng dụng tạo mã cho email và ngân hàng. Làm được hai chỗ đó thôi cũng đã chặn phần lớn rủi ro.",
      },
      {
        q: "Em bật rồi mà giờ mất luôn cả điện thoại lẫn giấy ghi mã dự phòng thì sao?",
        a: "Dùng quy trình khôi phục tài khoản của nhà cung cấp: xác minh bằng email phụ, số điện thoại cũ, hoặc trả lời các câu hỏi về lịch sử tài khoản. Quá trình này lâu và không chắc chắn, nên hãy giữ mã dự phòng ngay từ đầu.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-tau-hoa-lan-dau",
    title: "Đi tàu hoả lần đầu: đặt vé, lên ga, chọn chỗ nằm",
    excerpt:
      "Tàu hoả rẻ hơn máy bay, thoải mái hơn xe khách, nhưng nhiều người chưa đi bao giờ nên ngại. Thật ra dễ hơn bạn tưởng nhiều.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Đặt vé online trên trang bán vé chính thức của ngành đường sắt hoặc ra ga mua trực tiếp, chọn đúng loại chỗ theo quãng đường: ghế ngồi cho chặng dưới bốn năm tiếng, giường nằm cho chặng qua đêm. Đến ga trước giờ tàu chạy khoảng 30 phút, mang theo CCCD trùng với tên trên vé. Trên tàu có nhà vệ sinh, ổ điện và người bán đồ ăn đi qua thường xuyên, nên bạn không cần chuẩn bị quá nhiều.",
    prepare: [
      "CCCD hoặc giấy tờ tuỳ thân trùng tên với vé — nhân viên có kiểm tra",
      "Vé điện tử lưu trong điện thoại và chụp màn hình phòng khi hết mạng",
      "Áo khoác mỏng vì điều hoà trên tàu thường lạnh, nhất là ban đêm",
      "Sạc dự phòng và tai nghe — chuyến dài, ổ điện có thể phải chia nhau",
      "Ít tiền mặt lẻ để mua đồ ăn trên tàu hoặc gửi xe ở ga",
    ],
    steps: [
      {
        title: "Chọn tuyến và giờ tàu phù hợp",
        detail:
          "Tra lịch trên trang bán vé chính thức của đường sắt. Cùng một tuyến có nhiều chuyến, giờ khác nhau và giá khác nhau. Chuyến đêm tiết kiệm được một đêm khách sạn nếu bạn ngủ được trên tàu.",
      },
      {
        title: "Hiểu các loại chỗ trước khi chọn",
        detail:
          "Thường có ghế ngồi cứng, ghế ngồi mềm, giường nằm khoang sáu và giường nằm khoang bốn. Khoang bốn rộng và yên hơn nhưng đắt hơn. Chặng dưới bốn năm tiếng thì ghế ngồi mềm là đủ; chặng qua đêm nên chọn giường nằm.",
      },
      {
        title: "Chọn tầng giường cho đúng ý",
        detail:
          "Giường tầng một dễ lên xuống, tiện đi vệ sinh ban đêm, nhưng hay bị người khác ngồi nhờ ban ngày. Tầng trên yên tĩnh và riêng tư hơn nhưng leo trèo hơi cực và nóng hơn. Người lớn tuổi nên chọn tầng một.",
      },
      {
        title: "Đặt vé online và thanh toán",
        detail:
          "Vào trang bán vé chính thức, nhập ga đi ga đến và ngày, chọn chỗ trên sơ đồ. Nhập họ tên và số giấy tờ đúng như trên CCCD, sai một chữ có thể phải làm lại. Thanh toán xong bạn nhận vé điện tử qua email.",
      },
      {
        title: "Kiểm tra kỹ ga đi và ga đến",
        detail:
          "Nhiều thành phố có hơn một ga, và có ga phụ nằm khá xa trung tâm. Đọc kỹ tên ga trên vé rồi tra đường đi trước, đừng mặc định ga nào cũng ở trung tâm.",
      },
      {
        title: "Đến ga sớm khoảng 30 phút",
        detail:
          "Đủ để tìm cửa vào đúng, qua kiểm soát vé và tìm toa. Không cần đến sớm cả tiếng như đi máy bay. Nếu đi giờ cao điểm hoặc dịp lễ thì cộng thêm 15 phút cho chắc.",
      },
      {
        title: "Tìm đúng toa và đúng số giường",
        detail:
          "Trên vé ghi số toa và số chỗ. Số toa dán ở thành tàu bên ngoài, nhân viên đứng ở cửa mỗi toa. Cứ đưa vé và hỏi: anh chị ơi toa số mấy đi lối này ạ. Đừng lên bừa một toa rồi đi bộ dọc tàu, vướng lắm.",
      },
      {
        title: "Cất hành lý đúng chỗ",
        detail:
          "Túi nhỏ để trên giá phía trên đầu hoặc dưới gầm giường tầng một. Vali lớn để ở khoang đầu toa. Đồ quý giá thì giữ bên người, nhất là khi ngủ — không phải vì tàu nguy hiểm, mà vì tàu dừng nhiều ga và người lên xuống liên tục.",
      },
      {
        title: "Làm quen với tiện nghi trên tàu",
        detail:
          "Nhà vệ sinh ở hai đầu toa, có loại bệt và loại xổm. Nước nóng để pha mì thường có ở đầu toa. Ổ điện thường ít nên đây là lúc sạc dự phòng có giá trị. Người bán đồ ăn đẩy xe qua vài lần mỗi chặng.",
      },
      {
        title: "Cư xử dễ chịu trong khoang",
        detail:
          "Bạn đang ngủ chung phòng với người lạ vài tiếng. Nói chuyện nhỏ tiếng sau 22h, không mở loa ngoài, không ăn đồ nặng mùi, hỏi trước khi ngồi nhờ giường tầng một của người khác. Chuyến đi dễ chịu hay không phần lớn nằm ở đây.",
      },
      {
        title: "Canh giờ xuống ga",
        detail:
          "Đặt báo thức trước giờ tàu tới ga khoảng 30 phút, nhất là khi đi chuyến đêm. Tàu dừng ở mỗi ga chỉ vài phút. Hỏi nhân viên toa để họ gọi bạn dậy cũng được, nhiều người vẫn làm vậy.",
      },
      {
        title: "Ra khỏi ga và tính đường về",
        detail:
          "Trước khi đi, xem sẵn cách rời ga đến: có xe buýt không, đặt xe công nghệ có tiện không, ga có xa trung tâm không. Xuống tàu lúc 4 giờ sáng ở một ga lạ mà chưa biết đi đâu là trải nghiệm không vui.",
      },
    ],
    notes: [
      "Mua vé ở trang chính thức hoặc ra ga. Cẩn thận với các trang bán vé giá rẻ bất thường và các tài khoản mạng xã hội nhận đặt hộ vé — vé giả thì bạn mất cả tiền lẫn chuyến đi.",
      "Dịp lễ Tết vé bán hết rất nhanh, thường mở bán trước cả tháng. Đặt sớm là cách duy nhất chắc chắn có chỗ.",
      "Tên trên vé phải trùng giấy tờ. Vé mua hộ đứng tên người khác có thể bị từ chối cho lên tàu.",
      "Giá vé và quy định đổi trả tuỳ thời điểm và tuỳ tuyến — xem điều kiện vé trước khi bấm thanh toán, vì nhiều loại vé rẻ không được đổi trả.",
    ],
    faq: [
      {
        q: "Đi tàu có phải cân hành lý như máy bay không?",
        a: "Thường thoải mái hơn máy bay nhiều, bạn mang được vali lớn mà không bị cân từng ký. Nhưng vẫn có giới hạn với hàng cồng kềnh — nếu mang đồ đặc biệt thì hỏi ga trước.",
      },
      {
        q: "Em đi một mình, giường nằm chung khoang với người lạ có an toàn không?",
        a: "Nhìn chung là an toàn và rất nhiều người vẫn đi như vậy. Giữ đồ giá trị bên người khi ngủ, khoá vali, và nếu thấy bất an thì báo nhân viên toa để đổi chỗ nếu còn.",
      },
      {
        q: "Mang theo trẻ nhỏ thì nên chọn loại chỗ nào?",
        a: "Khoang bốn giường là dễ chịu nhất vì kín và yên hơn, và nên lấy giường tầng một để bé không leo trèo. Đi chặng dài với trẻ nhỏ thì tàu thường thoải mái hơn xe khách vì bé đi lại được.",
      },
      {
        q: "Tàu trễ giờ có được đền bù không?",
        a: "Chính sách tuỳ hãng và tuỳ mức độ trễ, thường không có đền bù cho trễ ngắn. Nếu bạn có lịch nối chuyến quan trọng, hãy chừa khoảng trống vài tiếng thay vì trông vào việc đền bù.",
      },
    ],
    sources: [],
  },

  {
    slug: "goi-tho-sua-chua-tai-nha-khong-bi-hoi-gia",
    title: "Gọi thợ sửa chữa tại nhà mà không bị hét giá",
    excerpt:
      "Vòi nước rỉ, điều hoà không mát, ổ điện chập. Gọi thợ thì sợ bị vẽ việc, không gọi thì hỏng nặng thêm. Đây là cách hỏi và chốt giá cho yên tâm.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Chốt giá trước khi thợ động vào máy, không phải sau. Gọi ít nhất hai nơi để so, hỏi rõ ba con số: phí đến kiểm tra, giá công sửa, và giá linh kiện nếu phải thay. Yêu cầu thợ gọi báo giá trước khi thay bất cứ thứ gì, và giữ lại linh kiện cũ để đối chiếu. Chụp ảnh hiện trạng trước khi thợ làm, và luôn xin số điện thoại cùng thông tin bảo hành sau khi xong.",
    prepare: [
      "Ảnh và video ngắn về chỗ hỏng, kèm tiếng động lạ nếu có — gửi trước giúp thợ báo giá sát hơn",
      "Tên và mã máy nếu là điều hoà, máy giặt, bình nóng lạnh — thường dán ở mặt bên hoặc phía sau",
      "Ít nhất hai số điện thoại thợ để so giá, ưu tiên người quen giới thiệu",
      "Giấy bảo hành nếu máy còn hạn — còn bảo hành thì gọi hãng chứ đừng gọi thợ ngoài",
      "Tiền mặt hoặc tài khoản chuyển khoản, và một tờ giấy ghi lại giá đã thoả thuận",
    ],
    steps: [
      {
        title: "Kiểm tra vài thứ đơn giản trước khi gọi ai",
        detail:
          "Rất nhiều ca gọi thợ hoá ra là mất điện một pha, aptomat bị nhảy, remote hết pin, hoặc lưới lọc điều hoà bám bụi dày. Kiểm tra vài phút, bạn có thể tiết kiệm cả tiền công lẫn một buổi chờ.",
      },
      {
        title: "Xem máy còn bảo hành không",
        detail:
          "Còn hạn bảo hành thì gọi tổng đài hãng, đừng gọi thợ ngoài — thợ ngoài mở máy ra là mất bảo hành. Tìm số tổng đài trên tem máy hoặc trang chính thức của hãng, không lấy số từ tờ rơi dán ở cột điện.",
      },
      {
        title: "Tìm thợ theo thứ tự ưu tiên",
        detail:
          "Người quen đã dùng và hài lòng là tốt nhất. Sau đó tới nhóm cư dân toà nhà hoặc khu phố, nơi người ta hay chê thẳng nếu thợ làm ẩu. Cuối cùng mới tới quảng cáo trên mạng, và nên chọn nơi có địa chỉ cửa hàng rõ ràng.",
      },
      {
        title: "Mô tả bệnh thật cụ thể khi gọi",
        detail:
          "Thay vì nói điều hoà hỏng, hãy nói máy vẫn chạy nhưng không mát, chạy khoảng 20 phút thì kêu to rồi tự tắt, đã dùng ba năm. Mô tả rõ thì báo giá sát hơn và thợ mang đúng đồ nghề, đỡ phải quay lại lần hai.",
      },
      {
        title: "Hỏi thẳng ba con số ngay trên điện thoại",
        detail:
          "Câu để nguyên văn: anh cho em hỏi phí đến kiểm tra là bao nhiêu, nếu sửa thì tiền công khoảng bao nhiêu, và nếu phải thay linh kiện thì anh báo giá trước cho em nhé. Nghe ba câu trả lời này là bạn đã biết nên gọi tiếp hay gọi nơi khác.",
      },
      {
        title: "Hỏi luôn phí kiểm tra có được trừ vào tiền sửa không",
        detail:
          "Nhiều nơi tính phí đến kiểm tra và trừ vào tiền sửa nếu bạn đồng ý sửa. Hỏi trước cho rõ: nếu em không sửa thì em trả bao nhiêu ạ? Đây là chỗ hay phát sinh cãi vã lúc thanh toán.",
      },
      {
        title: "Gọi hai đến ba nơi rồi so",
        detail:
          "Mất thêm 10 phút gọi điện nhưng bạn có mốc giá. Chênh lệch gấp đôi ba lần cho cùng một bệnh là chuyện thường gặp. Nếu một nơi báo rẻ bất thường, hỏi kỹ xem giá đó đã gồm công và vật tư chưa.",
      },
      {
        title: "Chụp ảnh hiện trạng trước khi thợ làm",
        detail:
          "Chụp chỗ hỏng, chụp cả tường và sàn xung quanh. Nếu sau đó có hỏng thêm hoặc trầy xước, bạn có cơ sở để nói chuyện. Việc này mất 30 giây và tránh được những tranh cãi khó chịu.",
      },
      {
        title: "Yêu cầu báo giá lại trước khi thay bất cứ thứ gì",
        detail:
          "Nói ngay từ đầu: anh cứ kiểm tra xong báo em giá rồi em đồng ý anh mới thay nhé. Chiêu vẽ việc phổ biến nhất là thay xong rồi mới báo giá, lúc đó bạn không còn đường lùi.",
      },
      {
        title: "Giữ lại linh kiện cũ",
        detail:
          "Nói nhẹ nhàng: anh để lại đồ cũ cho em nhé. Việc này khiến chuyện thay đồ khống khó xảy ra hơn hẳn, và bạn cũng nhìn được linh kiện cũ có thật sự hỏng không.",
      },
      {
        title: "Nghiệm thu tại chỗ trước khi trả tiền",
        detail:
          "Bật máy lên chạy thử vài phút ngay trước mặt thợ. Vòi nước thì mở xả và nhìn kỹ chỗ nối. Đừng trả tiền rồi mới thử, vì thợ đi rồi thì gọi lại rất mất công.",
      },
      {
        title: "Xin bảo hành và lưu số thợ",
        detail:
          "Hỏi: anh bảo hành cho em bao lâu ạ? Ghi lại vào tin nhắn hoặc giấy có ghi ngày, nội dung sửa, số tiền. Lưu số thợ kèm ghi chú như thợ điện nước tốt, kèm ngày và giá — lần sau bạn khỏi phải dò lại từ đầu.",
      },
    ],
    notes: [
      "Chốt giá trước khi làm là nguyên tắc quan trọng nhất. Sau khi máy đã bị tháo tung ra thì bạn mất hết thế thương lượng.",
      "Cẩn thận với chiêu bệnh nặng lắm phải thay cả cụm. Nếu số tiền lớn, cứ nói để em hỏi thêm rồi gọi lại, và gọi một thợ khác đến xem.",
      "Với việc điện nước trong nhà thuê, hỏi chủ nhà trước — nhiều khoản sửa chữa thuộc trách nhiệm chủ nhà chứ không phải của bạn.",
      "Việc liên quan tới điện, gas hoặc kết cấu nhà thì đừng tự làm theo video trên mạng. Tiết kiệm vài trăm nghìn mà đổi lấy rủi ro cháy nổ là không đáng.",
    ],
    faq: [
      {
        q: "Thợ tới rồi mới báo giá cao gấp mấy lần lúc gọi điện, em từ chối được không?",
        a: "Được. Bạn trả phí đến kiểm tra như đã thoả thuận rồi mời thợ về. Đây chính là lý do phải hỏi rõ phí kiểm tra ngay từ cuộc gọi đầu tiên.",
      },
      {
        q: "Làm sao biết linh kiện thợ thay là hàng thật?",
        a: "Yêu cầu xem hộp và tem trước khi lắp, giữ lại linh kiện cũ, và xin hoá đơn hoặc giấy bảo hành ghi rõ tên linh kiện. Thợ đàng hoàng không ngại mấy việc này.",
      },
      {
        q: "Sửa xong vài ngày lại hỏng y như cũ thì sao?",
        a: "Gọi lại đúng thợ đó và nhắc thời hạn bảo hành đã thoả thuận. Đây là lúc tin nhắn ghi lại nội dung sửa phát huy tác dụng. Nếu thợ né tránh, đừng gọi lại lần ba — tìm nơi khác và coi như học phí.",
      },
      {
        q: "Em ở một mình, gọi thợ lạ tới nhà có nên không?",
        a: "Nên chọn nơi có địa chỉ rõ ràng, hẹn giờ ban ngày, và nếu được thì nhờ người quen sang ngồi cùng. Cất tiền và giấy tờ khỏi tầm nhìn, và không để thợ đi lại tự do trong nhà khi bạn không có mặt.",
      },
    ],
    sources: [],
  },
];
