"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
              Let&apos;s build something
              <br />
              extraordinary <span className="text-gradient">together.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              I&apos;m always open to discussing new opportunities,
              collaborations, or interesting problems in AI and software
              engineering.
            </p>
          </div>
          <MagneticButton href="mailto:you@example.com" variant="primary">
            Get in Touch →
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
