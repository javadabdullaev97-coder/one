"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage, type Language } from "@/context/LanguageContext";

const inter = "Inter, system-ui, -apple-system, sans-serif";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise" },
  { href: "/store", label: "Store" },
  { href: "/library", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const languages = ["EN", "RU", "UZ"] as const;

const FlagEN = () => (
  <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
    <rect width="60" height="40" fill="#012169" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="8" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5" />
    <rect x="26" width="8" height="40" fill="white" />
    <rect y="16" width="60" height="8" fill="white" />
    <rect x="28" width="4" height="40" fill="#C8102E" />
    <rect y="18" width="60" height="4" fill="#C8102E" />
  </svg>
);

const FlagRU = () => (
  <svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
    <rect width="3" height="0.667" fill="#FFFFFF" />
    <rect y="0.667" width="3" height="0.667" fill="#0039A6" />
    <rect y="1.333" width="3" height="0.667" fill="#D52B1E" />
  </svg>
);

const FlagUZ = () => (
  <svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
    <rect width="3" height="0.7" fill="#1BBED7" />
    <rect y="0.7" width="3" height="0.07" fill="#CE1126" />
    <rect y="0.77" width="3" height="0.46" fill="#FFFFFF" />
    <rect y="1.23" width="3" height="0.07" fill="#CE1126" />
    <rect y="1.3" width="3" height="0.7" fill="#1EB53A" />
  </svg>
);

const flags = { EN: FlagEN, RU: FlagRU, UZ: FlagUZ };

function FlagCircle({ code }: { code: string }) {
  const Flag = flags[code as keyof typeof flags];
  return (
    <span className="w-3.5 h-3.5 rounded-full overflow-hidden shrink-0 inline-block border border-white/10">
      <Flag />
    </span>
  );
}

// Routes that have /ru and /uz sub-pages
const localeRoutes = ["/terms-of-sale"];

function getBasePath(path: string) {
  return path.replace(/\/(ru|uz)$/, "");
}

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Sync context lang from URL on load/refresh
  useEffect(() => {
    const basePath = getBasePath(pathname);
    if (!localeRoutes.includes(basePath)) return;
    if (pathname.endsWith("/ru")) setLang("RU");
    else if (pathname.endsWith("/uz")) setLang("UZ");
    else setLang("EN");
  }, [pathname, setLang]);

  function handleLangSwitch(l: Language) {
    setLang(l);
    const basePath = getBasePath(pathname);
    if (localeRoutes.includes(basePath)) {
      const target = l === "EN" ? basePath : `${basePath}/${l.toLowerCase()}`;
      router.push(target);
    }
    setOpen(false);
  }

  if (mobile) {
    return (
      <div className="flex items-center gap-1 mt-6 pt-6 border-t border-white/[0.06]">
        {languages.map((l) => (
          <button
            key={l}
            onClick={() => handleLangSwitch(l)}
            style={{ fontFamily: inter }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] tracking-[0.14em] transition-colors cursor-pointer ${
              lang === l
                ? "bg-white/[0.08] text-white border border-white/[0.15]"
                : "text-white/35 hover:text-white/60"
            }`}
          >
            <FlagCircle code={l} />
            {l}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ fontFamily: inter }}
        className="flex items-center gap-1.5 text-[12px] tracking-[0.12em] text-white/45 hover:text-white/75 transition-colors duration-200 cursor-pointer select-none"
      >
        <FlagCircle code={lang} />
        <span>{lang}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2.5 bg-[#141414] border border-white/[0.08] rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)] min-w-[80px]"
          >
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => handleLangSwitch(l)}
                style={{ fontFamily: inter }}
                className={`flex items-center gap-2 w-full text-left px-4 py-2.5 text-[11px] tracking-[0.14em] transition-colors duration-150 cursor-pointer ${
                  lang === l
                    ? "text-white bg-white/[0.07]"
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                }`}
              >
                <FlagCircle code={l} />
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Advizen"
            width={36}
            height={30}
          />
          <span className="text-lg font-light tracking-[0.25em] uppercase text-foreground" style={{ fontFamily: inter }}>
            ADVIZEN
          </span>
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

        {/* Right side — language switcher + Inquire */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <LanguageSwitcher />
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
            <LanguageSwitcher mobile />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
