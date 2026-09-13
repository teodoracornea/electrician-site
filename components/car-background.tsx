"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 300;
const frameSrc = (index: number) =>
  `/exploded-view/frame-${String(index).padStart(3, "0")}.webp`;

export function CarBackground() {
  const [enhanced, setEnhanced] = useState(false);
  const [ready, setReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);

  // Decide, once on the client, whether to animate at all.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) setEnhanced(true);
  }, []);

  // Preload every frame; draw frame 1 onto the canvas as soon as it lands,
  // so something appears immediately instead of waiting on all 300.
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
          setReady(true);
        }
      };
      images[i] = img;
    }

    return () => {
      cancelled = true;
    };
  }, [enhanced]);

  // Map the whole document's scroll progress (top of page to bottom) to a frame.
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const draw = (index: number) => {
      const img = imagesRef.current[index];
      if (!img) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const index = Math.min(
        FRAME_COUNT - 1,
        Math.round(progress * (FRAME_COUNT - 1))
      );
      if (index !== frameRef.current) {
        frameRef.current = index;
        draw(index);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ready]);

  return (
    <div className="fixed inset-0 z-0 bg-background" aria-hidden="true">
      <noscript>
        <img
          src={frameSrc(1)}
          alt=""
          className="h-full w-full object-cover"
        />
      </noscript>
      {enhanced ? (
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={frameSrc(1)}
          alt=""
          className="h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-background/35" />
    </div>
  );
}
