import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Kharar, Elevator Suppliers in Kharar",
  keywords: "Lift Manufacturers in Kharar, Elevator Suppliers in Kharar, Lift Manufacturers, Elevator Suppliers, Lift in Kharar, Elevator in Kharar",
  description: "Lift Manufacturers in Kharar & Elevator Suppliers in Kharar – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/kharar" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Kharar" description="Trusted Lift Manufacturers in Kharar" backgroundImage="../lift-location/16.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/16.jpg" alt="Lift Manufacturers in Kharar"  title="Lift Manufacturers in Kharar" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
Lift Manufacturers in Kharar

             </h2>
              <p>
Searching for a reliable and high-quality lift for residential or commercial purposes? TSE Shaft Elevators is a preferred <strong>Lift Manufacturer in Kharar,</strong> providing top-quality lifts. All our lifts undergo a thorough inspection to ensure that they are made with durable parts and advanced technology, which guarantee their stable functioning.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Elevator Suppliers in Kharar

</h3>

<p>
TSE Shaft Elevators is one of the leading <strong>Elevator Suppliers in Kharar,</strong> distributing and installing lifts of different sizes and types for homes and businesses. Our team of professional engineers and installers can help you select the most suitable model according to your location, budget, and other criteria.
</p>


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
    Reasons to Pick TSE Shaft Elevators in Kharar

</h3>



   <ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
    <li>Lifts that provide a safe and comfortable experience on every floor</li>
  <li>Fast and reliable lift installation by professional staff</li>
  <li>Affordable prices with excellent customer support</li>
  <li>Customized solutions and superior engineering for residential and commercial buildings</li>
  <li>Flexible terms and a customer satisfaction guarantee</li>

</ul>

<p>
From the first call to the completion of the installation, we make sure that you are fully satisfied with our work. Choose our company for a lifetime of comfort and reliability of your building in Kharar.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}