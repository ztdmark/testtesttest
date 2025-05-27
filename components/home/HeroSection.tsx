'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { GradientButton } from "@/components/ui/gradient-button";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Martial Arts Training"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6"
          >
            <div className="gold-text">
              <Typewriter
                options={{
                  strings: ['TRAIN LIKE CHAMPIONS'],
                  autoStart: true,
                  loop: true,
                  cursor: '',
                  delay: 50,
                  deleteSpeed: 30
                }}
              />
            </div>
            <span className="block">in the</span>
            <span className="block red-underline gold-text">Dark Lion&apos;s Den</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            Expert coaching in Muay Thai & MMA for all levels. Join our community of fighters and enthusiasts in Witney, UK.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <Link href="/timetable">
              <GradientButton>View Timetable</GradientButton>
            </Link>
            <Link href="/memberships">
              <GradientButton variant="variant">Explore Memberships</GradientButton>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-dl-gold rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}