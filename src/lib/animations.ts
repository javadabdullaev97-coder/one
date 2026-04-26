import type { Variants } from "framer-motion";

/* ── Easing ──────────────────────────────────────────────────── */
export const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const snapEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Text Reveal (word-by-word) ────────────────────────── */
export const textRevealContainer: Variants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

export const textRevealWord: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: luxuryEase },
  },
};

/* ── Line Reveal (line-by-line) ────────────────────────── */
export const lineRevealContainer: Variants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: {
      staggerChildren: 0.12,
      delayChildren: delay,
    },
  }),
};

export const lineRevealItem: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

/* ── Fade ────────────────────────────────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

export const fadeInSlow: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
};

/* ── Stagger ─────────────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: snapEase },
  },
};

/* ── Line Expand ─────────────────────────────────────────────── */
export const lineExpand: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: luxuryEase },
  },
};

/* ── Parallax ────────────────────────────────────────────────────── */
export const parallaxUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: luxuryEase },
  },
};

/* ── Scale Reveal ─────────────────────────────────────────────── */
export const scaleReveal: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: snapEase },
  },
};

/* ── Slide ───────────────────────────────────────────────────────── */
export const slideFromLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

export const slideFromRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};
