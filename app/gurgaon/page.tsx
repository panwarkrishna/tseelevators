import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Gurgaon, Elevator Suppliers in Gurgaon",
  keywords: "Lift Manufacturers in Gurgaon, Elevator Suppliers in Gurgaon, Lift Manufacturers, Elevator Suppliers, Lift in Gurgaon, Elevator in Gurgaon",
  description: "Lift Manufacturers in Gurgaon& Elevator Suppliers in Gurgaon – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/gurgaon" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Gurgaon" description="TSE Shaft Elevators provides dependable lift solutions in Gurgaon" backgroundImage="../lift-location/3.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/3.jpg" alt="Lift Manufacturers in Gurgaon"  title="Lift Manufacturers in Gurgaon" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Gurgaon
</h2>
 
   <p>
When it comes to luxury, everyone wants to have the best in the market. As one of the leading <strong>Lift Manufacturers in Gurgaon,</strong> get yourself an elegant, safe, and smooth functioning lift from TSE Shaft Elevators. We bring you the best lifts that suit your building structure and other requirements with precision and accuracy.

  </p>

    <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">

Elevator Suppliers in Gurgaon

  </h3>

  <p>
Being one of the most trusted <strong>Elevator Suppliers in Gurgaon,</strong> we ensure that all types of lifts we deal in are tested and sturdy enough to serve the purpose for which they are put into use. Our organization consists of highly skilled professionals who understand your needs and provide you with the most suitable home lifts, passenger lifts, commercial lifts, and hydraulic lifts.
  </p>

  

             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">
      <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Reliable Lift Company in Gurgaon
</h3>
  <p className="mt-2">
It is important to choose the right partner for all your lift needs. Below are the reasons why people from all parts of Gurgaon choose us as their lift supplier:

  </p>

   
<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">   <li>Tested and reliable lifts designed for safe operation</li>
  <li>Flexible designs suitable for different types of building structures</li>
  <li>Skilled and experienced technicians for professional installation</li>
  <li>Reasonable and transparent pricing with no hidden costs</li>
  <li>Dedicated post-sale assistance and customer support</li>

  </ul>

  <p>All our lifts are manufactured to exact specifications and fitted using our professional experience to ensure a perfect finish for seamless movement of your passengers or luggage.
</p>

  
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}