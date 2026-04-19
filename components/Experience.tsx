"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "Jan 2026 – Present",
    role: "Founder",
    company: "Prothsahan",
    location: "Anand, Gujarat",
    description:
      "Founded and lead Prothsahan, a systems-driven digital strategy firm focused on building scalable growth infrastructure for businesses. Oversee strategic planning, technical architecture, and end-to-end execution across web platforms, automation systems, analytics frameworks, and performance-driven marketing. Drive client diagnostics, solution design, and lifecycle delivery with emphasis on scalability and long-term growth impact.",
    tags: ["Strategy", "Systems Design", "Web Platforms", "Automation", "Analytics"],
  },
  {
    period: "Aug 2024 – Dec 2025",
    role: "Freelance Web Developer",
    company: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    description:
      "Delivered end-to-end custom website solutions for small businesses and startups, managing projects from requirement analysis to deployment. Designed and developed responsive, performance-optimized websites for clients including KARV Group of Companies, Praneetha Ventures, and Mohna Global Exim. Translated business objectives into scalable, user-centric web applications while overseeing SEO optimization and full project lifecycle execution.",
    tags: ["React", "Next.js", "SEO", "Client Projects", "Full-Stack"],
  },
  {
    period: "Dec 2024 – Jun 2025",
    role: "Event Head, Python Coding Championship 4.0",
    company: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    description:
      "Led end-to-end execution of PCC 4.0, architecting the competition structure, rule framework, and evaluation methodology. Managed large-scale registrations, participant onboarding, cross-team coordination, and operational workflow while assisting in problem setting. Ensured structured execution, fair evaluation standards, and seamless delivery.",
    tags: ["Event Management", "Leadership", "Operations", "Team Coordination"],
  },
  {
    period: "Oct 2025 – Jan 2026",
    role: "Event Head, Rhythm Rewind",
    company: "IIT Madras – Margazhi'26",
    location: "Chennai, Tamil Nadu",
    description:
      "Led the execution of 'Rhythm Rewind' at Margazhi'26 under the IITM BS Degree Program, overseeing event planning, participant coordination, and operational flow. Designed the event structure and ensured seamless execution through disciplined planning and structured process management.",
    tags: ["Event Planning", "Coordination", "Process Management"],
  },
  {
    period: "Sep 2024 – Dec 2024",
    role: "Drone Engineering Intern",
    company: "Corizo",
    location: "Remote",
    description:
      "Completed a structured internship in Drone Engineering, gaining exposure to UAV systems, core aerodynamics concepts, and practical implementation frameworks. Developed foundational understanding of drone architecture, components, and engineering workflow through guided technical training.",
    tags: ["UAV Systems", "Aerodynamics", "Engineering", "Technical Training"],
  },
];

export default function Experience() {
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
    <section id="experience" className="py-28 bg-[#070708]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8f8f8b]">Experience</span>
          <div className="h-px flex-1 bg-[#2f3035] max-w-[60px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sticky sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2
              className="reveal text-4xl font-semibold text-[#f2f2f1] leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where I've
              <br />
              <span className="italic text-[#f2f2f1]">made impact.</span>
            </h2>
            <p className="reveal experience-intro text-[#b5b5b1] text-sm leading-relaxed mb-8">
              From freelance client work and leading large-scale competitions to founding my own venture — here's a snapshot of my professional journey.
            </p>
            <a
              href="mailto:dhairyashah4u@gmail.com"
              className="reveal experience-cta inline-flex items-center gap-2 text-sm font-semibold text-[#e5e5e3] hover:text-[#ffffff] transition-colors"
            >
              Work with me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal timeline-item"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="card-hover bg-[#141519] border border-[#2b2b30] rounded-2xl p-6 ml-4">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="experience-role font-semibold text-[#f2f2f1] text-base">{exp.role}</h3>
                      <div className="experience-company text-sm text-[#c1c1be] font-medium">{exp.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="experience-period text-xs font-medium text-[#b5b5b1] bg-[#101114] border border-[#303138] px-3 py-1 rounded-full">
                        {exp.period}
                      </div>
                      <div className="experience-location text-xs text-[#8e8e8a] mt-1">{exp.location}</div>
                    </div>
                  </div>
                  <p className="experience-description text-sm text-[#b5b5b1] leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
