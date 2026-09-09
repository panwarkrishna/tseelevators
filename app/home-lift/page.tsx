import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Home Lift Manufacturers in Delhi, Home Elevator Suppliers in Delhi-NCR",
  keywords: "Home Lift Manufacturers in Delhi, Home Elevator Suppliers in Delhi-NCR, Home Lift Manufacturers, Home Elevator Suppliers, Home Lift in Delhi, Home Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Leading Home Lift Manufacturers in Delhi & Home Elevator Suppliers in Delhi-NCR. Space-saving, safe & stylish home elevators. Call +91-9971022555 for a free consultation today!",
  alternates: { canonical: "https://tseelevators.com/home-lift" },
};

export default function HomeLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Home Lift" description="Compact and reliable domestic lifts designed for private homes, villas, and duplex residences." backgroundImage="https://aditechinfo.com/tseelevators/product-img/home-lift.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        {/* Background Architectural Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/home-lift.webp" alt="Home Lift for homes, villas, and residential properties" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Perfect for Homes</span></div> */}
              </div>
           
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-7">
              <div>
              
             
             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Home Lift</h2>
<p className="text-md text-black"> Everyone's daily life is made easier and safer with a home elevator, especially for children and the elderly. Smart, compact, and secure elevators designed specifically for houses are available from TSE Shaft Elevators.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Home Lift Manufacturers in Delhi</h3>
<p className="text-md text-black"> 
  TSE Shaft Elevators is counted as one of the premier <strong>Home Lift Manufacturers in Delhi</strong> that specializes in compact and sophisticated lifts suitable for homes, villas, and duplexes, with minimal requirements for space and low noise levels. Each lift is triple checked before handing it over to the customer, and all the lift’s safety mechanisms are put through rigorous tests.
We offer a variety of lifts to suit different home requirements in and around Delhi NCR, prioritizing comfort, safety, and punctual installation.

</p>

 <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Home Elevator Suppliers in Delhi-NCR
</h3>
            <p className="text-md text-black">
              And we also happen to be one of the best  <strong>Home Elevator Suppliers in Delhi-NCR,</strong> providing end-to-end solutions across Delhi, Noida, Gurugram, and Haryana.
In addition to manufacturing, our experts also come to your home to help design lift specifications based on your requirements.



            </p>

 


<p className="font-bold mb-2 mt-4">Below are the services we provide:
</p>

              <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed mb-8">
    <li>Onsite home lift consultation</li>
        <li>Customized Lift Plans</li>

    <li>Professional installation</li>

    <li>Rigorous testing before handover</li>

    <li>End-to-end support</li>

</ul>


<p>With TSE Shaft Elevators, you can relax and enjoy a seamless and stress-free home elevator experience.
</p>





             
             
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