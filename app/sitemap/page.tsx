import type { Metadata } from "next";
import Link from "next/link";
import GlobalPageHero from "@/components/GlobalPageHero";

import {
  Home,
  Info,
  Wrench,
  Sparkles,
  Image as ImageIcon,
  Newspaper,
  Phone,
  Award,
  ArrowUpRight,
} from "lucide-react";

// ================= METADATA =================

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse all pages on the TSE Shaft Elevators website — products, services, luxury elevators, gallery, blogs, and more.",
  alternates: {
    canonical: "https://tseelevators.com/sitemap",
  },
};

// ================= SITEMAP DATA =================

type SitemapLink = {
  label: string;
  href: string;
};

type SitemapGroup = {
  title: string;
  icon: React.ElementType;
  links: SitemapLink[];
};

const SITEMAP_GROUPS: SitemapGroup[] = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog001" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    icon: Wrench,
    links: [
      { label: "Home Lift", href: "/home-lift" },
      { label: "Domestic Lift", href: "/domestic-lift" },
      { label: "Residential Lift", href: "/residential-lift" },
      { label: "Passenger Lift", href: "/passenger-lift" },
      { label: "Commercial Lift", href: "/commercial-lift" },
      { label: "Pitless Lift", href: "/pitless-lift" },
      { label: "Goods Lift", href: "/goods-lift" },
      { label: "Glass Lift", href: "/glass-lift" },
      { label: "Hydraulic Lift", href: "/hydraulic-lift" },
    ],
  },
  {
    title: "Services",
    icon: Info,
    links: [
      { label: "Lift Installation", href: "/lift-installation-services" },
      { label: "Lift Repair", href: "/lift-repair-services" },
      { label: "Lift Maintenance", href: "/lift-maintenance-services" },
      { label: "Lift AMC", href: "/lift-amc-services" },
      { label: "Lift Dismantling", href: "/lift-dismantling-services" },
      { label: "Lift MS Structural", href: "/lift-ms-structure" },
    ],
  },
  {
    title: "Luxury Elevator",
    icon: Sparkles,
    links: [
      { label: "Luxury Elevator", href: "/luxury-elevator" },
      { label: "Customized Elevator", href: "/customized-elevator" },
    ],
  },
  {
    title: "Certifications",
    icon: Award,
    links: [
      {
        label: "Certificate of Appreciation",
        href: "/certificate-of-appreciation",
      },
      { label: "Electrical License", href: "/electrical-license" },
    ],
  },
];

// ================= SITEMAP PAGE =================

export default function SitemapPage() {
  return (
    <>
       <GlobalPageHero
                title="Sitemap"
                description="A complete list of every page on the TSE Shaft Elevators
            website, organized by category."
                backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-1.jpg"
                badgeText="Project Showcase"
              />
        
    <main className="bg-[#F7F8FB] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

      

      <div className="mx-auto max-w-6xl">

       

        {/* ================= GROUPS GRID ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SITEMAP_GROUPS.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >

                {/* GROUP HEADING */}

                <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D6362C]/10 text-[#D6362C]">
                    <GroupIcon className="h-5 w-5" />
                  </span>

                  <h2 className="text-base font-bold text-[#102D5E] sm:text-lg">
                    {group.title}
                  </h2>
                </div>

                {/* GROUP LINKS */}

                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#D6362C]"
                      >
                        <span>{link.label}</span>

                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D6362C]" />
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

          

        </div>

      </div>
    </main>
    </>
  );
}
