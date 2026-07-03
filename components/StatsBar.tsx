"use client";

import { motion } from "framer-motion";
import { Calendar, FolderCheck, Users, Star } from "lucide-react";
import { profile } from "@/lib/data";

const icons = [Calendar, FolderCheck, Users, Star];

export default function StatsBar() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-4">
          {profile.stats.map((stat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent1">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
