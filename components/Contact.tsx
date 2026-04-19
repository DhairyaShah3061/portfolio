"use client";
import { useEffect, useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "dhairyashah4u@gmail.com",
    href: "mailto:dhairyashah4u@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/-dhairya-shah",
    href: "https://www.linkedin.com/in/-dhairya-shah/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/DhairyaShah3061",
    href: "https://github.com/DhairyaShah3061",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Anand, Gujarat – 388001",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-28 bg-[#070708]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8f8f8b]">Contact</span>
          <div className="h-px flex-1 bg-[#2f3035] max-w-[60px]" />
        </div>

        {/* Big CTA block */}
        <div className="reveal contact-panel rounded-3xl bg-[#15161a] border border-[#2a2a2f] overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div>
                <h2
                  className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Let's build
                  <span className="italic text-white"> something</span>
                  <br />
                  remarkable.
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Whether you're a business looking to scale your digital infrastructure, a startup that needs a technical co-thinker, or a recruiter with an exciting opportunity — I'd love to hear from you.
                </p>
                <a
                  href="mailto:dhairyashah4u@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-[#101010] font-semibold text-sm hover:bg-[#e4e4e4] transition-colors"
                >
                  Send me a message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              </div>

              {/* Right: contact links */}
              <div className="grid grid-cols-1 gap-4">
                {contactLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-link-card flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors flex-shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-xs text-white/40 font-medium uppercase tracking-widest mb-0.5">
                        {link.label}
                      </div>
                      <div className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">
                        {link.value}
                      </div>
                    </div>
                    <div className="ml-auto text-white/20 group-hover:text-white transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
