import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import ElevatorRepairSection from "@/components/ElevatorRepairSection";
import ServicesSliderSection from "@/components/ServicesSliderSection";
import LiftMaintenanceSection from "@/components/LiftMaintenanceSection";

export const metadata: Metadata = {
  title: "Luxury Elevator Manufacturers in Delhi, Luxury Elevator Suppliers in Delhi-NCR",
  keywords: "Luxury Elevator Manufacturers in Delhi, Luxury Elevator Suppliers in Delhi-NCR, Luxury Elevator Manufacturers, Luxury Elevator Suppliers, Luxury Elevator in Delhi, Luxury Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Premium Luxury Elevator Manufacturers in Delhi & Luxury Elevator Suppliers in Delhi-NCR. Elegant designs, top-notch quality & safety. Call +919971022555 for a free consultation! ",
  alternates: {
    canonical: "https://tseelevators.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full">
      <GlobalPageHero
        title="Luxury Elevator Services"
        description="Turnkey elevator installation, preventative maintenance, and 24/7 support across Delhi-NCR."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-14-scaled.jpg"
        badgeText="Luxury Elevator Services"
      />

      <ElevatorRepairSection />
      <ServicesSliderSection />
      <LiftMaintenanceSection />
    </main>
  );
}