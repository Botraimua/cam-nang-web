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
];
