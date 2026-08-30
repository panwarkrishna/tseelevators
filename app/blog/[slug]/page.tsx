import type { Metadata } from "next";
import GlobalPageHero from "@/components/GlobalPageHero";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Tag,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Quote,
  MessageCircle,
} from "lucide-react";

const ALL_BLOGS = [
  {
    slug: "why-do-customers-prioritize-us-for-their-elevator-needs",
    title: "Why Do Customers Prioritize Us For Their Elevator Needs",
    date: "February 17, 2024",
    readTime: "5 min read",
    category: "Company Insights",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg",
    content: `We are the leading elevator manufacturers in Delhi NCR, offering bespoke vertical mobility solutions for residential villas, commercial high-rises, and industrial infrastructures. Our core philosophy is anchored in German engineering precision, uncompromised passenger safety, and high-efficiency performance that delivers seamless operation day after day.`,
  },
  {
    slug: "luxury-lift-manufacturers-in-gurgaon",
    title: "Luxury Lift Manufacturers in Gurgaon",
    date: "February 17, 2024",
    readTime: "4 min read",
    category: "Luxury Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/01/Domestic-Lifts-800x473.jpeg",
    content: `In high-end villas and premium commercial spaces across Gurgaon, elevators are more than just a utility—they are an architectural centerpiece. We craft custom panoramic capsule lifts, etched bronze finishes, and ultra-quiet hydraulic systems designed to complement luxury interior aesthetics.`,
  },
  {
    slug: "lift-manufacturers-in-delhi",
    title: "Lift Manufacturers in Delhi",
    date: "February 17, 2024",
    readTime: "6 min read",
    category: "Residential Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-1-761x473.jpg",
    content: `Living in Delhi and looking to enhance your home's accessibility and market value? Our residential lifts are tailored for retrofit and new construction projects alike, offering space-saving machine-room-less (MRL) technology that fits seamlessly without extensive civil renovations.`,
  },
  {
    slug: "the-best-lift-manufacturers-in-mohali",
    title: "The Best Lift Manufacturers in Mohali",
    date: "April 9, 2026",
    readTime: "4 min read",
    category: "Industry News",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-2-723x473.jpg",
    content: `Rapid urban transformation in Mohali demands cutting-edge vertical transit. TSE Elevators provides durable, energy-efficient elevators engineered to handle continuous high-traffic demands in commercial complexes and luxury housing societies.`,
  },
  {
    slug: "understanding-domestic-home-lifts",
    title: "Understanding Domestic Home Lifts and Modern Technology",
    date: "February 17, 2024",
    readTime: "5 min read",
    category: "Home Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-3-464x473.jpg",
    content: `Modern domestic lifts combine compact hydraulic power units with smart IoT sensors, ensuring whisper-quiet rides, automated emergency lowering during power cuts, and minimal electrical power consumption.`,
  },
  {
    slug: "capsule-elevators-blending-architecture-performance",
    title: "Capsule Elevators: Blending Architecture with Performance",
    date: "February 17, 2024",
    readTime: "4 min read",
    category: "Capsule Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-6-840x473.jpg",
    content: `Panoramic glass elevators turn everyday vertical transport into an immersive visual experience. TSE Elevators builds customized polygonal, semi-circular, and fully circular glass cabins for prestigious hotels, malls, and penthouses.`,
  },
];

export async function generateStaticParams() {
  return ALL_BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

type Props = {
  params: Promise<{ slug?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const blog = ALL_BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Blog Not Found – TSE Elevators" };
  }

  return {
    title: `${blog.title} – TSE Elevators`,
    description: blog.content.slice(0, 155),
    alternates: {
      canonical: `https://tseelevators.com/blog/${blog.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const blog = ALL_BLOGS.find((b) => b.slug === slug) || ALL_BLOGS[0];
  const relatedArticles = ALL_BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <main className="w-full bg-slate-950 text-white selection:bg-[#D6362C] selection:text-white overflow-x-hidden">
      {/* 1. Global Reusable Hero */}
      <GlobalPageHero
        title={blog.title}
        description={`Published on ${blog.date} • Categorized under ${blog.category}`}
        backgroundImage={blog.image}
        badgeText={blog.category}
      />

      {/* 2. Main Content & Sidebar Grid */}
      <section className="relative w-full py-10 lg:py-15 overflow-hidden">
        {/* Background Architectural Grid Accent */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          
          {/* Back Navigation & Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-white/10 mb-8 sm:mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 transition-all hover:border-[#D6362C] hover:bg-[#D6362C] hover:text-white self-start"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Articles</span>
            </Link>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#E85C4A]" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#E85C4A]" />
                {blog.readTime || "5 min read"}
              </span>
            </div>
          </div>

          {/* Dual Column Layout: Content (Col 8) + Sidebar (Col 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* ================= LEFT COLUMN: ARTICLE CONTENT (Col 8) ================= */}
            <article className="lg:col-span-8 space-y-8 sm:space-y-10 min-w-0">
              
              {/* Featured Cover Card with Zoom Effect */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl aspect-[16/9]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10 max-w-[85%] sm:max-w-none">
                  {/* Ellipsis applied here for mobile responsiveness */}
                  <span className="inline-block truncate max-w-full rounded-full bg-[#D6362C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Key Takeaways Callout Box */}
              <div className="rounded-3xl border border-[#D6362C]/30 bg-gradient-to-br from-[#D6362C]/10 via-slate-900 to-slate-900/90 p-5 sm:p-8 backdrop-blur-xl">
                <div className="flex items-center gap-2.5 text-[#FF6B5A] mb-4">
                  <ShieldCheck className="h-6 w-6" />
                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide">
                    Executive Summary & Takeaways
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E85C4A] mt-0.5" />
                    <span>Adherence to rigorous EN-81 European and BIS Indian safety codes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E85C4A] mt-0.5" />
                    <span>Turnkey installation with 24/7 dedicated AMC support across Delhi-NCR.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E85C4A] mt-0.5" />
                    <span>Machine-Room-Less (MRL) design saving up to 40% electrical power consumption.</span>
                  </li>
                </ul>
              </div>

              {/* Article Prose Body */}
              <div className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-6 break-words">
                <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed">
                  {blog.content}
                </p>

                <p>
                  Elevator engineering is an intricate synthesis of mechanical precision, electrical safety, and structural aesthetics. Whether conceptualizing a private villa residence in Gurgaon or a high-traffic corporate tower in Delhi, vertical transport systems must combine seamless acceleration with robust fail-safe protections.
                </p>

                {/* Elegant Pull Quote Box */}
                <div className="my-8 rounded-2xl border-l-4 border-[#D6362C] bg-white/5 p-5 sm:p-6 backdrop-blur-md">
                  <Quote className="h-8 w-8 text-[#E85C4A]/40 mb-2" />
                  <p className="italic text-slate-200 text-base sm:text-lg font-serif leading-relaxed">
                    &ldquo;Reliability in vertical transit is not just about moving between floors—it is about passenger peace of mind and architectural distinction.&rdquo;
                  </p>
                  <span className="mt-3 block text-xs font-bold uppercase tracking-widest text-[#E85C4A]">
                    — TSE Engineering Advisory
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight pt-4">
                  Precision Engineering by TSE Elevators
                </h3>

                <p>
                  Every lift commissioned by TSE Elevators undergoes rigorous multi-stage quality verification—from load testing and automated emergency braking to governor calibration and smart harmonic filter verification.
                </p>
              </div>

              {/* Article Bottom Social Share Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-md">
                <div className="flex items-center gap-2 min-w-0">
                  <Tag className="h-4 w-4 text-[#E85C4A] shrink-0" />
                  {/* Ellipsis applied here for mobile responsiveness */}
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 truncate">
                    Topic: {blog.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Share:</span>
                  
                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>

                  {/* Twitter / X */}
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#D6362C] hover:text-white transition-all">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </article>

            {/* ================= RIGHT COLUMN: STICKY SIDEBAR (Col 4) ================= */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              
              {/* Card 1: Custom Lift Consultation CTA */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#1B2A5E]/40 p-6 sm:p-8 shadow-2xl">
                <span className="inline-block rounded-full bg-red-500/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF6B5A]">
                  Direct Consultation
                </span>
                <h4 className="mt-4 text-xl font-extrabold text-white">
                  Planning an Elevator Project?
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Speak directly with our vertical mobility specialists for custom cabin dimensions, shaft civil drawings, and instant price estimates.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D6362C] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#b52a21] active:scale-95"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Request Custom Quote</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Company Verification Badge */}
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Why Choose TSE
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-[#FF6B5A]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Fully Independent OEM</h5>
                      <p className="text-xs text-slate-400">Complete control over manufacturing, genuine spare parts, and custom finishes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">24/7 Breakdown Support</h5>
                      <p className="text-xs text-slate-400">Certified technicians stationed across Delhi, Gurgaon, Noida, and NCR.</p>
                    </div>
                  </div>
                </div>
              </div>

            </aside>

          </div>

          {/* ================= RELATED PUBLICATIONS GRID WITH IMAGES & ALT TAGS ================= */}
          <div className="mt-10 sm:mt-15 pt-8 sm:pt-10 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E85C4A]">
                  Curated Insights
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Related Publications
                </h3>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
              >
                <span>View All</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all duration-300 hover:border-[#D6362C]/50 hover:-translate-y-1.5 shadow-xl min-w-0"
                >
                  <div>
                    {/* Related Article Image with Zoom & SEO Alt Tag */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-slate-800">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10 max-w-[80%]">
                        {/* Ellipsis applied here for mobile responsiveness */}
                        <span className="inline-block truncate max-w-full rounded-full bg-slate-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E85C4A] backdrop-blur-md border border-white/10">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>{item.date}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF6B5A] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E85C4A]">
                    <span>Read Full Story</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}