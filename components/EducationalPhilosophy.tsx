"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const pillars = [
  {
    word: "Science.",
    desc: "Evidence-based sports science forms the backbone of every course — anatomy, physiology, biomechanics, and applied movement analysis.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-electric-lime">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 20h14M20 13v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    word: "Application.",
    desc: "Practical coaching immersion through real-world case studies, hands-on workshops, and supervised implementation within professional environments.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-electric-lime">
        <rect x="8" y="8" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    word: "Mastery.",
    desc: "Mentor-led development, performance-driven learning environments, and career development pathways that produce industry-ready professionals.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-electric-lime">
        <path d="M20 8l3.5 7 7.5 1.1-5.5 5.3 1.3 7.6L20 25.4l-6.8 3.6 1.3-7.6L9 16.1l7.5-1.1L20 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function EducationalPhilosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" ref={ref} className="w-full bg-swiss-gray py-28 lg:py-40 px-6 lg:px-12">
      <div className="max-w-none">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-6">
            03 — Our Educational Philosophy
          </span>
          <p className="text-swiss-black/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We believe exceptional coaches are developed through more than theory alone. Our education model combines evidence-based sports science, advanced pedagogical methods, and practical coaching immersion.
          </p>
        </motion.div>

        {/* Three pillar words — typewriter-style sequential reveal */}
        <div className="flex flex-col lg:flex-row gap-px">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="flex-1 bg-swiss-white p-10 lg:p-14 flex flex-col group cursor-default"
            >
              {/* Keyword */}
              <h3 className="font-display text-5xl lg:text-7xl font-black uppercase tracking-tighter text-swiss-black mb-8 leading-none">
                {pillar.word}
              </h3>

              {/* Description */}
              <p className="text-swiss-black/60 text-base leading-relaxed mb-auto flex-1">
                {pillar.desc}
              </p>

              {/* Icon */}
              <div className="mt-10 transition-transform duration-500 group-hover:rotate-12">
                {pillar.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
