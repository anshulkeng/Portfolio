"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="border-y border-border/60 py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
          Technologies &amp; Tools
        </p>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.6)" }}
              className="glass rounded-lg px-4 py-2 text-sm text-muted transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
