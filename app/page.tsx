import BackgroundEffect from "@/components/BackgroundEffect";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-cyan-300">
      {/* Dynamic Ambient Background Effect */}
      <BackgroundEffect />

      {/* Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 w-full flex flex-col z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
