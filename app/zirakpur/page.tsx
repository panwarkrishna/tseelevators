import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Zirakpur, Elevator Suppliers in Zirakpur",
  keywords: "Lift Manufacturers in Zirakpur, Elevator Suppliers in Zirakpur, Lift Manufacturers, Elevator Suppliers, Lift in Zirakpur, Elevator in Zirakpur",
  description: "Lift Manufacturers in Zirakpur & Elevator Suppliers in Zirakpur – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/zirakpur" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Zirakpur" description="Modern Lift AMCs engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="../lift-location/14.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/14.jpg" alt="Lift Manufacturers in Zirakpur"  title="Lift Manufacturers in Zirakpur" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Zirakpur</h1>
            
            
             <p>
Searching for a reliable, smooth and durable lift? TSE Shaft Elevators is a prominent <strong>Lift Manufacturers in Zirakpur,</strong> dealing in a variety of passenger, home lifts and commercial lifts. All our lifts are manufactured after rigorous tests to ensure quality value and provide you with comfortable experience for decades.
</p>

<h2 className=" text-2xl sm:text-3xl font-bold text-slate-800 mt-8 mb-2"> 
Elevator Suppliers in Zirakpur
</h2>

<p>
Talking about trusted lift suppliers, TSE Shaft Elevators is amongst the top <strong>Elevator Suppliers in Zirakpur,</strong> providing a wide range of lifts like passenger lifts, home lifts and commercial lifts. Our company specializes in supplying and installing lifts of the best quality to fit into your home or office space.
</p>

 
 


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl sm:text-2xl font-bold text-slate-800 mt-8 mb-2">
Why Zirakpur Chooses TSE Shaft Elevators
 </h3>



<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
     <li>The best and safe lifts for commercial, residential, and industrial uses</li>
  <li>Qualified engineers who install your lift with precision</li>
  <li>Competitive pricing with no hidden fees</li>
  <li>Customized lift design that fits your home or office</li>
  <li>After-sales support for all our customers</li>
</ul>

<p>
With TSE Shaft Elevator, you can look forward to a hassle-free experience from installation to repair of all your lifts. Choose us to offer your building comfort and safety with our wide range of high-quality lifts in Zirakpur.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}