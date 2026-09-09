import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Repair Services in Delhi, Elevator Repair Services in Delhi-NCR",
  keywords: "Lift Repair Services in Delhi, Elevator Repair Services in Delhi-NCR, Lift Repair Services, Elevator Repair Services",
  description: "TSE Shaft Elevators - Trusted Lift Repair Services in Delhi & Elevator Repair Services in Delhi-NCR. Quick, reliable & affordable repairs. Call +919971022555 for expert help today!",
  alternates: { canonical: "https://tseelevators.com/lift-repair-services" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Repair" description="Modern Lift Repairs engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="./services/lift-repair1.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="./services/lift-repair1.webp" alt="Modern Lift Repair installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div> */}
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Repair</h2>
            <p className="text-black text-sm sm:text-base leading-relaxed">Your lift is making strange noises and it is stopping in between floors. The key to prevent such situations is faster and quality repair to avoid larger expenses. We are here to help you get the most reliable and trusted lift repair services in Delhi.</p>

            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Lift Repair Services in Delhi for Residential, Commercial & Offices</h3>
            <p className="text-black text-sm sm:text-base leading-relaxed">We at TSE Shaft Elevators provide reliable <strong>Lift Repair Services in Delhi</strong> for residential, commercial, and offices. Our certified professionals can detect and solve all kinds of issues with your lift. We use only high-quality spare parts so that your lift continues to function smoothly for a longer period of time.</p>

            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Fast Elevator Repair Services in Delhi-NCR</h3>
            <p className="text-black text-sm sm:text-base leading-relaxed">We are a trusted provider of <strong>Elevator Repair Services in Delhi-NCR</strong> with experience. We provide Lift Repair Services in Delhi, Noida, Gurugram, Haryana and the surrounding areas. Here are some of the reasons why our customers keep choosing us for all their lift repair services.</p>


   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">

  <li>Fast emergency lift repair services</li>
    <li>Highly experienced and certified professionals
  </li>
      <li>Use of genuine spare parts</li>
        <li>Focus on maintaining the safety of lifts during repairs</li>
          <li>Competitive and pocket-friendly cost for all our repair services</li>
</ul>
 


             
            </div>
          </div>
        </div>
      </section>
                   <BestServicesSection />
      
      <TestimonialsSection />
    </main>
  );
}