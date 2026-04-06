"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AuroraBackground({
  children,
  className,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className,
      )}
    >
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 overflow-hidden opacity-50" aria-hidden="true">
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                #B22222 10%,
                #8B0000 15%,
                #DC143C 20%,
                #B22222 25%,
                #A0153E 30%)
            `,
            backgroundSize: "300% 100%",
            filter: "blur(80px)",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-[-10px]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                rgba(178, 34, 34, 0.1) 0%,
                rgba(178, 34, 34, 0.1) 7%,
                transparent 10%,
                transparent 12%,
                rgba(178, 34, 34, 0.1) 16%),
              repeating-linear-gradient(100deg,
                #A01C1C 10%,
                #7A0A0A 15%,
                #C41A2A 20%,
                #A01C1C 25%,
                #8A1230 30%)
            `,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            mixBlendMode: "difference",
          }}
          animate={{
            backgroundPosition: [
              "50% 50%, 50% 50%",
              "100% 50%, 150% 50%",
              "50% 50%, 50% 50%",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
