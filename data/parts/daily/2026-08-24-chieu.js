// Bài đăng ngày 2026-08-24 — khung 18h chiều
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-24";

export const day20260824chieu = [
  // ═══════════════════════ TRẺ EM ═══════════════════════
  {
    slug: "tre-bieng-an-xu-ly",
    title: "Trẻ biếng ăn: vì sao ép ăn càng làm mọi thứ tệ hơn",
    excerpt:
      "Bữa ăn kéo dài một tiếng, cả nhà chạy theo dỗ, con vẫn ngậm. Vấn đề thường không nằm ở món ăn mà ở chính cuộc chiến quanh bàn ăn.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Nguyên tắc được nhiều chuyên gia dinh dưỡng nhi nhắc tới: cha mẹ quyết định ăn GÌ, ăn KHI NÀO, ăn Ở ĐÂU — còn con quyết định ăn BAO NHIÊU và có ăn hay không. Ép ăn, dỗ bằng điện thoại, chạy rong khắp xóm đều làm trẻ mất khả năng tự nhận biết đói no và khiến bữa ăn thành nỗi sợ. Nhưng nếu con sụt cân, không tăng cân nhiều tháng, hoặc bỏ ăn kèm dấu hiệu bệnh thì phải đi khám.",
    prepare: [
      "Biểu đồ tăng trưởng của con trong sổ khám sức khoẻ — đây là dữ kiện quan trọng nhất",
      "Ghi lại con thật sự ăn gì trong ba ngày, kể cả sữa và đồ ăn vặt",
      "Một khung giờ ăn cố định cho cả nhà",
      "Sự thống nhất giữa cha mẹ và ông bà — trẻ nhận ra ngay chỗ nào dỗ được",
    ],
    steps: [
      {
        title: "Nhìn biểu đồ tăng trưởng trước khi lo lắng",
        detail:
          "Nhiều trẻ ăn ít theo mắt người lớn nhưng vẫn tăng cân và cao đều theo biểu đồ. Đó là trẻ ăn đủ với nhu cầu của mình. Ngược lại, nếu đường tăng trưởng đi ngang hoặc tụt nhiều tháng thì đó là dấu hiệu cần đi khám chứ không phải chuyện điều chỉnh bữa ăn.",
      },
      {
        title: "Ghi lại con thật sự ăn gì trong ba ngày",
        detail:
          "Kể cả sữa, sữa chua, bánh, nước ngọt, và những miếng con nhặt ăn giữa buổi. Rất nhiều trẻ biếng ăn bữa chính vì đã no bằng sữa và đồ vặt. Bản ghi này thường trả lời được câu hỏi ngay ở bước đầu tiên.",
      },
      {
        title: "Phân vai rõ ràng giữa cha mẹ và con",
        detail:
          "Cha mẹ quyết định món gì, giờ nào, ngồi ở đâu. Con quyết định ăn bao nhiêu và có ăn hay không. Giữ đúng ranh giới này là thay đổi lớn nhất, và cũng khó nhất vì nó đòi hỏi người lớn buông phần kiểm soát.",
      },
      {
        title: "Cắt hoàn toàn đồ ăn vặt trước bữa",
        detail:
          "Không sữa, không bánh, không trái cây trong khoảng một tới hai tiếng trước bữa chính. Trẻ phải thật sự đói mới ăn. Đây là bước đơn giản mà nhiều nhà bỏ qua vì sợ con đói.",
      },
      {
        title: "Giới hạn bữa ăn trong khoảng ba mươi phút",
        detail:
          "Hết giờ thì dọn, không phàn nàn, không dỗ thêm. Con đói tới bữa sau thì đó là bài học tự nhiên. Bữa ăn kéo dài một tiếng dạy trẻ rằng thời gian ăn là vô hạn và cứ ngậm là được chiều.",
      },
      {
        title: "Bỏ điện thoại và tivi khỏi bàn ăn",
        detail:
          "Xem màn hình lúc ăn làm trẻ ăn theo phản xạ và mất hoàn toàn cảm nhận đói no. Thói quen này rất khó bỏ nhưng bỏ được thì mọi thứ khác dễ hơn nhiều. Cắt dần trong một hai tuần thay vì dừng đột ngột.",
      },
      {
        title: "Đừng chạy rong hay dỗ ăn",
        detail:
          "Bế đi khắp xóm để đút từng thìa dạy trẻ rằng ăn là việc của người lớn, không phải nhu cầu của mình. Ăn tại bàn, ngồi ghế, cùng cả nhà — kể cả khi những ngày đầu con ăn rất ít.",
      },
      {
        title: "Cho con ăn cùng cả nhà",
        detail:
          "Trẻ học ăn bằng cách nhìn người khác ăn. Bữa cơm chung, cùng món, có không khí vui vẻ có tác dụng hơn nhiều so với việc cho con ăn riêng trước rồi người lớn ăn sau.",
      },
      {
        title: "Cho con tự xúc dù bẩn",
        detail:
          "Trẻ tự xúc thì kiểm soát được lượng ăn và thấy bữa ăn là việc của mình. Giai đoạn đầu bẩn và chậm, nhưng đó là khoản đầu tư. Trải một tấm nilon dưới ghế cho đỡ mệt phần dọn dẹp.",
      },
      {
        title: "Giới thiệu món mới nhiều lần mà không ép",
        detail:
          "Trẻ thường cần gặp một món nhiều lần trước khi chịu thử. Cứ để món đó trên bàn, con không ăn cũng không sao, không nhận xét gì. Ép thử một miếng thường tạo ra sự chống đối kéo dài với chính món đó.",
      },
      {
        title: "Không dùng đồ ngọt làm phần thưởng",
        detail:
          "Ăn hết cơm thì được kẹo — câu này dạy trẻ rằng cơm là việc khổ và kẹo là phần thưởng. Nó làm hỏng quan hệ của trẻ với thức ăn theo cách rất bền.",
      },
      {
        title: "Giữ bình tĩnh và kiên trì vài tuần",
        detail:
          "Vài ngày đầu con sẽ ăn ít hơn và cả nhà sẽ lo. Đó là giai đoạn bình thường của quá trình điều chỉnh. Nếu vẫn theo dõi thấy con chơi khoẻ và tăng trưởng bình thường thì cứ tiếp tục.",
      },
    ],
    notes: [
      "ĐƯA CON ĐI KHÁM NGAY nếu: sụt cân, không tăng cân trong nhiều tháng, bỏ ăn kèm sốt hoặc nôn, nuốt đau, sặc khi ăn, mệt lả, hoặc con dưới sáu tháng bú kém rõ rệt.",
      "Biếng ăn kéo dài đôi khi có nguyên nhân y tế: thiếu máu thiếu sắt, thiếu kẽm, vấn đề răng miệng, trào ngược, hoặc bệnh lý khác. Hãy đi khám thay vì tự mua thuốc kích thích ăn.",
      "KHÔNG tự mua thuốc, siro kích thích ăn hay thực phẩm chức năng theo lời mách. Một số sản phẩm trôi nổi từng bị phát hiện chứa chất không được phép dùng cho trẻ.",
      "Bài này là kinh nghiệm nuôi con phổ thông, KHÔNG PHẢI TƯ VẤN Y KHOA hay tư vấn dinh dưỡng. Mọi lo lắng về tăng trưởng của con nên được bác sĩ nhi đánh giá.",
    ],
    faq: [
      {
        q: "Con chỉ ăn cơm với nước mắm thì có sao không?",
        a: "Trong ngắn hạn thì không, nhưng kéo dài thì thiếu chất. Cứ để món khác trên bàn mà không ép, và giữ nguyên tắc không có món thay thế riêng. Trẻ mở rộng khẩu vị chậm nhưng có mở rộng.",
      },
      {
        q: "Ông bà cứ dỗ và chạy rong thì làm sao?",
        a: "Nói riêng với ông bà về nguyên tắc, giải thích bằng mục tiêu chung là con tự ăn được. Nếu chưa thống nhất được ngay thì bắt đầu bằng một bữa trong ngày do cha mẹ phụ trách hoàn toàn.",
      },
      {
        q: "Có nên cho uống sữa bù khi con không ăn cơm?",
        a: "Sữa nhiều làm no và càng khiến con không ăn bữa chính, tạo vòng luẩn quẩn. Hỏi bác sĩ nhi về lượng sữa phù hợp với độ tuổi của con thay vì dùng sữa để bù mọi bữa.",
      },
      {
        q: "Bao lâu thì thấy thay đổi?",
        a: "Thường vài tuần tới vài tháng, và giai đoạn đầu có thể tệ hơn trước khi tốt lên. Điều quan trọng là cả nhà thống nhất và không quay lại cách cũ giữa chừng.",
      },
    ],
    sources: [],
  },
  {
    slug: "giac-ngu-tre-so-sinh",
    title: "Giấc ngủ của trẻ sơ sinh: xây nếp ngủ và những điều an toàn bắt buộc",
    excerpt:
      "Cả nhà kiệt sức vì con thức đêm. Có vài nguyên tắc an toàn không được bỏ, và vài thói quen nhỏ giúp nếp ngủ hình thành sớm hơn.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tre-em",
    author: null,
    quickAnswer:
      "An toàn trước tiên: cho trẻ NẰM NGỬA khi ngủ, trên mặt phẳng chắc, không gối mềm, không chăn dày, không thú bông, không để trẻ ngủ trên ghế sofa hay trên người đang buồn ngủ. Về nếp ngủ, việc hiệu quả nhất là phân biệt ngày và đêm: ban ngày sáng và có tiếng động bình thường, ban đêm tối, yên và ít tương tác. Trẻ sơ sinh thức đêm là bình thường về mặt sinh học, nếp ngủ hình thành dần theo tháng tuổi.",
    prepare: [
      "Cũi hoặc nôi có mặt phẳng chắc, không đệm quá mềm",
      "Túi ngủ hoặc khăn quấn phù hợp thay cho chăn rời",
      "Đèn ngủ ánh sáng dịu, dùng cho các cữ ban đêm",
      "Sự phân công giữa hai vợ chồng để cả hai đều được ngủ",
    ],
    steps: [
      {
        title: "Nắm các nguyên tắc an toàn trước mọi thứ khác",
        detail:
          "Trẻ ngủ NẰM NGỬA, trên mặt phẳng chắc, trong cũi riêng nhưng cùng phòng với cha mẹ trong những tháng đầu. Không gối mềm, không chăn dày, không thú bông, không quây cũi dày trong khu vực ngủ. Đây là những khuyến cáo về an toàn giấc ngủ, không phải chuyện tiện nghi.",
      },
      {
        title: "Tránh những chỗ ngủ nguy hiểm",
        detail:
          "Không để trẻ ngủ trên ghế sofa, ghế bành, đệm nước, hay trên ngực người lớn đang buồn ngủ. Không để trẻ ngủ trên ghế ngồi ô tô hay xe đẩy trong thời gian dài ngoài lúc di chuyển.",
      },
      {
        title: "Hiểu rằng thức đêm là bình thường ở giai đoạn đầu",
        detail:
          "Dạ dày trẻ sơ sinh nhỏ nên cần bú đêm, và nhịp ngày đêm chưa hình thành trong những tuần đầu. Kỳ vọng con ngủ xuyên đêm quá sớm chỉ tạo áp lực cho cả nhà. Nếp ngủ hình thành dần theo tháng tuổi.",
      },
      {
        title: "Dạy con phân biệt ngày và đêm",
        detail:
          "Ban ngày: mở rèm cho sáng, sinh hoạt bình thường có tiếng động, chơi và trò chuyện khi con thức. Ban đêm: đèn tối, không nói chuyện nhiều, thay tã và cho bú xong là đặt xuống. Đây là việc đơn giản nhất mà có tác dụng rõ nhất.",
      },
      {
        title: "Nhận ra dấu hiệu buồn ngủ sớm",
        detail:
          "Dụi mắt, ngáp, nhìn xa xăm, giảm tương tác, quay mặt đi. Đặt con xuống ở giai đoạn này dễ hơn nhiều so với chờ tới lúc con khóc gắt — lúc đó con đã quá mệt và càng khó vào giấc.",
      },
      {
        title: "Xây một trình tự trước khi ngủ cố định",
        detail:
          "Cùng thứ tự mỗi tối: tắm, thay đồ ngủ, cho bú, hát ru hoặc đọc sách, tắt đèn. Trình tự lặp lại trở thành tín hiệu cho cơ thể con. Ngắn thôi, khoảng hai mươi tới ba mươi phút, và giữ nguyên thứ tự.",
      },
      {
        title: "Đặt con xuống khi còn lơ mơ, chưa ngủ hẳn",
        detail:
          "Nếu con luôn ngủ trên tay rồi mới được đặt xuống, con sẽ giật mình khi tỉnh giấc giữa đêm ở một nơi khác. Tập đặt xuống lúc con còn lơ mơ giúp con học cách tự vào giấc. Việc này cần nhiều lần chứ không thành công ngay.",
      },
      {
        title: "Đừng vội bế lên ngay khi con cựa quậy",
        detail:
          "Trẻ có những tiếng động, cựa mình, thậm chí ọ ẹ ngắn giữa các chu kỳ ngủ mà vẫn đang ngủ. Chờ một chút xem con có tự ngủ lại không trước khi can thiệp. Bế lên ngay đôi khi chính là thứ đánh thức con.",
      },
      {
        title: "Giữ phòng ngủ mát và tối",
        detail:
          "Phòng quá nóng và mặc quá nhiều lớp là điều nên tránh. Sờ gáy con để kiểm nhiệt độ thay vì sờ tay chân — tay chân trẻ thường mát hơn. Rèm tối giúp giấc ngày và giấc đêm không lẫn vào nhau.",
      },
      {
        title: "Cân nhắc tiếng ồn trắng",
        detail:
          "Tiếng ồn đều đều giúp che các âm thanh đột ngột trong nhà. Đặt xa cũi và mở ở âm lượng vừa phải. Đây là công cụ hữu ích nhưng không phải thứ bắt buộc.",
      },
      {
        title: "Chia ca giữa hai vợ chồng",
        detail:
          "Một người lo nửa đêm đầu, người kia lo nửa sau, để mỗi người có được một quãng ngủ liền. Người mẹ đang cho bú thì người kia lo phần thay tã, dỗ và đưa con tới. Kiệt sức của cha mẹ là vấn đề sức khoẻ thật, không phải chuyện phải chịu đựng.",
      },
      {
        title: "Chuẩn bị tinh thần cho những giai đoạn thoái lui",
        detail:
          "Con đang ngủ tốt rồi bỗng thức đêm trở lại khi mọc răng, ốm, hoặc học kỹ năng mới như lẫy, bò. Đây là giai đoạn tạm thời. Giữ nguyên nếp cũ và chờ qua, đừng vội thay đổi mọi thứ.",
      },
    ],
    notes: [
      "ĐƯA ĐI KHÁM NGAY nếu trẻ: khó thở, thở rít, tím tái, sốt ở trẻ dưới ba tháng, li bì khó đánh thức, bú kém rõ rệt, hoặc khóc thét bất thường không dỗ được.",
      "Không đắp chăn dày, không dùng gối chống trào ngược hay dụng cụ định vị tư thế ngủ nếu không có chỉ định của bác sĩ. Nhiều sản phẩm bán trên mạng không được khuyến cáo về an toàn giấc ngủ.",
      "Nếu bạn hoặc bạn đời thấy buồn bã kéo dài, mất hứng thú, lo âu nhiều, hoặc có ý nghĩ làm hại bản thân sau sinh — hãy nói với bác sĩ hoặc người thân ngay. Trầm cảm sau sinh là bệnh có thể điều trị.",
      "Bài này là kinh nghiệm chăm con phổ thông, KHÔNG PHẢI TƯ VẤN Y KHOA. Hãy hỏi bác sĩ nhi về trường hợp cụ thể của con bạn.",
    ],
    faq: [
      {
        q: "Cho con ngủ chung giường có được không?",
        a: "Các khuyến cáo về an toàn giấc ngủ thường khuyên ngủ CÙNG PHÒNG nhưng KHÁC GIƯỜNG trong những tháng đầu. Nếu bạn đang cho con ngủ chung, hãy hỏi bác sĩ nhi về cách giảm rủi ro.",
      },
      {
        q: "Mấy tháng thì con ngủ xuyên đêm?",
        a: "Rất khác nhau giữa các trẻ và không có mốc cố định. So sánh với con nhà người khác chủ yếu tạo áp lực. Miễn con tăng trưởng tốt và vui vẻ ban ngày thì cứ kiên nhẫn.",
      },
      {
        q: "Có nên để con khóc cho tới khi tự ngủ không?",
        a: "Đây là chủ đề có nhiều quan điểm khác nhau và phụ thuộc độ tuổi. Hãy hỏi bác sĩ nhi trước khi áp dụng bất kỳ phương pháp luyện ngủ nào, đặc biệt với trẻ nhỏ tháng.",
      },
      {
        q: "Quấn khăn cho con có an toàn không?",
        a: "Quấn đúng cách có thể giúp trẻ nhỏ ngủ tốt hơn, nhưng phải ngừng khi con bắt đầu có dấu hiệu lẫy được, và không quấn quá chặt ở phần hông. Hỏi bác sĩ hoặc điều dưỡng hướng dẫn cách quấn.",
      },
    ],
    sources: [],
  },
  {
    slug: "con-noi-doi-xu-ly",
    title: "Con nói dối: hiểu vì sao trước khi phạt",
    excerpt:
      "Phạt nặng làm trẻ nói dối giỏi hơn chứ không làm trẻ trung thực hơn. Điều quyết định là con có thấy nói thật thì an toàn hay không.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Trẻ nói dối chủ yếu vì sợ hậu quả, muốn được khen, hoặc chưa phân biệt rõ tưởng tượng với thực tế ở tuổi nhỏ. Cách xử lý hiệu quả không phải là phạt nặng hơn, mà là làm cho việc nói thật ít đáng sợ hơn: giảm phản ứng gay gắt, khen khi con thú nhận, và tách bạch hậu quả của việc làm sai với hậu quả của việc nói dối. Nếu nói dối thành hệ thống và kèm hành vi khác thì nên tìm chuyên gia tâm lý.",
    prepare: [
      "Sự sẵn sàng nhìn lại phản ứng của chính mình khi con mắc lỗi",
      "Thống nhất giữa cha mẹ về cách xử lý, để con không tìm chỗ dựa ở người dễ hơn",
      "Một khoảng thời gian riêng để nói chuyện, không phải giữa lúc đang giận",
      "Hiểu biết cơ bản về việc trẻ ở tuổi nào thì hiểu gì về sự thật",
    ],
    steps: [
      {
        title: "Xem tuổi con trước khi kết luận là nói dối",
        detail:
          "Trẻ mẫu giáo thường trộn lẫn tưởng tượng với thực tế, kể chuyện có con khủng long trong phòng không phải là nói dối. Từ tuổi tiểu học trở đi trẻ mới thật sự hiểu và cố tình nói sai sự thật. Phản ứng phải khác nhau theo tuổi.",
      },
      {
        title: "Tìm lý do đằng sau",
        detail:
          "Sợ bị phạt là lý do phổ biến nhất. Ngoài ra còn: muốn được khen, muốn hoà nhập với bạn, tránh làm cha mẹ thất vọng, hoặc bảo vệ một người bạn. Lý do khác nhau thì cách xử lý khác nhau hoàn toàn.",
      },
      {
        title: "Nhìn lại phản ứng của chính mình",
        detail:
          "Nếu mỗi lần con mắc lỗi mà bị quát, bị phạt nặng, bị so sánh, thì con học được rằng nói thật rất đắt. Trẻ nói dối nhiều thường là trẻ sống với người lớn phản ứng mạnh. Đây là phần khó nghe nhưng quan trọng nhất.",
      },
      {
        title: "Đừng gài bẫy con",
        detail:
          "Đã biết rõ sự thật rồi còn hỏi con có làm không là đặt con vào thế phải chọn giữa nói dối và tự tố cáo. Thay vào đó hãy nói thẳng: bố biết con đã làm vỡ cái cốc, giờ mình cùng xử lý nhé.",
      },
      {
        title: "Tách hai chuyện: việc làm sai và việc nói dối",
        detail:
          "Nói rõ với con rằng làm vỡ cốc là chuyện nhỏ, nói dối mới là chuyện lớn. Và cho con thấy điều đó bằng hành động: khi con thú nhận, hậu quả nhẹ hơn rõ rệt so với khi bị phát hiện.",
      },
      {
        title: "Khen khi con nói thật, kể cả khi tin xấu",
        detail:
          "Cảm ơn con đã nói thật với bố, bố biết nói ra không dễ. Câu này quan trọng hơn mọi hình phạt. Trẻ cần thấy rằng nói thật mang lại điều gì đó tốt, chứ không chỉ tránh được điều xấu.",
      },
      {
        title: "Giữ hậu quả nhỏ và liên quan tới việc đã làm",
        detail:
          "Làm bẩn thì dọn, làm hỏng đồ của bạn thì xin lỗi và đền bằng tiền tiêu vặt. Hậu quả có liên quan dạy được nhiều hơn hình phạt không liên quan như cấm xem tivi một tháng.",
      },
      {
        title: "Đừng gán nhãn con là đứa nói dối",
        detail:
          "Nhãn dán trở thành cách trẻ hiểu về chính mình, và trẻ sẽ hành xử cho đúng với nhãn đó. Nói về hành vi cụ thể: chuyện con nói hôm nay không đúng sự thật — chứ không nói về con người.",
      },
      {
        title: "Làm gương ở những chuyện nhỏ",
        detail:
          "Nhờ con nói với người gọi điện rằng bố không có nhà, khai gian tuổi con để mua vé rẻ — trẻ nhìn thấy hết. Rất khó dạy trung thực khi con thấy người lớn dùng lời nói dối tiện lợi hằng ngày.",
      },
      {
        title: "Cho con đường lùi để sửa",
        detail:
          "Nói với con rằng nếu lỡ nói sai, con quay lại nói lại với bố trong hôm nay thì mình coi như con đã nói thật. Cơ chế này cho trẻ lối thoát khỏi lời nói dối đã lỡ, thay vì phải bảo vệ nó tới cùng.",
      },
      {
        title: "Đọc truyện và nói chuyện lúc bình thường",
        detail:
          "Bàn về trung thực khi không có ai đang mắc lỗi thì dễ nói và dễ nghe hơn nhiều. Dùng tình huống trong truyện hoặc phim để hỏi con nghĩ nhân vật nên làm gì.",
      },
      {
        title: "Biết khi nào cần chuyên gia",
        detail:
          "Nói dối liên tục và tinh vi, kèm trộm cắp, bỏ học, gây hấn, hoặc có vẻ như con đang che giấu điều gì nghiêm trọng — đó là lúc nên tìm chuyên gia tâm lý trẻ em thay vì xử lý một mình.",
      },
    ],
    notes: [
      "Nếu con nói dối để che giấu việc bị ai đó làm hại hoặc doạ nạt, phản ứng gay gắt của cha mẹ sẽ khiến con càng im lặng. Hãy giữ cho con luôn biết rằng nói với bố mẹ thì được bảo vệ chứ không bị mắng.",
      "Không đánh con vì nói dối. Ngoài việc không hiệu quả, nó dạy trẻ rằng sức mạnh giải quyết vấn đề, và làm con giấu giỏi hơn ở lần sau.",
      "Nếu bạn phát hiện con nói dối về những chuyện có thể nguy hiểm — đi đâu với ai, dùng chất gì, quan hệ trên mạng — hãy xử lý bình tĩnh nhưng nghiêm túc và tìm hỗ trợ chuyên môn nếu cần.",
      "Bài này là kinh nghiệm nuôi dạy phổ thông, không phải tư vấn tâm lý cho trường hợp cụ thể.",
    ],
    faq: [
      {
        q: "Con nói dối chuyện nhỏ liên tục thì có nghiêm trọng không?",
        a: "Nói dối vặt ở tuổi nhỏ khá phổ biến và thường giảm dần khi trẻ lớn, nhất là khi môi trường an toàn. Điều đáng lo hơn là nói dối kèm hành vi khác như trộm cắp hay gây hấn.",
      },
      {
        q: "Nên phạt thế nào cho đúng?",
        a: "Hậu quả nên nhỏ, có liên quan tới việc đã làm, và được nói rõ từ trước nếu có thể. Quan trọng hơn hình phạt là việc con thấy nói thật thì được đối xử tốt hơn.",
      },
      {
        q: "Con nói dối ở trường thì phối hợp với cô thế nào?",
        a: "Trao đổi với giáo viên để thống nhất cách phản ứng, tránh việc con bị xử lý hai lần cho một chuyện. Hỏi cô xem ở lớp con nói dối trong tình huống nào — thông tin đó thường cho biết lý do.",
      },
      {
        q: "Tôi lỡ quát con nặng rồi thì sửa thế nào?",
        a: "Quay lại nói với con khi đã bình tĩnh: lúc nãy bố quát to quá, bố xin lỗi. Việc người lớn nhận sai dạy trẻ nhiều hơn ta tưởng, và nó mở lại cánh cửa để con nói thật lần sau.",
      },
    ],
    sources: [],
  },
  {
    slug: "sot-co-giat-o-tre",
    title: "Sốt co giật ở trẻ: làm gì trong hai phút đầu và điều tuyệt đối tránh",
    excerpt:
      "Cảnh tượng đáng sợ nhất mà nhiều cha mẹ từng chứng kiến. Phần lớn trường hợp lành tính — nhưng phản ứng sai trong lúc đó lại gây hại thật.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Đặt con nằm nghiêng trên mặt phẳng an toàn, không nhét bất cứ thứ gì vào miệng, không giữ chặt tay chân, và bấm giờ xem cơn kéo dài bao lâu. TUYỆT ĐỐI không vắt chanh vào miệng, không cạy răng bằng thìa. Gọi cấp cứu nếu cơn kéo dài quá năm phút, con tím tái, khó thở, hoặc đây là cơn đầu tiên. Sau cơn, dù con đã tỉnh, vẫn phải đưa đi khám để tìm nguyên nhân.",
    prepare: [
      "Nhiệt kế và thuốc hạ sốt phù hợp theo cân nặng, đã hỏi bác sĩ hoặc dược sĩ từ trước",
      "Số 115 lưu sẵn và địa chỉ nhà chính xác",
      "Điện thoại để bấm giờ và quay lại cơn nếu có người thứ hai",
      "Biết đường tới cơ sở y tế gần nhất có khoa nhi",
    ],
    steps: [
      {
        title: "Giữ bình tĩnh và bấm giờ ngay",
        detail:
          "Điều đầu tiên là xem đồng hồ. Thời gian cơn kéo dài là thông tin quan trọng nhất bác sĩ sẽ hỏi, và trong lúc hoảng thì người ta luôn ước lượng dài hơn thực tế. Bấm giờ trên điện thoại nếu kịp.",
      },
      {
        title: "Đặt con nằm nghiêng trên mặt phẳng an toàn",
        detail:
          "Đặt xuống sàn hoặc giường, nằm nghiêng một bên để nước bọt và chất nôn chảy ra ngoài, tránh sặc vào phổi. Dọn các vật cứng và sắc nhọn xung quanh. Nới lỏng quần áo quanh cổ.",
      },
      {
        title: "KHÔNG nhét gì vào miệng con",
        detail:
          "Không thìa, không đũa, không ngón tay, không khăn. Trẻ KHÔNG nuốt lưỡi được — đây là hiểu lầm rất phổ biến. Nhét vật vào miệng gây gãy răng, tổn thương lợi, và có thể làm tắc đường thở.",
      },
      {
        title: "KHÔNG vắt chanh, không đổ nước hay thuốc vào miệng",
        detail:
          "Đây là những cách làm truyền miệng gây hại thật: chất lỏng chảy vào phổi khi trẻ đang co giật và không nuốt được. Không cho uống bất cứ thứ gì cho tới khi con tỉnh hẳn.",
      },
      {
        title: "KHÔNG giữ chặt tay chân con",
        detail:
          "Giữ chặt không làm cơn ngắn lại mà có thể gây chấn thương cơ xương. Việc của bạn là làm cho môi trường quanh con an toàn, không phải ngăn chuyển động.",
      },
      {
        title: "Quan sát và ghi nhớ để kể lại",
        detail:
          "Cơn bắt đầu thế nào, co giật toàn thân hay chỉ một bên, mắt trợn hay lệch về đâu, môi có tím không, kéo dài bao lâu. Nếu có người thứ hai, nhờ họ quay video — bác sĩ đọc được rất nhiều từ đoạn video đó.",
      },
      {
        title: "Gọi 115 nếu có bất kỳ dấu hiệu nào",
        detail:
          "Cơn kéo dài quá năm phút, con tím tái hoặc khó thở, cơn thứ hai xảy ra ngay sau đó, con không tỉnh lại sau cơn, hoặc đây là cơn co giật đầu tiên của con. Trong những trường hợp đó gọi ngay chứ đừng chờ.",
      },
      {
        title: "Sau cơn, để con nằm nghiêng và nghỉ",
        detail:
          "Trẻ thường lơ mơ, mệt, ngủ thiếp đi sau cơn — đó là giai đoạn bình thường. Giữ con nằm nghiêng, quan sát nhịp thở, và đừng cố đánh thức hay cho ăn uống ngay.",
      },
      {
        title: "Hạ sốt sau khi cơn đã hết",
        detail:
          "Lau người bằng nước ấm, mặc thoáng, và dùng thuốc hạ sốt theo đúng loại và liều đã được bác sĩ hoặc dược sĩ hướng dẫn cho cân nặng của con. Không dùng thuốc trong lúc con đang co giật.",
      },
      {
        title: "Đưa con đi khám dù đã tỉnh táo lại",
        detail:
          "Cơn co giật do sốt cần được bác sĩ đánh giá để tìm nguyên nhân gây sốt và loại trừ những vấn đề nghiêm trọng hơn. Đừng vì con đã tỉnh và chơi lại mà bỏ qua bước này.",
      },
      {
        title: "Hỏi bác sĩ về nguy cơ tái phát",
        detail:
          "Một số trẻ có thể bị lại trong những lần sốt sau. Hỏi bác sĩ về dấu hiệu cần chú ý, cách xử trí sốt cho con, và khi nào cần đưa đi khám sớm. Ghi lại lời dặn đó.",
      },
      {
        title: "Báo cho những người chăm con",
        detail:
          "Ông bà, người giúp việc, cô giáo — cho họ biết con từng có cơn co giật do sốt, và hướng dẫn họ ba việc: đặt nằm nghiêng, không nhét gì vào miệng, gọi 115 nếu cơn kéo dài. In ra một tờ giấy dán ở nhà.",
      },
    ],
    notes: [
      "GỌI 115 NGAY nếu: cơn kéo dài quá năm phút, con tím tái hoặc ngừng thở, có cơn thứ hai liền sau, con không tỉnh lại, con dưới sáu tháng tuổi, hoặc kèm cổ cứng, nôn vọt, phát ban dạng chấm không mất khi ấn.",
      "TUYỆT ĐỐI không vắt chanh, không nhét vật vào miệng, không giữ chặt tay chân, không đổ nước hay thuốc vào miệng trong lúc con đang co giật. Đây là những cách làm truyền miệng gây hại thật.",
      "Không tự cho con dùng thuốc chống co giật nếu không có chỉ định của bác sĩ.",
      "Bài này là hướng dẫn sơ cứu ban đầu, KHÔNG PHẢI TƯ VẤN Y KHOA. Mọi trường hợp co giật đều cần được bác sĩ khám và đánh giá.",
    ],
    faq: [
      {
        q: "Cứ sốt cao là sẽ co giật phải không?",
        a: "Không. Chỉ một tỉ lệ nhỏ trẻ có phản ứng này, và nó thường liên quan tới tốc độ tăng nhiệt độ chứ không đơn thuần là mức sốt. Hạ sốt tốt không bảo đảm ngăn được cơn.",
      },
      {
        q: "Co giật do sốt có ảnh hưởng tới trí tuệ của con không?",
        a: "Phần lớn các cơn co giật do sốt đơn thuần được xem là lành tính và không để lại ảnh hưởng lâu dài. Nhưng đánh giá cụ thể phải do bác sĩ đưa ra sau khi khám con bạn.",
      },
      {
        q: "Có nên cho con uống hạ sốt dự phòng mỗi khi hơi sốt không?",
        a: "Đây là câu phải hỏi bác sĩ nhi của con. Đừng tự áp dụng theo lời mách, vì dùng thuốc hạ sốt cũng có nguyên tắc về liều và khoảng cách giữa các lần.",
      },
      {
        q: "Bao nhiêu tuổi thì hết nguy cơ?",
        a: "Hiện tượng này thường gặp trong một khoảng tuổi nhất định và giảm dần khi trẻ lớn. Hỏi bác sĩ về mốc cụ thể và về việc con bạn có cần theo dõi thêm không.",
      },
    ],
    sources: [],
  },
  {
    slug: "bao-ve-tre-tren-mang",
    title: "Bảo vệ con trên mạng: chặn thiết bị là chưa đủ, phải mở được lời",
    excerpt:
      "Cài phần mềm chặn rồi yên tâm là sai lầm phổ biến nhất. Đứa trẻ gặp chuyện trên mạng thường im lặng vì sợ bị tịch thu điện thoại.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Hai việc song song: dựng hàng rào kỹ thuật và mở đường nói chuyện. Hàng rào gồm bật chế độ hạn chế nội dung, đặt thiết bị ở nơi chung, không cho dùng trong phòng riêng buổi tối. Nhưng quan trọng hơn là một lời hứa rõ ràng với con: nếu con gặp chuyện gì trên mạng, con nói với bố mẹ, bố mẹ sẽ giúp chứ KHÔNG tịch thu máy và không mắng. Không có lời hứa đó thì mọi phần mềm đều vô dụng.",
    prepare: [
      "Danh sách các thiết bị và tài khoản con đang dùng",
      "Thời gian ngồi cùng con để cài đặt chứ không cài lén",
      "Một cuộc trò chuyện đã chuẩn bị trước về quy tắc chung",
      "Thoả thuận giữa hai vợ chồng về giới hạn và cách phản ứng",
    ],
    steps: [
      {
        title: "Bắt đầu bằng lời hứa quan trọng nhất",
        detail:
          "Nói rõ với con: nếu có ai làm con khó chịu trên mạng, con thấy thứ gì đáng sợ, hoặc con lỡ làm gì sai — con nói với bố mẹ, bố mẹ sẽ cùng xử lý và KHÔNG tịch thu máy. Nỗi sợ mất điện thoại chính là lý do lớn nhất khiến trẻ im lặng khi gặp chuyện.",
      },
      {
        title: "Cài đặt cùng con, không cài lén",
        detail:
          "Ngồi cùng con bật các chế độ hạn chế và giải thích vì sao. Cài lén rồi bị phát hiện sẽ phá vỡ lòng tin và con sẽ tìm cách lách. Con lớn hơn thì càng nên trao đổi thay vì áp đặt.",
      },
      {
        title: "Bật chế độ hạn chế nội dung trên mọi thiết bị",
        detail:
          "Điện thoại, máy tính bảng, tivi thông minh, máy chơi game. Mỗi hệ điều hành đều có phần kiểm soát của phụ huynh với giới hạn nội dung, giới hạn thời gian và phê duyệt tải ứng dụng. Kiểm cả tài khoản trên trình duyệt và trên các nền tảng video.",
      },
      {
        title: "Tắt mua hàng trong ứng dụng",
        detail:
          "Gỡ thẻ khỏi tài khoản, tắt chức năng mua trong ứng dụng, đặt yêu cầu mật khẩu cho mọi giao dịch. Đây là nguồn của rất nhiều hoá đơn bất ngờ, nhất là với trò chơi.",
      },
      {
        title: "Đặt thiết bị ở nơi chung",
        detail:
          "Máy tính và máy chơi game ở phòng khách. Điện thoại sạc ở ngoài phòng ngủ vào ban đêm. Quy tắc này đơn giản mà hiệu quả hơn nhiều phần mềm, và áp dụng cho cả người lớn thì con dễ chấp nhận hơn.",
      },
      {
        title: "Thống nhất quy tắc bằng văn bản",
        detail:
          "Viết ra vài dòng: dùng bao lâu mỗi ngày, giờ nào phải cất, ứng dụng nào được dùng, ai được kết bạn. Cùng ký. Quy tắc viết ra ít bị cãi hơn quy tắc nói miệng, và cha mẹ cũng khó tuỳ hứng thay đổi.",
      },
      {
        title: "Dạy con ba nguyên tắc về người lạ trên mạng",
        detail:
          "Một, không cho ai biết trường học, địa chỉ nhà và lịch sinh hoạt. Hai, không gặp mặt ai quen qua mạng nếu chưa có người lớn đi cùng. Ba, người tử tế thật sự sẽ không bao giờ yêu cầu giữ bí mật với bố mẹ.",
      },
      {
        title: "Nói thẳng về hình ảnh riêng tư",
        detail:
          "Quy tắc con cần nhớ: ảnh gửi đi là ảnh không lấy lại được, và không ai thật lòng quý mình lại ép mình gửi ảnh. Kèm lời hứa rằng nếu lỡ gửi rồi thì vẫn cứ nói với bố mẹ — bố mẹ lo cùng chứ không mắng.",
      },
      {
        title: "Dạy con nhận diện chiêu dụ dỗ",
        detail:
          "Người lạ khen ngợi quá mức, tặng quà hoặc thẻ game, than thở để tạo cảm giác thân thiết, rồi yêu cầu giữ bí mật. Nói cho con biết trình tự này để con nhận ra khi nó xảy ra.",
      },
      {
        title: "Nói về bắt nạt trên mạng từ cả hai phía",
        detail:
          "Con có thể là người bị, người chứng kiến, hoặc người tham gia mà không nhận ra. Dạy con chụp màn hình làm bằng chứng, không đáp trả, chặn, và nói với người lớn. Và hỏi con đã bao giờ hùa theo trêu ai chưa.",
      },
      {
        title: "Xem cùng con thay vì chỉ kiểm soát",
        detail:
          "Hỏi con đang xem kênh gì, chơi game gì, ai là người con thích theo dõi. Ngồi xem cùng vài lần. Biết thế giới của con là cách hiệu quả hơn nhiều so với đọc lịch sử duyệt web sau lưng.",
      },
      {
        title: "Xử lý bình tĩnh khi có chuyện xảy ra",
        detail:
          "Lưu bằng chứng bằng ảnh chụp màn hình, chặn và báo cáo tài khoản đó trên nền tảng. Nếu có dấu hiệu dụ dỗ, đe doạ hoặc xâm hại thì trình báo công an và gọi tổng đài quốc gia bảo vệ trẻ em 111. Đừng xoá bằng chứng vì tức giận.",
      },
    ],
    notes: [
      "TỔNG ĐÀI QUỐC GIA BẢO VỆ TRẺ EM: 111 — miễn phí, hoạt động suốt ngày đêm. Gọi khi nghi con bị dụ dỗ, xâm hại, bắt nạt nghiêm trọng, hoặc bạn cần tư vấn.",
      "Nếu con bị đe doạ tung ảnh riêng tư, TUYỆT ĐỐI không làm theo yêu cầu của kẻ đe doạ và không gửi thêm gì. Lưu bằng chứng và trình báo công an — đây là hành vi bị pháp luật xử lý.",
      "Tịch thu điện thoại như một hình phạt sau khi con kể chuyện là cách chắc chắn nhất để lần sau con không kể nữa. Hãy giữ đúng lời hứa của bạn.",
      "Bài này là kinh nghiệm phổ thông, không phải tư vấn pháp lý hay tư vấn tâm lý.",
    ],
    faq: [
      {
        q: "Mấy tuổi thì cho con dùng điện thoại riêng?",
        a: "Không có mốc chung. Quan trọng hơn là con đã hiểu và giữ được các quy tắc chưa. Có thể bắt đầu bằng điện thoại chỉ nghe gọi, rồi mở dần chức năng khi con lớn hơn.",
      },
      {
        q: "Có nên đọc tin nhắn của con không?",
        a: "Với trẻ nhỏ thì việc giám sát công khai là hợp lý. Với trẻ lớn, hãy nói trước rằng bạn sẽ kiểm và vì sao. Đọc lén rồi bị phát hiện làm mất lòng tin, mà lòng tin mới là thứ bảo vệ con.",
      },
      {
        q: "Phần mềm chặn có đủ không?",
        a: "Không. Trẻ lớn tìm cách lách rất nhanh, và phần lớn nguy cơ đến từ người chứ không từ nội dung. Hàng rào kỹ thuật chỉ là một nửa, nửa còn lại là đường dây trò chuyện luôn mở.",
      },
      {
        q: "Con giấu tài khoản phụ thì làm sao?",
        a: "Chuyện khá phổ biến ở tuổi thiếu niên. Thay vì truy tìm, hãy nói về lý do: con muốn có không gian riêng là bình thường, nhưng có vài quy tắc an toàn áp dụng ở mọi tài khoản. Đặt lại thoả thuận thay vì đối đầu.",
      },
    ],
    sources: [],
  },
];
