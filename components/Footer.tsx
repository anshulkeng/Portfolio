import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile, social, nav } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p className="font-display text-sm font-semibold">
          {profile.name.toUpperCase()}
          <span className="text-accent2">.</span>
        </p>

        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-text">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {social.map((item) => {
            const Icon = iconMap[item.label];
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-muted transition-colors hover:text-accent1"
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-6 text-xs text-muted/70 md:px-10">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
