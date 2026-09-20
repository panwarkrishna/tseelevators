import type { Metadata } from "next";

// Placeholder page (no content yet) - keep it out of Google's index and stop it
// inheriting the homepage canonical/title from the root layout.
export const metadata: Metadata = {
  title: "Our Work – TSE Shaft Elevators",
  description: "Projects and installations by TSE Shaft Elevators.",
  alternates: { canonical: "https://tseelevators.com/work" },
  robots: { index: false, follow: true },
};

export default function ProjectsPage() {
  return (
    <>
     
    </>
  );
}