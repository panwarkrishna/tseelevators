import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Domestic Lift Manufacturers in Delhi, Domestic Elevator Suppliers in Delhi-NCR",
  keywords: "Domestic Lift Manufacturers in Delhi, Domestic Elevator Suppliers in Delhi-NCR, Domestic Lift Manufacturers, Domestic Elevator Suppliers, Domestic Lift in Delhi, Domestic Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Trusted Domestic Lift Manufacturers in Delhi & Domestic Elevator Suppliers in Delhi-NCR. Safe, reliable & customized home lifts for every space. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/domestic-lifts" },
};

export default function DomesticLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Domestic Lift" description="Compact and reliable domestic lifts designed for private homes and duplex residences." backgroundImage="https://aditechinfo.com/tseelevators/product-img/domestic.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/domestic.webp" alt="Domestic Lift for homes, villas, and residential properties" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Perfect for Homes</span></div>
              </div>
            
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div>
                <span className="inline-block rounded-full bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#D6362C] mb-3 border border-red-500/20">Home Lifts</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Domestic Lift</h2>
                <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Compact and reliable domestic lifts designed for private homes, villas, and duplex residences with smooth and safe vertical transportation.</p>
              </div>
            
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </main>
  );
}