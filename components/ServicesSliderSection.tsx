"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Wrench, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type ServiceSlideItem = {
  id: number;
  title: string;
  description: string;
  icon: any;
  theme: "white" | "red" | "navy";
};

const SERVICES_DATA: ServiceSlideItem[] = [
  {
    id: 1,
    title: "Installation",
    description:
      "Elevator installation is a crucial service we provide to new construction projects or buildings undergoing renovations. We work closely with architects, builders, and project managers to design, fabricate, and install elevators that meet the specific requirements of the building. This includes considerations for capacity, speed, accessibility, and design aesthetics.",
    icon: Layers,
    theme: "white",
  },
  {
    id: 2,
    title: "Annual Maintenance Contract (AMC)",
    description:
      "Elevators are complex mechanical and electrical systems that require periodic maintenance to prevent breakdowns and ensure passenger safety. We offer top-notch AMC services to ensure the regular upkeep and smooth operation of elevators. Under this, we'll conduct routine inspections and maintenance at predetermined intervals. Therefore, our team will ensure that elevators remain in compliance with safety regulations and performance standards, reducing the risk of accidents and costly repairs.",
    icon: ShieldCheck,
    theme: "red",
  },
  {
    id: 3,
    title: "Repairing",
    description:
      "Our elevator manufacturers in Delhi NCR will also offer repair services to address issues that may arise during the elevator's operational lifespan. These issues can range from minor glitches to major mechanical failures. Whether the elevator experiences minor issues or breaks down, our team of skilled professionals will diagnose and rectify the issue promptly. Our repair services include troubleshooting, replacement of faulty components, and restoring the elevator to its optimal working condition. We use genuine parts and adhere to safety protocols to ensure that the repaired elevator operates reliably and safely.",
    icon: Wrench,
    theme: "red",
  },
  {
    id: 4,
    title: "Break Down Services",
    description:
      "Elevator breakdowns can occur unexpectedly due to various factors. It includes wear and tear, power failures, or technical malfunctions. Our lift manufacturers in Delhi offer emergency breakdown services to respond promptly to such situations. Our services are available 24/7, ensuring that any elevator issues are addressed swiftly. We'll arrive at the site equipped with the necessary tools and expertise to assess the problem and perform on-the-spot repairs whenever possible.",
    icon: AlertTriangle,
    theme: "navy",
  },
];

export default function ServicesSliderSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-10 lg:py-15 text-white">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* ================= SECTION HEADER & CONTROLS ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#E85C4A] backdrop-blur-md"
            >
              Our Expertise
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Professional Lift Solutions
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3.5 h-1 w-20 rounded-full bg-[#D6362C]"
            />
          </div>

          {/* Custom Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              className="services-prev flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-[#D6362C] hover:bg-[#D6362C] active:scale-95 shadow-lg cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="services-next flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-200 hover:border-[#D6362C] hover:bg-[#D6362C] active:scale-95 shadow-lg cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ================= SWIPER CAROUSEL (Strictly 1 Slide View) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full overflow-hidden"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={false}
            navigation={{
              prevEl: ".services-prev",
              nextEl: ".services-next",
            }}
            className="w-full !overflow-visible"
          >
            {SERVICES_DATA.map((item) => {
              const IconComponent = item.icon;

              let themeClasses = "bg-white text-slate-900 border-slate-200";
              let iconBoxClasses = "bg-red-50 text-[#D6362C]";
              let titleClasses = "text-[#1B2A5E]";
              let descClasses = "text-slate-600";

              if (item.theme === "red") {
                themeClasses = "bg-[#D6362C] text-white border-[#D6362C]";
                iconBoxClasses = "bg-white/20 text-white";
                titleClasses = "text-white";
                descClasses = "text-slate-100";
              } else if (item.theme === "navy") {
                themeClasses = "bg-[#1B2A5E] text-white border-white/10";
                iconBoxClasses = "bg-white/15 text-[#FF6B5A]";
                titleClasses = "text-white";
                descClasses = "text-slate-300";
              }

              return (
                <SwiperSlide key={item.id} className="!w-full">
                  <div
                    className={`relative flex flex-col justify-between w-full min-h-[420px] rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-300 border ${themeClasses}`}
                  >
                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBoxClasses}`}>
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <span className="rounded-full bg-black/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider opacity-80">
                          TSE Services
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${titleClasses}`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`mt-5 text-sm sm:text-base leading-relaxed ${descClasses}`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Footer Index */}
                    <div className="mt-8 pt-4 border-t border-current/10 flex items-center justify-between opacity-80 text-xs font-semibold">
                      <span>Professional Support</span>
                      <span>0{item.id} / 04</span>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}