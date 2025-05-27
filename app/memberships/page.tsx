"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MembershipCard from '@/components/memberships/MembershipCard';
import { GradientButton } from "@/components/ui/gradient-button";
import Link from 'next/link';
import Image from 'next/image';

export default function MembershipsPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const memberships = [
    {
      title: "PAYG Class",
      price: "£10",
      period: "per class",
      features: [
        "Access to a single class",
        "No commitment required",
        "Try any class on the timetable",
        "Great for beginners or occasional training"
      ],
      popular: false,
      color: "gold" as const
    },
    {
      title: "PAYG Gym",
      price: "£10",
      period: "per session",
      features: [
        "Access to gym equipment for one session",
        "Use of training facilities",
        "No class instruction included",
        "Train at your own pace"
      ],
      popular: false,
      color: "gold" as const
    },
    {
      title: "Unlimited MA + Gym",
      price: "£70",
      period: "per month",
      features: [
        "Unlimited access to all martial arts classes",
        "Full gym access during opening hours",
        "Priority booking for special events",
        "Our most comprehensive package"
      ],
      popular: true,
      color: "gold" as const
    },
    {
      title: "Unlimited MA",
      price: "£52.99",
      period: "per month",
      features: [
        "Unlimited access to all martial arts classes",
        "No gym access included",
        "Ideal for those focused on martial arts training",
        "Access to all instructors"
      ],
      popular: false,
      color: "gold" as const
    },
    {
      title: "Gym-Only",
      price: "£28.99",
      period: "per month",
      features: [
        "Full gym access during opening hours",
        "No martial arts classes included",
        "Use of all gym equipment",
        "Train on your own schedule"
      ],
      popular: false,
      color: "gold" as const
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg"
          alt="Martial Arts Training"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl mb-4"
          >
            <span className="gold-text">Membership</span> Options
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose the membership that suits your training goals and schedule. From pay-as-you-go to unlimited access, we have options for everyone.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {memberships.map((membership, index) => (
            <MembershipCard 
              key={index}
              title={membership.title}
              price={membership.price}
              period={membership.period}
              features={membership.features}
              popular={membership.popular}
              color={membership.color}
              index={index}
            />
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl mb-6">Need More Information?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            If you have questions about our membership options or would like to discuss which is best for your needs, please don&apos;t hesitate to contact us. Our team is here to help you find the perfect fit for your training journey.
          </p>
          <Link href="/contact">
            <GradientButton>Contact Us</GradientButton>
          </Link>
        </div>
      </div>
    </div>
  );
}