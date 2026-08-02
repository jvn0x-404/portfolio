"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "JEEVAN KUMAR";
const PHRASE = "Creating something bold.";

/** Animated loading screen shown briefly on first visit. */
export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 22 + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
      setProgress(Math.floor(current));
    }, 130);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[clamp(2rem,7vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-foreground"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              {NAME}
            </motion.h1>
          </div>

          <div className="mt-3 overflow-hidden">
            <motion.p
              className="text-sm text-muted"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              {PHRASE}
            </motion.p>
          </div>

          <div className="mt-10 w-56">
            <div className="h-px w-full overflow-hidden bg-foreground/10">
              <motion.div
                className="h-full bg-foreground"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.15 }}
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-widest text-muted">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
          </div>

          <div className="absolute bottom-8 flex w-full max-w-md items-center justify-between px-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">
            <span>© {new Date().getFullYear()}</span>
            <span>Karnataka, IN</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
