"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";

const inclusions = [
  "A live session delivered by NASM-certified IMSA educators",
  "An introduction to the OPT™ Model and its real-world application",
  "A practical coaching demonstration",
  "A walkthrough of our course pathways and career outcomes",
  "A live Q&A with the faculty team",
];

export function FreeMasterclass() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="w-full bg-[#FCFCFC] py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Column - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-video lg:aspect-[4/3] overflow-hidden bg-swiss-gray"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover grayscale contrast-125 opacity-90 scale-125"
            >
              <source src="/videos/muscle.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Content Column */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-6">
                13 — Educational Experience
              </span>
              <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-swiss-black mb-8">
                Experience IMSA<br />Before You Enrol
              </h2>
              <p className="text-swiss-black/60 text-lg font-light leading-relaxed mb-12">
                Before committing to a full course pathway, experience the IMSA teaching approach firsthand. Our free masterclass gives you direct access to our faculty, our methodology, and the quality of education you can expect.
              </p>
            </motion.div>

            <div className="flex flex-col gap-5 mb-16">
              {inclusions.map((item, i) => (
                <CheckItem key={i} text={item} index={i} inView={inView} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col gap-8"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={inView ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="bg-swiss-black p-5 lg:p-6"
              >
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                  <span className="text-electric-lime">Next Masterclass</span>
                  <span className="opacity-40">·</span>
                  <span>24 May 2026</span>
                  <span className="opacity-40">·</span>
                  <span>18:00 GST</span>
                  <span className="opacity-40">·</span>
                  <span>Online via Zoom</span>
                  <span className="opacity-40">·</span>
                  <span className="text-electric-lime/80 font-bold">Limited Places</span>
                </div>
              </motion.div>

              <Button className="group relative bg-swiss-black text-white hover:bg-white hover:text-swiss-black transition-colors rounded-none px-12 py-8 uppercase font-bold tracking-widest text-sm overflow-hidden">
                <span className="relative z-10">Reserve My Free Place</span>
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-electric-lime opacity-50"
                />
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CheckItem({ text, index, inView }: { text: string; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
      className="flex items-start gap-4"
    >
      <div className="mt-1 flex-shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-electric-lime">
          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.12, ease: "easeOut" }}
            points="20 6 9 17 4 12"
          />
        </svg>
      </div>
      <span className="text-swiss-black/70 font-mono text-[11px] uppercase tracking-[0.1em] leading-relaxed">
        {text}
      </span>
    </motion.div>
  );
}
