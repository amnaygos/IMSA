"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const tiers = [
  {
    phase: "Phase 5",
    name: "Power",
    color: "#141414",
    textColor: "#ffffff",
    width: "w-[40%]",
    desc: "Reactive, integrated, and explosive training to maximise athletic power output and performance.",
    accent: true,
  },
  {
    phase: "Phase 4",
    name: "Maximal Strength",
    color: "#141414",
    textColor: "#ffffff",
    width: "w-[55%]",
    desc: "Heavier loading, longer rest periods, and periodised programming to develop maximum force production.",
  },
  {
    phase: "Phase 3",
    name: "Hypertrophy",
    color: "#1a1a1a",
    textColor: "#ffffff",
    width: "w-[68%]",
    desc: "Moderate loads and volume with shorter rest to drive muscle growth and body composition changes.",
  },
  {
    phase: "Phase 2",
    name: "Strength Endurance",
    color: "#2a2a2a",
    textColor: "#ffffff",
    width: "w-[82%]",
    desc: "Superset-based training combining stabilisation and strength exercises to build endurance and form.",
  },
  {
    phase: "Phase 1",
    name: "Stabilisation Endurance",
    color: "#333",
    textColor: "#ffffff",
    width: "w-full",
    desc: "Foundation phase focusing on postural control, joint stability, and neuromuscular efficiency.",
  },
];

const populations = [
  "General Clients", "Fat Loss", "Muscle Gain", "Athletes",
  "Corrective Exercise", "Performance", "Seniors", "Youth",
];

export function OPTModel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <section id="opt-model" ref={ref} className="w-full bg-swiss-black py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 block mb-6">
            02 — The NASM OPT Model
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-6">
            The Foundation of Our<br />
            Educational Framework
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Built around NASM&apos;s globally recognised Optimum Performance Training™ (OPT™) Model — an evidence-based framework systematically developing every dimension of human performance.
          </p>
        </motion.div>

        {/* Pyramid */}
        <div className="flex flex-col items-center gap-1.5 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${tier.width} cursor-pointer`}
              onMouseEnter={() => setHoveredTier(i)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              <motion.div
                animate={{ y: hoveredTier === i ? -4 : 0 }}
                transition={{ duration: 0.25 }}
                className={`w-full py-4 px-6 flex justify-between items-center ${tiers[i].accent ? "border-t-2 border-electric-lime" : ""}`}
                style={{ backgroundColor: tiers[i].color }}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.4em]" style={{ color: tier.textColor, opacity: 0.5 }}>
                  {tier.phase}
                </span>
                <span className="font-display text-sm font-black uppercase tracking-tight" style={{ color: tier.textColor }}>
                  {tier.name}
                </span>
              </motion.div>

              {/* Tooltip */}
              {hoveredTier === i && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-20 bg-swiss-black text-white border border-electric-lime text-xs font-mono px-4 py-2 tracking-wide whitespace-nowrap shadow-xl"
                >
                  {tiers[i].desc}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-electric-lime" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Population chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mt-20"
        >
          {populations.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 + i * 0.07 }}
              className="border border-white/20 text-white/60 font-mono text-[10px] uppercase tracking-[0.3em] px-5 py-2"
            >
              {p}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
