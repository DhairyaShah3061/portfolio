"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const updated = document.documentElement.getAttribute("data-theme");
      setTheme(updated === "light" ? "light" : "dark");
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-10 border-t border-[#2a2a2f] bg-[#070708]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={theme === "dark" ? "/logo_dark-removebg-preview.png" : "/logo_light-removebg-preview.png"}
              alt="Logo"
              className="h-12 w-auto"
            />
            <span className="text-[#9a9a96] text-sm">
              Dhairya Shah · Developer & Founder
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/DhairyaShah3061"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a0] hover:text-[#f2f2f1] transition-colors text-xs font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/-dhairya-shah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a0] hover:text-[#f2f2f1] transition-colors text-xs font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dhairyashah4u@gmail.com"
              className="text-[#a3a3a0] hover:text-[#f2f2f1] transition-colors text-xs font-medium"
            >
              Email
            </a>
          </div>

          <div className="text-xs text-[#9a9a96]">
            © {new Date().getFullYear()} Dhairya Shah. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
