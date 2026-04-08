"use client";

import { motion } from "framer-motion";
import { scaleReveal } from "@/lib/animations";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  if (hover) {
    return (
      <motion.div
        variants={scaleReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="glow-card h-full"
      >
        <div className="glow-card-spinner" />
        <div className="glow-card-backdrop" />
        <div className={`glow-card-content h-[calc(100%-3px)] ${className}`}>
          <div className="glow-card-glow" />
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={scaleReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-[#1A1A1A]/60 backdrop-blur-xl border border-white/[0.06] overflow-hidden ${className}`}
    >
      {/* Top highlight gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      {children}
    </motion.div>
  );
}
