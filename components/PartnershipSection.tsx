"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const trustIndicators = [
  "Globally Recognised",
  "Evidence-Based",
  "Officially Accredited",
];

import { Logo } from "@/components/Logo";

export function PartnershipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partnership" ref={ref} className="w-full bg-swiss-gray py-28 lg:py-40 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo variant="dark" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-8 h-8 flex items-center justify-center"
          >
            <span className="text-2xl font-light text-swiss-black/20">×</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/nasmlogo.svg" alt="NASM Logo" className="h-10 lg:h-16 w-auto" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-6">
            16 — Partnership Section
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
            Official NASM<br />
            Education Collaboration
          </h2>
          <p className="text-swiss-black/60 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            IMSA proudly operates in collaboration with the National Academy of Sports Medicine (NASM) — one of the world&apos;s most respected fitness education organisations. This collaboration provides students with globally recognised education pathways and internationally respected certification standards.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustIndicators.map((indicator, i) => (
            <motion.div
              key={indicator}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="bg-white p-6 border border-swiss-black/5 flex flex-col items-center gap-4 group hover:border-electric-lime transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-swiss-gray flex items-center justify-center group-hover:bg-swiss-black transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-electric-lime">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-swiss-black font-bold">
                {indicator}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
