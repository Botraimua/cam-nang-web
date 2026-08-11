import Link from "next/link";
import { categoryMap } from "@/data/categories";
import { site } from "@/data/site";
import styles from "./GuideCard.module.css";

export default function GuideCard({ guide }) {
  const cat = categoryMap[guide.category];
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={`${styles.icon} tone-${cat?.tone || "peach"}`} aria-hidden="true">
          {cat?.emoji}
        </div>
        <div className={styles.meta}>
          <span>{cat?.name}</span>
          <span>{guide.readTimeMinutes} phút đọc</span>
        </div>
      </div>
      <Link href={`/cam-nang/${guide.slug}`} className={styles.link}>
        <h3>{guide.title}</h3>
        <p>{guide.excerpt}</p>
      </Link>
      {guide.author?.name ? (
        <a
          className={styles.author}
          href={guide.author.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.detail.authorPrefix} {guide.author.name}
        </a>
      ) : null}
    </article>
  );
}
