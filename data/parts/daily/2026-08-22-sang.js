// Bài đăng ngày 2026-08-22 — khung 7h sáng
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-22";

export const day20260822sang = [
  {
    slug: "phanh-xe-may-keo-rit-thay-ma-phanh",
    title: "Phanh xe máy kêu rít, bóp không ăn: kiểm tra và thay má phanh",
    excerpt:
      "Tiếng rít ken két mỗi lần bóp phanh không phải là xe bạn khó tính. Đó là cái xe đang xin bạn thay má phanh trước khi nó ăn mòn luôn cả đĩa.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Phanh kêu rít, bóp phải bóp sâu mới ăn, hoặc tay phanh chạm sát tay lái — gần như chắc chắn má phanh đã mòn. Ra tiệm sửa xe quen, nói rõ bạn muốn kiểm tra má phanh và mức dầu phanh. Thay một cặp má phanh thường rẻ hơn nhiều so với để mòn tới lúc phải thay cả đĩa hoặc cả cùm phanh. Đừng chần chừ kiểu để cuối tuần rảnh rồi tính, vì phanh là thứ duy nhất trên xe giúp bạn dừng lại.",
    prepare: [
      "Một chỗ sáng và bằng phẳng để dựng chân chống giữa — tối om trong hầm xe thì không nhìn thấy gì",
      "Đèn pin điện thoại, để soi khe má phanh trong cùm phanh đĩa",
      "Biết loại xe mình đang đi là phanh đĩa hay phanh đùm (phanh cơ), vì cách kiểm tra khác nhau",
      "Ít tiền mặt, vì nhiều tiệm nhỏ chưa nhận chuyển khoản trơn tru",
      "Một tiệm quen hoặc ít nhất là tiệm có bảng giá dán ngoài — tránh tiệm dọc đường vắng",
    ],
    steps: [
      {
        title: "Nghe kỹ xem tiếng kêu ở lúc nào",
        detail:
          "Kêu rít khi bóp phanh thì thường là má phanh mòn hoặc bụi bẩn kẹt. Kêu ken két liên tục cả khi không bóp thì tệ hơn, có thể má đã mòn tới đế sắt và đang cà vào đĩa. Trường hợp thứ hai nên dắt bộ tới tiệm gần nhất chứ đừng chạy tiếp cho tiện.",
      },
      {
        title: "Thử độ ăn của phanh ở chỗ vắng",
        detail:
          "Tìm đoạn đường vắng, chạy chậm khoảng hai mươi cây số giờ rồi bóp phanh trước và phanh sau riêng từng cái. Phanh tốt thì xe khựng lại dứt khoát. Nếu phải bóp gần hết hành trình tay phanh mới thấy xe chậm lại, phanh của bạn đang có vấn đề thật.",
      },
      {
        title: "Soi trực tiếp má phanh đĩa",
        detail:
          "Dựng chân chống giữa, soi đèn pin vào khe hở của cùm phanh chỗ ôm lấy đĩa. Bạn sẽ thấy hai miếng má kẹp hai bên. Phần vật liệu ma sát còn mỏng hơn cỡ que tăm thì nên thay. Nhiều má phanh có rãnh chỉ báo mòn — rãnh biến mất là hết tuổi.",
      },
      {
        title: "Với phanh đùm thì nhìn vạch chỉ báo",
        detail:
          "Xe số và nhiều xe tay ga dùng phanh đùm ở bánh sau. Chỗ cần phanh nối vào bánh có một mũi tên nhỏ và vạch chữ nhỏ trên moay-ơ. Bóp hết phanh mà mũi tên vượt qua vạch giới hạn thì bố thắng đã mòn, cần thay.",
      },
      {
        title: "Kiểm tra mức dầu phanh nếu là phanh đĩa",
        detail:
          "Trên tay lái bên phải có một hộp nhỏ, mặt trên có ô kính hoặc vạch LOWER. Dầu xuống dưới vạch đó thì hoặc má phanh đã mòn nhiều, hoặc hệ thống đang rò rỉ. Dầu phanh chuyển màu nâu đen như cà phê cũng là lúc nên thay dầu.",
      },
      {
        title: "Nói đúng ý với thợ ngay từ đầu",
        detail:
          "Vào tiệm, nói gọn: anh kiểm tra giúp em má phanh trước và sau, còn bao nhiêu phần trăm, cái nào cần thay thì báo em giá trước khi làm nhé. Câu cuối rất quan trọng — nó chặn trước tình huống làm xong rồi mới báo một danh sách dài.",
      },
      {
        title: "Hỏi thẳng loại má phanh và giá",
        detail:
          "Có má chính hãng và má thường, chênh nhau khá nhiều tiền. Hỏi: anh cho em xem hộp má phanh trước khi lắp nhé. Thợ đàng hoàng sẽ đưa ngay. Với xe bạn đi hằng ngày, má chính hãng hoặc thương hiệu có tên tuổi đáng để trả thêm.",
      },
      {
        title: "Đứng lại xem lúc tháo bánh",
        detail:
          "Không cần soi mói, chỉ cần đứng gần và nhìn. Bạn sẽ tận mắt thấy má cũ mòn tới đâu — đó là cách học nhanh nhất để lần sau tự biết. Xin giữ lại má cũ cũng được, thợ tử tế không phiền chuyện đó.",
      },
      {
        title: "Yêu cầu vệ sinh cùm phanh và đĩa luôn",
        detail:
          "Bụi má phanh bám trong cùm là thủ phạm gây rít và bó phanh. Nhờ thợ xịt vệ sinh cùm và lau đĩa khi đang tháo ra, thường mất thêm vài phút và rất ít tiền, nhưng phanh êm hẳn.",
      },
      {
        title: "Chạy rà má phanh mới trong vài ngày đầu",
        detail:
          "Má mới cần thời gian ăn khớp với đĩa. Vài chục cây số đầu, bóp phanh sớm và nhẹ hơn thường lệ, đừng phanh gấp trừ khi bắt buộc. Thấy hơi ê tay hoặc ăn chưa đều thì thường vài hôm là hết.",
      },
      {
        title: "Chạy thử lại trước khi rời tiệm",
        detail:
          "Trước khi trả tiền, chạy một vòng quanh khu vực và bóp thử cả hai phanh. Còn tiếng lạ, còn cảm giác cà cà, hoặc bánh quay nặng bất thường thì quay lại nói ngay. Sửa tại chỗ luôn dễ hơn nhiều so với quay lại hôm sau.",
      },
      {
        title: "Ghi lại ngày thay vào ghi chú điện thoại",
        detail:
          "Một dòng ngắn: ngày, số ki-lô-mét trên đồng hồ, thay má trước hay sau, hết bao nhiêu tiền. Lần sau bạn sẽ biết má phanh của mình chạy được bao lâu, và không bị thợ nào bảo thay khi mới đi được vài tháng.",
      },
    ],
    notes: [
      "Phanh mòn tới đế sắt sẽ cào hỏng đĩa, và thay đĩa thường tốn gấp nhiều lần thay má. Nghe tiếng kim loại cà kim loại là đi tiệm ngay hôm đó.",
      "Đừng xịt dầu bôi trơn hay dung dịch chống rỉ lên đĩa phanh cho hết kêu. Đĩa dính dầu là phanh mất ăn hoàn toàn, cực kỳ nguy hiểm.",
      "Thay má phanh thì nên thay cả cặp cùng lúc, không thay một bên, để lực phanh đều hai má.",
      "Xe hay đi mưa, đi đường bụi hoặc chở nặng sẽ mòn má nhanh hơn nhiều. Đừng lấy mốc thời gian của người khác áp vào xe mình.",
    ],
    faq: [
      {
        q: "Bao lâu thì phải thay má phanh một lần?",
        a: "Không có con số đúng cho mọi người, vì nó phụ thuộc bạn đi bao nhiêu, đường thế nào và phanh gấp nhiều hay ít. Cách chắc ăn là mỗi lần thay nhớt thì nhờ thợ liếc qua má phanh luôn — mất vài giây và miễn phí ở hầu hết tiệm.",
      },
      {
        q: "Phanh trước và phanh sau, cái nào mòn nhanh hơn?",
        a: "Thường phanh trước làm việc nặng hơn vì nó gánh phần lớn lực hãm, nên hay mòn trước. Nhưng ai có thói quen chỉ bóp phanh sau thì ngược lại. Cứ kiểm tra cả hai cho chắc.",
      },
      {
        q: "Phanh bị bó, bánh quay rất nặng, có phải do má phanh không?",
        a: "Có thể do bụi kẹt trong cùm, pít-tông phanh bị kẹt, hoặc dây phanh bị siết quá chặt. Đây là việc của thợ, đừng cố tự chỉnh. Bó phanh làm nóng đĩa, hại lốp và tốn xăng thấy rõ.",
      },
      {
        q: "Thay má phanh có tốn nhiều thời gian không?",
        a: "Với xe máy thông thường, tiệm quen thường làm khá nhanh, tính bằng chục phút chứ không phải cả buổi. Tuỳ tiệm và tuỳ có sẵn hàng cho dòng xe của bạn không — gọi hỏi trước một câu là đỡ phải chờ.",
      },
    ],
    sources: [],
  },
  {
    slug: "xe-may-de-lau-khong-di-cat-va-danh-thuc",
    title: "Xe máy để lâu không đi: cất thế nào và đánh thức lại ra sao",
    excerpt:
      "Về quê một tháng, đi công tác nửa năm, hay chỉ là chiếc xe thứ hai nằm góc nhà — cất sai một chút là lúc quay lại xe không nổ, bình chết, xăng hỏng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Trước khi cất lâu ngày: đổ xăng gần đầy bình, bơm căng lốp, rửa sạch và lau khô, dựng chân chống giữa, tháo cọc bình ắc quy nếu để trên một tháng. Khi quay lại, đừng đề máy ngay — kiểm tra lốp, nhớt, phanh và dây điện trước, rồi mới khởi động. Xe để càng lâu thì càng phải kiểm tra kỹ, đặc biệt là phanh và lốp.",
    prepare: [
      "Chỗ để có mái che, tránh mưa nắng trực tiếp — nắng làm mục nhựa và lão hoá lốp rất nhanh",
      "Một tấm bạt phủ thoáng khí, không phải túi ni-lông kín vì hơi ẩm đọng lại gây rỉ sét",
      "Cờ-lê nhỏ để tháo cọc bình ắc quy, thường là cỡ 10",
      "Bơm xe hoặc ít nhất là biết chỗ bơm gần nhà",
      "Ghi chú điện thoại để lưu ngày cất xe và số ki-lô-mét lúc đó",
    ],
    steps: [
      {
        title: "Rửa xe và lau thật khô trước khi cất",
        detail:
          "Bùn đất và muối đường bám lâu ngày sẽ ăn mòn sơn và ốc vít. Rửa xong lau khô, đặc biệt là các khe và gầm. Đừng cất xe khi còn ẩm rồi phủ bạt — đó là công thức làm rỉ sét nhanh nhất.",
      },
      {
        title: "Đổ xăng gần đầy bình",
        detail:
          "Bình vơi để lâu sẽ đọng hơi nước và gây rỉ từ bên trong. Đổ gần đầy giúp giảm khoảng trống chứa hơi ẩm. Nếu định cất trên vài tháng, hỏi tiệm về dung dịch ổn định xăng — không bắt buộc, nhưng có thì tốt.",
      },
      {
        title: "Bơm lốp căng hơn bình thường một chút",
        detail:
          "Xe đứng yên lâu ngày làm lốp bẹp một điểm và có thể để lại vết chai. Bơm căng hơn mức thường ngày một chút giúp giữ dáng lốp. Nhớ xả bớt về đúng áp suất khi bắt đầu đi lại.",
      },
      {
        title: "Dựng chân chống giữa, không chống nghiêng",
        detail:
          "Chống nghiêng lâu ngày dồn hết trọng lượng vào một bên, hại giảm xóc và làm lốp bẹp một phía. Chống giữa giữ xe cân, tốt hơn hẳn. Xe nào không có chân chống giữa thì kê thêm miếng gỗ dưới chân chống nghiêng cho khỏi lún.",
      },
      {
        title: "Tháo cọc âm ắc quy nếu để trên một tháng",
        detail:
          "Xe đứng yên vẫn rò điện chậm qua đồng hồ và khoá điện, đủ để làm chết bình sau vài tuần. Tháo cọc âm — cọc có dấu trừ, thường dây đen — là cách đơn giản nhất. Nhớ chụp ảnh trước khi tháo để lắp lại đúng.",
      },
      {
        title: "Phủ bạt thoáng và kê xe khỏi nền ẩm",
        detail:
          "Bạt chuyên dụng cho xe máy tốt hơn ni-lông kín. Nếu nền nhà hay ẩm, kê hai miếng gỗ mỏng dưới lốp. Nhà có chuột thì bịt tạm ống pô bằng giẻ sạch và ghi giấy nhắc mình gỡ ra trước khi nổ máy.",
      },
      {
        title: "Ghi lại ngày cất và số ki-lô-mét",
        detail:
          "Một dòng trong ghi chú điện thoại. Khi quay lại, bạn sẽ biết chính xác xe nằm bao lâu và lần thay nhớt gần nhất cách đây bao nhiêu — hai thông tin quyết định bạn cần làm gì tiếp theo.",
      },
      {
        title: "Ngày quay lại: đừng đề máy ngay",
        detail:
          "Việc đầu tiên là gỡ bạt, gỡ giẻ bịt pô nếu có, rồi đi một vòng quanh xe. Nhìn vết dầu loang dưới sàn, nhìn lốp có xẹp không, nhìn dây điện có bị chuột gặm không. Năm phút này tiết kiệm cho bạn cả buổi.",
      },
      {
        title: "Bơm lốp, kiểm tra nhớt rồi mới lắp bình",
        detail:
          "Bơm lốp về đúng áp suất. Rút que thăm nhớt xem còn đủ và còn trong không — nhớt để trên sáu tháng thì nên thay dù xe chưa chạy thêm cây nào. Sau đó lắp lại cọc bình, cọc dương trước rồi cọc âm.",
      },
      {
        title: "Khởi động đúng cách sau thời gian dài",
        detail:
          "Bật khoá điện, chờ vài giây cho bơm xăng chạy đủ áp với xe phun xăng điện tử, rồi mới đề. Đề không quá năm giây mỗi lần, nghỉ mươi giây rồi đề tiếp. Đề liên tục sẽ làm nóng củ đề và kiệt bình rất nhanh.",
      },
      {
        title: "Không nổ được thì nghĩ tới bình trước tiên",
        detail:
          "Đề yếu, đèn mờ, tiếng lạch cạch — gần như chắc chắn là ắc quy. Xe số thì đạp cần khởi động là xong. Xe tay ga không có cần đạp thì gọi tiệm mang bình tới hoặc dắt bộ, đừng cố đề tới lúc bình chết hẳn.",
      },
      {
        title: "Chạy thử chậm và thử phanh trước khi đi xa",
        detail:
          "Nổ máy để nhỏ lửa vài phút cho nhớt lên đều, rồi chạy chậm quanh khu vực. Bóp thử cả hai phanh — phanh để lâu hay bị rỉ nhẹ trên đĩa và ăn không đều trong vài lần đầu. Mọi thứ êm rồi mới tính đi xa.",
      },
    ],
    notes: [
      "Xăng để quá lâu trong bình có thể biến chất và làm nghẹt kim phun hoặc bộ chế hoà khí. Xe nằm trên nửa năm mà khó nổ, đừng cố đề mãi — mang ra tiệm cho họ vệ sinh.",
      "Bảo hiểm xe máy bắt buộc và hạn đăng kiểm với ô tô vẫn chạy dù xe nằm im. Tranh thủ kiểm tra hạn ngay hôm bạn lấy xe ra.",
      "Chuột rất thích làm tổ trong pô và trong hộp gió. Thấy dấu vết gặm dây điện thì đừng nổ máy, mang ra thợ kiểm tra để tránh chập cháy.",
      "Cất xe ở bãi gửi dài ngày thì chụp ảnh toàn bộ xe lúc gửi và giữ biên lai. Có chuyện gì còn có cái để nói.",
    ],
    faq: [
      {
        q: "Để xe bao lâu thì cần nổ máy một lần?",
        a: "Nếu tiện, khoảng một hai tuần nổ máy và chạy vài phút thì tốt cho bình và cho các chi tiết bôi trơn. Nhưng nổ máy tại chỗ vài chục giây rồi tắt lại còn hại hơn không nổ, vì máy chưa đủ nóng để bay hết hơi nước.",
      },
      {
        q: "Ắc quy chết hẳn sau khi để lâu thì sạc lại được không?",
        a: "Có thể sạc lại được nếu bình còn tương đối mới và mới chết một hai lần. Bình đã cũ hoặc bị kiệt sâu nhiều lần thì thường sạc xong dùng được ít hôm lại chết. Ra tiệm nhờ đo điện áp trước khi quyết định mua bình mới.",
      },
      {
        q: "Xe tay ga và xe số cất giống nhau không?",
        a: "Về cơ bản là giống. Khác lớn nhất là xe tay ga không có cần đạp khởi động, nên ắc quy chết là bạn kẹt thật. Với xe tay ga cất lâu, việc tháo cọc bình càng đáng làm.",
      },
      {
        q: "Xe máy điện thì cất thế nào?",
        a: "Khác hẳn xăng. Pin không nên để cạn kiệt suốt nhiều tháng — thường nên giữ ở mức trung bình và cắm sạc lại định kỳ theo hướng dẫn của hãng. Đọc kỹ sách hướng dẫn của đúng dòng xe bạn đang dùng, vì mỗi hãng khuyến cáo một kiểu.",
      },
    ],
    sources: [],
  },
  {
    slug: "goi-cuu-ho-xe-giua-duong",
    title: "Gọi cứu hộ xe giữa đường: gọi ai, giá bao nhiêu, tránh bị hét giá",
    excerpt:
      "Xe nằm đường lúc mười giờ đêm, bạn hoảng, và người tới kéo xe biết bạn đang hoảng. Đây là cách gọi cứu hộ mà không phải trả giá của sự hoảng loạn.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Trước hết đẩy xe vào lề an toàn và bật đèn cảnh báo. Gọi theo thứ tự: bảo hiểm hoặc hãng xe nếu bạn có gói cứu hộ, rồi tới tiệm quen, cuối cùng mới là số tìm trên mạng. Luôn hỏi giá trọn gói trước khi họ xuất phát và hỏi rõ giá đó gồm những gì. Chốt được giá qua điện thoại và ghi âm hoặc nhắn tin lại cho chắc là bạn đã tránh được phần lớn rắc rối.",
    prepare: [
      "Điện thoại còn pin — sạc dự phòng trong cốp là món đáng tiền nhất bạn từng mua",
      "Số điện thoại cứu hộ của bảo hiểm hoặc hãng xe, lưu sẵn trong danh bạ từ hôm nay",
      "Áo phản quang hoặc bất cứ thứ gì sáng màu để người khác nhìn thấy bạn ban đêm",
      "Định vị chính xác chỗ mình đang đứng, lấy từ ứng dụng bản đồ",
      "Ít tiền mặt, vì không phải xe cứu hộ nào cũng nhận chuyển khoản lúc nửa đêm",
    ],
    steps: [
      {
        title: "Đưa xe và mình ra khỏi làn xe chạy trước đã",
        detail:
          "Bật đèn cảnh báo, đẩy xe sát lề hoặc lên vỉa hè. Đứng phía trong lề, không đứng phía sau xe. Việc gọi ai chờ được vài phút, nhưng đứng giữa đường thì không chờ được giây nào.",
      },
      {
        title: "Xác định chính xác mình đang ở đâu",
        detail:
          "Mở ứng dụng bản đồ, giữ tay vào chấm xanh để lấy toạ độ, hoặc nhìn cột mốc, biển số nhà, tên quán gần nhất. Người cứu hộ hỏi câu đầu tiên luôn là bạn đang ở đâu — trả lời rõ ngay giúp rút ngắn thời gian và tiền.",
      },
      {
        title: "Kiểm tra nhanh xem có phải sự cố tự xử được không",
        detail:
          "Hết xăng, tuột dây bugi, cầu chì đứt, hoặc chỉ là chống nghiêng chưa gạt lên với vài dòng xe có ngắt điện. Mất hai phút kiểm tra có thể tiết kiệm cả một chuyến cứu hộ. Xe ô tô hết ắc quy thì có thể chỉ cần câu bình.",
      },
      {
        title: "Gọi bảo hiểm hoặc hãng xe trước tiên",
        detail:
          "Nhiều gói bảo hiểm ô tô và nhiều hãng xe có dịch vụ cứu hộ miễn phí trong bán kính nhất định. Gọi số tổng đài in trên giấy chứng nhận bảo hiểm hoặc trong ứng dụng của hãng. Đây gần như luôn là lựa chọn rẻ nhất và an toàn nhất.",
      },
      {
        title: "Không có bảo hiểm thì gọi tiệm quen",
        detail:
          "Tiệm bạn hay sửa xe thường có mối cứu hộ hoặc tự chạy tới được nếu gần. Người quen ít khi hét giá vì họ còn muốn bạn quay lại. Câu nên nói: anh ơi em nằm đường ở chỗ này, anh kéo giúp em về tiệm thì hết bao nhiêu ạ.",
      },
      {
        title: "Tìm trên mạng thì chọn nơi có địa chỉ rõ ràng",
        detail:
          "Ưu tiên nơi có địa chỉ cụ thể, có đánh giá thật, có tên công ty. Tránh số điện thoại đứng trơ trọi trong quảng cáo không có gì kèm theo. Gọi hai ba nơi để so giá nếu tình huống không quá gấp.",
      },
      {
        title: "Hỏi giá trọn gói TRƯỚC khi họ xuất phát",
        detail:
          "Nói rõ: anh cho em giá trọn gói từ chỗ em tới địa chỉ này là bao nhiêu, có phát sinh gì thêm không ạ. Chốt xong thì nhắn tin lại con số đó cho họ. Không hỏi trước là mở đường cho câu quen thuộc lúc tới nơi: đường xa hơn tôi tưởng.",
      },
      {
        title: "Hỏi rõ giá đó gồm những gì",
        detail:
          "Phí kéo, phí công cẩu, phí ban đêm, phí chờ, phí đường cao tốc — mỗi khoản có thể là một cú bất ngờ. Hỏi thẳng: giá anh báo đã gồm hết mọi loại phí chưa ạ. Câu này ngắn nhưng khoá được phần lớn phát sinh.",
      },
      {
        title: "Chọn nơi kéo xe tới, đừng để họ chọn hộ",
        detail:
          "Nói rõ bạn muốn đưa xe về tiệm nào hoặc về nhà. Nhiều xe cứu hộ có tiệm liên kết và sẽ khéo léo dẫn bạn tới đó, nơi báo giá sửa cao hơn. Bạn có quyền quyết định điểm đến, cứ nói dứt khoát.",
      },
      {
        title: "Chụp ảnh xe trước khi cẩu lên",
        detail:
          "Chụp bốn góc xe, chụp đồng hồ công-tơ-mét, chụp biển số xe cứu hộ. Mất một phút. Có va quẹt hay trầy xước trong lúc vận chuyển thì bạn có bằng chứng, không thì cũng chẳng ai thiệt.",
      },
      {
        title: "Đi cùng xe hoặc bám sát tới nơi",
        detail:
          "Ngồi cùng cabin nếu được phép, hoặc đi taxi bám theo. Đừng để xe đi một đằng còn mình đi một nẻo, nhất là ban đêm. Giữ liên lạc bằng điện thoại suốt hành trình.",
      },
      {
        title: "Trả tiền và lấy giấy tờ đàng hoàng",
        detail:
          "Yêu cầu hoá đơn hoặc ít nhất là giấy biên nhận có ghi số tiền, số xe cứu hộ, ngày giờ. Trả đúng số đã chốt. Bị đòi thêm mà không có lý do rõ ràng thì bình tĩnh nhắc lại tin nhắn đã chốt giá — có bằng chứng thì phần lớn tự dừng.",
      },
    ],
    notes: [
      "Trên đường cao tốc, gọi số cứu hộ của tuyến đường đó trước tiên. Tự ý gọi xe cứu hộ ngoài vào cao tốc có thể không được phép, và đứng chờ trên cao tốc rất nguy hiểm.",
      "Đừng bao giờ để hết pin điện thoại khi đi đường dài. Một cục sạc dự phòng trong cốp rẻ hơn một chuyến cứu hộ oan rất nhiều.",
      "Ban đêm và ngày lễ, giá cứu hộ thường cao hơn. Đó là chuyện bình thường, nhưng vẫn phải được báo trước chứ không phải nói lúc tới nơi.",
      "Không giao chìa khoá và giấy tờ xe cho người bạn không rõ danh tính. Nếu buộc phải đưa chìa, hãy chụp ảnh giấy tờ và biển số xe cứu hộ trước.",
    ],
    faq: [
      {
        q: "Giá kéo xe khoảng bao nhiêu là hợp lý?",
        a: "Rất khác nhau tuỳ quãng đường, loại xe, giờ giấc và khu vực — không có mức chuẩn để so. Cách chắc ăn là gọi hai ba nơi hỏi giá cho cùng một quãng đường, rồi tự thấy mức nào là bất thường.",
      },
      {
        q: "Bảo hiểm xe máy bắt buộc có bao gồm cứu hộ không?",
        a: "Thường là không — loại bắt buộc chủ yếu bồi thường cho người thứ ba khi có tai nạn. Cứu hộ thường nằm trong gói bảo hiểm tự nguyện hoặc dịch vụ của hãng xe. Kiểm tra lại hợp đồng của bạn cho chắc.",
      },
      {
        q: "Xe hết xăng giữa đường có cần gọi cứu hộ không?",
        a: "Thường không. Nhờ người quen mang can xăng tới, hoặc đặt một cuốc xe công nghệ tới cây xăng gần nhất là xong. Nhiều đơn vị cứu hộ cũng nhận mang xăng tới với chi phí thấp hơn nhiều so với kéo xe.",
      },
      {
        q: "Nếu người cứu hộ đòi thêm tiền tại chỗ thì làm sao?",
        a: "Bình tĩnh, không cãi nhau giữa đường. Đưa ra tin nhắn đã chốt giá và đề nghị giữ đúng thoả thuận. Nếu tình hình căng thẳng hoặc bạn thấy không an toàn, hãy gọi cho người thân và ở nơi đông người, sáng đèn.",
      },
    ],
    sources: [],
  },
  {
    slug: "va-quet-xe-ngoai-duong-muoi-phut-dau",
    title: "Va quẹt xe ngoài đường: làm gì trong mười phút đầu để không thiệt",
    excerpt:
      "Va quẹt nhẹ thôi mà xử lý sai mười phút đầu là mất tiền oan hoặc dính vào chuyện dài. Đây là thứ tự việc cần làm, theo đúng thứ tự.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Việc đầu tiên luôn là hỏi xem có ai bị thương không, có thì gọi cấp cứu ngay. Sau đó giữ nguyên hiện trường trong tích tắc để chụp ảnh, rồi mới đưa xe vào lề cho khỏi tắc đường. Chụp ảnh toàn cảnh, chụp biển số cả hai xe, chụp chỗ hư hại. Không cãi nhau, không nhận lỗi vội, không đưa tiền vội. Có bảo hiểm thì gọi bảo hiểm trước khi thoả thuận bất cứ điều gì.",
    prepare: [
      "Điện thoại còn pin và còn dung lượng để quay video — dọn bớt ảnh rác từ hôm nay",
      "Giấy tờ xe và bằng lái luôn mang theo người, không để ở nhà",
      "Số điện thoại tổng đài bảo hiểm lưu sẵn trong danh bạ",
      "Số điện thoại của một người thân có thể tới hỗ trợ nếu tình hình căng",
      "Bình tĩnh — thứ khó chuẩn bị nhất nhưng quyết định nhiều nhất",
    ],
    steps: [
      {
        title: "Hỏi ngay: có ai bị thương không",
        detail:
          "Trước cả chuyện xe cộ. Có người ngã, choáng, chảy máu thì gọi cấp cứu và đừng tự ý di chuyển người bị thương nếu nghi chấn thương cột sống. Mọi tranh cãi về xe đều xếp sau chuyện này.",
      },
      {
        title: "Bật đèn cảnh báo và cảnh báo xe phía sau",
        detail:
          "Va quẹt xong mà đứng giữa đường là dễ có va chạm thứ hai, thường nặng hơn cái đầu. Bật đèn cảnh báo, nếu là ô tô thì đặt biển tam giác phía sau ở khoảng cách đủ xa cho xe sau kịp thấy.",
      },
      {
        title: "Chụp ảnh hiện trường trước khi di chuyển xe",
        detail:
          "Chụp từ xa trước để thấy vị trí hai xe so với làn đường và vạch kẻ, rồi mới chụp gần. Quay một đoạn video xoay một vòng cũng rất tốt. Đây là ba mươi giây quan trọng nhất của cả sự việc.",
      },
      {
        title: "Chụp biển số, giấy tờ và chỗ hư hại của cả hai xe",
        detail:
          "Biển số hai xe, chỗ móp xước của cả hai bên, và nếu người kia đồng ý thì chụp bằng lái và giấy tờ xe của họ. Nói bình thường thôi: mình chụp lại cho hai bên cùng có bằng chứng nhé.",
      },
      {
        title: "Đưa xe vào lề nếu va chạm nhẹ",
        detail:
          "Chụp xong thì dọn đường. Va chạm nhẹ, không ai bị thương, hai bên còn đi được thì đứng giữa đường tranh luận chỉ làm mọi người ghét bạn và tăng nguy cơ. Vào lề rồi nói chuyện tiếp.",
      },
      {
        title: "Đừng nhận lỗi ngay, cũng đừng đổ lỗi ngay",
        detail:
          "Câu an toàn: mình cùng xem lại xem thế nào đã. Nhận lỗi vội có thể ảnh hưởng tới việc bồi thường và tới bảo hiểm. Đổ lỗi vội thì đẩy mọi thứ thành cãi vã. Giữ giọng bình thường, đừng lên giọng.",
      },
      {
        title: "Tìm nhân chứng và camera quanh đó",
        detail:
          "Nhìn quanh xem có quán, cửa hàng, nhà dân nào có camera hướng ra đường không. Xin số điện thoại người chứng kiến ngay lúc đó, vì vài phút sau họ đi mất. Camera hành trình của xe khác cũng rất hữu ích, cứ hỏi lịch sự.",
      },
      {
        title: "Gọi bảo hiểm trước khi thoả thuận tiền bạc",
        detail:
          "Nếu bạn có bảo hiểm vật chất xe, gọi tổng đài ngay tại hiện trường. Nhiều hợp đồng yêu cầu báo trong thời gian nhất định và có thể cử người tới ghi nhận. Tự thoả thuận rồi mới báo có khi mất quyền được bồi thường.",
      },
      {
        title: "Cân nhắc gọi công an khi nào",
        detail:
          "Có người bị thương, hư hại lớn, hai bên không thống nhất được, hoặc bên kia có dấu hiệu uống rượu bia — nên gọi lực lượng chức năng. Va quẹt cực nhẹ mà hai bên vui vẻ tự giải quyết thì không nhất thiết.",
      },
      {
        title: "Nếu tự thoả thuận thì viết giấy",
        detail:
          "Một tờ giấy viết tay cũng được: ngày giờ, địa điểm, biển số hai xe, số tiền, và câu hai bên không khiếu nại gì thêm về vụ việc này. Hai bên ký, mỗi người giữ một bản, chụp ảnh lại. Đưa tiền suông rồi hôm sau bị đòi tiếp là chuyện có thật.",
      },
      {
        title: "Đừng để bị vây ép phải trả tiền ngay",
        detail:
          "Bị đông người vây và hối thúc đưa tiền ngay lập tức thì đó là lúc nên gọi công an và người thân, chứ không phải lúc mở ví. Đứng chỗ đông người, sáng đèn, giữ điện thoại trong tay và bình tĩnh.",
      },
      {
        title: "Về nhà rồi kiểm tra lại xe kỹ hơn",
        detail:
          "Nhiều hư hại không lộ ra ngay: cong vành, lệch tay lái, rò nhớt, đèn hỏng. Mang ra tiệm kiểm tra trong một hai ngày sau và giữ lại hoá đơn sửa chữa, phòng khi còn phải làm việc với bảo hiểm.",
      },
    ],
    notes: [
      "Bỏ đi khỏi hiện trường khi có người bị thương là chuyện rất nghiêm trọng về mặt pháp lý. Dù bạn sợ hay bối rối, cũng đừng rời đi.",
      "Camera hành trình là món đầu tư nhỏ nhưng đổi được sự yên tâm lớn, nhất là với người đi ô tô hằng ngày.",
      "Quy định về mức bồi thường, thủ tục và thời hạn báo bảo hiểm khác nhau tuỳ hợp đồng và tuỳ thời điểm. Đọc lại hợp đồng của chính bạn hoặc hỏi thẳng tổng đài, đừng nghe truyền miệng.",
      "Đừng đăng ảnh, biển số hay mặt người khác lên mạng xã hội để nhờ phân xử. Chuyện nhỏ dễ thành chuyện lớn và có thể quay lại làm phiền chính bạn.",
    ],
    faq: [
      {
        q: "Va quẹt rất nhẹ, chỉ xước sơn, có cần làm gì không?",
        a: "Nếu hai bên đều thấy không sao và vui vẻ đi tiếp, chỉ cần chụp vài tấm ảnh cho yên tâm. Vẫn nên chụp, vì thỉnh thoảng có người hôm sau quay lại đòi bồi thường cho vết xước vốn đã có sẵn từ trước.",
      },
      {
        q: "Bên kia bỏ chạy thì làm sao?",
        a: "Cố nhớ hoặc chụp lại biển số, màu xe, đặc điểm người lái. Trình báo công an nơi xảy ra sự việc và cung cấp mọi hình ảnh bạn có. Hỏi các cửa hàng gần đó xin trích xuất camera càng sớm càng tốt, vì nhiều nơi chỉ lưu được ít ngày.",
      },
      {
        q: "Không có bảo hiểm vật chất thì sao?",
        a: "Bạn sẽ phải tự thương lượng bồi thường với bên kia. Càng cần chụp ảnh đầy đủ và viết giấy thoả thuận rõ ràng. Nên xin báo giá sửa từ một gara độc lập để có con số làm căn cứ, thay vì nghe một phía.",
      },
      {
        q: "Có nên đưa tiền ngay tại chỗ cho xong chuyện không?",
        a: "Chỉ nên khi số tiền nhỏ, bạn thấy rõ mình sai, và có giấy thoả thuận ghi rõ hai bên không khiếu nại thêm. Đưa tiền vội mà không giấy tờ gì là cách nhanh nhất để câu chuyện quay lại tìm bạn.",
      },
    ],
    sources: [],
  },
  {
    slug: "xe-may-dien-sac-pin-an-toan",
    title: "Xe máy điện: sạc pin sao cho bền và không gây cháy",
    excerpt:
      "Xe điện tiện và rẻ xăng, nhưng thói quen sạc qua đêm ở chân cầu thang là thứ khiến nhiều gia đình mất tất cả. Sạc đúng không khó, chỉ cần biết vài điều.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Chỉ dùng đúng bộ sạc và đúng loại pin của hãng, sạc ở nơi thoáng, không sạc ở lối thoát hiểm hay chân cầu thang, không phủ vật gì lên bộ sạc. Để pin nguội khoảng nửa tiếng sau khi đi về rồi mới cắm sạc. Rút sạc khi đầy thay vì cắm suốt đêm, và không để pin cạn kiệt rồi để đó nhiều ngày. Thấy pin phồng, nóng bất thường hay có mùi khét thì ngừng dùng ngay và mang tới hãng.",
    prepare: [
      "Bộ sạc chính hãng đi kèm xe — giữ kỹ, đừng mượn sạc của xe khác dòng",
      "Một chỗ sạc thoáng, có nền cứng, xa vật dễ cháy như chăn màn, giấy, xăng dầu",
      "Ổ cắm riêng cắm thẳng vào tường, không dùng chung ổ chia với nhiều thiết bị công suất lớn",
      "Hẹn giờ trên điện thoại để nhớ rút sạc, hoặc ổ cắm hẹn giờ nếu có",
      "Sách hướng dẫn của đúng dòng xe bạn đang dùng — mỗi hãng khuyến cáo khác nhau",
    ],
    steps: [
      {
        title: "Đọc đúng hướng dẫn của dòng xe mình",
        detail:
          "Pin chì và pin lithium chăm sóc khác nhau, và mỗi hãng có ngưỡng riêng. Đừng áp lời khuyên nghe được ở quán trà đá vào xe của bạn. Sách hướng dẫn hoặc trang chủ của hãng là nguồn đáng tin nhất.",
      },
      {
        title: "Để pin nguội trước khi cắm sạc",
        detail:
          "Vừa đi về, pin còn ấm mà cắm sạc ngay sẽ làm pin nóng hơn và nhanh chai. Chờ khoảng nửa tiếng cho nguội. Ngược lại, sạc xong cũng nên để nghỉ một chút rồi hãy chạy.",
      },
      {
        title: "Chọn chỗ sạc như chọn chỗ đun bếp",
        detail:
          "Thoáng, nền cứng, không kín bít, cách xa vật dễ cháy. Tuyệt đối không sạc ở chân cầu thang, hành lang thoát hiểm hay ngay sát cửa ra vào — đó chính là đường bạn cần chạy ra nếu có sự cố.",
      },
      {
        title: "Cắm thẳng vào ổ tường, không qua ổ chia quá tải",
        detail:
          "Bộ sạc kéo dòng lớn và kéo trong nhiều giờ. Ổ chia rẻ tiền cắm chung với ấm siêu tốc hay điều hoà rất dễ nóng chảy. Cắm chắc tay, ổ lỏng gây phát tia lửa điện là một trong những nguyên nhân cháy phổ biến.",
      },
      {
        title: "Không phủ, không kê sạc lên đồ mềm",
        detail:
          "Bộ sạc cần toả nhiệt. Đặt nó lên nền gạch hoặc kệ cứng, không đặt trên thảm, chăn, giấy báo, không lấy hộp úp lên cho gọn. Sờ thấy sạc nóng tới mức không giữ tay được là dấu hiệu cần kiểm tra.",
      },
      {
        title: "Sạc khi pin còn khoảng một phần tư",
        detail:
          "Với pin lithium, sạc đều đặn khi còn khoảng hai lăm tới ba mươi phần trăm thường tốt hơn là để cạn kiệt rồi mới sạc. Cạn sạch nhiều lần là cách nhanh nhất làm pin xuống sức.",
      },
      {
        title: "Rút sạc khi đầy, đừng cắm qua đêm cho tiện",
        detail:
          "Sạc hiện đại có ngắt tự động, nhưng ngắt hỏng là chuyện xảy ra thật, và nó hay xảy ra lúc bạn đang ngủ. Đặt hẹn giờ điện thoại theo thời gian sạc đầy của xe bạn, hoặc dùng ổ cắm hẹn giờ.",
      },
      {
        title: "Không bao giờ dùng sạc lạ hoặc pin không chính hãng",
        detail:
          "Sạc rẻ trôi nổi và pin độ là hai nguyên nhân hàng đầu của các vụ cháy xe điện. Tiết kiệm được ít tiền nhưng đánh cược cả căn nhà thì không đáng. Mất sạc thì mua đúng loại tại đại lý của hãng.",
      },
      {
        title: "Tránh sạc ngay sau khi xe dầm mưa hoặc lội nước",
        detail:
          "Nước và điện là cặp đôi tệ nhất. Xe vừa đi mưa về, để khô ráo phần cổng sạc và khoang pin trước khi cắm. Xe đã lội nước ngập tới khoang pin thì nên mang ra hãng kiểm tra trước, đừng tự sạc.",
      },
      {
        title: "Để ý ba dấu hiệu nguy hiểm của pin",
        detail:
          "Vỏ pin phồng lên, pin nóng bất thường dù chưa sạc lâu, hoặc có mùi khét mùi hắc. Gặp bất kỳ dấu hiệu nào thì rút sạc, đưa xe ra chỗ thoáng xa nhà, và gọi hãng. Đừng cất vào nhà chờ mai tính.",
      },
      {
        title: "Sạc nơi có người, đừng sạc lúc cả nhà đi vắng",
        detail:
          "Sự cố phát hiện sớm ba phút thì chỉ là một bộ sạc hỏng. Phát hiện muộn ba mươi phút thì là chuyện khác hẳn. Sạc vào buổi tối sớm khi mọi người còn thức là an toàn hơn cả.",
      },
      {
        title: "Kiểm tra pin định kỳ ở đại lý",
        detail:
          "Mỗi lần bảo dưỡng xe, nhờ kỹ thuật viên kiểm tra tình trạng pin và cổng sạc. Nói rõ: anh kiểm tra giúp em pin còn khoẻ bao nhiêu phần trăm và cổng sạc có bị rơ không ạ. Phát hiện sớm thì chỉ là thay linh kiện nhỏ.",
      },
    ],
    notes: [
      "Xe máy điện vẫn phải tuân thủ quy định về đăng ký, biển số và độ tuổi người lái tuỳ loại xe. Quy định có thể thay đổi theo thời điểm — hỏi trực tiếp cơ quan chức năng hoặc đại lý cho chắc.",
      "Không tự ý độ pin, độ công suất hay đấu nối thêm thiết bị điện vào xe. Ngoài chuyện mất bảo hành, đó là rủi ro cháy nổ thật sự.",
      "Nhiều chung cư có khu sạc riêng và cấm sạc trong căn hộ hay hành lang. Đọc kỹ nội quy toà nhà, quy định đó có lý do của nó.",
      "Bình chữa cháy loại nhỏ để gần chỗ sạc là món đáng có trong nhà. Nhưng nhớ rằng ưu tiên số một luôn là đưa người ra ngoài, không phải cứu xe.",
    ],
    faq: [
      {
        q: "Sạc qua đêm có thật sự nguy hiểm không?",
        a: "Rủi ro không nằm ở chữ qua đêm, mà ở chỗ nếu có sự cố thì không ai phát hiện kịp. Cộng thêm sạc trong nhà hoặc ở lối đi duy nhất nữa thì mới thành nguy hiểm thật. Sạc ban ngày, nơi thoáng, có người ở nhà là an toàn hơn nhiều.",
      },
      {
        q: "Pin xe điện dùng được bao lâu thì phải thay?",
        a: "Tuỳ loại pin, cách dùng và cách sạc — con số hãng công bố thường tính theo số lần sạc chứ không theo năm. Dấu hiệu dễ thấy nhất là quãng đường đi được mỗi lần sạc ngắn dần rõ rệt so với lúc mới mua.",
      },
      {
        q: "Đi mưa ngập nước thì xe điện có sao không?",
        a: "Xe thường chịu được mưa bình thường, nhưng lội nước ngập sâu tới khoang pin và mô-tơ là chuyện khác. Đã lội ngập thì đừng bật khoá điện, đừng sạc, hãy đẩy xe về và gọi đại lý kiểm tra.",
      },
      {
        q: "Sạc chung với xe khác cùng hãng có được không?",
        a: "Chỉ khi bộ sạc đúng thông số cho dòng xe đó và hãng ghi rõ là dùng chung được. Cùng hãng không có nghĩa là cùng thông số. Không chắc thì hỏi đại lý, đừng cắm thử.",
      },
    ],
    sources: [],
  },
  {
    slug: "giay-to-ghi-sai-ten-ngay-sinh-xin-cai-chinh",
    title: "Giấy tờ ghi sai tên hoặc ngày sinh: xin cải chính thế nào",
    excerpt:
      "Một dấu hỏi thành dấu ngã, một ngày sinh lệch một hôm — nhỏ xíu nhưng đủ để bạn bị trả hồ sơ ở ngân hàng, ở trường, ở phòng công chứng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Gốc của mọi giấy tờ nhân thân là giấy khai sinh, nên sửa phải sửa từ đó. Việc này gọi là cải chính hộ tịch, làm tại uỷ ban nhân dân cấp xã hoặc phường nơi đã đăng ký khai sinh, hoặc nơi bạn đang cư trú tuỳ trường hợp. Bạn cần chứng minh được cái nào là đúng bằng giấy tờ khác. Sửa xong khai sinh rồi mới đi cập nhật lần lượt các giấy tờ khác cho khớp.",
    prepare: [
      "Bản chính hoặc bản sao giấy khai sinh — bản gốc là thứ quan trọng nhất, tìm bằng được",
      "Căn cước công dân của bạn, và của cha mẹ nếu người cần sửa là trẻ em",
      "Mọi giấy tờ đang ghi ĐÚNG thông tin: học bạ, bằng cấp, sổ bảo hiểm, giấy tờ nhà đất",
      "Điện thoại đã cài VNeID, vì nhiều nơi đã cho nộp trước qua Cổng dịch vụ công",
      "Ít tiền mặt cho lệ phí và photo — lệ phí thường không lớn nhưng tuỳ nơi, tuỳ trường hợp",
    ],
    steps: [
      {
        title: "Xác định chính xác cái nào sai, cái nào đúng",
        detail:
          "Trải hết giấy tờ ra bàn và ghi lại: khai sinh ghi gì, căn cước ghi gì, học bạ ghi gì, sổ bảo hiểm ghi gì. Rất nhiều người tưởng khai sinh sai, hoá ra khai sinh đúng còn căn cước mới là cái ghi nhầm. Sửa nhầm chỗ là mất công gấp đôi.",
      },
      {
        title: "Hiểu hai việc khác nhau: cải chính và điều chỉnh",
        detail:
          "Sai sót khi ghi vào sổ hộ tịch thì gọi là cải chính. Còn trường hợp giấy tờ khác ghi lệch so với khai sinh đúng thì bạn phải sửa giấy tờ đó cho khớp khai sinh, chứ không sửa khai sinh. Hỏi cán bộ hộ tịch một câu là rõ ngay.",
      },
      {
        title: "Gom bằng chứng cho thông tin đúng",
        detail:
          "Cán bộ cần căn cứ để sửa, không sửa theo lời nói. Càng nhiều giấy tờ cũ ghi đúng thông tin thì càng nhanh: sổ khám sức khoẻ lúc sinh, học bạ tiểu học, bằng tốt nghiệp, sổ bảo hiểm. Sắp theo thứ tự thời gian cho dễ trình bày.",
      },
      {
        title: "Gọi hỏi trước nơi sẽ nộp",
        detail:
          "Gọi cho uỷ ban phường hoặc xã, nói: em muốn cải chính ngày sinh trong giấy khai sinh, khai sinh của em đăng ký ở phường mình, em cần mang những gì và nộp ở đâu ạ. Một cuộc gọi hai phút tiết kiệm cho bạn cả buổi đi lại.",
      },
      {
        title: "Nộp trước trên Cổng dịch vụ công nếu được",
        detail:
          "Nhiều địa phương đã cho khai trước hồ sơ hộ tịch trực tuyến rồi mới tới nộp bản giấy. Làm vậy đỡ phải ngồi điền tay và có mã hồ sơ để tra tiến độ. Không nộp online được thì cũng không sao, ra trực tiếp vẫn làm bình thường.",
      },
      {
        title: "Điền tờ khai và trình bày ngắn gọn",
        detail:
          "Tờ khai cải chính hộ tịch có sẵn tại bộ phận một cửa. Phần lý do cứ ghi thẳng và ngắn: khai sinh ghi ngày sinh là ngày này, thực tế và các giấy tờ khác đều ghi ngày kia, đề nghị cải chính. Đừng viết dài dòng, cán bộ cần dữ kiện chứ không cần câu chuyện.",
      },
      {
        title: "Nộp hồ sơ và lấy giấy hẹn",
        detail:
          "Giữ giấy hẹn cẩn thận và chụp ảnh lại. Hỏi rõ hai điều: bao lâu có kết quả, và có phải bổ sung gì thêm không. Nếu hồ sơ cần xác minh ở nơi khác thì thời gian có thể lâu hơn — hỏi trước để khỏi sốt ruột.",
      },
      {
        title: "Trường hợp khai sinh đăng ký ở tỉnh khác",
        detail:
          "Bạn có thể phải làm tại nơi đã đăng ký khai sinh, hoặc nơi cư trú hiện tại tuỳ quy định đang áp dụng. Không tự đi được thì làm giấy uỷ quyền cho người thân ở quê làm thay — hỏi cán bộ mẫu uỷ quyền cho đúng.",
      },
      {
        title: "Nhận kết quả và xin thêm bản sao",
        detail:
          "Khi có quyết định cải chính, xin luôn vài bản sao trích lục khai sinh mới. Bạn sẽ cần nộp cho nhiều nơi ở bước sau, và xin một lần rẻ hơn cũng như nhanh hơn nhiều so với quay lại từng lần.",
      },
      {
        title: "Lên danh sách các giấy tờ phải cập nhật theo",
        detail:
          "Viết ra hết: căn cước, hộ chiếu, bằng lái, sổ bảo hiểm xã hội, thẻ bảo hiểm y tế, tài khoản ngân hàng, hồ sơ công ty, học bạ và bằng cấp, giấy tờ nhà đất. Đánh dấu từng cái khi làm xong để không sót.",
      },
      {
        title: "Sửa căn cước trước, rồi mới tới các nơi khác",
        detail:
          "Căn cước là giấy tờ mà ngân hàng, công ty và mọi thủ tục khác đều nhìn vào. Sửa nó trước rồi cầm căn cước mới đi làm những nơi còn lại thì đơn giản hơn nhiều so với làm ngược.",
      },
      {
        title: "Báo cho ngân hàng và công ty",
        detail:
          "Ngân hàng cần bạn tới quầy với căn cước mới để cập nhật, nếu không thì giao dịch lớn có thể bị chặn. Công ty cần cập nhật để hồ sơ bảo hiểm và thuế không bị lệch. Làm sớm, đừng đợi tới lúc cần gấp.",
      },
    ],
    notes: [
      "Thẩm quyền, thành phần hồ sơ và lệ phí có thể khác nhau theo địa phương và theo thời điểm. Coi bài này là bản đồ đường đi, còn chi tiết cụ thể hãy hỏi thẳng cán bộ hộ tịch nơi bạn nộp.",
      "Sai sót do người dân khai nhầm ban đầu và sai sót do cán bộ ghi nhầm có thể được xử lý theo hướng khác nhau. Cứ trình bày trung thực, đừng cố giấu vì nó chỉ làm hồ sơ rối thêm.",
      "Đừng tự sửa bằng bút lên giấy tờ, dù chỉ là thêm một dấu. Giấy tờ bị tẩy xoá coi như hỏng và có thể gây rắc rối lớn hơn nhiều so với cái sai ban đầu.",
      "Trẻ em càng nên sửa sớm. Để tới lúc thi cử, làm hộ chiếu hay nhập học mới phát hiện thì vừa gấp vừa căng thẳng.",
    ],
    faq: [
      {
        q: "Sai một dấu trong tên, ví dụ Nghĩa thành Nghỉa, có phải sửa không?",
        a: "Nên sửa, vì hệ thống dữ liệu so khớp từng ký tự. Một dấu lệch có thể khiến bạn bị từ chối khi làm thủ tục ngân hàng, bảo hiểm hay đất đai. Sửa lúc rảnh dễ hơn nhiều so với sửa lúc đang cần gấp.",
      },
      {
        q: "Mất giấy khai sinh gốc thì có cải chính được không?",
        a: "Được, vì thông tin còn lưu trong sổ hộ tịch tại nơi đăng ký. Bạn xin trích lục khai sinh trước, rồi làm thủ tục cải chính trên cơ sở đó. Nói rõ với cán bộ ngay từ đầu là bản gốc đã mất.",
      },
      {
        q: "Bao lâu thì xong?",
        a: "Trường hợp đơn giản, giấy tờ đầy đủ thì thường khá nhanh. Trường hợp phải xác minh ở địa phương khác hoặc giấy tờ mâu thuẫn nhau thì lâu hơn. Hỏi thẳng cán bộ lúc nộp và ghi lại ngày hẹn.",
      },
      {
        q: "Sửa xong khai sinh thì bằng đại học cũ có phải làm lại không?",
        a: "Thường bạn không làm lại bằng mà xin trường cấp giấy xác nhận hoặc điều chỉnh thông tin trong hồ sơ gốc. Liên hệ phòng đào tạo của trường và mang theo quyết định cải chính cùng khai sinh mới.",
      },
    ],
    sources: [],
  },
  {
    slug: "xin-giay-xac-nhan-tinh-trang-hon-nhan",
    title: "Xin giấy xác nhận tình trạng hôn nhân: đi đâu, mang gì",
    excerpt:
      "Mua nhà, cưới hỏi, làm hồ sơ đi nước ngoài — tự dưng người ta đòi một tờ giấy chứng minh bạn đang độc thân. Đây là cách lấy nó mà không phải đi ba lần.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Giấy này do uỷ ban nhân dân cấp xã hoặc phường nơi bạn thường trú cấp. Mang căn cước và tờ khai theo mẫu, khai trung thực tình trạng hôn nhân của mình. Nếu bạn từng cư trú ở nhiều nơi hoặc từng ly hôn, có thể phải khai và xác minh thêm cho khoảng thời gian đó, nên hồ sơ lâu hơn. Giấy có thời hạn sử dụng nhất định và ghi rõ dùng vào mục đích gì, nên hãy xin đúng lúc sắp cần.",
    prepare: [
      "Căn cước công dân còn hạn — là thứ bắt buộc",
      "Thông tin nơi thường trú hiện tại, và các nơi từng thường trú nếu có chuyển nhiều",
      "Bản án hoặc quyết định ly hôn đã có hiệu lực, nếu bạn từng kết hôn",
      "Giấy chứng tử của vợ hoặc chồng, nếu bạn goá",
      "Biết trước mục đích dùng giấy này để khai cho đúng — kết hôn, mua bán nhà, hay việc khác",
    ],
    steps: [
      {
        title: "Hỏi rõ nơi yêu cầu xem họ cần loại giấy nào",
        detail:
          "Ngân hàng, phòng công chứng và cơ quan nước ngoài có thể yêu cầu khác nhau về nội dung và thời hạn. Hỏi trước: các anh chị cần giấy còn hạn bao lâu, có cần ghi rõ mục đích không ạ. Xin sai loại là phải xin lại từ đầu.",
      },
      {
        title: "Xác định đúng phường xã phải tới",
        detail:
          "Thông thường là nơi bạn đăng ký thường trú, không phải nơi bạn đang ở trọ. Nếu vừa chuyển thường trú, hỏi trước xem nơi mới đã có đủ dữ liệu của bạn chưa hay còn phải xác minh nơi cũ.",
      },
      {
        title: "Gọi điện hỏi trước cho chắc",
        detail:
          "Một câu ngắn: em muốn xin giấy xác nhận tình trạng hôn nhân, em cần mang gì và nộp ở bộ phận nào ạ. Hỏi luôn giờ tiếp dân, vì nhiều nơi chỉ nhận hồ sơ trong khung giờ nhất định.",
      },
      {
        title: "Thử nộp trước trên Cổng dịch vụ công",
        detail:
          "Nhiều địa phương đã cho nộp trực tuyến thủ tục này. Đăng nhập bằng tài khoản VNeID, tìm đúng tên thủ tục, khai và nộp. Có mã hồ sơ thì bạn theo dõi được tiến độ thay vì gọi hỏi.",
      },
      {
        title: "Điền tờ khai thật trung thực",
        detail:
          "Tờ khai hỏi bạn có đang trong quan hệ hôn nhân hay không, và khoảng thời gian tương ứng. Khai không đúng sự thật là chuyện nghiêm trọng, ảnh hưởng tới cả những giao dịch bạn dùng giấy này để thực hiện. Không nhớ rõ mốc thời gian thì nói với cán bộ để được hướng dẫn.",
      },
      {
        title: "Trường hợp từng ở nhiều nơi thì khai đủ",
        detail:
          "Nếu bạn từng thường trú ở nhiều tỉnh, cán bộ có thể cần xác minh tình trạng hôn nhân trong các giai đoạn đó. Chuẩn bị sẵn danh sách địa chỉ và mốc thời gian sẽ giúp hồ sơ chạy nhanh hơn nhiều.",
      },
      {
        title: "Trường hợp đã ly hôn thì mang bản án theo",
        detail:
          "Bản án hoặc quyết định ly hôn của toà, đã có hiệu lực pháp luật, là căn cứ chính. Chưa có bản chính thì xin trích lục tại toà đã giải quyết. Đừng tới tay không rồi kể lại bằng miệng, sẽ phải quay về lấy giấy.",
      },
      {
        title: "Nộp hồ sơ và giữ giấy hẹn",
        detail:
          "Nhiều trường hợp đơn giản có thể trả kết quả khá nhanh, có nơi trả trong ngày. Trường hợp cần xác minh thì lâu hơn. Hỏi rõ ngày hẹn, chụp ảnh giấy hẹn, và hỏi luôn có nhận kết quả qua bưu điện được không.",
      },
      {
        title: "Kiểm tra kỹ giấy ngay khi nhận",
        detail:
          "Soát tên, ngày sinh, số căn cước, nội dung xác nhận và mục đích sử dụng. Sai một chữ là bên nhận có quyền từ chối. Phát hiện sai ngay tại quầy thì sửa dễ, về nhà rồi mới thấy thì mất thêm một chuyến.",
      },
      {
        title: "Xin thêm bản nếu cần nộp nhiều nơi",
        detail:
          "Nếu bạn phải nộp cho cả ngân hàng và phòng công chứng chẳng hạn, hỏi xem có xin được nhiều bản cùng lúc không. Chủ động hỏi, vì mặc định người ta thường chỉ cấp một bản.",
      },
      {
        title: "Dùng sớm trong thời hạn còn hiệu lực",
        detail:
          "Giấy này có giá trị trong khoảng thời gian nhất định kể từ ngày cấp. Xin quá sớm rồi để trong ngăn kéo là dễ hết hạn đúng lúc cần. Canh xin khi hồ sơ chính của bạn đã gần xong.",
      },
    ],
    notes: [
      "Thời hạn giá trị của giấy, thẩm quyền cấp và lệ phí có thể thay đổi theo quy định từng thời kỳ và từng địa phương. Hỏi trực tiếp nơi cấp cho chắc, đừng dựa vào lời kể của bạn bè làm cách đây vài năm.",
      "Giấy thường ghi rõ dùng vào mục đích gì. Xin để kết hôn mà đem đi làm việc khác có thể bị từ chối, nên hãy nói đúng mục đích ngay từ đầu.",
      "Hồ sơ dùng cho cơ quan nước ngoài thường còn phải hợp pháp hoá lãnh sự và dịch công chứng. Hỏi kỹ bên yêu cầu về đúng quy trình họ cần.",
      "Đừng nhờ dịch vụ trôi nổi hứa làm nhanh không cần bạn xuất hiện. Đây là giấy tờ nhân thân, làm sai là rắc rối lớn và rất khó gỡ.",
    ],
    faq: [
      {
        q: "Đang ở trọ nơi khác, có xin ở nơi tạm trú được không?",
        a: "Thông thường thẩm quyền thuộc nơi thường trú, nhưng quy định có thể khác nhau theo từng thời điểm và tình huống cụ thể. Gọi hỏi phường nơi bạn tạm trú trước, họ sẽ nói rõ bạn phải về đâu.",
      },
      {
        q: "Không về quê được thì nhờ người khác làm thay được không?",
        a: "Nhiều trường hợp có thể uỷ quyền cho người thân, nhưng phải có văn bản uỷ quyền hợp lệ. Hỏi phường về mẫu và yêu cầu cụ thể trước khi làm, vì mỗi nơi có thể yêu cầu khác nhau.",
      },
      {
        q: "Giấy này dùng được bao lâu?",
        a: "Có thời hạn chứ không dùng mãi, và thời hạn cụ thể thì tuỳ quy định hiện hành. Cách an toàn là hỏi ngay lúc nhận và ghi ngày hết hạn vào lịch điện thoại.",
      },
      {
        q: "Đã ly hôn nhưng mất bản án thì sao?",
        a: "Liên hệ toà án đã giải quyết vụ việc để xin trích lục hoặc bản sao. Mang căn cước và thông tin về vụ án như năm nào, ai là đương sự để họ tra được nhanh hơn.",
      },
    ],
    sources: [],
  },
  {
    slug: "nguoi-than-qua-doi-giay-to-tuan-dau",
    title: "Người thân qua đời: những giấy tờ phải làm trong tuần đầu",
    excerpt:
      "Giữa lúc đau buồn, không ai muốn nghĩ tới thủ tục. Nhưng vài việc giấy tờ làm sớm sẽ giúp gia đình đỡ vất vả rất nhiều về sau. Đây là danh sách gọn nhất.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Việc quan trọng nhất là đăng ký khai tử tại uỷ ban nhân dân cấp xã hoặc phường, dựa trên giấy báo tử do cơ sở y tế hoặc cơ quan có thẩm quyền cấp. Xin luôn nhiều bản trích lục khai tử vì bạn sẽ cần nộp cho nhiều nơi. Sau đó lần lượt báo bảo hiểm xã hội, ngân hàng, công ty, và giữ nguyên giấy tờ nhà đất cho tới khi làm thủ tục thừa kế. Đừng vội chia hay rút gì trước khi hiểu rõ thủ tục.",
    prepare: [
      "Giấy báo tử hoặc giấy tờ thay thế do cơ sở y tế, cơ quan công an hoặc chính quyền cấp",
      "Căn cước công dân của người đã mất, và của người đi làm thủ tục",
      "Giấy tờ chứng minh quan hệ với người đã mất: khai sinh, giấy kết hôn, sổ hộ khẩu cũ nếu còn",
      "Một cuốn sổ hoặc ghi chú điện thoại để liệt kê từng việc và đánh dấu khi xong",
      "Một người trong nhà đứng ra làm đầu mối, tránh mỗi người làm một kiểu rồi chồng chéo",
    ],
    steps: [
      {
        title: "Lấy giấy báo tử ngay từ nơi có thẩm quyền",
        detail:
          "Mất tại bệnh viện thì bệnh viện cấp. Mất tại nhà thì báo tổ dân phố và trạm y tế hoặc công an phường để được hướng dẫn. Đây là giấy gốc để làm mọi việc sau đó, nên đừng để thất lạc và hãy chụp ảnh lại.",
      },
      {
        title: "Đăng ký khai tử trong thời hạn quy định",
        detail:
          "Ra uỷ ban phường hoặc xã nơi người mất cư trú, mang giấy báo tử và giấy tờ tuỳ thân. Pháp luật có ấn định thời hạn phải đăng ký khai tử, nên làm sớm là tốt nhất. Người thân thích hoặc người có trách nhiệm đều có thể đi làm.",
      },
      {
        title: "Xin nhiều bản trích lục khai tử cùng lúc",
        detail:
          "Bạn sẽ cần nộp bản này cho ngân hàng, bảo hiểm, công ty, và sau này là thủ tục thừa kế. Xin một lần vài bản đỡ hơn rất nhiều so với quay lại từng lần. Cứ nói thẳng với cán bộ là mình cần mấy bản.",
      },
      {
        title: "Giữ lại toàn bộ giấy tờ của người mất",
        detail:
          "Căn cước, sổ bảo hiểm, thẻ ngân hàng, giấy tờ nhà đất, hợp đồng bảo hiểm nhân thọ, giấy tờ xe. Gom vào một chỗ, chụp ảnh từng cái. Đừng ai tự tiện cầm đi mỗi người một thứ, sau này rất khó gom lại.",
      },
      {
        title: "Báo bảo hiểm xã hội để làm chế độ tử tuất",
        detail:
          "Người từng tham gia bảo hiểm xã hội hoặc đang hưởng lương hưu thì thân nhân có thể được hưởng trợ cấp mai táng và tuất theo quy định. Liên hệ cơ quan bảo hiểm xã hội nơi quản lý hồ sơ và hỏi rõ cần giấy gì.",
      },
      {
        title: "Báo công ty nơi người mất đang làm việc",
        detail:
          "Công ty cần biết để chốt sổ bảo hiểm, thanh toán lương và các khoản còn lại. Liên hệ phòng nhân sự, gửi bản trích lục khai tử theo yêu cầu của họ. Hỏi luôn công ty có chế độ hỗ trợ gì cho gia đình không.",
      },
      {
        title: "Báo ngân hàng, nhưng đừng vội rút tiền",
        detail:
          "Tiền trong tài khoản của người mất là di sản, phải chia theo thủ tục thừa kế chứ không phải ai giữ thẻ thì rút. Dùng thẻ và mã PIN của người đã mất để rút là việc không nên làm và có thể gây rắc rối pháp lý cho chính bạn.",
      },
      {
        title: "Kiểm tra xem có hợp đồng bảo hiểm nhân thọ không",
        detail:
          "Nhiều gia đình bỏ sót khoản này. Lục lại hợp đồng giấy, tin nhắn nhắc đóng phí, sao kê ngân hàng có khoản trừ định kỳ. Có thì liên hệ công ty bảo hiểm sớm, vì thủ tục bồi thường thường có thời hạn thông báo.",
      },
      {
        title: "Rà các khoản nợ và các hợp đồng đang chạy",
        detail:
          "Vay ngân hàng, trả góp, thuê nhà, hợp đồng điện nước internet, gói cước điện thoại. Liệt kê hết rồi liên hệ từng nơi. Người thừa kế thường có nghĩa vụ trong phạm vi di sản nhận được, nên cần biết rõ bức tranh trước khi quyết định gì.",
      },
      {
        title: "Chưa vội chia tài sản, hãy hỏi công chứng trước",
        detail:
          "Thủ tục khai nhận hoặc thoả thuận phân chia di sản thường làm tại tổ chức hành nghề công chứng. Tới hỏi trước xem cần giấy gì, ai phải có mặt. Chia miệng trong nhà rồi sau này không sang tên được là chuyện xảy ra rất nhiều.",
      },
      {
        title: "Xác định đầy đủ hàng thừa kế",
        detail:
          "Nếu không có di chúc, việc chia theo pháp luật cần đủ mặt những người thuộc hàng thừa kế. Bỏ sót một người là hồ sơ tắc. Liệt kê thành thật ngay từ đầu, kể cả người ở xa hoặc lâu không liên lạc.",
      },
      {
        title: "Ghi lại tiến độ và giữ mọi biên lai",
        detail:
          "Mỗi việc xong thì ghi ngày và nơi đã nộp. Giữ tất cả giấy hẹn, biên lai, bản photo. Thủ tục thừa kế có thể kéo dài nhiều tháng, và cuốn sổ này sẽ cứu bạn khỏi việc phải nhớ mọi thứ trong lúc mệt mỏi.",
      },
    ],
    notes: [
      "Thời hạn đăng ký khai tử, thành phần hồ sơ và các chế độ tử tuất được quy định cụ thể và có thể thay đổi. Hỏi trực tiếp uỷ ban phường xã và cơ quan bảo hiểm xã hội để có thông tin đúng với thời điểm hiện tại.",
      "Đừng để một mình một người ôm hết. Chia việc trong nhà: một người lo khai tử, một người lo ngân hàng và bảo hiểm, một người giữ giấy tờ.",
      "Cẩn thận với người lạ chủ động gọi tới đề nghị làm giúp thủ tục thừa kế với phí cao. Cứ tới thẳng phường, công chứng hoặc cơ quan bảo hiểm để hỏi, không mất tiền.",
      "Nếu trong nhà có mâu thuẫn về tài sản, hãy đi hỏi luật sư hoặc công chứng viên sớm thay vì tranh cãi. Một buổi tư vấn rẻ hơn nhiều so với một vụ kiện.",
    ],
    faq: [
      {
        q: "Ai được đứng ra đăng ký khai tử?",
        a: "Thường là vợ, chồng, con, cha mẹ hoặc người thân thích khác của người đã mất, hoặc người có trách nhiệm theo quy định. Không có người thân thì tổ chức, cơ sở nơi người đó mất có trách nhiệm thực hiện. Hỏi phường để rõ trường hợp cụ thể của gia đình bạn.",
      },
      {
        q: "Tài khoản ngân hàng của người mất xử lý thế nào?",
        a: "Ngân hàng sẽ phong toả khi biết tin và chỉ chi trả theo thủ tục thừa kế hợp lệ, thường là sau khi có văn bản khai nhận di sản được công chứng. Đừng cố rút bằng thẻ, hãy làm đúng đường để không vướng rắc rối.",
      },
      {
        q: "Không có di chúc thì tài sản chia sao?",
        a: "Sẽ chia theo pháp luật, theo các hàng thừa kế được quy định. Việc này nên làm qua tổ chức hành nghề công chứng để văn bản có giá trị và sau đó mới sang tên được. Trường hợp phức tạp thì hỏi luật sư.",
      },
      {
        q: "Người mất còn nợ thì con cái có phải trả không?",
        a: "Theo nguyên tắc chung, người thừa kế thực hiện nghĩa vụ tài sản trong phạm vi di sản nhận được, chứ không phải lấy tiền riêng của mình ra trả vô hạn. Trường hợp cụ thể thì nên hỏi luật sư trước khi ký bất cứ giấy tờ nào với chủ nợ.",
      },
    ],
    sources: [],
  },
  {
    slug: "bang-lai-xe-sap-het-han-doi-the-nao",
    title: "Bằng lái xe sắp hết hạn: đổi thế nào, để quá hạn thì sao",
    excerpt:
      "Bằng lái không phải cứ có là dùng mãi. Đổi trước hạn thì nhanh gọn, để quá hạn lâu thì có khi phải thi lại từ đầu.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Bằng lái ô tô và một số hạng khác có thời hạn, còn bằng lái mô tô hạng thông thường thì không. Nhìn dòng ghi ngày hết hạn trên thẻ của bạn để biết. Đổi được cả trực tuyến qua Cổng dịch vụ công lẫn trực tiếp tại cơ quan cấp bằng, cần giấy khám sức khoẻ còn hiệu lực. Nên làm trước hạn vài tháng, vì để quá hạn lâu có thể phải thi lại lý thuyết hoặc cả thực hành.",
    prepare: [
      "Bằng lái hiện tại, xem kỹ dòng ngày hết hạn ở mặt trước",
      "Căn cước công dân còn hạn, thông tin phải khớp với bằng lái",
      "Giấy khám sức khoẻ của người lái xe, do cơ sở y tế đủ điều kiện cấp, còn trong thời hạn",
      "Tài khoản VNeID mức 2 nếu muốn làm trực tuyến — không có thì ra làm trực tiếp",
      "Ảnh chụp rõ nét bằng lái và căn cước, để tải lên khi nộp online",
    ],
    steps: [
      {
        title: "Xem bằng của bạn có thời hạn không",
        detail:
          "Nhìn mặt trước thẻ, tìm dòng ghi ngày hết hạn. Bằng lái mô tô hạng thông thường ở Việt Nam thường không có thời hạn, còn bằng ô tô thì có. Không thấy dòng nào ghi hạn thì bạn không cần làm gì cả.",
      },
      {
        title: "Đặt lịch nhắc trước hạn ba tháng",
        detail:
          "Mở lịch điện thoại và đặt nhắc trước ngày hết hạn khoảng ba tháng. Đây là mẹo đơn giản nhất nhưng cứu được rất nhiều người khỏi cảnh phát hiện bằng đã hết hạn khi đang bị dừng xe kiểm tra.",
      },
      {
        title: "Đi khám sức khoẻ trước",
        detail:
          "Tới bệnh viện hoặc phòng khám đủ điều kiện, nói rõ: em cần giấy khám sức khoẻ để đổi giấy phép lái xe hạng này. Giấy khám có thời hạn, nên đừng khám quá sớm rồi để đó. Nhiều nơi đã trả kết quả điện tử, hỏi luôn cho tiện khi nộp online.",
      },
      {
        title: "Chọn cách nộp: trực tuyến hay trực tiếp",
        detail:
          "Đổi bằng lái là một trong những thủ tục được làm trực tuyến khá trơn tru trên Cổng dịch vụ công quốc gia. Ai không quen thao tác thì ra bộ phận một cửa của cơ quan quản lý cấp bằng ở địa phương, cũng nhanh.",
      },
      {
        title: "Nộp online thì chuẩn bị đủ file trước",
        detail:
          "Ảnh bằng lái hai mặt, ảnh căn cước, và giấy khám sức khoẻ điện tử. Chụp trên nền phẳng, đủ sáng, không loá, không cắt mất góc. Ảnh mờ là lý do bị trả hồ sơ phổ biến nhất.",
      },
      {
        title: "Khai đúng thông tin, kiểm tra hai lần",
        detail:
          "Số bằng, hạng bằng, ngày cấp, nơi cấp, số căn cước. Sai một số là hồ sơ bị trả và bạn phải làm lại từ đầu. Đọc lại một lượt trước khi bấm nộp, mất ba mươi giây thôi.",
      },
      {
        title: "Nộp lệ phí và chọn cách nhận",
        detail:
          "Thanh toán trực tuyến ngay trên cổng nếu làm online. Chọn nhận qua bưu điện thì bằng mới được gửi tận nhà, khỏi phải đi lấy. Mức lệ phí và phí chuyển phát tuỳ thời điểm, cổng sẽ hiện rõ trước khi bạn trả.",
      },
      {
        title: "Lưu mã hồ sơ và theo dõi tiến độ",
        detail:
          "Chụp màn hình mã hồ sơ. Vào lại cổng để tra tiến độ thay vì gọi điện hỏi. Thấy trạng thái yêu cầu bổ sung thì xử lý ngay, để lâu hồ sơ có thể bị huỷ.",
      },
      {
        title: "Nhận bằng mới và kiểm tra ngay",
        detail:
          "Soát tên, ngày sinh, hạng bằng, ngày hết hạn mới, và ảnh có đúng bạn không. Sai sót thì báo lại nơi cấp càng sớm càng tốt. Bằng cũ thì giữ lại hoặc nộp theo hướng dẫn, đừng vứt bừa vì trên đó có thông tin cá nhân.",
      },
      {
        title: "Cập nhật vào VNeID nếu có tích hợp",
        detail:
          "Nhiều loại giấy tờ đã hiển thị được trên ứng dụng định danh. Mở VNeID xem bằng mới đã lên chưa. Có bản trên ứng dụng thì tiện, nhưng vẫn nên mang bản cứng theo khi đi đường cho chắc.",
      },
      {
        title: "Nếu đã quá hạn thì hỏi ngay xem phải làm gì",
        detail:
          "Quá hạn một thời gian ngắn thường vẫn đổi được bình thường. Quá hạn lâu thì có thể phải thi lại lý thuyết, lâu hơn nữa thì thi lại cả thực hành. Gọi hỏi cơ quan cấp bằng để biết trường hợp của bạn thuộc mức nào, đừng đoán.",
      },
      {
        title: "Đừng lái xe khi bằng đã hết hạn",
        detail:
          "Bằng hết hạn thì coi như bạn lái xe mà không có giấy phép hợp lệ, và mức xử phạt cho việc này thường không nhẹ. Trong lúc chờ đổi, hãy nhờ người khác lái hoặc đi phương tiện công cộng.",
      },
    ],
    notes: [
      "Thời hạn của từng hạng bằng, mức lệ phí và các mốc phải thi lại đều do quy định pháp luật ấn định và có thể thay đổi. Kiểm tra tại Cổng dịch vụ công hoặc hỏi trực tiếp cơ quan cấp bằng ở địa phương bạn.",
      "Cẩn thận với các trang web trung gian trông giống cổng dịch vụ công và thu phí cao. Chỉ dùng đúng địa chỉ chính thức, gõ trực tiếp vào trình duyệt thay vì bấm quảng cáo.",
      "Không mua bằng lái hoặc nhờ dịch vụ làm nhanh không cần thi. Đó là giấy tờ giả, dùng là vi phạm pháp luật nghiêm trọng chứ không chỉ là bị phạt tiền.",
      "Nếu thông tin trên bằng lái khác với căn cước, hãy sửa cho khớp trước khi đổi. Lệch thông tin là hồ sơ tắc ngay từ bước đầu.",
    ],
    faq: [
      {
        q: "Bằng lái xe máy có phải đổi định kỳ không?",
        a: "Hạng thông thường cho xe máy ở Việt Nam vốn không ghi thời hạn, nên không phải đổi định kỳ. Vẫn nên kiểm tra thẻ của mình xem có dòng ghi hạn nào không, vì quy định qua các thời kỳ có khác nhau.",
      },
      {
        q: "Có thể đổi bằng ở tỉnh khác nơi cấp không?",
        a: "Thủ tục đổi giấy phép lái xe thường không bắt buộc phải về đúng nơi cấp ban đầu, nhất là khi làm trực tuyến. Nhưng để chắc chắn, hãy hỏi cơ quan cấp bằng ở nơi bạn đang sống trước khi đi.",
      },
      {
        q: "Giấy khám sức khoẻ dùng được bao lâu?",
        a: "Có thời hạn nhất định kể từ ngày khám, và cơ quan tiếp nhận sẽ từ chối nếu giấy đã quá hạn. Hỏi rõ ngay tại cơ sở y tế lúc lấy kết quả rồi nộp hồ sơ trong khoảng đó.",
      },
      {
        q: "Bằng bị mờ, bong tróc nhưng chưa hết hạn thì có đổi được không?",
        a: "Được, đây là trường hợp đổi do thẻ hỏng và thủ tục tương tự. Mang thẻ cũ theo để nộp lại. Thẻ hỏng khó đọc cũng có thể gây rắc rối khi kiểm tra trên đường, nên đổi sớm là hợp lý.",
      },
    ],
    sources: [],
  },
  {
    slug: "lam-ho-chieu-cho-con-duoi-14-tuoi",
    title: "Làm hộ chiếu cho con dưới 14 tuổi: khác gì so với người lớn",
    excerpt:
      "Định cho con đi chơi nước ngoài dịp hè, tới lúc làm hộ chiếu mới biết thủ tục cho trẻ không giống người lớn chút nào. Đây là những chỗ hay vướng.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Trẻ dưới mười bốn tuổi chưa có căn cước theo dạng người lớn nên hộ chiếu làm dựa trên giấy khai sinh, và phải do cha, mẹ hoặc người đại diện hợp pháp đứng ra khai và ký. Hộ chiếu cấp cho trẻ nhóm tuổi này thường có thời hạn ngắn hơn của người lớn. Có thể nộp trực tuyến qua Cổng dịch vụ công của cơ quan quản lý xuất nhập cảnh, nhưng vẫn cần đưa trẻ tới chụp ảnh và đối chiếu tuỳ trường hợp.",
    prepare: [
      "Giấy khai sinh của con, bản chính và bản sao",
      "Căn cước công dân của cha hoặc mẹ đứng ra làm thủ tục",
      "Ảnh của con đúng chuẩn hộ chiếu, nền trắng, thấy rõ mặt, không đeo kính",
      "Giấy tờ chứng minh quan hệ nếu người đi làm không phải cha mẹ ruột",
      "Tài khoản VNeID mức 2 của cha hoặc mẹ nếu muốn nộp trực tuyến",
    ],
    steps: [
      {
        title: "Kiểm tra thông tin trên khai sinh có chuẩn không",
        detail:
          "Tên, ngày sinh, tên cha mẹ phải khớp với các giấy tờ khác. Có sai lệch thì phải sửa trước, vì hồ sơ hộ chiếu soi rất kỹ phần này. Phát hiện muộn sát ngày bay là tình huống không ai muốn.",
      },
      {
        title: "Chụp ảnh cho con đúng chuẩn",
        detail:
          "Ra tiệm ảnh nói rõ: chụp ảnh làm hộ chiếu cho bé. Yêu cầu chung là nền trắng, mặt thẳng, thấy rõ hai tai và lông mày, không đeo kính, không đội mũ. Trẻ nhỏ thì tiệm quen chụp trẻ em sẽ đỡ vất vả hơn nhiều.",
      },
      {
        title: "Quyết định làm hộ chiếu riêng cho con",
        detail:
          "Hiện nay trẻ em được cấp hộ chiếu riêng chứ không ghép chung vào hộ chiếu của cha mẹ như cách làm cũ trước đây. Vì vậy mỗi bé cần một bộ hồ sơ riêng, tính cả lệ phí riêng.",
      },
      {
        title: "Chọn nộp trực tuyến hoặc trực tiếp",
        detail:
          "Cơ quan quản lý xuất nhập cảnh có cổng dịch vụ công riêng cho thủ tục hộ chiếu. Nộp trực tuyến giúp đỡ xếp hàng. Không quen thao tác thì ra trực tiếp phòng quản lý xuất nhập cảnh công an tỉnh hoặc thành phố nơi bạn thường trú hoặc tạm trú.",
      },
      {
        title: "Cha hoặc mẹ là người khai và ký",
        detail:
          "Tờ khai của trẻ dưới mười bốn tuổi do cha, mẹ hoặc người đại diện hợp pháp khai và ký. Người ký phải mang căn cước của mình đi kèm. Nếu người đi làm không phải cha mẹ ruột thì phải có giấy tờ chứng minh tư cách đại diện.",
      },
      {
        title: "Hỏi trước xem có phải đưa bé tới không",
        detail:
          "Tuỳ nơi và tuỳ độ tuổi, có thể cần đưa bé tới để đối chiếu hoặc chụp ảnh tại chỗ. Gọi hỏi trước một câu: bé nhà em mấy tuổi, làm hộ chiếu có phải đưa bé tới không ạ. Tránh chở con đi nắng cả buổi mà không cần thiết, hoặc ngược lại.",
      },
      {
        title: "Nộp lệ phí và chọn nhận qua bưu điện",
        detail:
          "Mức lệ phí cho hộ chiếu trẻ em thường khác người lớn và có thể thay đổi theo quy định. Chọn nhận kết quả qua bưu điện là tiện nhất, tránh phải đi lấy lần nữa với con nhỏ trên tay.",
      },
      {
        title: "Giữ mã hồ sơ và theo dõi tiến độ",
        detail:
          "Chụp lại giấy hẹn hoặc mã hồ sơ. Nếu có thông báo cần bổ sung, làm ngay trong ngày. Hộ chiếu thường có mốc thời gian trả kết quả cụ thể — hỏi rõ để tính lịch bay cho khớp.",
      },
      {
        title: "Nhận hộ chiếu và soát từng dòng",
        detail:
          "Kiểm tra tên có dấu, ngày sinh, giới tính, ảnh, và ngày hết hạn. Sai một chi tiết là ra sân bay bị chặn. Phát hiện sai thì liên hệ nơi cấp ngay, đừng đợi tới sát ngày đi.",
      },
      {
        title: "Kiểm tra yêu cầu thị thực của nước sẽ tới",
        detail:
          "Có hộ chiếu chưa có nghĩa là đi được. Nhiều nước yêu cầu hộ chiếu còn hạn tối thiểu một số tháng nhất định tính từ ngày nhập cảnh, và trẻ em có thể cần giấy tờ riêng. Kiểm tra trên trang chính thức của cơ quan đại diện nước đó.",
      },
      {
        title: "Chuẩn bị giấy tờ nếu con đi cùng một người lớn",
        detail:
          "Trường hợp bé đi cùng ông bà hoặc chỉ một trong hai cha mẹ, một số nước và một số hãng bay yêu cầu giấy đồng ý của người còn lại, có thể cần công chứng. Hỏi hãng bay và cơ quan xuất nhập cảnh của nước đến trước chuyến đi.",
      },
      {
        title: "Đặt lịch nhắc trước khi hộ chiếu hết hạn",
        detail:
          "Hộ chiếu trẻ em có thời hạn ngắn hơn của người lớn, nên rất dễ quên. Đặt nhắc trước sáu tháng trong lịch điện thoại ngay hôm nhận được hộ chiếu, coi như xong việc luôn.",
      },
    ],
    notes: [
      "Thời hạn hộ chiếu cho trẻ, mức lệ phí và thành phần hồ sơ đều theo quy định hiện hành và có thể thay đổi. Kiểm tra trên trang chính thức của cơ quan quản lý xuất nhập cảnh hoặc hỏi trực tiếp cho chắc.",
      "Nhiều nước yêu cầu hộ chiếu còn hạn khá dài tính từ ngày nhập cảnh. Hộ chiếu sắp hết hạn thì nên làm mới trước chuyến đi thay vì trông chờ vào may mắn.",
      "Đừng dùng ảnh chụp bằng điện thoại rồi tự cắt nền trắng. Ảnh không đúng chuẩn là lý do bị trả hồ sơ rất thường gặp với trẻ em.",
      "Cẩn thận với dịch vụ hứa làm hộ chiếu siêu tốc với giá cao ngất. Thủ tục chính thống không phức tạp tới mức phải trả nhiều tiền cho trung gian.",
    ],
    faq: [
      {
        q: "Trẻ sơ sinh có làm hộ chiếu được không?",
        a: "Được, chỉ cần đã có giấy khai sinh. Phần khó nhất thường là chụp ảnh đúng chuẩn cho bé quá nhỏ — chọn tiệm ảnh có kinh nghiệm chụp trẻ sơ sinh sẽ nhanh hơn nhiều.",
      },
      {
        q: "Con đã có hộ chiếu, bây giờ đủ mười bốn tuổi thì có phải làm lại không?",
        a: "Hộ chiếu cũ vẫn dùng tới khi hết hạn. Khi làm hộ chiếu mới ở tuổi lớn hơn thì hồ sơ sẽ theo diện của người đã có căn cước, và thời hạn hộ chiếu cũng dài hơn.",
      },
      {
        q: "Cha mẹ ly hôn thì ai được đứng ra làm cho con?",
        a: "Người đang là đại diện hợp pháp của trẻ theo bản án hoặc quyết định của toà. Mang theo giấy tờ chứng minh điều đó khi đi làm. Trường hợp phức tạp thì hỏi trước cơ quan xuất nhập cảnh để tránh đi lại nhiều lần.",
      },
      {
        q: "Nộp trực tuyến rồi có phải ra trực tiếp nữa không?",
        a: "Tuỳ trường hợp và tuỳ địa phương. Nhiều hồ sơ trẻ em vẫn cần đối chiếu bản chính hoặc đưa bé tới. Cứ hỏi trước qua điện thoại để chuẩn bị đúng, đỡ phải đi hai lần với con nhỏ.",
      },
    ],
    sources: [],
  },
  {
    slug: "tu-tra-cic-xem-co-no-xau-khong",
    title: "Tự tra CIC xem mình có nợ xấu không, miễn phí",
    excerpt:
      "Bị ngân hàng từ chối cho vay mà không hiểu vì sao? Rất có thể hồ sơ tín dụng của bạn đang có vết mà bạn không hề biết. Tra được, và tra miễn phí.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Trung tâm Thông tin tín dụng Quốc gia Việt Nam, gọi tắt là CIC, lưu lịch sử vay và trả nợ của bạn tại các tổ chức tín dụng. Bạn có quyền tự tra báo cáo của chính mình qua ứng dụng hoặc trang web chính thức của CIC, đăng ký bằng căn cước và ảnh chân dung. Mỗi năm được xem miễn phí một số lần theo quy định của trung tâm. Thấy sai sót thì khiếu nại với chính ngân hàng đã báo cáo sai, chứ không phải với CIC.",
    prepare: [
      "Căn cước công dân bản gốc, để chụp hai mặt khi đăng ký",
      "Điện thoại có camera rõ, vì bạn phải chụp ảnh chân dung để đối chiếu",
      "Số điện thoại đang dùng, dùng để nhận mã xác thực",
      "Email cá nhân để nhận báo cáo và thông báo",
      "Khoảng mười lăm phút yên tĩnh, vì bước xác thực cần làm cẩn thận",
    ],
    steps: [
      {
        title: "Vào đúng kênh chính thức của CIC",
        detail:
          "Tìm ứng dụng hoặc trang web chính thức của Trung tâm Thông tin tín dụng Quốc gia Việt Nam. Gõ thẳng địa chỉ hoặc tìm trên kho ứng dụng, đừng bấm vào quảng cáo hay đường link ai đó gửi. Có rất nhiều trang giả mạo dịch vụ này để lấy thông tin cá nhân.",
      },
      {
        title: "Đăng ký tài khoản bằng thông tin thật",
        detail:
          "Họ tên, ngày sinh, số căn cước phải khớp đúng với giấy tờ. Lệch một ký tự là hệ thống không tìm thấy dữ liệu của bạn hoặc từ chối duyệt. Nhập xong đọc lại một lượt rồi mới gửi.",
      },
      {
        title: "Chụp căn cước và ảnh chân dung",
        detail:
          "Chụp hai mặt căn cước trên nền phẳng, đủ sáng, không loá, không che góc. Ảnh chân dung thì chụp thẳng, không đeo kính, không đội mũ, nền đơn giản. Đây là bước hay bị trả lại nhất, chịu khó chụp cho đẹp.",
      },
      {
        title: "Chờ duyệt tài khoản",
        detail:
          "Hồ sơ được kiểm tra thủ công nên không duyệt tức thì. Thường mất một khoảng thời gian tính bằng ngày làm việc. Bị từ chối thì hệ thống có báo lý do, phần lớn là do ảnh mờ hoặc thông tin lệch, sửa rồi gửi lại.",
      },
      {
        title: "Đăng nhập và xem báo cáo tín dụng",
        detail:
          "Vào mục xem báo cáo của chính mình. Bạn sẽ thấy danh sách các khoản vay, thẻ tín dụng, số dư và tình trạng trả nợ. Có cả những khoản bạn đã quên từ lâu, ví dụ thẻ tín dụng mở kèm lương rồi bỏ không.",
      },
      {
        title: "Đọc phần nhóm nợ cho kỹ",
        detail:
          "Các khoản vay được xếp nhóm theo mức độ chậm trả. Nhóm một là đang trả bình thường, các nhóm sau tương ứng với mức chậm tăng dần. Từ nhóm ba trở đi thường bị coi là nợ xấu và ảnh hưởng nặng tới khả năng vay sau này.",
      },
      {
        title: "Rà từng dòng xem có khoản nào lạ không",
        detail:
          "Khoản vay bạn chưa từng ký, thẻ tín dụng bạn chưa từng mở, công ty tài chính bạn chưa từng nghe tên. Nếu có, rất có thể ai đó đã dùng thông tin của bạn để vay. Đây là lý do quan trọng nhất khiến bạn nên tra định kỳ.",
      },
      {
        title: "Ghi lại các khoản còn đang mở",
        detail:
          "Liệt kê ra giấy hoặc ghi chú điện thoại: ngân hàng nào, dư nợ bao nhiêu, tình trạng ra sao. Nhiều người ngạc nhiên khi thấy mình còn một thẻ tín dụng chưa đóng và vẫn bị tính phí thường niên âm thầm.",
      },
      {
        title: "Thấy sai thì khiếu nại với ngân hàng đã báo cáo",
        detail:
          "CIC chỉ tổng hợp dữ liệu do các tổ chức tín dụng gửi lên. Muốn sửa thì phải làm việc với chính ngân hàng hoặc công ty tài chính có tên trong dòng bị sai. Liên hệ tổng đài của họ, gửi văn bản khiếu nại và giữ lại mọi bằng chứng.",
      },
      {
        title: "Trả dứt điểm khoản đang chậm nếu có",
        detail:
          "Nếu bạn thật sự đang chậm trả, cách duy nhất là trả cho xong. Gọi cho tổ chức tín dụng, xin bản kê chi tiết còn nợ bao nhiêu, trả rồi xin giấy xác nhận đã tất toán. Giữ giấy này, nó rất có ích về sau.",
      },
      {
        title: "Hiểu rằng lịch sử cần thời gian để cải thiện",
        detail:
          "Trả xong không có nghĩa vết xấu biến mất ngay. Dữ liệu lịch sử được lưu và tham chiếu trong một khoảng thời gian theo quy định. Cách tốt nhất là từ đó về sau trả đúng hạn đều đặn để phần lịch sử gần nhất đẹp lên.",
      },
      {
        title: "Đặt lịch tra lại mỗi năm một lần",
        detail:
          "Đặt nhắc trong lịch điện thoại. Tra định kỳ giúp bạn phát hiện sớm khoản vay giả mạo và biết trước mình có đủ điều kiện vay hay không, thay vì tới lúc cần mua nhà mới ngã ngửa.",
      },
    ],
    notes: [
      "Số lần tra miễn phí trong năm, cách đăng ký và giao diện của CIC có thể thay đổi. Xem hướng dẫn trên kênh chính thức của trung tâm để biết chính xác tại thời điểm bạn làm.",
      "Không nộp tiền cho bất kỳ ai hứa xoá nợ xấu trên CIC. Không ai có thể xoá lịch sử tín dụng bằng cách trả phí — đó là lừa đảo, và bạn còn mất thêm thông tin cá nhân.",
      "Đừng cung cấp ảnh căn cước và ảnh chân dung cho các trang tra cứu không chính thức. Đó chính là bộ hồ sơ để kẻ gian mở tài khoản hoặc vay tiền dưới tên bạn.",
      "Bảo lãnh hoặc đứng tên vay hộ người khác cũng ghi vào lịch sử của bạn. Người kia chậm trả thì hồ sơ của bạn xấu theo — cân nhắc kỹ trước khi ký hộ ai bất cứ thứ gì.",
    ],
    faq: [
      {
        q: "Bị nợ xấu thì bao lâu mới vay lại được?",
        a: "Tuỳ mức độ và tuỳ chính sách từng ngân hàng, không có mốc chung cho tất cả. Điều bạn kiểm soát được là trả dứt điểm khoản cũ và giữ lịch sử trả nợ sạch sẽ từ đó trở đi. Hỏi thẳng ngân hàng bạn định vay xem họ xét lịch sử bao lâu gần nhất.",
      },
      {
        q: "Trả chậm thẻ tín dụng vài ngày có bị ghi nợ xấu không?",
        a: "Chậm vài ngày thường chưa rơi vào nhóm nợ xấu, nhưng vẫn có thể bị ghi nhận là chậm trả và bị tính lãi phạt. Cách an toàn là đặt thanh toán tự động hoặc nhắc lịch trước ngày đến hạn vài hôm.",
      },
      {
        q: "Không vay bao giờ thì CIC có dữ liệu của tôi không?",
        a: "Nếu bạn chưa từng vay hay mở thẻ tín dụng thì báo cáo sẽ trống hoặc rất ít thông tin. Điều đó không xấu, nhưng cũng có nghĩa ngân hàng chưa có căn cứ nào để đánh giá bạn khi xét duyệt.",
      },
      {
        q: "Phát hiện có khoản vay lạ đứng tên mình thì làm gì?",
        a: "Liên hệ ngay tổ chức tín dụng có tên trong báo cáo, yêu cầu cung cấp hồ sơ vay và khẳng định bạn không ký. Đồng thời trình báo công an và giữ lại mọi giấy tờ. Làm càng sớm càng dễ chứng minh.",
      },
    ],
    sources: [],
  },
  {
    slug: "bi-goi-doi-no-du-khong-he-vay",
    title: "Bị gọi đòi nợ dù không hề vay: xử lý sao cho dứt",
    excerpt:
      "Điện thoại réo cả ngày, người lạ chửi bới, có khi còn nhắn cho cả sếp và người thân của bạn. Bạn không vay đồng nào. Đây là cách xử lý cho dứt điểm.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Đừng hoảng và tuyệt đối đừng trả tiền để cho yên chuyện. Xác định xem bạn bị nhầm là người tham chiếu của ai đó, hay bị kẻ gian dùng thông tin để vay thật. Ghi âm và chụp màn hình mọi cuộc gọi, tin nhắn. Tra báo cáo CIC để biết có khoản vay nào đứng tên mình không. Nếu bị đe doạ hoặc bôi nhọ, trình báo công an với đầy đủ bằng chứng. Không bao giờ cung cấp thêm thông tin cá nhân cho người gọi.",
    prepare: [
      "Bật chức năng ghi âm cuộc gọi trên điện thoại nếu máy bạn có",
      "Một thư mục trong máy để lưu ảnh chụp màn hình tin nhắn và cuộc gọi",
      "Danh sách số điện thoại đã gọi tới, ghi lại ngày giờ",
      "Tài khoản tra cứu CIC để kiểm tra có khoản vay nào đứng tên mình không",
      "Bình tĩnh — người gọi sống bằng việc làm bạn hoảng loạn",
    ],
    steps: [
      {
        title: "Nghe một lần để biết chuyện gì đang xảy ra",
        detail:
          "Đừng chặn ngay lập tức. Nghe một cuộc, hỏi rõ: anh chị gọi từ đơn vị nào, khoản vay của ai, số hợp đồng bao nhiêu, tôi liên quan thế nào. Bật ghi âm. Thông tin từ cuộc gọi này quyết định bạn thuộc trường hợp nào.",
      },
      {
        title: "Phân biệt hai tình huống hoàn toàn khác nhau",
        detail:
          "Một là ai đó vay tiền và ghi số bạn làm người tham chiếu, thường là người quen cũ hoặc đồng nghiệp. Hai là kẻ gian dùng thông tin cá nhân của bạn để vay thật. Cách xử lý của hai tình huống khác hẳn nhau.",
      },
      {
        title: "Tuyên bố dứt khoát một lần",
        detail:
          "Nói rõ và bình tĩnh: tôi không vay khoản này, tôi không có nghĩa vụ trả, và tôi không đồng ý cho các anh chị gọi cho tôi nữa. Nói một lần, ghi âm lại, rồi thôi. Cãi nhau dài dòng chỉ khiến họ gọi thêm.",
      },
      {
        title: "Tuyệt đối không cung cấp thêm thông tin",
        detail:
          "Không đọc số căn cước, không xác nhận địa chỉ, không nói bạn làm ở đâu, không gửi ảnh giấy tờ. Kể cả khi họ nói cần để kiểm tra và gỡ tên bạn khỏi hệ thống. Đó là cách họ lấy thêm dữ liệu về bạn.",
      },
      {
        title: "Không trả một đồng nào cho yên chuyện",
        detail:
          "Trả tiền cho khoản mình không vay là thừa nhận có liên quan, và nó gần như luôn dẫn tới việc bị đòi tiếp. Dù số tiền nhỏ tới đâu, câu trả lời vẫn là không.",
      },
      {
        title: "Lưu bằng chứng có hệ thống",
        detail:
          "Chụp màn hình nhật ký cuộc gọi, tin nhắn, bài đăng bôi nhọ nếu có. Đặt tên file theo ngày. Ghi âm giữ nguyên, đừng cắt gọt. Bộ bằng chứng này là thứ quyết định khi bạn trình báo hoặc làm việc với công ty tài chính.",
      },
      {
        title: "Tra CIC xem có khoản vay nào đứng tên mình",
        detail:
          "Đăng ký tra cứu báo cáo tín dụng của chính bạn. Không có khoản nào lạ thì gần như chắc chắn bạn chỉ bị ghi làm người tham chiếu. Có khoản lạ thì tình huống nghiêm trọng hơn nhiều và cần làm ngay bước tiếp theo.",
      },
      {
        title: "Nếu có khoản vay giả mạo, làm việc với chính tổ chức đó",
        detail:
          "Gọi tổng đài chính thức của ngân hàng hoặc công ty tài chính, không gọi số của người đòi nợ. Yêu cầu cung cấp hồ sơ vay, khẳng định chữ ký và ảnh không phải của bạn, gửi văn bản khiếu nại và giữ biên nhận.",
      },
      {
        title: "Trình báo công an khi bị đe doạ hoặc bôi nhọ",
        detail:
          "Bị chửi bới, đe doạ, ghép ảnh đăng lên mạng, hoặc gọi quấy rối người thân và nơi làm việc — đó là những hành vi có thể bị xử lý theo pháp luật. Mang toàn bộ bằng chứng ra công an nơi bạn cư trú và làm đơn trình báo.",
      },
      {
        title: "Báo trước cho người thân và công ty",
        detail:
          "Nhắn ngắn gọn cho gia đình, bạn bè thân và quản lý trực tiếp: có nhóm đòi nợ nhầm số của mình, họ có thể gọi làm phiền, mọi người bỏ qua và đừng cung cấp thông tin gì. Chủ động nói trước đỡ ngượng hơn nhiều so với để họ nghe từ người lạ.",
      },
      {
        title: "Chặn số nhưng đừng đổi số vội",
        detail:
          "Chặn từng số sau khi đã ghi nhận bằng chứng. Đừng đổi số điện thoại ngay, vì số của bạn gắn với ngân hàng, ứng dụng và công việc. Phần lớn trường hợp lắng xuống sau một thời gian khi họ thấy bạn không phản ứng.",
      },
      {
        title: "Nếu người quen ghi số bạn thì nói thẳng với họ",
        detail:
          "Tìm ra ai đã ghi số bạn làm tham chiếu và yêu cầu họ liên hệ đơn vị cho vay để gỡ tên bạn ra. Nói rõ và dứt khoát. Đây thường là cách nhanh nhất để chấm dứt, vì nguồn gốc vấn đề nằm ở đó.",
      },
    ],
    notes: [
      "Không bao giờ đọc mã OTP cho bất kỳ ai, kể cả người tự xưng là nhân viên ngân hàng, công an hay đang giúp bạn gỡ rối. Không có tổ chức chính thống nào cần mã OTP của bạn.",
      "Cẩn thận với dịch vụ nhận xoá nợ hoặc chặn đòi nợ thu phí. Họ thường chỉ lấy tiền và thông tin của bạn rồi biến mất.",
      "Đừng chuyển cuộc trò chuyện sang các ứng dụng nhắn tin lạ theo yêu cầu của người gọi. Giữ mọi liên lạc trên kênh có thể lưu bằng chứng.",
      "Nếu công việc của bạn bị ảnh hưởng vì bị bôi nhọ, giữ lại bằng chứng thiệt hại. Nó có ích khi bạn cần cơ quan chức năng vào cuộc hoặc khi khiếu nại chính thức.",
    ],
    faq: [
      {
        q: "Tại sao họ có số của tôi khi tôi chưa từng vay?",
        a: "Thường vì ai đó khai số bạn làm người tham chiếu khi vay, hoặc dữ liệu cá nhân bị rò rỉ và mua bán. Cả hai đều không phải lỗi của bạn và cũng không tạo ra nghĩa vụ trả nợ nào cho bạn.",
      },
      {
        q: "Họ doạ khởi kiện tôi thì có đáng lo không?",
        a: "Bạn không ký hợp đồng thì không có nghĩa vụ trả. Doạ kiện là chiêu gây sức ép rất quen thuộc. Nếu thật sự có vụ kiện, bạn sẽ nhận giấy triệu tập chính thức từ toà chứ không phải qua điện thoại hay tin nhắn.",
      },
      {
        q: "Có nên đăng lên mạng xã hội để cảnh báo không?",
        a: "Cẩn thận. Đăng thông tin và hình ảnh người khác có thể khiến bạn vướng rắc rối ngược. Cứ gửi bằng chứng cho công an và ngân hàng liên quan, đó là kênh giải quyết đúng và an toàn cho bạn.",
      },
      {
        q: "Bao lâu thì họ ngừng gọi?",
        a: "Không có mốc chắc chắn. Nhưng khi bạn không phản ứng, không cung cấp thông tin và không trả tiền, số cuộc gọi thường giảm dần. Trường hợp bị quấy rối kéo dài thì trình báo là bước cần làm, đừng chịu đựng mãi.",
      },
    ],
    sources: [],
  },
  {
    slug: "dang-ky-nguoi-phu-thuoc-tren-etax-mobile",
    title: "Tự đăng ký người phụ thuộc trên eTax Mobile khi không có công ty làm hộ",
    excerpt:
      "Nuôi con nhỏ, nuôi cha mẹ già mà không đăng ký người phụ thuộc thì mỗi tháng bạn đang nộp thuế nhiều hơn mức phải nộp. Đăng ký một lần, dùng nhiều năm.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Người nộp thuế thu nhập cá nhân được giảm trừ cho bản thân và cho mỗi người phụ thuộc đủ điều kiện, nghĩa là phần thu nhập chịu thuế giảm xuống và bạn nộp ít thuế hơn. Con dưới mười tám tuổi thường đủ điều kiện đơn giản nhất. Cha mẹ, vợ chồng, anh chị em thì phải không có thu nhập hoặc thu nhập rất thấp và bạn phải đang trực tiếp nuôi dưỡng. Đăng ký qua công ty hoặc tự làm trên ứng dụng eTax Mobile của cơ quan thuế.",
    prepare: [
      "Mã số thuế cá nhân của bạn — không nhớ thì tra trên ứng dụng eTax Mobile hoặc hỏi công ty",
      "Giấy khai sinh của con, hoặc căn cước của người phụ thuộc là người lớn",
      "Giấy tờ chứng minh quan hệ: khai sinh, giấy kết hôn, hoặc xác nhận của địa phương",
      "Giấy tờ chứng minh người phụ thuộc không có thu nhập hoặc thu nhập thấp, nếu là người lớn",
      "Tài khoản trên ứng dụng thuế hoặc thông tin liên hệ của bộ phận nhân sự công ty",
    ],
    steps: [
      {
        title: "Kiểm tra xem bạn có đang nộp thuế thu nhập cá nhân không",
        detail:
          "Nhìn bảng lương xem có dòng khấu trừ thuế thu nhập cá nhân không. Nếu thu nhập của bạn chưa tới ngưỡng chịu thuế thì việc đăng ký chưa mang lại lợi ích ngay, nhưng đăng ký sẵn cũng không hại gì cho sau này.",
      },
      {
        title: "Liệt kê những người bạn đang thật sự nuôi",
        detail:
          "Con nhỏ, con đang đi học, cha mẹ già không có lương hưu, người thân bị khuyết tật không có khả năng lao động. Viết ra hết rồi mới xét từng người xem có đủ điều kiện không.",
      },
      {
        title: "Hiểu điều kiện với con",
        detail:
          "Con dưới độ tuổi quy định thường đủ điều kiện mà không phải chứng minh thu nhập. Con đã lớn nhưng đang học hoặc bị khuyết tật không có khả năng lao động thì có điều kiện riêng. Hỏi kế toán công ty hoặc cơ quan thuế cho đúng trường hợp của bạn.",
      },
      {
        title: "Hiểu điều kiện với cha mẹ và người thân khác",
        detail:
          "Với người ngoài diện con cái, thường phải hội đủ hai thứ: người đó không có thu nhập hoặc thu nhập bình quân tháng dưới mức quy định, và bạn là người trực tiếp nuôi dưỡng. Cha mẹ có lương hưu cao thì thường không đủ điều kiện.",
      },
      {
        title: "Chỉ một người được đăng ký cho mỗi người phụ thuộc",
        detail:
          "Hai vợ chồng cùng đăng ký một đứa con là hồ sơ sẽ bị từ chối và có thể phải nộp lại phần đã giảm sai. Thống nhất trong nhà xem ai đăng ký, thường nên là người có thu nhập cao hơn vì mức thuế suất áp cao hơn.",
      },
      {
        title: "Đăng ký mã số thuế cho người phụ thuộc",
        detail:
          "Mỗi người phụ thuộc cần có mã số thuế riêng. Việc này thường làm cùng lúc với hồ sơ đăng ký giảm trừ, qua công ty hoặc tự làm trên ứng dụng thuế. Có mã rồi thì các năm sau rất gọn.",
      },
      {
        title: "Cách một: nhờ công ty làm",
        detail:
          "Đây là cách dễ nhất với người đi làm công ăn lương. Gửi cho nhân sự bản khai theo mẫu và bản sao giấy tờ. Nói rõ: em muốn đăng ký người phụ thuộc từ tháng này, chị xem giúp em cần bổ sung gì. Công ty sẽ áp giảm trừ vào bảng lương.",
      },
      {
        title: "Cách hai: tự làm trên eTax Mobile",
        detail:
          "Tải ứng dụng thuế chính thức, đăng nhập bằng tài khoản thuế hoặc tài khoản định danh, tìm mục đăng ký người phụ thuộc. Khai thông tin, tải ảnh giấy tờ lên và nộp. Hợp với người làm tự do hoặc có nhiều nguồn thu nhập.",
      },
      {
        title: "Kiểm tra bảng lương tháng sau",
        detail:
          "Xem dòng giảm trừ gia cảnh đã tăng lên chưa và số thuế khấu trừ đã giảm chưa. Chưa thấy thì hỏi lại nhân sự ngay trong tháng, đừng đợi tới cuối năm mới phát hiện là hồ sơ chưa được nhập.",
      },
      {
        title: "Đăng ký muộn thì vẫn tính lại khi quyết toán",
        detail:
          "Nếu đăng ký giữa năm, phần giảm trừ của những tháng trước đó thường vẫn được tính lại khi quyết toán thuế cuối năm, theo quy định hiện hành. Nghĩa là bạn có thể được hoàn lại phần đã nộp thừa, nên đừng nghĩ là đã lỡ rồi thì thôi.",
      },
      {
        title: "Cập nhật khi hoàn cảnh thay đổi",
        detail:
          "Con đủ tuổi tự lập, cha mẹ bắt đầu có lương hưu, hoặc người phụ thuộc qua đời — đều phải khai báo thay đổi. Tiếp tục hưởng giảm trừ khi không còn đủ điều kiện là chuyện sẽ bị truy thu.",
      },
      {
        title: "Lưu bộ hồ sơ vào một chỗ",
        detail:
          "Chụp ảnh toàn bộ giấy tờ đã nộp và lưu vào một thư mục trên máy hoặc trên đám mây. Khi đổi công ty, bạn sẽ cần nộp lại cho nơi mới, và có sẵn file thì mất năm phút thay vì cả buổi đi xin lại.",
      },
    ],
    notes: [
      "Mức giảm trừ cho bản thân và cho người phụ thuộc, cũng như ngưỡng thu nhập của người phụ thuộc, do pháp luật quy định và có thể được điều chỉnh theo từng thời kỳ. Kiểm tra con số hiện hành trên trang của cơ quan thuế hoặc hỏi kế toán, đừng dùng số nghe được từ vài năm trước.",
      "Khai không đúng để hưởng giảm trừ là hành vi có thể bị truy thu và xử phạt. Chỉ đăng ký cho người bạn thật sự đang nuôi dưỡng và đủ điều kiện.",
      "Người làm nhiều nơi hoặc có thu nhập ngoài lương thì nên tự quyết toán cuối năm để tính đúng, thay vì chỉ dựa vào một công ty.",
      "Chỉ dùng ứng dụng và trang web chính thức của cơ quan thuế. Có nhiều trang giả mạo mời chào hỗ trợ hoàn thuế để lấy thông tin và tiền của bạn.",
    ],
    faq: [
      {
        q: "Vợ hoặc chồng có được tính là người phụ thuộc không?",
        a: "Có thể, nếu người đó không có khả năng lao động hoặc không có thu nhập, hay thu nhập dưới ngưỡng quy định, và bạn đang trực tiếp nuôi dưỡng. Vợ hoặc chồng đang đi làm với thu nhập bình thường thì không thuộc diện này.",
      },
      {
        q: "Cha mẹ đang hưởng lương hưu thì có đăng ký được không?",
        a: "Phụ thuộc vào mức lương hưu so với ngưỡng thu nhập quy định. Lương hưu cao hơn ngưỡng thì thường không đủ điều kiện. Hỏi kế toán hoặc cơ quan thuế với con số cụ thể của cha mẹ bạn.",
      },
      {
        q: "Tôi làm tự do, không có công ty thì đăng ký ở đâu?",
        a: "Tự làm trên ứng dụng eTax Mobile hoặc tới trực tiếp cơ quan thuế nơi bạn cư trú. Bạn cũng sẽ tự quyết toán thuế cuối năm, và phần giảm trừ người phụ thuộc sẽ được tính vào đó.",
      },
      {
        q: "Đăng ký rồi có phải làm lại hằng năm không?",
        a: "Thông thường không phải khai lại nếu thông tin không đổi, nhưng bạn phải chủ động báo khi có thay đổi. Khi chuyển sang công ty mới thì cần nộp lại hồ sơ cho nơi mới để họ áp giảm trừ vào bảng lương.",
      },
    ],
    sources: [],
  },
  {
    slug: "dong-tai-khoan-ngan-hang-bo-khong",
    title: "Tài khoản ngân hàng bỏ không: đóng đi kẻo âm tiền và phiền về sau",
    excerpt:
      "Cái tài khoản mở hồi sinh viên, cái thẻ công ty cũ trả lương — bỏ đó tưởng vô hại, nhưng phí thường niên vẫn chạy và tài khoản ngủ quên có thể thành rắc rối.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Liệt kê hết tài khoản và thẻ bạn từng mở, kiểm tra cái nào còn phí và cái nào đang âm. Tài khoản không dùng nữa thì ra quầy làm thủ tục đóng, mang căn cước và thẻ. Đóng phải làm tại ngân hàng, không phải chỉ rút hết tiền rồi bỏ đó. Nhớ kiểm tra trước xem tài khoản đó có đang gắn với thanh toán tự động, ví điện tử hay nhận lương ở đâu không.",
    prepare: [
      "Căn cước công dân bản gốc, thông tin phải khớp với hồ sơ mở tài khoản",
      "Thẻ ATM hoặc thẻ tín dụng của tài khoản định đóng, nếu còn giữ",
      "Danh sách mọi ngân hàng bạn từng mở tài khoản, kể cả cái đã quên",
      "Điện thoại có sim đăng ký với ngân hàng để nhận mã xác thực",
      "Chút tiền mặt phòng khi tài khoản đang âm phí và phải nộp bù",
    ],
    steps: [
      {
        title: "Liệt kê hết tài khoản mình từng mở",
        detail:
          "Lục ví, lục ngăn kéo, nhớ lại các công ty cũ trả lương qua ngân hàng nào, các lần mở thẻ để nhận quà khuyến mãi. Nhiều người có tới bốn năm tài khoản mà chỉ dùng một. Viết ra giấy cho dễ theo dõi.",
      },
      {
        title: "Kiểm tra từng cái xem còn tiền và còn phí không",
        detail:
          "Đăng nhập ứng dụng nếu còn nhớ mật khẩu, hoặc gọi tổng đài hỏi số dư và tình trạng. Hỏi thẳng: tài khoản này có đang bị tính phí gì hằng tháng không ạ. Nhiều tài khoản âm dần vì phí quản lý và phí tin nhắn.",
      },
      {
        title: "Chú ý thẻ tín dụng khác tài khoản thanh toán",
        detail:
          "Thẻ tín dụng không dùng vẫn có thể bị tính phí thường niên hằng năm, và nợ phí đó có thể ghi vào lịch sử tín dụng của bạn. Đây là loại thẻ đáng đóng nhất nếu bạn không dùng tới.",
      },
      {
        title: "Rà xem tài khoản có đang gắn với gì không",
        detail:
          "Ví điện tử, thanh toán tự động tiền điện nước, gói cước điện thoại, đăng ký ứng dụng nghe nhạc xem phim, nhận lương, nhận hoàn thuế. Đóng trước khi gỡ hết là sẽ có dịch vụ bị gián đoạn vào lúc bạn không ngờ.",
      },
      {
        title: "Chuyển hết tiền ra trước",
        detail:
          "Chuyển số dư sang tài khoản chính của bạn, để lại đúng phần cần thiết nếu ngân hàng yêu cầu tối thiểu. Đừng để lại vài chục nghìn nghĩ là chẳng đáng gì, vì nó sẽ bị phí ăn dần rồi thành âm.",
      },
      {
        title: "Gọi tổng đài hỏi thủ tục đóng",
        detail:
          "Hỏi rõ: em muốn đóng tài khoản này, em cần mang gì và có phải ra đúng chi nhánh mở thẻ không ạ. Có ngân hàng cho đóng ở bất kỳ chi nhánh nào, có nơi vẫn yêu cầu về đúng nơi mở. Hỏi trước tiết kiệm cả buổi đi lại.",
      },
      {
        title: "Ra quầy làm thủ tục đóng",
        detail:
          "Mang căn cước và thẻ. Điền mẫu yêu cầu đóng tài khoản. Có khoản phí còn nợ thì phải thanh toán nốt mới đóng được. Đây là bước bắt buộc, không có cách nào đóng bằng cách bỏ mặc.",
      },
      {
        title: "Xin giấy xác nhận đã đóng",
        detail:
          "Yêu cầu nhân viên cấp giấy xác nhận hoặc biên nhận yêu cầu đóng tài khoản, có dấu. Chụp ảnh lưu lại. Sau này nếu có phát sinh phí lạ thì đây là bằng chứng của bạn.",
      },
      {
        title: "Cắt thẻ đúng cách trước khi vứt",
        detail:
          "Cắt đôi qua chip và qua dải từ, cắt cả phần số nổi. Đừng vứt nguyên chiếc vào thùng rác. Thẻ tín dụng thì cắt cả phần mã bảo mật ở mặt sau. Nhiều ngân hàng cũng nhận lại thẻ để tiêu huỷ, cứ đưa họ luôn cho chắc.",
      },
      {
        title: "Gỡ tài khoản khỏi ứng dụng và ví điện tử",
        detail:
          "Mở từng ví điện tử và ứng dụng mua sắm, xoá thẻ đã đóng khỏi danh sách thanh toán. Để đó thì mỗi lần thanh toán sẽ báo lỗi và bạn lại mất công tìm nguyên nhân.",
      },
      {
        title: "Kiểm tra lại sau một tháng",
        detail:
          "Đặt nhắc lịch một tháng sau, gọi tổng đài xác nhận tài khoản đã đóng hẳn và không còn phát sinh. Thỉnh thoảng hồ sơ bị treo giữa chừng, phát hiện sớm thì xử lý dễ.",
      },
      {
        title: "Giữ lại một tài khoản dự phòng",
        detail:
          "Đừng đóng hết chỉ còn một cái. Giữ hai tài khoản ở hai ngân hàng khác nhau là hợp lý, phòng khi một bên bảo trì hệ thống hoặc thẻ bị khoá đúng lúc bạn cần tiền.",
      },
    ],
    notes: [
      "Chính sách phí, điều kiện đóng tài khoản và cách xử lý tài khoản không hoạt động khác nhau theo từng ngân hàng và từng thời điểm. Gọi tổng đài của chính ngân hàng đó để có thông tin đúng.",
      "Tài khoản bỏ không mang tên bạn là thứ kẻ gian rất muốn. Đừng bao giờ cho mượn, cho thuê hay bán tài khoản ngân hàng — đó là hành vi vi phạm pháp luật và bạn sẽ liên đới với mọi giao dịch chạy qua đó.",
      "Không bao giờ đọc mã OTP cho ai, kể cả người tự xưng là nhân viên ngân hàng đang giúp bạn đóng tài khoản. Ngân hàng thật không bao giờ hỏi mã đó.",
      "Trước khi đóng tài khoản đang nhận lương, hãy báo nhân sự đổi sang tài khoản mới trước, rồi mới đóng cái cũ.",
    ],
    faq: [
      {
        q: "Không đóng, cứ để đó thì sao?",
        a: "Tuỳ ngân hàng, tài khoản có thể bị tính phí duy trì cho tới khi âm, rồi chuyển sang trạng thái ngủ đông hoặc bị đóng theo quy định của họ. Riêng thẻ tín dụng thì khoản phí chưa trả có thể ảnh hưởng tới lịch sử tín dụng của bạn.",
      },
      {
        q: "Tài khoản đang âm tiền thì đóng thế nào?",
        a: "Bạn cần thanh toán phần còn thiếu rồi mới đóng được. Ra quầy hỏi rõ số tiền chính xác, trả xong và xin giấy xác nhận. Số thường không lớn, nhưng để lâu thì phí có thể cộng dồn.",
      },
      {
        q: "Có đóng tài khoản online được không?",
        a: "Một số ngân hàng đã cho làm qua ứng dụng hoặc tổng đài, một số vẫn yêu cầu ra quầy. Gọi hỏi trước là cách nhanh nhất để biết ngân hàng của bạn thuộc loại nào.",
      },
      {
        q: "Mất thẻ rồi thì có đóng tài khoản được không?",
        a: "Được, chỉ cần mang căn cước và trình bày là thẻ đã mất. Nhân viên sẽ xử lý theo quy trình khoá và đóng. Càng nên làm sớm, vì thẻ thất lạc mà tài khoản vẫn mở là rủi ro không cần thiết.",
      },
    ],
    sources: [],
  },
  {
    slug: "cho-nguoi-quen-vay-tien-viet-giay-the-nao",
    title: "Cho người quen vay tiền: viết giấy thế nào để còn đòi được",
    excerpt:
      "Ngại viết giấy vì sợ mất lòng, rồi mất luôn cả tiền lẫn bạn. Một tờ giấy mười dòng viết trong năm phút giải quyết được phần lớn chuyện đó.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Chỉ cho vay số tiền mà bạn chấp nhận được nếu không đòi lại được. Luôn có giấy viết tay, ghi rõ ai vay ai cho vay kèm số căn cước, số tiền bằng cả số và chữ, ngày vay, ngày trả, có lãi hay không. Hai bên ký, mỗi người giữ một bản, chụp ảnh lưu. Chuyển khoản thay vì đưa tiền mặt và ghi rõ nội dung cho vay, vì sao kê ngân hàng là bằng chứng rất mạnh.",
    prepare: [
      "Giấy trắng và bút — không cần mẫu cầu kỳ, viết tay hoàn toàn hợp lệ",
      "Căn cước của cả hai bên để ghi đúng số và địa chỉ",
      "Điện thoại để chụp lại giấy và chụp căn cước người vay nếu họ đồng ý",
      "Tài khoản ngân hàng để chuyển khoản thay vì đưa tiền mặt",
      "Một người làm chứng nếu số tiền lớn — không bắt buộc nhưng rất có ích",
    ],
    steps: [
      {
        title: "Tự hỏi trước: mất số tiền này mình có sao không",
        detail:
          "Câu hỏi quan trọng nhất, hỏi trước khi hỏi bất cứ điều gì khác. Nếu mất số đó khiến bạn không đóng nổi tiền nhà tháng sau thì câu trả lời là không cho vay, dù người hỏi là ai.",
      },
      {
        title: "Hỏi rõ vay để làm gì và trả bằng nguồn nào",
        detail:
          "Không phải để soi mói mà để biết khả năng trả có thật không. Câu nên hỏi: bạn định trả từ nguồn nào và khoảng bao giờ. Người trả lời được cụ thể thường là người đã tính toán, người ậm ừ thì bạn nên cân nhắc lại.",
      },
      {
        title: "Nói chuyện giấy tờ một cách nhẹ nhàng",
        detail:
          "Đừng ngại. Cứ nói: mình viết giấy cho rõ ràng nhé, để sau này hai đứa khỏi nhớ nhầm, mình làm với ai cũng vậy. Cách nói này biến việc viết giấy thành nguyên tắc chung chứ không phải sự nghi ngờ dành riêng cho họ.",
      },
      {
        title: "Ghi đủ thông tin hai bên",
        detail:
          "Họ tên đầy đủ, ngày sinh, số căn cước, địa chỉ thường trú của cả người vay và người cho vay. Đây là phần biến tờ giấy từ lời hứa thành bằng chứng có thể dùng được khi cần.",
      },
      {
        title: "Ghi số tiền bằng cả số và chữ",
        detail:
          "Ví dụ hai mươi triệu đồng viết cả bằng số và bằng chữ. Cách này chặn việc thêm bớt một số không. Ghi rõ đơn vị tiền tệ, nghe thừa nhưng nó loại bỏ mọi tranh cãi về sau.",
      },
      {
        title: "Ghi ngày vay và ngày phải trả",
        detail:
          "Một hạn cụ thể, không phải khi nào có thì trả. Số tiền lớn thì chia thành nhiều đợt và ghi rõ từng đợt bao nhiêu, ngày nào. Có mốc thì bạn mới có căn cứ để nhắc mà không thấy khó xử.",
      },
      {
        title: "Ghi rõ có lãi hay không",
        detail:
          "Không lãi thì ghi thẳng là không tính lãi. Có lãi thì ghi mức cụ thể. Lưu ý pháp luật có giới hạn mức lãi suất trong giao dịch dân sự, nên đừng thoả thuận mức quá cao vì phần vượt có thể không được công nhận.",
      },
      {
        title: "Hai bên ký và ghi rõ họ tên",
        detail:
          "Ký xong ghi họ tên bằng chữ in bên dưới. Có người làm chứng thì họ ký và ghi thông tin luôn. Mỗi bên giữ một bản gốc, đừng để cả hai bản ở một người.",
      },
      {
        title: "Chụp ảnh và lưu ở nhiều nơi",
        detail:
          "Chụp tờ giấy, chụp căn cước người vay nếu họ đồng ý, lưu vào máy và vào đám mây. Giấy tờ mất là chuyện xảy ra, bản chụp cứu bạn trong trường hợp đó.",
      },
      {
        title: "Chuyển khoản thay vì đưa tiền mặt",
        detail:
          "Ghi nội dung chuyển khoản là cho vay theo giấy vay tiền ngày này. Sao kê ngân hàng khớp với tờ giấy là bộ bằng chứng rất khó chối. Bắt buộc phải đưa mặt thì làm trước mặt người làm chứng và ghi vào giấy là đã nhận đủ.",
      },
      {
        title: "Nhắc trước hạn một cách bình thường",
        detail:
          "Trước ngày hẹn khoảng một tuần, nhắn nhẹ: tuần sau tới hạn khoản kia rồi nhé, bạn thu xếp được không. Nhắc sớm và nhắn bằng tin nhắn để có lưu vết, dễ hơn nhiều so với đợi quá hạn rồi mới nói.",
      },
      {
        title: "Quá hạn thì thoả thuận lại bằng văn bản",
        detail:
          "Người vay khó khăn thật thì gia hạn cũng được, nhưng viết lại giấy hoặc nhắn tin xác nhận mốc mới và giữ tin nhắn đó. Đừng để khoản vay trôi vô hạn không mốc nào, vì đó là lúc nó biến mất.",
      },
    ],
    notes: [
      "Đừng cho vay bằng cách đứng tên vay ngân hàng hộ người khác. Người vay không trả thì bạn là người mang nợ và mang cả nợ xấu, không phải họ.",
      "Cẩn thận với người quen bỗng nhắn tin qua mạng xã hội hỏi vay gấp. Gọi video hoặc gọi thẳng vào số cũ để xác minh, vì giả mạo tài khoản và giả giọng bằng công nghệ hiện rất phổ biến.",
      "Không bao giờ đọc mã OTP cho ai, kể cả người thân đang nhờ bạn hỗ trợ giao dịch. Không có tình huống chính đáng nào cần bạn đọc mã đó cho người khác.",
      "Số tiền lớn thì nên ra tổ chức hành nghề công chứng hoặc hỏi luật sư. Chi phí nhỏ so với rủi ro, và văn bản có giá trị chắc chắn hơn nhiều.",
    ],
    faq: [
      {
        q: "Giấy viết tay có giá trị pháp lý không?",
        a: "Có, giấy vay tiền viết tay với đầy đủ thông tin và chữ ký hai bên vẫn là bằng chứng của giao dịch dân sự. Càng có thêm sao kê chuyển khoản và tin nhắn trao đổi thì càng chắc. Số tiền lớn thì công chứng vẫn là lựa chọn an toàn hơn.",
      },
      {
        q: "Người vay không trả thì làm gì được?",
        a: "Bước đầu vẫn là thương lượng và ghi lại mọi trao đổi. Không xong thì bạn có quyền khởi kiện ra toà án dân sự với bộ hồ sơ giấy vay, sao kê và tin nhắn. Trước khi kiện nên hỏi luật sư để cân nhắc thời gian và chi phí.",
      },
      {
        q: "Cho vay không lãi có phải viết giấy không?",
        a: "Nên, càng phải viết. Không lãi nghĩa là bạn đã chịu thiệt phần lãi rồi, đừng chịu thêm rủi ro mất trắng. Ghi rõ không tính lãi cũng là bảo vệ người vay khỏi bị hiểu nhầm sau này.",
      },
      {
        q: "Có nên đòi thế chấp tài sản không?",
        a: "Với số tiền lớn thì hợp lý, nhưng cầm giữ giấy tờ nhà đất hay đăng ký xe của người khác có những ràng buộc pháp lý riêng. Đừng tự làm theo cảm tính, hỏi công chứng viên hoặc luật sư về cách làm đúng.",
      },
    ],
    sources: [],
  },
];
