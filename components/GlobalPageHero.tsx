"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { SITE_URL } from "../lib/site"; // adjust path to your lib/site

interface GlobalPageHeroProps {
  title: string;
  description?: string;
  backgroundImage: string;
  page?: string; // optional breadcrumb label; if omitted, it is built from the URL
}

// words that should stay uppercase in breadcrumb labels
const ACRONYMS = new Set(["amc", "ms"]);

// "lift-amc-services" -> "Lift AMC Services"
const slugToLabel = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((w) =>
      ACRONYMS.has(w.toLowerCase())
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");

// "../lift-location/2.jpg" -> "/lift-location/2.jpg" (external URLs untouched)
const normalizeSrc = (src: string) =>
  /^https?:\/\//i.test(src)
    ? src
    : "/" + src.replace(/^(\.{1,2}\/)+/, "").replace(/^\/+/, "");

export default function GlobalPageHero({
  title,
  page,
  description,
  backgroundImage,
}: GlobalPageHeroProps) {
  const pathname = usePathname() || "/";

  // no trailing slash (matches trailingSlash: false)
  const cleanPath = pathname.replace(/\/+$/, "");
  const lastSegment = cleanPath.split("/").filter(Boolean).pop() || "";

  // priority: page prop -> label from URL -> title
  const label = page?.trim() || (lastSegment ? slugToLabel(lastSegment) : title);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${cleanPath}` },
    ],
  };

  return (
    <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center overflow-hidden bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Background image */}
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
            src={normalizeSrc(backgroundImage)}
            alt={title}
            width={1920}
            height={480}
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-95 contrast-105"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F26] via-transparent to-black/30" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3.5rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.12] drop-shadow-md">
            {title}
          </div>

          {description && (
            <p className="mt-4 max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-200 font-normal drop-shadow">
              {description}
            </p>
          )}

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mt-6 inline-flex max-w-full rounded-full border border-white/15 bg-black/50 px-5 py-2 backdrop-blur-md shadow-lg"
          >
            <ol className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 min-w-0">
              <li className="shrink-0">
                <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-white">
                  <Home className="h-3.5 w-3.5 text-[#E85C4A]" />
                  <span>Home</span>
                </Link>
              </li>
              <li aria-hidden="true" className="shrink-0">
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </li>
              <li
                aria-current="page"
                className="text-[#E85C4A] font-bold tracking-wide truncate max-w-[170px] sm:max-w-md"
              >
                {label}
              </li>
            </ol>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}