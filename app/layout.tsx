import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Anshul | AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Anshul — AI/ML Engineer specializing in deep reinforcement learning, causal AI, and full-stack development. MSc Artificial Intelligence, University of Limerick.",
  keywords: [
    "Anshul",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Deep Reinforcement Learning",
    "Portfolio",
  ],
  openGraph: {
    title: "Anshul | AI/ML Engineer & Full-Stack Developer",
    description:
      "AI/ML Engineer specializing in deep reinforcement learning, causal AI, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
