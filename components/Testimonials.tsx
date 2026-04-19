"use client";
import { useEffect, useRef } from "react";
import { CardCarousel } from "@/components/ui/card-carousel";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonialImages = [
    { src: "https://picsum.photos/id/249/500/750", alt: "Testimonial 1" },
    { src: "https://picsum.photos/id/1062/500/750", alt: "Testimonial 2" },
    { src: "https://picsum.photos/id/1074/500/750", alt: "Testimonial 3" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-28 relative" ref={sectionRef}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]" style={{
        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8f8f8b]">Testimonials</span>
          <div className="h-px flex-1 bg-[#2f3035] max-w-[60px]" />
        </div>

        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2
            className="text-4xl lg:text-5xl font-semibold text-[#f2f2f1] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What people
            <span className="italic text-[#f2f2f1]"> say.</span>
          </h2>
          <p className="text-[#b5b5b1] text-sm max-w-xs leading-relaxed">
            From clients and collaborators — the relationships and results that matter most.
          </p>
        </div>

        <div className="reveal" style={{ animationDelay: "80ms" }}>
          <CardCarousel
            images={testimonialImages}
            autoplayDelay={2000}
            showPagination={true}
            showNavigation={true}
          />
        </div>

        {/* Quote highlight */}
        <div className="reveal mt-16 text-center">
          <blockquote
            className="text-2xl lg:text-3xl font-medium text-[#f2f2f1] leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="text-[#f2f2f1]">"</span>
            Systems built right the first time don't just save time — they compound value over years.
            <span className="text-[#f2f2f1]">"</span>
          </blockquote>
          <div className="mt-4 text-sm text-[#9a9a96] font-medium">- Dhairya Shah</div>
        </div>
      </div>
    </section>
  );
}
