"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const faculty = [
  {
    name: "Dr. James Okafor",
    credential: "PhD Sports Science, NASM-CPT, CES, PES",
    specialisation: "Movement Analysis & Corrective Exercise",
    bio: "20+ years bridging clinical sports science and elite performance coaching.",
  },
  {
    name: "Layla Al-Rashid",
    credential: "MSc Exercise Physiology, NASM-CPT, PES",
    specialisation: "Strength & Conditioning",
    bio: "Former national team performance coach with expertise in athletic periodisation.",
  },
  {
    name: "Marcus Steele",
    credential: "NASM-CPT, CES, FNS",
    specialisation: "Corrective Exercise & Rehabilitation",
    bio: "Specialist in postural assessment and movement dysfunction correction.",
  },
  {
    name: "Sophia Chen",
    credential: "MSc Human Performance, NASM-CPT",
    specialisation: "Behavioural Coaching & Program Design",
    bio: "Expert in client psychology and long-term programme adherence strategies.",
  },
  {
    name: "Ravi Patel",
    credential: "NASM-CPT, PES, CSCS",
    specialisation: "Sports Performance & Athletic Development",
    bio: "Professional athlete development specialist across multiple disciplines.",
  },
];

const avatarColors = ["#CAFF00", "#141414", "#E4E3E0", "#2a2a2a", "#CAFF00"];
const avatarText = ["#141414", "#CAFF00", "#141414", "#CAFF00", "#141414"];

export function Faculty() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % faculty.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + faculty.length) % faculty.length);
  const next = () => setCurrent(c => (c + 1) % faculty.length);

  return (
    <section id="faculty" ref={ref} className="w-full bg-swiss-white py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-4">
          09 — Faculty & Educators
        </span>
        <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
          Learn from Industry<br />
          Professionals
        </h2>
        <p className="mt-6 text-swiss-black/50 text-base max-w-xl leading-relaxed">
          IMSA courses are delivered by experienced NASM-certified educators, fitness professionals, and performance specialists with real-world industry experience.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative flex items-center gap-4">
        {/* Prev */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          className="shrink-0 w-12 h-12 border border-swiss-black/20 flex items-center justify-center hover:bg-swiss-black hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </motion.button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{ transform: `translateX(calc(-${current * (100 / 3)}% - ${current * (16 / 3)}px))` }}
          >
            {faculty.map((f, i) => (
              <div
                key={f.name}
                className={`shrink-0 w-full lg:w-[calc(33.33%-11px)] bg-swiss-gray p-8 transition-opacity duration-500 ${
                  i === current ? "opacity-100" : "opacity-40"
                }`}
              >
                {/* Portrait avatar */}
                <div
                  className="w-20 h-20 rounded-full mb-6 flex items-center justify-center font-display text-2xl font-black overflow-hidden"
                  style={{ backgroundColor: avatarColors[i % avatarColors.length], color: avatarText[i % avatarText.length] }}
                >
                  {f.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-swiss-black mb-1">{f.name}</h3>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-swiss-black/40 mb-3">{f.credential}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 bg-swiss-black px-2 py-1 inline-block mb-4 border border-white/10 group-hover:border-electric-lime transition-colors">{f.specialisation}</p>
                <p className="text-swiss-black/60 text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="shrink-0 w-12 h-12 border border-swiss-black/20 flex items-center justify-center hover:bg-swiss-black hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </motion.button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {faculty.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-swiss-black w-6" : "bg-swiss-black/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
