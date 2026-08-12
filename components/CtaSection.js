import Link from "next/link";
import { site } from "@/data/site";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={`${styles.panel} revealUp`}>
      <span className={styles.sticker} aria-hidden="true">
        {site.cta.sticker}
      </span>
      <div>
        <span className={styles.eyebrow}>{site.cta.eyebrow}</span>
        <h2>{site.cta.heading}</h2>
        <p>{site.cta.description}</p>
      </div>
      <Link href="/#cam-nang" className={styles.button}>
        {site.cta.button} <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
