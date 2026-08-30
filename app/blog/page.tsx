import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import BlogListSection from "@/components/BlogListSection";

export const metadata: Metadata = {
  title: "Blog – TSE Elevators",
  description: "Explore the latest insights, elevator maintenance tips, luxury lift guides, and industry news from TSE Elevators.",
  alternates: {
    canonical: "https://tseelevators.com/blog/",
  },
};

export default function BlogPage() {
  return (
    <main className="w-full bg-slate-950">
      {/* Global Hero Component */}
      <GlobalPageHero
        title="Our Blog"
        description="Stay updated with the latest trends in vertical engineering, lift safety guidelines, and expert advice from TSE Elevators."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg"
        badgeText="Latest Articles"
      />

      {/* Blog List Section with Load More Functionality */}
      <BlogListSection />
    </main>
  );
}