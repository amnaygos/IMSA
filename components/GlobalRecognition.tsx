"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const benefits = [
  "Internationally Recognised NASM Certifications",
  "Science-Based Education & Evidence-Driven Methodologies",
  "Professional Mentorship & Practical Competency Development",
  "Real-World Applied Learning & Case Study Analysis",
  "Optional Proctored Examinations for Enhanced Global Credibility",
];

const stats = [
  { value: "100+", label: "Countries Recognised" },
  { value: "12k+", label: "Recognised Facilities" },
  { value: "20k+", label: "Annual Graduates" },
];

export function GlobalRecognition() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="recognition" ref={ref} className="w-full bg-swiss-black py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Globe Visual Placeholder */}
        <div className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 border border-white/10 rounded-full"
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
             {/* Abstract Globe */}
             <div className="w-64 h-64 rounded-full border-2 border-electric-lime/20 flex items-center justify-center relative">
                <div className="absolute inset-0 border border-electric-lime/10 rounded-full scale-[1.2] animate-pulse" />
                <span className="font-display text-4xl lg:text-6xl font-black text-white/10 select-none">GLOBAL</span>
                
                {/* Pinpoint markers with fixed positions to avoid hydration mismatch */}
                {[
                  { top: "20%", left: "30%" },
                  { top: "60%", left: "20%" },
                  { top: "40%", left: "70%" },
                  { top: "80%", left: "60%" },
                  { top: "15%", left: "65%" },
                  { top: "70%", left: "85%" },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: [0, 1, 0] } : {}}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.5, 
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="absolute w-2 h-2 bg-electric-lime rounded-full"
                    style={{
                      top: pos.top,
                      left: pos.left,
                    }}
                  >
                    <div className="absolute inset-0 bg-electric-lime rounded-full animate-ping" />
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 block mb-4">
              18 — Global Recognition & Professional Positioning
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white">
              Internationally Respected<br />
              Education Pathways
            </h2>
          </motion.div>

          <ul className="flex flex-col gap-4">
            {benefits.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 text-white/50 text-sm leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric-lime mt-1.5 shrink-0" />
                {benefit}
              </motion.li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="font-display text-2xl lg:text-3xl font-black text-white">{stat.value}</span>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
