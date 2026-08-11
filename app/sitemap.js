import { guides } from "@/data/guides";
import { site } from "@/data/site";

// Tự sinh sitemap.xml — điểm cộng SEO mà trang tham khảo còn thiếu
export default function sitemap() {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...guides.map((g) => ({
      url: `${base}/cam-nang/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
