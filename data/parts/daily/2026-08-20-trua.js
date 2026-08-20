// Bài đăng ngày 2026-08-20 — khung 12h trưa
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-20";

export const day20260820trua = [
  // ===== ĂN UỐNG =====
  {
    slug: "di-cho-truyen-thong-lan-dau",
    title: "Đi chợ truyền thống lần đầu mà không bị nói thách",
    excerpt:
      "Vào chợ mà không biết hỏi giá thế nào, mặc cả bao nhiêu là hợp lý, chọn thịt cá ra sao. Đây là cách đi một vòng chợ ra dáng người quen.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Đi một vòng khảo giá trước khi mua bất cứ thứ gì, hỏi ít nhất hai hàng cùng loại. Hỏi giá theo ký chứ đừng hỏi 'bao nhiêu', vì hỏi mơ hồ thì người bán cũng trả lời mơ hồ. Mặc cả nhẹ nhàng ở hàng rau củ và đồ khô, còn thịt cá tươi thường giá khá sát nhau nên chỉ cần chọn hàng đông khách. Mang tiền lẻ và túi riêng, và nếu ưng một hàng thì quay lại lần sau — thành khách quen là cách giảm giá bền nhất.",
    prepare: [
      "Tiền mặt mệnh giá nhỏ 10k–50k, vì nhiều hàng không có tiền thối và không nhận chuyển khoản",
      "Hai ba túi vải hoặc túi nhựa dày, tách riêng đồ sống và đồ chín để không lây mùi",
      "Danh sách đồ cần mua ghi sẵn trong điện thoại, tránh đi lòng vòng rồi mua thừa",
      "Đi sớm trước 8h nếu muốn đồ tươi nhất, hoặc gần trưa nếu muốn giá mềm hơn",
      "Giày dép dễ đi, sàn chợ thường ướt và trơn",
    ],
    steps: [
      {
        title: "Đi một vòng khảo giá trước, chưa mua gì cả",
        detail:
          "Vòng đầu chỉ để nhìn và nghe. Bạn sẽ biết chợ này có bao nhiêu hàng thịt, hàng nào đông khách, rau hôm nay loại nào nhiều. Sai lầm phổ biến nhất là mua ngay hàng đầu tiên gặp ở cổng chợ — chỗ đó thường đắt nhất vì tiện.",
      },
      {
        title: "Hỏi giá theo đơn vị, đừng hỏi trống không",
        detail:
          "Nói 'Cô ơi thịt ba chỉ bao nhiêu một ký ạ' thay vì 'cái này bao nhiêu'. Hỏi rõ đơn vị thì người bán khó nói vống, và bạn cũng dễ so với hàng bên cạnh. Hỏi xong cứ 'dạ để con xem thêm' rồi đi tiếp, không ai giận đâu.",
      },
      {
        title: "So giá ít nhất hai hàng cùng loại",
        detail:
          "Chênh 5–10 nghìn một ký là bình thường. Chênh gấp rưỡi thì hàng đầu đang nói thách. Nhớ giá trong đầu hoặc gõ nhanh vào điện thoại, đi hai ba lần chợ là bạn thuộc mặt bằng giá.",
      },
      {
        title: "Chọn hàng thịt đông khách, đừng chọn hàng vắng",
        detail:
          "Hàng đông nghĩa là thịt quay vòng nhanh, ít khả năng là hàng để từ hôm trước. Nhìn miếng thịt: màu hồng tươi, ấn vào đàn hồi trở lại, mỡ trắng chứ không vàng xỉn, không có mùi chua. Thịt nhớt dính tay là bỏ qua ngay.",
      },
      {
        title: "Chọn cá bằng mắt và mang",
        detail:
          "Mắt cá trong và hơi lồi, mang đỏ tươi chứ không thâm, thân cá cứng chứ không mềm oặt. Nhờ người bán làm sạch luôn tại chỗ, nói rõ 'cô làm sạch giúp con, bỏ ruột bỏ mang' — dịch vụ này thường miễn phí và tiết kiệm cho bạn nửa tiếng ở nhà.",
      },
      {
        title: "Rau củ thì nhìn cuống, đừng nhìn lá",
        detail:
          "Cuống còn tươi, vết cắt chưa thâm đen là rau mới. Lá xanh mướt bóng loáng quá mức đôi khi chỉ là do vừa được xịt nước. Cầm bó rau lên thấy nặng tay, chắc bó là được.",
      },
      {
        title: "Mặc cả có chừng mực, và chỉ ở chỗ nên mặc cả",
        detail:
          "Rau củ, trái cây, đồ khô thì trả xuống khoảng 10–20% rồi gặp nhau ở giữa. Thịt cá tươi thì giá thường sát nên chỉ cần xin thêm 'cô cho con thêm miếng nữa nha'. Đừng trả giá kiểu chặt đôi — vừa mất lòng vừa lộ là mình không biết giá.",
      },
      {
        title: "Nhìn cân trước khi trả tiền",
        detail:
          "Đứng ở góc nhìn được mặt cân, xem kim về số 0 trước khi bỏ đồ lên. Nếu thấy lệch, cứ nói nhẹ 'cô cân lại giúp con với ạ'. Không cần gay gắt, chỉ cần cho thấy bạn có để ý.",
      },
      {
        title: "Trả tiền và đếm lại tiền thối ngay tại quầy",
        detail:
          "Đếm tại chỗ, đi ra rồi mới phát hiện thiếu thì rất khó nói. Nếu người bán đưa tiền thối vào tay và quay đi ngay, cứ đứng đó đếm bình thường, đó là chuyện hoàn toàn bình thường ở chợ.",
      },
      {
        title: "Mua đồ lạnh và đồ dễ dập ở lượt cuối",
        detail:
          "Thịt cá, đồ đông lạnh, trứng, cà chua, chuối để mua sau cùng rồi về thẳng nhà. Mua từ đầu rồi xách đi khắp chợ một tiếng thì đồ vừa ấm lên vừa bị dập.",
      },
      {
        title: "Chọn một hàng để làm khách quen",
        detail:
          "Đi ba bốn lần cùng một hàng thịt, chào hỏi tử tế, họ sẽ tự để phần miếng ngon và cân đúng. Đây là cách giảm giá thật sự, hiệu quả hơn mọi kỹ thuật mặc cả.",
      },
      {
        title: "Về nhà sơ chế ngay, đừng để túi ngoài bếp",
        detail:
          "Thịt cá rửa, chia phần vừa một bữa, cho vào hộp rồi mới bỏ ngăn đá. Rau nhặt sạch, để ráo rồi bọc giấy báo hoặc khăn giấy trước khi vào tủ lạnh. Làm ngay trong 30 phút đầu thì cả tuần sau bạn nhàn.",
      },
    ],
    notes: [
      "Cẩn thận với móc túi ở chợ đông: ví và điện thoại để túi trước, đừng để túi sau quần hay ngăn ngoài balo.",
      "Đừng tin những câu 'hàng nhà trồng', 'cá sông tự nhiên' một cách tuyệt đối — cứ nhìn hàng và giá để quyết định.",
      "Nếu bạn ngại mặc cả, đi chợ có niêm yết giá hoặc siêu thị cũng hoàn toàn ổn, chênh lệch không lớn bằng thời gian và sự thoải mái bạn đánh đổi.",
      "Mẹo tiết kiệm: gần cuối buổi chợ (khoảng 10–11h sáng) nhiều hàng rau bán rẻ để dọn hàng, đồ vẫn tươi tốt cho bữa trong ngày.",
    ],
    faq: [
      {
        q: "Không mặc cả có bị hớ nhiều không?",
        a: "Thường hớ khoảng 10–20% ở hàng rau củ và trái cây, ít hơn ở thịt cá. Nếu bạn đi cùng một hàng quen thì gần như không hớ, kể cả khi không mặc cả câu nào.",
      },
      {
        q: "Đi chợ hay siêu thị rẻ hơn?",
        a: "Chợ thường rẻ hơn với rau củ, thịt cá tươi và đồ theo mùa. Siêu thị rẻ hơn với đồ khô, đồ hộp, sữa và những thứ hay có khuyến mãi. Nhiều người mua kết hợp cả hai.",
      },
      {
        q: "Chợ có nhận chuyển khoản không?",
        a: "Nhiều hàng đã có mã QR dán ở quầy, nhất là ở thành phố lớn. Nhưng vẫn nên mang tiền mặt lẻ vì không phải hàng nào cũng có, và sóng trong chợ đôi khi rất yếu.",
      },
      {
        q: "Mua bao nhiêu là vừa cho một người?",
        a: "Ước chừng 150–200g thịt hoặc cá cho một bữa một người, một bó rau ăn được hai bữa. Lần đầu cứ mua ít, thiếu thì mua thêm, còn hơn mua nhiều rồi để hỏng.",
      },
    ],
    sources: [],
  },

  {
    slug: "nau-san-do-an-ca-tuan",
    title: "Nấu sẵn đồ ăn cả tuần cho người đi làm",
    excerpt:
      "Đi làm về 7h tối, mệt rã rời, cuối cùng lại gọi ship. Dành 2 tiếng cuối tuần là bạn có cơm nhà ăn tới thứ Sáu.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Chọn 2–3 món mặn và 2 loại rau, nấu một lượt vào chiều Chủ nhật, chia vào hộp riêng từng bữa rồi cất tủ lạnh. Món mặn kho hoặc rim để được 3–4 ngày trong ngăn mát, món chiên và rau xào thì chỉ nên để 2 ngày. Cơm nấu mới mỗi ngày bằng hẹn giờ nồi cơm điện, hoặc nấu nhiều rồi chia hộp cấp đông. Tuần đầu đừng tham, làm 3 ngày trước rồi tăng dần khi đã quen nhịp.",
    prepare: [
      "6–10 hộp nhựa hoặc thuỷ tinh có nắp kín, cùng cỡ để xếp chồng gọn trong tủ",
      "Bút lông dầu hoặc băng giấy dán để ghi ngày nấu lên nắp hộp — thứ này quan trọng hơn bạn tưởng",
      "Một cái chảo lớn và một cái nồi, đủ để nấu mẻ gấp ba bình thường",
      "Túi zip hoặc màng bọc cho phần đem cấp đông",
      "Hai tiếng rảnh liền mạch, thường là chiều Chủ nhật",
    ],
    steps: [
      {
        title: "Chọn thực đơn theo công thức 2 mặn + 2 rau",
        detail:
          "Ví dụ: thịt kho trứng và gà rim gừng, cộng với rau luộc và bắp cải xào. Bốn món này phối được thành 5 bữa khác nhau nếu bạn đổi cách ghép. Đừng chọn 5 món khác nhau cho 5 ngày, nấu mệt mà rửa cũng mệt.",
      },
      {
        title: "Ưu tiên món càng để càng ngấm",
        detail:
          "Thịt kho, cá kho, gà rim, sườn rim, đậu hũ nhồi thịt — nhóm này để tủ lạnh 3–4 ngày vẫn ngon, thậm chí ngon hơn ngày đầu. Tránh món chiên giòn và món có nước lèo nhiều, hâm lại là hỏng kết cấu.",
      },
      {
        title: "Đi chợ một lần với danh sách đã tính sẵn",
        detail:
          "Nhân số phần lên trước khi đi: 5 bữa thịt kho cho một người là khoảng 700–800g thịt. Ghi ra giấy rồi mua đúng danh sách, đừng vừa đi vừa nghĩ sẽ nấu gì.",
      },
      {
        title: "Sơ chế toàn bộ trước, nấu sau",
        detail:
          "Rửa, thái, ướp tất cả cùng một lượt rồi mới bật bếp. Thái hành tỏi một lần cho cả ba món, rửa rau một lần cho cả tuần. Vừa nấu vừa thái là kiểu làm mất gấp đôi thời gian.",
      },
      {
        title: "Nấu song song: món lâu trước, món nhanh sau",
        detail:
          "Bắc nồi thịt kho lên trước vì nó cần 40–50 phút liu riu. Trong lúc chờ thì luộc rau, xào rau, rim gà ở bếp còn lại. Một mình vẫn xong hai tiếng nếu biết xếp thứ tự.",
      },
      {
        title: "Nêm nhạt hơn bình thường một chút",
        detail:
          "Món để tủ lạnh mấy ngày sẽ ngấm mặn dần, và bạn còn hâm lại nữa. Nêm nhạt hơn khoảng 20% so với khi ăn ngay, thiếu thì lúc ăn thêm chút nước mắm cũng được.",
      },
      {
        title: "Để nguội hẳn rồi mới đậy nắp",
        detail:
          "Đây là bước hay bị bỏ qua nhất. Đậy nắp lúc còn nóng thì hơi nước đọng lại, đồ ăn nhanh chua và có mùi. Trải ra đĩa hoặc mở nắp cho nguội khoảng 30–45 phút, sờ hộp thấy mát tay là được.",
      },
      {
        title: "Chia hộp theo từng bữa, không đựng chung một hộp lớn",
        detail:
          "Mỗi hộp là một bữa hoàn chỉnh. Mỗi lần mở hộp lớn ra múc là một lần đưa vi khuẩn và hơi nước vào, phần còn lại xuống cấp nhanh hơn nhiều.",
      },
      {
        title: "Ghi ngày lên nắp mọi hộp",
        detail:
          "Viết '20/8' bằng bút lông dầu hoặc dán mẩu băng keo giấy. Đến thứ Tư nhìn hộp bạn sẽ không còn phải đoán 'cái này nấu hôm nào'. Chỉ mất 20 giây mà tránh được cả việc bỏ phí lẫn việc ăn nhầm đồ quá cũ.",
      },
      {
        title: "Xếp tủ theo thứ tự ăn, gần nhất để ngoài",
        detail:
          "Hộp ăn thứ Hai để phía ngoài cùng ngăn mát. Hộp cho thứ Năm, thứ Sáu thì cho thẳng ngăn đá, tối thứ Tư chuyển xuống ngăn mát cho rã đông từ từ qua đêm.",
      },
      {
        title: "Rau xanh thì để riêng và làm tươi lại lúc ăn",
        detail:
          "Rau luộc để tủ lạnh sẽ xỉu và ngả màu. Cách chữa: luộc vừa chín tới, vớt ra ngâm nước lạnh cho giữ màu, để ráo rồi mới vào hộp. Lúc ăn chỉ hâm 30 giây hoặc ăn nguội cũng ổn.",
      },
      {
        title: "Hâm cho nóng thật sự, đừng chỉ hâm ấm",
        detail:
          "Lò vi sóng thì đảo giữa chừng một lần cho nóng đều, hoặc bắc chảo hâm lại 3–4 phút. Đồ chỉ ấm lâm râm là điều kiện tốt cho vi khuẩn. Ngửi thấy mùi chua, thấy nhớt hoặc nổi váng thì bỏ, đừng tiếc.",
      },
      {
        title: "Chủ nhật sau nhìn lại xem hộp nào còn nguyên",
        detail:
          "Món nào tuần nào cũng còn nguyên tới thứ Sáu nghĩa là bạn không thích ăn nó. Bỏ ra khỏi thực đơn, đừng cố. Việc này chỉ bền khi bạn thật sự muốn ăn cái mình đã nấu.",
      },
    ],
    notes: [
      "Nguyên tắc an toàn cơ bản: đồ nấu chín để ngoài nhiệt độ phòng quá 2 tiếng thì không nên cất vào tủ nữa. Trời nóng trên 32 độ thì rút ngắn còn 1 tiếng.",
      "Ngăn mát để được 3–4 ngày với món kho rim, 2 ngày với món xào và rau. Cần lâu hơn thì cấp đông ngay từ đầu chứ đừng để ngăn mát rồi mới chuyển lên.",
      "Đồ đã rã đông rồi thì không cấp đông lại. Vì vậy chia hộp nhỏ ngay từ đầu quan trọng hơn là gói một khối to.",
      "Mẹo đỡ ngán: nấu phần thịt nền nhạt (thịt luộc, gà xé, thịt băm xào) rồi mỗi ngày biến tấu bằng nước chấm và rau khác nhau — cùng một nồi mà năm bữa không giống nhau.",
    ],
    faq: [
      {
        q: "Cơm có nấu sẵn cả tuần được không?",
        a: "Được nhưng nên cấp đông chứ đừng để ngăn mát. Cơm chia hộp, để nguội, bọc kín rồi vào ngăn đá, lúc ăn hâm vi sóng có rưới chút nước sẽ tơi lại. Ngăn mát thì cơm cứng và dễ mất ngon sau ngày thứ hai.",
      },
      {
        q: "Hộp nhựa hay hộp thuỷ tinh tốt hơn?",
        a: "Thuỷ tinh nặng hơn nhưng không ám mùi, không ố và hâm vi sóng an toàn hơn. Nhựa thì nhẹ, tiện mang đi làm — chọn loại ghi rõ dùng được cho lò vi sóng, và đừng hâm món nhiều dầu mỡ trong hộp nhựa mỏng.",
      },
      {
        q: "Nấu sẵn thế này có tiết kiệm không?",
        a: "Tiết kiệm rõ nhất là thời gian và tiền ship. Một bữa cơm tự nấu thường rẻ hơn đáng kể so với đặt ngoài, và bạn kiểm soát được lượng dầu, muối, rau trong bữa ăn.",
      },
      {
        q: "Tôi ở một mình, nấu sẵn có phí không?",
        a: "Ở một mình mới là đối tượng hưởng lợi nhất, vì mua nguyên liệu theo phần nhỏ thường đắt và dễ thừa. Chỉ cần chia hộp đúng khẩu phần và ghi ngày là gần như không phải bỏ đi thứ gì.",
      },
    ],
    sources: [],
  },

  {
    slug: "chien-ran-tai-nha-khong-ban-dau",
    title: "Chiên rán tại nhà: không bắn dầu, không cháy khét",
    excerpt:
      "Đổ dầu vào chảo, thả miếng thịt xuống, dầu bắn tung toé lên tay và bếp. Vấn đề gần như luôn nằm ở nước và nhiệt độ, sửa được cả hai.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Dầu bắn là vì đồ ăn còn ướt: thấm thật khô bằng giấy trước khi thả vào chảo. Chảo phải nóng trước rồi mới đổ dầu, và dầu đủ nóng thì mới cho đồ vào — thả đũa gỗ xuống thấy sủi tăm lăn tăn quanh đũa là được. Thả đồ vào theo hướng nghiêng, xa người, rồi hạ lửa xuống trung bình. Đừng cho quá nhiều một lúc và đừng lật liên tục.",
    prepare: [
      "Giấy thấm dầu hoặc khăn giấy dày, dùng để thấm khô nguyên liệu và thấm dầu sau khi chiên",
      "Chảo đáy dày, chảo mỏng nóng không đều nên chỗ cháy chỗ sống",
      "Nắp chắn dầu bằng lưới, hoặc chỉ cần một cái nắp vung hé — rẻ mà đỡ dọn bếp rất nhiều",
      "Kẹp gắp dài thay vì đũa ngắn, tay bạn cách chảo thêm được 20 phân",
      "Một cái rây hoặc giá kê để đồ chiên xong ráo dầu, thay vì úp lên đĩa phẳng cho mềm nhũn",
    ],
    steps: [
      {
        title: "Thấm khô nguyên liệu, đây là bước quan trọng nhất",
        detail:
          "Nước gặp dầu nóng thì bốc hơi tức thì và bắn dầu tung toé. Lấy giấy thấm ép lên cả hai mặt miếng thịt, cá, đậu hũ cho tới khi giấy không còn ướt. Riêng cá thì nên để ráo thêm 10 phút trong rổ trước khi thấm.",
      },
      {
        title: "Làm nóng chảo khô trước, rồi mới đổ dầu",
        detail:
          "Bật lửa vừa, để chảo không khoảng 1–2 phút. Vẩy vài giọt nước lên, nước tụ thành hạt chạy lăn tăn là chảo đủ nóng. Cho dầu vào lúc này thì đồ ít dính chảo hơn hẳn.",
      },
      {
        title: "Đổ đủ dầu, đừng tiết kiệm quá tay",
        detail:
          "Chiên áp chảo cần lớp dầu mỏng phủ kín đáy. Chiên ngập thì dầu phải cao hơn nửa miếng đồ. Ít dầu quá thì nhiệt tụt nhanh khi thả đồ vào, kết quả là đồ hút dầu và mềm nhũn — ngược hẳn với điều bạn muốn.",
      },
      {
        title: "Thử độ nóng của dầu bằng đũa gỗ",
        detail:
          "Nhúng đầu đũa gỗ khô xuống dầu. Sủi tăm lăn tăn đều quanh đũa là dầu sẵn sàng. Không sủi gì là còn nguội, đồ sẽ ngấm dầu. Sủi dữ dội và dầu bốc khói xanh là quá nóng, tắt bớt lửa chờ một chút.",
      },
      {
        title: "Thả đồ vào theo hướng nghiêng, xa người",
        detail:
          "Cầm miếng thịt bằng kẹp, hạ mép xa nhất xuống trước rồi thả xuôi ra phía xa bạn. Thả từ trên cao rơi tự do là kiểu chắc chắn bị bắn dầu vào người.",
      },
      {
        title: "Chiên từng mẻ nhỏ, đừng chất kín chảo",
        detail:
          "Để chừa khoảng trống giữa các miếng. Chất kín thì nhiệt độ dầu tụt mạnh, đồ ra nước và bạn được món hấp trong dầu chứ không phải món chiên. Thà chiên hai mẻ còn hơn một mẻ hỏng.",
      },
      {
        title: "Che chắn ngay sau khi thả đồ",
        detail:
          "Đậy lưới chắn dầu, hoặc hé vung nghiêng để hơi nước thoát ra mà dầu không bắn ra. Đừng đậy vung kín hoàn toàn khi chiên giòn, hơi nước đọng lại rơi xuống vừa làm mềm lớp vỏ vừa gây bắn dầu dữ hơn.",
      },
      {
        title: "Hạ lửa xuống trung bình sau 30 giây đầu",
        detail:
          "Lửa lớn chỉ cần cho lúc thả đồ vào để bù nhiệt bị tụt. Sau đó giữ lửa vừa để bên trong chín kịp bên ngoài. Lửa to suốt là công thức chuẩn cho món ngoài cháy trong sống.",
      },
      {
        title: "Đừng lật liên tục, hãy đợi mặt đầu tiên se lại",
        detail:
          "Để yên 3–4 phút cho mặt dưới vàng và tự tách khỏi chảo. Nếu bạn kéo mà thấy dính, tức là chưa tới lúc lật. Lật một lần là đủ với hầu hết món áp chảo.",
      },
      {
        title: "Vớt ra giá kê chứ đừng úp lên đĩa",
        detail:
          "Đặt lên rây hoặc giá có khe cho dầu chảy xuống và hơi thoát ra. Xếp chồng lên đĩa phẳng thì hơi nước bốc lên bị kẹt lại, lớp vỏ giòn mất giòn trong hai phút.",
      },
      {
        title: "Xử lý khi dầu bốc lửa: đậy nắp, đừng đổ nước",
        detail:
          "Nếu dầu bắt lửa, tắt bếp và đậy nắp vung kín để cắt oxy, hoặc trùm khăn ẩm dày lên. TUYỆT ĐỐI KHÔNG hắt nước vào — nước làm dầu cháy bùng lên và bắn ra khắp bếp. Có bình chữa cháy mini trong nhà thì càng tốt.",
      },
      {
        title: "Lọc và cất dầu đã dùng, hoặc bỏ đúng cách",
        detail:
          "Dầu còn trong, không có mùi khét thì để nguội, lọc qua rây rồi cất lọ kín dùng thêm 1–2 lần cho món chiên tương tự. Dầu đã sẫm màu, sánh, có mùi khét thì bỏ. Đổ dầu thừa vào chai rồi vứt rác, đừng đổ xuống bồn rửa vì lâu ngày tắc cống chắc chắn.",
      },
    ],
    notes: [
      "CẢNH BÁO: không bao giờ đổ nước vào chảo dầu đang cháy, và không di chuyển chảo dầu đang bốc lửa. Tắt bếp, đậy kín, chờ nguội.",
      "Đồ đông lạnh phải rã đông và thấm khô trước khi chiên. Thả thẳng đồ còn đá vào dầu nóng là tình huống bắn dầu nguy hiểm nhất trong bếp gia đình.",
      "Mở quạt hút hoặc mở cửa sổ khi chiên. Mùi dầu chiên bám vào rèm, quần áo và tủ bếp lâu hơn bạn nghĩ.",
      "Mẹo giảm bắn dầu: rắc một nhúm muối mỏng vào dầu nóng trước khi thả đồ, muối hút bớt hơi ẩm ở bề mặt.",
    ],
    faq: [
      {
        q: "Dùng dầu gì để chiên thì hợp?",
        a: "Chiên ở nhiệt cao nên chọn loại chịu nhiệt tốt như dầu đậu nành, dầu hướng dương, dầu cọ hoặc dầu ăn thông thường. Dầu ô liu nguyên chất và dầu mè hợp để trộn hoặc xào nhẹ hơn là chiên ngập.",
      },
      {
        q: "Dầu dùng lại được mấy lần?",
        a: "Với chiên áp chảo thường thì 1–2 lần nữa nếu dầu còn trong và không khét. Mỗi lần dùng lại dầu sẽ sẫm hơn. Khi dầu đặc lại, sủi bọt nhiều và có mùi khó chịu thì bỏ hẳn.",
      },
      {
        q: "Nồi chiên không dầu có thay được hoàn toàn không?",
        a: "Thay được với đồ tẩm bột sẵn, khoai, gà và các món muốn giòn mà ít dầu. Nhưng kết cấu không giống hệt chiên ngập dầu, và món cần lớp vỏ dày giòn tan thì vẫn thua. Ưu điểm lớn nhất là không phải dọn dầu bắn.",
      },
      {
        q: "Sao chiên cá lúc nào cũng nát và dính chảo?",
        a: "Ba lý do phổ biến: cá còn ướt, chảo chưa đủ nóng, và lật quá sớm. Thấm cá thật khô, xát chút muối lên da, chảo nóng già rồi mới thả, và để yên 4–5 phút mới lật.",
      },
    ],
    sources: [],
  },

  {
    slug: "uop-thit-ca-cho-dam-da",
    title: "Ướp thịt cá thế nào cho món nào cũng đậm đà",
    excerpt:
      "Nấu xong ăn thấy nhạt nhẽo, chấm nước mắm mãi vẫn không cứu được. Vấn đề nằm ở khâu ướp, và có một công thức nền dùng được cho hầu hết món.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Công thức nền dễ nhớ: mặn + ngọt + thơm + dầu. Với 500g thịt thì khoảng 1 thìa canh nước mắm, 1 thìa cà phê đường, hành tỏi băm và tiêu, cộng chút dầu ăn để gia vị bám đều. Bóp kỹ cho gia vị ngấm rồi để ít nhất 20 phút, thịt dày thì 1–2 tiếng trong tủ lạnh. Nêm nhạt hơn khẩu vị cuối một chút vì lúc nấu bạn còn nêm thêm nước dùng hoặc nước mắm.",
    prepare: [
      "Nước mắm hoặc muối làm nền mặn — nước mắm thơm hơn nhưng làm thịt sẫm màu hơn",
      "Đường hoặc mật ong để cân vị và giúp thịt lên màu đẹp khi kho, rim",
      "Hành tím, tỏi, tiêu, và gừng hoặc sả tuỳ món",
      "Một chút dầu ăn — nó giúp gia vị bám đều và giữ thịt mềm khi gặp nhiệt",
      "Tô hoặc túi zip để trộn, và màng bọc nếu ướp lâu trong tủ lạnh",
    ],
    steps: [
      {
        title: "Thấm khô thịt trước khi ướp",
        detail:
          "Thịt còn đọng nước thì gia vị bị pha loãng và trôi tuột. Dùng giấy thấm ép nhẹ cho ráo. Bước 30 giây này quyết định phần lớn việc món có đậm đà hay không.",
      },
      {
        title: "Nhớ công thức nền: mặn + ngọt + thơm + dầu",
        detail:
          "Mặn là nước mắm hoặc muối. Ngọt là đường hoặc mật ong, chỉ một chút để cân vị chứ không phải để ngọt. Thơm là hành tỏi tiêu. Dầu để gia vị bám và giữ ẩm. Bốn nhóm này có đủ thì món khó mà nhạt.",
      },
      {
        title: "Ước lượng cho 500g thịt",
        detail:
          "Khoảng 1 thìa canh nước mắm, 1 thìa cà phê đường, nửa thìa cà phê tiêu, 1 thìa canh hành tỏi băm, 1 thìa cà phê dầu ăn. Đây là điểm xuất phát an toàn, lần sau bạn tự chỉnh theo khẩu vị nhà mình.",
      },
      {
        title: "Cho gia vị khô vào trước, ướt vào sau",
        detail:
          "Rắc tiêu, muối, đường, bột nêm trước, xóc đều cho bám vào thớ thịt. Rồi mới rưới nước mắm và dầu. Làm ngược lại thì gia vị khô vón cục nổi lềnh bềnh trong nước.",
      },
      {
        title: "Bóp kỹ bằng tay, đừng chỉ đảo bằng đũa",
        detail:
          "Đeo găng ni lông rồi bóp và massage khoảng 1 phút. Bạn muốn gia vị vào tận thớ thịt chứ không chỉ nằm ngoài bề mặt. Với thịt dày thì dùng dĩa xăm vài nhát cho dễ ngấm.",
      },
      {
        title: "Ướp đủ thời gian theo độ dày",
        detail:
          "Thịt băm và thịt thái mỏng: 15–20 phút là đủ. Miếng dày như sườn, đùi gà, ba chỉ: 1–2 tiếng, ngon nhất là để qua đêm trong ngăn mát. Cá thì ngược lại, chỉ 15–20 phút vì ướp lâu thịt cá bở ra.",
      },
      {
        title: "Ướp lâu thì phải cho vào tủ lạnh",
        detail:
          "Quá 30 phút là đưa vào ngăn mát, đậy màng bọc hoặc dùng túi zip. Để thịt sống ướp ngoài bếp cả buổi trưa nóng là chuyện không nên làm, dù ông bà mình từng làm thế.",
      },
      {
        title: "Biết khi nào KHÔNG cho muối sớm",
        detail:
          "Với món cần thịt mọng nước như bò áp chảo hay bò xào, ướp muối sớm sẽ rút nước ra làm thịt khô. Với nhóm này, ướp tiêu và dầu trước, muối hoặc nước mắm chỉ cho ngay trước khi nấu.",
      },
      {
        title: "Làm mềm thịt dai bằng nguyên liệu quen thuộc",
        detail:
          "Thịt bò hoặc gà già dai thì thêm chút nước cốt dứa, đu đủ xanh giã, sữa tươi không đường hoặc baking soda pha loãng. Tối đa 20–30 phút thôi, lâu quá thịt bở ra như cám.",
      },
      {
        title: "Biến tấu nền theo từng món",
        detail:
          "Kho thì thêm nước màu và hành tím. Nướng thì thêm mật ong, dầu hào và chút ngũ vị hương. Xào thì thêm chút bột năng cho thịt mềm và nước sốt sánh. Rim chua ngọt thì cân bằng thêm giấm hoặc chanh.",
      },
      {
        title: "Nếm thử phần nước ướp trước khi nấu",
        detail:
          "Chấm đầu đũa vào nước ướp dưới đáy tô, nếm xem mặn ngọt cân chưa. Nếm được nước ướp là biết trước 80% vị của món. Nhớ nêm nhạt hơn đích đến một chút vì còn nêm thêm khi nấu.",
      },
      {
        title: "Để thịt ra khỏi tủ lạnh 15 phút trước khi nấu",
        detail:
          "Thịt lạnh buốt thả vào chảo nóng thì bên ngoài cháy mà bên trong còn lạnh. Để ra ngoài cho bớt lạnh, và đổ bớt phần nước ướp thừa nếu bạn muốn áp chảo cho vàng đẹp.",
      },
    ],
    notes: [
      "Vệ sinh: dao thớt dùng cho thịt sống phải rửa kỹ trước khi thái đồ chín. Rửa tay sau khi bóp thịt, đừng chạm vào điện thoại hay tủ lạnh giữa chừng.",
      "Nêm thiếu thì thêm được, nêm thừa thì rất khó cứu. Luôn bắt đầu bằng lượng ít hơn bạn nghĩ.",
      "Ướp không phải là phép màu: thịt kém tươi thì ướp cỡ nào cũng không ngon lên. Tiền và công nên dồn vào khâu chọn nguyên liệu trước.",
      "Mẹo tiết kiệm thời gian: cuối tuần chia thịt theo phần, ướp sẵn rồi cấp đông trong túi zip. Tối đi làm về chỉ việc rã đông và nấu, thịt còn ngấm hơn.",
    ],
    faq: [
      {
        q: "Ướp qua đêm có bị mặn quá không?",
        a: "Không, nếu bạn ướp đúng lượng. Thịt chỉ hấp thu đến một mức rồi dừng. Bị mặn thường là do cho quá nhiều nước mắm ngay từ đầu chứ không phải do để lâu.",
      },
      {
        q: "Có nhất thiết phải dùng bột ngọt hay hạt nêm không?",
        a: "Không bắt buộc. Nước mắm ngon, hành tỏi phi thơm và chút đường đã tạo được vị đầy đặn. Nếu dùng hạt nêm thì giảm bớt lượng muối và nước mắm để khỏi mặn chồng mặn.",
      },
      {
        q: "Ướp cá sao cho hết tanh?",
        a: "Rửa cá với nước muối loãng hoặc chà chút gừng đập dập và rượu trắng, rồi rửa lại và thấm khô. Khi ướp thêm gừng, thì là hoặc hành lá. Đừng ướp cá quá 20 phút.",
      },
      {
        q: "Thịt ướp sẵn để tủ lạnh được mấy ngày?",
        a: "Ngăn mát khoảng 1–2 ngày là nên nấu. Cần lâu hơn thì cấp đông ngay sau khi ướp, dùng trong vòng một tháng, và rã đông trong ngăn mát chứ đừng để ngoài trời.",
      },
    ],
    sources: [],
  },

  {
    slug: "do-an-thua-con-an-duoc-khong",
    title: "Đồ ăn thừa: cái nào hâm lại được, cái nào phải bỏ",
    excerpt:
      "Nồi canh để qua đêm, hộp cơm quên trong tủ ba ngày, miếng gà rán từ hôm qua. Đây là cách quyết định nhanh mà không phải đánh cược với cái bụng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Quy tắc chung: đồ nấu chín để ngoài nhiệt độ phòng quá 2 tiếng thì không nên ăn, trời nóng thì rút xuống 1 tiếng. Trong ngăn mát, món kho rim để 3–4 ngày, canh và món có nước 2–3 ngày, cơm 1–2 ngày, hải sản và đồ có trứng sống thì chỉ 1 ngày. Hâm lại phải nóng già thật sự chứ không chỉ âm ấm. Có mùi lạ, nhớt, đổi màu hay nổi váng thì bỏ, đừng thử nếm để kiểm tra.",
    prepare: [
      "Hộp có nắp kín và bút ghi ngày — không có ngày thì mọi phán đoán đều là đoán mò",
      "Nhiệt kế tủ lạnh loại rẻ nếu bạn nghi tủ không đủ lạnh, ngăn mát nên ở khoảng 3–5 độ C",
      "Lò vi sóng hoặc chảo để hâm lại cho nóng đều",
      "Một quy tắc dứt khoát trong đầu: nghi ngờ thì bỏ",
    ],
    steps: [
      {
        title: "Đầu tiên: nhớ lại nó đã nằm ngoài bao lâu",
        detail:
          "Đây là câu hỏi quan trọng hơn cả việc nó nằm trong tủ mấy ngày. Nồi canh nấu trưa để trên bếp tới tối là đã quá xa vùng an toàn, dù sau đó bạn có cất tủ. Vi khuẩn sinh sôi mạnh nhất trong khoảng 5–60 độ C.",
      },
      {
        title: "Tính theo mốc 2 tiếng, trời nóng thì 1 tiếng",
        detail:
          "Đồ chín để ngoài quá 2 tiếng ở nhiệt độ phòng thì bỏ. Ngày Sài Gòn hay Hà Nội mùa hè trên 32 độ thì mốc chỉ còn 1 tiếng. Đây là mốc được các cơ quan an toàn thực phẩm dùng phổ biến, không phải con số tuỳ tiện.",
      },
      {
        title: "Nhìn ngày ghi trên hộp trước khi nhìn món ăn",
        detail:
          "Nếu bạn có thói quen ghi ngày thì bước này mất 2 giây. Nếu không nhớ nấu hôm nào thì mặc định coi như đã cũ và xử theo hướng an toàn.",
      },
      {
        title: "Áp khung thời gian theo loại món",
        detail:
          "Ngăn mát: thịt kho, cá kho, gà rim 3–4 ngày. Canh, món nước, món xào 2–3 ngày. Cơm, xôi, bún 1–2 ngày. Hải sản nấu chín, món có trứng sống như sốt mayonnaise tự làm, gỏi: 1 ngày. Rau luộc để lâu không hại nhưng mất ngon từ ngày thứ hai.",
      },
      {
        title: "Ngửi trước, nhưng đừng nếm để thử",
        detail:
          "Mùi chua, mùi men, mùi lạ khác với lúc mới nấu là bỏ. Đừng nếm một miếng nhỏ để kiểm tra — nhiều loại vi khuẩn gây bệnh không làm đổi mùi vị rõ rệt, và một miếng cũng đủ gây rắc rối.",
      },
      {
        title: "Nhìn và sờ: nhớt, váng, đổi màu là dấu hiệu dứt khoát",
        detail:
          "Thịt luộc thấy nhớt tay, nước canh nổi váng hoặc sủi bọt lạ, cơm có sợi nhớt kéo ra, món kho đổi sang màu xám xanh. Bất kỳ dấu hiệu nào trong nhóm này thì bỏ ngay, không phân vân.",
      },
      {
        title: "Thấy mốc thì bỏ cả phần, đừng chỉ gạt chỗ mốc",
        detail:
          "Với món mềm và món có nước, sợi nấm mốc đã lan sâu hơn phần bạn nhìn thấy rất nhiều. Gạt lớp mốc rồi ăn phần dưới là suy nghĩ tiết kiệm sai chỗ. Riêng phô mai cứng và củ quả cứng thì có thể cắt bỏ rộng quanh chỗ hỏng.",
      },
      {
        title: "Hâm cho nóng già, không phải hâm cho ấm",
        detail:
          "Món phải bốc hơi, sôi lăn tăn hoặc nóng đến mức bạn không cầm tay trần được. Vi sóng thì hâm, đảo, hâm tiếp — vi sóng làm nóng không đều nên chỗ nguội vẫn còn. Canh thì bắc lên bếp đun sôi lại 1–2 phút.",
      },
      {
        title: "Chỉ hâm phần bạn sắp ăn",
        detail:
          "Múc ra bát phần cần ăn rồi hâm, cất phần còn lại vào tủ ngay. Hâm cả nồi rồi lại cất, hôm sau lại hâm cả nồi — mỗi vòng như vậy đồ ăn đều đi qua vùng nhiệt độ nguy hiểm một lần nữa.",
      },
      {
        title: "Cơm nguội cần cẩn thận hơn các món khác",
        detail:
          "Cơm để ngoài lâu ở nhiệt độ phòng là món hay gây đau bụng nhất trong nhóm đồ thừa. Nấu xong ăn không hết thì để nguội nhanh rồi cất tủ trong vòng 1 tiếng, dùng trong 1–2 ngày, và hâm cho nóng già trước khi ăn.",
      },
      {
        title: "Không rã đông rồi cấp đông lại",
        detail:
          "Đồ đã rã đông ở nhiệt độ phòng thì nấu chín rồi mới được đông lại, và chất lượng sẽ giảm rõ. Rã đông đúng cách là chuyển từ ngăn đá xuống ngăn mát từ tối hôm trước.",
      },
      {
        title: "Khi vẫn phân vân sau tất cả: bỏ",
        detail:
          "Giá của một hộp cơm là vài chục nghìn. Giá của một đêm ngộ độc là một ngày nghỉ làm cộng tiền khám. Phép tính này không cân bằng, và bạn không cần suy nghĩ lâu.",
      },
    ],
    notes: [
      "DẤU HIỆU CẦN ĐI KHÁM sau khi ăn phải đồ hỏng: nôn liên tục không giữ được nước, tiêu chảy nhiều lần kèm sốt cao, phân có máu, chóng mặt và tiểu rất ít (dấu hiệu mất nước), hoặc triệu chứng kéo dài quá 2 ngày. Người già, trẻ nhỏ và phụ nữ mang thai thì nên đi khám sớm hơn nữa.",
      "Bài này là kiến thức chung về an toàn thực phẩm, không phải tư vấn y khoa. Có vấn đề sức khoẻ cụ thể thì hỏi bác sĩ.",
      "Tủ lạnh không diệt vi khuẩn, nó chỉ làm chậm lại. Món đã bị nhiễm trước khi vào tủ thì vào tủ cũng không cứu được.",
      "Mẹo giảm lãng phí: nấu xong chia phần ngay và cấp đông phần dư ngay từ hôm đầu, thay vì để ngăn mát rồi mấy hôm sau mới quyết định.",
    ],
    faq: [
      {
        q: "Canh để qua đêm ngoài bếp, sáng đun sôi lại ăn được không?",
        a: "Không nên. Đun sôi diệt được nhiều vi khuẩn nhưng không phá huỷ được độc tố mà một số loại vi khuẩn đã sinh ra trong đêm. Đây là lý do quy tắc 2 tiếng quan trọng hơn việc bạn đun kỹ cỡ nào.",
      },
      {
        q: "Đồ ăn còn nóng có nên cho thẳng vào tủ lạnh không?",
        a: "Tủ đời mới thì cho vào được, chỉ nên chia ra hộp nông cho nguội nhanh và đừng đậy kín khi còn bốc hơi mạnh. Điều quan trọng là đưa vào tủ trong vòng 2 tiếng, đừng để nguội tự nhiên cả buổi ngoài bếp.",
      },
      {
        q: "Đồ đặt ship về ăn không hết thì để được bao lâu?",
        a: "Tính từ lúc quán nấu chứ không phải lúc bạn nhận. Nếu ship mất 30–45 phút thì đồng hồ đã chạy được một phần. Cất tủ ngay khi ăn xong, và dùng trong 1–2 ngày với đa số món.",
      },
      {
        q: "Đồ ăn để trong tủ lạnh có bị mất chất không?",
        a: "Có giảm một ít vitamin, nhất là vitamin C trong rau, nhưng không đáng kể so với lợi ích an toàn. Việc bạn cần lo là an toàn và độ ngon, chứ không phải mất chất.",
      },
    ],
    sources: [],
  },

  // ===== NHÀ CỬA =====
  {
    slug: "thong-bon-cau-cong-tac-tai-nha",
    title: "Bồn cầu tắc, cống tắc: tự thông trước khi gọi thợ",
    excerpt:
      "Nước dâng lên chực tràn, tim đập thình thịch. Phần lớn ca tắc ở phòng trọ tự xử được trong 20 phút với đồ có sẵn trong nhà.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Việc đầu tiên là ĐỪNG xả nước thêm lần nữa, vì mỗi lần xả là thêm một bồn nước vào chỗ đang đầy. Múc bớt nước ra cho còn khoảng nửa bồn, rồi dùng pittong cao su ấn đẩy mạnh 15–20 nhịp. Không hiệu quả thì đổ nước rất nóng pha nước rửa chén và chờ 20 phút, rồi thử pittong lại. Vẫn tắc, hoặc nước trào cả ở chỗ khác trong nhà, thì đó là tắc đường ống chung — gọi chủ trọ hoặc thợ.",
    prepare: [
      "Pittong cao su (cây thụt), loại có vành gấp cho bồn cầu hút tốt hơn loại phẳng dùng cho bồn rửa",
      "Găng tay cao su dài tay và ủng hoặc dép có thể rửa được",
      "Xô, ca múc nước và mấy tờ báo cũ hoặc khăn cũ lót sàn",
      "Nước rửa chén và ấm nước nóng — không dùng nước đang sôi",
      "Dây lò xo thông cống nếu nhà có, hoặc một cái móc áo sắt bẻ thẳng",
    ],
    steps: [
      {
        title: "Dừng lại, đừng bấm xả thêm lần nào nữa",
        detail:
          "Phản xạ tự nhiên là xả tiếp xem có trôi không. Đó chính là cách khiến nước tràn ra sàn. Nếu nước đang dâng, mở nắp két nước phía sau và nhấc phao lên hoặc đóng van cấp nước ở chân bồn cầu để chặn nước vào.",
      },
      {
        title: "Lót sàn và mặc đồ bảo hộ",
        detail:
          "Trải báo cũ hoặc khăn quanh chân bồn cầu, đeo găng tay, đi dép rửa được. Việc này sẽ hơi bẩn, chuẩn bị trước thì đỡ phải dọn nhiều về sau.",
      },
      {
        title: "Múc bớt nước ra, để lại khoảng một nửa",
        detail:
          "Cần đủ nước để ngập đầu pittong thì mới tạo được lực hút, nhưng không nhiều tới mức bắn tung khi bạn thụt. Nước múc ra đổ vào xô, chờ thông xong rồi mới xử lý.",
      },
      {
        title: "Đặt pittong đúng cách để tạo kín hơi",
        detail:
          "Nhét phần vành gấp vào hẳn miệng lỗ thoát, ép cho kín. Nếu pittong không kín thì bạn chỉ đang khuấy nước chứ không tạo được áp lực. Đây là lỗi phổ biến nhất khiến người ta nghĩ 'pittong không ăn thua'.",
      },
      {
        title: "Thụt bằng lực đẩy và kéo, 15–20 nhịp liên tục",
        detail:
          "Nhấn xuống nhẹ nhàng lần đầu để đẩy hết không khí ra, sau đó đẩy và kéo dứt khoát. Lực kéo lên quan trọng ngang lực đẩy xuống. Làm 15–20 nhịp rồi giật mạnh pittong ra để phá vỡ chỗ nghẽn.",
      },
      {
        title: "Kiểm tra bằng cách quan sát, chưa xả vội",
        detail:
          "Nếu mực nước tụt xuống rõ và nghe tiếng ực thì đã thông. Lúc này mới bấm xả một lần, quan sát xem nước rút bình thường không. Chưa chắc chắn thì đổ một ca nước vào thử trước khi xả cả két.",
      },
      {
        title: "Chưa thông thì thử nước nóng pha nước rửa chén",
        detail:
          "Đổ khoảng nửa chén nước rửa chén vào bồn, rồi rót từ từ một ấm nước rất nóng nhưng KHÔNG SÔI từ độ cao ngang hông. Chờ 20–30 phút cho dầu mỡ và giấy mềm ra, rồi thụt lại. Cách này ăn nhất với ca tắc do giấy và chất thải thông thường.",
      },
      {
        title: "Với cống bồn rửa và cống sàn: tháo và móc ra trước",
        detail:
          "Đa số ca tắc bồn rửa và cống nhà tắm là do tóc và bã thức ăn ngay dưới nắp. Nhấc nắp lọc, lấy móc áo bẻ thẳng có uốn cái móc nhỏ ở đầu, kéo búi tóc ra. Thường chỉ mất 5 phút và không cần hoá chất gì.",
      },
      {
        title: "Nếu có dây lò xo thông cống thì dùng đúng cách",
        detail:
          "Luồn dây vào tới khi chạm chỗ nghẽn, vừa xoay tay quay vừa đẩy tới. Cảm giác dây ăn vào và xoay dễ hơn là đã phá được. Đừng đẩy quá mạnh vì có thể làm xước hoặc nứt sứ và ống nhựa.",
      },
      {
        title: "Cân nhắc kỹ trước khi dùng hoá chất thông cống",
        detail:
          "Chỉ dùng khi các cách trên đã thất bại, làm đúng hướng dẫn trên bao bì, mở cửa thông gió, đeo găng và kính. TUYỆT ĐỐI KHÔNG trộn hai loại hoá chất khác nhau, và không dùng ngay sau khi bồn còn đầy nước bẩn — hơi bốc lên rất hại.",
      },
      {
        title: "Nhận ra khi nào không phải việc của bạn",
        detail:
          "Nếu nước trào ngược lên cả ở bồn rửa, cống sàn hoặc ở phòng khác cùng lúc, thì nghẽn nằm ở đường ống chung hoặc hầm cầu. Ngừng thao tác, báo chủ trọ hoặc ban quản lý ngay. Cố tự xử lúc này chỉ làm bẩn thêm và có thể làm hỏng ống.",
      },
      {
        title: "Gọi thợ thì hỏi giá trước khi họ bắt tay vào việc",
        detail:
          "Hỏi rõ: phí đến khảo sát bao nhiêu, thông một lần bao nhiêu, có phát sinh gì không. Chi phí tuỳ nơi và tuỳ mức độ nên hỏi trực tiếp cho chắc. Nếu bạn đang thuê trọ, chụp ảnh hiện trạng và giữ hoá đơn để còn thương lượng với chủ nhà.",
      },
      {
        title: "Phòng lần sau: lắp lưới lọc và sửa vài thói quen",
        detail:
          "Lắp lưới chắn tóc ở cống nhà tắm, đổ dầu mỡ thừa vào chai bỏ rác chứ đừng đổ xuống bồn rửa. Đừng bỏ giấy ướt, băng vệ sinh, tăm bông, bã cà phê xuống bồn cầu — chúng không tan như giấy vệ sinh.",
      },
    ],
    notes: [
      "CẢNH BÁO HOÁ CHẤT: không bao giờ trộn các loại chất tẩy với nhau, đặc biệt là loại chứa clo với loại chứa a-xít — khí sinh ra có thể gây ngộ độc nghiêm trọng. Nếu thấy khó thở, cay mắt dữ dội thì ra khỏi phòng và mở toang cửa ngay.",
      "Không dùng nước đang sôi đổ vào bồn cầu sứ. Chênh nhiệt đột ngột có thể làm nứt sứ, và tiền thay bồn cầu đắt hơn tiền gọi thợ thông rất nhiều.",
      "Nếu bạn đang thuê trọ: tắc do kết cấu và đường ống chung thường là trách nhiệm chủ nhà, tắc do người thuê làm rơi đồ vào thì thường là trách nhiệm của bạn. Đọc lại hợp đồng và báo chủ nhà bằng tin nhắn để có bằng chứng.",
      "Mẹo phòng ngừa rẻ nhất: mỗi tuần đổ một ấm nước nóng pha nước rửa chén xuống cống bồn rửa bát, dầu mỡ không kịp tích thành mảng.",
    ],
    faq: [
      {
        q: "Không có pittong thì làm sao?",
        a: "Thử cách nước nóng pha nước rửa chén trước, chờ 30 phút. Hoặc dùng một chai nhựa lớn cắt đáy, bịt miệng chai rồi ấn đẩy tạo áp lực tương tự. Nhưng pittong chỉ vài chục nghìn và nên có sẵn trong nhà.",
      },
      {
        q: "Baking soda và giấm có thật sự thông được không?",
        a: "Có tác dụng với chỗ nghẽn nhẹ và giúp khử mùi, nhưng phản ứng sủi bọt không đủ mạnh để phá nghẽn nặng. Coi nó là biện pháp bảo trì định kỳ chứ đừng trông chờ nó cứu ca tắc nghiêm trọng.",
      },
      {
        q: "Làm rơi điện thoại hoặc đồ cứng xuống bồn cầu thì sao?",
        a: "Đừng xả nước và đừng thụt pittong, vì cả hai đều đẩy đồ vật vào sâu hơn. Đeo găng dài thò tay lấy nếu còn nhìn thấy. Đã trôi khuất thì gọi thợ, có khi phải tháo bồn cầu ra.",
      },
      {
        q: "Cống nhà tắm thoát chậm và có mùi hôi thì xử sao?",
        a: "Thoát chậm thường do tóc, móc ra là hết. Có mùi hôi mà không tắc thì hay do bẫy nước dưới cống bị khô — đổ một ca nước xuống cống mỗi vài ngày là mùi biến mất.",
      },
    ],
    sources: [],
  },

  {
    slug: "lay-lai-tien-coc-khi-tra-phong-tro",
    title: "Lấy lại tiền cọc khi trả phòng trọ",
    excerpt:
      "Ở sạch sẽ cả năm, đến lúc trả phòng chủ nhà trừ sạch tiền cọc vì 'tường bẩn'. Đây là cách chuẩn bị từ trước để không rơi vào cảnh đó.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Tiền cọc lấy lại được hay không phần lớn quyết định từ ngày bạn dọn vào, chứ không phải ngày bạn dọn ra. Chụp ảnh và quay video toàn bộ phòng lúc nhận, giữ hợp đồng và mọi tin nhắn với chủ nhà. Báo trả phòng đúng thời hạn ghi trong hợp đồng, thường là trước 30 ngày. Dọn phòng sạch, chốt số điện nước có ảnh đồng hồ, và đề nghị chủ nhà kiểm tra phòng khi bạn còn có mặt.",
    prepare: [
      "Hợp đồng thuê nhà bản gốc hoặc ảnh chụp — đọc lại kỹ điều khoản về cọc và về thời hạn báo trước",
      "Toàn bộ ảnh và video chụp phòng ngày nhận, tìm lại trong album điện thoại theo mốc thời gian",
      "Lịch sử chuyển khoản tiền cọc và tiền thuê hằng tháng",
      "Đồ dọn dẹp cơ bản: chổi, giẻ, nước lau sàn, bàn chải cọ nhà tắm",
      "Một cuộc trò chuyện thẳng thắn với chủ nhà, tốt nhất qua tin nhắn để có lưu vết",
    ],
    steps: [
      {
        title: "Đọc lại hợp đồng trước khi làm bất cứ điều gì",
        detail:
          "Tìm ba thông tin: phải báo trước bao nhiêu ngày, cọc được hoàn trong bao lâu sau khi trả phòng, và những trường hợp nào bị trừ cọc. Nhiều tranh chấp xảy ra chỉ vì người thuê chưa từng đọc kỹ tờ giấy mình đã ký.",
      },
      {
        title: "Báo trả phòng bằng văn bản, đúng hạn",
        detail:
          "Nhắn tin hoặc gửi email nói rõ: em xin trả phòng vào ngày nào, đây là thông báo trước bao nhiêu ngày theo hợp đồng. Đừng chỉ báo miệng. Báo trễ hơn thời hạn là lý do trừ cọc chính đáng nhất và khó cãi nhất.",
      },
      {
        title: "Lôi lại bằng chứng hiện trạng ngày nhận phòng",
        detail:
          "Vào album ảnh, lọc theo ngày bạn dọn vào. Nếu có video quay một vòng phòng thì đó là thứ giá trị nhất. Chưa từng chụp thì bài học rút ra cho lần sau, còn lần này bạn sẽ phải dựa nhiều hơn vào thương lượng.",
      },
      {
        title: "Sửa những hư hỏng nhỏ mà bạn gây ra",
        detail:
          "Đinh treo tranh thì nhổ ra, trám lỗ bằng kem trám tường vài chục nghìn. Bóng đèn cháy thì thay. Vết bẩn trên tường thử lau bằng giẻ ẩm và chút baking soda. Tự sửa gần như luôn rẻ hơn số tiền chủ nhà sẽ trừ.",
      },
      {
        title: "Dọn phòng kỹ hơn mức bạn nghĩ là đủ",
        detail:
          "Tập trung vào những chỗ chủ nhà chắc chắn sẽ nhìn: bồn cầu, bồn rửa, bếp, tủ lạnh, quạt trần, ban công, và mặt sàn. Một phòng sạch tinh làm chủ nhà mất hứng bới móc, đây là chiến thuật rẻ và hiệu quả nhất.",
      },
      {
        title: "Trả phòng về đúng trạng thái ban đầu",
        detail:
          "Đồ đạc bạn tự lắp thêm như kệ, rèm, móc dán tường thì tháo hết. Đồ của chủ nhà mà bạn đã cất đi thì mang ra để lại đúng chỗ. Nếu bạn từng sơn lại tường mà không xin phép, chuẩn bị tinh thần đó sẽ là khoản trừ.",
      },
      {
        title: "Chụp ảnh đồng hồ điện nước ngày cuối",
        detail:
          "Chụp rõ mặt số, có thể quay cả video quét từ số nhà tới đồng hồ để chứng minh đó là đồng hồ phòng bạn. Chốt số ngay hôm trả phòng, đừng để chủ nhà tự đọc sau đó vài ngày rồi báo con số bạn không kiểm chứng được.",
      },
      {
        title: "Quay video toàn bộ phòng sau khi đã dọn xong",
        detail:
          "Quay chậm một vòng, mở tủ, mở nhà tắm, quét qua từng bức tường và trần. Video này là bằng chứng đối chứng nếu sau đó chủ nhà nói phòng bị hỏng chỗ nào đó. Lưu vào cloud chứ đừng chỉ để trong máy.",
      },
      {
        title: "Đề nghị chủ nhà nghiệm thu phòng khi bạn còn ở đó",
        detail:
          "Nhắn: 'Em dọn xong rồi, anh/chị qua xem phòng cùng em nhé, có gì mình chốt luôn'. Kiểm tra khi bạn có mặt thì bạn giải thích được ngay. Chủ nhà kiểm tra một mình sau khi bạn đi là thế bất lợi nhất.",
      },
      {
        title: "Chốt bằng văn bản con số cuối cùng",
        detail:
          "Sau khi thống nhất, nhắn lại: 'Vậy mình chốt em được nhận lại X đồng, trừ Y đồng cho khoản Z, anh/chị xác nhận giúp em ạ'. Có tin nhắn xác nhận là bạn đã có gần như mọi thứ cần thiết nếu về sau phát sinh.",
      },
      {
        title: "Nếu bị trừ vô lý thì hỏi lại một cách bình tĩnh",
        detail:
          "Yêu cầu chủ nhà nói rõ trừ khoản gì, bao nhiêu, dựa trên điều khoản nào. Trưng ảnh ngày nhận phòng nếu chỗ hư hỏng đó đã có từ trước. Giữ giọng điềm đạm — phần lớn ca đòi cọc thành công là nhờ có bằng chứng, không phải nhờ to tiếng.",
      },
      {
        title: "Biết giới hạn: hao mòn tự nhiên không phải lỗi của bạn",
        detail:
          "Sơn tường phai màu sau vài năm, sàn gỗ mòn theo lối đi, vòi nước cũ rỉ nước — đây là hao mòn do thời gian, thường không được trừ vào cọc. Khác hẳn với thủng tường, vỡ kính, cháy bếp do bạn gây ra.",
      },
      {
        title: "Lần thuê sau, làm đúng ngay từ ngày đầu",
        detail:
          "Ngày nhận phòng: quay video toàn bộ, ghi rõ mọi vết xước có sẵn vào biên bản bàn giao và chụp lại. Yêu cầu hợp đồng ghi rõ điều kiện hoàn cọc. Ba mươi phút hôm đó tiết kiệm cho bạn cả tháng tiền cọc về sau.",
      },
    ],
    notes: [
      "Giữ mọi trao đổi quan trọng qua tin nhắn hoặc email. Thoả thuận miệng rất khó chứng minh khi có tranh chấp.",
      "Đừng bỏ tháng cuối không đóng tiền để 'trừ vào cọc' nếu hợp đồng không cho phép — chủ nhà có thể coi đó là vi phạm và giữ toàn bộ cọc.",
      "Nếu số tiền lớn và thương lượng bế tắc, bạn có thể tìm hiểu về khiếu nại dân sự hoặc nhờ tổ dân phố, công an khu vực hỗ trợ hoà giải. Quy trình và cơ quan tiếp nhận tuỳ địa phương — hỏi trực tiếp cho chắc.",
      "Mẹo: chuyển khoản tiền cọc thay vì đưa tiền mặt, và ghi rõ nội dung 'tien coc phong tro thang X'. Đây là chứng cứ mạnh, miễn phí và mất 30 giây.",
    ],
    faq: [
      {
        q: "Chủ nhà giữ cọc bao lâu sau khi trả phòng là hợp lý?",
        a: "Tuỳ hợp đồng, thường ghi rõ hoàn ngay hoặc trong vòng 7–15 ngày sau khi chốt số điện nước. Nếu hợp đồng không ghi thì nên chốt miệng và nhắn xác nhận lại trước khi bạn dọn đi.",
      },
      {
        q: "Trả phòng sớm hơn hợp đồng thì có mất cọc không?",
        a: "Thường là có, vì đa số hợp đồng thuê nhà quy định phá vỡ hợp đồng trước hạn thì mất cọc. Có thể thương lượng bằng cách tìm người thuê thay để chủ nhà không bị trống phòng — nhiều chủ nhà chấp nhận phương án này.",
      },
      {
        q: "Không có hợp đồng giấy thì đòi cọc kiểu gì?",
        a: "Dựa vào lịch sử chuyển khoản có nội dung rõ ràng, tin nhắn trao đổi, và người làm chứng. Khó hơn nhưng không phải không được. Đây cũng là lý do nên tránh thuê nhà không hợp đồng, dù tiện tới đâu.",
      },
      {
        q: "Chủ nhà đòi trừ tiền sơn lại toàn bộ phòng thì có đúng không?",
        a: "Nếu tường chỉ ố màu theo thời gian sau nhiều năm ở thì đó là hao mòn tự nhiên, thường không hợp lý để trừ. Nếu bạn khoan đục, vẽ lên tường hoặc để mốc lan rộng do không thông gió thì lại là chuyện khác.",
      },
    ],
    sources: [],
  },

  {
    slug: "diet-gian-kien-trong-phong-tro",
    title: "Diệt gián, kiến trong phòng trọ mà không phải chuyển nhà",
    excerpt:
      "Bật đèn bếp lúc nửa đêm và thấy chúng chạy tán loạn. Xịt thuốc chỉ giết được con bạn nhìn thấy — đây là cách xử phần còn lại.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Bình xịt chỉ giải quyết con đang chạy trước mặt, muốn hết thì phải dùng bả và cắt nguồn thức ăn nước uống. Đặt bả gián dạng gel ở các khe gần bếp và nhà tắm, để yên vài ngày cho chúng mang bả về tổ. Cùng lúc: rửa bát ngay sau khi ăn, đậy kín mọi thực phẩm, lau khô bồn rửa trước khi ngủ, bịt khe hở quanh ống nước. Với kiến thì tìm cho ra đường đi và bịt lối vào, đừng chỉ lau đàn kiến đang bò.",
    prepare: [
      "Bả gián dạng gel hoặc dạng viên — thứ này hiệu quả hơn bình xịt rất nhiều cho việc diệt tận gốc",
      "Bả kiến dạng hộp hoặc dạng gel, khác với bả gián nên mua đúng loại",
      "Keo silicone hoặc bọt trám khe để bịt các lỗ quanh ống nước, chân tường",
      "Hộp đựng thực phẩm có nắp kín và thùng rác có nắp đậy",
      "Giẻ lau, nước lau sàn có mùi mạnh và một chai giấm trắng",
    ],
    steps: [
      {
        title: "Hiểu tại sao xịt thuốc không bao giờ hết",
        detail:
          "Con bạn nhìn thấy chỉ là phần rất nhỏ của đàn. Bình xịt giết con đó rồi thôi, thậm chí còn làm cả đàn tản ra và trú sâu hơn. Muốn hết thì phải để chính chúng mang thuốc về tổ, đó là nguyên lý của bả.",
      },
      {
        title: "Tìm ra chúng đang sống ở đâu",
        detail:
          "Ban đêm tắt đèn 15 phút rồi bật lên đột ngột, xem chúng chạy về hướng nào. Điểm trú quen thuộc: sau tủ lạnh, dưới bồn rửa, khe tủ bếp, hộp kỹ thuật ống nước, sau máy giặt, khe cửa nhà tắm. Chỗ ấm và ẩm là chỗ ưa thích.",
      },
      {
        title: "Cắt nguồn thức ăn triệt để trong một tuần",
        detail:
          "Rửa bát ngay sau khi ăn, không để bát bẩn qua đêm. Mọi đồ khô như gạo, bánh, mì gói đều cho vào hộp kín. Lau sạch vụn bánh trên bàn và sàn. Thùng rác phải có nắp và đổ mỗi tối. Đây là phần quan trọng nhất, và cũng là phần người ta hay bỏ dở nhất.",
      },
      {
        title: "Cắt nguồn nước, thứ chúng cần hơn cả thức ăn",
        detail:
          "Trước khi ngủ, lau khô bồn rửa bát và bồn rửa mặt. Sửa vòi rỉ nước. Đừng để khay hứng nước dưới tủ lạnh hay chậu cây có nước đọng. Gián sống được nhiều tuần không ăn nhưng chỉ được vài ngày không uống.",
      },
      {
        title: "Đặt bả gián đúng chỗ và đúng lượng",
        detail:
          "Bôi những chấm gel nhỏ cỡ hạt đậu, nhiều điểm chứ đừng bôi một cục lớn. Đặt sát chân tường, trong khe tủ, gần đường ống, những nơi chúng đi qua. Đặt ở giữa sàn thì gián không tới, chúng luôn bò men theo mép.",
      },
      {
        title: "Không xịt thuốc ở khu vực đã đặt bả",
        detail:
          "Mùi thuốc xịt xua gián tránh xa vùng đó, kể cả tránh luôn miếng bả bạn vừa đặt. Đặt bả rồi thì cất bình xịt đi, chỉ dùng cho chỗ hoàn toàn khác nếu thật sự cần.",
      },
      {
        title: "Kiên nhẫn chờ 3–7 ngày, đừng dọn bả sớm",
        detail:
          "Bả cần thời gian để lan trong đàn. Vài ngày đầu bạn có thể thấy gián xuất hiện nhiều hơn — đó là dấu hiệu tốt, chúng đang ra ăn bả. Đến tuần thứ hai số lượng sẽ giảm rõ.",
      },
      {
        title: "Bịt mọi khe hở dẫn từ ngoài vào",
        detail:
          "Khe quanh ống nước xuyên tường dưới bồn rửa là cửa chính của gián trong nhà chung cư và trọ. Trám bằng silicone hoặc nhét giẻ rồi trám. Cống sàn nhà tắm nên có nắp chặn. Khe dưới cửa ra vào thì lắp gioăng chặn.",
      },
      {
        title: "Với kiến: đi theo đàn để tìm lối vào",
        detail:
          "Kiến đi thành hàng theo vệt mùi. Quan sát hàng kiến ngược về phía nguồn, bạn sẽ tìm ra khe hở nơi chúng vào. Bịt đúng chỗ đó mới có ý nghĩa, lau đàn kiến trên bàn chỉ giải quyết được nửa tiếng.",
      },
      {
        title: "Xoá vệt mùi của kiến bằng giấm hoặc xà phòng",
        detail:
          "Lau đường kiến đi bằng nước pha giấm trắng hoặc nước rửa chén. Kiến định hướng bằng mùi để lại, xoá vệt là con sau mất phương hướng. Chỉ lau nước lã thì vệt mùi vẫn còn.",
      },
      {
        title: "Với kiến thì cũng dùng bả, đừng diệt tại chỗ",
        detail:
          "Kiến thợ mang bả về tổ nuôi kiến chúa, đó là cách duy nhất diệt được cả đàn. Đặt bả ngay trên đường kiến đi và đừng lau đường đó nữa cho tới khi bả hết tác dụng. Nghe hơi ngược đời nhưng đúng.",
      },
      {
        title: "Duy trì để chúng không quay lại",
        detail:
          "Mỗi tuần đổ nước nóng pha nước rửa chén xuống cống bếp, lau kỹ dưới bếp và sau tủ lạnh mỗi tháng, thay bả mỗi 2–3 tháng. Nhà trọ chung thì rủ hàng xóm cùng làm — bạn diệt sạch phòng mình mà phòng bên cạnh còn thì chúng sẽ quay lại.",
      },
      {
        title: "Biết khi nào cần gọi dịch vụ",
        detail:
          "Nếu sau 3–4 tuần làm đủ mọi cách mà vẫn thấy gián mỗi ngày, hoặc bạn thấy trứng gián ở nhiều nơi, thì gọi dịch vụ diệt côn trùng. Nếu là nhà thuê, báo chủ trọ trước — nhiều nơi chủ nhà chịu chi phí phun định kỳ cho cả toà.",
      },
    ],
    notes: [
      "AN TOÀN: nhà có trẻ nhỏ hoặc thú cưng thì đặt bả ở nơi chúng không với tới được, như trong khe tủ hoặc sau thiết bị. Đọc kỹ hướng dẫn trên bao bì và rửa tay sau khi đặt bả.",
      "Không phun thuốc gần chỗ để thức ăn, bát đũa, hoặc bàn ăn. Sau khi phun ở khu vực nào thì lau sạch bề mặt tiếp xúc với đồ ăn trước khi dùng lại.",
      "Gián có thể mang mầm bệnh và làm nặng thêm triệu chứng hen suyễn ở người nhạy cảm. Nếu trong nhà có người hay khó thở, việc dọn sạch không chỉ là chuyện thẩm mỹ.",
      "Mẹo hiệu quả nhất mà không tốn tiền: đừng bao giờ để bát bẩn qua đêm. Chỉ riêng thói quen này đã giảm phần lớn vấn đề trong phòng trọ.",
    ],
    faq: [
      {
        q: "Bả gián có mùi và có độc với người không?",
        a: "Các loại bả gel thông dụng thường ít mùi và đặt ở lượng rất nhỏ, nhưng vẫn là thuốc diệt côn trùng. Đặt xa tầm với trẻ em và thú cưng, không đặt trên bề mặt chế biến thức ăn, và rửa tay sau khi dùng.",
      },
      {
        q: "Lá nguyệt quế, vỏ chanh, dưa leo có đuổi được gián không?",
        a: "Có thể xua tạm thời ở phạm vi rất nhỏ, nhưng không diệt được đàn và không giải quyết được tổ. Coi đó là biện pháp phụ, phần chính vẫn phải là cắt nguồn thức ăn nước uống và dùng bả.",
      },
      {
        q: "Phòng trọ chung nhà tắm thì làm sao?",
        a: "Khó hơn nhưng vẫn làm được: bịt kỹ khe cửa phòng riêng, cống sàn có nắp chặn, và không để đồ ăn trong phòng. Song song đó nên nói chuyện với chủ trọ để phun và xử lý toàn khu, vì nguồn thường nằm ở khu vực chung.",
      },
      {
        q: "Diệt xong bao lâu thì hết hẳn?",
        a: "Với ổ nhỏ thì khoảng 2–3 tuần sẽ giảm rõ rệt nếu bạn làm đủ cả ba việc: bả, cắt nguồn ăn uống, bịt khe. Ổ lớn hoặc lây từ phòng bên cạnh thì có thể cần nhiều tháng và cần xử lý ở quy mô cả toà nhà.",
      },
    ],
    sources: [],
  },

  {
    slug: "chong-am-moc-quan-ao-hoi-trong-nha",
    title: "Chống ẩm mốc và quần áo hôi khi phơi trong nhà",
    excerpt:
      "Mùa mưa hoặc trời nồm, quần áo phơi ba ngày vẫn ẩm và có mùi chua, tường thì mọc đốm đen. Đây là cách xử cả hai cùng lúc.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Nguyên nhân của cả mùi quần áo lẫn mốc tường là một: không khí ẩm và không lưu thông. Giải pháp là làm quần áo khô nhanh nhất có thể — vắt kiệt ở tốc độ cao, treo cách nhau ít nhất một gang tay, và bật quạt thổi ngang chứ đừng thổi từ trên xuống. Với tường, lau sạch đốm mốc bằng dung dịch tẩy pha loãng rồi giữ phòng thông thoáng. Ngày nồm thì ĐÓNG cửa lại chứ đừng mở, vì mở cửa là mời hơi ẩm vào.",
    prepare: [
      "Quạt máy thường — thứ này hiệu quả hơn bạn tưởng, quan trọng hơn cả máy hút ẩm với ngân sách nhỏ",
      "Móc treo nhiều, đủ để treo quần áo cách xa nhau thay vì chồng lên nhau",
      "Nước tẩy pha loãng hoặc giấm trắng, cùng bàn chải cũ để xử đốm mốc",
      "Găng tay và khẩu trang khi xử lý mốc, bào tử mốc không nên hít vào",
      "Túi hút ẩm hoặc hộp hút ẩm cho tủ quần áo, loại vài chục nghìn là đủ",
    ],
    steps: [
      {
        title: "Vắt kiệt hết mức máy giặt cho phép",
        detail:
          "Chọn tốc độ vắt cao nhất mà loại vải chịu được. Chênh lệch giữa vắt 800 và 1200 vòng có thể là vài tiếng phơi. Đây là bước rẻ nhất và tác động lớn nhất, nhưng nhiều người để mặc định rồi quên.",
      },
      {
        title: "Lấy quần áo ra khỏi máy ngay khi máy dừng",
        detail:
          "Để trong lồng máy ẩm và kín thêm một tiếng là mùi chua bắt đầu hình thành. Nếu bạn hay quên, đặt hẹn giờ điện thoại theo đúng thời gian chu trình giặt.",
      },
      {
        title: "Giũ mạnh từng món trước khi treo",
        detail:
          "Cầm hai vai áo giũ vài cái cho vải tơi ra và bớt nhăn. Vải bị vón lại thì bên trong không khô nổi, đó là chỗ sinh mùi. Mất 5 giây mỗi món.",
      },
      {
        title: "Treo cách nhau ít nhất một gang tay",
        detail:
          "Đây là lỗi phổ biến nhất: nhồi cả mẻ giặt lên một cái sào. Không khí không đi qua được thì quần áo không khô. Thà phơi hai đợt còn hơn phơi một đợt rồi ba ngày sau vẫn ẩm và phải giặt lại.",
      },
      {
        title: "Bật quạt thổi NGANG qua hàng quần áo",
        detail:
          "Đặt quạt ở đầu sào, để chế độ quay hoặc cố định thổi dọc theo hàng. Gió ngang cuốn hơi ẩm đi liên tục, hiệu quả hơn hẳn quạt trần thổi thẳng xuống. Một cái quạt chạy vài tiếng tốn rất ít điện so với việc phải giặt lại cả mẻ.",
      },
      {
        title: "Phơi trong phòng nhỏ và đóng cửa lại, nếu có máy hút ẩm",
        detail:
          "Có máy hút ẩm thì dồn quần áo vào một phòng nhỏ, đóng cửa, bật máy hút ẩm cùng quạt. Không gian càng nhỏ máy càng nhanh ăn. Không có máy hút ẩm thì làm ngược lại: phơi ở nơi thoáng nhất và bật quạt.",
      },
      {
        title: "Ngày nồm thì đóng cửa, không phải mở",
        detail:
          "Trời nồm là không khí ngoài trời đang bão hoà hơi nước. Mở cửa cho thoáng là đưa hơi ẩm vào nhà, rồi nó ngưng tụ trên tường và sàn lạnh. Đóng cửa, đóng cửa sổ, bật quạt lưu thông trong nhà và bật điều hoà chế độ khô nếu có.",
      },
      {
        title: "Xử lý quần áo đã có mùi chua",
        detail:
          "Ngâm lại trong nước ấm pha giấm trắng khoảng 30 phút rồi giặt như bình thường, hoặc giặt lại ở chế độ nước nóng nếu vải cho phép. Xả nước xả thơm lên đồ đang có mùi mốc chỉ là che mùi, hôm sau mùi quay lại.",
      },
      {
        title: "Vệ sinh chính cái máy giặt",
        detail:
          "Máy giặt có mùi thì đồ giặt xong cũng có mùi. Mỗi tháng chạy một chu trình rỗng ở nước nóng nhất với chút giấm hoặc bột vệ sinh máy giặt, lau gioăng cao su ở cửa, và luôn để cửa máy hé mở sau khi giặt xong.",
      },
      {
        title: "Xử đốm mốc trên tường ngay khi mới xuất hiện",
        detail:
          "Đeo găng và khẩu trang, mở cửa sổ. Pha nước tẩy với nước theo tỉ lệ trên nhãn, thấm giẻ chà lên đốm mốc, chờ 10 phút rồi lau lại bằng nước sạch và LAU KHÔ hoàn toàn. Không lau khô thì tuần sau mốc mọc lại đúng chỗ đó.",
      },
      {
        title: "Tìm nguyên nhân gây ẩm ở tường, đừng chỉ lau",
        detail:
          "Mốc mọc lại liên tục ở một chỗ thường là do thấm nước từ ngoài, ống nước rò trong tường, hoặc góc phòng không có luồng khí. Kéo tủ ra khỏi tường 10 phân, và nếu nghi thấm thì báo chủ nhà — đây thường là trách nhiệm của họ.",
      },
      {
        title: "Giữ tủ quần áo khô để đồ không ám mùi",
        detail:
          "Bỏ túi hút ẩm vào tủ và thay khi túi ngậm đầy nước. Đừng cất quần áo còn hơi ẩm vào tủ, dù chỉ hơi thôi. Thỉnh thoảng mở cửa tủ vài tiếng cho thoáng, nhất là sau đợt mưa dài.",
      },
      {
        title: "Nếu vẫn không xong thì tính tới máy sấy",
        detail:
          "Ở nơi mưa nhiều tháng liền, máy sấy hoặc tủ sấy quần áo là khoản đầu tư đáng cân nhắc. Rẻ hơn thì có tủ sấy dạng khung bọc vải, giá vừa phải và giải quyết được phần lớn vấn đề mùa mưa.",
      },
    ],
    notes: [
      "AN TOÀN: không trộn nước tẩy với giấm, với a-xít hay với bất kỳ chất tẩy nào khác. Hỗn hợp có thể sinh khí độc. Xử lý mốc thì luôn mở cửa thông gió và đeo khẩu trang.",
      "Mốc lan rộng trên diện tích lớn trong nhà có thể ảnh hưởng đường hô hấp, nhất là với người bị hen hoặc dị ứng. Nếu nhà có người hay ho, khó thở khi ở trong phòng đó, hãy xử lý sớm và cân nhắc đi khám.",
      "Không phơi quần áo ướt trong phòng ngủ đóng kín mà không có quạt hay máy hút ẩm — hơi nước sẽ đọng lên tường và bạn hít không khí ẩm suốt đêm.",
      "Mẹo rẻ tiền nhất: một cái quạt cây rẻ đặt thổi ngang giàn phơi thường hiệu quả hơn mọi loại nước xả thơm bạn có thể mua.",
    ],
    faq: [
      {
        q: "Tại sao quần áo khô rồi mà vẫn có mùi?",
        a: "Vì nó đã khô quá chậm, vi khuẩn kịp sinh sôi trong lúc còn ẩm và mùi đã bám vào sợi vải. Mùi này không đi bằng cách phơi lại, phải ngâm giấm hoặc giặt lại ở nước nóng.",
      },
      {
        q: "Có nên dùng máy sưởi hoặc điều hoà để hong khô quần áo không?",
        a: "Điều hoà ở chế độ khô rất hiệu quả và an toàn. Máy sưởi thì cẩn thận, tuyệt đối không treo quần áo lên hoặc sát máy sưởi vì nguy cơ cháy — giữ khoảng cách và không để không ai trông.",
      },
      {
        q: "Túi hút ẩm dùng được bao lâu?",
        a: "Tuỳ độ ẩm và kích cỡ, thường vài tuần tới vài tháng. Khi hạt bên trong chuyển màu hoặc túi phồng nước là thay. Loại hộp có thể sấy lại bằng lò vi sóng thì dùng đi dùng lại được.",
      },
      {
        q: "Phòng trọ không có ban công thì phơi ở đâu?",
        a: "Dùng giàn phơi gấp đặt gần cửa sổ hoặc cửa ra vào, bật quạt thổi ngang và mở hé cửa nếu ngoài trời khô. Chia mẻ giặt nhỏ ra để treo cách xa nhau, đó mới là yếu tố quyết định chứ không phải chỗ phơi rộng.",
      },
    ],
    sources: [],
  },

  {
    slug: "dung-may-giat-dung-cach-ve-sinh-may",
    title: "Dùng máy giặt đúng cách và vệ sinh máy",
    excerpt:
      "Bấm đại một nút rồi đợi, quần áo xù lông, máy bốc mùi và rung lắc như sắp bay. Hiểu vài nguyên tắc là quần áo bền gấp đôi.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Ba lỗi phổ biến nhất: nhồi quá đầy, đổ quá nhiều bột giặt, và không bao giờ vệ sinh máy. Chỉ nên đổ đồ tới khoảng 3/4 lồng để quần áo có chỗ đảo. Bột giặt đúng liều theo vạch, nhiều hơn không sạch hơn mà còn để lại cặn gây mùi. Mỗi tháng chạy một chu trình rỗng nước nóng để vệ sinh lồng, lau gioăng cửa, và luôn để hé cửa máy sau khi giặt.",
    prepare: [
      "Sách hướng dẫn máy hoặc tra tên model trên mạng — chỉ cần 10 phút đọc là bạn hiểu hết các nút",
      "Túi lưới giặt cho đồ mỏng, đồ lót và đồ có dây, tránh bị kéo hỏng trong lồng",
      "Bột hoặc nước giặt đúng loại: máy cửa trước cần loại ít bọt, dùng nhầm loại sẽ trào bọt",
      "Giấm trắng hoặc bột vệ sinh máy giặt cho việc bảo dưỡng hằng tháng",
      "Giẻ khô để lau gioăng cao su và khay đựng bột",
    ],
    steps: [
      {
        title: "Phân loại trước khi cho vào máy",
        detail:
          "Tách đồ trắng, đồ màu đậm và đồ dễ ra màu. Tách riêng đồ nhiều bụi xơ như khăn tắm với đồ tối màu, nếu không áo đen của bạn sẽ đầy xơ trắng. Đồ mới màu đậm nên giặt riêng vài lần đầu.",
      },
      {
        title: "Kiểm tra túi quần và cài khoá kéo",
        detail:
          "Tờ giấy trong túi quần sẽ nát ra bám khắp mẻ giặt, chìa khoá và tiền xu làm xước lồng và kêu ầm ĩ. Kéo hết khoá và cài cúc để chúng không móc rách áo khác. Lộn trái đồ in hình để giữ hình không bong.",
      },
      {
        title: "Chỉ đổ đầy khoảng 3/4 lồng",
        detail:
          "Quần áo cần chỗ để đảo mới sạch được. Nhồi kín lồng thì nước và bột giặt không luồn tới nơi, kết quả là đồ giặt xong vẫn bẩn, vẫn còn mùi và máy thì rung dữ. Đặt bàn tay lên đống đồ, còn thừa một khoảng bằng gang tay tới miệng lồng là ổn.",
      },
      {
        title: "Đong bột giặt theo vạch, đừng đổ theo cảm tính",
        detail:
          "Đổ gấp đôi không sạch gấp đôi. Bột thừa không xả hết sẽ đọng lại trong sợi vải và trong máy, gây ngứa da và tạo mùi ẩm mốc. Nếu nước ở khu bạn mềm hoặc mẻ giặt ít đồ thì còn nên giảm bớt so với vạch.",
      },
      {
        title: "Chọn chu trình theo loại đồ, không phải theo thói quen",
        detail:
          "Đồ bẩn thường thì chu trình thường. Đồ mỏng, đồ len, đồ lót thì chọn chế độ nhẹ và vắt chậm. Chăn ga thì có chu trình riêng. Chỉ khác biệt này thôi đã kéo dài tuổi thọ quần áo rất nhiều.",
      },
      {
        title: "Hiểu về nhiệt độ nước",
        detail:
          "Nước lạnh đủ cho đồ mặc hằng ngày và giữ màu tốt hơn. Nước ấm hoặc nóng dành cho khăn tắm, ga giường, đồ có mùi cứng đầu và khi trong nhà có người ốm. Nước nóng làm co đồ len và làm phai màu, đọc nhãn mác trước.",
      },
      {
        title: "Dùng túi lưới cho những món dễ hỏng",
        detail:
          "Áo lót có gọng, đồ có dây, tất, đồ ren — cho vào túi lưới. Gọng áo lót bung ra trong lồng máy có thể làm kẹt và hỏng máy, đây là ca sửa máy giặt khá phổ biến.",
      },
      {
        title: "Đặt máy đứng cân và không kê sát tường",
        detail:
          "Máy rung lắc dữ dội thường là do chân máy không cân hoặc đồ dồn về một bên. Chỉnh chân vặn cho máy đứng vững, không cập kênh. Chừa khoảng cách với tường để máy không đập vào tường khi vắt.",
      },
      {
        title: "Lấy đồ ra ngay khi máy kêu xong",
        detail:
          "Đồ ẩm nằm trong lồng kín một tiếng là mùi chua bắt đầu hình thành và bạn sẽ phải giặt lại. Đặt hẹn giờ theo thời gian chu trình nếu bạn hay quên.",
      },
      {
        title: "Mở hé cửa máy sau mỗi lần giặt",
        detail:
          "Đây là thói quen tốn 0 đồng và ngăn được phần lớn mùi hôi trong máy. Đóng kín cửa với lồng còn ẩm là tạo môi trường lý tưởng cho nấm mốc. Nhà có trẻ nhỏ thì chú ý an toàn khi để cửa mở.",
      },
      {
        title: "Lau gioăng cao su và khay bột mỗi tuần",
        detail:
          "Với máy cửa trước, lật mép gioăng cao su ra là bạn sẽ thấy nước đọng, tóc và cặn đen. Lau khô bằng giẻ. Khay đựng bột thì rút ra rửa dưới vòi. Đây là hai nơi sinh mùi số một trong máy giặt.",
      },
      {
        title: "Chạy chu trình vệ sinh máy mỗi tháng",
        detail:
          "Lồng rỗng, chọn chu trình nóng nhất hoặc chế độ vệ sinh lồng nếu máy có, thêm bột vệ sinh máy giặt hoặc khoảng hai cốc giấm trắng. Mỗi tháng một lần là đủ. Máy sạch thì quần áo mới thật sự sạch.",
      },
      {
        title: "Kiểm tra bộ lọc xả ở đáy máy",
        detail:
          "Máy cửa trước thường có nắp lọc nhỏ ở góc dưới. Vài tháng mở ra một lần, đặt khăn hứng nước, lấy ra rửa sạch tóc và cặn. Bộ lọc tắc là nguyên nhân rất thường gặp của lỗi không xả nước.",
      },
    ],
    notes: [
      "AN TOÀN ĐIỆN: máy giặt phải có tiếp đất. Nếu chạm vào vỏ máy thấy tê tê thì rút điện ngay và gọi thợ, đừng dùng tiếp. Không cắm máy giặt vào ổ nối dài loại mỏng, nó cần ổ riêng chịu được công suất.",
      "Không mở cửa máy giặt cửa trước giữa chừng khi trong lồng còn nhiều nước. Chờ chương trình chạy tới bước xả hoặc dùng nút tạm dừng đúng cách theo hướng dẫn máy.",
      "Nước xả vải làm giảm khả năng thấm hút của khăn tắm và đồ thể thao. Với hai nhóm này thì bỏ nước xả đi, bạn sẽ thấy khác biệt rõ.",
      "Mẹo tiết kiệm: giặt vào mẻ đầy vừa phải thay vì nhiều mẻ nhỏ, và dùng nước lạnh cho đồ thường — phần lớn điện của máy giặt là để đun nước nóng.",
    ],
    faq: [
      {
        q: "Máy giặt có mùi hôi dù giặt xong thì làm sao?",
        a: "Chạy chu trình rỗng nước nóng nhất với giấm hoặc bột vệ sinh máy, lau kỹ gioăng cao su, rửa khay bột và kiểm tra bộ lọc xả. Sau đó giữ thói quen mở hé cửa. Đa số ca hết mùi sau một hai lần làm như vậy.",
      },
      {
        q: "Nước giặt hay bột giặt tốt hơn?",
        a: "Nước giặt tan nhanh hơn, ít để lại cặn, hợp với nước lạnh và máy cửa trước. Bột giặt thường rẻ hơn và mạnh với vết bẩn cứng đầu. Quan trọng hơn là dùng đúng liều và đúng loại dành cho loại máy của bạn.",
      },
      {
        q: "Giặt bằng nước lạnh có sạch không?",
        a: "Sạch với hầu hết đồ mặc hằng ngày, vì các loại nước giặt hiện nay đều được thiết kế cho nước lạnh. Nước nóng chỉ thật sự cần với khăn, ga giường, đồ dính dầu mỡ nhiều hoặc khi nhà có người ốm.",
      },
      {
        q: "Máy rung lắc và kêu to có nguy hiểm không?",
        a: "Thường là do máy kê không cân hoặc đồ dồn lệch một bên khi vắt. Dừng máy, dàn đều đồ, chỉnh lại chân máy cho vững. Nếu chỉnh rồi vẫn kêu bất thường như kim loại va nhau thì có vật lạ trong lồng hoặc trục có vấn đề, nên gọi thợ.",
      },
    ],
    sources: [],
  },

  // ===== SỨC KHỎE =====
  {
    slug: "di-xet-nghiem-mau-lan-dau",
    title: "Đi xét nghiệm máu lần đầu: chuẩn bị và đọc kết quả",
    excerpt:
      "Nhịn ăn từ mấy giờ, uống nước có được không, kết quả về một tờ giấy đầy chữ viết tắt. Đây là toàn bộ đường đi cho lần đầu.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Gọi trước cho nơi lấy máu để hỏi hai điều: có cần nhịn ăn không và nên đến giờ nào. Với các xét nghiệm cần nhịn ăn thì thường phải nhịn khoảng 8–12 tiếng, nhưng vẫn uống được nước lọc — hỏi trực tiếp cho chắc vì mỗi nơi và mỗi loại xét nghiệm mỗi khác. Đi buổi sáng sớm cho tiện và đỡ đói. Kết quả nhận về đừng tự chẩn đoán, mang tới bác sĩ để được giải thích trong bối cảnh sức khoẻ của riêng bạn.",
    prepare: [
      "CCCD và thẻ BHYT nếu bạn muốn dùng bảo hiểm — thiếu giấy tờ là mất công đi lại",
      "Giấy chỉ định của bác sĩ nếu có, hoặc danh sách xét nghiệm bạn muốn làm",
      "Danh sách thuốc và thực phẩm chức năng bạn đang dùng, ghi ra giấy hoặc chụp vỏ hộp",
      "Một chai nước lọc để uống trước khi lấy máu và một món ăn nhẹ để ăn ngay sau đó",
      "Áo tay ngắn hoặc tay rộng dễ xắn lên tới khuỷu",
    ],
    steps: [
      {
        title: "Gọi hỏi trước, đừng đoán",
        detail:
          "Hỏi đúng ba câu: xét nghiệm này có cần nhịn ăn không, nhịn từ mấy giờ, và mấy giờ thì bắt đầu nhận bệnh. Quy định khác nhau giữa các cơ sở và giữa các loại xét nghiệm. Hỏi một cuộc điện thoại hai phút tiết kiệm cho bạn cả một buổi sáng.",
      },
      {
        title: "Hiểu vì sao có loại phải nhịn ăn, có loại không",
        detail:
          "Một số chỉ số như đường huyết và mỡ máu bị ảnh hưởng trực tiếp bởi bữa ăn gần nhất, nên cần lấy lúc bụng đói mới phản ánh đúng. Nhiều xét nghiệm khác thì ăn uống bình thường vẫn làm được. Nơi lấy máu sẽ nói rõ cho bạn.",
      },
      {
        title: "Nhịn ăn đúng cách: vẫn uống nước lọc",
        detail:
          "Nhịn ăn nghĩa là không ăn gì, không uống sữa, nước ngọt, cà phê, kể cả cà phê đen không đường ở nhiều nơi. Nhưng nước lọc thì thường được uống và còn nên uống, vì đủ nước thì lấy ven dễ hơn nhiều. Hỏi nhân viên y tế để chắc chắn cho trường hợp của bạn.",
      },
      {
        title: "Báo trước mọi thuốc bạn đang dùng",
        detail:
          "Nói với bác sĩ hoặc điều dưỡng danh sách thuốc và thực phẩm chức năng bạn đang uống, kể cả vitamin. Một số thứ có thể ảnh hưởng đến kết quả. ĐỪNG TỰ Ý dừng thuốc đang điều trị để đi xét nghiệm — phải hỏi bác sĩ đã kê thuốc cho bạn.",
      },
      {
        title: "Đêm trước thì ngủ đủ và tránh rượu bia",
        detail:
          "Rượu bia, tập luyện quá nặng và mất ngủ đều có thể làm lệch một số chỉ số. Sinh hoạt bình thường trong 1–2 ngày trước, đừng cố ăn kiêng đột ngột để 'kết quả đẹp' vì như vậy bạn nhận về một bức tranh sai.",
      },
      {
        title: "Uống một cốc nước trước khi lấy máu",
        detail:
          "Nếu bạn được phép uống nước, hãy uống. Cơ thể đủ nước thì mạch máu nổi rõ, điều dưỡng lấy ven nhanh hơn và bạn đỡ bị chọc nhiều lần. Đây là mẹo đơn giản mà rất nhiều người không biết.",
      },
      {
        title: "Đến đăng ký và nói rõ bạn cần gì",
        detail:
          "Ở quầy tiếp nhận, đưa giấy chỉ định hoặc nói: 'Em muốn làm xét nghiệm máu tổng quát, em có thẻ bảo hiểm ạ'. Hỏi luôn chi phí ước tính và bảo hiểm chi trả phần nào. Con số tuỳ nơi và tuỳ danh mục nên hỏi trực tiếp cho chắc.",
      },
      {
        title: "Lúc lấy máu: nói ra nếu bạn hay bị choáng",
        detail:
          "Nếu bạn từng xỉu khi thấy máu hoặc khi bị lấy máu, hãy nói ngay từ đầu: 'Em hay bị choáng, cho em nằm được không ạ'. Điều dưỡng sẽ cho bạn nằm và theo dõi. Đây là chuyện rất bình thường, không có gì phải ngại.",
      },
      {
        title: "Trong lúc lấy máu thì nhìn chỗ khác và thở đều",
        detail:
          "Quá trình thường chỉ mất chưa tới một phút. Nắm bàn tay lại khi được yêu cầu, thả lỏng cánh tay, hít thở chậm và nhìn về hướng khác. Càng gồng thì mạch càng khó lấy.",
      },
      {
        title: "Sau khi rút kim: ấn giữ, đừng gập tay",
        detail:
          "Dùng bông ấn thẳng lên chỗ chọc khoảng 3–5 phút. Nhiều người gập khuỷu tay lại, cách đó giữ bông nhưng dễ làm bầm hơn. Ấn thẳng và giữ đủ lâu thì hầu như không bầm tím.",
      },
      {
        title: "Ăn nhẹ ngay và ngồi nghỉ vài phút",
        detail:
          "Nếu bạn nhịn ăn từ tối, hãy ăn ngay khi xong — mang sẵn bánh và chai nước là hợp lý. Ngồi nghỉ 5–10 phút trước khi ra về, đặc biệt nếu bạn thấy hơi choáng. Đừng lái xe ngay khi vừa thấy chóng mặt.",
      },
      {
        title: "Hỏi rõ khi nào và lấy kết quả ở đâu",
        detail:
          "Nhiều nơi trả kết quả trong ngày hoặc gửi qua ứng dụng, một số xét nghiệm chuyên sâu thì mất vài ngày. Hỏi cụ thể: mấy giờ có, lấy ở quầy nào, có gửi online không, có cần mang phiếu hẹn không.",
      },
      {
        title: "ĐỪNG tự đọc kết quả và tự kết luận",
        detail:
          "Một chỉ số lệch nhẹ khỏi khoảng tham chiếu rất thường gặp và thường không có nghĩa là bạn đang bệnh. Bác sĩ đọc kết quả cùng với triệu chứng, tiền sử và các chỉ số khác. Tra Google từng dòng chỉ khiến bạn lo vô ích.",
      },
      {
        title: "Mang kết quả tới bác sĩ và hỏi cho hết",
        detail:
          "Hỏi thẳng: chỉ số nào cần chú ý, có cần làm thêm gì không, và bao lâu nữa thì nên kiểm tra lại. Giữ lại tất cả phiếu kết quả cũ hoặc chụp lại lưu vào một thư mục — so sánh theo thời gian có giá trị hơn nhiều so với một lần đo đơn lẻ.",
      },
    ],
    notes: [
      "Bài này là hướng dẫn quy trình, KHÔNG PHẢI TƯ VẤN Y KHOA. Mọi quyết định về xét nghiệm, thuốc men và điều trị phải do bác sĩ đưa ra dựa trên tình trạng cụ thể của bạn.",
      "DẤU HIỆU CẦN ĐI KHÁM NGAY sau khi lấy máu: chỗ chọc sưng to nhanh, đau tăng dần, chảy máu không cầm được sau khi ấn 10 phút, hoặc vùng đó nóng đỏ và bạn bị sốt trong những ngày sau. GỌI CẤP CỨU nếu bạn ngất và không tỉnh lại nhanh, hoặc khó thở, nổi mề đay toàn thân.",
      "Người đang mang thai, đang dùng thuốc chống đông máu, có bệnh nền hoặc dễ chảy máu thì phải báo rõ trước khi lấy máu.",
      "Mọi con số về chi phí, thời gian trả kết quả và mức bảo hiểm chi trả đều tuỳ nơi và thay đổi theo thời điểm — hỏi trực tiếp cơ sở y tế cho chắc.",
    ],
    faq: [
      {
        q: "Nhịn ăn quên mất, lỡ ăn sáng rồi thì sao?",
        a: "Nói thật với nhân viên y tế, đừng giấu. Họ sẽ cho bạn biết xét nghiệm nào vẫn làm được và xét nghiệm nào phải hẹn lại. Giấu rồi lấy máu thì bạn nhận về một kết quả không đáng tin, mất tiền mà vô ích.",
      },
      {
        q: "Người sợ kim tiêm thì làm sao đỡ hơn?",
        a: "Báo trước cho điều dưỡng, xin được nằm thay vì ngồi, nhìn về hướng khác, và thở chậm sâu. Rủ người thân đi cùng cũng giúp nhiều. Nói ra không hề đáng xấu hổ, nhân viên y tế gặp việc này mỗi ngày.",
      },
      {
        q: "Xét nghiệm máu có phát hiện được ung thư không?",
        a: "Một số chỉ số có thể gợi ý bất thường cần kiểm tra thêm, nhưng xét nghiệm máu thông thường không phải là công cụ chẩn đoán ung thư. Đây là câu bạn nên hỏi bác sĩ trực tiếp thay vì đọc trên mạng.",
      },
      {
        q: "Bao lâu nên xét nghiệm máu một lần?",
        a: "Tuỳ tuổi, tiền sử gia đình và tình trạng sức khoẻ của bạn. Nhiều người khoẻ mạnh làm cùng dịp khám sức khoẻ định kỳ. Hãy hỏi bác sĩ về tần suất phù hợp với riêng bạn thay vì theo một con số chung.",
      },
    ],
    sources: [],
  },

  {
    slug: "so-cuu-bong-va-dut-tay-tai-nha",
    title: "Sơ cứu bỏng và đứt tay tại nhà: làm gì trong 5 phút đầu",
    excerpt:
      "Chạm phải chảo nóng, dao trượt tay khi thái. Năm phút đầu quyết định vết thương lành nhanh hay để lại sẹo — và có vài việc tuyệt đối đừng làm.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Bỏng: đưa ngay vùng bỏng dưới vòi nước mát chảy nhẹ, giữ liên tục khoảng 15–20 phút. Không bôi kem đánh răng, nước mắm, mỡ trăn hay bất cứ thứ gì lên vết bỏng. Đứt tay: rửa dưới vòi nước sạch, dùng gạc sạch ấn thẳng lên vết thương và giơ tay cao hơn tim cho tới khi máu ngừng. Vết bỏng rộng, bỏng ở mặt hoặc bộ phận sinh dục, vết cắt sâu hoặc máu không cầm sau 10 phút ấn liên tục thì ĐI CẤP CỨU NGAY.",
    prepare: [
      "Gạc vô trùng và băng cuộn — nên có sẵn trong nhà, quan trọng hơn bạn nghĩ",
      "Nước muối sinh lý để rửa vết thương, loại chai nhỏ bán ở mọi nhà thuốc",
      "Găng tay dùng một lần, để người sơ cứu không đưa vi khuẩn vào vết thương",
      "Băng cá nhân nhiều cỡ và băng keo y tế",
      "Số điện thoại cấp cứu 115 và địa chỉ cơ sở y tế gần nhất lưu sẵn trong máy",
    ],
    steps: [
      {
        title: "Trước hết: dừng nguồn gây hại và giữ bình tĩnh",
        detail:
          "Tắt bếp, bỏ dao xuống, tránh xa nồi nước sôi. Rất nhiều tai nạn thứ hai xảy ra ngay sau tai nạn đầu vì người ta hoảng loạn. Hít một hơi rồi mới bắt tay vào xử lý.",
      },
      {
        title: "BỎNG — bước quan trọng nhất: nước mát chảy liên tục",
        detail:
          "Đưa vùng bỏng dưới vòi nước mát (không phải nước đá) chảy nhẹ, giữ 15–20 phút. Nghe lâu nhưng đây là điều hiệu quả nhất bạn có thể làm, nó rút nhiệt còn đang phá huỷ da bên dưới. Đừng dừng sau 2 phút chỉ vì đã bớt đau.",
      },
      {
        title: "BỎNG — bỏ đồng hồ, nhẫn, quần áo quanh vùng bỏng",
        detail:
          "Tháo ngay trước khi vùng đó sưng lên, sau đó sẽ rất khó tháo. Nhưng nếu quần áo dính chặt vào vết bỏng thì ĐỪNG kéo ra, cắt phần vải xung quanh và để nguyên phần dính, rồi tới cơ sở y tế.",
      },
      {
        title: "BỎNG — những thứ TUYỆT ĐỐI KHÔNG bôi lên",
        detail:
          "Kem đánh răng, nước mắm, mỡ trăn, dầu gió, lòng trắng trứng, bơ, thuốc lá, lá cây giã — không thứ nào trong đây có tác dụng, và tất cả đều làm tăng nguy cơ nhiễm trùng, giữ nhiệt lại và khiến bác sĩ khó xử lý về sau. Chỉ nước mát mà thôi.",
      },
      {
        title: "BỎNG — không chườm đá và không chọc vỡ bọng nước",
        detail:
          "Nước đá gây tổn thương thêm cho da đã bỏng. Bọng nước là lớp bảo vệ tự nhiên, chọc vỡ là mở cửa cho vi khuẩn. Nếu bọng tự vỡ thì rửa nhẹ bằng nước muối sinh lý và che bằng gạc sạch.",
      },
      {
        title: "BỎNG — che nhẹ bằng gạc sạch, không băng chặt",
        detail:
          "Sau khi làm mát đủ lâu, phủ một lớp gạc vô trùng hoặc màng bọc thực phẩm sạch lên vết bỏng để tránh bụi. Đừng băng siết, đừng dán băng dính lên chính vết bỏng.",
      },
      {
        title: "ĐỨT TAY — rửa dưới vòi nước sạch",
        detail:
          "Để vết cắt dưới vòi nước chảy nhẹ vài chục giây để trôi bụi bẩn, rồi rửa lại bằng nước muối sinh lý nếu có. Không cần đổ cồn hay ô xy già trực tiếp vào vết thương hở, chúng làm tổn thương mô lành và gây đau nhiều.",
      },
      {
        title: "ĐỨT TAY — ấn thẳng và giơ cao hơn tim",
        detail:
          "Dùng gạc sạch ấn thẳng lên vết thương, giữ liên tục ít nhất 5–10 phút, và nâng bàn tay lên cao hơn tim. Đừng cứ vài giây lại nhấc ra xem đã cầm chưa — mỗi lần nhấc là phá cục máu đông vừa hình thành.",
      },
      {
        title: "ĐỨT TAY — gạc thấm đầy máu thì đắp chồng lên",
        detail:
          "Không gỡ lớp gạc cũ ra, hãy đắp thêm lớp mới lên trên và ấn tiếp. Gỡ ra là làm chảy máu lại từ đầu.",
      },
      {
        title: "ĐỨT TAY — băng lại và giữ khô, sạch",
        detail:
          "Máu ngừng thì che bằng băng cá nhân hoặc gạc và băng cuộn, không quá chặt tới mức tê đầu ngón tay. Thay băng mỗi ngày hoặc khi băng ướt bẩn. Giữ vết thương sạch và khô trong vài ngày đầu.",
      },
      {
        title: "Nhận biết khi nào phải đi khám ngay, đừng tự xử ở nhà",
        detail:
          "Vết cắt sâu tới mức nhìn thấy mỡ hoặc thịt bên trong, vết cắt há miệng, vết do dao bẩn hay vật gỉ sét, vết cắt ở mặt, hoặc bạn không cử động được ngón tay — tất cả đều cần cơ sở y tế. Khâu trong vài giờ đầu thì sẹo đẹp hơn nhiều so với để qua ngày.",
      },
      {
        title: "Theo dõi dấu hiệu nhiễm trùng trong những ngày sau",
        detail:
          "Vết thương đau tăng dần thay vì giảm, sưng đỏ lan rộng, nóng, chảy dịch đục hay có mủ, có mùi, hoặc bạn bị sốt — đều là dấu hiệu phải đi khám. Đừng chờ xem nó có tự đỡ không.",
      },
      {
        title: "Hỏi bác sĩ về tiêm phòng uốn ván khi vết thương bẩn",
        detail:
          "Vết thương do vật kim loại gỉ, dính đất cát, hoặc vết thương sâu thì cần hỏi nhân viên y tế xem bạn có cần tiêm phòng uốn ván không. Đây là quyết định của bác sĩ dựa trên lịch sử tiêm chủng của bạn, không phải thứ để tự đoán.",
      },
      {
        title: "Sau tất cả: bổ sung lại tủ thuốc gia đình",
        detail:
          "Mua bù gạc, băng, nước muối sinh lý đã dùng hết. Kiểm tra hạn dùng của những thứ còn lại. Tai nạn bếp núc xảy ra vào lúc bạn ít chuẩn bị nhất, nên hộp sơ cứu đầy đủ là thứ đáng có.",
      },
    ],
    notes: [
      "Bài này là hướng dẫn sơ cứu cơ bản, KHÔNG PHẢI TƯ VẤN Y KHOA và không thay thế việc khám bác sĩ. Khi nghi ngờ, hãy tới cơ sở y tế.",
      "GỌI CẤP CỨU 115 HOẶC ĐI VIỆN NGAY nếu: bỏng rộng hơn lòng bàn tay người bị bỏng, bỏng ở mặt, cổ, tay, chân, khớp hoặc bộ phận sinh dục; da bỏng trắng bợt, cháy đen hoặc mất cảm giác; bỏng do điện hoặc hoá chất; hít phải khói và khó thở, khàn tiếng; vết cắt máu phun thành tia hoặc không cầm sau 10 phút ấn liên tục; vết thương sâu ở cổ, ngực, bụng; hoặc người bị nạn lơ mơ, tím tái.",
      "TRẺ EM VÀ NGƯỜI GIÀ cần thận trọng hơn hẳn: da mỏng hơn nên bỏng nặng hơn với cùng một tác nhân, và họ ít diễn tả được mức độ đau. Với trẻ nhỏ và người già, hãy nghiêng về hướng đưa đi khám sớm thay vì tự theo dõi ở nhà.",
      "Bỏng do điện có thể gây tổn thương sâu bên trong dù bề mặt da nhìn không nặng. Luôn đi khám sau bỏng điện, kể cả khi bạn thấy ổn.",
    ],
    faq: [
      {
        q: "Bỏng bô xe máy thì xử lý thế nào?",
        a: "Vẫn là làm mát bằng nước sạch chảy nhẹ 15–20 phút, che bằng gạc sạch, không bôi bất cứ thứ gì. Bỏng bô thường ở chân và hay bị bẩn nên dễ nhiễm trùng — nên đi khám để được xử lý và tư vấn về uốn ván.",
      },
      {
        q: "Ngâm nước đá cho đỡ đau có được không?",
        a: "Không. Nước đá và đá lạnh trực tiếp có thể làm tổn thương thêm vùng da đã bỏng. Nước mát từ vòi là đúng, mát chứ không buốt, và giữ đủ lâu mới quan trọng.",
      },
      {
        q: "Vết cắt nhỏ có cần băng lại không hay để hở cho khô?",
        a: "Che lại bằng băng sạch trong vài ngày đầu thường giúp vết thương lành tốt và ít sẹo hơn là để hở. Nhớ thay băng mỗi ngày và giữ khô sạch. Đây là hướng dẫn chung, vết thương cụ thể thì hỏi nhân viên y tế.",
      },
      {
        q: "Đứt tay khi đang nấu ăn có cần bỏ hết đồ ăn không?",
        a: "Bỏ phần thực phẩm và bề mặt có dính máu, rửa sạch dao thớt kỹ bằng nước nóng và xà phòng. Phần đồ ăn không tiếp xúc thì vẫn dùng được. Ưu tiên vẫn là cầm máu trước, dọn dẹp sau.",
      },
    ],
    sources: [],
  },

  {
    slug: "dau-lung-moi-co-do-ngoi-may-tinh",
    title: "Đau lưng mỏi cổ do ngồi máy tính: chỉnh bàn ghế trước khi mua thuốc",
    excerpt:
      "Cuối ngày cổ cứng đờ, lưng dưới nhức, hai vai như đeo đá. Phần lớn nguyên nhân nằm ở chiều cao màn hình và ghế, sửa được miễn phí.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Ba con số cần chỉnh: mép trên màn hình ngang tầm mắt, khuỷu tay gập khoảng 90 độ khi gõ phím, và bàn chân đặt phẳng trên sàn với đầu gối cũng khoảng 90 độ. Kê màn hình lên bằng chồng sách, kê chân bằng thùng carton nếu cần, không cần mua gì cả. Quan trọng không kém: đứng dậy đi lại mỗi 30–45 phút, vì tư thế tốt nhất vẫn là tư thế bạn thay đổi thường xuyên. Đau kéo dài, đau lan xuống tay chân hoặc kèm tê thì phải đi khám.",
    prepare: [
      "Vài quyển sách dày hoặc hộp carton để kê màn hình lên đúng tầm — miễn phí và hiệu quả ngay",
      "Một cái gối nhỏ hoặc khăn cuộn để đệm sau lưng dưới",
      "Hẹn giờ điện thoại hoặc ứng dụng nhắc nghỉ mỗi 30–45 phút",
      "Thước dây hoặc chỉ cần mắt thường để căn ba góc 90 độ",
      "Chuột và bàn phím rời nếu bạn dùng laptop — đây là món đáng đầu tư nhất",
    ],
    steps: [
      {
        title: "Chỉnh ghế trước, vì mọi thứ khác tính từ ghế",
        detail:
          "Ngồi sát vào lưng ghế, chỉnh độ cao sao cho hai bàn chân đặt phẳng hoàn toàn trên sàn và đầu gối gập khoảng 90 độ. Chân đung đưa không chạm sàn là lỗi rất phổ biến, nó dồn áp lực lên mặt sau đùi và lưng dưới.",
      },
      {
        title: "Chân không chạm sàn thì kê thêm",
        detail:
          "Dùng một cái thùng carton chắc, chồng sách hoặc kệ để chân. Người thấp ngồi ghế văn phòng chuẩn gần như luôn cần kê chân. Việc này giải quyết được kha khá cơn đau lưng dưới mà không tốn đồng nào.",
      },
      {
        title: "Đệm lưng dưới bằng khăn cuộn",
        detail:
          "Cuộn một cái khăn tắm thành ống, kẹp vào chỗ hõm lưng dưới sát lưng ghế. Nó giữ cột sống ở đường cong tự nhiên thay vì để bạn ngồi gù. Rẻ hơn gối tựa lưng chuyên dụng mà tác dụng gần như nhau.",
      },
      {
        title: "Chỉnh bàn: khuỷu tay khoảng 90 độ khi gõ phím",
        detail:
          "Thả lỏng vai, cẳng tay gần như song song với mặt sàn khi tay đặt lên bàn phím. Bàn quá cao thì bạn phải nhún vai suốt ngày — đó chính là nguồn gốc của đau vai gáy. Bàn quá thấp thì bạn phải gù xuống.",
      },
      {
        title: "Kê màn hình lên: mép trên ngang tầm mắt",
        detail:
          "Khi nhìn thẳng, ánh mắt bạn nên rơi vào khoảng 1/3 trên của màn hình. Màn hình đặt thấp buộc bạn cúi cổ suốt tám tiếng, và đầu người nặng khoảng 5kg — cúi xuống thì cơ cổ phải gánh nhiều hơn thế rất nhiều.",
      },
      {
        title: "Đặt màn hình cách khoảng một sải tay",
        detail:
          "Ngồi thẳng, duỗi tay ra chạm được màn hình là khoảng cách hợp lý. Gần quá thì mắt phải điều tiết liên tục, xa quá thì bạn sẽ vô thức chồm người tới trước và trở lại tư thế gù.",
      },
      {
        title: "Dùng laptop thì bắt buộc phải tách rời",
        detail:
          "Laptop được thiết kế sai về mặt tư thế: màn hình và bàn phím dính liền nên bạn không thể đặt đúng cả hai. Kê laptop lên cao cho màn hình ngang mắt, rồi dùng bàn phím và chuột rời. Đây là món chi tiêu đáng giá nhất cho lưng và cổ của bạn.",
      },
      {
        title: "Đặt chuột sát người, đừng với xa",
        detail:
          "Chuột nằm ngay cạnh bàn phím, cùng tầm cao. Phải với tay ra xa hoặc sang ngang suốt ngày là nguyên nhân trực tiếp của đau vai một bên và tê cổ tay.",
      },
      {
        title: "Đứng dậy mỗi 30–45 phút, đây là phần quan trọng nhất",
        detail:
          "Không có tư thế nào tốt nếu bạn giữ nó bất động tám tiếng. Đặt hẹn giờ, đứng dậy đi lấy nước, đi vệ sinh, hoặc chỉ đứng vươn vai 1 phút. Cơ thể cần chuyển động chứ không cần một tư thế hoàn hảo bất động.",
      },
      {
        title: "Vài động tác giãn cơ đơn giản làm ngay tại bàn",
        detail:
          "Nghiêng đầu sang một bên giữ 20 giây rồi đổi bên. Xoay vai ra sau 10 vòng. Đan tay đẩy về phía trước để giãn lưng trên. Đứng dậy ưỡn nhẹ lưng ra sau. Làm chậm, không giật, và DỪNG NGAY nếu thấy đau nhói.",
      },
      {
        title: "Để mắt nghỉ theo nguyên tắc 20-20-20",
        detail:
          "Cứ khoảng 20 phút thì nhìn ra xa khoảng 6 mét trong 20 giây. Mỏi mắt và nhức đầu thường đi kèm đau cổ, vì bạn nheo mắt rồi chồm người về phía màn hình mà không hay biết.",
      },
      {
        title: "Xem lại thói quen dùng điện thoại",
        detail:
          "Chỉnh bàn làm việc chuẩn cả ngày rồi tối cúi gằm vào điện thoại ba tiếng thì cổ vẫn đau. Giơ điện thoại lên cao hơn thay vì cúi đầu xuống. Đây là thứ nhiều người bỏ sót khi tìm nguyên nhân.",
      },
      {
        title: "Vận động ngoài giờ làm, đừng chỉ trông vào tư thế",
        detail:
          "Đi bộ, bơi, hoặc các bài tập nhẹ nhàng cho lưng và bụng giúp cơ đủ khoẻ để giữ cột sống. Bàn ghế chuẩn chỉ giảm tải, còn cơ yếu thì sớm muộn cũng đau lại. Hỏi bác sĩ hoặc kỹ thuật viên vật lý trị liệu nếu bạn không biết bắt đầu từ đâu.",
      },
    ],
    notes: [
      "Bài này KHÔNG PHẢI TƯ VẤN Y KHOA. Đây là hướng dẫn sắp xếp chỗ ngồi và thói quen, không thay thế chẩn đoán của bác sĩ. Nếu đang có bệnh về cột sống, hãy hỏi bác sĩ trước khi tập bất kỳ động tác nào.",
      "DẤU HIỆU CẦN ĐI KHÁM: đau kéo dài trên hai tuần dù đã chỉnh tư thế; đau lan xuống cánh tay hoặc xuống chân; tê, ngứa ran hoặc yếu ở tay chân; đau tăng về đêm làm bạn mất ngủ; hoặc đau kèm sụt cân không rõ lý do.",
      "ĐI CẤP CỨU NGAY nếu: mất kiểm soát tiểu tiện hoặc đại tiện, tê vùng bẹn và mặt trong đùi, yếu liệt chân đột ngột, hoặc đau lưng dữ dội sau chấn thương như ngã hay tai nạn. Đây là những dấu hiệu không được chờ đợi.",
      "Đừng tự mua và dùng thuốc giảm đau kéo dài để chịu đựng cơn đau mà không tìm nguyên nhân. Cơn đau là tín hiệu, che tín hiệu đi thì vấn đề vẫn còn đó — hãy đi khám.",
    ],
    faq: [
      {
        q: "Có cần mua ghế công thái học đắt tiền không?",
        a: "Không bắt buộc. Một cái ghế thường được chỉnh đúng độ cao, có kê chân và khăn cuộn đệm lưng đã giải quyết phần lớn vấn đề. Ghế tốt là khoản đầu tư đáng giá nếu bạn ngồi tám tiếng mỗi ngày, nhưng nó không phải điều kiện tiên quyết.",
      },
      {
        q: "Bàn đứng có tốt hơn bàn ngồi không?",
        a: "Tốt hơn ở chỗ nó buộc bạn thay đổi tư thế. Nhưng đứng suốt tám tiếng cũng gây vấn đề riêng ở chân và lưng dưới. Cách dùng hợp lý là luân phiên đứng và ngồi trong ngày.",
      },
      {
        q: "Chườm nóng hay chườm lạnh khi mỏi cổ?",
        a: "Thông thường chườm lạnh hợp với chấn thương mới trong 1–2 ngày đầu, chườm ấm hợp với cơ căng mỏi mạn tính. Nhưng nếu đau kéo dài hoặc bạn không rõ nguyên nhân thì nên đi khám thay vì tự xử lý.",
      },
      {
        q: "Ngồi thẳng lưng cả ngày có phải là đúng không?",
        a: "Ngồi cứng đờ ở một tư thế 'chuẩn' suốt ngày cũng gây mỏi. Điều quan trọng hơn tư thế hoàn hảo là sự thay đổi thường xuyên — đổi thế ngồi, đứng dậy, đi lại. Cơ thể được thiết kế để chuyển động.",
      },
    ],
    sources: [],
  },

  {
    slug: "xay-lai-gio-ngu-khi-mat-nhip",
    title: "Xây lại giờ ngủ khi nhịp sinh hoạt đã loạn",
    excerpt:
      "Nằm tới 2h sáng mắt vẫn thao láo, sáng dậy như bị xe tông, cuối tuần ngủ bù rồi tối lại thức. Đây là cách gỡ vòng lặp đó.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Đừng bắt đầu bằng việc ép mình ngủ sớm — hãy bắt đầu bằng việc dậy đúng giờ mỗi ngày, kể cả cuối tuần. Giờ thức dậy cố định là cái neo kéo mọi thứ còn lại về đúng chỗ. Ra ánh sáng ngoài trời trong 15–20 phút đầu ngày, cắt cà phê sau đầu giờ chiều, và tối thì giảm ánh sáng mạnh cùng màn hình. Điều chỉnh dần 15–30 phút mỗi vài ngày chứ đừng nhảy hai tiếng một lúc.",
    prepare: [
      "Một giờ thức dậy cố định mà bạn chấp nhận được cho cả bảy ngày trong tuần",
      "Đồng hồ báo thức để xa giường, tốt nhất là ngoài tầm với — để bạn phải đứng dậy",
      "Rèm dày hoặc miếng che mắt, và nút tai nếu chỗ bạn ở ồn",
      "Một danh sách việc làm buổi tối thay cho việc lướt điện thoại trên giường",
      "Sổ hoặc ghi chú điện thoại để đổ hết những thứ đang nghĩ ra trước khi ngủ",
    ],
    steps: [
      {
        title: "Bắt đầu từ giờ dậy, không phải giờ ngủ",
        detail:
          "Bạn không ép mình buồn ngủ được, nhưng bạn ép mình dậy được. Chọn một giờ dậy cố định và giữ nó mỗi ngày. Sau vài ngày, cơn buồn ngủ buổi tối sẽ tự đến sớm hơn — đó là cách cơ thể tự chỉnh lại.",
      },
      {
        title: "Giữ giờ dậy đó cả cuối tuần",
        detail:
          "Đây là phần khó nhất và cũng là phần quyết định. Ngủ nướng tới trưa thứ Bảy giống như bay sang múi giờ khác rồi tối Chủ nhật bay về. Nếu thiếu ngủ thì cho phép lệch tối đa một tiếng, đừng hơn.",
      },
      {
        title: "Ra ánh sáng ngoài trời ngay trong giờ đầu tiên",
        detail:
          "Mở toang rèm, ra ban công, đi bộ quanh nhà 15–20 phút. Ánh sáng buổi sáng là tín hiệu mạnh nhất báo cho đồng hồ sinh học biết ngày đã bắt đầu. Ánh sáng đèn trong nhà yếu hơn ánh sáng ngoài trời rất nhiều lần, kể cả ngày âm u.",
      },
      {
        title: "Cắt cà phê và trà đặc từ đầu giờ chiều",
        detail:
          "Cà phê tồn tại trong cơ thể lâu hơn bạn cảm nhận. Ly lúc 4h chiều vẫn còn tác dụng lúc bạn lên giường. Thử dừng sau 14h trong một tuần và xem có khác không. Trà đặc, nước tăng lực và cả socola đen cũng tính.",
      },
      {
        title: "Bỏ ngủ trưa dài, giữ lại giấc ngắn",
        detail:
          "Ngủ trưa 20–30 phút trước 15h thì tốt. Ngủ hai tiếng chiều thì tối bạn không buồn ngủ nữa và vòng lặp tiếp tục. Nếu đang chỉnh lại nhịp ngủ thì tạm bỏ hẳn giấc trưa trong một hai tuần đầu.",
      },
      {
        title: "Dời giờ đi ngủ dần dần, 15–30 phút mỗi lần",
        detail:
          "Đang ngủ lúc 2h mà đặt mục tiêu 11h ngay tối nay thì bạn sẽ nằm nhìn trần nhà ba tiếng. Lùi 15–30 phút, giữ ba bốn ngày cho quen, rồi lùi tiếp. Chậm mà chắc là con đường duy nhất ở đây.",
      },
      {
        title: "Giảm ánh sáng trong nhà một tiếng trước khi ngủ",
        detail:
          "Tắt bớt đèn trần, dùng đèn bàn ánh sáng vàng ấm. Ánh sáng mạnh buổi tối nói với cơ thể rằng vẫn đang là ban ngày. Đây là việc dễ làm mà nhiều người bỏ qua vì chỉ tập trung vào điện thoại.",
      },
      {
        title: "Đặt điện thoại ra khỏi giường",
        detail:
          "Vấn đề của điện thoại không chỉ là ánh sáng xanh mà là nội dung — mỗi lần lướt là một lần não bị kích thích và tỉnh thêm. Cắm sạc điện thoại ở phía bên kia phòng, và dùng đồng hồ báo thức rời.",
      },
      {
        title: "Có một trình tự cố định trước khi ngủ",
        detail:
          "Ví dụ: đánh răng, rửa mặt, tắt đèn lớn, đọc sách giấy 15 phút, lên giường. Lặp lại đúng thứ tự mỗi tối. Não học được rằng chuỗi hành động này nghĩa là sắp ngủ, và bắt đầu chuyển trạng thái trước cả khi bạn nằm xuống.",
      },
      {
        title: "Đổ hết suy nghĩ ra giấy trước khi lên giường",
        detail:
          "Nếu bạn nằm xuống là đầu bắt đầu chạy danh sách việc phải làm, hãy viết chúng ra giấy trong 5 phút trước đó. Ghi ra rồi thì não bớt cảm giác phải giữ chúng lại, và bạn nằm yên được.",
      },
      {
        title: "Nằm quá 20 phút không ngủ được thì đứng dậy",
        detail:
          "Nằm trằn trọc dạy cho não rằng giường là nơi để lo lắng. Ra khỏi giường, ngồi chỗ khác với ánh sáng dịu, đọc gì đó nhẹ nhàng cho tới khi thấy buồn ngủ rồi mới quay lại. Nghe phản trực giác nhưng đây là kỹ thuật được dùng phổ biến.",
      },
      {
        title: "Sắp xếp phòng ngủ cho tối, mát và yên",
        detail:
          "Rèm dày hoặc miếng che mắt, nhiệt độ mát hơn ban ngày một chút, nút tai nếu ồn. Ba yếu tố đơn giản này thường bị bỏ qua trong khi chúng dễ sửa và có tác động rõ rệt.",
      },
      {
        title: "Cho nó ba tuần trước khi kết luận",
        detail:
          "Vài đêm đầu có thể tệ hơn vì cơ thể đang phản kháng. Đo bằng mức tỉnh táo trung bình trong ngày sau hai ba tuần, chứ đừng đánh giá bằng một đêm. Hầu hết người bỏ cuộc vào ngày thứ tư, đúng lúc sắp có kết quả.",
      },
    ],
    notes: [
      "Bài này KHÔNG PHẢI TƯ VẤN Y KHOA. Đây là các thói quen sinh hoạt phổ biến, không thay thế chẩn đoán và điều trị của bác sĩ.",
      "ĐỪNG tự mua thuốc ngủ hay thực phẩm chức năng giúp ngủ để dùng dài ngày mà không hỏi bác sĩ. Mất ngủ kéo dài thường có nguyên nhân bên dưới, và tự dùng thuốc chỉ che triệu chứng.",
      "DẤU HIỆU CẦN ĐI KHÁM: mất ngủ kéo dài trên một tháng dù đã chỉnh thói quen; ngủ đủ giờ mà ban ngày vẫn buồn ngủ tới mức gà gật khi làm việc hoặc khi lái xe; ngáy to kèm những khoảng ngưng thở mà người ngủ cùng nhận ra; thức giấc kèm đau ngực, khó thở hoặc tim đập mạnh; hoặc mất ngủ đi cùng buồn bã kéo dài, mất hứng thú với mọi thứ.",
      "ĐI KHÁM NGAY nếu bạn có ý nghĩ làm hại bản thân. Đây không phải điều để chờ đợi hay tự vượt qua một mình — hãy nói với người thân và tìm hỗ trợ y tế.",
    ],
    faq: [
      {
        q: "Ngủ bù cuối tuần có lấy lại được giấc đã mất không?",
        a: "Lấy lại được một phần cảm giác mệt mỏi, nhưng cái giá là nhịp sinh học lại lệch và tối Chủ nhật bạn không ngủ được. Nếu buộc phải bù thì bù bằng cách ngủ sớm hơn buổi tối, đừng bằng cách dậy muộn.",
      },
      {
        q: "Mỗi đêm cần ngủ mấy tiếng?",
        a: "Người trưởng thành thường cần khoảng 7–9 tiếng, nhưng con số đúng cho bạn là con số mà sau đó bạn tỉnh táo cả ngày mà không cần cà phê để trụ. Đo bằng cảm giác ban ngày, đừng chỉ đếm giờ.",
      },
      {
        q: "Uống rượu cho dễ ngủ có được không?",
        a: "Rượu giúp bạn thiếp đi nhanh hơn nhưng làm giấc ngủ nửa sau bị vụn và nông, nên sáng dậy vẫn mệt. Đây là lý do nhiều người tưởng rượu giúp ngủ trong khi nó đang phá chất lượng giấc ngủ.",
      },
      {
        q: "Tập thể dục buổi tối có làm khó ngủ không?",
        a: "Tuỳ người và tuỳ cường độ. Vận động nhẹ buổi tối thường không sao, còn tập rất nặng sát giờ ngủ thì có thể làm bạn tỉnh táo lâu hơn. Thử dời buổi tập sớm hơn 2–3 tiếng và xem cơ thể bạn phản ứng thế nào.",
      },
    ],
    sources: [],
  },
];
