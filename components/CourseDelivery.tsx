"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const formats = [
  {
    id: "inperson",
    label: "In-Person",
    headline: "Immersive Classroom & Practical Education",
    duration: "8–10 Weeks",
    inclusions: [
      "Full NASM course licence with optional proctored examination pathways",
      "Access to NASM's digital platform, e-books, and modules",
      "Instructor-led classroom sessions: anatomy, physiology, biomechanics, program design",
      "Hands-on workshops within MTM facilities covering assessments, corrective strategies & movement screening",
      "Performance assessments and case studies with peer evaluation and instructor feedback",
      "IMSA Certificate of Completion alongside NASM certification",
      "Full career development support: CV guidance, interview preparation, mentorship, and potential MTM Group placement",
    ],
  },
  {
    id: "hybrid",
    label: "Hybrid",
    headline: "Flexible Learning with Practical Integration",
    duration: "8–10 Weeks",
    inclusions: [
      "Full NASM online course access with optional proctored examinations",
      "Complete self-study platform, e-books, modules, and 24/7 access",
      "Instructor-guided online support: live Q&A, review classes, and academic mentorship",
      "IMSA practical workshops: assessments, corrective exercise application, and coaching cueing",
      "Supervised theory-to-practice integration",
      "IMSA Certificate of Practical Completion alongside NASM certification",
      "Career development support: mentorship, advisory guidance, and potential MTM Group placement",
    ],
  },
  {
    id: "online",
    label: "Online",
    headline: "Interactive Digital Education with Live Mentorship",
    duration: "8–10 Weeks",
    inclusions: [
      "Full NASM course licence with optional proctored examinations",
      "NASM e-learning platform, e-books, quizzes, and official examination",
      "Live interactive classes via Zoom or Microsoft Teams",
      "Tutor-led guidance: real-time Q&A, live demonstrations, progress monitoring, and mentorship",
      "Applied learning through virtual case studies analysing real-world client scenarios",
      "IMSA Certificate of Completion",
      "Career mentorship: portfolio guidance, interview preparation, and pathway advisory",
    ],
  },
];

export function CourseDelivery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="delivery" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
          07 — Course Delivery Formats
        </span>
        <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
          Learn on<br />
          Your Terms
        </h2>
      </motion.div>

      {/* Tab bar */}
      <div className="relative flex border-b border-swiss-black/10 mb-0">
        {formats.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActive(i)}
            className={`relative flex-1 py-4 font-mono text-xs uppercase tracking-[0.3em] transition-colors duration-300 ${
              active === i ? "text-swiss-black" : "text-swiss-black/30 hover:text-swiss-black/60"
            }`}
          >
            {f.label}
            {active === i && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-swiss-black"
              />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-14 pb-4"
        >
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-swiss-black/40">
              {formats[active].label} Learning Experience
            </span>
            <h3 className="font-display text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
              {formats[active].headline}
            </h3>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-swiss-black/40">Duration</span>
              <span className="font-display text-lg font-black">{formats[active].duration}</span>
            </div>
            <Button
              size="lg"
              className="bg-swiss-black text-white hover:bg-electric-lime hover:text-swiss-black transition-colors font-bold rounded-none w-fit mt-4 px-10 h-14 uppercase tracking-wider text-xs"
            >
              Apply for this Format
            </Button>
          </div>

          {/* Right — inclusions */}
          <ul className="flex flex-col gap-3">
            {formats[active].inclusions.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 text-sm text-swiss-black/70 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric-lime mt-2 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
