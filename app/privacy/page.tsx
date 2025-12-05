import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - PlaySync',
  description: 'Privacy policy for PlaySync - how we handle your data.',
};

export default function PrivacyPage() {
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

        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p className="text-xl">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Overview</h2>
            <p>
              PlaySync is committed to protecting your privacy. This policy outlines how we collect,
              use, and protect your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Information We Collect</h2>
            <p>
              When you join our waitlist, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your email address (required)</li>
              <li>Your name (optional)</li>
              <li>Basic technical information (browser type, IP address)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">How We Use Your Information</h2>
            <p>
              We use your information solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Notify you when PlaySync launches</li>
              <li>Send important updates about the product</li>
              <li>Improve our service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Data Protection</h2>
            <p>
              Your data is stored securely using industry-standard encryption. We never sell or
              share your personal information with third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a copy of your data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our emails at any time</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8">Contact</h2>
            <p>
              For privacy-related questions, contact us at{' '}
              <a href="mailto:privacy@playsync.in" className="text-[#1DB954] hover:underline">
                privacy@playsync.in
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
