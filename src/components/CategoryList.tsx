"use client";

import { useState, type ReactNode } from "react";
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
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn("space-y-3", className)}
    >
      {items.map((item) => {
        const isHovered = hoveredId === item.id;

        const card = (
          <div
            className={cn(
              "relative overflow-hidden border transition-all duration-300 ease-in-out cursor-pointer",
              isHovered
                ? "h-32 border-primary shadow-lg shadow-primary/20 bg-primary/[0.04]"
                : "h-24 border-white/[0.06] hover:border-primary/40 bg-surface/40"
            )}
          >
            {/* Corner brackets on hover */}
            {isHovered && (
              <>
                <div className="absolute top-3 left-3 w-6 h-6">
                  <div className="absolute top-0 left-0 w-4 h-[1px] bg-primary" />
                  <div className="absolute top-0 left-0 w-[1px] h-4 bg-primary" />
                </div>
                <div className="absolute bottom-3 right-3 w-6 h-6">
                  <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-primary" />
                  <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-primary" />
                </div>
              </>
            )}

            {/* Content */}
            <div className="flex items-center justify-between h-full px-6 md:px-8">
              <div className="flex items-center gap-5 flex-1">
                {item.icon && (
                  <span
                    className={cn(
                      "transition-colors duration-300",
                      isHovered ? "text-primary" : "text-muted-dark"
                    )}
                  >
                    {item.icon}
                  </span>
                )}
                <div>
                  <h3
                    className={cn(
                      "font-serif tracking-wide transition-colors duration-300",
                      item.featured
                        ? "text-2xl md:text-3xl"
                        : "text-xl md:text-2xl",
                      isHovered ? "text-primary-light" : "text-foreground"
                    )}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p
                      className={cn(
                        "mt-1 text-sm transition-colors duration-300",
                        isHovered ? "text-foreground/80" : "text-muted-dark"
                      )}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Arrow on hover */}
              <motion.svg
                initial={{ opacity: 0, x: -8 }}
                animate={
                  isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
                }
                transition={{ duration: 0.2 }}
                className="w-5 h-5 text-primary shrink-0"
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
              </motion.svg>
            </div>
          </div>
        );

        return (
          <motion.div
            key={item.id}
            variants={staggerItem}
            className="relative group"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
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
