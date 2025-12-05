import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - PlaySync',
  description: 'Terms of service for using PlaySync.',
};

export default function TermsPage() {
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

        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p className="text-xl">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Acceptance of Terms</h2>
            <p>
              By accessing or using PlaySync, you agree to be bound by these Terms of Service and
              all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Service Description</h2>
            <p>
              PlaySync provides real-time playlist synchronization services, allowing users to listen
              to YouTube playlists together with friends in synchronized playback.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service only for lawful purposes</li>
              <li>Not attempt to disrupt or compromise the service</li>
              <li>Respect intellectual property rights</li>
              <li>Not share inappropriate or harmful content</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Service Availability</h2>
            <p>
              While we strive for 100% uptime, we do not guarantee uninterrupted service. PlaySync
              may be temporarily unavailable for maintenance or updates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Limitation of Liability</h2>
            <p>
              PlaySync is provided "as is" without warranties of any kind. We are not liable for
              any damages arising from your use of the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service
              constitutes acceptance of updated terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:legal@playsync.in" className="text-[#1DB954] hover:underline">
                legal@playsync.in
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
