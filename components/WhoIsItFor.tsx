"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const audiences = [
  "Aspiring Personal Trainers",
  "Fitness Professionals",
  "Strength & Conditioning Coaches",
  "Sports Performance Coaches",
  "Rehabilitation & Corrective Exercise Professionals",
  "Gym Instructors",
  "Health & Wellness Enthusiasts",
  "Coaches Seeking International Certification",
];

export function WhoIsItFor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="for-who" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
            15 — Who Our Courses Are For
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter">
            Designed for the<br />
            Ambitious
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-8 py-4 border border-swiss-black/10 bg-white hover:bg-swiss-black hover:border-electric-lime transition-colors duration-300 cursor-default group"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-swiss-black/60 group-hover:text-white font-bold">
                {audience}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
