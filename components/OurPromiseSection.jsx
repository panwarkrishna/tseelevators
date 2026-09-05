"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function OurPromiseSection() {
  return (
    <section className="relative w-full overflow-hidden py-10 text-slate-900 lg:py-15">
      {/* Background Architectural Technical Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      {/* Background Subtle Color Glow Accents */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#D6362C]/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#1B2A5E]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">


     {/* ================= RIGHT COLUMN: FRAMED IMAGE (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -bottom-4 -left-4 z-0 hidden h-full w-full rounded-3xl bg-[#1B2A5E] sm:block" />

              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl">
                <Image
                  src="https://tseelevators.com/wp-content/uploads/2024/03/Gallery-img-4.jpg"
                  alt="TSE Shaft Elevators — our promise"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>



          {/* ================= LEFT COLUMN: CONTENT (Col 7) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center text-left lg:col-span-7"
          >
            

   

            <div className="mt-8 ">
              
         
<p className="text-md text-slate-600 mb-3">
              Welcome to <strong>TSE Shaft Elevators,</strong> the name you can trust for lifts and elevators in Delhi-NCR. It is important to select the right elevator partner to ensure long term safety and performance.
</p>

<p className="text-md text-slate-600">
We began with one goal – to provide safe, smooth and stylish elevators that last for years to homes and buildings.
</p>

 <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Luxury Elevator Company in Delhi-NCR</h3>

<p className="text-md text-slate-600">
Today, we are proud to be recognized as a prominent Luxury Elevator Company in Delhi-NCR.
It is important to select the right elevator partner to ensure long term safety and performance. From simple home lifts to grand high-end elevators for villas, hotels and premium buildings we design every lift with care, style and top quality.
</p>

<h3 className="text-2xl font-bold text-slate-800 mt-8 mb-2">Our Work</h3>

<p className="text-md text-slate-600">
We manufacture and supply many types of lifts, including passenger lifts, home lifts, hydraulic lifts, glass lifts and goods lifts. All the elevators are made from durable material and state of the art technology. For those who want a hint of luxury in their building we add elegant designs and finishes.
</p>


            </div>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}
