import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Dismantling Services in Delhi, Elevator Dismantling Services in Delhi-NCR ",
  keywords: "Lift Dismantling Services in Delhi, Elevator Dismantling Services in Delhi-NCR, Lift Dismantling Services, Elevator Dismantling Services",
  description: "TSE Shaft Elevators - Professional Lift Dismantling Services in Delhi & Elevator Dismantling Services in Delhi-NCR. Safe, efficient & hassle-free removal. Call +919971022555 for a free quote today!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/passenger-lifts" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Dismantling" description="Modern Lift Dismantlings engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="./services/dismantling-llift1.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="./services/dismantling-llift1.webp" alt="Modern Lift Dismantling installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div>
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"> Lift Dismantling</h2>

            <p>
Old lifts and lifts that are damaged beyond repair need to be dismantled in a timely manner. Proper and safe removal of lifts is necessary. TSE Shaft Elevators offer safe and quick lift removal services for people looking to replace their existing lift or upgrade their current lift.
</p>


 <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Lift Dismantling Services in Delhi
</h3>

<p>TSE Shaft Elevators provides reliable Lift Dismantling Services in Delhi for old lifts, lifts that are not in use, and lifts that have malfunctioned. Our certified professionals take proper safety precautions while removing the lift and its components in order to ensure that the building is not damaged in the process. We provide hassle-free lift dismantling services to make sure that the removal of your lift’s machine, cabin, and other components is done with care.
</p>


 <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Elevator Dismantling Services in Delhi-NCR
</h3>

<p>We are a reliable name for Elevator Dismantling Services in Delhi-NCR providing lift removal services in Delhi, Noida, Gurugram, Haryana and other local areas. Below are the reasons why you should choose our company for all elevator and lift dismantling services in Delhi-NCR:
</p>

   <ul className="list-disc list-inside text-slate-600 text-sm sm:text-base leading-relaxed">


  <li>Safe removal of old lifts</li>
    <li>Certified professionals wear proper safety equipment</li>  <li>Your building will not be damaged during the dismantling process</li> 
     <li>Fast dismantling process</li> 
      <li>Assisting you with the installation of a new lift or elevator</li>
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