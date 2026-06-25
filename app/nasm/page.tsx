import Link from "next/link";
import {
  FlaskConical,
  Globe,
  BadgeCheck,
  TrendingUp,
  Users,
  GraduationCap,
} from "lucide-react";

// ─────────────────────────────────────────────
// NASM Brand Tokens
// Primary:   #123257  (midnight-sky — deep navy)
// Accent:    #e8f557  (citrus-pop — bright yellow-green)
// BG light:  #f2f2e9  (cotton — off-white/cream)
// BG warm:   #e0ded0  (linen — warm light gray)
// Teal:      #bee2e7  (morning-mist)
// Teal mid:  #66bfc7  (aqua-bliss)
// Text dark: #171714  (near-black)
// Gray:      #5f5d5d
// ─────────────────────────────────────────────

export default function NASMPartnershipPage() {
  return (
    <main
      style={{
        fontFamily: "var(--font-nasm-sans, 'Plus Jakarta Sans', sans-serif)",
        backgroundColor: "#f2f2e9",
        color: "#171714",
      }}
    >
      {/* ─────────── NAVBAR ─────────── */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e0ded0" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-[68px] flex items-center justify-between gap-8">
          {/* Left: logos */}
          <div className="flex items-center gap-4">
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

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              ["About", "#about"],
              ["Certifications", "#certifications"],
              ["OPT Model", "#opt-model"],
              ["Enroll", "#enroll"],
            ].map(([label, href]) => (
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

          {/* Right: CTAs */}
          <div className="flex items-center gap-3">
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
              style={{
                backgroundColor: "#e8f557",
                color: "#123257",
                padding: "10px 22px",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              Get Certified →
            </a>
          </div>
        </div>
      </header>

      {/* ─────────── HERO ─────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#123257", minHeight: "100svh" }}
      >
        {/* Background decorations */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-8%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            backgroundColor: "#bee2e7",
            opacity: 0.07,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-15%",
            left: "-5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            backgroundColor: "#e8f557",
            opacity: 0.05,
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(190,226,231,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(190,226,231,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-20 lg:pt-32 lg:pb-28">
          {/* Partnership badge */}
          <div
            className="inline-flex items-center gap-2.5 mb-10 px-4 py-2"
            style={{ border: "1px solid rgba(190,226,231,0.3)" }}
          >
            <div
              style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#e8f557" }}
            />
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                color: "#bee2e7",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Official NASM International Partnership
            </span>
          </div>

          {/* NASM Logo — white PNG directly on navy background */}
          <div className="mb-8">
            <img
              src="/images/nasm-logo-white.png"
              alt="NASM"
              style={{ height: 80, width: "auto" }}
            />
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
              fontWeight: 900,
              color: "#ffffff",
              fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: "1.75rem",
            }}
          >
            The World's #1<br />
            <span style={{ color: "#e8f557" }}>Fitness Certification.</span>
            <br />
            Now In Your Region.
          </h1>

          {/* Sub */}
          <p
            style={{
              color: "#bee2e7",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: 580,
              marginBottom: "2.5rem",
            }}
          >
            IMSA is an authorized NASM International Partner — delivering
            globally recognized fitness certifications with enhanced mentorship,
            practical immersion, and real-world career outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-20">
            <a
              href="#certifications"
              style={{
                backgroundColor: "#e8f557",
                color: "#123257",
                padding: "15px 36px",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Explore Programs
            </a>
            <a
              href="#about"
              style={{
                color: "#ffffff",
                padding: "15px 36px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "inline-block",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
              className="hover:border-white/60 transition-colors"
            >
              About the Partnership
            </a>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { number: "1.9M+", label: "Certified Professionals" },
              { number: "#1", label: "Accredited Certification" },
              { number: "1987", label: "Science-Backed Since" },
              { number: "180+", label: "Countries Recognized" },
            ].map(({ number, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                    fontWeight: 900,
                    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                    color: "#e8f557",
                    lineHeight: 1,
                    marginBottom: "0.35rem",
                  }}
                >
                  {number}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#bee2e7",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ABOUT PARTNERSHIP ─────────── */}
      <section id="about" className="py-24 lg:py-36" style={{ backgroundColor: "#f2f2e9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Dual logo lockup */}
          <div className="flex items-center gap-5 mb-14">
            <img src="/images/nasm-logo-white.png" alt="NASM" style={{ height: 48, width: "auto", filter: "brightness(0)" }} />
            <span style={{ color: "#e0ded0", fontSize: "1.5rem", fontWeight: 300 }}>×</span>
            <img
              src="/images/IMSAWHITE.svg"
              alt="IMSA"
              style={{ height: 32, width: "auto", filter: "brightness(0)" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left column */}
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#66bfc7",
                  marginBottom: "1.25rem",
                }}
              >
                About the Partnership
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  lineHeight: 1.1,
                  color: "#123257",
                  marginBottom: "1.5rem",
                }}
              >
                NASM Global Standards.
                <br />
                IMSA Local Excellence.
              </h2>
              <p
                style={{
                  color: "#5f5d5d",
                  fontSize: "1.1rem",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                Through this official partnership, IMSA brings the globally
                trusted NASM curriculum directly to aspiring fitness
                professionals — enhanced with hands-on mentorship, real-world
                coaching immersion, and dedicated career support.
              </p>
              <p style={{ color: "#5f5d5d", lineHeight: 1.75 }}>
                Every student who completes the programme receives the same NASM
                certification recognized by 1.9 million professionals in over
                180 countries — with the added advantage of IMSA's
                practitioner-first methodology.
              </p>
            </div>

            {/* Right column: benefit cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Official NASM Authorization",
                  desc: "Full authorization to deliver NASM certifications — the same curriculum and standards as the global benchmark.",
                },
                {
                  title: "Globally Recognized Credential",
                  desc: "Your NASM certification is accepted by employers, gyms, and clients in 180+ countries worldwide.",
                },
                {
                  title: "IMSA Mentorship Advantage",
                  desc: "Beyond the course: 1-on-1 mentor sessions, practical coaching hours, and supervised real client interactions.",
                },
                {
                  title: "Career Placement Support",
                  desc: "Direct pathways into fitness careers through IMSA's network of industry partners and employers.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e0ded0",
                    borderRadius: 10,
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "#e8f557",
                      color: "#123257",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h3
                      style={{
                        fontWeight: 700,
                        color: "#123257",
                        marginBottom: "0.3rem",
                        fontSize: "0.95rem",
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#5f5d5d", lineHeight: 1.65 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CERTIFICATIONS ─────────── */}
      <section
        id="certifications"
        className="py-24 lg:py-36"
        style={{ backgroundColor: "#123257" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-14">
            <span
              style={{
                display: "block",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#66bfc7",
                marginBottom: "1rem",
              }}
            >
              NASM Certifications
            </span>
            <h2
              style={{
                fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Choose Your Certification Path
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                code: "CPT",
                name: "Certified Personal Trainer",
                desc: "The foundation of fitness excellence. NASM's most recognized certification, covering exercise science, program design, and client coaching.",
                modules: [
                  "Exercise Science",
                  "Nutrition Fundamentals",
                  "Program Design",
                  "Client Relations",
                ],
                duration: "3 – 4 months",
                popular: true,
              },
              {
                code: "CES",
                name: "Corrective Exercise Specialist",
                desc: "Identify, assess, and correct muscle imbalances. Build careers in rehabilitation, injury prevention, and corrective movement programming.",
                modules: [
                  "Movement Assessment",
                  "Muscle Imbalance",
                  "Corrective Strategies",
                  "Programming",
                ],
                duration: "2 – 3 months",
                popular: false,
              },
              {
                code: "PES",
                name: "Performance Enhancement Specialist",
                desc: "Train athletes to peak performance. Optimize athletic conditioning, power output, and sport-specific movement patterns.",
                modules: [
                  "Athletic Conditioning",
                  "Power Development",
                  "Speed & Agility",
                  "Sport-Specific Training",
                ],
                duration: "2 – 3 months",
                popular: false,
              },
            ].map(({ code, name, desc, modules, duration, popular }) => (
              <div
                key={code}
                className="relative flex flex-col p-8"
                style={{
                  backgroundColor: popular ? "#1a3d66" : "rgba(255,255,255,0.055)",
                  border: `1px solid ${popular ? "#e8f557" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: 12,
                }}
              >
                {popular && (
                  <div
                    className="absolute -top-3.5 left-8 px-3 py-1"
                    style={{
                      backgroundColor: "#e8f557",
                      color: "#123257",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Code */}
                <div
                  style={{
                    fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                    fontWeight: 900,
                    fontSize: "3.5rem",
                    color: "#e8f557",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {code}
                </div>
                <h3
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    color: "#bee2e7",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {desc}
                </p>

                {/* Modules */}
                <div className="space-y-2 mb-6">
                  {modules.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2"
                      style={{ fontSize: "0.825rem", color: "#bee2e7" }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          backgroundColor: "#66bfc7",
                          flexShrink: 0,
                        }}
                      />
                      {m}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#66bfc7",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {duration}
                  </span>
                  <a
                    href="#enroll"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "8px 16px",
                      border: "1px solid rgba(232,245,87,0.5)",
                      color: "#e8f557",
                      textDecoration: "none",
                    }}
                    className="hover:bg-[#e8f557] hover:text-[#123257] transition-colors"
                  >
                    Enroll →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle banner */}
          <div
            className="mt-8 p-6 text-center"
            style={{
              backgroundColor: "rgba(232,245,87,0.07)",
              border: "1px solid rgba(232,245,87,0.25)",
              borderRadius: 10,
            }}
          >
            <span style={{ color: "#e8f557", fontWeight: 700, marginRight: 8 }}>
              Complete Bundle Available
            </span>
            <span style={{ color: "#bee2e7", fontSize: "0.9rem" }}>
              — CPT + CES + PES combined pathway with exclusive pricing for IMSA students
            </span>
          </div>
        </div>
      </section>

      {/* ─────────── OPT MODEL ─────────── */}
      <section id="opt-model" className="py-24 lg:py-36" style={{ backgroundColor: "#f2f2e9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mb-14">
            <span
              style={{
                display: "block",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#66bfc7",
                marginBottom: "1rem",
              }}
            >
              The Science Behind It
            </span>
            <h2
              style={{
                fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#123257",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Built on the OPT™ Model
            </h2>
            <p style={{ color: "#5f5d5d", fontSize: "1.05rem", lineHeight: 1.75 }}>
              NASM's Optimum Performance Training™ (OPT™) model is the
              evidence-based, scientifically validated training system
              underpinning every certification. A systematic, phased approach
              to client programming — the only periodization model developed
              specifically for personal training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              {
                phase: "01",
                name: "Stabilisation\nEndurance",
                accent: "#bee2e7",
                bg: "rgba(190,226,231,0.25)",
                desc: "Foundation movement patterns and joint stability",
              },
              {
                phase: "02",
                name: "Strength\nEndurance",
                accent: "#66bfc7",
                bg: "rgba(102,191,199,0.2)",
                desc: "Muscular endurance and strength base development",
              },
              {
                phase: "03",
                name: "Muscular\nHypertrophy",
                accent: "#2a7a8a",
                bg: "rgba(42,122,138,0.15)",
                desc: "Muscle size and metabolic adaptation",
              },
              {
                phase: "04",
                name: "Maximal\nStrength",
                accent: "#1a5c7a",
                bg: "rgba(26,92,122,0.15)",
                desc: "Peak force production capacity",
              },
              {
                phase: "05",
                name: "Power",
                accent: "#123257",
                bg: "rgba(18,50,87,0.12)",
                desc: "Reactive, explosive movement integration",
              },
            ].map(({ phase, name, accent, bg, desc }) => (
              <div
                key={phase}
                className="p-6 text-center"
                style={{
                  backgroundColor: bg,
                  border: "1px solid #e0ded0",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    color: accent,
                    marginBottom: "0.75rem",
                    textTransform: "uppercase",
                  }}
                >
                  Phase {phase}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    lineHeight: 1.2,
                    color: "#123257",
                    marginBottom: "0.75rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {name}
                </div>
                <div style={{ fontSize: "0.775rem", color: "#5f5d5d", lineHeight: 1.6 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-center"
            style={{ fontSize: "0.825rem", color: "#5f5d5d" }}
          >
            The OPT™ Model is the foundation of every NASM certification —
            used by fitness professionals across 180+ countries.
          </p>
        </div>
      </section>

      {/* ─────────── HOW TO ENROLL ─────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span
              style={{
                display: "block",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#66bfc7",
                marginBottom: "1rem",
              }}
            >
              Getting Started
            </span>
            <h2
              style={{
                fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#123257",
                lineHeight: 1.1,
              }}
            >
              Your Path to NASM Certification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                step: "01",
                title: "Choose Your Certification",
                desc: "Select the NASM certification path that aligns with your career goals — CPT, CES, PES, or the complete bundle.",
              },
              {
                step: "02",
                title: "Study & Train with IMSA",
                desc: "Complete the NASM curriculum with IMSA's expert faculty. Access live sessions, practical coaching hours, and 1-on-1 mentorship.",
              },
              {
                step: "03",
                title: "Get NASM Certified",
                desc: "Pass the NASM examination and earn your globally recognized certification. IMSA's preparation programme ensures you're ready.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div
                  style={{
                    fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                    fontWeight: 900,
                    fontSize: "6rem",
                    lineHeight: 1,
                    color: "#f2f2e9",
                    marginBottom: "-1.5rem",
                    userSelect: "none",
                  }}
                >
                  {step}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#123257",
                    marginBottom: "0.75rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#5f5d5d", lineHeight: 1.75, fontSize: "0.95rem" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── WHY NASM ─────────── */}
      <section className="py-24 lg:py-36" style={{ backgroundColor: "#f2f2e9" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span
              style={{
                display: "block",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#66bfc7",
                marginBottom: "1rem",
              }}
            >
              Why NASM
            </span>
            <h2
              style={{
                fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#123257",
                lineHeight: 1.1,
              }}
            >
              Science-Backed. Globally Trusted.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FlaskConical size={22} color="#123257" strokeWidth={1.75} />,
                title: "Evidence-Based Curriculum",
                desc: "Every NASM programme is grounded in peer-reviewed research and clinical evidence — not trends.",
              },
              {
                icon: <Globe size={22} color="#123257" strokeWidth={1.75} />,
                title: "Globally Recognized",
                desc: "Employers in 180+ countries specifically seek NASM-certified professionals for their reliability and quality.",
              },
              {
                icon: <BadgeCheck size={22} color="#123257" strokeWidth={1.75} />,
                title: "Highest Accreditation",
                desc: "NASM holds NCCA accreditation — the gold standard for health and fitness certification programmes.",
              },
              {
                icon: <TrendingUp size={22} color="#123257" strokeWidth={1.75} />,
                title: "Career-First Design",
                desc: "Developed in collaboration with industry professionals to ensure every skill is immediately applicable.",
              },
              {
                icon: <Users size={22} color="#123257" strokeWidth={1.75} />,
                title: "Trusted by 1.9M+ Pros",
                desc: "The world's largest community of certified fitness professionals — a network you join on day one.",
              },
              {
                icon: <GraduationCap size={22} color="#123257" strokeWidth={1.75} />,
                title: "Continuing Education",
                desc: "NASM certified professionals have access to ongoing education, specializations, and advanced credentials.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0ded0",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: "#f2f2e9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "#123257",
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#5f5d5d", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section id="enroll" style={{ backgroundColor: "#e8f557" }} className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          {/* Logo lockup */}
          <div className="flex items-center justify-center gap-5 mb-12">
            <img src="/images/nasm-logo-white.png" alt="NASM" style={{ height: 52, width: "auto", filter: "brightness(0)" }} />
            <div style={{ width: 1, height: 52, backgroundColor: "rgba(18,50,87,0.2)" }} />
            <img
              src="/images/IMSAWHITE.svg"
              alt="IMSA"
              style={{ height: 52, width: "auto", filter: "brightness(0)" }}
            />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-nasm-display, 'Barlow', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              color: "#123257",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            Ready to Become
            <br />
            NASM Certified?
          </h2>

          <p
            style={{
              color: "rgba(18,50,87,0.7)",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 2.5rem",
            }}
          >
            Join thousands of fitness professionals who have launched their careers
            through the IMSA × NASM International Partnership.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              style={{
                backgroundColor: "#123257",
                color: "#e8f557",
                padding: "15px 40px",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                display: "inline-block",
                textTransform: "uppercase",
              }}
            >
              Apply Now →
            </a>
            <a
              href="#"
              style={{
                color: "#123257",
                padding: "15px 40px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "inline-block",
                border: "2px solid rgba(18,50,87,0.3)",
              }}
              className="hover:bg-[#123257]/5 transition-colors"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer style={{ backgroundColor: "#0b2244" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 mb-12 items-start">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="/images/nasm-logo-white.png"
                  alt="NASM"
                  style={{ height: 38, width: "auto" }}
                />
                <div style={{ width: 1, height: 38, backgroundColor: "rgba(255,255,255,0.15)" }} />
                <img
                  src="/images/IMSAWHITE.svg"
                  alt="IMSA"
                  style={{ height: 38, width: "auto" }}
                />
              </div>
              <p
                style={{
                  color: "#bee2e7",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  maxWidth: 280,
                }}
              >
                The official NASM International Partnership. Bringing
                world-class fitness certification to professionals across the
                region.
              </p>
            </div>

            {/* Programs */}
            <div>
              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Programs
              </h4>
              <ul className="space-y-3">
                {["CPT Certification", "CES Certification", "PES Certification", "Bundle Program"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#certifications"
                        style={{
                          color: "#bee2e7",
                          fontSize: "0.875rem",
                          textDecoration: "none",
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                About
              </h4>
              <ul className="space-y-3">
                {["About NASM", "About IMSA", "The Partnership", "Faculty"].map((item) => (
                  <li key={item}>
                    <a
                      href="#about"
                      style={{
                        color: "#bee2e7",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p style={{ color: "#5f5d5d", fontSize: "0.75rem" }}>
              © 2025 IMSA · Official NASM International Partner. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div
                style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#e8f557" }}
              />
              <span style={{ color: "#bee2e7", fontSize: "0.75rem" }}>
                Authorized International Partner
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
