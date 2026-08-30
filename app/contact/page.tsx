import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import { Mail, Phone, Send, User, AtSign, PhoneCall, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us – TSE Elevators",
  description: "Get in touch with TSE Elevators for luxury lifts, home elevators, and maintenance services. Visit our head office in New Delhi or branch office in Mohali.",
  alternates: {
    canonical: "https://tseelevators.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-slate-950 text-white selection:bg-[#D6362C] selection:text-white">
      {/* 1. Global Page Hero */}
      <GlobalPageHero
        title="Contact Us"
        description="Reach out to our vertical mobility experts for inquiries, custom quotations, and 24/7 support."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg"
        badgeText="Get In Touch"
      />

      {/* 2. Contact Section */}
      <section className="relative w-full py-10 lg:py-15 overflow-hidden bg-slate-950">
        {/* Background Architectural Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          
          {/* Added items-stretch so both columns match heights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* ================= LEFT COLUMN: CONTACT DETAILS ================= */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-10 rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl h-full">
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Contact Details
                  </h3>
                  <div className="mt-3 h-1 w-16 rounded-full bg-[#D6362C]" />
                </div>

                {/* Head Office */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E85C4A]">
                    Head Office
                  </span>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    Shop No.– 12, DDA Market,<br />
                    Lado Sarai New Delhi – 110030
                  </p>
                </div>

                {/* Branch Office */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E85C4A]">
                    Branch Office
                  </span>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                    S.C.O. No. 635, Second Floor,<br />
                    PUDA Gateway City, Sector 119,<br />
                    Mohali – 140501
                  </p>
                </div>

                {/* Direct Info */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <a
                    href="mailto:info@tseelevators.com"
                    className="flex items-center gap-3.5 text-sm sm:text-base text-slate-300 hover:text-[#E85C4A] transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#E85C4A]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="font-medium">info@tseelevators.com</span>
                  </a>

                  <a
                    href="tel:+919971022555"
                    className="flex items-center gap-3.5 text-sm sm:text-base text-slate-300 hover:text-[#E85C4A] transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#E85C4A]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="font-medium">+91- 99710-22555</span>
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                {/* Facebook */}
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Link>
                {/* Twitter */}
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                {/* Instagram */}
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                {/* LinkedIn */}
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
              </div>

            </div>

            {/* ================= RIGHT COLUMN: GET IN TOUCH FORM ================= */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl h-full">
              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Get In Touch
                </h3>
                <div className="mt-3 h-1 w-16 rounded-full bg-[#D6362C]" />
              </div>

              <form className="mt-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                        <User className="h-4 w-4 text-[#E85C4A]" />
                      </div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6362C] focus:outline-none focus:ring-1 focus:ring-[#D6362C] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                        <AtSign className="h-4 w-4 text-[#E85C4A]" />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6362C] focus:outline-none focus:ring-1 focus:ring-[#D6362C] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                        <PhoneCall className="h-4 w-4 text-[#E85C4A]" />
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6362C] focus:outline-none focus:ring-1 focus:ring-[#D6362C] transition-all"
                      />
                    </div>

                    {/* Requirement */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                        <FileText className="h-4 w-4 text-[#E85C4A]" />
                      </div>
                      <input
                        type="text"
                        placeholder="Requirement"
                        className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6362C] focus:outline-none focus:ring-1 focus:ring-[#D6362C] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message / How can we help */}
                  <div className="relative">
                    <div className="absolute top-4 left-3 pointer-events-none text-slate-400">
                      <MessageSquare className="h-4 w-4 text-[#E85C4A]" />
                    </div>
                    <textarea
                      rows={10}
                      placeholder="How can we help you? Feel free to get in touch!"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D6362C] focus:outline-none focus:ring-1 focus:ring-[#D6362C] transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  {/* Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="h-4 w-4 rounded border-white/20 bg-white/5 text-[#D6362C] focus:ring-[#D6362C] focus:ring-offset-slate-900 cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs sm:text-sm text-slate-300 cursor-pointer">
                      I agree that my data is collected and stored.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D6362C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-[#b52a21] hover:shadow-red-900/40 active:scale-95 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Get in Touch</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}