"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// ================= FAQ DATA =================
// NOTE: Q2 and Q3 are near-duplicates in both question and answer text.
// Kept as provided, but consider merging them or making Q3 distinct
// (e.g. "What factors affect home lift installation cost?") — duplicate
// Q&A pairs dilute FAQPage schema value and can look like a content
// error to users and to Google.

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    question: "Who are the best lift manufacturers in Delhi?",
    answer:
      "TSE Shaft Elevators is a trusted name when it comes to lifts in Delhi, we are a manufacturer of lifts in Delhi. We deal in all kinds of lifts including passenger lift, home lift, hospital lift and commercial lift. We use high quality material and modern technology to manufacture commercial and residential lifts in Delhi for any society.",
  },
  {
    question: "How much does a home lift cost in Delhi-NCR?",
    answer:
      "The cost of home lift in Delhi NCR varies according to size and capacity. TSE Shaft Elevators provide affordable cost home lift in Delhi. Get free quotation and expert advice for all your lift requirements. We provide customized solutions for residential and commercial purposes.",
  },
  {
    question: "How much does a home lift typically cost in Delhi-NCR?",
    answer:
      "The cost may vary depending on several factors such as the type and design, capacity, height of the lift, and the finishing. TSE Shaft Elevators ensures to provide affordable prices with no hidden charges, contact us today to get a free quote and customized consultation according to your building's requirement.",
  },
  {
    question:
      "Do you provide lift installation and after-sales service in Delhi-NCR?",
    answer:
      "Yes, we do. TSE Shaft Elevators offers lift installation services in Delhi, Noida, Gurugram, Faridabad, Ghaziabad, and the neighboring regions. We also provide maintenance services like AMC and after-sales services regarding lifts and their repairing.",
  },
  {
    question: "Can I get a customized design for my building?",
    answer:
      "TSE Shaft Elevators specializes in customized elevators. Our professional team works closely with you to understand your building's requirement and creates an exquisite design and plan for your desired lift.",
  },
];

// ================= FAQ SECTION =================

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // ================= FAQPage STRUCTURED DATA =================
  // Enables Google rich results (expandable FAQ snippets in search).

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-[#ffffff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">

        {/* ================= HEADING ================= */}

        <div className="mb-10 text-center lg:mb-14">
          {/* <span className="text-xs font-bold uppercase tracking-widest text-[#D6362C]">
            FAQ&apos;s
          </span> */}

          <h2 className="mt-3 text-2xl font-extrabold text-[#102D5E] sm:text-3xl lg:text-4xl">
            Frequently Asked <span className="text-[#D6362C]">Questions</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
            Answers to common questions about our lifts, installation,
            and services across Delhi-NCR.
          </p>
        </div>

        {/* ================= ACCORDION ================= */}

        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-colors ${
                  isOpen ? "border-[#D6362C]/40" : "border-slate-100"
                }`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-bold text-[#102D5E] sm:text-base">
                      {item.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#D6362C] text-white"
                          : "bg-slate-100 text-[#102D5E]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
