"use client";
import { useEffect, useRef, useState, createElement } from "react";
import { TextScramble } from "@/components/ui/text-scramble";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
  Cpu,
  Brain,
  Award,
} from "lucide-react";

interface SkillGroup {
  category: string;
  Icon: LucideIcon;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    Icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "PHP"],
  },
  {
    category: "Frontend",
    Icon: Palette,
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer"],
  },
  {
    category: "Backend",
    Icon: Server,
    skills: ["Node.js", "Express.js", "Django", "Flask"],
  },
  {
    category: "Databases & APIs",
    Icon: Database,
    skills: ["MongoDB", "Supabase", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    Icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Docker", "Kali Linux"],
  },
  {
    category: "CS Fundamentals",
    Icon: Cpu,
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "Networks"],
  },
  {
    category: "Data & AI",
    Icon: Brain,
    skills: ["Machine Learning", "Data Analysis", "Data Visualization", "Statistics"],
  },
  {
    category: "Certifications",
    Icon: Award,
    skills: ["AI/ML – Microsoft Elevate", "Strategy with ChatGPT – NPTEL+", "Flutter & Dart – MBIT", "Blockchain Dev – MBIT", "Ethical Hacking – Nikistan Media"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isTrigger, setIsTrigger] = useState(false);

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
    <section id="skills" className="py-28 relative" ref={sectionRef}>
      {/* Soft bg accent */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8f8f8b]">Skills</span>
          <div className="h-px flex-1 bg-[#2f3035] max-w-[60px]" />
        </div>

        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2
            className="text-4xl lg:text-5xl font-semibold text-[#f2f2f1] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            onMouseEnter={() => setIsTrigger(true)}
          >
            <span className="block">
              <TextScramble
                as="span"
                speed={0.02}
                duration={0.6}
                trigger={isTrigger}
                onScrambleComplete={() => setIsTrigger(false)}
              >
                A versatile
              </TextScramble>
            </span>
            <span className="block italic text-[#f2f2f1]">
              <TextScramble
                as="span"
                speed={0.02}
                duration={0.6}
                trigger={isTrigger}
              >
                toolkit.
              </TextScramble>
            </span>
          </h2>
          <p className="text-[#b5b5b1] text-sm max-w-xs leading-relaxed">
            Technologies and tools I work with daily — from building UIs to architecting backends and training models.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="reveal card-hover bg-[#121315] border border-[#2a2a2f] rounded-2xl p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {createElement(group.Icon as any, { className: "w-6 h-6 mb-3 text-[#f2f2f1]" })}
              <h3 className="font-semibold text-[#f2f2f1] text-sm mb-4 tracking-wide uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#18191d] border border-[#2f3036] text-[#c9c9c6] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills strip */}
        <div className="reveal mt-10 bg-[#15161a] rounded-2xl p-8 border border-[#2a2a2f]">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b5b5b5] mb-6">
            Soft Skills & Competencies
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Strategic Leadership",
              "Project Ownership",
              "Client Communication",
              "Public Speaking",
              "Event Planning",
              "Decision Making Under Pressure",
              "Agile Workflow Management",
              "Cross-Functional Collaboration",
              "Entrepreneurial Mindset",
              "Process Optimization",
              "Community Building",
              "Requirement Analysis",
              "Solution Architecture",
              "Time Management",
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
