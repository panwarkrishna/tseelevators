import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Elevator Services in Delhi, Lift Services in Delhi-NCR",
  keywords: "Elevator Services in Delhi, Lift Services in Delhi-NCR, Elevator Services, Lift Services",
  description: "TSE Shaft Elevators - Reliable Elevator Services in Delhi & Lift Services in Delhi-NCR. Expert installation, maintenance & repair. Call +919971022555 for a free consultation today!",
  alternates: {
    canonical: "https://tseelevators.com/services",
  },
};

export default function ServicesPage() {
  return (
     <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Services" description="Efficient hydraulic lift solutions ideal for low-rise buildings and villas requiring smooth movement." backgroundImage="../product-img/hydraulic-lift.webp" badgeText="Services" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../product-img/hydraulic-lift.webp" alt="Hydraulic Lift system for residential and commercial buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Services
</span></div> */}
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Services</h2>


<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Trusted Elevator Services in Delhi</h3>

 <p className="text-black text-sm sm:text-base leading-relaxed">We TSE Shaft Elevators provide the best <strong>Elevator Services in Delhi</strong> like repair, maintenance and modernization to ensure that your lift remains safe and operational at all times.
</p>

 <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Complete Lift Services in Delhi-NCR</h3>
 <p className="text-black text-sm sm:text-base leading-relaxed">TSE Shaft Elevators provide complete <strong>Lift Services in Delhi-NCR</strong> to serve you in Delhi, Noida, Gurgaon, Haryana, and the entire Delhi-NCR region. We offer:</p>
<ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">
  <li>Lift maintenance to avoid breakdowns</li>
  <li>Timely and efficient lift repair services</li>
  <li>Safety audit to ensure smooth ride</li>
  <li>Emergency lift services</li>
  <li>Lift modernization services</li>
</ul>

<p className="text-black text-sm sm:text-base leading-relaxed">So, you can rely on us for top-notch maintenance and repair services, no matter where you are in Delhi-NCR.</p>




           
            </div>
          </div>
        </div>
      </section>
             <BestServicesSection />
      
      <TestimonialsSection />
    </main>

  );
}