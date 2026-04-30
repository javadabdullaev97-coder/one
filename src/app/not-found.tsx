"use client";

import { useEffect, useState } from "react";
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

function formatTimestamp(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return { date: `${dd}.${mm}.${yyyy}`, time: `${hh}:${mi}` };
}

function toRoman(n: number) {
  const map: [number, string][] = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [v, s] of map) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
}

export default function NotFound() {
  const pathname = usePathname();
  const [stamp, setStamp] = useState({ date: "—.—.—", time: "—" });
  const [year, setYear] = useState("MMXXVI");

  useEffect(() => {
    const now = new Date();
    setStamp(formatTimestamp(now));
    setYear(toRoman(now.getFullYear()));
  }, []);

  const refSignature = pathname
    ? pathname
        .replace(/[^a-zA-Z0-9]/g, "")
        .toUpperCase()
        .slice(0, 6)
        .padEnd(6, "0")
    : "000000";

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-hidden">
      {/* Subtle vertical guide lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />

      {/* Archive header bar */}
      <div className="relative z-10 px-6 lg:px-12 pt-28 md:pt-32">
        <div
          className="flex justify-between items-center text-[10px] tracking-[0.28em] uppercase text-white/35"
          style={{ fontFamily: MONO }}
        >
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            ADVIZEN · ARCHIVE / TASHKENT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:inline"
          >
            {stamp.date} · {stamp.time}
          </motion.span>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full bg-white/[0.08] mt-4 origin-left"
        />
      </div>

      {/* Hero — glass image */}
      <section className="relative z-10 px-6 lg:px-12 pt-12 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl mx-auto"
        >
          {/* Reference tag above image */}
          <div
            className="mb-4 text-[10px] tracking-[0.32em] uppercase text-white/35 text-center"
            style={{ fontFamily: MONO }}
          >
            File · Ref.{" "}
            <span className="text-white/55">{refSignature}</span>{" "}
            / Class · IV
          </div>

          {/* Glass image container */}
          <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden">
            <Image
              src="/404.webp"
              alt="404 — Record Not Found"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            {/* Subtle dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

            {/* VOID stamp — overlaid on image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.15, rotate: -14 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 0.55, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                className="px-7 py-2.5 border-[3px] uppercase"
                style={{
                  fontFamily: MONO,
                  fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
                  letterSpacing: "0.35em",
                  fontWeight: 700,
                  color: "rgba(var(--primary-light-rgb), 0.65)",
                  borderColor: "rgba(var(--primary-light-rgb), 0.6)",
                }}
              >
                <span style={{ filter: "url(#voidGrunge)" }}>V O I D</span>
              </div>
            </motion.div>

            {/* Bottom overlay — text on image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 right-0 px-8 py-6 flex items-end justify-between"
            >
              <div>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase text-primary-light/70 mb-1"
                  style={{ fontFamily: MONO }}
                >
                  Status — Not in active index
                </p>
                <h1
                  className="text-2xl md:text-4xl font-light text-white/90 leading-tight"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  This record has been{" "}
                  <span className="text-white">withdrawn.</span>
                </h1>
              </div>
              <div
                className="hidden md:block text-right tabular-nums text-white/30 leading-tight"
                style={{ fontFamily: MONO, fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 200, letterSpacing: "-0.04em" }}
              >
                404
              </div>
            </motion.div>
          </div>

          {/* Path + description below image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <p className="text-sm text-white/40 leading-relaxed font-light italic max-w-md">
              The path you requested could not be located in our archive.
              It may have been moved, retired, or never filed.
            </p>

            {pathname && (
              <div
                className="inline-flex items-center gap-3 text-[11px] text-white/35 px-3 py-1.5 border border-white/[0.08] rounded-sm bg-white/[0.02] shrink-0"
                style={{ fontFamily: MONO }}
              >
                <span className="text-white/25">PATH</span>
                <span className="text-white/60 line-through decoration-primary-light/60 decoration-1">
                  {pathname}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* SVG filter for stamp grunge effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="voidGrunge">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>
        </defs>
      </svg>

      {/* Index of available records */}
      <section className="relative z-10 px-6 lg:px-12 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-white/[0.08]" />
            <p
              className="text-[10px] tracking-[0.32em] uppercase text-white/35"
              style={{ fontFamily: MONO }}
            >
              Active Index
            </p>
            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <ul className="divide-y divide-white/[0.06]">
            {NAV_INDEX.map((item, i) => (
              <motion.li
                key={item.num}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.7 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between py-4 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className="text-[10px] text-white/30 group-hover:text-primary-light tabular-nums tracking-[0.25em] transition-colors duration-300"
                      style={{ fontFamily: MONO }}
                    >
                      {item.num}
                    </span>
                    <span className="text-base md:text-lg text-white/65 group-hover:text-foreground transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className="text-[10px] text-white/20 group-hover:text-white/55 group-hover:translate-x-1 transition-all duration-300"
                    style={{ fontFamily: MONO }}
                  >
                    →
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Footer signature */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.1 }}
        className="relative z-10 border-t border-white/[0.06] px-6 lg:px-12 py-6"
      >
        <div
          className="flex justify-between items-center text-[10px] tracking-[0.28em] uppercase text-white/25"
          style={{ fontFamily: MONO }}
        >
          <span>Advizen Consulting</span>
          <span className="hidden md:inline">{year} · Tashkent</span>
          <span>End of record</span>
        </div>
      </motion.div>
    </main>
  );
}
