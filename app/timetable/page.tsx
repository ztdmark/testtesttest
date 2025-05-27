"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import TimeSlot from '@/components/timetable/TimeSlot';
import { Squares } from "@/components/ui/squares-background";

export default function TimetablePage() {
  const [activeDay,setActiveDay] = useState("monday");
  
  const timetable = {
    monday: [
      { time: "18:00", class: "Kids Muay Thai", instructor: "Josias", color: "kids" },
      { time: "19:15", class: "Adults Muay Thai", instructor: "Josias", color: "muaythai" }
    ],
    tuesday: [
      { time: "18:30", class: "MMA", instructor: "Jimmy", color: "mma" }
    ],
    wednesday: [
      { time: "18:00", class: "Kids Muay Thai", instructor: "Josias", color: "kids" },
      { time: "19:15", class: "Adults Muay Thai", instructor: "Josias", color: "muaythai" }
    ],
    thursday: [
      { time: "18:30", class: "MMA", instructor: "Jimmy", color: "mma" },
      { time: "19:45", class: "Adults Muay Thai", instructor: "Josias", color: "muaythai" }
    ],
    friday: [
      { time: "17:30", class: "Adults Muay Thai", instructor: "Josias", color: "muaythai" },
      { time: "18:45", class: "Women&apos;s Muay Thai", instructor: "Lucy", color: "women" }
    ],
    saturday: [
      { time: "10:00", class: "Kids Muay Thai", instructor: "Josias", color: "kids" },
      { time: "12:00", class: "MMA", instructor: "Jimmy", color: "mma" }
    ],
    sunday: [
      { time: "12:30", class: "Fighters-Only MT sparring", instructor: "Josias", color: "fighters" }
    ]
  };
  
  const days = [
    { id: "monday", label: "Mon" },
    { id: "tuesday", label: "Tue" },
    { id: "wednesday", label: "Wed" },
    { id: "thursday", label: "Thu" },
    { id: "friday", label: "Fri" },
    { id: "saturday", label: "Sat" },
    { id: "sunday", label: "Sun" }
  ];

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
            <span className="gold-text">Timetable</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find your perfect training time with our weekly class schedule. 
            All classes are led by our expert coaches and suitable for various skill levels.
          </p>
        </motion.div>
        
        <div className="mb-12 overflow-x-auto">
          <div className="min-w-max">
            {/* Desktop Timetable */}
            <div className="hidden md:block">
              <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="bg-transparent"></div>
                {days.map((day) => (
                  <div 
                    key={day.id} 
                    className="bg-zinc-900/80 rounded py-3 text-center text-dl-red font-heading text-2xl"
                  >
                    {day.label}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-8 gap-2">
                <div className="space-y-2">
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">10:00</span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">12:00</span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">17:30</span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">18:00</span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">18:30</span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">18:45</span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">19:15</span>
                  </div>
                  <div className="h-32 flex items-center justify-center bg-zinc-900/80 rounded">
                    <span className="text-dl-gold font-heading text-xl">19:45</span>
                  </div>
                </div>
                
                {days.map((day) => (
                  <div key={day.id} className="space-y-2">
                    <TimeSlot 
                      time="10:00" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "10:00")} 
                    />
                    <TimeSlot 
                      time="12:00" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "12:00")} 
                    />
                    <TimeSlot 
                      time="17:30" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "17:30")} 
                    />
                    <TimeSlot 
                      time="18:00" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "18:00")} 
                    />
                    <TimeSlot 
                      time="18:30" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "18:30")} 
                    />
                    <TimeSlot 
                      time="18:45" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "18:45")} 
                    />
                    <TimeSlot 
                      time="19:15" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "19:15")} 
                    />
                    <TimeSlot 
                      time="19:45" 
                      classes={timetable[day.id as keyof typeof timetable].filter(c => c.time === "19:45")} 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Timetable */}
            <div className="md:hidden">
              <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                {days.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setActiveDay(day.id)}
                    className={`px-4 py-2 rounded-full text-lg whitespace-nowrap transition-colors ${
                      activeDay === day.id
                        ? 'bg-dl-red text-white'
                        : 'bg-zinc-800/80 text-gray-300 hover:bg-zinc-700'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
              
              <div className="bg-zinc-900/80 rounded-lg p-4">
                <h3 className="text-2xl text-dl-red mb-4 font-heading">
                  {days.find(d => d.id === activeDay)?.label}
                </h3>
                
                <div className="space-y-4">
                  {timetable[activeDay as keyof typeof timetable].length > 0 ? (
                    timetable[activeDay as keyof typeof timetable].map((slot, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${
                          slot.color === 'muaythai' ? 'bg-dl-gold/10 border-l-4 border-dl-gold' :
                          slot.color === 'mma' ? 'bg-blue-900/20 border-l-4 border-blue-500' :
                          slot.color === 'kids' ? 'bg-green-900/20 border-l-4 border-green-500' :
                          slot.color === 'women' ? 'bg-pink-900/20 border-l-4 border-pink-500' :
                          'bg-purple-900/20 border-l-4 border-purple-500'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-dl-gold text-xl font-heading">{slot.time}</span>
                          <span className="text-sm text-gray-400">Instructor: {slot.instructor}</span>
                        </div>
                        <h4 className="text-xl">{slot.class}</h4>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-center py-4">No classes scheduled for this day.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-zinc-900/80 p-6 rounded-lg">
          <h2 className="text-3xl mb-4 gold-text">Class Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-dl-gold/10 border-l-4 border-dl-gold p-3 rounded">
              <h3 className="text-white text-lg">Adults Muay Thai</h3>
              <p className="text-sm text-gray-300">All levels welcome</p>
            </div>
            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-3 rounded">
              <h3 className="text-white text-lg">MMA</h3>
              <p className="text-sm text-gray-300">Mixed martial arts training</p>
            </div>
            <div className="bg-green-900/20 border-l-4 border-green-500 p-3 rounded">
              <h3 className="text-white text-lg">Kids Muay Thai</h3>
              <p className="text-sm text-gray-300">Ages 7-15</p>
            </div>
            <div className="bg-pink-900/20 border-l-4 border-pink-500 p-3 rounded">
              <h3 className="text-white text-lg">Women&apos;s Muay Thai</h3>
              <p className="text-sm text-gray-300">All levels welcome</p>
            </div>
            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-3 rounded">
              <h3 className="text-white text-lg">Fighters-Only</h3>
              <p className="text-sm text-gray-300">Advanced training & sparring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}