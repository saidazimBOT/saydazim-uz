"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  PhoneCall,
  Send,
  Check,
  Copy,
  Sparkles,
} from "lucide-react";
import { GithubIcon, TelegramIcon, InstagramIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "fullstack",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [telegramDirectUrl, setTelegramDirectUrl] = useState("");

  const email = "saidazim.developer@gmail.com";
  const phone = "+998 95 859 0550";
  const phoneRaw = "+998958590550";
  const telegramHandle = "@said_khujayevv";
  const telegramUrl = "https://t.me/said_khujayevv";
  const instagramHandle = "@my_code.gm";
  const instagramUrl = "https://instagram.com/my_code.gm";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) return;

    setIsSubmitting(true);

    const categoryText =
      t.contact.categories[formData.projectType as keyof typeof t.contact.categories] ||
      formData.projectType;

    const formattedMessage = [
      "Salom Saidazim! 👋",
      "Portfoliongiz orqali yangi xabar:",
      "",
      `👤 Ism: ${formData.name}`,
      `📱 Aloqa: ${formData.contact}`,
      `📌 Yo'nalish: ${categoryText}`,
      "",
      "💬 Xabar matni:",
      formData.message,
    ].join("\n");

    const tgUrl = `https://t.me/said_khujayevv?text=${encodeURIComponent(formattedMessage)}`;
    setTelegramDirectUrl(tgUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open Telegram direct message
      if (typeof window !== "undefined") {
        window.open(tgUrl, "_blank", "noopener,noreferrer");
      }

      // Trigger Celebration Confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#06b6d4", "#6366f1", "#a855f7", "#10b981"],
      });
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
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
            <span>{t.contact.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {t.contact.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Social Hub */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Quick Phone Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{t.contact.directPhone}</h3>
                    <p className="text-xs font-mono text-emerald-400">{t.contact.phoneAvailability}</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-100 select-all">
                  {phone}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={`tel:${phoneRaw}`}
                    className="px-2.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{t.contact.callNow}</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{t.contact.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.contact.copy}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Copy Email Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{t.contact.directEmail}</h3>
                  <p className="text-xs font-mono text-cyan-400">{t.contact.responseWindow}</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-slate-200 truncate select-all">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono flex items-center gap-1.5 transition-all active:scale-95 shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Grid: Telegram, Instagram, GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
              {/* Telegram Card */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-lg transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <TelegramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      Telegram
                    </div>
                    <div className="text-xs font-mono text-sky-400/90 font-medium">{telegramHandle}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-sky-400 group-hover:translate-x-1 transition-transform">
                  {t.contact.telegramAction}
                </span>
              </a>

              {/* Instagram Card */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 hover:bg-slate-900/90 shadow-lg transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-purple-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                      Instagram
                    </div>
                    <div className="text-xs font-mono text-pink-400/90 font-medium">{instagramHandle}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-pink-400 group-hover:translate-x-1 transition-transform">
                  {t.contact.instagramAction}
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 hover:bg-slate-900/90 shadow-lg transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs font-mono text-slate-400">{t.contact.githubDesc}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                  {t.contact.githubAction}
                </span>
              </a>
            </div>

            {/* Quick Availability Badge */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.contact.availability}</span>
            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

              <h3 className="text-2xl font-bold text-white mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md">
                    {t.contact.successDesc.replace("{name}", formData.name)}
                  </p>

                  {/* Direct Telegram Action */}
                  <a
                    href={telegramDirectUrl || telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <TelegramIcon className="w-4 h-4" />
                    <span>Telegramda ochish (@said_khujayevv)</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        contact: "",
                        projectType: "fullstack",
                        message: "",
                      });
                      setTelegramDirectUrl("");
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        {t.contact.nameLabel} <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                      />
                    </div>

                    {/* Email or Telegram */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        {t.contact.contactLabel} <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        placeholder={t.contact.contactPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      {t.contact.categoryLabel}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer"
                    >
                      <option value="fullstack">{t.contact.categories.fullstack}</option>
                      <option value="threejs">{t.contact.categories.threejs}</option>
                      <option value="perf">{t.contact.categories.perf}</option>
                      <option value="role">{t.contact.categories.role}</option>
                      <option value="collab">{t.contact.categories.collab}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      {t.contact.messageLabel} <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t.contact.sendingButton}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.sendButton}</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
