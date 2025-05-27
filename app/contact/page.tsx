"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { GradientButton } from "@/components/ui/gradient-button";
import { Squares } from "@/components/ui/squares-background";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    form.reset();
    setIsSubmitting(false);
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
            <span className="gold-text">Contact</span> Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about classes, memberships, or anything else? Get in touch with our team.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl gold-text mb-8">Send Us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <GradientButton 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </GradientButton>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl gold-text mb-8">Contact Information</h2>
            
            <div className="bg-zinc-900/80 p-6 rounded-lg mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-dl-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-gray-300">
                      West End Industrial Estate<br />
                      Witney, OX28 1UB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-dl-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-300">01993 684203</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-dl-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-300">taphousefitness@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="text-dl-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium mb-1">Instagram</h3>
                    <div className="space-y-1 text-gray-300">
                      <p><a href="https://instagram.com/thedarklionsden" target="_blank" rel="noopener noreferrer" className="hover:text-dl-gold">@thedarklionsden</a></p>
                      <p><a href="https://instagram.com/josias_gomestfo" target="_blank" rel="noopener noreferrer" className="hover:text-dl-gold">@josias_gomestfo</a></p>
                      <p><a href="https://instagram.com/lucyhield_" target="_blank" rel="noopener noreferrer" className="hover:text-dl-gold">@lucyhield_</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl gold-text mb-6">Opening Hours</h2>
            <div className="bg-zinc-900/80 p-6 rounded-lg">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="font-medium">Monday - Saturday</p>
                  <p className="text-gray-300">08:00 - 22:00</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-300">10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
            title="Dark Lion's Den location map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}