import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-dl-gold/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <Logo width={100} height={100} />
            <p className="mt-4 text-gray-400 max-w-xs text-center md:text-left">
              Train like champions in the Dark Lion&apos;s Den. Muay Thai & MMA gym in Witney, UK.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-dl-gold text-2xl mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/memberships" className="text-gray-400 hover:text-dl-gold transition-colors">Memberships</Link>
              <Link href="/timetable" className="text-gray-400 hover:text-dl-gold transition-colors">Timetable</Link>
              <Link href="/team" className="text-gray-400 hover:text-dl-gold transition-colors">Team</Link>
              <Link href="/team/about" className="text-gray-400 hover:text-dl-gold transition-colors">About Us</Link>
              <Link href="/store" className="text-gray-400 hover:text-dl-gold transition-colors">Pride Store</Link>
              <Link href="/contact" className="text-gray-400 hover:text-dl-gold transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-dl-gold text-2xl mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <p className="flex items-start">
                <MapPin className="text-dl-gold mt-1 mr-4" size={24} />
                <span className="text-gray-400">West End Industrial Estate, Witney OX28 1UB</span>
              </p>
              <p className="flex items-center">
                <Phone className="text-dl-gold mr-4" size={24} />
                <span className="text-gray-400">01993 684203</span>
              </p>
              <p className="flex items-center">
                <Mail className="text-dl-gold mr-4" size={24} />
                <span className="text-gray-400">taphousefitness@gmail.com</span>
              </p>
            </div>
            
            <h3 className="text-dl-gold text-2xl mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/thedarklionsden" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dl-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://instagram.com/josias_gomestfo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dl-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://instagram.com/lucyhield_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dl-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-dl-gold transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {year} Dark Lion&apos;s Den Martial Arts Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}