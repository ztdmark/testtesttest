"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import TeamMember from '@/components/team/TeamMember';
import { ChevronRight, Dumbbell, Brain, Target, Award, Users, Heart, Shield, Sword, Crown } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { GradientButton } from "@/components/ui/gradient-button";
import { Squares } from "@/components/ui/squares-background";

const timelineData = [
  {
    id: 1,
    title: "Foundation Training",
    date: "Month 1-3",
    content: "Master the basic techniques and fundamentals of Muay Thai. Focus on proper form, stance, and basic combinations.",
    category: "Beginner",
    icon: Dumbbell,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 60,
  },
  {
    id: 2,
    title: "Mental Preparation",
    date: "Month 2-4",
    content: "Develop mental toughness, discipline, and focus. Learn to manage fear and anxiety in combat situations.",
    category: "Mental",
    icon: Brain,
    relatedIds: [1, 3, 4],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 3,
    title: "Technical Mastery",
    date: "Month 4-8",
    content: "Advance your technical skills with complex combinations, defensive techniques, and fight strategy.",
    category: "Intermediate",
    icon: Target,
    relatedIds: [1, 2, 4, 5],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "Competition Prep",
    date: "Month 6-12",
    content: "Prepare for amateur competitions. Focus on sparring, fight simulation, and competition rules.",
    category: "Advanced",
    icon: Award,
    relatedIds: [2, 3, 5, 6],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Team Integration",
    date: "Month 8-12",
    content: "Become part of the fight team. Train with experienced fighters and learn from their experience.",
    category: "Team",
    icon: Users,
    relatedIds: [3, 4, 6],
    status: "pending" as const,
    energy: 75,
  },
  {
    id: 6,
    title: "Physical Conditioning",
    date: "Ongoing",
    content: "Intensive strength and conditioning program specific to fight preparation.",
    category: "Fitness",
    icon: Heart,
    relatedIds: [4, 5, 7],
    status: "pending" as const,
    energy: 90,
  },
  {
    id: 7,
    title: "Defense Mastery",
    date: "Month 12-18",
    content: "Advanced defensive techniques, counter-attacks, and ring control strategies.",
    category: "Defense",
    icon: Shield,
    relatedIds: [6, 8],
    status: "pending" as const,
    energy: 85,
  },
  {
    id: 8,
    title: "Fight Career",
    date: "Month 18+",
    content: "Regular competition at amateur and potentially professional level. Building fight experience.",
    category: "Professional",
    icon: Sword,
    relatedIds: [7, 9],
    status: "pending" as const,
    energy: 95,
  },
  {
    id: 9,
    title: "Championship Level",
    date: "Year 3+",
    content: "Competing at highest levels. Potential for regional and national titles.",
    category: "Elite",
    icon: Crown,
    relatedIds: [8],
    status: "pending" as const,
    energy: 100,
  },
];

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Josias Gomes",
      nickname: "The Dark Lion",
      role: "Head Coach & Founder",
      image: "/images/josias.png",
      bio: "European champion, UK #2, World #20 (55 kg). Josias brings world-class experience and technical expertise to every class. With over 15 years of competitive experience, his passion for Muay Thai is evident in his coaching style.",
      instagram: "josias_gomestfo",
      achievements: ["European Champion", "UK #2 Ranked", "World #20 (55kg)", "30+ Professional Fights"]
    },
    {
      name: "Lucy Hield",
      role: "Pro Fighter & Women&apos;s Coach",
      image: "/images/lucy.png",
      bio: "Professional fighter and physiotherapist, Lucy leads our women&apos;s classes with a focus on technique, fitness, and empowerment. Her background in physiotherapy ensures training is both effective and safe for all levels.",
      instagram: "lucyhield_",
      achievements: ["Professional Fighter", "Physiotherapist", "Women&apos;s Classes Lead", "Fitness Specialist"]
    },
    {
      name: "Jimmy",
      role: "MMA Coach",
      image: "https://images.pexels.com/photos/6295837/pexels-photo-6295837.jpeg",
      bio: "With a diverse background spanning multiple martial arts disciplines, Jimmy brings comprehensive knowledge to our MMA program. His coaching focuses on well-rounded skill development across striking, grappling, and fight strategy.",
      instagram: "",
      achievements: ["MMA Specialist", "BJJ Purple Belt", "Wrestling Background", "Striking Expert"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-16">
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4">
            <span className="gold-text">Our</span> Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated coaches who will guide your martial arts journey. 
            Our team brings world-class expertise and passion to every class.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              nickname={member.nickname}
              role={member.role}
              image={member.image}
              bio={member.bio}
              instagram={member.instagram}
              achievements={member.achievements}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">
            <span className="gold-text">Fighter&apos;s</span> Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the path to becoming an elite fighter. Each stage represents key milestones in your martial arts journey.
          </p>
        </motion.div>

        <div className="h-[800px] mb-16">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
        
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-3xl mb-6">Want to know more about Dark Lion&apos;s Den?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Learn about our story, mission, and what makes our gym unique. 
              We&apos;re more than just a training facility—we&apos;re a community.
            </p>
            <Link href="/team/about">
              <GradientButton>
                About Us
                <ChevronRight className="ml-2" />
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}