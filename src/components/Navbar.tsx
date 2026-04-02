"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/hr-services", label: "HR Services" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:bg-accent transition-colors">
            A
          </div>
          <div>
            <span className="text-xl font-bold text-primary tracking-tight">
              ADVIZEN
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted -mt-1">
              Consulting
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-border py-2 animate-in fade-in slide-in-from-top-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-section-bg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-light transition-colors shadow-md shadow-primary/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-foreground/70 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-4 text-sm text-muted hover:text-primary transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-full"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
