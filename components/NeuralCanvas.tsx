"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  layer: number;
};

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf: number;

    const LAYER_COUNT = 4;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rebuild nodes in a loose "neural layer" formation
      nodes = [];
      const nodesPerLayer = Math.max(3, Math.round(height / 90));
      for (let l = 0; l < LAYER_COUNT; l++) {
        for (let n = 0; n < nodesPerLayer; n++) {
          const baseX = (width / (LAYER_COUNT - 1)) * l;
          const baseY = (height / (nodesPerLayer + 1)) * (n + 1);
          nodes.push({
            x: baseX + (Math.random() - 0.5) * 40,
            y: baseY + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            layer: l,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // connections: link nodes to nearby nodes in the next layer
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          if (Math.abs(a.layer - b.layer) !== 1) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = width / (LAYER_COUNT - 1) + 90;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(56,189,248,${alpha})`);
            grad.addColorStop(1, `rgba(168,85,247,${alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const node of nodes) {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(148,163,255,0.9)";
        ctx.shadowColor = "rgba(99,102,241,0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70"
    />
  );
}
