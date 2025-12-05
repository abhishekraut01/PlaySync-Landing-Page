import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Mail, Twitter, Github } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - PlaySync',
  description: 'Get in touch with the PlaySync team.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1DB954] hover:text-[#1ed760] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Contact Us</h1>

        <div className="space-y-8">
          <p className="text-xl text-gray-300">
            Have questions? We&apos;d love to hear from you. Get in touch with the PlaySync team.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:hello@playsync.in"
              className="group bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#1DB954]/50 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-[#1DB954]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">hello@playsync.in</p>
            </a>

            <a
              href="https://twitter.com/playsync"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#1DB954]/50 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6 text-[#1DB954]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Twitter</h3>
              <p className="text-gray-400">@playsync</p>
            </a>

            <a
              href="https://github.com/playsync"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#1DB954]/50 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-[#1DB954]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/playsync</p>
            </a>

            <div className="group bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#1DB954]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-400">support@playsync.in</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] mt-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">When will PlaySync launch?</h3>
                <p className="text-gray-400">
                  We&apos;re currently in early access. Join the waitlist to be notified when we launch publicly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Is PlaySync free?</h3>
                <p className="text-gray-400">
                  Yes! PlaySync is completely free to use. No credit card required.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What platforms does it support?</h3>
                <p className="text-gray-400">
                  PlaySync works on any device with a modern web browser - desktop, mobile, and tablet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
