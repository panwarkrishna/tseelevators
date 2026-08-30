import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import ElevatorRepairSection from "@/components/ElevatorRepairSection";
import ServicesSliderSection from "@/components/ServicesSliderSection";
import LiftMaintenanceSection from "@/components/LiftMaintenanceSection";

export const metadata: Metadata = {
  title: "Our Services – TSE Elevators",
  description: "Explore TSE Elevators' professional lift installation, modernization, and 24/7 AMC maintenance services across Delhi-NCR.",
  alternates: {
    canonical: "https://tseelevators.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full">
      <GlobalPageHero
        title="Our Services"
        description="Turnkey elevator installation, preventative maintenance, and 24/7 support across Delhi-NCR."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-14-scaled.jpg"
        badgeText="Turnkey Elevator Services"
      />

      <ElevatorRepairSection />
      <ServicesSliderSection />
      <LiftMaintenanceSection />
    </main>
  );
}