"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Terminal,
  Send,
  Sparkles,
} from "lucide-react";
import { GithubIcon, TelegramIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.milestones, href: "#timeline" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "timeline", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-indigo-950/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-slate-100 hover:text-cyan-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:shadow-cyan-500/40 transition-all">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                  Saidazim<span className="text-cyan-400">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 -mt-1 tracking-wider uppercase">
                  {t.nav.brandRole}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-cyan-300"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Quick Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher id="nav-desktop" />

              {/* Status Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t.nav.available}
              </div>

              {/* Telegram Link */}
              <a
                href="https://t.me/said_khujayev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all hover:scale-105"
                aria-label="Telegram: @said_khujayev"
                title="Telegram: @said_khujayev"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {/* Contact CTA */}
              <a
                href="#contact"
                className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs lg:text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{t.nav.talk}</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Actions: Language + Talk CTA + Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher id="nav-mobile-bar" className="hidden sm:inline-flex" />

              <a
                href="#contact"
                className="px-3 py-1.5 rounded-lg bg-indigo-600/80 text-white text-xs font-medium flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-cyan-300" />
                {t.nav.talkShort}
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 p-4 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-white/5 font-medium transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-slate-500">&rarr;</span>
                </a>
              ))}

              <div className="pt-3 pb-1 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Language:</span>
                <LanguageSwitcher id="nav-mobile-drawer" />
              </div>

              <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t.nav.availableLong}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://t.me/said_khujayev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-white font-mono"
                    title="@said_khujayev"
                  >
                    <TelegramIcon className="w-3.5 h-3.5" />
                    Telegram
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-mono"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
