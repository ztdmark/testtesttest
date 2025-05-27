"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GradientButton } from "@/components/ui/gradient-button";

interface MembershipCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  color: "gold" | "red";
  index: number;
}

export default function MembershipCard({ 
  title, 
  price, 
  period, 
  features, 
  popular = false,
  color = "gold",
  index
}: MembershipCardProps) {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        boxShadow: color === 'gold' 
          ? '0 0 20px rgba(255, 215, 0, 0.3)' 
          : '0 0 20px rgba(109, 40, 22, 0.3)'
      }}
      className={cn(
        "bg-zinc-900 rounded-lg overflow-hidden border-2",
        color === "gold" ? "border-dl-gold" : "border-dl-red",
        popular ? "transform scale-105 md:scale-110 z-10" : ""
      )}
    >
      {popular && (
        <div className="bg-dl-gold text-black text-center py-2 font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="p-6 text-center">
        <h3 className="text-3xl mb-3 font-heading">{title}</h3>
        <div className="mb-6">
          <span className={cn(
            "text-5xl font-bold",
            color === "gold" ? "text-dl-gold" : "text-dl-red"
          )}>
            {price}
          </span>
          <span className="text-gray-400 ml-2">{period}</span>
        </div>
        
        <ul className="text-left space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className={cn(
                "mr-2 mt-1",
                color === "gold" ? "text-dl-gold" : "text-dl-red"
              )}>
                <Check size={18} />
              </span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <GradientButton className="w-full" variant={color === "gold" ? "default" : "variant"}>
          Sign Up Now
        </GradientButton>
      </div>
    </motion.div>
  );
}