import GlobalPageHero from "@/components/GlobalPageHero";
import AboutMainSplit from "@/components/AboutMainSplit";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutValuesMarquee from "@/components/AboutValuesMarquee";

export const metadata = {
  title: "Luxury Elevator Company in Delhi-NCR",
  description: "TSE Shaft Elevators - Premium Luxury Elevator Company in Delhi-NCR. Elegant designs, top-notch safety & seamless installation. Call +919971022555 for a free consultation!",
  keywords: "Luxury Elevator Company in Delhi-NCR, Luxury Lift Manufacturers, Luxury Lift Suppliers, Luxury Lift in Delhi-NCR, Luxury Lift Installation, Luxury Lift Repair Services",
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