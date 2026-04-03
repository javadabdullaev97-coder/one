import Link from "next/link";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";

const footerLinks = {
  Expertise: [
    { label: "Tax Consulting", href: "/expertise/tax" },
    { label: "Legal Advisory", href: "/expertise/legal" },
    { label: "Finance & Accounting", href: "/expertise/finance" },
    { label: "HR Services", href: "/expertise/hr" },
    { label: "Marketing", href: "/expertise/marketing" },
    { label: "Funding & Grants", href: "/expertise/funding" },
  ],
  Firm: [
    { label: "About", href: "/about" },
    { label: "The Library", href: "/library" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Advizen" width={44} height={36} />
              <span className="text-lg font-serif tracking-[0.15em] text-foreground">
                ADVIZEN
              </span>
            </div>
            <p className="mt-6 text-sm text-muted leading-relaxed max-w-sm">
              Premier business advisory in Uzbekistan. Integrated consulting
              across tax, legal, finance, HR, and marketing — a single point of
              contact for your entire operation.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="tel:+998334884888"
                className="block text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                +998 (33) 488 48 88
              </a>
              <a
                href="mailto:info@advizenco.com"
                className="block text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                info@advizenco.com
              </a>
              <p className="text-sm text-muted-dark">Tashkent, Uzbekistan</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h3 className="tracking-luxury text-muted-dark mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="tracking-luxury text-muted-dark mb-6">Newsletter</h3>
            <p className="text-sm text-muted mb-4">
              Insights on doing business in Central Asia.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="w-full px-4 py-3 bg-transparent border border-white/[0.08] text-sm text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="shiny-btn w-full px-4 py-3 text-[11px] uppercase tracking-[0.15em] font-medium text-foreground cursor-pointer transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons Bar */}
        <div className="py-8 border-t border-white/[0.06]">
          <SocialIcons />
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-dark tracking-wide">
            &copy; {new Date().getFullYear()} Advizen Consulting. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-xs text-muted-dark hover:text-muted transition-colors tracking-wide cursor-pointer"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-dark hover:text-muted transition-colors tracking-wide cursor-pointer"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
