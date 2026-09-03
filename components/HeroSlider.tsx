"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

type SlideItem = {
  id: number;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
};

const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    tag: "LIFT",
    title: "Elevate Your Space, Elevate Your Life.",
    description:
      "Modern, safe, and reliable lifts designed to bring smooth and comfortable vertical mobility to every space.",
    ctaText: "Enquire Now",
    ctaLink: "/contact",
    image:
      "https://aditechinfo.com/tseelevators/home-banner-img/lift.webp",
  },
  {
    id: 2,
    tag: "LUXURY ELEVATOR",
    title: "Luxury That Moves With You.",
    description:
      "Experience premium design, elegant cabins, and advanced features crafted to add a touch of luxury to your building.",
    ctaText: "Enquire Now",
    ctaLink: "/contact",
    image:
      "https://aditechinfo.com/tseelevators/home-banner-img/lift-Installation.webp",
  },
  {
    id: 3,
    tag: "LIFT INSTALLATION",
    title: "Installed with Precision. Built for Safety.",
    description:
      "Professional lift installation with careful planning, expert execution, and dependable performance for years to come.",
    ctaText: "Enquire Now",
    ctaLink: "/contact",
    image:
      "https://aditechinfo.com/tseelevators/home-banner-img/luxury-elevator.webp",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070B1E]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop={true}
        allowTouchMove={false}
        className="relative h-[520px] w-full sm:h-[580px] md:h-[560px] lg:h-[600px]"
      >
        {SLIDES_DATA.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative h-full w-full bg-[#070B1E]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent sm:via-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-10 lg:px-14">
              <div className="max-w-3xl rounded-2xl border border-white/15 bg-black/40 p-6 shadow-2xl backdrop-blur-md sm:p-10">
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D6362C]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                    {slide.tag}
                  </span>
                </div>

                <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[54px]">
                  {slide.title}
                </h1>

                <p className="mt-4 text-sm font-normal leading-relaxed text-slate-200 drop-shadow sm:text-base md:text-lg">
                  {slide.description}
                </p>

                <div className="mt-6 sm:mt-8">
                  <Link
                    href={slide.ctaLink}
                    className="group inline-flex items-center gap-2 rounded-lg bg-[#D6362C] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-[#D6362C]/30 transition-all duration-200 hover:bg-[#b52a21] hover:shadow-2xl active:scale-95 sm:text-sm"
                  >
                    <span>{slide.ctaText}</span>

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Previous / Next Buttons */}
        <button
          type="button"
          className="hero-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-[#D6362C] sm:left-6 sm:h-12 sm:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="hero-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-[#D6362C] sm:right-6 sm:h-12 sm:w-12"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </Swiper>
    </section>
  );
}
