import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Home Lift Manufacturers in Delhi, Home Elevator Suppliers in Delhi-NCR",
  keywords: "Home Lift Manufacturers in Delhi, Home Elevator Suppliers in Delhi-NCR, Home Lift Manufacturers, Home Elevator Suppliers, Home Lift in Delhi, Home Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Leading Home Lift Manufacturers in Delhi & Home Elevator Suppliers in Delhi-NCR. Space-saving, safe & stylish home elevators. Call +91-9971022555 for a free consultation today!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/home-lift" },
};

export default function HomeLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Home Lift" description="Compact and reliable domestic lifts designed for private homes, villas, and duplex residences." backgroundImage="https://aditechinfo.com/tseelevators/product-img/home-lift.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        {/* Background Architectural Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/home-lift.webp" alt="Home Lift for homes, villas, and residential properties" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Perfect for Homes</span></div>
              </div>
           
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-7">
              <div>
              
             
             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Home Lift</h2>
<p className="text-md text-slate-600"> Everyone's daily life is made easier and safer with a home elevator, especially for children and the elderly. Smart, compact, and secure elevators designed specifically for houses are available from TSE Shaft Elevators.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Home Lift Manufacturers in Delhi</h3>
<p className="text-md text-slate-600"> TSE Shaft Elevators is a leading Home Lift Manufacturer in Delhi specializing in developing compact and elegant lifts that can be installed in a home, villa, or duplex with ease. With their minimal space requirement and low noise levels TSE lifts become an ideal addition to all sorts of residential buildings. At the time of delivery of our lifts, every single detail is triple checked and all safety mechanisms are put through a rigorous testing procedure. In order to make sure that your lift will be a perfect fit for your home we offer you a wide variety of options to choose from. We specialize in creating lifts that prioritize both comfort and safety and focus on delivering on-time installations and exceptional customer care.
</p>

 <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Home Elevator Suppliers in Delhi-NCR</h3>
            <p className="text-md text-slate-600">Furthermore, we are also a prominent Home Elevator Suppliers in Delhi-NCR that offers end-to-end services. Irrespective of Delhi, Noida, Gurugram, Faridabad, our professional team members even interact with you at your residence and help you decide the most appropriate lift plan for you. We assure you that we take care of every minute detail starting from installation to testing and completion of the task.
            </p>

             
             
             </div>
              
            </div>
          </div>
       
        </div>
      </section>
      <TestimonialsSection />
    </main>
  );
}