"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

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

function CategoryRow({ item, index }: { item: CategoryItem; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 40, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex items-center justify-between py-8 md:py-10 px-4 md:px-6 cursor-pointer border-b border-white/10 transition-all duration-500",
        hovered && "bg-white/[0.03] shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]",
      )}
    >

      {/* Animated left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ease-out"
        style={{
          background: hovered
            ? "linear-gradient(to bottom, transparent, rgba(122, 26, 26, 0.6), transparent)"
            : "transparent",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Left: number + title */}
      <div className="relative z-10 flex items-center gap-6 md:gap-10">
        {item.icon && (
          <span
            className={cn(
              "text-sm w-6 text-right font-mono transition-all duration-300",
              hovered ? "text-primary" : "text-white/20",
            )}
          >
            {item.icon}
          </span>
        )}
        <h3
          className={cn(
            "font-serif tracking-wide transition-all duration-400 ease-out origin-left",
            item.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            hovered ? "text-white scale-[1.03] translate-x-1" : "text-[#999]",
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
              "hidden sm:block text-sm uppercase tracking-wider transition-all duration-300",
              hovered ? "text-white/50" : "text-[#999]/60",
            )}
          >
            {item.subtitle}
          </span>
        )}
        <svg
          className={cn(
            "w-5 h-5 shrink-0 transition-all duration-300",
            hovered
              ? "text-primary translate-x-1"
              : "text-[#999]/40",
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function CategoryList({ items, className }: CategoryListProps) {
  return (
    <div className={cn("border-t border-white/10", className)}>
      {items.map((item, index) =>
        item.href ? (
          <Link key={item.id} href={item.href} className="block">
            <CategoryRow item={item} index={index} />
          </Link>
        ) : (
          <div key={item.id} onClick={item.onClick}>
            <CategoryRow item={item} index={index} />
          </div>
        ),
      )}
    </div>
  );
}
