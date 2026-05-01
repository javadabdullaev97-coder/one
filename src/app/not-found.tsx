"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen glass image */}
      <div className="absolute inset-0">
        <Image
          src="/404.webp"
          alt="404 — Page Not Found"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
      </div>

      {/* Text — bottom left */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="px-8 lg:px-16 pb-16 md:pb-24"
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-onest), system-ui, sans-serif" }}
          >
            This page<br />doesn&apos;t exist.
          </h1>
        </motion.div>
      </div>
    </main>
  );
}
