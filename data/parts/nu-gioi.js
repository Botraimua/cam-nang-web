// Phần NỮ GIỚI — đồ lót, phong cách, chăm sóc bản thân cho người lớn.
//
// ❗ Giữ hướng thực dụng: chọn đồ, đo size, chăm mình. Chuyện tế nhị nằm ở
//    file nu-gioi-nguoi-lon.js (có adult: true).

export const nuGioi = [
  {
    slug: "do-size-ao-nguc-dung-cach",
    title: "Đo size áo ngực đúng cách",
    excerpt:
      "Rất nhiều người mặc sai size suốt nhiều năm rồi tưởng cơ thể mình có vấn đề. Hai con số là ra size của bạn.",
    readTimeMinutes: 4,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Đo hai vòng: vòng chân ngực (ngay dưới bầu ngực) ra phần SỐ, và vòng ngực (chỗ đầy nhất) trừ đi vòng chân ngực ra phần CÚP. Dấu hiệu mặc sai rất dễ nhận: dây lưng bị kéo lên cao ở lưng, gọng đâm, hoặc phải siết dây vai thật chặt mới thấy đỡ.",
    prepare: [
      "Thước dây may",
      "Mặc một chiếc áo ngực không đệm hoặc không mặc gì khi đo",
      "Đo trước gương, giữ thước ngang — thước xệ là sai số ngay",
      "Ghi chú điện thoại để lưu số đo",
    ],
    steps: [
      {
        title: "Chuẩn bị tư thế đo",
        detail:
          "Đứng thẳng trước gương, thả lỏng vai, hai tay buông xuôi. Mặc áo ngực không đệm hoặc không mặc gì — mặc áo có đệm dày sẽ ra số sai.",
      },
      {
        title: "Đo vòng chân ngực",
        detail:
          "Vòng thước ngay dưới bầu ngực, ôm vừa sát vào người, thở ra bình thường. Con số này ra phần SỐ của size — đây là con số quan trọng nhất.",
      },
      {
        title: "Đo vòng ngực",
        detail:
          "Vòng qua chỗ đầy nhất của ngực, thước song song mặt đất và ngang nhau ở lưng. Đừng kéo căng ép ngực, cũng đừng để thước lỏng lẻo.",
      },
      {
        title: "Lấy hiệu hai số để ra cúp",
        detail:
          "Chênh lệch giữa vòng ngực và vòng chân ngực quyết định cỡ cúp. Mỗi hãng có bảng quy đổi riêng — mở đúng bảng của hãng đó ra tra chứ đừng dùng bảng chung.",
      },
      {
        title: "Thử và kiểm tra điểm 1: dây lưng",
        detail:
          "Dây lưng phải nằm NGANG quanh người, không bị kéo lên cao ở lưng. Dây lưng chịu phần lớn lực nâng đỡ — đây là điểm quan trọng nhất mà nhiều người bỏ qua.",
      },
      {
        title: "Kiểm tra điểm 2: gọng",
        detail:
          "Gọng phải ôm sát chân ngực, nằm phẳng trên xương sườn, không đâm vào mô ngực và không kênh ra. Gọng đâm là dấu hiệu sai cúp hoặc sai số.",
      },
      {
        title: "Kiểm tra điểm 3: cúp",
        detail:
          "Ngực không tràn ra ngoài cúp (tràn ở trên hoặc ở nách là cúp nhỏ), cũng không hở khoảng trống (là cúp lớn hoặc sai kiểu).",
      },
      {
        title: "Kiểm tra điểm 4: dây vai",
        detail:
          "Dây vai chỉ giữ nhẹ, không phải chịu lực chính. Phải siết thật chặt mới thấy nâng nghĩa là dây lưng đang quá rộng.",
      },
      {
        title: "Thử ở móc giữa",
        detail:
          "Áo mới nên vừa ở móc rộng nhất hoặc móc giữa, để sau này thun giãn còn siết vào được. Vừa khít ở móc chật nhất ngay từ đầu là hết đường điều chỉnh.",
      },
      {
        title: "Cử động thử trước gương",
        detail:
          "Giơ tay, cúi người, xoay vai. Áo bị xê dịch nhiều, dây lưng trượt lên hoặc ngực tràn ra là chưa đúng size.",
      },
      {
        title: "Đo lại khi cơ thể thay đổi",
        detail:
          "Tăng giảm cân, sau sinh, sau cho con bú, tiền mãn kinh đều làm size đổi. Đo lại mỗi khi thấy mặc không còn thoải mái.",
      },
    ],
    notes: [
      "Đau, hằn đỏ sâu, khó thở khi mặc là dấu hiệu SAI SIZE chứ không phải chuyện phải chịu đựng.",
      "Ngực đau bất thường, sờ thấy khối lạ, thay đổi hình dạng hoặc tiết dịch: đi khám, đừng tự đoán.",
      "Cùng một size ở hãng khác có thể vừa hoặc không — luôn thử trước nếu mua trực tiếp, và đọc bảng size nếu mua online.",
      "Áo ngực cũng có tuổi thọ: thun lưng giãn, gọng cong vênh, vải mỏng đi thì nên thay.",
    ],
    faq: [
      {
        q: "Sao cùng một size mà hãng này vừa hãng kia chật?",
        a: "Mỗi hãng có form riêng và bảng quy đổi riêng. Luôn tra bảng size của chính hãng đó và thử trước nếu mua trực tiếp.",
      },
      {
        q: "Có nên mặc áo ngực khi ngủ không?",
        a: "Tuỳ bạn thấy thoải mái. Không có yêu cầu bắt buộc phải mặc hay phải bỏ — miễn là đồ không siết gây khó chịu.",
      },
      {
        q: "Hai bên ngực không đều thì chọn thế nào?",
        a: "Rất phổ biến. Chọn theo bên lớn hơn rồi dùng miếng đệm mỏng cho bên kia nếu cần.",
      },
      {
        q: "Áo không gọng có tốt hơn không?",
        a: "Không hẳn, chỉ là khác nhau. Áo có gọng đúng size không gây hại; áo không gọng thoải mái hơn nhưng nâng đỡ ít hơn với người ngực lớn.",
      },
    ],
    sources: [],
  },

  {
    slug: "chon-do-lot-theo-trang-phuc-va-hoat-dong",
    title: "Chọn đồ lót theo trang phục và hoạt động",
    excerpt:
      "Một kiểu không dùng được cho mọi hoàn cảnh. Biết vài loại cơ bản là hết cảnh soi gương thấy lộ.",
    readTimeMinutes: 4,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Nên có sẵn mấy nhóm: loại trơn không đường may cho đồ ôm, loại thể thao cho lúc vận động, loại quai rời cho áo hở vai, và loại thoải mái cho ngày ở nhà. Chất cotton thoáng cho ngày thường, vải thể thao khô nhanh cho lúc tập. Phần đáy quần lót nên là cotton để thoáng.",
    prepare: [
      "Nhìn lại tủ đồ: bạn hay mặc kiểu áo gì nhất",
      "Số đo mới nhất của bạn (xem bài đo size áo ngực)",
      "Ngân sách chia hợp lý: mua ít mà đúng loại hơn là nhiều mà không dùng",
      "Túi lưới giặt đồ",
    ],
    steps: [
      {
        title: "Kiểm kê tủ đồ trước",
        detail:
          "Xem bạn thật sự hay mặc gì: áo thun mỏng, sơ mi, váy hở vai, đồ thể thao. Mua theo tủ đồ thật chứ đừng mua theo tủ đồ tưởng tượng.",
      },
      {
        title: "Loại trơn không đường may cho đồ ôm",
        detail:
          "Áo thun mỏng, váy bó thì loại này giúp không lộ đường viền. Đây là món dùng nhiều nhất với phần lớn người — nên có ít nhất hai cái.",
      },
      {
        title: "Loại thể thao cho lúc vận động",
        detail:
          "Chọn mức nâng đỡ theo cường độ: đi bộ nhẹ khác hẳn chạy bộ. Mặc sai loại khi chạy gây đau và về lâu dài ảnh hưởng tới mô nâng đỡ.",
      },
      {
        title: "Loại quai rời hoặc quai trong cho áo hở vai",
        detail:
          "Đầu tư một cái loại này thì bạn mặc được nhiều kiểu áo hơn hẳn. Kiểm tra nó có bám tốt không bằng cách thử cử động trước gương.",
      },
      {
        title: "Chọn màu theo màu áo, không theo màu bạn thích",
        detail:
          "Dưới áo trắng thì màu da lộ ít nhất, chứ không phải màu trắng. Đây là mẹo nhiều người biết muộn.",
      },
      {
        title: "Đồ lót dưới: ưu tiên đáy cotton",
        detail:
          "Phần đáy quần bằng cotton giúp thoáng và giảm nguy cơ viêm nhiễm. Đồ ren toàn phần đẹp nhưng không nên mặc cả ngày dài.",
      },
      {
        title: "Chọn kiểu quần theo trang phục",
        detail:
          "Quần liền không đường may cho đồ bó, quần cotton thường cho ngày làm việc, quần cạp cao cho váy bút chì. Mỗi kiểu một việc.",
      },
      {
        title: "Thay đồ ngay sau khi tập hoặc bơi",
        detail:
          "Mặc đồ ẩm lâu là nguyên nhân phổ biến gây ngứa và viêm nhiễm. Mang theo một bộ để thay nếu bạn tập sau giờ làm.",
      },
      {
        title: "Giặt đúng cách để giữ form",
        detail:
          "Giặt tay hoặc dùng túi lưới ở chế độ nhẹ, không sấy nóng, phơi nơi thoáng và không phơi trực tiếp nắng gắt. Gọng và thun bền hơn hẳn.",
      },
      {
        title: "Biết khi nào nên thay",
        detail:
          "Thun giãn không còn ôm, gọng cong vênh hoặc chọc ra ngoài, vải mỏng đi, ố màu không giặt sạch — thay đi.",
      },
    ],
    notes: [
      "Ngứa, rát, khí hư bất thường kéo dài dù đã đổi sang đồ thoáng: đi khám phụ khoa thay vì tự mua thuốc.",
      "Đồ bó quá chật cả ngày có thể gây hằn, bí và khó chịu — thoải mái quan trọng hơn kiểu dáng.",
      "Không cần mua cả bộ đồng bộ nếu bạn không thích. Vừa vặn và thoải mái quan trọng hơn nhiều.",
    ],
    faq: [
      {
        q: "Bao lâu nên thay đồ lót mới?",
        a: "Không có mốc cố định. Cứ nhìn tình trạng: thun giãn, gọng cong, vải mỏng, ố màu không giặt sạch được là lúc thay.",
      },
      {
        q: "Có cần giặt riêng không?",
        a: "Nên. Giặt tay hoặc cho vào túi lưới rồi giặt máy ở chế độ nhẹ giúp giữ form lâu hơn nhiều, nhất là với áo có gọng.",
      },
      {
        q: "Mặc áo ngực thể thao cả ngày được không?",
        a: "Được nếu bạn thấy thoải mái, nhưng loại nén chặt mặc cả ngày có thể gây khó chịu. Đổi sang loại thường khi không vận động.",
      },
      {
        q: "Đồ lót đắt tiền có đáng không?",
        a: "Đáng ở chỗ chất liệu và độ bền của thun, gọng. Nhưng đúng size vẫn quan trọng hơn giá tiền rất nhiều.",
      },
    ],
    sources: [],
  },

  {
    slug: "tu-do-co-ban-cho-nu",
    title: "Tủ đồ cơ bản cho nữ: mua ít mặc nhiều",
    excerpt:
      "Bí quyết không nằm ở việc mua thêm, mà ở chỗ những món trong tủ có phối được với nhau hay không.",
    readTimeMinutes: 4,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Chọn một bảng màu nền trung tính (đen, trắng, be, xanh navy) rồi xây quanh vài món dùng nhiều: áo thun trơn, sơ mi, quần âu hoặc jeans vừa dáng, một chân váy hoặc váy liền đơn giản, một áo khoác lịch sự, giày bệt và giày đi làm. Vừa người và thoải mái quan trọng hơn chạy theo mốt.",
    prepare: [
      "Dọn tủ, để riêng những món một năm chưa mặc",
      "Ghi lại số đo: vai, ngực, eo, hông, dài chân",
      "Nghĩ về lịch sinh hoạt THẬT: bạn đi làm, đi học hay ở nhà nhiều hơn",
      "Chụp ảnh những món bạn đang có để khỏi mua trùng",
    ],
    steps: [
      {
        title: "Bắt đầu bằng việc dọn tủ",
        detail:
          "Nhìn rõ mình có gì trước khi mua thêm. Món nào mặc thấy không thoải mái thì dù đẹp cũng nên cho đi — bạn sẽ không bao giờ mặc nó.",
      },
      {
        title: "Chia làm ba nhóm khi dọn",
        detail:
          "Giữ, cho đi, và phân vân. Nhóm phân vân cất vào thùng riêng ba tháng — hết ba tháng chưa đụng tới thì cho đi luôn.",
      },
      {
        title: "Chốt bảng màu nền",
        detail:
          "Hai ba màu trung tính làm nền, rồi thêm một hai màu bạn thích làm điểm nhấn. Tủ đồ tự nhiên phối được với nhau mà không cần nghĩ.",
      },
      {
        title: "Chọn theo lịch sinh hoạt thật",
        detail:
          "Đừng mua theo cuộc sống tưởng tượng. Ngày nào cũng đi làm thì đầu tư đồ đi làm, chứ không phải váy dạ tiệc mỗi năm mặc một lần.",
      },
      {
        title: "Ưu tiên vừa vặn và thoải mái",
        detail:
          "Món đẹp mà phải hóp bụng cả ngày thì rốt cuộc sẽ nằm trong tủ. Mang ra tiệm sửa cho vừa là cách nâng cấp rẻ nhất.",
      },
      {
        title: "Đầu tư vào món mặc nhiều nhất",
        detail:
          "Áo khoác, giày, quần đi làm — những thứ dùng lại liên tục thì đáng bỏ tiền hơn món chỉ mặc vài lần.",
      },
      {
        title: "Áp dụng quy tắc ba bộ trước khi mua",
        detail:
          "Trước khi trả tiền, thử nghĩ ra ba bộ phối từ đồ đang có. Không nghĩ ra được thì thường món đó sẽ nằm im trong tủ.",
      },
      {
        title: "Kiểm tra chất liệu và đường may",
        detail:
          "Vải mỏng thấy rõ, đường may lệch, chỉ thừa nhiều — đây là dấu hiệu món đồ sẽ hỏng sau vài lần giặt.",
      },
      {
        title: "Chuẩn bị một bộ cứu nguy",
        detail:
          "Một bộ bạn biết chắc mặc lên là ổn, dùng cho những hôm vội hoặc có việc đột xuất. Giặt xong treo riêng ra.",
      },
      {
        title: "Bổ sung dần thay vì thay cả tủ",
        detail:
          "Có nền rồi thì mỗi mùa thêm một hai món. Cách này vừa đỡ tốn vừa giúp tủ đồ luôn phối được với nhau.",
      },
    ],
    notes: [
      "Mua online thì đối chiếu bảng size của chính hãng đó và đọc kỹ chính sách đổi trả.",
      "Không có bộ quy tắc nào bắt bạn phải mặc gì theo dáng người — thoải mái và tự tin là tiêu chí cuối cùng.",
      "Đồ giảm giá chỉ đáng mua nếu bạn đã định mua món đó từ trước. Mua vì rẻ là cách nhanh nhất để tủ đầy đồ không mặc.",
    ],
    faq: [
      {
        q: "Ngân sách ít thì mua gì trước?",
        a: "Một chiếc quần hoặc chân váy vừa vặn và một đôi giày đi được nhiều dịp. Hai món này dùng nhiều nhất so với số tiền bỏ ra.",
      },
      {
        q: "Làm sao bớt mua đồ rồi bỏ xó?",
        a: "Trước khi mua, thử nghĩ ra ba bộ phối từ đồ đang có. Không nghĩ ra được thì thường là món đó sẽ nằm im trong tủ.",
      },
      {
        q: "Bao nhiêu món là đủ?",
        a: "Ít hơn bạn nghĩ. Khoảng 6–8 áo, 3–4 quần hoặc váy, 2–3 đôi giày và một áo khoác đã đủ phối cho cả tháng nếu cùng bảng màu.",
      },
      {
        q: "Có nên theo trend không?",
        a: "Theo một hai món nhỏ thì vui và không tốn. Thay cả tủ theo mùa thì vừa tốn vừa nhanh lỗi thời.",
      },
    ],
    sources: [],
  },

  {
    slug: "mac-gi-di-phong-van-cho-nu",
    title: "Mặc gì đi phỏng vấn cho nữ",
    excerpt:
      "Gọn gàng, thoải mái và đúng mức trang trọng — ba tiêu chí đó ăn đứt việc mặc đồ đắt tiền.",
    readTimeMinutes: 4,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Công thức an toàn: áo sơ mi hoặc áo kiểu trơn, quần âu hoặc chân váy dài qua gối, giày kín mũi đi được thoải mái. Màu trung tính, là phẳng, và thử mặc trọn bộ trước một hôm — có ngồi xuống và đi lại. Không rõ mức trang trọng thì chỉnh tề hơn một bậc vẫn an toàn.",
    prepare: [
      "Tìm hiểu văn hoá nơi ứng tuyển — xem ảnh nhân viên trên trang của công ty",
      "Chuẩn bị và là đồ từ tối hôm trước, treo lên",
      "Thử đi lại và ngồi xuống trong bộ đồ đó",
      "Một đôi giày bệt dự phòng nếu phải đi bộ xa",
    ],
    steps: [
      {
        title: "Xác định mức trang trọng",
        detail:
          "Ngân hàng, luật, khách sạn, cơ quan nhà nước thì chỉn chu. Công ty sáng tạo hay công nghệ thì nhẹ nhàng hơn. Xem ảnh nhân viên trên website của họ là biết.",
      },
      {
        title: "Chọn đồ bạn ngồi được thoải mái",
        detail:
          "Phỏng vấn có thể kéo dài. Váy quá ngắn khi ngồi hay giày cao khó đi sẽ làm bạn mất tập trung vào chuyện quan trọng hơn.",
      },
      {
        title: "Chọn màu trung tính",
        detail:
          "Trắng, be, xanh navy, xám, đen. Hoạ tiết lớn và màu quá nổi khiến người ta nhớ bộ đồ thay vì nhớ bạn đã nói gì.",
      },
      {
        title: "Kiểm tra độ kín đáo khi cử động",
        detail:
          "Cúi xuống, giơ tay, ngồi xuống trước gương. Áo hở cổ quá sâu hay váy tụt lên khi ngồi là thứ bạn sẽ bận tâm suốt buổi.",
      },
      {
        title: "Là phẳng và kiểm tra chi tiết",
        detail:
          "Áo nhăn, chỉ thừa, cúc lỏng, xù lông là những thứ người đối diện nhận ra ngay. Soi gương toàn thân lần cuối trước khi đi.",
      },
      {
        title: "Giày: ưu tiên đi được thoải mái",
        detail:
          "Giày kín mũi, gót vừa phải hoặc bệt. Giày mới cứng chưa quen chân là lựa chọn tệ cho một buổi bạn cần tập trung.",
      },
      {
        title: "Trang điểm và phụ kiện tối giản",
        detail:
          "Nhẹ nhàng, gọn gàng. Trang sức lớn phát ra tiếng động khi bạn cử động dễ gây phân tâm cho cả hai bên.",
      },
      {
        title: "Tóc gọn để không phải vuốt liên tục",
        detail:
          "Buộc gọn hoặc kẹp lại. Vuốt tóc liên tục khiến bạn trông thiếu tự tin dù bạn không hề nghĩ vậy.",
      },
      {
        title: "Chuẩn bị phương án dự phòng",
        detail:
          "Mang một đôi giày bệt nếu phải đi bộ xa, một chiếc áo khoác mỏng phòng phòng họp lạnh, và một cái ô nếu trời có thể mưa.",
      },
      {
        title: "Thử trọn bộ trước một hôm",
        detail:
          "Mặc thử, ngồi, đứng, đi lại. Phát hiện chật hay bung cúc lúc ở nhà vẫn hơn lúc đang phỏng vấn.",
      },
      {
        title: "Phỏng vấn online chuẩn bị tương tự",
        detail:
          "Áo trơn màu trung tính (tránh sọc nhỏ vì hiện lên màn hình bị nhoè), phông nền gọn, ánh sáng chiếu từ phía trước mặt.",
      },
    ],
    notes: [
      "Không ai bị đánh giá thấp vì mặc đơn giản mà gọn gàng. Nhưng đồ nhàu, giày bẩn thì có.",
      "Bộ đồ khiến bạn thấy tự tin quan trọng hơn bộ đồ đúng mốt. Nếu bạn cứ phải chỉnh sửa suốt buổi thì nó đang làm bạn mất tập trung.",
      "Nếu bạn đang mang thai hoặc có nhu cầu đặc biệt về trang phục, cứ ưu tiên sự thoải mái của mình — không nhà tuyển dụng tử tế nào lấy đó làm tiêu chí.",
    ],
    faq: [
      {
        q: "Có bắt buộc mặc vest không?",
        a: "Không, trừ khi nơi đó yêu cầu rõ. Áo sơ mi với quần âu chỉn chu là đủ cho hầu hết buổi phỏng vấn ở Việt Nam.",
      },
      {
        q: "Nhuộm tóc màu nổi hoặc có hình xăm thì sao?",
        a: "Tuỳ môi trường. Nơi truyền thống thì cân nhắc che bớt trong buổi đầu; nơi cởi mở thì không thành vấn đề.",
      },
      {
        q: "Có nên đi giày cao gót không?",
        a: "Chỉ nếu bạn đi thoải mái. Gót thấp hoặc giày bệt lịch sự hoàn toàn ổn và giúp bạn tập trung vào phần quan trọng hơn.",
      },
      {
        q: "Trang điểm đậm có bị đánh giá không?",
        a: "Ở môi trường công sở truyền thống thì nên nhẹ nhàng. Nhưng tiêu chí thật vẫn là gọn gàng và chỉn chu, không phải đậm hay nhạt.",
      },
    ],
    sources: [],
  },

  {
    slug: "cham-da-co-ban-bat-dau-tu-dau",
    title: "Chăm da cơ bản: bắt đầu từ đâu",
    excerpt:
      "Không cần bảy bước và mười lọ. Ba bước làm đều đặn ăn đứt mười bước làm được vài hôm.",
    readTimeMinutes: 4,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Ba bước cốt lõi: làm sạch, dưỡng ẩm, chống nắng ban ngày. Làm đều đặn vài tháng rồi mới tính thêm sản phẩm đặc trị. Thử sản phẩm mới thì thêm TỪNG MÓN MỘT và dùng ít nhất vài tuần — thêm ba món cùng lúc thì lúc kích ứng không biết do món nào.",
    prepare: [
      "Biết da mình thuộc loại nào: dầu, khô, hỗn hợp hay nhạy cảm",
      "Ba sản phẩm cơ bản, không cần đắt tiền",
      "Kiên nhẫn: da cần vài tuần tới vài tháng mới thấy khác",
      "Chỗ để sản phẩm nơi bạn nhìn thấy mỗi ngày, để không quên",
    ],
    steps: [
      {
        title: "Xác định loại da",
        detail:
          "Rửa mặt xong để yên một tiếng không bôi gì: bóng dầu khắp mặt là da dầu, căng khô là da khô, chỉ bóng vùng chữ T là da hỗn hợp, dễ đỏ rát là da nhạy cảm.",
      },
      {
        title: "Làm sạch dịu nhẹ, sáng và tối",
        detail:
          "Nước ấm vừa, sữa rửa mặt dịu nhẹ, massage 30 giây rồi rửa sạch. Không chà xát mạnh và không dùng nước quá nóng.",
      },
      {
        title: "Tẩy trang trước khi rửa mặt buổi tối",
        detail:
          "Có trang điểm hoặc bôi chống nắng thì phải tẩy trang trước rồi mới rửa mặt. Chỉ rửa mặt không đủ để làm sạch lớp chống nắng.",
      },
      {
        title: "Dưỡng ẩm phù hợp loại da",
        detail:
          "Da dầu chọn loại mỏng nhẹ, da khô chọn loại giàu ẩm hơn. Da dầu VẪN cần dưỡng ẩm — bỏ qua thì da tiết dầu nhiều hơn để bù.",
      },
      {
        title: "Chống nắng mỗi sáng",
        detail:
          "Đây là bước có tác động lâu dài nhất tới da, hơn mọi sản phẩm đặc trị. Bôi đủ lượng và bôi lại nếu ở ngoài trời lâu.",
      },
      {
        title: "Bôi theo thứ tự từ lỏng tới đặc",
        detail:
          "Sản phẩm dạng nước trước, dạng kem sau, chống nắng cuối cùng vào buổi sáng. Đây là nguyên tắc đơn giản mà hiệu quả.",
      },
      {
        title: "Làm đều đặn ít nhất một tháng trước khi đánh giá",
        detail:
          "Da cần thời gian. Đổi sản phẩm mỗi tuần là lý do phổ biến nhất khiến da mãi không ổn định.",
      },
      {
        title: "Thêm sản phẩm đặc trị từ từ",
        detail:
          "Mỗi lần chỉ thêm MỘT món và dùng ít nhất vài tuần. Bắt đầu với tần suất thấp rồi tăng dần nếu da chịu được.",
      },
      {
        title: "Thử ở vùng nhỏ trước",
        detail:
          "Bôi thử ở góc hàm hoặc sau tai vài ngày trước khi bôi cả mặt, nhất là với sản phẩm đặc trị hoặc khi da bạn nhạy cảm.",
      },
      {
        title: "Chăm cả những thứ ngoài mỹ phẩm",
        detail:
          "Ngủ đủ, uống đủ nước, giặt vỏ gối thường xuyên, không sờ tay lên mặt. Những thứ này miễn phí mà ảnh hưởng thật.",
      },
    ],
    notes: [
      "Mụn viêm nặng, mẩn đỏ lan rộng, ngứa rát kéo dài: đi khám da liễu thay vì đổi hết sản phẩm này sang sản phẩm khác.",
      "Cẩn thận với kem trộn và sản phẩm cam kết trắng nhanh sau vài ngày — nhiều loại chứa chất gây hại và làm da phụ thuộc.",
      "Bài viết không phải tư vấn y khoa; đang dùng thuốc điều trị da thì hỏi bác sĩ trước khi thêm sản phẩm mới.",
      "Đang mang thai hoặc cho con bú thì một số hoạt chất cần tránh — hỏi bác sĩ trước khi dùng sản phẩm đặc trị.",
    ],
    faq: [
      {
        q: "Da dầu có cần dưỡng ẩm không?",
        a: "Có. Thiếu ẩm khiến da tiết dầu bù nhiều hơn. Chọn loại mỏng nhẹ, không gây bí là được.",
      },
      {
        q: "Bao lâu thì thấy hiệu quả?",
        a: "Thường vài tuần tới vài tháng tuỳ vấn đề. Đổi sản phẩm liên tục mỗi tuần là lý do phổ biến khiến da mãi không ổn định.",
      },
      {
        q: "Có cần dùng đủ bảy bước như trên mạng không?",
        a: "Không. Ba bước làm đều đặn hiệu quả hơn nhiều so với bảy bước làm được một tuần rồi bỏ.",
      },
      {
        q: "Sản phẩm đắt tiền có tốt hơn không?",
        a: "Không nhất thiết. Điều quan trọng là thành phần phù hợp với da bạn và bạn dùng đều đặn. Nhiều sản phẩm bình dân làm tốt ba bước cơ bản.",
      },
    ],
    sources: [],
  },

  {
    slug: "trang-diem-toi-gian-cho-nguoi-moi",
    title: "Trang điểm tối giản cho người mới",
    excerpt:
      "Năm phút, bốn món. Đủ để trông tươi tắn đi làm mà không cần học kỹ thuật gì phức tạp.",
    readTimeMinutes: 4,
    category: "nu-gioi",
    author: null,
    quickAnswer:
      "Bốn món cơ bản là đủ: kem chống nắng hoặc kem lót, kem nền mỏng hoặc che khuyết điểm, một chút má hồng, và son. Chọn tông gần với màu da và màu môi tự nhiên của bạn. Và quan trọng nhất trong cả quy trình: TẨY TRANG SẠCH vào buổi tối.",
    prepare: [
      "Biết tông da của mình — thử màu nền ở đường viền hàm chứ đừng thử ở mu bàn tay",
      "Bốn món cơ bản, không cần cả bộ",
      "Sản phẩm tẩy trang phù hợp",
      "Gương và ánh sáng tự nhiên nếu được",
    ],
    steps: [
      {
        title: "Dưỡng ẩm và chống nắng trước",
        detail:
          "Da đủ ẩm thì lớp trang điểm mới mịn, không bị mốc hay bám vào vùng khô. Đợi vài phút cho thấm rồi mới trang điểm.",
      },
      {
        title: "Chọn đúng tông nền",
        detail:
          "Thử ở đường viền hàm dưới ánh sáng tự nhiên. Màu đúng là màu bạn gần như không thấy ranh giới. Thử ở mu bàn tay là sai vì màu tay khác màu mặt.",
      },
      {
        title: "Che chỗ cần che, không phủ kín cả mặt",
        detail:
          "Chấm che khuyết điểm ở quầng mắt và vài chỗ cần, tán đều bằng đầu ngón tay hoặc mút ẩm. Lớp nền càng mỏng nhìn càng tự nhiên.",
      },
      {
        title: "Một chút má hồng cho tươi",
        detail:
          "Đây là món tạo hiệu quả nhanh nhất mà nhiều người bỏ qua. Chấm nhẹ lên phần gò má rồi tán mờ dần — thà ít rồi thêm còn hơn nhiều rồi phải chữa.",
      },
      {
        title: "Son tông gần môi thật",
        detail:
          "Màu gần với môi tự nhiên hợp mọi hoàn cảnh công sở. Muốn nổi bật hơn thì để dành cho dịp riêng.",
      },
      {
        title: "Kiểm tra dưới ánh sáng khác",
        detail:
          "Trang điểm dưới đèn vàng rồi ra nắng có thể lệch tông. Soi gương gần cửa sổ trước khi ra khỏi nhà.",
      },
      {
        title: "Mang theo đồ dặm nếu cần",
        detail:
          "Một thỏi son và giấy thấm dầu là đủ cho cả ngày. Không cần mang cả túi mỹ phẩm.",
      },
      {
        title: "Tối về TẨY TRANG THẬT SẠCH",
        detail:
          "Đây là bước quan trọng nhất trong cả quy trình. Để nguyên lớp trang điểm đi ngủ là nguyên nhân phổ biến gây bít tắc và mụn.",
      },
      {
        title: "Rửa mặt lại sau khi tẩy trang",
        detail:
          "Tẩy trang xong vẫn cần rửa mặt để làm sạch phần còn lại. Hai bước này bổ trợ nhau chứ không thay nhau.",
      },
      {
        title: "Vệ sinh dụng cụ định kỳ",
        detail:
          "Rửa cọ và mút mỗi tuần bằng xà phòng dịu nhẹ, phơi khô hẳn. Cọ bẩn là nguyên nhân gây mụn mà rất nhiều người bỏ qua.",
      },
    ],
    notes: [
      "Không dùng chung cọ, mút hay son với người khác — dễ lây nhiễm khuẩn.",
      "Đồ trang điểm cũng có hạn dùng, nhất là sản phẩm dùng quanh mắt. Đổi màu, đổi mùi hoặc tách lớp thì bỏ.",
      "Ngứa, đỏ, sưng sau khi dùng sản phẩm mới: ngưng ngay và đi khám nếu không đỡ.",
      "Cẩn thận với mỹ phẩm không rõ nguồn gốc bán trên mạng xã hội — hàng giả rất phổ biến ở mảng này.",
    ],
    faq: [
      {
        q: "Trang điểm hằng ngày có hại da không?",
        a: "Vấn đề thường nằm ở việc tẩy trang không sạch và dụng cụ bẩn, chứ không phải bản thân việc trang điểm. Làm sạch kỹ là chính.",
      },
      {
        q: "Không thích trang điểm thì sao?",
        a: "Thì thôi. Chống nắng và dưỡng ẩm mới là phần thật sự cần cho da, còn lại hoàn toàn tuỳ sở thích.",
      },
      {
        q: "Mua sản phẩm ở đâu cho đáng tin?",
        a: "Cửa hàng chính hãng, chuỗi mỹ phẩm lớn, hoặc gian hàng chính hãng trên sàn thương mại điện tử. Tránh hàng xách tay không rõ nguồn.",
      },
      {
        q: "Bắt đầu với ngân sách ít thì mua gì?",
        a: "Một thỏi son hợp tông và một hộp che khuyết điểm. Hai món này tạo khác biệt lớn nhất so với số tiền bỏ ra.",
      },
    ],
    sources: [],
  },
];
