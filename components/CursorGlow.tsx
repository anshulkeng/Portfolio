"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices — cursor glow has no meaning there
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-[0.15] blur-[100px] md:block"
      style={{
        background:
          "radial-gradient(circle, #6366f1 0%, #a855f7 40%, transparent 70%)",
      }}
    />
  );
}
