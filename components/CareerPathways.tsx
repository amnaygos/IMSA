"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const pathways = [
  "Certified Personal Trainer",
  "Corrective Exercise Specialist",
  "Performance Coach",
  "Strength & Conditioning Coach",
  "Online Coach",
  "Wellness Consultant",
  "Fitness Instructor",
  "Group Exercise Instructor",
  "Gym Floor Coach",
];

const support = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ), 
    label: "CV Development" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ), 
    label: "Career Mentorship" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ), 
    label: "Interview Preparation" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ), 
    label: "Industry Networking" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ), 
    label: "MTM Group Placement" 
  },
];

export function CareerPathways() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="careers" ref={ref} className="w-full bg-swiss-black py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 block mb-4">
          10 — Student Outcomes & Career Pathways
        </span>
        <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white">
          Developing Industry-Ready<br />
          Professionals
        </h2>
        <p className="mt-6 text-white/40 text-base max-w-xl leading-relaxed">
          Our programmes prepare students for successful careers across the fitness, wellness, and performance industries.
        </p>
      </motion.div>

      {/* Pathway diagram — branching tree */}
      <div className="relative flex flex-col items-center mb-20">
        {/* Root node */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          className="bg-swiss-black text-white border border-electric-lime font-display text-sm font-black uppercase tracking-tight px-8 py-4 mb-0 z-10 relative"
        >
          IMSA Graduate
        </motion.div>

        {/* Vertical connector */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ transformOrigin: "top" }}
          className="w-px h-10 bg-electric-lime/40"
        />

        {/* Career role nodes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-px w-full max-w-3xl bg-white/5">
          {pathways.map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.07, type: "spring" }}
              whileHover={{ y: -4, backgroundColor: "rgba(202,255,0,0.1)" }}
              className="bg-white/5 p-6 text-center cursor-default transition-colors"
            >
              <span className="text-white/80 font-mono text-xs uppercase tracking-[0.25em] leading-relaxed block">
                {role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Career support strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="border-t border-white/10 pt-12 grid grid-cols-2 md:grid-cols-5 gap-6"
      >
        {support.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-3 text-center">
            <div className="text-electric-lime opacity-60">
              {s.icon}
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
