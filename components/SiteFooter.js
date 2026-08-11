import { site } from "@/data/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              {site.brandMark}
            </span>
            {site.name}
          </p>
          <p className={styles.tagline}>
            {site.tagline}. {site.footer.tagline}
          </p>
        </div>
        <p className={styles.credit}>
          {site.footer.credit.split("♥")[0]}
          <span className={styles.heart} aria-label="thương">
            ♥
          </span>
          {site.footer.credit.split("♥")[1]}
        </p>
      </div>
    </footer>
  );
}
