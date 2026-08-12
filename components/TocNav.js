"use client";

import { useEffect, useState } from "react";
import styles from "./TocNav.module.css";

// Mục lục "Trong bài này" — tự làm sáng mục đang đọc (scrollspy)
export default function TocNav({ title, items }) {
  const [active, setActive] = useState(items[0]?.id || "");

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );
    items.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className={styles.toc}>
      <p>{title}</p>
      <nav>
        {items.map((t) => (
          <a key={t.id} href={`#${t.id}`} className={active === t.id ? styles.active : ""}>
            <span className={styles.dot} aria-hidden="true">
              ✦
            </span>
            {t.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
