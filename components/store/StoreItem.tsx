"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { GradientButton } from "@/components/ui/gradient-button";

interface StoreItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
  index: number;
}

export default function StoreItem({
  id,
  name,
  description,
  price,
  image,
  onAddToCart,
  index
}: StoreItemProps) {
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
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10 }}
      className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-gold"
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl gold-text mb-2">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">£{price}</span>
          <GradientButton
            onClick={() => onAddToCart(id)}
            className="flex items-center space-x-2"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </GradientButton>
        </div>
      </div>
    </motion.div>
  );
}