import type { Metadata } from "next";
// import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Commercial Lift Manufacturers in Delhi, Commercial Elevator Suppliers in Delhi-NCR",
  keywords: "Commercial Lift Manufacturers in Delhi, Commercial Elevator Suppliers in Delhi-NCR, Commercial Lift Manufacturers, Commercial Elevator Suppliers, Commercial Lift in Delhi, Commercial Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Trusted Commercial Lift Manufacturers in Delhi &  Commercial Elevator Suppliers in Delhi-NCR. Durable, efficient & safe lifts for offices & businesses. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/commercial-lifts" },
};

export default function CommercialLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      {/* <GlobalPageHero title="Commercial Lift" description="High-performance commercial lifts designed for offices, hotels, shopping centres, and hospitals." backgroundImage="https://aditechinfo.com/tseelevators/product-img/commercial-lift.webp" badgeText="Elevators" /> */}
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">
         <div className="group relative w-full aspect-square overflow-hidden rounded-3xl  mx-auto">
  <Image
    src="./certificate_of_appreciation.jpg"
    alt="Certificate of Appreciation"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 900px"
    className="object-contain p-4"
  />
</div>
            </div>
            
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </main>
  );
}