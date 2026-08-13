// Phần CƠ BẢN — những việc đời thường ai cũng gặp ít nhất một lần.
//
// 📏 CHUẨN VIẾT BÀI (áp dụng cho toàn kho):
//    - excerpt: một câu móc câu, nói trúng nỗi bí của người đọc
//    - quickAnswer: trả lời gọn nhưng đủ để làm được ngay, 3–5 câu
//    - prepare: 3–5 món, ghi rõ vì sao cần
//    - steps: BAO NHIÊU BƯỚC CŨNG ĐƯỢC, miễn là đủ chi tiết để làm theo.
//      Mỗi bước nên có: làm gì, nói câu gì, chờ bao lâu, sai lầm hay gặp
//    - notes: 3–4 điều, ưu tiên cảnh báo và mẹo tiết kiệm thời gian
//    - faq: 3–4 câu hỏi người đọc thật sự hay hỏi

export const coBan = [
  {
    slug: "lam-lai-cccd-khi-bi-mat",
    title: "Làm lại CCCD khi bị mất",
    excerpt:
      "Mất căn cước không phải thảm hoạ như bạn nghĩ. Đây là toàn bộ đường đi, kể cả cách sống sót trong lúc chờ thẻ mới.",
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Ra công an phường/xã nơi bạn thường trú hoặc tạm trú, nói rõ là mất thẻ và muốn cấp lại. Nhiều nơi đã cho khai trước trên VNeID hoặc Cổng dịch vụ công rồi mới tới lấy vân tay, chụp ảnh — làm vậy đỡ được kha khá thời gian xếp hàng. Nhớ xin nhận thẻ qua bưu điện để khỏi phải đi lần nữa, và giữ kỹ giấy hẹn vì nó là giấy tờ tạm của bạn trong vài tuần tới.",
    prepare: [
      "Bất kỳ giấy tờ tuỳ thân nào còn lại: hộ chiếu, bằng lái, thẻ bảo hiểm y tế — có cái nào mang cái đó",
      "Điện thoại đã cài VNeID nếu bạn có tài khoản định danh mức 2",
      "Số CCCD cũ nếu còn nhớ hoặc còn ảnh chụp trong máy — không có cũng không sao",
      "Một buổi rảnh, tránh sáng thứ Hai và ngày đầu tháng vì thường rất đông",
      "Ít tiền mặt phòng khi cần đóng lệ phí hoặc photo giấy tờ",
    ],
    steps: [
      {
        title: "Bình tĩnh tìm lại một lượt trước đã",
        detail:
          "Ví cũ, túi áo khoác, cốp xe, ngăn kéo bàn làm việc — rất nhiều trường hợp tìm thấy sau một vòng. Mất công đi làm lại rồi hôm sau tìm ra thì tiếc.",
      },
      {
        title: "Chụp lại thông tin còn sót trong máy",
        detail:
          "Nhiều người từng chụp ảnh CCCD gửi cho ai đó, hoặc lưu trong ứng dụng ngân hàng, hồ sơ công ty. Có số CCCD cũ thì thủ tục nhanh hơn một chút.",
      },
      {
        title: "Ra công an phường/xã trình báo",
        detail:
          "Nói thẳng: em bị mất thẻ căn cước, giờ em muốn làm lại thì cần gì ạ. Cán bộ sẽ hướng dẫn theo quy trình đang áp dụng tại địa phương bạn. Mỗi nơi có thể hơi khác nên đừng làm theo lời kể của bạn bè ở tỉnh khác.",
      },
      {
        title: "Khai tờ khai — làm online trước thì càng tốt",
        detail:
          "Có thể điền tại chỗ theo mẫu, hoặc khai trước trên VNeID / Cổng dịch vụ công rồi mang mã hồ sơ tới. Khai trước thì tới nơi chỉ còn phần chụp ảnh và lấy vân tay.",
      },
      {
        title: "Chụp ảnh và lấy vân tay",
        detail:
          "Làm ngay tại quầy, thường chỉ vài phút. Mặc áo có cổ, tóc gọn gàng, không đeo kính màu — ảnh này bạn sẽ nhìn suốt nhiều năm tới.",
      },
      {
        title: "Đóng lệ phí và hỏi rõ hai con số",
        detail:
          "Hỏi cụ thể: bao nhiêu tiền, và khi nào có thẻ. Mức phí và thời gian trả thẻ thay đổi theo quy định từng thời điểm nên đừng tin con số đọc trên mạng.",
      },
      {
        title: "Đăng ký nhận thẻ qua bưu điện",
        detail:
          "Bước nhỏ mà tiết kiệm cả buổi. Nói rõ địa chỉ bạn đang ở thật, không nhất thiết là địa chỉ trên hộ khẩu, và giữ điện thoại để bưu tá gọi.",
      },
      {
        title: "Chụp ảnh giấy hẹn ngay khi cầm",
        detail:
          "Giấy hẹn là thứ chứng minh bạn đang chờ thẻ. Chụp một tấm lưu trong máy, và cất bản giấy vào ví như cất giấy tờ quan trọng.",
      },
      {
        title: "Xoay xở trong lúc chờ",
        detail:
          "Giao dịch ngân hàng, đi máy bay, làm hợp đồng có thể cần giấy tờ tuỳ thân. Hộ chiếu hoặc bằng lái thường dùng thay được; trường hợp khó thì hỏi trước nơi bạn sắp giao dịch xem họ chấp nhận giấy hẹn không.",
      },
      {
        title: "Nhận thẻ và kiểm tra từng dòng",
        detail:
          "Họ tên, ngày sinh, quê quán, nơi thường trú — soi kỹ ngay lúc nhận. Sai một chữ mà phát hiện muộn thì sửa rất mất công.",
      },
    ],
    notes: [
      "Mất CCCD kèm mất ví có thẻ ngân hàng: gọi tổng đài khoá thẻ NGAY, đừng chờ tới hôm sau. Đây là việc gấp hơn cả chuyện làm lại giấy tờ.",
      "Ảnh chụp CCCD của bạn có thể bị dùng để mở tài khoản giả. Nếu nghi ngờ bị lấy cắp chứ không phải rơi, hãy nói rõ điều này khi trình báo.",
      "Lệ phí, thời gian trả thẻ và việc có được làm ngoài nơi thường trú hay không đều thay đổi theo quy định — hỏi trực tiếp cán bộ tiếp nhận cho chắc.",
      "Đừng nhờ dịch vụ làm nhanh trôi nổi trên mạng: vừa tốn tiền vừa có nguy cơ lộ thông tin cá nhân.",
    ],
    faq: [
      {
        q: "Mất CCCD có bị phạt không?",
        a: "Việc mất giấy tờ và đi làm lại là thủ tục hành chính bình thường, chủ yếu là đóng lệ phí cấp lại. Cứ hỏi thẳng cán bộ tiếp nhận để biết chính xác trường hợp của bạn.",
      },
      {
        q: "Đang ở trọ xa quê, có phải về quê làm không?",
        a: "Nhiều nơi hiện đã nhận làm không phụ thuộc hộ khẩu. Gọi hỏi công an phường nơi bạn tạm trú trước khi mua vé xe về quê — có thể bạn không cần đi đâu cả.",
      },
      {
        q: "Bao lâu thì có thẻ mới?",
        a: "Thay đổi theo địa phương và theo từng thời điểm. Hỏi ngay lúc nộp hồ sơ và ghi lại, đừng ước lượng theo lời kể của người khác.",
      },
      {
        q: "Trong lúc chờ có đi máy bay được không?",
        a: "Hộ chiếu còn hạn thường dùng được cho chuyến nội địa. Không có hộ chiếu thì gọi hỏi hãng bay trước ngày đi, đừng ra sân bay rồi mới hỏi.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "lam-ho-chieu-online-lan-dau",
    title: "Làm hộ chiếu online lần đầu",
    excerpt:
      "Ngồi nhà khai xong trong 20 phút, hộ chiếu gửi về tận cửa. Chỉ cần tránh đúng một lỗi khiến hồ sơ bị trả về.",
    readTimeMinutes: 4,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Đăng nhập Cổng dịch vụ công bằng tài khoản VNeID mức 2, tìm thủ tục cấp hộ chiếu phổ thông, khai theo mẫu, tải lên ảnh chân dung nền trắng đúng chuẩn, nộp lệ phí online và chọn nhận kết quả qua bưu điện. Lỗi khiến hồ sơ bị trả về nhiều nhất là ảnh — nên ra tiệm chụp và nói rõ chụp ảnh làm hộ chiếu.",
    prepare: [
      "Tài khoản VNeID mức 2 đã kích hoạt — chưa có thì phải ra công an phường làm trước, phần này không online được",
      "Ảnh chân dung nền trắng chụp trong vòng 6 tháng, ra tiệm chụp cho đúng chuẩn",
      "CCCD còn hạn và thông tin trùng khớp với hồ sơ",
      "Thẻ ngân hàng hoặc ví điện tử để nộp lệ phí ngay trên cổng",
      "Địa chỉ nhận hộ chiếu và số điện thoại luôn nghe được",
    ],
    steps: [
      {
        title: "Kiểm tra tài khoản định danh trước",
        detail:
          "Mở VNeID xem tài khoản đã ở mức 2 chưa. Mức 1 không làm được thủ tục này. Chưa có thì ra công an phường/xã kích hoạt, mang theo CCCD.",
      },
      {
        title: "Ra tiệm chụp ảnh, nói rõ mục đích",
        detail:
          "Câu cần nói: em chụp ảnh làm hộ chiếu ạ. Tiệm quen làm sẽ tự canh nền trắng, cỡ ảnh và tư thế đúng chuẩn. Xin họ gửi luôn file ảnh gốc vào máy, đừng chỉ lấy ảnh in.",
      },
      {
        title: "Đăng nhập Cổng dịch vụ công",
        detail:
          "Dùng tài khoản VNeID để đăng nhập. Nên làm trên máy tính nếu có, thao tác tải ảnh và kiểm tra thông tin dễ hơn trên điện thoại.",
      },
      {
        title: "Tìm đúng thủ tục cấp hộ chiếu phổ thông",
        detail:
          "Gõ từ khoá cấp hộ chiếu vào ô tìm kiếm. Chọn đúng loại phổ thông (không phải công vụ), và chọn nơi tiếp nhận phù hợp với nơi bạn đang cư trú.",
      },
      {
        title: "Khai tờ khai — soi kỹ từng ký tự",
        detail:
          "Họ tên viết hoa có dấu hay không dấu thì làm theo hướng dẫn trên form. Số CCCD, ngày cấp, nơi cấp phải khớp tuyệt đối với thẻ. Sai một số là hồ sơ bị trả.",
      },
      {
        title: "Tải ảnh lên và xem kỹ bản xem trước",
        detail:
          "Hệ thống thường hiện ảnh sau khi tải. Nhìn xem có bị cắt mất đỉnh đầu, lệch khung, hay nền ngả xám không. Đây là bước quyết định hồ sơ đậu hay rớt.",
      },
      {
        title: "Chọn cách nhận kết quả",
        detail:
          "Chọn nhận qua bưu điện và điền địa chỉ thật kỹ, kèm số điện thoại. Hộ chiếu là giấy tờ quan trọng nên chọn địa chỉ có người nhận trong giờ hành chính.",
      },
      {
        title: "Nộp lệ phí online",
        detail:
          "Thanh toán ngay trên cổng bằng thẻ hoặc ví. Chụp màn hình biên lai lại — có ích khi cần đối chiếu.",
      },
      {
        title: "Theo dõi trạng thái hồ sơ",
        detail:
          "Vào mục hồ sơ của tôi để xem đang ở bước nào. Bị trả về thì hệ thống ghi rõ lý do, sửa rồi nộp lại chứ không phải làm lại từ đầu.",
      },
      {
        title: "Đi bổ sung trực tiếp nếu được hẹn",
        detail:
          "Một số trường hợp vẫn được mời tới chụp ảnh hoặc đối chiếu. Mang theo CCCD và giấy hẹn, thường chỉ mất ít phút.",
      },
      {
        title: "Nhận hộ chiếu và kiểm tra ngay",
        detail:
          "Soi họ tên, ngày sinh, số hộ chiếu, ngày hết hạn. Sai sót phát hiện sớm dễ xử lý hơn nhiều so với phát hiện ở sân bay.",
      },
    ],
    notes: [
      "Nhiều nước yêu cầu hộ chiếu còn hạn tối thiểu 6 tháng tính từ ngày nhập cảnh — làm sớm trước chuyến đi ít nhất vài tháng.",
      "Tên trên hộ chiếu và tên trên vé máy bay phải khớp từng chữ. Đây là lỗi khiến người ta bị từ chối lên máy bay.",
      "Thời gian xử lý thay đổi theo đợt cao điểm, nhất là trước mùa du lịch. Đừng để sát ngày.",
      "Cẩn thận với dịch vụ làm hộ chiếu nhanh rao trên mạng xã hội — nhiều trường hợp chỉ là môi giới thu thêm tiền, kèm rủi ro lộ thông tin.",
    ],
    faq: [
      {
        q: "Không có tài khoản VNeID mức 2 thì sao?",
        a: "Ra công an phường/xã kích hoạt trước, mang CCCD gắn chip. Hoặc nộp hồ sơ giấy trực tiếp tại cơ quan quản lý xuất nhập cảnh.",
      },
      {
        q: "Ảnh tự chụp bằng điện thoại được không?",
        a: "Rủi ro cao bị trả hồ sơ vì nền, ánh sáng và tỉ lệ khuôn mặt khó đạt chuẩn. Tiền chụp ở tiệm rẻ hơn nhiều so với công sức làm lại.",
      },
      {
        q: "Làm cho con nhỏ thì thế nào?",
        a: "Trẻ em có quy định riêng và thường cần người đại diện làm hồ sơ. Hỏi trực tiếp cơ quan tiếp nhận để được hướng dẫn đúng độ tuổi của bé.",
      },
      {
        q: "Có hộ chiếu rồi thì đi nước ngoài được luôn chưa?",
        a: "Chưa chắc. Nhiều nước còn yêu cầu thị thực (visa) riêng. Kiểm tra yêu cầu của nước bạn định tới trước khi đặt vé.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "di-kham-benh-vien-cong-lan-dau",
    title: "Đi khám bệnh viện công lần đầu",
    excerpt:
      "Đông, rộng, ai cũng có vẻ biết mình đang đi đâu trừ bạn. Đây là trình tự để bạn đi thẳng một mạch, không lạc.",
    readTimeMinutes: 5,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Mang CCCD và thẻ BHYT (thẻ giấy hoặc trên VNeID đều được), đi sớm trước giờ mở quầy 15–30 phút, tìm quầy đăng ký gần cổng chính để lấy số. Sau đó cứ đi theo đúng thứ tự in trên phiếu: phòng khám, đóng phí, xét nghiệm nếu có, rồi quay lại phòng khám ban đầu nghe kết luận. Không rõ gì thì hỏi quầy hướng dẫn — đó chính là việc của họ.",
    prepare: [
      "CCCD và thẻ BHYT hoặc app VNeID có tích hợp thẻ",
      "Ít tiền mặt và thẻ ngân hàng — xét nghiệm phát sinh có thể phải đóng ngay",
      "Ghi sẵn ra giấy: triệu chứng bắt đầu từ khi nào, đau kiểu gì, đã uống thuốc gì",
      "Toa thuốc và kết quả xét nghiệm cũ nếu có",
      "Hỏi trước xem có cần nhịn ăn không nếu bạn nghĩ sẽ xét nghiệm máu",
      "Sạc dự phòng và chai nước — chờ đợi có thể lâu hơn bạn tưởng",
    ],
    steps: [
      {
        title: "Chọn bệnh viện đúng tuyến nếu dùng BHYT",
        detail:
          "Thẻ BHYT có ghi nơi đăng ký khám ban đầu. Đi đúng nơi đó thì quyền lợi cao nhất. Đi nơi khác vẫn khám được nhưng mức chi trả có thể khác — hỏi trước cho khỏi bất ngờ.",
      },
      {
        title: "Đi sớm và tìm đúng quầy",
        detail:
          "Trước giờ mở quầy 15–30 phút là đẹp. Quầy đăng ký thường ngay gần cổng chính, có bảng ghi rõ. Không thấy thì hỏi bảo vệ — họ chỉ đường suốt ngày nên rất thạo.",
      },
      {
        title: "Lấy số và khai lý do khám",
        detail:
          "Đưa CCCD, nói ngắn gọn bạn khám gì: em bị đau bụng ba ngày nay ạ. Nhân viên sẽ xếp bạn vào đúng chuyên khoa.",
      },
      {
        title: "Chọn hình thức khám",
        detail:
          "Có BHYT thì đăng ký khám bảo hiểm, chi phí thấp hơn nhưng thường chờ lâu hơn. Khám dịch vụ nhanh hơn và tự trả phí. Nhân viên sẽ hỏi, cứ chọn theo túi tiền và thời gian của bạn.",
      },
      {
        title: "Đóng phí và nhận phiếu khám",
        detail:
          "Trên phiếu có số phòng và số thứ tự của bạn. Chụp lại một tấm phòng khi làm rơi. Đọc kỹ số phòng vì nhiều bệnh viện có nhiều toà nhà.",
      },
      {
        title: "Tìm phòng khám và ngồi đúng khu",
        detail:
          "Nhìn bảng điện tử trước cửa phòng để biết đang gọi tới số bao nhiêu. Ngồi trong tầm nghe loa, đừng đi xa vì gọi hai lần không có là bị chuyển xuống cuối.",
      },
      {
        title: "Vào khám — nói thẳng và gọn",
        detail:
          "Bác sĩ có rất ít thời gian cho mỗi người. Nói theo thứ tự: triệu chứng gì, từ bao giờ, có gì làm nặng thêm, đã uống thuốc gì. Tờ giấy ghi sẵn ở nhà phát huy tác dụng ngay lúc này.",
      },
      {
        title: "Nhận chỉ định xét nghiệm và đóng phí tiếp",
        detail:
          "Nếu bác sĩ cho đi xét nghiệm hoặc chụp chiếu, bạn thường phải ra quầy đóng phí trước rồi mới tới phòng thực hiện. Hỏi rõ chi phí trước khi làm.",
      },
      {
        title: "Làm xét nghiệm và chờ kết quả",
        detail:
          "Hỏi luôn: kết quả bao lâu có và lấy ở đâu ạ. Nhiều nơi trả kết quả qua ứng dụng hoặc màn hình chứ không gọi tên.",
      },
      {
        title: "Quay lại phòng khám ban đầu",
        detail:
          "Đây là bước nhiều người bỏ sót và ra về sớm. Bác sĩ cần xem kết quả để kết luận và kê toa. Cầm kết quả quay lại đúng phòng cũ.",
      },
      {
        title: "Nghe kết luận và hỏi cho hết thắc mắc",
        detail:
          "Bốn câu nên hỏi: bệnh gì, uống thuốc bao lâu, kiêng gì, khi nào phải quay lại hoặc phải đi cấp cứu. Không hiểu thì hỏi lại, đừng gật cho xong.",
      },
      {
        title: "Lấy thuốc và giữ toàn bộ giấy tờ",
        detail:
          "Nhà thuốc bệnh viện thường ngay trong khuôn viên. Giữ toa thuốc, hoá đơn và kết quả xét nghiệm — cần cho lần tái khám và cho bảo hiểm nếu bạn có mua thêm.",
      },
    ],
    notes: [
      "Sáng thứ Hai và ngày sau kỳ nghỉ lễ luôn đông nhất. Tránh được thì tránh.",
      "Nhiều bệnh viện có app đặt lịch trước, đặt được thì đỡ hẳn khâu bốc số. Tìm tên bệnh viện trên kho ứng dụng trước ngày đi.",
      "Đau ngực dữ dội, khó thở, nói khó, yếu liệt nửa người, chảy máu không cầm: vào thẳng khu CẤP CỨU, không xếp hàng lấy số.",
      "Cảnh giác với người lạ chào mời khám nhanh, dẫn ra phòng khám bên ngoài — đây là chiêu quen ở cổng nhiều bệnh viện lớn.",
    ],
    faq: [
      {
        q: "Không có BHYT có khám được không?",
        a: "Được, chọn khám dịch vụ và tự trả chi phí. Cứ hỏi giá trước ở quầy để biết mình cần mang bao nhiêu.",
      },
      {
        q: "Dùng thẻ BHYT trên VNeID được không?",
        a: "Nhiều nơi đã chấp nhận thẻ trên ứng dụng, nhưng vẫn phải kèm giấy tờ tuỳ thân có ảnh. Mang thêm thẻ giấy nếu còn giữ cho chắc.",
      },
      {
        q: "Đi một mình có ổn không?",
        a: "Hoàn toàn ổn với khám thông thường. Nhưng nếu có thể làm thủ thuật, gây mê, hoặc bạn đang mệt nhiều thì nên có người đi cùng.",
      },
      {
        q: "Chờ lâu quá, bỏ về được không?",
        a: "Được, nhưng phí đã đóng thường không hoàn lại và bạn phải làm lại từ đầu lần sau. Nếu gấp thì hỏi quầy hướng dẫn xem có khung giờ nào vắng hơn.",
      },
    ],
    sources: [],
  },

  {
    slug: "mua-thuoc-o-nha-thuoc-noi-gi-voi-duoc-si",
    title: "Mua thuốc ở nhà thuốc: nói gì với dược sĩ",
    excerpt:
      "Không cần biết tên thuốc. Chỉ cần nói đúng bốn thông tin là dược sĩ tư vấn được — và bạn tránh được thuốc kỵ nhau.",
    readTimeMinutes: 3,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Bốn thông tin cần nói: triệu chứng cụ thể, bị từ bao giờ, đang uống thuốc gì, và có dị ứng thuốc nào không. Thuốc kê đơn thì bắt buộc phải có toa bác sĩ — dược sĩ từ chối bán là họ đang làm đúng, đừng năn nỉ.",
    prepare: [
      "Nhớ lại triệu chứng bắt đầu khi nào và diễn tiến ra sao",
      "Chụp ảnh vỏ hộp các thuốc bạn đang uống — kể cả thực phẩm chức năng và thuốc bổ",
      "Mang toa bác sĩ nếu mua thuốc kê đơn",
      "Biết cân nặng nếu mua thuốc cho trẻ em",
    ],
    steps: [
      {
        title: "Chọn nhà thuốc có dược sĩ tư vấn",
        detail:
          "Ưu tiên nhà thuốc đạt chuẩn, có bảng tên dược sĩ, xuất hoá đơn rõ ràng. Nơi bán vội vàng không hỏi han gì thì nên cân nhắc.",
      },
      {
        title: "Mô tả triệu chứng thật cụ thể",
        detail:
          "Thay vì nói em bị cảm, hãy nói: em ho khan ba ngày nay, không sốt, đêm ho nhiều hơn, cổ họng hơi rát. Càng cụ thể càng được tư vấn trúng.",
      },
      {
        title: "Báo thuốc đang dùng",
        detail:
          "Đây là bước quan trọng nhất mà nhiều người bỏ qua. Thuốc huyết áp, tiểu đường, thuốc tránh thai, thuốc chống đông đều có thể tương tác. Đưa ảnh chụp vỏ hộp là nhanh nhất.",
      },
      {
        title: "Báo tiền sử dị ứng",
        detail:
          "Từng nổi mẩn, khó thở hay sưng môi sau khi uống thuốc nào thì nói ngay. Không nhớ tên thuốc thì mô tả tình huống cũng được.",
      },
      {
        title: "Nói rõ nếu thuộc nhóm đặc biệt",
        detail:
          "Đang mang thai, đang cho con bú, mua cho trẻ nhỏ hoặc người già — những trường hợp này lựa chọn thuốc khác hẳn. Mua cho trẻ thì nói luôn cân nặng.",
      },
      {
        title: "Hỏi kỹ cách dùng trước khi rời quầy",
        detail:
          "Uống mấy lần một ngày, trước hay sau ăn, uống tối đa mấy ngày thì ngưng, có kiêng gì không. Nhờ dược sĩ ghi lên vỏ hộp nếu bạn hay quên.",
      },
      {
        title: "Hỏi dấu hiệu phải đi khám",
        detail:
          "Câu nên hỏi: uống bao lâu mà không đỡ thì em phải đi bác sĩ ạ. Có mốc thời gian trong đầu giúp bạn không kéo dài bệnh.",
      },
      {
        title: "Giữ vỏ hộp và hoá đơn",
        detail:
          "Có tác dụng phụ thì bạn biết chính xác mình đã uống gì. Đây cũng là thông tin bác sĩ cần nếu bạn phải đi khám sau đó.",
      },
    ],
    notes: [
      "Nội dung này giúp bạn giao tiếp ở nhà thuốc, không thay thế việc khám bệnh.",
      "Triệu chứng nặng — sốt cao không hạ, khó thở, đau ngực, đau bụng dữ dội, nôn liên tục, lơ mơ — đi khám ngay, đừng ghé nhà thuốc trước.",
      "Đừng dùng lại toa cũ cho lần ốm mới, và đừng đưa thuốc của mình cho người khác uống dù triệu chứng giống nhau.",
      "Kháng sinh phải uống đủ liệu trình theo chỉ định, kể cả khi đã đỡ. Bỏ ngang là lý do chính gây kháng thuốc.",
    ],
    faq: [
      {
        q: "Dược sĩ không bán thuốc tôi cần thì sao?",
        a: "Nếu đó là thuốc kê đơn thì họ đang làm đúng luật và đang bảo vệ bạn. Đi khám để lấy toa, đó là đường đúng và cũng nhanh hơn là đi tìm chỗ khác.",
      },
      {
        q: "Mua thuốc online có an toàn không?",
        a: "Rủi ro hàng giả và bảo quản sai rất cao. Nếu mua thì chỉ mua ở chuỗi nhà thuốc chính thức có địa chỉ rõ ràng, và tuyệt đối không mua thuốc kê đơn theo lời rao trên mạng xã hội.",
      },
      {
        q: "Thuốc hết hạn dùng được không?",
        a: "Không. Bỏ đi và mua mới. Kiểm tra hạn dùng ngay tại quầy trước khi trả tiền cũng là thói quen tốt.",
      },
    ],
    sources: [],
  },

  {
    slug: "thay-nhot-xe-may-dung-luc",
    title: "Thay nhớt xe máy đúng lúc",
    excerpt:
      "Xe ì, nóng máy, hao xăng — thủ phạm thường là chuyện nhỏ này. Kèm mẹo để không bao giờ quên mốc thay.",
    readTimeMinutes: 3,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Thay theo số km, tham khảo khoảng mỗi 1.500–2.000 km với nhớt thường và xa hơn với nhớt tổng hợp — nhưng con số chuẩn nằm trong sổ bảo dưỡng của hãng xe bạn. Ra tiệm uy tín, yêu cầu khui chai trước mặt mình, và chụp lại đồng hồ km ngay sau khi thay để nhớ mốc lần sau.",
    prepare: [
      "Chụp màn hình đồng hồ km hiện tại",
      "Biết xe mình là xe số hay tay ga — hai loại có nhu cầu khác nhau",
      "Xem sổ bảo dưỡng của hãng nếu còn giữ, đó là con số chuẩn nhất",
      "Khoảng 15–20 phút và một chút tiền mặt",
    ],
    steps: [
      {
        title: "Xác định mốc chuẩn cho xe của bạn",
        detail:
          "Mỗi hãng và mỗi loại nhớt một con số. Sổ bảo dưỡng đi kèm xe có ghi rõ. Không còn sổ thì hỏi tiệm chính hãng của dòng xe đó.",
      },
      {
        title: "Nhận biết dấu hiệu xe đang đòi thay",
        detail:
          "Máy nóng hơn bình thường, tiếng động cơ khô và ồn hơn, tăng ga thấy ì, hao xăng hơn. Có mấy dấu hiệu này thì đừng chờ đủ km nữa.",
      },
      {
        title: "Chọn tiệm và hỏi giá trước",
        detail:
          "Tiệm quen, cửa hàng chính hãng, hoặc nơi bạn bè giới thiệu. Hỏi luôn: nhớt loại này bao nhiêu tiền một chai ạ, để không bị bất ngờ lúc trả tiền.",
      },
      {
        title: "Chọn loại nhớt phù hợp",
        detail:
          "Nhớt thường rẻ, thay dày hơn. Nhớt bán tổng hợp và tổng hợp đắt hơn nhưng đi được xa hơn. Đi nhiều thì loại đắt lại rẻ hơn tính theo km.",
      },
      {
        title: "Yêu cầu khui chai trước mặt mình",
        detail:
          "Câu cần nói: anh khui chai trước mặt em nhé. Đây là cách đơn giản nhất tránh bị đổ nhớt trôi nổi hoặc nhớt cũ pha lại.",
      },
      {
        title: "Xem thợ xả hết nhớt cũ",
        detail:
          "Nhớt cũ phải được xả sạch trước khi đổ nhớt mới. Nhớt cũ đen đặc là bình thường; đen kèm cặn kim loại lấp lánh thì hỏi thợ xem máy có vấn đề gì không.",
      },
      {
        title: "Nhớ nhớt láp nếu đi xe tay ga",
        detail:
          "Xe tay ga có thêm nhớt hộp số (nhớt láp), thường vài lần thay nhớt máy mới cần thay một lần. Hỏi thợ để biết lần này có cần không.",
      },
      {
        title: "Chụp lại đồng hồ km ngay sau khi thay",
        detail:
          "Đây là mẹo ăn tiền nhất trong cả bài. Ảnh trong máy có ngày tháng sẵn, lần sau chỉ cần lấy số km hiện tại trừ đi là biết đã đi bao xa.",
      },
      {
        title: "Đặt nhắc trong điện thoại",
        detail:
          "Ước lượng mỗi tháng bạn đi bao nhiêu km rồi đặt nhắc theo thời gian tương ứng. Nhắc sớm còn hơn quên.",
      },
    ],
    notes: [
      "Đi mưa ngập nhiều, kẹt xe thường xuyên, chở nặng: nên thay sớm hơn mốc bình thường.",
      "Đừng đợi tới lúc xe ì mới thay — lúc đó máy đã chịu thiệt rồi và sửa máy đắt hơn nhớt rất nhiều.",
      "Xe mới mua thường có mốc thay nhớt lần đầu sớm hơn các lần sau. Đọc kỹ sổ bảo dưỡng.",
      "Nhớt đổ quá đầy cũng hại máy chứ không phải càng nhiều càng tốt. Để thợ đổ đúng dung tích của xe.",
    ],
    faq: [
      {
        q: "Không nhớ lần cuối thay khi nào?",
        a: "Ra tiệm thay luôn một lần rồi bắt đầu ghi mốc từ đó. Coi như làm lại từ đầu, chỉ tốn một lần thay sớm.",
      },
      {
        q: "Xe ít đi, cả tháng vài chục km thì sao?",
        a: "Nhớt vẫn thoái hoá theo thời gian dù xe đứng yên. Nhiều hãng khuyến nghị thay theo mốc thời gian nếu chưa đủ km — hỏi tiệm chính hãng của dòng xe bạn.",
      },
      {
        q: "Nhớt đắt tiền có thật sự tốt hơn không?",
        a: "Nhớt tổng hợp giữ được tính năng lâu hơn nên đi được xa hơn giữa hai lần thay. Với người đi nhiều thì đáng, người đi ít thì nhớt thường là đủ.",
      },
    ],
    sources: [],
  },

  {
    slug: "xu-ly-khi-xe-thung-lop-giua-duong",
    title: "Xử lý khi xe thủng lốp giữa đường",
    excerpt:
      "Cố chạy thêm vài trăm mét có thể biến việc vá 20 nghìn thành thay vành cả triệu. Đây là thứ tự đúng.",
    readTimeMinutes: 3,
    category: "xe-co",
    author: null,
    quickAnswer:
      "Tấp vào lề chỗ an toàn, KHÔNG chạy tiếp bằng lốp xẹp vì sẽ hỏng vành và lốp. Dắt bộ chậm rãi tìm tiệm gần nhất — tra bản đồ với từ khoá vá xe hoặc sửa xe máy gần đây, hoặc hỏi người dân xung quanh. Hỏi giá trước khi cho làm.",
    prepare: [
      "Điện thoại còn pin để tra bản đồ và gọi người quen",
      "Số điện thoại một người có thể tới hỗ trợ nếu là ban đêm",
      "Ít tiền mặt — nhiều tiệm vá xe không nhận chuyển khoản",
      "Cân nhắc mang sẵn bình xịt tự vá nếu bạn hay đi đường dài",
    ],
    steps: [
      {
        title: "Giảm tốc từ từ, không phanh gấp",
        detail:
          "Lốp xẹp làm xe mất cân bằng. Bật xi nhan, buông ga cho xe chậm dần rồi mới tấp vào lề. Phanh gấp dễ trượt ngã.",
      },
      {
        title: "Chọn chỗ dừng an toàn",
        detail:
          "Lề rộng, có ánh sáng, tránh khúc cua và chỗ khuất tầm nhìn. Ban đêm thì cố tấp gần chỗ có đèn hoặc có nhà dân.",
      },
      {
        title: "Kiểm tra nhanh mức độ",
        detail:
          "Lốp xẹp hoàn toàn thì dắt bộ. Chỉ non hơi thì có thể đi thật chậm tới chỗ bơm gần nhất. Thấy đinh cắm thì để nguyên, đừng rút ra vì rút xong xì nhanh hơn.",
      },
      {
        title: "Tìm tiệm bằng bản đồ",
        detail:
          "Mở ứng dụng bản đồ, gõ vá xe gần đây hoặc sửa xe máy. Nhìn giờ mở cửa và khoảng cách. Ở Việt Nam tiệm vá xe thường không xa.",
      },
      {
        title: "Hỏi người xung quanh nếu không có mạng",
        detail:
          "Quán nước, tiệm tạp hoá, bảo vệ toà nhà đều biết chỗ vá xe gần nhất. Đây thường nhanh hơn cả tra bản đồ.",
      },
      {
        title: "Dắt bộ đúng cách",
        detail:
          "Đi sát lề, cùng chiều giao thông, đẩy chậm. Xe tay ga nặng thì nghỉ giữa chừng, đừng cố.",
      },
      {
        title: "Hỏi giá và hỏi rõ phương án trước khi làm",
        detail:
          "Câu cần nói: vá thì bao nhiêu, thay săm thì bao nhiêu ạ. Nhiều tiệm sẽ nói vá không được phải thay — cứ hỏi cho xem chỗ thủng trước khi đồng ý.",
      },
      {
        title: "Xem thợ làm và kiểm tra lại",
        detail:
          "Vá xong nhờ bơm đúng áp suất và chạy thử một đoạn ngắn ngay tại chỗ. Phát hiện chưa ổn thì quay lại luôn, dễ hơn là đi xa rồi mới biết.",
      },
      {
        title: "Ban đêm hoặc đường vắng thì đổi phương án",
        detail:
          "Đừng cố dắt bộ đoạn dài trong đêm. Gọi người thân, gọi cứu hộ, hoặc gửi xe lại chỗ an toàn (quán, cây xăng) rồi sáng hôm sau quay lại.",
      },
    ],
    notes: [
      "Phụ nữ đi một mình ban đêm: ưu tiên gọi người quen hoặc dịch vụ cứu hộ thay vì dắt bộ ở đoạn đường vắng. An toàn quan trọng hơn tiền.",
      "Lốp thủng nhiều lần ở nhiều chỗ, hoặc đã vá quá nhiều mối thì nên thay mới — vá thêm chỉ là kéo dài rủi ro.",
      "Kiểm tra áp suất lốp định kỳ giúp giảm hẳn nguy cơ này. Nhiều cây xăng có máy bơm miễn phí hoặc rất rẻ.",
      "Cẩn thận với chiêu rải đinh ở một số tuyến đường: nếu vừa qua đoạn vắng mà lốp xẹp, hãy chọn tiệm cách xa đó một chút.",
    ],
    faq: [
      {
        q: "Vá rồi có bền không?",
        a: "Vết thủng nhỏ được vá đúng cách thì dùng bình thường. Nhưng nếu vết rách lớn, ở thành lốp, hoặc lốp đã mòn thì nên thay.",
      },
      {
        q: "Bình xịt tự vá có dùng được không?",
        a: "Dùng được để đi tạm tới tiệm, tiện khi đi đường dài. Nhưng đó là giải pháp tạm, tới nơi vẫn nên vá hoặc thay đàng hoàng.",
      },
      {
        q: "Xe tay ga và xe số có khác nhau không?",
        a: "Xe tay ga nặng hơn nên dắt bộ mệt hơn nhiều, và bánh sau tháo phức tạp hơn nên công thường cao hơn. Cứ hỏi giá trước.",
      },
    ],
    sources: [],
  },

  {
    slug: "mo-tai-khoan-ngan-hang-dau-tien",
    title: "Mở tài khoản ngân hàng đầu tiên",
    excerpt:
      "15 phút ngồi tại nhà với chiếc CCCD gắn chip. Kèm danh sách phí cần hỏi để không bị trừ tiền vô cớ.",
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Chọn ngân hàng có app dễ dùng, tải app từ App Store hoặc CH Play (tuyệt đối không cài từ link ai gửi), mở tài khoản online bằng eKYC với CCCD gắn chip. Cả quá trình khoảng 15 phút. Sau khi mở xong, nhớ hỏi biểu phí và bật ngay các lớp bảo mật.",
    prepare: [
      "CCCD gắn chip còn hạn",
      "Điện thoại chính chủ, có mạng, còn pin",
      "Số điện thoại bạn dùng lâu dài — số này sẽ gắn với tài khoản và nhận mã OTP",
      "Chỗ ngồi đủ sáng để chụp ảnh và quay video khuôn mặt",
      "Tháo ốp lưng điện thoại nếu ốp dày, vì bước quét chip cần áp sát",
    ],
    steps: [
      {
        title: "Chọn ngân hàng theo tiêu chí thực tế",
        detail:
          "Hỏi bạn bè và người nhà đang dùng gì — chuyển khoản cùng hệ thống thường nhanh và ít trục trặc. Xem thêm: app có dễ dùng không, có nhiều cây ATM gần nhà không, phí thế nào.",
      },
      {
        title: "Tải app từ kho ứng dụng chính thức",
        detail:
          "Chỉ tải từ App Store hoặc CH Play, kiểm tra tên nhà phát hành đúng là ngân hàng đó. TUYỆT ĐỐI không cài từ đường link ai gửi qua tin nhắn — đây là cách lừa đảo phổ biến nhất hiện nay.",
      },
      {
        title: "Bắt đầu mở tài khoản online",
        detail:
          "Tìm mục mở tài khoản hoặc đăng ký mới ngay màn hình đầu. App sẽ dẫn từng bước, cứ làm theo.",
      },
      {
        title: "Chụp CCCD hai mặt",
        detail:
          "Đặt thẻ trên nền tối, đủ sáng, không loá, không che góc. Chụp lại vài lần nếu app báo mờ — bước này làm kỹ thì các bước sau trôi.",
      },
      {
        title: "Quét chip bằng NFC",
        detail:
          "Áp mặt sau điện thoại vào CCCD và giữ yên vài giây. Tháo ốp lưng nếu ốp dày. Máy không có NFC thì app thường có phương án thay thế, hoặc bạn ra quầy làm.",
      },
      {
        title: "Quay video khuôn mặt",
        detail:
          "Làm theo hướng dẫn: nhìn thẳng, quay trái, quay phải, có thể phải nháy mắt. Bỏ kính, bỏ khẩu trang, ngồi nơi đủ sáng và nền đơn giản.",
      },
      {
        title: "Chọn số tài khoản nếu được",
        detail:
          "Nhiều ngân hàng cho chọn số tài khoản trùng số điện thoại — rất tiện khi đọc cho người khác chuyển tiền. Số đẹp thường mất phí, không cần thiết.",
      },
      {
        title: "Đặt mật khẩu và bật bảo mật ngay",
        detail:
          "Mật khẩu không trùng với mật khẩu mạng xã hội. Bật đăng nhập bằng vân tay hoặc khuôn mặt, và bật thông báo biến động số dư để biết ngay khi có giao dịch lạ.",
      },
      {
        title: "Hỏi cho rõ bốn loại phí",
        detail:
          "Phí duy trì tài khoản hằng tháng, phí thường niên của thẻ, phí chuyển khoản, phí rút tiền ATM khác hệ thống. Nhiều ngân hàng đang miễn hết — đừng ngại so sánh vài nơi.",
      },
      {
        title: "Thử một giao dịch nhỏ",
        detail:
          "Nhờ người thân chuyển thử mười, hai mươi nghìn rồi bạn chuyển trả lại. Vừa kiểm tra tài khoản hoạt động, vừa tập thao tác lúc chưa gấp.",
      },
      {
        title: "Lưu số tổng đài chính thức vào danh bạ",
        detail:
          "Lấy số in trên thẻ hoặc trong app, lưu vào danh bạ ngay. Khi có sự cố bạn cần gọi đúng số này chứ không phải số ai đó nhắn cho bạn.",
      },
    ],
    notes: [
      "KHÔNG BAO GIỜ đọc mã OTP cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng hay công an. Ngân hàng không bao giờ hỏi OTP.",
      "Không cho mượn hoặc bán tài khoản ngân hàng của mình. Tài khoản của bạn bị dùng vào việc phạm pháp thì bạn liên đới.",
      "Cảnh giác với tin nhắn thông báo tài khoản bị khoá kèm đường link — luôn mở app chính thức để kiểm tra thay vì bấm link.",
      "Nếu eKYC không qua được sau vài lần, ra quầy làm trực tiếp cho nhanh, mang theo CCCD.",
    ],
    faq: [
      {
        q: "Kẹt ở bước quét NFC thì làm sao?",
        a: "Tháo ốp lưng, áp CCCD vào đúng vị trí ăng-ten NFC (thường ở phần trên mặt lưng), giữ yên vài giây. Vẫn không được thì ra quầy mở trực tiếp.",
      },
      {
        q: "Nên mở mấy tài khoản?",
        a: "Một cái cho chi tiêu hằng ngày là đủ để bắt đầu. Sau này có thể mở thêm một cái riêng để tiết kiệm, giúp bạn không tiêu lẹm vào tiền để dành.",
      },
      {
        q: "Chưa đủ 18 tuổi có mở được không?",
        a: "Một số ngân hàng có sản phẩm cho người dưới 18 tuổi nhưng cần người giám hộ. Gọi hỏi tổng đài ngân hàng để biết chính xác.",
      },
      {
        q: "Mở tài khoản có mất tiền không?",
        a: "Nhiều ngân hàng miễn phí mở. Nhưng hãy hỏi rõ về số dư tối thiểu phải duy trì và phí thường niên của thẻ.",
      },
    ],
    sources: [],
  },

  {
    slug: "bat-dau-ghi-chep-chi-tieu",
    title: "Bắt đầu ghi chép chi tiêu",
    excerpt:
      "Không cần app xịn hay bảng tính phức tạp. Chỉ cần một thói quen 5 giây và đúng một quy tắc để không bỏ cuộc giữa chừng.",
    readTimeMinutes: 4,
    category: "tien-bac",
    author: null,
    quickAnswer:
      "Chọn MỘT công cụ bạn chắc chắn mở mỗi ngày — ghi chú điện thoại là đủ — và ghi ngay tại chỗ mỗi khi tiêu tiền. Cuối tuần cộng lại theo ba nhóm: bắt buộc, mong muốn, để dành. Cuối tháng nhìn lại và chỉ sửa đúng một thứ. Quy tắc sống còn: ghi được đều quan trọng hơn ghi đẹp.",
    prepare: [
      "Một công cụ duy nhất: ghi chú điện thoại, sổ tay, hoặc app quản lý chi tiêu",
      "Quyết tâm cho 30 ngày đầu — qua được mốc này thì thành thói quen",
      "Chấp nhận trước rằng vài ngày đầu sẽ quên, và quên không phải lý do để bỏ",
    ],
    steps: [
      {
        title: "Chọn công cụ dễ nhất, đừng chọn công cụ xịn nhất",
        detail:
          "App nhiều tính năng thường bị bỏ sau một tuần vì mất công nhập. Ghi chú điện thoại mở trong hai giây và bạn luôn có nó trong tay.",
      },
      {
        title: "Ghi ngay tại chỗ, không để dồn",
        detail:
          "Chỉ cần: 35k cơm trưa. Năm giây. Để tới tối là quên mất hai ba khoản, mà thiếu vài khoản là số liệu vô nghĩa.",
      },
      {
        title: "Ghi cả những khoản nhỏ",
        detail:
          "Ly cà phê, gửi xe, ăn vặt. Đây thường là chỗ tiền rò rỉ nhiều nhất và cũng là chỗ người ta hay lười ghi.",
      },
      {
        title: "Đừng phân loại chi li ngay từ đầu",
        detail:
          "Chỉ cần ghi số tiền và vài chữ mô tả. Phân loại phức tạp làm bạn nản. Việc phân nhóm để cuối tuần làm một lượt.",
      },
      {
        title: "Cuối tuần cộng theo ba nhóm",
        detail:
          "Bắt buộc (ăn, ở, đi lại, hoá đơn), Mong muốn (cà phê, mua sắm, giải trí), Để dành. Mất khoảng năm phút và đây là lúc bạn thật sự nhìn ra vấn đề.",
      },
      {
        title: "Cuối tháng tự hỏi đúng một câu",
        detail:
          "Khoản nào làm mình bất ngờ nhất. Đừng phán xét bản thân, chỉ ghi nhận. Ngạc nhiên chính là thông tin có giá trị nhất.",
      },
      {
        title: "Tháng sau chỉ sửa MỘT thứ",
        detail:
          "Cắt hết mọi khoản cùng lúc là công thức bỏ cuộc. Chọn một khoản duy nhất và giảm nó, ví dụ cà phê ngoài từ 5 lần xuống 2 lần một tuần.",
      },
      {
        title: "Tách tiền để dành ra ngay đầu tháng",
        detail:
          "Chuyển sang một tài khoản riêng ngay khi nhận lương, thay vì đợi cuối tháng xem còn dư bao nhiêu. Cách này hiệu quả hơn hẳn với hầu hết mọi người.",
      },
      {
        title: "Quên vài ngày thì ghi tiếp, đừng bỏ",
        detail:
          "Ai cũng có tuần bận. Bỏ trống mấy ngày rồi ghi tiếp từ hôm nay vẫn tốt hơn nhiều so với xoá app và làm lại từ đầu sau nửa năm.",
      },
      {
        title: "Sau 2–3 tháng mới nâng cấp công cụ",
        detail:
          "Lúc đã quen tay thì hãy nghĩ tới app chuyên dụng, đặt ngân sách theo nhóm, hay lập quỹ dự phòng. Nâng cấp quá sớm là lý do phổ biến khiến người ta bỏ.",
      },
    ],
    notes: [
      "Mục tiêu không phải tiêu ít nhất có thể, mà là biết tiền đi đâu. Biết rồi thì quyết định nào cũng dễ hơn.",
      "Tách tài khoản chi tiêu và tài khoản tiết kiệm giúp bạn khỏi phải dựa vào ý chí mỗi ngày.",
      "Nếu bạn bán hàng hoặc làm tự do, nên có tài khoản riêng cho công việc — sau này khai thuế và tính lãi lỗ nhẹ đầu hơn nhiều.",
      "Đừng so sánh con số của mình với người khác. Hoàn cảnh mỗi người mỗi khác và so sánh chỉ làm bạn nản.",
    ],
    faq: [
      {
        q: "Dùng app nào tốt nhất?",
        a: "App nào bạn mở mỗi ngày là app tốt nhất. Ghi chú mặc định của điện thoại thắng mọi app xịn mà bạn không dùng.",
      },
      {
        q: "Ghi mãi mà vẫn không tiết kiệm được?",
        a: "Ghi chép chỉ là bước nhìn thấy. Bước tiếp theo là tách tiền để dành ngay đầu tháng và giảm một khoản cụ thể — chọn khoản làm bạn bất ngờ nhất.",
      },
      {
        q: "Có cần ghi thu nhập không?",
        a: "Nên, ít nhất là tổng thu mỗi tháng. Biết cả hai chiều thì mới thấy được mình đang dư hay thiếu bao nhiêu.",
      },
      {
        q: "Vợ chồng ghi chung hay riêng?",
        a: "Nhiều cặp ghi riêng phần cá nhân và chung phần chi tiêu gia đình. Quan trọng là cả hai cùng nhìn được bức tranh chung mỗi tháng một lần.",
      },
    ],
    sources: [],
  },

  {
    slug: "thue-tro-lan-dau-kiem-tra-gi-truoc-khi-coc",
    title: "Thuê trọ lần đầu: kiểm tra gì trước khi cọc",
    excerpt:
      "Tiền cọc là chỗ mất tiền oan nhiều nhất. Danh sách này giúp bạn xem phòng như người đã thuê chục lần.",
    readTimeMinutes: 5,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Trước khi đưa bất kỳ đồng nào: xem phòng trực tiếp (cả ban ngày lẫn buổi tối nếu được), hỏi rõ TẤT CẢ các khoản phí, đọc kỹ điều khoản cọc trong hợp đồng, và chụp ảnh mọi vết hỏng có sẵn. Tuyệt đối không chuyển khoản giữ chỗ khi chưa gặp mặt và chưa xem phòng.",
    prepare: [
      "Hẹn xem phòng trực tiếp, rủ thêm một người đi cùng",
      "Danh sách câu hỏi ghi sẵn trong điện thoại",
      "Điện thoại để chụp ảnh hiện trạng và quay video",
      "Biết ngân sách tối đa của bạn, gồm cả điện nước chứ không chỉ tiền phòng",
      "Giấy tờ tuỳ thân để làm hợp đồng nếu quyết luôn",
    ],
    steps: [
      {
        title: "Cảnh giác ngay từ tin đăng",
        detail:
          "Giá rẻ bất thường, ảnh đẹp như khách sạn, người đăng giục chuyển tiền giữ chỗ gấp — ba dấu hiệu này đi cùng nhau thì gần như chắc chắn là lừa đảo.",
      },
      {
        title: "Xem phòng vào hai thời điểm nếu có thể",
        detail:
          "Ban ngày để thấy ánh sáng và ẩm mốc, buổi tối để thấy tiếng ồn, an ninh và tình trạng đỗ xe. Nhiều thứ chỉ lộ ra vào buổi tối.",
      },
      {
        title: "Thử nước ngay tại chỗ",
        detail:
          "Mở vòi tắm, vòi rửa, xả bồn cầu. Nước yếu, chảy chậm, có mùi hoặc màu lạ đều là vấn đề bạn sẽ chịu đựng mỗi ngày.",
      },
      {
        title: "Kiểm tra điện và sóng",
        detail:
          "Cắm thử sạc điện thoại vào vài ổ, xem có ổ nào lỏng hay không có điện. Kiểm tra sóng điện thoại và hỏi wifi tốc độ thế nào.",
      },
      {
        title: "Soi trần, tường và cửa sổ",
        detail:
          "Vệt ố trên trần là dấu hiệu thấm dột. Tường có mốc đen là phòng bí. Cửa sổ mở ra hướng nào, có thoáng không, có nắng chiều gắt không.",
      },
      {
        title: "Hỏi rõ TẤT CẢ các khoản tiền",
        detail:
          "Tiền phòng, điện bao nhiêu một số, nước tính theo người hay theo đồng hồ, rác, wifi, giữ xe, phí quản lý. Cộng hết lại mới ra chi phí thật — nhiều nơi giá phòng rẻ nhưng điện nước đắt gấp đôi giá nhà nước.",
      },
      {
        title: "Xem an ninh và quy định sinh hoạt",
        detail:
          "Cổng khoá mấy giờ, có camera không, chỗ để xe có mái che không, có được nấu ăn không, có được dẫn bạn về không, hàng xóm ồn hay yên.",
      },
      {
        title: "Hỏi về chủ nhà và người quản lý",
        detail:
          "Ai là người bạn gọi khi hỏng nước hỏng điện, họ có ở gần không, sửa chữa ai chịu tiền. Chủ nhà khó tính hay dễ chịu ảnh hưởng tới cả năm sống của bạn.",
      },
      {
        title: "Đọc kỹ bốn điều khoản trong hợp đồng",
        detail:
          "Cọc bao nhiêu và khi nào trả lại; báo trước bao lâu khi chuyển đi; trường hợp nào bị trừ cọc; ai chịu chi phí sửa chữa. Chỗ nào mơ hồ thì yêu cầu ghi rõ ra giấy.",
      },
      {
        title: "Chụp ảnh và quay video toàn bộ hiện trạng",
        detail:
          "Mọi vết xước, vết ố, đồ đạc hỏng sẵn, số công tơ điện nước lúc nhận phòng. Gửi luôn cho chủ nhà qua tin nhắn để hai bên cùng có bằng chứng.",
      },
      {
        title: "Đưa cọc phải có giấy",
        detail:
          "Biên nhận ghi rõ số tiền, ngày, mục đích, chữ ký hai bên — hoặc ghi thẳng vào hợp đồng. Chuyển khoản thì ghi rõ nội dung chuyển tiền.",
      },
      {
        title: "Hỏi về đăng ký tạm trú",
        detail:
          "Chủ nhà có hỗ trợ đăng ký tạm trú không. Việc này cần cho nhiều thủ tục sau này và là quyền lợi của bạn.",
      },
    ],
    notes: [
      "Không bao giờ chuyển tiền giữ chỗ trước khi gặp mặt và xem phòng thật. Đây là hình thức lừa đảo phổ biến nhất trong mảng thuê trọ.",
      "Tiền cọc thường tương đương một tháng tiền phòng. Nơi đòi cao hơn nhiều thì phải hỏi rõ lý do và ghi vào hợp đồng.",
      "Giữ một bản hợp đồng có chữ ký. Hợp đồng miệng khi có tranh chấp thì bạn gần như trắng tay.",
      "Xem kỹ hướng phòng và tầng: phòng áp mái nóng kinh khủng vào mùa hè, phòng tầng trệt sát cống thì ẩm và có mùi.",
    ],
    faq: [
      {
        q: "Cọc rồi đổi ý có lấy lại được không?",
        a: "Tuỳ thoả thuận ghi trong biên nhận hoặc hợp đồng. Chính vì vậy phải ghi rõ điều kiện hoàn cọc TRƯỚC khi đưa tiền.",
      },
      {
        q: "Chủ nhà không trả cọc khi chuyển đi thì sao?",
        a: "Đưa ra hợp đồng, biên nhận và ảnh chụp hiện trạng lúc nhận phòng. Có đủ bằng chứng thì bạn ở thế mạnh. Không giải quyết được thì nhờ tổ dân phố hoặc công an phường hoà giải.",
      },
      {
        q: "Nên thuê qua môi giới hay tìm trực tiếp?",
        a: "Môi giới tiết kiệm thời gian nhưng thường thu phí. Tìm trực tiếp qua nhóm cư dân, biển treo trước nhà thì rẻ hơn nhưng mất công hơn.",
      },
      {
        q: "Giá điện thế nào là hợp lý?",
        a: "So với giá điện sinh hoạt của nhà nước là biết. Nơi thu cao hơn nhiều thì đó là khoản chênh bạn phải trả mỗi tháng — tính vào chi phí thật khi so sánh các phòng.",
      },
    ],
    sources: [],
  },

  {
    slug: "chuyen-tro-gon-trong-mot-ngay",
    title: "Chuyển trọ gọn trong một ngày",
    excerpt:
      "Bí quyết không nằm ở hôm chuyển mà ở một tuần trước đó. Kèm túi đồ sống còn cứu bạn đêm đầu tiên.",
    readTimeMinutes: 4,
    category: "nha-cua",
    author: null,
    quickAnswer:
      "Bắt đầu thanh lọc và đóng thùng từ một tuần trước, dán nhãn theo khu vực, chốt điện nước với chủ cũ có chụp ảnh công tơ, và chuẩn bị riêng một túi đồ sống còn cho đêm đầu. Tới nơi mới thì lắp giường và dọn nhà tắm trước, mọi thứ khác từ từ.",
    prepare: [
      "Thùng carton xin ở siêu thị hoặc cửa hàng tiện lợi, băng keo, bút lông",
      "Túi rác lớn cho đồ mềm như chăn màn quần áo",
      "Chốt phương tiện trước: tự chở, xe ba gác, hay xe tải nhỏ",
      "Báo chủ trọ cũ đúng thời hạn ghi trong hợp đồng — báo trễ là mất cọc",
      "Một người bạn tới phụ, đổi lại bằng bữa cơm",
    ],
    steps: [
      {
        title: "Báo chủ nhà đúng hạn hợp đồng",
        detail:
          "Đây là việc phải làm đầu tiên và cũng là lý do mất cọc phổ biến nhất. Báo bằng tin nhắn để có bằng chứng, đừng chỉ nói miệng.",
      },
      {
        title: "Thanh lọc đồ trước một tuần",
        detail:
          "Cái gì sáu tháng không đụng tới thì cho, bán, hoặc bỏ. Chuyển ít đồ đi thì nhẹ hơn một nửa và cũng đỡ tiền xe.",
      },
      {
        title: "Đóng thùng theo khu vực, không theo loại đồ",
        detail:
          "Một thùng cho toàn bộ đồ bếp, một thùng cho đồ tắm. Tới nơi mới bạn dỡ theo phòng chứ không dỡ theo loại.",
      },
      {
        title: "Dán nhãn to và ghi rõ",
        detail:
          "Viết bằng bút lông lên hai mặt thùng: BẾP, QUẦN ÁO, DỄ VỠ. Thùng dễ vỡ thì ghi thêm chữ NHẸ TAY và xếp lên trên cùng.",
      },
      {
        title: "Đồ quý và giấy tờ mang theo người",
        detail:
          "Giấy tờ, laptop, trang sức, tiền mặt cho vào balo bạn đeo. Không bao giờ để lên xe chở đồ.",
      },
      {
        title: "Chuẩn bị túi đồ sống còn",
        detail:
          "Sạc điện thoại, đồ vệ sinh cá nhân, khăn, một bộ đồ, thuốc đang uống, giấy vệ sinh, ít tiền mặt. Đêm đầu bạn sẽ không muốn bới mười cái thùng để tìm bàn chải.",
      },
      {
        title: "Chụp số công tơ điện nước trước khi dọn",
        detail:
          "Chụp cả đồng hồ và ngày giờ. Đây là căn cứ để chốt tiền với chủ cũ, tránh cãi nhau về khoản cuối cùng.",
      },
      {
        title: "Dọn sạch phòng cũ",
        detail:
          "Quét dọn, lau qua, vứt rác. Phòng bàn giao sạch là lý do phổ biến nhất để được trả đủ cọc, và cũng chỉ mất của bạn nửa tiếng.",
      },
      {
        title: "Chốt tiền và nhận lại cọc",
        detail:
          "Cùng chủ nhà đi một vòng kiểm tra, đối chiếu ảnh chụp lúc nhận phòng. Hẹn rõ ngày nhận cọc nếu họ chưa trả ngay.",
      },
      {
        title: "Tới nơi mới: lắp giường và dọn nhà tắm trước",
        detail:
          "Có chỗ ngủ và chỗ tắm dùng được là bạn sống sót qua đêm đầu. Bày biện đẹp để hôm sau, đừng cố làm hết trong một ngày.",
      },
      {
        title: "Chụp hiện trạng phòng mới ngay hôm đầu",
        detail:
          "Lặp lại đúng việc bạn đã làm ở phòng cũ: chụp mọi vết hỏng và số công tơ, gửi cho chủ nhà mới. Một năm sau bạn sẽ cảm ơn chính mình.",
      },
      {
        title: "Cập nhật địa chỉ ở những nơi cần",
        detail:
          "Đăng ký tạm trú, địa chỉ giao hàng, địa chỉ nhận thư ngân hàng. Làm luôn trong tuần đầu kẻo quên.",
      },
    ],
    notes: [
      "Chuyển vào buổi sáng ngày thường thường dễ thuê xe hơn và ít kẹt xe hơn cuối tuần.",
      "Hỏi giá xe theo chuyến và hỏi rõ có bao gồm công bốc vác không — đây là chỗ hay phát sinh thêm tiền.",
      "Chụp ảnh đồ đạc có giá trị trước khi đưa lên xe, phòng khi va chạm hư hỏng cần đối chiếu.",
      "Nếu ở chung cư, hỏi ban quản lý về giờ được dùng thang máy chuyển đồ — nhiều nơi có quy định riêng và phải đăng ký trước.",
    ],
    faq: [
      {
        q: "Thuê xe chở đồ kiểu gì?",
        a: "Đồ ít thì xe ôm hoặc ba gác qua ứng dụng. Đồ nhiều thì tìm xe tải nhỏ chở đồ chuyển trọ, nên hỏi giá 2–3 nơi vì chênh nhau khá xa.",
      },
      {
        q: "Có nên thuê dịch vụ chuyển nhà trọn gói?",
        a: "Đáng nếu bạn nhiều đồ, ở tầng cao không thang máy, hoặc không có ai phụ. Nhớ hỏi rõ giá đã gồm bốc vác và tháo lắp đồ chưa.",
      },
      {
        q: "Chủ cũ giữ cọc để trừ tiền sửa chữa thì sao?",
        a: "Đưa ảnh chụp lúc nhận phòng ra đối chiếu. Nếu vết hỏng đã có từ trước và bạn có bằng chứng thì họ không có căn cứ để trừ.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-sieu-thi-mua-do-tuoi-lan-dau",
    title: "Đi siêu thị mua đồ tươi lần đầu",
    excerpt:
      "Đứng trước quầy thịt mà không biết miếng nào để làm gì? Đây là cách chọn và một thứ tự đi giúp đồ không hỏng.",
    readTimeMinutes: 4,
    category: "an-uong",
    author: null,
    quickAnswer:
      "Đi với danh sách theo món định nấu, lấy hàng khô trước rồi mới tới đồ lạnh và đồ đông, xem kỹ hạn dùng và so giá theo đơn vị (giá trên một kg). Người mới nấu nên mua ở siêu thị vì mọi thứ đều có nhãn ghi rõ tên và cách dùng.",
    prepare: [
      "Danh sách món định nấu cho 2–3 ngày tới, không mua cho cả tuần khi mới bắt đầu",
      "Ăn nhẹ trước khi đi — đói bụng là mua thừa",
      "Túi giữ lạnh nếu nhà xa siêu thị",
      "Biết tủ lạnh nhà mình còn chỗ tới đâu",
    ],
    steps: [
      {
        title: "Lên danh sách theo món chứ đừng theo cảm hứng",
        detail:
          "Định nấu canh chua thì ghi đủ nguyên liệu của canh chua. Mua theo cảm hứng là cách nhanh nhất để rau héo trong tủ lạnh.",
      },
      {
        title: "Đi theo thứ tự: khô trước, lạnh sau",
        detail:
          "Gạo, gia vị, đồ hộp trước. Rau củ giữa. Thịt cá và đồ đông lạnh lấy cuối cùng ngay trước khi ra quầy tính tiền — để đồ lạnh không bị rã trong lúc bạn còn đi vòng vòng.",
      },
      {
        title: "Chọn thịt: nhìn màu và độ đàn hồi",
        detail:
          "Thịt heo tươi có màu hồng nhạt tới đỏ nhạt, mỡ trắng, ấn vào thấy đàn hồi trở lại. Thịt bò đỏ tươi, thớ mịn. Tránh miếng có màu xỉn, nhớt, hoặc chảy nước đục.",
      },
      {
        title: "Chọn cá: nhìn mắt và mang",
        detail:
          "Mắt trong và hơi lồi, mang đỏ tươi, thịt săn, ấn vào không để lại vết lõm. Mắt đục lõm và mang thâm là cá để lâu.",
      },
      {
        title: "Nhờ nhân viên quầy tươi sống làm giúp",
        detail:
          "Họ cắt, chặt, lọc xương, làm sạch cá miễn phí. Cứ nói: chị làm sạch giùm em và cắt miếng vừa kho ạ. Đây là dịch vụ nhiều người mới không biết mà dùng.",
      },
      {
        title: "Xem hạn dùng và ngày đóng gói",
        detail:
          "Đồ tươi đóng khay có ghi ngày đóng gói — càng gần hôm nay càng tốt. Với sữa và đồ mát, hàng mới thường được xếp phía trong, cứ thò tay lấy sâu vào.",
      },
      {
        title: "So giá theo đơn vị chứ đừng nhìn giá gói",
        detail:
          "Nhãn trên kệ thường có dòng giá trên một kg hoặc trên 100g. Đây là cách duy nhất so được gói to với gói nhỏ. Gói to không phải lúc nào cũng rẻ hơn.",
      },
      {
        title: "Chọn rau theo mùa và mua vừa đủ",
        detail:
          "Rau đúng mùa rẻ và ngon hơn. Rau lá chỉ mua đủ 2–3 ngày, củ quả thì trữ được lâu hơn nên mua nhiều hơn được.",
      },
      {
        title: "Kiểm tra hoá đơn trước khi rời quầy",
        detail:
          "Soi nhanh xem có món nào bị quét hai lần hoặc giá khác với giá trên kệ không. Sai sót không hiếm và sửa tại chỗ thì dễ.",
      },
      {
        title: "Về nhà chia phần và cất ngay",
        detail:
          "Thịt cá chia theo từng bữa, cho vào hộp hoặc túi, ghi ngày lên rồi cấp đông. Nấu bữa nào rã đông đúng phần bữa đó — không rã cả tảng rồi cấp đông lại.",
      },
    ],
    notes: [
      "Đồ đã rã đông thì không nên cấp đông lại. Chia nhỏ ngay từ đầu là cách tránh chuyện này.",
      "Rau củ để trong túi kín hoàn toàn dễ úng — nên có lỗ thoáng hoặc lót giấy thấm.",
      "Giá siêu thị cuối ngày thường có hàng giảm giá cận hạn. Rẻ thật, nhưng phải nấu ngay chứ đừng trữ.",
      "Đi chợ truyền thống rẻ hơn nếu bạn biết chọn và biết trả giá — nhưng người mới nên bắt đầu ở siêu thị cho quen mặt hàng.",
    ],
    faq: [
      {
        q: "Siêu thị hay chợ rẻ hơn?",
        a: "Chợ thường rẻ hơn với rau củ và đồ tươi nếu bạn biết chọn. Siêu thị ổn định về chất lượng và có nhãn rõ ràng — hợp với người mới bắt đầu nấu.",
      },
      {
        q: "Mua thịt về ăn được mấy ngày?",
        a: "Ngăn mát thường chỉ vài ngày, ngăn đông lâu hơn nhiều. An toàn nhất là chia phần và cấp đông ngay khi về, rồi ghi ngày lên hộp.",
      },
      {
        q: "Không biết nấu thì nên mua gì cho lần đầu?",
        a: "Bắt đầu bằng trứng, thịt ba chỉ, rau dễ nấu như cải ngọt hoặc bí xanh, và vài gia vị cơ bản. Nấu được vài món rồi hãy mở rộng.",
      },
    ],
    sources: [],
  },

  {
    slug: "ngay-dau-nhan-viec-can-chuan-bi-gi",
    title: "Ngày đầu nhận việc cần chuẩn bị gì",
    excerpt:
      "Hồ sơ, hợp đồng, và một câu hỏi cuối tuần đầu tiên khiến sếp nhớ tới bạn theo hướng tốt.",
    readTimeMinutes: 4,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Hỏi HR một lần cho đủ danh sách giấy tờ, đọc kỹ hợp đồng TRƯỚC khi ký, đến sớm 10–15 phút ngày đầu, và xác định ngay ai là người hướng dẫn trực tiếp của bạn. Ghi chép mọi thứ trong tuần đầu — không ai chê người mới ghi nhiều.",
    prepare: [
      "Bản photo CCCD, bằng cấp và chứng chỉ theo yêu cầu của HR",
      "Số tài khoản ngân hàng để nhận lương, tên chủ tài khoản trùng tên bạn",
      "Sổ hoặc mã số bảo hiểm xã hội nếu từng đi làm",
      "Ảnh thẻ nếu công ty yêu cầu làm thẻ nhân viên",
      "Một cuốn sổ và bút — nghe cũ nhưng cực kỳ hữu ích trong tuần đầu",
    ],
    steps: [
      {
        title: "Hỏi HR danh sách giấy tờ một lần cho đủ",
        detail:
          "Nhắn tin hỏi trước ngày đi làm: em cần chuẩn bị những giấy tờ gì và nộp trước ngày nào ạ. Nộp một lần cho xong, đỡ bị nhắc nhiều lần.",
      },
      {
        title: "Đọc kỹ hợp đồng trước khi ký",
        detail:
          "Sáu điểm cần soi: mức lương và cách tính, thời gian thử việc và lương thử việc, giờ làm, phụ cấp, số ngày phép, và điều khoản chấm dứt. Chỗ nào mơ hồ thì hỏi NGAY lúc chưa ký.",
      },
      {
        title: "Hỏi rõ về bảo hiểm và thuế",
        detail:
          "Có đóng bảo hiểm trong thời gian thử việc không, mức đóng thế nào, thuế thu nhập trừ ra sao. HR trả lời những câu này hằng ngày, đừng ngại.",
      },
      {
        title: "Chuẩn bị trang phục và đường đi từ hôm trước",
        detail:
          "Hỏi HR quy định trang phục. Thử đường đi một lần vào đúng khung giờ để biết mất bao lâu — ngày đầu mà tới muộn thì rất khó gỡ ấn tượng.",
      },
      {
        title: "Ngày đầu tới sớm 10–15 phút",
        detail:
          "Đủ để tìm chỗ gửi xe, tìm phòng, và bình tĩnh lại. Sớm hơn nữa thì lại thành đứng chờ ngoài cửa.",
      },
      {
        title: "Xác định người hướng dẫn trực tiếp",
        detail:
          "Hỏi ngay: em có thắc mắc thì hỏi anh chị nào ạ. Biết đúng một người để hỏi giúp bạn không phải làm phiền cả phòng.",
      },
      {
        title: "Ghi lại tên và vai trò từng người",
        detail:
          "Vẽ sơ đồ chỗ ngồi trong sổ, ghi tên và việc họ phụ trách. Gọi đúng tên người trong tuần đầu tạo thiện cảm rất nhanh.",
      },
      {
        title: "Ghi chép mọi quy trình được hướng dẫn",
        detail:
          "Cách chấm công, cách xin nghỉ, cách đặt phòng họp, tài khoản nội bộ nào dùng làm gì. Hỏi lại lần hai thì ổn, lần ba thì hơi kỳ.",
      },
      {
        title: "Học văn hoá ngầm bằng cách quan sát",
        detail:
          "Mọi người ăn trưa lúc mấy giờ, ai hay ở lại muộn, nhắn tin công việc qua kênh nào, có được nghe nhạc bằng tai nghe không. Quan sát vài ngày rồi hãy hoà theo.",
      },
      {
        title: "Chủ động xin việc để làm",
        detail:
          "Hết việc thì hỏi: em có thể phụ gì thêm không ạ. Người mới chủ động luôn được đánh giá cao hơn người ngồi chờ được giao.",
      },
      {
        title: "Cuối tuần đầu, hỏi một câu ghi điểm",
        detail:
          "Hỏi quản lý: trong tháng đầu, em làm tốt điều gì thì được xem là ổn ạ. Câu này vừa cho bạn tiêu chí rõ ràng, vừa cho thấy bạn nghiêm túc.",
      },
      {
        title: "Giữ một bản hợp đồng cho riêng mình",
        detail:
          "Chụp ảnh và cất bản giấy ở nhà. Sau này có tranh chấp gì thì đây là thứ đầu tiên bạn cần.",
      },
    ],
    notes: [
      "Đừng ký hợp đồng khi chưa đọc, và đừng ký bản chưa điền đủ thông tin rồi để họ điền sau.",
      "Hỏi HR về BHXH, thuế, ngày phép là quyền của bạn, không ai đánh giá gì cả. Người ngại hỏi mới thiệt.",
      "Tuần đầu chưa cần thể hiện giỏi. Đúng giờ, ghi chép, hỏi đúng người — ba thứ đó đã đủ tạo ấn tượng tốt.",
      "Cẩn thận với công ty yêu cầu nộp tiền cọc, giữ bản gốc bằng cấp, hoặc bắt đóng phí đào tạo trước khi đi làm.",
    ],
    faq: [
      {
        q: "Thử việc có được đóng bảo hiểm không?",
        a: "Tuỳ thoả thuận và quy định hiện hành. Hỏi thẳng HR ngay từ đầu và đề nghị ghi rõ trong hợp đồng thử việc.",
      },
      {
        q: "Công ty giữ bằng gốc thì có sao không?",
        a: "Đây là điều bạn nên từ chối. Nộp bản sao công chứng là đủ cho hầu hết trường hợp.",
      },
      {
        q: "Ngày đầu nên nói gì khi giới thiệu bản thân?",
        a: "Ngắn gọn: tên, vị trí, và một câu về việc bạn sẽ làm. Không cần kể dài dòng, mọi người sẽ hiểu dần qua công việc.",
      },
      {
        q: "Lỡ nhận việc rồi thấy không hợp thì sao?",
        a: "Xem điều khoản báo trước trong hợp đồng thử việc. Báo đàng hoàng và bàn giao tử tế — ngành nào cũng nhỏ hơn bạn tưởng.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-may-bay-lan-dau-tu-a-den-z",
    title: "Đi máy bay lần đầu: từ A đến Z",
    excerpt:
      "Từ lúc đặt vé tới lúc ngồi vào ghế, không bỏ sót bước nào. Kèm những thứ tuyệt đối không được để trong vali ký gửi.",
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Check-in online khi hãng mở (thường 24 giờ trước giờ bay), tới sân bay trước 1,5–2 tiếng với chuyến nội địa, mang CCCD còn hạn. Rồi đi đúng trình tự: ký gửi hành lý nếu có, qua kiểm tra an ninh, tìm cửa ra máy bay, lên máy bay theo số ghế. Cửa lên máy bay đóng trước giờ cất cánh 15–30 phút nên đừng la cà.",
    prepare: [
      "CCCD còn hạn — đây là thứ quan trọng nhất, không có là không bay được",
      "Mã đặt chỗ lưu trong điện thoại và chụp màn hình phòng khi mất mạng",
      "Hành lý xách tay đúng quy định: chai lọ trên 100ml phải để vali ký gửi",
      "Sạc dự phòng phải để hành lý xách tay, TUYỆT ĐỐI không ký gửi",
      "Áo khoác mỏng — trên máy bay thường lạnh",
      "Tiền mặt ít và thẻ ngân hàng",
    ],
    steps: [
      {
        title: "Đặt vé và kiểm tra tên ngay lập tức",
        detail:
          "Tên trên vé phải khớp CCCD từng chữ, không dấu. Sai một chữ là có thể không được lên máy bay, và sửa tên thường mất phí. Kiểm tra ngay khi vừa đặt xong.",
      },
      {
        title: "Hiểu vé của bạn có gồm hành lý ký gửi không",
        detail:
          "Vé giá rẻ thường chỉ có xách tay. Mua thêm ký gửi online trước rẻ hơn nhiều so với mua tại quầy sân bay.",
      },
      {
        title: "Check-in online khi hãng mở",
        detail:
          "Thường 24 giờ trước giờ bay. Vào app hoặc web của hãng, chọn ghế, lưu thẻ lên máy bay điện tử vào điện thoại. Bước này giúp bạn bỏ qua hàng chờ ở quầy nếu chỉ có xách tay.",
      },
      {
        title: "Đóng gói đúng quy định",
        detail:
          "Xách tay: không dao kéo, không chất lỏng quá 100ml mỗi chai. Ký gửi: không sạc dự phòng, không pin rời, không bật lửa. Nhớ nhầm hai nhóm này là bị giữ đồ ở cửa an ninh.",
      },
      {
        title: "Tới sân bay sớm",
        detail:
          "Nội địa trước 1,5–2 tiếng, quốc tế trước 3 tiếng. Tính thêm thời gian kẹt xe. Tới sớm mà ngồi chờ vẫn dễ chịu hơn chạy hộc tốc.",
      },
      {
        title: "Tìm đúng nhà ga và quầy của hãng",
        detail:
          "Sân bay lớn có nhiều nhà ga. Nhìn bảng thông tin chuyến bay tìm số hiệu chuyến của bạn để biết quầy nào, hoặc hỏi nhân viên mặc đồng phục.",
      },
      {
        title: "Ký gửi hành lý nếu có",
        detail:
          "Ra quầy hãng, đưa CCCD, đặt vali lên cân. Nhận lại cuống hành lý — giữ kỹ, đây là thứ bạn cần nếu vali thất lạc.",
      },
      {
        title: "Qua kiểm tra an ninh",
        detail:
          "Bỏ điện thoại, ví, chìa khoá, thắt lưng, đồng hồ vào khay. Laptop thường phải lấy ra khỏi cặp. Nước uống phải bỏ lại trước cửa — mua nước ở bên trong sau khi qua.",
      },
      {
        title: "Tìm cửa ra máy bay và nhớ nó có thể đổi",
        detail:
          "Số cửa in trên thẻ lên máy bay và hiện trên màn hình. Nhưng gate CÓ THỂ ĐỔI — nhìn lại màn hình vài lần và nghe loa thông báo.",
      },
      {
        title: "Ngồi chờ gần cửa và để ý giờ",
        detail:
          "Thường bắt đầu cho lên máy bay khoảng 30–40 phút trước giờ cất cánh. Đi ăn thì chọn chỗ gần gate, đừng đi xa.",
      },
      {
        title: "Lên máy bay và tìm ghế",
        detail:
          "Xếp hàng khi được gọi, đưa thẻ lên máy bay và CCCD. Số ghế kiểu 17A nghĩa là hàng 17, ghế A — A thường sát cửa sổ. Số hàng ghi trên hộc hành lý phía trên đầu.",
      },
      {
        title: "Cất hành lý và ổn định chỗ ngồi",
        detail:
          "Vali lên hộc trên, túi nhỏ để dưới ghế trước mặt. Thắt dây an toàn, tắt hoặc chuyển điện thoại sang chế độ máy bay khi tiếp viên thông báo.",
      },
      {
        title: "Xuống máy bay và lấy hành lý",
        detail:
          "Đi theo biển chỉ dẫn tới khu băng chuyền, nhìn màn hình xem chuyến của bạn ở băng chuyền số mấy. Đối chiếu cuống hành lý trước khi rời khu vực.",
      },
    ],
    notes: [
      "Cửa lên máy bay ĐÓNG trước giờ cất cánh 15–30 phút. Trễ là mất chuyến, không phải trễ như xe khách.",
      "Sạc dự phòng và pin rời BẮT BUỘC để hành lý xách tay. Để trong vali ký gửi là vi phạm quy định an toàn bay.",
      "Nếu vali thất lạc: báo ngay tại quầy hành lý thất lạc TRƯỚC KHI rời sân bay, mang theo cuống hành lý.",
      "Đi trễ thì chạy thẳng tới quầy hãng báo, đừng tự bỏ cuộc — có khi được chuyển chuyến sau, thường mất phí nhưng vẫn hơn mất vé.",
    ],
    faq: [
      {
        q: "Trẻ em và người lớn tuổi cần giấy tờ gì?",
        a: "Quy định khác nhau theo độ tuổi và theo hãng. Gọi hỏi hãng bay trước ngày đi để biết chính xác, đừng ra sân bay rồi mới hỏi.",
      },
      {
        q: "Mang đồ ăn lên máy bay được không?",
        a: "Đồ ăn khô thường được với chuyến nội địa. Chất lỏng thì theo quy định 100ml. Chuyến quốc tế còn phụ thuộc quy định nhập cảnh của nước đến.",
      },
      {
        q: "Ngồi ghế cạnh cửa thoát hiểm có sao không?",
        a: "Được thêm chỗ để chân nhưng bạn phải đủ sức khoẻ và sẵn sàng hỗ trợ khi cần. Tiếp viên sẽ hỏi và dặn cụ thể trước khi bay.",
      },
      {
        q: "Sợ độ cao và sợ bay thì làm sao?",
        a: "Chọn ghế gần cánh vì ít xóc nhất, mang tai nghe, và báo tiếp viên nếu bạn thấy quá lo. Họ gặp chuyện này thường xuyên và sẽ để ý tới bạn.",
      },
    ],
    sources: [],
  },
];
