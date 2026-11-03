"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Cyber Gradient Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Ambient Radial Glow Gradients */}
      <div className="absolute -top-[25%] -left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent blur-[120px] animate-pulse-glow" />
      <div className="absolute top-[35%] -right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-transparent blur-[140px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      <div className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-violet-600/15 via-fuchsia-600/10 to-transparent blur-[130px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Interactive Mouse Spotlight */}
      {mounted && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: mousePos.x,
            y: mousePos.y,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)",
          }}
        />
      )}

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,38,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-15 pointer-events-none" />
    </div>
  );
}
