import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Noida, Elevator Suppliers in Noida",
  keywords: "Lift Manufacturers in Noida, Elevator Suppliers in Noida, Lift Manufacturers, Elevator Suppliers, Lift in Noida, Elevator in Noida",
  description: "Lift Manufacturers in Noida & Elevator Suppliers in Noida – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/noida" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Noida" description="TSE Shaft Elevators is a leading Lift Manufacturer in Noida" backgroundImage="../lift-location/1.jpg" badgeText="Noida" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/1.jpg" alt="Lift Manufacturers in Noida"  title="Lift Manufacturers in Noida" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

            
   <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Noida
</h2>
  <p>
TSE Shaft Elevators is a leading <strong>Lift Manufacturers in Noida,</strong> providing reliable & durable lifts for residential, commercial and elevator suppliers. It is a perfect combination of strong materials and cutting-edge technology that helps to guarantee smooth operations throughout its life. Our expert technicians at TSE Shaft Elevators ensure passenger safety during every travel.
  </p>

  <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Elevator Suppliers in Noida
  </h3>

  <p>
We are a top <strong>Elevator Suppliers in Noida</strong> providing dependable lift solutions for residential, commercial and industrial businesses. In addition, we assure you of our prompt delivery & installations in Noida. Our skilled technicians will reach your site to understand your requirements and suggest the best possible elevator design that suits your needs.

  </p>

  


            </div>
            </div>


             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-12 space-y-6">

               <h3  className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
What Makes Us the Right Choice
</h3>
<p className="mt-4">
There are many reasons why you should choose us. Some of them are mentioned below:

  </p>

 
 
<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
   <li>Safe and sturdy lifts with all modern safety features</li>
  <li>Fast installations with professional elevator technicians</li>
  <li>Cost-effective solutions suitable for any budget</li>
  <li>Customized designs to suit individual customer requirements</li>
  <li>Trusted partner that provides round-the-clock support even after the sale</li>
  <li>Excellent customer support</li>
  <li>Customized design to fit your building's unique features</li>

  </ul>

  <p>
We are committed to providing our clients with value for their money and you can rely on our professional services and premier lifts to make your building comfortable, convenient and safe.
  </p>

  


            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}