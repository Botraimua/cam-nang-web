import { site } from "@/data/site";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section id="cach-dung" className={styles.panel} aria-labelledby="how-title">
      <div className={styles.intro}>
        <span className={styles.eyebrow}>{site.howItWorks.eyebrow}</span>
        <h2 id="how-title">{site.howItWorks.heading}</h2>
        <p>{site.howItWorks.description}</p>
      </div>
      <ol className={styles.steps}>
        {site.howItWorks.steps.map((step) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.stepIcon} aria-hidden="true">
              {step.emoji}
            </span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
