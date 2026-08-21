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
  {
    slug: "lay-lai-tai-khoan-facebook-zalo-bi-chiem",
    title: "Tài khoản Facebook hay Zalo bị chiếm: lấy lại và chặn thiệt hại",
    excerpt:
      "Kẻ chiếm tài khoản không cần tiền của bạn — chúng cần danh sách bạn bè của bạn. Mỗi phút chậm là thêm một người thân bị nhắn tin vay tiền.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Làm hai việc song song. Một: báo cho người thân bằng kênh khác — gọi điện, nhắn nhóm gia đình từ máy người nhà — rằng tài khoản của bạn bị chiếm, đừng chuyển tiền cho ai nhắn từ đó. Hai: vào ngay trang khôi phục tài khoản chính thức của nền tảng, đổi mật khẩu, đăng xuất mọi thiết bị lạ, bật xác thực hai lớp. Kiểm tra cả email gắn với tài khoản đó, vì kẻ chiếm thường vào email trước rồi mới chiếm mạng xã hội.",
    prepare: [
      "Một thiết bị khác mà bạn còn đăng nhập được — điện thoại cũ, máy tính, hoặc máy người nhà",
      "Email và số điện thoại gốc đã gắn với tài khoản, để nhận mã khôi phục",
      "Danh sách người hay chuyển tiền cho bạn, để gọi cảnh báo trước",
      "Giấy tờ tuỳ thân, phòng khi nền tảng yêu cầu xác minh danh tính",
      "Một chỗ ghi lại: bạn đã làm gì, lúc mấy giờ — cần khi trình báo hoặc khiếu nại",
    ],
    steps: [
      {
        title: "Xác định mình mất tới đâu",
        detail:
          "Còn đăng nhập được nhưng thấy hoạt động lạ là mức nhẹ. Bị đăng xuất và không đổi được mật khẩu là mức nặng. Nếu email gốc cũng vào không được thì đó là mức nặng nhất — phải cứu email trước, vì email là chìa khoá mở mọi tài khoản khác.",
      },
      {
        title: "Cảnh báo người thân ngay trong năm phút đầu",
        detail:
          "Gọi điện hoặc nhắn từ máy khác vào nhóm gia đình, nhóm bạn, nhóm công ty: “Facebook mình bị chiếm, ai nhận tin nhắn vay tiền hay nhờ nhận hộ tiền từ nick mình thì đừng chuyển, gọi thẳng vào số này cho mình.” Việc này quan trọng hơn cả việc lấy lại tài khoản.",
      },
      {
        title: "Cứu email gốc trước",
        detail:
          "Đăng nhập email, đổi mật khẩu, xem mục thiết bị đang đăng nhập và đăng xuất hết những cái lạ. Kiểm tra kỹ phần cài đặt chuyển tiếp thư và bộ lọc: kẻ chiếm hay cài lệnh tự chuyển tiếp thư của bạn cho chúng rồi xoá dấu vết.",
      },
      {
        title: "Dùng đúng trang khôi phục chính thức",
        detail:
          "Facebook có trang báo cáo tài khoản bị xâm nhập, Zalo có mục quên mật khẩu và tổng đài hỗ trợ. Tuyệt đối không tìm dịch vụ lấy lại nick trên mạng — gần như toàn bộ là lừa đảo lần hai, lấy nốt tiền của người đang hoảng.",
      },
      {
        title: "Đổi mật khẩu và đăng xuất mọi thiết bị",
        detail:
          "Lấy lại được rồi thì đổi mật khẩu ngay, đặt mật khẩu chưa từng dùng ở đâu khác. Vào mục phiên đăng nhập và bấm đăng xuất tất cả. Bỏ qua bước đăng xuất là kẻ chiếm vẫn ngồi trong máy chúng và chiếm lại sau vài phút.",
      },
      {
        title: "Bật xác thực hai lớp",
        detail:
          "Ưu tiên ứng dụng sinh mã thay vì tin nhắn, vì tin nhắn có thể bị chiếm qua chiêu đổi SIM. Lưu mã dự phòng vào chỗ an toàn ngoài điện thoại, ví dụ ghi ra giấy cất trong tủ.",
      },
      {
        title: "Kiểm tra những gì kẻ chiếm đã sửa",
        detail:
          "Xem lại email và số điện thoại khôi phục — chúng hay thêm email của chúng vào. Xem tin nhắn đã gửi đi, bài đã đăng, nhóm mới bị thêm vào, và các ứng dụng đã cấp quyền truy cập. Gỡ hết những gì bạn không nhận ra.",
      },
      {
        title: "Rà những tài khoản dùng chung mật khẩu",
        detail:
          "Nếu mật khẩu vừa bị lộ cũng đang dùng cho ngân hàng, ví điện tử, sàn mua hàng — đổi hết ngay trong tối nay. Đây là lý do không nên dùng chung một mật khẩu, và giờ là lúc bạn thấy vì sao.",
      },
      {
        title: "Đăng một bài công khai đính chính",
        detail:
          "Lấy lại được thì đăng ngắn gọn: tài khoản vừa bị chiếm trong khoảng thời gian nào, mọi tin nhắn vay tiền gửi đi trong lúc đó đều không phải của bạn. Ghim bài lên đầu trang vài ngày.",
      },
      {
        title: "Nếu có người đã chuyển tiền thì xử lý gấp",
        detail:
          "Bảo họ gọi ngay tổng đài ngân hàng báo chuyển tiền cho tài khoản lừa đảo và ra công an trình báo, mang theo ảnh chụp tin nhắn và biên lai. Càng sớm càng có cơ hội phong toả tài khoản nhận.",
      },
      {
        title: "Trình báo nếu bị mạo danh để lừa nhiều người",
        detail:
          "Ra công an phường nơi bạn ở, mang theo ảnh chụp màn hình các tin nhắn giả danh. Có đơn trình báo thì sau này nếu ai đó bị lừa nặng, họ có cơ sở để làm việc tiếp.",
      },
      {
        title: "Dọn dẹp thói quen để khỏi lặp lại",
        detail:
          "Đừng bấm vào đường link lạ báo trúng thưởng hay báo vi phạm bản quyền. Đừng đăng nhập tài khoản trên máy công cộng. Cài lại điện thoại nếu bạn nghi máy đã dính phần mềm theo dõi.",
      },
    ],
    notes: [
      "Chiêu phổ biến nhất hiện nay là gửi cho bạn một trang đăng nhập giả trông y hệt thật. Trước khi gõ mật khẩu, luôn nhìn kỹ địa chỉ trang — sai một chữ cái là trang giả.",
      "Mọi dịch vụ hứa lấy lại nick trong một giờ với vài trăm nghìn đều là lừa đảo. Nền tảng không có kênh trung gian nào như vậy.",
      "Kẻ chiếm thường nhắm vào người lớn tuổi trong danh sách bạn bè của bạn. Gọi trực tiếp cho bố mẹ, đừng chỉ đăng bài cảnh báo rồi yên tâm.",
      "Sau khi lấy lại, kiểm tra cả những tài khoản mà bạn đăng nhập bằng nút đăng nhập bằng Facebook — chúng cũng nằm trong tầm với của kẻ chiếm.",
    ],
    faq: [
      {
        q: "Không nhớ email gốc thì lấy lại được không?",
        a: "Khó hơn nhưng vẫn có cửa. Các nền tảng thường cho xác minh bằng cách nhận diện bạn bè, gửi ảnh giấy tờ tuỳ thân, hoặc dùng số điện thoại cũ. Cứ làm theo quy trình chính thức và kiên nhẫn, đừng nhờ dịch vụ ngoài.",
      },
      {
        q: "Bao lâu thì lấy lại được tài khoản?",
        a: "Trường hợp nhẹ thì vài phút tới vài giờ. Trường hợp phải xác minh danh tính có thể mất vài ngày tới vài tuần. Trong lúc đó việc quan trọng nhất vẫn là cảnh báo người thân.",
      },
      {
        q: "Có nên lập tài khoản mới không?",
        a: "Nên lập tạm một tài khoản để liên lạc nếu công việc của bạn cần, và báo rõ cho bạn bè đây là tài khoản mới. Nhưng vẫn tiếp tục quy trình đòi lại tài khoản cũ, vì tài khoản cũ nằm trong tay kẻ xấu là còn nguy hiểm cho người khác.",
      },
      {
        q: "Kẻ chiếm đọc hết tin nhắn cũ của tôi thì sao?",
        a: "Coi như mọi thứ trong đó đã lộ. Nếu có ảnh chụp giấy tờ, số tài khoản, mật khẩu từng gửi cho ai đó thì phải xử lý ngay: đổi mật khẩu, báo ngân hàng, và cảnh giác với các cuộc gọi biết rõ thông tin của bạn trong thời gian tới.",
      },
    ],
    sources: [],
  },
  {
    slug: "mua-hang-online-kiem-hang-va-doi-hoan-tien",
    title: "Mua hàng online: kiểm hàng lúc nhận và đòi hoàn tiền khi hàng lỗi",
    excerpt:
      "Hàng về không giống hình, vỡ, thiếu món. Cãi nhau với người bán thường vô ích — cái quyết định là bạn có quay được video lúc mở hộp hay không.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "khac",
    author: null,
    quickAnswer:
      "Trước khi thanh toán cho shipper, hỏi rõ đơn này có được đồng kiểm không. Dù thế nào, hãy quay video liên tục từ lúc gói hàng còn nguyên tem tới lúc mở ra hết — đây là bằng chứng mạnh nhất khi khiếu nại. Hàng sai hoặc lỗi thì mở khiếu nại ngay trong ứng dụng sàn, đừng nhắn riêng cho shop rồi chờ, vì hết thời hạn khiếu nại là sàn không can thiệp được nữa.",
    prepare: [
      "Điện thoại còn pin và còn dung lượng để quay video mở hộp",
      "Ảnh chụp trang sản phẩm lúc bạn đặt, gồm mô tả và giá — shop có thể sửa sau đó",
      "Mã đơn hàng và lịch sử trò chuyện với shop, đừng xoá",
      "Biết trước thời hạn khiếu nại của sàn bạn đang mua, thường tính bằng ngày kể từ khi nhận",
      "Thùng và lớp gói ban đầu, giữ lại tới khi chắc chắn không phải trả hàng",
    ],
    steps: [
      {
        title: "Chọn shop bằng cách đọc đánh giá thật",
        detail:
          "Bỏ qua các đánh giá năm sao một chữ. Đọc đánh giá ba sao và có ảnh người mua tự chụp — đó là nơi sự thật nằm. Shop mới toanh mà giá rẻ bất thường thì cân nhắc, nhất là với hàng điện tử.",
      },
      {
        title: "Chụp màn hình trang sản phẩm trước khi đặt",
        detail:
          "Chụp phần mô tả, thông số, ảnh sản phẩm và giá. Nhiều shop sửa nội dung sau khi bán, lúc khiếu nại bạn không còn gì để chứng minh mình đã được hứa cái gì.",
      },
      {
        title: "Ưu tiên thanh toán qua sàn thay vì chuyển khoản riêng",
        detail:
          "Người bán rủ chuyển khoản thẳng để giảm giá là dấu hiệu xấu: khi có chuyện, sàn không giữ tiền nên không bảo vệ được bạn. Thanh toán qua sàn thì tiền chỉ về shop sau khi bạn xác nhận.",
      },
      {
        title: "Hỏi rõ chính sách đồng kiểm khi đặt",
        detail:
          "Nhắn shop: “Đơn này em được đồng kiểm khi nhận hàng đúng không ạ.” Có câu trả lời bằng văn bản trong khung chat là bạn có căn cứ khi shipper nói không cho xem.",
      },
      {
        title: "Quay video từ lúc gói hàng còn nguyên",
        detail:
          "Bắt đầu quay trước khi cắt băng dính. Quay rõ mã vận đơn, bốn mặt thùng, rồi mở từ từ, không cắt đoạn. Video đứt quãng gần như vô giá trị khi khiếu nại. Đây là mười lăm giây đổi lấy vài trăm nghìn.",
      },
      {
        title: "Kiểm ngay tại chỗ nếu được đồng kiểm",
        detail:
          "Đếm đủ món, xem đúng màu đúng cỡ, thử bật nguồn với hàng điện tử. Sai thì từ chối nhận ngay và ghi rõ lý do với shipper — trả tại chỗ dễ hơn nhiều so với gửi trả sau.",
      },
      {
        title: "Phát hiện lỗi thì chụp ảnh có bối cảnh",
        detail:
          "Chụp món hàng nằm cạnh phiếu giao hàng và thùng gói, để thấy rõ đây đúng là đơn đó. Chụp cận cảnh chỗ lỗi, và chụp thêm một ảnh toàn cảnh. Ba loại ảnh này là bộ chuẩn khi mở khiếu nại.",
      },
      {
        title: "Nhắn shop một lần, lịch sự và có mốc thời gian",
        detail:
          "“Chào shop, em nhận đơn số… hôm nay, hàng bị lỗi như ảnh đính kèm. Em muốn đổi hàng hoặc hoàn tiền, shop phản hồi giúp em trong hôm nay nhé ạ.” Nói rõ mong muốn và hạn trả lời, không kể lể dài dòng.",
      },
      {
        title: "Shop im lặng thì mở khiếu nại trong ứng dụng",
        detail:
          "Đừng chờ quá một ngày. Vào mục đơn hàng, chọn trả hàng hoặc hoàn tiền, tải video và ảnh lên, ghi lý do ngắn gọn theo sự thật. Sàn xử lý dựa trên bằng chứng chứ không dựa trên việc bạn bức xúc tới đâu.",
      },
      {
        title: "Gửi trả đúng hướng dẫn của sàn",
        detail:
          "Dùng đúng mã trả hàng sàn cấp, gói lại đầy đủ phụ kiện, giữ biên lai gửi. Tự ý gửi trả theo địa chỉ shop đưa riêng là mất dấu vết và rất dễ mất luôn cả hàng lẫn tiền.",
      },
      {
        title: "Theo dõi tới khi tiền thật sự về",
        detail:
          "Tiền hoàn thường về ví của sàn trước rồi mới rút được về ngân hàng, mất thêm vài ngày. Đặt nhắc trong điện thoại để kiểm lại, đừng tin là xong khi mới thấy dòng chữ đã duyệt.",
      },
      {
        title: "Nếu sàn xử lý không thoả đáng",
        detail:
          "Khiếu nại lên tổng đài sàn kèm mã đơn, hoặc phản ánh tới cơ quan bảo vệ quyền lợi người tiêu dùng. Với đơn giá trị lớn, việc trình báo là có ý nghĩa; với đơn vài chục nghìn thì cân nhắc thời gian bạn bỏ ra.",
      },
    ],
    notes: [
      "CẢNH BÁO: có kiểu lừa gửi hàng bạn không đặt rồi thu tiền, người nhà ở nhà cứ thế trả. Dặn cả nhà chỉ nhận đơn khi biết rõ ai đặt, và luôn xem tên người nhận trên phiếu.",
      "Đừng bấm vào link tra cứu đơn hàng gửi qua tin nhắn lạ. Muốn tra thì mở thẳng ứng dụng của sàn hoặc hãng vận chuyển.",
      "Thời hạn khiếu nại của mỗi sàn mỗi khác và có thay đổi theo chính sách từng thời điểm — kiểm tra trong ứng dụng ngay khi nhận hàng, đừng để lỡ vì bận.",
      "Với hàng điện tử, giữ hộp và phụ kiện ít nhất hết thời gian đổi trả. Thiếu một sợi cáp cũng đủ để shop từ chối nhận lại.",
    ],
    faq: [
      {
        q: "Shipper không cho mở hàng ra xem thì làm sao?",
        a: "Nhiều đơn vị vận chuyển không cho đồng kiểm theo quy định của shop. Khi đó cứ nhận, nhưng phải quay video mở hộp liên tục — đó vẫn là bằng chứng được các sàn chấp nhận.",
      },
      {
        q: "Đã bấm xác nhận đã nhận hàng rồi mới phát hiện lỗi thì sao?",
        a: "Vẫn khiếu nại được nếu còn trong thời hạn bảo vệ người mua của sàn, nhưng khó hơn vì tiền có thể đã về shop. Vì vậy đừng bấm xác nhận cho tới khi bạn kiểm xong.",
      },
      {
        q: "Mua trên mạng xã hội chứ không qua sàn thì đòi kiểu gì?",
        a: "Không có bên trung gian giữ tiền nên rất khó. Bằng chứng duy nhất của bạn là tin nhắn thoả thuận và biên lai chuyển khoản. Với số tiền lớn thì trình báo công an; bài học rút ra là hạn chế chuyển khoản trước cho người bán lạ.",
      },
      {
        q: "Hàng đúng mô tả nhưng tôi không thích thì trả được không?",
        a: "Tuỳ chính sách từng sàn và từng shop, nhiều nơi cho trả trong một số ngày nhưng bạn chịu phí vận chuyển. Đọc kỹ mục chính sách đổi trả trên trang sản phẩm trước khi đặt.",
      },
    ],
    sources: [],
  },
  {
    slug: "xe-bi-cau-di-lay-lai-va-nop-phat",
    title: "Xe bị cẩu hoặc bị giữ: tìm ở đâu, mang gì đi, mất bao nhiêu",
    excerpt:
      "Quay ra chỗ để xe thì xe biến mất. Trước khi hoảng, hãy kiểm tra khả năng lớn nhất: xe bạn đang nằm trong bãi tạm giữ chứ không phải bị trộm.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "khac",
    author: null,
    quickAnswer:
      "Nhìn quanh xem có biển cấm đỗ, vạch kẻ hay chốt trật tự gần đó không, rồi hỏi ngay bảo vệ và hàng quán xung quanh — họ thường thấy xe bị cẩu đi lúc nào và của đơn vị nào. Gọi hoặc tới công an phường sở tại hỏi bãi tạm giữ. Mang theo căn cước, giấy đăng ký xe, bằng lái và tiền để nộp phạt cùng phí trông giữ. Lấy càng muộn thì phí trông giữ càng cộng dồn theo ngày, nên đi trong ngày là rẻ nhất.",
    prepare: [
      "Giấy đăng ký xe bản gốc hoặc bản đã đăng ký hợp lệ theo hình thức được chấp nhận",
      "Căn cước công dân của chính chủ, hoặc giấy uỷ quyền nếu bạn đi lấy hộ",
      "Bằng lái phù hợp với loại xe — thiếu bằng có thể phát sinh lỗi phạt riêng",
      "Bảo hiểm bắt buộc của xe nếu còn hiệu lực, mang theo cho đủ bộ",
      "Tiền mặt và tài khoản đủ để nộp phạt cùng phí trông giữ theo ngày",
    ],
    steps: [
      {
        title: "Bình tĩnh xác định là bị cẩu hay bị trộm",
        detail:
          "Nhìn quanh chỗ để xe: có biển cấm dừng đỗ, vạch kẻ vàng, hay thông báo dọn dẹp lòng đường không. Xe bị cẩu thường xảy ra ở đúng những nơi đó. Nếu bạn đỗ trong bãi có vé mà xe mất thì khả năng cao là chuyện khác, và phải báo công an ngay.",
      },
      {
        title: "Hỏi người xung quanh trong năm phút",
        detail:
          "Bảo vệ toà nhà, chủ quán nước, người bán hàng vỉa hè là nguồn tin nhanh nhất: “Anh chị ơi, xe em để đây từ sáng giờ không thấy, có phải bị cẩu không ạ, họ cẩu đi lúc nào ạ.” Nhiều nơi còn biết luôn bãi giữ ở đâu.",
      },
      {
        title: "Gọi cho công an phường nơi bạn đỗ xe",
        detail:
          "Đọc biển số, loại xe, màu xe, địa điểm và khoảng thời gian đỗ. Họ sẽ tra và cho biết xe có bị lập biên bản tạm giữ không, và giữ ở bãi nào. Nếu không phải họ xử lý thì đây cũng là lúc bạn nên trình báo mất xe.",
      },
      {
        title: "Ghi lại thông tin bãi giữ và giờ làm việc",
        detail:
          "Hỏi rõ địa chỉ bãi, giờ làm việc, ngày nghỉ, và cần mang những giấy tờ gì. Nhiều bãi nghỉ trưa dài hoặc đóng cửa cuối tuần — đi mà không hỏi trước là mất nguyên buổi.",
      },
      {
        title: "Chuẩn bị đủ giấy tờ trước khi đi",
        detail:
          "Thiếu giấy đăng ký xe là gần như chắc chắn phải quay về. Nếu giấy tờ để trong cốp xe đang bị giữ thì nói rõ ngay khi gọi điện, họ sẽ hướng dẫn cách xử lý riêng.",
      },
      {
        title: "Đi lấy càng sớm càng đỡ tốn",
        detail:
          "Phí trông giữ tính theo ngày và cộng dồn. Để một tuần rồi mới đi là số tiền đội lên đáng kể, đôi khi hơn cả tiền phạt. Ưu tiên đi ngay trong ngày làm việc gần nhất.",
      },
      {
        title: "Ký biên bản vi phạm và nhận quyết định xử phạt",
        detail:
          "Đọc kỹ lỗi ghi trên biên bản trước khi ký. Không đồng ý với lỗi thì ghi rõ ý kiến của mình vào phần dành cho người vi phạm chứ đừng từ chối ký rồi bỏ về — làm vậy chỉ khiến việc lâu hơn.",
      },
      {
        title: "Nộp phạt theo đúng kênh chính thức",
        detail:
          "Nộp qua Cổng dịch vụ công quốc gia, ứng dụng ngân hàng, bưu điện hoặc kho bạc theo hướng dẫn trên quyết định. Giữ biên lai. Không đưa tiền cho bất kỳ ai ngoài quy trình có giấy tờ.",
      },
      {
        title: "Thanh toán phí trông giữ tại bãi",
        detail:
          "Phí này tách riêng với tiền phạt và trả cho đơn vị trông giữ. Hỏi rõ số tiền, số ngày tính phí, và xin phiếu thu. Không có phiếu thu thì đừng trả.",
      },
      {
        title: "Kiểm tra xe kỹ trước khi rời bãi",
        detail:
          "Soi vết xước mới, gương, đèn, biển số, và đồ trong cốp. Có hư hỏng nghi do quá trình cẩu kéo thì lập tức chụp ảnh và có ý kiến ngay tại chỗ với người bàn giao — ra khỏi cổng rồi thì rất khó nói.",
      },
      {
        title: "Rút kinh nghiệm chỗ đỗ",
        detail:
          "Nhớ mặt những đoạn đường hay bị dọn: gần cơ quan nhà nước, trước cửa hàng lớn, đoạn có vạch vàng. Tốn hai chục nghìn gửi bãi vẫn rẻ hơn nhiều so với một lần bị cẩu.",
      },
    ],
    notes: [
      "Mức phạt và phí trông giữ khác nhau theo loại xe, theo lỗi và theo từng địa phương, lại thay đổi theo thời điểm — hỏi trực tiếp nơi giữ xe, đừng tin con số trên các bài viết cũ.",
      "CẨN THẬN: có người giả danh gọi điện báo xe bạn bị giữ và yêu cầu chuyển khoản để giải quyết nhanh. Cơ quan chức năng không thu tiền phạt qua chuyển khoản cá nhân. Cứ tới tận nơi.",
      "Đi lấy hộ người khác thì cần giấy uỷ quyền và giấy tờ của chủ xe, gọi hỏi trước xem nơi đó yêu cầu uỷ quyền có cần công chứng không.",
      "Xe không chính chủ mà chưa sang tên vẫn lấy được, nhưng thủ tục rườm rà hơn nhiều. Đây là lúc bạn thấy giá trị của việc sang tên đầy đủ khi mua xe cũ.",
    ],
    faq: [
      {
        q: "Không tìm thấy xe ở bãi nào cả thì sao?",
        a: "Ra công an phường nơi mất trình báo mất tài sản, mang theo giấy đăng ký xe và căn cước. Trình báo sớm giúp việc tra cứu và ngăn chặn sang tên trái phép thuận lợi hơn.",
      },
      {
        q: "Xe bị giữ lâu ngày, phí trông giữ cao hơn giá trị xe thì làm gì?",
        a: "Vẫn nên tới làm việc trực tiếp để nắm rõ con số thay vì bỏ mặc. Bỏ xe không giải quyết được nghĩa vụ nộp phạt của bạn, và về sau có thể vướng khi làm thủ tục liên quan tới phương tiện.",
      },
      {
        q: "Đồ để trong cốp xe có còn không?",
        a: "Thường thì có, vì xe được niêm phong khi tạm giữ. Nhưng đừng để giấy tờ quan trọng và tiền trong cốp — thói quen này gây rắc rối trong nhiều tình huống chứ không riêng chuyện bị cẩu.",
      },
      {
        q: "Tôi thấy mình bị oan thì khiếu nại thế nào?",
        a: "Ghi ý kiến vào biên bản, giữ ảnh chụp hiện trường nếu bạn có, và làm đơn khiếu nại gửi tới đơn vị ra quyết định xử phạt trong thời hạn ghi trên quyết định. Vẫn nên lấy xe về trước để không phát sinh thêm phí.",
      },
    ],
    sources: [],
  },
  {
    slug: "thue-xe-may-khi-di-du-lich",
    title: "Thuê xe máy khi đi du lịch: kiểm xe, đặt cọc, tránh bị đền oan",
    excerpt:
      "Cùng một chiếc xe, người biết kiểm mười phút thì trả xe nhẹ nhàng, người không biết thì bị đòi tiền vết xước có từ đời nào.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "khac",
    author: null,
    quickAnswer:
      "Chốt giá theo ngày và hỏi rõ có gồm xăng, mũ bảo hiểm, áo mưa không. Trước khi đi, quay một vòng video quanh xe cùng chủ xe, chụp rõ mọi vết xước và đồng hồ xăng. Đừng đặt cọc bằng căn cước bản gốc — đề nghị cọc tiền hoặc bản photo. Thử phanh, còi, đèn và số ngay trong sân trước khi ra đường, đổi xe khác nếu thấy không yên tâm.",
    prepare: [
      "Bằng lái phù hợp loại xe bạn thuê — nhiều người quên rằng xe phân khối lớn hơn cần bằng khác",
      "Tiền mặt để đặt cọc, thay cho việc phải để lại giấy tờ gốc",
      "Điện thoại đủ pin để quay video kiểm xe và chụp hợp đồng",
      "Số điện thoại chủ xe lưu vào máy ngay, kèm địa chỉ chỗ thuê",
      "Mũ bảo hiểm đạt chuẩn — mũ mỏng chỗ thuê cho mượn thường chỉ để đối phó",
    ],
    steps: [
      {
        title: "Chọn nơi thuê có địa chỉ rõ ràng",
        detail:
          "Ưu tiên cửa hàng có mặt bằng, có đánh giá trên bản đồ, hoặc do khách sạn giới thiệu và chịu trách nhiệm. Thuê qua người lạ nhắn tin hẹn giao xe ở góc đường là rủi ro cao nhất.",
      },
      {
        title: "Hỏi giá kèm những gì đi cùng",
        detail:
          "“Anh cho em hỏi giá một ngày là bao nhiêu, đã gồm mũ bảo hiểm và áo mưa chưa, xe giao có sẵn xăng không, và trả xe muộn vài tiếng có tính thêm không ạ.” Hỏi hết một lượt để không cãi nhau lúc trả xe.",
      },
      {
        title: "Kiểm giấy tờ xe trước khi nhận",
        detail:
          "Xem xe có giấy đăng ký hợp lệ và bảo hiểm bắt buộc còn hạn không. Thuê phải xe không giấy tờ là bạn gánh rắc rối nếu bị kiểm tra trên đường.",
      },
      {
        title: "Quay video một vòng quanh xe cùng chủ",
        detail:
          "Đề nghị chủ xe đứng cạnh và quay chậm quanh xe, cận cảnh yếm, gương, đèn, ống xả, và mọi vết xước có sẵn. Nói rõ trong video ngày giờ và biển số. Đây là thứ cứu bạn khỏi tranh cãi khi trả xe.",
      },
      {
        title: "Chụp đồng hồ xăng và số kilômét",
        detail:
          "Giao xe gần cạn xăng mà đòi trả đầy bình là chiêu quen thuộc. Có ảnh thì cứ chiếu ra, khỏi cần to tiếng.",
      },
      {
        title: "Thử xe ngay trong sân",
        detail:
          "Bóp cả hai phanh xem có ăn không, bật xi nhan trái phải, bấm còi, bật đèn, vặn ga nhẹ, kiểm tra lốp có non không. Thấy phanh yếu hay lốp mòn thì đổi xe khác — bạn sắp đi đường lạ, đừng ngại làm phiền.",
      },
      {
        title: "Đọc hợp đồng và gạch bỏ điều khoản vô lý",
        detail:
          "Chú ý các dòng về mức đền khi xước, khi mất xe, khi trả muộn. Điều khoản kiểu mất xe đền theo giá chủ đưa ra thì phải hỏi cho rõ con số ngay từ đầu và ghi vào giấy.",
      },
      {
        title: "Đặt cọc bằng tiền, không đưa căn cước gốc",
        detail:
          "Nói thẳng: “Em gửi anh tiền cọc và bản photo căn cước nhé, giấy gốc em cần mang theo người ạ.” Đưa căn cước gốc là rủi ro lớn: nó có thể bị dùng để cầm cố hoặc mở tài khoản mạo danh.",
      },
      {
        title: "Chụp lại hợp đồng và biên nhận cọc",
        detail:
          "Chụp cả tờ hợp đồng đã ký lẫn tờ giấy ghi nhận số tiền cọc. Lưu vào một thư mục riêng cho chuyến đi để lúc cần tìm ra ngay.",
      },
      {
        title: "Đi đường: đội mũ, không chở quá số người",
        detail:
          "Vùng du lịch thường có chốt kiểm tra, và lỗi không mũ hay chở ba là mất tiền lãng phí nhất chuyến đi. Đường đèo thì đi số thấp khi xuống dốc, đừng rà phanh liên tục.",
      },
      {
        title: "Xe hỏng dọc đường thì gọi chủ trước",
        detail:
          "Gọi báo và hỏi họ muốn xử lý thế nào, tự ý mang vào tiệm sửa lớn có thể bị từ chối thanh toán. Chụp ảnh hiện trạng và giữ hoá đơn sửa chữa nếu bạn phải ứng tiền trước.",
      },
      {
        title: "Trả xe: quay video lần nữa và lấy lại cọc ngay",
        detail:
          "Quay một vòng quanh xe lúc trả, đối chiếu với video lúc nhận nếu có tranh cãi. Nhận lại đủ tiền cọc trước khi rời đi, đừng để chủ xe hẹn chuyển khoản sau.",
      },
    ],
    notes: [
      "CẢNH BÁO: đừng bao giờ để lại căn cước bản gốc hay hộ chiếu làm tin. Đây là nguồn gốc của rất nhiều vụ mạo danh, và bạn không có cách nào biết giấy tờ của mình bị chụp lại hay chưa.",
      "Kiểm tra kỹ mũ bảo hiểm được phát. Mũ nhựa mỏng không có tác dụng bảo vệ; nếu đi đường dài, mua một chiếc mũ tử tế còn rẻ hơn nhiều so với hậu quả một cú ngã.",
      "Giá thuê, mức cọc và cách tính đền bù mỗi nơi mỗi khác và thay đổi theo mùa du lịch — hỏi rõ và ghi vào giấy trước khi nhận xe.",
      "Đi hai xe trở lên theo nhóm thì lưu số nhau và hẹn điểm dừng, đừng phụ thuộc hoàn toàn vào việc chạy theo nhau ở nơi sóng yếu.",
    ],
    faq: [
      {
        q: "Không có bằng lái thì có thuê được không?",
        a: "Nhiều nơi vẫn cho thuê, nhưng điều khiển xe khi không có bằng phù hợp là vi phạm và bạn sẽ chịu toàn bộ hậu quả nếu có chuyện xảy ra, kể cả về bảo hiểm. Không đáng.",
      },
      {
        q: "Chủ xe đòi đền vết xước tôi không gây ra thì làm gì?",
        a: "Mở video lúc nhận xe ra đối chiếu, đây chính là lý do phải quay. Nếu không có video và hai bên không thoả thuận được, có thể nhờ công an phường sở tại làm việc — nhưng thường chỉ cần bạn có bằng chứng là câu chuyện dừng lại.",
      },
      {
        q: "Đặt cọc bao nhiêu là hợp lý?",
        a: "Tuỳ nơi và tuỳ loại xe, thường là một khoản vừa phải chứ không phải bằng giá trị xe. Bị đòi cọc quá cao thì nên tìm chỗ khác, và luôn lấy biên nhận cho số tiền đã đưa.",
      },
      {
        q: "Xe hết xăng giữa đường vùng vắng thì sao?",
        a: "Trước khi đi cung đường vắng, đổ đầy bình và hỏi người địa phương xem đoạn nào không có cây xăng. Nhiều nơi có quán bán xăng chai dọc đường, nhưng đừng trông chờ vào đó khi trời tối.",
      },
    ],
    sources: [],
  },
  {
    slug: "sim-chinh-chu-chuan-hoa-thong-tin-thue-bao",
    title: "SIM chính chủ: kiểm tra, chuẩn hoá và vì sao phải làm ngay",
    excerpt:
      "Số điện thoại của bạn đang gắn với ngân hàng, VNeID, mọi mã OTP. Nếu nó không đứng tên bạn, một ngày nào đó bạn có thể mất trắng quyền kiểm soát.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "khac",
    author: null,
    quickAnswer:
      "Nhắn tin theo cú pháp tra cứu thông tin thuê bao của nhà mạng, hoặc mở ứng dụng của nhà mạng để xem số của bạn đang đứng tên ai. Không phải tên bạn thì mang căn cước ra cửa hàng giao dịch chính thức của nhà mạng để đăng ký lại chính chủ, thường xong trong buổi. Nếu SIM đang đứng tên người khác thì cần người đó đi cùng hoặc uỷ quyền theo hướng dẫn của nhà mạng.",
    prepare: [
      "Căn cước công dân bản gốc, còn hạn",
      "Chiếc điện thoại đang lắp SIM đó, vì nhân viên cần xác thực trên máy",
      "Thông tin người đang đứng tên SIM, nếu không phải bạn",
      "Biết trước cửa hàng giao dịch chính thức gần nhất và giờ mở cửa",
      "Nửa buổi rảnh, tránh giờ nghỉ trưa và cuối tuần đông khách",
    ],
    steps: [
      {
        title: "Kiểm tra số của bạn đang đứng tên ai",
        detail:
          "Mỗi nhà mạng có cú pháp nhắn tin tra cứu thông tin thuê bao riêng, hoặc xem thẳng trong ứng dụng chính thức của nhà mạng. Kết quả trả về tên và số giấy tờ đã đăng ký — chỉ hiện vài ký tự cuối để bảo mật, nhưng đủ để bạn biết có phải mình không.",
      },
      {
        title: "Hiểu vì sao chuyện này quan trọng",
        detail:
          "Số điện thoại là nơi nhận mã OTP ngân hàng, là cái gắn với tài khoản định danh, với ví điện tử. SIM không chính chủ thì khi có tranh chấp, nhà mạng làm việc với người đứng tên chứ không phải với bạn.",
      },
      {
        title: "Xác định trường hợp của mình",
        detail:
          "Ba trường hợp thường gặp: SIM mua từ lâu đăng ký bằng giấy tờ cũ đã hết hạn, SIM mua ngoài đại lý đứng tên người lạ, hoặc SIM do công ty hay người nhà đăng ký. Mỗi trường hợp có cách xử lý hơi khác nhau.",
      },
      {
        title: "Ra đúng cửa hàng giao dịch chính thức",
        detail:
          "Đại lý nhỏ ngoài đường có thể không làm được thủ tục sang tên. Tìm cửa hàng giao dịch chính thức của nhà mạng, gọi trước hỏi: “Em muốn chuẩn hoá thông tin thuê bao sang chính chủ thì cần mang gì ạ.”",
      },
      {
        title: "Mang theo đúng người nếu SIM đứng tên người khác",
        detail:
          "Trường hợp SIM do người thân đứng tên, cách nhanh nhất là hai người cùng ra, mỗi người mang căn cước. Không đi cùng được thì hỏi nhà mạng về mẫu giấy uỷ quyền và yêu cầu công chứng.",
      },
      {
        title: "Làm thủ tục và xác thực sinh trắc",
        detail:
          "Nhân viên sẽ chụp ảnh chân dung và đối chiếu với căn cước, quét thông tin trên thẻ. Ngồi thẳng, bỏ khẩu trang, nhìn vào camera. Bước này nhanh, thường vài phút.",
      },
      {
        title: "Kiểm tra lại ngay sau khi làm xong",
        detail:
          "Nhắn tin tra cứu lại lần nữa trước khi rời cửa hàng, xem tên đã đổi đúng chưa. Đừng tin lời nói suông là xong rồi — mất một phút để chắc chắn.",
      },
      {
        title: "Cập nhật số điện thoại ở những nơi quan trọng",
        detail:
          "Rà lại ngân hàng, ví điện tử, tài khoản định danh, email, mạng xã hội — đảm bảo tất cả đang gắn đúng số này và bạn nhận được tin nhắn. Đây là lúc phát hiện ra tài khoản nào còn gắn số cũ đã bỏ.",
      },
      {
        title: "Bật khoá đổi SIM nếu nhà mạng có",
        detail:
          "Một số nhà mạng cho phép đặt thêm lớp bảo vệ khi cấp lại SIM. Hỏi nhân viên: “Bên mình có dịch vụ nào chống việc người khác xin đổi SIM số của em không ạ.” Đây là lá chắn trước chiêu chiếm SIM để lấy OTP.",
      },
      {
        title: "Chuyển dần sang xác thực bằng ứng dụng",
        detail:
          "Với các tài khoản quan trọng, dùng ứng dụng sinh mã thay vì nhận mã qua tin nhắn. Kể cả khi ai đó chiếm được SIM của bạn, họ vẫn không vào được.",
      },
      {
        title: "Đừng bỏ số cũ một cách bừa bãi",
        detail:
          "Số bị thu hồi có thể được cấp lại cho người khác sau một thời gian, và người đó sẽ nhận được mã OTP của những tài khoản bạn quên gỡ. Trước khi bỏ số, gỡ nó khỏi mọi dịch vụ.",
      },
    ],
    notes: [
      "CẢNH BÁO LỪA ĐẢO: có kẻ gọi điện tự xưng nhà mạng, báo SIM của bạn sắp bị khoá và yêu cầu bấm theo cú pháp lạ hoặc đọc mã xác thực. Bấm theo là bạn tự chuyển cuộc gọi hoặc chuyển quyền SIM cho chúng. Nhà mạng không yêu cầu như vậy qua điện thoại.",
      "Không bao giờ đọc mã OTP cho ai, kể cả người xưng là nhân viên nhà mạng hay ngân hàng. Không có tình huống hợp pháp nào cần bạn đọc mã đó cho người khác.",
      "Quy định về chuẩn hoá thông tin thuê bao và các đợt rà soát thay đổi theo từng thời điểm — kiểm tra trên trang chính thức của nhà mạng hoặc hỏi tổng đài, đừng làm theo tin nhắn lan truyền.",
      "SIM đang dùng cho tài khoản ngân hàng mà bị khoá vì thông tin không hợp lệ sẽ kéo theo hàng loạt rắc rối. Làm sớm khi rảnh vẫn hơn là xử lý lúc gấp.",
    ],
    faq: [
      {
        q: "SIM đứng tên người thân đã mất thì làm sao?",
        a: "Ra cửa hàng giao dịch chính thức trình bày rõ, mang theo căn cước của bạn và giấy tờ chứng minh quan hệ cùng giấy chứng tử. Mỗi nhà mạng có quy trình riêng cho trường hợp này, nên gọi hỏi trước để chuẩn bị đủ.",
      },
      {
        q: "Làm chính chủ có mất phí không?",
        a: "Thủ tục chuẩn hoá thông tin thường không tốn phí hoặc chỉ tốn một khoản nhỏ tuỳ trường hợp. Ai đó đòi bạn trả tiền cao để làm nhanh thì đó là dấu hiệu không ổn.",
      },
      {
        q: "Tôi có nhiều SIM thì phải làm hết không?",
        a: "Nên làm cho những số bạn thật sự dùng, đặc biệt là số gắn với ngân hàng và tài khoản định danh. Các số phụ ít dùng thì cân nhắc bỏ hẳn thay vì giữ mà không quản lý được.",
      },
      {
        q: "Trẻ em dùng SIM thì đăng ký tên ai?",
        a: "Thường đăng ký theo tên cha mẹ hoặc người giám hộ. Đây cũng là cách để bạn kiểm soát được số của con, gồm cả việc nhận thông báo và xử lý khi con làm mất máy.",
      },
    ],
    sources: [],
  },
  {
    slug: "tre-hoc-di-vat-va-sac-phong-ngua-va-xu-tri",
    title: "Trẻ hóc dị vật: phòng trước, và làm gì trong phút đầu tiên",
    excerpt:
      "Hóc dị vật xảy ra trong im lặng — trẻ không kêu được. Đọc trước một lần để nếu ngày nào đó gặp, bạn không đứng chết trân.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Trẻ còn ho được, còn khóc được thì đường thở chưa tắc hẳn — khuyến khích con ho, không móc tay vào miệng, và đưa đi khám ngay. Trẻ không ho được, không kêu được, mặt tím tái, ôm cổ là tắc nghẽn hoàn toàn: gọi cấp cứu 115 ngay lập tức và bắt đầu sơ cứu trong lúc chờ. Đây là tình huống tính bằng giây, nên việc quan trọng nhất bạn làm được hôm nay là phòng ngừa và đi học một buổi sơ cứu thực hành.",
    prepare: [
      "Số cấp cứu 115 và số bệnh viện gần nhà, lưu sẵn và dán lên tủ lạnh",
      "Một buổi học sơ cứu có thực hành — đọc chữ không thay được việc tập bằng tay",
      "Danh sách những món trong nhà cần cất khỏi tầm tay trẻ dưới ba tuổi",
      "Ghế ăn có đai an toàn, để con ngồi yên khi ăn thay vì vừa chạy vừa nhai",
      "Người lớn trong nhà, gồm cả ông bà và người giúp việc, cùng biết những nguyên tắc này",
    ],
    steps: [
      {
        title: "Biết trước những thứ hay gây hóc nhất",
        detail:
          "Hạt tròn cứng, nho nguyên quả, xúc xích cắt khoanh dày, kẹo cứng, thạch rau câu, bỏng ngô, cà rốt sống. Đồ chơi nhỏ, pin cúc áo, nắp bút, đồng xu. Ghi nhớ danh sách này còn hữu ích hơn mọi kỹ thuật sơ cứu.",
      },
      {
        title: "Cắt nhỏ và làm mềm thức ăn cho trẻ dưới bốn tuổi",
        detail:
          "Nho và cà chua bi cắt dọc làm tư, xúc xích cắt dọc rồi mới cắt khúc, tránh để miếng tròn vừa khít đường thở. Trẻ nhỏ chưa có đủ răng hàm để nghiền, đây không phải chuyện cẩn thận thái quá.",
      },
      {
        title: "Bắt buộc ngồi yên khi ăn",
        detail:
          "Không cho con vừa chạy vừa ăn, không đút khi con đang cười, đang khóc hay đang nằm. Không dọa hay ép ăn khiến trẻ khóc rồi hít vào — rất nhiều ca hóc xảy ra đúng lúc đó.",
      },
      {
        title: "Cất kỹ pin cúc áo và nam châm nhỏ",
        detail:
          "Pin cúc áo nuốt phải có thể gây tổn thương nghiêm trọng rất nhanh, kể cả khi trẻ vẫn thở bình thường. Nghi ngờ con nuốt pin thì đưa đi viện NGAY, không chờ theo dõi ở nhà.",
      },
      {
        title: "Nhận biết dấu hiệu tắc nghẽn hoàn toàn",
        detail:
          "Trẻ đột ngột im bặt khi đang ăn hoặc đang chơi, hai tay ôm cổ, mặt đỏ rồi chuyển tím, không ho ra tiếng, không khóc được. Khác hẳn với ho sặc sụa ầm ĩ. Im lặng mới là dấu hiệu nguy hiểm.",
      },
      {
        title: "Gọi 115 trước hoặc nhờ người khác gọi",
        detail:
          "Có người bên cạnh thì hét lên: “Gọi 115 ngay, con hóc rồi.” Chỉ có một mình thì bật loa ngoài rồi vừa gọi vừa sơ cứu. Đừng bỏ hết để bế con chạy ra xe khi chưa ai gọi.",
      },
      {
        title: "Trẻ còn ho được thì để con ho",
        detail:
          "Ho là cơ chế tống dị vật hiệu quả nhất. Đứng cạnh trấn an, khuyến khích con ho mạnh. TUYỆT ĐỐI không đưa tay móc họng con khi không nhìn thấy rõ dị vật — thao tác đó thường đẩy dị vật vào sâu hơn.",
      },
      {
        title: "Tắc nghẽn hoàn toàn: sơ cứu ngay trong lúc chờ",
        detail:
          "Với trẻ nhỏ, kỹ thuật cơ bản là vỗ lưng giữa hai bả vai kết hợp ép ngực hoặc ép bụng tuỳ độ tuổi, với tư thế đầu thấp hơn thân. Kỹ thuật này phải được học bằng tay chứ không phải bằng chữ — đây chính là lý do bạn nên đăng ký một buổi thực hành sơ cứu trước khi cần tới nó.",
      },
      {
        title: "Không dốc ngược và rung lắc",
        detail:
          "Xách ngược chân trẻ dốc xuống rồi lắc là cách nhiều người vẫn làm theo lời truyền miệng, nhưng có thể gây chấn thương và làm mất thời gian vàng. Cũng không vuốt ngực, không cho uống nước, không cho ăn cơm để trôi dị vật.",
      },
      {
        title: "Vẫn phải đi viện kể cả khi con đã hết ho",
        detail:
          "Dị vật ra được rồi vẫn cần bác sĩ kiểm tra, vì mảnh nhỏ có thể còn sót trong đường thở và gây viêm phổi vài ngày sau. Nói rõ với bác sĩ con hóc thứ gì, lúc mấy giờ, kéo dài bao lâu.",
      },
      {
        title: "Đi học sơ cứu thật, một buổi thôi",
        detail:
          "Nhiều bệnh viện nhi và tổ chức chữ thập đỏ có lớp sơ cứu cho cha mẹ, thực hành trên mô hình. Rủ luôn ông bà và người trông trẻ đi cùng. Đây là việc cụ thể nhất bạn làm được sau khi đọc bài này.",
      },
      {
        title: "Rà lại nhà một lượt tối nay",
        detail:
          "Bò xuống ngang tầm mắt con và nhìn quanh phòng: cái gì lọt vừa lõi giấy vệ sinh là lọt vừa miệng trẻ. Nhặt hết những thứ đó lên cao. Mất mười lăm phút, nhưng giải quyết được phần lớn rủi ro.",
      },
    ],
    notes: [
      "DẤU HIỆU PHẢI ĐƯA ĐI VIỆN NGAY hoặc gọi 115: trẻ KHÔNG THỞ ĐƯỢC, không khóc được, không ho ra tiếng; MÔI HOẶC MẶT TÍM TÁI; LỊM ĐI, GỌI KHÔNG PHẢN ỨNG; thở rít, khò khè kéo dài sau khi bị sặc; NGHI NUỐT PIN CÚC ÁO, NAM CHÂM hoặc VẬT SẮC NHỌN; ho dai dẳng hoặc sốt trong vài ngày sau một lần bị sặc.",
      "Đây không phải tư vấn y khoa. Bài viết giúp bạn nhận biết và chuẩn bị trước, không thay thế việc học sơ cứu có thực hành và không thay thế bác sĩ.",
      "Trẻ dưới ba tuổi là nhóm nguy cơ cao nhất, nhưng trẻ lớn vẫn hóc — thường do vừa ăn vừa đùa. Nguyên tắc ngồi yên khi ăn áp dụng cho cả nhà.",
      "Dặn rõ ông bà và người trông trẻ đừng cho trẻ nhỏ ăn hạt, thạch, kẹo cứng. Nói trước một lần, nhẹ nhàng nhưng dứt khoát, còn hơn để xảy ra chuyện rồi trách nhau.",
    ],
    faq: [
      {
        q: "Con ho sặc sụa vài giây rồi hết, có cần đi khám không?",
        a: "Nếu sau đó con chơi bình thường, thở đều, không ho thêm thì thường theo dõi tại nhà là được. Nhưng nếu con ho dai dẳng, thở khò khè, hoặc sốt trong những ngày sau, hãy đưa đi khám và kể rõ chuyện bị sặc.",
      },
      {
        q: "Có nên vỗ lưng cho mọi trường hợp không?",
        a: "Không. Khi trẻ vẫn ho được và khóc được thì việc cần làm là để con tự ho và đưa đi khám. Các thao tác sơ cứu chỉ dành cho tình huống trẻ không thở được, và nên được học thực hành trước.",
      },
      {
        q: "Con nuốt phải đồng xu nhưng vẫn chơi bình thường thì sao?",
        a: "Vẫn cần đưa đi khám để bác sĩ xác định vật đang ở đâu, kể cả khi trẻ không có biểu hiện gì. Riêng pin cúc áo và nam châm là trường hợp phải đi ngay lập tức, không chờ đợi.",
      },
      {
        q: "Học sơ cứu ở đâu?",
        a: "Hỏi bệnh viện nhi tại địa phương, hội chữ thập đỏ, hoặc trường mầm non của con — nhiều trường có tổ chức buổi hướng dẫn cho phụ huynh. Chọn lớp có thực hành trên mô hình, đừng chỉ xem video.",
      },
    ],
    sources: [],
  },
  {
    slug: "lam-ho-chieu-cho-con",
    title: "Làm hộ chiếu cho con: giấy tờ, ảnh, và những chỗ hay bị trả hồ sơ",
    excerpt:
      "Hộ chiếu cho trẻ không giống của người lớn: khác về thời hạn, khác về ảnh, và khác ở chỗ ai được ký thay con.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Trẻ em làm hộ chiếu riêng theo hồ sơ do cha mẹ hoặc người giám hộ đứng ra khai và ký thay. Chuẩn bị giấy khai sinh, căn cước của cha mẹ, ảnh đúng chuẩn nền trắng, và tờ khai theo mẫu có xác nhận nếu thuộc diện phải xác nhận. Có thể nộp trực tuyến qua cổng dịch vụ công rồi tới cơ quan quản lý xuất nhập cảnh để hoàn tất. Hộ chiếu cấp cho trẻ nhỏ có thời hạn ngắn hơn của người lớn, nên đừng ngạc nhiên khi thấy hạn chỉ vài năm.",
    prepare: [
      "Giấy khai sinh của con, bản gốc và một bản sao",
      "Căn cước công dân của cha hoặc mẹ đứng ra làm hồ sơ, còn hạn",
      "Ảnh của con đúng chuẩn hộ chiếu, nền trắng, chụp gần đây",
      "Tài khoản định danh VNeID của cha mẹ, nếu nộp hồ sơ trực tuyến",
      "Tiền lệ phí và một buổi rảnh, tránh đợt cao điểm trước kỳ nghỉ hè",
    ],
    steps: [
      {
        title: "Gọi hỏi cơ quan xuất nhập cảnh trước một cuộc",
        detail:
          "Hỏi: “Em muốn làm hộ chiếu cho con nhỏ thì cần mang những giấy tờ gì, nộp trực tuyến trước được không ạ.” Yêu cầu về giấy tờ có thay đổi theo thời điểm và có khác nhau giữa các nơi, hỏi một cuộc đỡ đi hai lần.",
      },
      {
        title: "Chuẩn bị giấy khai sinh cho chuẩn",
        detail:
          "Mang bản gốc để đối chiếu và bản sao để nộp. Tên con trên giấy khai sinh phải trùng khớp tuyệt đối với tên khai trong hồ sơ, kể cả dấu. Sai một dấu là hồ sơ bị trả.",
      },
      {
        title: "Chụp ảnh đúng chuẩn — chỗ hay hỏng nhất",
        detail:
          "Nền trắng, mặt nhìn thẳng, không đội mũ, không che tóc lên trán, hai tai lộ rõ, không cười hở răng. Với em bé, ra tiệm ảnh nói rõ là chụp hộ chiếu cho trẻ — họ có cách đặt bé nằm trên nền trắng. Ảnh chụp bằng điện thoại ở nhà rất hay bị loại.",
      },
      {
        title: "Điền tờ khai theo mẫu",
        detail:
          "Cha mẹ khai và ký thay con. Điền thông tin con theo giấy khai sinh, thông tin cha mẹ theo căn cước. Chữ viết rõ ràng, không tẩy xoá — tờ khai bị gạch xoá thường phải viết lại từ đầu.",
      },
      {
        title: "Nộp trực tuyến trước nếu nơi bạn ở có hỗ trợ",
        detail:
          "Vào Cổng dịch vụ công và tìm dịch vụ cấp hộ chiếu phổ thông, đăng nhập bằng VNeID của cha mẹ. Khai trước rồi tới nộp bản giấy sẽ nhanh hơn nhiều so với ngồi khai tại chỗ giữa lúc đông người.",
      },
      {
        title: "Đưa con đi cùng khi nộp hồ sơ",
        detail:
          "Nhiều nơi yêu cầu có mặt trẻ để đối chiếu. Chọn khung giờ con tỉnh táo, mang theo nước và đồ ăn nhẹ, vì chờ đợi với trẻ nhỏ là phần mệt nhất của cả thủ tục.",
      },
      {
        title: "Trường hợp cha mẹ ly hôn hoặc chỉ một người đi làm",
        detail:
          "Hỏi rõ nơi tiếp nhận xem có cần văn bản đồng ý của người còn lại hay giấy tờ về quyền nuôi con không. Đây là điểm hay vướng nhất, nên gọi hỏi trước thay vì tới nơi mới biết.",
      },
      {
        title: "Đóng lệ phí và giữ biên lai",
        detail:
          "Hỏi rõ số tiền và cách nộp. Mức lệ phí thay đổi theo quy định từng thời kỳ và khác nhau giữa cấp thường và cấp nhanh. Giữ biên lai cùng giấy hẹn trong một túi hồ sơ.",
      },
      {
        title: "Đăng ký nhận kết quả qua bưu điện",
        detail:
          "Bước nhỏ mà tiết kiệm cả buổi đi lại. Ghi địa chỉ nơi bạn thật sự đang ở và số điện thoại luôn nghe được.",
      },
      {
        title: "Nhận hộ chiếu và soi từng dòng",
        detail:
          "Kiểm tra họ tên, ngày sinh, giới tính, số hộ chiếu và ngày hết hạn. Phát hiện sai thì báo lại ngay trong lúc còn ở quầy hoặc liên hệ sớm nhất có thể — sai sót phát hiện muộn xử lý rất phiền.",
      },
      {
        title: "Chụp lưu và cất kỹ",
        detail:
          "Chụp trang thông tin lưu trong máy và gửi vào email của chính mình. Khi đi nước ngoài mà mất hộ chiếu, có ảnh này thì việc xin giấy tờ thay thế nhanh hơn hẳn.",
      },
      {
        title: "Đặt nhắc trước ngày hết hạn sáu tháng",
        detail:
          "Hộ chiếu trẻ em hạn ngắn, và nhiều nước yêu cầu hộ chiếu còn hạn tối thiểu sáu tháng khi nhập cảnh. Đặt lịch nhắc trong điện thoại ngay hôm nhận, đừng tin vào trí nhớ.",
      },
    ],
    notes: [
      "Thời hạn hộ chiếu cấp cho trẻ nhỏ ngắn hơn của người lớn, và quy định cụ thể có thay đổi theo từng thời kỳ — hỏi cơ quan xuất nhập cảnh để biết con bạn thuộc diện nào.",
      "Đi du lịch nước ngoài còn cần visa của nước đến và đôi khi cần giấy tờ chứng minh quan hệ cha con, mẹ con khi chỉ một người đưa trẻ đi. Tìm hiểu yêu cầu của nước đến từ sớm.",
      "Đừng nhờ dịch vụ trôi nổi hứa làm nhanh trên mạng. Thủ tục này cha mẹ tự làm được, và đưa giấy khai sinh cùng căn cước cho người lạ là rủi ro không đáng có.",
      "Ảnh bị loại là lý do trả hồ sơ phổ biến nhất. Ra tiệm ảnh có kinh nghiệm chụp hộ chiếu cho trẻ, tốn thêm chút tiền nhưng chắc chắn.",
    ],
    faq: [
      {
        q: "Trẻ sơ sinh làm hộ chiếu được không?",
        a: "Được, trẻ ở mọi độ tuổi đều có thể được cấp hộ chiếu riêng, do cha mẹ hoặc người giám hộ khai và ký thay. Phần khó nhất thường chỉ là chụp được tấm ảnh đạt chuẩn.",
      },
      {
        q: "Ông bà đưa cháu đi làm hộ chiếu được không?",
        a: "Thường phải là cha mẹ hoặc người giám hộ hợp pháp đứng tên hồ sơ. Trường hợp đặc biệt cần giấy tờ chứng minh quyền giám hộ — gọi hỏi cơ quan tiếp nhận trước khi đi.",
      },
      {
        q: "Bao lâu thì có hộ chiếu?",
        a: "Tuỳ nơi và tuỳ thời điểm, thường tính bằng tuần với hồ sơ nộp theo diện thông thường. Sát kỳ nghỉ hè là lúc đông nhất, nên làm sớm trước chuyến đi ít nhất vài tháng.",
      },
      {
        q: "Con đổi tên hoặc thông tin thay đổi thì sao?",
        a: "Phải làm lại hộ chiếu theo thông tin mới, mang theo giấy tờ chứng minh việc thay đổi đã được ghi nhận hợp lệ. Đừng đi du lịch với hộ chiếu ghi tên khác giấy khai sinh hiện tại.",
      },
    ],
    sources: [],
  },
  {
    slug: "con-di-lac-o-noi-dong-nguoi",
    title: "Con đi lạc ở nơi đông người: dạy con trước và xử lý khi xảy ra",
    excerpt:
      "Trẻ lạc thường chỉ cách bố mẹ vài chục mét. Vấn đề là bé không biết phải làm gì, còn bố mẹ thì mất bình tĩnh.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Dạy con một quy tắc duy nhất, dễ nhớ: lạc thì đứng yên tại chỗ và tìm người mặc đồng phục để nhờ giúp. Trước khi vào nơi đông người, chụp một tấm ảnh con hôm đó và chỉ cho con điểm hẹn. Khi con lạc, hãy hô to tên và mô tả con thật rõ ràng cho người xung quanh, đồng thời báo ngay cho bảo vệ hoặc quầy thông tin để họ phát thông báo và kiểm soát lối ra.",
    prepare: [
      "Một tấm ảnh chụp con ngay hôm đó, thấy rõ mặt và bộ quần áo đang mặc",
      "Vòng tay hoặc thẻ ghi số điện thoại của bố mẹ, đeo cho trẻ nhỏ chưa nhớ được số",
      "Một câu quy tắc ngắn đã tập với con vài lần ở nhà",
      "Điểm hẹn cụ thể được chỉ tận nơi ngay khi vừa vào khu vực đông người",
      "Điện thoại đủ pin và đã lưu số của người đi cùng",
    ],
    steps: [
      {
        title: "Chụp một tấm ảnh con trước khi vào",
        detail:
          "Chụp ngay ở cổng, thấy rõ mặt và trang phục hôm nay. Khi cần mô tả cho bảo vệ, đưa ảnh ra nhanh hơn và chính xác hơn nhiều so với việc bạn cố nhớ con mặc áo màu gì trong lúc hoảng.",
      },
      {
        title: "Dạy con quy tắc đứng yên",
        detail:
          "Nói với con bằng ngôn ngữ của trẻ: “Nếu con không thấy mẹ, con đứng yên tại chỗ đó, đừng đi tìm mẹ. Mẹ sẽ quay lại đúng chỗ đó tìm con.” Trẻ chạy đi tìm bố mẹ là lý do khiến khoảng cách xa dần.",
      },
      {
        title: "Dạy con nhận ra ai là người nên nhờ",
        detail:
          "Ưu tiên người mặc đồng phục: bảo vệ, nhân viên siêu thị, người bán hàng đứng sau quầy. Nếu không thấy ai, nhờ một người phụ nữ đang đi cùng trẻ con. Dạy con câu cụ thể: “Con bị lạc mẹ, cô giúp con gọi mẹ với ạ.”",
      },
      {
        title: "Tập cho con thuộc số điện thoại",
        detail:
          "Biến số điện thoại thành một bài hát hoặc câu vè, tập vài phút mỗi tối. Trẻ chưa thuộc thì đeo vòng tay có ghi số, hoặc viết số vào mặt trong cánh tay bằng bút không phai trước khi đi chơi.",
      },
      {
        title: "Chỉ điểm hẹn ngay khi vừa vào",
        detail:
          "Chọn một chỗ dễ thấy và cố định: quầy thông tin, cổng chính, cây thông lớn ở sảnh. Dắt con tới tận nơi, chỉ tay và nói: “Đây là chỗ mình gặp nhau nếu lạc.” Nói suông ở nhà thì con không hình dung được.",
      },
      {
        title: "Cho con mặc màu nổi và dễ nhận",
        detail:
          "Áo màu sáng, hoặc chi tiết dễ mô tả. Trong biển người, câu “bé gái áo vàng có mũ đỏ” hiệu quả hơn nhiều so với “bé gái tóc ngắn”.",
      },
      {
        title: "Khi con lạc: hô to tên con và mô tả",
        detail:
          "Đừng lặng lẽ chạy vòng quanh. Hô to tên con và nói rõ với những người xung quanh: “Cháu nhà tôi bốn tuổi, áo vàng, quần bò, vừa đứng đây thôi.” Nhiều người cùng nhìn thì cơ hội tìm thấy tăng lên rất nhiều.",
      },
      {
        title: "Báo ngay cho bảo vệ hoặc quầy thông tin",
        detail:
          "Đây là việc cần làm trong hai phút đầu, đừng chờ tìm một lúc rồi mới báo. Họ có loa phát thanh, có camera, và có thể kiểm soát các lối ra. Đưa luôn tấm ảnh bạn đã chụp.",
      },
      {
        title: "Cử người ở lại chỗ cũ",
        detail:
          "Nếu đi từ hai người lớn trở lên, một người phải đứng nguyên tại nơi con lạc, vì đó là chỗ con được dạy quay lại. Người còn lại đi tìm theo hướng dẫn của bảo vệ.",
      },
      {
        title: "Tìm ở tầm thấp và những nơi trẻ thích",
        detail:
          "Trẻ nhỏ khuất sau giá hàng, gầm bàn, quầy đồ chơi, khu vực có màn hình hoạt hình. Cúi xuống mà nhìn — tầm mắt người lớn hay bỏ sót đúng những chỗ đó.",
      },
      {
        title: "Quá mười lăm phút chưa thấy thì báo công an",
        detail:
          "Gọi 113 hoặc tới công an gần nhất, cung cấp ảnh và mô tả. Đừng ngại làm to chuyện — báo sớm luôn tốt hơn, và không ai trách bạn nếu sau đó tìm thấy con ở quầy kem.",
      },
      {
        title: "Khi tìm được, ôm con trước đã",
        detail:
          "Đừng mắng ngay cả khi bạn vừa trải qua mười phút kinh hoàng. Trẻ bị mắng sau khi lạc sẽ học được rằng lạc là chuyện đáng giấu, và lần sau bé sẽ trốn thay vì nhờ giúp. Khen con vì đã đứng yên, rồi nhắc lại quy tắc nhẹ nhàng.",
      },
    ],
    notes: [
      "Đừng viết tên con to lên áo, cặp hay bình nước ở nơi ai cũng nhìn thấy. Người lạ gọi đúng tên khiến trẻ tin tưởng ngay. Ghi số điện thoại ở mặt trong quần áo hoặc trong vòng tay thì an toàn hơn.",
      "Phần lớn trường hợp trẻ đi lạc là do bé mải nhìn thứ gì đó rồi rẽ nhầm hướng, và kết thúc trong vòng vài phút. Giữ bình tĩnh giúp bạn mô tả rõ ràng và tìm nhanh hơn.",
      "Dạy con rằng người lớn tử tế không bao giờ nhờ trẻ con giúp tìm chó lạc hay dẫn đường. Nếu có ai nhờ như vậy, con nên đi tìm người mặc đồng phục ngay.",
      "Tập thử một lần ở siêu thị: hỏi con “nếu bây giờ con không thấy mẹ thì con làm gì” và nghe con trả lời. Tập một lần đáng giá hơn dặn mười lần.",
    ],
    faq: [
      {
        q: "Nên cho con đeo thiết bị định vị không?",
        a: "Đồng hồ định vị có ích với trẻ lớn hơn, nhưng đừng để nó thay thế việc dạy quy tắc. Pin hết, sóng yếu, máy rơi — lúc đó cái cứu con vẫn là việc bé biết đứng yên và biết nhờ ai.",
      },
      {
        q: "Con quá nhỏ, chưa nói được thì làm sao?",
        a: "Với trẻ chưa nói rõ, biện pháp chính là phòng ngừa: đeo vòng ghi số điện thoại, mặc màu nổi, và luôn giữ trong tầm tay ở nơi đông người. Địu hoặc xe đẩy vẫn an toàn hơn nắm tay khi đám đông chen lấn.",
      },
      {
        q: "Có nên dạy con sợ người lạ không?",
        a: "Không nên dạy sợ tất cả người lạ, vì khi lạc thì chính người lạ là người giúp con. Hãy dạy cụ thể ai nên nhờ — người mặc đồng phục, người đứng sau quầy — và điều gì thì không bao giờ làm, như đi theo ai đó tới chỗ khác.",
      },
      {
        q: "Đi chơi công viên nước hay bãi biển thì khác gì?",
        a: "Rủi ro cao hơn nhiều vì có thêm yếu tố nước và vì trẻ mặc đồ bơi trông giống nhau. Cho con mặc áo phao màu nổi, quy định rõ ranh giới được chơi, và luôn có một người lớn chỉ làm mỗi việc là nhìn trẻ.",
      },
    ],
    sources: [],
  },
  {
    slug: "an-toan-trong-nha-cho-tre-nho",
    title: "Đi một vòng nhà để chống tai nạn cho trẻ nhỏ",
    excerpt:
      "Bỏng, ngã, điện giật, đuối nước — phần lớn tai nạn của trẻ dưới năm tuổi xảy ra ngay trong nhà, vào lúc người lớn chỉ quay đi một phút.",
    publishedAt: NGAY,
    readTimeMinutes: 4,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Dành một buổi tối bò quanh nhà ở tầm mắt của con và xử lý theo bốn nhóm: nóng, cao, điện, nước. Cất phích nước và bật lửa lên cao, chặn cầu thang và ban công, bịt ổ điện, và không bao giờ để trẻ một mình gần bất kỳ vật chứa nước nào, kể cả xô lau nhà. Cố định tủ kệ vào tường — trẻ leo trèo làm đổ tủ là tai nạn ít người nghĩ tới nhưng rất nặng.",
    prepare: [
      "Nút bịt ổ điện, chốt an toàn cho tủ, miếng bọc góc bàn — mua ở cửa hàng đồ trẻ em hoặc trên mạng",
      "Vài chiếc đai hoặc giá cố định tủ kệ vào tường",
      "Một cửa chắn cầu thang nếu nhà có tầng",
      "Hộp có khoá để cất thuốc và hoá chất tẩy rửa",
      "Số cấp cứu 115 và bệnh viện gần nhất dán lên tủ lạnh",
    ],
    steps: [
      {
        title: "Bò một vòng quanh nhà ở tầm mắt con",
        detail:
          "Nghe buồn cười nhưng đây là bước hiệu quả nhất. Ở độ cao đó bạn sẽ thấy dây điện thò ra, ổ cắm hở, chân bàn kính, cái xô nước sau cánh cửa — những thứ đứng thẳng không bao giờ nhìn thấy.",
      },
      {
        title: "Nhóm nóng: phích nước, bếp, ấm siêu tốc",
        detail:
          "Phích nước và ấm điện đặt sát tường, dây điện không thõng xuống mép bàn cho trẻ kéo. Quay cán xoong vào phía trong khi nấu. Không bế con khi đang bưng đồ nóng, và không để bát canh nóng ở mép bàn có khăn trải bàn thò xuống.",
      },
      {
        title: "Nhóm cao: cầu thang, ban công, cửa sổ",
        detail:
          "Lắp cửa chắn ở cả đầu và chân cầu thang. Ban công và cửa sổ phải có lưới hoặc song chắn, khoảng cách giữa các song đủ hẹp. Quan trọng: không kê ghế, thùng, chậu cây gần lan can — trẻ leo lên đó là vượt qua mọi rào chắn.",
      },
      {
        title: "Cố định tủ kệ vào tường",
        detail:
          "Tủ quần áo, kệ tivi, giá sách đều có thể đổ khi trẻ kéo ngăn ra rồi đu lên. Dùng đai cố định vào tường, mất mười phút mỗi cái. Tivi đặt trên tủ thấp thì bắt giá treo lên tường thay vì để đứng.",
      },
      {
        title: "Nhóm điện: ổ cắm, dây, thiết bị sạc",
        detail:
          "Bịt các ổ cắm trong tầm với. Không để dây sạc cắm sẵn thõng xuống sàn, trẻ ngậm đầu dây sạc là tình huống có thật. Ổ cắm ở nơi ẩm như nhà tắm cần đặc biệt chú ý.",
      },
      {
        title: "Nhóm nước: mọi vật chứa nước đều nguy hiểm",
        detail:
          "Trẻ nhỏ có thể đuối trong lượng nước rất ít. Đổ hết xô chậu ngay sau khi dùng, đóng nắp bồn cầu, không để chậu nước tắm đầy trong nhà tắm. TUYỆT ĐỐI không rời trẻ dù chỉ một phút khi con đang trong bồn tắm, kể cả để đi lấy khăn.",
      },
      {
        title: "Cất thuốc và hoá chất vào chỗ có khoá",
        detail:
          "Không để thuốc trong túi xách vứt trên ghế sofa, không để nước rửa chén hay nước tẩy dưới bồn rửa. Đặc biệt không bao giờ chiết hoá chất sang chai nước ngọt — đây là nguyên nhân của rất nhiều ca ngộ độc ở trẻ.",
      },
      {
        title: "Bọc góc nhọn và chú ý đồ thuỷ tinh",
        detail:
          "Bàn kính, góc bàn trà, cạnh tủ ngang tầm đầu con — bọc lại bằng miếng silicon. Trẻ tập đi ngã liên tục, và cùng một cú ngã, va vào góc nhọn khác hẳn ngã xuống sàn.",
      },
      {
        title: "Rà đồ chơi và vật nhỏ",
        detail:
          "Bất cứ thứ gì lọt vừa lõi giấy vệ sinh đều lọt vừa miệng trẻ dưới ba tuổi. Kiểm tra đồ chơi có chi tiết rời, pin cúc áo trong điều khiển và đồ chơi phát nhạc — ngăn pin phải có ốc vặn.",
      },
      {
        title: "Chú ý dây rèm và dây điện thõng",
        detail:
          "Dây kéo rèm cửa tạo thành vòng là nguy cơ siết cổ. Buộc gọn lên cao hoặc cắt bỏ vòng dây. Cũng gom gọn dây quạt, dây đèn để trẻ không kéo đổ.",
      },
      {
        title: "Dặn cả nhà cùng một quy tắc",
        detail:
          "An toàn hỏng ở chỗ mỗi người làm một kiểu. Nói rõ với ông bà và người trông trẻ vài nguyên tắc cứng: không để phích nước dưới đất, không mở cửa ban công, đổ xô nước sau khi dùng. Ít quy tắc nhưng ai cũng nhớ thì tốt hơn một danh sách dài.",
      },
      {
        title: "Kiểm lại mỗi khi con biết thêm kỹ năng mới",
        detail:
          "Con biết lẫy, biết bò, biết đứng, biết leo — mỗi mốc là một danh sách nguy cơ mới. Ngôi nhà an toàn cho bé sáu tháng chưa chắc an toàn cho bé mười lăm tháng biết kéo ghế.",
      },
    ],
    notes: [
      "DẤU HIỆU PHẢI ĐƯA ĐI VIỆN NGAY sau tai nạn tại nhà: trẻ NGÃ ĐẬP ĐẦU rồi nôn, lơ mơ, ngủ li bì gọi khó dậy, hoặc chảy máu, chảy dịch ở tai mũi; BỎNG rộp da, bỏng ở mặt, tay, bộ phận sinh dục, hoặc bỏng do điện dù nhìn ngoài nhẹ; NGHI UỐNG NHẦM hoá chất hoặc thuốc; KHÓ THỞ, TÍM TÁI, LỊM ĐI.",
      "Đây không phải tư vấn y khoa. Bài này giúp bạn phòng ngừa; mọi chấn thương hay nghi ngộ độc đều cần bác sĩ đánh giá.",
      "Bỏng thì làm mát ngay bằng nước sạch mát chảy trong nhiều phút, không bôi kem đánh răng, nước mắm hay mỡ trăn — những cách truyền miệng này làm vết thương nặng hơn và khó xử lý.",
      "Nghi con uống nhầm hoá chất thì KHÔNG móc họng gây nôn, hãy mang theo chính chai hoá chất đó tới bệnh viện để bác sĩ biết chất gì.",
    ],
    faq: [
      {
        q: "Nhà thuê không đục tường được thì cố định tủ kiểu gì?",
        a: "Có loại đai dán chịu lực hoặc thanh chống giữa tủ và tường không cần khoan. Cách khác là hạ bớt đồ nặng xuống ngăn dưới và bỏ hẳn những kệ cao lêu nghêu trong phòng trẻ chơi.",
      },
      {
        q: "Có cần mua hết các loại đồ chống trẻ nghịch không?",
        a: "Không cần mua theo bộ. Ưu tiên bốn thứ đáng tiền nhất: cửa chắn cầu thang, nút bịt ổ điện, đai cố định tủ, và khoá tủ đựng hoá chất. Phần còn lại thì sắp xếp lại đồ trong nhà là giải quyết được.",
      },
      {
        q: "Ông bà không chịu thay đổi thói quen thì làm sao?",
        a: "Đừng tranh luận chung chung, hãy đề nghị đúng một việc cụ thể mỗi lần và nói lý do ngắn gọn: “Bà để phích nước lên bàn cao giúp con nhé, bé mới biết đi hay bám vào bàn ạ.” Việc cụ thể dễ được chấp nhận hơn nhiều so với một bài giảng về an toàn.",
      },
      {
        q: "Bao giờ thì bỏ bớt được các biện pháp này?",
        a: "Tuỳ từng thứ và tuỳ đứa trẻ. Rào cầu thang thường giữ tới khi con lên xuống vững vàng; lưới ban công thì nên giữ lâu dài. Nguyên tắc chung là chỉ bỏ khi con đã hiểu và tự giữ được, không phải khi con đủ tuổi.",
      },
    ],
    sources: [],
  },
  {
    slug: "chon-truong-mam-non-va-ngay-dau-di-lop",
    title: "Chọn trường mầm non và sống sót qua tuần đầu con đi lớp",
    excerpt:
      "Con khóc ở cổng trường, mẹ khóc trên đường về. Tuần đầu tiên là phần khó nhất, và có cách để nó bớt khó.",
    publishedAt: NGAY,
    readTimeMinutes: 5,
    category: "tre-em",
    author: null,
    quickAnswer:
      "Chọn trường thì đi xem tận nơi vào giờ trẻ đang hoạt động, nhìn ba thứ: cô giáo nói chuyện với trẻ thế nào, bếp và nhà vệ sinh có sạch không, và sân chơi có an toàn không. Hỏi rõ sĩ số mỗi lớp, số cô mỗi lớp, và cách trường liên lạc với phụ huynh khi con ốm. Tuần đầu nên cho con đi nửa buổi, chào tạm biệt ngắn gọn và dứt khoát, và tuyệt đối không trốn đi khi con không để ý.",
    prepare: [
      "Danh sách hai tới ba trường gần nhà, tiện đường đi làm của bạn",
      "Một buổi đi xem trường vào giờ trẻ đang học, không phải giờ vắng",
      "Danh sách câu hỏi viết sẵn, vì tới nơi rất dễ quên",
      "Đồ dùng của con theo yêu cầu của trường: quần áo dự phòng, bình nước, ba lô nhỏ",
      "Vài tuần trước ngày nhập học để tập cho con làm quen dần",
    ],
    steps: [
      {
        title: "Ưu tiên trường gần nhà hoặc gần chỗ làm",
        detail:
          "Trường tốt mà đi lại bốn mươi phút mỗi chiều sẽ vắt kiệt cả nhà sau vài tháng. Gần còn có nghĩa là bạn tới nhanh khi con ốm. Đây là tiêu chí thực tế mà nhiều phụ huynh đánh giá thấp lúc đầu.",
      },
      {
        title: "Đi xem trường vào giờ trẻ đang hoạt động",
        detail:
          "Xin tới khoảng giữa buổi sáng, đừng xem lúc trẻ đã về hết. Bạn cần thấy lớp học lúc ồn ào thật sự để biết cô xử lý thế nào khi có bé khóc, có bé giành đồ chơi.",
      },
      {
        title: "Quan sát cách cô nói chuyện với trẻ",
        detail:
          "Đây là thứ quan trọng hơn mọi tờ rơi quảng cáo. Cô có ngồi xuống ngang tầm trẻ không, giọng có bình tĩnh không, có bé nào bị bỏ ngồi một góc quá lâu không. Cảm giác của bạn trong mười phút này thường rất chính xác.",
      },
      {
        title: "Xem bếp, nhà vệ sinh và chỗ ngủ",
        detail:
          "Xin xem cả ba chỗ, đừng ngại. Bếp sạch, có lịch thực đơn công khai, nhà vệ sinh không nặng mùi, chỗ ngủ thoáng và có chăn gối riêng cho từng bé. Trường ngại cho xem những nơi này là một dấu hiệu.",
      },
      {
        title: "Hỏi sĩ số và số cô mỗi lớp",
        detail:
          "Hỏi thẳng: “Lớp của con em có bao nhiêu bé và bao nhiêu cô ạ, giờ ăn và giờ ngủ thì có thêm người hỗ trợ không ạ.” Con số này quyết định con bạn được để mắt tới nhiều hay ít, hơn mọi thứ khác.",
      },
      {
        title: "Hỏi về cách xử lý khi con ốm hoặc có va chạm",
        detail:
          "“Nếu con sốt ở lớp thì trường làm gì và báo cho em lúc nào ạ? Nếu hai bé va vào nhau thì trường báo phụ huynh thế nào ạ?” Trường có quy trình rõ ràng sẽ trả lời trôi chảy; trường lúng túng ở câu này thì bạn nên cân nhắc.",
      },
      {
        title: "Hỏi chuyện phụ huynh đang đứng chờ ở cổng",
        detail:
          "Nguồn tin thật nhất. Hỏi nhẹ nhàng: “Chị cho em hỏi bé nhà chị học ở đây lâu chưa ạ, chị thấy các cô thế nào ạ.” Vài câu ở cổng trường đáng giá hơn cả buổi đọc bình luận trên mạng.",
      },
      {
        title: "Đọc kỹ phần học phí và các khoản thu",
        detail:
          "Hỏi rõ tổng chi phí một tháng gồm những khoản gì, có khoản nào thu theo năm không, nghỉ ốm dài ngày có được trừ tiền ăn không. Ghi lại để so sánh giữa các trường, vì mỗi nơi tách khoản một kiểu.",
      },
      {
        title: "Tập cho con làm quen trước vài tuần",
        detail:
          "Kể chuyện về trường bằng giọng vui vẻ, đi ngang trường chỉ cho con xem sân chơi, tập cho con ngủ trưa và ăn theo giờ của lớp. Con quen giờ giấc trước thì tuần đầu nhẹ đi rất nhiều.",
      },
      {
        title: "Tuần đầu đi nửa buổi nếu trường cho phép",
        detail:
          "Vài ngày đầu chỉ gửi tới trước giờ ăn trưa, rồi tăng dần. Nhiều trường có sẵn lộ trình làm quen như vậy — hỏi trước khi nhập học.",
      },
      {
        title: "Chào tạm biệt ngắn, dứt khoát, và đừng trốn đi",
        detail:
          "Ôm con, nói một câu cố định mỗi ngày: “Mẹ đi làm, chiều mẹ đón con ở đúng chỗ này nhé.” Rồi đi thật. Quay lại nhiều lần khiến con khóc lâu hơn. Trốn đi lúc con không để ý là tệ nhất — hôm sau con sẽ bám chặt vì không dám rời mắt khỏi bạn.",
      },
      {
        title: "Đón đúng giờ trong những ngày đầu",
        detail:
          "Đúng giờ quan trọng hơn bạn nghĩ. Con cần thấy lời hứa buổi sáng là thật. Vài ngày đầu, cố gắng đón sớm hơn một chút, đừng để con là bé cuối cùng còn ngồi lại.",
      },
      {
        title: "Hỏi cô mỗi ngày một câu cụ thể",
        detail:
          "Thay vì “hôm nay con thế nào ạ”, hãy hỏi: “Hôm nay con ăn được mấy phần ạ, có ngủ trưa không ạ, có chơi với bạn nào không ạ.” Câu hỏi cụ thể cho bạn thông tin thật và cũng cho cô thấy bạn quan tâm.",
      },
    ],
    notes: [
      "Con khóc trong một tới hai tuần đầu là bình thường. Nhưng nếu con khóc dữ dội kéo dài nhiều tuần, sợ hãi bất thường, sụt cân, hoặc có dấu hiệu thay đổi rõ rệt về giấc ngủ và hành vi, hãy trao đổi thẳng với trường và cân nhắc lại lựa chọn.",
      "Kiểm tra trường có giấy phép hoạt động hợp lệ không, đặc biệt với nhóm trẻ tư nhân nhỏ. Đây là việc nên hỏi thẳng và xem giấy tờ, không ngại gì cả.",
      "Học phí, các khoản thu và quy định nhận trẻ khác nhau theo từng trường và từng địa phương, lại thay đổi theo năm học — hỏi trực tiếp nhà trường thay vì tin thông tin cũ trên mạng.",
      "Dạy con vài câu tự bảo vệ trước khi đi lớp: gọi cô khi muốn đi vệ sinh, nói khi bị đau, và quy tắc về vùng riêng tư trên cơ thể. Nói bình thản như dạy mọi kỹ năng khác, không doạ dẫm con.",
    ],
    faq: [
      {
        q: "Mấy tuổi thì cho con đi lớp là hợp lý?",
        a: "Không có một mốc đúng cho mọi nhà, nó phụ thuộc vào hoàn cảnh công việc và sự sẵn sàng của con. Điều đáng cân nhắc hơn là chất lượng chăm sóc nơi con tới và tỉ lệ cô trên trẻ, chứ không phải con số tuổi.",
      },
      {
        q: "Con đi lớp là ốm liên tục, có phải trường bẩn không?",
        a: "Trẻ mới đi lớp hay ốm vặt trong vài tháng đầu do tiếp xúc với môi trường mới, đó là điều thường gặp. Nhưng nếu cả lớp cùng ốm liên tục theo đợt, hãy hỏi trường về vệ sinh và cách xử lý khi có bé bệnh.",
      },
      {
        q: "Có nên lắp camera hoặc đòi xem camera lớp không?",
        a: "Nhiều trường có camera cho phụ huynh xem. Đây là điểm cộng, nhưng đừng coi là bảo chứng duy nhất — thứ đáng tin hơn vẫn là thái độ của cô và cảm giác của con khi tới trường mỗi sáng.",
      },
      {
        q: "Con nói không thích cô thì xử lý thế nào?",
        a: "Hỏi con bằng câu mở và bình tĩnh: “Con kể mẹ nghe hôm nay ở lớp có chuyện gì.” Đừng gặng hỏi theo hướng gợi ý. Nếu nghe điều đáng lo, trao đổi trực tiếp với trường bằng thái độ hợp tác trước, và đừng bỏ qua nếu con lặp lại nhiều lần.",
      },
    ],
    sources: [],
  },
];
