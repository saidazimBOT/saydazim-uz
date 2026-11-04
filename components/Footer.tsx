"use client";

import {
  Terminal,
  ArrowUp,
  Zap,
  Phone,
} from "lucide-react";
import { GithubIcon, TelegramIcon, InstagramIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/90 pt-16 pb-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start gap-3">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <span className="font-bold tracking-tight text-lg text-white">
                Saidazim<span className="text-cyan-400">.dev</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {t.footer.bio}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 sm:gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {/* Telegram */}
              <a
                href="https://t.me/said_khujayevv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:scale-105 transition-all"
                aria-label="Telegram: @said_khujayevv"
                title="Telegram: @said_khujayevv"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/my_code.gm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:scale-105 transition-all"
                aria-label="Instagram: @my_code.gm"
                title="Instagram: @my_code.gm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Phone */}
              <a
                href="tel:+998958590550"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-105 transition-all"
                aria-label="Phone: +998 95 859 0550"
                title="Phone: +998 95 859 0550"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 hover:scale-105 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all hover:scale-105 active:scale-95 shadow-lg group cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            {t.footer.copyright}
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Zap className="w-3 h-3 text-cyan-400" />
              {t.footer.wpmMetric}
            </span>
            <span>&bull;</span>
            <span className="text-slate-400">{t.footer.layoutMetric}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
