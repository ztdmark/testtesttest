import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import FeatureCard from '@/components/home/FeatureCard';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FighterJourneySection from '@/components/home/FighterJourneySection';
import { GradientButton } from "@/components/ui/gradient-button";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <section className="relative overflow-hidden">
        <BackgroundPaths title="" className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl text-center gold-text mt-32 mb-24">
            Why Train With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <FeatureCard 
              title="Expert Coaches" 
              description="Train with European champions and professional fighters who bring world-class expertise to every session."
              icon="Trophy"
            />
            <FeatureCard 
              title="All Levels Welcome" 
              description="From complete beginners to competitive fighters, our classes are designed for every experience level."
              icon="Users"
            />
            <FeatureCard 
              title="Specialized Classes" 
              description="Dedicated sessions for kids, women, and competitive fighters ensure everyone gets the training they need."
              icon="ListChecks"
            />
          </div>
        </div>
      </section>

      <TestimonialsSection />
      
      <FighterJourneySection />
      
      <section className="relative overflow-hidden">
        <BackgroundPaths title="" className="absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl text-center gold-text mt-32 mb-24">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="bg-[#2d0013] rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <Image 
                  src="https://images.pexels.com/photos/6740756/pexels-photo-6740756.jpeg" 
                  alt="Memberships" 
                  fill 
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-3xl gold-text mb-3">Memberships</h3>
                <p className="text-gray-300 mb-4">
                  Find the perfect membership option to match your training goals and schedule. From pay-as-you-go classes to unlimited access packages.
                </p>
                <Link href="/memberships">
                  <GradientButton>
                    Explore Memberships
                    <ArrowRight className="ml-2" />
                  </GradientButton>
                </Link>
              </div>
            </div>
            
            <div className="bg-[#2d0013] rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <Image 
                  src="https://images.pexels.com/photos/6295793/pexels-photo-6295793.jpeg" 
                  alt="Pride Store" 
                  fill 
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-3xl gold-text mb-3">Pride Store</h3>
                <p className="text-gray-300 mb-4">
                  Represent the Den with our exclusive merchandise. From training gear to casual wear, show your pride as part of our community.
                </p>
                <Link href="/store">
                  <GradientButton>
                    Visit Store
                    <ArrowRight className="ml-2" />
                  </GradientButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}