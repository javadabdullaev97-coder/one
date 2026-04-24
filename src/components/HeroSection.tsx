"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const ROCKS = [
  {
    id: 1, w: 140, h: 118,
    clip: "polygon(27% 0%, 72% 3%, 95% 22%, 100% 60%, 80% 88%, 42% 100%, 8% 90%, 0% 52%, 10% 16%)",
    pos: { left: "5%", top: "30%" }, rotate: -12, yAnim: [0, -16, 0], dur: 5.5, delay: 0,
  },
  {
    id: 2, w: 78, h: 66,
    clip: "polygon(35% 0%, 90% 10%, 100% 50%, 72% 96%, 22% 100%, 0% 58%, 14% 14%)",
    pos: { left: "17%", top: "63%" }, rotate: 18, yAnim: [0, 12, 0], dur: 4.3, delay: 1,
  },
  {
    id: 3, w: 52, h: 46,
    clip: "polygon(22% 0%, 88% 6%, 100% 44%, 62% 100%, 8% 86%, 0% 42%)",
    pos: { left: "29%", top: "53%" }, rotate: 8, yAnim: [0, -9, 0], dur: 3.8, delay: 1.8,
  },
  {
    id: 4, w: 120, h: 100,
    clip: "polygon(16% 4%, 80% 0%, 100% 35%, 88% 82%, 52% 100%, 6% 86%, 0% 42%)",
    pos: { right: "6%", top: "22%" }, rotate: 10, yAnim: [0, 14, 0], dur: 5.1, delay: 0.5,
  },
  {
    id: 5, w: 72, h: 62,
    clip: "polygon(44% 0%, 100% 24%, 82% 80%, 32% 100%, 0% 65%, 18% 10%)",
    pos: { right: "20%", top: "63%" }, rotate: -6, yAnim: [0, -11, 0], dur: 4.7, delay: 1.3,
  },
  {
    id: 6, w: 46, h: 40,
    clip: "polygon(28% 0%, 82% 12%, 100% 58%, 68% 100%, 12% 92%, 0% 38%)",
    pos: { left: "49%", top: "77%" }, rotate: 22, yAnim: [0, 8, 0], dur: 3.5, delay: 0.7,
  },
];

function StarField() {
  const [stars, setStars] = useState<{ x: number; y: number; r: number; o: number }[]>([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 110 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() < 0.72 ? 0.7 : 1.3,
        o: 0.07 + Math.random() * 0.2,
      }))
    );
  }, []);
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.r * 2, height: s.r * 2, opacity: s.o }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      <StarField />

      {/* Oxblood orb */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full"
        style={{
          top: -320,
          width: 1300,
          height: 560,
          background:
            "radial-gradient(ellipse at 50% 46%, rgba(140,20,20,0.60) 0%, rgba(99,13,13,0.30) 35%, rgba(60,8,8,0.08) 62%, transparent 78%)",
          boxShadow:
            "0 0 180px 80px rgba(99,13,13,0.16), 0 60px 160px rgba(99,13,13,0.28)",
          border: "1px solid rgba(120,18,18,0.16)",
        }}
      />

      {/* Floating rocks — hidden on small screens */}
      <div className="hidden md:block">
        {ROCKS.map((rock) => (
          <div
            key={rock.id}
            aria-hidden
            className="absolute pointer-events-none"
            style={{ ...rock.pos, transform: `rotate(${rock.rotate}deg)` }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: rock.yAnim }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 + rock.delay * 0.4 },
                y: { duration: rock.dur, repeat: Infinity, ease: "easeInOut", delay: rock.delay },
              }}
              style={{
                width: rock.w,
                height: rock.h,
                clipPath: rock.clip,
                background: `linear-gradient(${138 + rock.rotate * 0.6}deg, #2a1414 0%, #160b0b 48%, #0b0606 100%)`,
                filter:
                  "drop-shadow(0 10px 28px rgba(0,0,0,0.92)) drop-shadow(0 2px 8px rgba(0,0,0,0.65))",
              }}
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text-[9px] tracking-[0.42em] uppercase text-white/28 mb-10"
        >
          Business Advisory · Uzbekistan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase leading-none text-white select-none"
          style={{ fontSize: "clamp(4rem, 13.5vw, 11.5rem)", letterSpacing: "0.08em" }}
        >
          ADVIZEN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="mt-6 text-[13px] text-white/36 max-w-xs mx-auto leading-relaxed"
        >
          Strategic counsel for businesses entering and operating across Central Asia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.82 }}
          className="mt-10"
        >
          <MagneticButton variant="primary" as="a" href="/contact">
            Schedule a consultation
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-4"
      >
        <div className="h-px w-8 bg-white/[0.12]" />
        <p className="text-[9px] tracking-[0.3em] uppercase text-white/22">Tashkent, Uzbekistan</p>
        <div className="h-px w-8 bg-white/[0.12]" />
      </motion.div>
    </section>
  );
}
