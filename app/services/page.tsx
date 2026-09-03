import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import ElevatorRepairSection from "@/components/ElevatorRepairSection";
import ServicesSliderSection from "@/components/ServicesSliderSection";
import LiftMaintenanceSection from "@/components/LiftMaintenanceSection";

export const metadata: Metadata = {
  title: "Elevator Services in Delhi, Lift Services in Delhi-NCR",
  keywords: "Elevator Services in Delhi, Lift Services in Delhi-NCR, Elevator Services, Lift Services",
  description: "TSE Shaft Elevators - Reliable Elevator Services in Delhi & Lift Services in Delhi-NCR. Expert installation, maintenance & repair. Call +919971022555 for a free consultation today!",
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