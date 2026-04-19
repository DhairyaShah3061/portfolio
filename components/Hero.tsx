"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextScramble } from "@/components/ui/text-scramble";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isTrigger, setIsTrigger] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="hero-surface relative min-h-screen flex items-center overflow-hidden pt-32 pb-16 bg-[#070708]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-grid-overlay absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "92px 92px",
          }}
        />
        <div className="hero-gradient-overlay absolute inset-0 bg-gradient-to-b from-[#09090a] via-[#070708] to-[#060606]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* Text content */}
          <div
            ref={heroRef}
            className="reveal order-2 lg:order-1"
            style={{ animationDelay: "0ms" }}
          >
            <p className="text-[13px] font-semibold tracking-[0.12em] text-[#9a9a98] uppercase mb-10">
              - Computer Engineer & Data Scientist
            </p>

            <h1
              className="hidden md:block text-[4rem] lg:text-[5.2rem] leading-[0.9] tracking-[-0.04em] text-[#f2f2f1] mb-7"
              onMouseEnter={() => setIsTrigger(true)}
            >
              <span className="block font-semibold">
                <TextScramble
                  as="span"
                  speed={0.02}
                  duration={0.6}
                  trigger={isTrigger}
                  onScrambleComplete={() => setIsTrigger(false)}
                >
                  Dhairya
                </TextScramble>
              </span>
              <span
                className="block italic text-[#f2f2f1]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                <TextScramble
                  as="span"
                  speed={0.02}
                  duration={0.6}
                  trigger={isTrigger}
                >
                  Shah.
                </TextScramble>
              </span>
            </h1>

            <p className="text-[1.05rem] text-[#b4b4b2] leading-[1.8] mb-11 max-w-xl font-medium">
              Building scalable systems, digital growth infrastructure, and full-stack products.
              Founder of <strong className="font-semibold text-[#f2f2f1]">Prothsahan</strong>. Dual-degree
              student at MBIT & IIT Madras. State-level chess player. Strategic thinker.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#experience"
                className="inline-flex items-center px-9 py-3.5 rounded-full bg-[#f2f2f1] text-[#0b0b0c] text-base font-semibold hover:bg-[#d9d9d7] transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-9 py-3.5 rounded-full bg-transparent border border-[#3a3a3f] text-[#f2f2f1] text-base font-semibold hover:border-[#f2f2f1] transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/-dhairya-shah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8d8d89] hover:text-[#f2f2f1] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/DhairyaShah3061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8d8d89] hover:text-[#f2f2f1] transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:dhairyashah4u@gmail.com"
                  className="text-[#8d8d89] hover:text-[#f2f2f1] transition-colors"
                  aria-label="Email"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end lg:pr-6 order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-[330px] h-[440px] md:w-[420px] md:h-[560px]">
                <Image
                  src="/dhairya-removebg-preview.png"
                  alt="Dhairya Shah"
                  fill
                  className="object-cover object-top"
                  priority
                />

                <div className="hero-mobile-name md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 z-10 leading-[0.9] tracking-[-0.04em] text-center">
                  <div className="text-[2.8rem] font-semibold">Dhairya</div>
                  <div
                    className="text-[2.8rem] italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    Shah.
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute top-9 right-[-56px] bg-[#141518] rounded-full shadow-md px-6 py-3 border border-[#303138] text-sm font-semibold text-[#dadad8]">
                B.Tech + BS @ IIT Madras
              </div>

              <div className="hidden md:block absolute top-1/2 -left-[92px] -translate-y-1/2 bg-[#141518] rounded-full shadow-md px-6 py-3 border border-[#303138] text-sm font-semibold text-[#dadad8]">
                Founder, Prothsahan
              </div>

              <div className="hidden md:block absolute -bottom-4 right-[-42px] bg-[#141518] rounded-full shadow-md px-6 py-3 border border-[#303138] text-sm font-semibold text-[#dadad8]">
                ♟ State-Level Chess
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
