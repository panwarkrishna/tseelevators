import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestServicesSection from "@/components/BestServicesSection";

export const metadata: Metadata = {
  title: "Lift Installation Services in Delhi, Elevator Installation in Delhi-NCR",
  keywords: "Lift Installation Services in Delhi, Elevator Installation in Delhi-NCR, Lift Installation Services, Elevator Installation",
  description: "TSE Shaft Elevators - Expert Lift Installation Services in Delhi & Elevator Installation Services in Delhi-NCR. Safe, efficient & timely installation. Call +919971022555 for a free quote today!",
  alternates: { canonical: "https://tseelevators.com/lift-installation-services" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Lift Installation" description="Modern Lift Installations engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="./services/lift-installation1.webp" badgeText="Elevators" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="./services/lift-installation1.webp" alt="Modern Lift Installation installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div>
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
         



             <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Lift Installation</h2>

<p>Lift installation requires professional precision and we at TSE Shaft Elevator are here to provide you with safe and fast lift installation. Our professional lift installation services are available for residential, commercial and office lifts in Delhi-NCR.
  </p>
  <h3 className=" text-2xl font-bold text-slate-800 mt-8 mb-2">
Reliable Lift Installation Services in Delhi</h3>

<p>Our Lift Installation Services in Delhi are a reliable choice for seamless lift installation in residential, commercial and office buildings. Our professional lift installers take care of each step of the installation process to ensure your lift is installed to perfection. We always assess your requirements and the site to ensure seamless installation.
</p>
<p>
With our reliable and fast lift installation services in Delhi-NCR, you can rest assured that each step is taken to ensure your lift is safely installed.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">TSE Shaft Elevators: Professional Elevator Installation in Delhi-NCR</h3>

<p>TSE Shaft Elevators provides professional Elevator Installation Services in Delhi-NCR including Noida, Gurgaon, Haryana and more.
</p>



<p>Here are some features of our elevator installation services:</p>

   <ul className="list-disc list-inside text-slate-600 text-sm sm:text-base leading-relaxed">

  <li>Professional and experienced elevator installation technicians.</li>
  <li>On-time elevator installation with no delays </li>
    <li>Thorough safety checks at every step of installation</li>
  <li>Hassle-free and clean elevator installation process</li>
    <li>Post-installation support
</li>
</ul>





             
            </div>
          </div>
        </div>
      </section>
     <BestServicesSection />
     <TestimonialsSection />
    </main>
  );
}