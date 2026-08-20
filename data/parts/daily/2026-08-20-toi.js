// Bài đăng ngày 2026-08-20 — khung 22h tối
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-20";

export const day20260820toi = [
  // ═══════════════════════ NAM GIỚI ═══════════════════════
  {
    slug: "tuyen-tien-liet-dau-hieu-som",
    title: "Tuyến tiền liệt: dấu hiệu đàn ông hay tặc lưỡi bỏ qua",
    excerpt:
      "Đêm dậy đi tiểu hai ba lần, tia nước yếu dần, tiểu xong vẫn thấy chưa hết. Nhiều người coi là chuyện tuổi tác — thật ra đó là lúc nên đi khám.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nam-gioi",
    author: null,
    quickAnswer:
      "Tuyến tiền liệt nằm ngay dưới bàng quang và ôm quanh đường tiểu. Từ khoảng ngoài 45–50 tuổi nó thường to dần, chèn vào đường tiểu và gây ra đúng những triệu chứng trên. Phần lớn là phì đại lành tính, không phải ung thư — nhưng chỉ bác sĩ khám mới phân biệt được. Ghi lại triệu chứng trong hai tuần rồi đi khám tiết niệu hoặc nam khoa. Bài này không thay lời bác sĩ.",
    prepare: [
      "Một cuốn sổ nhỏ hoặc ghi chú điện thoại để đếm số lần đi tiểu ban đêm trong 7–14 ngày",
      "Danh sách thuốc đang uống — nhiều thuốc cảm, thuốc dị ứng, thuốc huyết áp làm triệu chứng nặng thêm",
      "Thông tin bệnh của cha và anh em trai, nếu có ai từng mắc bệnh tuyến tiền liệt",
      "Thẻ bảo hiểm y tế và CCCD",
    ],
    steps: [
      {
        title: "Biết chính xác mình đang tìm dấu hiệu gì",
        detail:
          "Sáu dấu hiệu hay gặp nhất: tiểu đêm nhiều lần, tia nước yếu hoặc ngắt quãng, phải rặn mới ra, tiểu xong vẫn thấy còn, buồn tiểu gấp không nhịn được, và nhỏ giọt sau khi đã tiểu xong. Có từ hai dấu hiệu trở lên kéo dài trên một tháng là đủ lý do đi khám.",
      },
      {
        title: "Đếm số lần tiểu đêm trong hai tuần",
        detail:
          "Mỗi đêm ghi một con số. Một lần là bình thường với nhiều người. Từ hai lần trở lên đều đặn thì đó là dữ liệu, không phải cảm giác — bác sĩ rất cần con số này và bạn sẽ không phải cố nhớ lúc ngồi trong phòng khám.",
      },
      {
        title: "Loại trừ những thứ do chính bạn gây ra trước",
        detail:
          "Uống nhiều nước sau 8 giờ tối, uống bia buổi tối, uống cà phê chiều muộn — cả ba đều làm tiểu đêm nhiều lên mà không liên quan gì tới tuyến tiền liệt. Thử dừng một tuần. Nếu hết thì bạn đã có câu trả lời rẻ nhất.",
      },
      {
        title: "Rà lại tủ thuốc nhà mình",
        detail:
          "Thuốc cảm cúm, thuốc chống dị ứng thế hệ cũ và một số thuốc trị mất ngủ có thể làm khó tiểu nặng lên rõ rệt. Chụp ảnh hết vỏ thuốc đang dùng mang theo, đừng cố đọc tên cho bác sĩ nghe qua trí nhớ.",
      },
      {
        title: "Chọn đúng khoa để khám",
        detail:
          "Khoa Tiết niệu hoặc khoa Nam học. Bệnh viện đa khoa tuyến tỉnh trở lên đều có. Nếu đi phòng khám tư, chọn nơi có máy siêu âm — vì siêu âm là bước gần như chắc chắn sẽ làm.",
      },
      {
        title: "Biết trước bác sĩ sẽ làm gì để đỡ ngại",
        detail:
          "Thường có ba việc: hỏi bộ câu hỏi chấm điểm triệu chứng, siêu âm bụng để đo kích thước tuyến và lượng nước tiểu còn lại sau khi tiểu, và có thể xét nghiệm máu PSA. Một số trường hợp bác sĩ khám bằng ngón tay qua hậu môn — nhanh, hơi khó chịu, và là cách rẻ nhất để phát hiện bất thường.",
      },
      {
        title: "Hiểu con số PSA trước khi hoảng",
        detail:
          "PSA là chất do tuyến tiền liệt tiết ra, đo trong máu. PSA cao không đồng nghĩa ung thư — viêm, phì đại, thậm chí đi xe đạp đường dài hoặc quan hệ ngay trước khi lấy máu cũng đẩy con số lên. Bác sĩ nhìn PSA cùng nhiều thứ khác chứ không kết luận bằng một con số.",
      },
      {
        title: "Hỏi ba câu này trước khi rời phòng khám",
        detail:
          "Một, đây là phì đại lành tính hay còn phải theo dõi thêm? Hai, có cần uống thuốc ngay không hay chỉ cần thay đổi sinh hoạt? Ba, bao lâu thì tái khám và dấu hiệu nào thì phải quay lại ngay?",
      },
      {
        title: "Nếu được kê thuốc, hỏi rõ ảnh hưởng lên chuyện chăn gối",
        detail:
          "Một số nhóm thuốc điều trị phì đại tuyến tiền liệt có ảnh hưởng tới ham muốn hoặc xuất tinh. Đây là điều bác sĩ có thể không chủ động nói còn bạn thì nên chủ động hỏi, để sau này thấy thay đổi thì biết là do thuốc chứ không hoang mang.",
      },
      {
        title: "Thay đổi vài thói quen nhỏ, hiệu quả thật",
        detail:
          "Ngừng uống nước 2 tiếng trước khi ngủ, đi tiểu trước khi lên giường, giảm bia rượu buổi tối, đi bộ 30 phút mỗi ngày. Với triệu chứng nhẹ, chừng đó nhiều khi đủ để ngủ yên tới sáng.",
      },
      {
        title: "Đặt lịch tái khám ngay lúc còn ở bệnh viện",
        detail:
          "Đây là loại bệnh diễn tiến chậm nên rất dễ quên. Đặt lịch và hẹn báo trên điện thoại luôn, đừng để tới lúc triệu chứng nặng mới quay lại.",
      },
    ],
    notes: [
      "Đi khám ngay trong ngày, không chờ đợi: hoàn toàn không tiểu được, tiểu ra máu, sốt kèm đau vùng bụng dưới hoặc lưng, hoặc đau dữ dội khi đi tiểu. Đây là các tình huống cấp cứu.",
      "Sụt cân không rõ lý do kèm đau lưng dai dẳng ở người có triệu chứng tiểu khó là dấu hiệu cần khám sớm, đừng tự trấn an.",
      "Đừng dùng thực phẩm chức năng quảng cáo bổ tuyến tiền liệt để thay cho việc đi khám. Chúng làm bạn trì hoãn — và trì hoãn mới là cái hại.",
      "Bài này là kiến thức phổ thông để bạn biết đường đi khám, không phải chẩn đoán hay chỉ định điều trị.",
    ],
    faq: [
      {
        q: "Bao nhiêu tuổi thì nên bắt đầu để ý?",
        a: "Thường từ 45–50 tuổi. Nếu cha hoặc anh em ruột từng mắc bệnh tuyến tiền liệt thì nên hỏi bác sĩ sớm hơn vài năm.",
      },
      {
        q: "Phì đại tuyến tiền liệt có biến thành ung thư không?",
        a: "Đây là hai bệnh khác nhau, phì đại lành tính không tiến triển thành ung thư. Nhưng một người có thể mắc cả hai cùng lúc, nên vẫn phải khám để phân biệt chứ không tự suy đoán.",
      },
      {
        q: "Khám bằng ngón tay qua hậu môn có đau không?",
        a: "Khó chịu chứ không đau, kéo dài chừng vài chục giây. Rất nhiều người bỏ khám chỉ vì ngại đúng bước này. Nói thẳng với bác sĩ là bạn thấy ngại, họ sẽ giải thích và làm nhanh gọn.",
      },
      {
        q: "Tôi mới ngoài 30 mà đã tiểu đêm nhiều, có phải tuyến tiền liệt không?",
        a: "Ở tuổi đó nguyên nhân thường là thứ khác: uống nhiều nước buổi tối, viêm đường tiết niệu, tiểu đường, hoặc viêm tuyến tiền liệt do nhiễm khuẩn. Vẫn nên đi khám, chỉ là hướng tìm khác đi.",
      },
    ],
    sources: [],
  },
  {
    slug: "dau-hieu-benh-lay-qua-duong-tinh-duc-o-nam",
    title: "Bệnh lây qua đường tình dục ở nam: cái không thấy mới đáng lo",
    excerpt:
      "Phần lớn đàn ông nghĩ có bệnh thì phải có triệu chứng. Sự thật ngược lại — nhiều bệnh im lặng hàng tháng trời và vẫn lây cho người khác.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nam-gioi",
    adult: true,
    author: null,
    quickAnswer:
      "Nhiều bệnh lây qua đường tình dục ở nam không gây triệu chứng gì trong thời gian dài, hoặc chỉ gây khó chịu thoáng qua rồi tự lặn — mà lặn không có nghĩa là khỏi. Cách duy nhất để biết chắc là xét nghiệm. Nếu có bạn tình mới, hoặc từng có lần không dùng bao, hãy đi xét nghiệm dù thấy hoàn toàn bình thường. Xét nghiệm ở khoa Da liễu, khoa Nam học hoặc trung tâm kiểm soát bệnh tật tỉnh. Bài này không thay chẩn đoán của bác sĩ.",
    prepare: [
      "Mốc thời gian của lần có nguy cơ gần nhất — vì xét nghiệm quá sớm sẽ cho kết quả âm tính giả",
      "CCCD và thẻ bảo hiểm y tế nếu có",
      "Một khoản tiền mặt phòng khi cơ sở không nhận thanh toán bảo hiểm cho gói xét nghiệm",
      "Số điện thoại của bạn tình gần đây — nếu kết quả dương tính, họ cần được báo",
    ],
    steps: [
      {
        title: "Bỏ ngay ý nghĩ không đau tức là không sao",
        detail:
          "Đây là hiểu lầm phổ biến nhất và cũng tai hại nhất. Một tỷ lệ lớn nam giới nhiễm chlamydia không hề có triệu chứng. HPV thì gần như luôn im lặng. Giang mai giai đoạn đầu cho một vết loét không đau, tự lành sau vài tuần và người bệnh yên tâm rằng đã khỏi — trong khi bệnh chỉ chuyển giai đoạn.",
      },
      {
        title: "Nhận diện những dấu hiệu dễ bị gán nhầm cho thứ khác",
        detail:
          "Rát nhẹ khi đi tiểu bị đổ cho nóng trong. Một chút dịch bất thường buổi sáng bị coi là bình thường. Ngứa hoặc nổi vài nốt nhỏ bị nghĩ là dị ứng xà phòng. Đau tinh hoàn một bên bị cho là do ngồi lâu. Tất cả đều xứng đáng được xét nghiệm chứ không phải tự đoán.",
      },
      {
        title: "Hiểu vì sao không nên đi xét nghiệm quá sớm",
        detail:
          "Mỗi bệnh có một khoảng thời gian cơ thể chưa kịp tạo dấu vết đủ để máy phát hiện. Đi xét nghiệm ngay hôm sau khi có nguy cơ thường cho kết quả âm tính vô nghĩa. Nói thẳng với bác sĩ lần nguy cơ là ngày nào, họ sẽ chỉ định đúng thời điểm và đúng loại xét nghiệm.",
      },
      {
        title: "Nếu nguy cơ mới xảy ra trong vòng 72 giờ, đi ngay hôm nay",
        detail:
          "Với nguy cơ phơi nhiễm HIV, có thuốc dự phòng sau phơi nhiễm nhưng phải bắt đầu càng sớm càng tốt và không quá 72 giờ. Đây là việc tính bằng giờ chứ không tính bằng ngày. Tới khoa Truyền nhiễm hoặc trung tâm phòng chống HIV/AIDS của tỉnh.",
      },
      {
        title: "Chọn nơi xét nghiệm phù hợp với mức ngại của bạn",
        detail:
          "Bệnh viện Da liễu và khoa Nam học của bệnh viện lớn là nơi quen việc nhất. Trung tâm kiểm soát bệnh tật tỉnh thường có dịch vụ xét nghiệm HIV miễn phí và bảo mật. Phòng khám tư nhanh và kín đáo hơn nhưng đắt hơn — kiểm tra xem nơi đó có giấy phép và có bác sĩ chuyên khoa không.",
      },
      {
        title: "Yêu cầu một gói xét nghiệm chứ không chỉ một loại",
        detail:
          "Nhiều người chỉ xét nghiệm HIV rồi thở phào. Nhưng chlamydia, lậu, giang mai và viêm gan B đều lây theo cùng con đường và phổ biến hơn nhiều. Nói với bác sĩ là bạn muốn tầm soát đầy đủ, đừng để họ đoán.",
      },
      {
        title: "Nói thật hoàn cảnh, kể cả phần khó nói",
        detail:
          "Bác sĩ cần biết bạn quan hệ theo đường nào để lấy mẫu đúng chỗ — chỉ xét nghiệm nước tiểu có thể bỏ sót nhiễm ở họng hoặc hậu môn. Họ nghe chuyện này hằng ngày và không đánh giá bạn. Giấu thông tin chỉ làm hại chính mình.",
      },
      {
        title: "Không tự mua thuốc uống trước khi có kết quả",
        detail:
          "Uống kháng sinh linh tinh làm triệu chứng lặn đi, khiến xét nghiệm sau đó âm tính giả, bệnh vẫn còn và vi khuẩn thì kháng thuốc. Đây là sai lầm khiến nhiều ca đơn giản trở thành phức tạp. Chờ kết quả rồi uống theo đơn.",
      },
      {
        title: "Nếu dương tính, uống đủ liều dù đã hết triệu chứng",
        detail:
          "Triệu chứng thường biến mất sau vài ngày trong khi phác đồ có thể kéo dài hơn. Ngưng giữa chừng là lý do phổ biến khiến bệnh tái lại và khó điều trị hơn lần sau.",
      },
      {
        title: "Báo cho bạn tình — việc khó nhất nhưng bắt buộc",
        detail:
          "Không báo thì họ không biết mà đi khám, và bạn sẽ bị lây lại từ chính họ sau khi mình khỏi. Nói ngắn và không đổ lỗi: mình vừa xét nghiệm và có kết quả dương tính, bạn nên đi kiểm tra, bệnh này chữa được. Một số cơ sở y tế có hỗ trợ báo tin ẩn danh, hỏi bác sĩ.",
      },
      {
        title: "Kiêng quan hệ tới khi bác sĩ nói được",
        detail:
          "Thường là hết phác đồ và cả bạn tình cũng đã điều trị xong. Hỏi rõ mốc thời gian, đừng tự ước lượng.",
      },
      {
        title: "Xét nghiệm lại theo hẹn",
        detail:
          "Với một số bệnh, bác sĩ hẹn kiểm tra lại sau vài tuần tới vài tháng để chắc chắn đã sạch. Đây không phải thủ tục thừa — nó là bước cuối để đóng lại câu chuyện.",
      },
    ],
    notes: [
      "Đi khám ngay, không chờ: sốt cao kèm sưng đau tinh hoàn, tiểu ra máu, loét sinh dục lan rộng, hoặc đau bụng dưới dữ dội.",
      "Bao cao su dùng đúng cách giảm nguy cơ rất mạnh nhưng không tuyệt đối với những bệnh lây qua tiếp xúc da như HPV hay herpes. Tiêm vắc xin HPV và xét nghiệm định kỳ là phần bổ sung.",
      "Kết quả xét nghiệm của bạn là thông tin y tế được bảo mật. Cơ sở y tế không có quyền tiết lộ cho gia đình hay cơ quan bạn.",
      "Bài viết này giúp bạn biết đường đi khám, không phải để tự chẩn đoán hay tự chữa. Mọi thuốc đều phải do bác sĩ kê.",
    ],
    faq: [
      {
        q: "Tôi không có triệu chứng gì, xét nghiệm có phí tiền không?",
        a: "Không. Chính những người không triệu chứng mới là nhóm cần xét nghiệm nhất, vì họ là nguồn lây mà không hay biết. Coi đây như đi kiểm tra răng định kỳ.",
      },
      {
        q: "Bao lâu nên xét nghiệm một lần?",
        a: "Nếu có bạn tình cố định và cả hai đã xét nghiệm sạch thì không cần thường xuyên. Nếu có bạn tình mới hoặc nhiều bạn tình, nhiều hướng dẫn khuyên mỗi 3–6 tháng. Hỏi bác sĩ theo hoàn cảnh cụ thể của bạn.",
      },
      {
        q: "Xét nghiệm ở đâu vừa rẻ vừa kín?",
        a: "Trung tâm kiểm soát bệnh tật tỉnh và các phòng tư vấn xét nghiệm HIV tự nguyện thường miễn phí hoặc rất rẻ, và có quy trình bảo mật rõ ràng. Gọi hỏi trước giờ làm việc.",
      },
      {
        q: "Chữa xong rồi có bị lại không?",
        a: "Có. Khỏi bệnh không tạo miễn dịch. Rất nhiều ca tái nhiễm là do bạn tình chưa điều trị. Đó là lý do bước báo cho bạn tình quan trọng ngang với việc uống thuốc.",
      },
    ],
    sources: [],
  },
  {
    slug: "noi-chuyen-voi-con-trai-tuoi-day-thi",
    title: "Nói chuyện với con trai tuổi dậy thì mà không ai thấy ngượng",
    excerpt:
      "Con bắt đầu đóng cửa phòng, nói cộc lốc, và có những chuyện nó sẽ không bao giờ hỏi bạn. Đây là cách mở lời trước khi internet mở lời thay bạn.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nam-gioi",
    adult: true,
    author: null,
    quickAnswer:
      "Đừng chờ một buổi nói chuyện lớn — nó gần như luôn thất bại. Thay vào đó hãy chia thành nhiều mẩu ngắn 2–3 phút, nói lúc đang làm việc khác và không nhìn thẳng vào mặt nhau: lúc chở con đi học, lúc rửa bát cùng nhau. Bắt đầu bằng thông tin, không bằng lời răn. Và nói sớm hơn bạn nghĩ — thường là 10–11 tuổi, vì con sẽ nghe từ bạn bè và điện thoại trước khi nghe từ bạn.",
    prepare: [
      "Một khoảng thời gian có sẵn và lặp lại: đường chở con đi học, lúc đi mua đồ, lúc cùng làm việc nhà",
      "Vài kiến thức cơ bản đúng — về dậy thì, vệ sinh, và cả nội dung người lớn trên mạng",
      "Sự chuẩn bị tinh thần rằng con sẽ trả lời cụt lủn, và như vậy vẫn là thành công",
      "Một người lớn khác con tin cậy — chú, bác, anh họ — làm phương án dự phòng nếu con thực sự không nói được với bạn",
    ],
    steps: [
      {
        title: "Bắt đầu sớm hơn bạn nghĩ",
        detail:
          "Nhiều cha mẹ đợi tới khi thấy con có vẻ lớn rồi mới nói, thường là 14–15 tuổi. Lúc đó con đã có sẵn thông tin từ nơi khác và việc của bạn chuyển từ dạy sang sửa. Bắt đầu quanh 10–11 tuổi, với những mẩu rất nhẹ về thay đổi cơ thể.",
      },
      {
        title: "Chọn tình huống không có ánh mắt đối diện",
        detail:
          "Ngồi cạnh nhau trong ô tô, đi bộ, cùng rửa xe — đều tốt hơn ngồi đối diện ở bàn ăn. Thiếu niên nói được nhiều hơn hẳn khi không phải nhìn vào mắt cha mẹ. Đây là mẹo nhỏ nhưng đổi hẳn kết quả.",
      },
      {
        title: "Chia nhỏ thành nhiều lần hai phút",
        detail:
          "Một buổi nói chuyện dài làm cả hai căng thẳng và con sẽ né lần sau. Mỗi lần chỉ một ý, nói xong thì thôi, đổi chủ đề. Mười lần hai phút hiệu quả hơn một lần hai mươi phút rất nhiều.",
      },
      {
        title: "Mở đầu bằng chuyện của mình, không bằng câu hỏi về con",
        detail:
          "Hồi bố bằng tuổi con, bố cứ tưởng mình có bệnh gì đó vì... — cách vào chuyện này an toàn hơn nhiều so với câu hỏi dạo này con thế nào. Kể chuyện mình cho con một chỗ đứng an toàn để hỏi lại mà không phải thừa nhận điều gì.",
      },
      {
        title: "Nói phần cơ thể trước, phần cảm xúc sau",
        detail:
          "Thay đổi giọng nói, mọc lông, mộng tinh, mùi cơ thể, mụn — đều là chuyện sinh học và dễ nói. Bắt đầu ở đó để tạo thói quen trò chuyện. Chuyện thích ai, chuyện ranh giới và đồng thuận sẽ dễ nói hơn nhiều sau khi cánh cửa đã mở.",
      },
      {
        title: "Nói thẳng về nội dung người lớn trên mạng",
        detail:
          "Gần như chắc chắn con sẽ gặp, dù vô tình. Điều con cần nghe từ bạn là: những gì trong đó là dàn dựng để quay phim, không phải mô tả đời thật, và không phải là cách người ta cư xử với nhau. Nếu bạn không nói câu này, con sẽ mặc định điều ngược lại.",
      },
      {
        title: "Dạy hai chữ đồng thuận bằng ví dụ đời thường",
        detail:
          "Đừng giảng khái niệm. Dùng ví dụ con hiểu ngay: mượn đồ của bạn phải hỏi, bạn nói không thích bị trêu thì dừng, ai đó im lặng không có nghĩa là đồng ý. Nền này về sau áp dụng thẳng vào chuyện tình cảm mà không cần giảng lại.",
      },
      {
        title: "Nói về ảnh riêng tư trước khi con có điện thoại riêng",
        detail:
          "Quy tắc đơn giản cho con nhớ: ảnh gửi đi là ảnh không lấy lại được, và không ai thật lòng quý mình lại ép mình gửi ảnh. Kèm một lời hứa quan trọng: nếu lỡ có chuyện gì, con cứ nói với bố mẹ, bố mẹ lo cùng chứ không mắng trước.",
      },
      {
        title: "Chuẩn bị tinh thần cho câu trả lời cụt lủn",
        detail:
          "Con sẽ nói con biết rồi, thôi bố, hoặc im. Đừng coi đó là thất bại. Con đang nghe, chỉ là không muốn thể hiện. Việc của bạn là nói xong rồi để đó, không truy vấn thêm.",
      },
      {
        title: "Đừng phản ứng mạnh nếu con kể điều gì đó gây sốc",
        detail:
          "Giây phút bạn hoảng lên hoặc mắng là giây phút cánh cửa đóng lại và sẽ rất khó mở lại. Hít một hơi, nói cảm ơn con đã nói với bố, rồi xử lý cảm xúc của mình sau khi con ra khỏi phòng.",
      },
      {
        title: "Chuẩn bị sẵn một người lớn dự phòng",
        detail:
          "Có những đứa trẻ thực sự không nói được với cha mẹ, và điều đó bình thường. Nói với con rằng nếu có chuyện không tiện nói với bố mẹ thì gọi cho chú A. Rồi nhắn riêng cho chú A biết vai trò đó. Như vậy con vẫn có nơi hỏi thay vì chỉ có internet.",
      },
      {
        title: "Giữ đường dây mở bằng những lần không nói gì cả",
        detail:
          "Chở con đi học, hỏi chuyện bóng đá, im lặng cùng nhau. Quan hệ đủ gần trong chuyện thường ngày mới là thứ khiến con tìm tới bạn khi có chuyện lớn.",
      },
    ],
    notes: [
      "Cần tìm hỗ trợ chuyên môn sớm nếu con thu mình hẳn, bỏ ăn, tự làm đau bản thân, hoặc nói những câu về việc không muốn sống nữa. Đó không còn là tuổi dậy thì thông thường — hãy tìm chuyên gia tâm lý hoặc bác sĩ.",
      "Không đọc trộm tin nhắn của con rồi lấy đó ra chất vấn. Nếu bạn thật sự lo tới mức phải kiểm tra, hãy nói trước rằng bạn sẽ kiểm tra và vì sao — mất lòng tin còn khó sửa hơn mất một cuộc tranh cãi.",
      "Nếu con hỏi một câu bạn không biết trả lời, cứ nói bố không chắc, để bố tìm hiểu rồi nói lại. Trả lời bừa còn hại hơn thừa nhận không biết.",
      "Nếu bạn là mẹ đơn thân, mọi bước ở trên vẫn dùng được. Con trai không cần một người cùng giới mới nghe được — con cần một người không phán xét.",
    ],
    faq: [
      {
        q: "Con tôi 13 tuổi và tôi chưa từng nói gì cả, có muộn quá không?",
        a: "Không. Chỉ cần chỉnh cách vào chuyện: đừng bắt đầu bằng bài giảng bù, hãy bắt đầu bằng một câu chuyện của chính bạn hoặc một tình huống trên phim đang xem cùng nhau.",
      },
      {
        q: "Nói thế nào nếu tôi phát hiện con xem nội dung người lớn?",
        a: "Đừng làm ầm lên và đừng giả vờ không thấy. Chọn một lúc bình thường sau đó vài ngày, nói ngắn rằng bố biết con có xem, bố không mắng, bố chỉ muốn con biết những gì trong đó là dựng chứ không phải đời thật. Thế là đủ cho lần đầu.",
      },
      {
        q: "Con hỏi những câu tôi thấy quá sớm so với tuổi, có nên trả lời không?",
        a: "Có, nhưng trả lời đúng mức tuổi và đúng đủ câu hỏi, không mở rộng. Con hỏi gì đáp nấy. Nếu con đã hỏi nghĩa là con đã nghe ở đâu đó — im lặng chỉ đẩy con quay lại nguồn cũ.",
      },
      {
        q: "Vợ chồng tôi bất đồng về việc nói bao nhiêu là đủ, làm sao?",
        a: "Thống nhất riêng trước khi nói với con, dù chỉ thống nhất được vài điểm cơ bản. Trẻ nhận ra ngay khi cha mẹ nói hai kiểu khác nhau và sẽ ngừng hỏi cả hai.",
      },
    ],
    sources: [],
  },
  {
    slug: "mui-co-the-o-nam-xu-ly-tan-goc",
    title: "Mùi cơ thể ở nam: xử lý tận gốc chứ không xịt đè lên",
    excerpt:
      "Tắm mỗi ngày vẫn có mùi sau vài tiếng? Vấn đề gần như không nằm ở chỗ bạn tắm ít — nó nằm ở bốn chỗ khác mà hầu như không ai để ý.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nam-gioi",
    author: null,
    quickAnswer:
      "Mồ hôi tự nó không mùi. Mùi sinh ra khi vi khuẩn trên da phân giải mồ hôi ở vùng nách, bẹn và chân. Vậy nên cách xử lý không phải là xịt thơm đè lên, mà là giảm vi khuẩn và giảm chỗ cho vi khuẩn sống: tỉa lông nách, dùng sản phẩm chống tiết mồ hôi vào buổi tối, thay áo mỗi ngày và giặt áo đúng cách. Nếu mùi đổi khác hẳn hoặc mồ hôi tăng đột ngột thì đó là chuyện cần đi khám.",
    prepare: [
      "Một chai chống tiết mồ hôi ghi chữ antiperspirant, khác với deodorant chỉ khử mùi",
      "Tông đơ hoặc dao cạo để tỉa vùng nách",
      "Vài chiếc áo cotton hoặc vải thấm hút, đủ để không phải mặc lại áo cũ",
      "Một loại xà phòng hoặc sữa tắm thường, không cần loại đắt tiền",
    ],
    steps: [
      {
        title: "Hiểu đúng nguyên nhân trước khi mua bất cứ thứ gì",
        detail:
          "Cơ thể có hai loại tuyến mồ hôi. Loại ở khắp người tiết ra gần như chỉ nước, không mùi. Loại tập trung ở nách và bẹn tiết ra chất giàu đạm và chất béo — vi khuẩn ăn chất đó rồi thải ra mùi. Biết điều này thì bạn thôi đổ lỗi cho việc tắm ít.",
      },
      {
        title: "Phân biệt hai loại sản phẩm mà nhiều người mua nhầm",
        detail:
          "Deodorant chỉ khử mùi và thêm hương. Antiperspirant chứa muối nhôm làm hẹp tạm thời lỗ tuyến mồ hôi nên giảm luôn lượng mồ hôi. Nếu bạn ra nhiều mồ hôi thì mua loại thứ hai — đọc chữ trên vỏ chứ đừng nhìn hình quảng cáo.",
      },
      {
        title: "Bôi vào buổi tối, không phải buổi sáng",
        detail:
          "Đây là điều gần như không ai được dặn. Antiperspirant cần vài tiếng để tạo tác dụng ở lỗ tuyến, và nó bám tốt nhất khi da khô và ít mồ hôi — tức là lúc trước khi đi ngủ. Bôi buổi sáng lên da vừa tắm còn ẩm thì phần lớn bị rửa trôi.",
      },
      {
        title: "Tỉa lông nách",
        detail:
          "Lông giữ mồ hôi lại và giữ luôn vi khuẩn. Không cần cạo trọc, chỉ cần tỉa ngắn bằng tông đơ là đủ tạo khác biệt rõ rệt ngay trong ngày đầu tiên. Đây là bước rẻ nhất và hiệu quả nhanh nhất trong cả bài.",
      },
      {
        title: "Lau khô kỹ ba vùng sau khi tắm",
        detail:
          "Nách, bẹn và kẽ ngón chân. Da còn ẩm là môi trường lý tưởng cho vi khuẩn và nấm. Nhiều người tắm rất sạch rồi mặc quần áo lên vùng da còn ẩm — và mùi quay lại sau hai tiếng.",
      },
      {
        title: "Đổi vải áo, đừng chỉ đổi nước hoa",
        detail:
          "Áo polyester giữ mùi rất dai vì vi khuẩn bám vào sợi tổng hợp và không ra hết khi giặt thường. Cotton hoặc vải thấm hút tốt hơn hẳn cho áo mặc cả ngày. Nếu bắt buộc mặc áo thể thao polyester thì giặt ngay sau khi mặc, đừng để qua đêm trong giỏ.",
      },
      {
        title: "Sửa cách giặt áo",
        detail:
          "Áo đã ám mùi thì giặt thường không hết. Ngâm nước ấm với một ít giấm trắng khoảng 30 phút trước khi giặt sẽ xử lý được phần lớn. Và phơi khô hẳn — áo phơi trong nhà ẩm sẽ có mùi ngay cả khi vừa giặt.",
      },
      {
        title: "Xử lý riêng phần giày và chân",
        detail:
          "Mùi chân thường đến từ giày chứ không phải chân. Đừng đi cùng một đôi hai ngày liền — cho giày nghỉ một ngày để khô hẳn. Đổi tất mỗi ngày, chọn tất cotton. Rắc một ít baking soda vào giày qua đêm hút ẩm và mùi rất tốt.",
      },
      {
        title: "Xem lại vài món trong bữa ăn",
        detail:
          "Tỏi, hành, cà ri, thịt đỏ và rượu bia đều có thể theo mồ hôi ra ngoài và làm đổi mùi cơ thể trong 1–2 ngày. Không cần kiêng hẳn, chỉ cần biết để chủ động trước những hôm quan trọng.",
      },
      {
        title: "Kiểm tra căng thẳng như một nguyên nhân thật",
        detail:
          "Mồ hôi do lo lắng đến từ chính nhóm tuyến gây mùi, nên trước buổi phỏng vấn hay buổi hẹn thì mùi thường nặng hơn hẳn. Biết vậy thì chuẩn bị trước: mang theo khăn giấy ướt, mặc áo màu không lộ vết, đến sớm để ngồi nghỉ cho ráo mồ hôi.",
      },
      {
        title: "Nếu đã làm hết mà vẫn không đỡ, đi khám da liễu",
        detail:
          "Có tình trạng gọi là tăng tiết mồ hôi và có cách điều trị thật sự — từ sản phẩm kê đơn mạnh hơn tới các thủ thuật. Đây là vấn đề y khoa có giải pháp chứ không phải thứ phải chịu đựng cả đời.",
      },
    ],
    notes: [
      "Đi khám nếu mồ hôi tăng đột ngột không rõ lý do, ra mồ hôi đầm đìa về đêm, hoặc mùi cơ thể đổi khác hẳn — đôi khi đó là dấu hiệu của bệnh nội tiết, nhiễm trùng hoặc vấn đề khác cần kiểm tra.",
      "Đừng bôi antiperspirant lên da vừa cạo xong, dễ gây rát và kích ứng. Cạo buổi tối thì bôi vào tối hôm sau.",
      "Xịt nước hoa lên áo đang có mùi không khử được gì — hai mùi chồng lên nhau thường tệ hơn một mùi.",
      "Nếu vùng nách hoặc bẹn có mảng đỏ, ngứa, bong tróc thì đó có thể là nấm và cần thuốc riêng chứ không phải chuyện vệ sinh.",
    ],
    faq: [
      {
        q: "Muối nhôm trong antiperspirant có hại không?",
        a: "Các cơ quan y tế lớn hiện không xác nhận mối liên hệ với ung thư như tin đồn lan truyền nhiều năm qua. Nếu bạn vẫn ngại, có thể dùng loại khử mùi thường kết hợp với tỉa lông và thay áo — hiệu quả kém hơn nhưng vẫn cải thiện.",
      },
      {
        q: "Tắm hai lần một ngày có tốt hơn không?",
        a: "Có thể giúp vào ngày nóng, nhưng tắm quá nhiều với xà phòng mạnh làm khô da và đôi khi khiến cơ thể phản ứng ngược. Quan trọng hơn là lau khô kỹ và thay áo sạch.",
      },
      {
        q: "Vì sao chỉ một bên nách có mùi nặng hơn?",
        a: "Rất thường gặp, thường do bên tay thuận vận động nhiều hơn nên ra mồ hôi nhiều hơn. Cứ xử lý cả hai bên như nhau.",
      },
      {
        q: "Bạn tôi có mùi, tôi nên nói thế nào?",
        a: "Nói riêng, ngắn, một lần, và kèm giải pháp. Đại ý: nói riêng cho ông biết chứ không ai nói đâu, áo ông hình như ám mùi rồi, thử đổi loại lăn khử mùi xem. Đừng nói trước mặt người khác, và đừng nhắc lại lần hai.",
      },
    ],
    sources: [],
  },
  {
    slug: "thuc-pham-bo-sung-phong-gym",
    title: "Thực phẩm bổ sung phòng gym: cái nào đáng tiền, cái nào bỏ",
    excerpt:
      "Cả một kệ hàng với chữ tiếng Anh và hình cơ bắp. Thật ra chỉ có vài món có bằng chứng, phần còn lại bán cho hy vọng của bạn.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nam-gioi",
    author: null,
    quickAnswer:
      "Trong hàng trăm sản phẩm, chỉ một nhóm rất nhỏ có bằng chứng khoa học vững: bột đạm whey (chỉ là cách bổ sung đạm tiện lợi, không phải thuốc), creatine monohydrate, và caffeine. Phần lớn còn lại hiệu quả rất mờ nhạt hoặc chưa được chứng minh. Không có sản phẩm nào bù được cho việc ngủ đủ, ăn đủ đạm và tập đều. Nếu bạn có bệnh thận, gan, tim mạch hoặc đang uống thuốc, hỏi bác sĩ trước khi dùng bất cứ thứ gì.",
    prepare: [
      "Cân nặng của bạn — để tính nhu cầu đạm thật sự mỗi ngày",
      "Ghi lại thực đơn 3 ngày bình thường, xem thực tế bạn đang ăn bao nhiêu đạm",
      "Ngân sách rõ ràng mỗi tháng, để không bị cuốn theo lời tư vấn ở phòng tập",
      "Thông tin bệnh nền và thuốc đang uống, nếu có",
    ],
    steps: [
      {
        title: "Tính nhu cầu đạm trước khi nghĩ tới bột",
        detail:
          "Người tập tạ đều thường cần khoảng 1,6–2,2 gam đạm cho mỗi kg cân nặng mỗi ngày. Người 70kg là khoảng 112–154 gam. Ghi thực đơn ba ngày rồi cộng lại. Rất nhiều người phát hiện mình đã đủ và không cần mua gì cả.",
      },
      {
        title: "So giá đạm từ thức ăn với đạm từ bột",
        detail:
          "Trứng, ức gà, cá, đậu phụ, sữa đều là nguồn đạm rẻ và no lâu hơn. Bột đạm không hơn về chất, nó chỉ hơn về sự tiện — uống nhanh sau buổi tập hoặc những hôm không kịp ăn. Mua nó vì lý do đó thì hợp lý, mua vì tin nó làm to cơ thì không.",
      },
      {
        title: "Nếu mua whey, chọn loại đơn giản nhất",
        detail:
          "Whey concentrate là loại phổ thông và rẻ. Whey isolate lọc kỹ hơn, ít lactose hơn, dành cho người uống sữa bị đầy bụng. Tránh những hộp trộn sẵn hàng chục thành phần với tên kêu — bạn trả tiền cho nhãn chứ không cho chất.",
      },
      {
        title: "Biết về creatine monohydrate",
        detail:
          "Đây là chất được nghiên cứu nhiều nhất và ổn định nhất trong nhóm hỗ trợ tập luyện, giúp tăng sức mạnh và khả năng tập nặng. Nó cũng là loại rẻ nhất. Chỉ mua đúng dạng monohydrate — các dạng gọi là thế hệ mới đắt hơn mà không chứng minh được lợi thế.",
      },
      {
        title: "Đừng hoảng vì mấy kg đầu tăng nhanh",
        detail:
          "Creatine kéo nước vào cơ nên cân nặng thường nhích lên trong tuần đầu. Đó là nước trong cơ, không phải mỡ. Uống đủ nước trong ngày khi dùng.",
      },
      {
        title: "Caffeine: hiệu quả thật nhưng đừng chồng liều",
        detail:
          "Caffeine cải thiện sức bền và sự tập trung khi tập, điều này có bằng chứng rõ. Nhưng nó đã có sẵn trong cà phê, trà, nước tăng lực và trong hầu hết sản phẩm pre-workout. Uống chồng nhiều nguồn cùng lúc dễ gây tim đập nhanh, run tay và mất ngủ — mất ngủ thì hỏng luôn phần phục hồi.",
      },
      {
        title: "Nhìn kỹ nhóm pre-workout",
        detail:
          "Phần lớn cảm giác sung đến từ caffeine cộng với chất gây rần da. Cảm giác không đồng nghĩa với hiệu quả. Nếu bạn tập buổi tối, đây là món dễ phá giấc ngủ nhất trong tủ.",
      },
      {
        title: "Cảnh giác với nhóm hứa hẹn tăng nội tiết tố nam",
        detail:
          "Nhóm sản phẩm quảng cáo tăng testosterone bằng thảo dược nhìn chung không có bằng chứng thuyết phục ở người khoẻ mạnh. Nếu bạn thật sự nghi ngờ nội tiết có vấn đề — mệt kéo dài, giảm ham muốn, khó tăng cơ dù tập đúng — thì đi xét nghiệm máu chứ đừng mua hộp trên mạng.",
      },
      {
        title: "Tránh xa hàng không nhãn phụ và hàng xách tay không rõ nguồn",
        detail:
          "Đây là nhóm rủi ro thật: đã có nhiều trường hợp sản phẩm bị pha trộn chất cấm hoặc chất kê đơn mà không ghi trên nhãn. Chỉ mua nơi có hoá đơn, có nhãn phụ tiếng Việt và có thể tra được đơn vị nhập khẩu.",
      },
      {
        title: "Không bao giờ dùng nhóm tiêm hoặc uống theo lời rỉ tai ở phòng tập",
        detail:
          "Steroid đồng hoá và các chất tương tự gây hại thật cho gan, tim, nội tiết và khả năng sinh sản, và ở Việt Nam việc mua bán sử dụng không có chỉ định y tế là vi phạm pháp luật. Không có huấn luyện viên nào đủ thẩm quyền kê những thứ đó.",
      },
      {
        title: "Thử từng món một, mỗi món ít nhất 6–8 tuần",
        detail:
          "Uống năm thứ cùng lúc thì không bao giờ biết thứ nào có tác dụng. Ghi lại mức tạ và cân nặng hằng tuần. Sau 6–8 tuần nhìn số liệu mà quyết định giữ hay bỏ.",
      },
      {
        title: "Đặt ba thứ này lên trước mọi hộp bột",
        detail:
          "Ngủ 7–8 tiếng, ăn đủ tổng năng lượng và đạm, tập đều với mức tạ tăng dần. Ba thứ đó quyết định phần lớn kết quả. Bổ sung chỉ chen vào phần rất nhỏ còn lại — và chỉ khi ba thứ trên đã ổn.",
      },
    ],
    notes: [
      "Ngừng dùng và đi khám nếu xuất hiện vàng da vàng mắt, nước tiểu sẫm màu bất thường, đau vùng hạ sườn phải, tim đập nhanh kéo dài hoặc phù chân.",
      "Người có bệnh thận, bệnh gan, tăng huyết áp hoặc đang dùng thuốc phải hỏi bác sĩ trước khi dùng bất kỳ thực phẩm bổ sung nào — kể cả loại được coi là an toàn.",
      "Người dưới 18 tuổi nên tập trung vào ăn và ngủ thay vì bổ sung. Cơ thể đang phát triển vốn đã ở giai đoạn thuận lợi nhất.",
      "Bài này là thông tin tham khảo, không phải tư vấn dinh dưỡng cá nhân hay chỉ định y tế.",
    ],
    faq: [
      {
        q: "Không uống whey thì có tăng cơ được không?",
        a: "Hoàn toàn được, miễn là bạn ăn đủ đạm từ thức ăn. Cơ thể không phân biệt đạm đến từ hộp bột hay từ con cá.",
      },
      {
        q: "Uống whey có hại thận không?",
        a: "Ở người khoẻ mạnh, lượng đạm cao trong khoảng khuyến nghị chưa cho thấy gây hại thận. Nhưng người đã có bệnh thận thì khác hẳn và bắt buộc phải theo chỉ định bác sĩ.",
      },
      {
        q: "Có cần nạp creatine liều cao tuần đầu không?",
        a: "Không bắt buộc. Cách nạp nhanh chỉ giúp đạt hiệu quả sớm hơn khoảng hai tuần và dễ gây đầy bụng hơn. Dùng liều đều đặn theo hướng dẫn trên nhãn là được.",
      },
      {
        q: "Huấn luyện viên ở phòng tập tư vấn tôi mua combo mấy triệu, có nên không?",
        a: "Hỏi thẳng một câu: anh có hưởng hoa hồng từ sản phẩm này không? Rất nhiều nơi có. Về nhà tra riêng từng thành phần rồi hãy quyết, đừng quyết khi đang đứng cạnh kệ hàng.",
      },
    ],
    sources: [],
  },

  // ═══════════════════════ NỮ GIỚI ═══════════════════════
  {
    slug: "u-xo-tu-cung-u-nang-buong-trung",
    title: "U xơ tử cung, u nang buồng trứng: nghe đáng sợ mà phần lớn lành tính",
    excerpt:
      "Đi siêu âm về, tờ giấy ghi có khối. Về nhà tra mạng và mất ngủ ba đêm. Đây là những gì bạn nên biết trước khi hoảng.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nu-gioi",
    adult: true,
    author: null,
    quickAnswer:
      "Hai tình trạng này rất phổ biến ở phụ nữ trong độ tuổi sinh sản và tuyệt đại đa số là lành tính. Nhiều u xơ và nang cơ năng nhỏ thậm chí không cần điều trị, chỉ cần theo dõi định kỳ. Nhưng chỉ bác sĩ sản phụ khoa mới phân biệt được loại nào cần theo dõi, loại nào cần can thiệp — nên việc cần làm là mang tờ kết quả tới phòng khám chứ không phải tra mạng. Bài này là kiến thức để bạn hỏi bác sĩ cho đúng, không thay chẩn đoán.",
    prepare: [
      "Tờ kết quả siêu âm gốc, đừng chỉ chụp màn hình vì bác sĩ cần đọc đủ số đo và mô tả",
      "Ngày đầu của kỳ kinh gần nhất và độ dài chu kỳ vài tháng gần đây",
      "Ghi chú về triệu chứng: lượng máu kinh, mức đau, có tiểu nhiều hơn không, bụng có to lên không",
      "Kết quả siêu âm cũ nếu có — so hai lần mới biết khối có lớn lên không",
    ],
    steps: [
      {
        title: "Hiểu hai thứ này khác nhau ở đâu",
        detail:
          "U xơ tử cung là khối cơ mọc ở thành tử cung, gần như luôn lành tính. U nang buồng trứng là túi chứa dịch ở buồng trứng, phần lớn là nang cơ năng — sinh ra theo chu kỳ rồi tự tan trong vài tháng. Hai thứ khác hẳn nhau về cách xử trí, nên đừng gộp chung khi tìm hiểu.",
      },
      {
        title: "Đọc tờ siêu âm với ba con số quan trọng",
        detail:
          "Kích thước tính bằng milimet hoặc centimet, số lượng khối, và vị trí. Vị trí quan trọng không kém kích thước: một u xơ nhỏ nằm lồi vào lòng tử cung có thể gây rong kinh nhiều hơn hẳn một u xơ to nằm ngoài. Đây là lý do không thể tự đánh giá bằng con số.",
      },
      {
        title: "Đừng đọc bảng phân loại trên mạng rồi tự kết luận",
        detail:
          "Các thang phân loại hình ảnh dành cho bác sĩ đọc cùng bối cảnh lâm sàng. Đọc một mình chỉ tạo hoảng loạn. Đây là điều khiến rất nhiều phụ nữ mất ngủ vô ích trong khoảng thời gian chờ tái khám.",
      },
      {
        title: "Ghi lại triệu chứng trong 2–3 chu kỳ",
        detail:
          "Đếm số băng vệ sinh dùng mỗi ngày trong kỳ kinh, ghi ngày đau và mức đau từ 1 đến 10, ghi lại nếu phải thay băng ban đêm. Bác sĩ quyết định điều trị dựa nhiều vào mức độ triệu chứng chứ không chỉ dựa vào kích thước khối.",
      },
      {
        title: "Nhận ra những triệu chứng dễ bị bỏ qua",
        detail:
          "Bụng dưới to lên mà cân nặng không đổi, đi tiểu nhiều lần hơn trước, táo bón mới xuất hiện, đau khi gần gũi, hoặc mệt và hụt hơi khi leo cầu thang do thiếu máu vì mất máu kinh nhiều. Tất cả đều đáng nói với bác sĩ.",
      },
      {
        title: "Xét nghiệm máu kiểm tra thiếu máu",
        detail:
          "Rong kinh kéo dài gây thiếu máu thiếu sắt rất thường gặp, và đó mới là thứ khiến bạn mệt mỏi hằng ngày. Xét nghiệm công thức máu và ferritin rất rẻ. Điều trị thiếu máu có thể cải thiện chất lượng sống ngay cả khi chưa động tới khối u.",
      },
      {
        title: "Đi tái khám đúng hẹn thay vì chờ tới khi lo",
        detail:
          "Với nang cơ năng, bác sĩ thường hẹn siêu âm lại sau một tới ba chu kỳ để xem nó có tự tan không. Rất nhiều nang biến mất ở lần siêu âm thứ hai. Bỏ lần tái khám này là bỏ mất câu trả lời rẻ nhất.",
      },
      {
        title: "Hỏi bác sĩ bốn câu cụ thể",
        detail:
          "Một, khối này thuộc loại nào và có dấu hiệu nào đáng lo không? Hai, nếu chỉ theo dõi thì bao lâu siêu âm lại? Ba, nó có ảnh hưởng tới khả năng mang thai không? Bốn, dấu hiệu nào thì tôi phải quay lại ngay chứ không chờ hẹn?",
      },
      {
        title: "Nói rõ dự định sinh con của bạn",
        detail:
          "Đây là thông tin làm thay đổi hẳn hướng xử trí. Người còn muốn có con, người đã đủ con, và người sắp mãn kinh sẽ được tư vấn ba hướng khác nhau cho cùng một khối u. Bác sĩ không tự biết điều này nếu bạn không nói.",
      },
      {
        title: "Nếu được đề nghị mổ, hỏi kỹ trước khi gật đầu",
        detail:
          "Hỏi vì sao mổ bây giờ mà không theo dõi thêm, mổ theo phương pháp nào, mất bao lâu hồi phục, và có ảnh hưởng tới khả năng mang thai không. Một chỉ định mổ hợp lý luôn giải thích được. Nếu bạn còn phân vân, đi khám thêm ở một nơi khác là hoàn toàn bình thường.",
      },
      {
        title: "Cẩn thận với thuốc nam và thực phẩm chức năng hứa làm tan u",
        detail:
          "Không có bằng chứng cho thấy chúng làm nhỏ u xơ hay nang. Cái hại thật không phải là mất tiền mà là mất thời gian theo dõi. Đã có những trường hợp tới viện muộn vì tin lời quảng cáo trên mạng xã hội.",
      },
      {
        title: "Duy trì lịch khám phụ khoa định kỳ",
        detail:
          "Mỗi 6–12 tháng tuỳ chỉ định của bác sĩ. Đây là loại vấn đề thay đổi chậm và chỉ theo dõi đều mới thấy xu hướng. Đặt nhắc trên điện thoại ngay khi ra khỏi phòng khám.",
      },
    ],
    notes: [
      "Đi cấp cứu ngay: đau bụng dưới dữ dội đột ngột, đau kèm nôn và choáng, sốt cao kèm đau bụng, hoặc chảy máu âm đạo nhiều bất thường. Nang buồng trứng có thể xoắn hoặc vỡ và đó là cấp cứu ngoại khoa.",
      "Ra máu bất thường ngoài kỳ kinh, ra máu sau khi gần gũi, hoặc ra máu sau khi đã mãn kinh đều cần đi khám sớm, không chờ lịch hẹn.",
      "Sụt cân nhanh không rõ lý do, bụng chướng liên tục, ăn nhanh no kèm khối ở buồng trứng là nhóm dấu hiệu cần khám ngay chứ không theo dõi tại nhà.",
      "Bài này là kiến thức phổ thông giúp bạn hỏi bác sĩ cho đúng, không phải chẩn đoán và không thay thế thăm khám.",
    ],
    faq: [
      {
        q: "U xơ tử cung có thành ung thư không?",
        a: "Khả năng một u xơ là ác tính rất thấp. Nhưng u lớn nhanh bất thường, đặc biệt sau mãn kinh, là tình huống bác sĩ sẽ muốn kiểm tra kỹ hơn. Đó là lý do theo dõi định kỳ quan trọng.",
      },
      {
        q: "Có u xơ thì có mang thai được không?",
        a: "Rất nhiều người có u xơ vẫn mang thai và sinh con bình thường. Ảnh hưởng phụ thuộc vào vị trí và kích thước. Nếu bạn đang mong con, nói rõ với bác sĩ ngay từ lần khám đầu để được tư vấn đúng hướng.",
      },
      {
        q: "Nang buồng trứng có phải mổ không?",
        a: "Phần lớn nang cơ năng tự tan sau vài chu kỳ mà không cần làm gì. Chỉ định mổ dành cho nang lớn, nang có đặc điểm nghi ngờ trên hình ảnh, hoặc nang gây triệu chứng nặng. Bác sĩ sẽ giải thích lý do cụ thể.",
      },
      {
        q: "Kiêng ăn gì để u không to lên?",
        a: "Không có chế độ ăn nào được chứng minh làm nhỏ u xơ hay nang. Ăn uống cân bằng, giữ cân nặng hợp lý và bổ sung sắt nếu bị thiếu máu là những việc thật sự có ích.",
      },
    ],
    sources: [],
  },
  {
    slug: "dat-vong-tranh-thai-hieu-truoc-khi-quyet",
    title: "Đặt vòng tránh thai: hiểu cho đủ trước khi quyết",
    excerpt:
      "Người khen tiện, người kể đau, người bảo bị rong kinh cả năm. Sự thật là có nhiều loại vòng khác nhau — và chọn sai loại mới là vấn đề.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nu-gioi",
    adult: true,
    author: null,
    quickAnswer:
      "Vòng tránh thai là dụng cụ nhỏ đặt trong lòng tử cung, hiệu quả cao và dùng được nhiều năm. Có hai nhóm chính: vòng chứa đồng và vòng có nội tiết, và chúng ảnh hưởng lên kỳ kinh theo hai hướng ngược nhau. Việc quan trọng nhất là khám phụ khoa trước để loại trừ viêm nhiễm và để bác sĩ tư vấn loại phù hợp với cơ địa bạn. Đây là thủ thuật y tế, phải làm ở cơ sở y tế có chuyên môn. Bài này không thay tư vấn của bác sĩ.",
    prepare: [
      "Ngày đầu kỳ kinh gần nhất — nhiều nơi hẹn đặt vòng vào những ngày cuối kỳ kinh",
      "Tiền sử phụ khoa: từng viêm nhiễm, từng mổ, số lần sinh, sinh thường hay sinh mổ",
      "Kết quả khám phụ khoa và siêu âm gần đây nếu có",
      "Một người đưa về, và nửa ngày nghỉ ngơi sau thủ thuật",
    ],
    steps: [
      {
        title: "Biết hai nhóm vòng khác nhau thế nào",
        detail:
          "Vòng đồng không chứa nội tiết, dùng được rất lâu, nhưng nhiều người thấy kinh nguyệt ra nhiều hơn và đau bụng kinh hơn trong thời gian đầu. Vòng nội tiết giải phóng lượng nhỏ hormone tại chỗ, thường làm kinh nguyệt ít đi rõ rệt, nhiều người gần như không có kinh. Đây là khác biệt lớn nhất khi chọn.",
      },
      {
        title: "Chọn theo tình trạng kinh nguyệt hiện tại của bạn",
        detail:
          "Nếu bạn vốn đã rong kinh, đau bụng kinh nhiều, thì vòng đồng thường không phải lựa chọn dễ chịu. Ngược lại nếu bạn muốn tránh hoàn toàn nội tiết vì lý do sức khoẻ, vòng đồng là hướng phù hợp. Nói rõ tình trạng kinh nguyệt với bác sĩ ngay từ đầu.",
      },
      {
        title: "Khám phụ khoa trước, không bỏ bước này",
        detail:
          "Đặt vòng khi đang có viêm nhiễm có thể đẩy viêm lên cao hơn trong đường sinh dục. Bác sĩ sẽ khám, có thể lấy dịch xét nghiệm và siêu âm kiểm tra hình dạng tử cung. Nếu nơi nào nhận đặt vòng ngay mà không khám gì, đó là dấu hiệu nên đi chỗ khác.",
      },
      {
        title: "Loại trừ khả năng đang có thai",
        detail:
          "Đây là bước bắt buộc. Nếu có khả năng, thử thai trước. Nói thật với bác sĩ về lần quan hệ gần nhất — thông tin này ảnh hưởng trực tiếp tới an toàn của thủ thuật.",
      },
      {
        title: "Chọn cơ sở y tế đàng hoàng",
        detail:
          "Bệnh viện phụ sản, khoa sản của bệnh viện đa khoa, hoặc trung tâm chăm sóc sức khoẻ sinh sản. Đây là thủ thuật đưa dụng cụ vào trong tử cung nên vô khuẩn và tay nghề quyết định phần lớn trải nghiệm của bạn.",
      },
      {
        title: "Biết trước cảm giác lúc đặt",
        detail:
          "Thủ thuật thường mất vài phút. Phần lớn người thấy đau quặn giống đau bụng kinh mạnh trong khoảng một phút, một số thấy chỉ hơi khó chịu. Hỏi bác sĩ về thuốc giảm đau uống trước — nhiều nơi có nhưng không phải nơi nào cũng chủ động đề nghị.",
      },
      {
        title: "Hỏi cách kiểm tra dây vòng tại nhà",
        detail:
          "Vòng có sợi dây nhỏ thò xuống âm đạo để kiểm tra vòng còn đúng vị trí. Nhờ bác sĩ hướng dẫn cách tự kiểm tra sau mỗi kỳ kinh trong vài tháng đầu — đây là lúc nguy cơ tuột vòng cao nhất.",
      },
      {
        title: "Chuẩn bị tinh thần cho vài tuần đầu",
        detail:
          "Ra máu lấm tấm thất thường, đau bụng âm ỉ, kinh nguyệt chưa đều lại — đều thường gặp trong 3–6 tháng đầu và thường ổn dần. Biết trước thì bạn không hoảng và không tháo vòng quá sớm.",
      },
      {
        title: "Kiêng theo đúng dặn dò trong thời gian đầu",
        detail:
          "Thường bác sĩ dặn kiêng quan hệ, không thụt rửa, không dùng tampon hoặc cốc nguyệt san trong khoảng thời gian đầu. Hỏi cụ thể bao nhiêu ngày và ghi lại, đừng dựa vào trí nhớ lúc còn mệt sau thủ thuật.",
      },
      {
        title: "Đi tái khám theo hẹn",
        detail:
          "Thường có một lần kiểm tra sau kỳ kinh đầu tiên để xác nhận vòng đúng vị trí, rồi định kỳ hằng năm. Ghi luôn ngày hết hạn của vòng vào lịch điện thoại — mỗi loại có thời hạn khác nhau và rất nhiều người quên mất.",
      },
      {
        title: "Nhớ vòng không bảo vệ bạn khỏi bệnh lây qua đường tình dục",
        detail:
          "Đây là điểm nhiều người hiểu nhầm. Vòng chỉ tránh thai. Nếu bạn có bạn tình mới hoặc không chắc về nguy cơ, vẫn cần dùng bao cao su song song.",
      },
      {
        title: "Biết rằng bạn có quyền tháo bất cứ lúc nào",
        detail:
          "Nếu dùng vài tháng mà thật sự không hợp, tháo vòng là thủ thuật nhanh và khả năng có thai trở lại thường phục hồi sớm. Không ai bắt bạn phải chịu đựng cho hết hạn.",
      },
    ],
    notes: [
      "Đi khám ngay: sốt kèm đau bụng dưới sau khi đặt vòng, khí hư có mùi hôi bất thường, đau dữ dội không giảm, chảy máu nhiều thấm băng liên tục, hoặc không sờ thấy dây vòng.",
      "Nếu chậm kinh sau khi đã đặt vòng, vẫn phải thử thai. Không biện pháp nào hiệu quả tuyệt đối và thai ngoài tử cung cần được loại trừ sớm.",
      "Đừng tự mua vòng trôi nổi rồi nhờ người không có chuyên môn đặt. Đây là nhóm tai biến hoàn toàn có thể phòng tránh được.",
      "Bài này là thông tin tham khảo để bạn hỏi bác sĩ cho đúng, không phải chỉ định y tế. Việc chọn biện pháp tránh thai phải do bác sĩ tư vấn theo tình trạng cụ thể của bạn.",
    ],
    faq: [
      {
        q: "Chưa sinh con có đặt vòng được không?",
        a: "Nhiều hướng dẫn hiện nay cho phép, và có những loại vòng kích thước nhỏ hơn phù hợp hơn. Nhưng đây đúng là câu cần hỏi trực tiếp bác sĩ vì phụ thuộc vào từng người.",
      },
      {
        q: "Đặt vòng có ảnh hưởng tới khả năng có con sau này không?",
        a: "Không có bằng chứng cho thấy vòng làm giảm khả năng sinh sản lâu dài. Sau khi tháo, khả năng mang thai thường trở lại sớm.",
      },
      {
        q: "Vòng có bị tuột không, làm sao biết?",
        a: "Có thể tuột, hay gặp nhất trong vài tháng đầu và trong kỳ kinh. Cách phát hiện là tự kiểm tra dây theo hướng dẫn của bác sĩ. Không sờ thấy dây thì đi khám và dùng biện pháp tránh thai khác cho tới khi kiểm tra xong.",
      },
      {
        q: "Bạn tình có cảm nhận được vòng không?",
        a: "Bình thường thì không, vì chỉ có sợi dây rất mảnh. Nếu bạn tình thấy cộm hoặc đau, nói với bác sĩ — dây có thể cần cắt ngắn lại, đó là việc đơn giản.",
      },
    ],
    sources: [],
  },
  {
    slug: "di-kham-thai-lan-dau-chuan-bi-gi",
    title: "Đi khám thai lần đầu: mang gì, hỏi gì, tốn bao lâu",
    excerpt:
      "Que thử hai vạch rồi, bây giờ làm gì tiếp? Đây là toàn bộ buổi khám đầu tiên, từ lúc đặt lịch tới lúc cầm sổ khám thai ra về.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Sau khi thử thai dương tính, nên đi khám lần đầu trong khoảng tuần thứ 6 đến tuần thứ 8 tính từ ngày đầu kỳ kinh cuối. Buổi khám đó gồm siêu âm xác nhận thai đã vào tử cung, xét nghiệm máu và nước tiểu cơ bản, và bác sĩ lập sổ theo dõi thai. Nhớ ngày đầu kỳ kinh cuối cùng — đó là thông tin quan trọng nhất bạn mang theo. Bài này không thay tư vấn của bác sĩ sản khoa.",
    prepare: [
      "Ngày đầu tiên của kỳ kinh cuối cùng — bác sĩ dùng nó để tính tuổi thai và ngày dự sinh",
      "CCCD, thẻ bảo hiểm y tế, và một cuốn sổ để ghi lời dặn",
      "Danh sách thuốc, thực phẩm chức năng, vitamin đang dùng — chụp ảnh vỏ hộp là nhanh nhất",
      "Tiền sử bệnh của bạn và của gia đình hai bên: tiểu đường, tăng huyết áp, bệnh di truyền, tiền sử sảy thai",
    ],
    steps: [
      {
        title: "Xác định đúng thời điểm nên đi khám",
        detail:
          "Đi quá sớm, chẳng hạn ngay khi vừa chậm kinh vài ngày, thì siêu âm thường chưa thấy gì và bạn phải quay lại. Khoảng tuần 6–8 là lúc thường đã thấy được túi thai và tim thai. Nếu bạn có ra máu hoặc đau bụng thì đi ngay bất kể tuần nào.",
      },
      {
        title: "Bắt đầu uống axit folic ngay từ hôm nay",
        detail:
          "Đây là việc không cần chờ tới buổi khám. Axit folic giúp giảm nguy cơ dị tật ống thần kinh và giai đoạn quan trọng nhất là những tuần rất sớm. Mua loại dành cho bà bầu ở nhà thuốc và hỏi bác sĩ xác nhận liều ở buổi khám.",
      },
      {
        title: "Chọn nơi khám mà bạn định theo suốt thai kỳ",
        detail:
          "Đổi chỗ liên tục làm hồ sơ theo dõi bị đứt quãng, và chính sự liên tục mới giúp phát hiện bất thường. Cân nhắc quãng đường đi lại, chi phí và nơi bạn dự định sinh. Có thể khám ở phòng khám gần nhà nhưng nên chọn nơi có hồ sơ lưu.",
      },
      {
        title: "Gọi đặt lịch và hỏi trước hai câu",
        detail:
          "Có cần nhịn ăn không, và buổi đầu tiên chi phí khoảng bao nhiêu. Nhiều nơi làm xét nghiệm máu ngay buổi đầu nên có thể cần nhịn ăn. Hỏi trước thì đỡ phải quay lại lần hai.",
      },
      {
        title: "Biết trước buổi khám gồm những gì",
        detail:
          "Thường có: hỏi bệnh sử, đo huyết áp và cân nặng, siêu âm, xét nghiệm máu và nước tiểu. Siêu âm giai đoạn sớm có thể là siêu âm đầu dò qua đường âm đạo vì nó nhìn rõ hơn ở tuần nhỏ — biết trước thì đỡ bất ngờ.",
      },
      {
        title: "Hiểu vì sao bác sĩ cần xác nhận thai nằm trong tử cung",
        detail:
          "Đây là mục tiêu quan trọng nhất của siêu âm lần đầu. Thai ngoài tử cung là tình huống nguy hiểm cần phát hiện sớm. Nếu bác sĩ hẹn siêu âm lại sau một tuần để xác nhận thêm, đó là quy trình bình thường chứ không phải dấu hiệu xấu.",
      },
      {
        title: "Nói thật mọi thứ bạn đang uống",
        detail:
          "Kể cả thuốc bổ, trà thảo mộc, thuốc đau đầu bạn uống tuần trước khi chưa biết mình có thai. Bác sĩ cần biết để đánh giá, và họ không trách bạn. Giấu thông tin mới là điều gây hại.",
      },
      {
        title: "Hỏi rõ lịch khám và các mốc quan trọng",
        detail:
          "Xin bác sĩ ghi ra: lần khám tiếp theo là khi nào, những tuần nào có siêu âm hoặc xét nghiệm sàng lọc quan trọng. Chụp ảnh tờ lịch đó và đặt nhắc trên điện thoại ngay tại chỗ.",
      },
      {
        title: "Hỏi những gì được ăn, được làm và cần tránh",
        detail:
          "Đừng dựa vào danh sách kiêng cữ trên mạng xã hội vì phần lớn là truyền miệng. Hỏi cụ thể về công việc của bạn — nếu bạn phải đứng lâu, bê nặng, hoặc tiếp xúc hoá chất thì đó là thông tin bác sĩ cần biết.",
      },
      {
        title: "Hỏi dấu hiệu nào phải quay lại ngay",
        detail:
          "Đây là câu hỏi quan trọng nhất trong cả buổi và nhiều người quên hỏi. Ghi câu trả lời vào điện thoại. Biết ranh giới giữa khó chịu bình thường và dấu hiệu nguy hiểm giúp bạn bớt lo suốt thai kỳ.",
      },
      {
        title: "Giữ sổ khám thai như giữ giấy tờ tuỳ thân",
        detail:
          "Mang theo mỗi lần khám, và chụp ảnh lưu trên điện thoại phòng khi mất. Nếu phải đi cấp cứu ở nơi khác, cuốn sổ này là thứ giúp bác sĩ ở đó hiểu ngay tình hình.",
      },
      {
        title: "Hỏi về bảo hiểm và chi phí cho cả thai kỳ",
        detail:
          "Hỏi ngay từ buổi đầu: những khoản nào bảo hiểm y tế chi trả, những khoản nào tự trả, và tổng ước tính cho cả thai kỳ ở nơi này. Biết sớm thì có thời gian chuẩn bị, hơn là bị bất ngờ ở tháng thứ bảy.",
      },
    ],
    notes: [
      "Đi cấp cứu ngay, không chờ lịch hẹn: ra máu âm đạo, đau bụng dưới dữ dội hoặc đau một bên, choáng ngất, sốt cao, hoặc nôn nhiều tới mức không ăn uống được gì.",
      "Không tự uống bất kỳ thuốc nào khi đang mang thai mà chưa hỏi bác sĩ hoặc dược sĩ, kể cả thuốc cảm và thuốc đau đầu thông thường.",
      "Nếu bạn có bệnh mạn tính như tiểu đường, tuyến giáp, tăng huyết áp hoặc động kinh, hãy nói ngay từ buổi đầu — có những thuốc cần được bác sĩ điều chỉnh sớm.",
      "Bài này là hướng dẫn thủ tục để bạn đi khám cho suôn sẻ, không phải tư vấn y tế. Mọi quyết định về thai kỳ phải theo bác sĩ sản khoa.",
    ],
    faq: [
      {
        q: "Chưa thấy tim thai ở lần siêu âm đầu có sao không?",
        a: "Rất thường gặp nếu tuổi thai còn nhỏ hoặc ngày rụng trứng muộn hơn dự tính. Bác sĩ thường hẹn siêu âm lại sau 1–2 tuần. Đây là bước theo dõi bình thường, hãy chờ lần kiểm tra sau rồi mới kết luận.",
      },
      {
        q: "Không nhớ ngày đầu kỳ kinh cuối thì sao?",
        a: "Không sao, siêu âm sớm cũng ước tính được tuổi thai khá chính xác. Cứ nói thật là bạn không nhớ thay vì đoán bừa một ngày.",
      },
      {
        q: "Siêu âm đầu dò có ảnh hưởng tới thai không?",
        a: "Đây là kỹ thuật được dùng phổ biến trong thai kỳ sớm và được xem là an toàn. Nếu bạn lo lắng hoặc thấy ngại, cứ nói với bác sĩ trước khi làm.",
      },
      {
        q: "Đi khám lần đầu một mình có được không?",
        a: "Hoàn toàn được. Nhưng có người đi cùng thì đỡ hơn ở chỗ họ nhớ giúp bạn lời dặn của bác sĩ. Nếu đi một mình, hãy ghi âm hoặc ghi chép lại phần dặn dò.",
      },
    ],
    sources: [],
  },
  {
    slug: "rung-toc-sau-sinh-bao-lau-thi-het",
    title: "Rụng tóc sau sinh: bao lâu thì hết và làm gì cho nhanh",
    excerpt:
      "Tóc rụng thành từng nắm mỗi lần gội, tắc cả cống. Đây là chuyện gần như ai cũng gặp — và có một mốc thời gian khá rõ để bạn bớt lo.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Trong thai kỳ, nội tiết giữ tóc ở lại lâu hơn bình thường nên nhiều người thấy tóc dày hơn. Sau sinh, nội tiết trở về bình thường và toàn bộ số tóc lẽ ra đã rụng dần trong chín tháng cùng rụng trong vài tuần. Nó thường bắt đầu quanh tháng thứ 2–4 sau sinh, đỉnh điểm vài tuần rồi giảm dần, và phần lớn phục hồi trong khoảng 6–12 tháng. Nếu rụng kéo dài quá một năm hoặc lộ mảng da đầu thì nên đi khám.",
    prepare: [
      "Một chiếc lược răng thưa để gỡ tóc ướt mà không kéo đứt",
      "Dây buộc tóc mềm loại không có phần kim loại",
      "Kết quả xét nghiệm máu gần nhất nếu có, nhất là chỉ số sắt và tuyến giáp",
      "Vài tấm ảnh chụp đỉnh đầu mỗi tháng, để so tiến triển thay vì dựa vào cảm giác",
    ],
    steps: [
      {
        title: "Biết đây là hiện tượng có tên và có thời hạn",
        detail:
          "Y học gọi là rụng tóc telogen sau sinh. Nó không phải hói và không phải bệnh. Điểm quan trọng nhất là nang tóc không chết — chúng chỉ đồng loạt bước vào pha nghỉ rồi mọc lại. Biết vậy thì bạn không tiêu tiền vào những sản phẩm chống hói không cần thiết.",
      },
      {
        title: "Xác định bạn đang ở đâu trên mốc thời gian",
        detail:
          "Thường bắt đầu tháng thứ 2 đến tháng thứ 4 sau sinh, nặng nhất trong khoảng một tới hai tháng, rồi giảm dần. Đa số thấy tóc dày lại rõ rệt vào khoảng tháng thứ 9 đến tháng thứ 12. Ghi mốc bắt đầu vào điện thoại để theo dõi.",
      },
      {
        title: "Chụp ảnh mỗi tháng thay vì đếm tóc rụng",
        detail:
          "Đếm tóc trong cống mỗi ngày chỉ làm bạn lo thêm. Chụp một tấm đỉnh đầu và một tấm đường ngôi, cùng ánh sáng, mỗi tháng một lần. Đây là cách duy nhất thấy được tiến triển thật.",
      },
      {
        title: "Kiểm tra thiếu máu thiếu sắt",
        detail:
          "Mất máu khi sinh cộng với nhu cầu cao khi cho con bú khiến thiếu sắt rất phổ biến, và thiếu sắt làm rụng tóc nặng thêm và lâu hồi phục hơn. Xét nghiệm công thức máu và ferritin rất rẻ. Đây là việc đáng làm nhất trong cả danh sách.",
      },
      {
        title: "Kiểm tra tuyến giáp nếu có thêm dấu hiệu khác",
        detail:
          "Viêm tuyến giáp sau sinh không hiếm và cũng gây rụng tóc. Nếu bạn kèm theo mệt bất thường, sợ lạnh hoặc sợ nóng, tim đập nhanh, sụt cân hoặc tăng cân không giải thích được, hãy nói với bác sĩ để được chỉ định xét nghiệm.",
      },
      {
        title: "Bớt kéo tóc trong sinh hoạt hằng ngày",
        detail:
          "Buộc tóc quá chặt, búi cao cả ngày, kẹp sát chân tóc đều làm gãy thêm phần tóc đang yếu. Buộc lỏng, đổi kiểu buộc mỗi ngày, và bỏ buộc khi ngủ. Đây là thay đổi không tốn tiền mà thấy khác biệt sớm.",
      },
      {
        title: "Đổi cách gội chứ không phải đổi tần suất",
        detail:
          "Gội ít lại không làm tóc rụng ít hơn — tóc đã vào pha rụng thì vẫn rụng, chỉ là dồn lại một lần cho bạn sợ hơn. Gội bình thường, xoa nhẹ da đầu bằng đầu ngón tay chứ không cào bằng móng, và xả sạch dầu gội.",
      },
      {
        title: "Gỡ tóc lúc gần khô, không gỡ lúc ướt sũng",
        detail:
          "Tóc ướt yếu nhất và dễ đứt nhất. Thấm khăn cho ráo, để se lại rồi mới chải bằng lược răng thưa, chải từ ngọn lên dần. Nghe nhỏ nhặt nhưng đây là chỗ nhiều tóc bị đứt oan nhất.",
      },
      {
        title: "Ăn đủ đạm — quan trọng hơn mọi loại dầu gội",
        detail:
          "Tóc làm từ đạm. Giai đoạn sau sinh và cho con bú rất dễ ăn qua loa vì không có thời gian. Chuẩn bị sẵn trứng luộc, sữa, các loại hạt để ăn nhanh giữa các cữ. Ăn đủ có ích thật, trong khi phần lớn dầu gội chống rụng chỉ tác động lên bề mặt.",
      },
      {
        title: "Cắt ngắn hoặc đổi kiểu để dễ chịu hơn",
        detail:
          "Tóc ngắn không mọc nhanh hơn, nhưng nó nhẹ hơn, đỡ kéo chân tóc, nhìn dày hơn và rụng ít gây hoảng hơn khi gội. Với người vừa sinh con, đây còn là cách tiết kiệm thời gian mỗi sáng.",
      },
      {
        title: "Cẩn thận với hoá chất trong giai đoạn này",
        detail:
          "Uốn, duỗi, tẩy màu trong lúc tóc đang yếu dễ làm gãy thêm phần tóc mới mọc. Nếu muốn làm, đợi qua giai đoạn đỉnh điểm và nói rõ tình trạng với thợ. Nếu đang cho con bú, hỏi bác sĩ trước.",
      },
      {
        title: "Đi khám nếu quá mốc mà không cải thiện",
        detail:
          "Rụng kéo dài trên 12 tháng, lộ mảng da đầu, đường ngôi rộng ra rõ rệt, hoặc rụng cả lông mày — đều là lý do đi khám da liễu. Có những nguyên nhân khác cần điều trị riêng chứ không phải chỉ là hậu quả sau sinh.",
      },
    ],
    notes: [
      "Đi khám thay vì chờ đợi: rụng thành mảng tròn nhẵn, da đầu đỏ ngứa hoặc có vảy dày, kèm mệt mỏi nhiều bất thường, hoặc kèm tim đập nhanh và sụt cân.",
      "Đừng dùng thuốc mọc tóc kê đơn khi đang mang thai hoặc cho con bú mà chưa hỏi bác sĩ — một số hoạt chất có chống chỉ định rõ ràng.",
      "Cảnh giác với các gói điều trị rụng tóc sau sinh giá cao ở spa. Phần lớn trường hợp tự hồi phục theo thời gian, và bạn có thể trả tiền cho thứ vốn dĩ sẽ tự tốt lên.",
      "Bài này là thông tin phổ thông. Nếu bạn lo lắng hoặc tình trạng không giống mô tả ở đây, hãy đi khám bác sĩ da liễu.",
    ],
    faq: [
      {
        q: "Cho con bú có làm rụng tóc nhiều hơn không?",
        a: "Bản thân việc cho bú không gây rụng tóc. Nhưng nếu vì cho bú mà bạn ăn thiếu chất hoặc thiếu sắt thì tình trạng sẽ lâu hồi phục hơn. Vấn đề nằm ở dinh dưỡng chứ không ở việc cho bú.",
      },
      {
        q: "Sinh con thứ hai có bị lại không?",
        a: "Thường là có, vì cơ chế nội tiết giống nhau. Mức độ có thể khác lần trước. Lần này bạn đã biết mốc thời gian nên sẽ đỡ hoảng hơn nhiều.",
      },
      {
        q: "Có nên uống viên uống mọc tóc không?",
        a: "Nếu xét nghiệm cho thấy bạn thiếu sắt hoặc thiếu chất cụ thể thì bổ sung theo chỉ định là có ích. Uống bừa các viên tổng hợp khi không thiếu gì thì hiệu quả không rõ, và có chất uống thừa còn gây hại.",
      },
      {
        q: "Tóc con mọc lên lởm chởm quanh trán, có bình thường không?",
        a: "Rất bình thường và là dấu hiệu tốt — đó chính là tóc mới đang mọc lại. Chúng sẽ dài dần và hoà vào phần tóc còn lại sau vài tháng.",
      },
    ],
    sources: [],
  },
  {
    slug: "thieu-mau-thieu-sat-o-phu-nu",
    title: "Thiếu máu thiếu sắt ở phụ nữ: mệt mãi mà không rõ vì sao",
    excerpt:
      "Leo hai tầng cầu thang đã hụt hơi, chiều nào cũng đuối, tóc rụng, móng giòn. Nhiều người đổ cho stress — trong khi một xét nghiệm rẻ tiền có thể trả lời.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Thiếu máu thiếu sắt rất phổ biến ở phụ nữ trong độ tuổi có kinh, đặc biệt với người kinh nguyệt ra nhiều, người vừa sinh con, và người ăn ít thịt. Nó tích tụ chậm nên cơ thể quen dần và bạn tưởng mình chỉ đang mệt vì công việc. Chỉ cần xét nghiệm công thức máu và ferritin là biết. Nhưng đừng tự mua sắt uống trước khi xét nghiệm — thừa sắt cũng gây hại và việc quan trọng hơn là tìm ra nguyên nhân mất máu.",
    prepare: [
      "Ghi lại triệu chứng trong hai tuần: mức mệt, hụt hơi, chóng mặt khi đứng dậy",
      "Thông tin về kỳ kinh: số ngày, số băng vệ sinh mỗi ngày, có cục máu đông lớn không",
      "Danh sách thuốc đang dùng, gồm cả thuốc dạ dày và thuốc giảm đau dùng thường xuyên",
      "Thẻ bảo hiểm y tế và kết quả xét nghiệm máu cũ nếu có, để so sánh",
    ],
    steps: [
      {
        title: "Nhận ra bộ triệu chứng thường bị đổ cho stress",
        detail:
          "Mệt kéo dài dù ngủ đủ, hụt hơi khi leo cầu thang, chóng mặt khi đứng dậy nhanh, tim đập nhanh, da xanh, môi và trong mí mắt dưới nhợt, tóc rụng, móng tay giòn và lõm hình thìa. Có vài dấu hiệu trong nhóm này thì đáng đi xét nghiệm.",
      },
      {
        title: "Biết những triệu chứng lạ mà ít người liên hệ",
        detail:
          "Thèm nhai đá lạnh liên tục, thèm ăn những thứ không phải thức ăn, hoặc hội chứng chân không yên khiến bạn phải cựa chân mới ngủ được. Đây là các dấu hiệu khá đặc trưng của thiếu sắt mà hầu như không ai nghĩ tới.",
      },
      {
        title: "Đánh giá lượng máu kinh của bạn cho khách quan",
        detail:
          "Nhiều người nghĩ mình bình thường vì chưa từng so với ai. Các mốc đáng chú ý: kỳ kinh kéo dài trên 7 ngày, phải thay băng dưới 2 tiếng một lần, phải dậy thay băng ban đêm, hoặc có cục máu đông lớn. Nếu có, đó có thể chính là nguyên nhân và cần khám phụ khoa.",
      },
      {
        title: "Đi xét nghiệm trước khi mua bất cứ viên sắt nào",
        detail:
          "Yêu cầu công thức máu và ferritin. Ferritin phản ánh lượng sắt dự trữ và có thể đã cạn từ lâu trước khi công thức máu bất thường. Nhiều người xét nghiệm công thức máu thấy bình thường rồi yên tâm, trong khi kho dự trữ đã cạn.",
      },
      {
        title: "Đừng dừng ở việc uống sắt, phải tìm nguyên nhân",
        detail:
          "Thiếu sắt luôn có lý do: mất máu qua kinh nguyệt, mất máu đường tiêu hoá, kém hấp thu, hoặc ăn thiếu. Uống sắt mà không tìm nguyên nhân là vá lỗ thủng trong khi nước vẫn chảy ra. Bác sĩ có thể chỉ định thêm kiểm tra tuỳ tình huống.",
      },
      {
        title: "Uống sắt đúng cách để nó thật sự hấp thu",
        detail:
          "Uống lúc bụng đói hấp thu tốt hơn, nhưng nếu bị cồn ruột thì uống sau ăn nhẹ. Uống kèm nguồn vitamin C như nước cam hoặc một miếng ổi giúp hấp thu tốt hơn rõ rệt. Liều và loại phải theo chỉ định của bác sĩ.",
      },
      {
        title: "Tránh những thứ chặn hấp thu sắt",
        detail:
          "Trà, cà phê, sữa và canxi đều làm giảm hấp thu sắt đáng kể. Đừng uống viên sắt cùng lúc với chúng — cách nhau ít nhất hai tiếng. Rất nhiều người uống sắt rồi chiêu bằng cốc trà và tự làm hỏng công của mình.",
      },
      {
        title: "Chuẩn bị tinh thần cho tác dụng phụ đường ruột",
        detail:
          "Táo bón, phân sẫm màu gần như đen, buồn nôn nhẹ — đều thường gặp. Phân sẫm màu do sắt là bình thường. Uống nhiều nước, ăn thêm rau. Nếu quá khó chịu, hỏi bác sĩ đổi loại hoặc đổi cách uống chứ đừng tự bỏ.",
      },
      {
        title: "Ăn theo hướng có ích thật",
        detail:
          "Sắt từ thịt đỏ, gan, huyết, hải sản hấp thu tốt hơn nhiều so với sắt từ rau. Nếu bạn ăn chay, hãy kết hợp đậu, hạt, rau lá xanh đậm với nguồn vitamin C trong cùng bữa và nói với bác sĩ về chế độ ăn của mình.",
      },
      {
        title: "Kiên nhẫn — cải thiện tính bằng tháng",
        detail:
          "Bạn có thể thấy đỡ mệt sau vài tuần, nhưng để lấp lại kho dự trữ thường cần vài tháng uống đều. Rất nhiều người uống hai tuần thấy khoẻ rồi bỏ, và vài tháng sau quay lại đúng chỗ cũ.",
      },
      {
        title: "Xét nghiệm lại theo hẹn để biết đã đủ chưa",
        detail:
          "Bác sĩ thường hẹn kiểm tra lại sau một khoảng thời gian điều trị. Đây là cách duy nhất biết khi nào dừng được. Dừng theo cảm giác là lý do phổ biến khiến tình trạng quay lại.",
      },
      {
        title: "Nếu là do kinh nguyệt ra nhiều, xử lý cả gốc đó",
        detail:
          "Khám phụ khoa để tìm nguyên nhân như u xơ hay rối loạn nội tiết. Có nhiều cách giảm lượng máu kinh mà bác sĩ có thể tư vấn. Giải quyết được gốc thì bạn không phải uống sắt mãi.",
      },
    ],
    notes: [
      "Đi khám ngay: hụt hơi cả khi nghỉ ngơi, đau ngực, ngất, tim đập rất nhanh, hoặc da nhợt nhiều kèm mệt lả. Thiếu máu nặng cần xử trí y tế chứ không phải uống viên sắt ở nhà.",
      "Đi khám sớm nếu có máu trong phân, phân đen như hắc ín khi không uống sắt, hoặc nôn ra máu — đó là dấu hiệu mất máu đường tiêu hoá cần tìm nguyên nhân ngay.",
      "Không tự uống sắt kéo dài khi chưa xét nghiệm. Có những bệnh khiến cơ thể tích tụ quá nhiều sắt, và bổ sung thêm sẽ gây hại.",
      "Bài này là thông tin phổ thông để bạn biết đi xét nghiệm, không phải chỉ định điều trị. Liều lượng và loại thuốc phải do bác sĩ quyết định.",
    ],
    faq: [
      {
        q: "Ăn nhiều rau xanh có đủ bù sắt không?",
        a: "Rau lá xanh đậm có sắt nhưng cơ thể hấp thu kém hơn nhiều so với sắt từ thịt. Nếu bạn đã thiếu thật sự thì ăn uống đơn thuần thường không đủ để lấp lại kho dự trữ, cần bổ sung theo chỉ định.",
      },
      {
        q: "Uống sắt bị táo bón quá thì làm sao?",
        a: "Uống nhiều nước, tăng rau và chất xơ, chia liều nhỏ hơn hoặc uống cách ngày nếu bác sĩ đồng ý. Có nhiều dạng sắt khác nhau và một số dạng dễ chịu hơn — hỏi bác sĩ đổi loại.",
      },
      {
        q: "Xét nghiệm có cần nhịn ăn không?",
        a: "Công thức máu thì thường không cần. Nhưng nếu bác sĩ chỉ định thêm các xét nghiệm khác trong cùng lần thì có thể cần. Gọi hỏi phòng xét nghiệm trước khi đi cho chắc.",
      },
      {
        q: "Tôi ăn chay, có nguy cơ cao hơn không?",
        a: "Có, vì sắt từ thực vật hấp thu kém hơn. Không có nghĩa là bạn phải bỏ ăn chay — chỉ cần xét nghiệm định kỳ, kết hợp thực phẩm đúng cách và bổ sung khi bác sĩ chỉ định.",
      },
    ],
    sources: [],
  },

  // ═══════════════════════ 18+ ═══════════════════════
  {
    slug: "noi-voi-ban-tinh-ve-suc-khoe-cua-minh",
    title: "Nói với bạn tình về tình trạng sức khoẻ của mình",
    excerpt:
      "Bạn có kết quả xét nghiệm, hoặc một tình trạng mạn tính, và bạn sợ nói ra sẽ mất người ta. Đây là cách nói mà vẫn giữ được cả hai thứ.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "18-plus",
    adult: true,
    author: null,
    quickAnswer:
      "Nói sớm, nói ngắn, nói ở nơi riêng tư và không phải lúc sắp gần gũi. Chuẩn bị trước một câu mở đầu và vài thông tin cơ bản đúng, vì người nghe sẽ phản ứng theo mức bình tĩnh của bạn. Cho họ thời gian tiếp nhận thay vì đòi câu trả lời ngay. Đây là việc khó nhưng nói ra sớm luôn nhẹ hơn để họ biết muộn từ nguồn khác.",
    prepare: [
      "Thông tin chính xác về tình trạng của bạn: khả năng lây, cách phòng, việc bạn đang điều trị tới đâu",
      "Một khoảng thời gian riêng tư, không vội, không có mặt người thứ ba",
      "Một câu mở đầu đã tập trước, để không lúng túng ở giây đầu tiên",
      "Sẵn sàng cho mọi phản ứng — kể cả phản ứng bạn không muốn nghe",
    ],
    steps: [
      {
        title: "Xác định chính xác điều bạn cần nói",
        detail:
          "Một kết quả xét nghiệm dương tính, một tình trạng mạn tính, một tiền sử cần bạn tình biết — mỗi thứ cần lượng thông tin khác nhau. Viết ra hai ba câu bạn muốn họ nhớ. Nói ít mà rõ tốt hơn nói dài mà rối.",
      },
      {
        title: "Nắm thông tin đúng trước khi mở lời",
        detail:
          "Hỏi bác sĩ ba điều: khả năng lây thực tế là bao nhiêu, cách phòng cụ thể là gì, và điều trị hiện tại thay đổi con số đó thế nào. Có thông tin đúng thì bạn nói bình tĩnh, và sự bình tĩnh của bạn quyết định phần lớn cách họ phản ứng.",
      },
      {
        title: "Chọn thời điểm sớm, không phải lúc sắp gần gũi",
        detail:
          "Nói trong lúc quần áo đã cởi là tình huống tệ nhất cho cả hai — họ thấy bị dồn, bạn thấy bị đánh giá. Chọn một lúc bình thường: đang đi bộ, đang ngồi uống nước, ở nhà riêng.",
      },
      {
        title: "Chọn nơi riêng tư nhưng không bí bách",
        detail:
          "Nhà riêng, hoặc một chỗ ngoài trời vắng người. Tránh quán đông vì họ có thể xúc động và không muốn ai thấy. Tránh cả tin nhắn nếu quan hệ đã đủ nghiêm túc — chữ viết dễ bị đọc lạnh hơn ý bạn muốn.",
      },
      {
        title: "Mở đầu bằng một câu báo trước",
        detail:
          "Có một chuyện về sức khoẻ mình muốn nói với bạn trước khi đi xa hơn. Câu này làm hai việc: cho họ thời gian chuẩn bị và cho thấy bạn tôn trọng họ. Nó tốt hơn nhiều so với vào thẳng vấn đề.",
      },
      {
        title: "Nói sự thật gọn, đừng xin lỗi quá nhiều",
        detail:
          "Xin lỗi liên tục biến bạn thành người có tội và biến họ thành người phán xử. Bạn đang chia sẻ thông tin y tế, không phải thú tội. Nói thẳng tình trạng, rồi nói ngay phần bạn đang làm để xử lý nó.",
      },
      {
        title: "Đưa phần giải pháp ngay sau phần thông tin",
        detail:
          "Người nghe sợ nhất là khoảng trống. Nếu bạn nói được rằng mình đang điều trị, đang theo dõi ở đâu, và hai người có thể phòng bằng cách nào, thì cuộc trò chuyện chuyển từ tin xấu sang việc cần làm.",
      },
      {
        title: "Cho họ im lặng mà không lấp vào",
        detail:
          "Họ sẽ cần vài giây, có khi vài phút. Đừng lấp khoảng lặng bằng cách nói thêm hoặc rút lại. Im lặng cùng họ là một cách tôn trọng.",
      },
      {
        title: "Chuẩn bị cho ba kiểu phản ứng",
        detail:
          "Có người bình thản và hỏi tiếp. Có người hoảng và hỏi dồn. Có người cần rút lui để nghĩ. Cả ba đều bình thường ở phút đầu. Đừng đánh giá cả mối quan hệ dựa vào phản ứng trong năm phút đầu tiên.",
      },
      {
        title: "Đề nghị họ cùng đi khám thay vì thuyết phục bằng lời",
        detail:
          "Nếu tình trạng của bạn có liên quan tới họ, câu hữu ích nhất là rủ họ đi xét nghiệm cùng. Nó biến chuyện từ tôi có vấn đề thành chúng ta cùng kiểm tra, và bác sĩ sẽ giải thích thay bạn phần chuyên môn.",
      },
      {
        title: "Chấp nhận rằng họ có quyền quyết định",
        detail:
          "Họ có quyền tiếp tục và cũng có quyền dừng. Một người rời đi vì tin này không phải bằng chứng rằng bạn đáng bị bỏ — đó là giới hạn của họ. Bạn đã làm đúng phần của mình, và phần đó mới là thứ bạn kiểm soát được.",
      },
      {
        title: "Chăm sóc chính mình sau cuộc nói chuyện",
        detail:
          "Dù kết quả thế nào, đây là việc tiêu hao rất nhiều sức. Hẹn trước với một người bạn tin cậy để gọi sau đó. Nếu bạn thấy tuyệt vọng kéo dài, hãy tìm chuyên gia tâm lý — đây là loại gánh nặng không nên mang một mình.",
      },
    ],
    notes: [
      "Nếu bạn tình phản ứng bằng đe doạ, ép buộc, hoặc doạ công khai chuyện của bạn, đó là hành vi nguy hiểm. Giữ lại bằng chứng tin nhắn, nói với một người thân, và cân nhắc báo cơ quan chức năng.",
      "Tình trạng sức khoẻ của bạn là thông tin riêng tư được pháp luật bảo vệ. Không ai có quyền công bố nó thay bạn.",
      "Nếu bạn đang có tình trạng lây nhiễm, hãy hỏi bác sĩ rõ về việc phòng lây cho bạn tình. Đây là phần chuyên môn và không nên dựa vào thông tin trên mạng.",
      "Bài này nói về cách trò chuyện, không phải tư vấn y tế. Mọi thông tin về khả năng lây và cách phòng phải lấy từ bác sĩ điều trị của bạn.",
    ],
    faq: [
      {
        q: "Có bắt buộc phải nói không?",
        a: "Về mặt đạo đức thì có, khi tình trạng của bạn ảnh hưởng tới sức khoẻ người kia. Với một số bệnh, việc cố tình che giấu và lây cho người khác còn có thể bị xem xét về mặt pháp lý. Hỏi bác sĩ cho rõ trường hợp của bạn.",
      },
      {
        q: "Nói ở giai đoạn nào của mối quan hệ?",
        a: "Trước khi có tiếp xúc có nguy cơ. Không cần nói ở buổi hẹn đầu tiên khi mọi thứ còn chưa rõ, nhưng cũng đừng để tới lúc quá muộn.",
      },
      {
        q: "Nếu họ kể lại cho người khác thì sao?",
        a: "Đó là điều bạn không kiểm soát được và cũng là một rủi ro thật. Nói với người bạn đủ tin, và có thể nói thẳng rằng đây là chuyện bạn mong được giữ riêng. Nếu họ lan truyền, đó là phản bội lòng tin chứ không phải lỗi của bạn.",
      },
      {
        q: "Tôi quá lo, không dám mở lời, phải làm sao?",
        a: "Tập nói thành tiếng một mình vài lần, hoặc viết ra giấy. Nhiều người thấy dễ hơn khi nhắn tin xin một cuộc nói chuyện trước, rồi nói trực tiếp. Nếu lo lắng kéo dài ảnh hưởng sinh hoạt, chuyên gia tâm lý giúp được thật sự.",
      },
    ],
    sources: [],
  },
  {
    slug: "ve-sinh-truoc-va-sau-khi-gan-gui",
    title: "Vệ sinh trước và sau khi gần gũi: làm đúng, đừng làm quá",
    excerpt:
      "Nhiều người sạch quá mức và lại hay bị viêm nhiễm hơn. Có vài việc thật sự nên làm, và vài việc phổ biến nên bỏ ngay.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "18-plus",
    adult: true,
    author: null,
    quickAnswer:
      "Ba việc có ích nhất: rửa tay, rửa bên ngoài bằng nước sạch, và đi tiểu sau khi gần gũi. Ba việc nên bỏ: thụt rửa sâu bên trong, dùng dung dịch sát khuẩn mạnh, và dùng khăn ướt có mùi thơm. Vùng kín nữ có hệ vi khuẩn tự cân bằng, rửa quá sâu và quá mạnh làm mất cân bằng đó và gây viêm nhiễm nhiều hơn. Nếu có ngứa, khí hư bất thường hoặc mùi hôi kéo dài, đó là chuyện cần đi khám chứ không phải rửa thêm.",
    prepare: [
      "Nước sạch — đây là thứ quan trọng nhất và cũng rẻ nhất",
      "Một loại dung dịch vệ sinh dịu nhẹ, không mùi, nếu bạn muốn dùng",
      "Khăn riêng, khô, giặt thường xuyên",
      "Đồ lót cotton sạch để thay",
    ],
    steps: [
      {
        title: "Rửa tay trước — bước bị bỏ qua nhiều nhất",
        detail:
          "Tay là nơi mang nhiều vi khuẩn nhất và cũng là thứ tiếp xúc đầu tiên. Rửa tay bằng xà phòng trước khi gần gũi có ích hơn hầu hết các bước cầu kỳ khác. Đơn giản tới mức ai cũng bỏ qua.",
      },
      {
        title: "Rửa bên ngoài bằng nước sạch là đủ",
        detail:
          "Vùng kín nữ ở phía ngoài chỉ cần nước sạch, hoặc thêm một loại dung dịch dịu nhẹ không mùi. Bên trong âm đạo tự làm sạch được và không cần bạn can thiệp. Nam giới cần kéo bao quy đầu và rửa sạch bên dưới bằng nước.",
      },
      {
        title: "Bỏ hẳn việc thụt rửa sâu bên trong",
        detail:
          "Đây là thói quen phổ biến và có hại thật. Thụt rửa đẩy vi khuẩn có lợi ra ngoài, làm mất cân bằng môi trường, và làm tăng nguy cơ viêm nhiễm cũng như đẩy vi khuẩn lên cao hơn. Nếu bạn đang làm, dừng lại là thay đổi có ích nhất trong cả bài.",
      },
      {
        title: "Tránh xà phòng thơm và dung dịch sát khuẩn mạnh",
        detail:
          "Hương liệu và chất tẩy mạnh gây kích ứng vùng da vốn rất nhạy cảm, và triệu chứng kích ứng lại rất giống viêm nhiễm nên nhiều người rửa mạnh thêm. Vòng luẩn quẩn này rất hay gặp.",
      },
      {
        title: "Đi tiểu sau khi gần gũi",
        detail:
          "Việc này giúp đẩy vi khuẩn ra khỏi đoạn đầu đường tiểu và giảm nguy cơ viêm đường tiết niệu, vốn phổ biến ở nữ do cấu tạo giải phẫu. Không cần vội, trong khoảng 15–30 phút sau là được.",
      },
      {
        title: "Rửa nhẹ sau đó bằng nước, lau khô",
        detail:
          "Nước sạch, lau khô bằng khăn riêng, thấm chứ không chà. Da ẩm là môi trường cho nấm phát triển. Việc lau khô quan trọng ngang với việc rửa.",
      },
      {
        title: "Thay đồ lót sạch, chọn cotton",
        detail:
          "Cotton thoáng và hút ẩm tốt hơn vải tổng hợp. Nếu bạn hay bị viêm nhiễm tái đi tái lại, đây là một trong những thay đổi đơn giản đáng thử.",
      },
      {
        title: "Chú ý hướng lau khi đi vệ sinh",
        detail:
          "Với nữ, luôn lau từ trước ra sau. Lau ngược hướng đưa vi khuẩn từ hậu môn về phía đường tiểu và âm đạo. Đây là kiến thức cơ bản nhưng rất nhiều người chưa từng được dạy.",
      },
      {
        title: "Nếu dùng chất bôi trơn, chọn loại phù hợp",
        detail:
          "Loại gốc nước an toàn khi dùng cùng bao cao su. Loại gốc dầu có thể làm hỏng bao cao su latex. Tránh các sản phẩm có hương liệu hoặc tạo cảm giác nóng lạnh nếu bạn dễ kích ứng.",
      },
      {
        title: "Đừng dùng khăn ướt có mùi thơm cho vùng kín",
        detail:
          "Chúng tiện nhưng chứa hương liệu và chất bảo quản dễ gây kích ứng. Nếu cần dùng khi đi xa, chọn loại không mùi, dành riêng cho vùng nhạy cảm.",
      },
      {
        title: "Không tự dùng thuốc đặt khi chưa khám",
        detail:
          "Rất nhiều người mua thuốc đặt theo lời mách khi thấy ngứa. Nhưng nấm, vi khuẩn và ký sinh trùng cần thuốc khác nhau, dùng sai thì không khỏi mà còn làm mờ triệu chứng khiến bác sĩ khó chẩn đoán sau này.",
      },
      {
        title: "Phân biệt mùi bình thường với dấu hiệu cần khám",
        detail:
          "Vùng kín có mùi nhẹ đặc trưng là hoàn toàn bình thường và không cần khử. Cái đáng chú ý là mùi hôi rõ rệt, mùi tanh sau khi gần gũi, khí hư đổi màu hoặc vón cục, kèm ngứa rát. Đó là lúc đi khám.",
      },
    ],
    notes: [
      "Đi khám thay vì tự xử lý: khí hư đổi màu vàng xanh hoặc vón cục, mùi hôi rõ, ngứa rát kéo dài, đau khi đi tiểu, đau bụng dưới, hoặc ra máu bất thường.",
      "Đi khám sớm nếu viêm nhiễm tái đi tái lại nhiều lần trong năm — đó thường là dấu hiệu của nguyên nhân chưa được xử lý chứ không phải do vệ sinh kém.",
      "Vệ sinh không thay thế được biện pháp phòng bệnh lây qua đường tình dục. Rửa sau khi gần gũi không phòng được bệnh lây nhiễm.",
      "Bài này là kiến thức vệ sinh phổ thông, không phải chỉ định y tế. Mọi thuốc bôi, thuốc đặt hay thuốc uống đều phải do bác sĩ kê.",
    ],
    faq: [
      {
        q: "Có cần tắm ngay sau khi gần gũi không?",
        a: "Không bắt buộc. Rửa nhẹ bên ngoài và đi tiểu là đủ. Tắm ngay hay tắm sau đều được, tuỳ bạn thấy dễ chịu.",
      },
      {
        q: "Dung dịch vệ sinh phụ nữ có cần thiết không?",
        a: "Không bắt buộc. Nước sạch đã đủ cho phần lớn người. Nếu dùng, chọn loại dịu nhẹ không mùi và chỉ rửa bên ngoài. Nếu đang dùng mà thấy ngứa rát, hãy ngưng thử một tuần.",
      },
      {
        q: "Nam giới cần làm gì khác không?",
        a: "Rửa sạch bên dưới bao quy đầu bằng nước và lau khô, rửa tay trước và sau, đi tiểu sau khi gần gũi. Nếu vùng đó đỏ, ngứa hoặc có mùi bất thường thì đi khám nam khoa hoặc da liễu.",
      },
      {
        q: "Đang có kinh thì vệ sinh thế nào?",
        a: "Thay băng vệ sinh mỗi 4–6 tiếng dù lượng ít, rửa bên ngoài bằng nước sạch mỗi lần thay nếu tiện, và không thụt rửa. Với tampon hay cốc nguyệt san, tuân thủ đúng thời gian ghi trên hướng dẫn.",
      },
    ],
    sources: [],
  },
  {
    slug: "khi-hai-nguoi-lech-nhu-cau",
    title: "Khi hai người lệch nhu cầu: nói sao để không ai thấy bị chối bỏ",
    excerpt:
      "Một người muốn nhiều hơn, một người muốn ít hơn, và cả hai đều bắt đầu thấy tổn thương. Đây là vấn đề rất phổ biến — và giải được.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "18-plus",
    adult: true,
    author: null,
    quickAnswer:
      "Lệch nhu cầu là chuyện gần như cặp đôi nào cũng gặp ở một giai đoạn nào đó, và tự nó không phải dấu hiệu hết yêu. Cái làm hỏng mối quan hệ không phải sự chênh lệch mà là cách hai người xử lý nó: im lặng, dỗi, hoặc trách móc. Việc cần làm là nói về nó ngoài phòng ngủ, tìm nguyên nhân thật (mệt, stress, thuốc, sức khoẻ, khoảng cách tình cảm), và tìm điểm chung thay vì đòi người kia đổi. Nếu kéo dài và gây căng thẳng lớn, chuyên gia tâm lý hôn nhân giúp được.",
    prepare: [
      "Một khoảng thời gian yên tĩnh ngoài phòng ngủ, không phải lúc vừa bị từ chối",
      "Sự trung thực với chính mình về điều bạn thật sự thiếu — có khi không phải chuyện chăn gối",
      "Danh sách thuốc hai người đang dùng, vì nhiều loại ảnh hưởng tới ham muốn",
      "Tinh thần rằng đây là vấn đề của cả hai, không phải lỗi của một người",
    ],
    steps: [
      {
        title: "Bỏ ý nghĩ có một mức bình thường",
        detail:
          "Không có con số chuẩn cho mọi cặp đôi. Nhu cầu khác nhau giữa người này người kia và thay đổi theo giai đoạn của chính một người. So với con số nghe được ở đâu đó chỉ tạo áp lực vô ích cho cả hai.",
      },
      {
        title: "Chọn thời điểm nói hoàn toàn tách khỏi lúc bị từ chối",
        detail:
          "Nói ngay sau khi bị từ chối thì người nói đang tổn thương và người nghe đang phòng thủ. Chọn một buổi bình thường, có thể lúc đi bộ hoặc uống cà phê. Không khí trung tính làm cuộc trò chuyện khác hẳn.",
      },
      {
        title: "Bắt đầu bằng cảm giác của mình, không bằng nhận xét về họ",
        detail:
          "Dạo này anh thấy hai đứa mình xa nhau và anh nhớ cảm giác gần gũi — khác hẳn với câu em lúc nào cũng từ chối. Câu thứ nhất mở ra, câu thứ hai đóng lại. Đây là khác biệt nhỏ trong lời nói nhưng lớn trong kết quả.",
      },
      {
        title: "Nói rõ bạn thật sự thiếu điều gì",
        detail:
          "Nhiều khi thứ người ta thiếu không phải chuyện chăn gối mà là cảm giác được muốn, được ưu tiên, được chạm vào. Nếu bạn nhận ra điều đó và nói được, người kia sẽ dễ đáp ứng hơn nhiều so với một đòi hỏi chung chung.",
      },
      {
        title: "Hỏi thay vì đoán về phía người kia",
        detail:
          "Người có nhu cầu thấp hơn thường có lý do cụ thể: kiệt sức vì con nhỏ, áp lực công việc, đau khi gần gũi, thay đổi cơ thể, hoặc còn tồn đọng chuyện chưa nói. Hỏi một câu mở và im lặng nghe. Đừng phản biện ngay câu trả lời đầu tiên.",
      },
      {
        title: "Rà lại những nguyên nhân thể chất",
        detail:
          "Rất nhiều thứ hạ ham muốn mà không ai nghĩ tới: thiếu ngủ kéo dài, một số thuốc điều trị dài ngày, vấn đề tuyến giáp, thiếu máu, trầm cảm, đau khi gần gũi ở nữ, hoặc rối loạn chức năng ở nam. Nếu thay đổi diễn ra khá đột ngột, đi khám là việc nên làm sớm.",
      },
      {
        title: "Đừng biến chuyện chăn gối thành thước đo tình yêu",
        detail:
          "Câu nếu em còn yêu anh thì em đã... là câu gây tổn thương nhất và cũng ít hiệu quả nhất. Nó biến sự gần gũi thành nghĩa vụ, và nghĩa vụ giết ham muốn nhanh hơn bất cứ thứ gì.",
      },
      {
        title: "Người có nhu cầu thấp hơn cũng cần nói ra phần của mình",
        detail:
          "Im lặng và né tránh làm người kia tự diễn giải theo hướng tệ nhất. Một câu như hôm nay em mệt thật chứ không phải em không muốn gần anh đã tháo được rất nhiều hiểu lầm.",
      },
      {
        title: "Tách sự âu yếm ra khỏi kỳ vọng",
        detail:
          "Nếu mọi cái ôm đều bị hiểu là lời đề nghị, người mệt sẽ tránh cả việc ôm — và khoảng cách càng xa. Thoả thuận rõ rằng có những lúc chạm vào nhau chỉ là chạm vào nhau. Điều này giúp cả hai rất nhiều.",
      },
      {
        title: "Tìm điểm chung thay vì bắt một bên đổi hẳn",
        detail:
          "Cách bền nhất là cả hai cùng nhích: người muốn nhiều bớt kỳ vọng về tần suất, người muốn ít chủ động hơn trong những dịp hai người đều thoải mái. Một bên chịu đựng hoàn toàn không bao giờ bền.",
      },
      {
        title: "Sửa những thứ tưởng không liên quan",
        detail:
          "Chia lại việc nhà cho công bằng, cho người kia được ngủ bù, sắp một buổi tối không có điện thoại. Với nhiều cặp đôi, đặc biệt là giai đoạn nuôi con nhỏ, mệt và ấm ức mới là nguyên nhân thật.",
      },
      {
        title: "Biết khi nào cần người thứ ba giúp",
        detail:
          "Nếu chủ đề này luôn kết thúc bằng cãi vã, nếu một trong hai né tránh hoàn toàn, hoặc nếu nó kéo dài nhiều tháng và ảnh hưởng tới cả những mặt khác của cuộc sống chung — chuyên gia tâm lý về hôn nhân là lựa chọn hợp lý chứ không phải dấu hiệu thất bại.",
      },
    ],
    notes: [
      "Không ai có nghĩa vụ phải đồng ý gần gũi vì đang trong một mối quan hệ. Ép buộc, dỗi để gây áp lực, hay dùng chuyện này để trừng phạt đều là hành vi gây tổn hại — trong hôn nhân cũng vậy.",
      "Nếu bạn thấy sợ hãi bạn đời, bị đe doạ, hoặc bị ép buộc, đó không còn là vấn đề lệch nhu cầu. Hãy tìm tới người thân tin cậy hoặc các đường dây hỗ trợ.",
      "Thay đổi ham muốn khá đột ngột kèm mệt mỏi, sụt cân, rối loạn giấc ngủ hoặc khí sắc trầm buồn kéo dài là lý do đi khám, không phải chuyện chỉ cần cố gắng hơn.",
      "Bài này nói về giao tiếp trong mối quan hệ, không phải tư vấn y tế hay trị liệu. Nếu có vấn đề sức khoẻ hoặc tâm lý, hãy gặp bác sĩ hoặc chuyên gia.",
    ],
    faq: [
      {
        q: "Lệch nhu cầu có phải dấu hiệu sắp chia tay không?",
        a: "Không. Đây là chuyện rất phổ biến và phần lớn cặp đôi đều trải qua ở giai đoạn nào đó. Cái quyết định là hai người có nói được với nhau về nó hay không.",
      },
      {
        q: "Người kia không chịu nói chuyện thì làm sao?",
        a: "Đừng ép nói ngay. Nói ngắn rằng bạn muốn hiểu chứ không trách, rồi để đó. Có người cần thời gian. Nếu sau nhiều lần vẫn không nói được, đề nghị cùng gặp chuyên gia là bước hợp lý tiếp theo.",
      },
      {
        q: "Sau khi có con thì chuyện này thay đổi nhiều lắm phải không?",
        a: "Rất thường gặp, và thường liên quan tới kiệt sức, thay đổi nội tiết và đau sau sinh nhiều hơn là tình cảm. Chia sẻ việc chăm con và cho nhau ngủ đủ đôi khi có tác dụng hơn mọi cuộc trò chuyện.",
      },
      {
        q: "Có nên tự tìm mua sản phẩm tăng ham muốn không?",
        a: "Không nên tự mua, nhất là hàng bán trên mạng không rõ nguồn gốc — nhóm này từng bị phát hiện trộn chất kê đơn không ghi trên nhãn. Nếu bạn nghi ngờ vấn đề sức khoẻ, đi khám để được đánh giá đúng.",
      },
    ],
    sources: [],
  },
  {
    slug: "gan-gui-khi-co-benh-man-tinh",
    title: "Gần gũi khi có bệnh mạn tính: câu hỏi ai cũng có mà ít ai dám hỏi",
    excerpt:
      "Sau một lần nằm viện hoặc một chẩn đoán mới, nhiều người lặng lẽ tự kiêng vì sợ. Đây là những gì nên hỏi bác sĩ thay vì tự đoán.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "18-plus",
    adult: true,
    author: null,
    quickAnswer:
      "Với phần lớn bệnh mạn tính ổn định — tăng huyết áp, tiểu đường, bệnh tim đã điều trị ổn — người bệnh vẫn có đời sống vợ chồng bình thường. Vấn đề thường không nằm ở bệnh mà ở nỗi sợ và ở việc không ai dám hỏi bác sĩ. Hãy hỏi thẳng bác sĩ điều trị của bạn, vì câu trả lời phụ thuộc vào tình trạng cụ thể. Tuyệt đối không tự mua thuốc hỗ trợ, vì một số nhóm thuốc phối hợp với thuốc tim mạch có thể gây tụt huyết áp nguy hiểm.",
    prepare: [
      "Tên bệnh và mức độ ổn định hiện tại theo lời bác sĩ",
      "Danh sách đầy đủ thuốc đang dùng — chụp ảnh vỏ hộp mang theo",
      "Ghi chú về triệu chứng khi gắng sức: leo cầu thang có mệt không, đi bộ nhanh có tức ngực không",
      "Một câu hỏi viết sẵn, để không lúng túng bỏ qua lúc ngồi trước bác sĩ",
    ],
    steps: [
      {
        title: "Chấp nhận rằng đây là câu hỏi y tế chính đáng",
        detail:
          "Rất nhiều người ra khỏi phòng khám rồi mới nhớ mình chưa hỏi, hoặc ngại không hỏi. Bác sĩ coi đây là một phần của chất lượng sống và họ gặp câu hỏi này thường xuyên. Ngại một phút còn hơn tự kiêng nhiều năm hoặc tự làm liều.",
      },
      {
        title: "Hỏi bác sĩ bằng một câu tham chiếu dễ trả lời",
        detail:
          "Cách hỏi hiệu quả nhất là so với hoạt động thể lực: với tình trạng của tôi hiện nay, mức gắng sức nào là an toàn, và đời sống vợ chồng có nằm trong mức đó không. Bác sĩ trả lời câu này dễ hơn nhiều so với một câu hỏi chung chung.",
      },
      {
        title: "Dùng chính khả năng gắng sức của bạn làm thước đo",
        detail:
          "Một chỉ dấu thực tế bác sĩ hay dùng: nếu bạn leo được vài tầng cầu thang hoặc đi bộ nhanh mà không tức ngực, không khó thở nhiều, thì khả năng gắng sức của bạn nhìn chung đủ cho sinh hoạt thường ngày. Nhưng vẫn phải để bác sĩ xác nhận cho trường hợp của bạn.",
      },
      {
        title: "Hỏi rõ mốc thời gian nếu bạn vừa qua biến cố",
        detail:
          "Sau nhồi máu cơ tim, sau đặt stent, sau phẫu thuật hay sau đột quỵ, thường có một khoảng thời gian nghỉ và một lộ trình quay lại sinh hoạt bình thường. Hỏi con số cụ thể, đừng tự đoán và cũng đừng nghe theo lời truyền miệng.",
      },
      {
        title: "Hỏi về ảnh hưởng của thuốc bạn đang uống",
        detail:
          "Một số nhóm thuốc điều trị huyết áp, tim mạch, trầm cảm và tuyến tiền liệt có thể ảnh hưởng tới ham muốn hoặc chức năng. Đây là điều có thể xử lý được — bác sĩ có thể điều chỉnh. Nhưng tuyệt đối không tự bỏ thuốc, vì bỏ thuốc nguy hiểm hơn nhiều so với tác dụng phụ.",
      },
      {
        title: "Không bao giờ tự mua thuốc hỗ trợ",
        detail:
          "Đây là cảnh báo quan trọng nhất trong cả bài. Một số nhóm thuốc điều trị rối loạn cương phối hợp với nhóm thuốc tim mạch chứa nitrat có thể gây tụt huyết áp nghiêm trọng, đe doạ tính mạng. Chỉ dùng khi bác sĩ biết rõ toàn bộ thuốc bạn đang uống và kê cho bạn.",
      },
      {
        title: "Cảnh giác đặc biệt với hàng bán trên mạng",
        detail:
          "Nhiều sản phẩm quảng cáo là thảo dược từng bị phát hiện trộn lẫn hoạt chất kê đơn mà không ghi trên nhãn. Với người có bệnh tim mạch, đây là rủi ro thật sự chứ không phải chuyện mất tiền.",
      },
      {
        title: "Xử lý phần lo lắng, vì nó cũng là một nguyên nhân thật",
        detail:
          "Sau một biến cố sức khoẻ, nỗi sợ tái phát rất phổ biến ở cả người bệnh lẫn bạn đời — nhiều khi người bạn đời còn sợ hơn. Nỗi sợ đó tự nó gây căng thẳng và ảnh hưởng tới cơ thể. Nói ra được với nhau đã tháo bớt một nửa.",
      },
      {
        title: "Cho bạn đời cùng nghe lời bác sĩ",
        detail:
          "Nếu được, rủ bạn đời cùng vào phòng khám khi hỏi câu này. Nghe trực tiếp từ bác sĩ khác hẳn với nghe kể lại, và nó gỡ được nỗi sợ mà bạn không thuyết phục được bằng lời.",
      },
      {
        title: "Chọn thời điểm trong ngày cho hợp với sức khoẻ",
        detail:
          "Người có bệnh mạn tính thường có lúc trong ngày khoẻ hơn — với nhiều người là buổi sáng sau khi nghỉ ngơi. Tránh ngay sau bữa ăn no và tránh sau khi uống rượu bia. Đây là điều chỉnh đơn giản mà thực tế.",
      },
      {
        title: "Với người tiểu đường, để ý thêm vài điểm riêng",
        detail:
          "Đường huyết hạ thấp có thể gây choáng váng, vì vậy nên tránh lúc đường huyết đang thấp. Tiểu đường lâu năm cũng có thể ảnh hưởng tới thần kinh và mạch máu gây thay đổi chức năng — đây là vấn đề có thể điều trị, hãy nói với bác sĩ nội tiết thay vì chịu đựng.",
      },
      {
        title: "Biết những dấu hiệu phải dừng lại và đi khám",
        detail:
          "Đau ngực, khó thở nhiều, choáng váng, tim đập rất nhanh không đều — dừng ngay và liên hệ y tế. Ghi lại và kể cho bác sĩ ở lần khám sau, kể cả khi triệu chứng đã hết.",
      },
    ],
    notes: [
      "Gọi cấp cứu ngay nếu xuất hiện đau ngực dữ dội, khó thở nặng, ngất, hoặc yếu liệt một bên người. Không chờ xem có tự hết không.",
      "Tuyệt đối không phối hợp thuốc điều trị rối loạn cương với thuốc nhóm nitrat dùng cho bệnh tim. Đây là chống chỉ định nghiêm ngặt và chỉ bác sĩ biết bạn đang dùng gì mới đánh giá được.",
      "Không tự ngưng hay tự giảm thuốc điều trị bệnh nền vì nghi nó gây tác dụng phụ. Nói với bác sĩ để được điều chỉnh — bỏ thuốc nguy hiểm hơn nhiều.",
      "Bài này là thông tin phổ thông giúp bạn đặt câu hỏi đúng với bác sĩ. Nó không phải chỉ định y tế và không thay thế lời khuyên của bác sĩ điều trị.",
    ],
    faq: [
      {
        q: "Sau khi đặt stent bao lâu thì sinh hoạt bình thường lại được?",
        a: "Tuỳ tình trạng từng người và tuỳ diễn tiến hồi phục. Đây đúng là câu phải hỏi bác sĩ tim mạch của bạn ở lần tái khám gần nhất, và câu trả lời của họ mới có giá trị.",
      },
      {
        q: "Tôi sợ tái phát nên tránh luôn, như vậy có được không?",
        a: "Tránh vì sợ mà không hỏi ai thì bạn có thể đang kiêng một thứ vốn an toàn với mình, và điều đó ảnh hưởng tới cả mối quan hệ. Hỏi bác sĩ một lần để biết chắc là cách tốt hơn nhiều.",
      },
      {
        q: "Bạn đời tôi sợ hơn cả tôi, nói sao?",
        a: "Rủ họ cùng đi khám và cùng nghe bác sĩ trả lời. Nỗi sợ của người chăm sóc rất thật và rất phổ biến, nhưng nó thường tan khi có thông tin chính thức từ người có chuyên môn.",
      },
      {
        q: "Thuốc huyết áp làm tôi giảm ham muốn, tôi tự đổi thuốc được không?",
        a: "Không. Nhưng hãy nói với bác sĩ — trong cùng một mục tiêu điều trị thường có nhiều lựa chọn thuốc, và bác sĩ có thể điều chỉnh cho bạn. Rất nhiều người chịu đựng nhiều năm chỉ vì ngại nói.",
      },
    ],
    sources: [],
  },
  {
    slug: "suc-khoe-tinh-duc-tuoi-trung-nien",
    title: "Sức khoẻ tình dục tuổi trung niên: những gì không ai dặn trước",
    excerpt:
      "Cơ thể đổi khác từ tuổi 45–55 và hầu như không ai được chuẩn bị. Biết trước thì đó là chuyện sinh lý bình thường, không biết thì thành khủng hoảng.",
    publishedAt: NGAY,
    readTimeMinutes: 6,
    category: "18-plus",
    adult: true,
    author: null,
    quickAnswer:
      "Ở tuổi trung niên, nội tiết thay đổi ở cả nam và nữ và kéo theo nhiều thay đổi thật: khô rát ở nữ do giảm estrogen, thay đổi chức năng ở nam, và thay đổi ham muốn ở cả hai. Đây là sinh lý bình thường chứ không phải hết thời, và phần lớn đều có cách xử lý. Điều quan trọng là biết những thay đổi nào là bình thường và những thay đổi nào là dấu hiệu bệnh cần đi khám. Bài này không thay tư vấn của bác sĩ.",
    prepare: [
      "Ghi lại thay đổi bạn nhận thấy và từ khoảng thời gian nào",
      "Danh sách thuốc đang dùng — nhóm huyết áp, trầm cảm, tuyến tiền liệt đều có thể ảnh hưởng",
      "Kết quả khám sức khoẻ gần nhất: đường huyết, mỡ máu, huyết áp",
      "Một câu hỏi viết sẵn để mang vào phòng khám",
    ],
    steps: [
      {
        title: "Biết những thay đổi nào là bình thường theo tuổi",
        detail:
          "Ở nữ quanh tuổi mãn kinh: khô và mỏng niêm mạc, dễ rát, dễ viêm đường tiết niệu hơn. Ở nam: thay đổi diễn ra chậm và từ từ, cần nhiều thời gian hơn để hồi phục giữa các lần. Ở cả hai: ham muốn thường giảm mức độ nhưng không mất. Biết trước thì bạn không tưởng mình có bệnh.",
      },
      {
        title: "Phân biệt thay đổi từ từ với thay đổi đột ngột",
        detail:
          "Đây là ranh giới quan trọng nhất. Thay đổi chậm theo năm tháng thường là sinh lý. Thay đổi khá đột ngột trong vài tuần tới vài tháng thì cần đi khám — nó có thể là dấu hiệu của tiểu đường, bệnh tim mạch, vấn đề tuyến giáp, trầm cảm, hoặc tác dụng của một loại thuốc mới.",
      },
      {
        title: "Hiểu vì sao rối loạn cương ở nam là tín hiệu cần khám tim mạch",
        detail:
          "Mạch máu ở vùng này nhỏ hơn mạch vành, nên khi mạch máu bắt đầu có vấn đề thì dấu hiệu ở đây thường xuất hiện trước triệu chứng tim mạch nhiều năm. Vì vậy đây không chỉ là chuyện chăn gối mà là một chỉ dấu sức khoẻ đáng đi khám sớm.",
      },
      {
        title: "Với nữ, đừng chịu đựng chuyện khô rát",
        detail:
          "Đau và rát khi gần gũi ở tuổi mãn kinh rất phổ biến và có nhiều cách xử lý, từ chất bôi trơn, kem dưỡng chuyên dụng cho tới các lựa chọn kê đơn. Rất nhiều người chịu đựng nhiều năm vì nghĩ đó là điều phải chấp nhận. Nói với bác sĩ sản phụ khoa.",
      },
      {
        title: "Rà lại tủ thuốc trước khi kết luận về tuổi tác",
        detail:
          "Nhiều nhóm thuốc dùng lâu dài ở tuổi này ảnh hưởng tới ham muốn và chức năng. Nếu thay đổi xuất hiện sau khi bạn bắt đầu một thuốc mới, đó là manh mối rất đáng nói với bác sĩ. Đừng tự bỏ thuốc — hãy hỏi để được điều chỉnh.",
      },
      {
        title: "Kiểm tra ba chỉ số nền",
        detail:
          "Đường huyết, huyết áp và mỡ máu. Cả ba đều ảnh hưởng tới mạch máu và thần kinh, và cả ba thường âm thầm ở tuổi trung niên. Một lần khám sức khoẻ tổng quát trả lời được nhiều câu hỏi hơn bạn nghĩ.",
      },
      {
        title: "Xem xét cả yếu tố tâm lý một cách nghiêm túc",
        detail:
          "Trầm cảm, lo âu, áp lực công việc, chăm cha mẹ già, con cái rời nhà — tuổi trung niên chồng nhiều thứ cùng lúc. Những thứ đó ảnh hưởng tới ham muốn không kém gì nội tiết, và chúng cũng điều trị được.",
      },
      {
        title: "Không tự mua thuốc, kể cả khi bạn thấy nhiều người dùng",
        detail:
          "Nhóm thuốc hỗ trợ có chống chỉ định thật với người dùng thuốc tim mạch nhóm nitrat và với một số bệnh khác. Ở tuổi này khả năng bạn có bệnh nền cao hơn hẳn. Phải qua bác sĩ, và bác sĩ phải biết toàn bộ thuốc bạn đang dùng.",
      },
      {
        title: "Đừng tin nhóm quảng cáo hồi xuân trên mạng",
        detail:
          "Đây là nhóm sản phẩm bị làm giả và pha trộn nhiều nhất, và đối tượng nhắm tới chính là người ở tuổi này. Đã có nhiều trường hợp sản phẩm gắn mác thảo dược chứa hoạt chất kê đơn không ghi trên nhãn. Với người có bệnh tim, đó là rủi ro tính mạng.",
      },
      {
        title: "Giữ những thứ nền tảng, chúng có tác động thật",
        detail:
          "Ngủ đủ, đi bộ hoặc vận động đều, bỏ thuốc lá, giảm rượu bia, kiểm soát cân nặng. Đây không phải lời khuyên chung chung — với sức khoẻ mạch máu thì chúng tác động trực tiếp và rõ rệt.",
      },
      {
        title: "Nói với bạn đời thay vì im lặng rút lui",
        detail:
          "Khi một người bắt đầu né tránh mà không giải thích, người kia gần như luôn hiểu thành hết yêu hoặc có người khác. Một câu ngắn về việc cơ thể mình đang thay đổi tháo được rất nhiều hiểu lầm tích tụ.",
      },
      {
        title: "Vẫn giữ thói quen phòng bệnh lây nhiễm",
        detail:
          "Đây là điểm rất hay bị bỏ quên ở tuổi trung niên, nhất là sau ly hôn hoặc goá bụa khi bắt đầu mối quan hệ mới. Không còn nguy cơ mang thai không có nghĩa là không còn nguy cơ lây bệnh. Xét nghiệm và dùng bao cao su vẫn cần thiết.",
      },
    ],
    notes: [
      "Đi khám sớm, đừng đổ cho tuổi tác: thay đổi chức năng xuất hiện khá đột ngột, đau khi gần gũi, ra máu bất thường ở nữ sau mãn kinh, hoặc kèm mệt mỏi và sụt cân không giải thích được.",
      "Ra máu âm đạo sau khi đã mãn kinh luôn là lý do đi khám phụ khoa sớm, không có ngoại lệ.",
      "Tuyệt đối không dùng thuốc hỗ trợ mua ngoài luồng nếu bạn đang điều trị bệnh tim mạch. Phối hợp sai nhóm thuốc có thể gây tụt huyết áp nguy hiểm tính mạng.",
      "Bài này là thông tin phổ thông giúp bạn nhận biết và đi khám đúng chỗ. Nó không phải chẩn đoán, không phải chỉ định điều trị và không thay thế bác sĩ.",
    ],
    faq: [
      {
        q: "Giảm ham muốn ở tuổi này có phải bệnh không?",
        a: "Giảm từ từ theo tuổi thường là sinh lý. Nhưng nếu giảm nhanh, kèm mệt mỏi, mất hứng thú với cả những việc khác, hoặc kèm thay đổi cân nặng thì nên đi khám để loại trừ bệnh nội tiết và trầm cảm.",
      },
      {
        q: "Nữ sau mãn kinh có cần dùng biện pháp tránh thai nữa không?",
        a: "Cần hỏi bác sĩ, vì khả năng mang thai chỉ chấm dứt sau một khoảng thời gian nhất định không có kinh. Đừng tự kết luận dựa vào việc kinh nguyệt đã thưa dần.",
      },
      {
        q: "Liệu pháp nội tiết có nên dùng không?",
        a: "Đây là quyết định phải cá nhân hoá, cân nhắc lợi ích và nguy cơ theo tiền sử của từng người. Nó có chỉ định thật trong một số trường hợp nhưng cũng có chống chỉ định. Chỉ bác sĩ chuyên khoa mới đánh giá được cho bạn.",
      },
      {
        q: "Tôi ngại nói chuyện này với bác sĩ trẻ hơn mình nhiều tuổi.",
        a: "Rất phổ biến. Nếu ngại, hãy viết câu hỏi ra giấy và đưa cho bác sĩ đọc. Hoặc chọn bác sĩ mà bạn thấy dễ nói hơn. Điều tệ nhất là im lặng và bỏ qua một dấu hiệu đáng lẽ cần được kiểm tra.",
      },
    ],
    sources: [],
  },
];
