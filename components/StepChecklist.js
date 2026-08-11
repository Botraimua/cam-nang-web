"use client";

import { useEffect, useState } from "react";
import styles from "./StepChecklist.module.css";

// ✨ Tính năng vượt trang tham khảo: đánh dấu từng bước đã xong,
// lưu vào localStorage nên tắt trang mở lại vẫn còn.
export default function StepChecklist({ slug, steps }) {
  const storageKey = `buoc-xong:${slug}`;
  const [done, setDone] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      // localStorage bị chặn thì checklist vẫn dùng được, chỉ không nhớ giữa các lần mở
    }
    setLoaded(true);
  }, [storageKey]);

  function toggle(index) {
    setDone((prev) => {
      const next = prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index];
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  function reset() {
    setDone([]);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  }

  const allDone = steps.length > 0 && done.length === steps.length;

  return (
    <div>
      <p className={styles.progress} role="status">
        {allDone
          ? "Xong hết rồi, đỉnh quá! 🎉"
          : `Đã xong ${done.length}/${steps.length} bước`}
        {done.length > 0 && (
          <button type="button" className={styles.reset} onClick={reset}>
            Làm lại từ đầu
          </button>
        )}
      </p>
      <ol className={styles.list}>
        {steps.map((step, i) => {
          const checked = done.includes(i);
          return (
            <li key={i} className={styles.item}>
              <label className={`${styles.label} ${checked ? styles.done : ""}`}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={checked}
                  disabled={!loaded}
                  onChange={() => toggle(i)}
                />
                <span>
                  <span className={styles.stepTitle}>{step.title}</span>
                  {step.detail && <span className={styles.stepDetail}>{step.detail}</span>}
                </span>
              </label>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
