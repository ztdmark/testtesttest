"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AboutPage() {
  const faqs = [
    {
      question: "Do I need any experience to join?",
      answer: "Not at all! We welcome beginners in all our classes and provide the necessary guidance to start your journey safely and confidently."
    },
    {
      question: "What should I bring to my first class?",
      answer: "For your first class, just bring comfortable sports clothes, a water bottle, and a positive attitude. No specialized equipment is needed initially as we can provide what you need to get started."
    },
    {
      question: "Are there separate changing facilities for women?",
      answer: "Yes, we have separate changing facilities and showers for both men and women."
    },
    {
      question: "How fit do I need to be to start?",
      answer: "Our classes accommodate all fitness levels. We&apos;ll help you build your fitness gradually alongside developing your martial arts skills."
    },
    {
      question: "Can I try a class before signing up for membership?",
      answer: "Absolutely! We offer pay-as-you-go options so you can try classes before committing to a membership."
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl mb-4"
          >
            <span className="gold-text">About</span> Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the story, mission, and values behind Dark Lion&apos;s Den Martial Arts Academy.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl gold-text mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Dark Lion&apos;s Den was born from a vision to create a premier martial arts facility in Witney, 
                providing world-class training in Muay Thai and MMA. Founded by Josias &quot;The Dark Lion&quot; Gomes, 
                the academy represents the culmination of years of competitive fighting and coaching experience.
              </p>
              <p>
                Previously operating as Taphouse Fitness, we&apos;ve rebranded to Dark Lion&apos;s Den to better 
                reflect our focus on martial arts excellence and the fighting spirit embodied by our head coach. 
                The lion symbolizes strength, courage, and leadership—qualities we aim to develop in all our members.
              </p>
              <p>
                Today, we&apos;re proud to offer specialized training for all ages and skill levels, from children 
                taking their first steps in martial arts to competitive fighters preparing for the ring.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image 
              src="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Inside Dark Lion&apos;s Den Gym" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl gold-text mb-6 text-center">Our Mission</h2>
          <div className="bg-zinc-900 p-8 rounded-lg border border-gray-800 max-w-3xl mx-auto">
            <p className="text-xl text-center">
              &quot;To provide an exceptional martial arts experience that fosters physical growth, 
              mental resilience, and community connection for practitioners of all levels.&quot;
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl gold-text mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl hover:text-dl-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-zinc-900 p-6 rounded-lg"
          >
            <h2 className="text-3xl gold-text mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-dl-gold mt-1 mr-4" size={24} />
                <p className="text-gray-300">
                  West End Industrial Estate, Witney OX28 1UB
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="text-dl-gold mr-4" size={24} />
                <p className="text-gray-300">01993 684203</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-dl-gold mr-4" size={24} />
                <p className="text-gray-300">taphousefitness@gmail.com</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-zinc-900 p-6 rounded-lg"
          >
            <h2 className="text-3xl gold-text mb-6">Opening Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Clock className="text-dl-gold mr-2" size={20} />
                  <p className="text-gray-300">Monday - Friday</p>
                </div>
                <p className="text-gray-300">08:00 - 22:00</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Clock className="text-dl-gold mr-2" size={20} />
                  <p className="text-gray-300">Saturday</p>
                </div>
                <p className="text-gray-300">08:00 - 22:00</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Clock className="text-dl-gold mr-2" size={20} />
                  <p className="text-gray-300">Sunday</p>
                </div>
                <p className="text-gray-300">10:00 - 16:00</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="rounded-lg overflow-hidden"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.5764843106034!2d-1.4884537232495625!3d51.78436347089777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876fad1a3ccc5e7%3A0xcf9dc40e5bfea829!2sWest%20End%20Industrial%20Estate%2C%20Witney%20OX28%201UB!5e0!3m2!1sen!2suk!4v1708606175949!5m2!1sen!2suk" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Dark Lion&apos;s Den location map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}