"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 100, suffix: "B+", label: "Global Fitness Industry Value" },
  { value: 100, suffix: "+", label: "Countries Recognising NASM" },
  { value: 8, suffix: "–10", label: "Weeks To Certification" },
  { value: 3, suffix: "", label: "Delivery Formats" },
  { value: 0, suffix: "∞", label: "Career Pathways Unlocked" },
];

export function IndustryStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-swiss-black py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 lg:mb-32"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 block mb-6">
            08 — Industry Outlook
          </span>
          <h2 className="font-display text-5xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-white mb-10">
            The Opportunity<br />is Now
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            The global fitness and wellness industry is one of the fastest-growing sectors in the world. Demand for qualified, certified fitness professionals continues to rise across health clubs, performance facilities, online coaching, and corporate wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-white/40 font-mono text-[11px] uppercase tracking-[0.3em] text-center max-w-md leading-relaxed">
            Qualified, internationally certified professionals are better positioned than ever to build sustainable, high-earning careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-swiss-black transition-colors rounded-none px-8 py-6 uppercase font-bold tracking-widest text-xs">
              Start Your Certification
            </Button>
            <Button className="bg-transparent text-white border border-electric-lime hover:bg-electric-lime hover:text-swiss-black transition-colors rounded-none px-8 py-6 uppercase font-bold tracking-widest text-xs">
              Speak to an Advisor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, index, inView }: { stat: any; index: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        spring.set(stat.value);
      }, 500 + index * 100);
    }
  }, [inView, stat.value, spring, index]);

  useEffect(() => {
    return displayValue.on("change", (v) => setCount(v));
  }, [displayValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      <div className="relative mb-4">
        <span className="font-display text-5xl lg:text-6xl font-black text-white tracking-tighter">
          {stat.value === 0 ? "" : (stat.value === 100 && stat.suffix === "B+" ? "$" : "")}
          {stat.value === 0 ? "" : count}
          {stat.suffix}
        </span>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ duration: 1, delay: 1.5 + index * 0.1, ease: "circOut" }}
          className="absolute -bottom-1 left-0 h-[2px] bg-electric-lime"
        />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 leading-tight">
        {stat.label}
      </span>
    </motion.div>
  );
}
