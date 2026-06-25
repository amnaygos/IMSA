"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NASMNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: [string, string][] = [
    ["About", "#about"],
    ["Certifications", "#certifications"],
    ["OPT Model", "#opt-model"],
    ["Enroll", "#enroll"],
  ];

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e0ded0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-[68px] flex items-center justify-between gap-4">
        {/* Left: logos */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <img
            src="/images/nasm-logo-white.png"
            alt="NASM"
            style={{ height: 36, width: "auto", filter: "brightness(0)" }}
          />
          <div style={{ width: 1, height: 28, backgroundColor: "#e0ded0" }} />
          <div className="flex items-center gap-2.5">
            <img
              src="/images/IMSAWHITE.svg"
              alt="IMSA"
              className="h-6 w-auto flex-shrink-0"
              style={{ filter: "brightness(0)" }}
            />
            <span
              className="hidden sm:block"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                color: "#5f5d5d",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              International Partner
            </span>
          </div>
        </div>

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "0.875rem",
                color: "#171714",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
              className="hover:opacity-60 transition-opacity"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/"
            style={{
              fontSize: "0.75rem",
              color: "#5f5d5d",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
            className="hidden lg:block hover:opacity-60 transition-opacity"
          >
            ← Back to IMSA
          </Link>
          <a
            href="#enroll"
            className="hidden sm:inline-block"
            style={{
              backgroundColor: "#e8f557",
              color: "#123257",
              padding: "10px 22px",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Get Certified →
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 -mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen
              ? <X size={20} style={{ color: "#171714" }} strokeWidth={1.5} />
              : <Menu size={20} style={{ color: "#171714" }} strokeWidth={1.5} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e0ded0" }}>
          <nav className="flex flex-col px-6 pt-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "0.875rem",
                  color: "#171714",
                  textDecoration: "none",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "13px 0",
                  borderBottom: "1px solid #f2f2e9",
                  display: "block",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-5 pt-3 flex flex-col gap-3">
            <a
              href="#enroll"
              onClick={() => setMobileOpen(false)}
              style={{
                backgroundColor: "#e8f557",
                color: "#123257",
                padding: "13px",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textDecoration: "none",
                textTransform: "uppercase",
                textAlign: "center",
                display: "block",
              }}
            >
              Get Certified →
            </a>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "0.75rem",
                color: "#5f5d5d",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                padding: "8px",
              }}
            >
              ← Back to IMSA
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
