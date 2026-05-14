"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: "01",
    title: "Basic Science",
    desc: "Anatomy, Physiology & Biomechanics",
    details: "Foundational knowledge required to understand human movement systems.",
  },
  {
    id: "02",
    title: "Assessments",
    desc: "Client Evaluation Protocols",
    details: "Objective testing to determine baselines, movement dysfunctions, and capability.",
  },
  {
    id: "03",
    title: "Program Design",
    desc: "The OPT™ Model",
    details: "Optimum Performance Training integrating flexibility, core, balance, and resistance.",
  },
  {
    id: "04",
    title: "Nutrition",
    desc: "Metabolism & Supplementation",
    details: "Evidence-based guidelines to support training adaptations and body composition.",
  },
  {
    id: "05",
    title: "Special Pops",
    desc: "Training Restrictions",
    details: "Adapting methodologies for youth, seniors, and clients with chronic conditions.",
  },
  {
    id: "06",
    title: "Business",
    desc: "Professional Development",
    details: "Marketing, client retention, and legal guidelines for personal trainers.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full bg-swiss-gray pt-24">
      <div className="w-full px-6 lg:px-12 mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl lg:text-6xl tracking-tight uppercase"
        >
          Curriculum <br/> Framework
        </motion.h2>
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group"
          >
            <Card className="h-full bg-swiss-white hover:bg-electric-lime transition-colors duration-500 rounded-none shadow-none flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xl font-bold bg-swiss-black text-swiss-white px-2 py-1 leading-none">{mod.id}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-swiss-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
                <CardTitle>{mod.title}</CardTitle>
                <CardDescription>{mod.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-sans text-swiss-black/80">{mod.details}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Divider / Info Strip */}
      <div className="w-full bg-swiss-black text-white py-6 px-6 lg:px-12 flex items-center overflow-hidden whitespace-nowrap border-y border-electric-lime/20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="font-mono text-sm tracking-widest uppercase inline-block"
        >
          NASM ACCREDITED &middot; 100% ONLINE &middot; EXPERT INSTRUCTORS &middot; NCCP APPROVED &middot; SCIENTIFICALLY SOUND &middot; NASM ACCREDITED &middot; 100% ONLINE &middot; EXPERT INSTRUCTORS &middot; NCCP APPROVED &middot; SCIENTIFICALLY SOUND &middot;
          NASM ACCREDITED &middot; 100% ONLINE &middot; EXPERT INSTRUCTORS &middot; NCCP APPROVED &middot; SCIENTIFICALLY SOUND &middot; NASM ACCREDITED &middot; 100% ONLINE &middot; EXPERT INSTRUCTORS &middot; NCCP APPROVED &middot; SCIENTIFICALLY SOUND &middot;
        </motion.div>
      </div>
    </section>
  );
}
