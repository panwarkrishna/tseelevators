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
      "Compact and reliable domestic lifts designed for private homes, villas, and duplex residences with smooth and safe vertical transportation.",
    image:
      "https://img.magnific.com/free-photo/business-executive-waiting-lift_107420-65781.jpg",
    href: "/tseelevators/products/domestic-lifts",
    altText:
      "Home Lift for homes, villas, and residential properties",
  },

  {
    id: 2,
    title: "Domestic Lift",
    category: "Home Lifts",
    tag: "Perfect for Homes",
    description:
      "Compact and reliable domestic lifts designed for private homes, villas, and duplex residences with smooth and safe vertical transportation.",
    image:
      "https://img.magnific.com/free-photo/business-executive-waiting-lift_107420-65781.jpg",
    href: "/tseelevators/products/domestic-lifts",
    altText:
      "Domestic Lift for homes, villas, and residential properties",
  },

  {
    id: 3,
    title: "Residential Lift",
    category: "Home Lifts",
    tag: "Smooth & Safe",
    description:
      "Reliable and comfortable residential lifts designed for homes, apartments, and housing societies with a focus on safety and smooth operation.",
    image:
      "https://img.magnific.com/free-vector/hotel-office-building-hall-with-closed-elevator-door_1284-8147.jpg",
    href: "/tseelevators/products/residential-lifts",
    altText:
      "Residential Lift for homes and apartment buildings by TSE Elevators",
  },

  {
    id: 4,
    title: "Passenger Lift",
    category: "Elevators",
    tag: "Premium Comfort",
    description:
      "Modern passenger lifts engineered to provide safe, smooth, and efficient vertical transportation for residential and commercial buildings.",
    image:
      "https://img.magnific.com/free-photo/business-executive-waiting-lift_107420-65781.jpg",
    href: "/tseelevators/products/passenger-lifts",
    altText:
      "Modern Passenger Lift installation for commercial and residential buildings",
  },

  {
    id: 5,
    title: "Commercial Lift",
    category: "Elevators",
    tag: "Heavy Duty",
    description:
      "High-performance commercial lifts designed for offices, hotels, shopping centres, hospitals, and other high-traffic commercial environments.",
    image:
      "https://img.magnific.com/free-vector/metal-elevator-doors-modern-office-hallway_107791-2474.jpg",
    href: "/tseelevators/products/commercial-lifts",
    altText:
      "Commercial Lift for offices, hotels, hospitals and commercial buildings",
  },

  {
    id: 6,
    title: "Pitless Lift",
    category: "Home Lifts",
    tag: "Space Saving",
    description:
      "Space-efficient pitless lift solutions designed for buildings where conventional deep lift pits are difficult or impractical to install.",
    image:
      "https://img.magnific.com/free-photo/man-wheelchair-elevator-modern-office-building_23-2152019729.jpg",
    href: "/tseelevators/products/pitless-lifts",
    altText:
      "Space-saving Pitless Lift solution for buildings with limited construction space",
  },

  {
    id: 7,
    title: "Goods Lift",
    category: "Industrial Lifts",
    tag: "Industrial Strength",
    description:
      "Heavy-duty goods lifts built for safe and efficient transportation of materials, equipment, and goods across commercial and industrial facilities.",
    image:
      "https://img.magnific.com/free-vector/hotel-office-building-hall-with-closed-elevator-door_1284-8147.jpg",
    href: "/tseelevators/products/goods-lifts",
    altText:
      "Heavy-duty Goods Lift for industrial and commercial material transportation",
  },

  {
    id: 8,
    title: "Glass Lift",
    category: "Home Lifts",
    tag: "Modern Design",
    description:
      "Elegant glass lifts featuring modern architectural styling, panoramic visibility, and smooth operation for premium homes and contemporary buildings.",
    image:
      "https://img.magnific.com/free-photo/full-length-portrait-cheerful-teenager-smiling-lady-standing-beside-closed-lift-doors_259150-59965.jpg",
    href: "/tseelevators/products/glass-lifts",
    altText:
      "Modern Glass Lift with panoramic design for homes and premium buildings",
  },

  {
    id: 9,
    title: "Hydraulic Lift",
    category: "Home Lifts",
    tag: "Smooth Lift Tech",
    description:
      "Efficient hydraulic lift solutions ideal for low-rise buildings, villas, and applications requiring smooth movement and dependable performance.",
    image:
      "https://img.magnific.com/free-photo/full-length-portrait-cheerful-teenager-smiling-lady-standing-beside-closed-lift-doors_259150-59965.jpg",
    href: "/tseelevators/products/hydraulic-lifts",
    altText:
      "Hydraulic Lift system for residential and commercial buildings",
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
    <section className="relative w-full overflow-hidden bg-[#f7f7f7] py-8 text-slate-900 sm:py-10 lg:py-15">

      {/* ================= BACKGROUND GRID ================= */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ================= SECTION HEADER ================= */}

        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 shadow-sm"
          >

            <Sparkles className="h-3.5 w-3.5 text-[#D6362C]" />

            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
              Engineered for Excellence
            </span>

          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]"
          >

            Our Best{" "}

            <span className="text-[#D6362C]">
              Products
            </span>

          </motion.h2>

          {/* RED UNDERLINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mt-3.5 h-1 w-20 rounded-full bg-[#D6362C]"
          />

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base"
          >
            Discover our comprehensive range of high-performance
            elevators, customized to elevate comfort, safety, and
            modern architectural aesthetics.
          </motion.p>

        </div>

        {/* ================= PRODUCTS GRID ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-60px",
          }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >

          {PRODUCTS.map((product) => (

            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group relative h-[420px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg transition-all duration-500 hover:border-[#D6362C]/50 hover:shadow-2xl hover:shadow-[#D6362C]/10 sm:h-[450px]"
            >

              {/* ================= PRODUCT IMAGE ================= */}

              <div className="absolute inset-0 h-full w-full">

                <Image
                  src={product.image}
                  alt={product.altText}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute inset-0 bg-black/10" />

              </div>

              {/* ================= TOP TAG ================= */}

              <div className="absolute left-5 top-5 z-10 flex items-center gap-2">

                <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md">
                  {product.tag}
                </span>

              </div>

              {/* ================= PRODUCT CONTENT ================= */}

              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6">

                {/* CATEGORY */}

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E85C4A]">
                  {product.category}
                </span>

                {/* TITLE */}

                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-300 transition-all duration-300 group-hover:line-clamp-none sm:text-sm">
                  {product.description}
                </p>

                {/* ACTION */}

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-2">

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#E85C4A]"
                  >

                    <span>
                      View Specifications
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-[#D6362C] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  </Link>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#D6362C]">

                    <ArrowUpRight className="h-4 w-4" />

                  </div>

                </div>

              </div>

              {/* ================= BOTTOM ACCENT ================= */}

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#D6362C] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}
