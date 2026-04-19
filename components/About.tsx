"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "2", label: "Degrees Pursuing", sub: "B.Tech + BS Data Science" },
  { value: "3+", label: "Clients Delivered", sub: "Web platforms & systems" },
  { value: "10+", label: "Certifications", sub: "AI, ML, Blockchain & more" },
  { value: "1", label: "Venture Founded", sub: "Prothsahan" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8f8f8b]">About</span>
          <div className="h-px flex-1 bg-[#2f3035] max-w-[60px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2
              className="reveal text-4xl lg:text-5xl font-semibold text-[#f2f2f1] leading-[1.1] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Strategy meets
              <span className="italic text-[#f2f2f1]"> execution.</span>
            </h2>
            <div className="reveal space-y-5 text-[#b5b5b1] leading-relaxed">
              <p>
                I'm a dual-degree student pursuing <strong className="text-[#f2f2f1] font-semibold">B.Tech in Computer Engineering</strong> at MBIT College, Anand, and a <strong className="text-[#f2f2f1] font-semibold">BS in Data Science & Applications</strong> from IIT Madras — giving me a foundation that spans software systems, analytics, and machine learning.
              </p>
              <p>
                Beyond academics, I founded <strong className="text-[#f2f2f1] font-semibold">Prothsahan</strong>, a systems-driven digital strategy firm where I help businesses architect scalable web platforms, automation pipelines, and performance-driven marketing infrastructure.
              </p>
              <p>
                I believe the best products emerge from the intersection of rigorous engineering and clear strategic thinking — and that's exactly how I approach every project I take on.
              </p>
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-2">
              {["Systems Thinking", "Full-Stack Dev", "Data Analytics", "Growth Strategy", "Team Leadership"].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="reveal grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="card-hover bg-[#121315] border border-[#2a2a2f] rounded-2xl p-6"
              >
                <div
                  className="about-stat-value text-3xl font-semibold text-[#f2f2f1] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.value}
                </div>
                <div className="about-stat-label text-sm font-semibold text-[#e2e2df] mb-1">{stat.label}</div>
                <div className="about-stat-sub text-xs text-[#9a9a96]">{stat.sub}</div>
              </div>
            ))}

            {/* Education card */}
            <div className="col-span-2 bg-[#15161a] rounded-2xl p-6 text-white border border-[#2a2a2f]">
              <div className="about-education-title text-xs font-semibold tracking-[0.15em] uppercase text-[#b5b5b5] mb-4">Education</div>
              <div className="space-y-3">
                <div>
                  <div className="about-education-school text-sm font-medium text-white">IIT Madras</div>
                  <div className="about-education-detail text-xs text-[#c1c1c1]">BS Data Science & Applications · 2024-2028</div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="about-education-school text-sm font-medium text-white">MBIT College, Anand</div>
                  <div className="about-education-detail text-xs text-[#c1c1c1]">B.Tech Computer Engineering · 2023-2027</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
