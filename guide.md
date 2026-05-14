# IMSA — Development & Architecture Guide

This document outlines the implementation, design philosophy, and technical architecture of the International Movement & Science Academy (IMSA) landing page.

## 🚀 Overview
The IMSA landing page is a high-performance, single-page application built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** (`motion/react`). It follows a premium, Swiss-inspired aesthetic: minimalist, typography-driven, and motion-heavy.

## 🎨 Design System & Aesthetics
- **Color Palette**:
  - `Swiss Black (#141414)`: Primary background and text color.
  - `Swiss Gray (#E4E3E0)`: Secondary background and section dividers.
  - `Electric Lime (#CAFF00)`: Accent color (strictly < 5% coverage). Used only for icons, dots, subtle borders, and micro-interactions.
- **Typography**: 
  - **Display**: High-contrast, black-weight uppercase headings with tight tracking.
  - **Mono**: Technical labels, step numbers, and metadata in monospace.
  - **Text Rule**: All text must be solid Black or White. No green text highlights are allowed.
- **Visual Style**: Clean lines, large negative space, and smooth, staggered entrance animations.

## 🏗️ Component Architecture
The homepage is composed of 22+ modular sections, each located in `@/components/`.

### Core Sections
1.  **Hero**: Cinematic canvas-based intro with autonomous video sequencing.
2.  **AboutIMSA**: Dual-column layout with staggered text entrance.
3.  **OPTModel**: Interactive pyramid visualization of the NASM OPT™ framework.
4.  **EducationalPhilosophy**: 3-pillar card layout for core values.
5.  **WhyNASM**: Split layout featuring an infinite marquee of global recognition.
6.  **WhyIMSA**: Asymmetric grid highlighting the 5 key differentiators.
7.  **OurCourses**: Expandable course cards and a featured "Elite Performance Bundle."
8.  **CourseDelivery**: Tabbed interface comparing In-Person, Hybrid, and Online formats.
9.  **WhyDifferent**: Comparison table contrasting "Traditional" vs. "IMSA" approaches.
10. **Faculty**: Auto-advancing horizontal carousel of educators.
11. **CareerPathways**: Branching diagram showing graduate outcomes.
12. **AdmissionsProcess**: 4-step horizontal/vertical timeline.
13. **Testimonials**: Placeholder grid for community success stories.
14. **CorporatePartnership**: Dedicated section for B2B solutions and facility partnerships.
15. **MediaHub**: Magazine-style grid with category filtering.
16. **LearningEnvironment**: Mosaic gallery of academy facilities.
17. **WhoIsItFor**: Interactive tag-cloud for target audiences.
18. **PartnershipSection**: Highlighted collaboration with NASM.
19. **PricingSection**: Centered CTA card for pricing enquiries.
20. **GlobalRecognition**: Abstract globe visualization and global stats.
21. **VisionMission**: High-contrast split-panel mission statement.
22. **CTASection**: Final conversion section with triple-button layout.
23. **FAQSection**: Vertical accordion for common enquiries.

## 🎬 Motion & Interactivity
- **Scroll Reveals**: All sections use `useInView` to trigger entrance animations only when they enter the viewport.
- **Staggered Animations**: Lists and grids use `transition: { delay: i * offset }` to create a cascading effect.
- **Hover Effects**: Interactions are subtle (scale shifts, border reveals, or opacity changes) rather than aggressive color shifts.

## 🛠️ Maintenance & Development
- **Adding Sections**: Create a new component in `components/` and import it into `app/page.tsx` within the main stack.
- **Updating Content**: All content is hardcoded within the components for maximum performance and layout control. To update, edit the specific component file.
- **Green Usage**: When adding new elements, ensure the `electric-lime` color is used only for borders, icons, or dots. Never use it for large background blocks or text.

## 📦 Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion (`motion/react`)
- **Icons**: Custom SVG icons for maximum control.

---
*Created by Antigravity AI for IMSA — 2026*
