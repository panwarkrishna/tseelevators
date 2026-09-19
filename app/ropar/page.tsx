import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Ropar, Elevator Suppliers in Ropar",
  keywords: "Lift Manufacturers in Ropar, Elevator Suppliers in Ropar, Lift Manufacturers, Elevator Suppliers, Lift in Ropar, Elevator in Ropar",
  description: "Lift Manufacturers in Ropar & Elevator Suppliers in Ropar– TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/ropar" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Ropar" description="Trusted Lift Manufacturers In Ropar" backgroundImage="../lift-location/17.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/17.jpg" alt="Lift Manufacturers in Ropar"  title="Lift Manufacturers in Ropar" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Ropar</h2>
             
             
         
               <p>
Searching for <strong>Lift Manufacturers in Ropar</strong> who can deliver reliable and high-quality lifts? TSE Shaft Elevators offer quality-assured lifts that are designed to suit your needs and fit into your home, as well as any business in Ropar. We specialize in creating safe and durable lifts that are equipped with innovative technology to offer you a comfortable experience.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Elevator Suppliers in Ropar

</h3>

<p>
We are proud to be a top <strong>Elevator Supplier in Ropar,</strong> with experience in dealing with residential and commercial buildings, installing lifts for houses, offices, hospitals, and more. We offer a wide variety of lifts including passenger lifts, home lifts, commercial lifts, and more.
</p>


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 ">
    Why We're a Trusted Name in Ropar

</h3>

<p className="mt-2">
The following features will tell you why our lifts are preferred by many people:
</p>

<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">   <li>High-quality and sturdy construction</li>
 <li>High-quality and sturdy construction</li>
  <li>Quick and easy installation by qualified and professional technicians</li>
  <li>Affordable prices</li>
  <li>Customizable lift options</li>
  <li>Excellent customer service</li>

</ul>

<p>
The whole buying process is easy and comfortable and we do everything to make sure you enjoy every step. Choose our lifts and experience the ease of transport in your home or business in Ropar.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}