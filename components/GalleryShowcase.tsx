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
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-1-761x473.jpg",
    alt: "Luxury capsule and passenger elevator installation by TSE Elevators Delhi-NCR",
  },
  {
    id: 2,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-2-723x473.jpg",
    alt: "Modern residential home lift interior design and stainless steel finish",
  },
  {
    id: 3,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-3-464x473.jpg",
    alt: "Custom architectural elevator cabin with premium lighting",
  },
  {
    id: 4,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4-723x473.jpg",
    alt: "Opulent series luxury elevator manufacturer project in Delhi",
  },
  {
    id: 5,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-6-840x473.jpg",
    alt: "Commercial building glass lift engineering and setup",
  },
  {
    id: 6,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-7-scaled.jpg",
    alt: "Handcrafted elevator doors and high-speed mechanics",
  },
  {
    id: 7,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-8-scaled.jpg",
    alt: "Customized hydraulic lift and shaft design across India",
  },
  {
    id: 8,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-9-scaled.jpg",
    alt: "Elegant hotel capsule elevator installation",
  },
  {
    id: 9,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-10-scaled.jpg",
    alt: "Advanced machine-room-less (MRL) lift manufacturing",
  },
  {
    id: 10,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-11-840x473.jpg",
    alt: "Premium hospital stretcher elevator interior view",
  },
  {
    id: 11,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-12-720x473.jpg",
    alt: "Heavy-duty industrial goods lift manufacturing",
  },
  {
    id: 12,
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-13-scaled.jpg",
    alt: "Exquisite glass wall elevator in a luxury villa",
  },
];

const ITEMS_PER_PAGE = 6; // Initial load par 6 images dikhengi

export default function GalleryShowcase() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const currentItems = ALL_GALLERY_ITEMS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_GALLERY_ITEMS.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, ALL_GALLERY_ITEMS.length));
  };

  return (
    <section className="relative w-full bg-slate-950 py-10 lg:py-15 text-white overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-lg mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#E85C4A]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200">
              Visual Craftsmanship
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[46px]">
            Explore Our Masterpieces
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#D6362C]" />
        </div>

        {/* ================= CLEAN IMAGE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl aspect-[4/5] cursor-pointer"
            >
              {/* Image with Lazy Loading & SEO Alt Tag */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Minimal Dark Hover Vignette & Action Button */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6362C] text-white shadow-xl transform scale-75 transition-transform duration-300 group-hover:scale-100">
                  <Maximize2 className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= LOAD MORE BUTTON ================= */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#D6362C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-[#b52a21] hover:shadow-red-900/40 active:scale-95 cursor-pointer"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Load More Projects</span>
            </button>
          </motion.div>
        )}

      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full overflow-hidden rounded-3xl bg-slate-900 border border-white/20 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#D6362C] transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[80vh] w-full bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  loading="lazy"
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 flex items-center justify-between border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E85C4A]">
                  TSE Shaft Elevators (I) Pvt Ltd
                </span>
                <span className="text-xs text-slate-400">Delhi-NCR</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}