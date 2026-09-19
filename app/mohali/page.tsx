import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Mohali, Elevator Suppliers in Mohali",
  keywords: "Lift Manufacturers in Mohali, Elevator Suppliers in Mohali, Lift Manufacturers, Elevator Suppliers, Lift in Mohali, Elevator in Mohali",
  description: "Lift Manufacturers in Mohali & Elevator Suppliers in Mohali – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/mohali" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Manufacturers in Mohali" description="Reliable Lift Manufacturers In Mohali" backgroundImage="../lift-location/14.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/13.jpg" alt="Lift Manufacturers in Mohali"  title="Lift Manufacturers in Mohali" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Mohali</h2>
              
              

              <p>
A reliable, safe, and sturdy lift that lasts for eternity. TSE Shaft elevators deal in lifts that are perfect for your home or business in Mohali. As a professional <strong>Lift Manufacturers in Mohali,</strong> we take pride in bringing to you our latest collection of lifts and we guarantee you complete satisfaction with our products.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Elevator Suppliers in Mohali


</h3>

<p>
We are also a trusted name when it comes to <strong>Elevator Suppliers in Mohali.</strong> Our lifts are widely used for residential and commercial purposes and are installed across the city. Thanks to the advanced technology and high-quality material used in them.

</p>


             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">
<h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
  The TSE Difference in Mohali

</h3>
 



<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
     <li>Trustworthy and reliable lift manufacturers and suppliers in Mohali</li>
  <li>Fast and efficient installation by experienced professionals</li>
  <li>Competitive pricing for reliable lift solutions</li>
  <li>Customized lift designs and installation options</li>
  <li> Excellent post-sales services</li>
</ul>

<p>
It will be our great pleasure to provide you with the best lift services in Mohali. We assure you that our professionals will make your structure luxurious and comfortable with their high-quality and enduring lifts.
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}