"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// ================= SOCIAL ICONS =================

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

// ================= NAVIGATION =================

type NavLink = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    desc?: string;
  }[];
};

const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Residential Lift",
        href: "/residential-lifts",
      },
      {
        label: "Passenger Lift",
        href: "/passenger-lifts",
      },
      {
        label: "Hydraulic Lift",
        href: "/hydraulic-lifts",
      },
      {
        label: "Commercial Lift",
        href: "/commercial-lifts",
      },
      {
        label: "Pitless Lift",
        href: "/pitless-lifts",
      },
      {
        label: "Goods Lift",
        href: "/goods-lifts",
      },
    ],
  },

  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Lift Installation Services",
        href: "/lift-installation-services",
      },
      {
        label: "Lift Repair Services",
        href: "/lift-repair-services",
      },
      {
        label: "Lift Maintenance Services",
        href: "/lift-maintenance-services",
      },
      {
        label: "Lift AMC Services",
        href: "/lift-amc-services",
      },
      {
        label: "Lift Dismantling Services",
        href: "/lift-dismantling-services",
      },
      {
        label: "Lift MS Structural Services",
        href: "/lift-ms-structure",
      },
    ],
  },

  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Blogs",
    href: "/blog1",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// ================= CONTACT =================

const CONTACT_INFO = {
  phone: "+91 99710-22555",
  email: "info@tseelevators.com",
};

// ================= HEADER =================

export default function Header() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // ================= OFFCANVAS =================

  const openOffcanvas = () => {
    setOffcanvasOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);

    if (!mobileNavOpen) {
      document.body.style.overflow = "";
    }
  };

  // ================= MOBILE NAV =================

  const openMobileNav = () => {
    setMobileNavOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setMobileExpanded(null);

    if (!offcanvasOpen) {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      {/* =========================================================
          FIXED HEADER
      ========================================================= */}

      <header className="fixed left-0 top-0 z-50 w-full bg-white font-sans">

        {/* ================= TOP CONTACT BAR ================= */}

        <div className="bg-[#102D5E] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

            <div className="flex min-h-[48px] items-center gap-5 sm:gap-8">

              {/* EMAIL */}

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hidden items-center gap-2 text-md font-medium transition-colors hover:text-[#D6362C] sm:flex"
              >
                <Mail className="h-4 w-4 text-[#D6362C]" />

                {CONTACT_INFO.email}
              </a>

              <span className="hidden h-5 w-px bg-white/20 sm:block" />

              {/* PHONE */}

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-md font-medium transition-colors hover:text-[#D6362C]"
              >
                <Phone className="h-4 w-4 text-[#D6362C]" />

                {CONTACT_INFO.phone}
              </a>

            </div>

            {/* SOCIAL ICONS */}

            <div className="flex h-full items-center">

              <div className="flex items-center gap-1.5 sm:gap-2">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#223f70] text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
                >
                  <FacebookIcon className="h-3 w-3" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#223f70] text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
                >
                  <InstagramIcon className="h-3 w-3" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#223f70] text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
                >
                  <LinkedinIcon className="h-3 w-3" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#223f70] text-slate-300 transition-colors hover:bg-[#E85C4A] hover:text-white"
                >
                  <TwitterIcon className="h-3 w-3" />
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* ================= MAIN HEADER ================= */}

        <div className="border-b border-slate-100 bg-white shadow-md">

          <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

            {/* ================= LOGO ================= */}

            <Link
              href="/"
              className="inline-flex shrink-0 items-center"
            >
              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
                alt="TSE Shaft Elevators (I) Pvt Ltd"
                width={180}
                height={55}
                className="h-10 w-auto object-contain sm:h-12"
                priority
              />
            </Link>

            {/* ================= DESKTOP NAV ================= */}

            <nav className="hidden items-center lg:flex">

              {NAV_LINKS.map((link) => {

                const hasChildren =
                  !!link.children && link.children.length > 0;

                const isDropdownOpen =
                  openDropdown === link.label;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (hasChildren) {
                        setOpenDropdown(link.label);
                      }
                    }}
                    onMouseLeave={() => {
                      if (hasChildren) {
                        setOpenDropdown(null);
                      }
                    }}
                  >

                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-4 py-7 text-md font-bold text-[#102D5E] transition-colors hover:text-[#D6362C]"
                    >
                      {link.label}

                      {hasChildren && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isDropdownOpen
                              ? "rotate-180 text-[#D6362C]"
                              : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* ================= DROPDOWN ================= */}

                    {hasChildren && (
                      <div
                        className={`absolute left-0 top-full w-80 pt-1 transition-all duration-200 ${
                          isDropdownOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0"
                        }`}
                      >

                        <div className="flex flex-col gap-1 rounded-b-xl border-t-2 border-[#D6362C] bg-white p-3 text-slate-800 shadow-2xl">

                          {link.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="group rounded-lg p-3 transition-colors hover:bg-slate-50"
                            >

                              <span className="block text-md font-bold text-[#102D5E] transition-colors group-hover:text-[#D6362C]">
                                {child.label}
                              </span>

                              {child.desc && (
                                <span className="mt-1 block text-xs leading-5 text-slate-500">
                                  {child.desc}
                                </span>
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

            {/* ================= RIGHT SIDE ================= */}

            <div className="flex items-center">

              {/* ENQUIRE NOW */}

              <Link
                href="/contact"
                className="ml-5 flex min-h-[48px] items-center gap-2 rounded-md bg-[#D6362C] px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#B52A21] sm:px-7"
              >
                Enquire Now

                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* OWL BUTTON */}

              <button
                type="button"
                onClick={openOffcanvas}
                aria-label="TSE Philosophy"
                title="TSE Philosophy"
                className="group ml-4 hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition-all hover:border-[#D6362C] hover:bg-red-50 lg:flex"
              >
                <Image
                  src="https://tseelevators.com/wp-content/uploads/2023/01/Owl.png"
                  alt="TSE Owl"
                  width={28}
                  height={28}
                  className="h-6 w-auto object-contain transition-transform group-hover:scale-110"
                />
              </button>

              {/* MOBILE MENU */}

              <button
                type="button"
                onClick={openMobileNav}
                aria-label="Open navigation menu"
                className="ml-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#102D5E] text-white transition-colors hover:bg-[#D6362C] lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>

            </div>

          </div>

        </div>

      </header>

      {/* =========================================================
          HEADER SPACER
          48px top bar + 82px main header = 130px
      ========================================================= */}

      <div className="h-[130px] w-full" aria-hidden="true" />

      {/* =========================================================
          OWL PHILOSOPHY OFFCANVAS
      ========================================================= */}

      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          offcanvasOpen
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
        }`}
      >

        {/* OVERLAY */}

        <div
          onClick={closeOffcanvas}
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            offcanvasOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* DRAWER */}

        <div
          className={`relative ml-auto flex h-full w-full max-w-2xl flex-col overflow-hidden bg-white text-slate-700 shadow-2xl transition-transform duration-300 ${
            offcanvasOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* WATERMARK */}

          <div className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.04]">

            <Image
              src="https://tseelevators.com/wp-content/uploads/2023/01/Owl.png"
              alt="Owl Watermark"
              width={420}
              height={420}
              className="h-auto w-[420px] object-contain"
            />

          </div>

          {/* DRAWER HEADER */}

          <div className="relative z-10 flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-5">

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

                Our Philosophy

              </div>

            </div>

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeOffcanvas}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

          </div>

          {/* DRAWER CONTENT */}

          <div className="relative z-10 flex-1 space-y-6 overflow-y-auto p-6 text-md leading-relaxed text-slate-600 md:p-8">

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">

              <p className="text-slate-700">

                Owls are often associated with{" "}

                <strong className="text-[#102D5E]">
                  wisdom, keen observation, and vigilance
                </strong>

                . They are known for their energy efficiency in
                hunting and their silent movement.

              </p>

            </div>

            <p>
              Thinking about all the qualities of an owl, we relate
              our elevator business with its characteristics. Using
              the owl logo as a watermark represents our honest and
              thoughtful practices.
            </p>

            {/* FEATURES */}

            <div className="space-y-3">

              {[
                "We design our elevators with precision and constantly ensure passenger safety.",
                "Our products have energy-efficient features as they consume low power.",
                "Our noise reduction quality promotes quiet and comfortable elevator operation.",
                "Our elevators ensure excellent working conditions with round-the-clock monitoring and maintenance.",
              ].map((text, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm"
                >

                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D6362C]" />

                  <span className="font-medium text-slate-700">
                    {text}
                  </span>

                </div>

              ))}

            </div>

            {/* QUOTE */}

            <div className="rounded-xl border-l-4 border-[#D6362C] bg-slate-50 p-4 italic text-slate-700">

              “Just like owls move silently and fly higher, our
              elevators work smoothly without interruptions or
              unwanted sound.”

            </div>

            {/* CONTACT */}

            <div className="rounded-2xl bg-[#102D5E] p-5 text-white">

              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Get In Touch With Engineers
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-md font-semibold">

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-[#D6362C]"
                >

                  <Phone className="h-4 w-4 text-[#D6362C]" />

                  {CONTACT_INFO.phone}

                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-[#D6362C]"
                >

                  <Mail className="h-4 w-4 text-[#D6362C]" />

                  {CONTACT_INFO.email}

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}

      {mobileNavOpen && (

        <div className="fixed inset-0 z-[100] flex flex-col bg-white lg:hidden">

          {/* MOBILE HEADER */}

          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

            <Link
              href="/"
              onClick={closeMobileNav}
            >

              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
                alt="TSE Elevators"
                width={140}
                height={45}
                className="h-10 w-auto object-contain"
              />

            </Link>

            <button
              type="button"
              onClick={closeMobileNav}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-[#D6362C] hover:text-white"
            >

              <X className="h-5 w-5" />

            </button>

          </div>

          {/* MOBILE NAVIGATION */}

          <nav className="flex-1 overflow-y-auto px-5 py-4">

            <ul className="divide-y divide-slate-100">

              {NAV_LINKS.map((link) => {

                const hasChildren =
                  !!link.children && link.children.length > 0;

                const isExpanded =
                  mobileExpanded === link.label;

                return (

                  <li
                    key={link.label}
                    className="py-3"
                  >

                    {hasChildren ? (

                      <div>

                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded((prev) =>
                              prev === link.label
                                ? null
                                : link.label
                            )
                          }
                          className="flex w-full items-center justify-between text-left text-base font-bold text-[#102D5E]"
                        >

                          <span>
                            {link.label}
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isExpanded
                                ? "rotate-180 text-[#D6362C]"
                                : "text-slate-400"
                            }`}
                          />

                        </button>

                        {isExpanded && (

                          <div className="mt-3 space-y-2 border-l-2 border-[#D6362C] pl-4">

                            {link.children!.map((child) => (

                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMobileNav}
                                className="block py-1 text-md font-medium text-slate-600 transition-colors hover:text-[#D6362C]"
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
                        className="flex py-1 text-base font-bold text-[#102D5E] transition-colors hover:text-[#D6362C]"
                      >

                        {link.label}

                      </Link>

                    )}

                  </li>

                );

              })}

            </ul>

          </nav>

          {/* MOBILE BOTTOM */}

          <div className="space-y-3 border-t border-slate-100 bg-slate-50 p-5">

            <Link
              href="/contact"
              onClick={closeMobileNav}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#D6362C] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#B52A21]"
            >

              Get a Free Quote

              <ArrowUpRight className="h-4 w-4" />

            </Link>

            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center justify-center gap-2 pt-1 text-md font-bold text-[#102D5E]"
            >

              <Phone className="h-4 w-4 text-[#D6362C]" />

              {CONTACT_INFO.phone}

            </a>

          </div>

        </div>

      )}

    </>
  );
}