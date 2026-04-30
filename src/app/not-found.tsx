"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

  // Generate a fake reference signature based on the path
  const refSignature = pathname
    ? pathname
        .replace(/[^a-zA-Z0-9]/g, "")
        .toUpperCase()
        .slice(0, 6)
        .padEnd(6, "0")
    : "000000";

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-hidden">
      {/* Subtle vertical guide lines (archive grid) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--primary-rgb), 0.08) 0%, transparent 60%)",
          filter: "blur(120px)",
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

      {/* Main content — centered */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-12 py-20 md:py-28">
        {/* Reference */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] tracking-[0.32em] uppercase text-white/35 mb-12 text-center"
          style={{ fontFamily: MONO }}
        >
          File · Ref.{" "}
          <span className="text-white/55">{refSignature}</span>{" "}
          / Class · IV
        </motion.div>

        {/* Massive 404 with VOID stamp */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="leading-[0.85] text-center select-none tabular-nums"
            style={{
              fontFamily: "var(--font-hero), serif",
              fontSize: "clamp(8rem, 24vw, 22rem)",
              fontWeight: 200,
              letterSpacing: "-0.04em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(245, 245, 245, 0.18)",
            }}
          >
            404
          </motion.h1>

          {/* VOID stamp — overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 1.2, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="relative px-6 py-2 border-[3px] uppercase"
              style={{
                fontFamily: MONO,
                fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                letterSpacing: "0.3em",
                fontWeight: 700,
                color: "rgba(var(--primary-light-rgb), 0.55)",
                borderColor: "rgba(var(--primary-light-rgb), 0.5)",
                transform: "rotate(0deg)",
                textShadow: "0 0 1px rgba(var(--primary-rgb), 0.2)",
                background: "transparent",
              }}
            >
              <span style={{ filter: "url(#voidGrunge)" }}>V O I D</span>
            </div>
          </motion.div>
        </div>

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

        {/* Description block */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 max-w-md text-center"
        >
          <p className="text-[11px] tracking-[0.32em] uppercase text-primary-light/70 mb-5"
            style={{ fontFamily: MONO }}
          >
            Status — Not in active index
          </p>
          <h2
            className="text-2xl md:text-3xl text-foreground/90 font-light leading-tight mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            This record has been
            <br />
            <span className="text-foreground">withdrawn from circulation.</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed font-light italic">
            The path you requested could not be located in our archive.
            It may have been moved, retired, or never filed.
          </p>

          {/* Path display */}
          {pathname && (
            <div
              className="mt-8 inline-flex items-center gap-3 text-[11px] text-white/35 px-3 py-1.5 border border-white/[0.08] rounded-sm bg-white/[0.02]"
              style={{ fontFamily: MONO }}
            >
              <span className="text-white/25">PATH</span>
              <span className="text-white/60 line-through decoration-primary-light/60 decoration-1">
                {pathname}
              </span>
            </div>
          )}
        </motion.div>
      </section>

      {/* Index of available records (footnotes) */}
      <section className="relative z-10 px-6 lg:px-12 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="max-w-2xl mx-auto"
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
                  delay: 1.6 + i * 0.07,
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
        transition={{ duration: 0.7, delay: 2 }}
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
