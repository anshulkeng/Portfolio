"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const base =
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 ease-out";
  const styles =
    variant === "primary"
      ? "bg-accent-gradient text-white shadow-glow"
      : "glass text-text hover:border-accent2/50";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.94 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
