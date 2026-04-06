"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";

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
      className="relative flex items-center justify-between py-7 md:py-8 px-4 md:px-6 overflow-hidden cursor-pointer transition-colors duration-300"
    >
      {/* Cursor-following glow — same as MagneticButton */}
      <span
        className={cn(
          "absolute w-[400px] h-[400px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50 transition-transform duration-300 ease-out",
          hovered ? "scale-100" : "scale-0",
        )}
        style={{
          left: glowPos.x,
          top: glowPos.y,
          background: "radial-gradient(circle, rgba(200,200,200,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Left: number + title */}
      <div className="relative z-10 flex items-center gap-6 md:gap-8">
        {item.icon && (
          <span className="text-muted-dark text-sm w-6 text-right">
            {item.icon}
          </span>
        )}
        <h3
          className={cn(
            "font-serif tracking-wide text-gray-400 transition-all duration-300 ease-out origin-left",
            item.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            hovered && "text-white scale-[1.02]",
          )}
        >
          {item.title}
        </h3>
      </div>

      {/* Right: category + arrow */}
      <div className="relative z-10 flex items-center gap-6 md:gap-8">
        {item.subtitle && (
          <span className="hidden sm:block text-sm text-gray-500 uppercase tracking-wider">
            {item.subtitle}
          </span>
        )}
        <svg
          className={cn(
            "w-5 h-5 shrink-0 transition-all duration-300",
            hovered
              ? "text-primary translate-x-1 -translate-y-1"
              : "text-gray-600",
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
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn("divide-y divide-white/[0.06]", className)}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={staggerItem}
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
