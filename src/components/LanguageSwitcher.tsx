"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, { code: string; name: string }> = {
  en: { code: "EN", name: "English" },
  ru: { code: "RU", name: "Русский" },
  uz: { code: "UZ", name: "O'zbek" },
};

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (next: Locale) => {
    if (next === locale) {
      setOpen(false);
      return;
    }
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    startTransition(() => {
      // @ts-expect-error -- pathname is dynamic
      router.replace({ pathname, params }, { locale: next });
    });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1.5 cursor-pointer transition-colors duration-200",
          compact
            ? "text-[12px] text-foreground/70 hover:text-foreground py-1"
            : "text-[12px] text-muted hover:text-foreground"
        )}
      >
        <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
        <span className="font-medium tracking-wide">{labels[locale].code}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-3 min-w-[160px] bg-[#0D0D0D]/95 backdrop-blur-2xl border border-white/[0.08] rounded shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden z-50"
          >
            {routing.locales.map((l) => {
              const active = l === locale;
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => switchTo(l)}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-[12px] tracking-wide transition-colors duration-150 cursor-pointer border-b border-white/[0.04] last:border-0",
                    active ? "text-foreground bg-white/[0.03]" : "text-muted hover:text-foreground hover:bg-white/[0.02]"
                  )}
                >
                  <span>{labels[l].name}</span>
                  {active && <Check className="w-3 h-3 text-primary" strokeWidth={2} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
