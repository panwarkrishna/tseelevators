import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Luxury Elevator Manufacturers in Delhi, Luxury Elevator Suppliers in Delhi-NCR",
  keywords: "Luxury Elevator Manufacturers in Delhi, Luxury Elevator Suppliers in Delhi-NCR, Luxury Elevator Manufacturers, Luxury Elevator Suppliers, Luxury Elevator in Delhi, Luxury Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Premium Luxury Elevator Manufacturers in Delhi & Luxury Elevator Suppliers in Delhi-NCR. Elegant designs, top-notch quality & safety. Call +919971022555 for a free consultation! ",
  alternates: { canonical: "https://tseelevators.com/luxury-elevator" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Luxury Elevator" description="Modern Lift Maintenances engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="../luxury-elevator.webp" badgeText="Luxury Elevator" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="../luxury-elevator.webp" alt="Luxuary Elevator" title="Luxuary Elevator" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div> */}
              </div>
             
            </div>
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
               


<h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">

Luxury Elevator</h2>


<p> Would you like to get a luxury elevator installed in your building or house? A luxury elevator will make your building look more upscale and provide comfort to the visitors and residents of the building. Our luxury elevators are made with the finest finishing and materials to offer comfort and elegance to the users of the elevator.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2"> 
Premium Luxury Elevator Manufacturers in Delhi</h3>

<p> We are one of the best Luxury Elevator Manufacturers in Delhi offering luxury lift services in Delhi and other parts of India. The luxury elevator we produce has exquisite finishing and uses the best technology to provide comfort to all our customers. Our luxury lifts have beautiful cabins with amazing designs and high-quality panels to suit the needs of all our clients.
</p>


             
            </div>
          </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-12 space-y-5">

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2"> 
TSE Shaft Elevators – Best Luxury Elevator Suppliers in Delhi-NCR
</h3>

<p> 
TSE Shaft Elevators is a registered company that provides luxury elevator services in Delhi, Noida, Gurugram, and Haryana. Below are some of the reasons why you should consider buying luxury elevators from us:
</p>

<ul className="list-disc list-outside pl-5 text-black leading-relaxed space-y-1">
  <li>Elegant designs that use the best finishing materials</li>
  <li>Quiet and smooth elevator that will provide comfort to the users</li>
  <li>Customized interior options that will suit your needs</li>
  <li>Luxury elevator with the best safety features</li>
  <li>Our elevators are designed and installed by professional technicians</li>
</ul>

<p>
If you want the best Luxury <strong>Elevator Suppliers in Delhi-NCR</strong> to install a luxury elevator in your building or house, contact us today.

</p>

            </div>
            </div>
        </div>
      </section>
                   <BestProductsSection />
      
 
    </main>
  );
}