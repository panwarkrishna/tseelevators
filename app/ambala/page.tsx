import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Ambala, Elevator Suppliers in Ambala",
  keywords: "Lift Manufacturers in Ambala, Elevator Suppliers in Ambala, Lift Manufacturers, Elevator Suppliers, Lift in Ambala, Elevator in Ambala",
  description: "Lift Manufacturers in Ambala & Elevator Suppliers in Ambala – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/ambala" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Ambala" description="Trustworthy Lift Manufacturers In Ambala" backgroundImage="../lift-location/11.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/11.jpg" alt="Lift Manufacturers in Ambala"   title="Lift Manufacturers in Ambala" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            


   <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Ambala

</h1>

     
  <p>
Do you need a reliable and secure lift? As trusted <strong>Lift Manufacturers in Ambala,</strong> TSE Shaft Elevators will bring you high-quality lifts in Ambala which are made of high-class materials and modern equipment. We create lifts of unique design so that you can enjoy the ride and feel comfort every minute.

  </p>

  <h2  className="text-2xl sm:text-3xl font-bold text-slate-800 mt-8 mb-2">
Elevator Suppliers in Ambala

  </h2>

  <p>
As trusted <strong>Elevator Suppliers in Ambala,</strong> TSE Shaft Elevators is a company that provides all types of lifts in Ambala for residential, commercial, and office buildings. We also install and supply passenger lifts, home lifts, and commercial lifts that suit the architectural features of your home or business. Our team works with a passion to offer you the best client experience.
  </p>



 


 


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3  className="text-2xl sm:text-2xl  font-bold text-slate-800 mt-8 mb-2">
What We Offer As The Best Lift Vendors in Ambala
</h3>
 
 
 

<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">     <li>Reliable and durable lifts.</li>
  <li>Reliable and durable lifts</li>
  <li>High efficiency and fast installation</li>
  <li>Affordable pricing with quality design</li>
  <li>Commercial lifts and unique home lift solutions</li>
  <li>Professional advice and comprehensive service</li>
  </ul>

  <p>
We take pride in being a trusted supplier of lifts and we try to make your journey stress-free and comfortable. Our lifts meet the needs of clients of Ambala. 

  </p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}