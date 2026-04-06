"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { luxuryEase } from "@/lib/animations";

export interface CategoryItem {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
  featured?: boolean;
}

interface CategoryListProps {
  items: CategoryItem[];
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: luxuryEase },
  },
};

function CategoryRow({ item }: { item: CategoryItem }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  function handleMouse(e: MouseEvent) {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      ref={rowRef}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-between py-8 md:py-10 px-4 md:px-6 overflow-hidden cursor-pointer"
    >
      {/* Cursor-following glow */}
      <span
        className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-out"
        style={{
          left: glowPos.x,
          top: glowPos.y,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)",
          transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0})`,
          opacity: hovered ? 1 : 0,
          zIndex: 0,
        }}
      />

      {/* Left: number + title */}
      <div className="relative z-10 flex items-center gap-6 md:gap-8">
        {item.icon && (
          <span className="text-white/20 text-sm w-6 text-right font-mono">
            {item.icon}
          </span>
        )}
        <h3
          className={cn(
            "font-serif tracking-wide transition-all duration-300 ease-out origin-left",
            item.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            hovered ? "text-white scale-[1.02]" : "text-white/30",
          )}
        >
          {item.title}
        </h3>
      </div>

      {/* Right: category + arrow */}
      <div className="relative z-10 flex items-center gap-6 md:gap-8">
        {item.subtitle && (
          <span
            className={cn(
              "hidden sm:block text-sm uppercase tracking-wider transition-colors duration-300",
              hovered ? "text-white/40" : "text-white/15",
            )}
          >
            {item.subtitle}
          </span>
        )}
        <svg
          className={cn(
            "w-5 h-5 shrink-0 transition-all duration-300",
            hovered
              ? "text-primary translate-x-1 -translate-y-1"
              : "text-white/20",
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
  );
}

export default function CategoryList({ items, className }: CategoryListProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn("divide-y divide-white/10", className)}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={rowVariants}
          onClick={item.onClick}
        >
          {item.href ? (
            <Link href={item.href} className="block">
              <CategoryRow item={item} />
            </Link>
          ) : (
            <CategoryRow item={item} />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
