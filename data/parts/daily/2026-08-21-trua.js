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
  {
    slug: "tien-dien-phong-tro-tang-vot",
    title: "Tiền điện phòng trọ tăng vọt: kiểm ở đâu, cắt ở đâu",
    excerpt:
      "Tháng trước 400 nghìn, tháng này 900 nghìn mà sinh hoạt không đổi. Trước khi cãi nhau với chủ trọ, có vài chỗ nên kiểm tra.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Việc đầu tiên là tự đọc công tơ điện của phòng mình hai ngày liên tiếp cùng một giờ, lấy hiệu số để biết mỗi ngày bạn dùng bao nhiêu số. Có con số đó rồi mới nói chuyện được với chủ trọ, còn không thì chỉ là cảm giác. Thủ phạm ngốn điện gần như luôn nằm trong nhóm đồ sinh nhiệt: máy lạnh, bình nóng lạnh, ấm siêu tốc, bàn ủi. Chụp ảnh công tơ vào ngày đầu và ngày cuối mỗi tháng là thói quen giúp bạn không bao giờ bị tính nhầm.",
    prepare: [
      "Điện thoại có máy ảnh, để chụp mặt công tơ — bằng chứng tốt nhất và không tốn đồng nào",
      "Hoá đơn hoặc giấy tính tiền điện của hai ba tháng gần nhất, để so số dùng chứ không chỉ so tiền",
      "Hợp đồng thuê trọ, phần ghi giá điện mỗi số",
      "Một cuốn sổ hoặc ghi chú điện thoại để ghi chỉ số theo ngày",
      "Danh sách các thiết bị điện trong phòng, kèm công suất ghi trên tem của từng cái",
    ],
    steps: [
      {
        title: "Tìm và xác định đúng công tơ của phòng mình",
        detail:
          "Nhà trọ thường gắn một dãy công tơ ở cầu thang hoặc sân. Nhờ chủ trọ chỉ rõ cái nào là của phòng bạn và chụp lại vị trí. Nhiều vụ 'tiền điện tăng bất thường' hoá ra là do đọc nhầm công tơ phòng bên.",
      },
      {
        title: "Đọc chỉ số hai ngày liên tiếp, cùng một giờ",
        detail:
          "Tối nay 21h chụp một tấm, tối mai 21h chụp một tấm. Lấy số sau trừ số trước là ra lượng điện bạn dùng trong đúng 24 giờ. Đây là con số quan trọng nhất trong cả bài, vì mọi tranh luận sau đó đều dựa vào nó.",
      },
      {
        title: "Thử ngày 'tắt hết' để tìm rò rỉ",
        detail:
          "Chọn một buổi đi vắng vài tiếng, rút hết phích cắm và tắt aptomat của các thiết bị lớn, chỉ để tủ lạnh. Ghi chỉ số lúc đi và lúc về. Nếu số vẫn nhảy nhiều thì hoặc là có thiết bị ngốn ngầm, hoặc công tơ có vấn đề, hoặc bạn đang bị chia điện với chỗ khác.",
      },
      {
        title: "Nhìn vào nhóm đồ sinh nhiệt trước tiên",
        detail:
          "Máy lạnh, bình nóng lạnh, ấm siêu tốc, bàn ủi, nồi chiên, lò vi sóng — nhóm này tiêu điện gấp hàng chục lần đèn và quạt. Nếu tháng này bạn bật máy lạnh nhiều hơn hoặc mới sắm bình nóng lạnh thì nguyên nhân đã rõ, không cần điều tra thêm.",
      },
      {
        title: "Kiểm bình nóng lạnh có bị bật suốt ngày không",
        detail:
          "Đây là thủ phạm thầm lặng phổ biến nhất trong phòng trọ. Nhiều người bật rồi quên tắt, bình cứ đun đi đun lại cả ngày. Bật trước khi tắm chừng mười lăm tới ba mươi phút rồi tắt hẳn, mỗi tháng có thể chênh cả trăm nghìn.",
      },
      {
        title: "Chỉnh máy lạnh thay vì bỏ dùng máy lạnh",
        detail:
          "Đặt khoảng 26–27 độ kèm quạt nhẹ thì mát tương đương mà tốn ít điện hơn hẳn để 20 độ. Đóng kín cửa, che rèm buổi trưa, và vệ sinh lưới lọc mỗi vài tháng — lưới bẩn khiến máy chạy nặng và tốn thêm điện mà không mát hơn.",
      },
      {
        title: "Rút phích những thứ cắm suốt mà ít dùng",
        detail:
          "Sạc điện thoại, sạc laptop, tivi ở chế độ chờ, lò vi sóng hiển thị giờ đều rút điện ngầm. Từng cái không đáng kể, nhưng cả phòng cộng lại một tháng cũng bằng vài bữa ăn. Cắm chung vào ổ có công tắc rồi tắt một nhát cho gọn.",
      },
      {
        title: "So SỐ ĐIỆN chứ đừng so TIỀN giữa các tháng",
        detail:
          "Tiền có thể tăng vì giá mỗi số thay đổi, còn số điện mới phản ánh bạn dùng nhiều hay ít. Lấy hoá đơn ba tháng, ghi ra ba con số điện dùng cạnh nhau. Nếu số điện gần như nhau mà tiền vọt lên thì vấn đề nằm ở giá chứ không ở bạn.",
      },
      {
        title: "Đối chiếu giá mỗi số với hợp đồng",
        detail:
          "Mở hợp đồng xem ghi bao nhiêu một số. Nếu chủ trọ thu cao hơn mức đã ghi, đó là chuyện phải hỏi. Nhiều nơi thu theo giá kinh doanh cao hơn giá điện sinh hoạt — bạn có quyền hỏi căn cứ, và đây cũng là điểm nên làm rõ ngay từ lúc xem phòng.",
      },
      {
        title: "Nói chuyện với chủ trọ bằng số liệu, không bằng cảm xúc",
        detail:
          "Cách nói dễ được lắng nghe: 'Cô ơi, con có chụp công tơ ngày đầu và ngày cuối tháng, ra 210 số, mà giấy tính là 340 số, cô xem lại giúp con với ạ.' Có ảnh và có số thì cuộc nói chuyện thành đối chiếu chứ không thành cãi vã.",
      },
      {
        title: "Đề nghị đọc công tơ cùng nhau",
        detail:
          "Xin phép có mặt lúc chủ trọ chốt số cuối tháng, hoặc xin chụp ảnh công tơ ngay lúc chốt. Đề nghị này rất hợp lý và hầu hết chủ trọ tử tế đều đồng ý. Từ đó về sau chuyện tiền điện sẽ nhẹ nhàng hẳn.",
      },
      {
        title: "Ghi chỉ số hàng tháng thành thói quen",
        detail:
          "Ngày mùng một mỗi tháng, chụp một tấm công tơ, đặt tên ảnh theo tháng. Mất mười giây. Sau nửa năm bạn có cả bảng số liệu, biết mùa nào mình dùng nhiều và không bao giờ ở thế đuối lý nữa.",
      },
    ],
    notes: [
      "Nếu công tơ nhảy nhanh bất thường ngay cả khi đã tắt hết, hãy báo chủ trọ để kiểm tra đường dây. Chập điện hoặc rò điện vừa tốn tiền vừa nguy hiểm, đừng tự mở nắp công tơ hay đấu lại dây.",
      "CẨN THẬN: ngửi thấy mùi khét, thấy ổ cắm nóng bất thường hoặc có vết cháy xém, thì rút phích ra ngay và báo chủ trọ. Đây là dấu hiệu cháy chứ không phải chuyện tiền điện.",
      "Thoả thuận về giá điện nên có trong hợp đồng bằng chữ, ghi rõ bao nhiêu đồng một số. Thoả thuận miệng thì tới lúc tranh chấp không ai chứng minh được gì.",
      "Đừng tự ý can thiệp vào công tơ dưới bất kỳ hình thức nào. Ngoài chuyện nguy hiểm, đó còn là hành vi vi phạm pháp luật và hậu quả nặng hơn số tiền bạn định tiết kiệm rất nhiều.",
    ],
    faq: [
      {
        q: "Chủ trọ thu điện cao hơn giá nhà nước có được không?",
        a: "Đây là điểm hay tranh chấp và quy định có thay đổi theo từng thời kỳ. Việc bạn nên làm trước tiên là hỏi thẳng chủ trọ về căn cứ tính giá và đối chiếu với hợp đồng đã ký. Nếu muốn chắc chắn, hỏi trực tiếp công ty điện lực khu vực hoặc uỷ ban phường nơi bạn ở.",
      },
      {
        q: "Phòng có tủ lạnh thì tốn bao nhiêu điện?",
        a: "Tủ lạnh chạy suốt nhưng công suất thấp nên thường không phải thủ phạm chính. Muốn biết chính xác thì làm phép thử ngày 'tắt hết' ở bước ba, chỉ để tủ lạnh chạy, rồi so chỉ số.",
      },
      {
        q: "Đang ở ghép thì chia tiền điện thế nào cho công bằng?",
        a: "Cách gọn nhất là chia đều theo đầu người, vì bóc tách ai dùng bao nhiêu gần như không khả thi. Nếu có người dùng máy lạnh riêng trong phòng riêng thì thoả thuận cộng thêm một khoản cố định mỗi tháng, và thống nhất bằng văn bản ngắn ngay từ đầu.",
      },
      {
        q: "Có nên mua thiết bị đo điện riêng cho từng ổ cắm không?",
        a: "Nếu bạn thật sự muốn tìm ra thiết bị ngốn điện thì loại đo cắm giữa ổ và phích khá rẻ và hữu ích. Nhưng với đa số người thuê trọ, phép thử ngày 'tắt hết' đã đủ để trả lời câu hỏi, không cần mua gì thêm.",
      },
    ],
    sources: [],
  },
  {
    slug: "den-hong-aptomat-nhay-tu-xu-ly",
    title: "Đèn hỏng, aptomat nhảy: tự xử lý trước khi gọi thợ",
    excerpt:
      "Mất điện nguyên phòng lúc 10 giờ tối, gọi thợ thì họ tính tiền đêm. Nhiều trường hợp chỉ cần gạt một cái cần là xong.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Mất điện đột ngột trong phòng thì việc đầu tiên là nhìn ra ngoài xem hàng xóm có điện không. Có thì lỗi ở phòng bạn, và chín phần mười là do aptomat đã nhảy. Rút hết phích cắm ra, gạt aptomat lên, rồi cắm lại từng thứ một để tìm thiết bị gây chập. Với bóng đèn không sáng, hãy thử theo thứ tự bóng, đui, công tắc — và tuyệt đối tắt aptomat trước khi chạm vào bất cứ thứ gì.",
    prepare: [
      "Đèn pin hoặc đèn điện thoại, cầm sẵn trước khi bắt đầu vì bạn sắp cắt điện",
      "Một cái ghế chắc chắn, không phải ghế nhựa lung lay — ngã lúc đang với tay lên trần là tai nạn thật",
      "Bóng đèn dự phòng đúng loại và đúng đui, mua sẵn để trong ngăn kéo",
      "Bút thử điện, giá vài chục nghìn ở tiệm điện, món nên có trong mọi nhà",
      "Số điện thoại của chủ trọ và của một thợ điện gần nhà, lưu sẵn trong máy",
    ],
    steps: [
      {
        title: "Xác định phạm vi mất điện",
        detail:
          "Nhìn ra hành lang, nhìn nhà hàng xóm, nhìn đèn đường. Cả khu tối thì là cúp điện chung, ngồi chờ là xong. Chỉ mình phòng bạn tối thì mới cần làm tiếp các bước dưới.",
      },
      {
        title: "Tìm hộp aptomat và nhìn vị trí cần gạt",
        detail:
          "Hộp thường ở gần cửa ra vào hoặc trong nhà tắm. Cần gạt ở giữa hoặc ở dưới nghĩa là aptomat đã ngắt. Nếu bạn chưa biết hộp aptomat phòng mình ở đâu thì hãy đi tìm ngay bây giờ, đừng đợi tới lúc mất điện giữa đêm.",
      },
      {
        title: "Rút hết phích cắm TRƯỚC khi gạt lại",
        detail:
          "Đây là bước nhiều người bỏ qua rồi thắc mắc sao gạt lên nó lại nhảy xuống ngay. Rút hết ấm siêu tốc, bàn ủi, máy lạnh, nồi chiên, sạc. Aptomat nhảy là nó đang bảo vệ bạn khỏi một sự cố nào đó, gạt bừa lên là bỏ qua lời cảnh báo.",
      },
      {
        title: "Gạt cần xuống hẳn rồi mới đẩy lên",
        detail:
          "Nhiều aptomat phải gạt dứt khoát xuống vị trí tắt trước, rồi mới đẩy lên vị trí bật. Đẩy nửa vời từ vị trí giữa thì nó không ăn. Nghe tiếng tách và cần đứng vững ở trên là được.",
      },
      {
        title: "Cắm lại từng thiết bị một để tìm thủ phạm",
        detail:
          "Cắm một cái, chờ vài giây, rồi mới cắm cái tiếp theo. Cắm tới cái nào mà aptomat nhảy ngay thì đó chính là thiết bị hỏng. Rút nó ra, để riêng, và đừng dùng nữa cho tới khi sửa hoặc thay.",
      },
      {
        title: "Aptomat nhảy đi nhảy lại dù đã rút hết: dừng lại và gọi thợ",
        detail:
          "Trường hợp này là sự cố trong đường dây âm tường chứ không phải ở thiết bị, và không phải việc bạn tự làm được. Để aptomat ở vị trí tắt, gọi chủ trọ hoặc thợ điện. Đừng gạt lên gạt xuống nhiều lần vì nguy cơ cháy là có thật.",
      },
      {
        title: "Đèn không sáng: kiểm công tắc và ổ trước",
        detail:
          "Thử công tắc vài lần, thử cắm một thiết bị khác vào ổ gần đó xem có điện không. Nếu cả phòng có điện mà riêng cái đèn tối thì vấn đề nằm ở bóng, đui hoặc công tắc — theo đúng thứ tự đó.",
      },
      {
        title: "Tắt aptomat trước khi chạm vào đèn",
        detail:
          "Không phải chỉ tắt công tắc, mà tắt hẳn aptomat của phòng. Công tắc có thể được đấu vào dây trung tính nên tắt rồi mà đui vẫn còn điện. Dùng bút thử điện chấm vào đui để chắc chắn trước khi đưa tay vào.",
      },
      {
        title: "Thay bóng đúng loại, đúng đui",
        detail:
          "Mang bóng cũ ra tiệm điện và nói: 'anh cho em cái đúng như này'. Đui xoáy và đui cài khác nhau, công suất cũng khác. Vặn vừa chặt tay, đừng ghì mạnh vì bóng dễ vỡ trong tay và đó là vết cắt rất khó chịu.",
      },
      {
        title: "Đèn tuýp nhấp nháy thì nghĩ tới chấn lưu",
        detail:
          "Bóng tuýp chớp chớp rồi tắt, hoặc sáng hai đầu mà giữa tối, thường là chấn lưu hoặc tăng phô đã yếu chứ không phải bóng. Đây là lúc gọi thợ, vì thay chấn lưu cần đấu dây. Nhiều người tiện thể đổi luôn sang đèn tuýp led cho đỡ phiền về sau.",
      },
      {
        title: "Ổ cắm không có điện thì thử ổ khác trước",
        detail:
          "Cắm thiết bị vào ổ khác trong phòng. Nếu chỉ một ổ chết thì báo chủ trọ, đừng tự tháo mặt ổ ra sửa. Còn nếu ổ nóng, đổi màu hoặc có mùi khét thì ngừng dùng ngay và báo gấp.",
      },
      {
        title: "Biết dừng đúng lúc và gọi ai",
        detail:
          "Thay bóng, gạt aptomat, rút phích — ba việc này bạn làm được. Đấu dây, thay công tắc âm tường, mở hộp điện, chạm vào công tơ — không phải việc của bạn. Với nhà thuê thì phần lớn hư hỏng thuộc về chủ trọ, nên gọi báo trước khi tự bỏ tiền sửa.",
      },
    ],
    notes: [
      "CẨN THẬN: tay ướt, chân trần đứng trên nền ẩm mà đụng vào điện là tình huống nguy hiểm nhất. Lau khô tay, đi dép, và làm khi trời còn sáng nếu có thể chờ được.",
      "Aptomat nhảy không phải là hỏng hóc phiền toái — đó là thiết bị an toàn đang làm đúng việc của nó. Đừng bao giờ thay bằng loại có dòng lớn hơn để 'khỏi nhảy nữa', vì làm vậy là gỡ bỏ lớp bảo vệ cuối cùng.",
      "Nhà thuê thì trước khi tự sửa gì tốn tiền, nhắn tin cho chủ trọ một câu và giữ lại tin nhắn. Vừa rõ trách nhiệm, vừa có cơ sở trừ vào tiền nhà nếu bạn ứng trước.",
      "Ngửi thấy mùi khét quanh ổ điện hoặc hộp aptomat thì tắt aptomat tổng và gọi thợ ngay trong đêm. Đây là trường hợp không nên chờ tới sáng.",
    ],
    faq: [
      {
        q: "Aptomat nhảy mỗi lần bật máy lạnh thì sao?",
        a: "Thường là do đường dây hoặc aptomat không chịu nổi công suất của máy, hoặc máy đang có vấn đề. Đây là việc của thợ và của chủ trọ chứ không phải việc bạn xoay xở. Trong lúc chờ thì đừng bật máy lạnh cùng lúc với các thiết bị nặng khác.",
      },
      {
        q: "Bóng led vừa mua đã hỏng thì có bảo hành không?",
        a: "Đèn led thường có bảo hành vài tháng tới vài năm tuỳ hãng. Giữ hộp và hoá đơn, mang ra đúng tiệm đã mua. Nếu bóng cháy liên tục ở cùng một vị trí thì vấn đề nằm ở đui hoặc điện áp chứ không phải ở bóng.",
      },
      {
        q: "Có nên tự mua aptomat về thay không?",
        a: "Không nên với người chưa có kinh nghiệm, và với nhà thuê thì càng không. Chọn sai dòng định mức là mất tác dụng bảo vệ. Báo chủ trọ hoặc gọi thợ, chi phí thay một cái aptomat thường không lớn.",
      },
      {
        q: "Phòng hay bị giật nhẹ khi chạm vào vỏ máy giặt hay vòi nước nóng thì sao?",
        a: "Đây là dấu hiệu rò điện và không được xem nhẹ dù cảm giác chỉ tê tê. Ngừng dùng thiết bị đó, báo chủ trọ để kiểm tra tiếp đất và đường dây. Đừng chờ tới khi cảm giác mạnh hơn mới xử lý.",
      },
    ],
    sources: [],
  },
  {
    slug: "voi-nuoc-ri-va-nuoc-yeu",
    title: "Vòi nước rỉ và nước chảy yếu: sửa vặt trong nhà trọ",
    excerpt:
      "Tiếng nước tí tách cả đêm, hoá đơn nước tăng đều mỗi tháng. Phần lớn trường hợp chỉ cần một cái ron cao su vài nghìn đồng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Vòi rỉ nước ở đầu vòi thường là do ron cao su bên trong đã mòn, thay chừng mười phút và tốn vài nghìn. Rỉ ở chỗ nối thì thử siết lại bằng mỏ lết và quấn thêm băng tan. Nước chảy yếu thì tháo cái lưới lọc ở đầu vòi ra rửa trước đã, vì cặn vôi bám ở đó là nguyên nhân phổ biến nhất. Trước mọi việc, nhớ khoá van nước và lót một cái khăn dưới chỗ làm.",
    prepare: [
      "Một cái mỏ lết răng hoặc kìm mỏ quạ, món dụng cụ đáng có nhất trong nhà trọ",
      "Cuộn băng tan trắng, giá vài nghìn, quấn ren chống rỉ nước",
      "Bộ ron cao su nhiều cỡ, mua sẵn ở tiệm kim khí gần nhà",
      "Một chậu nhỏ và khăn cũ để hứng nước còn đọng trong ống",
      "Giấm trắng hoặc nước tẩy cặn, để ngâm lưới lọc bị đóng vôi",
    ],
    steps: [
      {
        title: "Tìm van khoá nước trước khi động tay vào gì",
        detail:
          "Van thường nằm ngay dưới bồn rửa, sau bồn cầu, hoặc ở đầu đường ống vào phòng. Vặn theo chiều kim đồng hồ để khoá. Không tìm thấy van riêng thì khoá van tổng của nhà. Việc này phải làm xong trước, không có ngoại lệ.",
      },
      {
        title: "Xả hết nước còn trong ống",
        detail:
          "Khoá van xong, mở vòi cho nước còn lại chảy ra hết. Bỏ qua bước này thì lúc tháo ra bạn sẽ được tắm một trận. Lót khăn và đặt chậu dưới chỗ định làm.",
      },
      {
        title: "Xác định nước rỉ ở đâu",
        detail:
          "Lau khô toàn bộ vòi rồi quan sát vài phút. Rỉ ở miệng vòi khi đã khoá là do ron bên trong mòn. Rỉ ở chân vòi hoặc chỗ nối ống là do ren lỏng hoặc băng tan mục. Rỉ ở thân vòi thì thường phải thay cả vòi. Xác định sai chỗ là tháo nhầm và mất cả buổi.",
      },
      {
        title: "Rỉ ở chỗ nối: siết lại trước, tháo ra sau",
        detail:
          "Dùng mỏ lết siết thêm khoảng một phần tư vòng, đừng ghì hết sức vì ren nhựa rất dễ nứt. Mở nước thử. Vẫn rỉ thì mới tháo hẳn ra, gỡ hết băng tan cũ, quấn băng mới rồi lắp lại.",
      },
      {
        title: "Quấn băng tan đúng chiều",
        detail:
          "Quấn theo chiều kim đồng hồ khi nhìn từ đầu ren vào, tức là cùng chiều với lúc bạn vặn ống vào. Quấn ngược chiều thì lúc siết băng sẽ bị tuột ra. Quấn chừng bảy tới mười vòng, kéo hơi căng cho băng bám vào ren.",
      },
      {
        title: "Rỉ ở đầu vòi: thay ron cao su",
        detail:
          "Tháo tay gạt hoặc tay vặn, thường có một con ốc nhỏ giấu dưới nắp nhựa màu. Lấy phần lõi ra, nhìn cái vòng cao su đã dẹp hoặc nứt và thay bằng cái mới cùng cỡ. Mang cái cũ ra tiệm để mua cho khỏi sai kích thước.",
      },
      {
        title: "Nước yếu: tháo lưới lọc đầu vòi ra rửa",
        detail:
          "Đầu vòi thường có một cái lưới nhỏ vặn ra được bằng tay hoặc bằng kìm bọc vải. Trong đó thường đầy cặn vôi trắng và cát. Ngâm giấm chừng ba mươi phút, chải bằng bàn chải đánh răng cũ rồi lắp lại. Đây là mẹo đơn giản mà giải quyết được phần lớn ca nước yếu.",
      },
      {
        title: "Vẫn yếu thì kiểm van có mở hết chưa",
        detail:
          "Van dưới bồn nhiều khi bị vặn hờ từ lần sửa trước. Mở hết cỡ rồi thử lại. Cũng nên hỏi hàng xóm cùng tầng xem nhà họ có yếu không — nếu cả dãy đều yếu thì vấn đề nằm ở bơm hoặc bể nước chung, và đó là việc của chủ trọ.",
      },
      {
        title: "Bồn cầu chảy rỉ rả không ngừng",
        detail:
          "Mở nắp két nước phía sau, nhìn cái nắp cao su dưới đáy két. Nó vênh hoặc mòn thì nước rỉ liên tục xuống bồn, và đây là thứ ngốn nước nhiều nhất mà ít ai để ý. Chỉnh lại phao hoặc thay nắp cao su đều rẻ, nhưng nếu thấy phức tạp thì báo chủ trọ.",
      },
      {
        title: "Thử nước và lau khô kiểm lại",
        detail:
          "Mở van từ từ, đừng mở phăng cả cỡ. Lau khô hết chỗ vừa làm, mở nước chạy một lúc rồi sờ tay quanh mối nối. Khô ráo là xong. Còn ẩm thì siết thêm chút nữa hoặc quấn lại băng tan.",
      },
      {
        title: "Theo dõi thêm một ngày",
        detail:
          "Đặt một tờ giấy khô dưới chỗ vừa sửa, hôm sau xem có ướt không. Rỉ chậm thì mắt thường không thấy ngay nhưng tờ giấy thì thấy. Cách kiểm này cũng dùng được để phát hiện rò ống nước âm tường.",
      },
      {
        title: "Biết lúc nào phải gọi thợ",
        detail:
          "Nước phun mạnh không cầm được, ống âm tường bị rò, tường thấm loang rộng, hoặc bạn đã tháo ra mà không lắp lại được như cũ — đó là lúc dừng. Khoá van tổng, chụp ảnh, gọi chủ trọ. Cố sửa tiếp thường làm hỏng nặng thêm và phần đền bù sẽ đắt hơn tiền thợ.",
      },
    ],
    notes: [
      "Nhà thuê thì báo chủ trọ trước khi tự sửa, kể cả việc nhỏ. Nhiều chủ trọ sẵn sàng trả tiền vật tư, và nếu bạn tự làm hỏng thêm thì trách nhiệm lại thành của bạn.",
      "CẨN THẬN với ren nhựa: siết quá tay là nứt, và một cái vòi nứt lúc nửa đêm thì phiền gấp mười lần cái vòi rỉ. Siết vừa đủ chặt rồi thử nước, thiếu thì siết thêm.",
      "Một vòi rỉ tí tách cả tháng có thể mất cả khối nước. Đó là chưa kể tiếng nước nhỏ giọt lúc hai giờ sáng, thứ không đo được bằng tiền.",
      "Chụp ảnh trước khi tháo bất cứ thứ gì. Lúc lắp lại mà quên thứ tự các mảnh là chuyện rất hay xảy ra, và tấm ảnh cứu bạn khỏi việc đó.",
    ],
    faq: [
      {
        q: "Không có mỏ lết thì mượn ở đâu?",
        a: "Hỏi chủ trọ hoặc hàng xóm, phần lớn nhà đều có một cái. Nếu định mua thì một cái mỏ lết răng cỡ vừa chỉ vài chục nghìn và bạn sẽ dùng nó nhiều lần trong đời ở trọ.",
      },
      {
        q: "Sửa xong vẫn rỉ thì có phải mua vòi mới không?",
        a: "Nếu đã thay ron và quấn lại băng tan mà vẫn rỉ ngay tại thân vòi thì thường là vòi đã nứt hoặc mòn bên trong, thay cả cái sẽ nhanh hơn sửa. Vòi loại thường không đắt, nhưng với nhà thuê thì đây là khoản chủ trọ nên chi.",
      },
      {
        q: "Nước máy yếu vào giờ cao điểm có phải hỏng không?",
        a: "Không hẳn. Buổi sáng và chiều tối cả khu cùng dùng nên áp lực giảm là bình thường. Nếu yếu suốt ngày và các nhà khác thì bình thường, lúc đó mới là vấn đề riêng của phòng bạn.",
      },
      {
        q: "Nước có cặn trắng bám khắp vòi và ấm đun thì xử lý sao?",
        a: "Đó là cặn vôi do nước cứng. Ngâm giấm hoặc dùng nước tẩy cặn định kỳ cho vòi, lưới lọc và ấm đun. Nếu quá nhiều thì hỏi chủ trọ về việc lắp bộ lọc thô ở đầu nguồn.",
      },
    ],
    sources: [],
  },
  {
    slug: "o-ghep-thoa-thuan-truoc",
    title: "Ở ghép cùng phòng: thoả thuận gì trước để khỏi mệt về sau",
    excerpt:
      "Người ta hiếm khi nghỉ chơi vì một chuyện lớn. Thường là vì cái bát để trong bồn ba ngày, cộng dồn suốt sáu tháng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Ngồi lại nói chuyện trước khi dọn vào ở chung, đừng đợi tới lúc có mâu thuẫn mới bàn. Cần thống nhất năm thứ: tiền chia thế nào và ai giữ, việc nhà chia ra sao, giờ giấc ngủ nghỉ, chuyện dẫn bạn về, và cách xử lý khi một người muốn dọn ra. Viết ra thành một tờ ghi chú chung trên điện thoại, không cần trịnh trọng nhưng phải có chữ. Trí nhớ của hai người về cùng một cuộc nói chuyện luôn khác nhau sau ba tháng.",
    prepare: [
      "Một buổi cà phê chừng một tiếng, trước ngày dọn vào, không phải nói vội ở cửa phòng",
      "Một ghi chú chung trên điện thoại mà cả hai cùng sửa được",
      "Bản chụp hợp đồng thuê nhà, để rõ ai đứng tên và ai chịu trách nhiệm với chủ trọ",
      "Danh sách đồ đạc chung sẽ mua và đồ riêng của mỗi người",
      "Một ứng dụng chia tiền hoặc đơn giản là một bảng tính chung",
    ],
    steps: [
      {
        title: "Nói về tiền trước tiên, dù thấy ngại",
        detail:
          "Tiền nhà, điện, nước, mạng, gas, nước uống chia thế nào. Ai ứng trả trước và hạn cuối chuyển lại là ngày mấy. Ngại nói chuyện tiền lúc đầu thì sau này sẽ phải nói trong lúc bực, và lúc đó khó hơn nhiều.",
      },
      {
        title: "Chốt ngày đóng tiền cố định mỗi tháng",
        detail:
          "Ví dụ mùng 3 hằng tháng, ai cũng chuyển phần của mình vào tài khoản người đứng tên. Đặt báo thức nhắc trong điện thoại cả hai. Cách này bỏ hẳn khâu đi nhắc nhau, thứ gây khó chịu âm ỉ nhất trong nhà ở ghép.",
      },
      {
        title: "Làm rõ ai đứng tên hợp đồng và điều đó nghĩa là gì",
        detail:
          "Người đứng tên chịu trách nhiệm với chủ trọ về tiền nhà và về hư hỏng. Nếu người kia dọn đi giữa chừng thì người đứng tên gánh phần còn lại. Nói thẳng chuyện này từ đầu để cả hai hiểu mình đang nhận rủi ro gì.",
      },
      {
        title: "Chia việc nhà theo đầu việc, đừng chia theo tuần",
        detail:
          "Kiểu 'tuần này bạn dọn' rất dễ đổ vỡ vì không ai nhớ đang tới tuần ai. Chia theo việc cố định thì rõ hơn: một người phụ trách bếp và bồn rửa, một người phụ trách nhà tắm và đổ rác. Ai làm phần nấy, không phải nhắc.",
      },
      {
        title: "Thống nhất một quy tắc bếp duy nhất",
        detail:
          "Đề nghị đơn giản nhất và hiệu quả nhất: ai nấu người đó rửa, xong trong ngày. Bát để qua đêm trong bồn là nguồn gốc của khoảng một nửa số mâu thuẫn ở ghép, không đùa. Thống nhất một câu này thôi cũng đã giải quyết được rất nhiều.",
      },
      {
        title: "Nói về giờ giấc ngủ và tiếng ồn",
        detail:
          "Người dậy 6h và người ngủ lúc 2h sáng sống chung được, nhưng phải biết trước để thu xếp. Thoả thuận sau 23h thì đeo tai nghe, đi nhẹ, và không gọi điện thoại to trong phòng. Ai làm ca đêm thì càng cần nói rõ nhịp sinh hoạt của mình.",
      },
      {
        title: "Bàn thẳng về chuyện dẫn bạn về",
        detail:
          "Đây là chuyện ai cũng ngại nói mà lại hay thành xích mích lớn nhất. Nói trước: báo nhau trước bao lâu, bạn ở lại qua đêm được không, và người yêu ở lại bao nhiêu ngày một tuần thì ổn. Không có câu trả lời đúng chung, chỉ có câu trả lời mà cả hai chấp nhận được.",
      },
      {
        title: "Phân định đồ chung và đồ riêng",
        detail:
          "Ghi ra: cái gì mua chung và chia đôi tiền, cái gì của riêng ai. Đồ ăn trong tủ lạnh nên có ngăn riêng hoặc dán tên. Nghe hơi quá đáng nhưng nó ngăn được câu 'ai ăn hộp sữa chua của tôi', câu nói khởi đầu cho nhiều cuộc chiến tranh lạnh.",
      },
      {
        title: "Viết ra và cùng đọc lại một lượt",
        detail:
          "Mở ghi chú chung, gõ lại tất cả những gì vừa thống nhất, mỗi ý một dòng. Cả hai đọc lại và sửa chỗ chưa đồng ý. Mất mười lăm phút và nó có giá trị hơn mọi lời hứa miệng.",
      },
      {
        title: "Hẹn nhau nói lại sau một tháng",
        detail:
          "Đặt lịch một buổi trò chuyện ngắn sau bốn tuần: cái gì đang ổn, cái gì thấy phiền. Có cái hẹn cố định thì người ta dễ nói ra chuyện nhỏ, thay vì cất trong bụng cho tới lúc bùng nổ vì một cái khăn ướt vắt trên ghế.",
      },
      {
        title: "Khi có chuyện thì nói về hành vi, đừng nói về con người",
        detail:
          "Nói 'tuần này bồn rửa đầy bát nên mình khó nấu' thay vì 'bạn ở bẩn quá'. Câu đầu bàn về một việc sửa được, câu sau tấn công một con người và chắc chắn nhận lại thế thủ. Nói sớm, nói nhẹ, nói cụ thể.",
      },
      {
        title: "Thoả thuận trước cách chia tay cho tử tế",
        detail:
          "Báo trước bao nhiêu ngày nếu muốn dọn ra, thường là ba mươi ngày. Tiền cọc chia thế nào, đồ chung xử lý ra sao, ai chịu trách nhiệm tìm người thế chỗ. Bàn chuyện này lúc còn vui thì dễ; lúc đã giận nhau thì mọi con số đều thành tranh cãi.",
      },
    ],
    notes: [
      "Ở ghép với bạn thân không tự động dễ hơn ở ghép với người lạ. Nhiều tình bạn đứt vì ở chung mà không ai chịu nói thẳng, vì sợ mất lòng. Càng thân càng nên có thoả thuận rõ ràng.",
      "Đừng cho bạn cùng phòng vay tiền lớn khi vẫn đang ở chung. Nợ chưa trả cộng với sống chung là công thức khiến cả tiền lẫn tình bạn đều mất.",
      "Giữ lại toàn bộ tin nhắn chuyển khoản tiền nhà và tiền điện nước. Đây là thứ duy nhất chứng minh được ai đã đóng gì khi tới lúc tính sổ.",
      "Nếu bạn cùng phòng có hành vi khiến bạn thấy không an toàn, đừng cố chịu đựng cho hết hợp đồng. An toàn của bạn quan trọng hơn khoản tiền cọc, và hãy nói với người bạn tin tưởng.",
    ],
    faq: [
      {
        q: "Bạn cùng phòng chậm đóng tiền hoài thì làm sao?",
        a: "Nói riêng, sớm, và cụ thể: 'tháng này mình ứng trước rồi, bạn chuyển giúp mình trước ngày 5 nhé'. Nếu lặp lại nhiều lần thì chuyển sang cách mỗi người tự chuyển thẳng cho chủ trọ, để bạn không còn ở thế đi đòi.",
      },
      {
        q: "Có nên viết hợp đồng ở ghép đàng hoàng không?",
        a: "Với người lạ hoặc khi số tiền lớn thì rất nên, dù chỉ là một trang giấy hai bên cùng ký và chụp lại. Với bạn bè thì một ghi chú chung trên điện thoại cũng đủ, miễn là có chữ chứ không chỉ có lời nói.",
      },
      {
        q: "Muốn dọn ra giữa chừng thì có mất cọc không?",
        a: "Tuỳ hợp đồng với chủ trọ và tuỳ thoả thuận giữa hai người. Cách êm nhất là báo sớm và tìm giúp người vào thế chỗ. Hỏi rõ điều khoản này ngay lúc ký hợp đồng thuê, đừng đợi tới lúc cần dọn mới đọc.",
      },
      {
        q: "Người kia không chịu ngồi lại nói chuyện thì sao?",
        a: "Nhắn tin thay vì nói trực tiếp, viết ngắn gọn từng điểm và hỏi bạn thấy sao. Có người ngại đối thoại trực diện nhưng trả lời tin nhắn rất thoải mái. Nếu vẫn không có phản hồi gì trong nhiều lần thì đó cũng là một câu trả lời, và bạn nên tính đường ở riêng.",
      },
    ],
    sources: [],
  },
  {
    slug: "sam-do-cho-phong-tro-dau-tien",
    title: "Sắm đồ cho phòng trọ đầu tiên: mua gì trước, mua gì sau",
    excerpt:
      "Ngày đầu dọn vào là lúc dễ tiêu sạch tiền nhất. Có thứ mua ngay hôm đó, có thứ để ba tháng sau vẫn chưa cần.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Chia đồ thành ba đợt. Đợt một mua trong ngày dọn vào, chỉ gồm thứ thiếu là không ngủ và không tắm được: chiếu hoặc nệm, chăn gối, đồ vệ sinh, giấy, xà phòng, một cái quạt, ổ cắm nối dài. Đợt hai mua trong tuần đầu khi đã biết phòng thiếu gì thật sự. Đợt ba là đồ lớn như tủ lạnh, máy giặt, để dành sau một tháng, và lúc đó bạn sẽ ngạc nhiên vì có thứ hoá ra không cần mua.",
    prepare: [
      "Một danh sách viết sẵn trong điện thoại và một hạn mức tiền cho ngày đầu tiên",
      "Ảnh chụp phòng cùng số đo các mảng tường và ô cửa, để không mua nhầm cỡ",
      "Số đo chỗ định kê đồ, đo bằng thước dây hoặc bằng bước chân cũng được",
      "Danh sách đồ chủ trọ đã trang bị sẵn, hỏi rõ trước khi mua trùng",
      "Các nhóm mua bán đồ cũ trong khu vực, nơi mua được đồ tốt với giá bằng một phần ba",
    ],
    steps: [
      {
        title: "Hỏi chủ trọ phòng đã có sẵn những gì",
        detail:
          "Nhiều phòng đã có giường, tủ, nóng lạnh, thậm chí máy lạnh. Hỏi rõ trước khi mua để khỏi khiêng về rồi không có chỗ kê. Nhân tiện hỏi luôn có được khoan tường, dán tường hay không, vì điều đó quyết định bạn mua kệ đứng hay kệ treo.",
      },
      {
        title: "Đợt một: chỉ mua thứ thiếu là không sống nổi đêm đó",
        detail:
          "Chỗ nằm, chăn gối, khăn tắm, giấy vệ sinh, xà phòng, kem đánh răng, một cái quạt nếu trời nóng, ổ cắm nối dài, và ít đồ ăn liền. Bấy nhiêu là đủ qua đêm đầu tiên. Mọi thứ khác đều chờ được, dù lúc đứng trong siêu thị bạn sẽ thấy cái gì cũng cần.",
      },
      {
        title: "Ở thử một tuần rồi mới mua tiếp",
        detail:
          "Sống vài ngày bạn sẽ biết phòng thật sự thiếu gì. Có thể bạn tưởng cần cái bàn học, ở rồi mới thấy cần cái giá phơi đồ hơn nhiều. Đây là bước tiết kiệm nhất trong cả bài và cũng là bước khó nhất, vì ai cũng nôn nóng bày biện.",
      },
      {
        title: "Đợt hai: đồ dùng hằng ngày sau khi đã hiểu phòng",
        detail:
          "Giá phơi đồ, móc treo, thùng rác, chổi và cây lau nhà, hộp đựng đồ, đèn bàn, rèm cửa, dây phơi. Nhóm này rẻ nhưng làm phòng ở được thật sự. Ưu tiên giá phơi đồ nếu phòng bạn không có chỗ phơi ngoài trời.",
      },
      {
        title: "Bếp: bắt đầu bằng bộ tối thiểu",
        detail:
          "Một cái nồi, một cái chảo, một con dao, một cái thớt, hai bát hai đũa, một cái rổ. Bấy nhiêu nấu được hầu hết bữa cơm thường ngày. Bộ nồi mười hai món trông hấp dẫn nhưng bạn sẽ dùng đúng hai cái, còn lại chiếm chỗ trong căn phòng vốn đã chật.",
      },
      {
        title: "Đợt ba: đồ lớn, để sau một tháng",
        detail:
          "Tủ lạnh, máy giặt, máy lạnh, bàn ghế lớn. Sau một tháng bạn biết rõ mình có nấu ăn thật không, có giặt tay nổi không, và tiền còn bao nhiêu. Nhiều người mua tủ lạnh ngay tuần đầu rồi cả năm chỉ để trong đó vài lon nước.",
      },
      {
        title: "Cân nhắc đồ cũ cho những món giá trị lớn",
        detail:
          "Tủ lạnh, máy giặt, quạt, bàn ghế mua lại của người sắp chuyển đi thường rẻ bằng một phần ba mà vẫn tốt. Tìm trong các nhóm mua bán của khu vực hoặc hỏi ngay chính chủ trọ, vì họ biết ai sắp dọn. Đi xem tận nơi, cắm điện thử, và nhớ tính cả tiền chở về.",
      },
      {
        title: "Đo trước khi mua bất cứ thứ gì lớn hơn cái ghế",
        detail:
          "Đo chỗ định kê, và đo cả cửa ra vào, cầu thang, hành lang. Chuyện cái tủ không lọt qua cửa xảy ra thường xuyên hơn bạn nghĩ, và lúc đó vừa mất tiền chở vừa mất mặt với người bán.",
      },
      {
        title: "Ưu tiên đồ nhẹ, gấp gọn, dễ mang đi",
        detail:
          "Người thuê trọ thường chuyển nhà sau một hai năm. Cái tủ gỗ nặng ba mươi cân sẽ thành gánh nặng lúc chuyển. Chọn kệ lắp ráp, tủ vải, bàn gấp — vừa rẻ vừa mang theo được. Đây là kiểu suy nghĩ mà chỉ người đã chuyển trọ vài lần mới có.",
      },
      {
        title: "Đừng mua đồ trang trí trong tuần đầu",
        detail:
          "Tranh, đèn dây, cây cảnh, thảm — chờ đã. Khi phòng đã đủ đồ dùng và bạn đã biết mình hay ngồi ở góc nào, lúc đó trang trí mới đúng chỗ và đúng gu. Mua sớm thì thường vài tháng sau lại tháo xuống.",
      },
      {
        title: "Ghi lại mọi khoản đã tiêu trong tháng đầu",
        detail:
          "Mở một ghi chú, gõ từng khoản kèm số tiền. Con số tổng cuối tháng thường lớn hơn bạn tưởng khá nhiều. Bảng này còn giúp bạn biết đồ nào của mình khi tới lúc dọn ra, nhất là khi ở ghép.",
      },
      {
        title: "Chừa lại một khoản dự phòng",
        detail:
          "Đừng tiêu sạch tiền vào việc sắm đồ. Luôn giữ lại một khoản đủ cho một tháng tiền nhà và ăn uống. Tháng đầu ở trọ hay có chi phí phát sinh bất ngờ, và túng tiền vào lúc vừa chuyển tới nơi lạ là cảm giác rất nản.",
      },
    ],
    notes: [
      "Món đáng tiền nhất trong phòng trọ thường là thứ liên quan tới giấc ngủ: nệm hoặc chiếu tử tế, gối vừa cổ, rèm che sáng. Ngủ ngon thì mọi thứ khác đều dễ chịu hơn.",
      "CẨN THẬN với ổ cắm nối dài giá rẻ: đừng cắm ấm siêu tốc, bàn ủi hay nồi chiên vào loại dây mỏng. Chọn loại có công tắc, có cầu chì, và cắm đồ công suất lớn thẳng vào ổ tường.",
      "Mua đồ cũ thì nhớ cắm điện thử tại chỗ và hỏi lý do bán. Đồ điện tử cũ không có bảo hành, nên cái gì hỏng là mất luôn, đừng ham rẻ với món có giá gần bằng đồ mới.",
      "Hỏi chủ trọ trước khi khoan tường hay dán keo lên tường. Vài cái lỗ khoan có thể bị trừ vào tiền cọc lúc trả phòng, và số tiền đó thường lớn hơn cái kệ bạn treo.",
    ],
    faq: [
      {
        q: "Ngân sách sắm đồ cho phòng trọ đầu tiên khoảng bao nhiêu?",
        a: "Rất khác nhau tuỳ phòng đã có sẵn gì và bạn mua mới hay mua cũ. Cách làm đúng không phải là nhắm một con số, mà là chia ba đợt như trên và đặt hạn mức cho từng đợt. Làm vậy thì bạn luôn tiêu trong khả năng.",
      },
      {
        q: "Nên mua tủ lạnh loại nào cho phòng trọ?",
        a: "Nếu bạn ít nấu ăn thì loại nhỏ dưới trăm lít là đủ và tốn ít điện. Nếu nấu ăn thường xuyên và ở ghép thì mới cần cỡ lớn hơn. Nhưng câu hỏi nên trả lời trước là: sau một tháng ở, bạn có thật sự nấu ăn không.",
      },
      {
        q: "Có nên mua máy giặt hay đi giặt ngoài?",
        a: "Tính thử: mỗi tuần giặt ngoài hết bao nhiêu, nhân với thời gian bạn định ở đó. So với giá một cái máy giặt cũ. Nếu ở dưới một năm thì giặt ngoài thường hợp lý hơn, chưa kể chuyện chuyển nhà phải khiêng máy đi.",
      },
      {
        q: "Đồ nào không nên mua dù thấy rẻ?",
        a: "Đồ điện không rõ nguồn gốc, ổ cắm dây mỏng, nệm cũ của người lạ, và mọi thứ cồng kềnh mà bạn không chắc sẽ dùng. Trong phòng trọ, chỗ trống cũng là một thứ có giá trị, đôi khi giá trị hơn món đồ bạn định nhét vào đó.",
      },
    ],
    sources: [],
  },
  {
    slug: "ke-benh-voi-bac-si-trong-5-phut",
    title: "Kể bệnh với bác sĩ: nói gì trong năm phút khám ngắn ngủi",
    excerpt:
      "Chờ ba tiếng, vào phòng khám năm phút, ra tới cửa mới nhớ điều quan trọng nhất chưa nói. Chuẩn bị trước thì khác hẳn.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Trước khi đi khám, viết ra ba dòng: triệu chứng chính là gì, bắt đầu từ khi nào, và điều bạn lo nhất. Vào phòng khám thì nói triệu chứng nặng nhất trước, kèm mốc thời gian cụ thể thay vì nói 'dạo này'. Mang theo danh sách những thứ bạn đang uống và các giấy tờ khám cũ. Trước khi ra khỏi phòng, hỏi lại ba câu: tôi bị gì, tôi cần làm gì tiếp, và dấu hiệu nào thì phải quay lại ngay.",
    prepare: [
      "Một tờ giấy hoặc ghi chú điện thoại viết sẵn ba dòng: triệu chứng, thời gian, điều lo nhất",
      "Danh sách mọi thứ bạn đang uống, kể cả thực phẩm chức năng và thuốc bắc — bác sĩ cần biết đủ để tránh tương tác",
      "Toàn bộ giấy khám, đơn cũ, kết quả xét nghiệm gần đây, xếp theo thứ tự thời gian",
      "Thẻ bảo hiểm y tế và giấy tờ tuỳ thân",
      "Ảnh chụp triệu chứng nếu là thứ nhìn thấy được như nốt trên da, vì lúc đi khám nó có thể đã lặn",
    ],
    steps: [
      {
        title: "Viết ra trước khi đi, đừng tin vào trí nhớ",
        detail:
          "Ngồi trong phòng khám, đối diện bác sĩ, người ta hay quên hoặc nói lộn xộn. Ba dòng viết sẵn giải quyết chuyện đó. Bác sĩ cũng dễ nắm hơn khi bạn nói có đầu có đuôi.",
      },
      {
        title: "Ghi mốc thời gian cụ thể thay vì nói chung chung",
        detail:
          "Đừng nói 'dạo này em thấy mệt' mà nói 'khoảng ba tuần nay, bắt đầu từ đầu tháng, mỗi buổi chiều'. Thời gian là một trong những manh mối quan trọng nhất với người khám, và nó là thứ chỉ bạn biết.",
      },
      {
        title: "Mô tả triệu chứng bằng từ đời thường, đừng cố dùng từ chuyên môn",
        detail:
          "Nói 'đau như bị bóp' hay 'đau âm ỉ như kim châm' còn hữu ích hơn là cố gọi tên một bệnh bạn đọc trên mạng. Nói rõ đau ở chỗ nào, lan đi đâu, lúc nào đau hơn, làm gì thì đỡ.",
      },
      {
        title: "Nói triệu chứng nặng nhất TRƯỚC",
        detail:
          "Thời gian khám thường rất ngắn nên đừng để dành chuyện quan trọng tới cuối. Nếu bạn có ba vấn đề, nói ngay từ đầu: 'em có ba chuyện muốn hỏi, quan trọng nhất là chuyện thứ nhất'. Câu đó giúp bác sĩ phân bổ thời gian.",
      },
      {
        title: "Đưa danh sách những thứ đang uống",
        detail:
          "Kể cả vitamin, thực phẩm chức năng, thuốc nam, thuốc do người quen mách. Nhiều thứ tưởng vô hại lại ảnh hưởng tới thứ bác sĩ định kê. Chụp ảnh vỏ hộp mang theo là cách nhanh nhất, khỏi phải đọc tên.",
      },
      {
        title: "Kể cả những thứ bạn thấy ngại",
        detail:
          "Rượu bia, thuốc lá, thói quen ăn ngủ, chuyện tiêu hoá, chuyện tâm lý. Bác sĩ hỏi những điều này vì nó liên quan tới chẩn đoán chứ không phải để đánh giá bạn. Giấu một chi tiết có thể dẫn tới hướng xử lý sai.",
      },
      {
        title: "Nói thẳng điều bạn lo sợ nhất",
        detail:
          "Câu 'em lo là em bị gì đó nghiêm trọng ạ' hoàn toàn nên nói. Bác sĩ sẽ giải thích trúng nỗi lo của bạn thay vì nói chung chung, và nhiều khi chính câu này giúp bạn ra về nhẹ lòng hơn hẳn.",
      },
      {
        title: "Ghi chép hoặc xin phép ghi âm",
        detail:
          "Cầm giấy bút ghi lại tên bệnh, việc cần làm, ngày tái khám. Nếu muốn ghi âm thì xin phép trước một câu lịch sự. Người lo lắng thường chỉ nhớ được một phần nhỏ những gì bác sĩ nói, đây là chuyện rất bình thường.",
      },
      {
        title: "Hỏi lại nếu chưa hiểu, đừng gật cho xong",
        detail:
          "Câu nên dùng: 'dạ bác sĩ nói lại giúp em chỗ này được không ạ, em chưa rõ lắm'. Không ai đánh giá bạn vì hỏi lại, và việc hiểu sai lời dặn mới là thứ gây hậu quả thật.",
      },
      {
        title: "Trước khi ra, hỏi đủ ba câu chốt",
        detail:
          "Một, em đang bị gì ạ. Hai, giờ em cần làm gì tiếp. Ba, dấu hiệu nào thì em phải quay lại ngay hoặc đi cấp cứu. Câu thứ ba là câu quan trọng nhất mà ít người hỏi, và nó là thứ giúp bạn an tâm khi về nhà.",
      },
      {
        title: "Hỏi rõ về đơn và về lịch tái khám",
        detail:
          "Uống trong bao lâu, có cần kiêng gì không, uống trước hay sau ăn, và bao giờ thì quay lại. Nếu chữ trong đơn khó đọc thì nhờ nhân viên y tế đọc giúp, đừng tự đoán và cũng đừng nhờ người bán thuốc đoán hộ.",
      },
      {
        title: "Về nhà thì lưu lại toàn bộ giấy tờ",
        detail:
          "Chụp ảnh đơn thuốc và kết quả, để chung một thư mục trong điện thoại đặt tên theo ngày. Lần khám sau bạn sẽ có sẵn lịch sử, và điều đó giúp bác sĩ rất nhiều — nhất là khi bạn đổi nơi khám.",
      },
    ],
    notes: [
      "Bài này chỉ hướng dẫn cách chuẩn bị và cách nói chuyện, KHÔNG PHẢI TƯ VẤN Y KHOA. Mọi chẩn đoán và chỉ định đều phải do nhân viên y tế trực tiếp thăm khám đưa ra.",
      "PHẢI ĐI CẤP CỨU NGAY, không chờ tới lịch khám, nếu có: ĐAU NGỰC DỮ DỘI, KHÓ THỞ, NÓI NGỌNG HOẶC MÉO MIỆNG HOẶC YẾU LIỆT MỘT BÊN NGƯỜI, NGẤT XỈU, CO GIẬT, CHẢY MÁU KHÔNG CẦM, ĐAU BỤNG DỮ DỘI ĐỘT NGỘT, HOẶC SỐT CAO KÈM LƠ MƠ.",
      "Đừng tự chẩn đoán bằng thông tin trên mạng rồi vào phòng khám để 'xác nhận'. Hãy kể triệu chứng thật và để người khám kết luận; đọc trước chỉ nên dùng để biết mình cần hỏi gì.",
      "Nếu thấy chưa yên tâm với kết luận, bạn hoàn toàn có quyền đi khám nơi khác để nghe ý kiến thứ hai. Đó là chuyện bình thường và không có gì thất lễ.",
    ],
    faq: [
      {
        q: "Có nên nhờ người thân vào cùng phòng khám không?",
        a: "Rất nên nếu bạn lo lắng, nghe kém, hoặc đang mệt. Người đi cùng sẽ nhớ giúp những điều bạn quên, và ghi chép giúp bạn. Hãy hỏi nhân viên y tế trước vì có nơi giới hạn số người vào phòng.",
      },
      {
        q: "Khám xong vẫn không hết bệnh thì làm sao?",
        a: "Quay lại tái khám đúng hẹn và mô tả rõ điều gì đã thay đổi, điều gì không. Nói cụ thể 'em đã làm đúng như dặn nhưng triệu chứng vẫn như cũ sau bảy ngày' thì hữu ích hơn nhiều so với chỉ nói vẫn chưa khỏi.",
      },
      {
        q: "Nếu thấy bác sĩ vội và không có thời gian nghe thì sao?",
        a: "Nói ngắn và có trọng tâm là cách thích nghi tốt nhất, và đây chính là lý do nên viết sẵn ba dòng ở nhà. Nếu vẫn thấy chưa được giải đáp, bạn có thể đặt lịch khám lại vào khung giờ vắng hơn hoặc chọn nơi khám khác.",
      },
      {
        q: "Có nên mang hết giấy khám cũ từ nhiều năm trước không?",
        a: "Mang những thứ liên quan tới vấn đề hiện tại và các kết quả xét nghiệm trong khoảng một năm gần đây. Xếp theo thứ tự thời gian, mới nhất để trên. Cả xấp giấy lộn xộn thì bác sĩ không đủ thời gian đọc.",
      },
    ],
    sources: [],
  },
  {
    slug: "dat-lich-kham-online-do-phai-cho",
    title: "Đặt lịch khám online: đỡ phải chờ được bao nhiêu",
    excerpt:
      "Dậy từ 4 giờ sáng xếp hàng lấy số là hình ảnh quen thuộc. Nhiều nơi giờ đã đặt được qua điện thoại, và đây là cách làm.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Vào thẳng trang web chính thức của đúng bệnh viện bạn định tới, tìm mục đặt lịch khám, chọn chuyên khoa và khung giờ. Nhiều bệnh viện cũng có ứng dụng riêng hoặc nhận đặt qua tổng đài. Đặt lịch giúp bạn có khung giờ và số thứ tự, nhưng không có nghĩa là vào khám đúng phút đó — vẫn nên tới sớm khoảng ba mươi phút. Quan trọng nhất: chỉ dùng trang chính thức, tuyệt đối không đặt qua người lạ nhận làm hộ có thu phí.",
    prepare: [
      "Tên chính xác của bệnh viện bạn muốn khám, và tên đường của cơ sở đó vì nhiều nơi có vài cơ sở khác nhau",
      "Số căn cước và thẻ bảo hiểm y tế, thường cần khi điền thông tin",
      "Số điện thoại đang dùng, vì mã đặt lịch và tin nhắn xác nhận sẽ gửi về đó",
      "Giấy chuyển tuyến nếu bạn muốn khám bảo hiểm ở tuyến trên — hỏi trước cho chắc",
      "Một phương thức thanh toán trực tuyến nếu nơi đó yêu cầu đặt cọc phí khám",
    ],
    steps: [
      {
        title: "Chọn đúng nơi khám trước khi nghĩ tới chuyện đặt lịch",
        detail:
          "Bệnh thông thường thì khám ở trạm y tế phường hoặc bệnh viện quận là nhanh và đỡ tốn. Chỉ lên tuyến trên khi được chuyển hoặc khi cần chuyên khoa sâu. Chọn đúng tuyến ngay từ đầu tiết kiệm cho bạn cả buổi lẫn tiền.",
      },
      {
        title: "Chỉ vào trang chính thức của bệnh viện",
        detail:
          "Gõ tên bệnh viện và tìm địa chỉ trang web chính thức, hoặc gọi tổng đài của bệnh viện hỏi họ đặt lịch ở đâu. Có nhiều trang và tài khoản mạng xã hội mạo danh nhận đặt hộ rồi thu phí. Nghi ngờ thì gọi điện hỏi thẳng bệnh viện, đó là cách kiểm chứng chắc nhất.",
      },
      {
        title: "Tìm mục đặt lịch và chọn chuyên khoa",
        detail:
          "Không rõ mình cần khoa nào thì chọn khám tổng quát hoặc nội tổng hợp, rồi họ sẽ hướng bạn đi tiếp. Chọn sai khoa thì mất công đi lại, nên nếu phân vân hãy gọi tổng đài hỏi trước một câu.",
      },
      {
        title: "Chọn khung giờ, ưu tiên giữa tuần và giữa buổi",
        detail:
          "Sáng thứ Hai và ngày đầu tháng thường đông nhất. Giữa tuần, khoảng chín tới mười giờ sáng hoặc đầu giờ chiều thường dễ thở hơn. Đây là kinh nghiệm chung, còn thực tế mỗi nơi mỗi khác nên hỏi người quen đã khám ở đó là chuẩn nhất.",
      },
      {
        title: "Điền thông tin đúng như trên giấy tờ",
        detail:
          "Họ tên, ngày sinh, số căn cước, số thẻ bảo hiểm phải khớp từng chữ với giấy tờ. Sai một chi tiết là tới nơi phải làm lại từ đầu ở quầy tiếp nhận và mất luôn thứ tự đã đặt.",
      },
      {
        title: "Lưu lại mã đặt lịch và tin nhắn xác nhận",
        detail:
          "Chụp màn hình ngay, đừng chỉ tin vào việc mở lại ứng dụng. Sóng yếu hoặc hết pin lúc tới nơi là chuyện thường, và tấm ảnh chụp màn hình cứu bạn khỏi việc phải làm lại từ đầu.",
      },
      {
        title: "Kiểm tra xem có phải trả phí trước không",
        detail:
          "Một số nơi yêu cầu thanh toán phí khám khi đặt, số khác thì trả tại chỗ. Đọc kỹ phần này và giữ biên lai. Mọi con số về lệ phí đều thay đổi tuỳ nơi và tuỳ thời điểm, nên hỏi trực tiếp cho chắc thay vì tin con số ai đó kể lại.",
      },
      {
        title: "Vẫn tới sớm khoảng ba mươi phút",
        detail:
          "Đặt lịch giúp bạn có số và có khung giờ, chứ không phải là hẹn giờ chính xác. Vẫn cần thời gian cho khâu tiếp nhận, đối chiếu giấy tờ và tìm đúng phòng. Tới sớm rồi ngồi chờ vẫn dễ chịu hơn là tới muộn và mất lượt.",
      },
      {
        title: "Tới nơi thì làm thủ tục tiếp nhận trước tiên",
        detail:
          "Tìm quầy tiếp nhận hoặc quầy dành cho khách đã đặt lịch, đưa mã đặt lịch và giấy tờ. Không thấy quầy nào ghi rõ thì hỏi bảo vệ hoặc nhân viên hướng dẫn ở sảnh — họ trả lời câu này cả trăm lần mỗi ngày.",
      },
      {
        title: "Nếu không đi được thì huỷ lịch",
        detail:
          "Vào lại ứng dụng hoặc gọi tổng đài để huỷ. Việc này mất một phút và nhường suất cho người khác đang cần. Huỷ nhiều lần mà không báo thì một số nơi có thể hạn chế việc đặt lịch của bạn về sau.",
      },
      {
        title: "Hỏi luôn về việc đặt lịch tái khám khi ra về",
        detail:
          "Nhiều nơi cho đặt lịch lần sau ngay tại quầy, thậm chí chọn được đúng bác sĩ vừa khám. Làm ngay lúc đó nhanh hơn nhiều so với về nhà rồi loay hoay đặt lại.",
      },
      {
        title: "Ghi lại kinh nghiệm cho lần sau",
        detail:
          "Ghi chú vào điện thoại: khoa nào ở tầng mấy, khung giờ nào vắng, quầy nào dành cho người đặt trước, gửi xe ở đâu. Lần khám sau bạn sẽ đi như người quen đường và tiết kiệm được cả tiếng.",
      },
    ],
    notes: [
      "Bài này nói về thủ tục hành chính, KHÔNG PHẢI TƯ VẤN Y KHOA. Mọi vấn đề sức khoẻ đều cần nhân viên y tế trực tiếp thăm khám.",
      "ĐANG CÓ DẤU HIỆU NGUY CẤP THÌ KHÔNG ĐẶT LỊCH MÀ ĐI CẤP CỨU NGAY hoặc gọi 115: ĐAU NGỰC DỮ DỘI, KHÓ THỞ, YẾU LIỆT MỘT BÊN NGƯỜI HOẶC NÓI NGỌNG ĐỘT NGỘT, NGẤT, CO GIẬT, CHẢY MÁU NHIỀU, CHẤN THƯƠNG NẶNG. Khoa cấp cứu tiếp nhận không cần đặt lịch.",
      "CẨN THẬN với các trang và tài khoản nhận 'đặt lịch giúp, lấy số nhanh' có thu phí. Bệnh viện không thu tiền qua trung gian cá nhân, và bạn có nguy cơ mất tiền lẫn thông tin cá nhân.",
      "Muốn dùng bảo hiểm y tế đúng tuyến thì hỏi rõ về giấy chuyển tuyến trước khi đi. Quy định phần này có thay đổi theo từng thời kỳ nên hãy hỏi trực tiếp nơi đăng ký khám ban đầu của bạn.",
    ],
    faq: [
      {
        q: "Đặt lịch online rồi có được khám bảo hiểm y tế không?",
        a: "Nhiều nơi có, nhưng thủ tục và điều kiện khác nhau tuỳ bệnh viện và tuỳ loại hình khám. Cách chắc chắn nhất là gọi tổng đài của chính bệnh viện đó hỏi trước khi đặt, vì trả lời sai câu này thì bạn có thể phải tự trả toàn bộ chi phí.",
      },
      {
        q: "Không dùng điện thoại thông minh thì đặt lịch kiểu gì?",
        a: "Phần lớn bệnh viện có tổng đài nhận đặt lịch qua điện thoại thường. Hoặc nhờ con cháu đặt hộ bằng thông tin của bạn. Hoặc tới trực tiếp lấy số như trước, cách này vẫn luôn còn.",
      },
      {
        q: "Đặt lịch rồi mà tới nơi vẫn phải chờ lâu thì sao?",
        a: "Chuyện này vẫn xảy ra vì có ca cấp cứu chen vào hoặc ca trước kéo dài. Đặt lịch giúp bạn chắc suất và biết trước khung giờ, chứ không xoá được việc chờ. Mang theo nước và thứ gì đó để đọc.",
      },
      {
        q: "Có nên chọn khám dịch vụ theo yêu cầu cho nhanh không?",
        a: "Thường nhanh hơn và được chọn bác sĩ, đổi lại chi phí cao hơn và phần bảo hiểm chi trả có thể khác. Hỏi rõ mức phí và phần bảo hiểm áp dụng ngay tại quầy trước khi đăng ký, vì mỗi nơi mỗi khác.",
      },
    ],
    sources: [],
  },
  {
    slug: "sot-o-nguoi-lon-theo-doi-tai-nha",
    title: "Sốt ở người lớn: theo dõi tại nhà và mốc phải đi khám",
    excerpt:
      "Sốt không phải là bệnh, nó là dấu hiệu. Việc của bạn ở nhà là theo dõi cho đúng và biết lúc nào thì không được ở nhà nữa.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Đo nhiệt độ bằng nhiệt kế thật chứ đừng sờ trán đoán, ghi lại con số kèm giờ đo, và đo lại mỗi vài tiếng. Ở nhà thì nghỉ ngơi, uống đủ nước và theo dõi các dấu hiệu đi kèm chứ không chỉ nhìn con số. Điều quan trọng nhất bạn cần nhớ là danh sách dấu hiệu cảnh báo ở phần lưu ý bên dưới — có bất kỳ dấu hiệu nào trong đó thì đi khám ngay, bất kể sốt cao hay thấp. Bài này không kê thuốc và bạn cũng đừng tự dùng thuốc theo lời mách.",
    prepare: [
      "Một cái nhiệt kế còn hoạt động, để chỗ dễ lấy chứ không phải đáy tủ thuốc",
      "Một tờ giấy hoặc ghi chú điện thoại để ghi giờ đo và nhiệt độ",
      "Nước uống để sẵn cạnh giường, vì người sốt hay lười dậy lấy nước",
      "Khăn mềm và một chậu nước ấm để lau người",
      "Số điện thoại của người thân ở gần và địa chỉ cơ sở y tế gần nhất, lưu sẵn trong máy",
    ],
    steps: [
      {
        title: "Đo bằng nhiệt kế, đừng sờ trán đoán",
        detail:
          "Cảm giác tay không đo được nhiệt độ, nhất là khi chính bạn đang sốt. Dùng nhiệt kế và đọc theo hướng dẫn của loại bạn có, vì mỗi kiểu đo cho ra con số hơi khác nhau. Đo lại cùng một cách và cùng một chỗ để so sánh được.",
      },
      {
        title: "Ghi lại con số kèm giờ đo",
        detail:
          "Ghi kiểu '14h — 38,5 độ'. Diễn biến theo giờ mới là thứ có ý nghĩa, chứ một con số lẻ loi thì nói lên rất ít. Bảng ghi này cũng là thứ bác sĩ muốn xem đầu tiên nếu bạn phải đi khám.",
      },
      {
        title: "Đo lại mỗi vài tiếng khi còn thức",
        detail:
          "Không cần đo liên tục mỗi mười lăm phút, việc đó chỉ làm bạn lo thêm. Vài tiếng một lần là đủ để thấy xu hướng đang tăng, đang giảm hay đứng yên.",
      },
      {
        title: "Theo dõi các dấu hiệu đi kèm, không chỉ nhìn con số",
        detail:
          "Ghi lại: có ho không, đau ở đâu, có nổi ban không, có nôn không, đi ngoài thế nào, có ăn uống được không, tỉnh táo hay lơ mơ. Những chi tiết này quan trọng hơn con số nhiệt độ rất nhiều, và cũng chính là thứ bác sĩ sẽ hỏi.",
      },
      {
        title: "Uống nước đều đặn, từng ngụm nhỏ",
        detail:
          "Sốt làm cơ thể mất nước nhanh. Uống từng ngụm nhỏ và thường xuyên dễ hơn uống một cốc to. Để chai nước ngay cạnh giường và đặt báo thức nhắc nếu bạn hay quên. Nước tiểu sẫm màu là dấu hiệu bạn đang uống chưa đủ.",
      },
      {
        title: "Nghỉ ngơi thật sự và mặc đồ thoáng",
        detail:
          "Nằm nghỉ nơi thoáng khí, mặc quần áo nhẹ. Đừng trùm chăn kín người để 'ra mồ hôi cho hạ sốt' — quan niệm này rất phổ biến nhưng làm nhiệt khó thoát ra và khiến bạn khó chịu hơn.",
      },
      {
        title: "Lau người bằng nước ấm nếu thấy khó chịu",
        detail:
          "Nước ấm chứ không phải nước lạnh và tuyệt đối không phải nước đá hay cồn. Lau trán, cổ, nách, bẹn, mỗi lần vài phút. Việc này giúp dễ chịu hơn chứ không thay thế được việc đi khám khi có dấu hiệu cảnh báo.",
      },
      {
        title: "Ăn nhẹ, đừng ép mình ăn nhiều",
        detail:
          "Cháo, súp, đồ lỏng dễ nuốt. Không thấy đói thì đừng ép, nhưng nước thì phải uống. Sau vài ngày mà hoàn toàn không ăn uống được gì thì đó là lúc cần đi khám chứ không phải cố chịu thêm.",
      },
      {
        title: "ĐỪNG tự dùng thuốc theo lời mách",
        detail:
          "Không dùng đơn thuốc cũ của mình, không xin đơn của người khác, không mua theo lời hàng xóm hay theo bài đăng trên mạng. Cần dùng gì thì hỏi bác sĩ hoặc dược sĩ và nói rõ bạn đang có triệu chứng gì cùng những thứ bạn đang uống.",
      },
      {
        title: "Nói với ai đó rằng bạn đang sốt",
        detail:
          "Nếu bạn sống một mình, hãy nhắn cho người thân hoặc bạn cùng khu biết. Nhờ họ gọi kiểm tra vài lần trong ngày. Sốt cao có thể khiến bạn lơ mơ và không tự đánh giá được tình trạng của chính mình, đây là lúc có người để ý rất quan trọng.",
      },
      {
        title: "Đọc kỹ danh sách dấu hiệu cảnh báo ở phần lưu ý",
        detail:
          "Đọc ngay bây giờ, lúc còn tỉnh táo, chứ đừng đợi tới lúc mệt lả. Nếu tiện thì chụp màn hình phần đó để trong máy. Biết trước ngưỡng nào phải đi khám là điều hữu ích nhất mà bài này mang lại cho bạn.",
      },
      {
        title: "Chuẩn bị sẵn để đi khám cho nhanh",
        detail:
          "Để sẵn ở một chỗ: thẻ bảo hiểm, căn cước, bảng ghi nhiệt độ theo giờ, danh sách những thứ đang uống. Cần đi là cầm đi ngay, không phải lục tìm trong lúc đang mệt.",
      },
    ],
    notes: [
      "Bài này chỉ hướng dẫn cách theo dõi và chuẩn bị, KHÔNG PHẢI TƯ VẤN Y KHOA, và cố ý không nêu bất kỳ tên thuốc hay liều dùng nào. Việc dùng thuốc phải do bác sĩ hoặc dược sĩ hướng dẫn dựa trên tình trạng cụ thể của bạn.",
      "PHẢI ĐI CẤP CỨU NGAY nếu có bất kỳ dấu hiệu nào sau đây, bất kể nhiệt độ bao nhiêu: KHÓ THỞ HOẶC THỞ NHANH, ĐAU NGỰC, LƠ MƠ HOẶC KHÔNG TỈNH TÁO, CO GIẬT, CỨNG GÁY HOẶC ĐAU ĐẦU DỮ DỘI, NỔI BAN TÍM DƯỚI DA, NÔN LIÊN TỤC KHÔNG UỐNG ĐƯỢC NƯỚC, TIỂU RẤT ÍT HOẶC KHÔNG TIỂU, HOẶC SỐT KÈM ĐAU BỤNG DỮ DỘI.",
      "NÊN ĐI KHÁM SỚM, không tự theo dõi tiếp, nếu: SỐT KÉO DÀI QUÁ VÀI NGÀY KHÔNG ĐỠ, SỐT ĐI SỐT LẠI NHIỀU ĐỢT, SỐT SAU KHI ĐI DU LỊCH VÙNG CÓ DỊCH, hoặc bạn đang mang thai, đang điều trị bệnh mạn tính, đang dùng thuốc làm giảm miễn dịch.",
      "TRẺ EM VÀ NGƯỜI GIÀ KHÔNG ÁP DỤNG BÀI NÀY. Trẻ nhỏ sốt, hoặc người lớn tuổi sốt kèm mệt lả, ăn kém, lú lẫn — hãy đưa đi khám sớm thay vì theo dõi tại nhà, vì diễn biến ở hai nhóm này có thể nhanh và khó nhận ra.",
    ],
    faq: [
      {
        q: "Bao nhiêu độ thì gọi là sốt?",
        a: "Ngưỡng cụ thể thay đổi theo cách đo và theo từng hướng dẫn, nên thay vì nhớ một con số, hãy ghi lại nhiệt độ theo giờ và chú ý tới các dấu hiệu đi kèm. Nếu băn khoăn về con số của mình, hãy gọi hỏi cơ sở y tế hoặc đi khám.",
      },
      {
        q: "Có nên đắp chăn cho ra mồ hôi không?",
        a: "Không nên trùm kín. Khi rét run thì đắp chăn mỏng cho đỡ khó chịu, nhưng hết rét thì bỏ ra và mặc đồ thoáng. Ra mồ hôi không phải là mục tiêu, và việc trùm kín có thể khiến bạn mệt hơn.",
      },
      {
        q: "Sốt mấy ngày thì phải đi khám?",
        a: "Không có con số áp dụng cho mọi người. Nguyên tắc an toàn: có bất kỳ dấu hiệu cảnh báo nào ở phần lưu ý thì đi ngay; sốt kéo dài không đỡ, hoặc bạn thấy tình trạng xấu đi, thì đi khám chứ đừng chờ thêm.",
      },
      {
        q: "Sống một mình mà sốt cao thì nên làm gì?",
        a: "Nhắn cho người thân hoặc bạn bè biết ngay từ đầu và nhờ họ gọi kiểm tra định kỳ. Để điện thoại sạc đầy cạnh giường. Nếu thấy mệt tăng lên hoặc xuất hiện dấu hiệu cảnh báo, gọi người tới đưa đi khám hoặc gọi 115, đừng tự lái xe.",
      },
    ],
    sources: [],
  },
  {
    slug: "say-nang-mat-nuoc-ngay-nong",
    title: "Say nắng, mất nước ngày nóng: nhận ra sớm và xử lý ngay",
    excerpt:
      "Chạy xe ngoài đường buổi trưa, đứng dậy thấy choáng và toát mồ hôi lạnh. Vài phút đầu bạn làm gì sẽ quyết định chuyện này lớn hay nhỏ.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Thấy chóng mặt, buồn nôn, nhức đầu, mệt lả khi đang ở ngoài nắng thì việc đầu tiên là vào chỗ râm mát ngay, ngồi hoặc nằm xuống, nới lỏng quần áo và uống nước từng ngụm nhỏ. Làm mát cơ thể bằng khăn ướt ở trán, cổ, nách, bẹn. Đừng cố gắng đi tiếp cho xong việc. Nếu người đó lú lẫn, không tỉnh táo, co giật, hoặc da nóng mà không ra mồ hôi — đó là tình huống cấp cứu, gọi 115 ngay lập tức.",
    prepare: [
      "Chai nước mang theo mỗi khi ra đường vào ngày nóng, thứ đơn giản nhất và cũng bị quên nhiều nhất",
      "Mũ nón, áo chống nắng, khẩu trang che mặt khi phải đi ngoài trời lâu",
      "Khăn nhỏ có thể thấm nước, để trong cốp xe",
      "Số 115 và số người thân lưu sẵn ở chỗ dễ bấm trong điện thoại",
      "Biết trước quán cà phê, tiệm thuốc hoặc cửa hàng tiện lợi trên tuyến đường bạn hay đi — chỗ để tấp vào khi thấy không ổn",
    ],
    steps: [
      {
        title: "Nhận ra sớm các dấu hiệu đầu tiên",
        detail:
          "Chóng mặt, nhức đầu, buồn nôn, mệt lả, chuột rút, da nhớp mồ hôi, tim đập nhanh. Đây là lúc cơ thể đang báo động sớm. Đa số tai nạn nghiêm trọng xảy ra vì người ta bỏ qua giai đoạn này để cố làm nốt việc đang dở.",
      },
      {
        title: "Dừng lại ngay, đừng cố đi thêm",
        detail:
          "Đang chạy xe thì tấp vào lề chỗ an toàn và tắt máy. Đang làm việc ngoài trời thì báo cho người bên cạnh biết rồi vào chỗ mát. Cố thêm mười lăm phút là khoảng thời gian khiến chuyện nhỏ thành chuyện lớn.",
      },
      {
        title: "Vào chỗ râm mát, có gió hoặc có quạt",
        detail:
          "Bóng cây, mái hiên, cửa hàng tiện lợi, quán nước — chỗ nào mát nhất trong tầm vài chục mét. Ưu tiên chỗ có máy lạnh hoặc quạt nếu ngay gần đó. Đừng ngại vào một cửa hàng lạ chỉ để ngồi nhờ, đây là lúc sức khoẻ quan trọng hơn phép lịch sự.",
      },
      {
        title: "Ngồi hoặc nằm xuống, kê chân cao",
        detail:
          "Nằm ngửa và kê chân cao hơn tim một chút giúp bạn đỡ choáng. Nếu chỉ ngồi được thì ngồi tựa lưng và cúi đầu thấp một chút. Đứng cố cho qua cơn choáng là cách nhanh nhất để ngã và bị chấn thương thêm.",
      },
      {
        title: "Nới lỏng quần áo",
        detail:
          "Cởi áo khoác, nới cổ áo và thắt lưng, bỏ mũ bảo hiểm ra. Mặc ít lại giúp nhiệt thoát ra dễ hơn. Nếu quần áo đang ướt đẫm mồ hôi và có chỗ thay thì thay đồ khô sau khi đã hạ nhiệt.",
      },
      {
        title: "Uống nước từng ngụm nhỏ",
        detail:
          "Nước mát, không phải nước đá lạnh buốt. Uống chậm, từng ngụm, nghỉ giữa các ngụm. Uống ừng ực một hơi dễ gây buồn nôn và nôn ra hết. Nếu người đó lơ mơ hoặc không tỉnh táo thì KHÔNG cho uống gì vì có nguy cơ sặc.",
      },
      {
        title: "Làm mát bằng khăn ướt ở các vị trí đúng",
        detail:
          "Trán, sau gáy, hai bên nách, bẹn — đây là những chỗ mạch máu chạy gần da nên làm mát hiệu quả nhất. Dùng nước mát chứ không phải nước đá, và lau liên tục thay vì đắp một chỗ rồi để yên.",
      },
      {
        title: "Quạt cho không khí lưu thông",
        detail:
          "Quạt tay, quạt giấy, quạt máy, hoặc nhờ ai đó phe phẩy. Kết hợp da ẩm và gió thổi làm hạ nhiệt nhanh hơn hẳn so với chỉ ngồi trong bóng râm.",
      },
      {
        title: "Theo dõi trong khoảng ba mươi phút",
        detail:
          "Nếu đỡ dần, tỉnh táo hơn, hết buồn nôn thì tiếp tục nghỉ và uống nước. Nếu sau nửa tiếng vẫn chưa khá hơn, hoặc xấu đi, thì đi khám. Đừng lên xe chạy tiếp chỉ vì thấy đỡ được vài phút.",
      },
      {
        title: "Nhận ra ranh giới phải gọi cấp cứu",
        detail:
          "Lú lẫn, nói năng lộn xộn, không tỉnh táo, co giật, ngất, nôn liên tục, hoặc da nóng bừng mà khô không có mồ hôi — gọi 115 ngay và nói rõ người bệnh đang ở ngoài nắng về. Đây không còn là chuyện nghỉ ngơi cho lại sức.",
      },
      {
        title: "Trong lúc chờ xe cấp cứu thì vẫn làm mát",
        detail:
          "Đưa vào chỗ mát nhất, cởi bớt quần áo, lau nước mát khắp người, quạt liên tục. Đặt người bệnh nằm nghiêng nếu họ nôn. Không cho uống nước nếu họ không hoàn toàn tỉnh táo.",
      },
      {
        title: "Phòng cho lần sau",
        detail:
          "Tránh ra đường vào khung giờ nắng gắt nhất nếu có thể dời được. Mang nước theo, mặc đồ sáng màu thoáng khí, đội mũ, và nghỉ giữa chừng khi phải làm việc ngoài trời lâu. Uống nước đều trong ngày chứ đừng đợi khát mới uống.",
      },
    ],
    notes: [
      "Bài này hướng dẫn xử lý ban đầu, KHÔNG PHẢI TƯ VẤN Y KHOA và không thay thế việc thăm khám. Không tự dùng thuốc theo lời mách trong những tình huống như thế này.",
      "GỌI 115 NGAY, KHÔNG CHỜ ĐỢI, nếu người bệnh có: LÚ LẪN HOẶC KHÔNG TỈNH TÁO, NÓI NĂNG LỘN XỘN, CO GIẬT, NGẤT XỈU, DA NÓNG BỪNG MÀ KHÔNG RA MỒ HÔI, NÔN LIÊN TỤC, HOẶC THỞ NHANH BẤT THƯỜNG. Đây là tình huống có thể nguy hiểm tính mạng và mỗi phút đều quan trọng.",
      "TRẺ NHỎ, NGƯỜI CAO TUỔI, PHỤ NỮ MANG THAI, người có bệnh tim mạch hoặc đang điều trị bệnh mạn tính dễ gặp nguy hiểm hơn nhiều. Với những nhóm này, hãy đưa đi khám sớm thay vì theo dõi tại chỗ, kể cả khi triệu chứng có vẻ nhẹ.",
      "KHÔNG dùng nước đá hay ngâm cả người vào nước lạnh buốt để hạ nhiệt nhanh khi chưa có hướng dẫn của nhân viên y tế, và KHÔNG cho người đang lơ mơ uống bất cứ thứ gì vì nguy cơ sặc.",
    ],
    faq: [
      {
        q: "Uống nước lọc hay nước có pha muối đường thì tốt hơn?",
        a: "Khi mất nước nhiều do mồ hôi thì bù cả nước và muối khoáng sẽ hợp lý hơn. Nếu dùng gói bù nước bán ở nhà thuốc thì phải pha đúng theo hướng dẫn in trên gói, pha đặc hơn không tốt hơn. Không rõ thì hỏi dược sĩ.",
      },
      {
        q: "Sau khi nghỉ thấy khoẻ lại thì có chạy xe tiếp được không?",
        a: "Nên nghỉ thêm và nếu được thì nhờ người tới đón, hoặc gọi xe. Cảm giác khoẻ lại có thể chỉ tạm thời, và choáng lại khi đang chạy xe giữa đường là tình huống nguy hiểm cho cả bạn lẫn người khác.",
      },
      {
        q: "Làm việc ngoài trời cả ngày thì phòng thế nào?",
        a: "Uống nước đều theo giờ chứ đừng đợi khát, nghỉ trong bóng râm mỗi khoảng thời gian nhất định, mặc đồ sáng màu thoáng khí và che nắng. Nếu có thể thì sắp xếp phần việc nặng nhất vào lúc mát trong ngày.",
      },
      {
        q: "Người bị say nắng rồi thì lần sau có dễ bị lại không?",
        a: "Nhiều người thấy mình nhạy cảm hơn với nắng nóng sau một lần như vậy. Hãy cẩn trọng hơn ở những ngày nóng và nếu tình trạng lặp lại nhiều lần, hãy đi khám để được kiểm tra kỹ chứ đừng coi là chuyện thường.",
      },
    ],
    sources: [],
  },
  {
    slug: "di-kham-cung-ba-me-lon-tuoi",
    title: "Đi khám cùng ba mẹ lớn tuổi: chuẩn bị gì và hỏi gì",
    excerpt:
      "Ba mẹ đi khám về, hỏi bác sĩ nói gì thì bảo 'không sao đâu'. Đi cùng một buổi, bạn sẽ hiểu vì sao câu đó không đủ.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Trước khi đi, gom toàn bộ giấy khám cũ và chụp ảnh tất cả các hộp thuốc ba mẹ đang uống, kể cả thuốc nam và thực phẩm chức năng. Trong phòng khám, để ba mẹ tự kể trước rồi bạn bổ sung những gì họ quên hoặc ngại nói. Nhiệm vụ chính của bạn là ghi chép và hỏi lại cho rõ. Trước khi ra về, hỏi đủ ba điều: chẩn đoán là gì, làm gì tiếp theo, và dấu hiệu nào thì phải đưa đi khám ngay.",
    prepare: [
      "Toàn bộ giấy khám, sổ khám bệnh, kết quả xét nghiệm cũ, xếp theo thứ tự thời gian với cái mới nhất trên cùng",
      "Ảnh chụp tất cả các hộp thuốc và thực phẩm chức năng ba mẹ đang dùng — chụp cả mặt trước lẫn nhãn phía sau",
      "Thẻ bảo hiểm y tế, căn cước của ba mẹ, và giấy chuyển tuyến nếu có",
      "Nước uống, đồ ăn nhẹ, áo khoác mỏng và một cái ghế xếp nếu phải chờ lâu",
      "Một cuốn sổ nhỏ và bút để ghi — ghi tay tiện hơn gõ điện thoại khi bác sĩ đang nói nhanh",
    ],
    steps: [
      {
        title: "Hỏi ba mẹ trước ở nhà, lúc còn thong thả",
        detail:
          "Ngồi nói chuyện trước một hôm: dạo này thấy trong người thế nào, đau ở đâu, ngủ ra sao, ăn được không. Người lớn tuổi thường kể nhiều hơn ở nhà so với lúc ngồi trước mặt bác sĩ, và những gì bạn nghe được ở nhà chính là thứ cần nói lại trong phòng khám.",
      },
      {
        title: "Chụp ảnh toàn bộ thuốc đang uống",
        detail:
          "Bày hết ra bàn và chụp từng hộp. Bao gồm cả thuốc bắc, thuốc nam, thực phẩm chức năng, thuốc người quen cho. Nhiều người lớn tuổi uống cùng lúc nhiều loại từ nhiều nơi khác nhau, và đây là thông tin bác sĩ rất cần mà lại hay bị bỏ sót.",
      },
      {
        title: "Sắp xếp giấy tờ theo thứ tự thời gian",
        detail:
          "Kẹp lại thành một tập, mới nhất để trên. Đưa cả xấp lộn xộn thì bác sĩ không có thời gian lục. Nếu có nhiều thì kẹp riêng phần liên quan tới lần khám này ra ngoài cùng.",
      },
      {
        title: "Chọn khung giờ và tính đường đi cho phù hợp",
        detail:
          "Người lớn tuổi mệt nhanh, nên tránh giờ cao điểm và tránh phải chờ quá lâu. Đặt lịch trước nếu nơi đó có. Tính cả chỗ gửi xe, quãng đường đi bộ trong bệnh viện, và hỏi trước xem có xe lăn cho mượn không nếu ba mẹ đi lại khó khăn.",
      },
      {
        title: "Để ba mẹ tự kể trước",
        detail:
          "Đừng giành nói ngay từ đầu. Bác sĩ cần nghe chính người bệnh mô tả và cần quan sát cách họ nói. Bạn ngồi bên, nghe, rồi bổ sung sau. Nói thay hết cả buổi khiến bác sĩ mất đi thông tin quan trọng và cũng khiến ba mẹ thấy mình bị gạt ra ngoài.",
      },
      {
        title: "Bổ sung những gì ba mẹ quên hoặc ngại nói",
        detail:
          "Người lớn tuổi hay nói giảm đi vì không muốn con lo, hoặc quên mất chuyện đã xảy ra tuần trước. Bạn nói thêm nhẹ nhàng: 'dạ bác sĩ, tuần rồi mẹ con có bị choáng một lần lúc đứng dậy ạ'. Nói trước mặt ba mẹ chứ đừng nói sau lưng.",
      },
      {
        title: "Chú ý những chuyện dễ bị bỏ qua ở người lớn tuổi",
        detail:
          "Ngã hoặc suýt ngã, đi lại khó hơn trước, hay quên nhiều hơn, sụt cân, ăn kém, ngủ kém, buồn bã kéo dài, nghe kém đi. Những thứ này thường bị coi là 'già rồi thì vậy' nhưng đều là điều đáng nói với bác sĩ.",
      },
      {
        title: "Ghi chép trong lúc bác sĩ nói",
        detail:
          "Ghi tên bệnh, việc cần làm, các xét nghiệm được chỉ định, ngày tái khám. Đừng tin vào việc sẽ nhớ hết. Nếu muốn ghi âm thì xin phép một câu trước, và nói rõ là để về nhà nghe lại cho đúng lời dặn.",
      },
      {
        title: "Hỏi lại cho tới khi thật sự hiểu",
        detail:
          "Câu nên dùng: 'dạ bác sĩ cho em hỏi lại cho chắc, ý là mẹ em cần làm gì trước ạ'. Hỏi rõ cách dùng từng thứ trong đơn, uống lúc nào, có kiêng gì không, và những thứ đang uống sẵn có phải dừng cái nào không.",
      },
      {
        title: "Hỏi đủ ba câu chốt trước khi ra khỏi phòng",
        detail:
          "Một, ba mẹ em đang bị gì. Hai, bước tiếp theo là gì và khi nào tái khám. Ba, dấu hiệu nào thì phải đưa đi khám ngay hoặc đi cấp cứu. Câu thứ ba là câu bạn sẽ cần tới nhiều nhất trong những tuần sau đó.",
      },
      {
        title: "Về nhà thì làm một bảng thuốc dễ nhìn",
        detail:
          "Viết to, rõ, dán ở chỗ ba mẹ hay ngồi: sáng uống gì, trưa gì, tối gì. Hộp chia thuốc theo ngày rất hữu ích cho người phải uống nhiều loại. Nhưng nội dung bảng thì phải đúng theo đơn của bác sĩ chứ không phải theo trí nhớ của ai.",
      },
      {
        title: "Lập một hồ sơ chung cho cả nhà cùng xem",
        detail:
          "Chụp ảnh đơn, kết quả và ghi chép, để vào một thư mục chia sẻ cho anh chị em trong nhà. Ai đưa ba mẹ đi khám lần sau cũng có đủ thông tin. Việc này tránh được cảnh mỗi người nhớ một kiểu và tránh cả những tranh cãi không đáng có.",
      },
    ],
    notes: [
      "Bài này hướng dẫn cách chuẩn bị và trao đổi với nhân viên y tế, KHÔNG PHẢI TƯ VẤN Y KHOA. Đừng tự điều chỉnh hay tự dừng bất kỳ thứ gì ba mẹ đang dùng mà chưa hỏi bác sĩ, kể cả khi thấy có vẻ không cần thiết.",
      "ĐƯA ĐI CẤP CỨU NGAY nếu người lớn tuổi có: ĐAU NGỰC, KHÓ THỞ, YẾU LIỆT MỘT BÊN NGƯỜI HOẶC MÉO MIỆNG HOẶC NÓI NGỌNG ĐỘT NGỘT, LÚ LẪN ĐỘT NGỘT, NGÃ VÀ ĐẬP ĐẦU, NGẤT, CO GIẬT, NÔN RA MÁU HOẶC ĐI NGOÀI PHÂN ĐEN. Ở người cao tuổi, biểu hiện có thể mờ nhạt hơn người trẻ nên đừng chờ cho 'rõ ràng hơn'.",
      "NÊN ĐI KHÁM SỚM khi thấy ba mẹ: sụt cân không rõ lý do, ngã nhiều lần, quên nhiều hơn hẳn, ăn uống kém kéo dài, buồn bã và không muốn giao tiếp. Đây là những thay đổi đáng lưu tâm chứ không đơn giản là 'tuổi già'.",
      "Tôn trọng quyết định của ba mẹ khi họ còn minh mẫn. Bạn có thể giải thích, thuyết phục, nhưng người có quyền quyết định về sức khoẻ của họ vẫn là chính họ.",
    ],
    faq: [
      {
        q: "Ba mẹ nhất định không chịu đi khám thì làm sao?",
        a: "Tìm hiểu lý do thật sự: sợ tốn tiền, sợ phát hiện bệnh nặng, ngại phiền con cháu, hay sợ chỗ đông người. Mỗi lý do có cách gỡ khác nhau. Có thể bắt đầu bằng một buổi khám tổng quát nhẹ nhàng ở nơi gần nhà, hoặc nhờ người mà ba mẹ tin tưởng nói giúp.",
      },
      {
        q: "Bác sĩ nói nhanh và dùng nhiều từ chuyên môn thì làm gì?",
        a: "Cứ hỏi lại một cách lịch sự: 'dạ bác sĩ nói chậm giúp em với ạ, em ghi lại cho mẹ em'. Hầu hết nhân viên y tế đều sẵn sàng giải thích lại. Nếu vẫn không kịp, ghi lại đúng từ bạn nghe được rồi hỏi kỹ ở quầy tư vấn hoặc lần tái khám.",
      },
      {
        q: "Ba mẹ uống thuốc của nhiều bác sĩ khác nhau thì có sao không?",
        a: "Đây là tình huống cần nói rõ với từng bác sĩ, vì các thứ đang dùng có thể ảnh hưởng lẫn nhau. Mang theo ảnh chụp toàn bộ những gì ba mẹ đang uống trong mọi lần khám, và đừng ngại nói rằng đang khám ở nhiều nơi.",
      },
      {
        q: "Có nên giấu ba mẹ khi kết quả không tốt không?",
        a: "Đây là chuyện của từng gia đình và không có câu trả lời chung. Điều nên làm là hỏi ý kiến bác sĩ điều trị về cách trao đổi phù hợp với tình trạng cụ thể, và cân nhắc rằng người bệnh vẫn có quyền được biết về sức khoẻ của chính mình.",
      },
    ],
    sources: [],
  },
];
