import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Murthal, Elevator Suppliers in Murthal",
  keywords: "Lift Manufacturers in Murthal, Elevator Suppliers in Murthal, Lift Manufacturers, Elevator Suppliers, Lift in Murthal, Elevator in Murthal",
  description: "Lift Manufacturers in Murthal & Elevator Suppliers in Murthal – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/murthal" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Murthal" description="Trusted Lift Manufacturers in Murthal" backgroundImage="../lift-location/8.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/8.jpg" alt="Lift Manufacturers in Murthal"  title="Lift Manufacturers in Murthal" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"> Lift Manufacturers in Murthal
</h2>

          
              <p>
Searching for a reliable, comfortable, and high-performance lift? Well, TSE Shaft Elevators can provide you with the best quality lifts for residential and commercial purposes. We are a trusted <strong>Lift Manufacturers in Murthal</strong> that take pride in offering innovative lifts to our clients. Our lifts are designed considering all the relevant factors so that they can offer you a comfortable experience without any hassle.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Elevator Suppliers in Murthal
</h3>

<p>
TSE Shaft Elevators specialize in supplying and installing lifts in Murthal. We have been serving as a competent Elevator Suppliers in Murthal for commercial and residential purposes. Our team provides and installs commercial lifts, passenger lifts, and home lifts on your behalf. You can count on our experience while selecting and buying lifts in Murthal as we have highly qualified and expert engineers who can assess the site and offer you the best recommendations.
</p>



 
             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Why choose us as a Lift Manufacturer in Murthal?

</h3>

 <p>We offer the best quality and durable lifts that are designed with the latest technology and features. Our lifts are:
</p>



<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
    <li>Safe and reliable to operate</li>
  <li>Quick to install</li>
  <li>Affordable</li>
  <li>Customized</li>
</ul>

<p>
Our expert team will support you at every stage to make sure the process goes smoothly. 
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}