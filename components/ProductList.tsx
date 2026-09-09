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
    title: "Home Lift",
    category: "Home Lifts",
    tag: "Perfect for Homes",
    description:
      "Everyone's daily life is made easier and safer with a home elevator, especially for children and the elderly.",
    image: "https://aditechinfo.com/tseelevators/product-img/home-lift.webp",
    href: "/domestic-lift",
    altText: "Home Lift for homes, villas, and residential properties",
  },
  {
    id: 2,
    title: "Domestic Lift",
    category: "Home Lifts",
    tag: "Perfect for Homes",
    description:
      "Compact and reliable domestic lifts designed for private homes, villas, and duplex residences with smooth and safe vertical transportation.",
    image: "https://aditechinfo.com/tseelevators/product-img/domestic.webp",
    href: "/domestic-lift",
    altText: "Domestic Lift for homes, villas, and residential properties",
  },
  {
    id: 3,
    title: "Residential Lift",
    category: "Home Lifts",
    tag: "Smooth & Safe",
    description:
      "At TSE Shaft Elevators, we present safe and elegant lifts in residential buildings. A residential lift adds comfort, luxury, and space-saver capabilities to every family.",
    image: "https://aditechinfo.com/tseelevators/product-img/home-lift.webp",
    href: "/residential-lift",
    altText: "Residential Lift for homes and apartment buildings by TSE Elevators",
  },
  {
    id: 4,
    title: "Passenger Lift",
    category: "Elevators",
    tag: "Premium Comfort",
    description:
      "TSE Shaft Elevators is your premier passenger lift supplier in Delhi-NCR providing safe, smooth and reliable lifts for homes, offices, malls and commercial buildings of all sizes.",
    image: "https://aditechinfo.com/tseelevators/product-img/passenger-lift.webp",
    href: "/passenger-lift",
    altText: "Modern Passenger Lift installation for commercial and residential buildings",
  },
  {
    id: 5,
    title: "Commercial Lift",
    category: "Elevators",
    tag: "Heavy Duty",
    description:
      "TSE Shaft Elevators is a renowned commercial lifts manufacturer in Delhi-NCR. We offer premium commercial lifts that can withstand high traffic with ease while providing you with years of safe and smooth riding.",
    image: "https://aditechinfo.com/tseelevators/product-img/commercial-lift.webp",
    href: "/commercial-lift",
    altText: "Commercial Lift for offices, hotels, hospitals and commercial buildings",
  },
  {
    id: 6,
    title: "Pitless Lift",
    category: "Home Lifts",
    tag: "Space Saving",
    description:
      "Looking for a space-saving and pit-less lift? Our pitless lifts are the right option for you. It is a safe and sophisticated solution for installations with limited pit depth or no pits at all.",
    image: "https://aditechinfo.com/tseelevators/product-img/pitlesslift.webp",
    href: "/pitless-lift",
    altText: "Space-saving Pitless Lift solution for buildings with limited construction space",
  },
  {
    id: 7,
    title: "Goods Lift",
    category: "Industrial Lifts",
    tag: "Industrial Strength",
    description:
      "Do you need the best goods lifts to carry heavy goods from one level to another? Our range of Goods Lifts is suitable for heavy loads and ideal for industrial use.",
    image: "https://aditechinfo.com/tseelevators/product-img/goods-lift.webp",
    href: "/goods-lift",
    altText: "Heavy-duty Goods Lift for industrial and commercial material transportation",
  },
  {
    id: 8,
    title: "Glass Lift",
    category: "Home Lifts",
    tag: "Modern Design",
    description:
      "Elevate the aesthetics of your building with our elegant glass lifts. With a combination of contemporary style and luxury appeal, our lifts provide a stunning visual experience.",
    image: "https://aditechinfo.com/tseelevators/product-img/glass-lift.webp",
    href: "/glass-lift",
    altText: "Modern Glass Lift with panoramic design for homes and premium buildings",
  },
  {
    id: 9,
    title: "Hydraulic Lift",
    category: "Home Lifts",
    tag: "Smooth Lift Tech",
    description:
      "Do you want to install a powerful, smooth, and quiet lift? The hydraulic lift option is a great solution for low- and medium-rise buildings because of its reliability and smooth ride quality.",
    image: "https://aditechinfo.com/tseelevators/product-img/hydraulic-lift.webp",
    href: "/hydraulic-lift",
    altText: "Hydraulic Lift system for residential and commercial buildings",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BestProductsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7] py-8 text-slate-900 sm:py-10 lg:py-15 ">
      {/* ================= BACKGROUND GRID ================= */}
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
            Our Best <span className="text-[#D6362C]">Products</span>
          </motion.h2>

          {/* RED UNDERLINE */}
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
            className="mt-4 text-sm leading-relaxed text-black sm:text-base"
          >
            Discover our comprehensive range of high-performance elevators,
            customized to elevate comfort, safety, and modern architectural
            aesthetics.
          </motion.p>
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group w-full"
            >
              <Link
                href={product.href}
                className="
                  relative block overflow-hidden
                  rounded-[22px]
                  border border-slate-200
                  bg-white
                  shadow-[0_4px_18px_rgba(15,23,42,0.08)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(15,23,42,0.14)]
                "
              >
                {/* ================= IMAGE ================= */}
                <div className="relative h-[280px] w-full overflow-hidden sm:h-[300px]">
                  <Image
                    src={product.image}
                    alt={product.altText}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* ================= TOP TAG ================= */}
                  <div className="absolute left-5 top-5">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border border-white/20
                        bg-slate-800/85
                        px-3.5
                        py-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-white
                        shadow-sm
                        backdrop-blur-md
                      "
                    >
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* ================= CARD CONTENT ================= */}
                <div className="p-6 sm:p-7">
                  {/* Product title */}
                  <h3
                    className="
                      text-2xl
                      font-extrabold
                      leading-tight
                      tracking-tight
                      text-[#102D5E]
                      transition-colors
                      duration-300
                      group-hover:text-[#D6362C]
                    "
                  >
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      line-clamp-3
                      min-h-[72px]
                      text-sm
                      leading-6
                      text-black
                      sm:text-[15px]
                    "
                  >
                    {product.description}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px w-full bg-slate-200" />

                  {/* Bottom CTA */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-extrabold
                        uppercase
                        tracking-wide
                        text-[#102D5E]
                        transition-colors
                        duration-300
                        group-hover:text-[#D6362C]
                      "
                    >
                      View More
                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          text-[#D6362C]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </span>

                    {/* Circular arrow */}
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        text-slate-700
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:border-[#D6362C]
                        group-hover:bg-[#D6362C]
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Bottom red hover line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-[#D6362C]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
