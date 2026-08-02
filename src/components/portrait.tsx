"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ScrambleText, CountUpSequence } from "@/components/motion/dynamic-headings";

/** Editorial portrait with dynamic data overlays. */
export function Portrait() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % 9999), 120);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="group relative z-10 h-[58vh] w-[34vw] max-w-[420px] overflow-hidden rounded-sm bg-[linear-gradient(180deg,#9aa3b2_0%,#5a6675_55%,#2c333d_100%)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
    >
      {/* Replace inner with <Image /> later */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white">
        {/* Center Mark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.span
            className="font-display text-[10rem] font-black leading-none tracking-tighter opacity-90"
            initial={{ filter: "blur(10px)", scale: 0.9 }}
            animate={{ filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            JK
          </motion.span>
        </div>

        {/* Scanline */}
        <motion.div
          className="absolute inset-x-0 top-0 h-px bg-white/40"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Data overlay */}
        <div className="relative w-full space-y-2">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
              FRAME_{String(frame).padStart(4, "0")}
            </span>
            <span className="flex items-center gap-1">
              ISO <CountUpSequence value="400" duration={0.5} className="text-white" />
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                <ScrambleText text="PORTRAIT • 2025" trigger duration={0.5} className="text-[10px]" />
              </p>
              <p className="mt-1 font-display text-sm font-black uppercase tracking-tight text-white">
                <ScrambleText text="JEEVAN KUMAR" trigger delay={0.8} duration={0.5} onHover />
              </p>
            </div>
            <div className="text-right font-mono text-[8px] leading-tight text-white/50">
              <div>35MM • F2.0</div>
              <div>1/125 • 2025</div>
            </div>
          </div>

          {/* Bottom data bar */}
          <div className="h-px w-full bg-white/15" />
          <div className="flex justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
            <span>SECURE_MODE: ON</span>
            <span>•</span>
            <ScrambleText text="ENCRYPTED" binary trigger duration={0.4} className="text-[8px]" />
          </div>
        </div>
      </div>

      {/* Hover bloom */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-accent/10 mix-blend-screen" />
      </div>
    </motion.div>
  );
}
