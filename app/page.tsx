import AboutSection from "@/components/AboutSection";
import HeroSlider from "@/components/HeroSlider";
import dynamic from "next/dynamic";

// BestProductsSection, RecognizedLeadersSection, TestimonialsSection, and
// FAQSection are all below the fold — dynamic-import them so their JS
// bundles are only fetched as the user scrolls toward them, instead of
// being included in the initial page load.

const BestProductsSection = dynamic(
  () => import("@/components/BestProductsSection"),
  { loading: () => <div className="min-h-[400px]" /> }
);

const RecognizedLeadersSection = dynamic(
  () => import("@/components/RecognizedLeadersSection"),
  { loading: () => <div className="min-h-[400px]" /> }
);

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection"),
  { loading: () => <div className="min-h-[400px]" /> }
);

const FAQSection = dynamic(
  () => import("@/components/FAQSection"),
  { loading: () => <div className="min-h-[400px]" /> }
);

// No "use client" here — this page is a Server Component by default now.
// HeroSlider and AboutSection are rendered above the fold, so they load
// eagerly; if either uses browser-only APIs internally, they should each
// declare their own "use client" inside their own component file.

export default function HomePage() {
  return (
    <main className="bg-[#050d1f] min-h-screen">
      <HeroSlider />
      <AboutSection />
      <BestProductsSection />
      <RecognizedLeadersSection />
      <TestimonialsSection isHomePage={true} />
      <FAQSection />
    </main>
  );
}
