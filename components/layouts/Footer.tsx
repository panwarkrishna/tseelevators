"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, ChevronRight, ShieldCheck } from "lucide-react";

// Safe Inline Social SVGs
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

const USEFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blogs" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Contact Us", href: "/contact" },
];

const POPULAR_SEARCHES = [
  { label: "Best Lift Company", href: "/products/passenger-elevators" },
  { label: "Best Residential Elevators", href: "/products/home-elevators" },
  { label: "Elevator Parts Suppliers", href: "/services" },
  { label: "Elevator Installation Services", href: "/services/installation" },
  { label: "Elevator Maintenance & Repair", href: "/services/amc-maintenance" },
  { label: "Residential Elevators", href: "/products/passenger-elevators" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-white text-slate-700 font-sans border-t border-slate-200">
      
      {/* Top Banner Feature Strip */}
      <div className="border-b border-slate-100 bg-slate-50 py-8 ">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D6362C]/10 text-[#D6362C]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                ISO 9001:2015 Certified Engineering
              </h4>
              <p className="text-xs text-slate-500">
                Delhi-NCR&apos;s most trusted vertical mobility experts.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#D6362C] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#b52a21] active:scale-95"
          >
            <span>Request Free Site Survey</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid Links */}
      <div className="relative z-10 mx-auto max-w-7xl py-5 sm:py-8 lg:py-10 px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Brand Info & Socials (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block">
              <Image
                src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
                alt="TSE Shaft Elevators"
                width={150}
                height={50}
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              We are the leading elevator manufacturers in Delhi NCR, offering high-performance residential, commercial, and industrial vertical transport solutions.
            </p>

            <div className="space-y-2.5 pt-1">
              <a href="tel:+919971022555" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 transition-colors hover:text-[#D6362C]">
                <Phone className="h-4 w-4 text-[#D6362C]" />
                <span>+91 99710-22555</span>
              </a>
              <a href="mailto:info@tseelevators.com" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 transition-colors hover:text-[#D6362C]">
                <Mail className="h-4 w-4 text-[#D6362C]" />
                <span>info@tseelevators.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors hover:bg-[#D6362C] hover:text-white border border-slate-200">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors hover:bg-[#D6362C] hover:text-white border border-slate-200">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors hover:bg-[#D6362C] hover:text-white border border-slate-200">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors hover:bg-[#D6362C] hover:text-white border border-slate-200">
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Offices (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B2A5E] border-l-2 border-[#D6362C] pl-3">
                Head Office
              </h4>
              <p className="mt-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <MapPin className="h-4 w-4 shrink-0 text-[#D6362C] mt-0.5" />
                <span>Shop No.– 12, DDA Market, Lado Sarai New Delhi – 110030</span>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B2A5E] border-l-2 border-[#D6362C] pl-3">
                Branch Office
              </h4>
              <p className="mt-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <MapPin className="h-4 w-4 shrink-0 text-[#D6362C] mt-0.5" />
                <span>S.C.O. No. 635, Second Floor, PUDA Gateway City, Sector 119, Mohali – 140501</span>
              </p>
            </div>
          </div>

          {/* Column 3: Useful Links (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B2A5E] border-l-2 border-[#D6362C] pl-3">
              Useful Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-xs sm:text-sm text-slate-600 transition-colors hover:text-[#D6362C]"
                  >
                    <ChevronRight className="h-3 w-3 text-[#D6362C] transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Searches (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B2A5E] border-l-2 border-[#D6362C] pl-3">
              Popular Searches
            </h4>
            <ul className="mt-4 space-y-2.5">
              {POPULAR_SEARCHES.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-xs sm:text-sm text-slate-600 transition-colors hover:text-[#D6362C]"
                  >
                    <ChevronRight className="h-3 w-3 text-[#D6362C] transition-transform group-hover:translate-x-1" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-[#0A0F26]  py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-white sm:flex-row px-5 sm:px-8 lg:px-12">
          <p>© 2026 TSE Shaft Elevators (I) Pvt Ltd. All Rights Reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="cursor-pointer flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#D6362C]"
          >
            <span>Back to top</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}