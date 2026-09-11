import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift AMC Services in Delhi, Elevator AMC Services in Delhi-NCR",
  keywords: "Lift AMC Services in Delhi, Elevator AMC Services in Delhi-NCR, Lift AMC Services, Elevator AMC Services",
  description: "TSE Shaft Elevators - Trusted Lift AMC Services in Delhi & Elevator AMC Services in Delhi-NCR. Affordable annual maintenance for safe, reliable performance. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/lift-amc-services" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift AMC" description="Modern Lift AMCs engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="../services/amc-lift1.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../services/amc-lift1.webp" alt="Modern Lift AMC installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div> */}
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift AMC</h2>
              <p>
              TSE Shaft Elevators provides best Lift AMC service in Delhi-NCR and ensures that a lift is maintained regularly so that it serves for a longer time without any malfunctioning
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Lift AMC Services in Delhi
</h3>

<p>TSE Shaft Elevators provides <strong>Lift AMC Services in Delhi,</strong> for residential, commercial and office lifts. Our skilled and experienced technicians take care of all your lift needs like regular inspection, servicing and minor repairs to prevent serious issues. Our Lift AMC services ensure that you have the lift that serves you for a long time without any safety hazards.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Elevator AMC Services in Delhi-NCR
</h3>

<p>TSE Shaft Elevators offers comprehensive <strong>Elevator AMC Services in Delhi-NCR.</strong> With our certified professionals and round the clock customer support, we ensure that the lifts in Delhi, Noida, Gurugram, Faridabad, Ghaziabad and surrounding areas are well maintained and free from malfunctioning. The following services are included in our 24×7 Elevator AMC Services.
</p>

   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">

    <li>Regular inspection and servicing by professional elevator technicians.</li>
    <li>Prompt and quick repair services to avoid breakdowns</li>
    <li>Safety audit and inspection services for hassle-free and smooth riding experience.</li>
    <li>Professional and affordable Lift AMC services and many more
</li>
</ul>

<p>
Hassle-free Elevator AMC Services from TSE Shaft Elevators are the best option you can choose for all your lift maintenance needs. We ensure that your lift is well maintained and free from any defects to offer you a seamless experience.
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