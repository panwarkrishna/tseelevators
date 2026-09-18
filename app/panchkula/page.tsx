import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Panchkula, Elevator Suppliers in Panchkula",
  keywords: "Lift Manufacturers in Panchkula, Elevator Suppliers in Panchkula, Lift Manufacturers, Elevator Suppliers, Lift in Panchkula, Elevator in Panchkula",
  description: "Lift Manufacturers in Panchkula & Elevator Suppliers in Panchkula – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/panchkula" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Panchkula" description=" Reliable Lift Manufacturers in Panchkula" backgroundImage="../lift-location/12.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/12.jpg" alt="Manesar"  title="Manesar" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Panchkula</h2>
              
              <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2"> Reliable Lift Manufacturers in Panchkula
</h3>
              <p>
Are you searching for the best Lift Manufacturers in Panchkula? Get yourself a reliable, comfortable, high-quality elevator from TSE Shaft Elevators for residential and commercial buildings in Panchkula. Here at TSE, we take care of every detail while manufacturing and supplying lifts. The lifts we offer are high-quality, made with advanced technology, and are long-lasting.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Reputable Lift Suppliers in Panchkula

</h3>

<p> TSE Shaft Elevators is a reputable Lift Suppliers in Panchkula, dealing in residential and commercial lifts, home lifts, passenger lifts, and commercial lifts. We are known for our installation process of all kinds of lifts and supplying them to clients in Panchkula at affordable prices.

</p>


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Why Choose Us Your Lift Supplier in Panchkula?

  </h3>

 

   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">
  <li>We provide high-quality and durable lifts suitable for residential buildings, homes, and offices.</li>
  <li>Our lift installation process is fast and efficient.</li>
  <li>We install comfortable lifts designed to provide safety and convenience to our clients.</li>
  <li>We offer competitive pricing across all our lift products.</li>
  <li>Experience excellent customer service throughout the entire installation process.</li>

</ul>

<p>
From the moment you decide to install a lift, to the moment of completion, we make sure it is super easy and convenient. Choose TSE Shaft Elevators today and elevate your residential and commercial buildings in Panchkula with our superior lifts.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}