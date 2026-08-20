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
];
