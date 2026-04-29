"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const inter = "var(--font-inter), Inter, system-ui, sans-serif";
const interTight = "var(--font-inter-tight), 'Inter Tight', Inter, system-ui, sans-serif";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise" },
  { href: "/store", label: "Store" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#0D0D0D]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center h-20 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="font-medium text-foreground"
            style={{
              fontFamily: interTight,
              fontSize: "1.25rem",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Advizen
          </span>
          <svg
            viewBox="0 0 20 26"
            aria-hidden="true"
            className="text-primary"
            style={{
              height: "0.72em",
              width: "auto",
              display: "inline-block",
              marginLeft: "0.06em",
              verticalAlign: "0.01em",
            }}
            fill="none"
          >
            <path
              d="M2 2L18 13L2 24"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Desktop Nav — absolutely centred on the viewport */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontFamily: inter }}
                className={`relative hover-line text-[13px] font-medium tracking-wide transition-colors cursor-pointer ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-[-2px] left-0 right-0 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side — Inquire button */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <MagneticButton as="a" href="/contact" className="px-6 py-2.5 text-[12px]">
            Inquire
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 ml-auto text-foreground cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-8 pt-4"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: inter }}
                  className={`block py-3 font-medium tracking-wide transition-colors border-b border-white/[0.06] cursor-pointer ${
                    pathname === link.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-6" onClick={() => setMobileOpen(false)}>
              <MagneticButton as="a" href="/contact" className="w-full justify-center px-6 py-3 text-sm">
                Inquire
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
