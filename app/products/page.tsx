import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, PhoneCall, Layers } from "lucide-react";
import BestProductsSection  from "@/components/BestProductsSection"

export const metadata: Metadata = {
  title: "Elevator Solutions in Delhi-NCR ",
  keywords: "Elevator Solutions, Elevator Manufacturer, Elevator Supplier, Custom Elevators, Elevator Systems",
  description: "TSE Shaft Elevators - Trusted Elevator Solutions in Delhi-NCR. Custom designs, expert installation & reliable service. Call +919971022555 for a free quote today!",
  alternates: {
    canonical: "https://tseelevators.com/products",
  },
};

 

export default function AllProductsPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <GlobalPageHero
        title="Our Products "
        description="Explore our comprehensive range of high-performance elevators, customized to elevate comfort, safety, and modern architectural aesthetics."
        backgroundImage="../product-img/home-lift.webp"
        badgeText="Engineered For Excellence"
      />


<section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-6 md:mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12  items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../product-img/hydraulic-lift.webp" alt="Hydraulic Lift system for residential and commercial buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Services
</span></div> */}
              </div>
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-8 mt-6 md:ml-8">
          
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Elevator Solutions in Delhi-NCR
      </h2>

      <p className="text-black text-sm sm:text-base leading-relaxed">
        For every necessity, TSE Shaft Elevators provides comprehensive
        Elevator Solutions in Delhi-NCR. Passenger, home, hydraulic,
        commercial, and goods lifts are among the options. You always get
        comfort and dependability because every product is constructed with
        sturdy materials, smooth motors, and a secure design.
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
        Designed to Fit Any Space
      </h3>

      <p className="text-black text-sm sm:text-base leading-relaxed">
        Our lifts are long-lasting, easy to use, and require little
        maintenance. We make sure your area receives the ideal lift, whether
        it's through elegant finishes or straightforward concepts.
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
        Elite Series
      </h3>

      <p className="text-black text-sm sm:text-base leading-relaxed">
        TSE Shaft Elevators Elite Series is designed for luxury seekers. It
        presents a wide range of premium options, from traditional fine
        finishes to smart technologies to make your ride remarkable. This
        elevator series promises to bring innovation and sophistication into
        your home or business.
      </p>

      {/* <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
        Includes the following features:
      </h3>

      <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed space-y-2">
        <li>Upgraded interior and premium finishes</li>
        <li>Smart technologies</li>
        <li>Stylish lighting</li>
        <li>Suitable for homes and commercial buildings</li>
      </ul> */}

      <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
        Classic Series
      </h3>

      <p className="text-black text-sm sm:text-base leading-relaxed">
        Classic series is a simple and sophisticated lift series that offers
        comprehensive solutions. This elevator series is engineered to meet
        the demands of the modern home while providing excellent value and
        performance.
      </p>


           
            </div>
          </div>
        </div>
      </section>


 

              <BestProductsSection />
 
 

    </main>
  );
}