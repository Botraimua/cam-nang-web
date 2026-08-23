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
];
