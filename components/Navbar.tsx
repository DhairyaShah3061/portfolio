"use client";
import { useEffect, useState } from "react";
import SkyToggle from "@/components/ui/sky-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#24252b] transition-all duration-300 ${
        scrolled ? "bg-[#070708]/92 backdrop-blur-md py-4" : "bg-[#070708]/92 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="leading-none">
          <img
            src={theme === "dark" ? "/logo_dark-removebg-preview.png" : "/logo_light-removebg-preview.png"}
            alt="Logo"
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <SkyToggle
            checked={theme === "dark"}
            onChange={(checked) => {
              const next = checked ? "dark" : "light";
              setTheme(next);
              document.documentElement.setAttribute("data-theme", next);
              localStorage.setItem("theme", next);
            }}
          />
          <a
            href="mailto:dhairyashah4u@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-[#f2f2f1] text-[#0b0b0c] hover:bg-[#d9d9d7] transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <SkyToggle
            className="scale-[0.88]"
            checked={theme === "dark"}
            onChange={(checked) => {
              const next = checked ? "dark" : "light";
              setTheme(next);
              document.documentElement.setAttribute("data-theme", next);
              localStorage.setItem("theme", next);
            }}
          />
          <button
            className="p-2 text-[#f2f2f1]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f1013]/98 backdrop-blur-md border-b border-[#24252b] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#f2f2f1] font-medium text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:dhairyashah4u@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#f2f2f1] text-[#0b0b0c]"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
