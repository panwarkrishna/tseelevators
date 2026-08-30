"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

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
    tag: "TSE Shaft Elevators",
    title: "Lift Manufacturers in Delhi",
    description:
      "Living in Delhi and finding your gateway to vertical luxury, speed, and convenience? If you're a homeowner who values speed, convenience, and elegance, you've come to the right place.",
    ctaText: "Enquire Now",
    ctaLink: "/contact",
    image:
      "https://img.magnific.com/free-photo/view-lift_107420-65780.jpg?t=st=1787844356~exp=1787847956~hmac=8771589df89e4d972b033ae5a871677b9c3474831b734cbb8632c64e189f71d7&w=1480",
  },
  {
    id: 2,
    tag: "Luxury Home Series",
    title: "Bespoke Glass Elevators",
    description:
      "Engineered for modern villas and bungalows with noiseless gearless traction technology, seamless panoramic glass, and zero civil-pit requirements.",
    ctaText: "Enquire Now",
    ctaLink: "/contact",
    image:
      "https://img.magnific.com/free-photo/indoor-hotel-view_1417-1562.jpg?t=st=1787844380~exp=1787847980~hmac=095b5fff1a7bd91d2b3bfc9b3ef1a36937cc4c899a80edf64cf98b4582d66098&w=1480",
  },
  {
    id: 3,
    tag: "Commercial Grade",
    title: "Hospital & Freight Lifts",
    description:
      "Heavy load-bearing elevators engineered for 24/7 uptime with anti-bacterial stainless cabins, smart microprocessors, and automated emergency safety.",
    ctaText: "Enquire Now",
    ctaLink: "/contact",
    image:
      "https://img.magnific.com/free-vector/hotel-elevator-mockup-lift-tv-screen-lobby_107791-28757.jpg?t=st=1787844454~exp=1787848054~hmac=d0cdf03f7114f27ea3cb9861ff32c0242ff2a55756ff402484e575034f708d4c&w=1480",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070B1E]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        loop={true}
        allowTouchMove={false}
        className="relative h-[520px] w-full sm:h-[580px] md:h-[560px] lg:h-[600px]"
      >
        {SLIDES_DATA.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full bg-[#070B1E]">
            {/* FULL BRIGHT PRODUCT IMAGE */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Soft directional gradient to keep text clear without darkening the whole image */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent sm:via-black/30" />
            </div>

            {/* UNIFIED HERO CONTENT BLOCK */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-10 lg:px-14">
              <div className="max-w-2xl rounded-2xl border border-white/15 bg-black/40 p-6 shadow-2xl backdrop-blur-md sm:p-10">
                
                {/* Small Top Tag */}
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D6362C]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                    {slide.tag}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[54px]">
                  {slide.title}
                </h1>

                {/* Description Text */}
                <p className="mt-4 text-sm font-normal leading-relaxed text-slate-200 drop-shadow sm:text-base md:text-lg">
                  {slide.description}
                </p>

                {/* Action CTA Button */}
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
      </Swiper>
    </section>
  );
}