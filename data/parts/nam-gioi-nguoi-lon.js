// Phần NAM GIỚI — NGƯỜI LỚN: chuyện khó nói về cơ thể, tình dục, giới tính.
//
// ❗ Mọi bài ở đây đều có adult: true — ẩn khỏi lượt xem mặc định ở trang chủ,
//    chỉ hiện khi người đọc bấm đúng mục Nam giới / 18+ hoặc đang tìm kiếm.
//
// ❗ NGUYÊN TẮC: nói thẳng và bình thản về sức khỏe, cảm xúc và giao tiếp.
//    KHÔNG mô tả kỹ thuật tình dục, KHÔNG kê tên thuốc hay liều dùng,
//    mọi bài đều nhắc đây không phải tư vấn y khoa.

const chung = { category: "nam-gioi", author: null, adult: true };

export const namGioiNguoiLon = [
  {
    ...chung,
    slug: "tu-kiem-tra-tinh-hoan-moi-thang",
    title: "Tự kiểm tra tinh hoàn mỗi tháng",
    excerpt:
      "Ba mươi giây trong lúc tắm, mỗi tháng một lần. Việc đơn giản này gần như không đàn ông Việt nào được dạy.",
    readTimeMinutes: 2,
    quickAnswer:
      "Sau khi tắm nước ấm, khi da bìu mềm, dùng ngón tay lăn nhẹ từng bên để cảm nhận hình dạng và bề mặt. Mục đích là quen với cái bình thường của mình, để nhận ra ngay khi có cục cứng, sưng, hoặc thay đổi kích thước.",
    prepare: [
      "Làm sau khi tắm nước ấm — da bìu mềm thì dễ cảm nhận hơn",
      "Chọn một ngày cố định trong tháng, đặt nhắc trong điện thoại",
      "Đừng hoảng: phần lớn thay đổi không phải ung thư, nhưng cần bác sĩ xác định",
    ],
    steps: [
      {
        title: "Đứng trước gương quan sát",
        detail: "Nhìn xem có sưng, đổi màu, hay bên nào to lên bất thường không.",
      },
      {
        title: "Kiểm tra từng bên một",
        detail:
          "Dùng ngón cái và các ngón còn lại lăn nhẹ, cảm nhận toàn bộ bề mặt. Bình thường sẽ mịn, chắc và đều.",
      },
      {
        title: "Nhận biết phần bình thường",
        detail:
          "Phía sau trên mỗi bên có một dải mềm hơn — đó là cấu trúc bình thường, không phải khối u.",
      },
      {
        title: "Ghi nhớ trạng thái bình thường của bạn",
        detail:
          "Hai bên không bằng nhau tuyệt đối là chuyện thường. Điều quan trọng là bạn biết bình thường của mình ra sao để phát hiện thay đổi.",
      },
    ],
    notes: [
      "ĐI KHÁM NGAY nếu sờ thấy cục cứng không đau, một bên to lên rõ, cảm giác nặng tức kéo dài, hoặc đau âm ỉ vùng bụng dưới.",
      "Ung thư tinh hoàn hay gặp ở nam giới trẻ và tỉ lệ chữa khỏi rất cao nếu phát hiện sớm — đó là lý do việc kiểm tra này đáng làm.",
      "Bài viết không phải chẩn đoán; mọi bất thường phải do bác sĩ đánh giá.",
    ],
    faq: [
      {
        q: "Sờ thấy gì đó, có phải ung thư không?",
        a: "Phần lớn trường hợp là nang lành tính hoặc giãn tĩnh mạch. Nhưng đừng tự kết luận theo cách nào — đi khám để biết chắc.",
      },
      {
        q: "Đau thì nguy hiểm hơn không đau?",
        a: "Ngược lại là đằng khác: khối u thường không đau. Đau đột ngột dữ dội lại là tình huống cấp cứu vì có thể xoắn tinh hoàn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "kich-thuoc-su-that-va-loi-don",
    title: "Kích thước: sự thật và những lời đồn",
    excerpt:
      "Phần lớn nỗi lo về chuyện này đến từ phim ảnh và quảng cáo, chứ không đến từ thực tế hay từ bạn đời.",
    readTimeMinutes: 3,
    quickAnswer:
      "Đa số nam giới nằm trong khoảng bình thường rộng và tự đánh giá thấp bản thân so với thực tế. Điều khiến bạn đời hài lòng, theo các khảo sát, chủ yếu là sự quan tâm và giao tiếp — không phải con số. Không có sản phẩm hay bài tập nào được chứng minh làm thay đổi kích thước.",
    prepare: [
      "Nhận ra nguồn gốc nỗi lo: phim ảnh, quảng cáo, và những câu chuyện phóng đại",
      "Sẵn sàng bỏ qua mọi quảng cáo hứa hẹn thay đổi kích thước",
      "Nếu lo lắng ảnh hưởng tới cuộc sống, cân nhắc nói chuyện với chuyên gia tâm lý",
    ],
    steps: [
      {
        title: "Biết mình đang so với cái gì",
        detail:
          "Nội dung người lớn được chọn lọc và dàn dựng để bán, không phải mẫu đại diện cho thực tế.",
      },
      {
        title: "Cảnh giác với mọi lời hứa thay đổi",
        detail:
          "Thuốc bôi, thực phẩm chức năng, dụng cụ kéo, tiêm chất làm đầy — nhiều thứ trong số này gây tổn thương vĩnh viễn. Tiền mất, tật mang là chuyện có thật.",
      },
      {
        title: "Hiểu điều bạn đời thật sự để ý",
        detail:
          "Vệ sinh, sự quan tâm, thái độ lắng nghe và giao tiếp — những thứ này ảnh hưởng tới trải nghiệm nhiều hơn nhiều so với con số.",
      },
      {
        title: "Nếu lo lắng chiếm hết tâm trí, hãy nói với ai đó",
        detail:
          "Ám ảnh về ngoại hình là vấn đề tâm lý có thật và có thể hỗ trợ được. Bạn không cần chịu đựng một mình.",
      },
    ],
    notes: [
      "Có một số ít trường hợp bất thường thực sự về giải phẫu — điều đó do bác sĩ nam khoa xác định, không phải do bạn tự so sánh.",
      "Đau, cong biến dạng rõ khi cương, hoặc thay đổi đột ngột: đi khám vì có thể là bệnh lý cần điều trị.",
    ],
    faq: [
      {
        q: "Bài tập kéo giãn có tác dụng không?",
        a: "Không có bằng chứng đáng tin cậy, và có ghi nhận tổn thương do thực hiện sai. Đây là lĩnh vực đầy quảng cáo trục lợi.",
      },
      {
        q: "Bạn đời chê thì sao?",
        a: "Nếu ai đó thật sự dùng chuyện này để hạ thấp bạn, vấn đề nằm ở cách họ đối xử với bạn chứ không nằm ở cơ thể bạn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "lan-dau-lo-lang-nao-la-binh-thuong",
    title: "Lần đầu: lo lắng nào là bình thường",
    excerpt:
      "Hầu như mọi người đều lo, và phần lớn nỗi lo đó giống hệt nhau. Biết trước thì bớt được một nửa.",
    readTimeMinutes: 3,
    quickAnswer:
      "Hồi hộp tới mức cơ thể không phản ứng như mong đợi là chuyện cực kỳ phổ biến và không nói lên điều gì về bạn. Quan trọng nhất là hai người nói chuyện được với nhau, có sự đồng thuận rõ ràng, và có biện pháp bảo vệ.",
    prepare: [
      "Nói chuyện trước: cả hai có thật sự sẵn sàng không",
      "Chuẩn bị biện pháp bảo vệ và biết dùng đúng cách",
      "Chấp nhận trước rằng lần đầu thường lóng ngóng — điều đó bình thường",
    ],
    steps: [
      {
        title: "Xác nhận sự đồng thuận rõ ràng",
        detail:
          "Cả hai đều muốn, đều tỉnh táo, và đều biết có thể dừng bất cứ lúc nào mà không ai giận.",
      },
      {
        title: "Chuẩn bị biện pháp bảo vệ trước",
        detail:
          "Mua sẵn và biết cách dùng. Loay hoay lúc đó là cách nhanh nhất để mọi thứ trở nên căng thẳng.",
      },
      {
        title: "Bớt kỳ vọng vào kịch bản hoàn hảo",
        detail:
          "Phim ảnh dàn dựng. Thực tế thường vụng về, buồn cười, và đó là chuyện hoàn toàn bình thường.",
      },
      {
        title: "Nói chuyện trong lúc đó",
        detail:
          "Hỏi đối phương thấy sao, nói khi bạn không thoải mái. Giao tiếp quan trọng hơn kỹ thuật.",
      },
      {
        title: "Nếu cơ thể không phản ứng như mong đợi",
        detail:
          "Chuyện rất thường do căng thẳng. Dừng lại, nói chuyện, không tự dằn vặt và cũng không cần giải thích dài dòng.",
      },
    ],
    notes: [
      "Không có mốc tuổi nào là đúng hay sai. Chưa sẵn sàng thì chưa làm, và không ai có quyền thúc ép bạn.",
      "Rượu bia làm giảm khả năng đồng thuận rõ ràng của cả hai — đây là điều đáng cân nhắc nghiêm túc.",
    ],
    faq: [
      {
        q: "Lo tới mức không làm được, có phải bị bệnh không?",
        a: "Thường không. Lo âu tình huống rất phổ biến và tự hết khi bạn thoải mái hơn. Kéo dài nhiều tháng thì nên đi khám nam khoa.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ham-muon-tut-giam-nguyen-nhan-thuong-gap",
    title: "Ham muốn tụt giảm: nguyên nhân thường gặp",
    excerpt:
      "Không phải cứ giảm ham muốn là do tuổi tác hay do hết yêu. Danh sách nguyên nhân thật ra khá đời thường.",
    readTimeMinutes: 3,
    quickAnswer:
      "Những thủ phạm phổ biến nhất là thiếu ngủ, căng thẳng kéo dài, rượu bia, một số loại thuốc đang dùng, trầm cảm, và vấn đề trong mối quan hệ. Nội tiết chỉ là một phần và không phải nguyên nhân hàng đầu như quảng cáo hay nói.",
    prepare: [
      "Nhìn lại vài tháng qua: giấc ngủ, công việc, rượu bia, tâm trạng",
      "Liệt kê thuốc đang dùng — nhiều loại có tác dụng phụ lên ham muốn",
      "Sẵn sàng nói chuyện thật với bạn đời",
    ],
    steps: [
      {
        title: "Kiểm tra giấc ngủ trước tiên",
        detail:
          "Thiếu ngủ kéo dài ảnh hưởng tới nội tiết và tâm trạng nhanh hơn bất kỳ yếu tố nào khác.",
      },
      {
        title: "Xem lại rượu bia và thuốc lá",
        detail:
          "Uống nhiều thường xuyên ảnh hưởng cả ham muốn lẫn khả năng. Đây là nguyên nhân dễ sửa nhất mà ít người muốn nhìn.",
      },
      {
        title: "Rà soát thuốc đang dùng",
        detail:
          "Một số nhóm thuốc điều trị bệnh mạn tính và thuốc tâm thần có tác dụng phụ này. Nói với bác sĩ kê đơn, đừng tự bỏ thuốc.",
      },
      {
        title: "Nhìn thẳng vào mối quan hệ",
        detail:
          "Mâu thuẫn chưa giải quyết, ức chế dồn nén, mất kết nối — những thứ này ảnh hưởng nhiều hơn người ta tưởng.",
      },
      {
        title: "Đi khám nếu kéo dài",
        detail:
          "Kéo dài nhiều tháng, kèm mệt mỏi, tăng cân, rụng tóc hay thay đổi tâm trạng rõ rệt thì nên khám để kiểm tra nội tiết và các bệnh nền.",
      },
    ],
    notes: [
      "Đừng tự mua thực phẩm chức năng tăng cường sinh lực — nhiều sản phẩm trôi nổi chứa chất cấm gây nguy hiểm tim mạch.",
      "Bài viết không chẩn đoán; nếu tình trạng ảnh hưởng tới cuộc sống, hãy đi khám.",
    ],
    faq: [
      {
        q: "Ham muốn giảm có phải do tuổi không?",
        a: "Tuổi có ảnh hưởng nhưng thường từ từ. Giảm đột ngột trong vài tháng thì nên tìm nguyên nhân khác trước.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ve-sinh-vung-kin-cho-nam",
    title: "Vệ sinh vùng kín cho nam",
    excerpt:
      "Nghe đơn giản nhưng rất nhiều người làm sai một trong hai hướng: hoặc qua loa, hoặc kỳ cọ quá tay.",
    readTimeMinutes: 2,
    quickAnswer:
      "Rửa mỗi ngày bằng nước sạch và một chút sữa tắm dịu nhẹ ở vùng bên ngoài, lau thật khô trước khi mặc đồ, và mặc đồ lót thoáng. Không cần dung dịch vệ sinh chuyên dụng, không xà phòng mạnh, không chà xát.",
    prepare: [
      "Sữa tắm dịu nhẹ hoặc chỉ cần nước sạch",
      "Khăn khô riêng",
      "Đồ lót cotton thoáng, thay mỗi ngày",
    ],
    steps: [
      {
        title: "Rửa nhẹ nhàng mỗi ngày",
        detail:
          "Nước ấm vừa. Nếu chưa cắt bao quy đầu thì kéo nhẹ về sau để rửa bên trong rồi kéo lại vị trí cũ.",
      },
      {
        title: "Lau thật khô",
        detail:
          "Ẩm là môi trường lý tưởng cho nấm. Bước này quan trọng ngang với bước rửa.",
      },
      {
        title: "Đừng dùng sản phẩm mạnh",
        detail:
          "Xà phòng diệt khuẩn, nước hoa vùng kín, chà xát mạnh đều gây kích ứng và phản tác dụng.",
      },
      {
        title: "Thay đồ ngay sau khi vận động",
        detail: "Đồ lót ẩm mồ hôi để lâu là nguyên nhân phổ biến gây hăm và nấm.",
      },
    ],
    notes: [
      "Ngứa dai dẳng, đỏ, bong tróc, có mùi bất thường hoặc tiết dịch: đi khám thay vì đổi hết loại sữa tắm này sang loại khác.",
      "Không tự mua thuốc bôi chứa corticoid — dùng sai ở vùng này làm tình trạng nặng thêm.",
    ],
    faq: [
      {
        q: "Có cần dùng dung dịch vệ sinh riêng cho nam không?",
        a: "Không bắt buộc. Nước sạch và sữa tắm dịu nhẹ là đủ với hầu hết mọi người.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "bao-quy-dau-khi-nao-la-van-de",
    title: "Bao quy đầu: khi nào là vấn đề",
    excerpt:
      "Không phải ai cũng cần can thiệp. Nhưng có mấy dấu hiệu thì nên đi khám thay vì tự tra mạng.",
    readTimeMinutes: 2,
    quickAnswer:
      "Nếu bạn kéo về sau được dễ dàng để vệ sinh và không đau, không viêm thì thường không cần làm gì. Nên đi khám khi không kéo về được, kéo về rồi không trả lại được, viêm tái đi tái lại, tiểu khó, hoặc đau khi cương.",
    prepare: [
      "Ghi lại triệu chứng và thời gian xuất hiện",
      "Tìm khoa nam học hoặc tiết niệu có giấy phép rõ ràng",
      "Chuẩn bị hỏi rõ chi phí trước khi đồng ý thủ thuật",
    ],
    steps: [
      {
        title: "Tự đánh giá tình trạng cơ bản",
        detail: "Kéo về sau có dễ không, có đau không, có viêm đỏ hay tiết dịch bất thường không.",
      },
      {
        title: "Giữ vệ sinh đúng cách trước",
        detail: "Nhiều trường hợp viêm nhẹ cải thiện chỉ nhờ rửa đúng và lau khô mỗi ngày.",
      },
      {
        title: "Đi khám nếu có dấu hiệu cảnh báo",
        detail:
          "Bác sĩ sẽ đánh giá và tư vấn hướng xử lý, không phải trường hợp nào cũng cần phẫu thuật.",
      },
      {
        title: "Cảnh giác với quảng cáo cắt bao quy đầu giá rẻ",
        detail:
          "Chọn bệnh viện hoặc phòng khám có giấy phép. Đây là thủ thuật y tế, không phải dịch vụ làm đẹp.",
      },
    ],
    notes: [
      "CẤP CỨU nếu kéo về sau rồi không trả lại được và vùng đó sưng đau — đây là tình huống cần xử trí ngay.",
      "Bài viết không chẩn đoán; chỉ bác sĩ khám trực tiếp mới kết luận được trường hợp của bạn.",
    ],
    faq: [
      {
        q: "Cắt bao quy đầu có làm giảm cảm giác không?",
        a: "Đây là câu nên hỏi bác sĩ nam khoa, vì kết quả nghiên cứu còn khác nhau và tuỳ từng người. Đừng quyết định dựa trên lời đồn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ruou-bia-thuoc-la-anh-huong-chuyen-ay",
    title: "Rượu bia, thuốc lá ảnh hưởng chuyện ấy thế nào",
    excerpt:
      "Nhiều người tìm thuốc bổ trước khi nghĩ tới hai thứ này — trong khi đây mới là nguyên nhân dễ sửa nhất.",
    readTimeMinutes: 2,
    quickAnswer:
      "Rượu bia làm giảm khả năng ngay trong đêm và làm giảm ham muốn nếu uống nhiều thường xuyên. Thuốc lá ảnh hưởng tới mạch máu, mà chuyện cương phụ thuộc trực tiếp vào lưu thông máu. Giảm hai thứ này thường thấy khác biệt trong vài tuần tới vài tháng.",
    prepare: [
      "Ghi thật số ly và số điếu mỗi tuần — con số thường cao hơn ta tưởng",
      "Chọn một thứ để giảm trước, đừng bỏ cả hai cùng lúc nếu thấy quá sức",
      "Chuẩn bị tinh thần: thay đổi cần vài tuần mới thấy rõ",
    ],
    steps: [
      {
        title: "Ghi lại thực tế một tuần",
        detail: "Không phán xét, chỉ ghi. Nhìn con số cuối tuần thường đủ để bạn muốn thay đổi.",
      },
      {
        title: "Bỏ rượu trong những buổi quan trọng",
        detail:
          "Nhiều người tưởng uống chút cho tự tin, thực tế lại phản tác dụng ngay đêm đó.",
      },
      {
        title: "Giảm thuốc lá từng bước",
        detail:
          "Mạch máu phục hồi dần sau khi bỏ. Cần hỗ trợ thì có phòng khám tư vấn cai thuốc.",
      },
      {
        title: "Thêm vận động và ngủ đủ",
        detail:
          "Hai thứ này bổ trợ trực tiếp cho lưu thông máu và nội tiết, hiệu quả hơn nhiều loại thực phẩm chức năng.",
      },
    ],
    notes: [
      "Đã giảm rượu bia thuốc lá vài tháng mà tình trạng không cải thiện thì đi khám nam khoa — có thể có nguyên nhân khác.",
      "Đừng dùng thuốc cường dương mua trôi nổi để bù, nhất là khi có dùng rượu — kết hợp này nguy hiểm cho tim mạch.",
    ],
    faq: [
      {
        q: "Uống một hai ly có sao không?",
        a: "Lượng nhỏ ảnh hưởng ít với phần lớn người. Vấn đề nằm ở uống nhiều và uống đều đặn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "chat-luong-tinh-trung-dieu-gi-anh-huong",
    title: "Chất lượng tinh trùng: điều gì thật sự ảnh hưởng",
    excerpt:
      "Trước khi mua thuốc bổ, hãy nhìn vào mấy thói quen hằng ngày — trong đó có một thứ nằm ngay trong túi quần bạn.",
    readTimeMinutes: 3,
    quickAnswer:
      "Những yếu tố có bằng chứng rõ nhất: nhiệt độ vùng bìu (ngồi lâu, laptop trên đùi, xông hơi nhiều), hút thuốc, rượu bia, thừa cân, căng thẳng kéo dài và thiếu ngủ. Muốn biết chính xác thì làm xét nghiệm tinh dịch đồ, đừng đoán.",
    prepare: [
      "Nếu định xét nghiệm: hỏi trước về thời gian kiêng xuất tinh theo yêu cầu của phòng xét nghiệm",
      "Nhìn lại thói quen: ngồi lâu, laptop trên đùi, quần quá bó",
      "Ghi lại thuốc và thực phẩm chức năng đang dùng",
    ],
    steps: [
      {
        title: "Giảm nhiệt vùng bìu",
        detail:
          "Hạn chế đặt laptop trực tiếp lên đùi, đứng dậy đi lại nếu ngồi nhiều, bớt xông hơi và tắm nước quá nóng.",
      },
      {
        title: "Bỏ thuốc lá và giảm rượu bia",
        detail: "Đây là hai yếu tố có ảnh hưởng rõ ràng nhất và cũng nằm trong tầm tay bạn.",
      },
      {
        title: "Cân nặng, vận động, giấc ngủ",
        detail: "Ba thứ này ảnh hưởng qua đường nội tiết, tác động chậm nhưng bền.",
      },
      {
        title: "Làm tinh dịch đồ nếu đang mong con",
        detail:
          "Xét nghiệm đơn giản, làm tại bệnh viện hoặc trung tâm hỗ trợ sinh sản, cho kết quả cụ thể thay vì phỏng đoán.",
      },
      {
        title: "Đừng tự uống thuốc bổ vô tội vạ",
        detail:
          "Một số sản phẩm không rõ nguồn gốc chứa nội tiết tố, có thể phản tác dụng nghiêm trọng.",
      },
    ],
    notes: [
      "Một kết quả xét nghiệm bất thường chưa kết luận được gì — thường cần làm lại sau một thời gian theo chỉ định.",
      "Hiếm muộn là chuyện của cả hai người, nên đi khám cùng nhau thay vì mặc định do một bên.",
    ],
    faq: [
      {
        q: "Mặc quần bó có ảnh hưởng không?",
        a: "Quần quá bó và nóng có thể làm tăng nhiệt vùng bìu. Chọn đồ thoáng là việc dễ làm, không mất gì.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "kham-suc-khoe-sinh-san-truoc-khi-co-con",
    title: "Khám sức khỏe sinh sản trước khi có con",
    excerpt:
      "Phần lớn các cặp chỉ đi khám khi đã chờ mãi không thấy tin vui. Đi sớm hơn thì nhẹ đầu hơn nhiều.",
    readTimeMinutes: 2,
    quickAnswer:
      "Nam giới nên khám nam khoa hoặc tới trung tâm hỗ trợ sinh sản, thường gồm hỏi bệnh sử, khám lâm sàng và xét nghiệm tinh dịch đồ, đôi khi thêm xét nghiệm nội tiết hoặc siêu âm. Nên đi cùng bạn đời vì đây là việc của hai người.",
    prepare: [
      "Hỏi trước phòng xét nghiệm về yêu cầu chuẩn bị",
      "Ghi lại tiền sử: quai bị lúc nhỏ, chấn thương, phẫu thuật vùng bẹn",
      "Danh sách thuốc đang dùng",
    ],
    steps: [
      {
        title: "Đi cùng bạn đời",
        detail:
          "Nguyên nhân hiếm muộn chia khá đều giữa hai bên. Khám một phía là bỏ sót một nửa bức tranh.",
      },
      {
        title: "Chuẩn bị theo hướng dẫn phòng xét nghiệm",
        detail: "Thời gian kiêng và cách lấy mẫu ảnh hưởng tới kết quả, làm sai phải làm lại.",
      },
      {
        title: "Nghe bác sĩ giải thích kết quả",
        detail:
          "Đừng tự đọc chỉ số rồi hoảng. Nhiều chỉ số dao động theo thời điểm và cần lặp lại.",
      },
      {
        title: "Hỏi về những gì có thể cải thiện",
        detail: "Lối sống, cân nặng, thuốc đang dùng — nhiều thứ điều chỉnh được.",
      },
    ],
    notes: [
      "Từng bị quai bị có biến chứng, chấn thương vùng kín, hoặc phẫu thuật bẹn thì nên nói rõ với bác sĩ.",
      "Cảnh giác với phòng khám hứa hẹn kết quả nhanh và đòi đóng gói tiền lớn.",
    ],
    faq: [
      {
        q: "Chưa cưới có đi khám được không?",
        a: "Được. Đây là khám sức khỏe bình thường, không phụ thuộc tình trạng hôn nhân.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "triet-san-nam-hieu-de-di-hoi-bac-si",
    title: "Triệt sản nam: hiểu để đi hỏi bác sĩ",
    excerpt:
      "Thủ thuật nhỏ hơn nhiều người tưởng, nhưng có một điểm quan trọng: đừng coi nó là chuyện đổi ý được dễ dàng.",
    readTimeMinutes: 3,
    quickAnswer:
      "Đây là thủ thuật nhỏ nhằm ngăn tinh trùng đi vào tinh dịch, không ảnh hưởng tới nội tiết hay khả năng quan hệ. Điểm cần cân nhắc kỹ nhất là nên coi đây là quyết định lâu dài — khả năng nối lại không được đảm bảo. Mọi thông tin cụ thể phải do bác sĩ tư vấn.",
    prepare: [
      "Nói chuyện kỹ với bạn đời và thống nhất",
      "Chuẩn bị câu hỏi cho bác sĩ về rủi ro, thời gian hồi phục và theo dõi sau thủ thuật",
      "Chọn bệnh viện hoặc cơ sở có giấy phép",
    ],
    steps: [
      {
        title: "Bàn bạc trước khi đặt lịch",
        detail:
          "Quyết định này ảnh hưởng tới kế hoạch của cả hai. Đừng làm trong lúc đang căng thẳng hay giận dỗi.",
      },
      {
        title: "Đi tư vấn ở cơ sở uy tín",
        detail:
          "Bác sĩ giải thích quy trình, rủi ro, thời gian hồi phục và những gì cần theo dõi sau đó.",
      },
      {
        title: "Hỏi về giai đoạn chưa có hiệu lực",
        detail:
          "Sau thủ thuật vẫn cần dùng biện pháp khác trong một thời gian cho tới khi được xác nhận. Đây là chỗ nhiều người hiểu nhầm.",
      },
      {
        title: "Tuân thủ lịch kiểm tra sau thủ thuật",
        detail: "Cần xét nghiệm xác nhận theo hẹn, không tự suy đoán là đã an toàn.",
      },
    ],
    notes: [
      "Thủ thuật này không phòng được bệnh lây qua đường tình dục.",
      "Bài viết chỉ giới thiệu để bạn biết mà đi hỏi, không thay thế tư vấn y khoa.",
    ],
    faq: [
      {
        q: "Có ảnh hưởng tới bản lĩnh đàn ông không?",
        a: "Theo tư vấn y khoa thông thường thì không ảnh hưởng nội tiết hay khả năng quan hệ. Cứ hỏi thẳng bác sĩ mọi lo lắng của bạn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ap-luc-phai-gioi-den-tu-dau",
    title: "Áp lực phải giỏi: nó đến từ đâu",
    excerpt:
      "Cái vòng luẩn quẩn quen thuộc: càng lo mình không làm được thì càng khó làm được. Có cách bước ra.",
    readTimeMinutes: 3,
    quickAnswer:
      "Lo lắng về khả năng làm cơ thể tiết hormone căng thẳng, mà thứ đó lại cản trở chính điều bạn đang lo. Cách hiệu quả nhất không phải là cố gắng hơn mà là giảm áp lực: nói thật với bạn đời, bỏ tiêu chuẩn học từ phim ảnh, và tạm thời bỏ hẳn mục tiêu phải làm được.",
    prepare: [
      "Nhận ra vòng lặp: lo lắng dẫn tới thất bại dẫn tới lo lắng hơn",
      "Sẵn sàng nói chuyện thật với bạn đời",
      "Cân nhắc gặp chuyên gia tâm lý nếu tình trạng kéo dài",
    ],
    steps: [
      {
        title: "Gọi tên vấn đề",
        detail:
          "Đây là lo âu tình huống, rất phổ biến, và không phải khiếm khuyết về con người bạn.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Im lặng khiến người kia tự suy diễn là do họ không hấp dẫn. Một câu giải thích ngắn gỡ được rất nhiều.",
      },
      {
        title: "Bỏ tiêu chuẩn học từ phim",
        detail:
          "Nội dung người lớn là sản phẩm dàn dựng để bán. Lấy nó làm chuẩn giống như lấy phim hành động làm chuẩn cho lái xe.",
      },
      {
        title: "Tạm bỏ mục tiêu",
        detail:
          "Thoả thuận với nhau vài lần chỉ ở bên nhau, không đặt đích đến. Nghe ngược đời nhưng đây là cách phá vòng lặp.",
      },
      {
        title: "Tìm hỗ trợ nếu kéo dài",
        detail:
          "Chuyên gia tâm lý và bác sĩ nam khoa đều có thể giúp. Đi khám không có nghĩa là bạn có vấn đề nghiêm trọng.",
      },
    ],
    notes: [
      "Nếu tình trạng xảy ra cả khi bạn ở một mình thì nhiều khả năng có nguyên nhân thực thể — nên đi khám nam khoa.",
      "Đừng tự mua thuốc để bù cho lo lắng; thuốc không giải quyết được nguyên nhân tâm lý và có rủi ro riêng.",
    ],
    faq: [
      {
        q: "Nói ra bạn đời có coi thường không?",
        a: "Phần lớn người sẽ nhẹ nhõm vì họ đang tự trách mình. Nếu ai đó coi thường bạn vì điều này, đó là vấn đề của mối quan hệ.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "xem-phim-nguoi-lon-khi-nao-thanh-van-de",
    title: "Xem phim người lớn: khi nào thành vấn đề",
    excerpt:
      "Không phải cứ xem là hỏng. Nhưng có mấy dấu hiệu cho thấy nó đang lấy đi nhiều hơn là mang lại.",
    readTimeMinutes: 3,
    quickAnswer:
      "Dấu hiệu đáng lưu tâm: bạn khó hứng thú với bạn đời thật, cần nội dung ngày càng nặng hơn, dành nhiều thời gian tới mức ảnh hưởng công việc hay giấc ngủ, hoặc thấy có lỗi và giấu giếm nhưng không dừng được. Có những dấu hiệu này thì nên tìm chuyên gia tâm lý.",
    prepare: [
      "Ghi lại thời gian thực tế trong một tuần, không phán xét",
      "Nhìn thẳng vào tác động: giấc ngủ, công việc, mối quan hệ",
      "Biết rằng có chuyên gia hỗ trợ mảng này",
    ],
    steps: [
      {
        title: "Đo trước khi đánh giá",
        detail: "Con số thực tế trong một tuần nói nhiều hơn cảm giác chung chung.",
      },
      {
        title: "Xem nó có thay thế gì không",
        detail:
          "Nếu nó đang thay chỗ của giấc ngủ, bạn bè, hoặc sự gần gũi thật thì đó là tín hiệu.",
      },
      {
        title: "Nhận ra tiêu chuẩn méo mó",
        detail:
          "Nội dung dàn dựng lâu ngày tạo kỳ vọng lệch về cơ thể, thời lượng và phản ứng của người khác.",
      },
      {
        title: "Thay đổi bằng cách thêm chứ đừng chỉ cấm",
        detail:
          "Đặt điện thoại ngoài phòng ngủ, lấp thời gian trống bằng hoạt động khác. Chỉ cấm mà không thay thế thì khó bền.",
      },
      {
        title: "Tìm hỗ trợ nếu không dừng được",
        detail:
          "Cảm giác mất kiểm soát dù đã cố nhiều lần là lý do chính đáng để gặp chuyên gia tâm lý.",
      },
    ],
    notes: [
      "Nội dung có trẻ vị thành niên là bất hợp pháp và gây tổn hại nghiêm trọng — tuyệt đối tránh xa và báo cơ quan chức năng nếu gặp.",
      "Cẩn thận với trang web lạ: mã độc và bẫy tống tiền rất phổ biến ở mảng này.",
    ],
    faq: [
      {
        q: "Xem có làm giảm khả năng thật không?",
        a: "Bằng chứng còn khác nhau, nhưng nhiều người báo cáo cải thiện khi giảm bớt. Thấy khó hứng thú với bạn đời thật thì thử giảm vài tuần xem sao.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "noi-voi-ban-doi-khi-ban-khong-muon",
    title: "Nói với bạn đời khi bạn không muốn",
    excerpt:
      "Đàn ông cũng có lúc không muốn, và điều đó hoàn toàn bình thường — chỉ là ít ai được dạy cách nói.",
    readTimeMinutes: 2,
    quickAnswer:
      "Nói ngắn, nói thật, và nói kèm sự trấn an. Ví dụ: hôm nay anh mệt quá, không phải do em. Tránh viện cớ lặp đi lặp lại vì đó là thứ khiến người kia nghi ngờ và tổn thương nhiều hơn là lời từ chối thẳng.",
    prepare: [
      "Biết rõ lý do của mình: mệt, căng thẳng, hay có gì đó trong mối quan hệ",
      "Chọn lúc bình thường để nói, đừng đợi tới lúc đang trong tình huống",
      "Chuẩn bị một câu trấn an ngắn",
    ],
    steps: [
      {
        title: "Nói thẳng và ngắn",
        detail: "Một câu là đủ. Càng giải thích dài càng nghe như đang chống chế.",
      },
      {
        title: "Trấn an rằng không phải do họ",
        detail:
          "Đây là phần quan trọng nhất. Thiếu câu này, người kia thường tự quy về ngoại hình hay sức hấp dẫn của mình.",
      },
      {
        title: "Đề xuất cách gần gũi khác",
        detail:
          "Ôm, nằm nói chuyện, xem phim cùng nhau. Giữ kết nối quan trọng hơn là kết thúc bằng sự im lặng.",
      },
      {
        title: "Nếu lặp lại thường xuyên thì nói chuyện sâu hơn",
        detail:
          "Chọn lúc cả hai bình tĩnh để nói về nguyên nhân, và cân nhắc đi khám nếu ham muốn giảm kéo dài.",
      },
    ],
    notes: [
      "Không ai có nghĩa vụ phải đồng ý. Đồng thuận áp dụng cho cả hai giới, trong cả mối quan hệ lâu dài.",
      "Bị giận dỗi, dằn vặt hay ép buộc sau khi bạn từ chối là dấu hiệu không lành mạnh, cần nói chuyện nghiêm túc.",
    ],
    faq: [
      {
        q: "Từ chối có làm mất mặt đàn ông không?",
        a: "Không. Quan niệm đàn ông lúc nào cũng phải sẵn sàng là một áp lực vô lý, và nó gây hại cho chính các mối quan hệ.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "bi-tu-choi-xu-ly-cam-xuc-lanh-manh",
    title: "Bị từ chối: xử lý cảm xúc lành mạnh",
    excerpt:
      "Hụt hẫng là thật và không cần giả vờ ổn. Nhưng có ranh giới rõ giữa buồn và biến nỗi buồn thành sức ép lên người khác.",
    readTimeMinutes: 2,
    quickAnswer:
      "Chấp nhận lời từ chối ngay lần đầu, không hỏi vặn, không giận dỗi, không rủ rê lại nhiều lần. Cho phép mình buồn vài hôm, nói chuyện với bạn bè, và nhớ rằng một lời từ chối là về sự phù hợp chứ không phải bản án về giá trị của bạn.",
    prepare: [
      "Nhớ trước một nguyên tắc: không là không, ngay lần đầu",
      "Có vài người bạn để tâm sự",
      "Vài hoạt động giúp bạn bận rộn trong giai đoạn đầu",
    ],
    steps: [
      {
        title: "Đáp lại tử tế rồi dừng",
        detail:
          "Một câu cảm ơn vì đã nói thẳng là đủ. Không đòi lý do, không thương lượng.",
      },
      {
        title: "Cho phép mình buồn",
        detail: "Không cần tỏ ra mạnh mẽ. Buồn vài hôm là phản ứng bình thường của con người.",
      },
      {
        title: "Đừng biến nó thành câu chuyện về giá trị bản thân",
        detail:
          "Không hợp là chuyện thường gặp. Một người không chọn bạn không nói lên điều gì về toàn bộ con người bạn.",
      },
      {
        title: "Giữ khoảng cách một thời gian",
        detail:
          "Nhắn tin liên tục sau khi bị từ chối làm khó cả hai. Lùi lại là cách tôn trọng bản thân lẫn người kia.",
      },
    ],
    notes: [
      "Theo đuổi dai dẳng sau khi đã bị từ chối rõ ràng có thể trở thành quấy rối, kể cả khi bạn nghĩ mình chân thành.",
      "Buồn kéo dài nhiều tuần, mất ngủ, mất hứng thú với mọi thứ: cân nhắc gặp chuyên gia tâm lý.",
    ],
    faq: [
      {
        q: "Cố thêm một lần nữa có được không?",
        a: "Nếu họ đã nói rõ thì không. Kiên trì trong tình cảm chỉ đẹp trong phim, ngoài đời nó thường khiến người ta thấy bị làm phiền.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "dan-ong-cung-bi-quay-roi-va-xam-hai",
    title: "Đàn ông cũng bị quấy rối và xâm hại",
    excerpt:
      "Ít được nói tới nên nhiều người nghĩ chuyện đó không xảy ra với mình — và im lặng một mình nhiều năm.",
    readTimeMinutes: 3,
    quickAnswer:
      "Nam giới cũng có thể bị quấy rối, bị ép buộc và bị xâm hại, kể cả bởi người quen hoặc bạn đời. Đó không phải lỗi của bạn, và phản ứng của cơ thể lúc đó không có nghĩa là bạn đồng ý. Bạn có quyền tìm hỗ trợ y tế, tâm lý và trình báo.",
    prepare: [
      "Biết rằng chuyện này có thật và không hiếm như người ta tưởng",
      "Một người bạn hoặc người thân đáng tin để kể",
      "Thông tin cơ sở y tế và công an nơi bạn ở",
    ],
    steps: [
      {
        title: "Gọi đúng tên sự việc",
        detail:
          "Bị ép buộc, bị đụng chạm khi không đồng ý, bị đe doạ để phải chiều theo — tất cả đều là xâm hại, không phụ thuộc giới tính.",
      },
      {
        title: "Hiểu về phản ứng của cơ thể",
        detail:
          "Cơ thể có thể phản ứng sinh lý ngoài ý muốn trong tình huống đó. Điều này không đồng nghĩa với sự đồng ý và không phải lý do để bạn tự trách.",
      },
      {
        title: "Chăm sóc y tế nếu cần",
        detail:
          "Có nguy cơ lây bệnh thì đi khám sớm — một số biện pháp dự phòng có giới hạn thời gian rất ngắn.",
      },
      {
        title: "Tìm hỗ trợ tâm lý",
        detail:
          "Chuyên gia tâm lý làm việc với nam giới bị xâm hại. Nói ra với người có chuyên môn giúp ích hơn nhiều so với tự chịu đựng.",
      },
      {
        title: "Cân nhắc trình báo",
        detail: "Bạn có quyền trình báo công an. Quyết định là của bạn và không ai được thúc ép.",
      },
    ],
    notes: [
      "Không có chuyện đàn ông thì không thể bị hại. Định kiến này chính là lý do nhiều người im lặng.",
      "Bạn không có lỗi, dù bạn đã uống rượu, đã đi cùng người đó, hay đã đồng ý ở một mức nào đó trước khi nói dừng.",
    ],
    faq: [
      {
        q: "Kể ra người ta có cười không?",
        a: "Chọn người bạn tin hoặc chuyên gia tâm lý. Người có chuyên môn không cười, họ hiểu chuyện này xảy ra với mọi giới.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tim-giup-do-tam-ly-ve-chuyen-gioi-tinh",
    title: "Tìm giúp đỡ tâm lý về chuyện giới tính",
    excerpt:
      "Không phải cứ gặp chuyên gia là bị coi là có bệnh. Nhiều vấn đề chỉ cần vài buổi nói chuyện đúng người.",
    readTimeMinutes: 2,
    quickAnswer:
      "Tìm chuyên gia tâm lý hoặc bác sĩ tâm thần có kinh nghiệm về sức khỏe tình dục, ở bệnh viện có khoa tâm lý hoặc phòng khám có giấy phép. Buổi đầu chủ yếu là kể chuyện và xác định vấn đề, không có gì đáng sợ.",
    prepare: [
      "Ghi ra điều bạn muốn thay đổi, dù chỉ một câu",
      "Kiểm tra chứng chỉ hành nghề của người bạn định gặp",
      "Chuẩn bị tinh thần cần vài buổi mới thấy chuyển biến",
    ],
    steps: [
      {
        title: "Xác định bạn muốn gì",
        detail:
          "Bớt lo lắng, cải thiện mối quan hệ, hay xử lý một trải nghiệm cũ. Mục tiêu rõ giúp buổi đầu hiệu quả hơn.",
      },
      {
        title: "Chọn nơi có chuyên môn",
        detail:
          "Khoa tâm lý bệnh viện, phòng khám tâm lý có giấy phép. Tránh các dịch vụ tự xưng chuyên gia trên mạng xã hội.",
      },
      {
        title: "Nói thẳng trong buổi đầu",
        detail: "Họ nghe những chuyện này thường xuyên. Càng vòng vo càng mất thời gian của bạn.",
      },
      {
        title: "Đổi người nếu không hợp",
        detail:
          "Cảm giác an toàn với người trị liệu rất quan trọng. Không hợp thì tìm người khác, đó là chuyện bình thường.",
      },
    ],
    notes: [
      "Có ý nghĩ làm hại bản thân: tìm hỗ trợ khẩn cấp ngay, đến cơ sở y tế gần nhất hoặc nhờ người thân đưa đi.",
      "Thông tin bạn chia sẻ được bảo mật theo quy định nghề nghiệp.",
    ],
    faq: [
      {
        q: "Đi khám tâm lý có bị ghi vào hồ sơ gì không?",
        a: "Hồ sơ y tế được bảo mật. Nếu lo, cứ hỏi thẳng về chính sách bảo mật ngay từ buổi đầu.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "dau-hoac-kho-chiu-vung-kin-o-nam",
    title: "Đau hoặc khó chịu vùng kín ở nam",
    excerpt:
      "Có loại đau chờ được, có loại phải đi cấp cứu trong vài giờ. Biết phân biệt là điều đáng nhớ.",
    readTimeMinutes: 2,
    quickAnswer:
      "Đau đột ngột dữ dội một bên, kèm buồn nôn hoặc sưng nhanh là tình huống CẤP CỨU, cần tới bệnh viện ngay trong vài giờ. Đau âm ỉ kéo dài, tiểu buốt, tiết dịch bất thường thì đi khám nam khoa hoặc tiết niệu trong vài ngày.",
    prepare: [
      "Ghi lại: đau từ khi nào, một bên hay hai bên, có sốt không",
      "Biết bệnh viện gần nhất có khoa cấp cứu",
      "Không tự uống thuốc giảm đau rồi ngủ tiếp khi đau dữ dội",
    ],
    steps: [
      {
        title: "Phân loại mức độ khẩn",
        detail:
          "Đau đột ngột dữ dội thì đi ngay. Đau âm ỉ, tăng dần thì sắp xếp đi khám sớm.",
      },
      {
        title: "Đừng chờ cho qua",
        detail:
          "Một số tình trạng chỉ có vài giờ vàng để xử lý. Chờ tới sáng có thể là quá muộn.",
      },
      {
        title: "Nói rõ triệu chứng với bác sĩ",
        detail: "Vị trí, kiểu đau, có kèm tiểu buốt, sốt, tiết dịch hay chấn thương không.",
      },
      {
        title: "Không tự mua kháng sinh",
        detail:
          "Dùng sai làm mờ triệu chứng và khiến việc chẩn đoán khó hơn, chưa kể nguy cơ kháng thuốc.",
      },
    ],
    notes: [
      "CẤP CỨU: đau dữ dội đột ngột, sưng to nhanh, kèm nôn, sau chấn thương, hoặc bí tiểu hoàn toàn.",
      "Bài viết không chẩn đoán — mọi triệu chứng phải do bác sĩ đánh giá trực tiếp.",
    ],
    faq: [
      {
        q: "Đau sau khi chơi thể thao có sao không?",
        a: "Chấn thương nhẹ có thể tự đỡ, nhưng đau tăng, sưng to hoặc bầm tím lan rộng thì phải đi khám ngay.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "noi-tiet-to-nam-suy-giam-theo-tuoi",
    title: "Nội tiết tố nam suy giảm theo tuổi",
    excerpt:
      "Có thật, nhưng không kịch tính như quảng cáo. Và tuyệt đối đừng tự tiêm hay tự uống bất cứ thứ gì.",
    readTimeMinutes: 3,
    quickAnswer:
      "Nội tiết tố nam giảm dần theo tuổi ở mức nhẹ, khác hẳn với hình ảnh khủng hoảng mà quảng cáo vẽ ra. Mệt mỏi, giảm ham muốn, tăng mỡ bụng có thể do nhiều nguyên nhân khác. Muốn biết thì xét nghiệm theo chỉ định bác sĩ, không tự đoán và tuyệt đối không tự dùng liệu pháp nội tiết.",
    prepare: [
      "Ghi lại triệu chứng và thời gian xuất hiện",
      "Rà soát giấc ngủ, cân nặng, rượu bia, mức độ căng thẳng",
      "Tìm bác sĩ nội tiết hoặc nam khoa ở cơ sở uy tín",
    ],
    steps: [
      {
        title: "Loại trừ nguyên nhân đời thường trước",
        detail:
          "Thiếu ngủ, thừa cân, căng thẳng, trầm cảm gây triệu chứng rất giống. Sửa những thứ này trước đã.",
      },
      {
        title: "Xét nghiệm đúng cách",
        detail:
          "Chỉ số này dao động trong ngày, nên phải lấy máu theo đúng thời điểm bác sĩ chỉ định mới có ý nghĩa.",
      },
      {
        title: "Nghe bác sĩ giải thích kết quả",
        detail:
          "Một chỉ số thấp đơn lẻ không đủ kết luận. Bác sĩ nhìn cả triệu chứng và các xét nghiệm khác.",
      },
      {
        title: "Không tự dùng liệu pháp nội tiết",
        detail:
          "Tự tiêm hoặc uống có thể gây teo tinh hoàn, ảnh hưởng khả năng sinh sản và nguy cơ tim mạch. Đây là điều trị bắt buộc phải có bác sĩ theo dõi.",
      },
    ],
    notes: [
      "Cẩn thận với sản phẩm quảng cáo tăng nội tiết tố nam bán trôi nổi — nhiều loại chứa chất cấm.",
      "Bài viết không chẩn đoán, không chỉ định điều trị.",
    ],
    faq: [
      {
        q: "Tập gym có tăng nội tiết tố không?",
        a: "Vận động đều, ngủ đủ và giữ cân nặng hợp lý có lợi cho nội tiết nói chung. Nhưng đó là hiệu quả từ từ, không phải phép màu.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tu-thoa-man-nhung-hieu-lam-pho-bien",
    title: "Tự thoả mãn: những hiểu lầm phổ biến",
    excerpt:
      "Rất nhiều lời đồn được truyền qua nhiều thế hệ mà không ai kiểm chứng. Đây là góc nhìn y tế bình thản.",
    readTimeMinutes: 2,
    quickAnswer:
      "Theo tài liệu y tế phổ thông, đây là hành vi bình thường ở cả nam và nữ, không gây mù, không gây yếu sinh lý, không làm mất khả năng sinh sản. Điều đáng lưu tâm chỉ là khi nó gây đau, chiếm quá nhiều thời gian, hoặc khiến bạn khó hứng thú với bạn đời thật.",
    prepare: [
      "Bỏ qua các nguồn thông tin doạ dẫm không có cơ sở",
      "Nhìn vào tác động thực tế lên cuộc sống của bạn",
      "Biết rằng có thể hỏi bác sĩ về chuyện này một cách bình thường",
    ],
    steps: [
      {
        title: "Tách lời đồn khỏi thông tin y tế",
        detail:
          "Những lời doạ về mù mắt, hói đầu, yếu sinh lý không có cơ sở khoa học.",
      },
      {
        title: "Nhìn vào tác động thật",
        detail:
          "Có ảnh hưởng tới giấc ngủ, công việc, hay mối quan hệ của bạn không. Đó mới là thước đo hữu ích.",
      },
      {
        title: "Chú ý dấu hiệu cơ thể",
        detail: "Đau, trầy xước, chảy máu là dấu hiệu bạn đang làm quá mạnh, cần điều chỉnh.",
      },
      {
        title: "Nói với chuyên gia nếu thấy mất kiểm soát",
        detail:
          "Cảm giác không dừng được dù đã cố nhiều lần là lý do chính đáng để gặp chuyên gia tâm lý.",
      },
    ],
    notes: [
      "Cảm giác tội lỗi thường đến từ quan niệm xã hội chứ không phải từ tác hại y tế. Nếu nó khiến bạn dằn vặt nhiều, nói chuyện với chuyên gia tâm lý là hợp lý.",
      "Bài viết mang tính thông tin sức khỏe chung, không thay thế tư vấn y khoa.",
    ],
    faq: [
      {
        q: "Có ảnh hưởng tới việc có con không?",
        a: "Theo tài liệu y tế thông thường thì không. Đang mong con và lo lắng thì hỏi bác sĩ hỗ trợ sinh sản cho chắc.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "hieu-ve-xu-huong-tinh-duc-va-ban-dang-gioi",
    title: "Hiểu về xu hướng tính dục và bản dạng giới",
    excerpt:
      "Vài khái niệm cơ bản, giải thích bình thản — để bạn hiểu chính mình hoặc hiểu người thân của mình.",
    readTimeMinutes: 3,
    quickAnswer:
      "Xu hướng tính dục là việc bạn bị hấp dẫn bởi ai; bản dạng giới là việc bạn cảm nhận mình là ai. Hai thứ này khác nhau và độc lập với nhau. Tổ chức y tế thế giới từ lâu đã không coi đồng tính là bệnh, và không có phương pháp chuyển đổi nào được y học công nhận.",
    prepare: [
      "Tinh thần tìm hiểu chứ không phán xét, kể cả khi đang tìm hiểu về chính mình",
      "Nguồn thông tin từ tổ chức y tế uy tín thay vì mạng xã hội",
      "Kiên nhẫn: hiểu bản thân là quá trình, không phải một câu trả lời trong một đêm",
    ],
    steps: [
      {
        title: "Phân biệt hai khái niệm",
        detail:
          "Bị hấp dẫn bởi ai là xu hướng tính dục. Cảm nhận mình là nam, nữ hay khác là bản dạng giới. Một người có thể thuộc bất kỳ kết hợp nào của hai thứ này.",
      },
      {
        title: "Biết đây không phải bệnh",
        detail:
          "Các tổ chức y tế lớn đã loại đồng tính khỏi danh sách bệnh từ lâu. Cái gọi là liệu pháp chuyển đổi bị nhiều tổ chức y khoa phản đối vì gây hại.",
      },
      {
        title: "Cho mình thời gian",
        detail:
          "Không cần gán nhãn ngay. Nhiều người mất nhiều năm và điều đó hoàn toàn bình thường.",
      },
      {
        title: "Chọn người để chia sẻ",
        detail:
          "Bắt đầu với một người bạn tin nhất. Không có nghĩa vụ phải công khai với ai, và thời điểm là quyền của bạn.",
      },
      {
        title: "Nếu là người thân của bạn công khai",
        detail:
          "Điều họ cần nhất là được lắng nghe. Câu đơn giản nhất mà hiệu quả nhất là cảm ơn vì đã tin tưởng kể với mình.",
      },
    ],
    notes: [
      "Bị kỳ thị kéo dài ảnh hưởng thật tới sức khỏe tâm thần — nếu bạn đang mệt mỏi, hãy tìm chuyên gia tâm lý hoặc nhóm hỗ trợ.",
      "Sức khỏe tình dục an toàn áp dụng cho mọi người, không phụ thuộc xu hướng hay bản dạng.",
    ],
    faq: [
      {
        q: "Làm sao biết chắc mình là gì?",
        a: "Không có bài kiểm tra nào cả. Cảm nhận của chính bạn là câu trả lời, và nó có thể rõ dần theo thời gian.",
      },
      {
        q: "Người thân không chấp nhận thì sao?",
        a: "Nhiều người cần thời gian để hiểu. Trong lúc đó, hãy giữ những mối quan hệ an toàn cho mình và tìm nhóm hỗ trợ nếu cần.",
      },
    ],
    sources: [],
  },
];
