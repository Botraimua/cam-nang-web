import SiteHeader from "@/components/SiteHeader";
import GuideExplorer from "@/components/GuideExplorer";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";
import SiteFooter from "@/components/SiteFooter";
import ScrollTop from "@/components/ScrollTop";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <GuideExplorer />
        <HowItWorks />
        <CtaSection />
      </main>
      <SiteFooter />
      <ScrollTop />
    </>
  );
}
