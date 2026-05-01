"use client";

import { useRef, type ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { motion, useInView, useReducedMotion } from "framer-motion";
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

function CategoryRowInner({ item }: { item: CategoryItem }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-between py-8 md:py-10 px-4 md:px-6 border-b border-white/10 transition-all duration-500",
        "group-hover:bg-white/[0.03] group-focus-visible:bg-white/[0.03]",
        "group-hover:shadow-[inset_0_0_60px_rgba(255,255,255,0.03)]",
        "group-active:bg-white/[0.05]",
      )}
    >
      {/* Animated left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(122, 26, 26, 0.6), transparent)",
        }}
      />

      {/* Left: number + title */}
      <div className="relative z-10 flex items-center gap-6 md:gap-10">
        {item.icon && (
          <span
            className="text-sm w-6 text-right font-mono text-white/20 transition-colors duration-300 group-hover:text-primary group-focus-visible:text-primary"
          >
            {item.icon}
          </span>
        )}
        <h3
          className={cn(
            "font-serif tracking-wide text-[#999] origin-left transition-all duration-400 ease-out",
            "group-hover:text-white group-hover:scale-[1.03] group-hover:translate-x-1",
            "group-focus-visible:text-white group-focus-visible:scale-[1.03] group-focus-visible:translate-x-1",
            item.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
          )}
        >
          {item.title}
        </h3>
      </div>

      {/* Right: category + arrow */}
      <div className="relative z-10 flex items-center gap-6 md:gap-8">
        {item.subtitle && (
          <span className="hidden sm:block text-sm uppercase tracking-wider text-[#999]/60 transition-colors duration-300 group-hover:text-white/50 group-focus-visible:text-white/50">
            {item.subtitle}
          </span>
        )}
        <svg
          className="w-5 h-5 shrink-0 text-[#999]/40 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-focus-visible:text-primary group-focus-visible:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}

function CategoryRowMotion({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={
        shouldReduce
          ? { opacity: 0 }
          : { opacity: 0, y: 32, filter: "blur(6px)" }
      }
      animate={
        inView
          ? shouldReduce
            ? { opacity: 1 }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
          : undefined
      }
      transition={{
        duration: shouldReduce ? 0.3 : 0.7,
        delay: shouldReduce ? 0 : index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function CategoryList({ items, className }: CategoryListProps) {
  const focusRingClass =
    "block group outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-inset";

  return (
    <div className={cn("border-t border-white/10", className)}>
      {items.map((item, index) => (
        <CategoryRowMotion key={item.id} index={index}>
          {item.href ? (
            <Link href={item.href} className={focusRingClass}>
              <CategoryRowInner item={item} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={item.onClick}
              className={cn(focusRingClass, "w-full text-left")}
            >
              <CategoryRowInner item={item} />
            </button>
          )}
        </CategoryRowMotion>
      ))}
    </div>
  );
}
