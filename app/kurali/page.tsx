import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Kurali, Elevator Suppliers in Kurali",
  keywords: "Lift Manufacturers in Kurali, Elevator Suppliers in Kurali, Lift Manufacturers, Elevator Suppliers, Lift in Kurali, Elevator in Kurali",
  description: "Lift Manufacturers in Kurali & Elevator Suppliers in Kurali – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/kurali" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Kurali" description="Trusted Lift Manufacturers In Kurali" backgroundImage="../lift-location/18.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/18.jpg" alt="Lift Manufacturers in Kurali"  title="Lift Manufacturers in Kurali" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Kurali
</h1>
             
           
              <p>
Searching for <strong>Lift Manufacturers in Kurali</strong> that can provide you with high-quality and reliable lifts that would suit your home or business needs in Kurali? We at TSE Shaft Elevators offer our clients an opportunity to buy high-quality lifts that are designed to provide you and your family with years of comfort and satisfaction.
</p>


  <h3 className=" text-2xl sm:text-3xl font-bold text-slate-800 mt-8 mb-2">
Elevator Suppliers in Kurali



</h3>
<p>
TSE Shaft Elevators take pride in being a part of the most trustworthy <br/>

<strong>Elevator Suppliers in Kurali</strong> that offer residential and commercial lift installation and supply services. We provide our customers with passenger lifts and home lifts that fit their home or office and are designed to meet the highest standards of quality and safety.

 </p>

        
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">
  <h3 className=" text-2xl sm:text-2xl font-bold text-slate-800 mt-8 mb-2">
Why Do People Choose Us in Kurali?


</h3>

 

<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
     <li>High-quality and safe lifts</li>
  <li>Professionally qualified and expert installers</li>
  <li>Competitive pricing</li>
  <li>Custom-designed lift solutions</li>
  <li>Comprehensive and friendly customer service</li>
</ul>

<p>
We are here to help you through the entire process, from selecting the most suitable option for your home or business to professionally and efficiently installing your lift.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}