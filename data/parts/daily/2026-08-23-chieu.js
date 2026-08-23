// Bài đăng ngày 2026-08-23 — khung 18h chiều
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-23";

export const day20260823chieu = [
  // ═══════════════════════ XE CỘ ═══════════════════════
  {
    slug: "lai-o-to-duong-cao-toc-lan-dau",
    title: "Lái ô tô lên cao tốc lần đầu: vào làn, giữ khoảng cách, ra đúng lối",
    excerpt:
      "Cao tốc không khó hơn đường phố, nó chỉ ít tha thứ hơn. Ba việc quyết định gần như toàn bộ: nhập làn, khoảng cách, và biết trước mình ra ở đâu.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Trước khi lên, xem trước lộ trình để biết mình ra ở nút nào và cách đó bao xa. Nhập làn thì tăng tốc trong làn tăng tốc cho bằng dòng xe rồi mới chuyển vào, đừng bò ra rồi mới tăng. Giữ khoảng cách theo quy tắc đếm giây thay vì ước lượng bằng mắt. Đi làn bên phải là mặc định, làn trái chỉ để vượt rồi trả lại. Và tuyệt đối không dừng ở làn khẩn cấp trừ khi hỏng xe thật.",
    prepare: [
      "Kiểm lốp và áp suất lốp trước khi đi — tốc độ cao làm lốp non phát nổ",
      "Đổ đủ xăng, vì trạm dừng trên cao tốc thưa hơn nhiều so với đường thường",
      "Xem trước lộ trình và ghi ra tên nút giao mình sẽ ra",
      "Thẻ thu phí không dừng còn tiền trong tài khoản",
    ],
    steps: [
      {
        title: "Xem trước lộ trình và nhớ tên nút ra",
        detail:
          "Biển báo trên cao tốc ghi tên địa danh chứ không ghi số nút. Nếu không biết trước mình ra ở đâu, bạn sẽ đọc biển trong lúc đang chạy 90 và dễ ra nhầm. Ghi tên nút ra lên giấy dán trước mặt hoặc để điều hướng đọc thành tiếng.",
      },
      {
        title: "Kiểm lốp trước khi lên",
        detail:
          "Lốp non ở tốc độ cao sinh nhiệt và có thể nổ. Bơm đúng áp suất ghi trên khung cửa xe, nhìn qua xem có vết nứt hay đinh cắm không. Đây là hạng mục có hậu quả nặng nhất nếu bỏ qua.",
      },
      {
        title: "Nhập làn cho đúng: tăng tốc rồi mới vào",
        detail:
          "Làn tăng tốc sinh ra để bạn đạt gần bằng tốc độ dòng xe TRƯỚC KHI chuyển vào. Sai lầm phổ biến nhất là bò chậm rồi mới ngoi ra — buộc xe đang chạy nhanh phải phanh gấp. Nhìn gương, bật xi nhan, tăng tốc, tìm khoảng trống, rồi vào dứt khoát.",
      },
      {
        title: "Giữ khoảng cách bằng cách đếm giây",
        detail:
          "Chọn một cột mốc bên đường. Khi đuôi xe trước đi qua nó thì bắt đầu đếm; đầu xe bạn tới đó phải sau ít nhất 3 giây. Trời mưa hoặc sương thì tăng gấp đôi. Cách này chính xác hơn nhiều so với ước lượng bằng mắt.",
      },
      {
        title: "Coi làn bên phải là nhà của mình",
        detail:
          "Đi thường xuyên ở làn bên phải, chỉ sang trái để vượt rồi trả lại làn. Ôm làn trái chạy chậm là lỗi gây ùn và gây bực bội, và ở nhiều nơi là lỗi bị phạt.",
      },
      {
        title: "Chuyển làn theo trình tự cố định",
        detail:
          "Gương chiếu hậu, gương bên, xi nhan, liếc nhanh qua vai để kiểm điểm mù, rồi mới đánh lái. Điểm mù là chỗ gương không thấy, và trên cao tốc xe ở đó đang chạy rất nhanh.",
      },
      {
        title: "Vượt dứt khoát, đừng đi song song",
        detail:
          "Đi kè kè bên hông xe khác là tình huống nguy hiểm vì cả hai đều nằm trong điểm mù của nhau. Đã quyết vượt thì tăng tốc qua nhanh, rồi nhìn thấy cả xe bị vượt trong gương trong mới trả làn.",
      },
      {
        title: "Cẩn thận đặc biệt với xe tải và xe container",
        detail:
          "Chúng có điểm mù rất lớn, nhất là bên phải và ngay sau đuôi. Đừng bám sát đuôi xe tải vì bạn không thấy gì phía trước và tài xế cũng không thấy bạn. Vượt thì vượt bên trái và đi qua nhanh.",
      },
      {
        title: "Bắt đầu chuyển làn từ sớm trước lối ra",
        detail:
          "Về làn ngoài cùng bên phải từ 1–2 km trước nút ra, đừng đợi tới biển cuối cùng rồi cắt ba làn. Nếu lỡ ra, ĐỪNG lùi và đừng dừng lại — đi tiếp tới nút sau rồi quay đầu. Lùi trên cao tốc là tình huống chết người.",
      },
      {
        title: "Không dừng ở làn khẩn cấp trừ khi hỏng xe",
        detail:
          "Làn khẩn cấp dành cho xe hỏng và xe cứu hộ. Dừng nghỉ, nghe điện thoại, chụp ảnh ở đó là vi phạm và rất nguy hiểm — đây là nơi xảy ra nhiều tai nạn chết người. Muốn nghỉ thì vào trạm dừng nghỉ.",
      },
      {
        title: "Nếu buộc phải dừng vì hỏng xe",
        detail:
          "Tấp sát lề phải hết mức, bật đèn cảnh báo, đặt biển tam giác phía sau xe ở khoảng cách xa, rồi đưa mọi người RA KHỎI XE và đứng phía sau rào chắn hoặc trên taluy — không ngồi trong xe chờ. Gọi cứu hộ và số của đơn vị quản lý tuyến ghi trên biển.",
      },
      {
        title: "Chống buồn ngủ bằng cách dừng chứ không bằng ý chí",
        detail:
          "Cao tốc đơn điệu nên rất dễ ngủ gật. Cứ 2 tiếng vào trạm dừng nghỉ, xuống xe đi lại vài phút. Thấy chớp mắt lâu, đọc biển chậm, hay giật mình thì đó không phải lúc cố thêm 20 km — đó là lúc phải dừng.",
      },
    ],
    notes: [
      "Nếu nổ lốp khi đang chạy: GIỮ CHẶT VÔ LĂNG, KHÔNG phanh gấp, nhả chân ga cho xe giảm tốc dần rồi mới tấp từ từ vào lề. Phanh gấp khi nổ lốp là nguyên nhân gây lật xe.",
      "Tốc độ tối đa và tối thiểu trên từng tuyến khác nhau và ghi trên biển. Đi quá chậm cũng là lỗi và cũng nguy hiểm. Mức phạt và quy định có thể thay đổi — tra cứu quy định hiện hành trước chuyến đi.",
      "Không lùi, không quay đầu, không đi ngược chiều trên cao tốc trong bất kỳ hoàn cảnh nào. Lỡ lối ra thì đi tiếp.",
      "Bài này là kinh nghiệm lái xe phổ thông, không thay thế chương trình đào tạo lái xe hay quy định pháp luật hiện hành.",
    ],
    faq: [
      {
        q: "Lần đầu lên cao tốc nên đi tốc độ bao nhiêu?",
        a: "Đi theo dòng xe ở làn bên phải, trong giới hạn cho phép của tuyến. Chạy chậm hơn hẳn dòng xe cũng nguy hiểm không kém chạy quá nhanh, vì xe sau phải liên tục né bạn.",
      },
      {
        q: "Trời mưa to trên cao tốc thì làm gì?",
        a: "Giảm tốc, bật đèn chiếu gần, tăng khoảng cách lên gấp đôi, tránh phanh gấp và đánh lái gấp. Mưa quá lớn không nhìn thấy gì thì vào trạm dừng nghỉ chờ tạnh, đừng dừng ở làn khẩn cấp.",
      },
      {
        q: "Thẻ thu phí không dừng hết tiền thì sao?",
        a: "Barie sẽ không mở và bạn gây ùn phía sau. Nạp tiền trước khi đi và kiểm số dư trên ứng dụng. Nếu lỡ, làm theo hướng dẫn của nhân viên tại trạm, đừng cố lùi ra.",
      },
      {
        q: "Có được dừng lại chụp ảnh phong cảnh không?",
        a: "Không. Trên cao tốc chỉ được dừng ở trạm dừng nghỉ. Dừng ở lề đường hay làn khẩn cấp để chụp ảnh vừa bị phạt vừa cực kỳ nguy hiểm.",
      },
    ],
    sources: [],
  },
  {
    slug: "di-xe-may-troi-mua-duong-tron",
    title: "Đi xe máy trời mưa: phanh thế nào, tránh chỗ nào, mặc gì",
    excerpt:
      "Nguy hiểm nhất không phải lúc mưa to nhất, mà là mười lăm phút đầu khi nước vừa đủ nổi lớp dầu trên mặt đường lên.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Giảm tốc và tăng khoảng cách trước khi cần tới chúng. Phanh bằng cách bóp cả hai phanh từ từ và nhả ga trước, tuyệt đối không bóp phanh trước gấp khi đang nghiêng. Tránh vạch sơn kẻ đường, nắp cống, vệt dầu loang màu cầu vồng — đó là những chỗ trơn nhất. Áo mưa bộ hai mảnh an toàn hơn hẳn áo mưa cánh dơi, vì áo cánh dơi có thể cuốn vào bánh xe.",
    prepare: [
      "Áo mưa bộ quần rời áo rời, tuyệt đối tránh loại cánh dơi rộng thùng thình",
      "Một tấm ni lông hoặc túi zip cho điện thoại và giấy tờ",
      "Khăn giấy hoặc khăn khô để lau kính mũ bảo hiểm và lau tay",
      "Lốp còn gai — lốp mòn ngày mưa là tổ hợp nguy hiểm nhất",
    ],
    steps: [
      {
        title: "Biết mười lăm phút đầu là nguy hiểm nhất",
        detail:
          "Dầu mỡ và bụi tích tụ trên mặt đường suốt nhiều ngày nắng, khi mưa vừa xuống thì nước làm chúng nổi lên thành một lớp trơn. Sau khi mưa to một lúc, lớp đó bị rửa trôi và đường lại bớt trơn hơn. Vì vậy hãy cẩn thận nhất ngay khi trời vừa mưa.",
      },
      {
        title: "Giảm tốc trước, đừng đợi tới lúc cần",
        detail:
          "Quãng đường phanh trên đường ướt dài hơn đáng kể. Đi chậm hơn thường ngày và tăng khoảng cách với xe trước lên gấp đôi. Việc này phải làm ngay từ đầu chứ không phải khi đã thấy nguy hiểm.",
      },
      {
        title: "Phanh cho đúng: nhả ga trước, bóp đều hai phanh",
        detail:
          "Nhả ga cho xe giảm tốc trước, rồi bóp cả phanh trước và phanh sau một cách từ từ và đều tay. Bóp gấp phanh trước trên đường ướt là cách nhanh nhất để trượt bánh trước và ngã. Giữ xe thẳng khi phanh, đừng phanh lúc đang nghiêng.",
      },
      {
        title: "Nhớ những chỗ trơn nhất",
        detail:
          "Vạch sơn kẻ đường, vạch dành cho người đi bộ, nắp cống và tấm thép công trường, vệt dầu loang màu cầu vồng, lá cây ướt, và mặt đường mới trải nhựa. Nhìn trước và né chúng, hoặc nếu buộc phải qua thì đi thẳng, không phanh, không đánh lái.",
      },
      {
        title: "Vào cua thì nghiêng ít hơn thường ngày",
        detail:
          "Giảm tốc TRƯỚC khi vào cua, giữ xe thẳng hơn, đi rộng hơn và ra ga đều. Đừng phanh giữa cua. Đây là tình huống ngã nhiều nhất ngày mưa.",
      },
      {
        title: "Chọn áo mưa bộ, tránh áo cánh dơi",
        detail:
          "Áo cánh dơi rộng có thể bay tạt vào mặt, che gương, hoặc tệ nhất là cuốn vào bánh sau và nan hoa. Áo bộ quần rời áo rời gọn gàng, an toàn và cũng khô người hơn. Đây là khoản đáng đầu tư một lần.",
      },
      {
        title: "Xử lý chuyện kính mũ mờ",
        detail:
          "Hé kính một chút để không khí lưu thông giảm mờ. Lau bằng khăn khô chứ đừng quệt bằng tay ướt. Nếu mưa quá to không nhìn được thì tấp vào chỗ an toàn chờ ngớt — cố đi trong tình trạng không nhìn rõ là đánh cược.",
      },
      {
        title: "Bật đèn để người khác thấy mình",
        detail:
          "Ngày mưa trời tối và người khác cũng khó nhìn. Bật đèn chiếu gần cả ban ngày. Mặc áo mưa màu sáng hoặc có phản quang thay vì màu tối.",
      },
      {
        title: "Đừng đi sát xe tải và xe buýt",
        detail:
          "Chúng tạt nước mù mịt làm bạn mất tầm nhìn hoàn toàn trong vài giây. Giữ khoảng cách xa hoặc vượt dứt khoát, đừng đi kè kè bên hông.",
      },
      {
        title: "Nước ngập thì đo trước bằng mắt",
        detail:
          "Nước ngập quá nửa bánh xe hoặc chạm tới ống pô là lúc nên quay đầu tìm đường khác. Nếu buộc phải qua thì đi số thấp, ga đều, KHÔNG nhả ga giữa chừng, và không bám theo ô tô vì sóng nước chúng tạo ra sẽ tràn vào pô xe bạn.",
      },
      {
        title: "Nếu xe chết máy trong nước, đừng đề lại",
        detail:
          "Đề lại có thể hút nước vào buồng đốt và làm cong tay biên — sửa rất tốn. Dắt xe lên chỗ khô, tháo bugi lau khô nếu biết làm, hoặc gọi thợ. Kiên nhẫn ở đây tiết kiệm được tiền triệu.",
      },
      {
        title: "Về nhà thì lau khô và tra dầu xích",
        detail:
          "Nước mưa cuốn trôi dầu bôi trơn xích và gây rỉ nhanh. Lau khô xe, xịt lại dầu xích, và kiểm phanh xem còn ăn không. Vài phút này kéo dài tuổi thọ xe đáng kể.",
      },
    ],
    notes: [
      "Không trú mưa dưới gốc cây to, cột điện, biển quảng cáo hay gần dây điện sà xuống — nguy cơ cây đổ và điện giật là có thật trong mưa giông.",
      "Thấy dây điện đứt rơi xuống đường ngập: đứng xa ít nhất chục mét, không lội qua, báo ngay điện lực hoặc 114.",
      "Đường ngập che khuất hố ga mất nắp và ổ gà. Đi chậm, bám theo vệt xe đi trước, và tránh mép đường nơi nước sâu hơn.",
      "Bài này là kinh nghiệm lái xe phổ thông, không thay thế đào tạo lái xe hay quy định giao thông hiện hành.",
    ],
    faq: [
      {
        q: "Có nên bóp phanh trước ngày mưa không?",
        a: "Có, nhưng phải bóp từ từ và đều, kết hợp cùng phanh sau, và khi xe đang thẳng. Bỏ hẳn phanh trước cũng nguy hiểm vì quãng đường phanh dài ra rất nhiều.",
      },
      {
        q: "Xe có ABS thì yên tâm hơn chứ?",
        a: "ABS giúp bánh không bị bó cứng khi phanh gấp và là tính năng rất đáng có. Nhưng nó không tăng độ bám của lốp — vẫn phải đi chậm và giữ khoảng cách.",
      },
      {
        q: "Đi dép hay giày ngày mưa?",
        a: "Giày kín có đế bám tốt hơn hẳn. Dép lê trơn tuột khi ướt, dễ tuột chân khỏi bàn đạp và cũng không bảo vệ được chân nếu ngã.",
      },
      {
        q: "Lốp bao nhiêu thì gọi là mòn?",
        a: "Nhìn các rãnh gai — hết gai hoặc gai còn rất cạn thì thay. Nhiều lốp có mốc chỉ báo mòn nằm trong rãnh; khi mặt lốp mòn ngang mốc đó là hết hạn dùng.",
      },
    ],
    sources: [],
  },
  {
    slug: "lai-xe-ban-dem-an-toan",
    title: "Lái xe ban đêm: chỉnh đèn, chống chói, và nhận ra lúc mình sắp ngủ",
    excerpt:
      "Mắt người ban đêm nhìn kém hơn nhiều so với ta tưởng, mà tốc độ thì vẫn giữ nguyên. Đó là khoảng chênh tạo ra tai nạn.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Ban đêm hãy đi chậm hơn ban ngày để quãng đường bạn nhìn thấy luôn dài hơn quãng đường phanh. Dùng đèn chiếu gần trong đô thị và khi có xe ngược chiều, chỉ dùng đèn chiếu xa ở đường vắng và hạ ngay khi thấy xe đối diện. Bị chói thì nhìn về mép phải của làn đường chứ đừng nhìn thẳng vào đèn. Và buồn ngủ thì chỉ có một cách chữa: dừng lại ngủ.",
    prepare: [
      "Lau sạch kính chắn gió cả hai mặt và lau đèn — bụi bẩn làm tán xạ ánh sáng gây chói",
      "Kính mũ bảo hiểm trong suốt, không dùng kính râm hay kính đen ban đêm",
      "Chỗ dừng nghỉ đã xem trước nếu đi đường dài",
      "Cà phê hoặc trà thì chỉ để tỉnh táo tạm, không thay được giấc ngủ",
    ],
    steps: [
      {
        title: "Hiểu vì sao ban đêm nguy hiểm hơn",
        detail:
          "Ban đêm mắt nhìn kém tương phản, khó ước lượng khoảng cách và tốc độ, và tầm nhìn co lại đúng bằng vùng đèn chiếu tới. Nhưng hầu hết người lái vẫn giữ nguyên tốc độ như ban ngày. Chính khoảng chênh đó tạo ra tai nạn.",
      },
      {
        title: "Áp dụng nguyên tắc nhìn xa hơn quãng phanh",
        detail:
          "Đi với tốc độ mà bạn có thể dừng lại trong phạm vi vùng đèn chiếu tới. Nếu đèn chiếu gần chỉ soi được vài chục mét thì tốc độ phải đủ chậm để dừng trong khoảng đó. Đây là nguyên tắc gói gọn toàn bộ chuyện lái đêm.",
      },
      {
        title: "Lau kính và lau đèn trước khi đi",
        detail:
          "Một lớp bụi mỏng trên kính chắn gió gần như vô hình ban ngày nhưng ban đêm nó tán xạ ánh đèn ngược chiều thành một vùng chói loà. Lau cả mặt trong kính, vì hơi dầu bám mặt trong là thủ phạm hay gặp.",
      },
      {
        title: "Dùng đúng loại đèn ở đúng chỗ",
        detail:
          "Trong đô thị có đèn đường và khi có xe ngược chiều thì dùng đèn chiếu gần. Đèn chiếu xa chỉ dùng ở đường vắng không có xe đối diện, và phải hạ ngay khi thấy ánh đèn xe khác từ xa. Rọi đèn xa vào mặt người khác là làm họ mù tạm thời vài giây.",
      },
      {
        title: "Xử lý khi bị chói: nhìn lệch, không nhìn thẳng",
        detail:
          "Hướng mắt về mép phải của làn đường và bám theo vạch kẻ để giữ hướng, giảm tốc, không nhìn thẳng vào đèn đối diện. Sau khi xe kia đi qua, mắt cần vài giây để hồi phục — đừng tăng tốc ngay trong khoảng đó.",
      },
      {
        title: "Đừng nháy đèn trả đũa",
        detail:
          "Bị chói rồi rọi đèn xa lại là biến một xe bị mù thành hai xe bị mù, đang chạy ngược chiều nhau. Nếu muốn nhắc, nháy nhẹ một cái rồi thôi.",
      },
      {
        title: "Chỉnh gương chiếu hậu sang chế độ chống chói",
        detail:
          "Gương trong xe ô tô thường có một cần gạt nhỏ phía dưới để đổi sang chế độ ban đêm, làm giảm hẳn độ chói từ xe phía sau. Rất nhiều người dùng xe nhiều năm mà không biết có cái cần này.",
      },
      {
        title: "Không đeo kính râm và không dán phim quá tối",
        detail:
          "Kính râm ban đêm làm giảm thêm lượng ánh sáng vốn đã ít. Kính mũ bảo hiểm màu tối cũng vậy. Phim cách nhiệt quá tối trên ô tô làm giảm tầm nhìn đêm rõ rệt.",
      },
      {
        title: "Cảnh giác với người đi bộ và xe đạp không đèn",
        detail:
          "Đây là nhóm gần như vô hình ban đêm, nhất là ở đường quê và ven đô. Giảm tốc khi qua khu dân cư, đoạn có quán xá, và những chỗ có thể có người sang đường.",
      },
      {
        title: "Nhận ra dấu hiệu buồn ngủ trước khi quá muộn",
        detail:
          "Chớp mắt lâu hơn bình thường, đọc biển báo chậm, không nhớ mình vừa đi qua đoạn nào, lấn làn nhẹ rồi giật mình, ngáp liên tục. Bất kỳ dấu hiệu nào trong đó nghĩa là bạn đã ở ngưỡng nguy hiểm rồi.",
      },
      {
        title: "Buồn ngủ thì chỉ có một cách: dừng lại ngủ",
        detail:
          "Mở cửa kính, bật nhạc to, tự tát vào mặt — đều là ảo giác an toàn, chúng chỉ trì hoãn vài phút. Tấp vào chỗ an toàn và ngủ 15–20 phút thật sự có tác dụng. Cà phê thì cần khoảng 20 phút mới ngấm, uống rồi chợp mắt luôn là cách hiệu quả nhất.",
      },
      {
        title: "Tránh khung giờ nguy hiểm nhất nếu có thể",
        detail:
          "Khoảng 2 tới 5 giờ sáng là lúc cơ thể buồn ngủ mạnh nhất, và cũng là khung giờ tai nạn do ngủ gật nhiều nhất. Nếu đi đường dài, hãy sắp lịch để nghỉ trong khoảng đó thay vì cố chạy.",
      },
    ],
    notes: [
      "Không bao giờ lái xe sau khi uống rượu bia, và ban đêm thì rượu bia cộng với mệt mỏi làm mọi thứ tệ hơn nhiều lần.",
      "Một số thuốc cảm, thuốc dị ứng và thuốc an thần gây buồn ngủ mạnh. Đọc kỹ tờ hướng dẫn hoặc hỏi dược sĩ trước khi lái xe.",
      "Nếu bạn thấy quáng gà, nhìn đêm kém hẳn so với trước, hoặc thấy quầng sáng quanh đèn — hãy đi khám mắt. Đó có thể là dấu hiệu của vấn đề về mắt cần điều trị.",
      "Bài này là kinh nghiệm phổ thông, không thay thế chương trình đào tạo lái xe hay quy định pháp luật hiện hành.",
    ],
    faq: [
      {
        q: "Kính chống chói ban đêm có tác dụng thật không?",
        a: "Loại kính vàng bán tràn lan phần lớn không có bằng chứng hiệu quả, và vì làm giảm lượng ánh sáng vào mắt nên có thể phản tác dụng. Lau sạch kính xe và chỉnh gương chống chói có ích hơn nhiều.",
      },
      {
        q: "Đèn LED độ sáng hơn có nên lắp không?",
        a: "Lắp đèn không đúng chuẩn thường gây chói cho xe ngược chiều dù bạn thấy sáng hơn, và có thể không đúng quy định. Nếu muốn sáng hơn, hãy chỉnh đúng góc chiếu và thay bóng đúng loại theo khuyến cáo của nhà sản xuất.",
      },
      {
        q: "Đi xe máy ban đêm nên đi làn nào?",
        a: "Đi đúng làn quy định và bám phần đường bên phải, tránh đi sát mép quá vì đó là nơi có ổ gà, cát và rác. Giữ khoảng cách để đèn xe sau không rọi thẳng vào gương của mình.",
      },
      {
        q: "Ngủ 15 phút có thật sự đủ không?",
        a: "Đủ để vượt qua cơn buồn ngủ cấp tính và lái thêm một quãng an toàn. Nhưng nó không thay được giấc ngủ đêm — nếu đã thiếu ngủ cả đêm thì phương án đúng là nghỉ hẳn.",
      },
    ],
    sources: [],
  },
  {
    slug: "rua-xe-cham-soc-son-tai-nha",
    title: "Rửa xe tại nhà: làm đúng thì đỡ tốn, làm sai thì xước cả sơn",
    excerpt:
      "Xịt nước rồi lấy giẻ chà một vòng là cách nhanh nhất tạo ra những vết xước xoáy chi chít mà nắng lên mới thấy.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Nguyên tắc gốc: cát bụi mới là thứ làm xước sơn, còn giẻ chỉ là thứ kéo cát đi khắp xe. Vì vậy phải xịt trôi hết bụi trước khi chạm vào xe, dùng hai xô — một xô nước xà phòng và một xô nước sạch để giũa giẻ — và rửa từ trên xuống dưới. Không rửa dưới nắng gắt, không dùng nước rửa bát, và lau khô bằng khăn mềm thay vì để tự khô.",
    prepare: [
      "Hai xô: một pha dung dịch rửa xe, một đựng nước sạch để giũa giẻ",
      "Khăn microfiber mềm — vài cái, và một cái riêng cho bánh xe",
      "Dung dịch rửa xe chuyên dụng, KHÔNG dùng nước rửa bát",
      "Chỗ râm mát và thời điểm sáng sớm hoặc chiều muộn",
    ],
    steps: [
      {
        title: "Hiểu thứ gì thật sự làm xước sơn",
        detail:
          "Không phải cái giẻ, mà là hạt cát và bụi bám trên xe. Giẻ chỉ đóng vai trò kéo những hạt đó rê ngang mặt sơn. Hiểu điều này thì mọi bước còn lại đều có lý do rõ ràng.",
      },
      {
        title: "Chọn chỗ râm và thời điểm mát",
        detail:
          "Rửa dưới nắng gắt làm nước và xà phòng khô ngay trên xe, để lại vệt ố khoáng rất khó tẩy. Sáng sớm, chiều muộn, hoặc trong bóng râm. Sờ nắp ca-pô thấy nóng thì chờ nguội đã.",
      },
      {
        title: "Xịt nước trôi hết bụi trước khi chạm vào xe",
        detail:
          "Xịt kỹ toàn bộ từ trên xuống, kể cả hốc bánh và gầm, cho cát bụi trôi đi. Đây là bước quan trọng nhất và cũng hay bị làm qua loa nhất. Chưa xịt sạch mà đã lấy giẻ chà là đã hỏng.",
      },
      {
        title: "Rửa bánh xe và hốc bánh TRƯỚC",
        detail:
          "Đây là chỗ bẩn nhất, nhiều cát và bụi phanh. Làm trước và bằng khăn riêng, để không mang thứ bẩn đó lên thân xe. Rửa xong thì rửa tay và tráng lại khăn.",
      },
      {
        title: "Dùng phương pháp hai xô",
        detail:
          "Xô một pha dung dịch rửa, xô hai đựng nước sạch. Nhúng khăn vào xô xà phòng, lau một mảng xe, rồi giũa khăn trong xô nước sạch trước khi nhúng lại. Cách này giữ cho xô xà phòng không biến thành xô nước cát.",
      },
      {
        title: "Rửa từ trên xuống dưới",
        detail:
          "Nóc, kính, nắp ca-pô, rồi mới xuống hai bên hông và cuối cùng là phần dưới cùng — nơi bẩn nhất. Làm ngược lại là mang bùn từ dưới lên bôi khắp xe.",
      },
      {
        title: "Lau thẳng, đừng chà vòng tròn",
        detail:
          "Lau theo đường thẳng trước sau. Chà vòng tròn tạo ra những vết xước xoáy hình tròn — chính là thứ hiện lên chi chít khi xe đứng dưới nắng. Lực tay nhẹ thôi, để dung dịch làm việc chứ không phải cơ tay.",
      },
      {
        title: "Tuyệt đối không dùng nước rửa bát",
        detail:
          "Nước rửa bát tẩy dầu mỡ rất mạnh, nó bóc luôn lớp sáp bảo vệ trên sơn và làm gioăng cao su khô nứt. Dùng vài lần thì sơn xỉn màu thấy rõ. Dung dịch rửa xe chuyên dụng không đắt.",
      },
      {
        title: "Xả sạch xà phòng ngay, đừng để khô",
        detail:
          "Xả từ trên xuống và xả kỹ các khe, gương, tay nắm cửa. Xà phòng khô lại để lại vệt trắng và về lâu dài làm mờ sơn.",
      },
      {
        title: "Lau khô thay vì để tự khô",
        detail:
          "Nước tự khô để lại vệt khoáng trắng, nhất là ở vùng nước cứng. Dùng khăn microfiber sạch thấm nhẹ theo kiểu đặt xuống rồi kéo, đừng chà. Lau kính trước rồi mới tới thân xe.",
      },
      {
        title: "Đừng bỏ qua vài chỗ hay quên",
        detail:
          "Khe cửa và mép cửa, dưới nắp xăng, phía sau biển số, chỗ tiếp giáp gương. Nước và bụi đọng ở đó lâu ngày gây rỉ. Với xe máy thì chú ý dưới yên, quanh xích và hốc gió.",
      },
      {
        title: "Với xe máy, tránh xịt thẳng vào vài chỗ",
        detail:
          "Đừng xịt nước áp lực cao thẳng vào ổ khoá, cụm điện, bugi, họng gió và đồng hồ. Sau khi rửa nhớ tra lại dầu xích, vì nước và xà phòng rửa trôi hết dầu bôi trơn.",
      },
    ],
    notes: [
      "Không dùng máy xịt áp lực rất cao ở cự ly gần với sơn, tem dán và gioăng — nó bóc tem và đẩy nước vào những chỗ không nên có nước.",
      "Phân chim và nhựa cây nên rửa sớm, vì chúng ăn mòn lớp sơn phủ nếu để lâu dưới nắng. Đắp khăn ướt vài phút cho mềm rồi lau, đừng cạy khô.",
      "Xe vừa đi mưa hoặc đi biển về nên xịt rửa gầm bằng nước sạch. Muối và bùn đọng ở gầm là nguyên nhân rỉ sét lớn nhất.",
      "Bài này là kinh nghiệm chăm sóc xe thường ngày, không phải hướng dẫn kỹ thuật của nhà sản xuất.",
    ],
    faq: [
      {
        q: "Rửa xe ngoài tiệm có tốt hơn tự rửa không?",
        a: "Tiệm làm nhanh và có máy móc, nhưng nhiều nơi dùng chung giẻ cho nhiều xe và chà mạnh — đó chính là nguồn vết xước xoáy. Tự rửa đúng cách thường giữ sơn tốt hơn.",
      },
      {
        q: "Bao lâu nên rửa xe một lần?",
        a: "Tuỳ điều kiện đi lại. Khoảng hai tuần một lần là hợp lý với xe đi phố. Đi mưa, đi biển, hoặc dính phân chim nhựa cây thì rửa sớm hơn.",
      },
      {
        q: "Có cần đánh bóng và phủ sáp không?",
        a: "Không bắt buộc. Phủ sáp tạo một lớp bảo vệ giúp dễ rửa lần sau và giữ màu, làm vài tháng một lần là đủ. Đánh bóng thì bào mỏng lớp sơn nên đừng làm thường xuyên.",
      },
      {
        q: "Xe máy có cần rửa kỹ như ô tô không?",
        a: "Không cần cầu kỳ bằng, nhưng nguyên tắc xịt trôi bụi trước và tránh nước vào cụm điện thì vẫn giữ nguyên. Quan trọng nhất với xe máy là tra lại dầu xích sau khi rửa.",
      },
    ],
    sources: [],
  },
  {
    slug: "xich-nhong-sen-xe-may",
    title: "Xích nhông sên xe máy: dấu hiệu phải thay và cách tự bảo dưỡng",
    excerpt:
      "Xích khô kêu rào rào là chuyện ai cũng nghe thấy mà ít ai xử lý. Để tới lúc phải thay cả bộ thì tốn gấp mấy chục lần chai dầu xịt.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Kiểm độ chùng và tra dầu xích mỗi 500–1.000 km hoặc sau mỗi lần đi mưa. Xích quá chùng thì kêu, giật và dễ tuột; quá căng thì mòn nhanh và hại bạc đạn. Dấu hiệu phải thay cả bộ: kéo xích ra khỏi răng nhông sau được nhiều, răng nhông mòn nhọn như lưỡi câu, hoặc xích căng chỉnh hết cỡ vẫn chùng. Thay thì thay cả bộ ba món, đừng thay lẻ.",
    prepare: [
      "Một chai dầu xịt xích chuyên dụng, không dùng nhớt thải hay dầu ăn",
      "Bàn chải cũ và giẻ để làm sạch trước khi tra dầu",
      "Bộ cờ lê phù hợp nếu muốn tự chỉnh độ chùng",
      "Chân chống giữa hoặc chỗ kê để bánh sau quay tự do",
    ],
    steps: [
      {
        title: "Biết bộ truyền động gồm ba món đi cùng nhau",
        detail:
          "Nhông trước, xích, và đĩa sau. Chúng mòn theo nhau, nên thay lẻ một món thì món mới sẽ mòn rất nhanh vì phải ăn khớp với món cũ đã mòn. Thay thì thay cả bộ — đây là chỗ nhiều tiệm khuyên đúng mà khách hay tiếc tiền.",
      },
      {
        title: "Kiểm độ chùng đúng cách",
        detail:
          "Dựng chân chống giữa, tìm điểm giữa đoạn xích phía dưới, nhấc lên thả xuống. Độ chùng hợp lý thường trong khoảng vài centimet — con số chính xác ghi trong sách hướng dẫn của xe. Kiểm ở vài vị trí bánh xe khác nhau vì xích mòn không đều.",
      },
      {
        title: "Nghe tiếng và cảm nhận khi chạy",
        detail:
          "Tiếng rào rào khô khốc là xích thiếu dầu. Tiếng lộc cộc và cảm giác giật khi lên ga hay nhả ga là xích quá chùng. Cảm giác rung ở chân để lên gác chân sau cũng là dấu hiệu cần kiểm.",
      },
      {
        title: "Làm sạch trước khi tra dầu",
        detail:
          "Tra dầu lên xích đang bám đầy cát bụi thì bạn đang tạo ra một thứ hỗn hợp mài mòn. Dùng bàn chải chà nhẹ cho bong đất cát, lau bằng giẻ, để khô rồi mới xịt dầu.",
      },
      {
        title: "Tra dầu đúng chỗ và đúng lượng",
        detail:
          "Xịt vào mặt trong của xích, chỗ tiếp xúc với răng nhông, vừa xịt vừa quay bánh sau chậm cho đủ vòng. Xịt vừa phải thôi — thừa dầu sẽ văng ra bám bụi và làm bẩn cả vành xe. Xịt xong để vài phút cho ngấm rồi lau phần thừa.",
      },
      {
        title: "Chọn đúng loại dầu",
        detail:
          "Dùng dầu xịt xích chuyên dụng. Nhớt thải bám bụi rất nhanh và không bảo vệ được, dầu ăn thì càng không. Với xích có phớt cao su, phải chọn loại ghi rõ dùng được cho loại xích đó.",
      },
      {
        title: "Tra dầu sau mỗi lần đi mưa",
        detail:
          "Nước mưa rửa trôi dầu bôi trơn và gây rỉ chỉ sau vài ngày. Đi mưa về là một trong những lúc cần tra dầu nhất, dù chưa tới mốc kilômét.",
      },
      {
        title: "Nhận ra dấu hiệu xích đã giãn hết",
        detail:
          "Kéo một mắt xích ra khỏi răng đĩa sau ở vị trí sau cùng. Nếu kéo ra được nhiều tới mức gần thấy hết chân răng thì xích đã giãn và cần thay. Đây là phép thử nhanh mà thợ vẫn dùng.",
      },
      {
        title: "Nhìn răng nhông và răng đĩa",
        detail:
          "Răng còn tốt thì đối xứng và đầu hơi tù. Răng mòn thì lệch một bên và nhọn cong như lưỡi câu. Thấy hình dáng lưỡi câu là lúc phải thay, dù xích trông còn được.",
      },
      {
        title: "Đừng chỉnh xích quá căng",
        detail:
          "Nhiều người thấy chùng thì siết cho căng hết cỡ. Xích quá căng làm mòn nhanh cả bộ, hại bạc đạn bánh sau và nặng máy. Xích cần một độ chùng nhất định để hoạt động bình thường khi giảm xóc nén xuống.",
      },
      {
        title: "Chỉnh cân hai bên nếu tự làm",
        detail:
          "Hai bên gắp xe có vạch chia. Chỉnh hai bên bằng nhau theo vạch, nếu không bánh sau sẽ lệch, xe đi bị nhao và lốp mòn vẹt một bên. Không chắc tay thì để tiệm làm, công không đáng bao nhiêu.",
      },
      {
        title: "Kiểm định kỳ theo lịch chứ đừng đợi kêu",
        detail:
          "Đặt nhắc mỗi tháng một lần: kiểm độ chùng và tra dầu. Việc mất mười phút này rẻ hơn rất nhiều so với thay cả bộ truyền động sớm, và tránh được tình huống tuột xích khi đang chạy.",
      },
    ],
    notes: [
      "TUỘT XÍCH KHI ĐANG CHẠY có thể làm khoá cứng bánh sau và gây ngã. Xích quá chùng, kêu to bất thường, hoặc thấy giật mạnh thì đừng chạy tiếp — dắt tới tiệm gần nhất.",
      "Không tra dầu khi máy đang nóng và không đưa tay vào gần xích khi bánh đang quay bằng máy. Quay bánh bằng tay với xe tắt máy trên chân chống giữa là cách an toàn.",
      "Xe tay ga dùng dây curoa chứ không dùng xích, cách bảo dưỡng khác hẳn — đó là hạng mục phải kiểm theo mốc kilômét ở tiệm.",
      "Bài này là kinh nghiệm bảo dưỡng phổ thông, không thay thế sách hướng dẫn của nhà sản xuất hay tay nghề thợ.",
    ],
    faq: [
      {
        q: "Bao lâu thì phải thay cả bộ?",
        a: "Tuỳ cách đi và cách chăm. Chăm tra dầu đều thì được rất lâu, để khô và đi mưa nhiều thì nhanh hơn hẳn. Đừng đi theo số kilômét cố định — hãy đi theo các dấu hiệu mòn ở trên.",
      },
      {
        q: "Xích kêu nhưng vẫn đi bình thường, có sao không?",
        a: "Có. Xích khô đang mòn rất nhanh trong lúc bạn đi, và kéo theo mòn cả nhông đĩa. Xử lý bằng một lần xịt dầu rẻ hơn nhiều so với thay bộ mới sớm vài tháng.",
      },
      {
        q: "Có nên rửa xích bằng xăng hay dầu hoả không?",
        a: "Với xích có phớt cao su thì không nên, vì dung môi mạnh làm hỏng phớt. Dùng dung dịch vệ sinh xích chuyên dụng hoặc chỉ chà khô bằng bàn chải là an toàn hơn.",
      },
      {
        q: "Thay xích ở tiệm, làm sao biết mình không bị luộc đồ?",
        a: "Yêu cầu xem đồ cũ tháo ra và đồ mới còn trong hộp trước khi lắp. Hỏi rõ tên hãng và giá từng món. Chọn tiệm quen hoặc đại lý chính hãng cho những hạng mục lớn.",
      },
    ],
    sources: [],
  },
  {
    slug: "bugi-loc-gio-xe-may",
    title: "Bugi và lọc gió xe máy: hai món rẻ quyết định xe khoẻ hay ì",
    excerpt:
      "Xe đề khó nổ, chạy ì, hao xăng — trước khi nghĩ tới chuyện lớn, hãy mở hai món này ra xem. Chúng rẻ nhất và cũng bị quên nhiều nhất.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Lọc gió bẩn làm xe thiếu khí, chạy ì và hao xăng; bugi mòn hoặc đóng muội làm đánh lửa kém, khó nổ và giật cục. Cả hai đều rẻ và đều nằm trong nhóm bảo dưỡng định kỳ. Nhìn màu đầu bugi là đọc được tình trạng máy: nâu gạch là tốt, đen muội là thừa xăng hoặc lọc gió tắc, trắng bợt là thiếu xăng hoặc quá nóng.",
    prepare: [
      "Tuýp tháo bugi đúng cỡ — thường có sẵn trong bộ đồ nghề theo xe",
      "Bàn chải sắt nhỏ hoặc giấy nhám mịn nếu muốn vệ sinh bugi",
      "Sách hướng dẫn của xe để biết mốc thay và đúng mã bugi",
      "Chỗ làm sạch sẽ, vì bụi lọt vào họng máy khi tháo lọc gió là điều phải tránh",
    ],
    steps: [
      {
        title: "Biết hai món này làm gì",
        detail:
          "Lọc gió lọc bụi cho khí nạp vào máy. Bugi tạo tia lửa đốt hỗn hợp xăng và khí. Một cái lo phần khí vào, một cái lo phần cháy — hỏng bên nào cũng khiến xe yếu, ì và tốn xăng.",
      },
      {
        title: "Nhận ra dấu hiệu lọc gió bẩn",
        detail:
          "Xe ì khi lên ga, tăng tốc chậm, hao xăng hơn hẳn, khói xả đen hơn, và nhiều khi chạy chậm thì bình thường nhưng lên ga lớn là hụt. Đây là những dấu hiệu rất hay bị đổ nhầm cho máy yếu.",
      },
      {
        title: "Tìm và mở hộp lọc gió",
        detail:
          "Thường nằm bên hông máy hoặc dưới yên, là một hộp nhựa có vài con ốc. Mở ra, lấy tấm lọc ra và soi ngược sáng. Nhìn xuyên qua thấy sáng đều là còn dùng được; tối om, đen kịt, có dầu là phải thay.",
      },
      {
        title: "Biết loại lọc nào rửa được, loại nào không",
        detail:
          "Lọc giấy KHÔNG rửa được — rửa xong là nát và hết tác dụng, chỉ có thể gõ nhẹ cho rụng bụi rồi thay khi bẩn. Lọc mút hoặc lọc vải có thể rửa, phơi thật khô rồi tra một lớp dầu chuyên dụng mỏng trước khi lắp lại.",
      },
      {
        title: "Đừng chạy xe khi đã tháo lọc gió ra",
        detail:
          "Nhiều người tháo bỏ hẳn lọc gió vì nghĩ xe sẽ bốc hơn. Thực tế bụi và cát đi thẳng vào máy, làm xước xi lanh và mòn máy rất nhanh. Đây là kiểu tiết kiệm đắt nhất.",
      },
      {
        title: "Tháo bugi đúng cách",
        detail:
          "Chờ máy nguội hẳn. Rút chụp bugi, thổi hoặc lau sạch bụi quanh chân bugi trước khi tháo — nếu không bụi sẽ rơi thẳng vào buồng đốt. Dùng tuýp đúng cỡ, vặn ngược chiều kim đồng hồ, nhẹ tay.",
      },
      {
        title: "Đọc màu đầu bugi để biết tình trạng máy",
        detail:
          "Nâu gạch hoặc xám nhạt là hỗn hợp chuẩn, máy khoẻ. Đen khô đóng muội là thừa xăng hoặc lọc gió tắc. Đen ướt dính dầu là dầu lọt vào buồng đốt, cần thợ xem. Trắng bợt hoặc có vết cháy rỗ là máy chạy quá nóng. Đây là cách chẩn đoán miễn phí mà rất ít người dùng.",
      },
      {
        title: "Vệ sinh bugi nếu chỉ đóng muội nhẹ",
        detail:
          "Chải nhẹ phần điện cực bằng bàn chải sắt nhỏ cho bong muội, lau sạch. Đây là biện pháp tạm thời và chỉ dùng khi bugi chưa mòn. Bugi đã mòn điện cực thì vệ sinh không cứu được.",
      },
      {
        title: "Biết khi nào phải thay hẳn",
        detail:
          "Điện cực mòn tròn đầu thay vì vuông cạnh, sứ cách điện nứt, ren bị hỏng, hoặc vệ sinh rồi vẫn khó nổ. Bugi là món rẻ nên đừng cố tiếc — thay theo mốc trong sách hướng dẫn là hợp lý nhất.",
      },
      {
        title: "Mua đúng mã, đừng mua theo lời tiệm",
        detail:
          "Mỗi xe dùng một mã bugi riêng, ghi trong sách hướng dẫn hoặc dập trên thân bugi cũ. Lắp sai mã có thể gây nóng máy hoặc khó nổ. Chụp ảnh bugi cũ mang đi mua là cách chắc nhất, và cảnh giác với hàng nhái giá rẻ bất thường.",
      },
      {
        title: "Lắp lại cho đúng lực",
        detail:
          "Vặn tay cho ăn ren trước, không dùng tuýp ngay từ đầu để tránh hỏng ren. Khi đã chạm gioăng thì siết thêm một chút bằng tuýp. Siết quá tay có thể nứt sứ hoặc hỏng ren trên máy — đây là lỗi tốn kém.",
      },
      {
        title: "Đưa hai món này vào lịch bảo dưỡng",
        detail:
          "Kiểm lọc gió mỗi lần thay nhớt, thay theo mốc kilômét trong sách hướng dẫn. Bugi kiểm định kỳ và thay theo mốc. Đặt nhắc trên điện thoại kèm số kilômét, vì đây là hai món dễ quên nhất.",
      },
    ],
    notes: [
      "Đi xe trong khu nhiều bụi, đường đất, hoặc mùa khô thì lọc gió bẩn nhanh hơn nhiều so với mốc trong sách. Kiểm sớm hơn thay vì chờ tới mốc.",
      "Bugi ướt dính dầu nhớt là dấu hiệu vấn đề bên trong máy như xéc măng hoặc phớt van — đừng chỉ thay bugi mới rồi bỏ qua, hãy cho thợ kiểm.",
      "Không tháo bugi khi máy còn nóng: dễ hỏng ren nhôm trên nắp máy, và đó là hư hỏng sửa rất tốn.",
      "Bài này là kinh nghiệm bảo dưỡng phổ thông, không thay thế sách hướng dẫn của nhà sản xuất.",
    ],
    faq: [
      {
        q: "Xe khó nổ buổi sáng có phải do bugi không?",
        a: "Có thể, nhưng cũng có thể do ắc quy yếu, xăng cũ, hoặc chế hoà khí bẩn. Bugi là món dễ kiểm nhất nên hãy bắt đầu từ đó, rồi mới tới các nguyên nhân khác.",
      },
      {
        q: "Bugi đắt tiền có làm xe khoẻ hơn không?",
        a: "Bugi cao cấp bền hơn và ổn định hơn, nhưng không biến xe thường thành xe mạnh. Điều quan trọng là đúng mã và còn tốt, chứ không phải đắt.",
      },
      {
        q: "Lọc gió bao lâu thay một lần?",
        a: "Theo mốc kilômét trong sách hướng dẫn, nhưng nên kiểm bằng mắt mỗi lần thay nhớt. Đi trong môi trường bụi thì thay sớm hơn mốc.",
      },
      {
        q: "Xe tay ga có giống xe số không?",
        a: "Nguyên tắc giống nhau, chỉ khác vị trí và cách tháo. Xe tay ga còn có thêm bộ lọc gió cho hộp truyền động — hạng mục này thường phải ra tiệm.",
      },
    ],
    sources: [],
  },
  {
    slug: "ban-xe-may-cu-an-toan",
    title: "Bán xe máy cũ: định giá, đăng tin, và giao dịch không bị lừa",
    excerpt:
      "Bán xe xong mà không sang tên là bạn vẫn đứng tên chiếc xe đó — kèm theo mọi phiền phức nếu người mua gây chuyện.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Ba việc quyết định: định giá đúng bằng cách tra vài chục tin rao cùng đời cùng tình trạng, chuẩn bị đủ giấy tờ trước khi đăng tin, và làm thủ tục sang tên ngay khi giao xe. Giao dịch thì gặp ở nơi đông người và có camera, nhận tiền xong mới giao chìa và giấy tờ. Đừng bao giờ giao xe rồi chờ chuyển khoản sau.",
    prepare: [
      "Giấy đăng ký xe bản gốc, đúng tên bạn, không cầm cố ở đâu",
      "CCCD của bạn, và sẽ cần CCCD của người mua khi làm giấy tờ",
      "Ảnh chụp xe rõ ràng: tổng thể, số khung số máy, đồng hồ, chỗ có xước",
      "Xe đã rửa sạch và đã kiểm qua vài hạng mục cơ bản",
    ],
    steps: [
      {
        title: "Kiểm giấy tờ trước khi nghĩ tới giá",
        detail:
          "Đăng ký xe có đúng tên bạn không, số khung số máy trên giấy có khớp với xe không, xe có đang thế chấp hay cầm cố không. Nếu xe chưa sang tên từ chủ trước thì phải xử lý phần đó trước, vì nó ảnh hưởng thẳng tới giá và tới việc bán được hay không.",
      },
      {
        title: "Định giá bằng cách tra tin thật, không hỏi cảm tính",
        detail:
          "Lên các trang rao vặt, lọc đúng dòng xe, đúng đời, đúng khoảng số kilômét, xem hai ba chục tin. Bỏ qua giá cao nhất và thấp nhất, lấy khoảng giữa. Giá rao thường cao hơn giá bán thật một chút, nên trừ hao khi đặt kỳ vọng.",
      },
      {
        title: "Biết những thứ làm giá lên xuống",
        detail:
          "Tăng giá: giấy tờ chính chủ, biển số đẹp hoặc biển tỉnh dễ sang tên, số kilômét thấp, còn sổ bảo hành, xe nguyên bản. Giảm giá: xe độ chế, từng bị tai nạn, máy đã bổ, giấy tờ rắc rối, xe nhập lậu.",
      },
      {
        title: "Làm vài việc nhỏ trước khi bán",
        detail:
          "Rửa xe kỹ, thay nhớt, bơm lốp, thay bóng đèn cháy, chỉnh lại phanh. Vài trăm nghìn bỏ ra thường thu lại được nhiều hơn thế, vì xe sạch sẽ và chạy êm tạo ấn tượng rất khác lúc người mua chạy thử.",
      },
      {
        title: "Chụp ảnh trung thực, kể cả chỗ xấu",
        detail:
          "Chụp ban ngày, nền gọn, đủ các góc, chụp cả đồng hồ và giấy tờ đã che thông tin cá nhân. Chụp luôn chỗ xước và chỗ móp. Giấu khuyết điểm thì người mua tới nơi phát hiện ra và bạn mất luôn thiện cảm lẫn giá.",
      },
      {
        title: "Viết tin rao đủ thông tin",
        detail:
          "Dòng xe, đời, số kilômét, tình trạng giấy tờ, biển số tỉnh nào, những gì đã thay, và giá. Ghi rõ có thương lượng hay không. Tin đủ thông tin lọc bớt rất nhiều cuộc gọi hỏi vặt.",
      },
      {
        title: "Che thông tin nhạy cảm trên ảnh giấy tờ",
        detail:
          "Đăng ảnh đăng ký xe thì che số khung số máy và số CCCD. Thông tin đó đủ để kẻ gian làm giấy tờ giả cho một chiếc xe trộm cắp cùng loại. Chỉ đưa bản đầy đủ khi đã gặp mặt người mua thật.",
      },
      {
        title: "Hẹn gặp ở nơi an toàn",
        detail:
          "Quán cà phê đông người, có camera, ban ngày. Đừng hẹn ở chỗ vắng và đừng để người lạ tới thẳng nhà. Nên có một người đi cùng.",
      },
      {
        title: "Cho chạy thử nhưng giữ lại thứ đảm bảo",
        detail:
          "Cho chạy thử quanh khu vực, và giữ lại CCCD gốc của họ trong lúc đó, hoặc đi cùng. Đã có nhiều vụ mất xe ngay ở bước chạy thử vì chủ xe cả nể.",
      },
      {
        title: "Nhận đủ tiền rồi mới giao xe và giấy tờ",
        detail:
          "Tiền mặt thì đếm kỹ, chuyển khoản thì phải thấy tiền đã VÀO tài khoản của mình chứ không phải nhìn màn hình điện thoại của họ. Ảnh chụp màn hình chuyển khoản thành công là thứ làm giả rất dễ. Không giao xe trước rồi chờ tiền sau, dù lý do nghe hợp lý tới đâu.",
      },
      {
        title: "Làm giấy mua bán và sang tên ngay",
        detail:
          "Lập hợp đồng mua bán có công chứng hoặc chứng thực theo quy định hiện hành, ghi rõ ngày giờ bàn giao. Đây là mốc pháp lý tách bạn khỏi chiếc xe. Thủ tục cụ thể tuỳ nơi và tuỳ thời điểm — hỏi trực tiếp cơ quan đăng ký xe hoặc phòng công chứng cho chắc.",
      },
      {
        title: "Giữ bằng chứng và theo dõi việc sang tên",
        detail:
          "Chụp lại hợp đồng, ảnh xe lúc bàn giao, ảnh CCCD người mua, tin nhắn thoả thuận. Nhắc người mua hoàn tất sang tên và xin họ báo lại. Chừng nào xe còn đứng tên bạn thì phạt nguội và rắc rối vẫn tìm về bạn.",
      },
    ],
    notes: [
      "Nếu người mua chậm sang tên, bạn nên chủ động thông báo việc đã bán xe tới cơ quan đăng ký xe theo hướng dẫn hiện hành — thủ tục này giúp tách trách nhiệm về sau.",
      "Cảnh giác với người trả giá cao bất thường rồi xin đặt cọc qua một đường link, hoặc yêu cầu bạn cung cấp mã OTP. TUYỆT ĐỐI không đọc mã OTP cho bất kỳ ai.",
      "Không bán xe khi giấy tờ đang cầm cố, xe chưa sang tên từ chủ cũ, hoặc xe không rõ nguồn gốc — rủi ro pháp lý thuộc về cả hai bên.",
      "Bài này là kinh nghiệm giao dịch thường ngày, không phải tư vấn pháp lý. Thủ tục và lệ phí thay đổi theo thời điểm — hỏi cơ quan chức năng cho chắc.",
    ],
    faq: [
      {
        q: "Bán qua cửa hàng thu mua có lợi không?",
        a: "Nhanh và gọn, họ lo luôn giấy tờ, nhưng giá thường thấp hơn bán trực tiếp một khoảng đáng kể. Nếu bạn không có thời gian và ngại rủi ro thì đây là lựa chọn hợp lý.",
      },
      {
        q: "Người mua muốn giữ nguyên biển số cũ, có được không?",
        a: "Quy định về biển số thay đổi theo thời điểm và có khác nhau giữa xe cũ và xe mới. Đây là câu nên hỏi trực tiếp cơ quan đăng ký xe thay vì nghe truyền miệng.",
      },
      {
        q: "Xe chưa sang tên từ chủ trước thì bán được không?",
        a: "Rất khó bán được giá tốt và thủ tục phức tạp hơn nhiều. Nên hoàn tất sang tên về tên mình trước khi rao bán — hỏi cơ quan đăng ký xe về hướng xử lý cho trường hợp cụ thể.",
      },
      {
        q: "Có nên nhận đặt cọc giữ xe không?",
        a: "Được, nhưng viết giấy nhận cọc ghi rõ số tiền, thời hạn, và điều gì xảy ra nếu một bên đổi ý. Nhận cọc bằng lời rồi tranh cãi sau là tình huống rất hay gặp.",
      },
    ],
    sources: [],
  },
  {
    slug: "doi-gia-han-bang-lai-xe",
    title: "Đổi và gia hạn bằng lái xe: làm trước khi hết hạn cho đỡ rắc rối",
    excerpt:
      "Bằng lái hết hạn lâu quá thì không chỉ là đổi giấy — có trường hợp phải sát hạch lại từ đầu. Mốc thời gian mới là thứ đáng nhớ.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Xem ngày hết hạn trên bằng và làm thủ tục trước khi hết, đừng để quá. Bằng lái ô tô có thời hạn, còn bằng lái mô tô hạng A1 theo quy định lâu nay là không thời hạn — nhưng quy định có thay đổi theo thời điểm nên hãy tra cứu hiện hành. Hồ sơ cơ bản gồm giấy khám sức khoẻ còn hiệu lực, CCCD và bằng cũ. Nhiều nơi đã cho nộp trực tuyến qua cổng dịch vụ công.",
    prepare: [
      "Bằng lái hiện tại — xem kỹ ngày hết hạn ghi trên đó",
      "CCCD gắn chip và tài khoản định danh điện tử nếu định làm trực tuyến",
      "Giấy khám sức khoẻ do cơ sở y tế đủ điều kiện cấp, còn trong thời hạn",
      "Ảnh thẻ theo yêu cầu, và một khoản lệ phí — hỏi trước mức hiện hành",
    ],
    steps: [
      {
        title: "Xem ngày hết hạn và đặt nhắc từ sớm",
        detail:
          "Ngày hết hạn in ngay trên mặt bằng lái. Đặt nhắc trên điện thoại trước 3 tháng. Đây là loại giấy tờ rất dễ quên vì nhiều năm mới phải làm một lần.",
      },
      {
        title: "Biết hạng bằng của mình có thời hạn hay không",
        detail:
          "Bằng lái ô tô có thời hạn và phải đổi định kỳ. Bằng lái mô tô hạng A1 theo quy định lâu nay không có thời hạn. Nhưng quy định về hạng bằng và thời hạn có thay đổi theo từng giai đoạn, nên hãy tra cứu quy định hiện hành thay vì tin trí nhớ.",
      },
      {
        title: "Hiểu vì sao đừng để quá hạn lâu",
        detail:
          "Quá hạn ngắn thì thường chỉ là đổi bằng bình thường. Quá hạn lâu thì có thể phải thi lại phần lý thuyết, và quá lâu nữa thì phải sát hạch lại cả lý thuyết lẫn thực hành. Các mốc cụ thể thay đổi theo quy định — điểm cần nhớ là càng để lâu càng phiền.",
      },
      {
        title: "Đi khám sức khoẻ ở nơi đủ điều kiện",
        detail:
          "Giấy khám sức khoẻ cho người lái xe phải do cơ sở y tế được phép cấp, theo mẫu riêng, và có thời hạn sử dụng. Hỏi trước nơi khám xem họ có cấp đúng mẫu dùng cho đổi bằng lái không, tránh khám xong lại không dùng được.",
      },
      {
        title: "Thử làm trực tuyến trước khi đi",
        detail:
          "Nhiều địa phương đã cho nộp hồ sơ đổi bằng lái qua cổng dịch vụ công. Cần tài khoản định danh điện tử và giấy khám sức khoẻ đã được cơ sở y tế đẩy lên hệ thống. Làm được trực tuyến thì tiết kiệm cả buổi.",
      },
      {
        title: "Nếu đi trực tiếp, gọi hỏi trước",
        detail:
          "Gọi cho Sở Giao thông vận tải hoặc trung tâm phục vụ hành chính công tại địa phương. Hỏi ba điều: nhận hồ sơ vào buổi nào, cần đúng những giấy tờ gì, lệ phí bao nhiêu. Một cuộc gọi tiết kiệm được một chuyến đi hụt.",
      },
      {
        title: "Chuẩn bị đủ bộ hồ sơ",
        detail:
          "Thường gồm: đơn theo mẫu, bằng lái cũ, CCCD, giấy khám sức khoẻ còn hiệu lực, và ảnh nếu nơi đó yêu cầu. Mang thêm bản photo để phòng. Danh mục cụ thể tuỳ nơi và tuỳ thời điểm.",
      },
      {
        title: "Chụp lại bằng cũ trước khi nộp",
        detail:
          "Chụp cả hai mặt và lưu lên mây. Trong lúc chờ cấp bằng mới, ảnh này giúp bạn nhớ số bằng, hạng bằng và ngày cấp khi cần khai báo.",
      },
      {
        title: "Hỏi rõ thời gian trả kết quả",
        detail:
          "Hỏi bao nhiêu ngày làm việc và nhận ở đâu, hoặc có chuyển phát về nhà không. Giữ giấy hẹn cẩn thận. Nhiều nơi cho tra cứu tiến độ trên mạng bằng mã hồ sơ.",
      },
      {
        title: "Trong thời gian chờ, biết mình được lái hay không",
        detail:
          "Đây là điều cần hỏi rõ khi nộp hồ sơ, vì mỗi tình huống khác nhau. Đừng tự suy đoán rồi ra đường mà không có giấy tờ hợp lệ.",
      },
      {
        title: "Nhận bằng mới thì kiểm ngay tại chỗ",
        detail:
          "Kiểm họ tên, ngày sinh, hạng bằng, ngày hết hạn mới. Sai sót thì báo ngay lúc còn ở quầy, về nhà rồi mới phát hiện thì phải đi lại một chuyến.",
      },
      {
        title: "Cập nhật vào ứng dụng định danh điện tử",
        detail:
          "Nhiều nơi đã chấp nhận xuất trình giấy tờ qua ứng dụng định danh điện tử. Đồng bộ bằng lái mới vào đó thì đỡ phải mang bản giấy theo người, tránh mất và tránh hỏng.",
      },
    ],
    notes: [
      "Quy định về hạng bằng, thời hạn, lệ phí và thủ tục thay đổi theo từng giai đoạn. Mọi con số trong bài chỉ là hướng chung — hãy tra cứu quy định hiện hành hoặc hỏi trực tiếp cơ quan cấp bằng.",
      "Cảnh giác với dịch vụ nhận làm bằng lái nhanh không cần khám, không cần thi. Bằng giả bị phát hiện thì bị xử lý nặng hơn nhiều so với không có bằng.",
      "Giấy khám sức khoẻ có thời hạn sử dụng — khám xong nên nộp hồ sơ sớm, đừng để quá hạn rồi phải khám lại.",
      "Bài này là hướng dẫn thủ tục phổ thông, không phải tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Mất bằng lái thì làm sao?",
        a: "Làm thủ tục cấp lại tại cơ quan cấp bằng, hồ sơ tương tự đổi bằng. Nếu bạn có ảnh chụp bằng cũ thì việc khai báo nhanh hơn nhiều — đó là lý do nên chụp lưu từ trước.",
      },
      {
        q: "Đổi bằng có phải thi lại không?",
        a: "Đổi đúng hạn hoặc quá hạn ngắn thì thường không phải thi. Quá hạn lâu thì có thể phải thi lại lý thuyết hoặc cả thực hành. Hỏi cơ quan cấp bằng về trường hợp cụ thể của bạn.",
      },
      {
        q: "Có làm được ở tỉnh khác nơi cấp bằng không?",
        a: "Nhiều nơi đã cho làm không phụ thuộc nơi cấp ban đầu, nhưng vẫn nên gọi hỏi trước cơ quan nơi bạn định nộp để chắc chắn.",
      },
      {
        q: "Bằng lái quốc tế có cần không?",
        a: "Chỉ cần khi bạn lái xe ở nước ngoài, và tuỳ quốc gia. Đây là loại giấy riêng, cấp dựa trên bằng lái trong nước còn hiệu lực — hỏi cơ quan cấp bằng nếu bạn sắp đi nước ngoài.",
      },
    ],
    sources: [],
  },
  {
    slug: "thi-bang-lai-xe-may-a1",
    title: "Thi bằng lái xe máy: ôn gì, thi gì, và chỗ nhiều người trượt nhất",
    excerpt:
      "Phần lý thuyết học vài buổi là qua. Phần thực hành thì hầu hết người trượt ở đúng một chỗ — vòng số 8, và vì cùng một lý do.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Hồ sơ cơ bản gồm CCCD và giấy khám sức khoẻ; đăng ký tại một trung tâm sát hạch được cấp phép. Lý thuyết là bộ câu hỏi có sẵn, học bằng ứng dụng vài buổi là thuộc, chú ý nhóm câu điểm liệt. Thực hành gồm các bài chạy hình, trong đó vòng số 8 là chỗ trượt nhiều nhất — nguyên nhân gần như luôn là đi quá chậm và nhìn xuống bánh xe thay vì nhìn xa.",
    prepare: [
      "CCCD và giấy khám sức khoẻ do cơ sở y tế đủ điều kiện cấp",
      "Một ứng dụng ôn thi lý thuyết trên điện thoại",
      "Giày kín và quần áo gọn để thi thực hành, không đi dép lê",
      "Lệ phí theo mức hiện hành — hỏi trung tâm trước",
    ],
    steps: [
      {
        title: "Chọn trung tâm sát hạch được cấp phép",
        detail:
          "Tìm trung tâm chính thức tại địa phương, tránh những nơi nhận làm bằng nhanh không cần thi. Gọi hỏi lịch thi, lệ phí và hồ sơ cần nộp. Hỏi luôn xem họ có cho ôn và chạy thử sa hình không.",
      },
      {
        title: "Đi khám sức khoẻ đúng mẫu",
        detail:
          "Giấy khám sức khoẻ cho người lái xe theo mẫu riêng và có thời hạn. Hỏi trước nơi khám xem họ cấp đúng mẫu dùng cho thi bằng lái không, tránh khám xong không dùng được.",
      },
      {
        title: "Nộp hồ sơ và nhận lịch",
        detail:
          "Nộp CCCD, giấy khám sức khoẻ, đơn theo mẫu và ảnh nếu được yêu cầu. Nhận giấy hẹn ngày thi. Ghi ngày đó vào lịch điện thoại ngay, kèm địa chỉ trung tâm.",
      },
      {
        title: "Ôn lý thuyết bằng ứng dụng, không học vẹt cả bộ",
        detail:
          "Bộ câu hỏi là cố định và có sẵn. Cài một ứng dụng ôn thi, làm đề ngẫu nhiên mỗi ngày khoảng 30 phút. Sau vài buổi là quen dạng. Học bằng cách làm đề hiệu quả hơn nhiều so với đọc suông.",
      },
      {
        title: "Nắm chắc nhóm câu điểm liệt",
        detail:
          "Có một nhóm câu mà sai một câu là trượt luôn dù các câu khác đúng hết. Chúng thường về tình huống nguy hiểm, nồng độ cồn, tốc độ và nhường đường. Ứng dụng ôn thi đều có mục lọc riêng nhóm này — làm đi làm lại tới khi không sai.",
      },
      {
        title: "Học mẹo đọc câu hỏi",
        detail:
          "Nhiều câu chỉ khác nhau ở một chữ như được phép hay không được phép. Đọc hết câu hỏi và hết các đáp án trước khi chọn. Trong phòng thi, câu nào phân vân thì đánh dấu và quay lại sau, đừng ngồi lì một câu.",
      },
      {
        title: "Biết trước phần thực hành gồm gì",
        detail:
          "Thường là chạy trong sa hình với các bài như vòng số 8, đường thẳng hẹp, đường gồ ghề và đường zíc zắc. Lỗi bị trừ điểm là chạm vạch, chống chân xuống đất, hoặc chết máy. Hỏi trung tâm về sa hình cụ thể của họ.",
      },
      {
        title: "Hiểu vì sao vòng số 8 làm nhiều người trượt",
        detail:
          "Vì họ đi quá chậm. Xe càng chậm càng mất thăng bằng và càng phải chống chân. Giữ ga đều ở mức chậm nhưng ổn định, dùng nhẹ phanh sau để kiểm soát tốc độ thay vì nhấp nhả ga.",
      },
      {
        title: "Nhìn xa, đừng nhìn bánh xe",
        detail:
          "Đây là mẹo quan trọng nhất và cũng dễ áp dụng nhất. Xe máy đi theo hướng mắt bạn nhìn. Nhìn xuống bánh và vạch kẻ ngay trước mặt thì xe loạng choạng; nhìn xa về phía cuối đường đi thì xe tự đi thẳng và mượt.",
      },
      {
        title: "Tập trước nếu có thể",
        detail:
          "Nhiều trung tâm cho thuê sân và xe tập. Chạy thử đúng sa hình vài lượt là hết bỡ ngỡ. Nếu không có điều kiện, kẻ tạm hình số 8 ở sân rộng vắng và tập với xe của mình.",
      },
      {
        title: "Chuẩn bị cho ngày thi",
        detail:
          "Ngủ đủ, đến sớm, mang đủ giấy tờ và giấy hẹn, đi giày kín. Xem người trước thi để quen nhịp. Hồi hộp là bình thường — nhớ hai điều: ga đều và nhìn xa.",
      },
      {
        title: "Trượt thì thi lại, không phải làm lại từ đầu",
        detail:
          "Trượt phần nào thường chỉ thi lại phần đó theo lịch của trung tâm và đóng lệ phí thi lại. Hỏi rõ quy trình ngay hôm đó. Rất nhiều người đỗ ở lần thứ hai, đây là chuyện bình thường.",
      },
    ],
    notes: [
      "Quy định về hạng bằng, độ tuổi, lệ phí và nội dung sát hạch thay đổi theo từng giai đoạn. Hãy hỏi trực tiếp trung tâm sát hạch về quy định hiện hành thay vì tin thông tin cũ trên mạng.",
      "TUYỆT ĐỐI tránh các dịch vụ nhận lo bằng không cần thi. Bằng giả bị phát hiện sẽ bị xử lý nặng, và bạn cũng không có kỹ năng thật khi ra đường.",
      "Điều khiển xe khi chưa có bằng lái là vi phạm, và nếu xảy ra tai nạn thì phần bảo hiểm cùng trách nhiệm pháp lý đều bất lợi cho bạn.",
      "Bài này là kinh nghiệm ôn thi phổ thông, không phải tài liệu chính thức của cơ quan sát hạch.",
    ],
    faq: [
      {
        q: "Ôn lý thuyết mất bao lâu?",
        a: "Làm đề đều đặn khoảng 30 phút mỗi ngày thì vài buổi tới một tuần là ổn. Quan trọng là làm đề chứ không phải đọc, và phải làm riêng nhóm câu điểm liệt tới khi không sai.",
      },
      {
        q: "Chưa biết đi xe máy có thi được không?",
        a: "Phải biết đi trước đã. Hãy tập ở sân rộng vắng cho vững rồi mới đăng ký thi. Trung tâm dạy sa hình chứ không dạy bạn từ chỗ chưa biết giữ thăng bằng.",
      },
      {
        q: "Có được dùng xe của mình để thi không?",
        a: "Tuỳ quy định của từng trung tâm, phần lớn dùng xe của trung tâm. Hỏi trước và nếu được thì chạy thử xe đó vài vòng cho quen tay ga và tay phanh.",
      },
      {
        q: "Bao lâu thì nhận được bằng?",
        a: "Thường vài ngày tới vài tuần làm việc tuỳ nơi. Giữ kỹ giấy hẹn, và hỏi xem có tra cứu được trên mạng hay có chuyển phát về nhà không.",
      },
    ],
    sources: [],
  },
  {
    slug: "bao-duong-o-to-dinh-ky",
    title: "Bảo dưỡng ô tô định kỳ: mốc nào bắt buộc, mốc nào tiệm vẽ thêm",
    excerpt:
      "Vào hãng một lần là ra một tờ báo giá dài dằng dặc. Có vài hạng mục thật sự bắt buộc, và có vài hạng mục chỉ cần khi tới lúc.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Thứ quyết định là sổ bảo dưỡng của chính chiếc xe bạn — nhà sản xuất ghi rõ mốc kilômét nào làm gì. Nhóm bắt buộc và không nên trễ: dầu máy cùng lọc dầu, dầu phanh, nước làm mát, lọc gió động cơ, lốp và phanh. Nhóm hay bị vẽ thêm: súc rửa các loại, phụ gia, đánh bóng, thay sớm những thứ chưa tới hạn. Cứ cầm sổ bảo dưỡng ra hỏi từng dòng thì khó bị vẽ.",
    prepare: [
      "Sổ bảo dưỡng đi kèm xe — đây là căn cứ mạnh nhất khi làm việc với tiệm",
      "Số kilômét hiện tại và ngày bảo dưỡng lần trước",
      "Ảnh chụp các hoá đơn bảo dưỡng cũ, lưu trên điện thoại",
      "Danh sách những gì bạn thấy bất thường: tiếng kêu, rung, đèn báo",
    ],
    steps: [
      {
        title: "Lấy sổ bảo dưỡng ra trước khi vào tiệm",
        detail:
          "Mỗi dòng xe có lịch riêng, ghi rõ tới mốc kilômét nào thì kiểm gì, thay gì. Đây là tài liệu của nhà sản xuất và nó thắng mọi lời tư vấn tại quầy. Không còn sổ giấy thì tra bản điện tử trên trang của hãng.",
      },
      {
        title: "Nhớ hai loại mốc: kilômét và thời gian",
        detail:
          "Cái nào tới trước thì làm theo cái đó. Xe đi ít nhưng để lâu vẫn phải thay dầu, vì dầu lão hoá theo thời gian chứ không chỉ theo quãng đường. Rất nhiều người đi ít nên nghĩ chưa cần bảo dưỡng.",
      },
      {
        title: "Dầu máy và lọc dầu là hạng mục không được trễ",
        detail:
          "Đây là thứ ảnh hưởng trực tiếp tới tuổi thọ động cơ. Thay theo mốc trong sổ, dùng đúng loại dầu nhà sản xuất khuyến cáo. Thay dầu thì thay luôn lọc dầu — giữ lọc cũ để tiết kiệm là tính sai.",
      },
      {
        title: "Đừng bỏ qua dầu phanh",
        detail:
          "Dầu phanh hút ẩm theo thời gian, và nước trong dầu phanh làm phanh mất hiệu quả khi phanh nhiều lần liên tục. Đây là hạng mục an toàn, có mốc thay theo thời gian, và hay bị bỏ quên vì phanh vẫn có vẻ ăn.",
      },
      {
        title: "Kiểm nước làm mát và các loại dầu khác",
        detail:
          "Nước làm mát có mốc thay riêng, không phải cứ châm thêm là xong. Dầu hộp số, dầu trợ lực cũng có mốc trong sổ. Hỏi thợ mức hiện tại và màu sắc — nước làm mát đổi màu hoặc đục là dấu hiệu cần xử lý.",
      },
      {
        title: "Lốp: kiểm áp suất thường xuyên, đảo lốp theo mốc",
        detail:
          "Kiểm áp suất mỗi tháng và trước chuyến đi xa. Đảo lốp theo mốc trong sổ để bốn lốp mòn đều. Nhìn độ sâu gai và cả tuổi lốp — lốp cũ nhiều năm bị lão hoá cao su dù còn gai.",
      },
      {
        title: "Phanh: nghe và cảm nhận, đừng chỉ chờ tới mốc",
        detail:
          "Tiếng rít kim loại khi phanh, bàn đạp phanh sâu hơn bình thường, xe lệch về một bên khi phanh, hoặc rung vô lăng khi phanh — đều là lý do kiểm ngay chứ không chờ mốc bảo dưỡng.",
      },
      {
        title: "Ắc quy và hệ thống điện",
        detail:
          "Ắc quy có tuổi thọ vài năm. Dấu hiệu yếu: đề ì, đèn mờ khi đề, xe để vài ngày không nổ được. Nhiều tiệm kiểm ắc quy miễn phí bằng máy đo — nên nhờ kiểm trước mùa mưa và trước chuyến đi xa.",
      },
      {
        title: "Nhận ra nhóm hạng mục hay bị vẽ thêm",
        detail:
          "Súc rửa động cơ, súc rửa hộp số, các loại phụ gia đổ vào xăng, đánh bóng phủ bóng, thay sớm những thứ chưa tới mốc. Không phải chúng luôn vô ích, nhưng chúng không nằm trong lịch của nhà sản xuất — nên bạn có quyền từ chối.",
      },
      {
        title: "Hỏi ba câu trước khi đồng ý bất cứ hạng mục nào",
        detail:
          "Một, hạng mục này nằm ở mốc nào trong sổ bảo dưỡng? Hai, nếu chưa làm bây giờ thì hậu quả là gì? Ba, cho tôi xem phần cũ sau khi thay được không? Ba câu này lọc gần hết những thứ không cần thiết.",
      },
      {
        title: "Yêu cầu xem đồ cũ và giữ hoá đơn",
        detail:
          "Xin xem lọc gió cũ, má phanh cũ, dầu cũ trước khi bỏ. Giữ hoá đơn ghi rõ hạng mục và số kilômét. Bộ hoá đơn đầy đủ còn làm tăng giá trị xe khi bán lại.",
      },
      {
        title: "Ghi lại và đặt nhắc cho lần sau",
        detail:
          "Ghi ngày, số kilômét, và những gì đã làm vào ghi chú điện thoại. Đặt nhắc cho mốc tiếp theo theo cả kilômét lẫn thời gian. Đây là cách đơn giản để không bao giờ bị động khi vào tiệm.",
      },
    ],
    notes: [
      "ĐỖ XE VÀ GỌI CỨU HỘ ngay nếu đèn báo áp suất dầu hoặc đèn báo nhiệt độ nước làm mát sáng — chạy tiếp có thể phá hỏng động cơ. Đèn màu đỏ nói chung là dừng ngay, đèn màu vàng là kiểm tra sớm.",
      "Xe còn bảo hành thì bỏ mốc bảo dưỡng hoặc làm ở nơi không đúng quy định có thể ảnh hưởng tới quyền bảo hành. Đọc kỹ điều kiện trước khi quyết định làm ngoài.",
      "Mọi con số về chu kỳ và chi phí thay đổi theo dòng xe, điều kiện sử dụng và thời điểm. Sổ bảo dưỡng của chính xe bạn mới là căn cứ đúng.",
      "Bài này là kinh nghiệm sử dụng phổ thông, không thay thế hướng dẫn của nhà sản xuất hay chẩn đoán của kỹ thuật viên.",
    ],
    faq: [
      {
        q: "Làm ở hãng hay ở gara ngoài?",
        a: "Xe còn bảo hành thì nên theo hãng cho an toàn về quyền lợi. Hết bảo hành thì gara uy tín thường rẻ hơn đáng kể. Điều quan trọng là làm đúng hạng mục và dùng đúng loại vật tư.",
      },
      {
        q: "Xe đi ít có cần bảo dưỡng đúng lịch không?",
        a: "Có. Dầu và các loại dung dịch lão hoá theo thời gian, cao su và gioăng cũng vậy. Xe để lâu không đi còn phát sinh vấn đề riêng như ắc quy hết và lốp bị bẹp một điểm.",
      },
      {
        q: "Phụ gia xăng có tác dụng không?",
        a: "Với xe được bảo dưỡng đúng lịch và đổ xăng ở trạm uy tín thì lợi ích thường không rõ ràng. Đây là nhóm nên hỏi kỹ thay vì gật đầu theo tư vấn tại quầy.",
      },
      {
        q: "Làm sao biết tiệm có thay thật không?",
        a: "Yêu cầu xem phần cũ tháo ra và hộp mới trước khi lắp, và ghi số kilômét lên hoá đơn. Với hạng mục lớn thì đứng xem lúc làm hoặc chọn nơi có khu vực cho khách quan sát.",
      },
    ],
    sources: [],
  },
  {
    slug: "lop-o-to-doc-thong-so-dao-lop",
    title: "Lốp ô tô: đọc dãy số bên hông, biết khi nào thay và vì sao phải đảo",
    excerpt:
      "Dãy chữ số trên hông lốp không phải mã bí ẩn. Trong đó có cả tuần sản xuất — và một chiếc lốp còn gai nhưng quá cũ vẫn là lốp phải thay.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Dãy kiểu 205/55R16 91V nghĩa là: bề rộng 205mm, thành lốp bằng 55% bề rộng, cấu trúc bố toả tròn, vành 16 inch, kèm mã tải trọng và mã tốc độ. Bốn chữ số trong hình bầu dục là tuần và năm sản xuất. Thay lốp khi gai mòn tới mốc chỉ báo, khi lốp nứt chân chim, hoặc khi lốp đã quá cũ dù còn gai. Đảo lốp theo mốc để bốn bánh mòn đều.",
    prepare: [
      "Đèn pin để soi hông lốp và đáy rãnh gai",
      "Một đồng xu hoặc thước đo độ sâu gai, loại rẻ tiền bán ở tiệm phụ tùng",
      "Sổ bảo dưỡng để biết áp suất chuẩn và mốc đảo lốp của xe mình",
      "Ảnh chụp lại thông số lốp hiện tại, để khi mua khỏi phải nhớ",
    ],
    steps: [
      {
        title: "Đọc dãy thông số chính",
        detail:
          "Ví dụ 205/55R16: 205 là bề rộng mặt lốp tính bằng milimet; 55 là tỉ lệ chiều cao thành lốp so với bề rộng, tính bằng phần trăm; R là cấu trúc bố toả tròn, loại phổ thông hiện nay; 16 là đường kính vành tính bằng inch. Ba con số này phải khớp với xe bạn.",
      },
      {
        title: "Hiểu hai ký hiệu đi kèm phía sau",
        detail:
          "Số như 91 là mã tải trọng, chữ như V là mã tốc độ. Cả hai đều có bảng quy đổi riêng. Nguyên tắc: không lắp lốp có mã thấp hơn khuyến cáo của nhà sản xuất, vì đó là giới hạn an toàn chứ không phải thông số trang trí.",
      },
      {
        title: "Tìm bốn chữ số tuổi lốp",
        detail:
          "Trong một hình bầu dục nhỏ trên hông lốp có bốn chữ số, ví dụ 2224 nghĩa là tuần thứ 22 của năm 2024. Đây là thứ ít người biết nhất và lại rất quan trọng — cao su lão hoá theo thời gian dù xe không chạy.",
      },
      {
        title: "Kiểm độ sâu gai bằng mốc chỉ báo",
        detail:
          "Trong các rãnh gai có những gờ nhỏ nhô lên gọi là mốc chỉ báo mòn. Khi mặt lốp mòn ngang bằng những gờ đó thì lốp đã hết hạn dùng và phải thay. Đây là cách kiểm chính xác hơn nhìn bằng cảm giác.",
      },
      {
        title: "Nhìn kiểu mòn để đoán vấn đề khác",
        detail:
          "Mòn giữa nhiều hơn hai bên là bơm quá căng lâu ngày. Mòn hai mép nhiều hơn giữa là để non hơi. Mòn lệch hẳn một bên là góc đặt bánh xe sai, cần đi cân chỉnh. Mòn thành từng vệt lồi lõm là dấu hiệu giảm xóc hoặc bạc đạn có vấn đề.",
      },
      {
        title: "Kiểm hông lốp, không chỉ kiểm mặt gai",
        detail:
          "Vết nứt chân chim, chỗ phồng lên như bong bóng, vết cắt sâu — bất kỳ dấu hiệu nào trong đó đều là lý do thay ngay, kể cả khi gai còn dày. Lốp phồng có thể nổ bất cứ lúc nào ở tốc độ cao.",
      },
      {
        title: "Bơm đúng áp suất ghi trên xe, không theo số trên lốp",
        detail:
          "Con số in trên hông lốp là áp suất tối đa lốp chịu được, không phải áp suất nên dùng. Áp suất đúng ghi trên tem dán ở khung cửa lái hoặc trong sổ bảo dưỡng. Đây là nhầm lẫn rất phổ biến.",
      },
      {
        title: "Đo áp suất khi lốp nguội",
        detail:
          "Chạy xe làm lốp nóng lên và áp suất tăng, đo lúc đó sẽ ra số cao hơn thực tế. Đo vào buổi sáng trước khi đi, hoặc sau khi xe nghỉ vài tiếng. Kiểm mỗi tháng một lần và trước mỗi chuyến đi xa.",
      },
      {
        title: "Hiểu vì sao phải đảo lốp",
        detail:
          "Bánh dẫn động và bánh lái chịu lực khác nhau nên mòn khác nhau. Đảo vị trí theo mốc trong sổ bảo dưỡng giúp bốn lốp mòn đều, kéo dài tuổi thọ cả bộ và giữ xe cân bằng. Sơ đồ đảo tuỳ loại dẫn động — hỏi thợ hoặc xem sổ.",
      },
      {
        title: "Thay theo cặp, không thay lẻ một bánh",
        detail:
          "Thay lẻ một lốp làm hai bánh cùng trục có độ bám và đường kính khác nhau, gây lệch khi phanh. Nếu buộc phải thay một, hãy lắp lốp mới cùng cặp với lốp còn tốt nhất và đặt cặp mới ở trục sau — hỏi thợ về trường hợp cụ thể.",
      },
      {
        title: "Đừng quên lốp dự phòng",
        detail:
          "Lốp dự phòng nằm im trong cốp nhiều năm và thường xẹp lúc cần nhất. Kiểm áp suất của nó cùng lúc kiểm bốn lốp chính. Kiểm luôn xem kích và cần tháo ốc có đủ và còn dùng được không.",
      },
      {
        title: "Chụp ảnh thông số trước khi đi mua",
        detail:
          "Chụp cả dãy thông số và bốn chữ số tuổi lốp. Khi mua, kiểm tuổi lốp mới — lốp tồn kho vài năm vẫn được bán là chuyện có thật. Yêu cầu cân bằng động sau khi lắp, đó là phần thường có trong dịch vụ.",
      },
    ],
    notes: [
      "NỔ LỐP KHI ĐANG CHẠY: giữ chặt vô lăng, KHÔNG phanh gấp, nhả ga cho xe chậm dần rồi mới tấp từ từ vào lề. Phanh gấp khi nổ lốp dễ gây mất lái.",
      "Lốp quá cũ vẫn nguy hiểm dù còn gai, vì cao su lão hoá và mất độ bám. Nhiều nhà sản xuất khuyến cáo thay sau một số năm nhất định — xem khuyến cáo cho dòng xe của bạn.",
      "Không vá lốp ở phần hông. Vết thủng ở hông lốp không vá an toàn được, phải thay.",
      "Bài này là kiến thức sử dụng phổ thông, không thay thế khuyến cáo của nhà sản xuất lốp và xe.",
    ],
    faq: [
      {
        q: "Lốp bao nhiêu năm thì nên thay?",
        a: "Tuỳ khuyến cáo của hãng và điều kiện bảo quản, nhưng nguyên tắc chung là cao su lão hoá theo thời gian. Xem bốn chữ số tuổi lốp và hỏi thợ nếu lốp đã nhiều năm, dù còn gai.",
      },
      {
        q: "Có thể lắp cỡ lốp khác với xe không?",
        a: "Đổi cỡ ảnh hưởng tới đồng hồ tốc độ, độ chụm bánh và có thể cả hệ thống an toàn. Nếu muốn đổi, hãy hỏi kỹ thuật viên về các cỡ tương đương được chấp nhận cho dòng xe của bạn.",
      },
      {
        q: "Bơm khí nitơ có tốt hơn không?",
        a: "Lợi ích nếu có thì rất nhỏ với xe đi hằng ngày. Quan trọng hơn nhiều là kiểm và giữ đúng áp suất, dù bơm bằng khí gì.",
      },
      {
        q: "Cân bằng động và cân chỉnh góc lái khác nhau thế nào?",
        a: "Cân bằng động xử lý rung ở tốc độ cao do lốp không cân. Cân chỉnh góc lái xử lý xe bị nhao lệch và lốp mòn không đều. Hai việc khác nhau, làm khi có triệu chứng tương ứng.",
      },
    ],
    sources: [],
  },
  {
    slug: "do-xe-o-to-va-bi-cau-xe",
    title: "Đỗ ô tô: chỗ nào bị cẩu, đỗ dọc đỗ ngang, và làm gì khi xe bị cẩu đi",
    excerpt:
      "Quay lại chỗ đỗ mà không thấy xe đâu là cảm giác không ai muốn. Nhưng phần lớn trường hợp đó là bị cẩu chứ không phải mất trộm — và có quy trình xử lý.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Trước khi rời xe, nhìn quanh tìm biển cấm dừng cấm đỗ, vạch kẻ vàng, miệng cống thoát nước, lối vào nhà dân và cửa hàng. Chụp một tấm ảnh chỗ đỗ kèm biển báo — đó là bằng chứng nếu có tranh cãi. Nếu xe bị cẩu, gọi tổng đài của lực lượng chức năng địa phương hoặc công an phường sở tại để hỏi nơi tạm giữ, mang giấy tờ xe và CCCD tới làm thủ tục.",
    prepare: [
      "Giấy đăng ký xe, bằng lái, CCCD — luôn mang theo người chứ không để trong xe",
      "Ảnh chụp chỗ đỗ mỗi lần đỗ ở nơi lạ",
      "Số điện thoại công an phường nơi bạn hay đỗ xe",
      "Một ứng dụng bản đồ có hiển thị bãi đỗ, để tìm chỗ hợp lệ thay vì đỗ liều",
    ],
    steps: [
      {
        title: "Nhìn biển báo trước khi tắt máy",
        detail:
          "Biển cấm dừng và biển cấm đỗ trông khác nhau và ý nghĩa khác nhau. Biển thường đặt ở đầu đoạn đường nên có thể bạn đã đi qua mà không thấy. Nhìn cả hai hướng của đoạn phố trước khi quyết định.",
      },
      {
        title: "Nhớ những chỗ gần như luôn bị xử lý",
        detail:
          "Trước cửa nhà dân và cửa hàng đang kinh doanh, miệng cống thoát nước, trước trụ nước cứu hoả, trên vỉa hè khi không có vạch cho phép, trong phạm vi gần nút giao và lối sang đường, và chắn lối ra vào của xe khác.",
      },
      {
        title: "Chú ý vạch kẻ và ngày chẵn lẻ",
        detail:
          "Một số tuyến phố quy định đỗ theo ngày chẵn lẻ ở hai bên đường, có biển ghi rõ. Nhiều người bị phạt oan chỉ vì đỗ đúng chỗ nhưng sai ngày. Đọc kỹ biển phụ dưới biển chính.",
      },
      {
        title: "Chụp một tấm ảnh mỗi lần đỗ",
        detail:
          "Chụp xe cùng khung cảnh có biển báo và vạch kẻ. Việc này mất năm giây và là bằng chứng của bạn nếu bị lập biên bản mà bạn cho là không đúng. Ảnh có sẵn ngày giờ nên rất có giá trị.",
      },
      {
        title: "Đỗ dọc: dùng gương và chia làm ba nhịp",
        detail:
          "Dừng song song với xe phía trước, cách khoảng một mét. Lùi thẳng tới khi gương của bạn ngang cột B xe trước thì đánh lái hết về phía lề. Khi thấy đầu xe sau ở giữa kính hậu thì trả lái thẳng. Cuối cùng đánh lái ngược lại để đưa đuôi xe vào sát lề.",
      },
      {
        title: "Đỗ ngang: đi rộng ra rồi mới đánh lái",
        detail:
          "Đi cách hàng xe khoảng hai mét, lùi và đánh lái khi vai bạn ngang vạch của ô đỗ. Đi quá sát hàng xe là nguyên nhân phổ biến khiến bạn phải ra vào nhiều lần. Lùi vào thường dễ hơn và an toàn hơn khi ra.",
      },
      {
        title: "Ưu tiên lùi vào, tiến ra",
        detail:
          "Lùi vào chỗ trống trong lúc bạn còn thấy rõ khoảng trống thì dễ hơn nhiều so với lùi ra vào dòng xe đang chạy mà tầm nhìn bị hai xe hai bên che khuất. Đây là thói quen nên tập.",
      },
      {
        title: "Trước khi rời xe, làm bốn việc",
        detail:
          "Kéo phanh tay, về số đỗ hoặc cài số nếu là số sàn, gập gương, và kiểm đã khoá chưa bằng cách kéo thử tay nắm cửa. Nếu đỗ trên dốc thì đánh lái bánh trước hướng vào lề.",
      },
      {
        title: "Đừng để giấy tờ và đồ giá trị trong xe",
        detail:
          "Giấy đăng ký xe để trong xe mà xe bị mất thì rắc rối nhân đôi. Túi xách, laptop, điện thoại để trên ghế là lời mời gọi. Cất vào cốp trước khi tới nơi đỗ, đừng cất khi đã đỗ vì có người quan sát.",
      },
      {
        title: "Nếu quay lại không thấy xe, đừng vội nghĩ mất trộm",
        detail:
          "Bình tĩnh nhìn quanh xem có biển thông báo khu vực cấm đỗ và thông tin nơi tạm giữ không — nhiều nơi có dán. Gọi công an phường sở tại hỏi xem xe có bị cẩu không. Đây là bước đầu tiên, trước khi trình báo mất trộm.",
      },
      {
        title: "Làm thủ tục nhận lại xe",
        detail:
          "Mang giấy đăng ký xe, bằng lái và CCCD tới nơi được chỉ dẫn. Bạn sẽ được lập biên bản vi phạm, nộp phạt và trả chi phí cẩu kéo cùng trông giữ. Càng để lâu thì phí trông giữ càng tăng, nên xử lý sớm.",
      },
      {
        title: "Kiểm xe kỹ trước khi ký nhận",
        detail:
          "Đi một vòng xem có vết xước hay móp mới không, kiểm đồ trong xe. Nếu phát hiện hư hại, nêu ngay và yêu cầu ghi vào biên bản trước khi ký. Ký rồi mới phát hiện thì rất khó xử lý.",
      },
    ],
    notes: [
      "Mức phạt, quy định về đỗ xe và chi phí cẩu kéo khác nhau theo địa phương và thay đổi theo thời điểm. Hãy tra cứu quy định hiện hành hoặc hỏi cơ quan chức năng thay vì tin con số truyền miệng.",
      "Nếu bạn cho rằng việc xử lý không đúng, hãy nêu ý kiến vào biên bản trước khi ký và giữ lại bản sao. Ảnh chụp lúc đỗ là bằng chứng quan trọng nhất của bạn.",
      "Không tự ý phá khoá bánh xe nếu xe bị khoá bánh — đó là hành vi có thể bị xử lý thêm.",
      "Bài này là kinh nghiệm phổ thông, không phải tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Đỗ trên vỉa hè có được không?",
        a: "Chỉ khi có vạch kẻ hoặc biển cho phép. Không có dấu hiệu cho phép thì mặc định là không, kể cả khi thấy nhiều xe khác cũng đỗ ở đó.",
      },
      {
        q: "Xe bị khoá bánh thì làm gì?",
        a: "Trên khoá thường có dán số điện thoại hoặc thông tin liên hệ. Gọi theo số đó, hoặc liên hệ công an phường sở tại. Đừng cố tự tháo hay lái xe đi.",
      },
      {
        q: "Bãi đỗ tư nhân làm xước xe thì ai chịu?",
        a: "Tuỳ thoả thuận khi gửi và có vé hay không. Đây là lý do nên chụp ảnh xe lúc gửi và giữ vé. Nhiều bãi có nội quy ghi rõ phạm vi trách nhiệm — nên đọc trước.",
      },
      {
        q: "Đỗ xe chắn cửa nhà người ta thì sao?",
        a: "Đây là tình huống gây tranh chấp nhiều nhất và cũng dễ bị cẩu nhất. Nếu buộc phải đỗ tạm, hãy để lại số điện thoại trên kính — cách đơn giản này giải quyết được phần lớn mâu thuẫn.",
      },
    ],
    sources: [],
  },
  {
    slug: "bao-hiem-o-to-chon-va-khai-bao",
    title: "Bảo hiểm ô tô: loại nào bắt buộc, loại nào đáng mua, khai báo thế nào",
    excerpt:
      "Nhiều người mua bảo hiểm vật chất rồi tới lúc va chạm mới biết mình không được bồi thường — vì đã làm sai ở bước đầu tiên.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Có hai nhóm: bảo hiểm trách nhiệm dân sự bắt buộc, bồi thường cho người bị bạn gây thiệt hại; và bảo hiểm vật chất tự nguyện, sửa chính xe của bạn. Khi xảy ra va chạm, việc quan trọng nhất là GỌI CHO HÃNG BẢO HIỂM NGAY TẠI HIỆN TRƯỜNG trước khi di chuyển xe — bỏ qua bước này là lý do phổ biến nhất khiến hồ sơ bị từ chối.",
    prepare: [
      "Ảnh chụp giấy chứng nhận bảo hiểm, lưu trên điện thoại và trên mây",
      "Số hotline của hãng bảo hiểm lưu sẵn trong danh bạ, đặt tên dễ tìm",
      "Điện thoại còn pin và còn dung lượng để chụp ảnh hiện trường",
      "Bản hợp đồng bảo hiểm đã đọc kỹ phần loại trừ",
    ],
    steps: [
      {
        title: "Phân biệt hai loại bảo hiểm",
        detail:
          "Bảo hiểm trách nhiệm dân sự là loại bắt buộc theo quy định, nó bồi thường cho NGƯỜI KHÁC mà bạn gây thiệt hại, không sửa xe của bạn. Bảo hiểm vật chất là tự nguyện, nó mới là loại sửa chính xe bạn. Rất nhiều người nhầm hai loại này.",
      },
      {
        title: "Mua bảo hiểm bắt buộc ở nơi đàng hoàng",
        detail:
          "Mua tại công ty bảo hiểm, ngân hàng, đại lý chính thức hoặc ứng dụng của hãng. Tránh mua ở lề đường giá rẻ bất thường — giấy không hợp lệ thì vừa mất tiền vừa không có tác dụng khi cần.",
      },
      {
        title: "Cân nhắc bảo hiểm vật chất theo giá trị xe",
        detail:
          "Xe mới và xe giá trị cao thì bảo hiểm vật chất gần như là bắt buộc về mặt thực tế, nhất là khi xe đang vay ngân hàng. Xe cũ giá trị thấp thì cần tính xem phí hằng năm so với giá trị xe có hợp lý không.",
      },
      {
        title: "Đọc kỹ phần loại trừ trước khi ký",
        detail:
          "Đây là phần quan trọng nhất và ít người đọc nhất. Thường loại trừ: lái xe không có bằng hợp lệ, có nồng độ cồn, xe chở quá tải, hư hỏng do ngập nước nếu không mua thêm điều khoản riêng, và mất cắp bộ phận. Hỏi đại lý từng dòng bạn chưa rõ.",
      },
      {
        title: "Hỏi rõ về mức miễn thường",
        detail:
          "Nhiều hợp đồng có mức miễn thường, tức là phần thiệt hại dưới một số tiền nhất định thì bạn tự chịu. Biết con số này để không kỳ vọng sai với những vết xước nhỏ.",
      },
      {
        title: "Hỏi về gara được bảo lãnh",
        detail:
          "Một số gói cho sửa tại hãng, một số chỉ cho sửa tại gara liên kết. Nếu bạn muốn sửa ở hãng thì phải chọn gói có điều khoản đó. Hỏi danh sách gara liên kết ở khu vực bạn sống.",
      },
      {
        title: "Khi va chạm: dừng lại và bảo vệ hiện trường",
        detail:
          "Bật đèn cảnh báo, đặt biển tam giác, kiểm tra có ai bị thương không. Ưu tiên số một là người, và nếu có người bị thương thì gọi 115 trước mọi việc khác.",
      },
      {
        title: "GỌI HÃNG BẢO HIỂM NGAY TẠI HIỆN TRƯỜNG",
        detail:
          "Đây là bước quyết định. Gọi trước khi di chuyển xe, trước khi thoả thuận với bên kia, trước khi kéo về gara. Nhân viên sẽ hướng dẫn hoặc tới giám định. Tự ý sửa rồi mới báo là lý do bị từ chối bồi thường phổ biến nhất.",
      },
      {
        title: "Chụp ảnh hiện trường thật đầy đủ",
        detail:
          "Chụp toàn cảnh thấy được vị trí hai xe và vạch kẻ đường, chụp cận từng chỗ hư hỏng, chụp biển số cả hai xe, chụp giấy tờ của bên kia. Chụp nhiều còn hơn thiếu. Quay một đoạn video đi vòng quanh cũng rất hữu ích.",
      },
      {
        title: "Lấy thông tin bên kia và người làm chứng",
        detail:
          "Họ tên, số điện thoại, biển số, giấy phép lái xe, và tên hãng bảo hiểm của họ. Nếu có người chứng kiến, xin số điện thoại. Đừng tranh cãi đúng sai tại chỗ — để bảo hiểm và cơ quan chức năng làm việc đó.",
      },
      {
        title: "Cân nhắc trước khi thoả thuận đền tiền mặt tại chỗ",
        detail:
          "Nhiều người chọn cách này cho nhanh. Nhưng nếu hư hỏng nặng hơn vẻ ngoài, hoặc bên kia đổi ý sau đó, bạn sẽ không còn hồ sơ nào. Nếu vẫn thoả thuận thì viết giấy có chữ ký hai bên và chụp ảnh giữ lại.",
      },
      {
        title: "Nộp hồ sơ đúng thời hạn",
        detail:
          "Mỗi hợp đồng có thời hạn thông báo và nộp hồ sơ. Nộp muộn có thể bị từ chối. Hỏi rõ danh mục giấy tờ cần nộp ngay từ cuộc gọi đầu tiên và làm sớm.",
      },
    ],
    notes: [
      "Ưu tiên tuyệt đối khi có tai nạn là con người. Có người bị thương thì GỌI 115 trước, và không di chuyển người nghi chấn thương cột sống trừ khi có nguy hiểm trực tiếp.",
      "Lái xe khi có nồng độ cồn thường nằm trong danh mục loại trừ của bảo hiểm — nghĩa là bạn tự chịu toàn bộ, chưa kể trách nhiệm pháp lý.",
      "Quy định về bảo hiểm bắt buộc, mức phí và mức bồi thường thay đổi theo thời điểm. Hỏi hãng bảo hiểm hoặc tra cứu quy định hiện hành.",
      "Bài này là kinh nghiệm phổ thông, không phải tư vấn pháp lý hay tư vấn bảo hiểm. Điều khoản cụ thể nằm trong hợp đồng của bạn.",
    ],
    faq: [
      {
        q: "Bảo hiểm bắt buộc có sửa xe của tôi không?",
        a: "Không. Nó bồi thường cho người khác mà bạn gây thiệt hại. Muốn sửa xe mình thì phải có bảo hiểm vật chất tự nguyện.",
      },
      {
        q: "Xe ngập nước có được bồi thường không?",
        a: "Tuỳ hợp đồng. Nhiều gói loại trừ thiệt hại do ngập nước, hoặc yêu cầu mua thêm điều khoản riêng. Đây là câu phải hỏi rõ trước khi ký, nhất là nếu bạn ở khu hay ngập.",
      },
      {
        q: "Va chạm nhẹ, tự thoả thuận có được không?",
        a: "Được, nhưng nên gọi bảo hiểm hỏi trước dù định thoả thuận. Và nếu thoả thuận thì viết giấy có chữ ký hai bên kèm ảnh, đừng chỉ nói miệng rồi đi.",
      },
      {
        q: "Mua bảo hiểm online có hợp lệ không?",
        a: "Có, nếu mua trên ứng dụng hoặc trang chính thức của công ty bảo hiểm. Kiểm tra giấy chứng nhận điện tử có tra cứu được trên hệ thống của hãng không.",
      },
    ],
    sources: [],
  },
  {
    slug: "cho-hang-cong-kenh-cho-nguoi-dung-luat",
    title: "Chở hàng cồng kềnh và chở người trên xe máy: giới hạn ở đâu",
    excerpt:
      "Buộc thêm một thùng hàng cao quá đầu không chỉ là chuyện bị phạt — nó đổi hẳn cách chiếc xe phản ứng khi bạn phanh gấp.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Quy định giới hạn kích thước hàng hoá chở trên xe máy theo chiều rộng, chiều dài và chiều cao tính từ mặt đường — con số cụ thể tra cứu quy định hiện hành. Về chở người, nguyên tắc chung là chở tối đa một người, trừ các trường hợp được phép chở thêm như chở trẻ nhỏ dưới độ tuổi quy định, chở người bệnh đi cấp cứu, áp giải người phạm tội. Quan trọng không kém: hàng buộc lệch làm xe mất cân bằng khi phanh.",
    prepare: [
      "Dây chằng loại tốt có móc, không dùng dây thun mềm hay dây vải cũ",
      "Một tấm bạt hoặc túi lớn nếu hàng dễ rơi vãi",
      "Đèn hoặc mảnh vải đỏ để đánh dấu nếu hàng nhô ra phía sau",
      "Biết trước quãng đường: đường đông thì nên chia làm hai chuyến",
    ],
    steps: [
      {
        title: "Tra quy định hiện hành trước khi tính chở",
        detail:
          "Có giới hạn cụ thể về chiều rộng, chiều dài và chiều cao hàng hoá chở trên xe máy. Các con số này thay đổi theo văn bản từng thời kỳ, nên hãy tra cứu quy định hiện hành thay vì nghe truyền miệng.",
      },
      {
        title: "Hiểu vì sao giới hạn tồn tại, không chỉ vì bị phạt",
        detail:
          "Hàng cao làm trọng tâm xe dâng lên, xe dễ lật khi vào cua. Hàng rộng va vào người đi đường và vào gương xe khác. Hàng dài che khuất tầm nhìn phía sau. Mỗi giới hạn tương ứng với một kiểu tai nạn có thật.",
      },
      {
        title: "Đặt vật nặng thấp và sát trục xe",
        detail:
          "Càng thấp càng ổn định. Đặt sát vào giữa xe chứ đừng dồn hết ra phía sau đuôi, vì như vậy bánh trước nhẹ đi và xe dễ bốc đầu khi tăng ga, đồng thời phanh trước kém ăn.",
      },
      {
        title: "Chằng buộc theo hai hướng vuông góc",
        detail:
          "Buộc một dây theo chiều dọc và một dây theo chiều ngang, siết chặt cho hàng không xê dịch. Lắc thử thật mạnh trước khi đi — nếu hàng nhúc nhích thì nó sẽ nhúc nhích nhiều hơn khi phanh gấp.",
      },
      {
        title: "Dùng dây chằng đúng loại",
        detail:
          "Dây chằng chuyên dụng có móc và độ đàn hồi vừa phải. Tránh dây thun quá mềm vì hàng sẽ nảy, và tránh dây đã sờn vì nó đứt đúng lúc bạn không muốn. Đầu dây thừa phải buộc gọn, đừng để thõng xuống gần bánh sau.",
      },
      {
        title: "Đánh dấu nếu hàng nhô ra",
        detail:
          "Buộc một mảnh vải màu đỏ hoặc gắn đèn nhỏ ở đầu phần nhô ra phía sau, nhất là khi trời tối. Người đi sau khó ước lượng phần nhô ra và đó là nơi hay xảy ra va quệt.",
      },
      {
        title: "Không che khuất đèn, biển số và gương",
        detail:
          "Hàng che đèn hậu và đèn xi nhan làm người sau không đoán được bạn định làm gì. Che biển số là lỗi riêng. Che gương thì bạn mất khả năng quan sát — đây là thứ nguy hiểm nhất trong ba cái.",
      },
      {
        title: "Đi chậm hơn và phanh sớm hơn",
        detail:
          "Xe chở nặng cần quãng đường phanh dài hơn đáng kể. Giảm tốc sớm, tránh phanh gấp, vào cua rộng và chậm. Đừng đi nhanh bằng ngày thường chỉ vì thấy vẫn chạy được.",
      },
      {
        title: "Cẩn thận với gió ngang và xe lớn vượt qua",
        detail:
          "Hàng cồng kềnh biến chiếc xe thành cánh buồm. Gió ngang trên cầu, hoặc luồng gió khi xe tải vượt qua, có thể đẩy xe lệch hẳn. Giữ chắc tay lái và giảm tốc khi qua những đoạn đó.",
      },
      {
        title: "Nắm nguyên tắc chở người",
        detail:
          "Nguyên tắc chung là chở tối đa một người ngồi sau. Có các trường hợp được phép chở thêm theo quy định, như chở trẻ nhỏ dưới độ tuổi nhất định, chở người bệnh đi cấp cứu, hoặc áp giải người phạm tội. Tra cứu quy định hiện hành cho chi tiết.",
      },
      {
        title: "Chở trẻ em cho an toàn",
        detail:
          "Trẻ phải đội mũ bảo hiểm đúng cỡ theo quy định về độ tuổi. Trẻ nhỏ nên ngồi phía trước trong lòng người lớn hoặc dùng ghế chuyên dụng gắn chắc chắn, không để trẻ ngồi sau mà không có chỗ bám và chỗ để chân. Đừng dùng địu buộc trẻ vào lưng khi đi xe máy.",
      },
      {
        title: "Khi nào nên chọn cách khác",
        detail:
          "Hàng quá khổ, quãng đường dài, đường đông, hoặc trời mưa gió — thuê xe ba gác hoặc dịch vụ giao hàng thường rẻ hơn nhiều so với một lần ngã hay một biên bản. Chia làm hai chuyến cũng là lựa chọn hợp lý.",
      },
    ],
    notes: [
      "Mức phạt và các giới hạn kích thước thay đổi theo quy định từng thời kỳ. Hãy tra cứu văn bản hiện hành hoặc hỏi cơ quan chức năng thay vì tin con số cũ.",
      "Nếu hàng rơi xuống đường gây tai nạn cho người khác, bạn chịu trách nhiệm. Đây là lý do bước lắc thử trước khi đi quan trọng hơn vẻ ngoài của nó.",
      "Không chở vật sắc nhọn, vật dễ vỡ hay bình gas mà không có bao bọc và cố định đúng cách.",
      "Bài này là kinh nghiệm phổ thông, không phải tư vấn pháp lý.",
    ],
    faq: [
      {
        q: "Chở thùng hàng cao quá đầu có bị phạt không?",
        a: "Có giới hạn chiều cao tính từ mặt đường theo quy định hiện hành. Ngoài chuyện bị phạt, hàng cao còn làm xe rất dễ mất thăng bằng — nên đây là giới hạn đáng tôn trọng vì chính bạn.",
      },
      {
        q: "Chở hai trẻ nhỏ có được không?",
        a: "Quy định cho phép chở thêm người trong một số trường hợp liên quan tới trẻ dưới độ tuổi nhất định. Con số và điều kiện cụ thể tra cứu quy định hiện hành — và dù được phép thì vẫn phải bảo đảm an toàn thực tế.",
      },
      {
        q: "Dùng giá chở hàng lắp thêm có sao không?",
        a: "Lắp thêm giá đỡ có thể bị xem là thay đổi kết cấu xe tuỳ mức độ. Nếu chỉ dùng baga nhỏ đúng thiết kế thì thường không vấn đề, nhưng hàn thêm khung lớn thì nên hỏi trước.",
      },
      {
        q: "Trời mưa chở hàng thì lưu ý gì?",
        a: "Bọc bạt kín và chằng chặt hơn vì bạt bắt gió rất mạnh. Giảm tốc nhiều hơn nữa vì đường trơn cộng xe nặng làm quãng đường phanh dài ra đáng kể.",
      },
    ],
    sources: [],
  },
];
