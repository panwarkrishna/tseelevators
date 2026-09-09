import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift MS Structure Services in Delhi, Elevator MS Structure Services in Delhi-NCR",
  keywords: "Lift MS Structure Services in Delhi, Elevator MS Structure Services in Delhi-NCR, Lift MS Structure Services, Elevator MS Structure Services",
  description: "TSE Shaft Elevators - Expert Lift MS Structure Services in Delhi & Elevator MS Structure Services in Delhi-NCR. Sturdy, durable & precision-built structures. Call +919971022555 for a free quote today! ",
  alternates: { canonical: "https://tseelevators.com/lift-ms-structure" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift MS Structural" description="Modern Lift MS Structurals engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="./services/ms-structural1.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="./services/ms-structural1.webp" alt="Modern Lift MS Structural installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div> */}
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
           <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift MS Structure</h2>

             <p>
Any good elevator lift requires a reliable MS structure to bear the total load of the elevator. The MS structure is a reliable system that supports the lift throughout its functioning. We at TSE Shaft Elevators deal in providing you with MS structures made of high-quality steel that are reliable according to your building's requirement and lift specification.
</p>


<h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Lift MS Structure Services In Delhi
</h3>


<p>We provide you with the best Lift <strong>MS Structure Services In Delhi </strong> for residential, commercial, and office buildings. We take into account our client's building's blueprint and provide a suitable and reliable MS structure for the lifts. Our team provides you with a strong and durable MS structure upon installation, which promises the smooth functioning of your lift with no hassles.
</p>


<h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Best Elevator MS Structure Services In Delhi-NCR</h3>


<p>TSE Shaft Elevators provide the best <strong>Elevator MS Structure Services In Delhi-NCR.</strong> We serve all areas in Noida, Gurgaon, Haryana and the rest of Delhi-NCR. Here are the services we provide:
</p>


 <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">
<li> Customized MS Structures for all kinds of lifts in your building</li>
<li>Durable MS structures made of the best quality steel</li>
<li> Installation of the MS structures done by professionals</li>
<li> Reliable and safe MS structures suitable for all kinds of buildings</li>
</ul>

<p>
TSE Shaft Elevators provide you with the best  MS elevator structures that promise a safe and stable lift throughout its lifespan.
</p>
             
            </div>
          </div>
        </div>
      </section>
                   <BestServicesSection />
      
      <TestimonialsSection />
    </main>
  );
}