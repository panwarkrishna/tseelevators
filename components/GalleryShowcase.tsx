"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Maximize2, X, PlusCircle } from "lucide-react";

type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};

const ALL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-1-761x473.jpg",
    alt: "Luxury capsule and passenger elevator installation by TSE Elevators Delhi-NCR",
  },
  {
    id: 2,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-2-723x473.jpg",
    alt: "Modern residential home lift interior design and stainless steel finish",
  },
  {
    id: 3,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-3-464x473.jpg",
    alt: "Custom architectural elevator cabin with premium lighting",
  },
  {
    id: 4,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4-723x473.jpg",
    alt: "Opulent series luxury elevator manufacturer project in Delhi",
  },
  {
    id: 5,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-6-840x473.jpg",
    alt: "Commercial building glass lift engineering and setup",
  },
  {
    id: 6,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-7-scaled.jpg",
    alt: "Handcrafted elevator doors and high-speed mechanics",
  },
  {
    id: 7,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-8-scaled.jpg",
    alt: "Customized hydraulic lift and shaft design across India",
  },
  {
    id: 8,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-9-scaled.jpg",
    alt: "Elegant hotel capsule elevator installation",
  },
  {
    id: 9,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-10-scaled.jpg",
    alt: "Advanced machine-room-less (MRL) lift manufacturing",
  },
  {
    id: 10,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-11-840x473.jpg",
    alt: "Premium hospital stretcher elevator interior view",
  },
  {
    id: 11,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-12-720x473.jpg",
    alt: "Heavy-duty industrial goods lift manufacturing",
  },
  {
    id: 12,
    image:
      "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-13-scaled.jpg",
    alt: "Exquisite glass wall elevator in a luxury villa",
  },
];

const ITEMS_PER_PAGE = 6;

export default function GalleryShowcase() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  const currentItems = ALL_GALLERY_ITEMS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_GALLERY_ITEMS.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 3, ALL_GALLERY_ITEMS.length)
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 text-black sm:py-16 lg:py-20">

      {/* ================= BACKGROUND ================= */}

      {/* Subtle architectural grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Subtle red glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= SECTION HEADER ================= */}

        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#D6362C]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Visual Craftsmanship
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[46px]">
            Explore Our Masterpieces
          </h2>

          {/* Red underline */}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D6362C]" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover our collection of premium elevator installations,
            custom designs, and architectural craftsmanship.
          </p>
        </div>

        {/* ================= IMAGE GRID ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">

          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >

              {/* Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">

                <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-2xl bg-[#D6362C] text-white shadow-xl transition-transform duration-300 group-hover:scale-100">
                  <Maximize2 className="h-6 w-6" />
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* ================= LOAD MORE ================= */}

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center sm:mt-14 lg:mt-16"
          >
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#D6362C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#B52A21] hover:shadow-xl active:scale-95"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Load More Projects</span>
            </button>
          </motion.div>
        )}

      </div>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
            >

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#D6362C]"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Large Image */}
              <div className="relative h-[70vh] w-full bg-white sm:h-[75vh]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D6362C]">
                  TSE Shaft Elevators (I) Pvt Ltd
                </span>

                <span className="text-xs text-slate-500">
                  Delhi-NCR
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
