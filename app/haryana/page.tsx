import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Manufacturers in Haryana, Elevator Suppliers in Haryana",
  keywords: "Lift Manufacturers in Haryana, Elevator Suppliers in Haryana, Lift Manufacturers, Elevator Suppliers, Lift in Haryana, Elevator in Haryana",
  description: "Lift Manufacturers in Haryana & Elevator Suppliers in Haryana – TSE Shaft Elevators offers safe, reliable lifts. Call +919971022555 for a free quote!",
  alternates: { canonical: "https://tseelevators.com/haryana" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
<GlobalPageHero
  title="Lift Manufacturers in Haryana"
  description="TSE Shaft Elevators is a trusted Lift Manufacturer in Haryana"
  page="Haryana"
  backgroundImage="/lift-location/2.jpg"
/>      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../lift-location/2.jpg" alt="Lift Manufacturers in Haryana"  title="Lift Manufacturers in Haryana" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
  
 <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Lift Manufacturers in Haryana

</h1>

 
  <p>
Searching for the best and reliable lifts for your home or office? TSE Shaft Elevators is a renowned <strong>Lift Manufacturers in Haryana</strong> that specializes in providing high-quality, smooth and durable lifts. Each lift is designed to offer you ultimate comfort while guaranteeing excellent performance that will last longer.

  </p>

  <h2 className=" text-2xl sm:text-3xl font-bold text-slate-800 mt-8 mb-2">

Elevator Suppliers in Haryana
 </h2>

  <p>
We are a leading supplier of <strong>Elevator Suppliers in Haryana</strong> that provides high-class lifts to residential, commercial and industrial buildings. We offer our installation services in Gurugram, Faridabad, Panipat, and other nearby cities in Haryana. Our experts will come to your site and study it to recommend to you the best-matching design and type of lifts.
  </p>
 



             
            </div>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-6">
   
  <h3  className=" text-2xl sm:text-2xl  font-bold text-slate-800 mt-8 mb-2">

  Haryana's Top Choice for Lifts and Elevators
</h3>

<p>We offer a wide range of lifts, including commercial and residential lifts. Here are some reasons why you should choose us as your preferred lifts supplier:
</p>
 

  <ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1 mt-8">
  
  <li>Lifts with cutting-edge safety features and durable components</li>
  <li>Prompt installation to avoid any project delays</li>
  <li>Competitive pricing</li>
  <li>Excellent customer support</li>
  <li>Customized design to fit your building's unique features</li>
  </ul>

  <p className="mt-6">
We are committed to providing our clients with value for their money and you can rely on our professional services and premier lifts to make your building comfortable, convenient and safe.
  </p>
 
            </div>
            </div>
        </div>
      </section>
      
     </main>
  );
}