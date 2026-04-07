"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  /** Vertical offset in px — positive = moves down slower (lags behind scroll) */
  offset?: number;
  /** Opacity range: fades in as element enters viewport */
  fade?: boolean;
  className?: string;
}

export default function Parallax({
  children,
  offset = 30,
  fade = false,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y,
          ...(fade ? { opacity } : {}),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Parallax for background elements — larger offset, no content interaction */
export function ParallaxBg({
  children,
  offset = 50,
  className = "",
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className} style={{ position: "relative" }}>
      <motion.div style={{ y, position: "absolute", inset: 0 }}>
        {children}
      </motion.div>
    </div>
  );
}
