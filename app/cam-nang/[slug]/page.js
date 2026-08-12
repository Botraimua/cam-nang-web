import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, guideMap } from "@/data/guides";
import { categoryMap } from "@/data/categories";
import { site } from "@/data/site";
import { formatDate } from "@/lib/date";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StepChecklist from "@/components/StepChecklist";
import TocNav from "@/components/TocNav";
import ScrollTop from "@/components/ScrollTop";
import styles from "./page.module.css";

// Render tĩnh sẵn toàn bộ trang chi tiết (SSG — giống trang tham khảo)
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: {
      title: `${guide.title} | ${site.name}`,
      description: guide.excerpt,
      type: "article",
      locale: "vi_VN",
      publishedTime: guide.publishedAt,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) notFound();

  const cat = categoryMap[guide.category];
  const d = site.detail;
  const hasSources = guide.sources?.length > 0 || guide.author?.url;

  const toc = [
    guide.prepare?.length > 0 && { id: "chuan-bi", label: d.prepareHeading },
    guide.steps?.length > 0 && { id: "cac-buoc", label: d.stepsHeading },
    guide.notes?.length > 0 && { id: "luu-y", label: d.notesHeading },
    guide.faq?.length > 0 && { id: "cau-hoi", label: d.faqHeading },
    hasSources && { id: "nguon", label: d.sourcesHeading },
  ].filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main className="pageEnter">
        {/* Thanh tiến độ đọc (CSS scroll-driven, tự ẩn ở trình duyệt chưa hỗ trợ) */}
        <div className={styles.readProgress} aria-hidden="true" />

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/#cam-nang">← {d.breadcrumbAll}</Link>
        </nav>

        {/* Hero 2 cột */}
        <header className={styles.hero}>
          <div>
            <span className={`${styles.categoryTag} tone-${cat?.tone || "peach"}`}>
              <span aria-hidden="true">{cat?.emoji}</span> {cat?.name}
            </span>
            <h1 id="guide-title">{guide.title}</h1>
            <p className={styles.excerpt}>{guide.excerpt}</p>
            <div className={styles.meta}>
              <span>⏱ {guide.readTimeMinutes} phút đọc</span>
              {guide.publishedAt && (
                <span>
                  📅 {site.detail.publishedPrefix}{" "}
                  <time dateTime={guide.publishedAt}>{formatDate(guide.publishedAt)}</time>
                </span>
              )}
              {guide.author?.name &&
                (guide.author.url ? (
                  <a href={guide.author.url} target="_blank" rel="noopener noreferrer">
                    {d.authorPrefix} {guide.author.name}
                  </a>
                ) : (
                  <span>
                    {d.authorPrefix} {guide.author.name}
                  </span>
                ))}
            </div>
          </div>
          <div className={`${styles.heroIcon} tone-${cat?.tone || "peach"}`} aria-hidden="true">
            <span className={styles.heroEmoji}>{cat?.emoji}</span>
            <span className={styles.heroSticker}>{d.sticker}</span>
          </div>
        </header>

        {/* Nói ngắn gọn */}
        {guide.quickAnswer && (
          <section className={styles.quickAnswer} aria-labelledby="quick-title">
            <span className={styles.quickIcon} aria-hidden="true">
              ⚡
            </span>
            <div>
              <span className={styles.kicker}>{d.quickKicker}</span>
              <h2 id="quick-title">{d.quickHeading}</h2>
              <p>{guide.quickAnswer}</p>
              {hasSources && (
                <a className={styles.jump} href="#nguon">
                  {d.sourcesJump}
                </a>
              )}
            </div>
          </section>
        )}

        {/* Mục lục + nội dung */}
        <div className={styles.contentLayout}>
          <TocNav title={d.tocTitle} items={toc} />

          <article className={styles.article}>
            {guide.prepare?.length > 0 && (
              <section id="chuan-bi">
                <h2>{d.prepareHeading}</h2>
                <ul className={styles.checklist}>
                  {guide.prepare.map((item) => (
                    <li key={item}>
                      <span className={styles.checkDot} aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {guide.steps?.length > 0 && (
              <section id="cac-buoc">
                <h2>{d.stepsHeading}</h2>
                <StepChecklist slug={guide.slug} steps={guide.steps} />
              </section>
            )}

            {guide.notes?.length > 0 && (
              <section id="luu-y">
                <h2>{d.notesHeading}</h2>
                <div className={styles.warningBox}>
                  <span aria-hidden="true" className={styles.warnIcon}>
                    ⚠️
                  </span>
                  <ul>
                    {guide.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
                <p className={styles.disclaimer}>{d.disclaimer}</p>
              </section>
            )}

            {guide.faq?.length > 0 && (
              <section id="cau-hoi">
                <h2>{d.faqHeading}</h2>
                <div className={styles.faqs}>
                  {guide.faq.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {hasSources && (
              <section id="nguon">
                <h2>{d.sourcesHeading}</h2>
                <ul className={styles.sources}>
                  {guide.author?.url && (
                    <li>
                      <a href={guide.author.url} target="_blank" rel="noopener noreferrer">
                        ↗ Bài chia sẻ gốc của {guide.author.name}
                      </a>
                    </li>
                  )}
                  {(guide.sources || []).map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        ↗ {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        </div>

        {/* CTA cuối trang */}
        <section className={styles.bottomCta}>
          <div>
            <span className={styles.kicker}>{d.bottomKicker}</span>
            <h2 id="bottom-cta-title">{d.bottomHeading}</h2>
          </div>
          <Link href="/#cam-nang">{d.bottomButton} →</Link>
        </section>
      </main>
      <SiteFooter />
      <ScrollTop />
    </>
  );
}
