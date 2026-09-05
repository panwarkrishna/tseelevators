"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const lifts = [
  "Passenger Lifts",
  "Home Lifts",
  "Hydraulic Lifts",
  "Glass Lifts",
  "Goods Lifts",
];

export default function PerfectElevatorsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1130] py-10 text-white lg:py-15">
      {/* Background Subtle Gradient Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ================= LEFT COLUMN: TITLE (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center text-left lg:col-span-5"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#E85C4A] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Our Work
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Built for Every{" "}
              <span className="bg-gradient-to-r from-[#FF6B5A] to-[#E85C4A] bg-clip-text text-transparent">
                Vertical Space
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-[#D6362C]" />

            <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              We manufacture and supply many types of lifts, including
              passenger lifts, home lifts, hydraulic lifts, glass lifts and
              goods lifts. All the elevators are made from durable material
              and state of the art technology. For those who want a hint of
              luxury in their building, we add elegant designs and finishes.
            </p>

            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D6362C] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#b52a21] active:scale-95 sm:text-sm"
              >
                <span>More Services</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: LIFT TYPES (Col 7) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:col-span-7"
          >
            {lifts.map((lift, index) => (
              <div
                key={lift}
                className={`rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all hover:border-[#D6362C]/40 sm:p-8 ${
                  index === lifts.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E85C4A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-wide text-white">
                  {lift}
                </h3>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
