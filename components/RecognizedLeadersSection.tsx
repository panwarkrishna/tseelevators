"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Users,
  Award,
  Layers,
  Zap,
  Headphones,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: any;
};

const FEATURES: FeatureItem[] = [
  {
    id: "01",
    title: "Expert Technicians",
    description:
      "Certified professionals with practical experience in lift installation, repair, and maintenance.",
    icon: Wrench,
  },
  {
    id: "02",
    title: "Customer First",
    description:
      "We understand your requirements first and recommend solutions that fit your needs and budget.",
    icon: Users,
  },
  {
    id: "03",
    title: "Professional Service",
    description:
      "Reliable workmanship and industry-standard practices across every project we handle.",
    icon: Award,
  },
  {
    id: "04",
    title: "End-to-End Solutions",
    description:
      "From installation to modernization, servicing, and maintenance — we support you throughout.",
    icon: Layers,
  },
  {
    id: "05",
    title: "Fast Response",
    description:
      "Efficient service designed to reduce downtime and get your elevator operating smoothly.",
    icon: Zap,
  },
  {
    id: "06",
    title: "24×7 Support",
    description:
      "Round-the-clock emergency assistance for unexpected breakdowns and service requirements.",
    icon: Headphones,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RecognizedLeadersSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-16 text-slate-900 sm:py-20 lg:py-24">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D6362C]/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#1B2A5E]/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            MAIN INTRO
        ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#D6362C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 sm:text-[11px]">
                Why Choose TSE Elevators
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
              Built Around
              <br />

              <span className="text-[#D6362C]">
                Your Safety.
              </span>

              <br />

              Designed for
              <br />

              <span className="text-[#1B2A5E]">
                Your Comfort.
              </span>
            </h2>

            {/* Accent */}

            <div className="mt-5 h-1 w-16 rounded-full bg-[#D6362C]" />

            {/* Description */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              TSE Elevators combines experienced technicians, dependable
              products, and responsive service to deliver complete elevator
              solutions for residential and commercial buildings across
              Delhi-NCR.
            </p>

            {/* Trust points */}

            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3">

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D6362C]" />
                Quality Solutions
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D6362C]" />
                Skilled Team
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D6362C]" />
                Quick Response
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D6362C]" />
                24×7 Support
              </div>

            </div>

            {/* CTA */}

            <Link
              href="/tseelevators/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#1B2A5E] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#D6362C] hover:shadow-xl"
            >
              Talk to Our Experts

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

          </motion.div>


          {/* =====================================================
              RIGHT SIDE — BENEFITS
          ===================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-60px",
            }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >

            {FEATURES.map((item) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D6362C]/30 hover:shadow-xl"
                >

                  {/* Top row */}

                  <div className="flex items-start justify-between">

                    {/* Icon */}

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B2A5E]/5 text-[#1B2A5E] transition-all duration-300 group-hover:bg-[#D6362C] group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    {/* Number */}

                    <span className="text-2xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#D6362C]/10">
                      {item.id}
                    </span>

                  </div>

                  {/* Content */}

                  <h3 className="mt-5 text-base font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-[13px]">
                    {item.description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-4 flex items-center gap-2">

                    <div className="h-px flex-1 bg-slate-100 transition-colors group-hover:bg-[#D6362C]/20" />

                    <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D6362C]" />

                  </div>

                  {/* Hover accent */}

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D6362C] transition-all duration-500 group-hover:w-full" />

                </motion.div>
              );
            })}

          </motion.div>

        </div>


        {/* =====================================================
            BOTTOM TRUST BAR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-2xl bg-[#1B2A5E] shadow-xl"
        >

          <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">

            <div className="px-5 py-5 text-center">
              <p className="text-xl font-black text-white">24×7</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                Support
              </p>
            </div>

            <div className="px-5 py-5 text-center">
              <p className="text-xl font-black text-white">100%</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                Customer Focus
              </p>
            </div>

            <div className="px-5 py-5 text-center">
              <p className="text-xl font-black text-white">End-to-End</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                Solutions
              </p>
            </div>

            <div className="px-5 py-5 text-center">
              <p className="text-xl font-black text-[#FF7064]">Fast</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                Response
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}