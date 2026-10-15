"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Portrait } from "@/components/portrait";
import { ScrambleText } from "@/components/motion/dynamic-headings";

const ROLES = [
  "Frontend Developer",
  "UX/UI Designer",
  "Creative",
  "Security Researcher",
  "Ethical Hacker",
  "Web Developer",
];

/** Marquee row with hover scramble + scroll-velocity skew. */
function MarqueeRow({
  text,
  direction = "left",
  index,
}: {
  text: string;
  direction?: "left" | "right";
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll velocity makes the row slightly skew
  const skew = useTransform(scrollYProgress, [0, 1], direction === "left" ? ["-1.5deg", "1.5deg"] : ["1.5deg", "-1.5deg"]);
  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? ["-4%", "4%"] : ["4%", "-4%"]);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });

  const animation = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const items = Array.from({ length: 4 });

  return (
    <motion.div
      ref={ref}
      className="relative flex w-full overflow-hidden py-1"
      style={{ skewY: skew, x: springX }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1}
          className={`flex shrink-0 items-center ${hovered ? "[animation-play-state:paused]" : animation}`}
          style={{ minWidth: "100%" }}
        >
          {items.map((_, i) => (
            <span key={i} className="flex items-center px-6 whitespace-nowrap">
              <span className="relative font-display text-[clamp(4.5rem,14vw,12rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] text-foreground">
                {/* Normal */}
                <span className={`block transition-opacity duration-200 ${hovered ? "opacity-0" : "opacity-100"}`}>
                  {text}
                </span>
                {/* Hover: scramble */}
                {hovered && (
                  <span className="absolute inset-0">
                    <ScrambleText
                      text={text.toUpperCase()}
                      as="span"
                      className="font-display font-black"
                      duration={0.5}
                      scrambleSpeed={18}
                      trigger
                    />
                  </span>
                )}
              </span>
              <span className="mx-8 font-display text-[clamp(2rem,8vw,5rem)] font-black leading-none text-accent">
                <motion.span
                  animate={{ rotate: hovered ? 180 : 0, scale: hovered ? 1.3 : 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  ✦
                </motion.span>
              </span>
            </span>
          ))}
        </div>
      ))}
      {/* Index watermark */}
      <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.3em] text-foreground/15">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

/** Live clock with ms flicker */
function LiveTime() {
  const [time, setTime] = useState("--:--:--");
  const [ms, setMs] = useState("00");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`
      );
      setMs(String(d.getMilliseconds()).padStart(3, "0").slice(0, 2));
    };
    tick();
    const id = setInterval(tick, 80);
    return () => clearInterval(id);
  }, []);
  return (
    <span suppressHydrationWarning className="inline-flex items-baseline gap-1">
      <span>{time}</span>
      <span className="text-[9px] opacity-40">.{ms}</span>
    </span>
  );
}

/** Rolling role ticker */
function RoleTicker() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % ROLES.length), 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-6 overflow-hidden font-mono text-[11px] uppercase tracking-[0.3em]">
      {ROLES.map((role, i) => (
        <motion.div
          key={role}
          className="absolute inset-0 flex items-center"
          initial={false}
          animate={{ y: i === idx ? "0%" : i < idx ? "-100%" : "100%", opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ScrambleText
            text={role.toUpperCase()}
            trigger={i === idx}
            duration={0.35}
            scrambleSpeed={22}
            className="text-foreground/70"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col bg-background pt-24 lg:pt-28">
      {/* Top ticker */}
      <div className="pointer-events-none absolute left-1/2 top-[108px] z-30 hidden -translate-x-1/2 lg:flex">
        <RoleTicker />
      </div>

      {/* Marquee stack with portrait overlay */}
      <div className="relative flex flex-1 flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <Portrait />
        </div>

        <div className="relative z-10 flex flex-col gap-1">
          <MarqueeRow text="Frontend Developer" direction="left" index={0} />
          <MarqueeRow text="UX/UI Designer" direction="right" index={1} />
          <MarqueeRow text="Creative" direction="left" index={2} />
          <MarqueeRow text="Security Researcher" direction="right" index={3} />
        </div>

        {/* Center data readout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 translate-y-[22vh] flex-col items-center gap-1 lg:flex"
        >
          <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60 backdrop-blur-md">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
            <ScrambleText text="REC • LIVE" binary trigger duration={0.5} className="tracking-[0.2em]" />
            <span>•</span>
            <LiveTime />
          </div>
        </motion.div>
      </div>

      {/* Bottom meta bar */}
      <div className="relative z-30 flex items-end justify-between gap-4 px-6 pb-6 lg:px-10 lg:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70"
        >
          <span>Based in Karnataka, India</span>
          <span aria-hidden>·</span>
          <LiveTime />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/80 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 status-pulse" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <ScrambleText text="Open to Work" trigger delay={0.9} duration={0.4} onHover />
        </motion.div>
      </div>
    </section>
  );
}
