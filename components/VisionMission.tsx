"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function VisionMission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-swiss-black/10">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-12 lg:p-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-8">
            19 — Our Vision
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-swiss-black mb-8">
            Developing the<br />
            Future of Fitness
          </h2>
          <p className="text-swiss-black/60 text-lg leading-relaxed font-light">
            To become a globally recognised leader in fitness, wellness, and performance education by producing highly competent professionals through science-based education, innovative teaching methodologies, and practical coaching mastery.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-12 lg:p-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-8">
            20 — Our Mission
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-swiss-black mb-8">
            Science-Based Education<br />
            with Transferability
          </h2>
          <p className="text-swiss-black/60 text-lg leading-relaxed font-light">
            To bridge the gap between theory and real-world application through world-class mentorship, advanced pedagogical systems, and immersive practical learning experiences that develop confident, knowledgeable, and industry-ready professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
