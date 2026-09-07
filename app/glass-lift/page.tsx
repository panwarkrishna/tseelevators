import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Glass Lift Manufacturers in Delhi, Glass Elevator Suppliers in Delhi-NCR",
  keywords: "Glass Lift Manufacturers in Delhi, Glass Elevator Suppliers in Delhi-NCR, Glass Lift Manufacturers, Glass Elevator Suppliers, Glass Lift in Delhi, Glass Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Premium Glass Lift Manufacturers in Delhi & Glass Elevator Suppliers in Delhi-NCR. Stylish, transparent & safe designs for modern spaces. Call +919971022555 for a free consultation!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/glass-lifts" },
};

export default function GlassLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Glass Lift" description="Elegant glass lifts featuring modern architectural styling and panoramic visibility." backgroundImage="https://aditechinfo.com/tseelevators/product-img/glass-lift.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/glass-lift.webp" alt="Modern Glass Lift with panoramic design for homes and premium buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Modern Design</span></div>
              </div>
          
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Glass Lift</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Elevate the aesthetics of your building with our elegant glass lifts. With a combination of contemporary style and luxury appeal, our lifts provide unrivaled panoramic views making it a desirable choice for residential, commercial malls and hotels.</p>

              <h3 className="text-xl font-bold text-slate-900">Premier Glass Lift Manufacturers in Delhi</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">We take immense pride in specializing as a reputed Glass Lift Manufacturers in Delhi that presents exquisite transparent lifts that are high on style quotient while exuding luxury appeal. Our range of lifts utilize top quality tempered glasses that add to the beauty of your home apart from providing utmost safety. From commercial malls to elite residential projects and luxury hotels, we bring you contemporary transparent lifts that enhance the beauty of your space while providing absolute safety to its passengers.
            </p>

              <h3 className="text-xl font-bold text-slate-900">Leading Glass Elevator Suppliers In Delhi-NCR</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">TSE Shaft Elevators is one of the trusted Glass Elevator Suppliers In Delhi-NCR. We bring you a wide range of premium glass elevators designed to offer you elegance and luxury along with total safety. Here are some reasons why our Glass lifts are preferred across residential, commercial and hospitality projects:</p>
              <ul className="list-disc list-inside text-slate-600 text-sm sm:text-base leading-relaxed">
                <li>Elegant transparent design</li>
                <li>Lifts made up of safety glass</li>
                <li>Offers smooth and silent rides</li>
                <li>Customized sizes and finish</li>
                <li>Professional installations by expert engineers</li>
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