import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, guideMap } from "@/data/guides";
import { categoryMap } from "@/data/categories";
import { site } from "@/data/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StepChecklist from "@/components/StepChecklist";
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

  return (
    <>
      <SiteHeader />
      <main className={`${styles.page} tone-${cat?.tone || "peach"}`}>
        <article className={styles.article}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/#cam-nang">{d.breadcrumbAll}</Link>
            <span aria-hidden="true">›</span>
            <Link href="/#cam-nang">{cat?.name}</Link>
            <span aria-hidden="true">›</span>
            <span className={styles.breadcrumbCurrent}>{guide.title}</span>
          </nav>

          {/* Meta */}
          <div className={styles.metaRow}>
            <span className={styles.catChip}>
              <span aria-hidden="true">{cat?.emoji}</span> {cat?.name}
            </span>
            <span className={styles.readChip}>{guide.readTimeMinutes} phút đọc</span>
            {guide.author?.name && (
              <span className={styles.author}>
                {d.authorPrefix}{" "}
                {guide.author.url ? (
                  <a href={guide.author.url} target="_blank" rel="noopener noreferrer">
                    {guide.author.name}
                  </a>
                ) : (
                  guide.author.name
                )}
              </span>
            )}
          </div>

          <h1 className={styles.title} id="guide-title">
            {guide.title}
          </h1>
          <p className={styles.lead}>{guide.excerpt}</p>
          <p className={styles.sticker} aria-hidden="true">
            {d.sticker}
          </p>

          {/* Bạn cần làm gì? */}
          {guide.quickAnswer && (
            <section className={styles.card}>
              <p className={styles.kicker}>{d.quickKicker}</p>
              <h2>{d.quickHeading}</h2>
              <p className={styles.body}>{guide.quickAnswer}</p>
              {hasSources && (
                <a className={styles.jump} href="#nguon">
                  {d.sourcesJump}
                </a>
              )}
            </section>
          )}

          {/* Chuẩn bị gì trước? */}
          {guide.prepare?.length > 0 && (
            <section className={styles.card}>
              <h2>{d.prepareHeading}</h2>
              <ul className={styles.prepareList}>
                {guide.prepare.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Làm từng bước — có checklist (nâng cấp so với trang tham khảo) */}
          {guide.steps?.length > 0 && (
            <section className={styles.card}>
              <h2>{d.stepsHeading}</h2>
              <StepChecklist slug={guide.slug} steps={guide.steps} />
            </section>
          )}

          {/* Điều cần lưu ý */}
          {guide.notes?.length > 0 && (
            <section className={styles.card}>
              <h2>{d.notesHeading}</h2>
              <ul className={styles.notesList}>
                {guide.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <p className={styles.disclaimer}>{d.disclaimer}</p>
            </section>
          )}

          {/* Câu hỏi thường gặp */}
          {guide.faq?.length > 0 && (
            <section className={styles.card}>
              <h2>{d.faqHeading}</h2>
              <dl className={styles.faq}>
                {guide.faq.map((f) => (
                  <div key={f.q} className={styles.faqItem}>
                    <dt>{f.q}</dt>
                    <dd>{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Nguồn tham khảo */}
          {hasSources && (
            <section className={styles.card} id="nguon">
              <h2>{d.sourcesHeading}</h2>
              <ul className={styles.sourcesList}>
                {guide.author?.url && (
                  <li>
                    <a href={guide.author.url} target="_blank" rel="noopener noreferrer">
                      Bài chia sẻ gốc của {guide.author.name}
                    </a>
                  </li>
                )}
                {(guide.sources || []).map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA cuối trang */}
          <section className={styles.bottomCta}>
            <p className={styles.kicker}>{d.bottomKicker}</p>
            <h2 id="bottom-cta-title">{d.bottomHeading}</h2>
            <Link href="/#cam-nang" className={styles.bottomButton}>
              {d.bottomButton}
            </Link>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
