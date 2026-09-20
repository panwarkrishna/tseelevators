import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Manesar, Elevator Suppliers in Manesar",
  keywords: "Lift Manufacturers in Manesar, Elevator Suppliers in Manesar, Lift Manufacturers, Elevator Suppliers, Lift in Manesar, Elevator in Manesar",
  description: "Lift Manufacturers in Manesar & Elevator Suppliers in Manesar – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/manesar" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Manesar" description="Reliable Lift Manufacturers in Manesar" backgroundImage="../lift-location/6.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/6.jpg" alt="Lift Manufacturers in Manesar"  title="Lift Manufacturers in Manesar" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"> Lift Manufacturers in Manesar
</h1>
 
              <p>
Are you in search of a dependable and durable lift that can provide you with years of service? Choose us as your preferred <strong>Lift Manufacturers in Manesar.</strong> TSE Shaft Elevators is the right place for you as we present to you our quality lifts in Manesar. We offer our clients a wide variety of lifts such as passenger lifts, goods lifts, and commercial lifts.
</p>


  <h2 className=" text-2xl sm:text-3xl font-bold text-slate-800 mt-8 mb-2">
Elevator Suppliers in Manesar

</h2>

<p>    

  TSE Shaft Elevators is a company that deals in supplying and installing lifts in Manesar. We are known as one of the leading <strong>Elevator Suppliers in Manesar</strong> that provides lifts for both residential and commercial buildings as well as industrial buildings.

</p>


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className="text-2xl sm:text-2xl  font-bold text-slate-800 mt-8 mb-2">
Why We Are Manesar's Preferred Choice

</h3>






<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
    <li>We provide strong and durable lifts that suit industrial and commercial use</li>
  <li>Our lifts are installed quickly by our professional and skilled staff</li>
  <li>We ensure affordable prices for all our products and services</li>
  <li>We offer customized solutions for your lifts</li>
  <li>We also provide reliable and professional after-sales support</li>

</ul>

<p>
By choosing us, you can have peace of mind with regard to an uncomplicated procedure from installation to after-sales. Choose TSE Shaft Elevators to get high-quality lifts in Manesar.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}