"use client";

import { useEffect, useRef, useState } from "react";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import { HeroContent } from "@/components/hero";

const FRAME_COUNT = 300;
const frameSrc = (index: number) =>
  `/exploded-view/frame-${String(index).padStart(3, "0")}.webp`;

export function ExplodedView() {
  const [enhanced, setEnhanced] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [allFramesReady, setAllFramesReady] = useState(false);

  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Decide, once on the client, whether to run the animated experience at all.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) setEnhanced(true);
  }, []);

  // Preload every frame; draw frame 1 onto the canvas as soon as it lands,
  // so the visual appears immediately instead of waiting on all 300.
  useEffect(() => {
    if (!enhanced) return;
    let cancelled = false;
    let loaded = 0;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);

    const drawFirstFrame = () => {
      const canvas = canvasRef.current;
      const img = images[0];
      const ctx = canvas?.getContext("2d");
      if (!canvas || !img || !ctx) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      setFirstFrameReady(true);
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = frameSrc(i + 1);
      img.onload = img.onerror = () => {
        if (cancelled) return;
        loaded++;
        if (i === 0) drawFirstFrame();
        if (loaded === FRAME_COUNT) {
          imagesRef.current = images;
          setAllFramesReady(true);
        }
      };
      images[i] = img;
    }

    return () => {
      cancelled = true;
    };
  }, [enhanced]);

  // Wire up scroll-scrubbing once every frame is loaded.
  useEffect(() => {
    if (!allFramesReady) return;
    let trigger: ScrollTriggerType | null = null;
    let cancelled = false;

    (async () => {
      const gsapModule = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;

      gsapModule.registerPlugin(ScrollTrigger);

      const canvas = canvasRef.current;
      const outer = outerRef.current;
      const sticky = stickyRef.current;
      if (!canvas || !outer || !sticky) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const draw = (index: number) => {
        const img = imagesRef.current[index];
        if (!img) return;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };

      const state = { frame: 0 };
      trigger = ScrollTrigger.create({
        trigger: outer,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: sticky,
        onUpdate: (self) => {
          const index = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.round(self.progress * (FRAME_COUNT - 1)))
          );
          if (index !== state.frame) {
            state.frame = index;
            draw(index);
          }
        },
      });
    })();

    return () => {
      cancelled = true;
      trigger?.kill();
    };
  }, [allFramesReady]);

  const scrim = (
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/70" />
  );

  if (!enhanced) {
    return (
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-card">
        <img
          src={frameSrc(1)}
          alt="Vedere completă a componentelor auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {scrim}
        <div className="relative z-10 py-16">
          <HeroContent />
        </div>
      </section>
    );
  }

  return (
    <div ref={outerRef} className="relative" style={{ height: "400vh" }}>
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-card"
      >
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            firstFrameReady ? "opacity-100" : "opacity-0"
          }`}
        />
        {scrim}
        <div className="relative z-10 flex h-full items-center justify-center">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}
