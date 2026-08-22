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
];
