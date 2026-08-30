"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

type Testimonial = {
  id: number;
  quote: string;
  clientName: string;
  designation: string;
  rating: number;
  location: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Incredible work by using high quality material... Make life more easy for everyone even for me as well.. positive behavior well appreciated..... ..... 👌",
    clientName: "Bhupinder K",
    designation: "Homeowner",
    location: "Delhi",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "TSE Elevators installed our commercial passenger lift on time with extreme precision. Zero noise, smooth ride, and fantastic maintenance service!",
    clientName: "Rakesh Sharma",
    designation: "Project Architect",
    location: "Delhi-NCR",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Very professional team. Their AMC and breakdown support response time is exceptional. Highly recommend for luxury villa elevators.",
    clientName: "Ananya Malhotra",
    designation: "Residential Client",
    location: "Gurugram",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The capsule elevator they designed for our showroom has completely transformed the architectural look. Brilliant craftsmanship!",
    clientName: "Vikram Kapoor",
    designation: "Commercial Builder",
    location: "Noida",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7] py-8 sm:py-10 lg:py-15 text-black">
      {/* Background Ambient Glows */}
 
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* ================= SECTION HEADER & CONTROLS ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#E85C4A] backdrop-blur-md"
            >
              Testimonials
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-[42px]"
            >
              We Build Customer Trust and Loyalty
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3.5 h-1 w-16 rounded-full bg-[#D6362C]"
            />
          </div>

          {/* Navigation Buttons */}
         <div className="flex items-center gap-3">
  <button
    type="button"
    onClick={handlePrev}
    aria-label="Previous testimonial"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-black/5 text-black transition-all duration-200 hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white active:scale-95 shadow-lg cursor-pointer"
  >
    <ArrowLeft className="h-5 w-5" />
  </button>

  <button
    type="button"
    onClick={handleNext}
    aria-label="Next testimonial"
    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D6362C] bg-[#D6362C] text-white transition-all duration-200 hover:bg-[#b52a21] hover:border-[#b52a21] active:scale-95 shadow-lg cursor-pointer"
  >
    <ArrowRight className="h-5 w-5" />
  </button>
</div>
        </div>

        {/* ================= TESTIMONIAL CARDS CONTAINER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 overflow-hidden">
          {[0, 1].map((offset) => {
            const itemIndex = (currentIndex + offset) % TESTIMONIALS.length;
            const item = TESTIMONIALS[itemIndex];

            // Hide the second card on mobile screens so only 1 shows
            const hideOnMobile = offset === 1 ? "hidden md:flex" : "flex";

            return (
              <div key={itemIndex} className={`w-full ${hideOnMobile}`}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${item.id}-${currentIndex}`}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative flex flex-col justify-between w-full rounded-3xl bg-white p-8 sm:p-10 transition-all duration-300"
                  >
                    <div>
                      {/* Top Row: Quote Icon & Stars */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D6362C]/20 text-[#E85C4A]">
                          <Quote className="h-6 w-6 fill-current" />
                        </div>
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm sm:text-base leading-relaxed text-black italic">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Client Info Footer */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-black tracking-wide">
                          {item.clientName}
                        </h3>
                        <p className="text-xs font-medium text-[#E85C4A] mt-0.5">
                          {item.designation} • <span className="text-slate-400">{item.location}</span>
                        </p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                        Verified Client
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}