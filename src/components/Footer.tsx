"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SocialIcons from "@/components/SocialIcons";
import { Phone, Mail, MapPin } from "lucide-react";

const inter = "var(--font-inter), sans-serif";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Footer() {
  const t = useTranslations("Footer");

  const footerLinks = {
    [t("expertise")]: [
      { label: t("taxConsulting"),  href: "/expertise#advisory" },
      { label: t("legalAdvisory"),  href: "/expertise#advisory" },
      { label: t("accounting"),     href: "/expertise#advisory" },
      { label: t("hrServices"),     href: "/expertise#advisory" },
      { label: t("funding"),        href: "/expertise#advisory" },
      { label: t("maAdvisory"),     href: "/expertise#advisory" },
      { label: t("dueDiligence"),   href: "/expertise#advisory" },
    ],
    [t("operations")]: [
      { label: t("entityManagement"),    href: "/expertise#operations" },
      { label: t("employerOfRecord"),    href: "/expertise#operations" },
      { label: t("corporateServices"),   href: "/expertise#operations" },
      { label: t("virtualOffice"),       href: "/expertise#operations" },
    ],
    [t("firm")]: [
      { label: t("store"),    href: "/store" },
      { label: t("insights"), href: "/insights" },
      { label: t("contact"),  href: "/contact" },
    ],
    [t("legal")]: [
      { label: t("termsOfSale"),  href: "/terms-of-sale" },
      { label: t("cookiePolicy"), href: "/cookies" },
      { label: t("privacy"),      href: "/privacy" },
      { label: t("termsOfUse"),   href: "/terms" },
      { label: t("disclaimer"),   href: "/disclaimer" },
    ],
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]" style={{ fontFamily: inter }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-20 flex flex-col md:flex-row gap-12 md:gap-0">

          {/* Brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={itemVariants}
            className="md:w-[380px] shrink-0 md:mr-16"
          >
            <div className="flex items-center gap-1.5">
              <Image src="/Logo.webp" alt="Advizen" width={35} height={35} style={{ width: "auto", height: "35px" }} />
              <span style={{ fontFamily: "var(--font-hero), sans-serif", fontSize: "25px", fontWeight: 500, letterSpacing: "0.12em", lineHeight: 1, color: "#D6CFC8" }}>
                ADVIZEN
              </span>
            </div>
            <p className="mt-6 text-sm text-white/50 leading-relaxed">
              {t("tagline")}
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="tel:+998334884888"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer w-fit"
              >
                <Phone className="w-4 h-4 text-primary" />
                +998 (33) 488 48 88
              </a>
              <a
                href="mailto:info@advizenco.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-foreground transition-colors cursor-pointer w-fit"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@advizenco.com
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-dark w-fit">
                <MapPin className="w-4 h-4 text-primary" />
                {t("tashkent")}
              </p>
            </div>
          </motion.div>

          {/* Link columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="flex-1 flex flex-col md:flex-row md:justify-end gap-10 md:gap-16"
          >
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div key={title} variants={itemVariants}>
                <h3 className="text-[13px] font-bold tracking-[0.18em] uppercase text-white/60 mb-6">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-white/50 hover:text-foreground transition-colors cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Icons Bar */}
        <div className="py-8 border-t border-white/[0.06]">
          <SocialIcons />
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/[0.06]">
          <p className="text-xs text-muted-dark tracking-wide">
            &copy; {new Date().getFullYear()} Advizen Consulting. {t("rights")}
          </p>
        </div>

      </div>
    </footer>
  );
}
