"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 120, height = 120 }: LogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link href="/" className="flex items-center">
        <Image 
          src="/logo.svg" 
          alt="Dark Lion's Den Martial Arts Academy" 
          width={width} 
          height={height}
          priority
        />
      </Link>
    </motion.div>
  );
}