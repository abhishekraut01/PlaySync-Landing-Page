import { Zap, Users, Smartphone, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-time Sync',
    description:
      'Experience zero-lag playback synchronization. Every beat, every note — perfectly timed across all devices.',
  },
  {
    icon: Users,
    title: 'Rooms & Hosts',
    description:
      'Create private rooms, invite friends, and let the host control the playlist. Simple and seamless collaboration.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Device',
    description:
      'Works everywhere — desktop, mobile, tablet. Join from any device and stay perfectly in sync with your crew.',
  },
  {
    icon: Lock,
    title: 'Lightweight & Private',
    description:
      'No bloat, no tracking. Just pure music sync. Your listening habits stay yours. Fast, secure, and privacy-first.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1DB954]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Built for{' '}
            <span className="text-[#1DB954]">seamless listening</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to listen together, nothing you don&apos;t.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-6 sm:p-8 border border-[#2A2A2A] hover:border-[#1DB954]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1DB954]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/0 to-[#1DB954]/0 group-hover:from-[#1DB954]/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />

              <div className="relative space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#1DB954]" />
                </div>

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#1DB954]/5 rounded-full blur-2xl group-hover:bg-[#1DB954]/10 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 sm:p-8 bg-[#1E1E1E] rounded-2xl border border-[#2A2A2A]">
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-[#1DB954]">
                &lt;50ms
              </div>
              <div className="text-sm text-gray-400 mt-1">Average latency</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#2A2A2A]" />
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-[#1DB954]">
                10K+
              </div>
              <div className="text-sm text-gray-400 mt-1">Songs synced daily</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#2A2A2A]" />
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-[#1DB954]">
                100%
              </div>
              <div className="text-sm text-gray-400 mt-1">Free to use</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
