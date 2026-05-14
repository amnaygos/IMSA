"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const reasons = [
  {
    num: "01",
    title: "Official NASM Education Partner",
    desc: "IMSA is an officially recognised NASM education and distribution facility, delivering globally respected certifications within a professional learning environment.",
  },
  {
    num: "02",
    title: "World-Class Learning Environment",
    desc: "Courses are delivered within a premium educational setting supported by modern classroom facilities, advanced gym environments, and high-level mentorship.",
  },
  {
    num: "03",
    title: "Practical Coaching Integration",
    desc: "Hands-on coaching development through practical workshops, assessments, movement analysis, and supervised implementation.",
  },
  {
    num: "04",
    title: "Career Development Pathways",
    desc: "Mentorship, career guidance, interview preparation, and potential placement opportunities within MTM Group facilities.",
  },
  {
    num: "05",
    title: "Industry-Relevant Education",
    desc: "Courses designed to prepare learners for the modern fitness industry through applied learning, real-world case studies, and professional standards.",
  },
];

export function WhyIMSA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="why-imsa" ref={ref} className="w-full bg-swiss-gray py-28 lg:py-40 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
          05 — Why IMSA
        </span>
        <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
          Five Reasons to<br />
          Choose IMSA
        </h2>
      </motion.div>

      {/* 3 + 2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-swiss-black/10">
        {reasons.slice(0, 3).map((r, i) => (
          <motion.div
            key={r.num}
            initial={{ opacity: 0, y: 40, rotate: 1 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="bg-swiss-white p-10 flex flex-col gap-6 cursor-default"
          >
            <motion.span
              animate={{ scale: hovered === i ? 1.1 : 1 }}
              className="font-mono text-5xl font-black text-swiss-black/10 leading-none block"
            >
              {r.num}
            </motion.span>
            <div>
              <motion.h3
                className="font-display text-xl font-black uppercase tracking-tight text-swiss-black mb-1 relative inline-block"
              >
                {r.title}
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-electric-lime"
                  animate={{ width: hovered === i ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h3>
            </div>
            <p className="text-swiss-black/60 text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-swiss-black/10 mt-px">
        {reasons.slice(3).map((r, i) => (
          <motion.div
            key={r.num}
            initial={{ opacity: 0, y: 40, rotate: 1 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.46 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(i + 3)}
            onMouseLeave={() => setHovered(null)}
            className="bg-swiss-white p-10 flex flex-col gap-6 cursor-default"
          >
            <motion.span
              animate={{ scale: hovered === i + 3 ? 1.1 : 1 }}
              className="font-mono text-5xl font-black text-swiss-black/10 leading-none block"
            >
              {r.num}
            </motion.span>
            <div>
              <motion.h3
                className="font-display text-xl font-black uppercase tracking-tight text-swiss-black mb-1 relative inline-block"
              >
                {r.title}
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-electric-lime"
                  animate={{ width: hovered === i + 3 ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h3>
            </div>
            <p className="text-swiss-black/60 text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
