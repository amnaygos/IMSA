"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";

const partnerTypes = [
  "Fitness Facilities", "Health Clubs", "Wellness Companies",
  "Sports Organisations", "Corporate Wellness", "Fitness Teams",
];

const services = [
  "Staff Upskilling",
  "Team Certifications",
  "Educational Consultancy",
  "Workshop Delivery",
  "Corporate Wellness Education",
  "Performance Education Systems",
];

export function CorporatePartnership() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="corporate" ref={ref} className="w-full bg-swiss-black py-28 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/30 block">
            12 — Corporate & Partnership Solutions
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white">
            Education & Development<br />
            Partnerships
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-md">
            IMSA provides educational support and development solutions for fitness facilities, health clubs, wellness companies, sports organisations, and coaching staff.
          </p>
          <motion.div
            animate={{ boxShadow: ["0 0 0px rgba(202,255,0,0)", "0 0 20px rgba(202,255,0,0.2)", "0 0 0px rgba(202,255,0,0)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-fit"
          >
            <Button
              size="lg"
              className="bg-swiss-black text-white border border-electric-lime hover:bg-electric-lime hover:text-swiss-black transition-colors font-bold rounded-none px-12 h-14 uppercase tracking-wider text-xs"
            >
              Discuss a Partnership
            </Button>
          </motion.div>
        </motion.div>

        {/* Right */}
        <div className="flex flex-col gap-10">
          {/* Partner type chips */}
          <div className="flex flex-wrap gap-3">
            {partnerTypes.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="border border-white/20 text-white/60 font-mono text-[9px] uppercase tracking-[0.3em] px-4 py-2"
              >
                {p}
              </motion.span>
            ))}
          </div>

          {/* Services */}
          <ul className="flex flex-col gap-3 border-t border-white/10 pt-8">
            {services.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-3 text-white/50 text-sm font-mono uppercase tracking-wide"
              >
                <span className="w-1 h-1 rounded-full bg-electric-lime" />
                {s}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
