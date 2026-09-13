
import GlobalPageHero from "@/components/GlobalPageHero";
// import AboutMainSplit from "@/components/AboutMainSplit";
// import AboutMissionVision from "@/components/AboutMissionVision";
// import AboutValuesMarquee from "@/components/AboutValuesMarquee";

import WhyUsSection from "@/components/WhyUsSection";
import OurWorkSection from "@/components/OurWorkSection";
import OurPromiseSection from "@/components/OurPromiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

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
        description="TSE Shaft Elevators, the name you can trust for lifts and elevators in Delhi-NCR"
        backgroundImage="../product-img/passenger-lift.webp"
      />
 
      <OurPromiseSection />
      <WhyUsSection />
      <BestProductsSection/>
      <TestimonialsSection />
    </main>
  );
}