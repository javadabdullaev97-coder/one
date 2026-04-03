"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  as?: "button" | "a";
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  variant = "primary",
  as = "button",
  href,
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  function handleMouse(e: MouseEvent) {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  const isPrimary = variant === "primary";

  const btn = (
    <span
      ref={btnRef}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase cursor-pointer overflow-hidden transition-all duration-300 text-foreground",
        isPrimary
          ? "bg-primary border border-primary-light/40"
          : "bg-[#0D0D0D] border border-white/[0.10]",
        hovered && isPrimary && "border-primary-light/80 shadow-[0_0_20px_rgba(122,26,26,0.4)]",
        hovered && !isPrimary && "border-primary/60 shadow-[0_0_20px_rgba(99,13,13,0.25)]",
        className,
      )}
    >
      {/* Cursor-following glow */}
      <span
        className={cn(
          "absolute w-[200px] h-[200px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50 transition-transform duration-300 ease-out",
          hovered ? "scale-125" : "scale-0",
        )}
        style={{
          left: glowPos.x,
          top: glowPos.y,
          background: isPrimary
            ? "radial-gradient(circle, rgba(200,200,200,0.15) 10%, transparent 70%)"
            : "radial-gradient(circle, rgba(99,13,13,0.5) 10%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Content — text always stays white */}
      <span className="relative z-10 inline-flex items-center gap-2 text-foreground">
        {children}
      </span>
    </span>
  );

  if (as === "a" && href) {
    return <Link href={href} className="inline-block">{btn}</Link>;
  }

  if (as === "button" && type === "submit") {
    return (
      <button type="submit" className="inline-block bg-transparent border-none p-0 m-0">
        {btn}
      </button>
    );
  }

  return <span className="inline-block">{btn}</span>;
}
