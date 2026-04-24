"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
      {/* Background image */}
      <Image
        src="/industries/Hero Background.png"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 0%", transform: "scale(1.5) translateY(-18%)", transformOrigin: "50% 50%" }}
        aria-hidden
      />

      {/* Dark overlay so text stays legible */}
      <div aria-hidden className="absolute inset-0 bg-black/50" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 w-full max-w-6xl">
        <p className="text-[9px] tracking-[0.42em] uppercase text-white/50 mb-10">
          Business Advisory · Uzbekistan
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="uppercase leading-none text-white select-none"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", letterSpacing: "0.1em", fontFamily: "var(--font-display), sans-serif", fontWeight: 300 }}
        >
          ADVIZEN
        </motion.h1>

        <p className="mt-6 text-[13px] text-white/60 max-w-xs mx-auto leading-relaxed">
          Strategic counsel for businesses entering and operating across Central Asia.
        </p>

        <div className="mt-10">
          <MagneticButton variant="primary" as="a" href="/contact">
            Schedule a consultation
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-4">
        <div className="h-px w-8 bg-white/20" />
        <p className="text-[9px] tracking-[0.3em] uppercase text-white/40">Tashkent, Uzbekistan</p>
        <div className="h-px w-8 bg-white/20" />
      </div>
    </section>
  );
}
