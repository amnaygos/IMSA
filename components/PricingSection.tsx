"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";

const enquiryItems = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ), 
    label: "Individual Courses" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ), 
    label: "Bundle Packages" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ), 
    label: "Payment Plans" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
      </svg>
    ), 
    label: "Corporate Rates" 
  },
];

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-swiss-gray p-12 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle background text */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center opacity-[0.03] select-none">
            <span className="font-display text-[20vw] font-black uppercase tracking-tighter">PRICING</span>
          </div>

          <div className="relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-6">
              17 — Pricing Section
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              Flexible Course<br />
              Pathways
            </h2>
            <p className="text-swiss-black/60 text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Pricing structures are currently being finalised. Please contact our admissions team for individual course pricing, bundle package pricing, flexible payment options, corporate education enquiries, and group enrolment opportunities.
            </p>
            
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button
                size="lg"
                className="bg-swiss-black text-white hover:bg-electric-lime hover:text-swiss-black transition-colors font-bold px-16 h-16 text-base rounded-none"
              >
                Request Pricing Details
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Enquiry items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {enquiryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-white border border-swiss-black/5"
            >
              <div className="text-electric-lime opacity-80">
                {item.icon}
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-swiss-black/40 text-center">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
