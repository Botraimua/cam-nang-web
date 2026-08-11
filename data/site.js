// ⚙️ TRUNG TÂM THƯƠNG HIỆU — sửa file này là đổi tên/lời văn của CẢ trang.
// Chị muốn đổi tên trang, câu chào, lời kêu gọi... thì chỉ cần sửa ở đây.

export const site = {
  name: "Biết Liền!",
  tagline: "Cẩm nang việc đời thường",

  // ❗ Sau khi deploy lên Vercel, đổi thành domain thật (vd "https://biet-lien.vercel.app")
  // để sitemap + thẻ chia sẻ mạng xã hội trỏ đúng địa chỉ.
  url: "http://localhost:3000",

  description:
    "Cẩm nang ngắn gọn cho những việc đời thường chưa ai kịp chỉ bạn — đọc vài bước là làm được liền.",

  hero: {
    eyebrow: "Cẩm nang việc đời thường",
    title: "Chuyện ai cũng gặp, chẳng ai kịp chỉ.",
    description:
      "Chưa biết là chuyện bình thường. Gõ thứ đang làm bạn bối rối, đọc vài bước ngắn gọn, xong việc liền tay.",
  },

  search: {
    label: "Tìm kiếm cẩm nang",
    placeholder: "Hôm nay bạn bí chuyện gì?",
    button: "Tìm ngay",
    suggestionsLabel: "Thử tìm:",
    suggestions: ["CCCD", "thuê trọ", "thay nhớt"],
  },

  ribbon: ["Bí hả?", "Ai cũng có lần đầu tiên.", "Từng bước một là xong."],

  guides: {
    eyebrow: "Kho cẩm nang",
    heading: "Chọn chuyện bạn đang gặp",
    filterLabel: "Lọc theo:",
    allLabel: "Tất cả",
    empty: "Chưa có cẩm nang nào khớp từ khoá này. Thử chữ khác nhé!",
    emptyButton: "Xem tất cả cẩm nang",
  },

  howItWorks: {
    eyebrow: "Không cần ghi nhớ gì cả",
    heading: "Ba bước là xử lý gọn",
    description: "Mục tiêu không phải thành chuyên gia — chỉ cần biết bước tiếp theo.",
    steps: [
      {
        title: "Tìm đúng chuyện",
        detail: "Gõ câu hỏi y như cách bạn vẫn nói hằng ngày, không cần từ khoá chuẩn.",
      },
      {
        title: "Đọc vài bước",
        detail: "Chỉ những gì cần biết, xếp theo đúng thứ tự cần làm.",
      },
      {
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
  },

  detail: {
    sticker: "Xong là biết liền!",
    quickKicker: "Nói ngắn gọn",
    quickHeading: "Bạn cần làm gì?",
    prepareHeading: "Chuẩn bị gì trước?",
    stepsHeading: "Làm từng bước",
    notesHeading: "Điều cần lưu ý",
    faqHeading: "Câu hỏi thường gặp",
    sourcesHeading: "Nguồn tham khảo",
    sourcesJump: "Xem nguồn tham khảo ↓",
    authorPrefix: "Hướng dẫn bởi",
    bottomKicker: "Vậy là biết cách rồi",
    bottomHeading: "Còn chuyện gì đang làm bạn bí?",
    bottomButton: "Xem cẩm nang khác",
    breadcrumbAll: "Tất cả cẩm nang",
    disclaimer:
      "Quy trình, ứng dụng và mức phí có thể thay đổi theo thời điểm hoặc địa phương — nếu thấy khác, cứ hỏi trực tiếp nơi bạn đến.",
  },

  footer: {
    tagline: "Ngắn gọn. Dễ làm. Không phán xét.",
    credit: "Làm với ♥ cho những lần đầu bớt bối rối.",
  },
};
