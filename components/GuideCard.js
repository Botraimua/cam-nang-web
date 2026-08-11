import Link from "next/link";
import { categoryMap } from "@/data/categories";
import { site } from "@/data/site";
import styles from "./GuideCard.module.css";

export default function GuideCard({ guide }) {
  const cat = categoryMap[guide.category];
  return (
    <article className={`${styles.card} tone-${cat?.tone || "peach"}`}>
      <div className={styles.chips}>
        <span className={styles.catChip}>
          <span aria-hidden="true">{cat?.emoji}</span> {cat?.name}
        </span>
        <span className={styles.readChip}>{guide.readTimeMinutes} phút đọc</span>
      </div>
      <h3 className={styles.title}>
        <Link href={`/cam-nang/${guide.slug}`} className={styles.titleLink}>
          {guide.title}
        </Link>
      </h3>
      <p className={styles.excerpt}>{guide.excerpt}</p>
      {guide.author?.name && (
        <p className={styles.author}>
          {site.detail.authorPrefix}{" "}
          {guide.author.url ? (
            <a href={guide.author.url} target="_blank" rel="noopener noreferrer">
              {guide.author.name}
            </a>
          ) : (
            guide.author.name
          )}
        </p>
      )}
    </article>
  );
}
