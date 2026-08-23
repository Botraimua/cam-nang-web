// Bài đăng ngày 2026-08-23 — khung 7h sáng
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-23";

export const day20260823sang = [
  {
    slug: "thay-lop-xe-may-khi-nao-va-chon-loai-nao",
    title: "Thay lốp xe máy: khi nào phải thay, chọn loại nào, tránh bị luộc đồ",
    excerpt:
      "Lốp mòn là thứ nguy hiểm thầm lặng nhất trên xe máy, mà cũng là món dễ bị tráo đồ cũ nhất khi ra tiệm. Đây là cách nhìn ra cả hai.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Nhìn vào rãnh gai lốp: khi mặt gai gần bằng phẳng với cục cao su nhỏ nhô lên giữa rãnh (gọi là cục báo mòn) thì phải thay, đừng chờ tới lúc trơn bóng. Lốp nứt chân chim, phồng cục, hoặc đã vá quá nhiều chỗ cũng nên thay dù còn gai. Ra tiệm, yêu cầu xem lốp mới còn nguyên tem và đọc mã ngày sản xuất trước khi lắp. Giá tuỳ hãng và cỡ lốp, chênh nhau khá nhiều — hỏi giá ít nhất hai tiệm trước khi quyết.",
    prepare: [
      "Một que tăm để thọc thử độ sâu rãnh gai — mắt thường hay đánh lừa mình",
      "Ảnh chụp thành lốp cũ, chỗ ghi cỡ lốp kiểu 80/90-17, để mua đúng cỡ",
      "Điện thoại có mạng để tra giá thị trường ngay tại tiệm",
      "Chút thời gian rảnh: thay lốp thường mất khoảng 20–40 phút mỗi bánh, đừng làm lúc đang vội",
      "Tiền mặt hoặc app chuyển khoản — nhiều tiệm nhỏ không nhận thẻ",
    ],
    steps: [
      {
        title: "Soi rãnh gai bằng cục báo mòn",
        detail:
          "Giữa rãnh lốp có mấy cục cao su nhỏ nhô lên, nhà sản xuất đặt ở đó để báo mòn. Khi mặt gai mòn xuống ngang bằng cục đó là lốp đã hết tuổi. Cắm que tăm vào rãnh, thấy chỉ ăn được một chút xíu là quá muộn rồi.",
      },
      {
        title: "Kiểm tra thành lốp có nứt hay phồng không",
        detail:
          "Dựng xe, xoay bánh chầm chậm và nhìn hai bên hông lốp. Nứt chân chim li ti là cao su đã lão hoá, phồng lên một cục là bố lốp bên trong đã đứt. Cả hai trường hợp đều phải thay ngay, không quan tâm gai còn dày bao nhiêu.",
      },
      {
        title: "Đếm số miếng vá",
        detail:
          "Lốp vá một hai chỗ vẫn dùng được. Nhưng vá tới bốn năm chỗ, hoặc có vết vá nằm sát mép hông lốp, thì thay đi cho lành. Vá ở hông lốp gần như không bao giờ bền vì chỗ đó liên tục co giãn khi xe chạy.",
      },
      {
        title: "Xem tuổi lốp trên thành lốp",
        detail:
          "Trên hông lốp thường có một cụm bốn số, kiểu 2325 nghĩa là sản xuất tuần 23 năm 2025. Cao su lão hoá theo thời gian kể cả khi xe ít đi, nên lốp quá vài năm tuổi thì nên cân nhắc thay dù trông còn mới.",
      },
      {
        title: "Chốt cỡ lốp trước khi ra tiệm",
        detail:
          "Chụp lại dãy số kiểu 80/90-17 hoặc 100/80-14 trên hông lốp cũ. Cứ mua đúng cỡ theo xe, đừng nghe rủ rê lên cỡ to hơn cho đẹp — lốp quá khổ làm xe nặng lái, ăn xăng hơn và có thể cọ vào dè khi ôm cua.",
      },
      {
        title: "Chọn lốp không săm hay lốp có săm cho đúng vành",
        detail:
          "Vành đúc thường đi với lốp không săm, vành nan hoa thì dùng lốp có săm. Nói rõ với thợ xe mình vành gì. Lốp không săm có cái hay là khi cán đinh thường xì từ từ chứ không xuống hơi đột ngột, nhưng bù lại giá thường nhỉnh hơn.",
      },
      {
        title: "Hỏi giá hai tiệm trước khi gật đầu",
        detail:
          "Tra nhanh trên mạng giá lốp hãng bạn định mua. Tới tiệm hỏi thẳng: anh cho em giá lốp trọn gói gồm cả công thay là bao nhiêu ạ. Hỏi trọn gói để khỏi bị cộng thêm tiền công, tiền van, tiền cân bằng lúc thanh toán.",
      },
      {
        title: "Yêu cầu xem lốp mới nguyên tem trước mặt mình",
        detail:
          "Câu nên nói: anh cho em xem lốp trước khi lắp với đọc giúp em ngày sản xuất nhé. Tiệm tử tế sẽ vui vẻ đưa. Ai gạt đi hoặc đã lắp sẵn xong mới báo thì cứ cảnh giác — đó là chiêu tráo lốp cũ hoặc lốp tồn kho lâu năm.",
      },
      {
        title: "Đứng xem lúc thợ tháo lắp",
        detail:
          "Không cần soi mói, chỉ cần đứng gần đó. Việc bạn có mặt đã đủ để hạn chế chuyện tráo săm, tráo van. Tiện thể nhờ thợ thay luôn van nếu van cũ đã chai cứng, món này rẻ mà hay bị bỏ qua.",
      },
      {
        title: "Kiểm tra áp suất ngay sau khi lắp",
        detail:
          "Nhờ bơm đúng áp suất khuyến nghị của xe, thường ghi trên tem dán gần yên hoặc trong sách hướng dẫn. Lốp mới bơm non thì nhanh mòn vai lốp, bơm quá căng thì xe nảy và bám đường kém.",
      },
      {
        title: "Chạy thử một vòng ngắn trước khi rời tiệm",
        detail:
          "Chạy chừng trăm mét, thử phanh nhẹ, đánh lái qua lại. Thấy rung tay lái, nghe tiếng cọ hoặc xe bị lệch thì quay lại nói ngay khi còn ở tiệm. Về nhà rồi mới phát hiện là mất công đi lại lần nữa.",
      },
      {
        title: "Đi nhẹ nhàng vài chục cây số đầu",
        detail:
          "Lốp mới còn lớp ve trơn từ khuôn đúc, bám đường kém hơn bình thường. Trong khoảng vài chục cây số đầu, tránh phanh gấp và ôm cua nhanh, nhất là khi trời mưa.",
      },
    ],
    notes: [
      "Lốp trước quan trọng hơn lốp sau về mặt an toàn: mất bám ở bánh trước là ngã gần như chắc chắn. Nếu chỉ đủ tiền thay một cái, ưu tiên bánh trước.",
      "Đừng thay lốp ở tiệm ven đường lúc nửa đêm nếu không phải trường hợp bất khả kháng. Đó là bối cảnh dễ bị hét giá và tráo đồ nhất.",
      "Lốp cũ sau khi thay là của bạn. Muốn giữ lại để kiểm tra hoặc đối chiếu thì cứ nói trước với thợ; còn không thì để lại tiệm cũng được.",
      "Giá lốp và giá công thay chênh nhau khá nhiều theo hãng, cỡ và khu vực — con số ai đó kể cho bạn nghe chỉ để tham khảo, hỏi trực tiếp vài chỗ cho chắc.",
    ],
    faq: [
      {
        q: "Phải thay cả hai bánh cùng lúc không?",
        a: "Không bắt buộc. Bánh nào mòn thì thay bánh đó. Thường lốp sau mòn nhanh hơn vì chịu lực kéo và tải nặng hơn.",
      },
      {
        q: "Xe ít đi thì lốp có cần thay không?",
        a: "Có. Cao su lão hoá theo thời gian dù xe nằm im, nhất là khi phơi nắng. Xe để lâu mà lốp nứt chân chim thì vẫn phải thay.",
      },
      {
        q: "Lốp chính hãng và lốp giá rẻ khác nhau nhiều không?",
        a: "Khác rõ nhất ở độ bám khi đường ướt và tuổi thọ. Đây là món trực tiếp giữ mạng bạn, nên nếu phải cắt giảm chi tiêu ở đâu đó thì đừng cắt ở lốp.",
      },
      {
        q: "Vá lốp không săm bằng keo tự vá có ổn không?",
        a: "Ổn để chạy về nhà hoặc tới tiệm, coi như giải pháp tạm. Về tới nơi vẫn nên vá đúng cách hoặc thay, đừng để nguyên vậy chạy dài ngày.",
      },
    ],
    sources: [],
  },
  {
    slug: "xe-may-hao-xang-bat-thuong",
    title: "Xe máy bỗng nhiên hao xăng: tự tìm nguyên nhân trước khi ra tiệm",
    excerpt:
      "Cùng quãng đường đó mà tháng này đổ xăng nhiều hơn hẳn. Phần lớn nguyên nhân là mấy thứ nhỏ xíu bạn tự xử được, không phải bệnh nặng.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Trước khi nghĩ tới chuyện hỏng máy, kiểm tra bốn thứ rẻ tiền: lốp non hơi, nhông xích khô và chùng, lọc gió bẩn, và bugi cũ. Bốn thứ này gây hao xăng nhiều hơn người ta tưởng và tự làm được gần hết. Đồng thời đo lại mức tiêu thụ cho chính xác bằng cách đổ đầy bình rồi ghi số công tơ mét, chứ đừng ước lượng bằng cảm giác. Làm hết mà vẫn hao thì lúc đó mới ra tiệm, và mô tả rõ triệu chứng.",
    prepare: [
      "Sổ tay hoặc ghi chú trong điện thoại để ghi số công tơ mét và số lít xăng — không đo thì không biết mình có hao thật không",
      "Chỗ bơm lốp có đồng hồ đo áp suất",
      "Chai dầu xích và giẻ lau nếu xe bạn là xe số hoặc xe côn tay",
      "Tuốc nơ vít bốn cạnh để mở nắp hộp lọc gió",
      "Chụp ảnh lại mọi thứ trước khi tháo, để lắp lại cho đúng",
    ],
    steps: [
      {
        title: "Đo cho ra con số thật đã",
        detail:
          "Đổ đầy bình tới khi vòi tự ngắt, ghi lại số công tơ mét. Chạy bình thường vài ngày rồi đổ đầy lại, ghi số lít đã đổ và số công tơ mét mới. Lấy quãng đường chia cho số lít là ra mức tiêu thụ. Không có con số này thì mọi phán đoán sau đó chỉ là cảm giác.",
      },
      {
        title: "Loại trừ yếu tố hoàn cảnh trước",
        detail:
          "Tháng này bạn có hay kẹt xe hơn không, có chở nặng hơn, có đi nhiều quãng ngắn hơn không? Xe chạy quãng ngắn liên tục và nổ máy chờ đèn đỏ nhiều thì hao xăng hơn hẳn dù máy vẫn hoàn toàn khoẻ.",
      },
      {
        title: "Bơm lốp đúng áp suất",
        detail:
          "Đây là thủ phạm phổ biến nhất và cũng dễ sửa nhất. Lốp non làm xe nặng, máy phải gồng, xăng đi tong. Bơm theo mức khuyến nghị ghi trên tem dán ở xe, đo lúc lốp còn nguội cho chính xác.",
      },
      {
        title: "Kiểm tra nhông xích nếu là xe số",
        detail:
          "Xích khô, gỉ hoặc chùng quá làm mất lực đáng kể. Bóp thử độ võng của xích ở đoạn giữa, thấy lỏng lẻo bất thường thì mang ra tiệm căng lại, tốn rất ít tiền. Xích khô thì xịt dầu xích, đừng dùng nhớt thải vì nó hút bụi.",
      },
      {
        title: "Mở lọc gió ra soi",
        detail:
          "Hộp lọc gió thường nằm bên hông máy, mở bằng vài con ốc. Lấy tấm lọc ra, giơ lên ánh sáng. Không nhìn xuyên qua được nghĩa là nó nghẹt, máy phải hút vất vả và ăn xăng. Lọc giấy bẩn thì thay mới, lọc mút thì giặt sạch phơi khô rồi lắp lại.",
      },
      {
        title: "Xem bugi",
        detail:
          "Tháo bugi ra nhìn đầu sứ. Màu nâu gạch nhạt là khoẻ; đen sì bám muội là đang thừa xăng; trắng bợt là thiếu xăng. Bugi đã dùng lâu thì thay mới, đây là món rẻ mà tác động rõ tới độ bốc và mức tiêu thụ.",
      },
      {
        title: "Kiểm tra có rò rỉ xăng không",
        detail:
          "Dựng xe trên nền khô sạch qua đêm, sáng ra nhìn xuống nền. Có vệt loang và ngửi thấy mùi xăng là đang rò ở ống dẫn hoặc chỗ nối. Trường hợp này ra tiệm ngay, đừng chần chừ, vì rò xăng là nguy cơ cháy chứ không chỉ là tốn tiền.",
      },
      {
        title: "Nghe xem máy có nổ đều không",
        detail:
          "Nổ máy, để garanti và lắng nghe. Máy rung giật, tiếng nổ lúc to lúc nhỏ, hoặc phải vặn ga mới không chết máy là dấu hiệu chế hoà khí hoặc kim phun cần vệ sinh. Việc này nên để thợ làm.",
      },
      {
        title: "Xem lại thói quen chạy xe của mình",
        detail:
          "Vặn ga giật cục, phanh gấp rồi tăng tốc lại, thường xuyên chạy hết ga — mấy thứ đó ngốn xăng rõ rệt. Chạy đều tay, giữ tốc độ ổn định, buông ga sớm khi thấy đèn đỏ phía trước là tiết kiệm thấy được ngay.",
      },
      {
        title: "Kiểm tra phanh có bị bó không",
        detail:
          "Dựng chân chống giữa, quay bánh xe bằng tay. Bánh phải quay trơn và trôi thêm được một chút. Nếu quay nặng hoặc dừng khựng lại ngay là má phanh đang bó, xe vừa chạy vừa bị hãm. Đây là nguyên nhân hao xăng mà ít người nghĩ tới.",
      },
      {
        title: "Đổ xăng ở cây quen và ghi lại số liệu",
        detail:
          "Nếu nghi bị đong thiếu, đổ theo số tiền chẵn ở một cây quen vài lần liên tiếp và ghi lại số công tơ mét đi được. Có số liệu vài lần rồi hãy kết luận, đừng vội quy chụp sau một lần thấy nhanh hết xăng.",
      },
      {
        title: "Ra tiệm với thông tin đầy đủ",
        detail:
          "Làm hết các bước trên mà vẫn hao thì ra tiệm và nói cụ thể: trước em đi được chừng này cây một lít, giờ còn chừng này, em đã bơm lốp, thay lọc gió và bugi rồi. Nói vậy thợ khỏi làm lại mấy việc bạn đã làm và khỏi tính tiền oan.",
      },
    ],
    notes: [
      "Đừng tin mấy món phụ kiện quảng cáo giúp tiết kiệm xăng bán trên mạng — nam châm gắn ống xăng, viên bỏ vào bình. Tiền đó để dành thay lọc gió và bugi thì thiết thực hơn nhiều.",
      "Xe phun xăng điện tử báo đèn cảnh báo trên đồng hồ thì đừng tự mò, mang ra tiệm có máy đọc lỗi. Tự tháo lung tung dễ làm hỏng thêm cảm biến.",
      "Mức tiêu thụ mỗi xe mỗi khác tuỳ dung tích, tuổi xe, tải trọng và đường sá — đừng so xe mình với xe người khác rồi hoảng, hãy so với chính xe mình tháng trước.",
      "Thay nhớt đúng hạn cũng giúp máy nhẹ và đỡ hao xăng. Nếu bạn không nhớ lần thay nhớt gần nhất là khi nào thì rất có thể đã quá hạn.",
    ],
    faq: [
      {
        q: "Xe mới mua mà hao xăng hơn quảng cáo, có bị lừa không?",
        a: "Con số hãng công bố là đo trong điều kiện lý tưởng. Chạy thực tế trong phố đông, đèn đỏ nhiều, chở hai người thì cao hơn là bình thường.",
      },
      {
        q: "Xăng chỉ số octan cao hơn có tiết kiệm hơn không?",
        a: "Chỉ khi xe bạn yêu cầu loại đó. Đổ loại cao hơn mức xe cần thường không mang lại lợi ích gì thêm, chỉ tốn tiền. Xem khuyến nghị của nhà sản xuất cho đúng xe của mình.",
      },
      {
        q: "Rửa xe thường xuyên có giúp đỡ hao xăng không?",
        a: "Không đáng kể với xe máy. Nhưng rửa xe giúp bạn phát hiện sớm vết rò rỉ, xích khô, lốp nứt — cái đó thì đáng.",
      },
      {
        q: "Bao lâu nên thay lọc gió một lần?",
        a: "Tuỳ đường bạn hay đi, đi nhiều đường bụi thì nhanh bẩn hơn. Cách chắc ăn là cứ mỗi lần thay nhớt thì mở ra nhìn một cái, mất chưa tới năm phút.",
      },
    ],
    sources: [],
  },
  {
    slug: "thue-o-to-tu-lai-lan-dau",
    title: "Thuê ô tô tự lái lần đầu: nhận xe kiểm tra gì, trả xe khỏi bị trừ tiền oan",
    excerpt:
      "Chuyện dở nhất khi thuê xe không phải là giá thuê, mà là lúc trả xe bị chỉ vào một vết xước không biết có từ bao giờ. Mười phút nhận xe cẩn thận là giải quyết xong.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Đọc kỹ hợp đồng ở ba chỗ: giới hạn số cây số mỗi ngày, quy định về nhiên liệu khi trả xe, và mức bạn phải tự chịu nếu xe có va chạm. Lúc nhận xe, quay một video đi vòng quanh xe thật chậm, quay cả nội thất, đồng hồ công tơ mét và kim xăng. Lúc trả xe cũng quay lại y như vậy trước mặt chủ xe. Video có ngày giờ là bằng chứng mạnh nhất khi có tranh cãi.",
    prepare: [
      "Bằng lái xe còn hạn và căn cước — hầu hết nơi cho thuê đều yêu cầu, có nơi giữ thêm giấy tờ hoặc tiền cọc",
      "Điện thoại còn nhiều pin và dung lượng trống để quay video nhận xe",
      "Đọc trước hợp đồng mẫu nếu bên cho thuê gửi qua tin nhắn, đừng đợi tới lúc đứng ở bãi mới đọc",
      "Số điện thoại cứu hộ của bên cho thuê, lưu ngay vào danh bạ",
      "Tiền cọc theo thoả thuận, và hỏi rõ khi nào được hoàn lại",
    ],
    steps: [
      {
        title: "Hỏi rõ ba con số trước khi đặt cọc",
        detail:
          "Giá thuê một ngày đã gồm những gì, giới hạn cây số mỗi ngày là bao nhiêu và vượt thì tính thêm thế nào, và nếu xảy ra va chạm thì bạn phải tự chịu tối đa bao nhiêu. Ba con số này quyết định chuyến thuê rẻ hay đắt, chứ không phải giá niêm yết.",
      },
      {
        title: "Đọc kỹ điều khoản nhiên liệu",
        detail:
          "Có nơi giao xe đầy bình và yêu cầu trả đầy bình, có nơi giao bao nhiêu trả bấy nhiêu. Chụp lại kim xăng lúc nhận. Trả thiếu xăng thường bị tính giá cao hơn giá cây xăng, nên tự đổ trước khi trả là hơn.",
      },
      {
        title: "Quay video vòng quanh xe thật chậm",
        detail:
          "Đứng cách xe chừng một mét, đi hết một vòng, quay chậm và dừng lại ở mỗi vết xước, vết móp, vết đá văng trên kính. Vừa quay vừa nói ra miệng: đây là vết xước ở cửa sau bên phải. Giọng nói của bạn trong video có giá trị hơn bạn tưởng.",
      },
      {
        title: "Quay cả nội thất và các con số",
        detail:
          "Quay ghế, trần xe, thảm sàn, và quay cận cảnh bảng đồng hồ để thấy rõ số công tơ mét cùng mức xăng. Mở cốp sau xem có lốp dự phòng, kích và cần tháo lốp không — thiếu món này lúc trả xe là bạn phải đền.",
      },
      {
        title: "Kiểm tra giấy tờ xe trên xe",
        detail:
          "Hỏi thẳng: anh cho em xem giấy đăng kiểm và bảo hiểm của xe còn hạn không ạ. Cầm xe hết hạn đăng kiểm ra đường thì người bị xử lý là bạn chứ không phải chủ xe. Chụp lại luôn cho chắc.",
      },
      {
        title: "Thử các thứ trước khi rời bãi",
        detail:
          "Bật đèn pha, đèn xi nhan, gạt mưa, điều hoà, còi. Đạp thử phanh khi xe còn đứng yên xem có bị lún sâu bất thường không. Phát hiện lỗi lúc còn ở bãi thì đổi xe được, ra đường rồi mới biết là bạn khổ.",
      },
      {
        title: "Chỉnh ghế, gương và làm quen xe",
        detail:
          "Xe lạ thì vị trí cần số, phanh tay điện tử, nút mở nắp bình xăng đều khác nhau. Ngồi tại chỗ dò cho quen chừng năm phút. Đặc biệt tìm cho ra nút mở nắp bình xăng, kẻo tới cây xăng lại loay hoay.",
      },
      {
        title: "Chạy thử một vòng ngắn quanh bãi",
        detail:
          "Chạy chậm vài chục mét, thử phanh, thử đánh lái hai bên. Nghe tiếng lạ, thấy vô lăng lệch hay xe kéo về một bên thì quay lại báo ngay. Đây là lúc duy nhất bạn còn dễ dàng đổi xe.",
      },
      {
        title: "Giữ liên lạc và báo ngay khi có sự cố",
        detail:
          "Xe hỏng dọc đường hay va quẹt thì gọi cho chủ xe trước khi tự quyết định sửa. Tự mang đi sửa mà chưa hỏi ý là dễ thành tranh cãi ai trả tiền. Chụp ảnh hiện trường ngay tại chỗ.",
      },
      {
        title: "Rửa xe và đổ xăng trước khi trả",
        detail:
          "Trả xe bẩn nhiều nơi tính phí vệ sinh, mà phí đó thường cao hơn tiền rửa xe ngoài tiệm. Ghé rửa nhanh và đổ xăng về đúng mức lúc nhận là tiết kiệm được kha khá.",
      },
      {
        title: "Quay video trả xe trước mặt chủ xe",
        detail:
          "Làm lại đúng như lúc nhận: một vòng quanh xe, nội thất, công tơ mét, kim xăng. Nói to ngày giờ. Đây là bằng chứng bạn trả xe trong tình trạng nào, phòng khi vài hôm sau bị nhắn tin đòi tiền một vết xước mới.",
      },
      {
        title: "Chốt biên bản trả xe và hỏi ngày hoàn cọc",
        detail:
          "Xin một dòng xác nhận đã trả xe, không phát sinh gì thêm — tin nhắn cũng được, miễn có chữ. Hỏi rõ khi nào tiền cọc hoặc giấy tờ được trả lại, và ghi ngày đó vào lịch để còn nhắc.",
      },
    ],
    notes: [
      "Đừng bỏ qua bước quay video vì ngại chủ xe khó chịu. Chủ xe làm ăn đàng hoàng còn mong bạn quay, vì nó bảo vệ cả hai bên.",
      "Phạt nguội thường về sau nhiều ngày. Chạy đúng luật là chính, và nên chủ động tra phạt nguội theo biển số vài tuần sau chuyến đi để không bị bất ngờ.",
      "Điều khoản, mức phí, cách tính đền bù mỗi nơi mỗi khác và thay đổi theo thời điểm — đọc đúng hợp đồng của bên bạn thuê, đừng áp kinh nghiệm chỗ khác vào.",
      "Nếu bên cho thuê ngại đưa hợp đồng bằng văn bản, chỉ trao đổi miệng, thì nên tìm chỗ khác. Không giấy tờ nghĩa là khi có chuyện bạn hoàn toàn ở thế yếu.",
    ],
    faq: [
      {
        q: "Có bắt buộc phải đặt cọc bằng giấy tờ gốc không?",
        a: "Tuỳ nơi, có chỗ nhận cọc tiền, có chỗ đòi giữ giấy tờ hoặc xe máy. Cân nhắc kỹ trước khi giao bản gốc giấy tờ quan trọng, và luôn xin biên nhận ghi rõ đã giữ những gì.",
      },
      {
        q: "Xe hỏng giữa đường không phải do mình thì ai chịu?",
        a: "Thông thường lỗi kỹ thuật của xe thuộc trách nhiệm chủ xe, nhưng điều này phải được ghi trong hợp đồng. Gọi báo ngay và đừng tự ý mang đi sửa trước khi thống nhất.",
      },
      {
        q: "Mới lấy bằng lái có thuê xe được không?",
        a: "Nhiều nơi có yêu cầu về số năm kinh nghiệm lái. Hỏi trước khi đặt cọc, kẻo tới nơi mới bị từ chối mà đã mất tiền giữ chỗ.",
      },
      {
        q: "Đi tỉnh xa có phải báo trước không?",
        a: "Nên báo. Một số hợp đồng giới hạn phạm vi di chuyển hoặc số cây số. Nói trước lịch trình để hai bên thoả thuận rõ, tránh phát sinh lúc trả xe.",
      },
    ],
    sources: [],
  },
  {
    slug: "den-canh-bao-tren-bang-dong-ho-o-to",
    title: "Đèn cảnh báo trên bảng đồng hồ ô tô sáng: cái nào đi tiếp được, cái nào phải tấp vào ngay",
    excerpt:
      "Không phải đèn nào sáng cũng là thảm hoạ, nhưng có vài cái mà cố chạy thêm vài cây số là hỏng máy tiền chục triệu. Đây là cách phân biệt.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Nhớ theo màu: đèn đỏ nghĩa là dừng an toàn càng sớm càng tốt, đèn vàng nghĩa là có vấn đề cần kiểm tra nhưng thường chạy tiếp được nhẹ nhàng, đèn xanh hoặc trắng chỉ báo chức năng đang bật. Hai đèn đỏ nguy hiểm nhất là đèn áp suất dầu hình bình dầu nhỏ giọt và đèn nhiệt độ nước làm mát — thấy hai cái này thì tấp vào lề và tắt máy ngay. Không chắc đèn gì thì mở sách hướng dẫn trong hộc để đồ, mọi xe đều có phần giải thích ký hiệu.",
    prepare: [
      "Sách hướng dẫn sử dụng xe — thường nằm trong hộc để đồ trước ghế phụ, phần ký hiệu đèn cảnh báo nằm gần đầu sách",
      "Đèn pin trong xe, để soi khoang máy khi phải dừng lúc trời tối",
      "Số điện thoại cứu hộ hoặc gara quen lưu sẵn trong danh bạ",
      "Tam giác cảnh báo hoặc áo phản quang, để đặt phía sau khi phải dừng bên đường",
      "Điện thoại chụp ảnh lại đèn đang sáng, để mô tả chính xác cho thợ",
    ],
    steps: [
      {
        title: "Nhìn màu đèn trước, đừng đoán ký hiệu",
        detail:
          "Đỏ là dừng, vàng là kiểm tra, xanh hoặc trắng là chỉ báo chức năng. Chỉ riêng việc phân biệt màu đã giúp bạn quyết định đúng trong vài giây đầu, chưa cần biết cái ký hiệu đó tên là gì.",
      },
      {
        title: "Thấy đèn đỏ thì tìm chỗ tấp vào an toàn",
        detail:
          "Bật đèn khẩn cấp, giảm tốc từ từ, tấp vào lề hoặc vào chỗ rộng. Đừng phanh gấp giữa làn. Ra khỏi xe thì đứng phía trong lan can, không đứng sau đuôi xe trên đường đông.",
      },
      {
        title: "Đèn hình bình dầu nhỏ giọt: tắt máy ngay",
        detail:
          "Đây là đèn báo áp suất dầu bôi trơn. Chạy tiếp khi đèn này sáng có thể làm hỏng máy rất nhanh, chi phí sửa rất lớn. Tắt máy, chờ vài phút rồi kiểm tra que thăm dầu. Thiếu dầu thì châm; đủ dầu mà đèn vẫn sáng thì gọi cứu hộ, đừng nổ máy chạy tiếp.",
      },
      {
        title: "Đèn hình nhiệt kế trong sóng nước: để máy nguội đã",
        detail:
          "Xe đang quá nhiệt. Tắt điều hoà, mở cửa sổ, tấp vào và tắt máy. Chờ máy nguội hẳn, thường phải khá lâu. Tuyệt đối không mở nắp két nước khi máy còn nóng, hơi nước áp suất cao phun ra gây bỏng nặng.",
      },
      {
        title: "Đèn hình ắc quy: xe đang chạy bằng điện dự trữ",
        detail:
          "Nghĩa là hệ thống sạc đang có vấn đề. Tắt hết thứ tốn điện như điều hoà, dàn âm thanh, sấy kính, và lái thẳng tới gara gần nhất. Xe có thể chết máy bất cứ lúc nào khi ắc quy cạn nên đừng đi xa.",
      },
      {
        title: "Đèn hình vô lăng hoặc chữ ABS: chạy được nhưng cẩn thận",
        detail:
          "Trợ lực lái hoặc hệ thống chống bó cứng phanh đang lỗi. Xe vẫn lái và phanh được nhưng nặng hơn và quãng đường phanh có thể dài hơn. Đi chậm, giữ khoảng cách xa hơn bình thường, tới gara kiểm tra sớm.",
      },
      {
        title: "Đèn hình động cơ màu vàng: kiểm tra sớm, chưa cần hoảng",
        detail:
          "Đèn này báo hàng chục lỗi khác nhau, từ nắp bình xăng đóng chưa chặt tới cảm biến hỏng. Nếu xe vẫn chạy êm thì đi tiếp nhẹ nhàng và ghé gara đọc mã lỗi. Nếu đèn này nhấp nháy liên tục kèm xe rung giật thì nên dừng và gọi cứu hộ.",
      },
      {
        title: "Đèn hình lốp: kiểm tra áp suất bốn bánh",
        detail:
          "Tấp vào chỗ an toàn, đi vòng quanh nhìn bốn lốp. Thấy một bánh xẹp rõ thì thay lốp dự phòng hoặc gọi cứu hộ. Nhiều khi đèn này sáng chỉ vì trời trở lạnh làm hơi co lại, bơm bù là hết.",
      },
      {
        title: "Kiểm tra mấy thứ đơn giản trước khi gọi thợ",
        detail:
          "Nắp bình xăng có vặn chặt không, cửa xe có đóng kín hết chưa, phanh tay có nhả hẳn chưa. Một phần không nhỏ các đèn cảnh báo sáng lên chỉ vì mấy chuyện nhỏ xíu như vậy.",
      },
      {
        title: "Chụp ảnh bảng đồng hồ khi đèn đang sáng",
        detail:
          "Đèn có thể tự tắt sau khi bạn khởi động lại, nhưng lỗi vẫn còn lưu trong máy tính của xe. Có ảnh thì mô tả cho thợ chính xác hơn hẳn câu nói em thấy có đèn gì đó màu vàng sáng lên.",
      },
      {
        title: "Nói với gara cho đúng trọng tâm",
        detail:
          "Câu nên nói: xe em sáng đèn này, chụp ảnh đây ạ, anh cắm máy đọc mã lỗi giúp em rồi báo em mã lỗi là gì trước khi sửa nhé. Yêu cầu biết mã lỗi giúp bạn không bị dẫn dắt sửa lan man.",
      },
      {
        title: "Đừng để thợ xoá lỗi mà không sửa",
        detail:
          "Xoá mã lỗi làm đèn tắt ngay nhưng bệnh vẫn còn và sẽ sáng lại sau ít ngày. Hỏi rõ đã sửa cái gì, thay món gì. Nếu chỉ được trả lời là đã reset lại rồi thì coi như bạn chưa sửa gì cả.",
      },
    ],
    notes: [
      "Khi bật khoá điện, tất cả đèn cảnh báo sáng lên vài giây rồi tắt là bình thường — đó là xe đang tự kiểm tra. Đèn nào sáng mãi không tắt mới là chuyện cần quan tâm.",
      "Ký hiệu đèn giữa các hãng có khác nhau đôi chút, nhất là các đèn liên quan tới hệ thống hỗ trợ lái. Sách hướng dẫn của chính xe bạn là nguồn đúng nhất.",
      "Dừng xe trên cao tốc thì phải vào làn dừng khẩn cấp, bật đèn khẩn cấp, đặt cảnh báo phía sau và người đứng ngoài hộ lan. Đứng cạnh xe trên cao tốc rất nguy hiểm.",
      "Chi phí đọc mã lỗi và sửa chữa chênh nhau nhiều theo gara và dòng xe — hỏi báo giá trước khi đồng ý sửa, và hỏi luôn có được giữ lại phụ tùng cũ không.",
    ],
    faq: [
      {
        q: "Đèn động cơ vàng sáng mà xe chạy vẫn ngon, bỏ qua được không?",
        a: "Không nên bỏ qua lâu. Xe chạy êm thì chưa gấp, nhưng lỗi để lâu có thể kéo theo hỏng thêm bộ phận khác và làm hao xăng. Ghé đọc mã lỗi trong vài ngày tới.",
      },
      {
        q: "Tự mua máy đọc lỗi cắm vào xe có được không?",
        a: "Được, mấy thiết bị cắm cổng chẩn đoán nối điện thoại giờ khá phổ biến và không đắt. Nó cho bạn biết mã lỗi để đỡ bị dẫn dắt, nhưng đọc được lỗi không có nghĩa là tự sửa được.",
      },
      {
        q: "Xe mới còn bảo hành mà sáng đèn thì làm sao?",
        a: "Mang thẳng vào hãng, đừng ghé gara ngoài trước. Tự sửa bên ngoài có thể ảnh hưởng tới điều kiện bảo hành của bạn.",
      },
      {
        q: "Nhiều đèn cùng sáng một lúc là sao?",
        a: "Thường là vấn đề ở nguồn điện hoặc ắc quy yếu, khiến hàng loạt hệ thống báo lỗi cùng lúc. Đừng cố đoán từng cái, gọi cứu hộ cho chắc.",
      },
    ],
    sources: [],
  },
  {
    slug: "o-to-thung-lop-thay-lop-du-phong",
    title: "Ô tô thủng lốp giữa đường: tự thay lốp dự phòng trong hai mươi phút",
    excerpt:
      "Bộ đồ nghề nằm sẵn trong cốp xe bạn từ ngày mua mà chưa lần nào mở ra. Đây là lúc nó cứu bạn khỏi một buổi chiều đứng chờ.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Tấp vào chỗ bằng phẳng và cứng, bật đèn khẩn cấp, kéo phanh tay, chèn bánh đối diện. Nới lỏng ốc bánh khi xe còn chạm đất, rồi mới kích xe lên, tháo ốc ra hẳn và đổi lốp. Siết ốc theo hình ngôi sao chứ đừng siết lần lượt vòng tròn. Lốp dự phòng loại nhỏ chỉ để chạy chậm về tới tiệm, không phải để đi tiếp cả hành trình.",
    prepare: [
      "Kích, cần siết ốc và lốp dự phòng — kiểm tra trước ở nhà xem xe mình có đủ ba món này không, nhiều xe đời mới chỉ có bộ keo vá",
      "Găng tay và đèn pin, nên để sẵn trong cốp vì thủng lốp hay xảy ra lúc trời tối",
      "Tam giác cảnh báo và áo phản quang",
      "Một tấm bìa cứng hoặc mảnh gỗ để kê kích nếu nền đất mềm",
      "Điện thoại còn pin, phòng khi phải gọi cứu hộ",
    ],
    steps: [
      {
        title: "Giảm tốc từ từ, đừng phanh gấp",
        detail:
          "Cảm thấy xe nặng lái, rung hoặc nghe tiếng đập đều đều là dấu hiệu thủng lốp. Giữ chặt vô lăng bằng hai tay, buông ga cho xe chậm dần, bật đèn khẩn cấp rồi mới từ từ tấp vào lề. Phanh gấp lúc này dễ làm xe mất lái.",
      },
      {
        title: "Chọn chỗ dừng cho đúng",
        detail:
          "Cần nền phẳng, cứng và cách xa dòng xe. Đừng dừng ở đoạn cua, đỉnh dốc hay chỗ khuất tầm nhìn. Thà đi thêm vài trăm mét với lốp xẹp còn hơn thay lốp ở chỗ nguy hiểm — lốp hỏng thì mua được, người thì không.",
      },
      {
        title: "Kéo phanh tay và đặt cảnh báo",
        detail:
          "Kéo phanh tay, về số P nếu là xe tự động hoặc cài số nếu xe số sàn, tắt máy. Đặt tam giác cảnh báo phía sau xe, đặt xa hơn khi ở đường tốc độ cao. Người trên xe nên xuống và đứng phía trong lan can.",
      },
      {
        title: "Chèn bánh đối diện",
        detail:
          "Lấy hòn đá to hoặc miếng gỗ chèn vào bánh nằm chéo với bánh cần thay. Bước này hay bị bỏ qua nhưng nó ngăn xe trôi khi đang kích — tình huống rất nguy hiểm.",
      },
      {
        title: "Lấy đồ nghề và lốp dự phòng ra",
        detail:
          "Lốp dự phòng thường nằm dưới sàn cốp sau hoặc treo dưới gầm xe. Kích và cần siết ốc thường để chung. Tiện thể kiểm tra lốp dự phòng còn hơi không — lốp dự phòng xẹp là chuyện xảy ra thường xuyên hơn bạn nghĩ.",
      },
      {
        title: "Cạy nắp chụp ốc nếu có",
        detail:
          "Nhiều xe có nắp nhựa che các ốc bánh, cạy nhẹ ra bằng đầu dẹt của cần siết. Cất nắp vào trong xe kẻo lát nữa quên mất ngoài đường.",
      },
      {
        title: "Nới lỏng ốc khi bánh còn chạm đất",
        detail:
          "Đây là bước quan trọng nhất mà nhiều người làm sai. Lắp cần vào ốc, vặn ngược chiều kim đồng hồ, chỉ nới cho lỏng chứ chưa tháo ra. Ốc chặt quá thì đứng lên đạp lên cần bằng chân, tay bám vào xe cho vững. Kích xe lên trước rồi mới nới thì bánh sẽ quay theo và bạn không tháo được.",
      },
      {
        title: "Đặt kích đúng điểm kê",
        detail:
          "Gầm xe có điểm kê riêng, thường là một gờ kim loại dày gần bánh xe, có khi có khía đánh dấu. Sách hướng dẫn chỉ rõ chỗ này. Kê sai chỗ làm móp gầm hoặc tệ hơn là xe tuột khỏi kích. Nền mềm thì lót tấm bìa hoặc gỗ dưới chân kích.",
      },
      {
        title: "Kích xe lên vừa đủ",
        detail:
          "Nâng cho tới khi lốp hỏng nhấc khỏi mặt đất chừng hai đốt ngón tay, đủ để lốp mới lắp vào. Nâng cao hơn mức cần thiết chỉ làm xe kém vững. Tuyệt đối không chui người vào gầm xe khi xe đang trên kích.",
      },
      {
        title: "Tháo ốc, đổi lốp",
        detail:
          "Vặn hết các ốc ra, để gọn vào một chỗ như trong nắp chụp hay túi áo, đừng thả xuống đất kẻo lăn mất. Kéo lốp hỏng ra, nhấc lốp dự phòng vào. Lốp khá nặng nên dùng chân đỡ phụ và giữ lưng thẳng khi nâng.",
      },
      {
        title: "Siết ốc theo hình ngôi sao",
        detail:
          "Vặn tay tất cả các ốc vào trước cho ăn ren. Sau đó siết chặt theo thứ tự chéo nhau như vẽ hình ngôi sao, không siết lần lượt vòng quanh. Siết chéo giúp bánh áp đều vào moay ơ, siết vòng tròn dễ làm bánh bị lệch.",
      },
      {
        title: "Hạ kích rồi siết lại lần cuối",
        detail:
          "Hạ xe xuống cho lốp chạm đất chịu lực, rồi siết lại một lượt nữa theo đúng thứ tự chéo. Lúc này bánh không quay được nên siết mới đủ chặt. Thu dọn đồ nghề, đừng để quên cái gì bên đường.",
      },
      {
        title: "Chạy chậm tới tiệm lốp gần nhất",
        detail:
          "Lốp dự phòng loại nhỏ hẹp thường có giới hạn tốc độ và quãng đường ghi ngay trên thành lốp, đọc và tuân theo. Đi thẳng tới tiệm để vá hoặc thay lốp chính, và nhờ họ siết lại ốc bằng dụng cụ đo lực cho đúng chuẩn.",
      },
    ],
    notes: [
      "Nhiều xe đời mới không có lốp dự phòng mà chỉ có bộ keo vá kèm bơm điện. Kiểm tra cốp xe bạn ngay hôm nay, đừng đợi tới lúc thủng lốp giữa đường mới biết mình không có gì.",
      "Lốp thủng ở hông lốp thì keo vá không cứu được, chỉ có thay. Đừng phí thời gian bơm keo trong trường hợp đó.",
      "Trời mưa, đường cao tốc, hoặc đêm khuya ở chỗ vắng thì gọi cứu hộ là lựa chọn khôn ngoan hơn tự thay, kể cả khi bạn biết làm.",
      "Về nhà nhớ kiểm tra lại lốp dự phòng và bơm hơi cho nó, để lần sau còn dùng được. Rất nhiều người thay xong rồi quên luôn chuyện này.",
    ],
    faq: [
      {
        q: "Chạy tiếp với lốp xẹp một đoạn ngắn có được không?",
        a: "Chỉ nên bò thật chậm vài chục mét để tìm chỗ dừng an toàn. Chạy dài với lốp xẹp làm hỏng vành, và vành thì đắt hơn lốp nhiều.",
      },
      {
        q: "Không đủ sức nới ốc thì làm sao?",
        a: "Thử đứng lên đạp chân lên cần, tay bám chắc vào thân xe cho khỏi ngã. Vẫn không được thì gọi cứu hộ — cố quá dễ trượt tay và bị thương.",
      },
      {
        q: "Lốp dự phòng chạy được bao lâu?",
        a: "Loại nhỏ hẹp thường có giới hạn tốc độ và quãng đường in ngay trên lốp, hãy đọc đúng con số của lốp bạn đang có. Coi nó là phương tiện về tới tiệm chứ không phải lốp thay thế lâu dài.",
      },
      {
        q: "Nên tập thay lốp trước ở nhà không?",
        a: "Rất nên. Làm thử một lần ở sân nhà lúc trời sáng, không vội, thì lúc gặp chuyện thật ngoài đường bạn sẽ bình tĩnh hơn hẳn.",
      },
    ],
    sources: [],
  },
  {
    slug: "bao-hiem-y-te-ho-gia-dinh-lan-dau",
    title: "Mua bảo hiểm y tế hộ gia đình lần đầu: mua ở đâu, bao lâu thì dùng được",
    excerpt:
      "Người làm tự do, bán hàng online, ở nhà nội trợ đều không có công ty đóng hộ. Đây là cách tự mua, và điều quan trọng nhất: nó không có hiệu lực ngay.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Bạn có thể mua tại cơ quan bảo hiểm xã hội cấp huyện, các điểm thu là bưu điện hoặc đại lý thu được uỷ quyền, hoặc đăng ký trực tuyến qua Cổng dịch vụ công. Mức đóng tính theo tỷ lệ phần trăm mức lương cơ sở và người thứ hai trở đi trong hộ được giảm dần. Điều quan trọng nhất phải nhớ: thẻ mua lần đầu hoặc mua lại sau khi gián đoạn thường có hiệu lực sau một khoảng thời gian chờ chứ không dùng được ngay hôm sau — nên đừng đợi tới lúc ốm mới đi mua.",
    prepare: [
      "Căn cước của người mua và của những người cùng đăng ký thường trú hoặc tạm trú",
      "Thông tin về những người trong hộ đã có thẻ bảo hiểm y tế theo diện khác, để được tính giảm trừ đúng",
      "Điện thoại đã cài VssID hoặc VNeID nếu muốn làm và tra cứu trực tuyến",
      "Tiền đóng — hỏi trước số tiền chính xác vì mức đóng thay đổi theo quy định từng thời điểm",
      "Ghi chú tên cơ sở y tế bạn muốn đăng ký khám chữa bệnh ban đầu",
    ],
    steps: [
      {
        title: "Kiểm tra xem mình đã có thẻ chưa",
        detail:
          "Nhiều người có thẻ mà không biết, do thuộc diện học sinh sinh viên, người có công, hộ nghèo hay được công ty cũ đóng tới hết tháng. Mở app VssID hoặc tra trên cổng của cơ quan bảo hiểm xã hội bằng số căn cước. Có rồi thì khỏi mua trùng.",
      },
      {
        title: "Đếm xem hộ mình có bao nhiêu người phải mua",
        detail:
          "Diện hộ gia đình tính theo những người cùng đăng ký thường trú hoặc tạm trú. Người nào đã có thẻ theo diện khác thì trừ ra. Càng nhiều người cùng mua thì người thứ hai trở đi càng được giảm mức đóng, nên mua chung một lượt thường lợi hơn mua lẻ.",
      },
      {
        title: "Chọn nơi mua cho tiện",
        detail:
          "Ra bộ phận một cửa của cơ quan bảo hiểm xã hội cấp huyện, hoặc ghé bưu điện văn hoá xã hay đại lý thu gần nhà. Nếu quen dùng điện thoại thì làm trực tuyến qua Cổng dịch vụ công cũng được. Ở quê thì bưu điện thường là chỗ nhanh nhất.",
      },
      {
        title: "Hỏi rõ số tiền phải đóng trước khi ký",
        detail:
          "Câu nên hỏi: nhà em có bốn người cùng mua thì tổng bao nhiêu tiền, và mỗi người là bao nhiêu ạ. Mức đóng gắn với mức lương cơ sở nên thay đổi theo từng thời kỳ. Đừng lấy con số bạn đọc được trên mạng năm ngoái làm chuẩn.",
      },
      {
        title: "Chọn kỳ đóng phù hợp túi tiền",
        detail:
          "Thường có các lựa chọn đóng theo ba tháng, sáu tháng hoặc mười hai tháng. Đóng một năm thì đỡ phải nhớ đi gia hạn, đóng ba tháng thì nhẹ tiền một lần nhưng dễ quên và bị gián đoạn. Gián đoạn là điều nên tránh nhất.",
      },
      {
        title: "Chọn nơi khám chữa bệnh ban đầu cho khôn",
        detail:
          "Chọn cơ sở gần nhà hoặc gần chỗ làm để tiện đi khám lặt vặt. Đừng cố chọn bệnh viện tuyến trên cho oai vì khám ban đầu ở đó có thể khó đăng ký và cũng không tiện. Việc chuyển tuyến khi cần đã có quy trình riêng.",
      },
      {
        title: "Kiểm tra kỹ thông tin trên tờ khai",
        detail:
          "Soi lại họ tên có dấu, ngày sinh, số căn cước, giới tính. Sai một chữ là lúc đi khám bị vướng, mà sửa lại thì mất thêm một chuyến đi. Đọc lại trước khi ký chứ đừng ký vội rồi về.",
      },
      {
        title: "Đóng tiền và giữ biên lai",
        detail:
          "Nhận biên lai hoặc chứng từ nộp tiền, chụp lại một tấm lưu vào điện thoại. Đây là bằng chứng bạn đã đóng, cần tới khi có sai sót về dữ liệu.",
      },
      {
        title: "Hỏi ngày thẻ có hiệu lực và ghi vào lịch",
        detail:
          "Đây là câu hỏi quan trọng nhất cả buổi: thẻ của em bắt đầu dùng được từ ngày nào ạ. Thẻ mua lần đầu hoặc mua lại sau gián đoạn thường có thời gian chờ. Biết ngày đó để không đi khám sớm rồi bị tính tiền như người không có thẻ.",
      },
      {
        title: "Cài VssID để dùng thẻ trên điện thoại",
        detail:
          "Cài ứng dụng VssID, đăng ký tài khoản bằng số căn cước và số điện thoại. Có ứng dụng rồi thì đi khám chỉ cần đưa mã thẻ trên điện thoại, khỏi lo quên thẻ giấy ở nhà. Ứng dụng cũng cho xem lịch sử khám chữa bệnh của mình.",
      },
      {
        title: "Kiểm tra dữ liệu thẻ sau vài ngày",
        detail:
          "Vài ngày sau khi đóng tiền, mở VssID xem thẻ đã hiện lên chưa và thông tin có đúng không. Chưa thấy thì gọi lại chỗ bạn đã mua, cầm theo biên lai. Phát hiện sớm thì sửa nhanh hơn nhiều.",
      },
      {
        title: "Đặt lời nhắc gia hạn trước khi hết hạn",
        detail:
          "Mở lịch điện thoại, đặt nhắc trước ngày hết hạn khoảng một tháng. Để thẻ hết hạn rồi mới mua lại là bạn có thể phải chờ hiệu lực lại từ đầu, và mất luôn quyền lợi của người tham gia liên tục nhiều năm.",
      },
    ],
    notes: [
      "Quyền lợi hưởng bảo hiểm y tế khác nhau tuỳ bạn khám đúng nơi đăng ký ban đầu hay khám nơi khác, và tuỳ tuyến bệnh viện. Hỏi rõ ở nơi bạn mua để biết trường hợp của mình.",
      "Tham gia liên tục nhiều năm có ý nghĩa với một số quyền lợi. Đừng để đứt quãng chỉ vì quên mấy ngày — cái mất có thể lớn hơn số tiền tiết kiệm được.",
      "Mọi con số về mức đóng, thời gian chờ và tỷ lệ chi trả đều thay đổi theo quy định từng thời điểm và có thể khác nhau giữa các nhóm đối tượng. Hỏi trực tiếp tại nơi mua cho chắc, đừng tin lời truyền miệng.",
      "Người thuộc hộ nghèo, cận nghèo, người có công, trẻ dưới sáu tuổi và một số nhóm khác được hỗ trợ hoặc cấp thẻ miễn phí. Nếu gia đình bạn có ai thuộc diện này thì hỏi kỹ trước khi bỏ tiền mua.",
    ],
    faq: [
      {
        q: "Đang khoẻ mạnh thì mua làm gì cho tốn?",
        a: "Vì thẻ có thời gian chờ nên đợi tới lúc ốm mới mua là không kịp. Giá trị của bảo hiểm y tế nằm ở ca nằm viện lớn chứ không phải ở lần khám cảm cúm.",
      },
      {
        q: "Vừa đi làm công ty thì có phải mua thêm không?",
        a: "Không. Công ty đóng bảo hiểm y tế cho bạn theo diện người lao động. Kiểm tra trên VssID xem công ty có đóng thật không thì hơn.",
      },
      {
        q: "Ở trọ tỉnh khác thì mua ở đâu?",
        a: "Có thể mua theo nơi bạn đăng ký tạm trú. Mang giấy tờ chứng minh nơi ở hiện tại và hỏi ngay tại cơ quan bảo hiểm xã hội nơi bạn đang sống.",
      },
      {
        q: "Mất thẻ giấy thì sao?",
        a: "Không sao cả nếu bạn đã cài VssID, vì mã thẻ nằm sẵn trên điện thoại. Muốn có thẻ giấy mới thì làm thủ tục cấp lại tại cơ quan bảo hiểm xã hội.",
      },
    ],
    sources: [],
  },
  {
    slug: "xin-ban-sao-trich-luc-ho-tich",
    title: "Mất giấy khai sinh hay giấy kết hôn bản gốc: xin bản sao trích lục thế nào",
    excerpt:
      "Tin vui là giấy hộ tịch bản gốc mất rồi thì không cấp lại được, nhưng bản sao trích lục thì xin bao nhiêu lần cũng được và có giá trị dùng y như vậy.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Giấy khai sinh, giấy chứng nhận kết hôn, giấy chứng tử bản gốc chỉ cấp một lần duy nhất. Mất rồi thì bạn xin bản sao trích lục — loại giấy này do cơ quan đang lưu sổ hộ tịch cấp và dùng thay bản gốc trong hầu hết thủ tục. Ra Uỷ ban nhân dân xã phường nơi đã đăng ký trước đây, hoặc nếu dữ liệu đã lên hệ thống điện tử thì có thể xin ở nơi khác hoặc làm trực tuyến. Nên xin luôn vài bản để dành, phí mỗi bản thường không đáng kể.",
    prepare: [
      "Căn cước của người đi xin",
      "Thông tin về sự kiện cần trích lục: họ tên, ngày tháng năm, nơi đã đăng ký khai sinh hoặc kết hôn — nhớ được càng chi tiết càng nhanh",
      "Bản photo hoặc ảnh chụp giấy cũ nếu còn giữ, kể cả ảnh chụp mờ cũng giúp ích",
      "Giấy uỷ quyền nếu bạn xin thay cho người khác không phải cha mẹ, vợ chồng, con",
      "Ít tiền lẻ đóng lệ phí, và biết trước là mình muốn xin mấy bản",
    ],
    steps: [
      {
        title: "Hiểu đúng cái mình cần xin",
        detail:
          "Bạn không xin cấp lại bản gốc — cái đó không có. Bạn xin bản sao trích lục hộ tịch, tức là bản trích từ sổ gốc đang lưu tại cơ quan. Nói đúng tên gọi này khi tới nơi thì cán bộ hiểu ngay và bạn khỏi bị lòng vòng.",
      },
      {
        title: "Nhớ lại nơi đã đăng ký ban đầu",
        detail:
          "Sổ hộ tịch lưu ở nơi đã đăng ký sự kiện đó chứ không phải nơi bạn đang ở. Hỏi cha mẹ hoặc người thân nếu không nhớ mình khai sinh ở xã nào. Với các địa phương đã sáp nhập hay đổi tên, cứ tới đơn vị hành chính hiện tại quản lý khu vực đó.",
      },
      {
        title: "Thử tra trên cổng dịch vụ công trước khi đi",
        detail:
          "Nhiều nơi đã cho đăng ký trực tuyến thủ tục cấp bản sao trích lục. Nếu dữ liệu hộ tịch của bạn đã được số hoá thì có thể nộp hồ sơ và nhận kết quả qua bưu điện, khỏi phải đi. Mất mười phút thử, tiết kiệm được cả buổi.",
      },
      {
        title: "Chuẩn bị thông tin cho thật cụ thể",
        detail:
          "Ghi ra giấy trước: họ tên đầy đủ, ngày tháng năm sinh hoặc ngày đăng ký kết hôn, họ tên cha mẹ hoặc vợ chồng. Cán bộ phải dò trong sổ, thông tin càng cụ thể thì càng nhanh tìm ra.",
      },
      {
        title: "Tới bộ phận một cửa và nêu rõ yêu cầu",
        detail:
          "Câu nên nói: em muốn xin bản sao trích lục giấy khai sinh, đăng ký năm nào tại xã này ạ. Nhận tờ khai, điền đầy đủ. Không chắc mục nào thì hỏi chứ đừng đoán bừa rồi phải viết lại tờ khác.",
      },
      {
        title: "Xin luôn nhiều bản một lúc",
        detail:
          "Đây là mẹo tiết kiệm thời gian đáng giá nhất của bài này. Phí mỗi bản thường nhỏ, mà mỗi lần cần lại phải đi một chuyến. Xin sẵn ba tới năm bản cất tủ, dùng dần cho các thủ tục sau này.",
      },
      {
        title: "Đóng lệ phí và giữ biên lai",
        detail:
          "Hỏi rõ tổng bao nhiêu tiền cho số bản bạn xin. Mức phí do địa phương quy định nên chênh nhau chút ít giữa các nơi. Giữ biên lai cho tới khi nhận đủ kết quả.",
      },
      {
        title: "Chờ nhận kết quả",
        detail:
          "Trường hợp sổ còn lưu rõ ràng thì nhiều nơi trả ngay trong buổi. Trường hợp phải tra cứu sổ cũ hoặc xác minh thì có giấy hẹn. Hỏi rõ ngày hẹn và giữ giấy hẹn cẩn thận.",
      },
      {
        title: "Soát lại từng chữ ngay khi cầm bản sao",
        detail:
          "Đọc kỹ họ tên có dấu, ngày sinh, tên cha mẹ, nơi sinh. Sai sót thì báo ngay tại chỗ để sửa, đứng dậy ra về rồi mới phát hiện là mất thêm một chuyến. Đây là lúc dễ sửa nhất.",
      },
      {
        title: "Xử lý khi sổ gốc không còn",
        detail:
          "Sổ hộ tịch cũ có thể bị mất do thiên tai, chiến tranh, hoả hoạn. Trường hợp đó cán bộ sẽ hướng dẫn bạn làm thủ tục đăng ký lại khai sinh hoặc kết hôn, cần thêm giấy tờ chứng minh. Cứ hỏi thẳng: sổ không còn thì em phải làm thủ tục nào ạ.",
      },
      {
        title: "Chụp ảnh lưu vào điện thoại và đám mây",
        detail:
          "Chụp rõ nét cả bản sao lẫn bản gốc còn giữ, lưu vào một thư mục giấy tờ trong điện thoại và đồng bộ lên tài khoản đám mây của bạn. Lần sau mất giấy, ít nhất bạn còn thông tin để khai lại nhanh.",
      },
      {
        title: "Cất giấy tờ gốc còn lại cho tử tế",
        detail:
          "Gom hết giấy tờ hộ tịch của cả nhà vào một bìa nhựa, cất một chỗ cố định và nói cho người nhà biết chỗ đó. Phần lớn chuyện mất giấy tờ không phải do mất thật mà do không ai nhớ đã để ở đâu.",
      },
    ],
    notes: [
      "Bản sao trích lục có giá trị sử dụng như bản chính trong hầu hết thủ tục. Đừng lo lắng chuyện nó là bản sao — đây là loại bản sao do cơ quan cấp, khác hẳn bản photo công chứng.",
      "Một số nơi yêu cầu cụ thể về người được xin cấp bản sao. Người thân trực hệ thường xin được, còn người ngoài thì cần giấy uỷ quyền. Hỏi trước nếu bạn đi xin hộ cho người khác.",
      "Địa phương sáp nhập hoặc đổi tên không làm mất hiệu lực giấy tờ cũ của bạn. Cứ tới đơn vị hành chính hiện đang quản lý khu vực đó là được.",
      "Lệ phí, thời gian giải quyết và việc có làm trực tuyến được hay không đều tuỳ nơi và tuỳ thời điểm — hỏi trực tiếp nơi bạn tới cho chắc.",
    ],
    faq: [
      {
        q: "Bản sao trích lục có thời hạn không?",
        a: "Bản thân nó không ghi hạn dùng, nhưng một số cơ quan tiếp nhận có thể yêu cầu bản cấp trong thời gian gần đây. Vì vậy xin sẵn nhiều bản là hợp lý, và nếu bản cũ quá lâu thì xin bản mới cho yên tâm.",
      },
      {
        q: "Không nhớ mình khai sinh ở đâu thì làm sao?",
        a: "Hỏi cha mẹ, xem lại hộ khẩu cũ hoặc học bạ. Trong nhiều trường hợp nơi khai sinh trùng với quê quán ghi trên giấy tờ khác của bạn.",
      },
      {
        q: "Người đang ở nước ngoài xin được không?",
        a: "Có thể uỷ quyền cho người thân trong nước, hoặc liên hệ cơ quan đại diện Việt Nam ở nước sở tại để được hướng dẫn. Nên hỏi trước vì thủ tục cho trường hợp này khác trong nước.",
      },
      {
        q: "Giấy khai sinh và bản trích lục khác nhau chỗ nào?",
        a: "Khác ở chỗ bản gốc cấp một lần khi đăng ký, còn trích lục là bản trích từ sổ và cấp được nhiều lần. Về giá trị dùng trong thủ tục thì gần như tương đương.",
      },
    ],
    sources: [],
  },
  {
    slug: "ma-so-thue-ca-nhan-tra-cuu-va-dang-ky",
    title: "Mã số thuế cá nhân: tra xem mình đã có chưa và đăng ký nếu chưa có",
    excerpt:
      "Rất nhiều người đã có mã số thuế từ đời công ty cũ mà không hề biết, rồi đi đăng ký lại thành ra rối. Kiểm tra mất năm phút.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Vào trang tra cứu của cơ quan thuế hoặc cài ứng dụng eTax Mobile, nhập số căn cước để xem mình đã có mã số thuế chưa. Có rồi thì dùng luôn mã đó suốt đời, không đăng ký thêm cái mới. Chưa có thì đăng ký được qua công ty nơi bạn làm việc, qua cổng thuế điện tử, hoặc trực tiếp tại cơ quan thuế. Theo lộ trình chuyển đổi hiện nay, số định danh cá nhân đang dần thay cho mã số thuế trong nhiều giao dịch.",
    prepare: [
      "Số căn cước công dân — thứ duy nhất bắt buộc phải có",
      "Điện thoại có mạng để cài ứng dụng eTax Mobile hoặc mở trang web thuế",
      "Số điện thoại chính chủ để nhận mã xác thực",
      "Thông tin nơi đăng ký thường trú, dùng khi phải điền tờ khai",
      "Nếu đang đi làm: tên và mã số thuế công ty, phòng nhân sự cung cấp được",
    ],
    steps: [
      {
        title: "Tra trước xem đã có mã chưa",
        detail:
          "Đây là bước bắt buộc phải làm đầu tiên. Rất nhiều người từng được công ty cũ đăng ký hộ mà không biết. Vào trang tra cứu người nộp thuế của cơ quan thuế, nhập số căn cước và mã kiểm tra. Có kết quả hiện ra là bạn đã có mã.",
      },
      {
        title: "Thử tra bằng cả số chứng minh nhân dân cũ",
        detail:
          "Nếu tra bằng căn cước mà không ra, thử tra bằng số chứng minh nhân dân chín số ngày xưa. Mã số thuế có thể đã đăng ký từ thời bạn còn dùng giấy tờ cũ và dữ liệu chưa được cập nhật đồng bộ.",
      },
      {
        title: "Cài eTax Mobile cho tiện về sau",
        detail:
          "Ứng dụng này của cơ quan thuế cho bạn tra thông tin, xem nghĩa vụ thuế và làm nhiều thủ tục. Đăng ký tài khoản bằng số căn cước và số điện thoại chính chủ. Cài sẵn thì lần sau khỏi phải đi đâu.",
      },
      {
        title: "Đã có mã thì cập nhật thông tin cho đúng",
        detail:
          "Kiểm tra xem thông tin gắn với mã số thuế còn dùng số chứng minh cũ hay đã sang căn cước, địa chỉ có còn đúng không. Thông tin lệch là nguyên nhân phổ biến khiến sau này quyết toán thuế bị vướng.",
      },
      {
        title: "Chưa có mã và đang đi làm thì nhờ công ty",
        detail:
          "Cách nhẹ nhàng nhất. Gửi cho phòng nhân sự bản chụp căn cước và nói rõ là bạn chưa có mã số thuế, nhờ đăng ký giúp. Công ty làm việc này thường xuyên nên nhanh gọn hơn bạn tự mò.",
      },
      {
        title: "Chưa có mã và làm tự do thì tự đăng ký",
        detail:
          "Đăng ký qua cổng thuế điện tử hoặc eTax Mobile, hoặc tới trực tiếp cơ quan thuế nơi bạn đăng ký thường trú. Mang căn cước. Nói rõ: em làm tự do, chưa có mã số thuế, em muốn đăng ký ạ.",
      },
      {
        title: "Điền tờ khai cho khớp giấy tờ",
        detail:
          "Họ tên có dấu, ngày sinh, số căn cước, địa chỉ thường trú — phải khớp tuyệt đối với căn cước. Một dấu sắc đặt sai chỗ cũng đủ khiến hồ sơ bị trả lại và bạn phải làm lần nữa.",
      },
      {
        title: "Lưu mã số thuế vào chỗ dễ tìm",
        detail:
          "Có mã rồi thì chụp màn hình, lưu vào ghi chú điện thoại cùng với các thông tin giấy tờ khác. Bạn sẽ cần nó khi ký hợp đồng lao động, khi nhận thù lao, khi quyết toán thuế cuối năm.",
      },
      {
        title: "Chỉ giữ một mã duy nhất suốt đời",
        detail:
          "Mã số thuế cá nhân đi theo bạn qua mọi công ty. Đổi việc thì báo mã cũ cho công ty mới chứ đừng đăng ký thêm mã. Có hai mã là rắc rối lớn khi quyết toán và phải làm thủ tục đóng bớt một cái.",
      },
      {
        title: "Xử lý khi lỡ có hai mã",
        detail:
          "Liên hệ cơ quan thuế, trình bày rõ và đề nghị hướng dẫn chấm dứt hiệu lực mã bị trùng. Mang theo căn cước và cả hai thông báo mã số thuế nếu còn giữ. Xử lý sớm thì đỡ phiền khi quyết toán.",
      },
      {
        title: "Nắm lộ trình chuyển sang số định danh cá nhân",
        detail:
          "Theo hướng chuyển đổi hiện nay, số định danh cá nhân đang dần được dùng thay cho mã số thuế trong nhiều giao dịch. Cứ giữ căn cước và thông tin đăng ký chính xác thì bạn tự động đi đúng lộ trình, không cần làm gì thêm.",
      },
      {
        title: "Kiểm tra lại một lần nữa sau vài ngày",
        detail:
          "Sau khi đăng ký, tra lại bằng số căn cước xem mã đã hiện lên chưa. Chưa thấy sau khoảng một tuần thì gọi cho cơ quan thuế hoặc hỏi lại phòng nhân sự — có thể hồ sơ đang vướng ở đâu đó.",
      },
    ],
    notes: [
      "Có mã số thuế không có nghĩa là bạn phải nộp thuế. Chỉ khi thu nhập vượt ngưỡng chịu thuế sau khi trừ các khoản giảm trừ thì mới phát sinh nghĩa vụ nộp.",
      "Đừng dùng dịch vụ đăng ký mã số thuế thu phí trên mạng xã hội. Đây là thủ tục miễn phí hoặc phí rất thấp và bạn tự làm được, đưa giấy tờ cho người lạ chỉ thêm rủi ro lộ thông tin.",
      "Quy định về mã số thuế và số định danh cá nhân đang trong giai đoạn chuyển đổi, cách làm có thể khác nhau theo từng thời điểm — hỏi trực tiếp cơ quan thuế hoặc phòng nhân sự cho chắc.",
      "Cẩn thận với tin nhắn hoặc cuộc gọi tự xưng cơ quan thuế yêu cầu cài ứng dụng lạ hay bấm vào đường dẫn. Chỉ cài ứng dụng từ kho ứng dụng chính thức và tuyệt đối không đọc mã xác thực cho ai.",
    ],
    faq: [
      {
        q: "Sinh viên đi làm thêm có cần mã số thuế không?",
        a: "Nếu nơi trả thù lao yêu cầu thì nên có, vì có mã thì việc kê khai và hoàn thuế sau này thuận hơn. Không có thu nhập thì chưa cần vội.",
      },
      {
        q: "Mã số thuế cá nhân có bao nhiêu số?",
        a: "Mã cá nhân thường là dãy mười số. Nếu bạn thấy dãy dài hơn có gạch nối phía sau thì đó là mã đơn vị hoặc đơn vị phụ thuộc, không phải mã cá nhân của bạn.",
      },
      {
        q: "Đổi căn cước mới có phải đổi mã số thuế không?",
        a: "Không đổi mã, nhưng nên cập nhật thông tin giấy tờ gắn với mã cho khớp. Việc này làm được trên eTax Mobile hoặc nhờ công ty cập nhật hộ.",
      },
      {
        q: "Nghỉ việc rồi thì mã số thuế có bị huỷ không?",
        a: "Không. Mã đi theo bạn suốt đời, kể cả khi bạn nghỉ việc dài hạn hay chuyển sang làm tự do.",
      },
    ],
    sources: [],
  },
  {
    slug: "dang-ky-ho-kinh-doanh-ca-the",
    title: "Đăng ký hộ kinh doanh cá thể: bán hàng tới đâu thì phải làm giấy phép",
    excerpt:
      "Bán online được vài tháng, đơn đều đều, và bạn bắt đầu lo có phải đăng ký kinh doanh không. Đây là câu trả lời và cách làm cho gọn.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Hộ kinh doanh đăng ký tại phòng tài chính kế hoạch của Uỷ ban nhân dân cấp huyện nơi đặt địa điểm kinh doanh, hoặc nộp trực tuyến qua cổng đăng ký kinh doanh. Hồ sơ gọn: giấy đề nghị đăng ký, bản sao giấy tờ tuỳ thân của chủ hộ, giấy tờ về địa điểm kinh doanh. Thời gian giải quyết thường vài ngày làm việc. Có giấy phép rồi thì tiếp theo là đăng ký thuế và tìm hiểu mức thuế khoán áp cho ngành nghề của bạn.",
    prepare: [
      "Căn cước của chủ hộ kinh doanh — người đứng tên chịu trách nhiệm",
      "Giấy tờ về địa điểm kinh doanh: sổ đỏ nếu nhà mình, hợp đồng thuê nếu đi thuê",
      "Tên dự định đặt cho hộ kinh doanh, nên nghĩ sẵn hai ba phương án phòng khi trùng",
      "Danh sách ngành nghề bạn định làm, ghi càng rõ càng tốt",
      "Con số vốn dự kiến và số lao động dự kiến, để điền vào tờ khai",
    ],
    steps: [
      {
        title: "Xác định mình có thuộc diện phải đăng ký không",
        detail:
          "Quy định có nêu một số trường hợp buôn bán nhỏ lẻ, thời vụ, thu nhập thấp không bắt buộc đăng ký. Nhưng ranh giới này thay đổi theo quy định từng thời kỳ và tuỳ ngành nghề. Cách chắc chắn nhất là ra hỏi thẳng bộ phận một cửa cấp huyện về đúng trường hợp của bạn.",
      },
      {
        title: "Cân nhắc hộ kinh doanh hay công ty",
        detail:
          "Hộ kinh doanh thủ tục nhẹ, sổ sách đơn giản, phù hợp quy mô nhỏ. Công ty thì nặng hơn về kế toán nhưng dễ xuất hoá đơn, dễ ký hợp đồng lớn và trách nhiệm tài sản tách bạch hơn. Chọn theo khách hàng của bạn là ai chứ đừng chọn theo cái nào nghe oai hơn.",
      },
      {
        title: "Nghĩ tên và tra xem có trùng không",
        detail:
          "Tên hộ kinh doanh không được trùng trong phạm vi cấp huyện. Chuẩn bị hai ba phương án để khỏi phải về nghĩ lại. Tránh dùng từ dễ gây nhầm với cơ quan nhà nước hay thương hiệu lớn.",
      },
      {
        title: "Ghi ngành nghề cho rộng một chút",
        detail:
          "Ghi đúng cái bạn đang làm và thêm những thứ bạn có thể làm trong năm tới. Bổ sung ngành nghề sau này phải làm thủ tục thay đổi, mất thêm một chuyến đi. Nhờ cán bộ tư vấn cách diễn đạt cho khớp danh mục ngành nghề.",
      },
      {
        title: "Chuẩn bị giấy tờ về địa điểm",
        detail:
          "Nhà mình thì mang bản sao giấy chứng nhận quyền sử dụng đất hoặc giấy tờ tương đương. Nhà thuê thì mang hợp đồng thuê. Bán online tại nhà cũng phải ghi một địa chỉ cụ thể, không để trống được.",
      },
      {
        title: "Điền giấy đề nghị đăng ký",
        detail:
          "Lấy mẫu tại bộ phận một cửa hoặc tải trên cổng đăng ký kinh doanh. Điền tên hộ, địa chỉ, ngành nghề, vốn, số lao động, thông tin chủ hộ. Vốn ghi bao nhiêu là do bạn tự kê, ghi vừa phải theo thực tế.",
      },
      {
        title: "Nộp hồ sơ và lấy giấy hẹn",
        detail:
          "Nộp tại bộ phận một cửa cấp huyện, hoặc nộp trực tuyến nếu địa phương bạn đã triển khai. Nhận giấy biên nhận có ghi ngày trả kết quả. Chụp lại giấy hẹn cho chắc.",
      },
      {
        title: "Theo dõi và bổ sung khi được yêu cầu",
        detail:
          "Hồ sơ thiếu thì cơ quan sẽ thông báo. Bổ sung sớm để khỏi phải nộp lại từ đầu. Giữ số điện thoại của cán bộ tiếp nhận nếu họ cho, hỏi trực tiếp bao giờ cũng nhanh hơn đoán.",
      },
      {
        title: "Nhận giấy chứng nhận đăng ký hộ kinh doanh",
        detail:
          "Đọc kỹ từng dòng ngay khi nhận: tên hộ, địa chỉ, ngành nghề, tên chủ hộ. Sai sót thì báo ngay tại chỗ. Chụp ảnh lưu và cất bản gốc chung với các giấy tờ quan trọng khác.",
      },
      {
        title: "Đăng ký thuế và hỏi rõ mức thuế khoán",
        detail:
          "Sau khi có giấy phép, làm việc với cơ quan thuế nơi kinh doanh. Hộ kinh doanh nhỏ thường nộp theo phương pháp khoán. Hỏi thẳng: ngành nghề của em thì mức khoán tính thế nào và một kỳ nộp bao nhiêu ạ. Biết trước con số để tính vào giá bán.",
      },
      {
        title: "Tách bạch tiền kinh doanh và tiền cá nhân",
        detail:
          "Mở một tài khoản riêng chỉ dùng cho việc bán hàng. Bước này không bắt buộc nhưng cực kỳ đáng làm: bạn nhìn ra lãi lỗ thật, và khi cần giải trình với cơ quan thuế thì có số liệu rõ ràng.",
      },
      {
        title: "Kiểm tra ngành nghề có cần giấy phép con không",
        detail:
          "Bán đồ ăn uống, mỹ phẩm, thuốc, dịch vụ lưu trú và nhiều ngành khác cần thêm điều kiện riêng như giấy chứng nhận vệ sinh an toàn thực phẩm. Hỏi ngay lúc đăng ký để khỏi bị động khi có đoàn kiểm tra.",
      },
    ],
    notes: [
      "Chủ hộ kinh doanh chịu trách nhiệm bằng toàn bộ tài sản của mình. Đây là khác biệt lớn so với công ty trách nhiệm hữu hạn — cân nhắc kỹ nếu bạn định vay vốn lớn hay nhập hàng giá trị cao.",
      "Đừng dùng dịch vụ làm giấy phép trọn gói giá rẻ mà không rõ họ nộp cái gì. Có trường hợp giấy tờ ghi sai ngành nghề hoặc sai địa chỉ, sửa lại còn mệt hơn tự làm từ đầu.",
      "Mọi con số về thời gian giải quyết, lệ phí, mức thuế khoán và điều kiện miễn đăng ký đều thay đổi theo quy định và theo địa phương — hỏi trực tiếp cơ quan tiếp nhận hồ sơ cho chắc.",
      "Có giấy phép rồi thì phải nhớ nghĩa vụ đi kèm: nộp thuế đúng kỳ, thông báo khi thay đổi địa điểm hoặc ngừng kinh doanh. Bỏ bê mấy việc này dễ dẫn tới bị xử lý sau này.",
    ],
    faq: [
      {
        q: "Bán hàng online trên sàn thương mại điện tử có phải đăng ký không?",
        a: "Tuỳ quy mô và tuỳ quy định hiện hành. Các sàn ngày càng yêu cầu người bán cung cấp thông tin thuế đầy đủ, nên nếu bạn bán đều đặn và có doanh thu ổn định thì nên chủ động hỏi cơ quan thuế địa phương.",
      },
      {
        q: "Một người đứng tên được mấy hộ kinh doanh?",
        a: "Quy định giới hạn số hộ kinh doanh một cá nhân được đăng ký. Hỏi rõ tại nơi tiếp nhận hồ sơ nếu bạn đã đứng tên một hộ khác rồi.",
      },
      {
        q: "Không có mặt bằng, bán tại nhà thì ghi địa chỉ nào?",
        a: "Ghi chính địa chỉ nhà bạn nếu đó là nơi bạn thực hiện hoạt động kinh doanh. Nhà thuê thì nên có sự đồng ý của chủ nhà, vì hợp đồng thuê là giấy tờ trong hồ sơ.",
      },
      {
        q: "Muốn ngừng kinh doanh thì có phải làm gì không?",
        a: "Có. Phải thông báo tạm ngừng hoặc làm thủ tục chấm dứt, đồng thời hoàn tất nghĩa vụ thuế. Bỏ mặc không báo là dễ phát sinh nợ thuế mà bạn không biết.",
      },
    ],
    sources: [],
  },
  {
    slug: "ho-so-xin-visa-du-lich-lan-dau",
    title: "Xin visa du lịch lần đầu: hồ sơ gồm gì và vì sao người ta bị từ chối",
    excerpt:
      "Bộ hồ sơ visa nhìn thì dài nhưng thực ra chỉ trả lời một câu hỏi duy nhất: bạn có lý do quay về không. Hiểu điều đó là chuẩn bị đúng ngay.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Mỗi nước một yêu cầu khác nhau, nhưng bộ khung chung gồm bốn nhóm: hộ chiếu và đơn xin visa, giấy tờ chứng minh công việc và thu nhập, giấy tờ chứng minh khả năng tài chính, và lịch trình kèm chỗ ở đã đặt. Nguồn thông tin đúng duy nhất là website chính thức của đại sứ quán hoặc lãnh sự quán nước đó — đừng làm theo bài chia sẻ trên mạng xã hội vì yêu cầu thay đổi liên tục. Nộp hồ sơ trước ngày đi càng sớm càng tốt.",
    prepare: [
      "Hộ chiếu còn hạn đủ dài theo yêu cầu của nước bạn xin, và còn trang trống để dán visa",
      "Ảnh thẻ đúng kích thước và phông nền mà nước đó yêu cầu — mỗi nơi một chuẩn khác nhau",
      "Sao kê tài khoản ngân hàng và giấy tờ chứng minh thu nhập vài tháng gần nhất",
      "Giấy xác nhận công việc hoặc giấy tờ về hộ kinh doanh, công ty nếu bạn tự làm chủ",
      "Lịch trình dự kiến, vé máy bay và đặt phòng — nhiều nơi chấp nhận bản đặt giữ chỗ chưa thanh toán",
    ],
    steps: [
      {
        title: "Vào đúng website chính thức trước tiên",
        detail:
          "Tìm trang của đại sứ quán hoặc lãnh sự quán nước bạn muốn đi, hoặc trung tâm tiếp nhận hồ sơ chính thức mà họ uỷ quyền. Danh mục giấy tờ trên đó là chuẩn duy nhất. Yêu cầu visa thay đổi thường xuyên nên bài viết trên mạng năm ngoái có thể đã sai.",
      },
      {
        title: "Hiểu điều họ thật sự muốn biết",
        detail:
          "Toàn bộ hồ sơ chỉ để trả lời: bạn có đủ tiền cho chuyến đi không, và bạn có lý do đủ mạnh để quay về không. Công việc ổn định, gia đình, nhà cửa, việc học của con — đó là những thứ chứng minh bạn sẽ về. Chuẩn bị hồ sơ theo hướng này thì tự khắc đủ.",
      },
      {
        title: "Kiểm tra hộ chiếu trước khi làm gì khác",
        detail:
          "Xem hạn còn lại và số trang trống. Nhiều nước yêu cầu hộ chiếu còn hạn tối thiểu một khoảng thời gian tính từ ngày rời khỏi nước họ. Hộ chiếu sắp hết hạn thì làm mới trước rồi hãy nộp visa, kẻo mất công cả bộ hồ sơ.",
      },
      {
        title: "Chụp ảnh đúng chuẩn của nước đó",
        detail:
          "Kích thước, tỷ lệ khuôn mặt, phông nền, có được đeo kính hay không — mỗi nước một kiểu. Ra tiệm ảnh và nói rõ: em chụp ảnh xin visa nước này. Tiệm quen làm sẽ biết chuẩn. Ảnh sai chuẩn là lý do bị trả hồ sơ rất phổ biến và rất đáng tiếc.",
      },
      {
        title: "Điền đơn xin visa cẩn thận",
        detail:
          "Điền đúng như trên hộ chiếu, không viết tắt, không bỏ trống mục nào. Mục nào không áp dụng thì ghi rõ là không áp dụng. Khai không trung thực là lý do bị từ chối nặng nhất và có thể ảnh hưởng tới các lần xin sau.",
      },
      {
        title: "Chuẩn bị giấy tờ công việc",
        detail:
          "Đi làm công ty thì xin hợp đồng lao động, quyết định cho nghỉ phép và giấy xác nhận đang làm việc. Tự kinh doanh thì mang giấy đăng ký hộ kinh doanh, giấy tờ nộp thuế. Nghỉ hưu thì giấy tờ hưu trí. Điểm chung là phải cho thấy bạn có ràng buộc ở Việt Nam.",
      },
      {
        title: "Chứng minh tài chính cho hợp lý",
        detail:
          "Sao kê tài khoản thể hiện dòng tiền vào ra đều đặn thường thuyết phục hơn một khoản tiền lớn mới nạp vào tuần trước. Số dư nên tương xứng với chi phí chuyến đi. Đừng vay tiền nạp vào cho đẹp sổ, hồ sơ kiểu đó dễ bị nhìn ra.",
      },
      {
        title: "Đặt vé và phòng theo dạng giữ chỗ",
        detail:
          "Nhiều nơi chấp nhận bản đặt chỗ chưa thanh toán. Đừng mua vé thật trước khi có visa, vì rớt visa là mất tiền. Kiểm tra kỹ yêu cầu của nước đó vì có nơi vẫn đòi vé đã xuất.",
      },
      {
        title: "Làm lịch trình rõ ràng theo ngày",
        detail:
          "Ghi từng ngày đi đâu, ở đâu, về ngày nào. Lịch trình hợp lý cho thấy bạn đi thật chứ không phải kiếm cớ. Đừng viết lịch trình dày đặc phi thực tế kiểu một ngày đi bốn thành phố.",
      },
      {
        title: "Mua bảo hiểm du lịch nếu được yêu cầu",
        detail:
          "Một số nơi bắt buộc có bảo hiểm du lịch với mức bảo hiểm tối thiểu và phạm vi phù hợp. Mua đúng loại họ yêu cầu, đọc kỹ thời hạn phải phủ trọn chuyến đi kể cả ngày đi và ngày về.",
      },
      {
        title: "Sắp hồ sơ theo đúng thứ tự họ liệt kê",
        detail:
          "Xếp giấy tờ theo thứ tự trong danh mục chính thức, kẹp gọn gàng, giấy tiếng Việt thì kèm bản dịch nếu được yêu cầu. Hồ sơ gọn gàng giúp người xét duyệt tìm nhanh và đó là điều tốt cho bạn.",
      },
      {
        title: "Nộp sớm và chuẩn bị cho buổi phỏng vấn nếu có",
        detail:
          "Nộp trước ngày đi càng xa càng an toàn vì thời gian xử lý có thể kéo dài vào mùa cao điểm. Nếu phải phỏng vấn thì ăn mặc gọn gàng, trả lời ngắn gọn và trung thực, biết rõ mình sẽ đi đâu làm gì. Đừng học thuộc bài kiểu trả lời máy móc.",
      },
      {
        title: "Bị từ chối thì đọc kỹ lý do trước khi nộp lại",
        detail:
          "Thư từ chối thường nêu lý do theo mã hoặc theo nhóm. Đọc kỹ để biết mình thiếu ở đâu — thiếu chứng minh tài chính, thiếu ràng buộc, hay hồ sơ không nhất quán. Sửa đúng chỗ đó rồi hãy nộp lại, nộp lại y nguyên thì kết quả cũng y nguyên.",
      },
    ],
    notes: [
      "Yêu cầu hồ sơ, lệ phí và thời gian xử lý khác nhau rất nhiều giữa các nước và thay đổi theo từng thời điểm. Website chính thức là nguồn duy nhất đáng tin — mọi con số bạn đọc ở nơi khác chỉ để tham khảo.",
      "Cảnh giác với dịch vụ hứa hẹn bao đậu visa hoặc làm giả giấy tờ chứng minh tài chính. Giấy tờ giả bị phát hiện sẽ khiến bạn bị từ chối và có thể bị ghi nhận lâu dài, ảnh hưởng tới cả những lần xin sau ở nước khác.",
      "Có sẵn lịch sử đi lại tới một số nước thường giúp hồ sơ thuyết phục hơn. Nếu đây là lần đầu, hãy bù lại bằng bộ hồ sơ thật gọn gàng và nhất quán.",
      "Đừng đặt tour không hoàn huỷ hay xin nghỉ phép cứng trước khi có visa trong tay. Chuẩn bị tinh thần cho khả năng phải dời chuyến.",
    ],
    faq: [
      {
        q: "Cần bao nhiêu tiền trong tài khoản mới đủ?",
        a: "Không có con số chung. Nguyên tắc là số dư phải tương xứng với chi phí chuyến đi và lịch sử tài khoản phải hợp lý. Xem hướng dẫn của chính nước bạn xin.",
      },
      {
        q: "Sinh viên hoặc người nội trợ không có thu nhập thì sao?",
        a: "Có thể nộp kèm giấy tờ của người bảo trợ tài chính như cha mẹ hoặc vợ chồng, cùng giấy tờ chứng minh quan hệ. Hỏi rõ nước đó có chấp nhận hình thức này không.",
      },
      {
        q: "Bị từ chối một lần thì có bị ghi vào hồ sơ mãi không?",
        a: "Lần từ chối được ghi nhận, nhưng nó không có nghĩa là bạn hết cửa. Rất nhiều người đậu ở lần nộp sau khi đã bổ sung đúng phần còn thiếu.",
      },
      {
        q: "Có nên thuê dịch vụ làm hồ sơ không?",
        a: "Dịch vụ uy tín giúp bạn sắp xếp giấy tờ và tránh sai sót hình thức. Nhưng không ai bảo đảm kết quả được, nên đừng tin lời hứa bao đậu và đừng để họ khai thay bạn những điều không đúng sự thật.",
      },
    ],
    sources: [],
  },
  {
    slug: "bao-hiem-nhan-tho-truoc-khi-ky",
    title: "Trước khi ký hợp đồng bảo hiểm nhân thọ: bảy câu phải hỏi và quyền đổi ý",
    excerpt:
      "Người tư vấn là người quen, buổi nói chuyện rất vui, và bạn ký. Vài năm sau mới biết mình đã mua thứ không hợp. Đây là mấy câu hỏi chặn được điều đó.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Đừng ký trong buổi gặp đầu tiên, dù người tư vấn có thân tới đâu. Yêu cầu xem bảng minh hoạ quyền lợi bằng văn bản, hỏi rõ đây là sản phẩm bảo vệ hay có yếu tố đầu tư, và hỏi thẳng nếu ngừng đóng sau vài năm thì nhận lại được bao nhiêu. Hợp đồng bảo hiểm nhân thọ thường có thời gian cân nhắc sau khi nhận hợp đồng — trong khoảng đó bạn có quyền đổi ý và được hoàn phí theo quy định của hợp đồng. Đọc kỹ đúng hợp đồng của mình để biết con số và số ngày cụ thể.",
    prepare: [
      "Bảng minh hoạ quyền lợi bản in hoặc bản mềm, xin trước buổi ký để đọc ở nhà",
      "Toàn bộ điều khoản hợp đồng mẫu, kể cả phần chữ nhỏ",
      "Một người thân tỉnh táo đọc cùng — nghe hai tai bao giờ cũng hơn",
      "Bảng chi tiêu hằng tháng của bạn, để biết mức phí có kham nổi trong nhiều năm không",
      "Danh sách bệnh và tình trạng sức khoẻ của bạn, để kê khai trung thực ngay từ đầu",
    ],
    steps: [
      {
        title: "Xác định mình thật sự cần gì trước khi nghe tư vấn",
        detail:
          "Bạn cần bảo vệ thu nhập cho gia đình khi chẳng may có chuyện, hay bạn muốn một kênh tích luỹ? Hai mục tiêu này dẫn tới hai loại sản phẩm khác nhau. Vào cuộc gặp mà không rõ mình cần gì thì rất dễ mua theo cảm xúc.",
      },
      {
        title: "Câu hỏi một: đây là sản phẩm gì",
        detail:
          "Hỏi thẳng: đây là bảo hiểm thuần bảo vệ, hay có gắn đầu tư, hay là sản phẩm liên kết ngân hàng ạ. Yêu cầu chỉ đúng tên sản phẩm trong hợp đồng. Nhiều hiểu lầm bắt đầu từ chỗ người mua tưởng mình đang gửi tiết kiệm.",
      },
      {
        title: "Câu hỏi hai: tôi được bảo vệ những rủi ro nào",
        detail:
          "Yêu cầu liệt kê cụ thể các trường hợp được chi trả và số tiền tương ứng. Quan trọng không kém là hỏi ngược lại: những trường hợp nào không được chi trả. Phần loại trừ nằm trong hợp đồng, đọc kỹ phần đó hơn cả phần quyền lợi.",
      },
      {
        title: "Câu hỏi ba: tôi phải đóng bao lâu và mỗi năm bao nhiêu",
        detail:
          "Nhân số tiền phí một năm với số năm phải đóng để ra tổng số tiền bạn cam kết. Con số này thường lớn hơn nhiều so với cảm giác lúc nghe phí theo tháng. Tự hỏi: thu nhập của mình có chắc chắn duy trì được suốt chừng đó năm không.",
      },
      {
        title: "Câu hỏi bốn: ngừng đóng giữa chừng thì sao",
        detail:
          "Đây là câu hỏi quan trọng nhất và cũng hay bị lướt qua nhất. Hỏi rõ: nếu năm thứ hai em không đóng nữa thì em nhận lại được bao nhiêu, năm thứ năm thì bao nhiêu. Yêu cầu chỉ vào bảng giá trị hoàn lại in trong hợp đồng chứ đừng nghe nói miệng.",
      },
      {
        title: "Câu hỏi năm: phần nào cam kết, phần nào chỉ là minh hoạ",
        detail:
          "Bảng minh hoạ thường có cột lãi suất giả định. Con số đẹp ở cột đó không phải cam kết. Hỏi thẳng: dòng nào trong bảng này là chắc chắn, dòng nào là giả định ạ. Người tư vấn tử tế sẽ trả lời rõ ràng.",
      },
      {
        title: "Câu hỏi sáu: có thời gian chờ không",
        detail:
          "Nhiều quyền lợi chỉ có hiệu lực sau một thời gian chờ kể từ khi hợp đồng có hiệu lực. Hỏi cụ thể từng quyền lợi. Mua xong tưởng được bảo vệ ngay rồi vỡ mộng lúc cần là chuyện xảy ra khá thường xuyên.",
      },
      {
        title: "Câu hỏi bảy: tôi có bao nhiêu ngày để đổi ý",
        detail:
          "Hợp đồng bảo hiểm nhân thọ thường có thời gian cân nhắc tính từ khi bạn nhận hợp đồng. Trong khoảng đó bạn có quyền huỷ và được hoàn phí theo quy định ghi trong hợp đồng. Hỏi rõ số ngày và cách gửi yêu cầu huỷ, ghi ngay ngày cuối cùng vào lịch điện thoại.",
      },
      {
        title: "Tự tay điền hồ sơ sức khoẻ và kê khai trung thực",
        detail:
          "Đừng để người khác điền hộ rồi bạn chỉ ký. Bệnh cũ, thuốc đang uống, tiền sử gia đình — khai đầy đủ. Che giấu để được duyệt nhanh là tự tay tạo lý do để công ty từ chối chi trả về sau, lúc mình cần nhất.",
      },
      {
        title: "Đọc lại hợp đồng ở nhà, không đọc trước mặt người tư vấn",
        detail:
          "Mang bản mềm về, ngồi một mình đọc phần quyền lợi, phần loại trừ, phần giá trị hoàn lại và phần phí. Ghi ra giấy những chỗ không hiểu và hỏi lại bằng tin nhắn để có bằng chứng bằng chữ.",
      },
      {
        title: "Kiểm tra đúng người và đúng kênh nộp phí",
        detail:
          "Tra mã số đại lý của người tư vấn trên website chính thức của công ty bảo hiểm. Nộp phí vào tài khoản của công ty, không đưa tiền mặt cho cá nhân. Giữ mọi biên lai.",
      },
      {
        title: "Sau khi nhận hợp đồng, kiểm tra ngay trên hệ thống của công ty",
        detail:
          "Đăng ký tài khoản khách hàng trên ứng dụng hoặc website của công ty bảo hiểm, xem hợp đồng đã lên hệ thống chưa và thông tin có khớp không. Đây cũng là cách phát hiện sớm nếu có sai lệch giữa lời tư vấn và hợp đồng thật.",
      },
      {
        title: "Không hài lòng thì dùng quyền huỷ trong thời gian cân nhắc",
        detail:
          "Đọc hợp đồng thấy khác hẳn những gì được nghe thì gửi yêu cầu huỷ bằng văn bản theo đúng hướng dẫn trong hợp đồng, trong thời hạn cho phép. Giữ bằng chứng đã gửi. Đây là quyền của bạn, không phải chuyện phải ngại.",
      },
    ],
    notes: [
      "Đừng ký vì nể người quen. Người tư vấn tốt sẽ không thúc bạn ký ngay trong buổi đầu, và sẽ vui vẻ đưa hợp đồng cho bạn mang về đọc.",
      "Bảo hiểm nhân thọ không phải tiết kiệm ngân hàng. Nếu mục tiêu của bạn là để dành tiền linh hoạt rút ra được thì đây không phải sản phẩm phù hợp.",
      "Số ngày cân nhắc, mức phí, tỷ lệ hoàn lại và điều kiện chi trả khác nhau theo từng sản phẩm và từng công ty, và có thể thay đổi theo quy định từng thời kỳ — con số đúng nằm trong chính hợp đồng của bạn.",
      "Mua phí vượt khả năng rồi bỏ giữa chừng là tình huống thiệt nhất. Nguyên tắc an toàn là mức phí không làm bạn phải bóp chặt chi tiêu thiết yếu.",
    ],
    faq: [
      {
        q: "Đã ký rồi mới thấy không hợp thì có huỷ được không?",
        a: "Trong thời gian cân nhắc thì huỷ được và hoàn phí theo quy định hợp đồng. Quá thời gian đó thì vẫn huỷ được nhưng giá trị nhận lại thường thấp hơn nhiều so với số đã đóng, nhất là trong vài năm đầu.",
      },
      {
        q: "Ngân hàng bảo phải mua bảo hiểm mới được vay, có đúng không?",
        a: "Việc mua bảo hiểm là tự nguyện. Nếu bạn cảm thấy bị ép buộc thì có quyền từ chối và phản ánh với ngân hàng cũng như công ty bảo hiểm. Đọc kỹ mọi giấy tờ bạn được đưa cho ký khi làm hồ sơ vay.",
      },
      {
        q: "Có nên mua cho con nhỏ không?",
        a: "Người cần được bảo vệ nhất là người tạo ra thu nhập chính của gia đình, vì nếu người đó gặp chuyện thì cả nhà bị ảnh hưởng. Cân nhắc thứ tự ưu tiên theo nguyên tắc đó.",
      },
      {
        q: "Làm sao biết người tư vấn có phải đại lý thật không?",
        a: "Tra mã số đại lý trên website chính thức của công ty bảo hiểm, hoặc gọi tổng đài của công ty để xác minh. Đừng chuyển tiền cho tài khoản cá nhân trong bất kỳ trường hợp nào.",
      },
    ],
    sources: [],
  },
  {
    slug: "mua-vang-lan-dau",
    title: "Mua vàng lần đầu: mua ở đâu, giữ giấy gì, và khoản chênh ít ai nói",
    excerpt:
      "Vàng không sinh lời như nhiều người tưởng ngay khi vừa mua, vì có một khoản chênh bạn mất luôn từ giây đầu tiên. Biết trước thì mua cho tỉnh.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Mua ở cửa hàng của thương hiệu lớn hoặc nơi được cấp phép kinh doanh vàng, tuyệt đối không mua qua người lạ hay qua mạng xã hội. Nhớ rằng giá mua vào và giá bán ra luôn chênh nhau, nghĩa là mua xong bán lại ngay là bạn đã lỗ khoản chênh đó. Giữ hoá đơn và bao bì nguyên seal, vì bán lại nơi khác hoặc bao bì rách thường bị trừ tiền. Chỉ dùng tiền nhàn rỗi, đừng vay để mua vàng.",
    prepare: [
      "Căn cước — nhiều nơi yêu cầu khi giao dịch giá trị lớn",
      "Số tiền đã xác định rõ, nên là tiền nhàn rỗi không đụng tới trong thời gian dài",
      "Điện thoại để xem giá niêm yết công khai ngay trước khi vào cửa hàng",
      "Một chỗ cất giữ an toàn đã tính trước — két sắt ở nhà hoặc dịch vụ giữ hộ",
      "Bìa nhựa để cất hoá đơn, vì hoá đơn quan trọng gần bằng miếng vàng",
    ],
    steps: [
      {
        title: "Hiểu hai loại vàng khác nhau thế nào",
        detail:
          "Vàng miếng của thương hiệu lớn thường dùng để tích trữ, thanh khoản cao. Vàng trang sức có thêm tiền công chế tác, và khi bán lại phần tiền công đó gần như không thu hồi được. Mua để tích trữ thì đừng mua trang sức.",
      },
      {
        title: "Nhìn kỹ hai cột giá trước khi quyết",
        detail:
          "Bảng giá luôn có giá mua vào và giá bán ra. Bạn mua theo giá cửa hàng bán ra, và khi bán lại thì theo giá cửa hàng mua vào. Khoảng chênh giữa hai cột là chi phí bạn chịu ngay lập tức. Nhìn con số đó trước khi quyết định mua.",
      },
      {
        title: "Chọn nơi mua cho đúng",
        detail:
          "Chỉ mua tại cửa hàng của thương hiệu lớn hoặc đơn vị được cấp phép kinh doanh vàng, có địa chỉ rõ ràng. Đừng mua qua người quen giới thiệu trên mạng, đừng mua vàng giá rẻ bất thường — vàng thật không có chuyện bán dưới giá thị trường.",
      },
      {
        title: "Xem giá niêm yết trước khi bước vào",
        detail:
          "Mở website chính thức của thương hiệu xem giá đang niêm yết. Vào cửa hàng thì đối chiếu với bảng giá tại quầy. Giá vàng biến động trong ngày nên chênh chút ít là bình thường, nhưng chênh nhiều thì hỏi cho rõ.",
      },
      {
        title: "Kiểm tra bao bì và số seri",
        detail:
          "Vàng miếng thường được ép trong bao bì có số seri và thông tin thương hiệu. Kiểm tra bao bì còn nguyên vẹn, không rách, không có dấu bóc dán lại. Chụp ảnh số seri lưu vào điện thoại ngay tại quầy.",
      },
      {
        title: "Yêu cầu hoá đơn ghi đầy đủ",
        detail:
          "Hoá đơn phải ghi rõ loại vàng, khối lượng, tuổi vàng, số seri, giá, ngày mua và có dấu của cửa hàng. Câu nên nói: anh chị xuất giúp em hoá đơn ghi đủ số seri nhé. Không có hoá đơn là bán lại rất thiệt.",
      },
      {
        title: "Đừng bóc bao bì vì tò mò",
        detail:
          "Bao bì rách hoặc đã bóc thường bị trừ tiền khi bán lại, đôi khi phải kiểm định lại. Cầm nguyên như vậy cất đi. Muốn ngắm thì ngắm qua lớp nhựa.",
      },
      {
        title: "Cất giữ cho an toàn và kín tiếng",
        detail:
          "Cất trong két sắt gắn cố định, hoặc dùng dịch vụ giữ hộ tại ngân hàng nếu số lượng lớn. Đừng kể chuyện mình có vàng ở nhà cho người ngoài nghe, kể cả trên mạng xã hội.",
      },
      {
        title: "Chụp ảnh và ghi lại thông tin dự phòng",
        detail:
          "Chụp hoá đơn, chụp seri, ghi ngày mua và giá mua vào một ghi chú riêng, đồng bộ lên tài khoản đám mây. Mất hoá đơn giấy thì ít nhất bạn còn thông tin để đối chiếu.",
      },
      {
        title: "Bán lại thì ưu tiên nơi đã mua",
        detail:
          "Bán lại đúng thương hiệu và đúng hệ thống thường được giá tốt hơn và ít bị vặn vẹo. Mang theo hoá đơn và bao bì nguyên vẹn. Gọi hỏi trước xem cửa hàng đó có thu mua không và cần mang gì.",
      },
      {
        title: "Tính lãi lỗ cho thật thà",
        detail:
          "Lấy số tiền bán ra trừ đi số tiền mua vào, không quên khoản chênh giữa hai cột giá. Nhiều người thấy giá vàng tăng thì tưởng mình lãi, nhưng tính đủ thì hoà hoặc lỗ. Ghi lại để lần sau quyết định tỉnh táo hơn.",
      },
      {
        title: "Đặt tỷ lệ hợp lý trong túi tiền của mình",
        detail:
          "Vàng là một phần trong tổng tài sản, không phải toàn bộ. Dồn hết tiền vào một thứ là rủi ro dù thứ đó là gì. Giữ quỹ dự phòng bằng tiền mặt trước đã, rồi mới tính chuyện tích trữ.",
      },
    ],
    notes: [
      "Tuyệt đối không vay tiền để mua vàng. Giá vàng lên xuống thất thường, còn lãi vay thì chạy đều mỗi ngày.",
      "Cảnh giác với các nhóm rủ mua vàng tài khoản, vàng ảo, sàn giao dịch vàng hứa lãi cao. Rất nhiều mô hình kiểu này là lừa đảo và bạn không hề nắm giữ vàng thật nào.",
      "Giá vàng, mức chênh mua bán và các quy định về giao dịch thay đổi theo thời điểm và theo chính sách — cứ hỏi trực tiếp tại cửa hàng chính thức trước khi giao dịch.",
      "Vàng trang sức mua để đeo thì cứ mua theo sở thích, nhưng đừng tính nó vào khoản đầu tư. Tiền công chế tác gần như mất khi bán lại.",
    ],
    faq: [
      {
        q: "Mua vàng nhẫn hay vàng miếng thì hơn?",
        a: "Tuỳ mục đích. Vàng miếng thương hiệu lớn thường thanh khoản tốt hơn khi bán lại. Vàng nhẫn tròn trơn có ưu điểm dễ mua với số tiền nhỏ. Cân nhắc theo số tiền và ý định giữ bao lâu.",
      },
      {
        q: "Mất hoá đơn có bán lại được không?",
        a: "Vẫn bán được nhưng có thể bị kiểm định lại và giá thu vào thấp hơn. Vì vậy hoá đơn nên được cất cùng chỗ với vàng.",
      },
      {
        q: "Mua vàng online có an toàn không?",
        a: "Chỉ nên giao dịch qua kênh chính thức của các thương hiệu lớn có địa chỉ rõ ràng. Tuyệt đối tránh giao dịch với cá nhân qua mạng xã hội, dù họ đưa ra bao nhiêu ảnh chụp hoá đơn.",
      },
      {
        q: "Nên mua khi giá đang lên hay đang xuống?",
        a: "Không ai đoán chắc được giá vàng. Cách an toàn hơn là mua rải đều theo thời gian bằng tiền nhàn rỗi, thay vì dồn một cục vào lúc thị trường đang sốt.",
      },
    ],
    sources: [],
  },
  {
    slug: "quet-ma-qr-tra-tien-an-toan",
    title: "Quét mã QR trả tiền: ba giây kiểm tra để khỏi chuyển tiền cho kẻ lạ",
    excerpt:
      "Mã QR dán đè lên mã của quán là chiêu cũ mà vẫn ăn tiền đều, vì gần như không ai nhìn tên người nhận trước khi bấm xác nhận.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Sau khi quét mã, dừng lại ba giây đọc tên người nhận và số tiền hiện trên màn hình trước khi bấm xác nhận. Tên người nhận phải khớp với tên quán hoặc tên người bạn đang trả tiền. Nhìn kỹ tấm mã dán ở quầy xem có bị dán đè, bị bong mép hay dán lệch không. Với mã lạ nhận qua tin nhắn hay mạng xã hội thì đừng quét, nhất là mã kèm lời hứa nhận thưởng hoặc hoàn tiền.",
    prepare: [
      "Ứng dụng ngân hàng hoặc ví điện tử đã cài đặt hạn mức chuyển tiền hợp lý",
      "Thói quen bật thông báo giao dịch để biết ngay khi có tiền ra vào",
      "Số tổng đài ngân hàng lưu sẵn trong danh bạ, để gọi ngay khi có sự cố",
      "Điện thoại đã khoá màn hình và có xác thực sinh trắc học khi mở app",
      "Một phút bình tĩnh — hầu hết vụ mất tiền xảy ra vì người ta vội",
    ],
    steps: [
      {
        title: "Nhìn tấm mã trước khi giơ điện thoại lên",
        detail:
          "Mã bị dán đè thường lộ mép giấy, lệch khung, chất liệu khác với bảng gốc, hoặc dán bằng băng dính trông tạm bợ. Thấy dấu hiệu lạ thì hỏi chủ quán: mã này của quán mình đúng không ạ. Câu hỏi nhẹ nhàng đó cứu được cả khoản tiền.",
      },
      {
        title: "Ưu tiên mã hiện trên màn hình máy tính tiền",
        detail:
          "Mã sinh ra trên màn hình thiết bị của quán an toàn hơn mã in dán tường, vì không ai dán đè lên màn hình được. Quán có cả hai thì chọn cái trên màn hình.",
      },
      {
        title: "Dừng lại đọc tên người nhận",
        detail:
          "Đây là bước quan trọng nhất cả bài. Sau khi quét, màn hình hiện tên chủ tài khoản nhận tiền. Đọc nó. Tên phải khớp với tên quán hoặc tên chủ quán. Thấy một cái tên lạ hoắc thì dừng lại và hỏi trước khi bấm tiếp.",
      },
      {
        title: "Kiểm tra số tiền trước khi xác nhận",
        detail:
          "Mã tĩnh thì bạn tự nhập số tiền, dễ gõ thừa một số không. Mã động thì số tiền có sẵn, phải khớp với hoá đơn. Đọc to số tiền trong đầu một lần trước khi bấm xác nhận.",
      },
      {
        title: "Không quét mã nhận qua tin nhắn hay mạng xã hội",
        detail:
          "Mã QR gửi kèm lời mời nhận quà, hoàn tiền, nhận thưởng, hoặc yêu cầu quét để xác minh tài khoản gần như luôn là bẫy. Quét xong có thể dẫn tới trang giả mạo yêu cầu bạn đăng nhập hoặc cấp quyền.",
      },
      {
        title: "Cảnh giác với mã dẫn tới trang đăng nhập",
        detail:
          "Quét mã trả tiền thì ứng dụng ngân hàng phải mở thẳng màn hình chuyển tiền. Nếu nó mở trình duyệt và hiện một trang đòi bạn nhập lại tên đăng nhập, mật khẩu hay mã xác thực thì thoát ra ngay. Đó là trang giả.",
      },
      {
        title: "Tuyệt đối không đọc mã xác thực cho ai",
        detail:
          "Không nhân viên ngân hàng, không chủ shop, không ai có quyền hỏi mã xác thực gửi về điện thoại bạn. Bất kỳ ai hỏi mã đó đều là kẻ lừa đảo, kể cả khi họ đọc vanh vách thông tin cá nhân của bạn.",
      },
      {
        title: "Chụp màn hình biên lai sau khi chuyển",
        detail:
          "Chụp lại màn hình thành công và đưa cho người bán xem. Vừa là bằng chứng đã trả, vừa giúp phát hiện nhanh nếu tiền vào nhầm tài khoản khác.",
      },
      {
        title: "Đợi người bán xác nhận đã nhận tiền",
        detail:
          "Đừng đi ngay khi vừa bấm xong. Hỏi một câu: anh chị nhận được chưa ạ. Người bán không thấy tiền vào trong khi bạn đã trừ tiền là dấu hiệu bạn vừa chuyển nhầm cho kẻ khác — và biết ngay lúc đó thì còn kịp xử lý.",
      },
      {
        title: "Chuyển nhầm thì gọi ngân hàng ngay lập tức",
        detail:
          "Gọi tổng đài ngân hàng của bạn, báo rõ thời điểm, số tiền và tài khoản nhận. Đồng thời tới công an phường trình báo và mang theo ảnh chụp biên lai. Càng nhanh càng có cơ hội, để qua ngày là tiền thường đã bị rút.",
      },
      {
        title: "Đặt hạn mức chuyển tiền trong ứng dụng",
        detail:
          "Vào phần cài đặt của ứng dụng ngân hàng, hạ hạn mức chuyển mỗi lần và mỗi ngày xuống mức bạn thật sự cần. Nếu chẳng may bị lừa thì thiệt hại có trần. Đây là việc làm một lần, mất năm phút.",
      },
      {
        title: "Nói cho người nhà biết, nhất là người lớn tuổi",
        detail:
          "Chỉ cho bố mẹ đúng một thói quen: quét xong thì đọc tên người nhận trước khi bấm. Không cần giảng giải dài dòng về công nghệ, chỉ một hành động đó thôi đã chặn được phần lớn các vụ.",
      },
    ],
    notes: [
      "Mã QR bản thân nó chỉ là hình chứa thông tin, không tự lấy được tiền của bạn. Cái nguy hiểm nằm ở chỗ bạn bấm xác nhận mà không đọc, hoặc bạn nhập thông tin vào trang giả sau khi quét.",
      "Chụp màn hình mã QR nhận tiền của mình rồi đăng công khai lên mạng xã hội là để lộ thông tin tài khoản. Chỉ gửi riêng cho người cần trả tiền.",
      "Người bán cũng nên kiểm tra tấm mã dán ở quầy mỗi ngày. Kẻ gian dán đè thường chọn quán đông khách và dán vào giờ cao điểm.",
      "Quy trình xử lý khi chuyển nhầm và khả năng lấy lại tiền tuỳ từng ngân hàng và từng vụ việc — gọi tổng đài ngay là việc đúng đắn nhất, đừng chờ đợi hay tự đi tìm người nhận.",
    ],
    faq: [
      {
        q: "Quét nhầm mã của kẻ gian rồi thì có lấy lại tiền được không?",
        a: "Không chắc chắn, phụ thuộc vào việc tiền đã bị rút chưa và kết quả xử lý của cơ quan chức năng. Vì vậy khâu kiểm tra tên người nhận trước khi bấm quan trọng hơn mọi cách khắc phục sau đó.",
      },
      {
        q: "Quét mã lạ mà chưa nhập gì thì có sao không?",
        a: "Thường thì chưa mất tiền, vì bạn chưa xác nhận giao dịch nào. Nhưng nếu nó mở một trang lạ thì hãy thoát ngay, đừng nhập bất cứ thông tin nào và đừng cài ứng dụng nào nó gợi ý.",
      },
      {
        q: "Trả tiền bằng mã QR có tốn phí không?",
        a: "Nhiều ngân hàng và ví miễn phí chuyển khoản trong nước, nhưng chính sách phí khác nhau và thay đổi theo thời điểm. Xem biểu phí của chính ngân hàng bạn dùng.",
      },
      {
        q: "Có nên dùng ví điện tử thay tài khoản ngân hàng khi mua hàng lạ không?",
        a: "Nạp một số tiền vừa phải vào ví và dùng ví cho các giao dịch nhỏ là cách giới hạn thiệt hại khá hiệu quả, vì kẻ gian không chạm được tới tài khoản chính của bạn.",
      },
    ],
    sources: [],
  },
  {
    slug: "thoat-vong-tra-toi-thieu-the-tin-dung",
    title: "Đang nợ thẻ tín dụng: thoát khỏi vòng trả tối thiểu trước khi lãi nuốt hết",
    excerpt:
      "Tháng nào cũng trả đúng số tối thiểu mà dư nợ chẳng giảm bao nhiêu. Đó không phải do bạn kém tính toán, đó là cách con số tối thiểu được thiết kế.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Trả số tối thiểu chỉ giúp bạn không bị ghi nợ quá hạn, chứ phần lớn số tiền đó đi vào lãi và phí, nên dư nợ gốc giảm rất chậm. Cách thoát ra: dừng quẹt thẻ ngay, gọi ngân hàng hỏi chính xác dư nợ và lãi suất đang áp, hỏi về phương án chuyển đổi trả góp dư nợ nếu ngân hàng có, rồi trả nhiều nhất có thể mỗi kỳ. Nếu có nhiều thẻ, dồn sức trả dứt điểm thẻ có lãi suất cao nhất trước.",
    prepare: [
      "Toàn bộ sao kê của các thẻ tín dụng bạn đang có, ít nhất ba kỳ gần nhất",
      "Số tổng đài của từng ngân hàng phát hành thẻ",
      "Một tờ giấy hoặc bảng tính, ghi từng thẻ một dòng: dư nợ, lãi suất, ngày đến hạn",
      "Bảng thu chi hằng tháng thật thà, kể cả các khoản nhỏ",
      "Tinh thần chuẩn bị cắt bớt chi tiêu trong vài tháng tới — không có cách nào dễ hơn",
    ],
    steps: [
      {
        title: "Ngừng dùng thẻ ngay hôm nay",
        detail:
          "Không thể tát nước ra khi vòi vẫn chảy vào. Rút thẻ ra khỏi ví, xoá thông tin thẻ đã lưu trên các ứng dụng mua sắm và ví điện tử. Bước này khó về mặt tâm lý nhưng là điều kiện bắt buộc.",
      },
      {
        title: "Gọi ngân hàng hỏi ba con số chính xác",
        detail:
          "Hỏi rõ: dư nợ hiện tại của em là bao nhiêu, lãi suất đang áp cho dư nợ này là bao nhiêu một năm, và nếu em trả hết ngay hôm nay thì tổng phải trả là bao nhiêu. Ghi lại ba con số này. Đừng đoán từ sao kê.",
      },
      {
        title: "Hiểu vì sao trả tối thiểu không thoát được",
        detail:
          "Số tối thiểu thường chỉ là một tỷ lệ nhỏ của dư nợ, và phần lớn dùng để trả lãi và phí phát sinh trong kỳ. Phần trừ vào gốc rất ít, nên tháng sau lãi lại tính trên gốc gần như cũ. Trả đúng tối thiểu là đứng yên tại chỗ chứ không phải đang trả nợ.",
      },
      {
        title: "Liệt kê tất cả các thẻ ra một bảng",
        detail:
          "Mỗi thẻ một dòng: tên ngân hàng, dư nợ, lãi suất, ngày sao kê, ngày đến hạn thanh toán. Nhìn thấy toàn cảnh trên một trang giấy thường làm người ta tỉnh ra và ngừng né tránh vấn đề.",
      },
      {
        title: "Hỏi ngân hàng về phương án chuyển đổi trả góp",
        detail:
          "Nhiều ngân hàng có chương trình chuyển dư nợ thẻ sang trả góp cố định với mức phí hoặc lãi thấp hơn lãi thẻ. Hỏi thẳng: em muốn chuyển dư nợ này sang trả góp thì điều kiện thế nào, tổng chi phí là bao nhiêu ạ. So sánh tổng phải trả chứ đừng chỉ nhìn số tiền mỗi tháng.",
      },
      {
        title: "Trả dứt điểm thẻ lãi cao nhất trước",
        detail:
          "Với các thẻ còn lại, cứ trả mức tối thiểu để không bị quá hạn, rồi dồn toàn bộ tiền dư vào thẻ có lãi suất cao nhất. Xong thẻ đó thì chuyển sang thẻ lãi cao thứ hai. Cách này giúp tổng tiền lãi bạn phải trả là ít nhất.",
      },
      {
        title: "Cắt ba khoản chi lớn nhất trong vài tháng",
        detail:
          "Mở sao kê ba tháng, khoanh ba khoản chi lớn nhất không thiết yếu. Tạm cắt chúng cho tới khi hết nợ. Đây là cách tạo ra tiền trả nợ nhanh hơn nhiều so với việc tiết kiệm lặt vặt vài chục nghìn.",
      },
      {
        title: "Tìm thêm nguồn trả nợ một lần",
        detail:
          "Bán món đồ không dùng, nhận thêm việc ngắn hạn, dùng khoản thưởng sắp tới. Một khoản tiền lớn trả vào gốc có tác dụng mạnh hơn nhiều so với chia nhỏ trả dần, vì nó cắt luôn phần lãi tính trên số đó.",
      },
      {
        title: "Trả trước ngày đến hạn vài ngày",
        detail:
          "Đừng trả đúng ngày cuối. Giao dịch có thể ghi nhận chậm và bạn thành quá hạn, chịu phí phạt cộng thêm việc bị ghi nhận vào lịch sử tín dụng. Đặt lời nhắc trong lịch điện thoại trước hạn ba ngày.",
      },
      {
        title: "Tuyệt đối không vay chỗ này trả chỗ kia",
        detail:
          "Vay ứng dụng cho vay nhanh để trả thẻ tín dụng là bước đầu của vòng xoáy nặng hơn, vì lãi và phí của các ứng dụng đó thường còn cao hơn. Nếu đang nghĩ tới phương án này thì hãy gọi ngân hàng trình bày hoàn cảnh trước.",
      },
      {
        title: "Không rút tiền mặt từ thẻ tín dụng",
        detail:
          "Rút tiền mặt từ thẻ tín dụng thường bị tính phí ngay và tính lãi từ ngày rút, không có thời gian miễn lãi như khi quẹt mua hàng. Đây là cách tốn kém nhất để lấy tiền và cũng là cách nhiều người rơi vào nợ sâu.",
      },
      {
        title: "Trả xong rồi thì quyết định giữ hay đóng thẻ",
        detail:
          "Hết nợ thì tự hỏi thật lòng: mình có kiểm soát được thẻ không. Nếu có, giữ lại một thẻ và luôn trả toàn bộ dư nợ mỗi kỳ. Nếu không, đóng thẻ và yêu cầu ngân hàng xác nhận bằng văn bản là đã tất toán, đừng chỉ cắt thẻ rồi thôi.",
      },
      {
        title: "Kiểm tra lịch sử tín dụng sau khi tất toán",
        detail:
          "Vài tuần sau khi trả hết, tự tra thông tin tín dụng của mình xem khoản nợ đã được ghi nhận tất toán chưa. Sai sót trong dữ liệu tín dụng có thể ảnh hưởng tới các lần vay sau này, phát hiện sớm thì dễ điều chỉnh.",
      },
    ],
    notes: [
      "Lãi suất thẻ tín dụng thường thuộc nhóm cao nhất trong các hình thức vay. Vì vậy trả nợ thẻ nên được ưu tiên hơn hầu hết mục tiêu tài chính khác, kể cả gửi tiết kiệm.",
      "Đừng né tránh cuộc gọi từ ngân hàng khi đang khó khăn. Chủ động gọi trước và trình bày hoàn cảnh thường mở ra phương án, còn im lặng thì chỉ dẫn tới nợ quá hạn và ghi nhận xấu trong lịch sử tín dụng.",
      "Cách tính lãi, mức phí, tỷ lệ trả tối thiểu và điều kiện chuyển đổi trả góp khác nhau giữa các ngân hàng và thay đổi theo thời điểm — hỏi trực tiếp tổng đài ngân hàng của bạn để có con số đúng.",
      "Cảnh giác với dịch vụ quảng cáo đáo hạn thẻ hoặc rút tiền thẻ tín dụng giá rẻ. Bạn phải giao thẻ và thông tin cho người lạ, và chi phí thật thường cao hơn quảng cáo nhiều.",
    ],
    faq: [
      {
        q: "Trả tối thiểu có bị ghi nợ xấu không?",
        a: "Trả đúng và đủ mức tối thiểu trước hạn thì thường không bị ghi quá hạn. Nhưng dư nợ của bạn gần như không giảm, nên đó chỉ là cách cầm cự chứ không phải giải pháp.",
      },
      {
        q: "Đóng thẻ tín dụng có ảnh hưởng điểm tín dụng không?",
        a: "Có thể ảnh hưởng phần nào vì nó thay đổi tổng hạn mức và lịch sử của bạn. Nhưng giữ một cái thẻ mà bạn không kiểm soát được thì rủi ro lớn hơn nhiều. Cân theo hoàn cảnh thật của mình.",
      },
      {
        q: "Ngân hàng gọi mời nâng hạn mức thì có nên nhận không?",
        a: "Đang trong quá trình trả nợ thì đừng nhận. Hạn mức cao hơn không phải là tiền của bạn, nó chỉ làm tăng khả năng bạn tiêu thêm.",
      },
      {
        q: "Không đủ khả năng trả nữa thì làm gì?",
        a: "Gọi ngân hàng và nói thẳng hoàn cảnh, hỏi về các phương án cơ cấu lại khoản nợ. Đừng vay nóng bên ngoài và đừng bỏ mặc không liên lạc — cả hai đều làm tình hình xấu đi nhanh.",
      },
    ],
    sources: [],
  },
  {
    slug: "nhan-dien-app-dau-tu-hua-lai-cao",
    title: "App đầu tư hứa lãi cao mỗi ngày: sáu dấu hiệu nhận ra trước khi mất tiền",
    excerpt:
      "Rút được tiền vài lần đầu là phần thiết kế của cái bẫy, không phải bằng chứng nó thật. Đây là những dấu hiệu nhận ra từ sớm.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Không có kênh đầu tư hợp pháp nào cam kết lãi cố định cao mỗi ngày và không rủi ro. Dấu hiệu cảnh báo gồm: hứa lợi nhuận cố định, thưởng khi rủ thêm người, ép nạp thêm mới cho rút, chuyển tiền vào tài khoản cá nhân, tổ chức không được cấp phép, và luôn gấp gáp. Tuyệt đối không đọc mã xác thực cho bất kỳ ai và không cài ứng dụng ngoài kho ứng dụng chính thức. Nghi ngờ thì dừng ngay, đừng nạp thêm một đồng nào để gỡ.",
    prepare: [
      "Một quy tắc tự đặt ra: không chuyển tiền cho ai trong vòng hai mươi bốn giờ kể từ khi nghe lời mời đầu tư",
      "Danh sách nơi tra cứu giấy phép hoạt động của các tổ chức tài chính chính thức",
      "Một người thân bạn tin tưởng, để kể lại trước khi quyết định bỏ tiền",
      "Điện thoại chỉ cài ứng dụng từ kho ứng dụng chính thức, không cài file lạ",
      "Thói quen chụp màn hình mọi lời hứa hẹn để làm bằng chứng nếu cần trình báo",
    ],
    steps: [
      {
        title: "Nghe con số lợi nhuận và tự hỏi một câu",
        detail:
          "Nếu có cách kiếm lãi cao chắc chắn mỗi ngày mà không rủi ro, tại sao người ta phải đi mời bạn thay vì tự làm và vay ngân hàng để làm lớn hơn? Câu hỏi đơn giản này lọc được phần lớn các mô hình lừa đảo.",
      },
      {
        title: "Dấu hiệu một: cam kết lợi nhuận cố định",
        detail:
          "Mọi khoản đầu tư thật đều có rủi ro và không ai cam kết được mức sinh lời. Nghe thấy các cụm như lãi cố định mỗi ngày, bảo toàn vốn, không bao giờ lỗ thì đó là dấu hiệu rõ nhất.",
      },
      {
        title: "Dấu hiệu hai: thưởng khi rủ thêm người",
        detail:
          "Khi phần lớn thu nhập đến từ việc mời người mới chứ không phải từ hoạt động kinh doanh thật, thì dòng tiền của người vào sau đang trả cho người vào trước. Mô hình đó chắc chắn sẽ sập, chỉ là sớm hay muộn.",
      },
      {
        title: "Dấu hiệu ba: chuyển tiền vào tài khoản cá nhân",
        detail:
          "Tổ chức tài chính hợp pháp nhận tiền qua tài khoản mang tên tổ chức. Được yêu cầu chuyển vào tài khoản mang tên một cá nhân, hoặc chuyển qua ví lạ, tiền mã hoá thì dừng lại ngay tại đó.",
      },
      {
        title: "Dấu hiệu bốn: nạp thêm mới được rút",
        detail:
          "Đây là cú chốt của hầu hết vụ lừa. Bạn xin rút tiền, hệ thống báo lỗi và yêu cầu nạp thêm để đóng thuế, phí xác minh, phí giải ngân. Mỗi đồng nạp thêm là mất thêm. Tới bước này thì đừng nạp nữa dù họ nói gì.",
      },
      {
        title: "Dấu hiệu năm: không tra được giấy phép",
        detail:
          "Tra tên tổ chức trên các nguồn chính thức của cơ quan quản lý. Không tìm thấy, hoặc chỉ thấy website mới lập, không địa chỉ rõ ràng, không thông tin người chịu trách nhiệm thì đủ để bạn quay lưng.",
      },
      {
        title: "Dấu hiệu sáu: luôn gấp gáp",
        detail:
          "Suất cuối cùng, ưu đãi hết hạn trong hai giờ, nhóm sắp đóng. Sự gấp gáp là công cụ để bạn không kịp suy nghĩ và không kịp hỏi người thân. Cứ thấy giục là cứ chậm lại.",
      },
      {
        title: "Cảnh giác với chuyện rút được tiền lần đầu",
        detail:
          "Nhiều mô hình cho bạn rút vài lần nhỏ rất trơn tru để tạo niềm tin, rồi khuyến khích bạn nạp một khoản lớn. Rút được không phải bằng chứng nó thật — đó là chi phí họ bỏ ra để câu khoản lớn hơn.",
      },
      {
        title: "Không cài ứng dụng ngoài kho chính thức",
        detail:
          "Được gửi file cài đặt qua tin nhắn hoặc đường dẫn lạ thì đừng cài. Ứng dụng kiểu này có thể xin quyền đọc tin nhắn, xem màn hình và chiếm quyền điều khiển điện thoại của bạn.",
      },
      {
        title: "Không bao giờ đọc mã xác thực cho ai",
        detail:
          "Không nhân viên ngân hàng, không sàn giao dịch, không cơ quan nào có quyền hỏi mã xác thực gửi về máy bạn. Bất kỳ ai hỏi mã đó đều là kẻ lừa đảo, kể cả khi họ đọc đúng tên, số căn cước và địa chỉ của bạn.",
      },
      {
        title: "Chậm lại hai mươi bốn giờ và kể cho một người",
        detail:
          "Đặt quy tắc cứng: không chuyển đồng nào trong vòng một ngày kể từ khi nghe lời mời, và phải kể cho một người thân trước. Kẻ lừa đảo sợ nhất hai thứ là thời gian và người thứ ba.",
      },
      {
        title: "Đã trót chuyển tiền thì hành động ngay",
        detail:
          "Gọi tổng đài ngân hàng báo giao dịch nghi ngờ bị lừa đảo, đề nghị hỗ trợ. Ra công an nơi bạn cư trú trình báo, mang theo ảnh chụp toàn bộ tin nhắn, biên lai chuyển tiền và thông tin tài khoản nhận. Càng sớm càng có cơ hội.",
      },
      {
        title: "Đừng tin dịch vụ hứa lấy lại tiền bị lừa",
        detail:
          "Sau khi bạn mất tiền, sẽ có người nhắn tin nhận thu hồi tiền lừa đảo với phí trả trước. Đó là lớp lừa thứ hai nhắm vào chính nạn nhân. Chỉ làm việc qua ngân hàng và cơ quan công an.",
      },
      {
        title: "Kể lại cho người thân, nhất là người lớn tuổi",
        detail:
          "Không cần kể chi tiết kỹ thuật, chỉ cần một câu: nhà mình không chuyển tiền cho ai khi chưa gọi cho con. Một quy tắc chung của cả nhà bảo vệ tốt hơn nhiều bài giảng dài.",
      },
    ],
    notes: [
      "Bị lừa không có nghĩa là bạn ngu. Các mô hình này được dựng rất công phu, có cả nhóm chat toàn người đóng vai nhà đầu tư đang lãi. Việc cần làm là trình báo sớm, không phải tự trách mình.",
      "Đừng nạp thêm để gỡ. Đây là sai lầm khiến thiệt hại nhân lên nhiều lần và cũng là điều kẻ lừa đảo trông chờ nhất ở nạn nhân.",
      "Kênh đầu tư hợp pháp có giấy phép, có hợp đồng rõ ràng, có cảnh báo rủi ro và không bao giờ giục bạn quyết trong vài giờ. Đó là tiêu chuẩn tối thiểu để bạn cân nhắc.",
      "Cách thức lừa đảo thay đổi liên tục theo thời gian. Nguyên tắc bền nhất vẫn là: lợi nhuận cao bất thường luôn đi kèm rủi ro cao bất thường, không có ngoại lệ.",
    ],
    faq: [
      {
        q: "Người rủ tôi là bạn thân, chẳng lẽ bạn tôi lừa tôi?",
        a: "Rất nhiều trường hợp người rủ cũng là nạn nhân, họ tin thật và đang cố kéo bạn vào để gỡ vốn của chính mình. Tình bạn không phải là bằng chứng cho mô hình kinh doanh.",
      },
      {
        q: "Tài khoản trên app đang hiện lãi lớn, sao lại nói là giả?",
        a: "Con số hiện trên màn hình do họ tự lập trình, không phải tiền thật của bạn. Phép thử duy nhất là rút ra được hay không, và bạn thường chỉ biết câu trả lời khi đã nạp nhiều.",
      },
      {
        q: "Có cách nào kiểm tra một tổ chức có được cấp phép không?",
        a: "Có, hãy tra trên các nguồn công bố chính thức của cơ quan quản lý nhà nước tương ứng với lĩnh vực đó, và gọi tới đường dây chính thức để xác minh. Đừng dùng số điện thoại do chính người mời cung cấp.",
      },
      {
        q: "Đã báo công an rồi thì bao lâu lấy lại được tiền?",
        a: "Không có câu trả lời chung, và không phải vụ nào cũng thu hồi được. Trình báo vẫn cần thiết vì nó giúp truy vết và ngăn thêm người khác bị lừa. Đừng để hy vọng lấy lại tiền khiến bạn rơi vào lớp lừa tiếp theo.",
      },
    ],
    sources: [],
  },
];
