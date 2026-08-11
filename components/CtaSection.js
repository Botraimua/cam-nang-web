import Link from "next/link";
import { site } from "@/data/site";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.card}>
        <span className={styles.sparkle} aria-hidden="true">✦</span>
        <span className={styles.sparkleB} aria-hidden="true">✦</span>
        <span className={styles.eyebrow}>{site.cta.eyebrow}</span>
        <h2 className={styles.heading}>{site.cta.heading}</h2>
        <p className={styles.desc}>{site.cta.description}</p>
        <Link href="/#cam-nang" className={styles.button}>
          {site.cta.button}
        </Link>
      </div>
    </section>
  );
}
