import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Hydraulic Lift Manufacturers in Delhi, Hydraulic Elevator Suppliers in Delhi-NCR",
  keywords: "Hydraulic Lift Manufacturers in Delhi, Hydraulic Elevator Suppliers in Delhi-NCR,  Hydraulic Lift Manufacturers, Hydraulic Elevator Suppliers, Hydraulic Lift in Delhi, Hydraulic Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Leading Hydraulic Lift Manufacturers in Delhi & Hydraulic Elevator Suppliers in Delhi-NCR. Smooth, powerful & reliable performance for every space. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/hydraulic-lifts" },
};

export default function HydraulicLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Hydraulic Lift" description="Efficient hydraulic lift solutions ideal for low-rise buildings and villas requiring smooth movement." backgroundImage="https://aditechinfo.com/tseelevators/product-img/hydraulic-lift.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/hydraulic-lift.webp" alt="Hydraulic Lift system for residential and commercial buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Smooth Lift Tech</span></div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Hydraulic Lift</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Do you want to install a powerful, smooth, and quiet lift? The hydraulic lift option is a great solution for low- and medium-rise buildings because of the use of liquid pressure which provides a smooth movement of the car. It is also capable of withstanding heavy passenger flows.</p>

              <h3 className="text-xl font-bold text-slate-900">Trusted Hydraulic Lift Manufacturers In Delhi</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">We are one of the best Hydraulic Lift manufacturers in Delhi, providing top-class residential, commercial and institutional lifts with low-overhead design. Our hydraulic lifts are suitable for small and medium-sized buildings, shops, and houses. All our hydraulic lifts are produced using high-quality components and are subject to rigorous testing to ensure their safe and reliable operation.</p>

              <h3 className="text-xl font-bold text-slate-900">Hydraulic Elevator Suppliers In Delhi-NCR</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">TSE Shaft Elevators is recognized as one of the trusted Hydraulic Elevator Suppliers in Delhi-NCR. Our hydraulic lifts are a perfect solution for residential and commercial buildings because of their

</p>
              <ul className="list-disc list-inside text-slate-600 text-sm sm:text-base leading-relaxed">
    <li>smooth and quiet movement</li>
        <li>smaller machine room requirements</li>

    <li>exceptional lifting power</li>

    <li>pocket-friendly price</li>

    <li>easy maintenance and longer lifespan</li>

</ul>


           
            </div>
          </div>
        </div>
      </section>
             <BestProductsSection />
      
      <TestimonialsSection />
    </main>
  );
}