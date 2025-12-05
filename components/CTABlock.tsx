'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export function CTABlock() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1DB954]/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-3xl p-12 sm:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Limited Early Access
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to sync up?
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join the waitlist and be among the first to experience perfectly
              synchronized listening with your friends.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={scrollToWaitlist}
                className="group bg-white hover:bg-gray-100 text-[#1DB954] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1DB954] shadow-lg flex items-center justify-center gap-2"
              >
                Join Waitlist Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-white/80 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                No credit card required
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                Free forever
              </div>
            </div>
          </div>

          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full animate-ping" />
          <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-white/20 rounded-full animate-ping delay-1000" />
        </div>
      </div>
    </section>
  );
}
