"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "Is NASM internationally recognised?",
    a: "Yes — NASM is one of the world's most respected fitness education organisations, recognised internationally across health, fitness, wellness, and performance."
  },
  {
    q: "Do I need previous fitness experience to enroll?",
    a: "No. Many pathways are designed for both aspiring and existing professionals."
  },
  {
    q: "What learning formats are available?",
    a: "In-person, hybrid, and online."
  },
  {
    q: "Are examinations included?",
    a: "Yes — NASM certification examinations are included."
  },
  {
    q: "Are proctored examinations available?",
    a: "Yes — optional proctored pathways are available for additional international recognition and stronger global employment positioning."
  },
  {
    q: "Will there be practical workshops?",
    a: "Yes — integrated into in-person and hybrid pathways."
  },
  {
    q: "Will I receive career support?",
    a: "Yes — CV development, mentorship, interview preparation, and potential placement within MTM Group facilities."
  },
  {
    q: "How long are the courses?",
    a: "Most run approximately 8–10 weeks depending on pathway and format."
  },
  {
    q: "Are payment plans available?",
    a: "Flexible options and bundle packages may be available depending on pathway."
  },
  {
    q: "What certifications are available?",
    a: "CPT, CES, PES, and the Elite Performance Bundle (CPT + CES + PES)."
  }
];

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="w-full bg-swiss-gray py-28 lg:py-40 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
            21 — FAQ Section
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
            Frequently Asked<br />
            Questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-px bg-swiss-black/5">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 px-6 lg:px-10 flex items-center justify-between text-left group"
              >
                <span className={`font-display text-lg lg:text-xl font-black uppercase tracking-tight transition-colors duration-300 ${openIndex === i ? "text-swiss-black underline decoration-electric-lime decoration-2 underline-offset-8" : "text-swiss-black"}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="shrink-0 ml-4"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 lg:px-10 pb-8 text-swiss-black/60 text-base leading-relaxed max-w-2xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 1 } : {}}
           transition={{ delay: 0.8 }}
           className="mt-12 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-swiss-black/40">
            Still have questions? <span className="text-swiss-black font-bold cursor-pointer hover:opacity-60 transition-opacity">Contact our admissions team</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
