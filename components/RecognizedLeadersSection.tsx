"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Users,
  Award,
  Layers,
  Zap,
  Headphones,
  CheckCircle2,
} from "lucide-react";

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: any;
  highlight: string;
};

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Expert Technicians",
    highlight: "Certified Professionals",
    description:
      "Working with an establishment that understands and fulfills your requirements can work wonders. Our lift manufacturers in Delhi leverage results by delivering top-notch services.",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Extreme Customer Focus",
    highlight: "Client-First Approach",
    description:
      "We keep our clients first and help them overcome certain challenges. No matter the budget, we help you with the finest solutions and collaborative approach.",
    icon: Users,
  },
  {
    id: 3,
    title: "Professional Service",
    highlight: "Industry Standard",
    description:
      "We are dedicated to offering professional assistance to all our clients. Our team of lift manufacturers in Delhi will serve your needs and requirements seamlessly.",
    icon: Award,
  },
  {
    id: 4,
    title: "Full-Service Solutions",
    highlight: "End-to-End Support",
    description:
      "We don’t stop after providing you with our high-quality products. We can handle all your service and maintenance requirements for residential and commercial buildings.",
    icon: Layers,
  },
  {
    id: 5,
    title: "Fast Service",
    highlight: "Quick Turnaround",
    description:
      "With our expert technicians and efficient processes, we prioritize minimizing downtime and ensuring the smooth operation of your elevators.",
    icon: Zap,
  },
  {
    id: 6,
    title: "24x7 Support",
    highlight: "Always Available",
    description:
      "We believe in being honest in everything we do. Get 24/7 emergency breakdown and support service from our side. We'll be happy to help!",
    icon: Headphones,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RecognizedLeadersSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-8 sm:py-10 lg:py-15 text-slate-900">
      {/* Background Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-[#D6362C]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
              Why Choose TSE Elevators
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]"
          >
            Recognized Leaders in the{" "}
            <span className="text-[#D6362C]">Industry</span>
          </motion.h2>

          {/* Red Accent Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3.5 h-1 w-20 rounded-full bg-[#D6362C]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg"
          >
            Modernization has changed the entire scenario. Having multi-storeyed homes can make it laborious to climb up and down stairs. TSE Elevators is one of the best{" "}
            <strong className="text-slate-900 font-semibold">
              Lift Installation, Repair and Maintenance Services in Delhi-NCR
            </strong>
            , delivering top-notch elevators and lift services for a seamless customer experience.
          </motion.p>
        </div>

        {/* ================= FEATURE GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {FEATURES.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#D6362C]/40 hover:shadow-xl hover:shadow-[#D6362C]/5"
              >
                <div>
                  {/* Top Header: Icon & Highlight Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B2A5E]/5 text-[#1B2A5E] transition-colors duration-300 group-hover:bg-[#D6362C] group-hover:text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 transition-colors group-hover:bg-[#D6362C]/10 group-hover:text-[#D6362C]">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-[#1B2A5E]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6362C]">
                    TSE Standard
                  </span>
                  <div className="h-1.5 w-6 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-[#D6362C]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}