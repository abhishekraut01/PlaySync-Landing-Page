import { Music2, Github, Twitter, Mail } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="waitlist" className="relative bg-[#121212] pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1DB954]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-2 group w-fit"
                aria-label="PlaySync Home"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1DB954]/50 transition-all">
                  <Music2 className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold tracking-tight">PlaySync</span>
              </Link>

              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                Real-time playlist syncing so friends can listen together — perfectly
                synchronized, zero lag, cross-device.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Connect with us</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com/playsync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1E1E1E] hover:bg-[#1DB954] rounded-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#121212]"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/playsync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1E1E1E] hover:bg-[#1DB954] rounded-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#121212]"
                  aria-label="View our GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@playsync.in"
                  className="w-10 h-10 bg-[#1E1E1E] hover:bg-[#1DB954] rounded-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#121212]"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold">Join the waitlist</h3>
              <p className="text-gray-400">
                Get early access and be the first to experience PlaySync when we
                launch.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} PlaySync. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded-md px-2 py-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded-md px-2 py-1"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded-md px-2 py-1"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>
              We respect your privacy. Your email will only be used to notify you
              about PlaySync launch updates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
