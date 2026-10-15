"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>-_=+";
const BIN_CHARS = "01";

function randomChar(useBinary = false) {
  const set = useBinary ? BIN_CHARS : CHARS;
  return set[Math.floor(Math.random() * set.length)];
}

/** Scrambler that decodes text like a terminal/hacker effect. */
export function ScrambleText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  duration = 0.8,
  trigger = true,
  scrambleSpeed = 30,
  onHover = false,
  binary = false,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  className?: string;
  delay?: number; // seconds before starting
  duration?: number; // total decode duration in seconds
  trigger?: boolean;
  scrambleSpeed?: number; // ms per frame
  onHover?: boolean;
  binary?: boolean;
}) {
  const [display, setDisplay] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startScramble = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setIsScrambling(true);
    let frame = 0;
    const totalFrames = Math.max(10, Math.floor((duration * 1000) / scrambleSpeed));
    const textLen = text.length;

    intervalRef.current = window.setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      // How many chars are settled
      const settledCount = Math.floor(progress * textLen);

      let out = "";
      for (let i = 0; i < textLen; i++) {
        if (text[i] === " ") {
          out += " ";
        } else if (i < settledCount) {
          out += text[i];
        } else {
          out += randomChar(binary);
        }
      }
      setDisplay(out);

      if (frame >= totalFrames) {
        setDisplay(text);
        setIsScrambling(false);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      }
    }, scrambleSpeed);
  };

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(startScramble, delay * 1000);
    return () => {
      clearTimeout(t);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, text]);

  const Comp = Tag as any;

  return (
    <Comp
      className={cn(className)}
      aria-label={text}
      onMouseEnter={onHover ? startScramble : undefined}
      data-scrambling={isScrambling}
    >
      <span aria-hidden>{display}</span>
    </Comp>
  );
}

/** Each character flies up with rotation – perfect for bold uppercase titles. */
export function CharStaggerTitle({
  text,
  as: Tag = "h2",
  className,
  charClassName,
  stagger = 0.04,
  delay = 0,
  once = true,
  y = 110,
  rotate = false,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "div" | "span" | "p";
  className?: string;
  charClassName?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  y?: number;
  rotate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const chars = text.split("");

  return (
    <Tag className={cn("block overflow-hidden", className)} ref={ref as any}>
      <span className="inline-flex flex-wrap">
        {chars.map((ch, i) => (
          <motion.span
            key={`${ch}-${i}`}
            className={cn("inline-block will-change-transform", charClassName)}
            style={{ whiteSpace: ch === " " ? "pre" : undefined }}
            initial={{ y: `${y}%`, rotateX: rotate ? -90 : 0, opacity: 0 }}
            animate={inView ? { y: "0%", rotateX: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}

/** Word-level clip + blur reveal – elegant for descriptions and sub-headings. */
export function BlurWordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.04,
  once = true,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={cn("inline-block will-change-transform", wordClassName)}
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * stagger,
          }}
        >
          {w}
        </motion.span>
      ))}
    </p>
  );
}

/** Masked line reveal – each word slides from bottom with a hard clip. */
export function LineMaskReveal({
  text,
  as: Tag = "p",
  className,
  delay = 0,
  stagger = 0.06,
  once = true,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const words = text.split(" ");
  const Comp = Tag as any;

  return (
    <Comp ref={ref} className={cn("flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

/** Typewriter effect – cycles a blinking cursor. Perfect for small meta labels. */
export function TypewriterLabel({
  text,
  className,
  delay = 0,
  speed = 45,
  showCursor = true,
  trigger = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
  trigger?: boolean;
}) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setOut("");
    setDone(false);
    let idx = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        idx++;
        setOut(text.slice(0, idx));
        if (idx >= text.length) {
          clearInterval(id);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(id);
    }, delay * 1000);
    return () => clearTimeout(start);
  }, [text, delay, speed, trigger]);

  return (
    <span className={cn("font-mono", className)}>
      <span>{out}</span>
      {showCursor && (
        <span
          className={cn(
            "ml-[1px] inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-current",
            done ? "animate-pulse" : "animate-[blink_0.9s_step-end_infinite]"
          )}
        />
      )}
    </span>
  );
}

/** Count up from 0 to target when in view – great for (01) numbers and stats. */
export function CountUpSequence({
  value,
  className,
  delay = 0,
  duration = 1.2,
  once = true,
}: {
  value: string; // e.g. "(01)" or "100%"
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-20px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/\d+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[0], 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    let start = 0;
    const startTime = performance.now() + delay * 1000;

    let raf: number;
    const tick = (now: number) => {
      if (now < startTime) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / (duration * 1000));
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(eased * target);
      setDisplay(`${prefix}${String(current).padStart(match[0].length, "0")}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, delay, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}

/** Scroll-linked kinetic title – subtle scale/skew that reacts to scroll. */
export function KineticTitle({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "div";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const skew = useTransform(scrollYProgress, [0, 1], ["-2deg", "2deg"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const Comp = Tag as any;

  return (
    <motion.div ref={ref} style={{ skewY: skew, scale }} className={cn(className)}>
      <Comp className="m-0">{text}</Comp>
    </motion.div>
  );
}

/** Decrypt heading that triggers on hover – wrapper for any heading. */
export function HoverDecryptHeading({
  text,
  as: Tag = "h3",
  className,
  staticClassName,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  className?: string;
  staticClassName?: string;
}) {
  const [key, setKey] = useState(0);
  return (
    <Tag
      className={cn("group relative", className)}
      onMouseEnter={() => setKey((k) => k + 1)}
    >
      <ScrambleText
        key={key}
        text={text}
        as="span"
        className={staticClassName}
        onHover={false}
        duration={0.6}
        scrambleSpeed={25}
      />
      <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
    </Tag>
  );
}

/** A binary stream background for hacker-feel headings. */
export function DataStreamHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="animate-marquee-left flex gap-8 whitespace-nowrap font-mono text-[10px] leading-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>{Math.random() > 0.5 ? "01010101" : "10101010"}</span>
          ))}
        </div>
      </div>
      <span className="relative">{text}</span>
    </div>
  );
}
