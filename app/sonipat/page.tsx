import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Sonipat, Elevator Suppliers in Sonipat",
  keywords: "Lift Manufacturers in Sonipat, Elevator Suppliers in Sonipat, Lift Manufacturers, Elevator Suppliers, Lift in Sonipat, Elevator in Sonipat",
  description: "Lift Manufacturers in Sonipat & Elevator Suppliers in Sonipat – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/sonipat" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Sonipat" description="Leading Elevator Suppliers in Sonipat" backgroundImage="../lift-location/4.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/4.jpg" alt="Sonipat"  title="Sonipat" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
           <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Sonipat</h2>

    <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Trusted Lift Manufacturers in Sonipat
</h3>
<p>
Searching for Lift manufacturers that can provide you with quality lifts? TSE Shaft Elevators offers you a variety of high-quality lifts which are customized for your home or business in Sonipat. Our lifts are designed and manufactured using advanced technology and reliable materials to guarantee you smooth rides and years of trouble-free operation.
</p>

  

    <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Leading Elevator Suppliers in Sonipat
  </h3>

  <p>
TSE Shaft Elevators is honored to be among the companies that offer a wide range of lifts in Sonipat, India. We are among the preferred suppliers of lifts and escalators in Sonipat. We supply and install passenger lifts, home lifts, commercial lifts, and other related equipment. All our lifts are customizable depending on your building structure or design.
  </p>

   
 
             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
What Makes Us Sonipat's Preferred Lift Partner
  </h3>

  <p>
  We focus on providing you with safe and sturdy lifts in Sonipat, India. We also offer fast installation by our experienced professional team and competitive pricing to homeowners, businesses, hospitals, and other commercial buildings. Additionally, we provide you with affordable maintenance and repair services after installation.


  </p>

  
  <p>

All our lifts are manufactured to exact specifications and fitted using our professional experience to ensure a perfect finish for seamless movement of your passengers or luggage. Get a complete lift solution that is elegant, dependable and safe from TSE Shaft Elevators.

  </p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}