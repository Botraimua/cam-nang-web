import { site } from "@/data/site";

// Tự sinh robots.txt — điểm cộng SEO mà trang tham khảo còn thiếu
export default function robots() {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
