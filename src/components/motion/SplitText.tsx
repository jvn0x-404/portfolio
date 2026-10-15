"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Renders text word-by-word with a masked reveal,
 * mirroring the premium split-text animation of the reference.
 */
export function SplitText({
  text,
  className,
  wordClassName,
  stagger = 0.04,
  delay = 0,
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  delay?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
}) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span
            className={cn("inline-block will-change-transform", wordClassName)}
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
