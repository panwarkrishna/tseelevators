import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Passenger Lift Manufacturers in Delhi, Passenger Elevator Suppliers in Delhi-NCR",
  keywords: "Passenger Lift Manufacturers in Delhi, Passenger Elevator Suppliers in Delhi-NCR, Passenger Lift Manufacturers, Passenger Elevator Suppliers, Passenger Lift in Delhi, Passenger Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Leading Passenger Lift Manufacturers in Delhi & Passenger Elevator Suppliers in Delhi-NCR. Safe, efficient & reliable lifts for commercial & residential spaces. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/passenger-lifts" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Passenger Lift" description="Modern passenger lifts engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="https://aditechinfo.com/tseelevators/product-img/passenger-lift.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/passenger-lift.webp" alt="Modern Passenger Lift installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div>
              </div>
             
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-7">
              <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Passenger Lift</h2>
            <p className="text-md text-slate-600">
TSE Shaft Elevators is your premier passenger lift supplier in Delhi-NCR providing safe, smooth and reliable lifts for homes, offices, malls and commercial buildings of all sizes. Our lifts are strong, user-friendly and perfect to offer comfort to every passenger.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Best Passenger Lift Manufacturers in Delhi</h3>
<p className="text-md text-slate-600">
TSE Shaft Elevators is one of the best Passenger Lift Manufacturers in Delhi providing lifts that are safe, quick and easy to use. Our lifts are made up of premium quality material and are tested thrice before they are dispatched to our clients. We manufacture lifts that are suitable for both commercial and residential uses. Our team of experts works hard to provide you with the most reliable lifts in the market.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Reliable Passenger Elevator Suppliers Across Delhi-NCR</h3>
<p className="text-md text-slate-600">
As one of the reliable Passenger Elevator Suppliers in Delhi-NCR, we bring you the most efficient and reliable lifts for residential and commercial buildings in Delhi, Noida, Gurugram, Faridabad and other nearby locations. Following are the features that make us the most preferred passenger lift supplier in Delhi-NCR
</p>

<ul className="list-disc pl-5 text-md text-slate-600 space-y-2 mt-3">
  <li>Offers maximum safety with modern safety features.</li>
  <li>Make sure that the lifts run smoothly and silently.</li>
  <li> Ensures quick and hassle free installation within the estimated time.</li>
    <li> Affordable pricing with pocket friendly maintenance costs.</li>
    <li> Best in class after-sales service.</li>
</ul>

              </div>
             
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </main>
  );
}