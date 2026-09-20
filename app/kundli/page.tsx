import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Kundli, Elevator Suppliers in Kundli",
  keywords: "Lift Manufacturers in Kundli, Elevator Suppliers in Kundli, Lift Manufacturers, Elevator Suppliers, Lift in Kundli, Elevator in Kundli",
  description: "Lift Manufacturers in Kundli & Elevator Suppliers in Kundli – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/kundli" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers Kundli" description="Trustworthy Lift Manufacturers Kundli" backgroundImage="../lift-location/7.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/7.jpg" alt="Lift Manufacturers Kundli"  title="Lift Manufacturers Kundli" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers Kundli
</h1>
            


  
<p>   Searching for dependable Lift <strong>Manufacturers in Kundli</strong> who offer you a combination of safety plus performance? TSE Shaft Elevators presents to you a huge variety of reliable lifts. Our lifts are made using advanced technology and top quality material. We manufacture lifts that assure full satisfaction to our clients in Kundli and beyond.
</p> 



  <h2 className=" text-2xl sm:text-3xl font-bold text-slate-800 mt-8 mb-2">   
    Elevator Suppliers Kundli

</h2>


<p>
We, TSE Shaft Elevators take up the responsibility of being one of the preferred <strong>Elevator Suppliers in Kundli.</strong> We are engaged in supplying and installing lifts like passenger lifts, home lifts, commercial lifts etc. Our lifts are used in homes, offices, factories and commercial buildings.
</p>



             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

 

  <h3 className="text-2xl sm:text-2xl font-bold text-slate-800 mt-8 mb-2">   
    Built for Kundli - Why We Stand Out 
  </h3>

   <ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
  <li>Sturdy lifts</li>
  <li>Quick installation</li>
  <li>Affordable price range</li>
  <li>Customized lift solutions</li>
  <li>Best-in-class services</li>
</ul>






<p>
We provide the best quality lifts to our clients. Right from the initial discussion to the final installation, we assure you an absolutely satisfaction-building experience. 
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}