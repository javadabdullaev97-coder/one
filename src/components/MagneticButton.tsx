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
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  variant = "primary",
  as = "button",
  href,
  className = "",
  type = "button",
  disabled = false,
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

  const btn = (
    <span
      ref={btnRef}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex items-center gap-2 px-8 py-4 text-sm tracking-wider uppercase cursor-pointer overflow-hidden transition-all duration-300 text-foreground hover:scale-[1.05] rounded-full",
        variant === "primary"
          ? "bg-primary/80 border border-primary-light/30 hover:bg-primary"
          : "bg-transparent border border-white/15 hover:border-white/30",
        className,
      )}
    >
      <span
        className={cn(
          "absolute w-[250px] h-[250px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out",
          hovered ? "scale-125 opacity-100" : "scale-0 opacity-0",
        )}
        style={{
          left: glowPos.x,
          top: glowPos.y,
          background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2 text-foreground">
        {children}
      </span>
    </span>
  );

  const wrapperClass =
    "inline-block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  if (as === "a" && href) {
    return (
      <Link href={href} className={wrapperClass}>
        {btn}
      </Link>
    );
  }

  if (as === "button" && type === "submit") {
    return (
      <button type="submit" disabled={disabled} className={cn(wrapperClass, "bg-transparent border-none p-0 m-0")}>
        {btn}
      </button>
    );
  }

  return (
    <button type="button" disabled={disabled} className={cn(wrapperClass, "bg-transparent border-none p-0 m-0")}>
      {btn}
    </button>
  );
}
