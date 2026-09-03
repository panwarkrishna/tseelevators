
import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import {
  Mail,
  Phone,
  Send,
  User,
  AtSign,
  PhoneCall,
  FileText,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us – TSE Elevators",
  description:
    "Get in touch with TSE Elevators for luxury lifts, home elevators, and maintenance services. Visit our head office in New Delhi or branch office in Mohali.",
  alternates: {
    canonical: "https://tseelevators.com/contact",
  },
};

// Social Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.204-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactPage() {
  return (
    <main className="w-full bg-white text-black selection:bg-[#D6362C] selection:text-white">

      {/* ================= HERO ================= */}
      <GlobalPageHero
        title="Contact Us"
        description="Reach out to our vertical mobility experts for inquiries, custom quotations, and 24/7 support."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg"
        badgeText="Get In Touch"
      />

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">

        {/* Background Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Red Glow */}
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[150px]" />

        {/* Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Two Columns */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">

            {/* ================= LEFT: CONTACT DETAILS ================= */}
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-[#f8f8f8] p-7 shadow-sm sm:p-8 lg:col-span-5 lg:p-10">

              <div className="space-y-8">

                {/* Heading */}
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-black">
                    Contact Details
                  </h3>

                  <div className="mt-3 h-1 w-16 rounded-full bg-[#D6362C]" />
                </div>

                {/* Head Office */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6362C]">
                    Head Office
                  </span>

                  <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                       Metro Station-Saket, Shop No.02, Opposite Blue Tokai, Champa Gali, Lane No.3, Westend Marg, Near Saket, Saidulajab, New Delhi, Delhi 110030
                  </p>
                </div>

                {/* Branch Office */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6362C]">
                    Branch Office
                  </span>

                  <p className="text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                    S.C.O. No. 635, Second Floor, PUDA Gateway City, Sector 119,
                    Mohali - 140501
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 border-t border-slate-200 pt-6">

                  {/* Email */}
                  <a
                    href="mailto:info@tseelevators.com"
                    className="group flex items-center gap-3.5 text-sm text-slate-700 transition-colors hover:text-[#D6362C] sm:text-base"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#D6362C] shadow-sm transition-colors group-hover:border-[#D6362C]">
                      <Mail className="h-4 w-4" />
                    </div>

                    <span className="font-medium">
                      info@tseelevators.com
                    </span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919971022555"
                    className="group flex items-center gap-3.5 text-sm text-slate-700 transition-colors hover:text-[#D6362C] sm:text-base"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#D6362C] shadow-sm transition-colors group-hover:border-[#D6362C]">
                      <Phone className="h-4 w-4" />
                    </div>

                    <span className="font-medium">
                      +91-99710-22555
                    </span>
                  </a>

                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-10 flex items-center gap-3 border-t border-slate-200 pt-6">

                <a
                  href="https://www.facebook.com/people/Tse-Elevators/pfbid0381KWAdkMoDyhrK5sRTBGeJVfszTKMdg6W3bSguFszohHpdkTyFTidE1VYnAW9jmCl/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>

                <a
                  href="https://www.instagram.com/tse_elevators/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>

                <a
                  href="http://twitter.com/tseelevators"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"
                >
                  <TwitterIcon className="h-4 w-4" />
                </a>

              </div>
            </div>

            {/* ================= RIGHT: CONTACT FORM ================= */}
            <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-[#f8f8f8] p-7 shadow-sm sm:p-8 lg:col-span-7 lg:p-10">

              {/* Heading */}
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-black">
                  Get In Touch
                </h3>

                <div className="mt-3 h-1 w-16 rounded-full bg-[#D6362C]" />
              </div>

              {/* Form */}
              <form className="mt-8 space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <User className="h-4 w-4 text-[#D6362C]" />
                    </div>

                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-slate-400 shadow-sm outline-none transition-all focus:border-[#D6362C] focus:ring-2 focus:ring-[#D6362C]/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <AtSign className="h-4 w-4 text-[#D6362C]" />
                    </div>

                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-slate-400 shadow-sm outline-none transition-all focus:border-[#D6362C] focus:ring-2 focus:ring-[#D6362C]/10"
                    />
                  </div>

                </div>

                {/* Phone + Requirement */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Phone */}
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <PhoneCall className="h-4 w-4 text-[#D6362C]" />
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-slate-400 shadow-sm outline-none transition-all focus:border-[#D6362C] focus:ring-2 focus:ring-[#D6362C]/10"
                    />
                  </div>

                  {/* Requirement */}
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <FileText className="h-4 w-4 text-[#D6362C]" />
                    </div>

                    <input
                      type="text"
                      placeholder="Requirement"
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-slate-400 shadow-sm outline-none transition-all focus:border-[#D6362C] focus:ring-2 focus:ring-[#D6362C]/10"
                    />
                  </div>

                </div>

                {/* Message */}
                <div className="relative">
                  <div className="pointer-events-none absolute left-3.5 top-4">
                    <MessageSquare className="h-4 w-4 text-[#D6362C]" />
                  </div>

                  <textarea
                    rows={7}
                    placeholder="How can we help you? Feel free to get in touch!"
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-slate-400 shadow-sm outline-none transition-all focus:border-[#D6362C] focus:ring-2 focus:ring-[#D6362C]/10"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-0.5 h-4 w-4 cursor-pointer rounded border-slate-300 text-[#D6362C] focus:ring-[#D6362C]"
                  />

                  <label
                    htmlFor="consent"
                    className="cursor-pointer text-xs leading-relaxed text-slate-600 sm:text-sm"
                  >
                    I agree that my data is collected and stored.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D6362C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#B52A21] hover:shadow-xl active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  <span>Get In Touch</span>
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
