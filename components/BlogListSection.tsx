"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowUpRight, PlusCircle } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
};

const ALL_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Why Do Customers Prioritize Us For Their Elevator Needs",
    excerpt: "We are the leading elevator manufacturers in Delhi NCR, offering our services to residential, commercial, public transportation buildings, and much more.",
    date: "February 17, 2024",
    category: "Company Insights",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg",
    slug: "why-do-customers-prioritize-us-for-their-elevator-needs",
  },
  {
    id: 2,
    title: "Luxury Lift Manufacturers in Gurgaon",
    excerpt: "Are you searching for the finest Luxury Elevator Manufacturers in Delhi-NCR and lift repair services in the region? Look no further! TSE Elevators is your go-to destination.",
    date: "February 17, 2024",
    category: "Luxury Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/01/Domestic-Lifts-800x473.jpeg",
    slug: "luxury-lift-manufacturers-in-gurgaon",
  },
  {
    id: 3,
    title: "Lift Manufacturers in Delhi",
    excerpt: "Living in Delhi and seeking your gateway to vertical luxury, speed, and convenience? We are your Premier Lift Manufacturers in Delhi, dedicated to enhancing your living experience.",
    date: "February 17, 2024",
    category: "Residential Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-1-761x473.jpg",
    slug: "lift-manufacturers-in-delhi",
  },
  {
    id: 4,
    title: "The Best Lift Manufacturers in Mohali",
    excerpt: "In today's bustling urban landscapes, where skyscrapers dominate the skyline and multi-story buildings are common, elevators have become an indispensable part of our daily lives.",
    date: "April 9, 2026",
    category: "Industry News",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-2-723x473.jpg",
    slug: "the-best-lift-manufacturers-in-mohali",
  },
  {
    id: 5,
    title: "Understanding Domestic Home Lifts and Modern Technology",
    excerpt: "Are you a homeowner in Delhi-NCR looking to enhance your property's value and convenience? Look no further than TSE Elevators, your trusted partner in vertical mobility.",
    date: "February 17, 2024",
    category: "Home Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-3-464x473.jpg",
    slug: "understanding-domestic-home-lifts",
  },
  {
    id: 6,
    title: "Capsule Elevators: Blending Architecture with Performance",
    excerpt: "Capsule lifts in Delhi serve as a distinctive architectural feature that elevates and enhances the allure of a building while offering panoramic views.",
    date: "February 17, 2024",
    category: "Capsule Lifts",
    image: "https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-6-840x473.jpg",
    slug: "capsule-elevators-blending-architecture-performance",
  },
];

const POSTS_PER_PAGE = 3; // Initial load par 3 posts dikhengi

export default function BlogListSection() {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const currentPosts = ALL_BLOG_POSTS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_BLOG_POSTS.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, ALL_BLOG_POSTS.length));
  };

  return (
    <section className="relative w-full py-10 lg:py-15 text-white overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        
        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-[#D6362C]/50 hover:-translate-y-1.5"
            >
              <div>
                {/* Blog Image with SEO Alt Tag & Lazy Load */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-800">
                  <Image
                    src={post.image}
                    alt={post.title} 
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-slate-950/80 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E85C4A] backdrop-blur-md border border-white/10">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Calendar className="h-3.5 w-3.5 text-[#E85C4A]" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#FF6B5A] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E85C4A] transition-colors hover:text-white"
                >
                  <span>Read More</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#D6362C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-[#b52a21] hover:shadow-red-900/40 active:scale-95 cursor-pointer"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Load More Blogs</span>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}