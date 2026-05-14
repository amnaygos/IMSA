"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const courses = [
  {
    abbr: "CPT",
    name: "Certified Personal Trainer",
    pitch: "Develop foundational knowledge and practical coaching skills to become a globally recognised fitness professional.",
    areas: [
      "Human Anatomy", "Exercise Physiology", "Biomechanics",
      "Program Design", "Functional Training", "Resistance Training",
      "Client Coaching", "Behavioural Coaching", "Fitness Assessments", "Movement Screening",
    ],
    featured: false,
  },
  {
    abbr: "CES",
    name: "Corrective Exercise Specialist",
    pitch: "Develop advanced knowledge in movement dysfunction, postural deviations, corrective strategies, and movement restoration.",
    areas: [
      "Postural Assessment", "Movement Dysfunction Analysis", "Corrective Programming",
      "Mobility & Stability Integration", "Muscle Imbalance Correction", "Injury Prevention", "Movement Optimisation",
    ],
    featured: false,
  },
  {
    abbr: "PES",
    name: "Performance Enhancement Specialist",
    pitch: "Learn advanced sports performance methodologies focused on athletic development, strength, speed, power, and performance optimisation.",
    areas: [
      "Athletic Performance Testing", "Strength & Conditioning", "Speed & Agility Development",
      "Power Training", "Performance Programming", "Recovery Integration", "Sports Performance Assessment",
    ],
    featured: false,
  },
];

const bundle = {
  abbr: "CPT + CES + PES",
  name: "Performance Bundle",
  pitch: "Our complete professional development pathway — combining all three NASM certifications for individuals seeking advanced coaching competency, elite-level education, and greater professional versatility.",
  areas: [
    "All CPT Areas", "All CES Areas", "All PES Areas",
    "Advanced Coaching Competency", "Higher Industry Positioning", "Greater Professional Versatility",
  ],
  featured: true,
};

function CourseCard({ course, delay, inView }: { course: typeof courses[0]; delay: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-swiss-white flex flex-col p-10 group cursor-pointer"
      onClick={() => setOpen(o => !o)}
    >
      <span className="font-display text-7xl lg:text-8xl font-black tracking-tighter text-swiss-black/8 leading-none mb-6 group-hover:text-swiss-black transition-colors duration-300 select-none">
        {course.abbr}
      </span>
      <h3 className="font-display text-xl font-black uppercase tracking-tight text-swiss-black mb-3">
        {course.name}
      </h3>
      <p className="text-swiss-black/60 text-sm leading-relaxed mb-6">{course.pitch}</p>

      <button
        className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-swiss-black/50 hover:text-swiss-black transition-colors mt-auto"
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
      >
        Key Areas Covered
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4 flex flex-col gap-2"
          >
            {course.areas.map(a => (
              <li key={a} className="font-sans text-xs text-swiss-black/60 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-electric-lime inline-block" />{a}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function OurCourses() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [bundleOpen, setBundleOpen] = useState(false);

  return (
    <section id="courses" ref={ref} className="w-full bg-swiss-black py-28 lg:py-40 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 block mb-4">
          06 — Our Courses
        </span>
        <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white">
          NASM Certification<br />
          Pathways
        </h2>
      </motion.div>

      {/* Three single certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-px">
        {courses.map((c, i) => (
          <CourseCard key={c.abbr} course={c} delay={0.1 + i * 0.12} inView={inView} />
        ))}
      </div>

      {/* Bundle — full width, elevated */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-swiss-black p-10 lg:p-14 cursor-pointer group overflow-hidden border border-electric-lime/30"
        onClick={() => setBundleOpen(o => !o)}
      >
        {/* Animated border draw on hover */}
        <motion.div 
          className="absolute inset-0 border-2 border-electric-lime pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative z-10">
          <div className="flex flex-col gap-4 flex-1">
            <div className="inline-flex items-center gap-3">
              <span className="bg-electric-lime text-swiss-black font-mono text-[9px] uppercase tracking-[0.4em] px-3 py-1">
                Most Comprehensive
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
                Complete Pathway
              </span>
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
              {bundle.name}
              <span className="text-white/40 font-mono text-sm font-normal tracking-widest ml-4">
                {bundle.abbr}
              </span>
            </h3>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">{bundle.pitch}</p>
          </div>

          <button
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 hover:text-white transition-colors shrink-0 self-start mt-2"
            onClick={(e) => { e.stopPropagation(); setBundleOpen(o => !o); }}
          >
            Key Areas Covered
            <motion.svg animate={{ rotate: bundleOpen ? 180 : 0 }} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </motion.svg>
          </button>
        </div>

        <AnimatePresence>
          {bundleOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 relative z-10"
            >
              {bundle.areas.map(a => (
                <li key={a} className="font-sans text-xs text-white/50 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-electric-lime inline-block" />{a}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
