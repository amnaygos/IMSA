"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Navbar() {
  return (
    <header className="w-full bg-swiss-white">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center w-full px-6 lg:px-12 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center group">
          <Logo variant="dark" />
          <div className="h-6 w-px bg-swiss-black/10 mx-3" />
          <img 
            src="/images/IMSA.png" 
            alt="International Movement & Science Academy" 
            className="h-8 w-auto invert contrast-200" 
          />
        </Link>
        
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex justify-end gap-12 font-mono text-sm tracking-widest uppercase items-center mr-8">
          <Link href="#about" className="hover:opacity-60 transition-opacity">About</Link>
          <Link href="#courses" className="hover:opacity-60 transition-opacity">Courses</Link>
          <Link href="#nasm" className="hover:opacity-60 transition-opacity">NASM Cert</Link>
          <Link href="#admissions" className="hover:opacity-60 transition-opacity">Enroll</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="outline" size="sm" className="hidden border-swiss-black bg-transparent text-swiss-black lg:flex rounded-none px-6 py-4 uppercase font-sans tracking-widest border border-solid">
            Portal Login
          </Button>
        </div>
      </div>
    </header>
  );
}
