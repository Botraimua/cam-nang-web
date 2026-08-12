import Link from "next/link";
import { categoryMap } from "@/data/categories";
import { site } from "@/data/site";
import { formatDate } from "@/lib/date";
import styles from "./GuideCard.module.css";

export default function GuideCard({ guide, className = "", index = 0 }) {
  const cat = categoryMap[guide.category];
  return (
    <article
      className={`${styles.card} ${className}`}
      style={{ "--i": index % 12 }}
    >
      <div className={styles.header}>
        <div className={`${styles.icon} tone-${cat?.tone || "peach"}`} aria-hidden="true">
          {cat?.emoji}
        </div>
        <div className={styles.meta}>
          <span>{cat?.name}</span>
          <span>{guide.readTimeMinutes} phút đọc</span>
        </div>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </div>
      <Link href={`/cam-nang/${guide.slug}`} className={styles.link}>
        <h3>{guide.title}</h3>
        <p>{guide.excerpt}</p>
      </Link>
      <div className={styles.footer}>
        {guide.author?.name ? (
          <a
            className={styles.author}
            href={guide.author.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.detail.authorPrefix} {guide.author.name}
          </a>
        ) : (
          <span />
        )}
        {guide.publishedAt && (
          <time className={styles.date} dateTime={guide.publishedAt}>
            {formatDate(guide.publishedAt)}
          </time>
        )}
      </div>
    </article>
  );
}
