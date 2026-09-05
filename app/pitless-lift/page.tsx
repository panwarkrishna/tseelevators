import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Pitless Lift Manufacturers in Delhi, Pitless Elevator Suppliers in Delhi-NCR",
  keywords: "Pitless Lift Manufacturers in Delhi, Pitless Elevator Suppliers in Delhi-NCR, Pitless Lift Manufacturers, Pitless Elevator Suppliers, Pitless Lift in Delhi, Pitless Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Leading Pitless Lift Manufacturers in Delhi & Pitless Elevator Suppliers in Delhi-NCR. Space-saving, easy installation & reliable performance. Call +919971022555 for a free consultation!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/pitless-lifts" },
};

export default function PitlessLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Pitless Lift" description="Space-efficient pitless lift solutions designed for buildings where conventional deep lift pits are impractical." backgroundImage="https://aditechinfo.com/tseelevators/product-img/pitlesslift.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/pitlesslift.webp" alt="Space-saving Pitless Lift solution for buildings with limited construction space" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Space Saving</span></div>
              </div>
          
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-8">
              <div>

  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Pitless Lift</h2>

<p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Looking for a space-saving and pit-less lift? Our pitless lifts are the right option for you. It is a safe and sophisticated solution for installations with limited pit depth or no pits at all. A pitless lift can be installed without much civil work, making it an excellent choice for both commercial and residential buildings.
</p>


<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Top Pitless Lift Manufacturers In Delhi</h3>


<p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">We are one of the best leading Pitless Lift Manufacturers in Delhi, manufacturing lifts that require minimum pit depth or no pits at all; our lifts save your time and money in the long run. These lifts are very safe and sophisticated and can be installed in commercial and residential spaces with minimal civil work.
</p>


<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">TSE Shaft Elevators: Your Trusted Pitless Elevator Suppliers In Delhi-NCR</h3>


<p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">TSE Shaft Elevators is a trusted supplier of pitless elevators in Delhi, Noida, Gurugram, and Faridabad. Below are some reasons why you should choose us as your Pitless Elevator Suppliers in Delhi-NCR.</p>

<p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Our experienced professionals at TSE Shaft Elevators offer high-tech pitless lifts with the following benefits:
</p>


<ul className="list-disc pl-5 text-md text-slate-600 space-y-2 mt-3">
    <li>High-quality pitless lifts  </li>
    <li>No pits or minimum pits needed for installation</li>
    <li>Saves your space</li>
    <li>Easy and quick installation</li>
    <li>Requires less civil work</li>
    <li>Safe and durable</li>   
    <li>Affordable for old and new buildings</li>
</ul>




              </div>
           
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </main>
  );
}