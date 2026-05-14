"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full bg-swiss-black py-32 lg:py-48 px-6 lg:px-12 overflow-hidden">


      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-white mb-10"
        >
          Start Your<br />
          Journey with IMSA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 text-xl lg:text-2xl font-light leading-relaxed mb-16 max-w-2xl mx-auto"
        >
          Develop the knowledge, confidence, and practical coaching mastery required to succeed within the modern fitness and performance industry.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-swiss-black text-white border border-electric-lime hover:bg-white hover:text-swiss-black transition-colors font-bold px-12 h-16 text-sm uppercase tracking-widest rounded-none min-w-[220px]"
            >
              Apply Now
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white hover:text-swiss-black transition-colors font-bold px-12 h-16 text-sm uppercase tracking-widest rounded-none min-w-[220px]"
            >
              Speak to Advisor
            </Button>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="text-white/60 hover:text-white hover:bg-white/5 transition-colors font-bold px-12 h-16 text-sm uppercase tracking-widest rounded-none min-w-[220px]"
            >
              Explore Courses
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
