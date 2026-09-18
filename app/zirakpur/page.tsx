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
      <GlobalPageHero title="Zirakpur" description="Modern Lift AMCs engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="../lift-location/14.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/14.jpg" alt="Zirakpur"  title="Zirakpur" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Zirakpur</h2>
            
            
            <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">  Trusted Lift Manufacturers at Zirakpur</h3>
            <p>
Do you want to buy an elevator that can offer safety and comfort? TSE Shaft Elevators can provide you with quality home lift and commercial lifts in Zirakpur. All our lifts are produced under strict control to ensure that you get a reliable lift that will serve you for many years.
</p>

<h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2"> 
Trusted Lift Manufacturers at Zirakpur</h3>

<p>We are proud to provide our elevator manufacturing services in Zirakpur to residential and commercial buildings. We offer passenger lifts, home lifts, and commercial lifts that are manufactured and installed according to your needs, preferences, and budget. We also have a team of professional lift installers who can help you with the installation process.
</p>

 
 


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Why we are your preferred elevator manufacturing services in Zirakpur

</h3>
<p>
Our professional staff can install your lift quickly and efficiently with minimum disruption to your daily life.
</p>

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">

Some of the advantages of our elevator manufacturing services in Zirakpur include:
</h3>



   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">

    <li>We provide safe and reliable lifts that are suitable for residential and commercial buildings.</li>
  <li>Our lifts are manufactured under strict control to ensure that they meet the highest quality standards.</li>
  <li>We offer competitive prices for all our lift manufacturing services.</li>
  <li>Our lifts can be customized to fit your budget and space requirements.</li>
  <li>We also provide excellent customer service to all our clients.</li>
</ul>

<p>
From the first phone call to the installation of your lift, we will ensure that you have a pleasant experience when buying a lift. We offer high-quality elevator manufacturing services in Zirakpur that will add value to your property for years to come.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}