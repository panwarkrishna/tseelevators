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
      <GlobalPageHero title="Murthal" description="Trusted Lift Manufacturers in Murthal" backgroundImage="../lift-location/8.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/8.jpg" alt="Murthal"  title="Murthal" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Murthal</h2>

           <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Trusted Lift Manufacturers in Murthal
</h3>
              <p>
TSE Shaft Elevators presents quality lifts that can be installed in your home or business in Murthal. Our lifts are made using advanced technology to ensure comfort and durability.
</p>

<p>We offer reliable lifts in Murthal that can be installed in your home or business. Our lifts are made using advanced technology to ensure comfort and durability. We deal in various types of lifts including passenger lifts, home lifts, and commercial lifts. The lifts we offer can suit different needs and budgets. We also offer competitive pricing for our lifts in Murthal.
</p>



 
             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Why choose our lifts in Murthal?

</h3>

 



   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">

    <li>They provide you with safe and durable lifts.</li>
  <li>Our lifts can be installed within a short time by our expert lift installers.</li>
  <li>They are affordable and can fit in different budgets.</li>
  <li>We can customize the lifts to fit in different building designs.</li>
  <li>We provide dependable lift support and maintenance services.</li>
</ul>

<p>
Our lifts can be installed in offices, residential houses, commercial buildings, and hospitals. We value your comfort and therefore, our lifts are designed to provide you with quality and comfort. When considering our lifts, you will also realize that we provide dependable support and maintenance services that can last longer. Choose us to provide your home or business with safe and comfortable lifts.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}