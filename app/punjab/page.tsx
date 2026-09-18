import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Punjab, Elevator Suppliers in Punjab",
  keywords: "Lift Manufacturers in Punjab, Elevator Suppliers in Punjab, Lift Manufacturers, Elevator Suppliers, Lift in Punjab, Elevator in Punjab",
  description: "Lift Manufacturers in Punjab & Elevator Suppliers in Punjab – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/punjab" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Punjab" description="Reliable Lift Manufacturers in Punjab" backgroundImage="../lift-location/9.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/9.jpg" alt="Punjab"  title="Punjab" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Punjab</h2>
             
           <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Reliable Lift Manufacturers in Punjab</h3>
              <p>
Are you looking for a supplier of safe and reliable lifts? TSE Shaft Elevators can provide you with high-quality lifts in Punjab, which are produced with modern technology and high-quality materials, so that their use brings only comfort.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Trusted Elevator Suppliers in Punjab
</h3>

<p>
TSE Shaft Elevators is pleased to offer you Lifts manufacturers in Punjab, and we provide you with the necessary equipment for the reliable and comfortable movement of passengers and goods in your home or business building. In our Elevator Suppliers in Punjab catalog, you will find a wide range of lifts, passenger lifts, home lifts, and commercial lifts, the use of which extends from small private houses to large enterprises.
</p>


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Punjab's Preferred Choice for Lifts and Elevators
</h3>
 



   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">

     <li>A selection of safe and strong lifts for home use.</li>
  <li>Experienced mounters and installers.</li>
  <li>Affordable prices and exceptional value.</li>
  <li>Designs that will meet all your requirements.</li>
  <li>Professional and qualified technical service.</li>

</ul>

<p>
From the first phone call, we will help you choose and install a lift of the desired class, configuration, and price. We are a company that takes care of customers and strives for comfortable and quality service.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}