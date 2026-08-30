"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";

export default function LiftMaintenanceSection() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-15 text-slate-900 overflow-hidden border-t border-slate-100">
      {/* Background Subtle Technical Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      
      {/* Subtle Glow Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#1B2A5E]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#D6362C] shadow-sm"
          >
            Excellence & Reliability
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#1B2A5E] sm:text-4xl lg:text-[46px]"
          >
            Lift Maintenance Services in Delhi-NCR
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D6362C]"
          />
        </div>

        {/* ================= DUAL CONTENT CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Installation & Quality Checks */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-8 sm:p-10 shadow-sm transition-all hover:border-[#D6362C]/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#D6362C] border border-red-100 shadow-inner">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D6362C]">Phase 01</span>
                  <h3 className="text-xl font-extrabold text-[#1B2A5E]">Installation & Compliance</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Installation services encompass the entire process, from planning and design to actual installation, testing, and commissioning. We ensure that elevators are compliant with safety regulations and perform rigorous quality checks to guarantee their safe and efficient operation. Proper installation is essential to the long-term reliability and functionality of the elevator system within a building.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-[#D6362C]" />
              <span>Rigorous Quality Inspection Standards</span>
            </div>
          </motion.div>

          {/* Card 2: Safety, Raw Materials & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-8 sm:p-10 shadow-sm transition-all hover:border-[#D6362C]/40 hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B2A5E]/10 text-[#1B2A5E] border border-blue-100 shadow-inner">
                  <Wrench className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B2A5E]">Phase 02</span>
                  <h3 className="text-xl font-extrabold text-[#1B2A5E]">Uncompromised Safety</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                We offer the highest-quality lifts to our clients and will never compromise on your safety. Using the finest raw materials to design our elevators. The quality is also our priority and this makes us the preferred Lift Maintenance Services in Delhi-NCR. Worry not; we&apos;ll use the latest tools to develop our lifts. With TSE Elevators, you&apos;re in safe hands!
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-[#D6362C]" />
              <span>Finest Raw Materials & Latest Tools</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}