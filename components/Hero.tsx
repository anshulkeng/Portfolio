"use client";

import { motion } from "framer-motion";
import { Code2, Layers, BrainCircuit, Puzzle, Download } from "lucide-react";
import NeuralCanvas from "./NeuralCanvas";
import MagneticButton from "./MagneticButton";
import { profile } from "@/lib/data";

const badgeIcons = [Code2, Layers, BrainCircuit, Puzzle];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-10">
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="mb-4 font-mono text-sm text-accent1"
          >
            Hi, I&apos;m {profile.name}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            I build intelligent
            <br />
            software that drives
            <br />
            real <span className="text-gradient">impact.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-md text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work" variant="primary">
              View My Work →
            </MagneticButton>
            <MagneticButton href="#" variant="secondary">
              <Download size={16} /> Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-text">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center gap-6 md:items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass w-full max-w-xs rounded-2xl p-5"
          >
            <div className="grid grid-cols-1 gap-3">
              {profile.badges.map((badge, i) => {
                const Icon = badgeIcons[i % badgeIcons.length];
                return (
                  <div key={badge.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent1">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{badge.label}</p>
                      <p className="text-xs text-muted">{badge.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative aspect-square w-full max-w-xs overflow-hidden rounded-full border border-accent2/30 shadow-glow animate-float"
          >
            <NeuralCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
