"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send, MapPin, CheckCircle2, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { MagneticButton } from "@/components/motion/MagneticButton";
import {
  CharStaggerTitle,
  ScrambleText,
  BlurWordReveal,
  CountUpSequence,
  TypewriterLabel,
  LineMaskReveal,
} from "@/components/motion/dynamic-headings";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: <GithubIcon className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
  {
    label: "Email",
    href: "mailto:hello@jeevankumar.dev",
    icon: <Mail className="h-5 w-5" />,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-white/30 focus:ring-2 focus:ring-white/10";

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#0a0a0b] py-28 lg:py-40"
    >
      {/* Subtle accent glow — stays dark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3562e3]/[0.14] blur-[160px]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Custom Section Heading — DARK VARIANT for black bg */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            <CountUpSequence
              value="(06)"
              className="font-medium text-white"
              delay={0.1}
              duration={0.9}
            />
            <span className="h-px w-8 bg-white/20" aria-hidden />
            <span className="relative overflow-hidden text-white/50">
              <TypewriterLabel
                text="Contact"
                trigger={inView}
                delay={0.3}
                speed={40}
                showCursor={false}
                className="text-white/50"
              />
            </span>
            <span className="ml-2 hidden items-center gap-1 font-mono text-[10px] text-white/20 sm:flex">
              <span className="inline-block animate-pulse">●</span>
              <ScrambleText
                text="SYS_READY"
                binary
                trigger={inView}
                delay={0.8}
                duration={0.6}
                scrambleSpeed={50}
                className="tracking-[0.2em] text-white/20"
              />
            </span>
          </div>

          <div className="group relative inline-block">
            <CharStaggerTitle
              text="LET'S CONNECT"
              as="h2"
              className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white"
              stagger={0.03}
              delay={0.15}
              y={120}
              rotate
            />
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2">
          <div>
            <CharStaggerTitle
              text="OPEN TO INTERNSHIPS & COLLABORATION."
              as="p"
              className="max-w-md font-display text-xl font-black uppercase leading-[0.9] tracking-tight text-white/90"
              stagger={0.015}
              y={80}
            />

            <BlurWordReveal
              text="Whether it's a project, a question, or just a hello — my inbox is always open. I reply within 24h."
              className="mt-4 max-w-md text-base leading-relaxed text-white/55"
              stagger={0.02}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {SOCIALS.map(({ label, href, icon }) => (
                <MagneticButton key={label} href={href} role="link">
                  <span className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm text-white/85 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/[0.12] hover:text-white">
                    {icon}
                    <ScrambleText
                      text={label.toUpperCase()}
                      trigger={false}
                      onHover
                      duration={0.4}
                      className="text-sm"
                    />
                  </span>
                </MagneticButton>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <MagneticButton role="button">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#3562e3] hover:text-white hover:shadow-[0_0_40px_rgba(53,98,227,0.4)]">
                  <Download size={16} />
                  <ScrambleText text="DOWNLOAD RESUME" trigger onHover duration={0.4} />
                </span>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/50"
            >
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-white" />
                Karnataka, India
              </span>
              <span className="h-px w-6 bg-white/15" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                <CountUpSequence value="24H" duration={0.6} className="text-white" /> AVG_REPLY •{" "}
                <ScrambleText
                  text="REMOTE_OK"
                  binary
                  trigger
                  className="text-white/50"
                />
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.05] p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <ScrambleText
                  text="CONTACT_FORM • SECURE"
                  binary
                  trigger
                  className="text-white/40"
                />
              </span>
              <CountUpSequence
                value="100% ENCRYPTED"
                duration={0.8}
                className="text-white/40"
              />
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald-400" />
                  <CharStaggerTitle
                    text="MESSAGE READY!"
                    as="h3"
                    className="mt-5 font-display text-2xl font-black uppercase text-white"
                    stagger={0.05}
                  />
                  <LineMaskReveal
                    text={`Thanks, ${form.name || "friend"}. I'll reply to you as soon as I can. (This demo form is ready to be wired to your email or backend.)`}
                    as="p"
                    className="mt-2 max-w-xs text-sm text-white/60"
                    stagger={0.01}
                  />
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
                        <ScrambleText
                          text="NAME"
                          trigger
                          duration={0.3}
                          className="text-[11px] text-white/50"
                        />
                        <span className="text-[#6b8cff]">*</span>
                      </label>
                      <input
                        className={inputClass}
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="mb-2 block flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
                        <ScrambleText
                          text="EMAIL"
                          trigger
                          duration={0.3}
                          delay={0.1}
                          className="text-[11px] text-white/50"
                        />
                        <span className="text-[#6b8cff]">*</span>
                      </label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="you@example.com"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
                      <ScrambleText
                        text="MESSAGE"
                        trigger
                        duration={0.4}
                        delay={0.2}
                        className="text-[11px] text-white/50"
                      />
                    </label>
                    <textarea
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project or opportunity…"
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#3562e3] hover:text-white hover:shadow-[0_0_40px_rgba(53,98,227,0.4)]"
                  >
                    <span className="flex items-center gap-2">
                      <ScrambleText
                        text="SEND MESSAGE"
                        trigger
                        onHover
                        duration={0.4}
                      />
                      <Send
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                  <p className="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
                    <ScrambleText
                      text="POWERED BY SECURE CHANNEL • NO SPAM"
                      binary
                      trigger
                      delay={0.5}
                      className="text-white/30"
                    />
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
