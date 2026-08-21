// Bài đăng ngày 2026-08-21 — khung 18h chiều
// Mỗi bài phải có publishedAt: NGAY
// Bài tế nhị nhớ thêm adult: true

const NGAY = "2026-08-21";

export const day20260821chieu = [
  {
    slug: "quyet-toan-thue-thu-nhap-ca-nhan-va-hoan-thue",
    title: "Quyết toán thuế thu nhập cá nhân: tự làm và lấy lại tiền thừa",
    excerpt:
      "Rất nhiều người đi làm bị trừ thuế dư cả triệu đồng mỗi năm mà không biết mình được lấy lại. Đây là cách tự làm, không cần thuê dịch vụ.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Nếu cả năm bạn chỉ làm một chỗ, công ty thường quyết toán thay — bạn chỉ cần ký giấy uỷ quyền. Nếu bạn làm từ hai nơi trở lên, nhảy việc giữa năm, hoặc có thu nhập vãng lai bị khấu trừ 10%, thì phải tự quyết toán. Vào cổng thuế điện tử dành cho cá nhân, đăng nhập bằng tài khoản định danh VNeID, hệ thống sẽ kéo về dữ liệu thu nhập các nơi đã trả cho bạn. Nếu số thuế đã nộp nhiều hơn số phải nộp, bạn được hoàn lại — nhưng phải chủ động đề nghị thì mới có.",
    prepare: [
      "Tài khoản định danh điện tử VNeID mức 2 — giờ hầu hết cổng dịch vụ công đều đăng nhập bằng cái này",
      "Chứng từ khấu trừ thuế của TẤT CẢ nơi đã trả tiền cho bạn trong năm, kể cả chỗ chỉ làm hai tháng",
      "Số tài khoản ngân hàng chính chủ, đúng tên bạn — tiền hoàn thuế chỉ chuyển vào tài khoản trùng tên",
      "Danh sách người phụ thuộc đã đăng ký, nếu có, để không bị sót phần giảm trừ",
      "Chứng từ đóng bảo hiểm tự nguyện hoặc từ thiện có hoá đơn hợp lệ, nếu bạn có khoản này",
    ],
    steps: [
      {
        title: "Xác định xem bạn có phải tự làm không",
        detail:
          "Cả năm chỉ làm một công ty và đã ký uỷ quyền cho họ thì bạn không phải làm gì thêm. Còn nếu năm đó bạn nhảy việc, làm thêm chỗ khác, hoặc nhận tiền dạy học, viết bài, chạy dự án bị trừ 10% — thì bạn thuộc diện tự quyết toán. Đừng đoán, cứ liệt kê ra giấy hết những nơi đã trả tiền cho bạn.",
      },
      {
        title: "Gom chứng từ khấu trừ từng nơi",
        detail:
          "Nhắn cho kế toán chỗ cũ: “Chị ơi, em cần chứng từ khấu trừ thuế thu nhập cá nhân năm ngoái để đi quyết toán, chị gửi giúp em qua email nhé ạ.” Họ có nghĩa vụ cấp cho bạn. Chỗ nào đã giải thể hoặc mất liên lạc thì đừng lo — dữ liệu vẫn nằm trên hệ thống thuế, bước sau sẽ thấy.",
      },
      {
        title: "Đăng nhập cổng thuế điện tử cá nhân",
        detail:
          "Dùng ứng dụng eTax Mobile hoặc trang thuế điện tử dành cho cá nhân, chọn đăng nhập bằng tài khoản định danh điện tử. Lần đầu hơi lằng nhằng vì phải xác thực qua VNeID, cứ làm chậm rãi. Sai lầm hay gặp: lập tài khoản mới bằng số điện thoại rồi không tra được dữ liệu — hãy đăng nhập bằng VNeID.",
      },
      {
        title: "Tra cứu dữ liệu thu nhập hệ thống đang giữ",
        detail:
          "Có mục cho phép xem các tổ chức đã kê khai trả thu nhập cho mã số thuế của bạn. Đây là bước quan trọng nhất: nó cho bạn thấy đủ các nơi, kể cả nơi bạn quên. Đối chiếu với danh sách bạn tự liệt kê, thiếu chỗ nào thì tìm chứng từ chỗ đó.",
      },
      {
        title: "Chọn đúng tờ khai quyết toán",
        detail:
          "Chọn tờ khai quyết toán thuế thu nhập cá nhân dành cho người có thu nhập từ tiền lương, tiền công. Chọn kỳ tính thuế là năm bạn muốn quyết toán, không phải năm hiện tại. Chọn nhầm kỳ là lỗi phổ biến nhất, và sửa thì phải khai lại từ đầu.",
      },
      {
        title: "Điền tổng thu nhập và thuế đã bị trừ",
        detail:
          "Cộng thu nhập của tất cả các nơi, cộng số thuế đã bị khấu trừ của tất cả các nơi. Hệ thống thường hỗ trợ điền sẵn phần lớn, nhưng bạn vẫn phải soi lại từng dòng vì có nơi kê khai muộn nên chưa lên hệ thống.",
      },
      {
        title: "Khai phần giảm trừ gia cảnh",
        detail:
          "Điền giảm trừ cho bản thân và cho người phụ thuộc đã đăng ký. Chưa đăng ký người phụ thuộc thì phần giảm trừ đó thường không được tính — nên việc đăng ký cần làm sớm, đừng đợi tới lúc này. Mức giảm trừ thay đổi theo từng thời kỳ, cứ để hệ thống tự áp.",
      },
      {
        title: "Xem con số cuối cùng: nộp thêm hay được hoàn",
        detail:
          "Hệ thống tính ra chênh lệch. Số âm nghĩa là bạn đã nộp thừa và được hoàn lại. Rất nhiều người nhảy việc giữa năm rơi vào trường hợp này, vì mỗi công ty tính thuế như thể bạn làm cả năm ở đó.",
      },
      {
        title: "Nếu được hoàn: phải tích vào ô đề nghị hoàn thuế",
        detail:
          "Đây là chỗ nhiều người mất tiền oan. Không tích ô đề nghị hoàn, số tiền thừa sẽ chỉ được treo lại chứ không tự chảy về tài khoản bạn. Điền số tài khoản ngân hàng chính chủ và tên ngân hàng cho chính xác từng chữ.",
      },
      {
        title: "Nộp tờ khai và lưu mã hồ sơ",
        detail:
          "Bấm nộp, hệ thống trả về một mã hồ sơ hoặc thông báo tiếp nhận. Chụp màn hình lại. Đây là bằng chứng bạn đã nộp đúng hạn, kể cả khi sau này hệ thống lỗi.",
      },
      {
        title: "Nếu phải nộp thêm thì nộp luôn trong ngày",
        detail:
          "Nộp thẳng trên eTax Mobile qua liên kết ngân hàng, đừng chuyển khoản thủ công vì dễ sai nội dung và tiền không vào đúng khoản. Nộp trễ hạn sẽ bị tính tiền chậm nộp theo ngày.",
      },
      {
        title: "Theo dõi tiền hoàn về",
        detail:
          "Tiền hoàn thường mất vài tuần tới vài tháng tuỳ nơi và tuỳ hồ sơ có phải xác minh thêm không. Nếu quá lâu, gọi cơ quan thuế nơi bạn nộp và đọc mã hồ sơ để họ tra. Đừng nhờ dịch vụ trung gian hứa hoàn nhanh.",
      },
    ],
    notes: [
      "Hạn quyết toán của cá nhân tự đi nộp thường muộn hơn hạn của doanh nghiệp, nhưng mốc cụ thể thay đổi theo từng năm — tra trên cổng thuế hoặc hỏi trực tiếp cơ quan thuế cho chắc.",
      "Người có tổng thu nhập cả năm thấp dưới ngưỡng chịu thuế nhưng vẫn bị trừ 10% khoản vãng lai thì gần như chắc chắn được hoàn tiền. Đây là nhóm hay bỏ sót nhất, đặc biệt là sinh viên làm thêm và người làm tự do.",
      "Đừng đưa tài khoản VNeID hoặc mã OTP cho bất kỳ ai nhận làm hộ. Có kẻ lừa đảo giả danh cán bộ thuế gọi điện bảo bạn cài ứng dụng lạ để hoàn thuế — cơ quan thuế không bao giờ yêu cầu như vậy.",
      "Mọi con số về ngưỡng chịu thuế, mức giảm trừ và tỉ lệ khấu trừ đều có thể thay đổi theo quy định từng thời điểm — kiểm tra lại trên cổng thuế trước khi tính nhẩm theo bài viết cũ nào đó.",
    ],
    faq: [
      {
        q: "Tôi chỉ làm một công ty cả năm, có cần tự quyết toán không?",
        a: "Thường là không, nếu bạn đã ký giấy uỷ quyền cho công ty quyết toán thay. Nhưng nếu bạn có thêm thu nhập ở nơi khác dù chỉ một lần, phần uỷ quyền đó không đủ và bạn phải tự làm.",
      },
      {
        q: "Tôi làm hai công ty cùng lúc thì có bị tính thuế cao hơn không?",
        a: "Không phải bị phạt, nhưng thuế thu nhập cá nhân tính trên tổng thu nhập cả năm theo bậc, nên gộp lại có thể rơi vào bậc cao hơn và bạn phải nộp thêm. Ngược lại, người nhảy việc giữa năm thường lại được hoàn tiền.",
      },
      {
        q: "Không có chứng từ khấu trừ của công ty cũ thì làm sao?",
        a: "Vẫn làm được, vì dữ liệu công ty đã kê khai nằm trên hệ thống thuế và bạn tra được sau khi đăng nhập. Chứng từ giấy chỉ để đối chiếu cho yên tâm.",
      },
      {
        q: "Có nên thuê dịch vụ quyết toán không?",
        a: "Trường hợp thông thường thì không cần, tự làm trên eTax Mobile mất chừng một buổi tối. Chỉ nên nhờ người có chuyên môn khi bạn có thu nhập phức tạp như cổ tức, chuyển nhượng vốn, thu nhập từ nước ngoài.",
      },
    ],
    sources: [],
  },
  {
    slug: "dang-ky-nguoi-phu-thuoc-giam-tru-gia-canh",
    title: "Đăng ký người phụ thuộc để giảm thuế: ai được tính, làm thế nào",
    excerpt:
      "Nuôi con nhỏ, nuôi bố mẹ già mà không đăng ký người phụ thuộc là bạn đang nộp thuế nhiều hơn mức phải nộp, mỗi tháng.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Người phụ thuộc là người bạn trực tiếp nuôi dưỡng và họ không có thu nhập hoặc thu nhập rất thấp: con dưới 18 tuổi, con đang đi học, bố mẹ ngoài tuổi lao động hoặc mất khả năng lao động. Mỗi người phụ thuộc được đăng ký sẽ trừ thêm một khoản cố định vào thu nhập chịu thuế của bạn hằng tháng. Cách nhanh nhất là nộp qua phòng nhân sự: bạn điền mẫu, nộp kèm giấy tờ chứng minh quan hệ, họ khai lên cơ quan thuế. Một người phụ thuộc chỉ được một người đăng ký, nên vợ chồng phải thống nhất ai khai đứa nào.",
    prepare: [
      "Giấy khai sinh của con, hoặc căn cước của bố mẹ — để chứng minh quan hệ nuôi dưỡng",
      "Mã số thuế cá nhân của bạn, và mã số thuế người phụ thuộc nếu đã có",
      "Giấy xác nhận của trường nếu con trên 18 tuổi và đang đi học",
      "Giấy tờ chứng minh người phụ thuộc không có thu nhập, tuỳ trường hợp — hỏi nhân sự xem nơi bạn cần loại nào",
      "Thông tin nơi cư trú của người phụ thuộc, ghi đúng như trên giấy tờ",
    ],
    steps: [
      {
        title: "Liệt kê ai trong nhà có thể tính là người phụ thuộc",
        detail:
          "Con dưới 18 tuổi gần như luôn được. Con trên 18 đang học đại học, cao đẳng, học nghề cũng thường được. Bố mẹ, bố mẹ vợ hoặc chồng đã hết tuổi lao động hoặc không còn khả năng lao động mà bạn đang nuôi thì cũng được tính. Đừng tự loại mình ra vì nghĩ chỉ con mới được.",
      },
      {
        title: "Kiểm tra ngưỡng thu nhập của người phụ thuộc",
        detail:
          "Người phụ thuộc phải không có thu nhập hoặc thu nhập bình quân tháng dưới một mức rất thấp do quy định ấn định. Bố mẹ đang lĩnh lương hưu cao thường không đủ điều kiện. Mức ngưỡng này thay đổi theo thời điểm, hỏi kế toán công ty hoặc cơ quan thuế cho chắc.",
      },
      {
        title: "Thống nhất trong nhà ai khai người nào",
        detail:
          "Một người phụ thuộc chỉ được tính cho một người nộp thuế trong cùng một kỳ. Vợ chồng cùng đi làm thì nên để người có thu nhập cao hơn khai, vì phần giảm trừ đó cắt vào bậc thuế cao hơn nên lợi hơn. Hai người cùng khai một đứa con là lỗi bị truy thu về sau.",
      },
      {
        title: "Xin mẫu đăng ký từ nhân sự",
        detail:
          "Nhắn: “Chị ơi, em muốn đăng ký người phụ thuộc để giảm trừ gia cảnh, chị gửi em mẫu và cho em biết cần nộp giấy tờ gì ạ.” Hầu hết công ty đều có sẵn quy trình vì tháng nào cũng có người làm.",
      },
      {
        title: "Xin cấp mã số thuế cho người phụ thuộc",
        detail:
          "Người phụ thuộc cần có mã số thuế riêng thì hệ thống mới ghi nhận. Phần này thường công ty làm hộ khi bạn nộp hồ sơ, nhưng cứ hỏi lại cho chắc là họ đã đăng ký chưa, đừng mặc định là xong.",
      },
      {
        title: "Nộp giấy tờ chứng minh quan hệ",
        detail:
          "Bản sao giấy khai sinh cho con, giấy tờ chứng minh quan hệ cha mẹ cho trường hợp nuôi bố mẹ. Nộp bản photo là đủ với hầu hết nơi, nhưng mang bản gốc theo để đối chiếu thì đỡ phải đi lại lần hai.",
      },
      {
        title: "Nếu bạn làm tự do thì tự nộp trên cổng thuế",
        detail:
          "Không có công ty làm hộ thì đăng nhập cổng thuế điện tử cá nhân bằng VNeID và nộp hồ sơ đăng ký người phụ thuộc trực tiếp. Cách này lâu hơn một chút vì bạn phải tự tải giấy tờ lên, nhưng làm được tại nhà.",
      },
      {
        title: "Kiểm tra bảng lương tháng sau",
        detail:
          "Sau khi đăng ký thành công, số thuế bị trừ trên phiếu lương phải giảm xuống. Nếu tháng sau vẫn y nguyên, hỏi lại nhân sự — rất có thể hồ sơ bị treo vì thiếu giấy tờ mà không ai báo bạn.",
      },
      {
        title: "Bổ sung phần thời gian trước khi đăng ký",
        detail:
          "Đăng ký muộn trong năm thì phần giảm trừ của những tháng trước đó thường vẫn được tính bù khi quyết toán cuối năm, miễn là người phụ thuộc đủ điều kiện trong thời gian đó. Hỏi kế toán để họ khai đúng mốc bắt đầu nuôi dưỡng.",
      },
      {
        title: "Cập nhật khi hoàn cảnh thay đổi",
        detail:
          "Con ra trường đi làm, bố mẹ mất, hoặc bạn đổi công ty — đều phải khai lại hoặc chấm dứt đăng ký. Để nguyên và tiếp tục hưởng giảm trừ khi không còn đủ điều kiện là bị truy thu kèm tiền chậm nộp.",
      },
    ],
    notes: [
      "Đổi công ty là phải đăng ký lại từ đầu ở nơi mới. Hồ sơ người phụ thuộc không tự đi theo bạn, và đây là lý do nhiều người nhảy việc bị trừ thuế cao vài tháng liền mà không hiểu vì sao.",
      "Giữ một bản photo bộ hồ sơ đã nộp trong máy. Khi quyết toán cuối năm bạn sẽ cần đối chiếu, và khi đổi việc bạn có sẵn để nộp lại luôn.",
      "Mức giảm trừ cho bản thân và cho mỗi người phụ thuộc do quy định ấn định và có thay đổi qua các thời kỳ — đừng tính nhẩm theo con số nghe được từ đồng nghiệp, hỏi kế toán hoặc cơ quan thuế.",
      "Trường hợp nuôi cháu, nuôi anh chị em ruột không nơi nương tựa cũng có thể được tính nhưng cần giấy tờ chứng minh chặt hơn. Hỏi trước cơ quan thuế xem cần đúng những giấy gì rồi hãy đi làm.",
    ],
    faq: [
      {
        q: "Vợ tôi ở nhà nội trợ, có tính là người phụ thuộc không?",
        a: "Vợ hoặc chồng chỉ được tính khi thuộc diện ngoài tuổi lao động hoặc mất khả năng lao động và không có thu nhập. Người trong tuổi lao động, khoẻ mạnh, dù đang ở nhà nội trợ thì thường không đủ điều kiện.",
      },
      {
        q: "Đăng ký giữa năm có được tính bù các tháng trước không?",
        a: "Thường là có khi quyết toán cuối năm, tính từ tháng phát sinh nghĩa vụ nuôi dưỡng. Nhưng phải khai đúng mốc, nên nói rõ với kế toán thay vì để họ điền ngày nộp hồ sơ.",
      },
      {
        q: "Hai vợ chồng có hai con, chia mỗi người một đứa được không?",
        a: "Được, miễn mỗi đứa chỉ do một người khai. Nếu chênh lệch thu nhập lớn thì để người thu nhập cao khai cả hai sẽ lợi hơn về thuế, nhưng đó là lựa chọn của gia đình.",
      },
      {
        q: "Con tôi đi làm thêm có ảnh hưởng không?",
        a: "Có, nếu thu nhập bình quân tháng của con vượt ngưỡng quy định thì không còn được tính là người phụ thuộc. Làm thêm dịp hè với thu nhập nhỏ thì thường vẫn được, nhưng nên hỏi kế toán trước.",
      },
    ],
    sources: [],
  },
  {
    slug: "tra-cuu-bao-hiem-xa-hoi-tren-vssid",
    title: "Tra cứu bảo hiểm xã hội trên VssID: công ty có đóng đủ cho bạn không",
    excerpt:
      "Công ty trừ tiền bảo hiểm trên lương bạn mỗi tháng, nhưng có nộp lên cơ quan bảo hiểm hay không lại là chuyện khác. Đây là cách tự kiểm tra trong mười phút.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Cài ứng dụng VssID của cơ quan bảo hiểm xã hội, đăng ký tài khoản bằng mã số bảo hiểm và căn cước của bạn, rồi vào mục quá trình tham gia. Bạn sẽ thấy từng tháng, từng công ty, mức lương làm căn cứ đóng. Tháng nào bị trống hoặc mức đóng thấp hơn lương theo hợp đồng thì đó là dấu hiệu cần hỏi lại nhân sự. Nên kiểm tra mỗi quý một lần, đừng đợi tới lúc nghỉ việc hay sinh con mới phát hiện thiếu vài năm.",
    prepare: [
      "Mã số bảo hiểm xã hội — thường trùng dãy số in trên thẻ bảo hiểm y tế, hoặc hỏi nhân sự",
      "Căn cước công dân, để khai đúng thông tin khi đăng ký tài khoản",
      "Số điện thoại chính chủ đang dùng, vì hệ thống gửi mật khẩu qua tin nhắn",
      "Điện thoại cài được ứng dụng, hoặc máy tính để dùng cổng dịch vụ công của bảo hiểm xã hội",
      "Danh sách các công ty bạn đã làm kèm khoảng thời gian, để đối chiếu cho nhanh",
    ],
    steps: [
      {
        title: "Tìm mã số bảo hiểm của bạn",
        detail:
          "Nhìn thẻ bảo hiểm y tế: dãy số ở đó thường chính là mã số bảo hiểm xã hội. Không tìm thấy thì nhắn nhân sự: “Chị cho em xin mã số bảo hiểm xã hội của em với ạ.” Đây là thông tin của bạn, họ phải cung cấp.",
      },
      {
        title: "Cài ứng dụng chính chủ, đừng cài bản nhái",
        detail:
          "Tìm VssID trên kho ứng dụng và xem nhà phát hành phải là cơ quan bảo hiểm xã hội. Có nhiều ứng dụng ăn theo tên gần giống để lấy thông tin cá nhân. Sai lầm hay gặp: cài theo đường link ai đó gửi qua tin nhắn.",
      },
      {
        title: "Đăng ký tài khoản",
        detail:
          "Điền mã số bảo hiểm, họ tên, số căn cước, địa chỉ. Hệ thống có thể yêu cầu chụp ảnh căn cước hai mặt. Làm ở nơi đủ sáng, chụp thẳng, không loá — ảnh mờ là hồ sơ bị trả về và bạn phải chờ thêm.",
      },
      {
        title: "Chờ duyệt và nhận mật khẩu",
        detail:
          "Tuỳ nơi, tài khoản được duyệt trong khoảng một tới vài ngày làm việc, mật khẩu gửi về tin nhắn. Nếu quá lâu, mang căn cước ra cơ quan bảo hiểm xã hội nơi bạn ở nhờ duyệt trực tiếp, thường xong ngay trong buổi.",
      },
      {
        title: "Vào mục quá trình tham gia bảo hiểm xã hội",
        detail:
          "Đây là phần quan trọng nhất của ứng dụng. Nó liệt kê theo từng giai đoạn: từ tháng nào tới tháng nào, ở công ty nào, chức danh gì, mức lương làm căn cứ đóng là bao nhiêu.",
      },
      {
        title: "Soi từng tháng xem có bị trống không",
        detail:
          "Đối chiếu với danh sách công ty bạn đã liệt kê. Khoảng trống giữa hai công ty là bình thường nếu bạn thật sự nghỉ ở nhà. Nhưng trống trong lúc bạn vẫn đang đi làm và vẫn bị trừ tiền trên lương thì là vấn đề.",
      },
      {
        title: "Kiểm tra mức lương đóng bảo hiểm",
        detail:
          "Nhiều công ty đóng theo mức thấp hơn lương thực nhận. Điều này ảnh hưởng trực tiếp tới tiền thai sản, thất nghiệp và lương hưu sau này của bạn. Ghi lại con số để hỏi.",
      },
      {
        title: "Đối chiếu với phiếu lương của bạn",
        detail:
          "Lấy phiếu lương vài tháng bất kỳ, nhìn dòng khấu trừ bảo hiểm. Nếu bạn bị trừ mà trên VssID không ghi nhận tháng đó, đó là dấu hiệu công ty đang nợ tiền bảo hiểm hoặc chưa báo tăng cho bạn.",
      },
      {
        title: "Hỏi nhân sự bằng câu hỏi cụ thể",
        detail:
          "Đừng hỏi chung chung. Nói thẳng: “Chị ơi, em tra trên VssID thấy từ tháng 3 tới tháng 6 chưa ghi nhận quá trình đóng của em, trong khi phiếu lương vẫn trừ. Chị kiểm tra giúp em với ạ.” Có số liệu cụ thể thì câu chuyện khác hẳn.",
      },
      {
        title: "Nếu công ty không xử lý thì đi tiếp",
        detail:
          "Liên hệ cơ quan bảo hiểm xã hội nơi công ty đóng trụ sở, hoặc gọi tổng đài của bảo hiểm xã hội để phản ánh. Mang theo hợp đồng lao động và phiếu lương làm bằng chứng. Bạn không cần nghỉ việc mới được khiếu nại.",
      },
      {
        title: "Chụp màn hình lưu lại mỗi lần kiểm tra",
        detail:
          "Lưu ảnh quá trình tham gia theo từng quý vào một thư mục trong máy. Sau này khi làm hồ sơ thai sản, thất nghiệp hay hưu trí, bạn có sẵn lịch sử để đối chiếu mà không phụ thuộc trí nhớ.",
      },
    ],
    notes: [
      "VssID còn dùng thay thẻ bảo hiểm y tế giấy khi đi khám ở nhiều cơ sở. Cài sẵn thì hôm nào quên thẻ vẫn khám được — riêng cái này đã đáng cài rồi.",
      "Phát hiện thiếu càng sớm càng dễ đòi. Công ty còn hoạt động thì việc truy đóng còn khả thi; đợi tới khi họ giải thể thì gần như không lấy lại được thời gian đó.",
      "Mức đóng, tỉ lệ trích từ lương và cách tính các chế độ đều theo quy định từng thời kỳ và có thay đổi — hỏi cơ quan bảo hiểm xã hội hoặc nhân sự để có con số đúng tại thời điểm bạn cần.",
      "Không đưa mật khẩu VssID hay mã OTP cho bất kỳ ai, kể cả người tự xưng là cán bộ bảo hiểm gọi tới. Cơ quan bảo hiểm không bao giờ hỏi mật khẩu của bạn qua điện thoại.",
    ],
    faq: [
      {
        q: "Tôi làm nhiều công ty rồi, quá trình có bị mất không?",
        a: "Không, nếu bạn dùng cùng một mã số bảo hiểm thì toàn bộ quá trình được cộng dồn và hiện đủ trên VssID. Trường hợp bị cấp hai sổ do công ty cũ khai sai thì phải làm thủ tục gộp sổ tại cơ quan bảo hiểm.",
      },
      {
        q: "Công ty đóng bảo hiểm theo lương thấp hơn lương thật có sai không?",
        a: "Mức đóng phải dựa trên tiền lương theo hợp đồng lao động, nên đóng thấp hơn mức ghi trong hợp đồng là không đúng. Bạn có quyền yêu cầu công ty giải thích và có thể phản ánh lên cơ quan bảo hiểm xã hội.",
      },
      {
        q: "Đăng ký VssID mãi không được duyệt thì sao?",
        a: "Ra thẳng cơ quan bảo hiểm xã hội nơi bạn ở với căn cước, nhờ họ duyệt trực tiếp. Cách này thường xong ngay trong buổi, nhanh hơn ngồi chờ hồ sơ trực tuyến.",
      },
      {
        q: "Tôi làm tự do, không có công ty thì tra được gì?",
        a: "Vẫn tra được nếu bạn từng đi làm trước đây hoặc đang đóng bảo hiểm xã hội tự nguyện. Người đóng tự nguyện xem được quá trình đóng và số tiền đã nộp từng kỳ trên chính ứng dụng này.",
      },
    ],
    sources: [],
  },
  {
    slug: "xin-giay-xac-nhan-cong-tac-va-thu-nhap",
    title: "Xin giấy xác nhận công tác và xác nhận thu nhập ở công ty",
    excerpt:
      "Vay ngân hàng, xin visa, thuê nhà — chỗ nào cũng đòi giấy xác nhận từ công ty. Xin thế nào cho nhanh và không phải đi lại lần hai.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Nhắn hoặc gửi email cho phòng nhân sự, nói rõ ba thứ: bạn cần loại giấy gì, để nộp cho ai, và cần trước ngày nào. Nếu nơi nhận có mẫu riêng, gửi luôn mẫu đó cho nhân sự thay vì để họ tự soạn. Giấy xác nhận công tác chỉ ghi bạn đang làm việc ở đó từ khi nào, chức danh gì. Giấy xác nhận thu nhập ghi thêm mức lương — loại này nhạy cảm hơn nên có nơi cần sếp duyệt và mất vài ngày.",
    prepare: [
      "Biết chính xác nơi nhận cần loại giấy nào — xác nhận công tác, xác nhận thu nhập, hay cả hai",
      "Mẫu giấy của nơi nhận, nếu họ có — ngân hàng và cơ quan lãnh sự thường có mẫu riêng",
      "Yêu cầu về ngôn ngữ: tiếng Việt, tiếng Anh, hay song ngữ; có cần dịch công chứng không",
      "Hạn nộp hồ sơ của bạn, trừ ngược lại vài ngày làm việc để nhân sự kịp xử lý",
      "Số lượng bản cần xin — xin dư một bản thường không tốn thêm công gì",
    ],
    steps: [
      {
        title: "Hỏi nơi nhận trước, đừng đoán",
        detail:
          "Gọi cho ngân hàng hoặc nơi tiếp nhận hồ sơ và hỏi: “Anh chị cho em hỏi giấy xác nhận cần có những nội dung gì, có mẫu sẵn không, và có bắt buộc dấu đỏ bản gốc không ạ.” Xin sai loại giấy rồi phải xin lại là mất cả tuần.",
      },
      {
        title: "Phân biệt rõ hai loại giấy",
        detail:
          "Xác nhận công tác chứng minh bạn đang làm việc: ngày vào làm, chức danh, loại hợp đồng. Xác nhận thu nhập ghi thêm mức lương và thường phải kèm sao kê. Ngân hàng cho vay hầu như luôn đòi loại thứ hai.",
      },
      {
        title: "Viết email đề nghị cho gọn và đủ",
        detail:
          "Mẫu dùng được ngay: “Chị ơi, em cần xin giấy xác nhận công tác bằng song ngữ để nộp hồ sơ xin visa du lịch, em cần lấy trước ngày 28 ạ. Em gửi kèm mẫu của bên nhận hồ sơ bên dưới, chị xem giúp em cần bổ sung gì không ạ.” Ba thông tin: loại giấy, nộp cho ai, hạn nào.",
      },
      {
        title: "Gửi kèm thông tin cá nhân chính xác",
        detail:
          "Ghi rõ họ tên đúng như trên căn cước, số căn cước, ngày vào làm. Nhân sự công ty lớn quản lý hàng trăm người, bạn tự cung cấp sẵn thì họ làm nhanh hơn nhiều.",
      },
      {
        title: "Nói thật lý do khi cần thiết",
        detail:
          "Giấy xin visa hoặc vay mua nhà thì cứ nói thẳng, không có gì phải giấu. Có nơi cần biết mục đích mới chọn đúng mẫu và đúng người ký duyệt.",
      },
      {
        title: "Xin bản song ngữ nếu đi nước ngoài",
        detail:
          "Hồ sơ visa thường cần tiếng Anh. Xin luôn bản song ngữ từ đầu sẽ đỡ phải mang đi dịch công chứng, vừa tốn tiền vừa mất thêm vài ngày.",
      },
      {
        title: "Hỏi trước về việc ghi mức lương",
        detail:
          "Một số công ty có chính sách không ghi số lương cụ thể lên giấy. Nếu vậy, hỏi xem họ có thể ghi khoảng, hoặc cấp sao kê chuyển lương thay thế không, rồi báo lại nơi nhận xem có chấp nhận không.",
      },
      {
        title: "Xin dư một tới hai bản có dấu đỏ",
        detail:
          "Nhiều nơi giữ luôn bản gốc. Có sẵn bản dự phòng thì lần sau bạn không phải làm lại từ đầu. Nói: “Chị làm giúp em hai bản nhé, phòng khi bên kia giữ bản gốc ạ.”",
      },
      {
        title: "Kiểm tra kỹ trước khi rời khỏi công ty",
        detail:
          "Soi họ tên, số căn cước, ngày vào làm, chức danh, ngày ký và dấu. Sai một chữ trong tên là ngân hàng trả hồ sơ. Kiểm tra ngay tại chỗ để sửa luôn, đừng về tới nhà mới mở ra xem.",
      },
      {
        title: "Chú ý thời hạn của giấy",
        detail:
          "Nhiều nơi chỉ chấp nhận giấy cấp trong vòng một tới ba tháng gần nhất. Xin quá sớm rồi để đó vài tháng là phải xin lại. Canh sát thời điểm nộp hồ sơ.",
      },
      {
        title: "Scan lưu lại một bản",
        detail:
          "Chụp hoặc scan giấy đã ký lưu vào thư mục hồ sơ cá nhân trong máy. Lần sau cần, bạn chỉ việc gửi bản cũ cho nhân sự và nhờ làm một bản như vậy với ngày mới.",
      },
    ],
    notes: [
      "Đang trong thời gian thử việc thì giấy thường ghi rõ là đang thử việc, và một số ngân hàng không chấp nhận hồ sơ vay của người chưa qua thử việc. Hỏi ngân hàng trước khi mất công xin giấy.",
      "Đừng tự sửa nội dung trên giấy đã có dấu, dù chỉ một con số. Đó là làm giả giấy tờ, hậu quả nặng hơn nhiều so với việc đi xin lại bản mới.",
      "Công ty nhỏ không có mẫu sẵn thì bạn cứ soạn giúp họ một bản nháp rồi nhờ ký. Đa số sếp thấy có sẵn nội dung là ký nhanh hơn hẳn.",
      "Đã nghỉ việc thì xin giấy xác nhận quá trình công tác chứ không phải xác nhận đang công tác. Công ty cũ vẫn có thể cấp, nhưng nên xin ngay lúc bàn giao thay vì quay lại sau vài năm.",
    ],
    faq: [
      {
        q: "Công ty từ chối cấp giấy thì tôi làm sao?",
        a: "Hỏi lý do trước đã, thường là do sai loại giấy hoặc chưa qua thử việc. Nếu là chính sách không ghi lương, hãy hỏi nơi nhận xem sao kê tài khoản nhận lương và hợp đồng lao động có thay thế được không — nhiều ngân hàng chấp nhận.",
      },
      {
        q: "Mất bao lâu thì có giấy?",
        a: "Xác nhận công tác thường trong một tới hai ngày làm việc. Xác nhận thu nhập lâu hơn vì phải qua kế toán và sếp duyệt. Cứ trừ hao một tuần cho an toàn.",
      },
      {
        q: "Giấy có cần dấu đỏ bản gốc không?",
        a: "Tuỳ nơi nhận. Ngân hàng và cơ quan lãnh sự thường đòi bản gốc có dấu; chủ nhà cho thuê hay trường học nhiều khi chấp nhận bản chụp. Hỏi trước để biết cần xin mấy bản.",
      },
      {
        q: "Làm tự do, không có công ty thì chứng minh thu nhập bằng gì?",
        a: "Thường dùng sao kê tài khoản ngân hàng sáu tới mười hai tháng, hợp đồng dịch vụ với khách hàng, và chứng từ đã nộp thuế. Hỏi thẳng nơi nhận họ chấp nhận bộ nào rồi chuẩn bị đúng bộ đó.",
      },
    ],
    sources: [],
  },
  {
    slug: "di-phong-van-xin-viec-chuan-bi-va-tra-loi",
    title: "Đi phỏng vấn xin việc: chuẩn bị gì và trả lời sao cho tự nhiên",
    excerpt:
      "Không phải cứ giỏi là qua phỏng vấn. Phần lớn người trượt vì không chuẩn bị mấy câu mà ai cũng biết chắc chắn sẽ được hỏi.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "cong-viec",
    author: null,
    quickAnswer:
      "Chuẩn bị ba thứ trước khi đi: hiểu công ty làm gì, thuộc câu chuyện của chính mình, và có sẵn hai câu hỏi để hỏi ngược lại. Trả lời theo công thức tình huống — việc bạn làm — kết quả, có con số càng tốt. Đến sớm mười lăm phút, mang theo CV in sẵn dù họ đã có bản mềm. Kết thúc thì hỏi rõ bước tiếp theo và khi nào có kết quả, đừng ra về mà không biết gì.",
    prepare: [
      "CV in hai bản — một cho bạn nhìn, một đưa nếu người phỏng vấn chưa có",
      "Trang web và trang tuyển dụng của công ty, đọc trước để biết họ bán gì cho ai",
      "Ba câu chuyện công việc kể được trong hai phút mỗi câu, kèm kết quả cụ thể",
      "Câu trả lời về mức lương mong muốn — tìm hiểu mặt bằng trước, đừng để bị hỏi bất ngờ",
      "Sản phẩm bạn từng làm nếu là nghề cần chứng minh, để sẵn trong điện thoại cho gọn",
    ],
    steps: [
      {
        title: "Đọc kỹ lại tin tuyển dụng và gạch chân",
        detail:
          "Gạch chân những cụm lặp lại nhiều lần trong mô tả công việc. Đó là thứ họ thật sự cần. Chuẩn bị sẵn ví dụ cho từng cụm đó — buổi phỏng vấn về cơ bản là chứng minh bạn làm được những dòng gạch chân ấy.",
      },
      {
        title: "Tìm hiểu công ty trong ba mươi phút",
        detail:
          "Xem trang chủ, trang mạng xã hội, vài tin tức gần đây. Biết họ bán gì, khách hàng là ai, mới lập hay lâu đời. Không cần nghiên cứu sâu, chỉ cần đủ để không lúng túng khi bị hỏi bạn biết gì về bên anh.",
      },
      {
        title: "Chuẩn bị câu giới thiệu bản thân trong hai phút",
        detail:
          "Cấu trúc: hiện tại bạn đang làm gì, một hai điểm mạnh liên quan tới vị trí này, và vì sao bạn muốn ứng tuyển. Đừng kể từ hồi đi học. Tập nói thành tiếng vài lần — viết ra giấy thôi thì tới lúc nói vẫn vấp.",
      },
      {
        title: "Chuẩn bị ba câu chuyện có kết quả cụ thể",
        detail:
          "Công thức: tình huống — bạn làm gì — kết quả ra sao. Ví dụ: khách phàn nàn giao hàng chậm, tôi lập bảng theo dõi đơn và gọi báo trước cho khách, tỉ lệ phàn nàn giảm rõ trong hai tháng. Có con số thì nhớ nói ra, nó đáng giá hơn mười tính từ tự khen.",
      },
      {
        title: "Chuẩn bị sẵn cho các câu hỏi khó",
        detail:
          "Vì sao bạn nghỉ chỗ cũ, điểm yếu của bạn là gì, khoảng trống trong CV này là sao. Trả lời thật nhưng gọn, không nói xấu công ty cũ. Về điểm yếu, nói một điểm thật kèm việc bạn đang làm để cải thiện.",
      },
      {
        title: "Chuẩn bị hai câu hỏi để hỏi ngược lại",
        detail:
          "Hỏi được là điểm cộng lớn. Ví dụ: “Trong ba tháng đầu, anh chị mong người vào vị trí này làm được việc gì ạ.” Hoặc “Đội em sẽ làm việc cùng gồm những ai ạ.” Đừng hỏi lương ngay câu đầu tiên.",
      },
      {
        title: "Chọn đồ và xem đường đi từ tối hôm trước",
        detail:
          "Ăn mặc gọn gàng, nhỉnh hơn mức thường ngày của công ty đó một chút. Xem trước đường đi và chỗ gửi xe. Nhiều người mất bình tĩnh chỉ vì loay hoay tìm chỗ đỗ xe rồi vào trễ mười phút.",
      },
      {
        title: "Đến sớm mười lăm phút, không sớm hơn nửa tiếng",
        detail:
          "Sớm mười lăm phút để ngồi thở, uống nước, xem lại ghi chú. Đến quá sớm thì lễ tân lúng túng và bạn ngồi chờ càng thêm căng thẳng. Nếu trễ thì gọi báo trước, đừng im lặng.",
      },
      {
        title: "Vào phòng: chào, ngồi thẳng, cất điện thoại",
        detail:
          "Nói rõ tên mình khi chào. Để điện thoại ở chế độ im lặng và cất đi, không đặt trên bàn. Nhìn vào mắt người hỏi khi trả lời, thi thoảng nhìn cả những người khác nếu phỏng vấn nhóm.",
      },
      {
        title: "Trả lời chậm hơn bạn nghĩ là cần",
        detail:
          "Được hỏi thì im ba giây suy nghĩ rồi hãy nói, không ai đánh giá bạn vì ba giây đó. Không biết thì nói thẳng: em chưa làm việc này bao giờ, nhưng em từng làm việc gần giống là… Bịa ra kinh nghiệm không có là kiểu trượt đau nhất, vì họ sẽ hỏi sâu thêm.",
      },
      {
        title: "Khi bị hỏi lương, đưa khoảng chứ đừng đưa một con số",
        detail:
          "Nói: “Em mong muốn trong khoảng từ A tới B, còn tuỳ vào phạm vi công việc và chế độ của bên mình ạ.” Tìm hiểu mặt bằng trước để khoảng đó có cơ sở. Chưa rõ thì hỏi ngược: “Vị trí này bên mình dự kiến ngân sách khoảng bao nhiêu ạ.”",
      },
      {
        title: "Trước khi ra về, hỏi rõ bước tiếp theo",
        detail:
          "“Dạ sau buổi hôm nay thì quy trình tiếp theo thế nào và khoảng khi nào em có kết quả ạ.” Câu này giúp bạn biết khi nào nên hỏi lại thay vì ngồi đoán cả tuần.",
      },
      {
        title: "Gửi email cảm ơn trong vòng một ngày",
        detail:
          "Vài dòng thôi: cảm ơn thời gian, nhắc một điểm bạn thấy thú vị trong buổi nói chuyện, khẳng định bạn quan tâm vị trí này. Ít người làm, nên làm là bạn khác biệt.",
      },
    ],
    notes: [
      "Cẩn thận với tin tuyển dụng lương cao bất thường mà yêu cầu bạn nộp tiền cọc, giữ giấy tờ gốc, hoặc hẹn phỏng vấn ở nơi lạ. Công ty tử tế không bao giờ giữ căn cước bản gốc của ứng viên.",
      "Phỏng vấn online thì kiểm tra micro, camera và đường mạng trước ba mươi phút, ngồi nơi có tường phía sau và ánh sáng chiếu từ trước mặt. Vào phòng chờ sớm năm phút.",
      "Trượt một buổi không có nghĩa bạn kém. Nhiều khi họ đã có ứng viên nội bộ từ đầu. Ghi lại câu nào bạn trả lời tệ để buổi sau làm tốt hơn.",
      "Không nói xấu sếp cũ hay công ty cũ, kể cả khi bạn có lý. Người phỏng vấn sẽ nghĩ mai này bạn cũng nói về họ như vậy.",
    ],
    faq: [
      {
        q: "Bị hỏi vì sao nghỉ chỗ cũ thì trả lời sao?",
        a: "Nói ngắn và hướng về phía trước: em muốn làm mảng sâu hơn, hoặc chỗ cũ không còn cơ hội phát triển ở hướng em theo đuổi. Không cần kể chi tiết mâu thuẫn nội bộ.",
      },
      {
        q: "Chưa có kinh nghiệm thì lấy gì kể?",
        a: "Dùng bài tập lớn ở trường, việc làm thêm, hoạt động câu lạc bộ, dự án cá nhân. Điều họ muốn nghe là cách bạn xử lý một việc từ đầu tới cuối, không nhất thiết phải là việc có trả lương.",
      },
      {
        q: "Sau bao lâu không thấy hồi âm thì nên hỏi lại?",
        a: "Nếu họ hẹn một tuần thì chờ hết tuần cộng thêm hai ngày rồi gửi một email hỏi lịch sự. Hỏi một lần là đủ; im lặng kéo dài thường đã là câu trả lời.",
      },
      {
        q: "Có nên nói mình đang phỏng vấn chỗ khác không?",
        a: "Có thể nói nếu đúng sự thật và nói nhẹ nhàng, nó cho thấy bạn có lựa chọn. Nhưng đừng dùng như đòn ép giá khi bạn chưa thật sự có lời mời trong tay.",
      },
    ],
    sources: [],
  },
];
