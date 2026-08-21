// Bài đăng ngày 2026-08-21 — khung 12h trưa
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-21";

export const day20260821trua = [
  {
    slug: "dat-do-an-qua-app-cho-dang-tien",
    title: "Đặt đồ ăn qua app: gọi sao cho đáng tiền, đồ tới còn nóng",
    excerpt:
      "Cùng một phần cơm, người trả 45k, người trả 85k. Khác nhau nằm ở vài thao tác trước khi bấm nút đặt.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Trước khi bấm đặt, hãy nhìn tổng tiền cuối cùng chứ đừng nhìn giá món — phí ship, phí dịch vụ, phí giờ cao điểm cộng vào có khi bằng nửa bữa ăn. Chọn quán trong bán kính 2–3km để đồ còn nóng, đặt lệch giờ cao điểm 30 phút, và ghi địa chỉ như đang chỉ đường cho người lạ chứ không phải chép từ sổ hộ khẩu. Săn mã giảm giá ở trang khuyến mãi trong app trước khi vào giỏ hàng, vì vào giỏ rồi mới tìm thì thường sót. Nhận hàng thì mở ra kiểm ngay lúc tài xế còn đứng đó.",
    prepare: [
      "Địa chỉ nhà viết sẵn trong ghi chú điện thoại, có cả mô tả kiểu 'hẻm 25, nhà cổng xanh, cạnh tiệm tạp hoá' — dán vào cho nhanh",
      "Một phương thức thanh toán đã liên kết sẵn, vì trả tiền mặt nhiều nơi tính phí cao hơn và hay thiếu tiền thối",
      "Danh sách 5–7 quán bạn đã ăn thấy ổn, lưu vào mục yêu thích để khỏi dò lại mỗi lần đói",
      "Số điện thoại đang mở, không để im lặng — tài xế gọi không được là đơn dễ bị huỷ",
    ],
    steps: [
      {
        title: "Nhìn tổng tiền, đừng nhìn giá món",
        detail:
          "Món 39k nghe rẻ, nhưng cộng phí giao 18k, phí dịch vụ, phí giờ cao điểm và tiền hộp là thành 70k. Bấm vào giỏ hàng xem con số cuối cùng rồi mới quyết định. Sai lầm hay gặp nhất là so sánh các quán bằng giá món trong khi phí ship của chúng chênh nhau gấp ba.",
      },
      {
        title: "Lọc theo khoảng cách trước khi lọc theo giá",
        detail:
          "Quán cách 5km thì đồ chiên sẽ mềm oặt, canh sẽ nguội, và phí ship gần gấp đôi. Đặt trong bán kính 2–3km là điểm cân bằng tốt nhất giữa tiền và độ nóng. Bún, phở, đồ nước càng nên gần.",
      },
      {
        title: "Đặt trước giờ cao điểm 30 phút",
        detail:
          "Khung 11h30–12h30 và 18h–19h là lúc app tăng phí và tài xế thì kẹt. Đặt lúc 11h hoặc 17h30 thường rẻ hơn vài chục nghìn và tới nhanh hơn nửa tiếng. Nếu bắt buộc phải đặt đúng giờ đó, chấp nhận chờ và đừng gọi giục tài xế liên tục — họ đang gom nhiều đơn cùng lúc.",
      },
      {
        title: "Săn mã giảm giá TRƯỚC khi vào giỏ hàng",
        detail:
          "Vào mục khuyến mãi hoặc ưu đãi của app, lưu hết mã đang có về ví trước, rồi mới chọn quán. Nhiều mã chỉ hiện ở đó chứ không tự nhảy vào giỏ. Cũng nên thử đổi phương thức thanh toán, vì có mã chỉ áp dụng khi trả bằng ví điện tử.",
      },
      {
        title: "Đọc đánh giá 3 sao, đừng đọc 5 sao",
        detail:
          "Đánh giá 5 sao thường một chữ 'ngon', đánh giá 1 sao thường là do giao trễ chứ không phải do món. Phần 3 sao mới là chỗ người ta viết thật: mặn quá, ít thịt, hộp bị đổ. Đọc 3–4 cái là đủ hình dung.",
      },
      {
        title: "Ghi chú món thật cụ thể",
        detail:
          "Đừng ghi 'ít cay' mà ghi 'không bỏ ớt, để riêng tương ớt'. Đừng ghi 'nhiều rau' mà ghi 'thêm rau sống để hộp riêng'. Quán đọc ghi chú trên phiếu in nhỏ xíu, câu càng ngắn và rõ càng dễ được làm đúng. Muốn thêm món thì phải bấm chọn trong app chứ ghi chú xin thêm thường không được tính.",
      },
      {
        title: "Viết địa chỉ như đang chỉ đường",
        detail:
          "Số nhà, tên hẻm, rồi mốc dễ nhận: 'hẻm 12 Nguyễn Trãi, vào 30m, nhà cửa cuốn xám, đối diện quán cà phê'. Nếu ở chung cư thì ghi rõ toà, tầng, và việc tài xế có được lên hay phải gửi ở sảnh. Bước này tốn 30 giây nhưng tiết kiệm ba cuộc gọi.",
      },
      {
        title: "Cân nhắc gọi gộp thay vì gọi lẻ",
        detail:
          "Phí ship tính theo đơn chứ không theo món. Ba người trong phòng gọi ba đơn từ ba quán là mất ba lần phí. Gộp một quán, chia tiền sau, thường tiết kiệm bốn tới năm chục nghìn mỗi bữa.",
      },
      {
        title: "Theo dõi đơn nhưng đừng bám riết",
        detail:
          "Xem trạng thái để canh xuống lấy đúng lúc là đủ. Khi thấy tài xế đã tới gần thì đi xuống trước cho họ đỡ chờ — nhiều app cho tài xế huỷ đơn nếu khách không xuất hiện sau vài phút, và tiền có thể không được hoàn đầy đủ.",
      },
      {
        title: "Mở hộp kiểm ngay lúc tài xế còn đó",
        detail:
          "Đếm đủ món, nhìn qua xem có đổ vỡ không, mất 15 giây. Thiếu món mà phát hiện lúc tài xế đi rồi thì khiếu nại rất lằng nhằng vì không có ai xác nhận. Nếu hộp bị đổ, chụp ảnh ngay tại chỗ trước khi dọn.",
      },
      {
        title: "Khiếu nại đúng chỗ khi đơn sai",
        detail:
          "Vào phần chi tiết đơn hàng, chọn mục hỗ trợ hoặc báo cáo vấn đề, gửi kèm ảnh. Đừng đôi co với tài xế vì họ không nấu món đó. Trình bày gọn: thiếu món gì, đơn số mấy, mong muốn hoàn tiền hay giao bù. App thường xử lý trong vài giờ đến một ngày.",
      },
      {
        title: "Lưu quán ngon, bỏ qua quán dở",
        detail:
          "Ăn xong thấy ổn thì bấm lưu vào yêu thích ngay, kèm ghi chú kiểu 'gà nướng ngon, cơm hơi ít'. Sau vài tuần bạn có danh sách riêng và không còn mất 15 phút lướt app trong lúc đói — đó mới là thứ tiết kiệm nhất.",
      },
    ],
    notes: [
      "Đặt đồ ăn app đều đặn tốn hơn nấu ở nhà khoảng ba tới bốn lần. Nếu tháng nào cũng thấy hụt tiền, thử đếm số đơn trong lịch sử app — con số thường gây sốc.",
      "Cẩn thận với các món cần nóng mới ngon: đồ chiên, bánh mì, pizza xuống cấp rất nhanh. Món kho, món cơm, món trộn thì chịu đựng quãng đường tốt hơn nhiều.",
      "Đừng bao giờ bấm 'đã nhận hàng' khi chưa cầm được đồ trên tay, kể cả khi tài xế nhờ. Bấm rồi là gần như mất quyền khiếu nại.",
      "Giá trên app thường cao hơn giá tại quán vì quán phải trả phí sàn. Quán ngay gần nhà thì đi bộ ra mua có khi vừa rẻ vừa nhanh hơn.",
    ],
    faq: [
      {
        q: "Tài xế gọi bảo hết món, xin đổi món khác thì làm sao?",
        a: "Bạn có quyền từ chối và yêu cầu huỷ đơn, tiền sẽ được hoàn về nếu đã thanh toán trước. Nếu đồng ý đổi, hãy nhắn qua khung chat trong app thay vì chỉ nói miệng, để có bằng chứng khi giá chênh lệch.",
      },
      {
        q: "Đơn bị huỷ mà tiền đã trừ thì lấy lại kiểu gì?",
        a: "Tiền thường tự hoàn về ví trong vài giờ, còn hoàn về thẻ ngân hàng thì lâu hơn, có thể vài ngày làm việc. Quá thời gian đó thì vào phần hỗ trợ của app, gửi mã đơn và ảnh chụp màn hình giao dịch.",
      },
      {
        q: "Có nên đặt món lạ ở quán chưa từng ăn không?",
        a: "Nên, nhưng đặt phần nhỏ nhất và chọn quán đã có kha khá đánh giá. Quán mới toanh chưa ai đánh giá thì rủi ro cao, trừ khi bạn nhìn được ảnh thật do khách chụp chứ không phải ảnh quảng cáo.",
      },
      {
        q: "Boa cho tài xế bao nhiêu là hợp lý?",
        a: "Không bắt buộc. Nếu trời mưa, đường xa hay nhà bạn khó tìm mà họ vẫn vui vẻ thì mười đến hai mươi nghìn là quý rồi. Đánh giá 5 sao kèm lời khen cũng có giá trị với họ không kém tiền.",
      },
    ],
    sources: [],
  },
  {
    slug: "mua-gao-va-giu-gao-khong-bi-mot",
    title: "Mua gạo và giữ gạo không bị mọt",
    excerpt:
      "Mua bao gạo lớn tưởng tiết kiệm, hai tháng sau mở ra thấy mọt bò lổm ngổm. Chọn và cất gạo đúng cách thì không phải đổ đi lần nào nữa.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Người ở một mình nên mua bao 5kg, ăn hết trong bốn tới sáu tuần, đừng ham bao 20kg cho rẻ. Gạo mới xay ăn ngon hơn nhưng nhanh xuống, nên hỏi ngày đóng gói chứ đừng chỉ nhìn hạn dùng. Về nhà đổ gạo sang thùng nhựa có nắp kín, để nơi khô mát, tránh sàn nhà và tránh bếp. Bỏ vào vài tép tỏi khô hoặc mấy quả ớt khô là cách dân gian đơn giản mà hiệu quả để mọt không muốn ở.",
    prepare: [
      "Một thùng nhựa hoặc hộp có nắp đậy kín, dung tích lớn hơn lượng gạo bạn hay mua — thùng kín quan trọng hơn mọi mẹo khác cộng lại",
      "Một cốc đong hoặc ca nhựa để đong gạo cố định, giúp bạn biết mình ăn hết bao lâu",
      "Vài tép tỏi khô hoặc mươi quả ớt khô, thứ có sẵn ở mọi chợ",
      "Một mẩu giấy dán ghi ngày mua, dán lên nắp thùng",
      "Chỗ cất khô ráo, cao hơn mặt sàn, cách xa bếp và bồn rửa",
    ],
    steps: [
      {
        title: "Chọn cỡ bao theo tốc độ ăn của bạn",
        detail:
          "Một người ăn cơm hai bữa mỗi ngày tiêu khoảng bốn tới năm cân gạo một tháng. Ở một mình thì mua bao 5kg là vừa, hai người thì 10kg. Bao 20kg rẻ hơn vài nghìn mỗi cân nhưng để nửa năm thì phần tiết kiệm đó không bù nổi phần phải đổ đi.",
      },
      {
        title: "Hỏi ngày đóng gói, không chỉ hạn dùng",
        detail:
          "Gạo càng mới càng thơm và dẻo. Hỏi thẳng người bán: gạo này xay lâu chưa ạ. Ở cửa hàng gạo họ trả lời được ngay; ở siêu thị thì tìm dòng ngày sản xuất in trên bao. Gạo để quá nửa năm vẫn ăn được nhưng cơm khô và nhạt mùi.",
      },
      {
        title: "Nhìn và ngửi trước khi mua",
        detail:
          "Hạt đều, không gãy vụn nhiều, không có bụi trắng bám. Ngửi thấy mùi thơm nhẹ là được; ngửi thấy mùi ẩm mốc hoặc mùi hắc lạ thì bỏ qua ngay, đừng tiếc. Gạo bóng loáng bất thường đôi khi là do đánh bóng kỹ chứ không phải do ngon.",
      },
      {
        title: "Mua thử một cân trước khi ôm bao lớn",
        detail:
          "Ở cửa hàng gạo bạn hoàn toàn có thể xin mua 1kg để nấu thử. Mỗi loại hợp với khẩu vị khác nhau: có loại dẻo, có loại khô tơi hợp nấu cơm chiên. Mất mười lăm nghìn để tránh ôm cả bao gạo không hợp miệng là quá hời.",
      },
      {
        title: "Về tới nhà là đổ ngay sang thùng kín",
        detail:
          "Bao giấy hay bao dứa của nhà sản xuất không kín, côn trùng chui vào rất dễ. Đổ hết sang thùng nhựa có nắp, đậy chặt. Đây là bước quan trọng nhất trong cả bài, và cũng là bước nhiều người bỏ qua nhất vì lười.",
      },
      {
        title: "Rửa và phơi khô thùng trước khi đổ gạo mới",
        detail:
          "Thùng còn ẩm là gạo mốc. Rửa sạch, lau khô, để chỗ thoáng vài tiếng cho khô hoàn toàn rồi mới đổ. Cũng đừng đổ gạo mới chồng lên phần gạo cũ còn sót dưới đáy — vét sạch đáy trước đã.",
      },
      {
        title: "Bỏ tỏi khô hoặc ớt khô vào thùng",
        detail:
          "Vài tép tỏi còn nguyên vỏ, hoặc mươi quả ớt khô, rải vào giữa và trên mặt gạo. Mùi hăng khiến mọt không muốn đẻ trứng. Cách này không làm cơm bị ám mùi vì tỏi vẫn còn nguyên vỏ. Thay tỏi mới mỗi lần đổ gạo mới.",
      },
      {
        title: "Cất chỗ khô, mát, cao hơn sàn nhà",
        detail:
          "Tránh đặt sát bếp nấu vì nóng, tránh sát bồn rửa vì hơi nước, tránh để thẳng xuống nền nhà vì nền hút ẩm. Một chiếc kệ thấp hay tấm ván kê lên là đủ. Phòng trọ ẩm thì càng phải kê cao.",
      },
      {
        title: "Dán ngày mua lên nắp thùng",
        detail:
          "Một mẩu giấy ghi '05/08 — 5kg'. Nhờ nó bạn biết mình ăn hết trong bao lâu và lần sau mua đúng lượng. Sau hai ba lần bạn sẽ biết chính xác nhịp ăn gạo của nhà mình.",
      },
      {
        title: "Đong gạo bằng dụng cụ khô, tay khô",
        detail:
          "Múc gạo bằng ca còn ướt hay tay còn dính nước là đưa ẩm vào thùng, chỉ vài giọt cũng đủ tạo ổ mốc. Để hẳn một cái ca riêng trong thùng gạo và không dùng nó vào việc gì khác.",
      },
      {
        title: "Lỡ có mọt thì xử lý thế nào",
        detail:
          "Mang thùng gạo ra chỗ râm mát thoáng gió, trải mỏng cho mọt bò đi, sàng bỏ phần vụn. Đừng phơi nắng gắt vì hạt gạo sẽ nứt và cơm nấu ra bở. Gạo bị mọt nhẹ vẫn ăn được sau khi vo kỹ; nhưng nếu đã ngả màu, vón cục hoặc có mùi mốc thì bỏ — mốc mới là thứ đáng lo chứ không phải con mọt.",
      },
      {
        title: "Vo gạo vừa phải thôi",
        detail:
          "Vo hai lần nhẹ tay là sạch. Vo đến khi nước trong veo là bạn đang chà mất lớp cám bên ngoài, cơm nhạt đi và mất phần dinh dưỡng đáng giá nhất của hạt gạo.",
      },
    ],
    notes: [
      "Tủ lạnh là nơi cất gạo rất tốt nếu bạn mua ít, vì lạnh khiến trứng mọt không nở. Đựng trong hộp kín, để ngăn mát, dùng dần.",
      "CẨN THẬN với gạo đã mốc: hạt ngả vàng hoặc xám, vón cục, có mùi ẩm mốc rõ — không có cách vo hay nấu nào cứu được, phải bỏ. Đây là chỗ duy nhất trong bài này bạn không nên tiếc tiền.",
      "Đừng dùng thuốc chống côn trùng hay long não trong thùng gạo. Gạo hút mùi rất mạnh, và những thứ đó không dành để ăn.",
      "Gạo lứt và các loại còn nguyên cám nhanh hỏng hơn gạo trắng nhiều, vì lớp dầu trong cám dễ bị ôi. Loại này nên mua ít và cất ngăn mát.",
    ],
    faq: [
      {
        q: "Mua gạo ở cửa hàng gạo hay siêu thị thì hơn?",
        a: "Cửa hàng gạo thường rẻ hơn, được xem tận mắt và được tư vấn loại nào dẻo loại nào khô. Siêu thị thì tiện, bao bì kín và ghi rõ ngày sản xuất. Nếu gần nhà có một cửa hàng gạo quen thì đó thường là lựa chọn tốt hơn về lâu dài.",
      },
      {
        q: "Gạo quá hạn ghi trên bao thì có phải bỏ không?",
        a: "Gạo trắng khô ráo, cất kín, quá hạn vài tháng thường vẫn ăn được, chỉ là cơm kém thơm và kém dẻo. Cái quyết định là mùi và màu chứ không phải con số trên bao. Ngửi thấy mốc là bỏ, ngửi bình thường thì nấu thử một chén.",
      },
      {
        q: "Có mọt là do gạo bẩn phải không?",
        a: "Không hẳn. Trứng mọt thường đã có sẵn trong hạt từ trước khi đóng bao và chỉ chờ điều kiện ấm ẩm để nở. Vì vậy thùng kín và chỗ cất mát mới là cách phòng, chứ không phải chọn bao gạo trông sạch hơn.",
      },
      {
        q: "Nấu cơm bị nhão hoặc khô thì chỉnh ở đâu?",
        a: "Chỉnh lượng nước theo loại gạo, mỗi loại một khác, và gạo càng cũ càng cần thêm nước. Ghi lại tỉ lệ nào hợp với gạo nhà mình vào mẩu giấy dán trên nồi cơm, sau vài lần là chuẩn.",
      },
    ],
    sources: [],
  },
  {
    slug: "nem-nem-cuu-mon-man-nhat",
    title: "Nêm nếm cơ bản: món mặn quá, nhạt quá thì cứu thế nào",
    excerpt:
      "Lỡ tay đổ nguyên thìa muối vào nồi canh không phải là dấu chấm hết. Có vài cách chữa, và có vài trường hợp nên chấp nhận nấu lại.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Nguyên tắc sống còn: nêm ít một, nếm sau mỗi lần, vì thêm thì dễ chứ bớt thì gần như không thể. Món mặn quá thì cứu bằng cách thêm nước và thêm nguyên liệu để pha loãng, hoặc thêm vị chua ngọt để đánh lạc hướng vị giác. Món nhạt thì đừng vội rắc muối mà thử vị mặn có mùi trước, như nước mắm hay hạt nêm. Nếm lúc món còn nóng, vì món nguội đi sẽ có vị mặn hơn bạn tưởng.",
    prepare: [
      "Một chiếc thìa nhỏ riêng để nếm, rửa lại sau mỗi lần — đừng nếm bằng thìa đang khuấy nồi",
      "Muối, nước mắm, đường, bột ngọt hoặc hạt nêm, tiêu — bộ năm món cơ bản đủ cho hầu hết bữa cơm",
      "Một quả chanh và ít giấm, hai thứ cứu món hiệu quả nhất mà ít người nghĩ tới",
      "Ít nước dùng hoặc nước sôi để riêng, dùng khi cần pha loãng",
      "Khoai tây hoặc thêm rau củ tươi, thứ để 'ăn bớt' vị mặn trong nồi canh",
    ],
    steps: [
      {
        title: "Nêm theo thứ tự, đừng đổ hết một lượt",
        detail:
          "Vào muối hoặc nước mắm trước, rồi mới tới đường, cuối cùng mới tới tiêu và rau thơm. Mỗi lần chỉ nêm khoảng một phần ba lượng bạn đoán là cần, khuấy đều, chờ chừng nửa phút cho tan rồi mới nếm. Đổ ào một lượt là lỗi phổ biến nhất của người mới nấu.",
      },
      {
        title: "Nếm bằng thìa sạch và nếm khi món còn nóng",
        detail:
          "Múc ra thìa nhỏ, thổi cho bớt nóng rồi nếm. Món nguội đi thì vị mặn nổi rõ hơn, nên nếu lúc nóng đã thấy hơi mặn thì lúc ăn sẽ quá. Nếm hai ba lần liên tục thì lưỡi bị lờn — uống ngụm nước lọc giữa các lần.",
      },
      {
        title: "Món canh mặn: thêm nước và thêm cái",
        detail:
          "Chan thêm nước sôi hoặc nước dùng từng chút một, đồng thời bỏ thêm rau củ hoặc thịt vào để nồi có thêm 'cái' hút bớt vị. Chỉ thêm nước không thì canh loãng và nhạt nhẽo, nên hai việc phải đi cùng nhau.",
      },
      {
        title: "Món kho mặn: thêm nước và một chút đường",
        detail:
          "Cho thêm nửa chén nước, đun tiếp cho nguyên liệu ngấm lại, rồi thêm chút đường để làm dịu vị mặn. Đường không lấy bớt muối đi nhưng đánh lừa được cảm nhận của lưỡi khá tốt. Nếu vẫn mặn, kho thêm ít khoai tây hoặc đậu hũ vào cùng.",
      },
      {
        title: "Thử mẹo khoai tây với món nhiều nước",
        detail:
          "Gọt một củ khoai tây, cắt lát dày, thả vào nồi canh đang sôi, đun mười tới mười lăm phút rồi vớt bỏ. Khoai hút bớt phần nước mặn trong nồi. Cách này giúp được thật, nhưng đừng kỳ vọng nó cứu nổi một nồi mặn chát — nó chỉ kéo từ 'hơi quá' về 'vừa ăn'.",
      },
      {
        title: "Dùng vị chua để kéo lại thế cân bằng",
        detail:
          "Vắt vài giọt chanh hoặc nhỏ chút giấm vào món mặn, khuấy đều rồi nếm lại. Vị chua làm lưỡi bớt tập trung vào vị mặn. Món canh chua, món kho, món xào đều hợp mẹo này; món thanh nhẹ như canh rau ngót thì không nên.",
      },
      {
        title: "Món xào mặn thì trộn thêm phần nhạt",
        detail:
          "Xào thêm một mẻ rau củ không nêm gì rồi trộn chung. Đây gần như là cách duy nhất hiệu quả với món xào, vì món xào ít nước nên không pha loãng được. Không có nguyên liệu để xào thêm thì đành ăn kèm nhiều cơm trắng hơn.",
      },
      {
        title: "Món nhạt thì thêm vị mặn có mùi trước",
        detail:
          "Thay vì rắc muối, thử một thìa nước mắm hoặc chút hạt nêm. Muối chỉ cho vị mặn trơ, còn nước mắm mang theo mùi và độ đậm khiến món 'ra vị' hơn hẳn. Cho vào lúc gần tắt bếp để mùi thơm không bay mất.",
      },
      {
        title: "Nhạt mà thêm muối vẫn nhàn nhạt: thiếu chất béo",
        detail:
          "Nhiều món nhạt không phải vì thiếu muối mà vì thiếu dầu mỡ hoặc thiếu vị ngọt tự nhiên. Thử thêm chút dầu ăn, mỡ hành, hoặc một ít đường. Món canh thì thêm chút hành phi. Đây là mẹo người nấu lâu năm hay dùng mà ít khi nói ra.",
      },
      {
        title: "Cân nhắc chia đôi khi lỡ tay quá nặng",
        detail:
          "Nếu nồi mặn tới mức không nuốt được, chia đôi ra hai nồi rồi nấu thêm một mẻ nhạt hoàn toàn và trộn lại. Cách này chắc ăn nhất, đổi lại bạn có gấp đôi lượng thức ăn — hợp khi nhà đông người, không hợp khi ở một mình.",
      },
      {
        title: "Ghi lại tỉ lệ đã thành công",
        detail:
          "Lần nào nấu vừa miệng, ghi ngay vào ghi chú điện thoại: 'canh chua cá 1,5 lít nước — 2 thìa nước mắm, 1 thìa đường'. Sau mười món bạn có công thức riêng hợp khẩu vị nhà mình và không còn phải đoán mò.",
      },
      {
        title: "Biết lúc nào nên bỏ cuộc",
        detail:
          "Món đã mặn tới mức chát lưỡi, hoặc đã cháy khét, thì mọi mẹo đều vô ích và cứu tiếp chỉ tốn thêm nguyên liệu. Đổ đi, hít một hơi, nấu lại món gì đơn giản. Ai nấu ăn cũng có vài nồi phải đổ, chuyện bình thường.",
      },
    ],
    notes: [
      "Vị mặn tăng lên khi món nguội, và dịu đi khi ăn cùng cơm nóng. Nếu nấu để ăn dần thì nên nêm nhạt hơn bình thường một chút.",
      "Người đang phải ăn giảm muối theo lời dặn của bác sĩ nên dùng nước mắm pha loãng và tăng gia vị thơm như tỏi, gừng, tiêu, rau thơm, để món vẫn đậm đà mà ít muối.",
      "Bột ngọt và hạt nêm cũng chứa muối. Nêm cả ba thứ muối, nước mắm, hạt nêm mà không để ý thì món mặn lúc nào không hay.",
      "Nếm bằng thìa đang khuấy nồi rồi cho lại vào nồi là thói quen nên bỏ, nhất là khi nấu cho nhiều người ăn.",
    ],
    faq: [
      {
        q: "Nêm lúc nào là đúng: đầu, giữa hay cuối khi nấu?",
        a: "Món kho và món hầm nêm sớm để nguyên liệu ngấm. Món canh và món xào nêm ở gần cuối để rau không ra nước và không mất màu. Nước mắm và rau thơm luôn cho sau cùng vì đun lâu sẽ bay hết mùi.",
      },
      {
        q: "Món đã cháy khét đáy nồi thì cứu được không?",
        a: "Múc nhẹ phần trên sang nồi khác, tuyệt đối không cạo hay khuấy phần đáy vì mùi khét sẽ tan đều vào cả nồi. Nếu phần múc ra vẫn còn mùi khét thì thôi, không cứu được.",
      },
      {
        q: "Nấu cho người khác thì nêm theo khẩu vị của ai?",
        a: "Nêm nhạt hơn khẩu vị của bạn một chút, rồi để chén nước mắm, lọ tiêu, đĩa ớt trên bàn. Ai ăn đậm tự thêm được, còn người ăn nhạt thì không có cách nào bớt ra.",
      },
      {
        q: "Có nên tin theo công thức trên mạng không?",
        a: "Dùng để tham khảo thứ tự và nguyên liệu thì tốt, nhưng lượng gia vị nên giảm còn khoảng hai phần ba rồi nếm và tự chỉnh. Kích thước thìa, độ mặn của nước mắm và khẩu vị mỗi nhà mỗi khác.",
      },
    ],
    sources: [],
  },
  {
    slug: "so-che-rau-cu-thit-ca-cho-sach",
    title: "Sơ chế rau củ thịt cá: rửa sao cho sạch thật sự",
    excerpt:
      "Xả nước ào ào rồi vớt ra không phải là rửa. Vài phút làm đúng ở khâu này quyết định cả bữa ăn có an toàn hay không.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Rau lá thì ngâm nước sạch năm tới mười phút rồi rửa dưới vòi từng nắm nhỏ, đừng vò mạnh. Thịt thì rửa nhẹ dưới vòi nhỏ, tránh xối mạnh làm nước bắn khắp bồn; nhiều người chần nhanh qua nước sôi thay vì chà xát. Cá thì làm sạch mang, ruột và màng đen trong bụng rồi xát muối hoặc gừng cho hết tanh. Quan trọng nhất là tách thớt và dao cho đồ sống và đồ chín, vì đây mới là chỗ vi khuẩn lây từ món này sang món kia.",
    prepare: [
      "Hai cái thớt khác màu hoặc khác hình: một cho đồ sống, một cho đồ chín và rau ăn sống — món đầu tư đáng giá nhất trong bếp",
      "Một chậu hoặc rổ ngâm rau, tách riêng khỏi bồn rửa chén nếu được",
      "Muối hạt và một củ gừng, dùng để khử tanh cá và thịt",
      "Giấy ăn hoặc khăn sạch để thấm khô thịt cá trước khi ướp",
      "Găng tay nếu bạn ngại mùi tanh, và xà phòng để rửa tay ngay sau khi chạm đồ sống",
    ],
    steps: [
      {
        title: "Chia việc rửa thành hai lượt rõ ràng",
        detail:
          "Rửa rau củ trước, thịt cá sau, rồi cọ bồn. Làm ngược lại thì nước thịt sống dính lên rau bạn định ăn sống. Nếu bếp chỉ có một bồn thì đây là nguyên tắc bắt buộc phải nhớ.",
      },
      {
        title: "Rau lá: ngâm trước, rửa sau",
        detail:
          "Nhặt bỏ lá úa, ngâm ngập nước sạch năm tới mười phút cho đất cát rời ra và bụi bẩn bong bớt. Đừng ngâm quá lâu vì rau nhũn và mất chất. Ngâm xong đổ bỏ nước đó, không dùng lại lần hai.",
      },
      {
        title: "Rửa lại dưới vòi từng nắm nhỏ",
        detail:
          "Đây mới là bước làm sạch thật. Nước chảy cuốn bẩn đi, còn ngâm chỉ làm bẩn tan trong chậu. Cầm từng nắm nhỏ, lật hai mặt lá, chú ý phần cuống và nách lá vì đó là chỗ sâu và đất hay trốn. Vò mạnh làm nát rau chứ không làm sạch hơn.",
      },
      {
        title: "Rau ăn sống thì rửa kỹ hơn một bậc",
        detail:
          "Xà lách, rau thơm, giá đỗ ăn sống cần rửa từng lá dưới vòi rồi vẩy ráo. Nếu bụng bạn dễ nhạy cảm hoặc đang mang thai, cân nhắc chần nhanh qua nước sôi hoặc chuyển sang ăn rau nấu chín cho yên tâm.",
      },
      {
        title: "Củ quả: rửa trước rồi mới gọt",
        detail:
          "Gọt trước rồi rửa là đưa bẩn từ vỏ vào ruột qua lưỡi dao. Rửa sạch vỏ, dùng bàn chải mềm chà những củ vỏ sần như khoai, cà rốt, rồi mới gọt. Chỗ dập úng thì khoét bỏ rộng ra quanh vết một chút.",
      },
      {
        title: "Thịt: rửa nhẹ, đừng xối mạnh",
        detail:
          "Xối vòi mạnh làm nước bắn tung toé quanh bồn, mang theo vi khuẩn lên bát đĩa và mặt bếp. Rửa nhẹ dưới vòi nhỏ, hoặc rửa trong chậu rồi đổ bỏ nước. Nhiều người chần nhanh qua nước sôi rồi rửa lại — cách này vừa sạch bọt bẩn vừa đỡ bắn.",
      },
      {
        title: "Khử mùi thịt bằng muối hạt hoặc rượu gừng",
        detail:
          "Xát muối hạt lên miếng thịt, để một hai phút rồi rửa lại. Thịt có mùi nặng hơn như lòng thì dùng gừng đập dập với chút rượu trắng chà kỹ. Chanh và giấm cũng dùng được nhưng làm bề mặt thịt hơi tái.",
      },
      {
        title: "Cá: mang, ruột và màng đen là ba chỗ phải làm sạch",
        detail:
          "Người bán thường đã mổ giúp, nhưng về nhà nên kiểm lại: moi hết phần mang đỏ, cạo sạch lớp màng đen trong bụng, rút đường máu dọc sống lưng nếu là cá lớn. Ba chỗ này là nguồn tanh chính, bỏ sót thì ướp bao nhiêu gia vị cũng không hết mùi.",
      },
      {
        title: "Khử tanh cá bằng muối, gừng hoặc nước vo gạo",
        detail:
          "Xát muối hạt khắp mình cá, để hai ba phút rồi rửa. Hoặc ngâm cá trong nước vo gạo chừng mười phút, cách dân gian mà hiệu quả. Gừng giã nhỏ chà lên da cá cũng rất tốt, nhất là với cá nước ngọt.",
      },
      {
        title: "Thấm khô trước khi ướp hoặc chiên",
        detail:
          "Dùng giấy ăn thấm hết nước trên bề mặt. Thịt cá còn ướt thì gia vị bị pha loãng nên ướp không ngấm, và khi thả vào chảo dầu sẽ bắn dữ dội. Bước hai mươi giây này thay đổi hẳn chất lượng món chiên.",
      },
      {
        title: "Rửa tay, dao, thớt ngay sau khi xong đồ sống",
        detail:
          "Rửa tay bằng xà phòng chừng hai mươi giây, cọ thớt và dao bằng nước rửa chén rồi tráng lại. Đừng dùng cái thớt vừa thái thịt sống để thái dưa leo ăn kèm — đây là con đường lây nhiễm chéo phổ biến nhất trong bếp gia đình.",
      },
      {
        title: "Sơ chế xong thì cất đúng chỗ ngay",
        detail:
          "Thứ chưa nấu tới thì cho vào hộp; thịt cá để ngăn dưới cùng của tủ lạnh để nước không nhỏ xuống món khác. Rau đã rửa phải vẩy thật ráo trước khi cất, vì rau còn ướt cất vào tủ sẽ úng trong một hai ngày.",
      },
    ],
    notes: [
      "Ngâm rau bằng nước muối loãng không có tác dụng thần kỳ như nhiều người tin. Nước chảy và thời gian rửa mới là thứ làm sạch; muối chỉ giúp một phần rất nhỏ.",
      "CẨN THẬN với thớt gỗ đã nứt nẻ nhiều rãnh sâu: rãnh giữ lại vụn thịt và nước tanh, rửa không tới. Thớt tới mức đó thì nên thay.",
      "Đừng xối vòi mạnh vào thịt gà sống — nhiều cơ quan an toàn thực phẩm khuyến cáo tránh việc này vì nước bắn phát tán vi khuẩn khắp bếp. Nấu chín kỹ mới là thứ diệt được vi khuẩn.",
      "Trứng thì đừng rửa trước khi cất tủ lạnh, vì rửa làm mất lớp màng bảo vệ tự nhiên. Rửa ngay trước khi dùng thì được.",
    ],
    faq: [
      {
        q: "Có cần mua nước rửa rau củ chuyên dụng không?",
        a: "Không bắt buộc. Với người nấu ăn ở nhà, ngâm và rửa dưới vòi nước sạch đúng cách đã giải quyết được phần lớn vấn đề. Tiền đó để mua thêm một cái thớt riêng cho đồ sống thì đáng hơn nhiều.",
      },
      {
        q: "Thịt mua sáng, chiều mới nấu thì để đâu?",
        a: "Cho vào hộp kín, để ngăn mát dưới cùng của tủ lạnh, dùng trong ngày. Nếu để lâu hơn thì chia phần vừa một bữa rồi cấp đông ngay, đừng rã đông rồi đông lại vì mỗi lần như vậy chất lượng giảm rõ.",
      },
      {
        q: "Ngâm rau bao lâu là đủ, có ngâm qua đêm được không?",
        a: "Năm tới mười phút là đủ. Ngâm qua đêm khiến rau nhũn, mất vitamin tan trong nước, và còn tạo điều kiện cho vi khuẩn sinh sôi trong chậu nước ấm. Ngâm lâu không đồng nghĩa với sạch hơn.",
      },
      {
        q: "Chỉ có một cái thớt thì xoay xở kiểu gì?",
        a: "Làm rau củ và đồ ăn sống trước, đồ sống sau cùng, rồi cọ thớt bằng nước rửa chén và tráng nước nóng. Nhưng thớt nhựa thứ hai chỉ vài chục nghìn, và đó là vài chục nghìn đáng tiêu nhất trong bếp.",
      },
    ],
    sources: [],
  },
  {
    slug: "noi-chien-khong-dau-cho-nguoi-moi",
    title: "Nồi chiên không dầu cho người mới: món nào hợp, món nào hỏng",
    excerpt:
      "Mua về hào hứng dùng hai tuần rồi cất vào góc bếp là kết cục quen thuộc. Biết nó giỏi việc gì và dở việc gì thì cái nồi mới đáng tiền.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Nồi chiên không dầu thực chất là một lò nướng nhỏ có quạt thổi khí nóng, nên nó giỏi những món cần bề mặt giòn và khô: cánh gà, ba chỉ, khoai tây, cá phi lê, hâm lại đồ chiên. Nó dở những món nhiều nước, món tẩm bột ướt và rau lá mỏng. Quy tắc quan trọng nhất là làm nóng nồi trước ba tới năm phút, xếp một lớp mỏng đừng chồng chất, và lắc giỏ giữa chừng. Quét một lớp dầu mỏng lên thực phẩm vẫn cần thiết — 'không dầu' nghĩa là ít dầu chứ không phải không giọt nào.",
    prepare: [
      "Chổi quét dầu hoặc bình xịt dầu, để phết một lớp mỏng thay vì đổ ào",
      "Giấy nến loại chuyên dùng cho nồi chiên có đục lỗ, giúp đỡ phải cọ giỏ — nhưng chỉ đặt vào khi đã có thức ăn đè lên",
      "Kẹp gắp bằng silicon hoặc gỗ, tránh kim loại nhọn làm xước lớp chống dính",
      "Giấy ăn để thấm khô thực phẩm trước khi cho vào",
      "Nhiệt kế thực phẩm nếu bạn hay nướng thịt dày — không bắt buộc nhưng rất đáng cho người mới",
    ],
    steps: [
      {
        title: "Hiểu đúng nó là cái gì",
        detail:
          "Đây không phải nồi chiên, mà là lò nướng đối lưu thu nhỏ. Hiểu vậy thì bạn sẽ tra công thức bằng từ 'nướng' thay vì 'chiên', và bớt thất vọng khi món ra không giống đồ chiên ngập dầu ngoài hàng.",
      },
      {
        title: "Chạy không tải một lần trước khi dùng lần đầu",
        detail:
          "Rửa giỏ và khay, lau khô, rồi cho nồi chạy ở nhiệt cao nhất khoảng mười phút với giỏ rỗng. Việc này đốt hết mùi nhựa và dầu công nghiệp còn sót từ nhà máy. Mở cửa sổ vì sẽ hơi có mùi.",
      },
      {
        title: "Luôn làm nóng nồi ba tới năm phút trước khi cho đồ vào",
        detail:
          "Bỏ qua bước này là lý do số một khiến món ra bị khô mà không giòn. Thức ăn cần gặp không khí đã nóng ngay từ giây đầu để se mặt lại. Bật đúng nhiệt độ bạn định nấu, để chạy vài phút, rồi mới xếp đồ vào.",
      },
      {
        title: "Thấm khô và quét một lớp dầu mỏng",
        detail:
          "Lau khô bề mặt thực phẩm, quét hoặc xịt một lớp dầu thật mỏng. Dầu giúp truyền nhiệt và tạo màu vàng đẹp; không dầu chút nào thì món xỉn màu và dai. Đừng đổ dầu xuống đáy khay vì nó chỉ bốc khói chứ không tới được thức ăn.",
      },
      {
        title: "Xếp một lớp mỏng, chừa khoảng hở",
        detail:
          "Chất đầy giỏ là hỏng cả mẻ, vì khí nóng không luồn qua được nên món bên trong bị hấp chứ không nướng. Thà làm hai mẻ còn hơn một mẻ chồng chất. Đây là sai lầm nhiều người mắc nhất, chỉ sau việc quên làm nóng.",
      },
      {
        title: "Lắc giỏ hoặc lật mặt giữa chừng",
        detail:
          "Khoảng giữa thời gian nấu, kéo giỏ ra lắc vài cái với món nhỏ như khoai, hoặc lật mặt với món lớn như đùi gà. Mở giỏ ra giữa chừng không làm hỏng gì cả, nồi tự tạm dừng rồi chạy lại. Không lắc thì mặt dưới nhợt nhạt còn mặt trên cháy.",
      },
      {
        title: "Bắt đầu từ nhiệt vừa và thời gian ngắn",
        detail:
          "Người mới nên đặt thấp hơn công thức chừng mười độ và ngắn hơn vài phút, rồi kiểm tra và nấu thêm. Mỗi nồi một khác, có nồi nóng hơn hẳn con số hiển thị. Thiếu thì nấu thêm được, cháy rồi thì chịu.",
      },
      {
        title: "Ghi lại công thức đã thành công",
        detail:
          "Dán một mẩu giấy lên thân nồi: 'cánh gà 190 độ 18 phút, lật ở phút 10'. Sau mười món bạn có bảng tra riêng cho đúng cái nồi nhà mình, và đó là lúc chiếc nồi thật sự bắt đầu tiết kiệm thời gian.",
      },
      {
        title: "Biết những món nó làm rất tốt",
        detail:
          "Cánh gà, đùi gà, ba chỉ quay, sườn, khoai tây và khoai lang cắt miếng, cá phi lê, đậu hũ, rau củ cứng như bí, cà rốt, súp lơ. Đặc biệt xuất sắc ở việc hâm nóng lại đồ chiên hôm trước, bánh mì hay pizza nguội — giòn lại như mới, hơn hẳn lò vi sóng.",
      },
      {
        title: "Biết những món nên tránh",
        detail:
          "Món nhiều nước như canh, kho, hấp thì không làm được. Đồ tẩm bột ướt sẽ chảy xuống đáy khay và cháy khét. Rau lá mỏng như xà lách, rau thơm bị quạt thổi bay và cháy trong một phút. Phô mai để trần thì chảy dính khắp giỏ.",
      },
      {
        title: "Kiểm tra chín kỹ với thịt dày",
        detail:
          "Bề mặt vàng đẹp không có nghĩa là bên trong đã chín, nhất là với đùi gà hay miếng thịt dày. Cắt thử chỗ dày nhất xem nước tiết ra còn hồng không, hoặc dùng nhiệt kế thực phẩm cho chắc. Thà nấu thêm ba phút còn hơn ăn thịt gà tái.",
      },
      {
        title: "Vệ sinh khi nồi còn ấm",
        detail:
          "Chờ nguội bớt nhưng đừng để nguội hẳn, rồi ngâm giỏ vào nước ấm pha nước rửa chén chừng mười phút và lau bằng miếng mềm. Đừng dùng búi sắt vì làm xước lớp chống dính, mà lớp đó hỏng thì cái nồi coi như hết đời. Nhớ lau cả phần thanh nhiệt phía trên, chỗ mỡ bắn lên và tích lại gây khói.",
      },
    ],
    notes: [
      "CẨN THẬN: đừng đặt giấy nến vào giỏ rỗng rồi bật nồi. Quạt sẽ thổi giấy lên chạm thanh nhiệt và bốc cháy. Luôn có thức ăn đè lên giấy.",
      "Nồi cần khoảng trống quanh thân và phía sau để thoát nhiệt. Đừng kê sát tường hay nhét vào hốc tủ bếp lúc đang chạy.",
      "Nồi chiên không dầu tốn điện đáng kể. Cắm trực tiếp vào ổ trên tường, đừng dùng chung ổ nối dài với ấm siêu tốc hay bàn ủi vì rất dễ quá tải.",
      "Món ra khô cứng gần như luôn do một trong ba nguyên nhân: không làm nóng trước, quên quét dầu, hoặc nấu quá lâu. Kiểm ba thứ đó trước khi đổ lỗi cho cái nồi.",
    ],
    faq: [
      {
        q: "Nồi chiên không dầu có thật sự tốt cho sức khoẻ hơn chiên ngập dầu không?",
        a: "Món làm ra dùng ít dầu hơn hẳn nên lượng chất béo nạp vào giảm, đó là điểm cộng rõ ràng. Nhưng nó không biến đồ ăn nhiều muối, nhiều mỡ thành món lành mạnh. Cách nấu chỉ là một phần, nguyên liệu mới quyết định.",
      },
      {
        q: "Mua cỡ bao nhiêu lít là vừa?",
        a: "Ở một mình thì ba tới bốn lít là đủ và nhanh nóng. Nhà ba bốn người nên chọn năm tới bảy lít, vì nồi nhỏ phải làm nhiều mẻ thì bạn sẽ chán rồi cất nó đi. Cỡ nồi nên chọn theo số người ăn chứ đừng theo giá khuyến mãi.",
      },
      {
        q: "Có nấu được đồ đông lạnh mà không cần rã đông không?",
        a: "Được, và đây là điểm mạnh của nó với đồ chế biến sẵn như khoai tây đông lạnh, gà viên, chả giò. Cộng thêm vài phút so với đồ tươi và nhớ lắc giỏ giữa chừng. Với thịt sống nguyên miếng dày thì vẫn nên rã đông trước cho chín đều.",
      },
      {
        q: "Nồi bốc khói khi đang nấu thì có sao không?",
        a: "Thường là do mỡ tích ở đáy khay hoặc bám trên thanh nhiệt bị đốt cháy. Rút điện, để nguội, lau sạch đáy khay và thanh nhiệt rồi nấu lại. Với món nhiều mỡ như ba chỉ, đổ một chút nước xuống đáy khay từ đầu sẽ hạn chế khói.",
      },
    ],
    sources: [],
  },
];
