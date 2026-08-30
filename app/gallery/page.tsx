import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import GalleryShowcase from "@/components/GalleryShowcase";

export const metadata: Metadata = {
  title: "Project Gallery – TSE Elevators",
  description: "Explore the gallery of luxury elevators, capsule lifts, home lifts, and commercial elevator installations by TSE Elevators in Delhi-NCR.",
  alternates: {
    canonical: "https://tseelevators.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main className="w-full">
      <GlobalPageHero
        title="Our Gallery"
        description="A visual showcase of our premium craftsmanship, luxury finishes, and precision elevator installations."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-1.jpg"
        badgeText="Project Showcase"
      />

      <GalleryShowcase />
    </main>
  );
}