import Link from "next/link";
import { site } from "@/data/site";
import Contribute from "./Contribute";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/#top" className={styles.brand} aria-label={`${site.name} - Trang chủ`}>
        <span className={styles.brandMark} aria-hidden="true">
          {site.brandMark}
        </span>
        <span>{site.name}</span>
      </Link>
      <nav className={styles.nav} aria-label="Điều hướng chính">
        <Link href="/#cam-nang" className={styles.navLink}>
          Cẩm nang
        </Link>
        <Link href="/#cach-dung" className={styles.navLink}>
          Cách dùng
        </Link>
        <Contribute />
      </nav>
    </header>
  );
}
