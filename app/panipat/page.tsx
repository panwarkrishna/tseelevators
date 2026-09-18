import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Panipat, Elevator Suppliers in Panipat",
  keywords: "Lift Manufacturers in Panipat, Elevator Suppliers in Panipat, Lift Manufacturers, Elevator Suppliers, Lift in Panipat, Elevator in Panipat",
  description: "Lift Manufacturers in Panipat & Elevator Suppliers in Panipat – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/panipat" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Panipat" description="Are you looking for dependable Lift Manufacturers in Panipat" backgroundImage="../lift-location/6.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/6.jpg" alt="Panipat"  title="Panipat" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Panipat</h2>
             
 <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Reliable Lift Manufacturers in Panipat
</h3>
  <p>
   Are you looking for dependable lift manufacturers in Panipat that can deliver quality lifts that are efficient, smooth, and reliable? TSE Shaft Elevators presents an array of lifts that are manufactured to offer residential lift services and commercial lift services in Panipat. All our lifts are engineered to perfection using advanced technology and high-quality materials to ensure that you have a hassle-free experience with the products for a long time.

  </p>

 <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Reliable Elevator Suppliers in Panipat
  </h3>

  <p>
  TSE Shaft Elevators is one of the most reliable names in the list of Elevator Suppliers in Panipat, satisfying the needs of many residential, commercial, hospital, as well as retail clients. We specialize in the installation of different types of lifts. Our work includes the supply and installation of passenger lifts, home lifts, and commercial lifts in Panipat.

  </p>

             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

 


 <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Why Choose TSE Shaft Elevators in Panipat?
  </h3>

  <p>
Below are some of the reasons why you should consider getting lifts from us;
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Durable and reliable lifts that cater to residential and commercial needs.</li>
    <li>Affordable products with pocket-friendly prices.</li>
    <li>Customized lift solutions.</li>
  </ul>

  <p className="mt-6">
We offer our elevator services in Panipat as an end-to-end solution starting from installation to post-installation service support. Experience the best commercial and residential lift services in Panipat with us.

  </p>


            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}