import { site } from "@/data/site";
import styles from "./MarqueeBand.module.css";

// Dải chữ chạy ngang (marquee) — nội dung lặp 2 lần để cuộn vô tận liền mạch
export default function MarqueeBand() {
  const items = site.marquee || [];
  const row = (key) => (
    <div className={styles.row} aria-hidden={key === "b" ? "true" : undefined} key={key}>
      {items.map((text) => (
        <span key={text} className={styles.item}>
          {text}
          <span className={styles.star} aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.band}>
      <div className={styles.track}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
