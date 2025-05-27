"use client";

import { motion } from 'framer-motion';
import { GradientButton } from "@/components/ui/gradient-button";
import Link from 'next/link';

export default function JourneyPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Your Journey
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid gap-6"
      >
        <p className="text-lg text-gray-700">
          Start your martial arts journey with us today.
        </p>
      </motion.div>
    </div>
  );
}