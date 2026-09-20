import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Rewari, Elevator Suppliers in Rewari",
  keywords: "Lift Manufacturers in  Rewari, Elevator Suppliers in Rewari, Lift Manufacturers, Elevator Suppliers, Lift in Rewari, Elevator in Rewari",
  description: "Lift Manufacturers in Rewari & Elevator Suppliers in Rewari – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/rewari" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Rewari" description="TSE Shaft Elevators is a trusted name among Elevator Suppliers in Rewari" backgroundImage="../lift-location/5.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/5.jpg" alt="Lift Manufacturers in Rewari"  title="Lift Manufacturers in Rewari" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Rewari
</h1>
    
<p>
 Searching for reliable and durable lifts for your home or business? As trusted <strong>Lift Manufacturers in Rewari,</strong> TSE Shaft Elevators present safe and stylish lifts that are perfect for residential and commercial buildings in Rewari. Using advanced technology, TSE Shaft Elevators provides high-quality lifts that are dependable and long-lasting.
</p>

    <h2  className="text-2xl sm:text-4xl font-bold text-slate-800 mt-8 mb-2">
Elevator Suppliers in Rewari
  </h2>

  <p>
  TSE Shaft Elevators is a renowned name when it comes to <strong>Elevator Suppliers in Rewari,</strong> catering to the needs of homes and offices. From hospitals to commercial buildings we offer a wide range of passenger lifts, home lifts and commercial lifts, suitable for all your commercial and residential needs and budgets.

  </p>

    
 
             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

<h3  className=" text-2xl sm:text-2xl  font-bold text-slate-800 mt-8 mb-2">
    What makes TSE Shaft Elevators different in Rewari?

  </h3>

 

<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">    
 <li>Reliable and durable lifts for all your needs</li>
  <li>Installs the lifts with experienced engineers</li>
  <li>Affordable commercial and residential lifts</li>
  <li>Offers customized lift solutions</li>
  <li>Reliable and quality post-installation support</li>
  </ul>

  <p className="mt-6">
  From installations to enquiries TSE Shaft Elevators has got you covered. Experience the ultimate comfort and luxury.
  </p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}