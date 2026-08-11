import Link from "next/link";
import { site } from "@/data/site";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/#top" className={styles.logo} aria-label={`${site.name} - Trang chủ`}>
          <span className={styles.logoMark}>Biết</span>
          <span className={styles.logoText}>Liền!</span>
        </Link>
        <nav className={styles.nav} aria-label="Điều hướng chính">
          <Link href="/#cam-nang">Cẩm nang</Link>
          <Link href="/#cach-dung">Cách dùng</Link>
        </nav>
      </div>
    </header>
  );
}
