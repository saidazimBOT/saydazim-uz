"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Zap,
  X,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectBase {
  id: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  accentColor: string;
  defaultTitle: string;
  defaultTagline: string;
  defaultDescription: string;
  defaultDetailedStory: string;
  defaultBadge: string;
  defaultMetrics: { label: string; value: string }[];
}

const PROJECTS: ProjectBase[] = [
  {
    id: "keypulse",
    image: "/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Zustand"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    accentColor: "from-emerald-400 to-cyan-500",
    defaultTitle: "KeyPulse: Elite Speed Coding",
    defaultTagline: "Touch-Typing & Velocity Benchmark for Engineers",
    defaultDescription:
      "A high-frequency speed coding web platform built for developers to master touch typing on real production syntax. Features live WPM telemetry, zero-latency keystroke recording, and global rank leaderboards.",
    defaultDetailedStory:
      "Engineered with Next.js App Router and WebSockets to achieve sub-millisecond keystroke latency. Includes customized code snippets across TypeScript, Rust, Python, and C++, with comprehensive statistical dashboards capturing raw burst speed, consistency, and finger strain patterns.",
    defaultBadge: "Featured Speed App",
    defaultMetrics: [
      { label: "Latency", value: "<1ms" },
      { label: "WPM Peak", value: "142" },
      { label: "Accuracy", value: "99.4%" },
    ],
  },
  {
    id: "novasphere",
    image: "/projects/project-2.jpg",
    tags: ["Three.js", "WebGL", "GLSL Shaders", "Next.js", "Framer Motion"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    accentColor: "from-cyan-400 to-purple-500",
    defaultTitle: "NovaSphere 3D Showroom",
    defaultTagline: "Immersive WebGL & Three.js Visualizer",
    defaultDescription:
      "A futuristic 3D product showcase powered by custom GLSL fragment shaders, procedural lighting, orbit physics, and high-performance geometry instancing at a locked 60 FPS.",
    defaultDetailedStory:
      "Created to push the boundaries of browser-based 3D graphics. Utilizes Three.js, React Three Fiber, and custom raymarching shaders. Features interactive camera pathing, bloom post-processing, and material configurator allowing users to examine complex CAD models in real-time.",
    defaultBadge: "Interactive 3D",
    defaultMetrics: [
      { label: "Framerate", value: "60 FPS" },
      { label: "Vertices", value: "124K" },
      { label: "Draw Calls", value: "14" },
    ],
  },
  {
    id: "aetherduel",
    image: "/projects/project-3.jpg",
    tags: ["Next.js", "Convex Realtime", "Tailwind CSS", "Web Audio API", "AI Heuristics"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    accentColor: "from-purple-400 to-pink-500",
    defaultTitle: "AetherDuel: Cyber Deckbuilder",
    defaultTagline: "Tactical AI Card Battler with Procedural Visuals",
    defaultDescription:
      "A turn-based cyberpunk deck-building web game featuring algorithmic AI opponents, kinetic Framer Motion card interactions, particle cascades, and responsive turn resolution.",
    defaultDetailedStory:
      "Built with Next.js and Convex realtime backend. Players customize dynamic 30-card cyber decks with unique elemental synergies, executing offensive overclocks and quantum defense tactics against neural AI models programmed with heuristic decision trees.",
    defaultBadge: "Web Game / AI",
    defaultMetrics: [
      { label: "AI Decision", value: "40ms" },
      { label: "Cards Active", value: "120+" },
      { label: "Sync Latency", value: "15ms" },
    ],
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProjectBase = PROJECTS.find((p) => p.id === selectedProjectId);
  const selectedTrans = selectedProjectId ? t.projects.items[selectedProjectId] : null;

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {t.projects.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.projects.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const trans = t.projects.items[project.id];
            const title = trans?.title || project.defaultTitle;
            const tagline = trans?.tagline || project.defaultTagline;
            const description = trans?.description || project.defaultDescription;
            const badge = trans?.badge || project.defaultBadge;
            const metrics = trans?.metrics || project.defaultMetrics;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor}`}
                />

                {/* Image Preview Container with Zoom Effect */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge on Top Left */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{badge}</span>
                  </div>

                  {/* Quick inspect button */}
                  <button
                    onClick={() => setSelectedProjectId(project.id)}
                    className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200 hover:text-white hover:bg-slate-900 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1 shadow-lg cursor-pointer"
                  >
                    <span>{t.projects.quickSpecs}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mb-3">
                      {tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {description}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/70 border border-white/5 mb-6 text-center">
                      {metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-xs font-mono font-bold text-cyan-300">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: Live Demo & GitHub */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t.projects.liveDemo}</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>{t.projects.code}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProjectBase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono w-fit mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.projects.deepArchitecture}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {selectedTrans?.title || selectedProjectBase.defaultTitle}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mb-4">
                {selectedTrans?.tagline || selectedProjectBase.defaultTagline}
              </p>

              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-white/10">
                <Image
                  src={selectedProjectBase.image}
                  alt={selectedTrans?.title || selectedProjectBase.defaultTitle}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedTrans?.detailedStory || selectedProjectBase.defaultDetailedStory}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProjectBase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProjectBase.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  {t.projects.viewGithub}
                </a>
                <a
                  href={selectedProjectBase.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.projects.launchLiveDemo}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
