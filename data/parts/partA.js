// Phần A — 12 bài do AI soạn, cần người duyệt lại trước khi công bố
export const partA = [
  {
    slug: "dang-ky-va-dung-the-bhyt-dien-tu-tren-vssid",
    title: "Đăng ký và dùng thẻ BHYT điện tử trên VssID",
    excerpt: "Quên thẻ giấy ở quê cũng không sao — thẻ BHYT giờ nằm gọn trong điện thoại của bạn.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Tải app VssID của Bảo hiểm xã hội Việt Nam, đăng ký tài khoản bằng mã số BHXH và CCCD, chờ duyệt rồi đăng nhập. Từ đó đi khám chỉ cần mở app trình thẻ BHYT điện tử thay cho thẻ giấy.",
    prepare: [
      "Điện thoại cài app VssID (chọn đúng app của Bảo hiểm xã hội Việt Nam trên App Store/Google Play)",
      "CCCD và mã số BHXH (in trên thẻ BHYT cũ, hoặc hỏi phòng nhân sự công ty)",
      "Ảnh chụp mặt trước, mặt sau CCCD và ảnh chân dung để nộp hồ sơ online",
    ],
    steps: [
      {
        title: "Mở app, chọn \"Đăng ký tài khoản\"",
        detail:
          "Điền mã số BHXH, thông tin cá nhân và ảnh CCCD theo hướng dẫn trong app. Điền sai là hồ sơ dễ bị trả lại, nên cứ chậm mà chắc.",
      },
      {
        title: "Chờ duyệt và nhận mật khẩu",
        detail:
          "Hồ sơ thường được duyệt trong vài ngày làm việc, mật khẩu gửi về email hoặc tin nhắn — tuỳ thời điểm, chờ lâu quá thì gọi tổng đài BHXH hỏi.",
      },
      {
        title: "Đăng nhập và đổi mật khẩu ngay",
        detail: "Đăng nhập lần đầu bằng mã số BHXH và mật khẩu được cấp, rồi đổi sang mật khẩu của riêng bạn cho an toàn.",
      },
      {
        title: "Dùng thẻ khi đi khám",
        detail:
          "Vào mục thẻ BHYT trong app, đưa mã QR cho quầy tiếp nhận quét — giá trị như thẻ giấy. Nhiều nơi còn nhận cả CCCD gắn chip hoặc app VNeID.",
      },
    ],
    notes: [
      "App còn tra được quá trình đóng BHXH — rất tiện khi nghỉ việc hoặc làm hồ sơ hưởng chế độ.",
      "Quy trình và thời gian duyệt có thể thay đổi tuỳ thời điểm — xem hướng dẫn mới nhất trên trang của BHXH Việt Nam.",
    ],
    faq: [
      {
        q: "Không nhớ mã số BHXH thì tìm ở đâu?",
        a: "Xem trên thẻ BHYT giấy cũ, hỏi phòng nhân sự nơi làm việc, hoặc tra cứu trên trang của BHXH Việt Nam.",
      },
      {
        q: "Đi khám chỉ cầm điện thoại có đủ không?",
        a: "Với thẻ BHYT điện tử hợp lệ thì thường là đủ, nhưng mang thêm CCCD để đối chiếu cho chắc.",
      },
    ],
    sources: [{ label: "Bảo hiểm xã hội Việt Nam", url: "https://baohiemxahoi.gov.vn" }],
  },

  {
    slug: "chuan-bi-gi-khi-di-kham-rang-lan-dau",
    title: "Chuẩn bị gì khi đi khám răng lần đầu",
    excerpt: "Sợ ghế nha sĩ là chuyện bình thường — chuẩn bị đúng thì buổi khám đầu nhẹ nhàng hơn bạn nghĩ nhiều.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Chọn phòng khám nha khoa có giấy phép, đặt lịch trước, đánh răng sạch trước khi đi và nhớ lại tình trạng răng của mình để kể cho bác sĩ. Buổi đầu thường chỉ khám, chụp phim nếu cần và tư vấn — chưa vội làm gì to tát.",
    prepare: [
      "Chọn phòng khám rõ ràng: có bảng giá công khai, tên bác sĩ cụ thể, đánh giá ổn",
      "Đặt lịch trước qua điện thoại hoặc fanpage để khỏi chờ dài cổ",
      "Nhớ lại vấn đề của mình: ê buốt chỗ nào, chảy máu khi nào, đau bao lâu rồi",
      "Ăn nhẹ và đánh răng trước khi đi — lịch sự với chính mình và với bác sĩ",
    ],
    steps: [
      {
        title: "Khai tình trạng sức khoẻ khi được hỏi",
        detail: "Báo bệnh nền, thuốc đang dùng, tiền sử dị ứng nếu có — thông tin này giúp bác sĩ chọn cách xử lý an toàn cho bạn.",
      },
      {
        title: "Để bác sĩ khám tổng quát, chụp phim nếu cần",
        detail:
          "Bác sĩ soi từng răng, có thể chụp X-quang để nhìn phần chân răng mắt thường không thấy. Không đau đâu, máy chỉ kêu tí thôi.",
      },
      {
        title: "Nghe tư vấn và hỏi kỹ trước khi đồng ý làm",
        detail:
          "Hỏi rõ: làm gì, mấy buổi, chi phí khoảng bao nhiêu, không làm ngay thì sao. Bạn có quyền xin bảng kê và về nhà suy nghĩ.",
      },
      {
        title: "Chốt kế hoạch và hẹn lịch",
        detail: "Thường bắt đầu bằng cạo vôi răng và xử lý chỗ đau trước, việc lớn tính sau. Lưu số phòng khám để hỏi khi cần.",
      },
    ],
    notes: [
      "Chi phí mỗi nơi mỗi khác — cứ hỏi giá trước khi làm, không có gì phải ngại.",
      "Đau răng dữ dội, sưng mặt, sốt — đừng chờ lịch hẹn, đi khám ngay.",
    ],
    faq: [
      {
        q: "Khám răng có dùng được BHYT không?",
        a: "Tuỳ dịch vụ và tuỳ nơi — điều trị bệnh lý ở cơ sở có nhận BHYT thường được hỗ trợ một phần, còn thẩm mỹ như tẩy trắng thì không. Hỏi quầy tiếp nhận cho chắc.",
      },
      {
        q: "Bao lâu nên khám răng một lần?",
        a: "Bác sĩ thường khuyên khoảng 6 tháng một lần để cạo vôi và phát hiện sớm vấn đề — coi như lịch bảo dưỡng định kỳ cho răng.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-hien-mau-lan-dau-quy-trinh-va-chuan-bi",
    title: "Đi hiến máu lần đầu: quy trình và chuẩn bị",
    excerpt: "Một mũi kim nhỏ, cứu được người thật — lại còn được kiểm tra sức khoẻ miễn phí kèm hộp sữa.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Ăn nhẹ, ngủ đủ, mang CCCD rồi đến điểm hiến máu đăng ký — bạn sẽ được khám sàng lọc trước, đạt mới hiến. Cả quy trình thường gọn trong một buổi, riêng lúc lấy máu chỉ vài phút.",
    prepare: [
      "Đêm trước ngủ đủ giấc, đừng thức khuya cày phim",
      "Ăn nhẹ trước khi đi (tránh đồ nhiều dầu mỡ), uống nhiều nước, không rượu bia",
      "Mang CCCD hoặc giấy tờ tuỳ thân có ảnh",
      "Đang ốm, đang dùng thuốc, mới xăm mình... thì cứ khai thật ở khâu sàng lọc",
    ],
    steps: [
      {
        title: "Đăng ký và điền phiếu",
        detail: "Điền phiếu đăng ký hiến máu và bảng câu hỏi sức khoẻ. Khai trung thực — vì an toàn của cả bạn lẫn người nhận máu.",
      },
      {
        title: "Khám sàng lọc",
        detail:
          "Nhân viên y tế đo huyết áp, thử máu nhanh, hỏi vài câu về sức khoẻ. Hôm nay chưa đạt cũng đừng buồn — lần sau quay lại.",
      },
      {
        title: "Hiến máu",
        detail: "Nằm thư giãn, kim chỉ nhói nhẹ lúc đầu, vài phút là xong. Sợ kim thì nhìn đi chỗ khác và thở đều — mẹo cổ điển mà hiệu quả.",
      },
      {
        title: "Nghỉ tại chỗ và nhận giấy chứng nhận",
        detail: "Ngồi nghỉ khoảng 10–15 phút, ăn nhẹ, nhận giấy chứng nhận và quà. Đừng bật dậy chạy ngay kẻo chóng mặt.",
      },
      {
        title: "Chăm sóc sau hiến",
        detail: "Hôm đó uống nhiều nước, ăn uống đầy đủ, tránh vận động nặng và thức khuya. Băng dán chỗ kim giữ vài tiếng hãy gỡ.",
      },
    ],
    notes: [
      "Điều kiện hiến máu (tuổi, cân nặng, khoảng cách giữa các lần) có quy định riêng — nhân viên tại điểm hiến sẽ kiểm tra giúp bạn.",
      "Giữ lại giấy chứng nhận hiến máu — người từng hiến máu được hưởng quyền lợi về máu sau này theo quy định.",
    ],
    faq: [
      {
        q: "Hiến máu có làm mình yếu đi không?",
        a: "Lượng máu hiến là phần nhỏ mà cơ thể tự bù lại trong thời gian ngắn. Nghỉ ngơi và ăn uống tốt là khoẻ lại bình thường — nhiều người hiến đều đặn mỗi năm.",
      },
      {
        q: "Tìm điểm hiến máu ở đâu?",
        a: "Các viện huyết học, bệnh viện lớn và ngày hội hiến máu ở trường, công ty, phường. Theo dõi fanpage trung tâm hiến máu ở thành phố bạn để biết lịch.",
      },
    ],
    sources: [],
  },

  {
    slug: "kham-suc-khoe-dinh-ky-nen-bat-dau-tu-dau",
    title: "Khám sức khỏe định kỳ: nên bắt đầu từ đâu",
    excerpt: "Xe còn được bảo dưỡng định kỳ, chẳng lẽ cơ thể bạn thì không? Bắt đầu đơn giản hơn bạn tưởng.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Chọn một bệnh viện hoặc phòng khám uy tín, chọn gói khám tổng quát cơ bản, đặt lịch và làm theo dặn dò (thường phải nhịn ăn trước khi lấy máu). Người trẻ khám mỗi năm một lần là nền tảng tốt — gói cụ thể thì nghe tư vấn theo tuổi và tiền sử của bạn.",
    prepare: [
      "Chọn nơi khám: bệnh viện công, bệnh viện tư hoặc phòng khám đa khoa có gói khám tổng quát",
      "Gọi hỏi hoặc đặt lịch online, hỏi luôn giá gói và gồm những mục gì",
      "Nghe dặn dò trước khám và làm đúng — thường phải nhịn ăn vài tiếng trước khi lấy máu",
      "Ghi sẵn các thắc mắc về sức khoẻ của mình để hỏi bác sĩ trong buổi khám",
    ],
    steps: [
      {
        title: "Chọn gói khám phù hợp",
        detail:
          "Người trẻ khoẻ mạnh thường chỉ cần gói cơ bản (khám tổng quát, xét nghiệm máu, nước tiểu, siêu âm, chụp phim phổi). Đừng ham gói đắt nhất — cứ hỏi tư vấn theo tuổi và tiền sử gia đình.",
      },
      {
        title: "Đi khám theo lịch hẹn",
        detail: "Mang CCCD, đến sớm một chút, mặc đồ thoải mái. Cầm phiếu chỉ định đi lần lượt từng phòng theo hướng dẫn của nhân viên.",
      },
      {
        title: "Nghe bác sĩ đọc kết quả",
        detail:
          "Cuối buổi (hoặc hẹn hôm khác) bác sĩ sẽ tổng kết. Chỗ nào không hiểu cứ hỏi — \"chỉ số này cao thì sao ạ?\" là câu hoàn toàn chính đáng.",
      },
      {
        title: "Lưu hồ sơ và đặt nhắc cho năm sau",
        detail:
          "Giữ kết quả (chụp ảnh hoặc xin bản mềm) để năm sau so sánh. Đặt lịch nhắc trong điện thoại — trí nhớ con người không đáng tin lắm đâu.",
      },
    ],
    notes: [
      "Giá gói khám chênh nhau khá nhiều giữa các nơi — tham khảo vài chỗ trước khi chọn.",
      "Có kết quả bất thường thì đừng tự tra mạng rồi hoảng — đặt lịch gặp bác sĩ chuyên khoa để được giải thích đàng hoàng.",
      "Nhiều công ty có khám định kỳ hằng năm cho nhân viên — hỏi HR trước kẻo mất tiền oan.",
    ],
    faq: [
      {
        q: "Khám tổng quát có dùng BHYT được không?",
        a: "Khám định kỳ theo nhu cầu cá nhân thường là dịch vụ tự trả; BHYT chủ yếu chi trả khi khám chữa bệnh. Hỏi nơi khám để biết phần nào được hỗ trợ.",
      },
    ],
    sources: [],
  },

  {
    slug: "tu-thuoc-co-ban-cho-nguoi-o-mot-minh",
    title: "Tủ thuốc cơ bản cho người ở một mình",
    excerpt: "Nửa đêm sốt đùng đùng mới lọ mọ đi tìm nhiệt kế thì hơi muộn — soạn sẵn một hộp nhỏ, lúc cần đỡ khổ.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Chuẩn bị một hộp để nơi khô ráo, gồm: nhiệt kế, băng cá nhân, gạc và băng keo y tế, dung dịch sát trùng, nước muối sinh lý, cùng vài loại thuốc thông dụng do dược sĩ tư vấn cho các triệu chứng nhẹ. Vài tháng kiểm tra hạn dùng một lần.",
    prepare: [
      "Một hộp có nắp, đặt nơi khô thoáng, tránh nắng — đừng để trong nhà tắm ẩm ướt",
      "Ghé nhà thuốc gần nhà, nhờ dược sĩ tư vấn bộ cơ bản cho người sống một mình",
      "Lưu sẵn số người thân và địa chỉ cơ sở y tế gần nhà trong điện thoại",
    ],
    steps: [
      {
        title: "Sắm dụng cụ trước, thuốc sau",
        detail:
          "Nhiệt kế, băng cá nhân, gạc vô trùng, băng keo y tế, kéo nhỏ, dung dịch sát trùng vết thương, nước muối sinh lý — những thứ dùng được ngay không cần hỏi ai.",
      },
      {
        title: "Nhờ dược sĩ tư vấn thuốc thông dụng",
        detail:
          "Nói thẳng: \"Em ở một mình, muốn chuẩn bị thuốc cơ bản cho cảm sốt, đau đầu, rối loạn tiêu hoá nhẹ\" — dược sĩ sẽ chọn loại phù hợp và dặn liều dùng. Ghi chú cách dùng dán kèm từng món luôn.",
      },
      {
        title: "Ghi hạn dùng ra ngoài",
        detail: "Dùng bút ghi hạn dùng lên vỏ từng món. Vài tháng dọn hộp một lần, cái nào hết hạn thì thay.",
      },
      {
        title: "Đặt quy tắc cho chính mình",
        detail: "Tủ thuốc chỉ để xử lý triệu chứng nhẹ một hai ngày. Không đỡ, sốt cao kéo dài, đau bất thường — đi khám, đừng gồng.",
      },
    ],
    notes: [
      "Không trữ kháng sinh hay thuốc kê đơn để tự điều trị — thuốc kê đơn phải dùng theo chỉ định của bác sĩ.",
      "Sống một mình thì nên cho một người thân hoặc bạn thân biết chỗ để tủ thuốc và tình trạng sức khoẻ của bạn — phòng khi cần nhờ.",
    ],
    faq: [
      {
        q: "Triệu chứng thế nào thì đừng tự xử ở nhà nữa?",
        a: "Sốt cao không hạ, đau ngực, khó thở, đau bụng dữ dội, dị ứng sưng phù — gọi người thân và đến cơ sở y tế ngay. Số cấp cứu 115 lưu sẵn trong máy.",
      },
    ],
    sources: [],
  },

  {
    slug: "tiem-ngua-cho-nguoi-lon-bat-dau-tu-dau",
    title: "Tiêm ngừa cho người lớn: bắt đầu từ đâu",
    excerpt: "Tiêm ngừa không phải chuyện của riêng trẻ con — người lớn cũng có lịch tiêm của mình, và bắt đầu rất dễ.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Tìm lại sổ tiêm chủng cũ nếu còn, rồi đến trung tâm tiêm chủng hoặc cơ sở y tế uy tín để bác sĩ tư vấn lịch tiêm phù hợp với tuổi, nghề nghiệp và tiền sử của bạn. Sau đó cứ tiêm theo lộ trình được hẹn.",
    prepare: [
      "Hỏi bố mẹ tìm sổ tiêm chủng hồi nhỏ — không còn cũng không sao, bác sĩ có cách tư vấn phù hợp",
      "Ghi lại tiền sử dị ứng, bệnh nền, thuốc đang dùng để khai khi khám sàng lọc",
      "Mang CCCD; chọn ngày rảnh vì sau tiêm thường ở lại theo dõi khoảng 30 phút",
    ],
    steps: [
      {
        title: "Chọn nơi tiêm uy tín",
        detail:
          "Trung tâm tiêm chủng, trạm y tế hoặc bệnh viện có dịch vụ tiêm ngừa. Nơi uy tín sẽ khám sàng lọc trước tiêm và dặn dò theo dõi sau tiêm đàng hoàng.",
      },
      {
        title: "Nghe tư vấn lịch tiêm cho người lớn",
        detail:
          "Bác sĩ sẽ hỏi tuổi, nghề, nơi ở, dự định (du lịch, lập gia đình...) để gợi ý các mũi nên tiêm và thứ tự ưu tiên. Cứ hỏi thẳng: \"Với hoàn cảnh của em, mũi nào cần trước ạ?\"",
      },
      {
        title: "Khám sàng lọc và tiêm",
        detail: "Khai trung thực tình trạng sức khoẻ hôm đó. Đang sốt hay đang ốm thì thường được hẹn lại — an toàn trên hết.",
      },
      {
        title: "Theo dõi sau tiêm",
        detail:
          "Ở lại điểm tiêm khoảng 30 phút, về nhà tiếp tục để ý cơ thể theo dặn dò. Chỗ tiêm hơi đau, người hơi mệt là phản ứng thường gặp; có dấu hiệu bất thường thì liên hệ ngay nơi tiêm hoặc cơ sở y tế.",
      },
      {
        title: "Giữ sổ hoặc app theo dõi mũi tiêm",
        detail: "Xin sổ tiêm hoặc lưu trong app của nơi tiêm để nhớ các mũi nhắc lại. Đặt nhắc trong điện thoại cho chắc.",
      },
    ],
    notes: [
      "Chi phí mỗi loại mỗi khác và thay đổi theo thời điểm — gọi hỏi hoặc xem bảng giá trước.",
      "Bài này chỉ hướng dẫn cách bắt đầu — tiêm mũi gì, khi nào là quyết định giữa bạn và bác sĩ.",
    ],
    faq: [
      {
        q: "Không nhớ hồi nhỏ đã tiêm gì thì có sao không?",
        a: "Tình huống rất thường gặp — bác sĩ sẽ hỏi bệnh sử, có thể chỉ định xét nghiệm khi cần rồi tư vấn phương án phù hợp. Cứ đi tư vấn, đừng ngại.",
      },
    ],
    sources: [],
  },

  {
    slug: "di-kham-mat-va-cat-kinh-lan-dau",
    title: "Đi khám mắt và cắt kính lần đầu",
    excerpt: "Nheo mắt nhìn bảng, nhức đầu cuối ngày? Có khi chỉ cần một buổi đo mắt là đời sáng hẳn ra.",
    readTimeMinutes: 2,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Lần đầu nên đến cơ sở y tế có chuyên khoa mắt để đo khúc xạ và khám loại trừ bệnh lý, sau đó cầm kết quả đi cắt kính ở tiệm uy tín. Đừng đo qua loa năm phút rồi cắt luôn — mắt xài cả đời, đáng được kỹ một chút.",
    prepare: [
      "Hôm trước ngủ đủ, bớt dán mắt vào màn hình cho mắt được nghỉ",
      "Đang đeo kính cũ hoặc kính áp tròng thì mang theo và báo cho người đo biết",
      "Chuẩn bị kể: nhìn mờ khi nào, nhức mắt ra sao, công việc dùng màn hình nhiều không",
    ],
    steps: [
      {
        title: "Đo khúc xạ",
        detail:
          "Nhìn vào máy đo, đọc bảng chữ, thử qua nhiều tròng — cứ trả lời thật, không có \"đáp án đúng\" để đoán đâu. Đo xong bạn sẽ biết số độ của mình.",
      },
      {
        title: "Khám mắt tổng quát nếu ở cơ sở y tế",
        detail:
          "Bác sĩ kiểm tra thêm để chắc rằng nhìn mờ là do tật khúc xạ chứ không phải bệnh lý khác về mắt. Lần đầu rất nên làm bước này.",
      },
      {
        title: "Đeo thử độ kính trước khi chốt",
        detail: "Đeo tròng thử đi lại vài phút, nhìn xa nhìn gần. Chóng mặt hay căng mắt thì báo ngay để chỉnh — đừng ráng chịu.",
      },
      {
        title: "Chọn gọng và tròng theo túi tiền",
        detail:
          "Nói thẳng ngân sách với tiệm kính. Tròng có nhiều mức giá và tính năng (chống trầy, lọc ánh sáng...) — hỏi kỹ khác nhau chỗ nào rồi hãy chọn.",
      },
      {
        title: "Nhận kính và theo dõi",
        detail:
          "Vài ngày đầu đeo kính mới thấy hơi lạ là bình thường; nhức đầu kéo dài thì quay lại kiểm tra. Nên đo mắt lại định kỳ khoảng mỗi năm hoặc khi thấy nhìn mờ hơn.",
      },
    ],
    notes: [
      "Giá kính dao động rất rộng tuỳ gọng và tròng — so sánh vài tiệm, không việc gì phải ngại.",
      "Mắt mờ đột ngột, đau nhức mắt, thấy chớp sáng — đi khám chuyên khoa mắt ngay, đừng chờ cắt kính.",
    ],
    faq: [
      {
        q: "Đo mắt ở tiệm kính hay bệnh viện?",
        a: "Tiệm kính uy tín đo khúc xạ được, nhưng lần đầu nên khám ở nơi có chuyên khoa mắt để loại trừ bệnh lý — sau đó cắt kính ở đâu thì tuỳ bạn.",
      },
    ],
    sources: [],
  },

  {
    slug: "uong-thuoc-dung-gio-meo-de-khong-quen",
    title: "Uống thuốc đúng giờ: mẹo để không quên",
    excerpt: "Uống thuốc mà bữa nhớ bữa quên thì thuốc khó làm đúng việc của nó — vài mẹo nhỏ cứu cả liệu trình.",
    readTimeMinutes: 1,
    category: "suc-khoe",
    author: null,
    quickAnswer:
      "Gắn giờ uống thuốc vào một thói quen có sẵn (đánh răng, ăn sáng), đặt báo thức có tên rõ ràng, và để thuốc ở chỗ đập vào mắt. Uống nhiều loại thì sắm hộp chia ngăn theo ngày.",
    prepare: [
      "Hỏi kỹ bác sĩ hoặc dược sĩ: mỗi thuốc uống mấy lần một ngày, trước hay sau ăn",
      "Sắm hộp chia thuốc theo ngày hoặc buổi nếu uống nhiều loại — nhà thuốc nào cũng bán",
      "Chọn sẵn một \"điểm neo\": việc bạn làm đều mỗi ngày để gắn giờ uống thuốc vào",
    ],
    steps: [
      {
        title: "Gắn thuốc vào thói quen có sẵn",
        detail:
          "Uống sau bữa sáng thì để thuốc cạnh hũ cà phê, uống trước khi ngủ thì để cạnh bàn chải. Não lười nhớ chuyện mới nhưng rất giỏi làm theo chuỗi quen.",
      },
      {
        title: "Đặt báo thức có tên cụ thể",
        detail:
          "Đặt tên báo thức là \"Uống thuốc — sau ăn trưa\" thay vì tiếng chuông vô danh, và chỉ tắt khi đã uống xong. Uống nhiều buổi thì đặt nhiều báo thức.",
      },
      {
        title: "Soạn thuốc đầu tuần vào hộp chia ngăn",
        detail: "Tối chủ nhật soạn thuốc cho cả tuần. Nhìn ngăn hôm nay còn thuốc là biết mình chưa uống — hết cãi nhau với trí nhớ.",
      },
      {
        title: "Hỏi trước cách xử lý khi lỡ quên",
        detail:
          "Hỏi người kê đơn: \"Nếu em quên một liều thì làm sao ạ?\" — mỗi loại thuốc mỗi khác, đừng tự động uống bù gấp đôi.",
      },
    ],
    notes: [
      "Thấy đỡ cũng đừng tự ý ngưng thuốc bác sĩ kê theo đợt — uống đủ theo chỉ định, thắc mắc thì hỏi lại người kê đơn.",
      "Đi đâu xa nhớ mang dư vài liều, phòng khi kẹt lịch về trễ.",
    ],
    faq: [
      {
        q: "Đặt báo thức rồi mà vẫn quên hoài thì sao?",
        a: "Đổi chiến thuật: nhờ người ở cùng nhắc, dùng app nhắc uống thuốc có bước xác nhận, hoặc dán giấy nhớ chỗ chắc chắn nhìn thấy như gương hay cửa tủ lạnh. Quan trọng là hệ thống nhắc, đừng dựa vào ý chí.",
      },
    ],
    sources: [],
  },

  {
    slug: "dang-ky-tam-tru-khi-o-tro",
    title: "Đăng ký tạm trú khi ở trọ",
    excerpt: "Chuyển trọ xong đừng quên thủ tục nhỏ mà quan trọng này — giờ làm online được, khỏi xếp hàng.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Đến ở trọ ổn định ngoài nơi thường trú là bạn thuộc diện phải đăng ký tạm trú với công an xã/phường nơi ở. Làm online qua Cổng dịch vụ công hoặc app VNeID, hoặc đến trực tiếp — chuẩn bị CCCD và giấy tờ chứng minh chỗ ở hợp pháp như hợp đồng thuê.",
    prepare: [
      "CCCD và tài khoản định danh điện tử VNeID (nếu nộp online)",
      "Hợp đồng thuê nhà hoặc giấy tờ chứng minh chỗ ở hợp pháp — xin chủ trọ bản chụp khi cần",
      "Trao đổi trước với chủ trọ — nhiều nơi chủ trọ hỗ trợ đăng ký luôn cho người thuê",
    ],
    steps: [
      {
        title: "Hỏi chủ trọ trước",
        detail:
          "Nhiều chủ trọ quen làm thủ tục này và sẽ đăng ký giúp bạn — hỏi một câu đỡ mất một buổi. Chủ trọ không làm thì bạn tự làm được.",
      },
      {
        title: "Chọn cách nộp: online hoặc trực tiếp",
        detail:
          "Online: vào Cổng dịch vụ công hoặc app VNeID, tìm thủ tục đăng ký tạm trú, điền theo mẫu và đính kèm giấy tờ. Trực tiếp: đến công an xã/phường nơi bạn ở trọ.",
      },
      {
        title: "Khai thông tin và nộp hồ sơ",
        detail:
          "Khai đúng địa chỉ phòng trọ và thông tin chủ nhà theo hợp đồng. Hồ sơ online nếu sai sót sẽ bị trả về kèm lý do — đọc kỹ rồi bổ sung theo hướng dẫn.",
      },
      {
        title: "Nhận kết quả",
        detail:
          "Kết quả thường báo qua tin nhắn hoặc tài khoản dịch vụ công trong vài ngày làm việc — tuỳ nơi, tuỳ thời điểm. Xong là thông tin tạm trú của bạn đã nằm trong hệ thống cư trú.",
      },
    ],
    notes: [
      "Đăng ký tạm trú là nghĩa vụ theo luật cư trú, và cũng có lợi cho bạn: nhiều thủ tục giấy tờ, học hành, xe cộ cần thông tin cư trú.",
      "Lệ phí (nếu có) và thời gian xử lý tuỳ hình thức nộp và tuỳ nơi — xem trên Cổng dịch vụ công hoặc hỏi cán bộ tiếp nhận.",
      "Chuyển sang trọ mới thì nhớ đăng ký lại ở nơi mới.",
    ],
    faq: [
      {
        q: "Không đăng ký tạm trú có sao không?",
        a: "Có thể bị nhắc nhở hoặc xử phạt hành chính theo quy định, và sau này làm thủ tục gì dính đến cư trú cũng lằng nhằng hơn. Làm sớm cho nhẹ đầu.",
      },
      {
        q: "Chủ trọ hay người thuê phải đi đăng ký?",
        a: "Thực tế hai bên thoả thuận ai làm cũng được, miễn là có đăng ký. Cứ chủ động trao đổi với chủ trọ ngay khi dọn vào.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },

  {
    slug: "lam-giay-kham-suc-khoe-xin-viec",
    title: "Làm giấy khám sức khỏe xin việc",
    excerpt: "Công ty đòi giấy khám sức khoẻ mà chưa biết đi đâu làm? Một buổi sáng là xong, thật đấy.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Đến bệnh viện hoặc phòng khám được phép khám sức khoẻ, mang CCCD và vài ảnh thẻ, đăng ký khám sức khoẻ đi làm rồi khám lần lượt các phòng theo phiếu. Thường gọn trong một buổi.",
    prepare: [
      "CCCD và vài ảnh thẻ (thường cỡ 4x6, chụp mới) — gọi hỏi nơi khám cần mấy ảnh",
      "Hỏi công ty: cần giấy khám theo mẫu nào, có yêu cầu gì riêng không",
      "Đi buổi sáng sớm cho vắng; một số mục có thể yêu cầu nhịn ăn — gọi hỏi trước",
    ],
    steps: [
      {
        title: "Chọn nơi khám đủ điều kiện",
        detail:
          "Bệnh viện công hoặc phòng khám được cấp phép khám sức khoẻ. Không chắc thì gọi hỏi thẳng: \"Bên mình có khám sức khoẻ xin việc không ạ?\"",
      },
      {
        title: "Đăng ký tại quầy",
        detail: "Nói rõ mục đích \"khám sức khoẻ đi làm\", nộp ảnh, điền thông tin, đóng phí rồi nhận hồ sơ kèm phiếu đi các phòng.",
      },
      {
        title: "Khám lần lượt các phòng",
        detail:
          "Thường gồm đo chiều cao cân nặng, huyết áp, mắt, tai mũi họng, răng, khám nội... theo danh mục in sẵn. Phòng nào xong ký phòng đó.",
      },
      {
        title: "Nộp hồ sơ và chờ nhận giấy",
        detail:
          "Khám đủ các mục thì nộp hồ sơ về quầy để bác sĩ kết luận và đóng dấu. Nhiều nơi trả ngay trong buổi, có nơi hẹn hôm sau — hỏi trước để sắp xếp.",
      },
    ],
    notes: [
      "Lệ phí tuỳ nơi khám — gọi tham khảo trước cho chủ động.",
      "Giấy khám sức khoẻ có thời hạn sử dụng nhất định — làm gần thời điểm nộp hồ sơ, đừng làm sớm quá.",
      "Cần nộp nhiều nơi thì hỏi làm thêm bản hoặc chứng thực bản sao, đỡ phải khám lại.",
    ],
    faq: [
      {
        q: "Khám sức khoẻ xin việc có dùng BHYT không?",
        a: "Đây thường là dịch vụ tự trả, không thuộc phạm vi BHYT chi trả. Mức phí cụ thể hỏi trực tiếp nơi khám.",
      },
    ],
    sources: [],
  },

  {
    slug: "cong-chung-chung-thuc-giay-to-di-dau-mang-gi",
    title: "Công chứng, chứng thực giấy tờ: đi đâu, mang gì",
    excerpt: "\"Sao y công chứng\" nghe rối mà làm thì dễ — chỉ cần đi đúng cửa và mang đúng bản gốc.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Cần bản sao y để nộp hồ sơ thì đến UBND xã/phường hoặc phòng công chứng, mang theo bản GỐC giấy tờ, đóng phí là có bản chứng thực. Còn ký hợp đồng, giao dịch quan trọng thì đến tổ chức hành nghề công chứng.",
    prepare: [
      "Bản GỐC giấy tờ cần sao y (CCCD, bằng cấp, giấy tờ khác...) — không có bản gốc là không chứng thực được",
      "Bản photo sẵn nếu muốn nhanh — hoặc photo tại chỗ, nhiều nơi có dịch vụ",
      "Ít tiền lẻ đóng phí — phí thường tính theo trang, mức cụ thể tuỳ quy định từng thời điểm",
    ],
    steps: [
      {
        title: "Xác định mình cần loại nào",
        detail:
          "Nộp hồ sơ xin việc, xin học cần \"bản sao y\" tức chứng thực bản sao. Ký hợp đồng mua bán, uỷ quyền thì cần công chứng. Không chắc thì hỏi nơi nhận hồ sơ yêu cầu loại nào.",
      },
      {
        title: "Chọn nơi làm",
        detail:
          "Chứng thực bản sao: UBND xã/phường hoặc phòng/văn phòng công chứng — thường không bắt buộc đúng nơi cư trú, chọn chỗ gần cho tiện.",
      },
      {
        title: "Nộp giấy tờ và chờ",
        detail:
          "Đưa bản gốc kèm bản photo để cán bộ đối chiếu và đóng dấu chứng thực. Vắng thì vài phút là xong, đông thì chờ lâu hơn — né giờ cao điểm đầu buổi.",
      },
      {
        title: "Kiểm tra và cất bản gốc",
        detail:
          "Nhận lại bản gốc ngay và đếm đủ số bản chứng thực. Bản gốc là bảo bối — về nhà cất chỗ cố định, đừng kẹp lung tung.",
      },
    ],
    notes: [
      "Nơi nhận hồ sơ thường yêu cầu bản sao chứng thực còn mới (hay gặp mức \"không quá 6 tháng\") — làm gần lúc dùng và làm dư một hai bản.",
      "Giấy tờ tiếng nước ngoài thường phải dịch thuật rồi mới chứng thực — hỏi văn phòng công chứng hoặc phòng tư pháp để được hướng dẫn.",
    ],
    faq: [
      {
        q: "Sao y ở phường khác nơi thường trú được không?",
        a: "Chứng thực bản sao từ bản gốc thường làm được ở UBND cấp xã bất kỳ, không phụ thuộc nơi cư trú. Cẩn thận thì gọi hỏi trước nơi bạn định đến.",
      },
      {
        q: "Công chứng và chứng thực khác gì nhau?",
        a: "Hiểu nhanh: chứng thực bản sao là xác nhận \"bản photo giống bản gốc\", còn công chứng là chứng nhận hợp đồng, giao dịch. Đi xin việc, nộp hồ sơ học chủ yếu chỉ cần chứng thực bản sao.",
      },
    ],
    sources: [],
  },

  {
    slug: "cap-lai-bang-lai-xe-khi-bi-mat",
    title: "Cấp lại bằng lái xe khi bị mất",
    excerpt: "Mất bằng lái không có nghĩa là thi lại từ đầu — bình tĩnh, thủ tục cấp lại giờ làm online được rồi.",
    readTimeMinutes: 2,
    category: "giay-to",
    author: null,
    quickAnswer:
      "Bằng lái bị mất (còn thời hạn, không bị tạm giữ) thì làm thủ tục cấp lại: nộp hồ sơ online trên Cổng dịch vụ công hoặc đến điểm tiếp nhận thủ tục giấy phép lái xe, kèm giấy khám sức khoẻ nếu hạng bằng yêu cầu và lệ phí. Mất thông thường thì thường không phải thi lại.",
    prepare: [
      "CCCD, tài khoản VNeID và thông tin về bằng đã mất (hạng bằng, số GPLX nếu nhớ, nơi cấp)",
      "Giấy khám sức khoẻ người lái xe nếu hạng bằng của bạn yêu cầu — làm ở cơ sở y tế đủ điều kiện",
      "Ảnh chân dung đúng chuẩn hồ sơ online (thường nền xanh) và tài khoản để đóng lệ phí",
    ],
    steps: [
      {
        title: "Kiểm tra tình huống của mình",
        detail:
          "Mất bằng còn hạn, không bị cơ quan chức năng tạm giữ thì thuộc diện cấp lại thông thường. Bằng đang bị tạm giữ do vi phạm là chuyện khác — xử lý vi phạm trước.",
      },
      {
        title: "Chuẩn bị giấy khám sức khoẻ nếu cần",
        detail:
          "Một số trường hợp cấp lại yêu cầu giấy khám sức khoẻ người lái xe — kiểm tra yêu cầu với hạng bằng của bạn trên Cổng dịch vụ công hoặc hỏi nơi tiếp nhận.",
      },
      {
        title: "Nộp hồ sơ online hoặc trực tiếp",
        detail:
          "Online: tìm thủ tục \"cấp lại giấy phép lái xe\" trên Cổng dịch vụ công, điền thông tin, tải giấy tờ, đóng lệ phí và chọn nhận kết quả qua bưu điện. Hoặc đến trực tiếp điểm tiếp nhận thủ tục giấy phép lái xe nơi thuận tiện.",
      },
      {
        title: "Theo dõi hồ sơ và nhận bằng mới",
        detail:
          "Thời gian xử lý tuỳ nơi, tuỳ thời điểm — theo dõi trạng thái trong tài khoản dịch vụ công. Chọn nhận qua bưu điện thì bằng mới gửi về tận nhà.",
      },
    ],
    notes: [
      "Trong thời gian chờ, lái xe khi không có bằng trong người là rủi ro bị phạt — cân nhắc đi phương tiện khác, hoặc hỏi nơi tiếp nhận về giấy hẹn.",
      "Lệ phí và thời gian giải quyết thay đổi theo quy định từng thời điểm — xem con số mới nhất trên Cổng dịch vụ công.",
      "Cẩn thận dịch vụ \"cò\" làm nhanh — thủ tục chính thống tự làm được, đừng giao giấy tờ gốc cho người lạ.",
    ],
    faq: [
      {
        q: "Mất bằng có phải thi lại không?",
        a: "Trường hợp mất thông thường với bằng còn hạn thì thường chỉ làm thủ tục cấp lại, không phải thi lại. Trường hợp đặc biệt sẽ được nơi tiếp nhận hướng dẫn cụ thể.",
      },
    ],
    sources: [{ label: "Cổng Dịch vụ công quốc gia", url: "https://dichvucong.gov.vn" }],
  },
];
