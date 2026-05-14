Here's the prompt rewritten with the green/lime usage rule made explicit and reinforced throughout:

---

# IMSA Landing Page — Refinement & Restructure Prompt

## Context
You are working on the IMSA (International Movement & Science Academy) landing page — a premium Next.js 14 + Tailwind + Framer Motion site. The current build follows a Swiss-inspired minimalist aesthetic with Swiss Black (#141414), Swiss Gray (#E4E3E0), and Electric Lime (#CAFF00) as a strict accent. Typography is high-contrast black-weight uppercase display with mono labels for technical metadata.

This refinement aligns the site with the official IMSA content brief and strengthens conversion-focused sections.

---

## 🟢 CRITICAL RULE — ELECTRIC LIME (GREEN) USAGE

**The Electric Lime (#CAFF00) accent must remain under 5% of total page coverage at all times.**

- **NEVER use lime for text.** All text must remain solid Black (#141414) or solid White. No green headlines, no green body copy, no green labels, no green button text.
- **NEVER use lime for large background blocks, large surfaces, or full button fills.**
- **Lime is reserved exclusively for:**
  - 1px borders and outlines (e.g. a card border, a button outline)
  - Small dots and status indicators (e.g. a 6px lime dot beside "LIMITED PLACES")
  - Icon strokes (e.g. a checkmark stroke, an arrow stroke)
  - Thin underlines beneath key elements (e.g. a 2px underline beneath a stat number)
  - Smart UI decor (e.g. a thin animated line, a divider tick, a hover border reveal, a focus ring)
  - Micro-interaction states (hover borders, animated stroke lines, drawn paths)

If you find yourself reaching for lime as a fill, a background, a text colour, or anything covering more than a few pixels of surface — stop and use Black or White instead. Lime is a precision tool, not a paint bucket.

---

## 🗑️ SECTIONS TO REMOVE

### 1. MediaHub (Blog Section)
**Remove entirely.** IMSA is not running a blog or content hub at launch. Delete the component, remove its import from `app/page.tsx`, and remove any related routing, navigation links, or references.

---

## ➕ SECTIONS TO ADD

### 1. IMSAMethod
**Placement:** After `EducationalPhilosophy`, before `WhyNASM`.

**Purpose:** Deep-dive into IMSA's unique teaching methodology — the "how" behind the academy.

**Content:**
- Headline: "A Different Kind of Education"
- Intro: "Most fitness education stops at certification. IMSA is built around something more complete — a deliberate, end-to-end teaching methodology designed to develop not just certified coaches, but genuinely competent ones."
- Four pillars:
  - **01 — Science-Led Foundations.** Every course is grounded in evidence-based sports science. Students develop a deep understanding of the principles behind what they teach.
  - **02 — Applied Practical Integration.** Theory is only the beginning. Students spend significant time on the gym floor applying concepts in real coaching environments under faculty supervision.
  - **03 — Mentor-Led Development.** Learning is guided by experienced practitioners who bring real-world coaching knowledge into the classroom.
  - **04 — Industry-Ready Outcomes.** Every element of the curriculum is designed to produce professionals who are immediately effective in the real world.

**Layout Direction:**
Vertical stepped layout. Four large numbered blocks stacked with generous spacing, each slightly offset (indent increases ~40px per block, then resets) to create a sense of progression down the page. A thin vertical spine line runs down the left side connecting all four blocks like a timeline. Each block holds the number in oversized mono display (Black or White, never lime), a black-weight uppercase heading, and a clean body paragraph. On mobile, blocks stack without the offset.

**Animation Direction:**
The vertical spine line draws downward on scroll (use `scrollYProgress` or `useInView` per block) — this line is one of the rare lime moments, rendered as a 1px lime stroke. Each block fades and slides up as the line reaches it. Numbers briefly tick (00 → 01) on entry. On hover, the number scales up slightly and a 1px lime border appears on the left edge of the block. Use a stagger delay of ~150ms between blocks.

---

### 2. IndustryStats
**Placement:** After `WhyIMSA`, before `OurCourses`.

**Purpose:** Bold editorial statement creating urgency around the industry opportunity. Strong visual contrast section.

**Content:**
- Headline: "The Opportunity is Now"
- Intro: "The global fitness and wellness industry is one of the fastest-growing sectors in the world. Demand for qualified, certified fitness professionals continues to rise across health clubs, performance facilities, online coaching, corporate wellness, and rehabilitation settings."
- Five stats:
  - $100B+ — Global Fitness Industry Value
  - 100+ — Countries Recognising NASM
  - 8–10 — Weeks To Certification
  - 3 — Delivery Formats
  - ∞ — Career Pathways Unlocked
- Closing line: "Qualified, internationally certified professionals are better positioned than ever to build sustainable, high-earning careers."
- CTAs: "Start Your Certification" · "Speak to an Advisor"

**Layout Direction:**
Inverted contrast section — Swiss Black background with white display text to break the page's visual rhythm. Five stat callouts arranged in a horizontal row on desktop (5-column grid) or 2+3 grid on tablet. Each stat shows the figure in oversized black-weight display (rendered in White — never lime), with the label beneath in mono uppercase. A thin 2px lime underline sits beneath each number — this is one of the rare moments lime gets emphasis, and it stays a thin line, never a fill. Headline centred above; CTAs centred below with white text on transparent backgrounds with thin white or lime borders (1px only).

**Animation Direction:**
Section background fades from Swiss Gray to Swiss Black as it enters the viewport. Numbers count up from zero to their final value on entry (use a `useMotionValue` + `animate` pattern, ~1.4s duration with ease-out). The lime underlines draw left-to-right beneath each number after the count completes. CTAs drop in last with a slight upward fade. Stagger stats with ~80ms delay between each.

---

### 3. FreeMasterclass
**Placement:** After `Faculty`, before `CareerPathways`.

**Purpose:** Lead-capture section — invites prospective students to experience IMSA before committing.

**Content:**
- Headline: "Experience IMSA Before You Enrol"
- Intro: "Before committing to a full course pathway, experience the IMSA teaching approach firsthand. Our free masterclass gives you direct access to our faculty, our methodology, and the quality of education you can expect."
- What you'll experience:
  - A live session delivered by NASM-certified IMSA educators
  - An introduction to the OPT™ Model and its real-world application
  - A practical coaching demonstration
  - A walkthrough of our course pathways and career outcomes
  - A live Q&A with the faculty team
- Who it's for: "Anyone considering a career in fitness, existing coaches looking to upskill, and professionals exploring NASM certification pathways."
- Date strip: "Next Masterclass · [DATE] · [TIME] · Online via Zoom · Limited Places"
- CTA: "Reserve My Free Place"

**Layout Direction:**
Full-bleed section with a strong visual anchor — large editorial photograph (cropped image of a live teaching session or looping muted video still) occupies the left 50% on desktop. Right 50% holds a content panel: section label in mono, headline in black-weight display, intro paragraph, the checklist with lime check icon strokes (icon strokes only, the text beside them stays Black), then a high-contrast date strip (Swiss Black panel with white text) just above the prominent CTA. On mobile, image stacks above the content panel. All text remains Black or White — lime appears only in the small check icon strokes and any thin border accents.

**Animation Direction:**
Background image drifts slowly in parallax (translateY ~-50px across scroll). Checklist items tick in one-by-one with the lime check icon drawing itself (SVG `pathLength` from 0 → 1) followed by the Black text fading in beside it. Use ~120ms stagger. The date strip pulses subtly on initial entry (single 1.05 scale pulse). The CTA carries a continuous low-intensity lime border-draw animation on loop (1px stroke only) to invite clicks — the button background and text stay Black/White.

---

### 4. UpcomingIntakes
**Placement:** After `AdmissionsProcess`, before `WhoIsItFor`.

**Purpose:** Concrete next-step section — turns interest into action with real dates and availability.

**Content:**
- Headline: "Your Next Step Starts Here"
- Intro: "Course intakes are rolling throughout the year across all three delivery formats. Secure your place in the next available cohort."
- Intake rows (5):
  - CPT — In-Person · [Date] · [Location] · LIMITED PLACES
  - CPT — Online · [Date] · ENROLMENT OPEN
  - CES — Hybrid · [Date] · LIMITED PLACES
  - PES — In-Person · [Date] · [Location] · LIMITED PLACES
  - Elite Performance Bundle · [Date] · CONTACT ADMISSIONS
- Open Day callout: "Open Day — [Date]. Join us for a free open day at our facilities. Meet the faculty, explore the learning environment, and find the right course pathway for you."
- CTAs: "Reserve My Place" · "Book Open Day" · "Contact Admissions"

**Layout Direction:**
Two-column asymmetric layout. Left column (40%) holds the headline, intro, and the Open Day callout — the callout sits as a distinct outlined card with a 1px lime border (one of the few accent moments), its own internal headline, body, and CTA, with all text inside the card staying Black. Right column (60%) holds the intake list as horizontal rows separated by hairline dividers. Each row: course name in display weight (Black), format tag in mono (Black), date in mono (Black), status indicator on the right. Status uses small mono labels in Black with a 6px lime dot prefix for "LIMITED PLACES" and "FILLING FAST" — the dot is lime, the text stays Black. Each row ends with a small inline "Apply →" link in Black with a lime stroke arrow.

**Animation Direction:**
Intake rows load top-to-bottom in a quick stagger (~80ms). The lime status dots pulse continuously and gently for any row marked "LIMITED" or "FILLING FAST" to subtly signal urgency — only the dot pulses, never any text behind it. Each row's right-side "Apply →" arrow shifts right ~4px on hover with the row's hairline divider thickening to 1.5px lime on hover only. The Open Day card slides in from the left with a ~200ms delay after the intake list settles. CTAs drop in last in sequence.

---

## 📐 FINAL SECTION ORDER

After changes, `app/page.tsx` should compose the homepage in this order:

1. Hero
2. AboutIMSA
3. OPTModel
4. EducationalPhilosophy
5. **IMSAMethod** ← NEW
6. WhyNASM
7. WhyIMSA
8. **IndustryStats** ← NEW
9. OurCourses
10. CourseDelivery
11. WhyDifferent
12. Faculty
13. **FreeMasterclass** ← NEW
14. CareerPathways
15. AdmissionsProcess
16. **UpcomingIntakes** ← NEW
17. WhoIsItFor
18. Testimonials
19. CorporatePartnership
20. LearningEnvironment
21. GlobalRecognition
22. PartnershipSection
23. PricingSection
24. VisionMission
25. CTASection
26. FAQSection

---

## 🎨 STYLING & DESIGN SYSTEM RULES (Reminder)

When building the new sections, strictly follow the existing design system:

- **Backgrounds:** Swiss Black (#141414) or Swiss Gray (#E4E3E0) only. Use background switches to break visual rhythm between sections. Lime is never a background.
- **Text:** Solid Black or solid White only. Never green text. No exceptions — not in headlines, not in labels, not in numbers, not in CTA copy.
- **Electric Lime (#CAFF00):** Strictly under 5% total page coverage. Reserved exclusively for 1px borders, small dots/indicators, icon strokes, thin underlines, smart UI decor, and micro-interaction states. Never used as a fill, background, or text colour.
- **Typography:** Black-weight uppercase display for headlines with tight tracking. Mono for step numbers, metadata, status labels, and date strips. No script or decorative fonts.
- **Negative space:** Generous. Sections breathe with significant vertical padding (≥120px desktop, ≥80px mobile).
- **Motion:** All entrance animations triggered by `useInView` — never auto-play on load. Staggers use ~80–150ms offsets. Easings: ease-out for entrances, ease-in-out for hover states. No bounce or playful spring physics — keep motion confident and editorial.
- **Hover states:** Subtle. Scale shifts (≤1.03), border reveals, opacity changes, or icon stroke animations. Avoid aggressive colour shifts. Lime borders may appear on hover, but only as 1px strokes.

---

## 🛠️ Implementation Notes

- Create the four new sections as separate components in `@/components/` following the existing component pattern.
- Hardcode all content directly in the components (matches existing convention).
- Delete `MediaHub.tsx` and remove its import from `app/page.tsx`.
- Ensure all new sections use the same `useInView` + Framer Motion patterns established in existing sections for consistency.
- For `IndustryStats`, implement the count-up using `useMotionValue` + `useTransform` for smooth performance. The stat numbers render in White on the Swiss Black background — never lime.
- For `FreeMasterclass`, the SVG check icon path animation should use `pathLength` from 0 → 1, with the stroke colour set to Electric Lime — the surrounding text stays Black.
- Audit the final build: scan every new section and confirm that lime appears only as 1px lines, small dots, icon strokes, or thin underlines. If any element shows lime as a fill, background, or text colour, replace it with Black or White.
- Verify all new sections are responsive at 375px, 768px, 1024px, and 1440px breakpoints.
