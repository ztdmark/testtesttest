"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-cards";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Squares } from "@/components/ui/squares-background";

const testimonials = [
  {
    id: "6740756/pexels-photo-6740756.jpeg",
    testimonial: "The training at Dark Lion's Den has completely transformed my fitness and confidence. The coaches are world-class and the community is incredibly supportive.",
    author: "Sarah M. - Member since 2023"
  },
  {
    id: "4761671/pexels-photo-4761671.jpeg",
    testimonial: "As someone who was intimidated by martial arts, the welcoming atmosphere and expert guidance at DLD made me feel right at home. Now I can't imagine training anywhere else!", 
    author: "James K. - Member since 2022"
  },
  {
    id: "4761663/pexels-photo-4761663.jpeg",
    testimonial: "The kids' classes have been amazing for my daughter's confidence and discipline. The coaches make learning fun while maintaining professionalism.",
    author: "Emma T. - Parent"
  }
];

export default function TestimonialsSection() {
  const [positions, setPositions] = useState<string[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const poppedValue = newPositions.pop();
    if (poppedValue) {
      newPositions.unshift(poppedValue);
      setPositions(newPositions);
    }
  };

  return (
    <section className="section-padding relative overflow-x-hidden">
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl text-center mb-6 font-heading"
        >
          <span className="gold-text">Member</span> Stories
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto text-center mb-16"
        >
          Transform your life through martial arts excellence
        </motion.p>
        
        <div className="flex justify-center items-center mb-8">
          <div className="h-[600px] md:h-[500px] w-full max-w-[280px] md:max-w-[350px] relative mx-auto -translate-x-[35%] md:-translate-x-[25%]">
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link href="/memberships">
            <GradientButton>
              Start Your Journey
              <ArrowRight className="ml-2" />
            </GradientButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}