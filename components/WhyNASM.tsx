"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const environments = [
  "Health Clubs", "Performance Facilities", "Sports Organisations",
  "Wellness Institutions", "Rehabilitation Settings", "Personal Training",
];

export function WhyNASM() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nasm" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-20">
        {/* Left — NASM Logo block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block">
            04 — Why NASM
          </span>
          <div className="inline-block px-0 py-4">
            <img src="/images/nasmlogo.svg" alt="NASM Logo" className="h-10 lg:h-14 w-auto" />
          </div>
          <div className="inline-flex items-center gap-3 border border-swiss-black/20 px-5 py-2">
            <div className="w-2 h-2 rounded-full bg-electric-lime" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-swiss-black/60">Official Education Partner</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter mt-4">
            Globally Respected.<br />
            Scientifically Driven.
          </h2>
        </motion.div>

        {/* Right — Body content */}
        <div className="flex flex-col gap-6">
          {[
            "The National Academy of Sports Medicine (NASM) is one of the world's leading fitness education organisations — internationally recognised for evidence-based methodologies and industry-leading educational systems.",
            "NASM certifications are respected globally across health clubs, performance facilities, sports organisations, wellness institutions, rehabilitation settings, and personal training environments.",
            "NASM's integrated systems, including the OPT™ Model, provide structured, scientifically supported approaches to assessment, programming, corrective exercise, and performance enhancement.",
            "By studying through IMSA, students access globally recognised NASM education pathways while benefiting from enhanced mentorship, practical immersion, and professional development.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="text-swiss-black/60 text-base lg:text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Infinite marquee of recognition environments */}
      <div className="relative overflow-hidden border-t border-b border-swiss-black/10 py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex gap-16 whitespace-nowrap font-mono text-sm tracking-widest uppercase text-swiss-black/40 inline-block"
        >
          {[...environments, ...environments].map((env, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              {env}
              <span className="text-electric-lime">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
