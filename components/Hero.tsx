"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// Profile picture
import profilePic from "@/public/saidazim.jpg";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Zap,
  Terminal,
  MousePointerClick,
  Download,
  Flame,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Reset typewriter when language changes
  useEffect(() => {
    setDisplayedText("");
    setIsDeleting(false);
    setRoleIndex(0);
  }, [language]);

  // Smooth typewriter effect
  useEffect(() => {
    const roles = t.hero.typingRoles;
    if (!roles || roles.length === 0) return;
    const currentRole = roles[roleIndex % roles.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(40);
      }, 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(90);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed, t.hero.typingRoles]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Status & Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-4 sm:mb-5"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono text-cyan-300 font-medium">
                {t.hero.badge}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono text-slate-400">v3.2</span>
            </motion.div>

            {/* Main Headline for Personal Name SEO & Visual Hierarchy */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="flex flex-col items-start mb-6"
            >
              {/* Primary Personal Name & Subtle Alias Badge */}
              <span className="inline-flex items-center flex-wrap gap-2.5 sm:gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse shrink-0" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent font-sans">
                  Saidazim Saydullaxo&apos;jayev
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-cyan-400/30 text-xs sm:text-sm font-mono text-cyan-300 font-normal shadow-sm">
                  @saidazimxoja
                </span>
              </span>

              {/* Professional Title Headline */}
              <span className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                {t.hero.titlePrefix}{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
              </span>
            </motion.h1>

            {/* Interactive Dynamic Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex items-center gap-2 text-base sm:text-xl font-mono text-slate-300 mb-6 h-8"
            >
              <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
              <span className="text-cyan-400">&gt;</span>
              <span className="font-semibold text-white">{displayedText}</span>
              <span className="w-2 h-5 bg-cyan-400 inline-block animate-pulse ml-0.5" />
            </motion.div>

            {/* Paragraph Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
            >
              {t.hero.bio}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* View Projects Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-600/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{t.hero.ctaProjects}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/10 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MousePointerClick className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.ctaContact}</span>
              </a>

              {/* Quick Resume Download / View */}
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-400 hover:text-cyan-300 text-sm font-mono transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t.hero.ctaStory}</span>
              </a>
            </motion.div>

            {/* Quick Metrics Bar Under CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 w-full max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-1">
                  130<span className="text-cyan-400 text-xl">+</span>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.wpmMetric}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-1">
                  100<span className="text-purple-400 text-xl">%</span>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.stackMetric}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white flex items-center gap-1">
                  60<span className="text-emerald-400 text-xl">fps</span>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {t.hero.uxMetric}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Avatar & Cyber Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-indigo-600/30 to-purple-600/20 rounded-3xl blur-2xl -z-10 animate-pulse-glow" />

            {/* Central Card Container */}
            <div className="relative group w-full max-w-md">
              {/* Outer Glowing Border Ring */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-cyan-400 via-indigo-600 to-fuchsia-500 shadow-2xl shadow-indigo-600/40">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950/90 backdrop-blur-xl p-3 sm:p-4 border border-white/10">
                  
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                    <Image
                      src={profilePic}
                      alt="Saidazim Saydullaxo'jayev - saidazimxoja"
                      fill
                      priority
                      className="object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for Sleek Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                    {/* Top Tag inside photo */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.hero.fullstackTag}</span>
                    </div>

                    {/* Bottom Tag inside photo */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-purple-300 flex items-center gap-1.5 shadow-lg">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.hero.speedCoderTag}</span>
                    </div>
                  </div>

                  {/* Profile Card Footer Summary */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <div>
                        <div className="text-xs font-semibold text-white">Saidazim Saydullaxo&apos;jayev</div>
                        <div className="text-[11px] font-mono text-cyan-400">@saidazimxoja • {t.hero.location}</div>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-xs border border-indigo-500/30">
                      {t.hero.openToRoles}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Badges */}
              {/* Badge 1: Speed Typing Highlight */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 sm:-left-8 px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/40 shadow-xl shadow-cyan-500/20 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Zap className="w-4 h-4 fill-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">{t.hero.codingVelocity}</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-cyan-300">{t.hero.wpmPrecision}</div>
                </div>
              </motion.div>

              {/* Badge 2: Modern 3D & WebGL */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-purple-500/40 shadow-xl shadow-purple-500/20 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-4 h-4 fill-purple-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">{t.hero.interactiveGraphics}</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-purple-300">{t.hero.graphicsSub}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
