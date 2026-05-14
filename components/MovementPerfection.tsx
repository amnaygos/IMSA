"use client";

import React from "react";
import { motion } from "motion/react";

export function MovementPerfection() {
  return (
    <section className="w-full bg-[#F4F1F4] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="mb-6 inline-block bg-swiss-black px-4 py-1 font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-white">
              Biomechanical Mastery
            </span>
            
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] font-bold text-swiss-black mb-8 uppercase tracking-tighter">
              Perfection <br />
              in Movement
            </h2>
            
            <p className="text-lg lg:text-xl text-swiss-black/70 max-w-xl mb-10 leading-relaxed font-light">
              True athletic excellence is found in the smallest margins. We decode the kinetic chain to its most fundamental elements, ensuring every joint angle and muscle activation is optimized for peak efficiency. 
              <br /><br />
              At IMSI, we don&apos;t just train athletes; we re-engineer their movement patterns through scientific precision and AI-driven diagnostics.
            </p>

            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-swiss-black font-display text-4xl font-bold">0.01s</span>
                <span className="text-swiss-black/40 text-xs uppercase tracking-widest font-mono">Precision Tracking</span>
              </div>
              <div className="w-[1px] h-12 bg-swiss-black/10" />
              <div className="flex flex-col">
                <span className="text-swiss-black font-display text-4xl font-bold">100%</span>
                <span className="text-swiss-black/40 text-xs uppercase tracking-widest font-mono">Kinetic Alignment</span>
              </div>
            </div>
          </motion.div>

          {/* Video Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square w-full overflow-hidden relative group">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/videos/muscle.mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Background glowing orb - neutralized for light theme */}
            <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-swiss-gray blur-[100px] rounded-full opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
