import GlobalPageHero from "@/components/GlobalPageHero";
import AboutMainSplit from "@/components/AboutMainSplit";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutValuesMarquee from "@/components/AboutValuesMarquee";

export const metadata = {
  title: "About Us – TSE Elevators",
  description: "Learn more about TSE Elevators, Delhi NCR's trusted lift manufacturing and engineering experts.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* 1. Global Page Hero (Reusable top banner) */}
      <GlobalPageHero
        title="About Us"
        description="Pioneering vertical mobility and engineering safety standards across Delhi-NCR."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-7-scaled.jpg"
      />

      {/* 2. Other About Section Components */}
      <AboutMainSplit />
      <AboutMissionVision />
      <AboutValuesMarquee />
    </main>
  );
}