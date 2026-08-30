"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles, ShieldCheck, Award } from "lucide-react";

const bulletPoints = [
  "Genuine expression of the Made in India",
  "Knowhow on the lifts design",
  "Perfect combination between handicraft and industrial production",
  "Customization of any existing project",
  "Fast passage between any idea and its industrialization",
];

export default function AboutMainSplit() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-15 text-slate-900 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#1B2A5E]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* SECTION TOP HEADER BADGE */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#D6362C]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
              Pioneering Vertical Engineering Since 2010
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1B2A5E] sm:text-4xl lg:text-[46px] leading-tight">
            Luxury Elevator Manufacturers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B5A] to-[#E85C4A]">
              in Delhi-NCR
            </span>
          </h2>
        </div>

        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= BENTO BOX 1: IMAGE SHOWCASE (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl min-h-[400px] lg:min-h-full"
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
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-slate-900/85 p-4 backdrop-blur-md shadow-lg text-white flex items-center gap-3">
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
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/70 p-8 sm:p-10 shadow-sm backdrop-blur-md"
          >
            <div>
              {/* Description Paragraphs */}
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Our long lasting tradition as manufacturers has allowed us to get an extraordinary knowhow, including any design, production, erection, and maintenance features, in line with any market need.
                </p>
                <p>
                  We are one of the <strong className="text-slate-900 font-bold">Luxury Elevator Manufacturers in Delhi-NCR</strong>. Our experience, knowledge, and professional nature are our best guarantee for customers, companies, and designers.
                </p>
              </div>

              {/* Bento Sub-Grid for Bullet Points */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {bulletPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#D6362C]/40 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#D6362C] transition-colors group-hover:bg-[#D6362C] group-hover:text-white mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Trust Strip Inside Bento */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B2A5E]">
                <ShieldCheck className="h-4 w-4 text-[#D6362C]" />
                <span>100% Quality Assurance Guarantee</span>
              </div>
              <span className="text-xs font-bold text-slate-400">TSE India</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}