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
  Building2,
  Clock3,
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
// =====================================================
// DATA
// =====================================================

const USEFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blogs" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Contact Us", href: "/contact" },
];

const PRODUCTS = [
  {
    label: "Residential Lift",
    href: "/products/residential-lifts",
  },
  {
    label: "Passenger Lift",
    href: "/products/passenger-lifts",
  },
  {
    label: "Hydraulic Lift",
    href: "/products/hydraulic-lifts",
  },
  {
    label: "Commercial Lift",
    href: "/products/commercial-lifts",
  },
  {
    label: "Pitless Lift",
    href: "/products/pitless-lifts",
  },
  {
    label: "Goods Lift",
    href: "/products/goods-lifts",
  },
];

const SERVICES = [
  {
    label: "Lift Installation Services",
    href: "/services/lift-installation-services",
  },
  {
    label: "Lift Repair Services",
    href: "/services/lift-repair-services",
  },
  {
    label: "Lift Maintenance Services",
    href: "/services/lift-maintenance-services",
  },
  {
    label: "Lift AMC Services",
    href: "/services/lift-amc-services",
  },
  {
    label: "Lift Dismantling Services",
    href: "/services/lift-dismantling-services",
  },
  {
    label: "Lift MS Structural Services",
    href: "/services/lift-ms-structure",
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    label: "X",
    href: "https://twitter.com",
    icon: TwitterIcon,
  },
];

// =====================================================
// REUSABLE COMPONENTS
// =====================================================

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2.5 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
      >
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-200 group-hover:border-[#D6362C] group-hover:bg-[#D6362C]">
          <ChevronRight className="h-3 w-3 text-[#D6362C] transition-colors group-hover:text-white" />
        </span>

        <span>{children}</span>
      </Link>
    </li>
  );
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ef6a5f]">
        {eyebrow}
      </p>

      <h3 className="text-sm font-bold uppercase tracking-[0.13em] text-white">
        {children}
      </h3>

      <div className="mt-3 h-[2px] w-9 rounded-full bg-[#D6362C]" />
    </div>
  );
}

// =====================================================
// FOOTER
// =====================================================

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#172a5c] text-white">

      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#D6362C]/10 blur-3xl" />

        <div className="absolute -left-40 bottom-20 h-[380px] w-[380px] rounded-full bg-blue-400/5 blur-3xl" />

        <div
          className="
            absolute inset-0 opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />
      </div>

      {/* =================================================
          PREMIUM CTA
      ================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-12 lg:pt-12">
        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-white/10
            bg-white/[0.07]
            shadow-2xl
            backdrop-blur-md
          "
        >
          {/* CTA glow */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#D6362C]/15 blur-3xl" />

          <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-9">

            {/* Certification */}
            <div className="flex items-start gap-4 sm:gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D6362C] shadow-lg shadow-red-950/30 sm:h-14 sm:w-14">
                <ShieldCheck className="h-6 w-6 text-white sm:h-7 sm:w-7" />
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-bold text-white sm:text-lg">
                    ISO 9001:2015 Certified Engineering
                  </h2>

                  <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-slate-200">
                    Certified
                  </span>
                </div>

                <p className="max-w-2xl text-xs leading-6 text-slate-300 sm:text-sm">
                  Delhi-NCR&apos;s trusted vertical mobility experts delivering
                  safe, reliable and high-performance elevator solutions.
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                group inline-flex shrink-0 items-center justify-center gap-3
                rounded-xl bg-[#D6362C]
                px-6 py-3.5
                text-xs font-bold uppercase tracking-wider text-white
                shadow-lg shadow-red-950/25
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#bd2d25]
                hover:shadow-xl
              "
            >
              <span>Get a Free Consultation</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 lg:px-12 lg:pb-12 lg:pt-16">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* =================================================
              BRAND COLUMN
          ================================================= */}

          <div className="lg:col-span-3">

            {/* Logo */}
            <div className="mb-6 inline-flex rounded-xl bg-white px-4 py-2.5 shadow-xl">
              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
                alt="TSE Shaft Elevators"
                width={200}
                height={70}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="max-w-md text-sm leading-7 text-slate-300">
              We are the leading elevator manufacturers in Delhi NCR,
              offering high-performance residential, commercial, and
              industrial vertical transport solutions.
            </p>

         {/* Contact Cards */}
<div className="mt-7 grid w-full max-w-md grid-cols-1 gap-3">

  {/* Phone */}
  <a
    href="tel:+919971022555"
    className="
      group flex items-center gap-3
      rounded-xl border border-white/10
      bg-white/[0.045]
      px-3.5 py-3
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-white/20
      hover:bg-white/[0.09]
    "
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D6362C]/15">
      <Phone className="h-4 w-4 text-[#ef6a5f]" />
    </span>

    <span className="min-w-0">
      <span className="mb-0.5 block text-[9px] font-semibold uppercase tracking-wider text-slate-400">
        Call Us
      </span>

      <span className="block whitespace-nowrap text-xs font-semibold text-white">
        +91 99710-22555
      </span>
    </span>
  </a>

  {/* Email */}
  <a
    href="mailto:info@tseelevators.com"
    className="
      group flex items-center gap-3
      rounded-xl border border-white/10
      bg-white/[0.045]
      px-3.5 py-3
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-white/20
      hover:bg-white/[0.09]
    "
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D6362C]/15">
      <Mail className="h-4 w-4 text-[#ef6a5f]" />
    </span>

    <span className="min-w-0">
      <span className="mb-0.5 block text-[9px] font-semibold uppercase tracking-wider text-slate-400">
        Email Us
      </span>

      <span className="block whitespace-nowrap text-xs font-semibold text-white">
        info@tseelevators.com
      </span>
    </span>
  </a>

</div>

            {/* Social */}
            <div className="mt-7">

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Follow TSE
              </p>

              <div className="flex items-center gap-2">

                {SOCIALS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-lg
                        border border-white/10
                        bg-white/[0.05]
                        text-slate-300
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-[#D6362C]
                        hover:bg-[#D6362C]
                        hover:text-white
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}

              </div>
            </div>
          </div>

          {/* =================================================
              USEFUL LINKS
          ================================================= */}

          <div className="lg:col-span-2">

            <SectionTitle eyebrow="Navigate">
              Useful Links
            </SectionTitle>

            <ul className="space-y-3">
              {USEFUL_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>

          </div>

          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div className="lg:col-span-2">

            <SectionTitle eyebrow="Solutions">
              Products
            </SectionTitle>

            <ul className="space-y-3">
              {PRODUCTS.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>

          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="lg:col-span-2">

            <SectionTitle eyebrow="Expertise">
              Services
            </SectionTitle>

            <ul className="space-y-3">
              {SERVICES.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>

          </div>

          {/* =================================================
              OFFICES
          ================================================= */}

          <div className="lg:col-span-3">

            <SectionTitle eyebrow="Visit Us">
              Our Offices
            </SectionTitle>

            {/* Head Office */}
            <div className="mb-6">

              <div className="mb-2 flex items-center gap-2">
             

                <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Head Office
                </h4>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#ef6a5f]" />

                <p className="text-xs leading-6 text-slate-300">
                  Shop No.– 12, DDA Market,
                  <br />
                  Lado Sarai, New Delhi – 110030
                </p>
              </div>

            </div>

            {/* Branch Office */}
            <div>

              <div className="mb-2 flex items-center gap-2">
             

                <h4 className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Branch Office
                </h4>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#ef6a5f]" />

                <p className="text-xs leading-6 text-slate-300">
                  S.C.O. No. 635, Second Floor,
                  <br />
                  PUDA Gateway City,
                  <br />
                  Sector 119, Mohali – 140501
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* =================================================
            TRUST STRIP
        ================================================= */}

        <div className="mt-12  border-t border-white/10 pt-8">
          <h5 className="text-lg font-bold text-white">Market Area</h5>
          <ul className="flex gap-3 flex-wrap text-sm text-slate-300">
            <li>
              Noida
            </li>
            <li>
              Haryana
            </li>
            <li>
              Gurgaon
            </li>
            <li>
              Sonipat
            </li>
            <li>
              Panipat
            </li>
            <li>
              Rewari
            </li>
            <li>
              Manesar
            </li>
            <li>
              Kundli
            </li>
            <li>
              Murthal
            </li>
            <li>
              Punjab
            </li>
            <li>
              Ambala
            </li>
            <li>
              Panchkula
            </li>
            <li>
              Mohali
            </li>
            <li>
              Zirakpur
            </li>
            <li>
              Chandigarh
            </li>
            <li>
              Kharar
            </li>
            <li>
              Ropar
            </li>
            <li>
              Kurali
            </li>
       
          </ul>
 

        </div>
      </div>

      {/* =================================================
          BOTTOM BAR
      ================================================= */}

      <div className="relative border-t border-white/10 bg-[#12234d]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row sm:px-8 lg:px-12">

          <p className="text-center text-[11px] text-slate-400 sm:text-left">
            © 2026{" "}
            <span className="font-semibold text-slate-300">
              TSE Shaft Elevators (I) Pvt Ltd.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              href="/privacy-policy"
              className="text-[11px] text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-conditions"
              className="text-[11px] text-slate-400 transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="
                group flex items-center gap-1.5
                rounded-lg border border-white/10
                bg-white/[0.04]
                px-3 py-2
                text-[11px] font-semibold text-slate-300
                transition-all duration-300
                hover:border-[#D6362C]
                hover:bg-[#D6362C]
                hover:text-white
              "
            >
              <span>Back to top</span>

              <ArrowUpRight
                className="
                  h-3.5 w-3.5
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}