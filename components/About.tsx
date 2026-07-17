"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent2/20 via-transparent to-accent1/20" />
          <svg
            viewBox="0 0 400 300"
            className="h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="aboutGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#0d0f17" />
            {Array.from({ length: 40 }).map((_, i) => (
              <circle
                key={i}
                cx={(i * 37) % 400}
                cy={(i * 53) % 300}
                r={1.5 + (i % 3)}
                fill="url(#aboutGrad)"
                opacity={0.5}
              />
            ))}
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent1">
            About Me
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Engineering at the intersection of code and intelligence.
          </h2>
          <p className="mt-5 text-muted">
            I&apos;m an MSc Artificial Intelligence student and IT Engineer
            focused on turning research grade machine learning into real,
            usable software. My work spans deep reinforcement learning,
            causal reasoning, and full stack systems that connect data to
            product.
          </p>
          <a
            href="#work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent1 hover:text-accent3"
          >
            More About Me →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
