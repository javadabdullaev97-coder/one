"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Language = "EN" | "RU" | "UZ";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
