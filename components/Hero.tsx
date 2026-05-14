"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 91;
const LERP_FACTOR = 0.08; // Cinematic interpolation — the secret sauce

export function Hero({ startAnimation }: { startAnimation: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Fix #1 & #3: All animation state lives in a ref — no React re-renders in the hot path
  const renderState = useRef({
    currentFrame: 0,
    targetFrame: 0,
    lastDrawnFrame: -1,   // Fix: Only redraw if frame changed
    rafId: 0,
  });

  const { images, isReady, progress } = useImagePreloader(
    "/videos/hero-sequence",
    FRAME_COUNT
  );

  // ── Canvas Setup ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Fix #1: Cap DPR at 1.5 — full DPR on Retina doubles the pixel count and kills perf
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Fix #5: Enable high-quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctxRef.current = ctx;
  }, []);

  // ── The One True Render Loop ──
  // Fix #2: ScrollTrigger NEVER calls drawFrame. Only this rAF loop renders.
  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const drawFrame = (frameIndex: number) => {
      const img = images[frameIndex];
      if (!img) return;

      const cW = canvas.width;
      const cH = canvas.height;
      const iRatio = img.naturalWidth / img.naturalHeight;
      const cRatio = cW / cH;

      let dW: number, dH: number, dX: number, dY: number;

      if (cRatio > iRatio) {
        dW = cW;
        dH = cW / iRatio;
        dX = 0;
        dY = (cH - dH) / 2;
      } else {
        dW = cH * iRatio;
        dH = cH;
        dX = (cW - dW) / 2;
        dY = 0;
      }

      ctx.drawImage(img, dX, dY, dW, dH);
    };

    const loop = () => {
      const state = renderState.current;

      // Fix #3: Lerp smoothing — never assign currentFrame = targetFrame directly
      state.currentFrame += (state.targetFrame - state.currentFrame) * LERP_FACTOR;

      const frame = Math.round(state.currentFrame);

      // Fix: Only redraw if frame has actually changed
      if (frame !== state.lastDrawnFrame) {
        drawFrame(frame);
        state.lastDrawnFrame = frame;
      }

      state.rafId = requestAnimationFrame(loop);
    };

    const state = renderState.current;
    
    // DRAW FIRST FRAME IMMEDIATELY
    if (images[0]) {
      drawFrame(0);
      state.lastDrawnFrame = 0;
    }

    state.rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(state.rafId);
    };
  }, [isReady, images]);

  // ── GSAP ScrollTrigger: ONLY updates targetFrame, never renders ──
  useGSAP(() => {
    if (!isReady) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        // Fix #2: Only write to targetFrame here. rAF loop handles all rendering.
        renderState.current.targetFrame = self.progress * (FRAME_COUNT - 1);
      },
    });

    // ── Entrance Animation ──
    if (startAnimation) {
      const entranceTl = gsap.timeline({
        delay: 0.1 
      });

      entranceTl.from(".hero-c1-span", 
        { opacity: 0, x: -30, duration: 1, ease: "power4.out" }
      )
      .from(".hero-h1", 
        { opacity: 0, y: 100, clipPath: "inset(0 0 100% 0)", duration: 1.5, ease: "expo.out" },
        "-=0.8"
      )
      .from(".hero-p", 
        { opacity: 0, y: 20, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .from(".hero-btns", 
        { opacity: 0, y: 20, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .from(".hero-scroll",
        { opacity: 0, duration: 1 },
        "-=0.5"
      );
    }

    // Text animations — Fix #6: NO blur. Only opacity + translateY.
    // Ensure these only start AFTER the entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
      },
    });

    // Step 1 → out (opacity + y only, no blur)
    tl.to(".hero-c1", { opacity: 0, y: -80, duration: 0.25, ease: "none" }, 0.1);

    // Step 2 → in
    tl.fromTo(".hero-c2",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.25, ease: "none" },
      0.35
    );

    // Step 2 → out
    tl.to(".hero-c2", { opacity: 0, y: -80, duration: 0.2, ease: "none" }, 0.65);

    // Step 3 → in
    tl.fromTo(".hero-c3",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.25, ease: "none" },
      0.8
    );

  }, { dependencies: [isReady], scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Loading screen */}
      {!isReady && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white">
          <div className="w-48 h-[1px] bg-swiss-black/10 overflow-hidden">
            <div
              className="h-full bg-swiss-black transition-all duration-200"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="mt-5 font-mono text-[9px] uppercase tracking-[0.5em] text-swiss-black/30">
            {Math.round(progress * 100)}%
          </span>
        </div>
      )}

      {/* Fix #8: Canvas with will-change for GPU compositing hint */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: "contents", opacity: isReady ? 1 : 0, transition: "opacity 0.6s" }}
      />

      {/* Minimal vignette — no animated blur, just a static gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Content — Fix #8: promote layers for compositing */}
      <div className="relative z-10 h-full flex items-center px-8 lg:px-32">

        {/* Step 1 */}
        <div
          className="hero-c1 absolute flex flex-col items-start text-left max-w-4xl"
          style={{ transform: "translate3d(0,0,0)", willChange: "transform, opacity" }}
        >
          <span className="hero-c1-span mb-10 inline-block border border-swiss-black/10 px-6 py-2 font-mono text-[10px] uppercase tracking-[0.4em] font-medium text-swiss-black rounded-full">
            Science in Motion
          </span>
          <h1 className="hero-h1 font-display text-[10vw] lg:text-[140px] leading-[0.8] font-black text-swiss-black mb-12 uppercase tracking-tighter">
            Unleash<br />
            Potential
          </h1>
          <p className="hero-p text-xl lg:text-2xl text-swiss-black/60 max-w-xl mb-14 leading-snug font-light">
            Biomechanical diagnostics meets elite performance.<br />
            Decoded for the ambitious.
          </p>
          <div className="hero-btns flex flex-row gap-5">
            <Button
              size="xl"
              className="bg-swiss-black text-white hover:bg-electric-lime hover:text-swiss-black transition-colors font-bold px-14 h-16 text-base rounded-none"
            >
              Start Analysis
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-swiss-black/20 text-swiss-black hover:bg-swiss-black hover:text-white transition-colors h-16 px-14 rounded-none"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className="hero-c2 absolute opacity-0 flex flex-col items-start text-left max-w-4xl"
          style={{ transform: "translate3d(0,60px,0)", willChange: "transform, opacity" }}
        >
          <h2 className="font-display text-[10vw] lg:text-[120px] leading-[0.85] font-black text-swiss-black mb-12 uppercase tracking-tighter">
            Master the<br />
            Movement
          </h2>
          <p className="text-xl lg:text-2xl text-swiss-black/60 max-w-xl mb-14 leading-snug font-light">
            Precision coaching at the molecular level.<br />
            The intersection of data and drive.
          </p>
          <Button
            size="xl"
            className="bg-swiss-black text-white hover:bg-electric-lime hover:text-swiss-black transition-colors font-bold px-16 h-16 text-base rounded-none"
          >
            Our Methods
          </Button>
        </div>

        {/* Step 3 */}
        <div
          className="hero-c3 absolute opacity-0 flex flex-col items-start text-left max-w-4xl"
          style={{ transform: "translate3d(0,60px,0)", willChange: "transform, opacity" }}
        >
          <h2 className="font-display text-[10vw] lg:text-[120px] leading-[0.85] font-black text-swiss-black mb-12 uppercase tracking-tighter">
            Elite<br />
            Standards
          </h2>
          <p className="text-xl lg:text-2xl text-swiss-black/60 max-w-xl mb-14 leading-snug font-light">
            Join the ranks of the high-performance academy.<br />
            Where movement is a masterpiece.
          </p>
          <Button
            size="xl"
            className="bg-electric-lime text-swiss-black hover:bg-swiss-black hover:text-white transition-colors font-bold px-20 h-16 text-base rounded-none"
          >
            Join the Academy
          </Button>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-b from-swiss-black via-swiss-black/20 to-transparent" />
        <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-swiss-black">Scroll</span>
      </div>
    </section>
  );
}
