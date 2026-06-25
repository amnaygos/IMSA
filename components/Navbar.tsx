"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-swiss-white relative z-50">
      <div className="flex items-center justify-between w-full px-6 lg:px-12 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center group" onClick={() => setMobileOpen(false)}>
          <Logo variant="dark" />
          <div className="h-6 w-px bg-swiss-black/10 mx-3" />
          <img
            src="/images/IMSA.png"
            alt="International Movement & Science Academy"
            className="h-8 w-auto invert contrast-200"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 lg:gap-12 font-mono text-sm tracking-widest uppercase items-center">
          <Link href="#about" className="hover:opacity-60 transition-opacity">About</Link>
          <Link href="#courses" className="hover:opacity-60 transition-opacity">Courses</Link>
          <Link href="#nasm" className="hover:opacity-60 transition-opacity">NASM Cert</Link>
          <Link href="#admissions" className="hover:opacity-60 transition-opacity">Enroll</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/nasm"
              className="flex items-center px-5 py-[11px] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e8f557" }}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold" style={{ color: "#123257" }}>
                IMSA | NASM
              </span>
            </Link>
            <Button variant="outline" size="sm" className="border-swiss-black bg-transparent text-swiss-black flex rounded-none px-6 py-4 uppercase font-sans tracking-widest border border-solid">
              Portal Login
            </Button>
          </div>

          {/* Hamburger — mobile & tablet */}
          <button
            className="lg:hidden p-2 -mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen
              ? <X size={22} strokeWidth={1.5} />
              : <Menu size={22} strokeWidth={1.5} />
            }
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-swiss-black/10 bg-swiss-white">
          <nav className="flex flex-col px-6 pt-2 pb-1 font-mono text-sm tracking-widest uppercase">
            {[
              ["About", "#about"],
              ["Courses", "#courses"],
              ["NASM Cert", "#nasm"],
              ["Enroll", "#admissions"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 border-b border-swiss-black/5 hover:opacity-60 transition-opacity last:border-0"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-5 pt-3 flex flex-col gap-3">
            <Link
              href="/nasm"
              className="flex items-center justify-center py-3.5 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e8f557" }}
              onClick={() => setMobileOpen(false)}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold" style={{ color: "#123257" }}>
                IMSA | NASM
              </span>
            </Link>
            <Button variant="outline" size="sm" className="w-full border-swiss-black bg-transparent text-swiss-black rounded-none py-3 uppercase font-sans tracking-widest border border-solid">
              Portal Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
