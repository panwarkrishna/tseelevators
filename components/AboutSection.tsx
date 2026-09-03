"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Sparkles,
  Building2,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#ffffff] py-8 sm:py-10 lg:py-15 text-black">
      {/* Background Architectural Grid & Subtle Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      {/* <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#1B2A5E]/40 blur-[140px]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* ================= LEFT CONTENT COLUMN (Col 7) ================= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Tagline */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-[#D6362C] bg-white/5 px-3.5 py-1.5 backdrop-blur-md self-start">
              <span className="h-2 w-2 rounded-full bg-[#D6362C] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-black">
                Pioneering Vertical Engineering
              </span>
            </motion.div>

            {/* Section 1: Lift Manufacturers in Delhi */}
            <motion.div variants={fadeInUp} className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#273b76] sm:text-4xl lg:text-[42px] lg:leading-tight">
                Lift Manufacturers in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B5A] to-[#E85C4A]">
                  Delhi
                </span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
                We are the leading Lift Manufacturers in Delhi, offering turnkey mobility solutions to Residential, Commercial, and Public Transportation Buildings. Our precision portfolio includes home elevators, passenger elevators, residential lifts, capsule lifts, and escalators—engineered to world-class safety standards at the most competitive value.
              </p>

              <motion.div
                variants={fadeInUp}
                // whileHover={{ scale: 1.01 }}
                className="mt-6 flex items-start gap-3 rounded-xl border border-[#D6362C]/30 bg-white/[0.05] p-3.5 backdrop-blur-sm transition-colors"
              >
                <Wrench className="h-5 w-5 shrink-0 text-[#E85C4A] mt-0.5" />
                <p className="text-xs leading-relaxed text-black sm:text-sm">
                  Apart from new elevator manufacturing, our certified technical team provides comprehensive repair, modernizations, and proactive Annual Maintenance Contracts (AMC) across Delhi-NCR.
                </p>
              </motion.div>
            </motion.div>


            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 md:mt-10 mt-5">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#D6362C] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#D6362C]/25 transition-all duration-200 hover:bg-[#b52a21] hover:shadow-xl active:scale-95 sm:text-sm"
              >
                <span>Explore More Services</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

          </motion.div>

         {/* ================= RIGHT PRODUCT SHOWCASE (Col 5) ================= */}
{/* ================= RIGHT PRODUCT SHOWCASE (Col 5 - Compact Layout) ================= */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative w-full lg:col-span-5 flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-sm sm:max-w-md">
          
          {/* Subtle and Compact Back Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#D6362C]/10 via-transparent to-[#1B2A5E]/20 opacity-30 blur-md" />

          {/* Main Product Frame */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-md backdrop-blur-sm">
            
            {/* Product Image */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://aditechinfo.com/tseelevators/product-img/about-tseelevators.png"
                alt="TSE Luxury Gold Elevator Cabin"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F26] via-transparent to-black/20" />

              {/* Top Badge */}
              <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Gold Series Interior</span>
              </div>

              {/* Bottom Floating Stats Inside Card */}
              <div className="absolute inset-x-3.5 bottom-3.5 rounded-xl border border-white/10 bg-slate-950/80 p-3 backdrop-blur-md shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E85C4A]">
                      Engineered In Delhi
                    </p>
                    <h4 className="mt-0.5 text-xs sm:text-sm font-bold text-white">
                      TSE Panoramic Series
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-white">
                    <ShieldCheck className="h-4 w-4 text-[#E85C4A]" />
                    <span>EN-81 Safety</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Experience Overlapping Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-11 -left-4 hidden sm:flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B1130]/90 p-3 shadow-lg backdrop-blur-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D6362C] text-white">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white">15+ Years</p>
              <p className="text-[10px] text-slate-400">Industry Excellence in Delhi-NCR</p>
            </div>
          </motion.div>

        </div>
      </motion.div>

        </div>
      </div>
    </section>
  );
}