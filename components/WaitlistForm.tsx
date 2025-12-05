'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, Loader2, Mail, User } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setIsSuccess(true);
      setEmail('');
      setName('');

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {isSuccess ? (
        <div className="bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 border border-[#1DB954] rounded-2xl p-8 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">You&apos;re on the list!</h3>
          <p className="text-gray-300">
            Thanks — you&apos;re on the list! We&apos;ll email you when we launch.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                disabled={isLoading}
                className="w-full bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Your name (optional)"
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Your email (e.g. abhishek@example.com)"
                disabled={isLoading}
                required
                className={`w-full bg-[#1E1E1E] border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  error ? 'border-red-500' : 'border-[#2A2A2A]'
                }`}
                aria-label="Your email"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'email-error' : undefined}
              />
            </div>

            {error && (
              <p
                id="email-error"
                className="text-red-400 text-sm flex items-start gap-2"
                role="alert"
              >
                <span className="flex-shrink-0 w-1 h-1 bg-red-400 rounded-full mt-2" />
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] shadow-lg shadow-[#1DB954]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </>
            ) : (
              'Join Waitlist'
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            By joining, you agree to receive updates about PlaySync. Unsubscribe
            anytime.
          </p>
        </form>
      )}
    </div>
  );
}
