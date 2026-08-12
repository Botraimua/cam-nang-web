"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollTop.module.css";

// Nút "lên đầu trang" — hiện ra khi đã cuộn sâu, giúp trang 52 bài đỡ mỏi tay
export default function ScrollTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`${styles.button} ${shown ? styles.shown : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Lên đầu trang"
      tabIndex={shown ? 0 : -1}
    >
      ↑
    </button>
  );
}
