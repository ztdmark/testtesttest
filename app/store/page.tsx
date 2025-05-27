"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import StoreItem from '@/components/store/StoreItem';
import { ShoppingCart } from 'lucide-react';
import { GradientButton } from "@/components/ui/gradient-button";
import { Squares } from "@/components/ui/squares-background";

export default function StorePage() {
  const [cart, setCart] = useState<{id: string, quantity: number}[]>([]);
  
  const products = [
    {
      id: "product_1",
      name: "Dark Lion&apos;s Den T-Shirt",
      description: "Premium cotton t-shirt with the Dark Lion&apos;s Den logo. Available in black.",
      price: 25,
      image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "product_2",
      name: "Training Shorts",
      description: "Technical fabric shorts perfect for Muay Thai and MMA training. With gold trim.",
      price: 35,
      image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "product_3",
      name: "Hand Wraps",
      description: "Professional quality hand wraps featuring the Dark Lion&apos;s Den branding.",
      price: 12,
      image: "https://images.pexels.com/photos/6295793/pexels-photo-6295793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ];
  
  const addToCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      
      if (existing) {
        return prev.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  };
  
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    alert("Stripe checkout would be integrated here!");
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
            <span className="gold-text">Pride</span> Store
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Represent the Dark Lion&apos;s Den with our official merchandise. 
            High-quality apparel and training gear featuring our distinctive branding.
          </p>
        </motion.div>
        
        <div className="flex justify-end mb-8">
          <GradientButton 
            onClick={handleCheckout}
            disabled={getTotalItems() === 0}
            variant={getTotalItems() > 0 ? "default" : "variant"}
            className="flex items-center space-x-2"
          >
            <ShoppingCart />
            <span>Checkout ({getTotalItems()})</span>
          </GradientButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <StoreItem 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              onAddToCart={addToCart}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl mb-6">Custom Orders</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Looking for custom team gear or personalized equipment? 
            Contact us to discuss bulk orders or custom designs for your fight team.
          </p>
          <Link href="/contact">
            <GradientButton>Contact for Custom Orders</GradientButton>
          </Link>
        </div>
      </div>
    </div>
  );
}