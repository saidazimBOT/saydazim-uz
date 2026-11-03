"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { useLanguage, AVAILABLE_LANGUAGES } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

interface LanguageSwitcherProps {
  className?: string;
  id?: string;
}

export default function LanguageSwitcher({
  className = "",
  id,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const reactId = useId();
  const activeLayoutId = `activeLanguageIndicator-${id || reactId}`;

  return (
    <div
      role="radiogroup"
      aria-label="Language selector"
      className={`inline-flex items-center p-1 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20 ${className}`}
    >
      {AVAILABLE_LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setLanguage(lang.code as Language)}
            className={`relative px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer select-none flex items-center gap-1 sm:gap-1.5 ${
              isActive
                ? "text-cyan-300 font-bold"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={activeLayoutId}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-indigo-500/25 to-purple-500/25 border border-cyan-400/50 rounded-lg shadow-sm shadow-cyan-500/20"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10 text-xs sm:text-sm leading-none">{lang.flag}</span>
            <span className="relative z-10 uppercase tracking-wider font-semibold text-[11px] sm:text-xs">
              {lang.code}
            </span>
          </button>
        );
      })}
    </div>
  );
}
