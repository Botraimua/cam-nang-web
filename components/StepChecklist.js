"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StepChecklist.module.css";

// Hạt pháo giấy bắn ra khi tick xong bước cuối (toạ độ định sẵn, không cần random)
const PARTICLES = [
  { e: "🎉", dx: -70, dy: -55, r: -40, d: 0 },
  { e: "✦", dx: 60, dy: -70, r: 50, d: 40 },
  { e: "⭐", dx: -35, dy: -85, r: -20, d: 80 },
  { e: "🎊", dx: 85, dy: -40, r: 35, d: 20 },
  { e: "✦", dx: -95, dy: -25, r: -60, d: 60 },
  { e: "💜", dx: 30, dy: -95, r: 15, d: 100 },
  { e: "✦", dx: 100, dy: -75, r: 70, d: 120 },
  { e: "🌟", dx: -60, dy: -100, r: -35, d: 140 },
];

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

  // Bắn pháo giấy đúng khoảnh khắc tick xong bước cuối
  const [burst, setBurst] = useState(false);
  const prevAllDone = useRef(false);
  useEffect(() => {
    if (allDone && !prevAllDone.current && loaded) {
      setBurst(true);
      const t = setTimeout(() => setBurst(false), 1500);
      prevAllDone.current = allDone;
      return () => clearTimeout(t);
    }
    prevAllDone.current = allDone;
  }, [allDone, loaded]);

  return (
    <div>
      <p className={styles.progress} role="status">
        {allDone ? "Xong hết rồi, đỉnh quá! 🎉" : `Đã xong ${done.length}/${steps.length} bước`}
        {burst && (
          <span className={styles.burst} aria-hidden="true">
            {PARTICLES.map((p, i) => (
              <i
                key={i}
                className={styles.particle}
                style={{
                  "--dx": `${p.dx}px`,
                  "--dy": `${p.dy}px`,
                  "--r": `${p.r}deg`,
                  animationDelay: `${p.d}ms`,
                }}
              >
                {p.e}
              </i>
            ))}
          </span>
        )}
        {done.length > 0 && (
          <button type="button" className={styles.reset} onClick={reset}>
            Làm lại từ đầu
          </button>
        )}
      </p>
      <ol className={styles.steps}>
        {steps.map((step, i) => {
          const checked = done.includes(i);
          return (
            <li key={i} className={`${styles.step} ${checked ? styles.done : ""}`}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={checked}
                  disabled={!loaded}
                  onChange={() => toggle(i)}
                />
                <span className={styles.body}>
                  <span className={styles.num} aria-hidden="true">
                    Bước {i + 1}
                  </span>
                  <h3>{step.title}</h3>
                  {step.detail && <p>{step.detail}</p>}
                </span>
              </label>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
