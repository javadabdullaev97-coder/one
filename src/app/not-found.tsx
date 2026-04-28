"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Home, BookOpen, Briefcase, MessageCircle } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

/* ── Floating particle field ─────────────────────────── */

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulse: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.008;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const breathe = Math.sin(p.pulse) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(122, 26, 26, ${p.opacity * breathe})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(122, 26, 26, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

/* ── Glitch text effect ──────────────────────────────── */

function GlitchText() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative select-none">
      <h1
        className="font-serif text-[10rem] md:text-[14rem] lg:text-[18rem] font-light leading-none tracking-tight"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,245,245,0.15) 0%, rgba(122,26,26,0.08) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      {/* Glitch layers */}
      {glitch && (
        <>
          <h1
            className="absolute inset-0 font-serif text-[10rem] md:text-[14rem] lg:text-[18rem] font-light leading-none tracking-tight"
            style={{
              color: "rgba(122, 26, 26, 0.4)",
              clipPath: "inset(20% 0 40% 0)",
              transform: "translateX(-4px)",
            }}
          >
            404
          </h1>
          <h1
            className="absolute inset-0 font-serif text-[10rem] md:text-[14rem] lg:text-[18rem] font-light leading-none tracking-tight"
            style={{
              color: "rgba(245, 245, 245, 0.15)",
              clipPath: "inset(60% 0 10% 0)",
              transform: "translateX(3px)",
            }}
          >
            404
          </h1>
        </>
      )}
    </div>
  );
}

/* ── Interactive tilt card ───────────────────────────── */

function TiltCard({
  href,
  icon: Icon,
  label,
  description,
  delay,
}: {
  href: string;
  icon: typeof Home;
  label: string;
  description: string;
  delay: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative block rounded-lg border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] hover:bg-white/[0.04] transition-colors duration-300 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-4 h-4 text-primary-light/70 group-hover:text-primary-light transition-colors duration-300" />
        </div>
        <div className="min-w-0">
          <p className="text-foreground/90 text-sm font-medium mb-1 group-hover:text-foreground transition-colors">
            {label}
          </p>
          <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors">
            {description}
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-white/15 shrink-0 mt-0.5 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </motion.a>
  );
}

/* ── Page ─────────────────────────────────────────────── */

const navSuggestions = [
  {
    href: "/",
    icon: Home,
    label: "Home",
    description: "Back to the beginning",
  },
  {
    href: "/expertise",
    icon: Briefcase,
    label: "Expertise",
    description: "Our practice areas and capabilities",
  },
  {
    href: "/insights",
    icon: BookOpen,
    label: "Insights",
    description: "Guides, briefings, and market intelligence",
  },
  {
    href: "/contact",
    icon: MessageCircle,
    label: "Contact",
    description: "Start a conversation with our team",
  },
];

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100dvh-80px)] flex items-center justify-center overflow-hidden bg-background">
      {/* Particle background */}
      <ParticleField />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlitchText />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-10 origin-center"
        />

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="tracking-luxury text-white/40 mb-4"
        >
          Page not found
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="heading-luxury text-2xl md:text-3xl text-foreground/90 mb-4"
        >
          This page doesn&rsquo;t exist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/40 text-sm md:text-base max-w-md mx-auto mb-14 leading-relaxed"
        >
          The page you&rsquo;re looking for may have been moved, removed,
          or never existed. Let us help you find your way.
        </motion.p>

        {/* Navigation suggestions */}
        <div className="grid sm:grid-cols-2 gap-3 mb-14 text-left">
          {navSuggestions.map((item, i) => (
            <TiltCard key={item.href} {...item} delay={0.7 + i * 0.08} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <MagneticButton variant="primary" as="a" href="/">
            Return home
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
