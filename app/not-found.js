import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        textAlign: "center",
        padding: 24,
      }}
    >
      <p style={{ fontSize: 56 }}>🫠</p>
      <h1 style={{ fontSize: 32 }}>Ơ kìa, trang này không có thật.</h1>
      <p style={{ color: "var(--ink-soft)" }}>
        Nhưng chuyện bạn đang bí thì chắc chắn có cách xử lý.
      </p>
      <Link
        href="/#cam-nang"
        style={{
          background: "var(--purple)",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 999,
          fontWeight: 700,
        }}
      >
        Về kho cẩm nang của {site.name}
      </Link>
    </main>
  );
}
