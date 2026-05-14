"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
            22 — Testimonials & Success Stories
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
            Real Learning. <br />
            Real Development.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="bg-swiss-gray p-10 flex flex-col items-center text-center group relative overflow-hidden"
            >
               {/* Placeholder background text */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[100px] font-black opacity-[0.02] pointer-events-none select-none">
                QUOTE
               </div>

               <div className="w-20 h-20 rounded-full bg-white/50 border border-swiss-black/5 mb-8 flex items-center justify-center relative z-10 overflow-hidden">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-swiss-black/10">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
               </div>
               
               <h3 className="font-display text-lg font-black uppercase tracking-tight text-swiss-black/40 mb-2 relative z-10">Coming Soon</h3>
               <p className="text-swiss-black/30 text-sm leading-relaxed mb-8 relative z-10">
                Student success stories, testimonials, and professional development achievements will be showcased here as our community grows.
               </p>
               
               <div className="mt-auto relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-swiss-black/20">IMSA Community</span>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
