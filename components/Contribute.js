"use client";

import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import styles from "./Contribute.module.css";

// Nút "Đóng góp" + modal chia sẻ cẩm nang.
// Không có server lưu bài, nên bước cuối soạn sẵn nội dung để người gửi
// gửi qua email hoặc sao chép — trung thực, không giả vờ "đã gửi".
export default function Contribute() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState("form"); // "form" | "send"
  const [form, setForm] = useState({ title: "", category: "", name: "", content: "" });
  const [copied, setCopied] = useState(false);
  const firstFieldRef = useRef(null);
  const c = site.contribute;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open]);

  function closeModal() {
    setOpen(false);
    setStage("form");
    setCopied(false);
  }

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStage("send");
  }

  const catName = categories.find((x) => x.slug === form.category)?.name || "(chưa chọn)";
  const bodyText = [
    `Tiêu đề: ${form.title}`,
    `Danh mục: ${catName}`,
    form.name.trim() ? `Người gửi: ${form.name.trim()}` : null,
    "",
    "Nội dung:",
    form.content,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const mailto = `mailto:${c.email}?subject=${encodeURIComponent(
    `[Đóng góp] ${form.title}`
  )}&body=${encodeURIComponent(bodyText)}`;

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(`${bodyText}\n\n(Gửi về: ${c.email})`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard bị chặn thì thôi, người dùng vẫn còn đường email
    }
  }

  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => setOpen(true)}>
        {c.button}
      </button>

      {open && (
        <div
          className={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="contribute-title">
            <button type="button" className={styles.close} onClick={closeModal} aria-label="Đóng">
              ✕
            </button>

            {stage === "form" ? (
              <>
                <span className={styles.kicker}>{c.kicker}</span>
                <h2 id="contribute-title">{c.heading}</h2>
                <p className={styles.desc}>{c.description}</p>

                <form onSubmit={handleSubmit}>
                  <label className={styles.label} htmlFor="ct-title">
                    {c.titleLabel}
                  </label>
                  <input
                    id="ct-title"
                    ref={firstFieldRef}
                    className={styles.input}
                    type="text"
                    required
                    maxLength={120}
                    placeholder={c.titlePlaceholder}
                    value={form.title}
                    onChange={(e) => update("title", e.target.value)}
                  />

                  <label className={styles.label} htmlFor="ct-cat">
                    {c.categoryLabel}
                  </label>
                  <select
                    id="ct-cat"
                    className={styles.input}
                    required
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                  >
                    <option value="" disabled>
                      {c.categoryPlaceholder}
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.emoji} {cat.name}
                      </option>
                    ))}
                  </select>

                  <label className={styles.label} htmlFor="ct-name">
                    {c.nameLabel} <span className={styles.optional}>{c.nameOptional}</span>
                  </label>
                  <input
                    id="ct-name"
                    className={styles.input}
                    type="text"
                    maxLength={80}
                    placeholder={c.namePlaceholder}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />

                  <label className={styles.label} htmlFor="ct-content">
                    {c.contentLabel}
                  </label>
                  <textarea
                    id="ct-content"
                    className={`${styles.input} ${styles.textarea}`}
                    required
                    minLength={20}
                    maxLength={4000}
                    placeholder={c.contentPlaceholder}
                    value={form.content}
                    onChange={(e) => update("content", e.target.value)}
                  />

                  <button type="submit" className={styles.submit}>
                    {c.submit}
                  </button>
                </form>
              </>
            ) : (
              <>
                <span className={styles.kicker}>{c.kicker}</span>
                <h2 id="contribute-title">{c.sendTitle}</h2>
                <p className={styles.desc}>{c.sendDesc}</p>

                <pre className={styles.previewBox}>{bodyText}</pre>

                <div className={styles.sendActions}>
                  <a className={styles.submit} href={mailto}>
                    {c.sendMail}
                  </a>
                  <button type="button" className={styles.copyBtn} onClick={copyContent}>
                    {copied ? `✓ ${c.copied}` : c.sendCopy}
                  </button>
                </div>

                <button type="button" className={styles.backBtn} onClick={() => setStage("form")}>
                  {c.back}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
