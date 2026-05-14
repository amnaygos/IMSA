"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const pillars = [
  {
    num: "01",
    title: "Science-Led Foundations",
    desc: "Every course is grounded in evidence-based sports science. Students develop a deep understanding of the principles behind what they teach.",
  },
  {
    num: "02",
    title: "Applied Practical Integration",
    desc: "Theory is only the beginning. Students spend significant time on the gym floor applying concepts in real coaching environments under faculty supervision.",
  },
  {
    num: "03",
    title: "Mentor-Led Development",
    desc: "Learning is guided by experienced practitioners who bring real-world coaching knowledge into the classroom.",
  },
  {
    num: "04",
    title: "Industry-Ready Outcomes",
    desc: "Every element of the curriculum is designed to produce professionals who are immediately effective in the real world.",
  },
];

export function IMSAMethod() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="imsa-method" ref={containerRef} className="w-full bg-swiss-black py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-end mb-24 lg:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 block mb-6">
              05 — The IMSA Method
            </span>
            <h2 className="font-display text-5xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-white">
              A Different Kind<br />
              of Education
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 text-xl lg:text-2xl font-light leading-relaxed max-w-xl"
          >
            Most fitness education stops at certification. IMSA is built around a deliberate, end-to-end teaching methodology designed to develop genuinely competent practitioners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className={`group p-10 lg:p-16 border-b border-white/10 relative overflow-hidden ${
                i % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              {/* Background Number */}
              <span className="absolute -bottom-8 -right-8 font-display text-[12rem] lg:text-[18rem] font-black text-white/[0.03] select-none group-hover:text-electric-lime/[0.05] transition-colors duration-700">
                {pillar.num}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-[1px] bg-electric-lime mb-8 group-hover:w-24 transition-all duration-500" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-4">
                  Phase {pillar.num}
                </span>
                <h3 className="font-display text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-6">
                  {pillar.title}
                </h3>
                <p className="text-white/40 text-base lg:text-lg leading-relaxed font-light max-w-md group-hover:text-white/70 transition-colors duration-500">
                  {pillar.desc}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
