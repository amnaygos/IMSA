"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";

const intakes = [
  { course: "CPT", format: "In-Person", date: "June 2026", location: "Dubai", status: "LIMITED PLACES" },
  { course: "CPT", format: "Online", date: "Rolling", location: "Global", status: "ENROLMENT OPEN" },
  { course: "CES", format: "Hybrid", date: "July 2026", location: "Abu Dhabi", status: "FILLING FAST" },
  { course: "PES", format: "In-Person", date: "August 2026", location: "Dubai", status: "LIMITED PLACES" },
  { course: "Elite Performance Bundle", format: "Flex", date: "Anytime", location: "Mixed", status: "CONTACT ADMISSIONS" },
];

export function UpcomingIntakes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-white py-28 lg:py-40 px-6 lg:px-12 border-t border-swiss-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-20 lg:gap-32">
          
          {/* Header & Open Day Column */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-swiss-black/40 block mb-6">
                16 — Course Availability
              </span>
              <h2 className="font-display text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-swiss-black mb-8">
                Your Next Step<br />Starts Here
              </h2>
              <p className="text-swiss-black/60 text-lg font-light leading-relaxed">
                Course intakes are rolling throughout the year across all three delivery formats. Secure your place in the next available cohort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="border border-electric-lime p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric-lime font-bold block mb-4">Event</span>
                <h3 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tight text-swiss-black mb-4">
                  Open Day — 20 May
                </h3>
                <p className="text-swiss-black/60 text-sm leading-relaxed mb-8">
                  Join us for a free open day at our facilities. Meet the faculty, explore the learning environment, and find the right course pathway for you.
                </p>
                <Button className="bg-swiss-black text-white hover:bg-white hover:text-swiss-black border border-swiss-black transition-colors rounded-none px-8 py-6 uppercase font-bold tracking-widest text-[10px]">
                  Book Open Day
                </Button>
              </div>
              <motion.div 
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[1px] bg-electric-lime/20"
              />
            </motion.div>
          </div>

          {/* Intakes List Column */}
          <div className="flex flex-col">
            <div className="flex flex-col border-t border-swiss-black/5">
              {intakes.map((intake, i) => (
                <IntakeRow key={i} intake={intake} index={i} inView={inView} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-6"
            >
              <Button className="bg-swiss-black text-white hover:bg-white hover:text-swiss-black border border-swiss-black transition-colors rounded-none px-10 py-7 uppercase font-bold tracking-widest text-xs">
                Reserve My Place
              </Button>
              <Button variant="outline" className="bg-transparent text-swiss-black border-swiss-black/20 hover:border-swiss-black transition-colors rounded-none px-10 py-7 uppercase font-bold tracking-widest text-xs">
                Contact Admissions
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function IntakeRow({ intake, index, inView }: { intake: any; index: number; inView: boolean }) {
  const isUrgent = intake.status === "LIMITED PLACES" || intake.status === "FILLING FAST";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="group relative py-8 lg:py-10 border-b border-swiss-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-default"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
        <h4 className="font-display text-xl lg:text-2xl font-black uppercase tracking-tight text-swiss-black min-w-[80px]">
          {intake.course}
        </h4>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] bg-swiss-gray px-3 py-1 text-swiss-black/60">
            {intake.format}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-swiss-black/40">
            {intake.date}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-swiss-black/40">
            {intake.location}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 self-end sm:self-auto">
        <div className="flex items-center gap-3">
          {isUrgent && (
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-electric-lime shadow-[0_0_8px_rgba(202,255,0,0.5)]"
            />
          )}
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-swiss-black">
            {intake.status}
          </span>
        </div>
        <div className="flex items-center gap-2 text-swiss-black font-mono text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 group-hover:text-electric-lime">
          <span>Apply</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>

      {/* Hover Line */}
      <motion.div 
        className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-electric-lime group-hover:w-full transition-all duration-500 ease-out"
      />
    </motion.div>
  );
}
