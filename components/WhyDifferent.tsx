"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const traditional = [
  "Theory-only learning",
  "Certification at the end",
  "Limited practical exposure",
  "No career support",
  "No mentorship structure",
];

const imsa = [
  "Science-based education",
  "Applied practical learning",
  "Real-world coaching integration",
  "Mentor-led development",
  "Professional classroom environments",
  "Hands-on workshops",
  "Performance-focused learning",
  "Career development support",
  "Industry readiness preparation",
];

export function WhyDifferent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-different" ref={ref} className="w-full bg-swiss-gray py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
          08 — Why IMSA Is Different
        </span>
        <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
          Beyond<br />
          Certification
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-swiss-black/10">
        {/* Traditional */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-swiss-white/60 p-10 lg:p-14"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.4em] text-swiss-black/30 mb-8">
            Traditional Education
          </h3>
          <ul className="flex flex-col gap-4">
            {traditional.map((item) => (
              <li key={item} className="flex items-center gap-4 text-swiss-black/40 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-30">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* IMSA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-swiss-black p-10 lg:p-14"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.4em] text-white mb-8">
            The IMSA Approach
          </h3>
          <ul className="flex flex-col gap-4">
            {imsa.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-4 text-white text-sm"
              >
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 300 }}
                  width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-electric-lime"
                >
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
