import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestProductsSection from "@/components/BestProductsSection";

export const metadata: Metadata = {
  title: "Lift Maintenance Services in Delhi, Elevator Lift Maintenance in Delhi-NCR",
  keywords: "Lift Maintenance Services in Delhi, Elevator Lift Maintenance in Delhi-NCR, Lift Maintenance Services, Elevator Lift Maintenance",
  description: "TSE Shaft Elevators - Reliable Lift Maintenance Services in Delhi & Elevator Maintenance Services in Delhi-NCR. Regular upkeep for safe, smooth performance. Call +919971022555 for a free quote! ",
  alternates: { canonical: "https://tseelevators.com/luxury-elevator" },
};

export default function PassengerLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Luxury Elevator" description="Modern Lift Maintenances engineered to provide safe, smooth, and efficient vertical transportation." backgroundImage="./services/luxury-elevator.webp" badgeText="Luxury Elevator" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="./services/luxury-elevator.webp" alt="Modern Lift Maintenance installation for commercial and residential buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Premium Comfort</span></div> */}
              </div>
             
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
               


<h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">

Luxury Elevator</h2>


<p> Would you like to get a luxury elevator installed in your building or house? A luxury elevator will make your building look more upscale and provide comfort to the visitors and residents of the building. Our luxury elevators are made with the finest finishing and materials to offer comfort and elegance to the users of the elevator.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2"> 
Premium Luxury Elevator Manufacturers in Delhi</h3>

<p> We are one of the best Luxury Elevator Manufacturers in Delhi offering luxury lift services in Delhi and other parts of India. The luxury elevator we produce has exquisite finishing and uses the best technology to provide comfort to all our customers. Our luxury lifts have beautiful cabins with amazing designs and high-quality panels to suit the needs of all our clients.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2"> 
TSE Shaft Elevators – Best Luxury Elevator Suppliers in Delhi-NCR
</h3>

<p> 
TSE Shaft Elevators is a registered company that provides luxury elevator services in Delhi, Noida, Gurugram, and Haryana. Below are some of the reasons why you should consider buying luxury elevators from us:
</p>

<ul>

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
      
      <TestimonialsSection />
    </main>
  );
}