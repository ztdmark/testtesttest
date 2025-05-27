"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-dl-gold bg-black/40 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <Image
        src={`https://images.pexels.com/photos/${id}`}
        alt={`${author}`}
        width={128}
        height={128}
        className="pointer-events-none mx-auto rounded-full border-2 border-dl-gold bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-gray-300">&quot;{testimonial}&quot;</span>
      <span className="text-center text-sm font-medium text-dl-gold">{author}</span>
    </motion.div>
  );
}