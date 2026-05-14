"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "01",
    title: "Submit Your Application",
    desc: "Complete your enquiry or admissions application to begin the process.",
  },
  {
    num: "02",
    title: "Admissions Consultation",
    desc: "Speak with our education team to identify the most suitable course pathway for your goals.",
  },
  {
    num: "03",
    title: "Registration & Enrollment",
    desc: "Secure your placement and receive access to your learning materials and platform.",
  },
  {
    num: "04",
    title: "Begin Your Learning Journey",
    desc: "Start through in-person, hybrid, or online delivery — on your terms.",
  },
];

export function AdmissionsProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="admissions" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
          11 — Admissions Process
        </span>
        <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
          Your Journey<br />
          Starts Here
        </h2>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div className="relative hidden lg:block">
        {/* Connecting line */}
        <div className="absolute top-8 left-0 right-0 flex items-center px-[4%]">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="flex-1 h-px bg-swiss-black/15"
          />
        </div>

        <div className="grid grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              {/* Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.2, type: "spring", stiffness: 300 }}
                className="relative w-16 h-16 rounded-full border-2 border-swiss-black bg-swiss-white flex items-center justify-center mb-6 z-10"
              >
                <span className="font-mono text-xs font-bold text-swiss-black">{step.num}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
              >
                <h3 className="font-display text-base font-black uppercase tracking-tight mb-3">{step.title}</h3>
                <p className="text-swiss-black/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-0 lg:hidden relative">
        <div className="absolute top-8 bottom-8 left-7 w-px bg-swiss-black/10" />
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
            className="flex gap-6 pb-10 relative"
          >
            <div className="w-14 h-14 rounded-full border-2 border-swiss-black bg-swiss-white flex items-center justify-center shrink-0 z-10">
              <span className="font-mono text-xs font-bold">{step.num}</span>
            </div>
            <div className="pt-3">
              <h3 className="font-display text-base font-black uppercase tracking-tight mb-2">{step.title}</h3>
              <p className="text-swiss-black/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-16 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Button
            size="lg"
            className="bg-swiss-black text-white hover:bg-electric-lime hover:text-swiss-black transition-colors font-bold rounded-none px-16 h-16 uppercase tracking-wider text-xs"
          >
            Begin Application
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
