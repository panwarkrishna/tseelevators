"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, Settings } from "lucide-react";

export default function TopProductionSolutions() {
  return (
    <section className="relative w-full bg-slate-50 py-10 lg:py-15 text-slate-900 overflow-hidden">
      {/* Background Architectural Technical Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      
      {/* Background Subtle Color Glow Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#1B2A5E]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: CONTENT (Col 7) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 self-start shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#D6362C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
                Turnkey Execution & Support
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1B2A5E] sm:text-4xl lg:text-[42px] leading-tight">
              We Develop Top Production <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B5A] to-[#E85C4A]">
                Solutions
              </span>
            </h2>

            {/* Content Blocks */}
            <div className="mt-8 space-y-6">
              
              {/* Box 1: Elevator Installation */}
              <div className="group rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-[#D6362C]/40 hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#D6362C]">
                    <Settings className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Elevator Installation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  TSE Elevators provides turnkey elevator installation services for both residential and commercial buildings. We work closely with architects, builders, and property owners to design and install customized elevator systems that meet your specific requirements and budget.
                </p>
              </div>

              {/* Box 2: Elevator Maintenance and Repairs */}
              <div className="group rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-[#D6362C]/40 hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B2A5E]/10 text-[#1B2A5E]">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Elevator Maintenance and Repairs
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  Our team of certified technicians is available 24/7 to keep your elevators running smoothly. We offer preventative maintenance to extend the lifespan of your elevator and minimize downtime. In case of emergencies or breakdowns, we respond promptly to ensure minimal disruption to your operations.
                </p>
              </div>

            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: FRAMED IMAGE WITH ZOOM EFFECT (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Deep Navy Background Accent Frame */}
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-[#1B2A5E] z-0 hidden sm:block" />

              {/* Main Image Container with Overflow Hidden for Zoom Effect */}
              <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl aspect-[4/5]">
                <Image
                  src="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg"
                  alt="Top Production Solutions and Elevator Installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}