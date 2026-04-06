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
      {/* Aurora Gradient Layer 1 — deep sweep */}
      <div className="absolute inset-0 overflow-hidden opacity-60" aria-hidden="true">
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                #630D0D 10%,
                #4A0808 15%,
                #8B2020 20%,
                #630D0D 25%,
                #3A0606 30%)
            `,
            backgroundSize: "300% 100%",
            filter: "blur(50px)",
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

        {/* Aurora Gradient Layer 2 — texture + difference blend */}
        <motion.div
          className="absolute inset-[-10px]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                rgba(99, 13, 13, 0.1) 0%,
                rgba(99, 13, 13, 0.1) 7%,
                transparent 10%,
                transparent 12%,
                rgba(99, 13, 13, 0.1) 16%),
              repeating-linear-gradient(100deg,
                #630D0D 10%,
                #4A0808 15%,
                #7A1A1A 20%,
                #630D0D 25%,
                #2A0505 30%)
            `,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            mixBlendMode: "soft-light",
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

      {/* Vignette — pushes aurora to edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(13, 13, 13, 0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
