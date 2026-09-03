"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// =====================================================
// SOCIAL ICONS
// =====================================================
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.204-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
  </svg>
);

// =====================================================
// DATA
// =====================================================
const USEFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog001" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Contact Us", href: "/contact" },
];

const PRODUCTS = [
  { label: "Home Lift", href: "/home-lift" },
  { label: "Domestic Lift", href: "/domestic-lift" },
  { label: "Residential Lift", href: "/residential-lift" },
  { label: "Passenger Lift", href: "/passenger-lift" },
  { label: "Commercial Lift", href: "/commercial-lift" },
  { label: "Pitless Lift", href: "/pitless-lift" },
  { label: "Goods Lift", href: "/goods-lift" },
  { label: "Glass Lift", href: "/glass-lift" },
  { label: "Hydraulic Lift", href: "/hydraulic-lift" },
];

const SERVICES = [
  { label: "Lift Installation Services", href: "/services/lift-installation-services" },
  { label: "Lift Repair Services", href: "/services/lift-repair-services" },
  { label: "Lift Maintenance Services", href: "/services/lift-maintenance-services" },
  { label: "Lift AMC Services", href: "/services/lift-amc-services" },
  { label: "Lift Dismantling Services", href: "/services/lift-dismantling-services" },
  { label: "Lift MS Structural Services", href: "/services/lift-ms-structure" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "X", href: "https://twitter.com", icon: TwitterIcon },
];

const MARKET_AREAS = [
  "Noida", "Haryana", "Gurgaon", "Sonipat", "Panipat", "Rewari",
  "Manesar", "Kundli", "Murthal", "Punjab", "Ambala", "Panchkula",
  "Mohali", "Zirakpur", "Chandigarh", "Kharar", "Ropar", "Kurali"
];

// =====================================================
// FOOTER COMPONENT
// =====================================================
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#101b38] text-white selection:bg-[#D6362C] selection:text-white">
      
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#D6362C]/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      {/* ================= TOP CERTIFICATION BANNER ================= */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#D6362C]/15 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D6362C] shadow-lg shadow-red-950/50">
                <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ef6a5f]">ISO 9001:2015 Certified</span>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">Verified Quality</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white">
                  Delhi-NCR’s Most Trusted Elevator Manufacturer
                </h3>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#D6362C] px-6 py-3.5 sm:px-7 sm:py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-[#bd2d25] hover:scale-[1.02] active:scale-95 shrink-0"
            >
              <span>Schedule Site Survey</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER CONTENT (RESPONSIVE GRID) ================= */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* BRAND & ADDRESS COLUMN (Span 4 on Desktop, Full on Mobile/Tablet) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <div className="inline-block rounded-2xl bg-white px-5 py-3.5 shadow-xl">
              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
                alt="TSE Shaft Elevators"
                width={200}
                height={80}
                className="h-15 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm leading-relaxed text-slate-300 max-w-md">
              Pioneering custom residential, commercial, and industrial vertical mobility solutions with German engineering and absolute safety compliance.
            </p>

            {/* Corporate Offices (Under Logo) */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ef6a5f]">Head Office - New Delhi</span>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-[#ef6a5f]" />
                  <p className="text-xs leading-relaxed text-slate-300">
                    Metro Station-Saket, Shop No.02, opposite Blue Tokai, Champa gali, lane no.3, Westend Marg, near saket, Saidulajab, New Delhi, Delhi 110030
                  </p>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ef6a5f]">Branch Office - Mohali</span>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-[#ef6a5f]" />
                  <p className="text-xs leading-relaxed text-slate-300">
                    S.C.O. No. 635, Second Floor, PUDA Gateway City, Sector 119, Mohali - 140501
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">Quick Links</h4>
              <div className="mt-2 h-[2px] w-8 rounded-full bg-[#D6362C]" />
            </div>
            <ul className="space-y-2.5">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 text-[#D6362C] transition-transform group-hover:translate-x-1 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">Our Products</h4>
              <div className="mt-2 h-[2px] w-8 rounded-full bg-[#D6362C]" />
            </div>
            <ul className="space-y-2.5">
              {PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 text-[#D6362C] transition-transform group-hover:translate-x-1 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">Expert Services</h4>
              <div className="mt-2 h-[2px] w-8 rounded-full bg-[#D6362C]" />
            </div>
            <ul className="space-y-2.5">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 text-[#D6362C] transition-transform group-hover:translate-x-1 shrink-0" />
                    <span className="leading-tight">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & SOCIALS (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">Get In Touch</h4>
              <div className="mt-2 h-[2px] w-8 rounded-full bg-[#D6362C]" />
            </div>

            {/* Quick Contacts Box */}
            <div className="space-y-3">
              <a href="tel:+919971022555" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:bg-white/[0.07] hover:border-white/20">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D6362C]/20 text-[#ef6a5f]">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Helpline</span>
                  <span className="text-xs font-bold text-white truncate block">+91 9971022555</span>
                </div>
              </a>

              <a href="mailto:info@tseelevators.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:bg-white/[0.07] hover:border-white/20">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D6362C]/20 text-[#ef6a5f]">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">Email Us</span>
                  <span className="text-xs font-bold text-white truncate block">info@tseelevators.com</span>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Social Networks</p>
              <div className="flex items-center gap-2 flex-wrap">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* ================= MARKET SERVICE AREA BADGES ================= */}
        <div className="mt-10 sm:mt-12 rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <Sparkles className="h-4 w-4 text-[#ef6a5f]" />
            <h5 className="text-xs font-bold uppercase tracking-widest text-white">Active Service Coverage Locations Across India</h5>
          </div>
          <div className="flex gap-2 flex-wrap">
            {MARKET_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-[#D6362C] hover:bg-[#D6362C]/20 hover:text-white"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ================= BOTTOM COPYRIGHT BAR ================= */}
      <div className="relative border-t border-white/10 bg-[#0a1128]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8 sm:flex-row">
          
          <p className="text-center text-xs text-slate-400 sm:text-left">
            © 2026{" "}
            <span className="font-semibold text-slate-200">
              TSE Shaft Elevators (I) Pvt Ltd.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="text-xs text-slate-400 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-xs text-slate-400 transition-colors hover:text-white">
              Terms & Conditions
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="
                group flex items-center gap-2
                rounded-xl border border-white/10
                bg-white/[0.04]
                px-4 py-2.5
                text-xs font-semibold text-slate-300
                transition-all duration-300
                hover:border-[#D6362C]
                hover:bg-[#D6362C]
                hover:text-white
              "
            >
              <span>Back to top</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}