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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">

          {/* ================= LEFT CONTENT COLUMN (Col 7) ================= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Section 1: Lift Manufacturers in Delhi */}
            <motion.div variants={fadeInUp} className="mt-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#273b76] sm:text-4xl lg:text-[42px] lg:leading-tight">
                Lift Manufacturers in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B5A] to-[#E85C4A]">
                  Delhi
                </span>
              </h1>

              <p className="mt-4 text-md leading-relaxed text-black ">
                TSE Shaft Elevators is one of the best Lift Manufacturers in
                Delhi. We manufacture different types of Lifts like passenger
                lift, home lift, hydraulic lift, goods lift etc. Every lift
                is carefully made and tested for safety before it reaches
                you. We use good quality parts so your lift runs trouble
                free for many years.
              </p>

              <h2 className="mt-6 text-xl font-bold tracking-tight text-[#273b76] sm:text-2xl">
                Trusted Elevator Suppliers in Delhi-NCR
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
                We are known as reliable Elevator Suppliers In Delhi-NCR. We
                deliver and install your lift on time, at your place,
                whether you are in Delhi, Noida, Gurugram or Haryana. Our
                team also assists you in selecting the best lift design for
                your building and we stay with you for repair & support even
                after installation.
              </p>

              <p className="mt-4 text-sm font-semibold text-black sm:text-base">
                What Makes us Different
              </p>

              <p className="mt-2 text-sm leading-relaxed text-black sm:text-base">
                It is important to select the right elevator partner to
                ensure long term safety and performance. Here&apos;s what
                makes us the go-to choice across Delhi-NCR:
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-5 text-black sm:text-base list-disc pl-5">
                <li>
                 <strong> Quality Assurance -</strong> ISO Certified Manufacturing Process and
                  Premium Quality Parts
                </li>
                <li>
                 <strong> Custom Solutions -</strong> Elevators tailored to your building&apos;s
                  specific needs
                </li>
                <li>
                  <strong>On-time Delivery -</strong> Projects completed on schedule with
                  little or no disruption
                </li>
                <li>
                  <strong>24/7 Support -</strong> Dedicated service and emergency repair teams
                </li>
                <li>
                  <strong>Competitive Pricing -</strong> No Hidden Costs, Transparent Quotes
                </li>
              </ul>
            </motion.div>

         

          </motion.div>

          {/* ================= RIGHT PRODUCT SHOWCASE (Col 5) ================= */}
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
                    src="../about-tseelevators.webp"
                    alt="Lift Manufacturers in Delhi"
                    title="Lift Manufacturers in Delhi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F26] via-transparent to-black/20" />
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
