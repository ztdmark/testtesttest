"use client";

import { motion } from 'framer-motion';
import { 
  Trophy, Users, ListChecks, Map, Clock, 
  Shield, DollarSign, Award, Activity 
} from 'lucide-react';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

type IconName = 'Trophy' | 'Users' | 'ListChecks' | 'Map' | 'Clock' | 'Shield' | 'DollarSign' | 'Award' | 'Activity';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconName;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const icons = {
    Trophy: <Trophy size={40} className="text-dl-gold" />,
    Users: <Users size={40} className="text-dl-gold" />,
    ListChecks: <ListChecks size={40} className="text-dl-gold" />,
    Map: <Map size={40} className="text-dl-gold" />,
    Clock: <Clock size={40} className="text-dl-gold" />,
    Shield: <Shield size={40} className="text-dl-gold" />,
    DollarSign: <DollarSign size={40} className="text-dl-gold" />,
    Award: <Award size={40} className="text-dl-gold" />,
    Activity: <Activity size={40} className="text-dl-gold" />,
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#2d0013] p-2 rounded-lg overflow-hidden"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex flex-col items-center text-center p-6 bg-[#2d0013] rounded-lg">
        <div className="mb-4">
          {icons[icon]}
        </div>
        <h3 className="text-2xl gold-text mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}