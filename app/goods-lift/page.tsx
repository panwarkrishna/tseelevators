import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Goods Lift Manufacturers in Delhi, Goods Elevator Suppliers in Delhi-NCR",
  keywords: "Goods Lift Manufacturers in Delhi, Goods Elevator Suppliers in Delhi-NCR, Goods Lift Manufacturers, Goods Elevator Suppliers, Goods Lift in Delhi, Goods Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Trusted Goods Lift Manufacturers in Delhi & Goods Elevator Suppliers in Delhi-NCR. Heavy-duty, durable & efficient lifts for industrial use. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/goods-lifts" },
};

export default function GoodsLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Goods Lift" description="Heavy-duty goods lifts built for safe and efficient transportation of materials and equipment." backgroundImage="https://aditechinfo.com/tseelevators/product-img/goods-lift.webp" badgeText="Industrial Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div> */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/goods-lift.webp" alt="Heavy-duty Goods Lift for industrial and commercial material transportation" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Industrial Strength</span></div> */}
              </div>

            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Goods Lift</h2>
              <p className="text-black text-sm sm:text-base leading-relaxed">Do you need the best goods lifts to carry heavy goods from one level to another? Our range of Goods Lifts is suitable for heavy loads and ideal for warehouses, factories, shops, and godowns. These commercial lifts are durable so that you can save time and effort.</p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Top Goods Lift Manufacturers in Delhi</h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">We, as one of the Top <strong>Goods Lift Manufacturers in Delhi,</strong> offer lifts that are heavy-duty and long-lasting. Our goods lifts have the ability to carry heavy loads of various weights from one floor to another. All our commercial lifts are tested thoroughly before being delivered to our clients.</p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Trusted Goods Elevator Suppliers in Delhi-NCR</h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">TSE Shaft Elevators is one of the reliable Goods Elevator Suppliers in Delhi-NCR, who provide commercial lifts for all types of businesses. Here are some reasons why you should hire our Goods Lifts Services:</p>
              
              <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">
                <li>These lifts can carry a huge amount of load on a daily basis.</li>
                <li>The commercial lifts are durable and long-lasting.</li>
                <li>Our staff offers fast installation of goods lifts.</li>
                <li>The Goods Elevators need minimal maintenance.</li>
                <li>We provide cost-effective and affordable prices for our customers.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>
             <BestProductsSection />
      
      <TestimonialsSection />
    </main>
  );
}