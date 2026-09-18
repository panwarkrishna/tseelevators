import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Kurali, Elevator Suppliers in Kurali",
  keywords: "Lift Manufacturers in Kurali, Elevator Suppliers in Kurali, Lift Manufacturers, Elevator Suppliers, Lift in Kurali, Elevator in Kurali",
  description: "Lift Manufacturers in Kurali & Elevator Suppliers in Kurali – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/kurali" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Kurali" description="Trusted Lift Manufacturers In Kurali" backgroundImage="../lift-location/18.jpg" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/18.jpg" alt="Kurali"  title="Kurali" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            

             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Kurali</h2>
             
             
           <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Trusted Lift Manufacturers In Kurali
</h3>
              <p>
Searching for lift manufacturers that can provide you with high-quality and reliable lifts that would suit your home or business needs in Kurali? We at TSE Shaft Elevators offer our clients an opportunity to buy high-quality lifts that are designed to provide you and your family with years of comfort and satisfaction.
</p>


  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Trusted Lift suppliers in Kurali

</h3>
<p>
Are here to help you choose the best option for your home or business and install it quickly and efficiently.
</p>

        
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">
  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Who Are We?
</h3>

<p>TSE Shaft Elevators take pride in being a part of the most trustworthy
</p>
     
  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Elevator Suppliers in Kurali

</h3>

<p>
That offer residential and commercial lift installation and supply services. We provide our customers with passenger lifts and home lifts that fit their home or office and are designed to meet the highest standards of quality and safety.
</p>

  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">Why Do People Choose Us?
</h3>


<p>With years of experience in the business and a focus on customer satisfaction,

elevators suppliers in Kurali can provide you with a variety of residential and commercial lifts that will fit in your budget and fulfill all of your needs. Our lifts are safe and reliable so that you and your family can enjoy getting from one level in your house or office to another without any problems. Here are some of the reasons why you should choose us:

</p>

   <ul className="list-disc list-inside text-black text-sm sm:text-base leading-relaxed">

     <li>High-quality and safe lifts</li>
  <li>Professionally qualified and expert installers</li>
  <li>Competitive pricing</li>
  <li>Custom-designed solutions</li>
  <li>Comprehensive and friendly customer service</li>

</ul>

<p>
We are here to help you through the entire process, from selecting the most suitable option for your home or business to professionally and efficiently installing your lift. Contact us today to learn more about our residential and commercial lift installation and supply services, get expert recommendations and make a well-informed choice!
</p>
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}