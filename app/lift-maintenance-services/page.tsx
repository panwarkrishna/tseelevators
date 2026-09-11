import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Maintenance Services in Delhi, Elevator Lift Maintenance in Delhi-NCR",
  keywords: "Lift Maintenance Services in Delhi, Elevator Lift Maintenance in Delhi-NCR, Lift Maintenance Services, Elevator Lift Maintenance",
  description: "TSE Shaft Elevators - Reliable Lift Maintenance Services in Delhi & Elevator Maintenance Services in Delhi-NCR. Regular upkeep for safe, smooth performance. Call +919971022555 for a free quote! ",
  alternates: { canonical: "https://tseelevators.com/lift-maintenance-services" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Maintenance" description="Modern Lift Maintenances engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="../services/lift-maintenance1.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../services/lift-maintenance1.webp" alt="Modern Lift Maintenance installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div> */}
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              

<h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
 Lift Maintenance</h2>
<p>A properly maintained lift can keep your building operating smoothly and safely with minimal breakdowns and expensive repairs. TSE Shaft Elevators can help to provide high-quality lift maintenance that meets all safety regulations and extends the life of your lifts.
</p>

 <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2"> Lift Maintenance Services Delhi</h3>
<p>At TSE Shaft Elevators we provide professional <strong>Lift Maintenance Services in Delhi</strong> for residential and commercial property owners and managers. Our lift service technicians will perform routine maintenance and inspections of your elevators and lifts.
</p>

   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">
<li>  On-Site Lift Inspection and Examination</li>
<li> Experienced and Qualified Engineers</li>
<li>  Emergency Lift Repair Services</li>
<li>  Replacement Parts and Components</li>
<li> Lift Maintenance As Per Industry Standards</li>
<li>  Safety Audits and Reports</li>
</ul>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2"> 
Elevator Lift maintenance in Delhi-NCR</h3>
<p>
Our expert staff can handle all types of lift maintenance, including elevator maintenance and repair, escalator maintenance, lift safety inspection and many more. We also provide <strong>Elevator Lift maintenance in Delhi-NCR. 24/7</strong> Emergency Repair and Servicing
</p>

<p>
We have qualified engineering staff that can handle all of your elevator needs, from scheduled lift maintenance to emergency lift repairs and replacement parts. We also offer competitive pricing on all of our lift maintenance and repair services. Get a free estimate for lift maintenance and other elevator services today.
</p>


             
            </div>
          </div>
        </div>
      </section>
                   <BestServicesSection />
      
      <TestimonialsSection />
    </main>
  );
}