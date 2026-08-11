"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { guides } from "@/data/guides";
import { categories, categoryMap } from "@/data/categories";
import { site } from "@/data/site";
import { matchesQuery } from "@/lib/text";
import GuideCard from "./GuideCard";
import styles from "./GuideExplorer.module.css";

const PAGE_SIZE = 12; // giống trang tham khảo: hiện 12 thẻ mỗi lượt

export default function GuideExplorer() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef(null);

  const filtered = useMemo(() => {
    return guides.filter((g) => {
      if (activeCat !== "all" && g.category !== activeCat) return false;
      return matchesQuery(g, categoryMap[g.category]?.name || "", query);
    });
  }, [query, activeCat]);

  // Đổi từ khoá / danh mục thì quay về trang đầu
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, activeCat]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Cuộn vô hạn bằng IntersectionObserver (cơ chế giống trang tham khảo)
  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((n) => n + PAGE_SIZE);
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, visible.length]);

  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById("cam-nang")?.scrollIntoView({ behavior: "smooth" });
  }

  function resetAll() {
    setQuery("");
    setActiveCat("all");
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <span className={styles.heroEyebrow}>{site.hero.eyebrow}</span>
        <h1 className={styles.heroTitle} id="hero-title">
          {site.hero.title}
        </h1>
        <p className={styles.heroDesc}>{site.hero.description}</p>

        {/* ===== TÌM KIẾM ===== */}
        <form className={styles.searchForm} onSubmit={handleSubmit} role="search">
          <label className={styles.srOnly} htmlFor="search-input">
            {site.search.label}
          </label>
          <input
            id="search-input"
            type="search"
            className={styles.searchInput}
            placeholder={site.search.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className={styles.searchButton} aria-label="Tìm cẩm nang">
            {site.search.button}
          </button>
        </form>
        <div className={styles.suggestions}>
          <span>{site.search.suggestionsLabel}</span>
          {site.search.suggestions.map((s) => (
            <button key={s} type="button" className={styles.suggestionChip} onClick={() => setQuery(s)}>
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* ===== DẢI TRANG TRÍ ===== */}
      <div className={styles.ribbon} aria-hidden="true">
        {site.ribbon.map((text, i) => (
          <span key={text} className={styles.ribbonItem}>
            {i > 0 && <span className={styles.ribbonStar}>✦</span>}
            {text}
          </span>
        ))}
      </div>

      {/* ===== KHO CẨM NANG ===== */}
      <section id="cam-nang" className={styles.guides}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>{site.guides.eyebrow}</span>
          <h2 id="guides-title">{site.guides.heading}</h2>
        </div>

        <div className={styles.filters}>
          <span className={styles.filterLabel}>{site.guides.filterLabel}</span>
          <button
            type="button"
            className={styles.pill}
            aria-pressed={activeCat === "all"}
            onClick={() => setActiveCat("all")}
          >
            {site.guides.allLabel}
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={styles.pill}
              aria-pressed={activeCat === c.slug}
              onClick={() => setActiveCat(c.slug)}
              title={c.description}
            >
              <span aria-hidden="true">{c.emoji}</span> {c.name}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className={styles.grid}>
            {visible.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p style={{ fontSize: 40 }} aria-hidden="true">
              🔍
            </p>
            <p>{site.guides.empty}</p>
            <button type="button" className={styles.emptyButton} onClick={resetAll}>
              {site.guides.emptyButton}
            </button>
          </div>
        )}

        {hasMore && <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />}
        {hasMore && (
          <p className={styles.status} role="status">
            Đang tải thêm...
          </p>
        )}
      </section>
    </>
  );
}
