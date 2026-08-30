"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

type ProductItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tag: string;
  altText: string;
};

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Machine Room Elevators",
    category: "Elevators",
    tag: "High-Rise Capacity",
    description:
      "Engineered for high-traffic commercial & residential towers, delivering robust traction speed with centralized machine room control.",
    image:
      "https://img.magnific.com/free-photo/business-executive-waiting-lift_107420-65781.jpg?t=st=1787844773~exp=1787848373~hmac=34d48eb7860c57a787b7d597496d900ded91448c166e2860cbf19c9224d5a1cc&w=1480",
    href: "/products/machine-room-elevators",
    altText: "TSE Machine Room Elevator installation in Delhi commercial building",
  },
  {
    id: 2,
    title: "Hydraulic Lifts",
    category: "Elevators",
    tag: "Smooth Lift Tech",
    description:
      "Ideal for low-rise structures and villas requiring minimum overhead space, whisper-quiet propulsion, and low power usage.",
    image:
      "https://img.magnific.com/free-photo/full-length-portrait-cheerful-teenager-smiling-lady-standing-beside-closed-lift-doors_259150-59965.jpg?t=st=1787853863~exp=1787857463~hmac=9e2c05096b702134b67c952d845d751fda907f9e8517067b4a28686c7c6a2dce&w=1480",
    href: "/products/hydraulic-elevators",
    altText: "Modern Hydraulic Lift system for luxury residential villas in Delhi NCR",
  },
  {
    id: 3,
    title: "Domestic Lifts For Homes",
    category: "Elevators",
    tag: "Zero-Pit Luxury",
    description:
      "Custom-tailored home lifts crafted to blend seamlessly into luxury residences, penthouses, and duplex bungalows with no deep pit.",
    image:
      "https://img.magnific.com/free-vector/metal-elevator-doors-modern-office-hallway_107791-2474.jpg?t=st=1787853889~exp=1787857489~hmac=a9789b0a9f975237c725d1869c7767db0657a120d8d52cbdef6c0e99f15e9229&w=1480",
    href: "/products/home-elevators",
    altText: "Luxury Domestic Lift for homes and duplexes by TSE Elevators Delhi",
  },
  {
    id: 4,
    title: "Residential Lifts",
    category: "Elevators",
    tag: "Smooth & Safe",
    description:
      "Cost-effective and ultra-safe vertical transport solutions designed specifically for apartments and residential housing societies.",
    image:
      "https://img.magnific.com/free-vector/hotel-office-building-hall-with-closed-elevator-door_1284-8147.jpg?t=st=1787853914~exp=1787857514~hmac=97675adb24cb8ee306452f473e145cccf5dd09308c611ecf7b5cc2a2e4c39ce2&w=1480",
    href: "/products/passenger-elevators",
    altText: "Safe and reliable Residential Lift installed in apartment building",
  },
  {
    id: 5,
    title: "Capsule Elevators",
    category: "Elevators",
    tag: "Panoramic Glass",
    description:
      "Architectural glass observatory capsules that turn vertical movement into a breathtaking panoramic visual experience.",
    image:
      "https://img.magnific.com/free-photo/man-wheelchair-elevator-modern-office-building_23-2152019729.jpg?t=st=1787853944~exp=1787857544~hmac=ef4349647b178905bcbc7f577eeee01c5cb53c4c271052df6ceb77673aecaef4&w=1480",
    href: "/products/capsule-elevators",
    altText: "Panoramic Capsule Elevator with glass finish in Delhi commercial complex",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BestProductsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7] py-8 sm:py-10 lg:py-15 text-slate-900">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#D6362C]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
              Engineered for Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]"
          >
            Our Best{" "}
            <span className="text-[#D6362C]">
              Products
            </span>
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
            className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base"
          >
            Discover our comprehensive range of high-performance elevators, customized to elevate comfort, safety, and modern architectural aesthetics.
          </motion.p>
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group relative h-[420px] sm:h-[450px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg transition-all duration-500 hover:border-[#D6362C]/50 hover:shadow-2xl hover:shadow-[#D6362C]/10"
            >
              {/* Background Image with Proper SEO Alt Tag */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={product.image}
                  alt={product.altText}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Layered Vignette Overlays for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-black/1" />
              </div>

              {/* Top Tag Pill */}
              <div className="absolute left-5 top-5 z-10 flex items-center gap-2">
                <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md">
                  {product.tag}
                </span>
              </div>

              {/* Bottom Interactive Content Area */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6">
                
                {/* Category Indicator */}
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85C4A]">
                  {product.category}
                </span>

                {/* Product Title */}
                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-2 transition-all duration-300 group-hover:line-clamp-none sm:text-sm">
                  {product.description}
                </p>

                {/* Action Link Button */}
                <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#E85C4A]"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#D6362C]" />
                  </Link>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#D6362C]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

              </div>

              {/* Bottom Accent Glow Line */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#D6362C] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}