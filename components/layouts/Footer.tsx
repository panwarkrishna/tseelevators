// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import certificate from "../../public/certificate-icon-50x50.png";

// import {
//   Phone,
//   Mail,
//   MapPin,
//   ArrowUpRight,
//   ChevronRight,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// // =====================================================
// // SOCIAL ICONS
// // =====================================================
// const FacebookIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//   </svg>
// );

// const InstagramIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.204-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//   </svg>
// );

// const LinkedinIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//   </svg>
// );

// const TwitterIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
//   </svg>
// );

// // =====================================================
// // DATA
// // =====================================================
// const USEFUL_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Blog", href: "/blog001" },
//   { label: "Sitemap", href: "/sitemap" },
//   { label: "Contact Us", href: "/contact" },
//   { label: "Certificate of Appreciation", href: "/certificate-of-appreciation" },
//   { label: "Electrical License", href: "/electrical-license" },
// ];

// const PRODUCTS = [
//   { label: "Home Lift", href: "/home-lift" },
//   { label: "Domestic Lift", href: "/domestic-lift" },
//   { label: "Residential Lift", href: "/residential-lift" },
//   { label: "Passenger Lift", href: "/passenger-lift" },
//   { label: "Commercial Lift", href: "/commercial-lift" },
//   { label: "Pitless Lift", href: "/pitless-lift" },
//   { label: "Goods Lift", href: "/goods-lift" },
//   { label: "Glass Lift", href: "/glass-lift" },
//   { label: "Hydraulic Lift", href: "/hydraulic-lift" },
// ];

// const SERVICES = [
//   { label: "Lift Installation", href: "/services/lift-installation-services" },
//   { label: "Lift Repair", href: "/services/lift-repair-services" },
//   { label: "Lift Maintenance", href: "/services/lift-maintenance-services" },
//   { label: "Lift AMC", href: "/services/lift-amc-services" },
//   { label: "Lift Dismantling", href: "/services/lift-dismantling-services" },
//   { label: "Lift MS Structural", href: "/services/lift-ms-structure" },
// ];

// const SOCIALS = [
//   { label: "Facebook", href: "https://www.facebook.com/people/Tse-Elevators/pfbid0381KWAdkMoDyhrK5sRTBGeJVfszTKMdg6W3bSguFszohHpdkTyFTidE1VYnAW9jmCl/", icon: FacebookIcon },
//   { label: "Instagram", href: "https://www.instagram.com/tse_elevators/", icon: InstagramIcon },
//   { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
//   { label: "X", href: "http://twitter.com/tseelevators", icon: TwitterIcon },
// ];

// const MARKET_AREAS = [
//   "Noida", "Haryana", "Gurgaon", "Sonipat", "Panipat", "Rewari",
//   "Manesar", "Kundli", "Murthal", "Punjab", "Ambala", "Panchkula",
//   "Mohali", "Zirakpur", "Chandigarh", "Kharar", "Ropar", "Kurali"
// ];

// // =====================================================
// // FOOTER COMPONENT
// // =====================================================
// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative overflow-hidden bg-[#253d74] text-white selection:bg-[#D6362C] selection:text-white">

//       {/* Background Glows */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full bg-[#D6362C]/10 blur-[160px]" />
//         <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />
//       </div>

//       {/* ================= TOP CERTIFICATION STRIP ================= */}
//       <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
//         <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
//           <div className="flex items-center gap-4">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D6362C]">
//                 <Link href='/certificate-of-appreciation' target="_blank" rel="noopener noreferrer">
//                   <Image src={certificate} alt="Certification Logo" width={50} height={50} className="h-auto w-auto rounded-md" />
//                 </Link>
//             </div>
//             <div>
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="text-[11px] font-bold uppercase tracking-widest text-[#ef6a5f]">
// Certificate of Appreciation                 </span>
               
//               </div>
//               <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
//                 Delhi-NCR&rsquo;s Most Trusted Elevator Manufacturer
//               </h3>
//             </div>
//           </div>

//          <Link
//               href="/tseelevators/contact"
//               className="mt-6 group inline-flex items-center gap-2 rounded-lg bg-[#D6362C] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#D6362C]/25 transition-all duration-200 hover:bg-[#b52a21] hover:shadow-xl active:scale-95 sm:text-sm"
//             >
//               Enquire Now

//               <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//             </Link>
//         </div>
//       </div>

//       {/* ================= MAIN FOOTER CONTENT ================= */}
//       <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr_1fr]">

//           {/* BRAND & ADDRESS */}
//           <div className="lg:col-span-1 space-y-6 md:col-span-2 lg:max-w-sm">
//             <Image
//               src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
//               alt="TSE Shaft Elevators"
//               width={180}
//               height={72}
//               className="h-12 w-auto rounded-lg bg-white p-2 object-contain"
//             />

//             <p className="text-sm leading-relaxed text-white">
//               Pioneering custom residential, commercial, and industrial vertical
//               mobility solutions with German engineering and absolute safety
//               compliance.
//             </p>

//             <div className="space-y-4">
//               <div className="flex gap-3">
//                 <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Head Office — New Delhi
//                   </p>
//                   <p className="mt-0.5 text-xs leading-relaxed text-white">
//                                          Metro Station-Saket, Shop No.02, Opposite Blue Tokai, Champa Gali, Lane No.3, Westend Marg, Near Saket, Saidulajab, New Delhi, Delhi 110030

//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-3">
//                 <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Branch Office — Mohali
//                   </p>
//                   <p className="mt-0.5 text-xs leading-relaxed text-white">
//                     S.C.O. No. 635, Second Floor, PUDA Gateway City, Sector 119,
//                     Mohali - 140501
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <FooterColumn title="Quick Links">
//             {USEFUL_LINKS.map((link) => (
//               <FooterLink key={link.label} href={link.href} label={link.label} />
//             ))}
//           </FooterColumn>

//           {/* PRODUCTS */}
//           <FooterColumn title="Our Products">
//             {PRODUCTS.map((item) => (
//               <FooterLink key={item.label} href={item.href} label={item.label} />
//             ))}
//           </FooterColumn>

//           {/* SERVICES */}
//           <FooterColumn title="Expert Services">
//             {SERVICES.map((item) => (
//               <FooterLink key={item.label} href={item.href} label={item.label} />
//             ))}
//           </FooterColumn>

//           {/* CONTACT & SOCIALS */}
//           <div className="space-y-5">
//             <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
//               Get In Touch
//             </h4>

//             <div className="space-y-3">
//               <a
//                 href="tel:+919971022555"
//                 className="flex items-start gap-3 text-slate-300 transition-colors hover:text-white"
//               >
//                 <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Helpline
//                   </p>
//                   <p className="text-sm font-semibold">+91 9971022555</p>
//                 </div>
//               </a>

//               <a
//                 href="mailto:info@tseelevators.com"
//                 className="flex items-start gap-3 text-slate-300 transition-colors hover:text-white"
//               >
//                 <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                     Email Us
//                   </p>
//                   <p className="break-words text-sm font-semibold leading-snug">
//                     info@tseelevators.com
//                   </p>
//                 </div>
//               </a>
//             </div>

//             <div>
//               <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
//                 Follow Us
//               </p>
//               <div className="flex items-center gap-2">
//                 {SOCIALS.map((social) => {
//                   const Icon = social.icon;
//                   return (
//                     <a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noreferrer"
//                       aria-label={social.label}
//                       className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
//                     >
//                       <Icon className="h-3.5 w-3.5" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= SERVICE AREA BADGES ================= */}
//         <div className="mt-14 border-t border-white/10 pt-8">
//           <div className="mb-4 flex items-center gap-2">
//             <Sparkles className="h-3.5 w-3.5 text-[#ef6a5f]" />
//             <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">
//               Active Service Coverage
//             </h5>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {MARKET_AREAS.map((area) => (
//               <span
//                 key={area}
//                 className="rounded-lg border border-white/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:border-[#D6362C] hover:text-white"
//               >
//                 {area}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= BOTTOM COPYRIGHT BAR ================= */}
//       <div className="relative border-t border-white/10">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
//           <p className="text-center text-xs text-slate-500 sm:text-left">
//             © 2026{" "}
//             <span className="font-semibold text-slate-300">
//               TSE Shaft Elevators (I) Pvt Ltd.
//             </span>{" "}
//             All Rights Reserved.
//           </p>

//           <div className="flex items-center gap-6">
          
//             <button
//               type="button"
//               onClick={scrollToTop}
//               className="group flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-white"
//             >
//               Back to top
//               <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // =====================================================
// // HELPER COMPONENTS
// // =====================================================
// function FooterColumn({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="space-y-4">
//       <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
//         {title}
//       </h4>
//       <ul className="space-y-2.5">{children}</ul>
//     </div>
//   );
// }

// function FooterLink({ href, label }: { href: string; label: string }) {
//   return (
//     <li>
//       <Link
//         href={href}
//         className="group flex items-center gap-1.5 text-sm text-white transition-colors hover:text-white"
//       >
//         <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#D6362C] transition-transform group-hover:translate-x-1" />
//         <span className="leading-tight">{label}</span>
//       </Link>
//     </li>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import certificate from "../../public/certificate-icon-50x50.png";
import electricalLicense from "../../public/electrical_license-50x50.jpg";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
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
  { label: "Certificate of Appreciation", href: "/certificate-of-appreciation" },
  { label: "Electrical License", href: "/electrical-license" },
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
  { label: "Lift Installation", href: "/services/lift-installation-services" },
  { label: "Lift Repair", href: "/services/lift-repair-services" },
  { label: "Lift Maintenance", href: "/services/lift-maintenance-services" },
  { label: "Lift AMC", href: "/services/lift-amc-services" },
  { label: "Lift Dismantling", href: "/services/lift-dismantling-services" },
  { label: "Lift MS Structural", href: "/services/lift-ms-structure" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/people/Tse-Elevators/pfbid0381KWAdkMoDyhrK5sRTBGeJVfszTKMdg6W3bSguFszohHpdkTyFTidE1VYnAW9jmCl/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/tse_elevators/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "X", href: "http://twitter.com/tseelevators", icon: TwitterIcon },
];

const MARKET_AREAS = [
  "Noida", "Haryana", "Gurgaon", "Sonipat", "Panipat", "Rewari",
  "Manesar", "Kundli", "Murthal", "Punjab", "Ambala", "Panchkula",
  "Mohali", "Zirakpur", "Chandigarh", "Kharar", "Ropar", "Kurali"
];

// Certification badges shown in the top strip.
// iconSrc = local/static image import, iconComponent = a lucide-react icon.
const CERTIFICATIONS = [
  {
    label: "Certificate of Appreciation",
    title: "Delhi-NCR's Most Trusted Elevator Manufacturer",
    href: "/certificate-of-appreciation",
    iconSrc: certificate,
  },
  {
    label: "Electrical License",
    title: "Certified & Compliant Electrical Installations",
    href: "/electrical-license",
    iconSrc: electricalLicense,
  },
];

// =====================================================
// FOOTER COMPONENT
// =====================================================
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#253d74] text-white selection:bg-[#D6362C] selection:text-white">

      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full bg-[#D6362C]/10 blur-[160px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      {/* ================= TOP CERTIFICATION STRIP ================= */}
      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#ef6a5f]" />
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">
              Our Certifications
            </h5>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <CertBadge key={cert.label} {...cert} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr_1fr]">

          {/* BRAND & ADDRESS */}
          <div className="lg:col-span-1 space-y-6 md:col-span-2 lg:max-w-sm">
            <Image
              src="https://tseelevators.com/wp-content/uploads/2023/01/Logo-new.png"
              alt="TSE Shaft Elevators"
              width={180}
              height={72}
              className="h-12 w-auto rounded-lg bg-white p-2 object-contain"
            />

            <p className="text-sm leading-relaxed text-white">
              Pioneering custom residential, commercial, and industrial vertical
              mobility solutions with German engineering and absolute safety
              compliance.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Head Office — New Delhi
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white">
                                         Metro Station-Saket, Shop No.02, Opposite Blue Tokai, Champa Gali, Lane No.3, Westend Marg, Near Saket, Saidulajab, New Delhi, Delhi 110030

                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Branch Office — Mohali
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white">
                    S.C.O. No. 635, Second Floor, PUDA Gateway City, Sector 119,
                    Mohali - 140501
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <FooterColumn title="Quick Links">
            {USEFUL_LINKS.map((link) => (
              <FooterLink key={link.label} href={link.href} label={link.label} />
            ))}
          </FooterColumn>

          {/* PRODUCTS */}
          <FooterColumn title="Our Products">
            {PRODUCTS.map((item) => (
              <FooterLink key={item.label} href={item.href} label={item.label} />
            ))}
          </FooterColumn>

          {/* SERVICES */}
          <FooterColumn title="Expert Services">
            {SERVICES.map((item) => (
              <FooterLink key={item.label} href={item.href} label={item.label} />
            ))}
          </FooterColumn>

          {/* CONTACT & SOCIALS */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h4>

            <div className="space-y-3">
              <a
                href="tel:+919971022555"
                className="flex items-start gap-3 text-slate-300 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Helpline
                  </p>
                  <p className="text-sm font-semibold">+91 9971022555</p>
                </div>
              </a>

              <a
                href="mailto:info@tseelevators.com"
                className="flex items-start gap-3 text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#ef6a5f]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Email Us
                  </p>
                  <p className="break-words text-sm font-semibold leading-snug">
                    info@tseelevators.com
                  </p>
                </div>
              </a>
            </div>

            <div>
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Follow Us
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
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ================= SERVICE AREA BADGES ================= */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#ef6a5f]" />
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">
              Active Service Coverage
            </h5>
          </div>
          <div className="flex flex-wrap gap-2">
            {MARKET_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-lg border border-white/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:border-[#D6362C] hover:text-white"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM COPYRIGHT BAR ================= */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © 2026{" "}
            <span className="font-semibold text-slate-300">
              TSE Shaft Elevators (I) Pvt Ltd.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-white"
            >
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =====================================================
// HELPER COMPONENTS
// =====================================================
function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
        {title}
      </h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1.5 text-sm text-white transition-colors hover:text-white"
      >
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#D6362C] transition-transform group-hover:translate-x-1" />
        <span className="leading-tight">{label}</span>
      </Link>
    </li>
  );
}

function CertBadge({
  href,
  label,
  title,
  iconSrc,
  iconComponent: IconComponent,
}: {
  href: string;
  label: string;
  title: string;
  iconSrc?: any;
  iconComponent?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-200 hover:border-[#D6362C]/50 hover:bg-white/[0.08]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt={label}
            width={50}
            height={50}
            className="h-auto w-auto object-contain"
          />
        ) : IconComponent ? (
          <IconComponent className="h-6 w-6 text-[#253d74]" />
        ) : null}
      </div>

      <div className="min-w-0">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#ef6a5f]">
          {label}
        </span>
        <h3 className="mt-1 truncate text-sm font-bold text-white sm:text-base">
          {title}
        </h3>
      </div>

      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ef6a5f]" />
    </Link>
  );
}
