import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Domestic Lift Manufacturers in Delhi, Domestic Elevator Suppliers in Delhi-NCR",
  keywords: "Domestic Lift Manufacturers in Delhi, Domestic Elevator Suppliers in Delhi-NCR, Domestic Lift Manufacturers, Domestic Elevator Suppliers, Domestic Lift in Delhi, Domestic Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Trusted Domestic Lift Manufacturers in Delhi & Domestic Elevator Suppliers in Delhi-NCR. Safe, reliable & customized home lifts for every space. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/domestic-lifts" },
};

export default function DomesticLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Domestic Lift" description="Compact and reliable domestic lifts designed for private homes and duplex residences." backgroundImage="https://aditechinfo.com/tseelevators/product-img/domestic.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          {/* <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div> */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/domestic.webp" alt="Domestic Lift for homes, villas, and residential properties" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Perfect for Homes</span></div> */}
              </div>
            
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-7">
              <div>
 
 

<h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Domestic Lift </h2>


<p>TSE Shaft Elevators offer Domestic lifts that are safe, simple to operate and convenient for everyday use. A domestic lift is perfect for getting around the house and adds value and style to your home.
</p>


<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Domestic Lift Manufacturers In Delhi</h3>

<p>TSE Shaft Elevators have established themselves as one of the most reliable <strong>Domestic Lift Manufacturers in Delhi.</strong> Our lifts are technologically advanced and offer a compact design that fits ideal for homes, villas, and duplexes.
</p>


<p>All our lifts are made with premium quality material that is safe and durable with easy maintenance. Choose from a wide range of designs and finishings on our domestic lifts. You can be rest assured of a safe and comfortable ride with our lifts for the elderly, kids, and disabled family members.
</p>


<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Trusted Domestic Elevator Suppliers In Delhi-NCR</h3>

<p className="mb-3">TSE Shaft Elevators is one the trusted Domestic <strong>Elevator Suppliers in Delhi-NCR</strong> that supplies residential lifts in Delhi, Noida, Gurugram, and Haryana. Our professional Domestic Elevator installers carry out a detailed survey of your home to come up with the best design and model of lifts for your home.
</p>


<div className="mb-2 font-bold">Below are some of the services we provide when you choose to install our lifts for residential buildings:
</div>

   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">


  <li>Conducting a survey of your house before designing the lift</li>
    <li>Professional designing and installation of lift</li>

  <li>Safe and reliable domestic lifts that are family friendly</li>

  <li>Domestic lifts that are energy efficient</li>

  <li>Ensuring your satisfaction with every step of the installation process</li>


</ul>
 


 
               </div>
            
            </div>
          </div>
        </div>
      </section>
             <BestProductsSection />
      
      <TestimonialsSection />
    </main>
  );
}