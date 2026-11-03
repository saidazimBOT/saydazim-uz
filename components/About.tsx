"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Keyboard,
  Layers,
  Cpu,
  Monitor,
  CheckCircle2,
  Zap,
  Activity,
  Flame,
  Gauge,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [activeSpeedTab, setActiveSpeedTab] = useState<"code" | "stats">("code");
  const [clickCount, setClickCount] = useState(0);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
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
            <span>{t.about.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {t.about.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.about.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed"
          >
            {t.about.subtitle}
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Fast & Precision Coding (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl transition-all relative overflow-hidden group"
          >
            {/* Top Accent Light */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-400" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Keyboard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.about.card1.title}</h3>
                  <p className="text-xs font-mono text-cyan-400">{t.about.card1.subtitle}</p>
                </div>
              </div>

              {/* Tab Switcher */}
              <div className="flex p-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setActiveSpeedTab("code")}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    activeSpeedTab === "code"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t.about.card1.tabStream}
                </button>
                <button
                  onClick={() => setActiveSpeedTab("stats")}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    activeSpeedTab === "stats"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t.about.card1.tabHUD}
                </button>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {t.about.card1.bio}
            </p>

            {/* Interactive Speed Content */}
            {activeSpeedTab === "code" ? (
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 font-mono text-xs text-slate-300 space-y-2 relative">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2 mb-2">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    {t.about.card1.liveTelemetry}
                  </span>
                  <span className="text-cyan-400 font-bold">{t.about.card1.peakWpm}</span>
                </div>
                <div className="text-slate-400">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">workflow</span> = &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  editor: <span className="text-emerald-300">&quot;{t.about.card1.workflowEditor}&quot;</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  navigation: <span className="text-emerald-300">&quot;{t.about.card1.workflowNav}&quot;</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  velocity: <span className="text-amber-400">&quot;{t.about.card1.workflowVelocity}&quot;</span>,
                </div>
                <div className="text-slate-400">&#125;;</div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/90 border border-white/10">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-center">
                  <div className="text-2xl font-mono font-bold text-cyan-400">130+</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
                    {t.about.card1.avgWpm}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-center">
                  <div className="text-2xl font-mono font-bold text-emerald-400">99.4%</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
                    {t.about.card1.accuracy}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-center">
                  <div className="text-2xl font-mono font-bold text-purple-400">0.05s</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
                    {t.about.card1.latency}
                  </div>
                </div>
              </div>
            )}

            {/* Quick Interactive Click Test */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                {t.about.card1.tapToPulse}
              </span>
              <button
                onClick={() => setClickCount((prev) => prev + 1)}
                className="px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all active:scale-95 cursor-pointer"
              >
                {t.about.card1.keystrokesTested} {clickCount} ⚡
              </button>
            </div>
          </motion.div>

          {/* Card 2: Modern Tech Stack (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 shadow-xl transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t.about.card2.title}</h3>
                <p className="text-xs font-mono text-indigo-400">{t.about.card2.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {t.about.card2.bio}
            </p>

            {/* Trait Pills */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                t.about.card2.traits.nextjs,
                t.about.card2.traits.threejs,
                t.about.card2.traits.tailwind,
                t.about.card2.traits.cloud,
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-3 rounded-2xl bg-slate-950/70 border border-white/5 flex flex-col justify-center"
                >
                  <div className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t.about.card2.lighthouse}</span>
            </div>
          </motion.div>

          {/* Card 3: Passion for UI/UX & Automation Tools (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 shadow-xl transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t.about.card3.title}</h3>
                <p className="text-xs font-mono text-purple-400">{t.about.card3.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              {t.about.card3.bio}
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  {t.about.card3.motionTitle}
                </span>
                <span className="text-purple-300">{t.about.card3.motionDesc}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  {t.about.card3.aiTitle}
                </span>
                <span className="text-cyan-300">{t.about.card3.aiDesc}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t.about.card3.a11yTitle}
                </span>
                <span className="text-emerald-300">{t.about.card3.a11yDesc}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Developer Workspace Photo Showcase (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.about.card4.title}</h3>
                    <p className="text-xs font-mono text-cyan-400">{t.about.card4.subtitle}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-950 border border-white/10 text-[11px] font-mono text-slate-300">
                  /workspace.jpg
                </div>
              </div>

              {/* Workspace Image Container */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group-hover:border-cyan-500/40 transition-all mb-4">
                <Image
                  src="/workspace.jpg"
                  alt="Saidazim Developer Workspace"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Badge on Photo */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300">
                  {t.about.card4.badge}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded-xl bg-slate-950/70 border border-white/5">
                <div className="text-slate-400 text-[10px]">{t.about.card4.osLabel}</div>
                <div className="font-semibold text-slate-200">{t.about.card4.osValue}</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/70 border border-white/5">
                <div className="text-slate-400 text-[10px]">{t.about.card4.switchesLabel}</div>
                <div className="font-semibold text-slate-200">{t.about.card4.switchesValue}</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/70 border border-white/5">
                <div className="text-slate-400 text-[10px]">{t.about.card4.workflowLabel}</div>
                <div className="font-semibold text-slate-200">{t.about.card4.workflowValue}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
