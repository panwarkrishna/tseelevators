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
      <GlobalPageHero title="Rewari" description="TSE Shaft Elevators is a trusted name among Elevator Suppliers in Rewari" backgroundImage="../lift-location/5.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/5.jpg" alt="Rewari"  title="Rewari" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Rewari</h2>
    <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">

Reliable Lift Manufacturers in Rewari
</h3>
<p>
Searching for reliable and durable lifts for your home or business? TSE Shaft Elevators present safe and stylish lifts that are perfect for residential and commercial buildings in Rewari. Manufactured with precision and using advanced technology TSE Shaft Elevators provide high quality lifts that are dependable and long lasting.
</p>

    <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Reliable Elevator Suppliers in Rewari
  </h3>

  <p>
    TSE Shaft Elevators is a trusted name among
    <strong> Elevator Suppliers in Rewari</strong>, providing elevator
    solutions for homes, offices, hospitals, commercial properties, and other
    buildings. Our range includes <strong>passenger lifts, home lifts, and
    commercial lifts</strong>, with options that can be customized according
    to your building requirements, usage, and budget.
  </p>

    
 
             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

<h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    What Makes TSE Shaft Elevators Different in Rewari?
  </h3>

  <p>
    We focus on delivering reliable elevator solutions backed by
    professional installation and customer support. Here are some key
    reasons to choose TSE Shaft Elevators:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Reliable and durable lifts for residential and commercial applications.</li>
    <li>Professional installation by experienced elevator technicians.</li>
    <li>Affordable and cost-effective lift solutions.</li>
    <li>Customized elevator designs to suit different building requirements.</li>
    <li>Dependable post-installation maintenance and service support.</li>
  </ul>

  <p className="mt-6">
    From consultation and installation to post-installation support, TSE Shaft
    Elevators provides complete elevator solutions in Rewari. Whether you
    need a lift for your home, office, hospital, or commercial building, our
    team can help you find a suitable solution focused on safety, comfort,
    durability, and reliable performance.
  </p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}