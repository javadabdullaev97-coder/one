"use client";

import { type ReactNode } from "react";
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

export default function CategoryList({ items, className }: CategoryListProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn("divide-y divide-white/[0.06]", className)}
    >
      {items.map((item) => {
        const card = (
          <div className="group/row flex items-center justify-between py-7 md:py-8 px-2 md:px-4 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
            {/* Left: number + title */}
            <div className="flex items-center gap-6 md:gap-8">
              {item.icon && (
                <span className="text-muted-dark text-sm w-6 text-right">
                  {item.icon}
                </span>
              )}
              <h3
                className={cn(
                  "font-serif tracking-wide text-foreground transition-colors duration-300",
                  item.featured
                    ? "text-2xl md:text-3xl"
                    : "text-xl md:text-2xl",
                )}
              >
                {item.title}
              </h3>
            </div>

            {/* Right: category + arrow */}
            <div className="flex items-center gap-6 md:gap-8">
              {item.subtitle && (
                <span className="hidden sm:block text-sm text-gray-500 uppercase tracking-wider">
                  {item.subtitle}
                </span>
              )}
              <svg
                className="w-5 h-5 text-gray-600 group-hover/row:text-primary group-hover/row:translate-x-1 group-hover/row:-translate-y-1 transition-all duration-300 shrink-0"
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

        return (
          <motion.div
            key={item.id}
            variants={staggerItem}
            onClick={item.onClick}
          >
            {item.href ? (
              <Link href={item.href} className="block">
                {card}
              </Link>
            ) : (
              card
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
