import GlobalPageHero from "@/components/GlobalPageHero";
// import AboutMainSplit from "@/components/AboutMainSplit";
// import AboutMissionVision from "@/components/AboutMissionVision";
// import AboutValuesMarquee from "@/components/AboutValuesMarquee";

import WhyUsSection from "@/components/WhyUsSection";
import OurWorkSection from "@/components/OurWorkSection";
import OurPromiseSection from "@/components/OurPromiseSection";
import { ArrowUpRight, Sparkles, ShieldCheck, PhoneCall, Layers } from "lucide-react";

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

           <div className="mx-auto flex max-w-7xl flex-col items-center ">
          

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] pt-12">
              Innovative <span className="text-[#D6362C]">Elevator Systems</span>
            </h2>

    </div>

      <OurPromiseSection />
      <WhyUsSection />

    </main>
  );
}