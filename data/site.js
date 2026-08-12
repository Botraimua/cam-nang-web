// ⚙️ TRUNG TÂM THƯƠNG HIỆU — sửa file này là đổi tên/lời văn của CẢ trang.
// Chị muốn đổi tên trang, câu chào, lời kêu gọi... thì chỉ cần sửa ở đây.

export const site = {
  name: "Biết Liền!",
  brandMark: "?!", // chữ trong ô logo vuông tím
  tagline: "Cẩm nang việc đời thường",

  // Địa chỉ chính của trang. Đổi ở đây là sitemap, thẻ chia sẻ mạng xã hội
  // và email báo duyệt bài đều tự dùng địa chỉ mới.
  url: "https://bietlien.vercel.app",

  description:
    "Cẩm nang ngắn gọn cho những việc đời thường chưa ai kịp chỉ bạn — đọc vài bước là làm được liền.",

  hero: {
    eyebrow: "Cẩm nang việc đời thường",
    title: "Chuyện ai cũng gặp,",
    titleAccent: "chẳng ai kịp chỉ.", // phần được tô vệt bút dạ vàng
    description:
      "Chưa biết là chuyện bình thường. Gõ thứ đang làm bạn bối rối, đọc vài bước ngắn gọn, xong việc liền tay.",
    // Cụm minh hoạ bên phải hero (2 thẻ dán + tia sáng)
    visual: {
      question: "Hả?",
      questionNote: "Ai cũng có lần đầu tiên.",
      answerNote: "Từng bước một là xong.",
    },
  },

  // Dải chữ chạy ngang giữa hero và kho cẩm nang
  marquee: [
    "Ai cũng từng là lính mới",
    "Không biết thì hỏi, ngại gì",
    "Từng bước một là xong",
    "Xong việc, nhẹ đầu",
    "Biết là làm liền!",
  ],

  search: {
    label: "Tìm kiếm cẩm nang",
    placeholder: "Hôm nay bạn bí chuyện gì?",
    button: "Tìm ngay",
    suggestionsLabel: "Thử tìm:",
    suggestions: ["CCCD", "thuê trọ", "thay nhớt"],
  },

  guides: {
    eyebrow: "Mới nhất lên đầu",
    heading: "Chọn chuyện bạn đang gặp",
    sideNote: "Gõ vài chữ hoặc lọc theo nhóm — mỗi bài chỉ vài phút đọc, làm được ngay.",
    filterLabel: "Lọc theo:",
    allLabel: "Tất cả",
    emptyTitle: "Chưa tìm thấy cẩm nang nào",
    empty: "Thử từ khoá khác, hoặc xem tất cả rồi lọc dần nhé!",
    emptyButton: "Xem tất cả cẩm nang",
    loading: "Đang tải thêm...",
    countLabel: "cẩm nang", // dòng đếm kết quả: "52 cẩm nang" / "5 cẩm nang cho 'trọ'"
    countFor: "cho",
  },

  howItWorks: {
    eyebrow: "Không cần ghi nhớ gì cả",
    heading: "Ba bước là xử lý gọn",
    description: "Mục tiêu không phải thành chuyên gia — chỉ cần biết bước tiếp theo.",
    steps: [
      {
        emoji: "🔍",
        title: "Tìm đúng chuyện",
        detail: "Gõ câu hỏi y như cách bạn vẫn nói hằng ngày, không cần từ khoá chuẩn.",
      },
      {
        emoji: "📋",
        title: "Đọc vài bước",
        detail: "Chỉ những gì cần biết, xếp theo đúng thứ tự cần làm.",
      },
      {
        emoji: "✅",
        title: "Tick là xong",
        detail: "Làm tới đâu đánh dấu tới đó — xong việc là xong chuyện.",
      },
    ],
  },

  cta: {
    eyebrow: "Biết rồi thì nhẹ đầu",
    heading: "Chuyện gì cũng có cách làm.",
    description: "Bắt đầu từ việc đang khiến bạn lúng túng nhất hôm nay.",
    button: "Khám phá cẩm nang",
    sticker: "Nhẹ cả đầu!",
  },

  detail: {
    sticker: "Xong là biết liền!",
    quickKicker: "Nói ngắn gọn",
    quickHeading: "Bạn cần làm gì?",
    tocTitle: "Trong bài này",
    prepareHeading: "Chuẩn bị gì trước?",
    stepsHeading: "Làm từng bước",
    notesHeading: "Điều cần lưu ý",
    faqHeading: "Câu hỏi thường gặp",
    sourcesHeading: "Nguồn tham khảo",
    sourcesJump: "Xem nguồn tham khảo ↓",
    authorPrefix: "Hướng dẫn bởi",
    publishedPrefix: "Đăng ngày",
    bottomKicker: "Vậy là biết cách rồi",
    bottomHeading: "Còn chuyện gì đang làm bạn bí?",
    bottomButton: "Xem cẩm nang khác",
    breadcrumbAll: "Tất cả cẩm nang",
    disclaimer:
      "Quy trình, ứng dụng và mức phí có thể thay đổi theo thời điểm hoặc địa phương — nếu thấy khác, cứ hỏi trực tiếp nơi bạn đến.",
  },

  // Form "Đóng góp" — bài gửi sẽ được soạn sẵn để gửi về email bên dưới
  contribute: {
    button: "Đóng góp",
    kicker: "Cùng góp cho đỡ bối rối",
    heading: "Chia sẻ một cẩm nang",
    description:
      "Bạn kể tự nhiên thôi — tụi mình sẽ biên tập gọn thành từng bước và duyệt kỹ trước khi đăng.",
    titleLabel: "Tiêu đề",
    titlePlaceholder: "Ví dụ: Lần đầu đi làm thẻ ngân hàng?",
    categoryLabel: "Danh mục",
    categoryPlaceholder: "Chọn danh mục",
    nameLabel: "Tên của bạn hoặc Threads",
    nameOptional: "(không bắt buộc)",
    namePlaceholder: "Ngọc, @ngoc.02 hoặc link trang của bạn",
    contentLabel: "Chia sẻ hướng dẫn của bạn",
    contentPlaceholder: "Kể các bước bạn đã làm, điều nên tránh, và link nguồn chính thức nếu có.",
    submit: "Gửi hướng dẫn",
    sending: "Đang gửi...",
    publicNote:
      "Bài gửi vào hàng chờ duyệt công khai; biên tập viên xem lại trước khi đăng lên trang.",
    doneTitle: "Đã gửi rồi, cảm ơn bạn!",
    doneDesc:
      "Bài của bạn đang nằm trong hàng chờ. Biên tập viên đọc và duyệt xong là bài lên trang — thường trong vòng vài ngày.",
    doneClose: "Xong",
    errorTitle: "Chưa gửi được",
    errorDesc: "Đường truyền có vẻ trục trặc. Bạn thử lại, hoặc gửi thẳng cho tụi mình bên dưới nhé.",
    sendTitle: "Gần xong rồi!",
    sendDesc: "Nội dung đã soạn sẵn — chọn một cách gửi bên dưới:",
    sendMail: "📧 Mở email để gửi",
    sendCopy: "📋 Sao chép nội dung",
    copied: "Đã sao chép! Dán vào Zalo/tin nhắn gửi tụi mình nhé",
    back: "← Quay lại sửa",
    // ❗ Email nhận bài đóng góp khi hệ thống tự động trục trặc.
    // Địa chỉ này hiện công khai trên trang, đổi tại đây nếu cần.
    email: "contimbanggia11@gmail.com",
  },

  footer: {
    tagline: "Ngắn gọn. Dễ làm. Không phán xét.",
    credit: "Làm với ♥ cho những lần đầu bớt bối rối.",
  },
};
