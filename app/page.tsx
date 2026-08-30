"use client";
import AboutSection from "@/components/AboutSection";
import BestProductsSection from "@/components/BestProductsSection";
import HeroSlider from "@/components/HeroSlider";
import RecognizedLeadersSection from "@/components/RecognizedLeadersSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="bg-[#050d1f] min-h-screen">
      <HeroSlider />
      <AboutSection />
      <BestProductsSection />
      <RecognizedLeadersSection />
      <TestimonialsSection />
    </main>
  );
}