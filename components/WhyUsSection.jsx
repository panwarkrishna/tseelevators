"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";

const whyUsPoints = [
  "Safety first — all lifts are tested before installation",
  "Fine design — luxury finishes for premium spaces",
  "Skilled team — educated engineers who know your needs",
  "On-time service — no delays, no pressure",
  "Long-term support — we're with you after installation too",
];

export default function WhyUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50  py-10 text-slate-900 lg:py-16">
      {/* Background Subtle Gradient Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#1B2A5E]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">



          {/* ================= CONTENT (Col 7) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center text-left lg:col-span-7"
          >
            
                <h3 className="text-2xl font-bold text-slate-800  mb-2">Why Us</h3>
           
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              It is important to select the right elevator partner to ensure
              long term safety and performance.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We&apos;re not just designing a machine — we&apos;re designing a
              part of the look and feel of your building. That&apos;s why we
              focus on:
            </p>

            <ul className="mt-6 space-y-4">
              {whyUsPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D6362C]" />
                  <span className="text-sm leading-relaxed text-slate-700 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Our Promise</h3>
            <p>
Trust is built at TSE Shaft Elevators, not just lifts installed. Be it a small home lift or a luxury elevator for a five-star facility, we treat every job with the same attention and honesty.
</p>
          </motion.div>



                    {/* ================= IMAGE (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[400px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl lg:col-span-5 lg:min-h-full"
          >
            <Image
              src="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-5-scaled.jpg"
              alt="Why choose TSE Shaft Elevators"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
