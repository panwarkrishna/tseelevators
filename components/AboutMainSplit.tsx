"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles, Award } from "lucide-react";

const whyUsPoints = [
  "Safety first — all lifts are tested before installation",
  "Fine design — luxury finishes for premium spaces",
  "Skilled team — educated engineers who know your needs",
  "On-time service — no delays, no pressure",
];

export default function AboutMainSplit() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 text-slate-900 lg:py-16">
      {/* Background Subtle Gradient Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#1B2A5E]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* SECTION TOP HEADER BADGE */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#D6362C]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
              Pioneering Vertical Engineering Since 2010
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#1B2A5E] sm:text-4xl lg:text-[46px]">
            Luxury Elevator Manufacturers <br />
            <span className="bg-gradient-to-r from-[#FF6B5A] to-[#E85C4A] bg-clip-text text-transparent">
              in Delhi-NCR
            </span>
          </h2>
        </div>

        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">

          {/* ================= BENTO BOX 1: IMAGE SHOWCASE (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[400px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl lg:col-span-5 lg:min-h-full"
          >
            <Image
              src="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-5-scaled.jpg"
              alt="Luxury Elevator Manufacturers in Delhi-NCR"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Floating Badge Inside Image */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/85 p-4 text-left text-white shadow-lg backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D6362C] text-white">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#E85C4A]">
                  Certified Standards
                </p>
                <h4 className="text-xs font-bold text-white">
                  Handcrafted & Industrial Excellence
                </h4>
              </div>
            </div>
          </motion.div>

          {/* ================= BENTO BOX 2: CONTENT & BULLETS (Col 7) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center text-left lg:col-span-7"
          >
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                Welcome to TSE Shaft Elevators, the name you can trust for
                lifts and elevators in Delhi-NCR. It is important to select
                the right elevator partner to ensure long term safety and
                performance.
              </p>

              <p>
                We began with one goal — to provide safe, smooth and stylish
                elevators that last for years to homes and buildings.
              </p>

              <h3 className="pt-2 text-xl font-bold text-[#1B2A5E] sm:text-2xl">
                Luxury Elevator Company in Delhi-NCR
              </h3>
              <p>
                Today, we are proud to be recognized as a prominent Luxury
                Elevator Company in Delhi-NCR. From simple home lifts to
                grand high-end elevators for villas, hotels and premium
                buildings, we design every lift with care, style and top
                quality.
              </p>
              <p>
                We manufacture and supply many types of lifts, including
                passenger lifts, home lifts, hydraulic lifts, glass lifts and
                goods lifts. All elevators are made from durable material and
                state-of-the-art technology, finished with elegant design for
                a touch of luxury.
              </p>

              <h3 className="pt-2 text-xl font-bold text-[#1B2A5E] sm:text-2xl">
                Why Us
              </h3>
              <p>
                We&apos;re not just designing a machine — we&apos;re designing
                a part of the look and feel of your building. That&apos;s why
                we focus on:
              </p>

              <ul className="space-y-3 pt-1">
                {whyUsPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D6362C]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-1">
                Long-term support: we&apos;re with you after installation too.
              </p>

              <h3 className="pt-2 text-xl font-bold text-[#1B2A5E] sm:text-2xl">
                Our Promise
              </h3>
              <p>
                Trust is built at TSE Shaft Elevators, not just lifts
                installed. Be it a small home lift or a luxury elevator for a
                five-star facility, we treat every job with the same
                attention and honesty.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
