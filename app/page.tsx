import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import StatsBar from "@/components/StatsBar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <StatsBar />
      <CTA />
      <Footer />
    </main>
  );
}
