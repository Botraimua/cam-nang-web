"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { guides } from "@/data/guides";
import { categories, categoryMap, ADULT_CATEGORY } from "@/data/categories";
import { site } from "@/data/site";
import { scoreMatch } from "@/lib/text";
import GuideCard from "./GuideCard";
import MarqueeBand from "./MarqueeBand";
import styles from "./GuideExplorer.module.css";

const PAGE_SIZE = 12; // giống trang tham khảo: hiện 12 thẻ mỗi lượt

function SearchIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.5" y1="15.5" x2="21" y2="21" />
    </svg>
  );
}

export default function GuideExplorer() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef(null);

  const filtered = useMemo(() => {
    const dangTimKiem = query.trim().length > 0;
    const ketQua = [];

    // Bài người lớn = nằm trong mục 18+, hoặc được đánh dấu adult (bài tế nhị
    // trong mục Nam giới / Nữ giới).
    const laNguoiLon = (g) => g.adult === true || g.category === ADULT_CATEGORY;

    for (const g of guides) {
      if (activeCat === ADULT_CATEGORY) {
        // Mục 18+ gom toàn bộ bài người lớn, kể cả bài của mục Nam giới / Nữ giới
        if (!laNguoiLon(g)) continue;
      } else if (activeCat !== "all") {
        if (g.category !== activeCat) continue;
      } else if (laNguoiLon(g) && !dangTimKiem) {
        // Lướt trang chủ bình thường thì ẩn bài tế nhị, trừ khi đang chủ động tìm
        continue;
      }
      const diem = scoreMatch(g, categoryMap[g.category]?.name || "", query);
      if (diem > 0) ketQua.push({ g, diem });
    }

    // Khi tìm kiếm thì bài khớp tiêu đề lên trước; cùng mức điểm vẫn giữ thứ tự
    // mới nhất trước (sort của JS ổn định nên không xáo trộn thứ tự gốc).
    if (dangTimKiem) ketQua.sort((a, b) => b.diem - a.diem);

    return ketQua.map((x) => x.g);
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
      {/* ===== HERO 2 CỘT ===== */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <span className={styles.heroLabel}>{site.hero.eyebrow}</span>
          <h1 id="hero-title">
            {site.hero.title}{" "}
            {site.hero.titleAccent && <span className={styles.accent}>{site.hero.titleAccent}</span>}
          </h1>
          <p className={styles.heroDescription}>{site.hero.description}</p>

          <form className={styles.search} role="search" onSubmit={handleSubmit}>
            <SearchIcon />
            <label className={styles.srOnly} htmlFor="guide-search">
              {site.search.label}
            </label>
            <input
              id="guide-search"
              type="search"
              placeholder={site.search.placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                className={styles.clearBtn}
                onClick={() => setQuery("")}
                aria-label="Xoá từ khoá"
              >
                ✕
              </button>
            )}
            <button type="submit" aria-label="Tìm cẩm nang">
              <span>{site.search.button}</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className={styles.suggestions} aria-label="Gợi ý tìm kiếm">
            <span>{site.search.suggestionsLabel}</span>
            {site.search.suggestions.map((s) => (
              <button key={s} type="button" onClick={() => setQuery(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.questionCard}>
            <span>{site.hero.visual.question}</span>
            <p>{site.hero.visual.questionNote}</p>
          </div>
          <div className={styles.answerCard}>
            <span className={styles.check}>✓</span>
            <p>{site.hero.visual.answerNote}</p>
          </div>
          <span className={styles.sparkOne}>✦</span>
          <span className={styles.sparkTwo}>✦</span>
        </div>
      </section>

      {/* ===== DẢI CHỮ CHẠY ===== */}
      <MarqueeBand />

      {/* ===== KHO CẨM NANG ===== */}
      <section className={styles.guides} id="cam-nang" aria-labelledby="guides-title">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>{site.guides.eyebrow}</span>
            <h2 id="guides-title">{site.guides.heading}</h2>
          </div>
          <p>{site.guides.sideNote}</p>
        </div>

        <div className={styles.filters} aria-label="Lọc cẩm nang">
          <span className={styles.filterLabel}>{site.guides.filterLabel}</span>
          <button
            type="button"
            className={styles.filterButton}
            aria-pressed={activeCat === "all"}
            onClick={() => setActiveCat("all")}
          >
            {site.guides.allLabel}
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={styles.filterButton}
              aria-pressed={activeCat === c.slug}
              onClick={() => setActiveCat(c.slug)}
              title={c.description}
            >
              {c.name}
            </button>
          ))}
          <span className={styles.count} role="status">
            {filtered.length} {site.guides.countLabel}
            {query.trim() ? ` ${site.guides.countFor} "${query.trim()}"` : ""}
          </span>
        </div>

        {visible.length > 0 ? (
          // key theo danh mục: đổi bộ lọc thì cả lưới xuất hiện lại lần lượt cho mượt
          <div className={styles.guideGrid} aria-live="polite" key={activeCat}>
            {visible.map((g, i) => (
              <GuideCard key={g.slug} guide={g} index={i} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <span style={{ fontSize: 44 }} aria-hidden="true">
              🔍
            </span>
            <h3>{site.guides.emptyTitle}</h3>
            <p>{site.guides.empty}</p>
            <button type="button" onClick={resetAll}>
              {site.guides.emptyButton}
            </button>
          </div>
        )}

        {hasMore && <div ref={sentinelRef} className={styles.loadSentinel} aria-hidden="true" />}
        {hasMore && (
          <p className={styles.loadStatus} role="status">
            {site.guides.loading}
          </p>
        )}
      </section>
    </>
  );
}
