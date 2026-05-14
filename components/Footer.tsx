"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const slogans = [
  "Science Driven. Performance Focused.",
  "Where Science Meets Coaching Mastery.",
  "Elevating the Global Standard of Fitness Education.",
  "Developing the Next Generation of Elite Coaches.",
  "Learn. Apply. Perform.",
  "Education Beyond Certification.",
  "The Future of Fitness Education Starts Here."
];

import { Logo } from "@/components/Logo";

export function Footer() {
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-swiss-white pt-24 pb-12 border-t border-swiss-black/5">
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center group">
              <Logo variant="dark" />
            </Link>
            <div className="flex flex-col">
               <h3 className="font-display text-xl font-black uppercase leading-tight">
                International <br/>Movement & Science Academy
               </h3>
               <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-swiss-black/40 mt-1">
                Official NASM Education & Performance Academy
               </span>
            </div>
            <p className="font-sans text-sm text-swiss-black/70 max-w-xs mt-2">
              Delivering world-class fitness education, practical mentorship, and science-driven professional development.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-8 text-swiss-black/30">Navigation</h4>
            <ul className="flex flex-col gap-4 font-display text-sm font-black uppercase tracking-tight">
              <li><Link href="#courses" className="hover:opacity-60 transition-opacity">Our Courses</Link></li>
              <li><Link href="#about" className="hover:opacity-60 transition-opacity">About IMSA</Link></li>
              <li><Link href="#faculty" className="hover:opacity-60 transition-opacity">Faculty</Link></li>
              <li><Link href="#admissions" className="hover:opacity-60 transition-opacity">Admissions</Link></li>
              <li><Link href="#faq" className="hover:opacity-60 transition-opacity">Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-8 text-swiss-black/30">Contact</h4>
            <ul className="flex flex-col gap-4 font-display text-sm font-black uppercase tracking-tight">
              <li><Link href="/" className="hover:opacity-60 transition-opacity">Admissions Enquiries</Link></li>
              <li><Link href="/" className="hover:opacity-60 transition-opacity">Course Advisory</Link></li>
              <li><Link href="/" className="hover:opacity-60 transition-opacity">Corporate Partnerships</Link></li>
              <li><Link href="/" className="hover:opacity-60 transition-opacity">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-8 text-swiss-black/30">Social</h4>
            <ul className="flex flex-col gap-4 font-display text-sm font-black uppercase tracking-tight">
              <li><Link href="/" className="hover:opacity-60 transition-opacity">Instagram</Link></li>
              <li><Link href="/" className="hover:opacity-60 transition-opacity">LinkedIn</Link></li>
              <li><Link href="/" className="hover:opacity-60 transition-opacity">TikTok</Link></li>
              <li><Link href="/" className="hover:opacity-60 transition-opacity">YouTube</Link></li>
            </ul>
          </div>
        </div>

        {/* Slogan Rotator & Bottom Bar */}
        <div className="flex flex-col gap-12 pt-12 border-t border-swiss-black/5">
          <div className="h-8 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={sloganIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-display text-lg lg:text-2xl font-black uppercase tracking-tighter text-swiss-black text-center"
              >
                {slogans[sloganIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] uppercase tracking-[0.3em] text-swiss-black/40">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>&copy; {new Date().getFullYear()} IMSA. All rights reserved.</p>
              <div className="hidden md:block w-px h-2 bg-swiss-black/20" />
              <p>In Collaboration with NASM</p>
            </div>
            <div className="flex gap-8">
              <Link href="/" className="hover:text-swiss-black transition-colors">Privacy Policy</Link>
              <Link href="/" className="hover:text-swiss-black transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

