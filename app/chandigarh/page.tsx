import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Chandigarh, Elevator Suppliers in Chandigarh",
  keywords: "Lift Manufacturers in Chandigarh, Elevator Suppliers in Chandigarh, Lift Manufacturers, Elevator Suppliers, Lift in Chandigarh, Elevator in Chandigarh",
  description: "Lift Manufacturers in Chandigarh & Elevator Suppliers in Chandigarh – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/chandigarh" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Reliable Lift Manufacturers in Chandigarh" description="Reliable Lift Manufacturers in Chandigarh" backgroundImage="../lift-location/15.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/15.jpg" alt="Lift Manufacturers in Chandigarh"  title="Lift Manufacturers in Chandigarh" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Reliable Lift Manufacturers in Chandigarh
</h1>
             
              <p>
Are you looking for dependable and efficient lifts? TSE Shaft Elevators, one of the trusted <strong>Lift Manufacturers in Chandigarh,</strong> presents quality lifts for homes and businesses in Chandigarh. Every lift is engineered to perfection to provide a comfortable ride and years of trouble-free performance.
</p>


  <h2 className=" text-2xl sm:text-3xl font-bold text-slate-800 mt-8 mb-2">
    Trusted Elevator Suppliers in Chandigarh
</h2>

 <p>We, TSE Shaft Elevators, are renowned as one of the leading <strong>Elevator Suppliers in Chandigarh,</strong> providing passenger, home, and commercial lifts to residential, commercial, and medical facilities. With our experience and expertise in the field, we specialize in installing and supplying a wide range of lifts in Chandigarh that are designed and built to perfection.
</p>

             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl sm:text-2xl font-bold text-slate-800 mt-8 mb-2">Why Trusted By Customers In Chandigarh?
</h3>

<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
     <li>High-quality and safe lifts that are perfect for all your commercial and residential needs.</li>
  <li>Fast and reliable installation by our expert lift installers.</li>
  <li>Affordable and pocket-friendly prices.</li>
  <li>Customized lift solutions to fit your budget and requirements.</li>
  <li>Excellent customer service before and after the sale.</li>

</ul>

<p>
With our customer-centric approach to all our projects, we guarantee to make your lift installation experience as pleasant as possible. Our lifts add value to your property and provide you with years of reliable service in Chandigarh. TSE Shaft Elevators offers the best lift solutions in Chandigarh.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}