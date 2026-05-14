"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const features = [
  { label: "01 / CLASSROOM", desc: "Modern classroom facilities equipped with interactive digital teaching systems." },
  { label: "02 / PRACTICAL", desc: "Hands-on workshops within premium gym environments for real-world application." },
  { label: "03 / DIAGNOSTICS", desc: "Advanced movement analysis and performance testing diagnostic systems." },
  { label: "04 / MENTORSHIP", desc: "Direct, mentor-led development throughout the practical educational journey." },
  { label: "05 / STANDARDS", desc: "Professional educational standards mirroring elite sports science institutions." },
  { label: "06 / COACHING", desc: "Immersive coaching environments designed to bridge the gap between theory and mastery." },
];

export function LearningEnvironment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="environment" ref={ref} className="w-full bg-white py-28 lg:py-40 px-6 lg:px-12 border-t border-swiss-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-20 lg:gap-32">
          
          {/* Header Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-6">
              20 — Learning Experience
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-swiss-black mb-8">
              A Premium Educational<br />
              Environment
            </h2>
            <p className="text-swiss-black/60 text-lg font-light leading-relaxed max-w-md">
              IMSA combines premium classroom education with practical gym-based learning environments to develop confident, knowledgeable, and industry-ready professionals.
            </p>
          </motion.div>

          {/* Features Column */}
          <div className="flex flex-col border-t border-swiss-black/10">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="group py-8 lg:py-10 border-b border-swiss-black/10 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] items-center gap-6 lg:gap-12 cursor-default"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-swiss-black/40 group-hover:text-swiss-black transition-colors">
                  {f.label}
                </span>
                <p className="text-swiss-black font-display text-lg lg:text-xl font-black uppercase tracking-tight leading-tight">
                  {f.desc}
                </p>
                <div className="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-electric-lime">
                    <motion.polyline
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                      points="20 6 9 17 4 12"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
