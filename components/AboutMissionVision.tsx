"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PerfectElevatorsSection() {
  return (
    <section className="relative w-full bg-[#0B1130] py-10 lg:py-15 text-white overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: TITLE & HIGHLIGHTS (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#E85C4A] backdrop-blur-md self-start">
              Custom Engineering
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] leading-tight">
              Perfect Elevators and Lifts for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B5A] to-[#E85C4A]">
                Needs
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-[#D6362C]" />

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300">
              We specialize in custom-tailored vertical transport solutions, delivering industry-leading reliability and craftsmanship for residential and commercial spaces across India.
            </p>

            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D6362C] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#b52a21] active:scale-95"
              >
                <span>More Services</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: CONTENT CARDS (Col 7) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Card 1: Independent Manufacturer Focus */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-[#D6362C]/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D6362C]/20 text-[#E85C4A]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Independent Lift Specialists in India
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                TSE Elevators is one of India&apos;s fastest growing <strong className="text-white font-semibold">Elevators Manufacturers in Delhi-NCR</strong> with a well-established reputation for quality and reliability. We occupy a particularly competitive position in the lift market as we are one of the few fully independent lift companies in India able to offer an almost limitless range of lifts and components. This includes lifts with or without a machine room in an enormous range of sizes and configurations, Goods Lifts, Home Lifts, & Residential Lifts made to measure to satisfy our client&apos;s special requirements – and more.
              </p>
            </div>

            {/* Card 2: Professional Atmosphere & Collaboration */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-[#D6362C]/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Collaborating with Architects & Consultants
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                TSE Elevators has a professional atmosphere as a lift designer and manufacturer, including well exploring trends & technology. Our clients and collaborators include lift companies, both large and small, architects, and consultants, with the straight forward aim of providing Indian lift professionals with vertical transport solutions of high added value: lifts which are easy to install and maintain, reliable and long-lasting with competitive pricing and specification.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}