import { site } from "@/data/site";
import styles from "./HowItWorks.module.css";

const NUM_TONES = ["coral", "yellow", "mint"];

export default function HowItWorks() {
  return (
    <section id="cach-dung" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{site.howItWorks.eyebrow}</span>
          <h2>{site.howItWorks.heading}</h2>
          <p className={styles.desc}>{site.howItWorks.description}</p>
        </div>
        <ol className={styles.steps}>
          {site.howItWorks.steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={`${styles.num} tone-${NUM_TONES[i % NUM_TONES.length]}`}>{i + 1}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDetail}>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
