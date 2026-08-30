"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ChevronRight, Home } from "lucide-react";

interface GlobalPageHeroProps {
  title: string;
  description?: string;
  backgroundImage: string;
  badgeText?: string;
}

export default function GlobalPageHero({
  title,
  description,
  backgroundImage,
  badgeText = "TSE Shaft Elevators",
}: GlobalPageHeroProps) {
  return (
    <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Image with Framer-Motion Infinite Smooth Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative h-full w-full"
        >
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-95 contrast-105"
          />
        </motion.div>

        {/* Balanced Multi-Stop Gradient Overlay (Keeps image visible while ensuring contrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F26] via-transparent to-black/30" />
      </div>

      {/* Background Subtle Architectural Grid */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3.5rem]" />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-xl mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#E85C4A]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200">
              {badgeText}
            </span>
          </div>

          {/* Page Main Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.12] drop-shadow-md">
            {title}
          </h1>

          {/* Optional Description */}
          {description && (
            <p className="mt-4 max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-200 font-normal drop-shadow">
              {description}
            </p>
          )}

          {/* Modern Breadcrumb Navigation */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-5 py-2 backdrop-blur-md shadow-lg text-xs sm:text-sm font-semibold text-slate-300 max-w-full">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-white shrink-0">
              <Home className="h-3.5 w-3.5 text-[#E85C4A]" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            {/* Added truncate and max-w for mobile ellipse effect */}
            <span className="text-[#E85C4A] font-bold tracking-wide truncate max-w-[170px] sm:max-w-md">
              {title}
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}