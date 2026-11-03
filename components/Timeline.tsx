"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Sparkles,
  Award,
  Zap,
  Terminal,
  Rocket,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MilestoneBase {
  year: string;
  defaultQuarter: string;
  defaultTitle: string;
  defaultRole: string;
  defaultDescription: string;
  defaultAchievements: string[];
  tech: string[];
  icon: typeof Rocket;
  color: string;
}

const BASE_MILESTONES: MilestoneBase[] = [
  {
    year: "2026",
    defaultQuarter: "Present",
    defaultTitle: "Architecting Next-Gen 3D & AI Web Applications",
    defaultRole: "Full-Stack & Creative Engineering",
    defaultDescription:
      "Pushing the bleeding edge of the web with Next.js 16 (App Router & Turbopack), custom WebGL GLSL shaders, and autonomous AI-assisted developer workflows. Focusing on sub-second load times and immersive 60fps graphics.",
    defaultAchievements: [
      "Engineered NovaSphere 3D interactive showroom with custom GLSL shaders",
      "Optimized production WebGL rendering pipelines down to <15 draw calls",
      "Architected real-time WebSocket state synchronizations with zero frame drops",
    ],
    tech: ["Next.js 16", "Three.js", "GLSL", "TypeScript", "AI Workflows"],
    icon: Rocket,
    color: "from-cyan-400 to-indigo-500",
  },
  {
    year: "2025",
    defaultQuarter: "Milestone",
    defaultTitle: "Mastered High-Velocity Development & Typing Excellence",
    defaultRole: "Speed Coder & Ergonomics Specialist",
    defaultDescription:
      "Achieved a sustained 130+ WPM typing benchmark with 99.4% accuracy across competitive typing platforms. Rebuilt entire development flow around Neovim, terminal multiplexing, and keyboard-first system navigation.",
    defaultAchievements: [
      "Built and launched KeyPulse speed coding telemetry trainer",
      "Reached top 1% benchmark on global touch typing & code sprint platforms",
      "Engineered automated script setups and customized terminal workflows",
    ],
    tech: ["Neovim / Lua", "Tmux", "Zsh", "TypeScript", "Tailwind CSS"],
    icon: Flame,
    color: "from-emerald-400 to-cyan-500",
  },
  {
    year: "2024",
    defaultQuarter: "Growth",
    defaultTitle: "Deep Dive into Modern React & Serverless Ecosystem",
    defaultRole: "Full-Stack Web Architect",
    defaultDescription:
      "Transitioned to full App Router paradigms, server components, and modern serverless platforms like Supabase, Convex, and Edge runtime. Built several high-concurrency web applications.",
    defaultAchievements: [
      "Created AetherDuel cyber tactical card game with reactive multiplayer",
      "Implemented Row Level Security and Edge functions across multiple projects",
      "Mastered Framer Motion layout orchestration and fluid micro-interactions",
    ],
    tech: ["Next.js App Router", "Convex", "Supabase", "PostgreSQL", "Framer Motion"],
    icon: Zap,
    color: "from-purple-400 to-pink-500",
  },
  {
    year: "2023",
    defaultQuarter: "Expansion",
    defaultTitle: "Hackathons, Open Source & Rapid Prototyping",
    defaultRole: "Creative Frontend Developer",
    defaultDescription:
      "Participated in fast-paced collaborative sprints, building functional MVPs in 48-hour sprints. Focused on responsive design systems, accessibility, and interactive UI prototypes.",
    defaultAchievements: [
      "Placed top tier in interactive web design and front-end challenges",
      "Contributed UI components and documentation to community open-source repos",
      "Learned state management patterns (Redux, Zustand, React Query)",
    ],
    tech: ["React", "JavaScript ES6+", "Tailwind CSS", "Git", "REST APIs"],
    icon: Award,
    color: "from-indigo-400 to-blue-500",
  },
  {
    year: "2022",
    defaultQuarter: "Genesis",
    defaultTitle: "Genesis of the Coding Journey",
    defaultRole: "Aspiring Software Engineer",
    defaultDescription:
      "Wrote first lines of code. Deep dived into fundamental Computer Science concepts, data structures, algorithms, semantic HTML, and the core building blocks of the web.",
    defaultAchievements: [
      "Completed intensive foundational CS & algorithm curriculums",
      "Built first 20+ responsive web projects from scratch",
      "Cultivated deep discipline for clean code structure and semantic markup",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Algorithms", "Git"],
    icon: Terminal,
    color: "from-slate-400 to-cyan-500",
  },
];

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.timeline.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {t.timeline.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.timeline.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            {t.timeline.subtitle}
          </motion.p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative">
          {/* Central Connecting Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {BASE_MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;
              const transItem = t.timeline.items[index];

              const quarter = transItem?.quarter || milestone.defaultQuarter;
              const title = transItem?.title || milestone.defaultTitle;
              const role = transItem?.role || milestone.defaultRole;
              const description = transItem?.description || milestone.defaultDescription;
              const achievements = transItem?.achievements || milestone.defaultAchievements;

              return (
                <motion.div
                  key={milestone.year + title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Center Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${milestone.color} p-[1px] shadow-lg shadow-indigo-500/20`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? "sm:pl-10" : "sm:pr-10"
                    } w-full`}
                  >
                    <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl hover:shadow-cyan-500/10 transition-all group">
                      
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-bold flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          {milestone.year} &bull; {quarter}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {role}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 mb-5">
                        {achievements.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {milestone.tech.map((chip) => (
                          <span
                            key={chip}
                            className="px-2 py-0.5 rounded-md bg-slate-950 border border-white/10 text-[10px] font-mono text-slate-400"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
