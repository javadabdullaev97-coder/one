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
      {/* Aurora glow — large animated blobs */}
      <motion.div
        className="absolute top-[-40%] left-[-20%] w-[70%] h-[140%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,32,32,0.45) 0%, rgba(99,13,13,0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["0%", "15%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute top-[-30%] right-[-15%] w-[60%] h-[130%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(122,26,26,0.35) 0%, rgba(74,8,8,0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["0%", "-12%", "0%"],
          y: ["0%", "8%", "0%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[50%] h-[80%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,32,32,0.3) 0%, rgba(58,6,6,0.1) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "-10%", "0%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
