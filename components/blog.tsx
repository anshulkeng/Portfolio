"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, MapPin, ArrowRight } from "lucide-react";

const sdeSkills = [
  "React & Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "API Design",
  "Docker",
  "AWS",
  "Vercel",
];

const practicing = [
  "RAG pipelines :- chunking, embeddings, hybrid retrieval",
  "LangGraph multi agent orchestration",
  "Hugging Face Transformers (Whisper, BLIP, BART-MNLI, sentence transformers)",
  "Docker packaging for reproducible ML deployment",
];

const learning = ["Deep Reinforcement Learning :- Implementing and training a Deep Q Network (DQN) agent with Double DQN extension to play Atari Boxing from raw pixels using TensorFlow/Keras, deploying on an NVIDIA A100 GPU cluster via Slurm."];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline flex rounded full border border-border bg-white/5 px-3 py-1.5 text xs text muted">
      {label}
    </span>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent1">
            From the Blog
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Skills I&apos;m Building
          </h2>
          <p className="mt-5 text-muted">
            I like being transparent about where I actually am  not just
            what I&apos;ve mastered, but what I&apos;m midway through and
            what&apos;s still ahead. Here&apos;s an honest snapshot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* SDE Skills */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-accent1">
                <Code2 size={16} />
              </span>
              <h3 className="font-display text-base font-semibold">
                Software Engineering
              </h3>
            </div>
            <p className="mb-4 text-sm text-muted">I ship with these.</p>
            <div className="flex flex-wrap gap-2">
              {sdeSkills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </motion.div>

          {/* Currently Practicing */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-accent1">
                <Sparkles size={16} />
              </span>
              <h3 className="font-display text-base font-semibold">
                Currently Practicing
              </h3>
            </div>
            <p className="mb-4 text-sm text-muted">
               Project based.
            </p>
            <ul className="space-y-2.5">
              {practicing.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent1" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-accent2">
                <MapPin size={16} />
              </span>
              <h3 className="font-display text-base font-semibold">
                Currently Learning
              </h3>
            </div>
            <p className="mb-4 text-sm text-muted">
              Early stage :- not yet shipped.
            </p>
            <ul className="space-y-2.5">
              {learning.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Where I am / What's next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="glass mt-6 grid grid-cols-1 gap-8 rounded-2xl p-6 md:grid-cols-2 md:p-8"
        >
          <div>
            <h3 className="font-display text-base font-semibold">
              Where I Am Right Now
            </h3>
            <p className="mt-3 text-sm text-muted">
              SupportSense :- my multimodal customer support triage project 
              is the most complete of my builds, live on GitHub with a
              working pipeline. My 2D Platformer and Genetic Programming
              income classifier are also live repos, though I&apos;m
              continuing to refine both. I&apos;d rather show real, working
              code at different stages than claim polish I haven&apos;t
              earned yet.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold">
              What&apos;s Next
            </h3>
            <p className="mt-3 text-sm text-muted">
              I&apos;m working toward applying my RAG and multi agent skills
              in a production grade project, alongside picking up Deep RL
              properly through implementation. If you&apos;re
              working on something similar  or want to compare notes on RAG
              evaluation or agent orchestration , I&apos;d love to connect.
            </p>
            <a
              href="mailto:anshulkeng51@gmail.com"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent1 hover:text-accent3"
            >
              Let&apos;s connect <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
