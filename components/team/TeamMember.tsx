"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  nickname?: string;
  role: string;
  image: string;
  bio: string;
  instagram: string;
  achievements: string[];
  index: number;
}

export default function TeamMember({
  name,
  nickname,
  role,
  image,
  bio,
  instagram,
  achievements,
  index
}: TeamMemberProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-gold"
    >
      <div className="relative h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full hover:bg-dl-gold hover:text-black transition-colors"
            aria-label={`Visit ${name}&apos;s Instagram`}
          >
            <Instagram size={24} />
          </a>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl gold-text mb-1">{name}</h3>
        {nickname && (
          <p className="text-dl-red font-medium mb-2">&quot;{nickname}&quot;</p>
        )}
        <p className="text-gray-400 mb-4">{role}</p>
        
        <p className="text-gray-300 mb-4">{bio}</p>
        
        <div className="mt-4">
          <h4 className="text-lg font-medium mb-2">Achievements:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-dl-gold mr-2">•</span>
                <span className="text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}