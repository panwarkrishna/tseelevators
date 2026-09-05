import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, Zap, Sliders, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Residential Lift Manufacturers in Delhi, Residential Elevator Suppliers in Delhi-NCR",
  keywords: "Residential Lift Manufacturers in Delhi, Residential Elevator Suppliers in Delhi-NCR, Residential Lift Manufacturers, Residential Elevator Suppliers, Residential Lift in Delhi, Residential Elevator in Delhi-NCR",
  description: "TSE Shaft Elevators - Top Residential Lift Manufacturers in Delhi & Residential Elevator Suppliers in Delhi-NCR. Safe, elegant & space-efficient lifts for homes. Call +919971022555 for a free consultation today!",
  alternates: { canonical: "https://tseelevators.com/tseelevators/residential-lifts" },
};

export default function ResidentialLiftPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      <GlobalPageHero title="Residential Lift" description="Reliable and comfortable residential lifts designed for homes, apartments, and housing societies." backgroundImage="https://aditechinfo.com/tseelevators/product-img/home-lift.webp" badgeText="Home Lifts" />
      <section className="sm:py-10 lg:py-15">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10"><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white"><ArrowLeft className="h-4 w-4" /><span>Back to Home</span></Link></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-[4/3]">
                <Image src="https://aditechinfo.com/tseelevators/product-img/home-lift.webp" alt="Residential Lift for homes and apartment buildings" fill priority className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10"><span className="rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">Smooth & Safe</span></div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-7 sm:space-y-7">
              <div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Residential Lift</h2>
                <p className="text-md text-slate-600">At TSE Shaft Elevators, we present safe and elegant lifts in residential buildings. A residential lift adds comfort, luxury, and space-saver capabilities to every family member, making it easy for children and aged people. Our lifts combine high quality and modernism to offer a comfortable ride in your family house or home.</p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-2">Best Residential Lift Manufacturers In Delhi</h3>
                <p className="text-md text-slate-600">TSE Shaft Elevators is known to be among the best Residential Lift Manufacturers in Delhi. We offer residential lifts that are manufactured by combining advanced technology and a reliable material with high-end designs. All our residential lifts are engineered to fit in small and large houses in Delhi, Noida, Gurgaon, and Faridabad.</p>

                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-2">Reliable Residential Elevator Suppliers In Delhi-NCR</h3>
                <p className="text-md text-slate-600">TSE Shaft Elevators is a reliable Residential Elevator Supplier in Delhi-NCR offering home lift installation in Faridabad, Delhi, Noida, Gurgaon, Ghaziabad, and Meerut. We have professional lift installers who offer onsite visits to every customer’s location to recommend the best residential lift design. Our residential lifts have advanced technology features and are dependable on all levels. We ensure your total satisfaction with every residential lift installation service in the NCR region and provide complete after-sale support.</p>

               </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </main>
  );
}