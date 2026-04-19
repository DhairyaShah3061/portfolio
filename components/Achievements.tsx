"use client";
import { useEffect, useRef } from "react";

const achievements = [
  {
    category: "Technical",
    icon: "technical",
    color: "bg-[#121315] border-[#2a2a2f]",
    iconBg: "bg-[#1b1c20]",
    items: [
      {
        title: "Runners Up – HackQuest Arena (CTF)",
        sub: "CHARUSAT University · 2026",
        highlight: true,
      },
      {
        title: "1st Place – Fibonacci Scavenger Hunt",
        sub: "Technical Competition",
        highlight: false,
      },
    ],
  },
  {
    category: "Leadership & Communication",
    icon: "leadership",
    color: "bg-[#121315] border-[#2a2a2f]",
    iconBg: "bg-[#1b1c20]",
    items: [
      {
        title: "1st Place Overall – PDC Bootcamp Competition",
        sub: "2025",
        highlight: true,
      },
      {
        title: "2nd Place – Debate, PDC Bootcamp",
        sub: "2025",
        highlight: false,
      },
      {
        title: "Consistent Debate Competition Winner",
        sub: "School years",
        highlight: false,
      },
    ],
  },
  {
    category: "Leadership Roles",
    icon: "roles",
    color: "bg-[#121315] border-[#2a2a2f]",
    iconBg: "bg-[#1b1c20]",
    items: [
      {
        title: "Council Member – ShahMaat Chess Society, IIT Madras",
        sub: "Jun 2025 – Nov 2025",
        highlight: false,
      },
      {
        title: "Judge – Poetry Recitation & Public Speaking Event",
        sub: "MBIT, Anand · Aug 2025",
        highlight: false,
      },
      {
        title: "House Captain – JP Thakkar High School",
        sub: "Jan 2022 – Jun 2023",
        highlight: false,
      },
    ],
  },
];

function AchievementIcon({ icon }: { icon: string }) {
  if (icon === "technical") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    );
  }

  if (icon === "leadership") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 20h10" />
        <path d="M12 17v3" />
        <path d="M6 4h12l-2.5 7h-7z" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 8l3 3 5-6 5 6 3-3" />
      <path d="M5 10v7h14v-7" />
    </svg>
  );
}

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-28 bg-[#070708]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8f8f8b]">Achievements</span>
          <div className="h-px flex-1 bg-[#2f3035] max-w-[60px]" />
        </div>

        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2
            className="text-4xl lg:text-5xl font-semibold text-[#f2f2f1] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Recognition &
            <span className="italic text-[#f2f2f1]"> milestones.</span>
          </h2>
          <p className="text-[#b5b5b1] text-sm max-w-xs leading-relaxed">
            A selection of highlights from competitive hackathons, leadership roles, and organizational contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {achievements.map((group, i) => (
            <div
              key={i}
              className="reveal card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`rounded-2xl border p-6 h-full ${group.color}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${group.iconBg}`}>
                    <AchievementIcon icon={group.icon} />
                  </div>
                  <h3 className="font-semibold text-[#f2f2f1] text-sm">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f2f2f1] flex-shrink-0" />
                      <div>
                        <div
                          className={`text-sm font-medium leading-snug ${
                            item.highlight ? "text-[#f2f2f1]" : "text-[#d0d0ce]"
                          }`}
                        >
                          {item.title}
                          {item.highlight && (
                            <span className="ml-2 text-xs px-2 py-0.5 bg-[#f2f2f1] text-[#0b0b0c] rounded-full font-semibold">
                              Top
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#9a9a96] mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications banner */}
        <div className="reveal cert-banner mt-8 rounded-2xl bg-gradient-to-r from-[#101010] via-[#1b1b1b] to-[#101010] p-8 overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
          <div className="relative z-10">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b5b5b5] mb-4">Certifications</div>
            <div className="flex flex-wrap gap-3">
              {[
                "AI & ML – Microsoft Elevate (2026)",
                "Strategy Formulation with ChatGPT – NPTEL+ (2025)",
                "Flutter & Dart – MBIT (2024)",
                "Blockchain Development – MBIT (2024)",
                "Drone Engineering – Corizo (2024)",
                "Ethical Hacking – Nikistan Media (2023)",
                "3D Design & Animation – MBIT (2024)",
              ].map((cert) => (
                <span
                  key={cert}
                  className="cert-chip text-xs px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/80"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
