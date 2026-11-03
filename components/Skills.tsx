"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  Database,
  Terminal,
  Zap,
  CheckCircle,
  Flame,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type SkillCategory = "all" | "frontend" | "backend" | "tools";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools";
  level: number;
  experience: string;
  highlight: string;
  icon: typeof Code;
  color: string;
}

const BASE_SKILLS: SkillItem[] = [
  // Frontend
  {
    name: "Next.js (App Router)",
    category: "frontend",
    level: 95,
    experience: "Production Mastery",
    highlight: "Server Components, Streaming SSR, Parallel Routes & Turbopack",
    icon: Globe,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "React 19 & TypeScript",
    category: "frontend",
    level: 96,
    experience: "Core Specialty",
    highlight: "Strict type safety, custom hooks, concurrent rendering & actions",
    icon: Code,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Three.js & WebGL",
    category: "frontend",
    level: 88,
    experience: "Creative 3D",
    highlight: "Custom GLSL shaders, camera controls, particle systems & physics",
    icon: Sparkles,
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    level: 98,
    experience: "Design Systems",
    highlight: "Glassmorphism, cyber aesthetics, responsive typography & micro-details",
    icon: Layers,
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "Framer Motion",
    category: "frontend",
    level: 92,
    experience: "Kinetic UI",
    highlight: "Layout animations, gesture recognition, scroll triggers & spring choreography",
    icon: Zap,
    color: "from-pink-400 to-rose-500",
  },

  // Backend & Cloud
  {
    name: "Node.js & Edge APIs",
    category: "backend",
    level: 90,
    experience: "High Performance",
    highlight: "Serverless functions, Edge runtime, rate limiting & microservices",
    icon: Server,
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Supabase & PostgreSQL",
    category: "backend",
    level: 89,
    experience: "Relational Power",
    highlight: "Row-level security, realtime subscriptions, vector search & edge storage",
    icon: Database,
    color: "from-emerald-500 to-cyan-500",
  },
  {
    name: "Convex & Realtime State",
    category: "backend",
    level: 86,
    experience: "Instant Sync",
    highlight: "Automatic reactivity, end-to-end type sync, zero-boilerplate mutations",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "REST & WebSockets",
    category: "backend",
    level: 92,
    experience: "Low Latency",
    highlight: "Bidirectional streams, heartbeat telemetry, zero packet loss architectures",
    icon: Cpu,
    color: "from-cyan-400 to-indigo-500",
  },

  // Developer Tools & Workflow
  {
    name: "Git & Monorepo Tools",
    category: "tools",
    level: 94,
    experience: "Workflow Control",
    highlight: "Atomic commits, interactive rebases, GitHub Actions CI/CD workflows",
    icon: Terminal,
    color: "from-orange-400 to-rose-500",
  },
  {
    name: "Neovim & Terminal CLI",
    category: "tools",
    level: 95,
    experience: "Speed Flow",
    highlight: "130+ WPM typing velocity, tmux multiplexing, Lua configs & hotkeys",
    icon: Flame,
    color: "from-cyan-400 to-emerald-400",
  },
  {
    name: "AI Developer Tooling",
    category: "tools",
    level: 93,
    experience: "Force Multiplier",
    highlight: "LLM prompt chaining, autonomous agents, code synthesizers & automated QA",
    icon: Sparkles,
    color: "from-violet-400 to-purple-600",
  },
  {
    name: "Docker & Linux Systems",
    category: "tools",
    level: 85,
    experience: "Containerization",
    highlight: "Multi-stage builds, shell automation, environment parity & deployment",
    icon: Wrench,
    color: "from-blue-400 to-cyan-500",
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const filteredSkills =
    selectedCategory === "all"
      ? BASE_SKILLS
      : BASE_SKILLS.filter((s) => s.category === selectedCategory);

  const categoryTabs = [
    { id: "all" as const, label: t.skills.tabs.all, count: BASE_SKILLS.length },
    { id: "frontend" as const, label: t.skills.tabs.frontend, count: 5 },
    { id: "backend" as const, label: t.skills.tabs.backend, count: 4 },
    { id: "tools" as const, label: t.skills.tabs.tools, count: 4 },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {t.skills.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.skills.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            {t.skills.subtitle}
          </motion.p>

          {/* Category Filter Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/25 to-cyan-500/25 border border-cyan-500/40 rounded-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span className="relative z-10 px-1.5 py-0.5 rounded-full bg-slate-950/80 text-[10px] font-mono text-slate-400 border border-white/10">
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              const isHovered = activeTooltip === skill.name;
              const translation = t.skills.items[skill.name];
              const experience = translation?.experience || skill.experience;
              const highlight = translation?.highlight || skill.highlight;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActiveTooltip(skill.name)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="relative group p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Glowing hover spotlight */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Top Header of Card */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-md`}
                        >
                          <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                            <Icon className="w-5 h-5 text-cyan-400 group-hover:rotate-6 transition-transform" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400">
                            {experience}
                          </span>
                        </div>
                      </div>

                      {/* Percentage Badge */}
                      <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Highlight Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {highlight}
                    </p>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>{t.skills.proficiency}</span>
                      <span className="text-slate-300">
                        {t.skills.level} {skill.level}/100
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>

                  {/* Interactive Tooltip on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-slate-950 text-[11px] font-mono text-cyan-300 border border-cyan-500/40 shadow-2xl pointer-events-none z-30 whitespace-nowrap flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.skills.dailyProduction}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Marquee / Continuous Tech Pill Strip */}
        <div className="mt-16 p-4 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-400" />
            {t.skills.activeEcosystem}
          </span>
          {[
            "Next.js 16 (Turbopack)",
            "React 19",
            "TypeScript 5",
            "Tailwind CSS v4",
            "Three.js",
            "Framer Motion",
            "Convex",
            "Supabase",
            "PostgreSQL",
            "Zustand",
            "Radix UI",
            "Vite",
            "Docker",
            "Linux / Zsh",
          ].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 rounded-full bg-slate-950 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              {pill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
