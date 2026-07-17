"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";

type Project = (typeof projects)[number] & {
  image?: string;
};

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${px * 6}deg) rotateX(${
      -py * 6
    }deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="glass group rounded-2xl p-1 transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black/20">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
          />
        ) : (
           <svg viewBox="0 0 400 250" className="h-full w-full">
            <defs>
              <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <rect width="400" height="250" fill="#0d0f17" />
            <path
              d={`M0,${140 + index * 10} C 100,${60 + index * 20} 200,${
                200 - index * 15
              } 400,${100 + index * 5}`}
              stroke={`url(#grad-${index})`}
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </svg>
        )}
      </div>
      <div className="p-5">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-accent1">
          {project.tag}
        </p>
        <h3 className="font-display text-lg font-semibold">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>
        <a
          href={project.href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors group-hover:text-accent1"
        >
          {project.cta}
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent1">
              Selected Work
            </p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-1.5 text-sm text-muted hover:text-text sm:flex"
          >
            View All Projects <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
