'use client';

import { useState, useEffect } from 'react';
import { Music2, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#1E1E1E]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
            aria-label="PlaySync Home"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1DB954]/50 transition-all">
              <Music2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              PlaySync
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] rounded-md px-2 py-1"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] rounded-md px-2 py-1"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] rounded-md px-2 py-1"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] shadow-lg shadow-[#1DB954]/20"
            >
              Get Early Access
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded-md"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-t border-[#1E1E1E]">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white text-left py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded-md px-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white text-left py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded-md px-2"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-gray-300 hover:text-white text-left py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded-md px-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold px-6 py-3 rounded-full transition-all mt-2"
            >
              Get Early Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
