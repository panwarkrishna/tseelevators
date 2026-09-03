import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, PhoneCall, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Elevator Solutions in Delhi-NCR ",
  keywords: "Elevator Solutions, Elevator Manufacturer, Elevator Supplier, Custom Elevators, Elevator Systems",
  description: "TSE Shaft Elevators - Trusted Elevator Solutions in Delhi-NCR. Custom designs, expert installation & reliable service. Call +919971022555 for a free quote today!",
  alternates: {
    canonical: "https://tseelevators.com/tseelevators/products",
  },
};

type ProductItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tag: string;
  altText: string;
};

const ALL_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Home Lift",
    category: "Home Lifts",
    tag: "Perfect for Homes",
    description: "Compact and reliable domestic lifts designed for private homes, villas, and duplex residences with smooth and safe vertical transportation.",
    image: "https://aditechinfo.com/tseelevators/product-img/home-lift.webp",
    href: "/home-lift",
    altText: "Home Lift for homes, villas, and residential properties",
  },
  {
    id: 2,
    title: "Domestic Lift",
    category: "Home Lifts",
    tag: "Perfect for Homes",
    description: "Compact and reliable domestic lifts designed for private homes, villas, and duplex residences with smooth and safe vertical transportation.",
    image: "https://aditechinfo.com/tseelevators/product-img/domestic.webp",
    href: "/domestic-lifts",
    altText: "Domestic Lift for homes, villas, and residential properties",
  },
  {
    id: 3,
    title: "Residential Lift",
    category: "Home Lifts",
    tag: "Smooth & Safe",
    description: "Reliable and comfortable residential lifts designed for homes, apartments, and housing societies with a focus on safety and smooth operation.",
    image: "https://aditechinfo.com/tseelevators/product-img/home-lift.webp",
    href: "/residential-lifts",
    altText: "Residential Lift for homes and apartment buildings by TSE Elevators",
  },
  {
    id: 4,
    title: "Passenger Lift",
    category: "Elevators",
    tag: "Premium Comfort",
    description: "Modern passenger lifts engineered to provide safe, smooth, and efficient vertical transportation for residential and commercial buildings.",
    image: "https://aditechinfo.com/tseelevators/product-img/passenger-lift.webp",
    href: "/passenger-lifts",
    altText: "Modern Passenger Lift installation for commercial and residential buildings",
  },
  {
    id: 5,
    title: "Commercial Lift",
    category: "Elevators",
    tag: "Heavy Duty",
    description: "High-performance commercial lifts designed for offices, hotels, shopping centres, hospitals, and other high-traffic commercial environments.",
    image: "https://aditechinfo.com/tseelevators/product-img/commercial-lift.webp",
    href: "/commercial-lifts",
    altText: "Commercial Lift for offices, hotels, hospitals and commercial buildings",
  },
  {
    id: 6,
    title: "Pitless Lift",
    category: "Home Lifts",
    tag: "Space Saving",
    description: "Space-efficient pitless lift solutions designed for buildings where conventional deep lift pits are difficult or impractical to install.",
    image: "https://aditechinfo.com/tseelevators/product-img/pitlesslift.webp",
    href: "/pitless-lifts",
    altText: "Space-saving Pitless Lift solution for buildings with limited construction space",
  },
  {
    id: 7,
    title: "Goods Lift",
    category: "Industrial Lifts",
    tag: "Industrial Strength",
    description: "Heavy-duty goods lifts built for safe and efficient transportation of materials, equipment, and goods across commercial and industrial facilities.",
    image: "https://aditechinfo.com/tseelevators/product-img/goods-lift.webp",
    href: "/goods-lifts",
    altText: "Heavy-duty Goods Lift for industrial and commercial material transportation",
  },
  {
    id: 8,
    title: "Glass Lift",
    category: "Home Lifts",
    tag: "Modern Design",
    description: "Elegant glass lifts featuring modern architectural styling, panoramic visibility, and smooth operation for premium homes and contemporary buildings.",
    image: "https://aditechinfo.com/tseelevators/product-img/glass-lift.webp",
    href: "/glass-lifts",
    altText: "Modern Glass Lift with panoramic design for homes and premium buildings",
  },
  {
    id: 9,
    title: "Hydraulic Lift",
    category: "Home Lifts",
    tag: "Smooth Lift Tech",
    description: "Efficient hydraulic lift solutions ideal for low-rise buildings, villas, and applications requiring smooth movement and dependable performance.",
    image: "https://aditechinfo.com/tseelevators/product-img/hydraulic-lift.webp",
    href: "/hydraulic-lifts",
    altText: "Hydraulic Lift system for residential and commercial buildings",
  },
];

export default function AllProductsPage() {
  return (
    <main className="w-full bg-white text-slate-900 selection:bg-[#D6362C] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <GlobalPageHero
        title="Our Products Collection"
        description="Explore our comprehensive range of high-performance elevators, customized to elevate comfort, safety, and modern architectural aesthetics."
        backgroundImage="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg"
        badgeText="Engineered For Excellence"
      />

      {/* ================= PRODUCTS GRID SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        
        {/* Background Architectural Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Subtle Red Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          {/* Section Heading Header */}
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#D6362C]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
                World-Class Vertical Mobility
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]">
              Innovative <span className="text-[#D6362C]">Elevator Systems</span>
            </h2>

            <div className="mt-3.5 h-1 w-20 rounded-full bg-[#D6362C]" />

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              From luxurious private home lifts to high-capacity commercial and industrial goods elevators, discover solutions tailored for your precise architectural requirements.
            </p>
          </div>

          {/* PRODUCTS GRID */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f8f8] shadow-sm transition-all duration-500 hover:border-[#D6362C]/50 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.altText}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                  {/* Top Badge Tag */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6362C]">
                      {product.category}
                    </span>
                    <h3 className="mt-1.5 text-xl font-extrabold text-slate-900 sm:text-2xl group-hover:text-[#D6362C] transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 transition-colors hover:text-[#D6362C]"
                    >
                      <span>View More</span>
                      <ArrowUpRight className="h-4 w-4 text-[#D6362C] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm transition-all duration-300 group-hover:bg-[#D6362C] group-hover:border-[#D6362C] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom Red Accent Line */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#D6362C] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* ================= BOTTOM HELP / CTA BANNER ================= */}
          <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f8f8] p-8 sm:p-12 shadow-sm relative">
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#D6362C]/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#D6362C] mb-3 border border-red-500/20">
                  Need Custom Engineering?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Looking for a custom lift size or unique cabin finish?
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Our structural engineers can visit your site in Delhi-NCR or Mohali to provide tailored consultation, shaft measurements, and free quotes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D6362C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#B52A21] hover:shadow-xl active:scale-95"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Request Site Visit</span>
                </Link>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <ShieldCheck className="h-5 w-5 text-[#D6362C]" />
                  <span>Certified EN-81 Compliance</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}