"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Safe Inline SVGs
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Passenger Elevators", href: "/products/passenger-elevators", desc: "For apartments & corporate towers" },
      { label: "Home / Villa Elevators", href: "/products/home-elevators", desc: "Compact & smooth luxury residential lifts" },
      { label: "Hospital Elevators", href: "/products/hospital-elevators", desc: "Stretcher & bed-capacity medical lifts" },
      { label: "Freight & Goods Lifts", href: "/products/freight-elevators", desc: "Heavy industrial payload lifts" },
      { label: "Hydraulic Elevators", href: "/products/hydraulic-elevators", desc: "Low-rise hydraulic system solutions" },
      { label: "Capsule Elevators", href: "/products/capsule-elevators", desc: "Panoramic glass architectural designs" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Elevator Installation", href: "/services/installation", desc: "Turnkey installation & commissioning" },
      { label: "Elevator Modernization", href: "/services/modernization", desc: "Speed, aesthetic & controller upgrades" },
      { label: "AMC & Maintenance", href: "/services/amc-maintenance", desc: "Preventive care & 24/7 breakdown support" },
      { label: "Safety Audits & Repair", href: "/services/safety-audit", desc: "Certified safety testing & repairs" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const CONTACT_INFO = {
  phone: "+91 99710-22555",
  email: "info@tseelevators.com",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openOffcanvas = () => {
    setOffcanvasOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
    if (!mobileNavOpen) document.body.style.overflow = "";
  };

  const openMobileNav = () => {
    setMobileNavOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setMobileExpanded(null);
    if (!offcanvasOpen) document.body.style.overflow = "";
  };

  return (
    <header className="relative w-full font-sans">
      {/* ================= 1. TOP UTILITY BAR ================= */}
      <div className="bg-[#0B1130] px-4 py-2 text-xs text-slate-300 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          {/* Left Contacts */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#E85C4A]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-[#E85C4A]" strokeWidth={2.5} />
              <span className="font-semibold text-slate-200">{CONTACT_INFO.phone}</span>
            </a>

            <span className="hidden h-3.5 w-px bg-slate-700 md:inline-block" />

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#E85C4A] md:flex"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#E85C4A]" strokeWidth={2.5} />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          {/* Right Socials */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden text-[11px] uppercase tracking-wider text-slate-400 lg:inline-block">
              Follow Us:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
              >
                <FacebookIcon className="h-3 w-3" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
              >
                <InstagramIcon className="h-3 w-3" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
              >
                <LinkedinIcon className="h-3 w-3" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
              >
                <TwitterIcon className="h-3 w-3" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
              >
                <YoutubeIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. MIDDLE BRANDING BAR ================= */}
      <div className="border-b border-slate-100 bg-white px-4 py-3 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="inline-block shrink-0">
            <Image
              src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
              alt="TSE Shaft Elevators (I) Pvt Ltd"
              width={180}
              height={55}
              className="h-10 w-auto object-contain sm:h-12 lg:h-14"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 sm:gap-7">
            <div className="hidden items-center gap-3 md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#1B2A5E]">
                <ShieldCheck className="h-5 w-5 text-[#D6362C]" />
              </div>
              <div className="text-left text-xs leading-tight">
                <p className="font-bold uppercase tracking-wider text-[#1B2A5E]">ISO 9001:2015</p>
                <p className="text-slate-500">Certified Company</p>
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#1B2A5E]">
                <Clock className="h-5 w-5 text-[#D6362C]" />
              </div>
              <div className="text-left text-xs leading-tight">
                <p className="font-bold uppercase tracking-wider text-[#1B2A5E]">24/7 Breakdown</p>
                <p className="text-slate-500">Emergency Support</p>
              </div>
            </div>

            {/* Owl Philosophy Offcanvas Button */}
            <button
              type="button"
              onClick={openOffcanvas}
              aria-label="TSE Philosophy"
              title="TSE Philosophy"
              className="cursor-pointer group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition-all hover:border-[#D6362C] hover:bg-slate-100"
            >
              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Owl.png"
                alt="TSE Owl"
                width={28}
                height={28}
                className="h-6 w-auto object-contain transition-transform group-hover:scale-110"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={openMobileNav}
              aria-label="Open navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B2A5E] text-white transition-colors hover:bg-[#D6362C] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= 3. DESKTOP MENUBAR ================= */}
      <div
        className={`w-full border-b border-slate-800 bg-[#1B2A5E] text-white transition-all duration-300 px-4 sm:px-8 lg:px-12 hidden lg:block ${
          scrolled
            ? "sticky top-0 z-50 shadow-2xl bg-[#1B2A5E]/95 backdrop-blur-md"
            : "relative z-30 shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <nav className="flex items-center">
            {NAV_LINKS.map((link) => {
              const hasChildren = !!link.children && link.children.length > 0;
              const isDropdownOpen = openDropdown === link.label;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 px-5 py-4 text-sm font-semibold tracking-wide text-slate-100 transition-colors hover:bg-[#D6362C] hover:text-white"
                  >
                    {link.label}
                    {hasChildren && (
                      <ChevronDown
                        className={`h-4 w-4 opacity-75 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 opacity-100" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && (
                    <div
                      className={`absolute left-0 top-full pt-1 transition-all duration-200 ${
                        link.label === "Products" ? "w-[560px]" : "w-80"
                      } ${
                        isDropdownOpen
                          ? "pointer-events-auto translate-y-0 opacity-100 visible"
                          : "pointer-events-none -translate-y-2 opacity-0 invisible"
                      }`}
                    >
                      <div
                        className={`rounded-b-lg border-t-2 border-[#D6362C] bg-white p-3 text-slate-800 shadow-2xl ${
                          link.label === "Products" ? "grid grid-cols-2 gap-2" : "flex flex-col gap-1"
                        }`}
                      >
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="group flex flex-col rounded-md p-2.5 transition-colors hover:bg-slate-50"
                          >
                            <span className="text-sm font-semibold text-[#1B2A5E] transition-colors group-hover:text-[#D6362C]">
                              {child.label}
                            </span>
                            {child.desc && (
                              <span className="mt-0.5 text-xs text-slate-500">{child.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="my-2 flex items-center gap-1.5 rounded bg-[#D6362C] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow transition-all hover:bg-[#b52a21] hover:shadow-lg active:scale-95"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ================= 4. OWL PHILOSOPHY OFFCANVAS MODAL ================= */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          offcanvasOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      >
        <div
          onClick={closeOffcanvas}
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            offcanvasOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`relative ml-auto flex h-full w-full max-w-2xl flex-col bg-white text-slate-700 shadow-2xl transition-transform duration-300 ease-out overflow-hidden ${
            offcanvasOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.04]">
            <Image
              src="https://tseelevators.com/wp-content/uploads/2023/01/Owl.png"
              alt="Owl Watermark"
              width={420}
              height={420}
              className="h-auto w-[420px] object-contain"
            />
          </div>

          <div className="relative z-10 flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
                alt="TSE Shaft Elevators"
                width={140}
                height={45}
                className="h-10 w-auto object-contain"
              />
              <span className="h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5 rounded-full bg-[#D6362C]/10 px-3 py-1 text-xs font-semibold text-[#D6362C]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Our Philosophy</span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeOffcanvas}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-sm leading-relaxed text-slate-600">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
              <p className="text-slate-700">
                Owls are often associated with <strong className="text-[#1B2A5E]">wisdom, keen observation, and vigilance</strong>. They are known for their energy efficiency in hunting, relying on their sharp senses rather than excessive physical activity. Owls are nocturnal in nature and have specialized feathers that enable them to fly silently.
              </p>
            </div>

            <p>
              Thinking about all the qualities of an owl, we relate our elevator business with its characteristics. Using the owl logo as a watermark in our website has been our aim in depicting our honest and intrigued practices. Some of the aspects that we closely relate to these nocturnal are:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D6362C] mt-0.5" />
                <span className="text-slate-700 font-medium">
                  We design our elevators with precision and constantly ensure passenger safety.
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D6362C] mt-0.5" />
                <span className="text-slate-700 font-medium">
                  Our products have energy-efficient features as they consume low power.
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D6362C] mt-0.5" />
                <span className="text-slate-700 font-medium">
                  The noise reduction quality relates to the owl&apos;s flying silently, promoting elevators with quiet operation. This offers our customers a comfortable elevator experience with peace of mind.
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#D6362C] mt-0.5" />
                <span className="text-slate-700 font-medium">
                  Our elevators ensure excellent working conditions, ensuring round the clock monitoring and maintenance.
                </span>
              </div>
            </div>

            <div className="rounded-xl border-l-4 border-[#D6362C] bg-slate-50 p-4 text-slate-700 italic">
              &quot;Just like owls move silently and fly higher, our elevators also work smoothly without any interruptions or unwanted sound and give you an excellent vertical experience.&quot;
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#0B1130] p-5 text-white">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Get In Touch With Engineers
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-semibold">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-1.5 transition-colors hover:text-[#E85C4A]"
                >
                  <Phone className="h-4 w-4 text-[#E85C4A]" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-1.5 transition-colors hover:text-[#E85C4A]"
                >
                  <Mail className="h-4 w-4 text-[#E85C4A]" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 5. MOBILE NAVIGATION DRAWER ================= */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <Link href="/" onClick={closeMobileNav}>
              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
                alt="TSE Elevators"
                width={130}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={closeMobileNav}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="divide-y divide-slate-100">
              {NAV_LINKS.map((link) => {
                const hasChildren = !!link.children && link.children.length > 0;
                const isExpanded = mobileExpanded === link.label;

                return (
                  <li key={link.label} className="py-2.5">
                    {hasChildren ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded((prev) => (prev === link.label ? null : link.label))
                          }
                          className="flex w-full items-center justify-between text-left text-base font-semibold text-[#1B2A5E]"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-[#D6362C]" : "text-slate-400"
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="mt-2 space-y-1.5 border-l-2 border-[#D6362C] pl-3">
                            {link.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMobileNav}
                                className="block py-1.5 text-sm font-medium text-slate-600 hover:text-[#D6362C]"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMobileNav}
                        className="flex items-center py-1 text-base font-semibold text-[#1B2A5E] hover:text-[#D6362C]"
                      >
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-slate-100 bg-slate-50 p-5 space-y-3">
            <Link
              href="/contact"
              onClick={closeMobileNav}
              className="flex w-full items-center justify-center gap-1.5 rounded bg-[#D6362C] py-3 text-xs font-bold uppercase tracking-wider text-white shadow"
            >
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="flex justify-center gap-3 pt-1">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#1B2A5E]"
              >
                <Phone className="h-3.5 w-3.5 text-[#D6362C]" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}