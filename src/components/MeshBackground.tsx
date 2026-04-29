"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MeshBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function MeshBackground({
  children,
  className,
}: MeshBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-background",
        className,
      )}
    >
      {/* Mesh gradient orbs — barely moving */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-right deep oxblood orb */}
        <motion.div
          className="absolute"
          style={{
            top: "-25%",
            right: "-15%",
            width: "75%",
            height: "130%",
            background:
              "radial-gradient(ellipse at center, rgba(122, 26, 26, 0.55) 0%, rgba(99, 13, 13, 0.22) 38%, transparent 68%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom-left muted oxblood orb */}
        <motion.div
          className="absolute"
          style={{
            bottom: "-35%",
            left: "-20%",
            width: "65%",
            height: "110%",
            background:
              "radial-gradient(ellipse at center, rgba(139, 32, 32, 0.42) 0%, rgba(74, 8, 8, 0.18) 42%, transparent 72%)",
            filter: "blur(70px)",
          }}
          animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
          transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center warm amber accent — adds sophistication */}
        <div
          className="absolute"
          style={{
            top: "20%",
            left: "25%",
            width: "50%",
            height: "55%",
            background:
              "radial-gradient(circle, rgba(180, 140, 80, 0.055) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Subtle vignette so edges fade to background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
