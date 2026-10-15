"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrambleText, CountUpSequence } from "@/components/motion/dynamic-headings";

const LINKS = [
  { label: "About", href: "#about", idx: "01" },
  { label: "Skills", href: "#skills", idx: "02" },
  { label: "Projects", href: "#projects", idx: "03" },
  { label: "Education", href: "#education", idx: "04" },
  { label: "Contact", href: "#contact", idx: "05" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...LINKS.map((l) => l.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group inline-flex flex-col font-display text-2xl font-black uppercase leading-[0.85] tracking-tighter"
          >
            <span className="flex items-center gap-1">
              <ScrambleText text="JEEVAN" trigger onHover duration={0.4} className="text-2xl font-black" />
            </span>
            <span className="ml-4 flex items-center gap-1">
              <ScrambleText text="KUMAR" trigger delay={0.1} onHover duration={0.4} className="text-2xl font-black" />
              <span className="text-accent">.</span>
            </span>
          </motion.a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((link, i) => {
              const isActive = active === link.href;
              const isHovered = hoveredLink === link.href;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a
                    href={link.href}
                    className={cn(
                      "relative inline-flex items-baseline gap-1.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    <CountUpSequence
                      value={link.idx}
                      className="font-mono text-[10px] text-foreground/40"
                      delay={i * 0.05}
                      duration={0.6}
                    />
                    <span className="relative overflow-hidden">
                      <span className={`block transition-transform duration-300 ${isHovered ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
                        {link.label}
                      </span>
                      {isHovered && (
                        <span className="absolute inset-0 translate-y-0">
                          <ScrambleText text={link.label.toUpperCase()} trigger duration={0.35} scrambleSpeed={20} className="text-sm" />
                        </span>
                      )}
                    </span>
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px bg-foreground transition-all duration-500",
                        isActive || isHovered ? "w-full" : "w-0"
                      )}
                    />
                  </a>
                </motion.li>
              );
            })}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-2 px-8">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 font-display text-4xl font-black uppercase tracking-tight"
                  >
                    <span className="font-mono text-xs text-foreground/40">{link.idx}</span>
                    <ScrambleText text={link.label.toUpperCase()} trigger delay={i * 0.08} duration={0.5} className="text-4xl font-black" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-10 flex items-center gap-2 px-8 font-mono text-xs uppercase tracking-[0.25em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
              <ScrambleText text="Karnataka, India • Open to internships" trigger delay={0.5} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
