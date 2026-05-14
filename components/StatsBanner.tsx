"use client";

import React from "react";
import { motion } from "motion/react";

const stats = [
  { value: "98.5%", label: "Certification Pass Rate" },
  { value: "450+", label: "Hours of Video Content" },
  { value: "12,000", label: "Students Enrolled" },
  { value: "08", label: "Core Modules" },
];

export function StatsBanner() {
  return (
    <section className="bg-swiss-white w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col p-8 lg:p-12"
          >
            <div className="font-mono text-4xl lg:text-6xl font-bold tracking-tighter mb-2">
              {stat.value}
            </div>
            <div className="font-sans text-xs lg:text-sm font-semibold uppercase tracking-widest text-swiss-black/60">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
