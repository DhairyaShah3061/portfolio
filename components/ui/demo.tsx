"use client";

import { useState } from "react";
import { CardPosition, TestimonialCard } from "@/components/ui/testimonial-cards";

const testimonials = [
  {
    id: 1,
    testimonial:
      "I feel like I have learned as much from Dhairya as I did completing my masters. It is the first thing I read every morning.",
    author: "Jenn F. - Marketing Director @ Square",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=512&q=80",
  },
  {
    id: 2,
    testimonial:
      "My boss thinks I know what I am doing. Honestly, I just follow Dhairya's systems and frameworks.",
    author: "Adrian Y. - Product Marketing @ Meta",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=512&q=80",
  },
  {
    id: 3,
    testimonial:
      "Cannot believe this strategic thinking is free. If this was a premium subscription, it would still be worth every penny.",
    author: "Devin R. - Growth Marketing Lead @ OpenAI",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=512&q=80",
  },
];

function ShuffleCards() {
  const [positions, setPositions] = useState<CardPosition[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    setPositions((prev) => {
      const rotated = [...prev];
      const last = rotated.pop();
      if (last) {
        rotated.unshift(last);
      }
      return rotated;
    });
  };

  return (
    <div className="grid place-content-center overflow-hidden px-8 py-10 text-slate-50 h-[520px] w-full">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}

export { ShuffleCards };
