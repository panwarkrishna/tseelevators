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
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg"
        badgeText="Engineered For Excellence"
      />

      {/* ================= PRODUCTS GRID SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16">
        
        {/* Background Architectural Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Subtle Red Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mb-12">

         

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

    <div className="lg:col-span-8 lg:col-start-3 space-y-8">

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

      <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
        Includes the following features:
      </h3>

      <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed space-y-2">
        <li>Upgraded interior and premium finishes</li>
        <li>Smart technologies</li>
        <li>Stylish lighting</li>
        <li>Suitable for homes and commercial buildings</li>
      </ul>

      <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
        Classic Series
      </h3>

      <p className="text-black text-sm sm:text-base leading-relaxed">
        Classic series is a simple and sophisticated lift series that offers
        comprehensive solutions. This elevator series is engineered to meet
        the demands of the modern home while providing excellent value and
        performance.
      </p>

      <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
        Includes the following features:
      </h3>

      <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed space-y-2">
        <li>Ultimate simplicity and reliability</li>
        <li>Cost-effective and high-quality construction</li>
        <li>Simple installation</li>
        <li>Fits in a single-story home or small commercial building</li>
      </ul>

    </div>
  </div>
</div>

 
   
       

        </div>

              <BestProductsSection />
 
      </section>

    </main>
  );
}