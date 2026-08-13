// Phần NAM GIỚI — NGƯỜI LỚN: chuyện khó nói về cơ thể, tình dục, giới tính.
//
// ❗ Mọi bài ở đây đều có adult: true — ẩn khỏi lượt xem mặc định ở trang chủ,
//    chỉ hiện khi người đọc bấm đúng mục Nam giới / 18+ hoặc đang tìm kiếm.
//
// ❗ NGUYÊN TẮC: nói thẳng và bình thản về sức khỏe, cảm xúc và giao tiếp.
//    KHÔNG mô tả kỹ thuật tình dục, KHÔNG kê tên thuốc hay liều dùng,
//    mọi bài đều nhắc đây không phải tư vấn y khoa.
//    Số bước không giới hạn — ưu tiên đủ chi tiết để làm theo được.

const chung = { category: "nam-gioi", author: null, adult: true };

export const namGioiNguoiLon = [
  {
    ...chung,
    slug: "tu-kiem-tra-tinh-hoan-moi-thang",
    title: "Tự kiểm tra tinh hoàn mỗi tháng",
    excerpt:
      "Ba mươi giây trong lúc tắm, mỗi tháng một lần. Việc này gần như không đàn ông Việt nào được dạy — dù đây là loại ung thư hay gặp nhất ở nam giới trẻ.",
    readTimeMinutes: 4,
    quickAnswer:
      "Làm sau khi tắm nước ấm khi da bìu mềm nhất. Quan sát trước gương, rồi dùng ngón cái và các ngón còn lại lăn nhẹ từng bên để cảm nhận toàn bộ bề mặt. Mục đích không phải tìm bệnh mà là làm quen với cái bình thường của mình — để nhận ra ngay khi có gì khác đi.",
    prepare: [
      "Làm sau khi tắm nước ấm — da bìu giãn ra thì dễ cảm nhận hơn nhiều",
      "Chọn một ngày cố định trong tháng và đặt nhắc trong điện thoại",
      "Chỗ riêng tư có gương",
      "Tinh thần bình thản: phần lớn thay đổi là lành tính, nhưng phải để bác sĩ xác định",
    ],
    steps: [
      {
        title: "Chọn thời điểm sau khi tắm nước ấm",
        detail:
          "Nước ấm làm da bìu giãn và mềm ra. Kiểm tra khi da đang co lại vì lạnh thì rất khó cảm nhận và dễ tưởng nhầm là bất thường.",
      },
      {
        title: "Đứng trước gương quan sát trước",
        detail:
          "Nhìn xem có sưng, đổi màu da, hay một bên to lên rõ so với bình thường không. Hai bên không bằng nhau tuyệt đối và một bên treo thấp hơn là chuyện hoàn toàn bình thường.",
      },
      {
        title: "Kiểm tra từng bên một, đừng làm cả hai cùng lúc",
        detail:
          "Dùng cả hai tay cho một bên: ngón cái ở trên, các ngón còn lại đỡ phía dưới. Lăn nhẹ để cảm nhận toàn bộ bề mặt.",
      },
      {
        title: "Cảm nhận bề mặt và độ chắc",
        detail:
          "Bình thường sẽ mịn, chắc đều, hình bầu dục. Bạn đang tìm cục cứng, chỗ gồ lên, hoặc vùng cứng bất thường khác với phần còn lại.",
      },
      {
        title: "Nhận biết cấu trúc bình thường ở phía sau trên",
        detail:
          "Có một dải mềm hơn nằm phía sau trên mỗi bên — đó là mào tinh, cấu trúc bình thường. Rất nhiều người sờ thấy nó rồi hoảng. Biết trước thì đỡ lo.",
      },
      {
        title: "Lặp lại cho bên còn lại",
        detail:
          "Làm cùng một cách để có thể so sánh hai bên với nhau. Chênh lệch nhẹ về kích thước là bình thường.",
      },
      {
        title: "Ghi nhớ hoặc ghi lại trạng thái bình thường của bạn",
        detail:
          "Đây là mục đích chính của cả việc này. Bạn không cần biết y học, chỉ cần biết cơ thể mình bình thường ra sao.",
      },
      {
        title: "Lặp lại mỗi tháng vào cùng một ngày",
        detail:
          "Đặt lịch nhắc lặp lại hàng tháng. Làm đều mới có tác dụng — làm một lần rồi thôi thì không so sánh được với gì.",
      },
      {
        title: "Thấy bất thường thì đi khám, đừng tra mạng",
        detail:
          "Tra mạng chỉ làm bạn hoảng thêm mà không kết luận được gì. Đặt lịch khám nam khoa hoặc tiết niệu trong tuần đó.",
      },
    ],
    notes: [
      "ĐI KHÁM SỚM nếu: sờ thấy cục cứng không đau, một bên to lên rõ, cảm giác nặng tức kéo dài, đau âm ỉ vùng bụng dưới hoặc bẹn, hoặc thay đổi độ chắc.",
      "Ung thư tinh hoàn hay gặp ở nam giới trẻ và tỉ lệ chữa khỏi rất cao NẾU phát hiện sớm — đó chính là lý do việc kiểm tra 30 giây này đáng làm.",
      "ĐI CẤP CỨU nếu đau dữ dội đột ngột một bên, kèm buồn nôn hoặc sưng nhanh — có thể là xoắn tinh hoàn, chỉ có vài giờ để xử lý.",
      "Bài viết không phải chẩn đoán; mọi bất thường phải do bác sĩ đánh giá trực tiếp.",
    ],
    faq: [
      {
        q: "Sờ thấy gì đó, có phải ung thư không?",
        a: "Phần lớn trường hợp là nang lành tính, giãn tĩnh mạch thừng tinh, hoặc chính là mào tinh bình thường. Nhưng đừng tự kết luận theo hướng nào — đi khám để biết chắc.",
      },
      {
        q: "Đau thì nguy hiểm hơn không đau?",
        a: "Ngược lại là đằng khác: khối u thường KHÔNG đau. Còn đau đột ngột dữ dội lại là tình huống cấp cứu vì có thể xoắn tinh hoàn.",
      },
      {
        q: "Bao nhiêu tuổi thì nên bắt đầu?",
        a: "Có thể bắt đầu từ tuổi thanh niên và duy trì suốt đời. Nhóm tuổi hay gặp ung thư tinh hoàn lại là nam giới trẻ, nên đừng nghĩ còn trẻ thì khỏi lo.",
      },
      {
        q: "Đi khám thì bác sĩ làm gì?",
        a: "Thường là hỏi bệnh sử, khám lâm sàng và siêu âm — nhanh, không đau. Đừng để nỗi ngại làm bạn trì hoãn thứ chỉ mất một buổi sáng.",
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
    readTimeMinutes: 4,
    quickAnswer:
      "Đa số nam giới nằm trong khoảng bình thường rộng và có xu hướng tự đánh giá thấp bản thân. Không có sản phẩm, bài tập hay thiết bị nào được y học chứng minh làm thay đổi kích thước — nhưng có nhiều thứ trong số đó gây tổn thương vĩnh viễn. Nếu nỗi lo chiếm hết tâm trí bạn, đó là vấn đề đáng nói với chuyên gia tâm lý.",
    prepare: [
      "Nhận ra nguồn gốc nỗi lo: phim ảnh, quảng cáo, và những câu chuyện phóng đại trong bàn nhậu",
      "Sẵn sàng bỏ qua mọi quảng cáo hứa hẹn thay đổi kích thước",
      "Nếu lo lắng ảnh hưởng tới cuộc sống, cân nhắc gặp chuyên gia tâm lý",
    ],
    steps: [
      {
        title: "Biết mình đang so với cái gì",
        detail:
          "Nội dung người lớn được tuyển chọn và dàn dựng để bán, không phải mẫu đại diện cho thực tế. Lấy nó làm chuẩn giống như lấy phim hành động làm chuẩn cho việc lái xe.",
      },
      {
        title: "Hiểu vì sao bạn hay đánh giá thấp mình",
        detail:
          "Bạn nhìn cơ thể mình từ trên xuống — góc nhìn này làm mọi thứ trông ngắn hơn thực tế. Đây là lý do rất nhiều người lo lắng vô cớ.",
      },
      {
        title: "Cảnh giác với mọi lời hứa thay đổi",
        detail:
          "Thuốc bôi, thực phẩm chức năng, dụng cụ kéo, bơm hút, tiêm chất làm đầy — nhiều thứ gây tổn thương mô, xơ hoá, biến dạng vĩnh viễn. Tiền mất tật mang là chuyện có thật.",
      },
      {
        title: "Hiểu điều bạn đời thật sự để ý",
        detail:
          "Các khảo sát về chủ đề này thường cho thấy vệ sinh, sự quan tâm, thái độ lắng nghe và giao tiếp ảnh hưởng tới trải nghiệm nhiều hơn hẳn so với con số.",
      },
      {
        title: "Chuyển sự chú ý sang thứ bạn kiểm soát được",
        detail:
          "Vệ sinh, sức khỏe tổng thể, cân nặng, và quan trọng nhất là khả năng nói chuyện với bạn đời. Đây mới là chỗ đầu tư có hiệu quả thật.",
      },
      {
        title: "Nhận diện khi nào nỗi lo thành vấn đề",
        detail:
          "Né tránh mối quan hệ, không dám thay đồ ở nơi công cộng, nghĩ về nó hằng ngày — đó là lúc vấn đề nằm ở tâm lý chứ không nằm ở cơ thể.",
      },
      {
        title: "Nói với ai đó nếu nó chiếm hết tâm trí",
        detail:
          "Ám ảnh về hình ảnh cơ thể là vấn đề tâm lý có thật và hỗ trợ được. Bạn không cần chịu đựng một mình và cũng không cần thấy xấu hổ vì điều đó.",
      },
      {
        title: "Đi khám nếu có dấu hiệu bất thường thực thể",
        detail:
          "Đau khi cương, cong biến dạng rõ, thay đổi đột ngột — đây là chuyện y khoa khác hẳn và cần bác sĩ nam khoa.",
      },
    ],
    notes: [
      "Có một số ít trường hợp bất thường thực sự về giải phẫu — điều đó do bác sĩ nam khoa xác định, không phải do bạn tự so sánh.",
      "Phẫu thuật thẩm mỹ vùng này có rủi ro cao và kết quả không như quảng cáo. Nếu vẫn muốn tìm hiểu, hãy đi tư vấn ở bệnh viện lớn chứ đừng tới spa hay phòng khám không phép.",
      "Cẩn thận với các trang quảng cáo dùng hình ảnh trước sau — phần lớn là dàn dựng.",
      "Bài viết không phải tư vấn y khoa.",
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
      {
        q: "Thừa cân có ảnh hưởng không?",
        a: "Lớp mỡ vùng bụng dưới có thể làm trông ngắn hơn. Giảm cân là hướng duy nhất có cơ sở, và nó còn tốt cho cả sức khỏe tim mạch lẫn khả năng cương.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "lan-dau-lo-lang-nao-la-binh-thuong",
    title: "Lần đầu: lo lắng nào là bình thường",
    excerpt:
      "Hầu như ai cũng lo, và phần lớn nỗi lo giống hệt nhau. Biết trước thì bớt được một nửa.",
    readTimeMinutes: 4,
    quickAnswer:
      "Hồi hộp tới mức cơ thể không phản ứng như mong đợi là chuyện CỰC KỲ phổ biến và không nói lên điều gì về bạn. Ba thứ quan trọng hơn mọi kỹ thuật: sự đồng thuận rõ ràng của cả hai, biện pháp bảo vệ đã chuẩn bị sẵn, và khả năng nói chuyện được với nhau.",
    prepare: [
      "Nói chuyện trước: cả hai có thật sự sẵn sàng không, hay chỉ một người muốn",
      "Mua sẵn biện pháp bảo vệ và đọc kỹ cách dùng — đừng để tới lúc đó mới loay hoay",
      "Chấp nhận trước rằng lần đầu thường lóng ngóng, và điều đó hoàn toàn bình thường",
      "Không gian riêng tư, không bị làm phiền, không vội",
    ],
    steps: [
      {
        title: "Xác nhận sự đồng thuận rõ ràng",
        detail:
          "Cả hai đều muốn, đều tỉnh táo, và đều biết có thể dừng bất cứ lúc nào mà không ai giận. Đây là điều kiện tiên quyết, không phải thủ tục.",
      },
      {
        title: "Chuẩn bị biện pháp bảo vệ TRƯỚC",
        detail:
          "Mua sẵn, đọc hướng dẫn, biết cách mở gói. Loay hoay lúc đó là cách nhanh nhất khiến cả hai căng thẳng và cũng là lúc dễ dùng sai.",
      },
      {
        title: "Bỏ kỳ vọng vào kịch bản hoàn hảo",
        detail:
          "Phim ảnh dàn dựng có kịch bản, có cắt ghép. Thực tế thường vụng về, có khi buồn cười, và đó là chuyện hoàn toàn bình thường.",
      },
      {
        title: "Đi chậm và nói chuyện trong lúc đó",
        detail:
          "Hỏi đối phương thấy sao, nói khi bạn không thoải mái. Giao tiếp quan trọng hơn mọi kỹ thuật bạn đọc được ở đâu đó.",
      },
      {
        title: "Nếu cơ thể không phản ứng như mong đợi",
        detail:
          "Rất thường do căng thẳng. Dừng lại, nói chuyện, ôm nhau cũng được. Đừng tự dằn vặt và cũng đừng giải thích dài dòng — càng căng càng khó.",
      },
      {
        title: "Đừng dùng rượu để lấy can đảm",
        detail:
          "Rượu vừa làm giảm khả năng ngay đêm đó, vừa làm mờ ranh giới đồng thuận của cả hai. Đây là lựa chọn tệ ở cả hai mặt.",
      },
      {
        title: "Chú ý cảm giác của đối phương",
        detail:
          "Nếu người kia có dấu hiệu đau hoặc không thoải mái, dừng lại và hỏi. Không có cuộc gặp nào đáng để đánh đổi bằng việc làm người khác đau.",
      },
      {
        title: "Sau đó: nói chuyện một chút",
        detail:
          "Không cần phân tích dài. Chỉ cần hỏi nhau thấy ổn không. Điều này ảnh hưởng tới cảm giác của cả hai nhiều hơn bạn nghĩ.",
      },
      {
        title: "Nếu có sự cố về biện pháp bảo vệ",
        detail:
          "Rách hoặc tuột thì đừng im lặng chờ đợi. Có những phương án dự phòng nhưng đều tính theo giờ — hỏi dược sĩ hoặc tới cơ sở y tế ngay.",
      },
    ],
    notes: [
      "Không có mốc tuổi nào là đúng hay sai. Chưa sẵn sàng thì chưa làm, và không ai có quyền thúc ép bạn — kể cả bạn đời.",
      "Rượu bia làm giảm khả năng đồng thuận rõ ràng của cả hai. Đây là điều đáng cân nhắc nghiêm túc, không phải chi tiết phụ.",
      "Không có biện pháp bảo vệ thì hoãn lại. Một lần thiếu chuẩn bị có thể đổi cả kế hoạch cuộc đời.",
      "Bài viết không phải tư vấn y khoa.",
    ],
    faq: [
      {
        q: "Lo tới mức không làm được, có phải bị bệnh không?",
        a: "Thường không. Lo âu tình huống rất phổ biến và tự hết khi bạn thoải mái hơn. Kéo dài nhiều tháng, kể cả khi ở một mình, thì nên đi khám nam khoa.",
      },
      {
        q: "Có nên nói với bạn đời là mình chưa có kinh nghiệm?",
        a: "Nên. Nói ra thường làm cả hai nhẹ nhõm và giảm áp lực phải diễn cho giống ai đó. Người tôn trọng bạn sẽ không lấy điều này ra chê.",
      },
      {
        q: "Nhanh quá thì sao?",
        a: "Rất phổ biến ở lần đầu và thường cải thiện khi bạn bớt căng thẳng. Kéo dài và ảnh hưởng tới cuộc sống thì đi khám nam khoa.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ham-muon-tut-giam-nguyen-nhan-thuong-gap",
    title: "Ham muốn tụt giảm: nguyên nhân thường gặp",
    excerpt:
      "Không phải cứ giảm ham muốn là do tuổi tác hay hết yêu. Danh sách thủ phạm thật ra khá đời thường.",
    readTimeMinutes: 4,
    quickAnswer:
      "Thủ phạm phổ biến nhất là thiếu ngủ, căng thẳng kéo dài, rượu bia, một số loại thuốc đang dùng, trầm cảm, và vấn đề trong mối quan hệ. Nội tiết chỉ là một phần và không phải nguyên nhân hàng đầu như quảng cáo hay nói. Hãy rà theo thứ tự từ dễ sửa nhất.",
    prepare: [
      "Nhìn lại vài tháng qua: giấc ngủ, khối lượng công việc, rượu bia, tâm trạng",
      "Liệt kê toàn bộ thuốc đang dùng, kể cả thực phẩm chức năng",
      "Sẵn sàng nói chuyện thật với bạn đời",
      "Ghi lại mốc thời gian: giảm từ khi nào, giảm dần hay đột ngột",
    ],
    steps: [
      {
        title: "Xác định giảm từ khi nào và giảm ra sao",
        detail:
          "Giảm dần theo năm tháng khác với giảm đột ngột trong vài tuần. Đột ngột thì thường có nguyên nhân cụ thể và tìm được.",
      },
      {
        title: "Kiểm tra giấc ngủ trước tiên",
        detail:
          "Thiếu ngủ kéo dài ảnh hưởng tới nội tiết và tâm trạng nhanh hơn bất kỳ yếu tố nào khác. Đây cũng là thứ dễ sửa nhất.",
      },
      {
        title: "Xem lại rượu bia và thuốc lá",
        detail:
          "Uống nhiều thường xuyên ảnh hưởng cả ham muốn lẫn khả năng. Thử giảm trong bốn tuần và quan sát — nhiều người thấy khác biệt rõ.",
      },
      {
        title: "Rà soát thuốc đang dùng",
        detail:
          "Một số nhóm thuốc huyết áp, thuốc chống trầm cảm, thuốc dạ dày có tác dụng phụ này. Nói với bác sĩ kê đơn để cân nhắc đổi, TUYỆT ĐỐI đừng tự bỏ thuốc.",
      },
      {
        title: "Đánh giá mức căng thẳng và tâm trạng",
        detail:
          "Trầm cảm và lo âu làm giảm ham muốn rất mạnh và thường bị bỏ qua ở nam giới. Nếu bạn còn mất hứng thú với nhiều thứ khác nữa thì đây là dấu hiệu quan trọng.",
      },
      {
        title: "Nhìn thẳng vào mối quan hệ",
        detail:
          "Mâu thuẫn chưa giải quyết, ức chế dồn nén, mất kết nối — những thứ này ảnh hưởng nhiều hơn người ta tưởng. Đôi khi cần nói chuyện chứ không cần thuốc.",
      },
      {
        title: "Kiểm tra cân nặng và mức vận động",
        detail:
          "Thừa cân và ít vận động ảnh hưởng qua đường nội tiết và mạch máu. Vận động đều là một trong số ít thứ có tác động rõ ràng.",
      },
      {
        title: "Đi khám nếu kéo dài nhiều tháng",
        detail:
          "Nhất là khi kèm mệt mỏi, tăng cân, rụng tóc, giảm khối cơ hoặc thay đổi tâm trạng rõ — nên khám để kiểm tra nội tiết và các bệnh nền như tiểu đường.",
      },
      {
        title: "Nói với bạn đời trong lúc tìm nguyên nhân",
        detail:
          "Im lặng khiến người kia tự quy về mình. Một câu giải thích ngắn giữ được sự gần gũi trong lúc bạn xử lý vấn đề.",
      },
    ],
    notes: [
      "Đừng tự mua thực phẩm chức năng tăng cường sinh lực — nhiều sản phẩm trôi nổi chứa chất cấm gây nguy hiểm tim mạch.",
      "Chênh lệch ham muốn giữa hai người là chuyện rất phổ biến và không có nghĩa là ai đó có vấn đề. Cái cần là nói chuyện được với nhau.",
      "Bài viết không chẩn đoán; nếu tình trạng ảnh hưởng tới cuộc sống, hãy đi khám.",
      "Giảm ham muốn kèm buồn bã kéo dài, mất hứng thú với mọi thứ, khó ngủ: hãy nghĩ tới trầm cảm và tìm hỗ trợ chuyên môn.",
    ],
    faq: [
      {
        q: "Ham muốn giảm có phải do tuổi không?",
        a: "Tuổi có ảnh hưởng nhưng thường từ từ theo năm. Giảm đột ngột trong vài tháng thì nên tìm nguyên nhân khác trước.",
      },
      {
        q: "Có thuốc nào tăng ham muốn không?",
        a: "Điều trị phụ thuộc nguyên nhân. Không có viên thuốc chung cho mọi trường hợp, và tự mua thuốc trôi nổi thì rủi ro cao hơn lợi ích.",
      },
      {
        q: "Bạn đời nghĩ tôi có người khác thì sao?",
        a: "Đây chính là lý do nên nói sớm. Giải thích rằng bạn đang mệt hoặc căng thẳng, và đang tìm hiểu nguyên nhân — sự im lặng mới là thứ gây hiểu lầm.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "ve-sinh-vung-kin-cho-nam",
    title: "Vệ sinh vùng kín cho nam",
    excerpt:
      "Nghe đơn giản nhưng rất nhiều người sai một trong hai hướng: hoặc qua loa, hoặc kỳ cọ quá tay tới mức kích ứng.",
    readTimeMinutes: 3,
    quickAnswer:
      "Rửa mỗi ngày bằng nước sạch và một chút sữa tắm dịu nhẹ ở vùng bên ngoài, LAU THẬT KHÔ trước khi mặc đồ, và mặc đồ lót thoáng. Không cần dung dịch vệ sinh chuyên dụng, không xà phòng diệt khuẩn, không chà xát mạnh — làm quá tay còn hại hơn làm qua loa.",
    prepare: [
      "Sữa tắm dịu nhẹ, hoặc chỉ cần nước sạch cũng đủ",
      "Khăn khô riêng, giặt thường xuyên",
      "Đồ lót cotton thoáng, thay mỗi ngày",
      "Bấm móng tay gọn nếu bạn hay gãi",
    ],
    steps: [
      {
        title: "Rửa nhẹ nhàng mỗi ngày",
        detail:
          "Nước ấm vừa phải. Nếu chưa cắt bao quy đầu thì kéo nhẹ về sau để rửa phần bên trong, rồi kéo trả lại vị trí cũ — bước cuối này quan trọng, quên là có thể gây sưng nghẹt.",
      },
      {
        title: "Rửa cả vùng xung quanh",
        detail:
          "Bìu, nếp bẹn, vùng giữa bìu và hậu môn đều là chỗ đọng mồ hôi. Nhiều người chỉ rửa phần chính rồi bỏ qua những vùng này.",
      },
      {
        title: "LAU THẬT KHÔ — bước quan trọng nhất",
        detail:
          "Ẩm là môi trường lý tưởng cho nấm. Lau kỹ các nếp gấp, để khô hẳn vài giây trước khi mặc đồ. Bước này quan trọng ngang với bước rửa.",
      },
      {
        title: "Đừng dùng sản phẩm mạnh",
        detail:
          "Xà phòng diệt khuẩn, nước hoa vùng kín, dung dịch có cồn, chà xát bằng bông tắm cứng đều gây kích ứng và phản tác dụng.",
      },
      {
        title: "Cạo tỉa lông thì làm cẩn thận",
        detail:
          "Không bắt buộc và không liên quan tới vệ sinh. Nếu làm thì dùng dao riêng, làm mềm da trước, cạo xuôi chiều, và tránh làm khi da đang viêm.",
      },
      {
        title: "Thay đồ ngay sau khi vận động",
        detail:
          "Đồ lót ẩm mồ hôi để lâu là nguyên nhân phổ biến gây hăm và nấm. Mang theo một cái để thay nếu bạn tập gym sau giờ làm.",
      },
      {
        title: "Chọn đồ lót thoáng và đúng size",
        detail:
          "Cotton hoặc vải thấm hút cho ngày thường. Quá chật gây bí và cọ xát; quá rộng thì vải dồn. Xem thêm bài chọn đồ lót nam.",
      },
      {
        title: "Đi khám nếu có dấu hiệu bất thường kéo dài",
        detail:
          "Ngứa dai dẳng, đỏ, bong tróc, có mùi bất thường hoặc tiết dịch — đi khám da liễu hoặc nam khoa thay vì đổi hết loại sữa tắm này sang loại khác.",
      },
    ],
    notes: [
      "Không tự mua thuốc bôi chứa corticoid cho vùng này — dùng sai làm tình trạng nặng thêm và khó chẩn đoán.",
      "Mùi nhẹ sau một ngày dài là bình thường. Mùi hôi nồng kéo dài dù đã vệ sinh sạch thì nên đi khám.",
      "Bài viết không phải tư vấn y khoa; tình trạng da kéo dài cần bác sĩ đánh giá.",
    ],
    faq: [
      {
        q: "Có cần dung dịch vệ sinh riêng cho nam không?",
        a: "Không bắt buộc. Nước sạch và sữa tắm dịu nhẹ là đủ với hầu hết mọi người. Sản phẩm chuyên dụng chủ yếu là chuyện tiếp thị.",
      },
      {
        q: "Rửa mấy lần một ngày là đủ?",
        a: "Một lần mỗi ngày, cộng thêm sau khi vận động nhiều. Rửa quá nhiều lần bằng xà phòng dễ gây khô và kích ứng.",
      },
      {
        q: "Ngứa thì bôi gì?",
        a: "Đừng tự bôi. Ngứa có nhiều nguyên nhân khác nhau cần thuốc khác nhau. Ngứa quá vài ngày không đỡ thì đi khám.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "bao-quy-dau-khi-nao-la-van-de",
    title: "Bao quy đầu: khi nào là vấn đề",
    excerpt:
      "Không phải ai cũng cần can thiệp. Nhưng có mấy dấu hiệu thì nên đi khám thay vì tự tra mạng rồi lo.",
    readTimeMinutes: 4,
    quickAnswer:
      "Nếu bạn kéo về sau được dễ dàng để vệ sinh, không đau và không viêm thì thường không cần làm gì cả. Nên đi khám khi: không kéo về được, kéo về rồi không trả lại được, viêm tái đi tái lại, tiểu khó hoặc phồng lên khi tiểu, hoặc đau khi cương.",
    prepare: [
      "Ghi lại triệu chứng và thời gian xuất hiện",
      "Tìm khoa nam học hoặc tiết niệu ở bệnh viện có giấy phép rõ ràng",
      "Chuẩn bị hỏi rõ chi phí trước khi đồng ý bất kỳ thủ thuật nào",
      "Nếu định làm thủ thuật: hỏi trước về thời gian nghỉ và chăm sóc sau đó",
    ],
    steps: [
      {
        title: "Tự đánh giá tình trạng cơ bản",
        detail:
          "Kéo về sau có dễ không, có đau không, có viêm đỏ hay tiết dịch bất thường không, khi tiểu có phồng lên không. Bốn câu này khoanh vùng khá rõ.",
      },
      {
        title: "Giữ vệ sinh đúng cách trước đã",
        detail:
          "Nhiều trường hợp viêm nhẹ cải thiện chỉ nhờ rửa đúng và lau khô mỗi ngày. Thử nghiêm túc trong một hai tuần trước khi nghĩ tới thủ thuật.",
      },
      {
        title: "Nhớ luôn kéo trả về vị trí cũ sau khi rửa",
        detail:
          "Để quên ở tư thế kéo về sau có thể gây sưng nghẹt — tình huống cần cấp cứu. Đây là lỗi hay gặp ở người mới tập vệ sinh đúng cách.",
      },
      {
        title: "Đi khám nếu có dấu hiệu cảnh báo",
        detail:
          "Bác sĩ sẽ đánh giá và tư vấn hướng xử lý. KHÔNG phải trường hợp nào cũng cần phẫu thuật — có những hướng điều trị nhẹ nhàng hơn.",
      },
      {
        title: "Hỏi đủ các lựa chọn trước khi quyết",
        detail:
          "Hỏi thẳng: ngoài phẫu thuật thì còn cách nào không ạ. Cơ sở nào chỉ đưa ra đúng một lựa chọn và giục quyết ngay thì nên cân nhắc.",
      },
      {
        title: "Cảnh giác với quảng cáo cắt bao quy đầu giá rẻ",
        detail:
          "Chọn bệnh viện hoặc phòng khám có giấy phép, bảng giá niêm yết công khai. Đây là thủ thuật y tế chứ không phải dịch vụ làm đẹp.",
      },
      {
        title: "Hỏi rõ về chăm sóc sau thủ thuật",
        detail:
          "Nghỉ mấy ngày, kiêng gì, thay băng thế nào, khi nào cắt chỉ, dấu hiệu nhiễm trùng là gì. Hỏi trước để sắp xếp công việc.",
      },
      {
        title: "Tuân thủ hướng dẫn hồi phục",
        detail:
          "Kiêng vận động mạnh và kiêng quan hệ theo đúng thời gian bác sĩ dặn. Nóng vội là lý do phổ biến gây biến chứng.",
      },
    ],
    notes: [
      "CẤP CỨU nếu kéo về sau rồi không trả lại được và vùng đó sưng đau tăng dần — đây là tình huống cần xử trí ngay trong vài giờ.",
      "Bài viết không chẩn đoán; chỉ bác sĩ khám trực tiếp mới kết luận được trường hợp của bạn.",
      "Ở trẻ nhỏ, tình trạng chưa kéo về được là bình thường theo lứa tuổi — đừng tự kéo mạnh, hãy hỏi bác sĩ nhi.",
      "Sốt, sưng đỏ lan rộng, chảy mủ sau thủ thuật: quay lại cơ sở y tế ngay.",
    ],
    faq: [
      {
        q: "Cắt bao quy đầu có làm giảm cảm giác không?",
        a: "Đây là câu nên hỏi bác sĩ nam khoa, vì kết quả nghiên cứu còn khác nhau và tuỳ từng người. Đừng quyết định dựa trên lời đồn.",
      },
      {
        q: "Không có triệu chứng gì thì có nên cắt không?",
        a: "Nếu vệ sinh được dễ dàng và không viêm thì thường không cần. Hãy đi tư vấn để nghe đánh giá cho trường hợp cụ thể của bạn.",
      },
      {
        q: "Chi phí khoảng bao nhiêu?",
        a: "Chênh nhau nhiều giữa bệnh viện công và phòng khám tư. Hỏi bảng giá công khai và cảnh giác với nơi báo giá thấp rồi phát sinh giữa chừng.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Rượu bia làm giảm khả năng ngay trong đêm và làm giảm ham muốn nếu uống nhiều thường xuyên. Thuốc lá ảnh hưởng tới mạch máu, mà chuyện cương phụ thuộc trực tiếp vào lưu thông máu. Giảm hai thứ này thường thấy khác biệt sau vài tuần tới vài tháng — rẻ hơn và an toàn hơn mọi loại thuốc bổ.",
    prepare: [
      "Ghi thật số ly và số điếu mỗi tuần — con số thường cao hơn ta tưởng",
      "Chọn một thứ để giảm trước, đừng bỏ cả hai cùng lúc nếu thấy quá sức",
      "Chuẩn bị tinh thần: thay đổi cần vài tuần mới thấy rõ",
    ],
    steps: [
      {
        title: "Ghi lại thực tế một tuần",
        detail:
          "Không phán xét, chỉ ghi số ly và số điếu mỗi ngày. Nhìn tổng cuối tuần thường đủ để bạn muốn thay đổi mà không cần ai khuyên.",
      },
      {
        title: "Bỏ rượu trong những buổi quan trọng",
        detail:
          "Nhiều người tưởng uống chút cho tự tin, thực tế lại phản tác dụng ngay đêm đó. Thử một lần không uống và tự so sánh.",
      },
      {
        title: "Đặt mức trần cho tuần",
        detail:
          "Ví dụ tối đa hai buổi mỗi tuần và mỗi buổi bao nhiêu ly. Có con số cụ thể dễ giữ hơn là quyết tâm chung chung.",
      },
      {
        title: "Giảm thuốc lá từng bước",
        detail:
          "Mạch máu phục hồi dần sau khi bỏ. Cần hỗ trợ thì có phòng khám tư vấn cai thuốc và các phương pháp hỗ trợ có bằng chứng — hỏi bác sĩ.",
      },
      {
        title: "Thêm vận động đều đặn",
        detail:
          "Đi bộ nhanh, chạy, đạp xe — bất cứ gì làm tim đập nhanh lên. Tác động trực tiếp lên lưu thông máu, hiệu quả hơn nhiều loại thực phẩm chức năng.",
      },
      {
        title: "Ngủ đủ",
        detail:
          "Thiếu ngủ ảnh hưởng tới nội tiết nam. Đây là thứ nhiều người bỏ qua vì tưởng không liên quan.",
      },
      {
        title: "Theo dõi trong 4–8 tuần",
        detail:
          "Đừng mong khác biệt sau ba ngày. Ghi lại cảm nhận theo tuần để thấy xu hướng thay vì đánh giá theo từng lần.",
      },
      {
        title: "Đi khám nếu đã cải thiện lối sống mà vẫn không đỡ",
        detail:
          "Sau vài tháng mà tình trạng không thay đổi thì nên khám nam khoa — có thể có nguyên nhân khác cần xử lý.",
      },
    ],
    notes: [
      "Đừng dùng thuốc cường dương mua trôi nổi để bù, nhất là khi có uống rượu — kết hợp này nguy hiểm cho tim mạch.",
      "Bỏ thuốc lá còn cải thiện nhiều thứ khác: sức bền, hơi thở, và nguy cơ tim mạch lâu dài.",
      "Bài viết không phải tư vấn y khoa.",
    ],
    faq: [
      {
        q: "Uống một hai ly có sao không?",
        a: "Lượng nhỏ ảnh hưởng ít với phần lớn người. Vấn đề nằm ở uống nhiều và uống đều đặn nhiều năm.",
      },
      {
        q: "Thuốc lá điện tử có đỡ hơn không?",
        a: "Đây vẫn là chủ đề còn tranh luận và không phải lựa chọn an toàn. Hỏi bác sĩ về các phương pháp hỗ trợ cai có bằng chứng.",
      },
      {
        q: "Bỏ rồi bao lâu thì cải thiện?",
        a: "Khác nhau ở mỗi người, thường tính bằng vài tuần tới vài tháng. Kiên nhẫn và theo dõi theo tuần thay vì theo từng lần.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "chat-luong-tinh-trung-dieu-gi-anh-huong",
    title: "Chất lượng tinh trùng: điều gì thật sự ảnh hưởng",
    excerpt:
      "Trước khi mua thuốc bổ, hãy nhìn vào mấy thói quen hằng ngày — trong đó có một thứ nằm ngay trên đùi bạn lúc này.",
    readTimeMinutes: 4,
    quickAnswer:
      "Những yếu tố có bằng chứng rõ nhất: nhiệt độ vùng bìu (ngồi lâu, laptop trên đùi, xông hơi nhiều), hút thuốc, rượu bia, thừa cân, căng thẳng kéo dài và thiếu ngủ. Muốn biết chính xác thì làm tinh dịch đồ chứ đừng đoán — xét nghiệm này đơn giản và cho con số cụ thể.",
    prepare: [
      "Nếu định xét nghiệm: hỏi trước phòng xét nghiệm về thời gian kiêng xuất tinh theo yêu cầu",
      "Nhìn lại thói quen: ngồi lâu, laptop trên đùi, quần quá bó, xông hơi",
      "Ghi lại thuốc và thực phẩm chức năng đang dùng",
      "Tiền sử: quai bị lúc nhỏ, chấn thương, phẫu thuật vùng bẹn",
    ],
    steps: [
      {
        title: "Giảm nhiệt vùng bìu",
        detail:
          "Hạn chế đặt laptop trực tiếp lên đùi, đứng dậy đi lại nếu ngồi nhiều giờ, bớt xông hơi và tắm nước quá nóng. Cơ thể để bộ phận này bên ngoài là có lý do về nhiệt độ.",
      },
      {
        title: "Bỏ thuốc lá và giảm rượu bia",
        detail:
          "Hai yếu tố có ảnh hưởng rõ ràng nhất và cũng nằm hoàn toàn trong tầm tay bạn. Đây là chỗ đáng đầu tư trước tiên.",
      },
      {
        title: "Điều chỉnh cân nặng",
        detail:
          "Thừa cân ảnh hưởng qua đường nội tiết. Giảm cân từ từ và bền vững có tác động rõ hơn nhiều so với uống thuốc bổ.",
      },
      {
        title: "Ngủ đủ và giảm căng thẳng",
        detail:
          "Tác động chậm nhưng thật. Thiếu ngủ kéo dài ảnh hưởng tới nội tiết nam nói chung.",
      },
      {
        title: "Mặc đồ thoáng",
        detail:
          "Chọn đồ lót không quá bó và chất liệu thoáng. Việc dễ làm, không tốn gì, và loại bỏ được một yếu tố.",
      },
      {
        title: "Cẩn thận với hoá chất nghề nghiệp",
        detail:
          "Nếu bạn làm việc thường xuyên với dung môi, thuốc trừ sâu, kim loại nặng hoặc môi trường nhiệt độ cao, hãy nói với bác sĩ — đây là yếu tố ít người nghĩ tới.",
      },
      {
        title: "Làm tinh dịch đồ nếu đang mong con",
        detail:
          "Xét nghiệm đơn giản, làm tại bệnh viện hoặc trung tâm hỗ trợ sinh sản, cho kết quả cụ thể thay vì phỏng đoán. Chuẩn bị theo đúng hướng dẫn về thời gian kiêng.",
      },
      {
        title: "Đừng hoảng vì một kết quả",
        detail:
          "Chỉ số dao động theo thời điểm, theo tình trạng sức khỏe gần đây. Thường cần làm lại sau một khoảng thời gian theo chỉ định để kết luận.",
      },
      {
        title: "Đi khám cùng bạn đời",
        detail:
          "Nguyên nhân hiếm muộn chia khá đều giữa hai bên. Khám một phía là bỏ sót một nửa bức tranh và mất thời gian của cả hai.",
      },
      {
        title: "Đừng tự uống thuốc bổ vô tội vạ",
        detail:
          "Một số sản phẩm không rõ nguồn gốc chứa nội tiết tố, có thể phản tác dụng nghiêm trọng và làm giảm chính thứ bạn đang muốn cải thiện.",
      },
    ],
    notes: [
      "Cải thiện lối sống cần thời gian mới phản ánh vào kết quả — thường phải tính bằng vài tháng.",
      "Hiếm muộn là chuyện của cả hai người, nên đi khám cùng nhau thay vì mặc định do một bên.",
      "Bài viết không chẩn đoán và không chỉ định điều trị.",
    ],
    faq: [
      {
        q: "Mặc quần bó có ảnh hưởng không?",
        a: "Quần quá bó và nóng có thể làm tăng nhiệt vùng bìu. Chọn đồ thoáng là việc dễ làm và không mất gì.",
      },
      {
        q: "Tắm nước nóng có sao không?",
        a: "Tắm bình thường thì không đáng ngại. Xông hơi thường xuyên và ngâm nước nóng lâu mới là thứ nên hạn chế khi đang mong con.",
      },
      {
        q: "Bao lâu thì cải thiện được?",
        a: "Chu kỳ sinh tinh kéo dài nhiều tuần, nên thay đổi lối sống thường cần vài tháng mới phản ánh vào xét nghiệm. Kiên nhẫn.",
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
    readTimeMinutes: 4,
    quickAnswer:
      "Nam giới nên khám nam khoa hoặc tới trung tâm hỗ trợ sinh sản. Thường gồm hỏi bệnh sử, khám lâm sàng và xét nghiệm tinh dịch đồ, đôi khi thêm xét nghiệm nội tiết hoặc siêu âm. Quan trọng nhất: đi cùng bạn đời, vì nguyên nhân chia khá đều giữa hai bên.",
    prepare: [
      "Hỏi trước phòng xét nghiệm về yêu cầu chuẩn bị và thời gian kiêng",
      "Ghi lại tiền sử: quai bị lúc nhỏ có biến chứng không, chấn thương, phẫu thuật vùng bẹn",
      "Danh sách thuốc đang dùng",
      "Hẹn lịch cùng bạn đời để đi một thể",
    ],
    steps: [
      {
        title: "Rủ bạn đời đi cùng ngay từ đầu",
        detail:
          "Nguyên nhân hiếm muộn chia khá đều giữa nam và nữ, và nhiều trường hợp do cả hai. Đi cùng tiết kiệm được vài tháng dò dẫm.",
      },
      {
        title: "Chọn cơ sở phù hợp",
        detail:
          "Khoa nam học bệnh viện lớn hoặc trung tâm hỗ trợ sinh sản. Nơi có cả hai chuyên khoa nam và nữ thì tiện cho cặp đôi.",
      },
      {
        title: "Chuẩn bị theo đúng hướng dẫn xét nghiệm",
        detail:
          "Thời gian kiêng xuất tinh và cách lấy mẫu ảnh hưởng trực tiếp tới kết quả. Làm sai là phải làm lại, mất thời gian và tiền.",
      },
      {
        title: "Khai bệnh sử đầy đủ",
        detail:
          "Quai bị có biến chứng, chấn thương vùng kín, phẫu thuật thoát vị bẹn, tinh hoàn ẩn lúc nhỏ, bệnh mạn tính — tất cả đều đáng nói.",
      },
      {
        title: "Nói về lối sống trung thực",
        detail:
          "Rượu bia, thuốc lá, môi trường làm việc nóng, tiếp xúc hoá chất. Bác sĩ cần biết để tư vấn điều chỉnh chứ không để phán xét.",
      },
      {
        title: "Làm các xét nghiệm được chỉ định",
        detail:
          "Tinh dịch đồ là cơ bản. Có thể thêm xét nghiệm nội tiết, siêu âm bìu tuỳ trường hợp. Hỏi giá trước.",
      },
      {
        title: "Nghe bác sĩ giải thích kết quả",
        detail:
          "Đừng tự đọc chỉ số rồi hoảng. Nhiều chỉ số dao động và cần lặp lại. Bác sĩ nhìn tổng thể chứ không nhìn một con số.",
      },
      {
        title: "Hỏi những gì có thể cải thiện",
        detail:
          "Lối sống, cân nặng, thuốc đang dùng, môi trường làm việc — nhiều thứ điều chỉnh được và có tác dụng thật.",
      },
      {
        title: "Lên kế hoạch theo dõi",
        detail:
          "Nếu cần làm lại xét nghiệm sau vài tháng thì đặt lịch ngay. Trong thời gian đó thực hiện các điều chỉnh bác sĩ dặn.",
      },
    ],
    notes: [
      "Từng bị quai bị có biến chứng, chấn thương vùng kín, hoặc phẫu thuật vùng bẹn thì nhớ nói rõ với bác sĩ.",
      "Cảnh giác với phòng khám hứa hẹn kết quả nhanh và đòi đóng gói tiền lớn ngay buổi đầu.",
      "Kết quả bất thường không có nghĩa là không thể có con — có nhiều hướng hỗ trợ, hãy hỏi bác sĩ.",
      "Bài viết không thay thế tư vấn y khoa.",
    ],
    faq: [
      {
        q: "Chưa cưới có đi khám được không?",
        a: "Được. Đây là khám sức khỏe bình thường, không phụ thuộc tình trạng hôn nhân.",
      },
      {
        q: "Bao lâu chưa có con thì nên đi khám?",
        a: "Hỏi bác sĩ vì mốc thời gian phụ thuộc tuổi của hai người và các yếu tố khác. Đừng chờ quá lâu vì thời gian là yếu tố quan trọng.",
      },
      {
        q: "Lấy mẫu ở đâu, có ngại không?",
        a: "Cơ sở y tế có phòng riêng và quy trình kín đáo. Nhân viên làm việc này hằng ngày và rất chuyên nghiệp.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "triet-san-nam-hieu-de-di-hoi-bac-si",
    title: "Triệt sản nam: hiểu để đi hỏi bác sĩ",
    excerpt:
      "Thủ thuật nhỏ hơn nhiều người tưởng. Nhưng có một điểm quan trọng: đừng coi nó là chuyện đổi ý được dễ dàng.",
    readTimeMinutes: 4,
    quickAnswer:
      "Đây là thủ thuật nhỏ nhằm ngăn tinh trùng đi vào tinh dịch, không ảnh hưởng tới nội tiết hay khả năng quan hệ. Điểm cần cân nhắc kỹ nhất: nên coi đây là quyết định lâu dài vì khả năng nối lại không được đảm bảo. Và một điểm nhiều người hiểu nhầm: sau thủ thuật vẫn cần dùng biện pháp khác cho tới khi được xác nhận.",
    prepare: [
      "Nói chuyện kỹ với bạn đời và thống nhất — đây là quyết định của cả hai",
      "Chuẩn bị câu hỏi cho bác sĩ về rủi ro, hồi phục và theo dõi sau thủ thuật",
      "Chọn bệnh viện hoặc cơ sở có giấy phép rõ ràng",
      "Sắp xếp vài ngày nghỉ ngơi sau thủ thuật",
    ],
    steps: [
      {
        title: "Bàn bạc trước khi đặt lịch",
        detail:
          "Quyết định này ảnh hưởng tới kế hoạch của cả hai người. Đừng làm trong lúc đang căng thẳng, đang giận, hoặc ngay sau một biến cố.",
      },
      {
        title: "Tự hỏi mình một câu khó",
        detail:
          "Nếu hoàn cảnh thay đổi hoàn toàn trong mười năm tới, bạn có chắc vẫn giữ quyết định này không. Trả lời thật với chính mình.",
      },
      {
        title: "Đi tư vấn ở cơ sở uy tín",
        detail:
          "Bác sĩ giải thích quy trình, rủi ro, thời gian hồi phục và những gì cần theo dõi. Buổi tư vấn này không bắt buộc phải dẫn tới quyết định làm ngay.",
      },
      {
        title: "Hỏi về giai đoạn chưa có hiệu lực",
        detail:
          "Sau thủ thuật vẫn cần dùng biện pháp khác trong một thời gian cho tới khi xét nghiệm xác nhận. Đây là chỗ hiểu nhầm gây hậu quả thật.",
      },
      {
        title: "Hỏi về rủi ro và biến chứng có thể gặp",
        detail:
          "Đau kéo dài, tụ máu, nhiễm trùng — tỉ lệ thấp nhưng bạn cần biết trước để nhận ra sớm nếu gặp.",
      },
      {
        title: "Sắp xếp công việc và người đưa về",
        detail:
          "Thủ thuật thường nhanh nhưng nên có người đưa về và nghỉ vài ngày. Đừng lên lịch ngay trước chuyến công tác.",
      },
      {
        title: "Chăm sóc theo hướng dẫn sau thủ thuật",
        detail:
          "Chườm lạnh, mặc đồ nâng đỡ, kiêng vận động mạnh và kiêng quan hệ theo đúng thời gian bác sĩ dặn.",
      },
      {
        title: "Đi xét nghiệm xác nhận theo hẹn",
        detail:
          "Đây là bước bắt buộc, không tự suy đoán là đã an toàn. Nhiều trường hợp mang thai ngoài ý muốn xảy ra vì bỏ bước này.",
      },
      {
        title: "Theo dõi dấu hiệu bất thường",
        detail:
          "Sưng đau tăng dần, sốt, chảy dịch bất thường: quay lại cơ sở y tế ngay chứ đừng chờ.",
      },
    ],
    notes: [
      "Thủ thuật này KHÔNG phòng được bệnh lây qua đường tình dục.",
      "Bài viết chỉ giới thiệu để bạn biết mà đi hỏi, không thay thế tư vấn y khoa.",
      "Đây nên được coi là quyết định lâu dài. Khả năng nối lại tồn tại nhưng không được đảm bảo và tốn kém.",
      "Cân nhắc kỹ nếu bạn còn trẻ, chưa có con, hoặc đang trong giai đoạn nhiều biến động.",
    ],
    faq: [
      {
        q: "Có ảnh hưởng tới bản lĩnh đàn ông không?",
        a: "Theo tư vấn y khoa thông thường thì không ảnh hưởng nội tiết hay khả năng quan hệ. Cứ hỏi thẳng bác sĩ mọi lo lắng của bạn.",
      },
      {
        q: "Bao lâu thì có hiệu lực?",
        a: "Cần một khoảng thời gian và phải có xét nghiệm xác nhận. Hỏi rõ bác sĩ về mốc cụ thể và tuyệt đối tuân thủ.",
      },
      {
        q: "Có đau không?",
        a: "Thủ thuật thực hiện với gây tê, thường mô tả là khó chịu chứ không đau nhiều. Vài ngày sau có thể ê ẩm — bác sĩ sẽ hướng dẫn cách giảm.",
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
    readTimeMinutes: 4,
    quickAnswer:
      "Lo lắng về khả năng khiến cơ thể tiết hormone căng thẳng, mà thứ đó lại cản trở chính điều bạn đang lo. Cách hiệu quả nhất không phải cố gắng hơn mà là GIẢM áp lực: nói thật với bạn đời, bỏ tiêu chuẩn học từ phim ảnh, và tạm thời bỏ hẳn mục tiêu phải làm được.",
    prepare: [
      "Nhận ra vòng lặp: lo lắng dẫn tới thất bại dẫn tới lo lắng hơn",
      "Sẵn sàng nói chuyện thật với bạn đời",
      "Cân nhắc gặp chuyên gia tâm lý nếu tình trạng kéo dài",
      "Tự kiểm tra: khi ở một mình thì có bình thường không",
    ],
    steps: [
      {
        title: "Gọi tên vấn đề",
        detail:
          "Đây là lo âu tình huống, rất phổ biến, và không phải khiếm khuyết về con người bạn. Riêng việc gọi đúng tên đã giảm được một phần áp lực.",
      },
      {
        title: "Tự kiểm tra bằng một câu hỏi",
        detail:
          "Khi ở một mình thì cơ thể có bình thường không. Nếu có thì gần như chắc chắn nguyên nhân là tâm lý chứ không phải thực thể — và tâm lý thì xử lý được.",
      },
      {
        title: "Nói với bạn đời",
        detail:
          "Im lặng khiến người kia tự suy diễn là do họ không hấp dẫn. Một câu ngắn kiểu dạo này anh căng thẳng, không phải do em — gỡ được rất nhiều.",
      },
      {
        title: "Bỏ tiêu chuẩn học từ phim",
        detail:
          "Nội dung người lớn là sản phẩm dàn dựng để bán: có kịch bản, có cắt ghép, có diễn viên chuyên nghiệp. Lấy nó làm chuẩn là tự đặt bẫy cho mình.",
      },
      {
        title: "Tạm bỏ mục tiêu",
        detail:
          "Thoả thuận với nhau vài lần chỉ ở bên nhau, không đặt đích đến nào cả. Nghe ngược đời nhưng đây chính là cách phá vòng lặp — không có mục tiêu thì không có thất bại.",
      },
      {
        title: "Chuyển sự chú ý ra khỏi việc tự quan sát",
        detail:
          "Vòng lặp mạnh nhất khi bạn đứng ngoài quan sát và chấm điểm chính mình. Tập trung vào cảm giác và vào người kia thay vì vào việc đánh giá.",
      },
      {
        title: "Xử lý các yếu tố nền",
        detail:
          "Thiếu ngủ, rượu bia, căng thẳng công việc đều làm mọi thứ tệ hơn. Sửa những thứ này song song giúp bạn có nền tốt hơn.",
      },
      {
        title: "Tìm hỗ trợ nếu kéo dài",
        detail:
          "Chuyên gia tâm lý và bác sĩ nam khoa đều có thể giúp. Đi khám không có nghĩa là bạn có vấn đề nghiêm trọng — nó chỉ là cách rút ngắn thời gian.",
      },
    ],
    notes: [
      "Nếu tình trạng xảy ra CẢ KHI bạn ở một mình thì nhiều khả năng có nguyên nhân thực thể — nên đi khám nam khoa.",
      "Đừng tự mua thuốc để bù cho lo lắng; thuốc không giải quyết nguyên nhân tâm lý và có rủi ro riêng, nhất là hàng trôi nổi.",
      "Áp lực này phần lớn do quan niệm xã hội tạo ra — đàn ông phải luôn sẵn sàng, phải luôn chủ động. Đó là kỳ vọng vô lý.",
      "Bài viết không phải tư vấn y khoa.",
    ],
    faq: [
      {
        q: "Nói ra bạn đời có coi thường không?",
        a: "Phần lớn người sẽ nhẹ nhõm vì họ đang tự trách mình. Nếu ai đó coi thường bạn vì điều này, đó là vấn đề của mối quan hệ chứ không phải của bạn.",
      },
      {
        q: "Uống rượu cho đỡ lo có được không?",
        a: "Phản tác dụng. Rượu làm giảm khả năng ngay đêm đó, và tạo thói quen phụ thuộc khiến vấn đề kéo dài hơn.",
      },
      {
        q: "Bao lâu thì hết?",
        a: "Khác nhau ở mỗi người. Khi áp lực giảm thì thường cải thiện khá nhanh. Kéo dài nhiều tháng thì nên có người hỗ trợ chuyên môn.",
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
    readTimeMinutes: 4,
    quickAnswer:
      "Dấu hiệu đáng lưu tâm: khó hứng thú với bạn đời thật, cần nội dung ngày càng nặng hơn, dành nhiều thời gian tới mức ảnh hưởng công việc hay giấc ngủ, hoặc thấy có lỗi và giấu giếm nhưng không dừng được. Có những dấu hiệu này thì nên tìm chuyên gia tâm lý.",
    prepare: [
      "Ghi lại thời gian thực tế trong một tuần, không phán xét",
      "Nhìn thẳng vào tác động: giấc ngủ, công việc, mối quan hệ",
      "Biết rằng có chuyên gia hỗ trợ mảng này và đó là chuyện bình thường",
    ],
    steps: [
      {
        title: "Đo trước khi đánh giá",
        detail:
          "Ghi số lần và thời lượng trong một tuần. Con số thực tế nói nhiều hơn cảm giác chung chung, và thường khác xa điều bạn tưởng.",
      },
      {
        title: "Xem nó có đang thay thế cái gì không",
        detail:
          "Nếu nó đang thay chỗ của giấc ngủ, bạn bè, việc tập luyện, hoặc sự gần gũi thật — đó là tín hiệu rõ ràng hơn mọi con số.",
      },
      {
        title: "Nhận ra tiêu chuẩn bị méo mó",
        detail:
          "Xem lâu ngày tạo kỳ vọng lệch về cơ thể, thời lượng, phản ứng của người khác. Nhiều người mang kỳ vọng đó vào đời thật rồi thất vọng.",
      },
      {
        title: "Kiểm tra mức độ leo thang",
        detail:
          "Cần nội dung ngày càng nặng hơn để có cùng cảm giác là dấu hiệu đáng chú ý về mặt tâm lý.",
      },
      {
        title: "Thử ngưng một khoảng để tự đánh giá",
        detail:
          "Đặt mục tiêu vài tuần và quan sát: bạn thấy thế nào, có khó chịu bứt rứt không, có dễ hứng thú với bạn đời hơn không.",
      },
      {
        title: "Thay đổi bằng cách thêm chứ đừng chỉ cấm",
        detail:
          "Đặt điện thoại ngoài phòng ngủ, lấp thời gian trống bằng hoạt động khác. Chỉ cấm mà không có gì thay thế thì rất khó bền.",
      },
      {
        title: "Xử lý cảm giác tội lỗi cho đúng chỗ",
        detail:
          "Nhiều người dằn vặt vì quan niệm xã hội chứ không phải vì tác hại thật. Phân biệt được hai thứ này giúp bạn nhìn vấn đề đúng mức.",
      },
      {
        title: "Tìm hỗ trợ nếu không dừng được",
        detail:
          "Cảm giác mất kiểm soát dù đã cố nhiều lần là lý do chính đáng để gặp chuyên gia tâm lý. Đây là vấn đề có phương pháp hỗ trợ.",
      },
    ],
    notes: [
      "Nội dung có trẻ vị thành niên là bất hợp pháp và gây tổn hại nghiêm trọng — tuyệt đối tránh xa và báo cơ quan chức năng nếu gặp.",
      "Cẩn thận với trang web lạ: mã độc và bẫy tống tiền rất phổ biến ở mảng này. Đừng bấm vào cửa sổ bật lên và đừng cài phần mềm nào chúng yêu cầu.",
      "Nếu ai đó doạ tung lịch sử duyệt web của bạn để đòi tiền — đó gần như luôn là lừa đảo. Đừng trả tiền, xem bài về tống tiền bằng ảnh nhạy cảm.",
      "Bài viết không phải tư vấn y khoa hay tâm lý cho trường hợp cụ thể.",
    ],
    faq: [
      {
        q: "Xem có làm giảm khả năng thật không?",
        a: "Bằng chứng còn khác nhau, nhưng nhiều người báo cáo cải thiện khi giảm bớt. Thấy khó hứng thú với bạn đời thật thì thử giảm vài tuần xem sao.",
      },
      {
        q: "Bạn đời phát hiện và giận thì sao?",
        a: "Nói chuyện thẳng thắn về cảm giác của cả hai. Nhiều cặp cần thống nhất ranh giới riêng — không có quy tắc chung cho mọi mối quan hệ.",
      },
      {
        q: "Có phải là nghiện không?",
        a: "Việc gọi tên còn tranh luận trong giới chuyên môn. Điều thực tế hơn là hỏi: nó có đang gây hại cho cuộc sống của bạn không, và bạn có dừng được khi muốn không.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Nói ngắn, nói thật, và nói kèm sự trấn an. Ví dụ: hôm nay anh mệt quá, không phải do em. Tránh viện cớ lặp đi lặp lại, vì đó mới là thứ khiến người kia nghi ngờ và tổn thương nhiều hơn cả lời từ chối thẳng.",
    prepare: [
      "Biết rõ lý do của mình: mệt, căng thẳng, hay có gì đó trong mối quan hệ",
      "Chọn lúc bình thường để nói chuyện sâu hơn, đừng đợi tới lúc đang trong tình huống",
      "Chuẩn bị sẵn một câu trấn an ngắn",
    ],
    steps: [
      {
        title: "Nói thẳng và ngắn",
        detail:
          "Một câu là đủ. Càng giải thích dài dòng càng nghe như đang chống chế và càng khiến người kia nghi ngờ.",
      },
      {
        title: "Trấn an rằng không phải do họ",
        detail:
          "Đây là phần quan trọng nhất. Thiếu câu này, người kia thường tự quy về ngoại hình hoặc sức hấp dẫn của mình.",
      },
      {
        title: "Đừng viện cớ giả",
        detail:
          "Lấy lý do bận, buồn ngủ, đau đầu lặp đi lặp lại sẽ bị nhận ra. Nói thật rằng bạn đang căng thẳng thì dễ chấp nhận hơn nhiều.",
      },
      {
        title: "Đề xuất cách gần gũi khác",
        detail:
          "Ôm, nằm nói chuyện, xem phim cùng nhau. Giữ được kết nối quan trọng hơn nhiều so với kết thúc bằng sự im lặng lạnh lẽo.",
      },
      {
        title: "Chọn lúc khác để nói chuyện sâu hơn",
        detail:
          "Nếu có vấn đề thật trong mối quan hệ, đừng bàn ngay lúc đó. Hẹn một lúc cả hai bình tĩnh.",
      },
      {
        title: "Nếu lặp lại thường xuyên thì tìm nguyên nhân",
        detail:
          "Ham muốn giảm kéo dài có nhiều nguyên nhân xử lý được. Xem bài về ham muốn tụt giảm hoặc đi khám.",
      },
      {
        title: "Quan sát phản ứng của bạn đời",
        detail:
          "Người tôn trọng bạn sẽ chấp nhận. Người giận dỗi, dằn vặt hoặc ép buộc sau khi bạn từ chối đang cho bạn thấy một vấn đề lớn hơn.",
      },
    ],
    notes: [
      "Không ai có nghĩa vụ phải đồng ý. Đồng thuận áp dụng cho cả hai giới, trong cả mối quan hệ lâu dài và trong hôn nhân.",
      "Bị giận dỗi, dằn vặt hay ép buộc sau khi bạn từ chối là dấu hiệu không lành mạnh, cần nói chuyện nghiêm túc.",
      "Nam giới cũng có thể bị ép buộc — xem bài riêng về chủ đề này nếu bạn đang gặp phải.",
    ],
    faq: [
      {
        q: "Từ chối có làm mất mặt đàn ông không?",
        a: "Không. Quan niệm đàn ông lúc nào cũng phải sẵn sàng là một áp lực vô lý và nó gây hại cho chính các mối quan hệ.",
      },
      {
        q: "Nói thế nào để không làm người kia buồn?",
        a: "Ngắn, thật, kèm trấn an, và đề xuất một cách gần gũi khác. Ba yếu tố này gần như luôn đủ.",
      },
      {
        q: "Nếu tôi hầu như không bao giờ muốn thì sao?",
        a: "Ham muốn thấp kéo dài có nhiều nguyên nhân từ giấc ngủ, thuốc, tới nội tiết và tâm lý. Đi khám để tìm nguyên nhân thay vì tự trách mình.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Chấp nhận lời từ chối ngay lần đầu: không hỏi vặn, không giận dỗi, không rủ rê lại nhiều lần. Cho phép mình buồn vài hôm, nói chuyện với bạn bè, và nhớ rằng một lời từ chối là về sự phù hợp chứ không phải bản án về giá trị của bạn.",
    prepare: [
      "Nhớ trước một nguyên tắc: không là không, ngay lần đầu",
      "Có vài người bạn để tâm sự",
      "Vài hoạt động giúp bạn bận rộn trong giai đoạn đầu",
    ],
    steps: [
      {
        title: "Đáp lại tử tế rồi dừng",
        detail:
          "Một câu cảm ơn vì đã nói thẳng là đủ. Không đòi lý do, không thương lượng, không hỏi liệu có cơ hội nào không.",
      },
      {
        title: "Cho phép mình buồn",
        detail:
          "Không cần tỏ ra mạnh mẽ. Buồn vài hôm là phản ứng bình thường của con người, và cố phủ nhận nó chỉ kéo dài thêm.",
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
      {
        title: "Đừng nhờ người khác nói giúp",
        detail:
          "Nhờ bạn chung thuyết phục hộ thường phản tác dụng và khiến người kia thấy bị dồn ép.",
      },
      {
        title: "Nói chuyện với ai đó",
        detail:
          "Kể cho một người bạn thay vì ôm một mình rồi nhắn tin lúc nửa đêm. Nói ra thường đủ để bạn nhìn mọi thứ nhẹ hơn.",
      },
      {
        title: "Rút ra điều gì đó nếu có, rồi bỏ qua",
        detail:
          "Đôi khi có điều đáng học, đôi khi chỉ đơn giản là không hợp. Đừng cố phân tích mãi một chuyện không có đáp án.",
      },
      {
        title: "Tìm hỗ trợ nếu buồn kéo dài",
        detail:
          "Buồn nhiều tuần, mất ngủ, mất hứng thú với mọi thứ thì nên gặp chuyên gia tâm lý. Đây không phải chuyện nhỏ nếu nó kéo dài.",
      },
    ],
    notes: [
      "Theo đuổi dai dẳng sau khi đã bị từ chối rõ ràng có thể trở thành quấy rối, kể cả khi bạn nghĩ mình chân thành.",
      "Nhắn tin, gọi điện, xuất hiện ở nơi họ thường tới sau khi bị từ chối là hành vi khiến người ta sợ chứ không phải cảm động.",
      "Có ý nghĩ làm hại bản thân sau khi bị từ chối: tìm hỗ trợ ngay, nói với người thân hoặc tới cơ sở y tế.",
    ],
    faq: [
      {
        q: "Cố thêm một lần nữa có được không?",
        a: "Nếu họ đã nói rõ thì không. Kiên trì trong tình cảm chỉ đẹp trong phim, ngoài đời nó thường khiến người ta thấy bị làm phiền.",
      },
      {
        q: "Vẫn phải gặp nhau hằng ngày thì sao?",
        a: "Cư xử bình thường và chuyên nghiệp, giữ khoảng cách một thời gian. Thời gian giúp mọi thứ trở lại tự nhiên.",
      },
      {
        q: "Làm sao để đỡ sợ bị từ chối lần sau?",
        a: "Coi việc bày tỏ là thu thập thông tin chứ không phải bài kiểm tra. Bị từ chối chỉ là biết được một câu trả lời, và biết sớm thì tốt hơn.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "dan-ong-cung-bi-quay-roi-va-xam-hai",
    title: "Đàn ông cũng bị quấy rối và xâm hại",
    excerpt:
      "Ít được nói tới nên nhiều người nghĩ chuyện đó không xảy ra với mình — rồi im lặng một mình nhiều năm.",
    readTimeMinutes: 4,
    quickAnswer:
      "Nam giới cũng có thể bị quấy rối, bị ép buộc và bị xâm hại, kể cả bởi người quen hoặc bạn đời. Đó không phải lỗi của bạn, và phản ứng của cơ thể lúc đó không có nghĩa là bạn đồng ý. Bạn có quyền tìm hỗ trợ y tế, tâm lý và trình báo.",
    prepare: [
      "Biết rằng chuyện này có thật và không hiếm như người ta tưởng",
      "Một người bạn hoặc người thân đáng tin để kể",
      "Thông tin cơ sở y tế và công an nơi bạn ở",
      "Nếu vừa xảy ra: giữ lại quần áo và không tắm rửa nếu bạn có ý định trình báo",
    ],
    steps: [
      {
        title: "Gọi đúng tên sự việc",
        detail:
          "Bị ép buộc, bị đụng chạm khi không đồng ý, bị đe doạ để phải chiều theo, bị chuốc thuốc — tất cả đều là xâm hại, không phụ thuộc giới tính của ai.",
      },
      {
        title: "Hiểu về phản ứng của cơ thể",
        detail:
          "Cơ thể có thể phản ứng sinh lý ngoài ý muốn trong tình huống đó. Điều này KHÔNG đồng nghĩa với sự đồng ý và không phải lý do để bạn tự trách mình.",
      },
      {
        title: "Hiểu về phản ứng đông cứng",
        detail:
          "Không chống cự được, không nói được gì là phản ứng tự nhiên của hệ thần kinh khi sợ hãi. Rất nhiều người tự trách vì điều này — hoàn toàn không đáng.",
      },
      {
        title: "Đảm bảo an toàn trước",
        detail:
          "Rời khỏi nơi đó, tới chỗ có người bạn tin. An toàn của bạn là ưu tiên trước mọi việc khác.",
      },
      {
        title: "Chăm sóc y tế nếu cần",
        detail:
          "Có nguy cơ lây bệnh thì đi khám sớm — một số biện pháp dự phòng có giới hạn thời gian rất ngắn, tính bằng giờ. Xem bài về PrEP và PEP.",
      },
      {
        title: "Giữ bằng chứng nếu bạn cân nhắc trình báo",
        detail:
          "Tin nhắn, ghi âm, quần áo, ảnh chụp vết thương. Bạn không cần quyết định ngay có trình báo hay không, nhưng bằng chứng thì mất là mất.",
      },
      {
        title: "Nói với một người bạn tin",
        detail:
          "Chọn người bạn tin nhất, không cần kể chi tiết nếu chưa sẵn sàng. Chỉ cần một người biết cũng đã khác rất nhiều.",
      },
      {
        title: "Tìm hỗ trợ tâm lý",
        detail:
          "Chuyên gia tâm lý làm việc với nam giới bị xâm hại. Nói ra với người có chuyên môn giúp ích hơn nhiều so với tự chịu đựng nhiều năm.",
      },
      {
        title: "Cân nhắc trình báo",
        detail:
          "Bạn có quyền trình báo công an. Quyết định là của bạn, theo nhịp của bạn, và không ai được thúc ép.",
      },
      {
        title: "Cho mình thời gian",
        detail:
          "Hồi phục không theo lịch trình. Có ngày ổn có ngày không — điều đó bình thường và không có nghĩa bạn đang thụt lùi.",
      },
    ],
    notes: [
      "Không có chuyện đàn ông thì không thể bị hại. Định kiến này chính là lý do nhiều người im lặng và không được giúp đỡ.",
      "Bạn không có lỗi, dù bạn đã uống rượu, đã đi cùng người đó, hay đã đồng ý ở một mức nào đó trước khi nói dừng.",
      "Xâm hại có thể xảy ra trong mối quan hệ và trong hôn nhân — bạn đời không có quyền ép buộc bạn.",
      "Có ý nghĩ làm hại bản thân: tìm hỗ trợ khẩn cấp ngay, nói với người thân hoặc tới cơ sở y tế gần nhất.",
    ],
    faq: [
      {
        q: "Kể ra người ta có cười không?",
        a: "Chọn người bạn tin hoặc chuyên gia tâm lý. Người có chuyên môn không cười — họ hiểu chuyện này xảy ra với mọi giới và đã làm việc với nhiều trường hợp.",
      },
      {
        q: "Chuyện xảy ra lâu rồi thì còn làm gì được không?",
        a: "Hỗ trợ tâm lý luôn có ích dù chuyện đã lâu. Về mặt pháp lý thì tuỳ trường hợp — hỏi công an hoặc luật sư nếu bạn muốn tìm hiểu.",
      },
      {
        q: "Người gây ra là bạn đời thì sao?",
        a: "Vẫn là xâm hại. Hãy nói với người bạn tin, tìm hỗ trợ tâm lý, và cân nhắc kế hoạch an toàn cho bản thân.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "tim-giup-do-tam-ly-ve-chuyen-gioi-tinh",
    title: "Tìm giúp đỡ tâm lý về chuyện giới tính",
    excerpt:
      "Không phải cứ gặp chuyên gia là bị coi có bệnh. Nhiều vấn đề chỉ cần vài buổi nói chuyện đúng người.",
    readTimeMinutes: 3,
    quickAnswer:
      "Tìm chuyên gia tâm lý hoặc bác sĩ tâm thần có kinh nghiệm về sức khỏe tình dục, ở bệnh viện có khoa tâm lý hoặc phòng khám có giấy phép. Buổi đầu chủ yếu là kể chuyện và xác định vấn đề, không có gì đáng sợ. Cảm giác hợp với người trị liệu quan trọng hơn danh tiếng của họ.",
    prepare: [
      "Ghi ra điều bạn muốn thay đổi, dù chỉ một câu",
      "Kiểm tra bằng cấp và giấy phép hành nghề của người bạn định gặp",
      "Chuẩn bị tinh thần cần vài buổi mới thấy chuyển biến",
      "Xem trước chi phí mỗi buổi và tần suất dự kiến",
    ],
    steps: [
      {
        title: "Xác định bạn muốn gì",
        detail:
          "Bớt lo lắng, cải thiện mối quan hệ, hay xử lý một trải nghiệm cũ. Mục tiêu rõ giúp buổi đầu hiệu quả hơn nhiều.",
      },
      {
        title: "Chọn nơi có chuyên môn thật",
        detail:
          "Khoa tâm lý bệnh viện, phòng khám tâm lý có giấy phép, hoặc chuyên gia có bằng cấp rõ ràng. Tránh các dịch vụ tự xưng chuyên gia trên mạng xã hội.",
      },
      {
        title: "Hỏi trước về chi phí và cách làm việc",
        detail:
          "Mỗi buổi bao lâu, bao nhiêu tiền, thường cần mấy buổi, làm việc trực tiếp hay online. Hỏi trước để không bất ngờ.",
      },
      {
        title: "Nói thẳng trong buổi đầu",
        detail:
          "Họ nghe những chuyện này thường xuyên. Càng vòng vo càng mất thời gian và tiền của bạn.",
      },
      {
        title: "Đừng kỳ vọng giải quyết trong một buổi",
        detail:
          "Buổi đầu chủ yếu để hiểu vấn đề. Chuyển biến thường tới sau vài buổi — biết trước thì bạn không nản.",
      },
      {
        title: "Đổi người nếu không hợp",
        detail:
          "Cảm giác an toàn với người trị liệu rất quan trọng và quyết định hiệu quả. Không hợp thì tìm người khác — đó là chuyện bình thường, không phải bạn thất bại.",
      },
      {
        title: "Cân nhắc mời bạn đời cùng tham gia",
        detail:
          "Nếu vấn đề liên quan tới mối quan hệ, trị liệu cặp đôi thường hiệu quả hơn là chỉ một người đi.",
      },
    ],
    notes: [
      "Có ý nghĩ làm hại bản thân: tìm hỗ trợ khẩn cấp ngay, đến cơ sở y tế gần nhất hoặc nhờ người thân đưa đi.",
      "Thông tin bạn chia sẻ được bảo mật theo quy định nghề nghiệp.",
      "Cảnh giác với người hứa chữa khỏi nhanh, đòi trả trước gói lớn, hoặc có hành vi vượt ranh giới nghề nghiệp.",
    ],
    faq: [
      {
        q: "Đi khám tâm lý có bị ghi vào hồ sơ gì không?",
        a: "Hồ sơ y tế được bảo mật. Nếu lo, cứ hỏi thẳng về chính sách bảo mật ngay từ buổi đầu.",
      },
      {
        q: "Tư vấn online có hiệu quả không?",
        a: "Với nhiều vấn đề thì có, và tiện hơn nếu bạn ngại tới trực tiếp. Nhớ kiểm tra bằng cấp của người tư vấn.",
      },
      {
        q: "Chi phí cao quá thì sao?",
        a: "Một số bệnh viện công có khoa tâm lý với chi phí thấp hơn. Cũng có các đường dây tư vấn miễn phí — hỏi cơ sở y tế địa phương.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "dau-hoac-kho-chiu-vung-kin-o-nam",
    title: "Đau hoặc khó chịu vùng kín ở nam",
    excerpt:
      "Có loại đau chờ được, có loại chỉ có vài giờ để cứu. Biết phân biệt là điều đáng nhớ nhất trong bài này.",
    readTimeMinutes: 4,
    quickAnswer:
      "Đau đột ngột dữ dội một bên, kèm buồn nôn hoặc sưng nhanh là tình huống CẤP CỨU — tới bệnh viện ngay trong vài giờ, đừng chờ tới sáng. Đau âm ỉ kéo dài, tiểu buốt, tiết dịch bất thường thì đi khám nam khoa hoặc tiết niệu trong vài ngày.",
    prepare: [
      "Ghi lại: đau từ khi nào, một bên hay hai bên, kiểu đau, có sốt không",
      "Biết bệnh viện gần nhất có khoa cấp cứu và đường đi tới đó",
      "Không tự uống thuốc giảm đau rồi ngủ tiếp khi đau dữ dội — làm vậy che mất triệu chứng",
      "Người có thể đưa bạn đi nếu cần",
    ],
    steps: [
      {
        title: "Phân loại mức độ khẩn ngay",
        detail:
          "Đau đột ngột dữ dội một bên thì đi NGAY. Đau âm ỉ tăng dần thì sắp xếp đi khám trong vài ngày. Đây là quyết định quan trọng nhất.",
      },
      {
        title: "Nhận biết dấu hiệu xoắn tinh hoàn",
        detail:
          "Đau dữ dội đột ngột, thường một bên, có thể kèm buồn nôn, bìu sưng và đỏ. Đây là tình huống chỉ có vài giờ vàng — chờ tới sáng có thể là quá muộn.",
      },
      {
        title: "Đừng chờ cho qua",
        detail:
          "Rất nhiều người ngại nên tự nhủ mai xem sao. Với nhóm triệu chứng cấp thì đây là quyết định gây hậu quả không hồi phục được.",
      },
      {
        title: "Đi cấp cứu chứ đừng đợi khám thường",
        detail:
          "Với triệu chứng cấp, vào thẳng khoa cấp cứu và nói rõ đau từ mấy giờ. Thời điểm khởi phát là thông tin bác sĩ cần nhất.",
      },
      {
        title: "Nói rõ triệu chứng với bác sĩ",
        detail:
          "Vị trí, kiểu đau, thời điểm bắt đầu, có kèm tiểu buốt, sốt, tiết dịch, hay chấn thương không. Càng cụ thể càng nhanh.",
      },
      {
        title: "Với đau âm ỉ: theo dõi và ghi lại",
        detail:
          "Ghi diễn tiến vài ngày để bác sĩ thấy xu hướng. Nhưng nếu đau tăng dần thì đừng chờ hết tuần.",
      },
      {
        title: "Không tự mua kháng sinh",
        detail:
          "Dùng sai làm mờ triệu chứng, khiến chẩn đoán khó hơn, chưa kể nguy cơ kháng thuốc. Để bác sĩ quyết định.",
      },
      {
        title: "Làm xét nghiệm nếu được chỉ định",
        detail:
          "Có thể cần siêu âm, xét nghiệm nước tiểu hoặc dịch. Hỏi giá trước và hỏi khi nào có kết quả.",
      },
      {
        title: "Tuân thủ đủ liệu trình",
        detail:
          "Hết đau chưa chắc hết bệnh. Bỏ ngang là lý do phổ biến khiến tình trạng tái phát và khó trị hơn.",
      },
    ],
    notes: [
      "CẤP CỨU: đau dữ dội đột ngột, sưng to nhanh, kèm nôn, sau chấn thương, bí tiểu hoàn toàn, hoặc sốt cao kèm đau.",
      "Xoắn tinh hoàn là tình huống chỉ có vài giờ để xử lý — đây là lý do không được chờ đợi.",
      "Bài viết không chẩn đoán — mọi triệu chứng phải do bác sĩ đánh giá trực tiếp.",
      "Đau kèm tiết dịch hoặc sau quan hệ không an toàn: nói rõ với bác sĩ để được tầm soát phù hợp.",
    ],
    faq: [
      {
        q: "Đau sau khi chơi thể thao có sao không?",
        a: "Chấn thương nhẹ có thể tự đỡ, nhưng đau tăng, sưng to hoặc bầm tím lan rộng thì phải đi khám ngay.",
      },
      {
        q: "Đau âm ỉ kéo dài nhiều tháng thì sao?",
        a: "Vẫn nên đi khám để tìm nguyên nhân. Đau mạn tính vùng này có nhiều nguyên nhân và nhiều hướng xử lý.",
      },
      {
        q: "Ngại đi cấp cứu vì sợ không đúng bệnh?",
        a: "Nhân viên cấp cứu thà khám một ca không nặng còn hơn bỏ sót một ca cần mổ gấp. Đừng để nỗi ngại quyết định thay bạn.",
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
    readTimeMinutes: 4,
    quickAnswer:
      "Nội tiết tố nam giảm dần theo tuổi ở mức nhẹ, khác hẳn hình ảnh khủng hoảng mà quảng cáo vẽ ra. Mệt mỏi, giảm ham muốn, tăng mỡ bụng có thể do nhiều nguyên nhân khác phổ biến hơn nhiều. Muốn biết thì xét nghiệm theo chỉ định bác sĩ, và tuyệt đối không tự dùng liệu pháp nội tiết.",
    prepare: [
      "Ghi lại triệu chứng và thời gian xuất hiện",
      "Rà soát giấc ngủ, cân nặng, rượu bia, mức độ căng thẳng trong sáu tháng qua",
      "Tìm bác sĩ nội tiết hoặc nam khoa ở cơ sở uy tín",
      "Danh sách thuốc đang dùng",
    ],
    steps: [
      {
        title: "Loại trừ nguyên nhân đời thường trước",
        detail:
          "Thiếu ngủ, thừa cân, căng thẳng, trầm cảm, thiếu vận động gây triệu chứng rất giống. Sửa những thứ này trước và quan sát vài tháng.",
      },
      {
        title: "Ghi lại triệu chứng cụ thể",
        detail:
          "Mệt kiểu gì, giảm ham muốn từ khi nào, có giảm khối cơ không, tâm trạng thế nào. Mô tả chung chung khó cho bác sĩ đánh giá.",
      },
      {
        title: "Đi khám và hỏi có nên xét nghiệm không",
        detail:
          "Không phải ai có triệu chứng cũng cần xét nghiệm nội tiết. Bác sĩ sẽ đánh giá dựa trên bệnh sử và khám lâm sàng.",
      },
      {
        title: "Xét nghiệm đúng cách nếu được chỉ định",
        detail:
          "Chỉ số này dao động trong ngày, nên phải lấy máu theo đúng thời điểm bác sĩ chỉ định mới có ý nghĩa. Lấy sai giờ là kết quả vô nghĩa.",
      },
      {
        title: "Nghe bác sĩ giải thích tổng thể",
        detail:
          "Một chỉ số thấp đơn lẻ không đủ kết luận. Bác sĩ nhìn cả triệu chứng, các xét nghiệm khác và loại trừ nguyên nhân khác.",
      },
      {
        title: "Điều trị bệnh nền nếu có",
        detail:
          "Tiểu đường, ngưng thở khi ngủ, béo phì, bệnh tuyến giáp đều có thể là nguyên nhân thật. Điều trị đúng gốc hiệu quả hơn nhiều.",
      },
      {
        title: "Cải thiện lối sống song song",
        detail:
          "Vận động đều đặn, ngủ đủ, giảm cân nếu thừa. Đây là nhóm biện pháp có bằng chứng và không có tác dụng phụ.",
      },
      {
        title: "TUYỆT ĐỐI không tự dùng liệu pháp nội tiết",
        detail:
          "Tự tiêm hoặc uống có thể gây teo tinh hoàn, ảnh hưởng khả năng sinh sản và tăng nguy cơ tim mạch. Đây là điều trị bắt buộc phải có bác sĩ theo dõi.",
      },
      {
        title: "Nếu được chỉ định điều trị thì tuân thủ theo dõi",
        detail:
          "Điều trị nội tiết cần xét nghiệm theo dõi định kỳ. Đừng bỏ lịch tái khám vì thấy đã khoẻ.",
      },
    ],
    notes: [
      "Cẩn thận với sản phẩm quảng cáo tăng nội tiết tố nam bán trôi nổi — nhiều loại chứa chất cấm hoặc chính là nội tiết tố không kiểm soát.",
      "Phòng gym và mạng xã hội có nhiều lời khuyên về dùng nội tiết tố để tăng cơ — đây là con đường dẫn tới hậu quả lâu dài nghiêm trọng.",
      "Bài viết không chẩn đoán, không chỉ định điều trị.",
    ],
    faq: [
      {
        q: "Tập gym có tăng nội tiết tố không?",
        a: "Vận động đều, ngủ đủ và giữ cân nặng hợp lý có lợi cho nội tiết nói chung. Nhưng đó là hiệu quả từ từ, không phải phép màu.",
      },
      {
        q: "Thực phẩm chức năng tăng testosterone có tác dụng không?",
        a: "Phần lớn không có bằng chứng rõ ràng, và một số bị phát hiện trộn chất cấm. Hỏi bác sĩ trước khi dùng bất cứ thứ gì.",
      },
      {
        q: "Bao nhiêu tuổi thì bắt đầu giảm?",
        a: "Giảm dần từ tuổi trung niên ở mức nhẹ. Triệu chứng rõ rệt ở người trẻ thì thường có nguyên nhân khác — nên đi khám.",
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
    readTimeMinutes: 3,
    quickAnswer:
      "Theo tài liệu y tế phổ thông, đây là hành vi bình thường ở cả nam và nữ: không gây mù, không gây yếu sinh lý, không làm mất khả năng sinh sản. Điều đáng lưu tâm chỉ là khi nó gây đau, chiếm quá nhiều thời gian, hoặc khiến bạn khó hứng thú với bạn đời thật.",
    prepare: [
      "Bỏ qua các nguồn thông tin doạ dẫm không có cơ sở",
      "Nhìn vào tác động thực tế lên cuộc sống của bạn",
      "Biết rằng có thể hỏi bác sĩ về chuyện này một cách bình thường",
    ],
    steps: [
      {
        title: "Tách lời đồn khỏi thông tin y tế",
        detail:
          "Những lời doạ về mù mắt, hói đầu, yếu sinh lý, hao tổn nguyên khí đều không có cơ sở khoa học. Chúng tồn tại vì được truyền miệng chứ không vì đúng.",
      },
      {
        title: "Nhìn vào tác động thật lên cuộc sống",
        detail:
          "Có ảnh hưởng tới giấc ngủ, công việc, hay mối quan hệ của bạn không. Đó mới là thước đo hữu ích, chứ không phải tần suất so với ai đó.",
      },
      {
        title: "Chú ý dấu hiệu cơ thể",
        detail:
          "Đau, trầy xước, chảy máu là dấu hiệu bạn đang làm quá mạnh hoặc quá nhiều, cần điều chỉnh chứ không phải chuyện phải chịu.",
      },
      {
        title: "Để ý nếu khó hứng thú với bạn đời thật",
        detail:
          "Đây là tín hiệu đáng chú ý hơn cả tần suất. Nếu có, thử giảm trong vài tuần và quan sát xem có khác không.",
      },
      {
        title: "Xử lý cảm giác tội lỗi cho đúng chỗ",
        detail:
          "Cảm giác tội lỗi thường đến từ quan niệm xã hội và giáo dục chứ không từ tác hại y tế. Phân biệt được hai thứ này giúp bạn bớt dằn vặt vô ích.",
      },
      {
        title: "Nói với chuyên gia nếu thấy mất kiểm soát",
        detail:
          "Cảm giác không dừng được dù đã cố nhiều lần, hoặc làm ở nơi không phù hợp, là lý do chính đáng để gặp chuyên gia tâm lý.",
      },
    ],
    notes: [
      "Bài viết mang tính thông tin sức khỏe chung, không thay thế tư vấn y khoa.",
      "Nếu điều này gây xung đột trong mối quan hệ của bạn, hãy nói chuyện với bạn đời — nhiều cặp cần thống nhất ranh giới riêng.",
      "Đau kéo dài, chảy máu, hoặc tổn thương: đi khám nam khoa.",
    ],
    faq: [
      {
        q: "Có ảnh hưởng tới việc có con không?",
        a: "Theo tài liệu y tế thông thường thì không. Đang mong con và lo lắng thì hỏi bác sĩ hỗ trợ sinh sản cho chắc.",
      },
      {
        q: "Bao nhiêu là nhiều quá?",
        a: "Không có con số chuẩn. Thước đo hữu ích là: nó có gây đau, có ảnh hưởng công việc, giấc ngủ hay mối quan hệ của bạn không.",
      },
      {
        q: "Có làm giảm khả năng với bạn đời không?",
        a: "Với phần lớn người thì không. Nhưng nếu bạn thấy khó hứng thú với người thật, thử giảm một thời gian và quan sát.",
      },
    ],
    sources: [],
  },

  {
    ...chung,
    slug: "hieu-ve-xu-huong-tinh-duc-va-ban-dang-gioi",
    title: "Hiểu về xu hướng tính dục và bản dạng giới",
    excerpt:
      "Vài khái niệm cơ bản, giải thích bình thản — để bạn hiểu chính mình, hoặc hiểu người thân của mình.",
    readTimeMinutes: 4,
    quickAnswer:
      "Xu hướng tính dục là việc bạn bị hấp dẫn bởi ai; bản dạng giới là việc bạn cảm nhận mình là ai. Hai thứ này khác nhau và độc lập với nhau. Các tổ chức y tế lớn từ lâu đã không coi đồng tính là bệnh, và không có phương pháp chuyển đổi nào được y học công nhận — ngược lại, nhiều tổ chức y khoa phản đối vì gây hại.",
    prepare: [
      "Tinh thần tìm hiểu chứ không phán xét, kể cả khi đang tìm hiểu về chính mình",
      "Nguồn thông tin từ tổ chức y tế uy tín thay vì mạng xã hội",
      "Kiên nhẫn: hiểu bản thân là quá trình, không phải một câu trả lời trong một đêm",
    ],
    steps: [
      {
        title: "Phân biệt hai khái niệm cơ bản",
        detail:
          "Bị hấp dẫn bởi ai là xu hướng tính dục. Cảm nhận mình là nam, nữ hay khác là bản dạng giới. Một người có thể thuộc bất kỳ kết hợp nào của hai thứ này.",
      },
      {
        title: "Biết đây không phải bệnh",
        detail:
          "Các tổ chức y tế lớn đã loại đồng tính khỏi danh sách bệnh từ lâu. Cái gọi là liệu pháp chuyển đổi bị nhiều tổ chức y khoa phản đối vì gây hại thật cho sức khỏe tâm thần.",
      },
      {
        title: "Cho mình thời gian",
        detail:
          "Không cần gán nhãn ngay. Nhiều người mất nhiều năm để hiểu rõ, và cảm nhận có thể thay đổi theo thời gian — điều đó hoàn toàn bình thường.",
      },
      {
        title: "Tìm nguồn thông tin đáng tin",
        detail:
          "Tài liệu từ tổ chức y tế, sách chuyên môn, hoặc chuyên gia tâm lý. Mạng xã hội có nhiều thông tin sai lệch cả theo hướng cực đoan lẫn hướng kỳ thị.",
      },
      {
        title: "Chọn người để chia sẻ, theo nhịp của bạn",
        detail:
          "Bắt đầu với một người bạn tin nhất. Bạn không có nghĩa vụ phải công khai với ai, và thời điểm hoàn toàn là quyền của bạn.",
      },
      {
        title: "Cân nhắc yếu tố an toàn",
        detail:
          "Nếu bạn còn phụ thuộc gia đình về tài chính hoặc chỗ ở, hãy cân nhắc kỹ thời điểm. Đây là thực tế chứ không phải hèn nhát.",
      },
      {
        title: "Tìm cộng đồng hỗ trợ",
        detail:
          "Các nhóm hỗ trợ giúp bạn thấy mình không một mình. Chọn nhóm có hoạt động lành mạnh và có người điều phối.",
      },
      {
        title: "Nếu là người thân của bạn công khai",
        detail:
          "Điều họ cần nhất là được lắng nghe. Câu đơn giản nhất mà hiệu quả nhất: cảm ơn vì đã tin tưởng kể với mình. Không cần bạn hiểu hết ngay.",
      },
      {
        title: "Chăm sóc sức khỏe tình dục dù bạn là ai",
        detail:
          "Biện pháp bảo vệ, xét nghiệm định kỳ, tiêm phòng — những việc này áp dụng cho mọi người, không phụ thuộc xu hướng hay bản dạng.",
      },
    ],
    notes: [
      "Bị kỳ thị kéo dài ảnh hưởng thật tới sức khỏe tâm thần — nếu bạn đang mệt mỏi, hãy tìm chuyên gia tâm lý hoặc nhóm hỗ trợ.",
      "Cảnh giác với những nơi hứa chữa hoặc chuyển đổi xu hướng tính dục — đây là hoạt động gây hại và bị giới y khoa phản đối.",
      "Có ý nghĩ làm hại bản thân: tìm hỗ trợ ngay, nói với người bạn tin hoặc tới cơ sở y tế.",
    ],
    faq: [
      {
        q: "Làm sao biết chắc mình là gì?",
        a: "Không có bài kiểm tra nào cả. Cảm nhận của chính bạn là câu trả lời, và nó có thể rõ dần theo thời gian. Không cần vội gán nhãn.",
      },
      {
        q: "Người thân không chấp nhận thì sao?",
        a: "Nhiều người cần thời gian để hiểu. Trong lúc đó, hãy giữ những mối quan hệ an toàn cho mình và tìm nhóm hỗ trợ nếu cần.",
      },
      {
        q: "Có nên nói với bạn đời không?",
        a: "Sự trung thực trong mối quan hệ là quan trọng, nhưng thời điểm và cách nói là quyền của bạn. Chuyên gia tâm lý có thể giúp bạn chuẩn bị.",
      },
    ],
    sources: [],
  },
];
