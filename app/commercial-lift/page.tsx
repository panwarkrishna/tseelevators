import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "commercial Lift Manufacturers in Delhi, Commercial Elevator Suppliers in Delhi-NCR",
  keywords: "Commercial Lift Manufacturers in Delhi, Commercial Elevator Suppliers in Delhi-NCR, Commercial Lift Manufacturers, Commercial Elevator Suppliers, Commercial Lift in Delhi, Commercial Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Trusted Commercial Lift Manufacturers in Delhi & Commercial Elevator Suppliers in Delhi-NCR. Safe, reliable & customized commercial lifts for every space. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/commercial-lifts" },
};

export default function CommercialLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Commercial Lift" description="High-capacity commercial lifts designed for efficient vertical transportation in office buildings, shopping malls, and other commercial spaces." backgroundImage="https://aditechinfo.com/tseelevators/product-img/commercial-lift.webp" badgeText="Commercial Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/commercial-lift.webp" alt="Commercial Lift for office buildings, shopping malls, and other commercial spaces" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Perfect for Commercial Spaces</span></div>
              </div>
            
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-7">
              <div>
 
 
   <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Commercial Lift</h2>
<p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">TSE Shaft Elevators is a renowned commercial lifts manufacturer in Delhi-NCR. We offer premium commercial lifts that can withstand high traffic with ease while providing you with years of safe and smooth riding.</p>


<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
Best Commercial Lift Manufacturers in Delhi
</h3>
<p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">If you are searching for the best Commercial Lift Manufacturers in Delhi then TSE Shaft Elevators is the one-stop solution for all your commercial lift requirements. We specialize in manufacturing commercial lifts across Delhi-NCR that are engineered to perfection to suit the commercial unit's unique requirements. Whether it is a small office space or a large mall complex; we have the most advanced commercial lifts that promise hassle-free installation while being highly durable and safe.

</p>
<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">
Leading Commercial Elevator Suppliers in Delhi-NCR
</h3>

<p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
  As the leading Commercial Elevator Suppliers in Delhi-NCR, we take pride in serving some of the most reputable commercial establishments across Delhi, Noida, Gurugram, Faridabad, and the rest of Delhi-NCR. Here's what makes us your most preferred commercial elevator supplier:
</p>

<ul className="list-disc pl-5 text-md text-slate-600 space-y-2 mt-3">

  <li>Heavy-duty commercial lifts</li>
  <li>Fast and safe elevator installation by professional engineers</li>
  <li>Customized commercial elevator designs
</li>
<li>Timely delivery of commercial elevators without any delays
</li>
<li>Excellent customer support with maintenance and service options</li>
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