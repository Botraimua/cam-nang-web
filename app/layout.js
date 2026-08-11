import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

// Font tự host qua next/font (giống trang tham khảo): Nunito cho tiêu đề, DM Sans cho thân bài
const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${nunito.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
