"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function AboutIMSA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_3fr] gap-12 lg:gap-16 items-start max-w-none">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40">
            01 — About IMSA
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter">
            Who<br />We Are
          </h2>
        </motion.div>

        {/* Vertical divider */}
        <div className="hidden lg:block w-px bg-swiss-black/10 self-stretch" />

        {/* Right column */}
        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl lg:text-2xl font-light text-swiss-black leading-relaxed"
          >
            International Movement &amp; Science Academy (IMSA) is a premium education and professional development academy specialising in fitness, performance, corrective exercise, and applied sports science education.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-lg text-swiss-black/60 leading-relaxed"
          >
            In strategic collaboration with the National Academy of Sports Medicine (NASM), IMSA delivers globally recognised certifications through innovative teaching methodologies, mentorship-led education, and practical coaching immersion.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-lg text-swiss-black/60 leading-relaxed"
          >
            Our mission is to bridge the gap between theoretical understanding and real-world coaching application — producing confident, knowledgeable, and industry-ready fitness professionals.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
