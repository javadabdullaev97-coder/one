"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_INDEX = [
  { num: "01", href: "/", label: "Home" },
  { num: "02", href: "/expertise", label: "Expertise" },
  { num: "03", href: "/insights", label: "Insights" },
  { num: "04", href: "/store", label: "Store" },
  { num: "05", href: "/contact", label: "Contact" },
];

const MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-hidden">
      {/* Full-screen glass image */}
      <div className="absolute inset-0">
        <Image
          src="/404.webp"
          alt="404 — Page Not Found"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay — dark at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
      </div>

      {/* Content — pinned to bottom */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1" />

        {/* Bottom content block */}
        <div className="px-6 lg:px-16 pb-16 md:pb-24">
          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="tabular-nums text-white/20 leading-none mb-4"
            style={{
              fontFamily: MONO,
              fontSize: "clamp(5rem, 14vw, 12rem)",
              fontWeight: 200,
              letterSpacing: "-0.04em",
            }}
          >
            404
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-light text-white leading-tight mb-4 max-w-2xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            This page doesn&apos;t exist.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-white/45 font-light leading-relaxed max-w-md mb-10"
          >
            The page you&apos;re looking for may have been moved or removed.
            {pathname && (
              <span
                className="block mt-2 line-through decoration-primary-light/50 decoration-1 text-white/30"
                style={{ fontFamily: MONO, fontSize: "0.75rem" }}
              >
                {pathname}
              </span>
            )}
          </motion.p>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {NAV_INDEX.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors duration-300"
              >
                <span
                  className="text-[10px] text-white/25 group-hover:text-primary-light transition-colors duration-300"
                  style={{ fontFamily: MONO }}
                >
                  {item.num}
                </span>
                {item.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
