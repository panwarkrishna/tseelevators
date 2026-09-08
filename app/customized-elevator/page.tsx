import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Customized Elevator Manufacturers in Delhi, Customized Elevator Suppliers in Delhi-NCR",
  keywords: "Customized Elevator Manufacturers in Delhi, Customized Elevator Suppliers in Delhi-NCR, Customized Elevator Manufacturers, Customized Elevator Suppliers, Customized Elevator in Delhi, Customized Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Leading Customized Elevator Manufacturers in Delhi Customized Elevator & Suppliers in Delhi-NCR. Tailored designs to fit your space & needs. Call +919971022555 for a free consultation!",
  alternates: { canonical: "https://tseelevators.com/passenger-lifts" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Customized Elevator" description="Modern Customized Elevators engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="./services/cutomised-elevator.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="./services/cutomised-elevator.webp" alt="Modern Customized Elevator installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div>
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
             
             

 <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
Customized Elevator</h2>

<p>
The requirement of lifts varies from building to building and therefore we provide you with a customized option that fits your building dimension, elevator style and budget. Our Customized Elevator will offer you an ultimate comfortable experience along with elegance and style.
</p>

<h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Customized Elevator Manufacturers in Delhi</h3>


<p>TSE Shaft Elevators are one of the preferred Customized Elevator Manufacturers in Delhi, we understand every building is different in terms of structure, size and architecture, hence we bring to you a lift of your choice according to your requirement. We specialize in Customized Elevator which offers you the style and comfort of your choice like glass panel, unique design and much more.
</p>

<h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">

Customized Elevator Suppliers in Delhi-NCR
</h3>

<p>We are the top Customized Elevator Suppliers in Delhi-NCR offering our clients with high-end customized lifts. We provide our services in Delhi, Noida, Gurugram, and Haryana. Here are some reasons why our clients prefer us:
</p>

<h4 className=" text-lg font-bold text-slate-800 mt-2 mb-1">We specialize in:</h4>
   <ul className="list-disc list-inside text-slate-600 text-sm sm:text-base leading-relaxed">
  <li>Elevator customization that fits your building architecture.</li>
  <li>Offer a wide range of sizes to suit all your needs.</li>
  <li>Provide you with a variety of finishes.</li>
  <li>Unique designs and smart features.</li>
  <li>Reliable service and professional assistance.</li>
</ul>

<p>

Choose us to bring home the ultimate experience of a customized lift.</p>



             
            </div>
          </div>
        </div>
      </section>
             <BestProductsSection />
      
      <TestimonialsSection />
    </main>
  );
}