import { Plus, Link2, Radio } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Plus,
    title: 'Create a Room',
    description:
      'Set up your listening room in seconds. Give it a name, set it private or public, and you are ready to go.',
  },
  {
    number: '02',
    icon: Link2,
    title: 'Add Your Playlist',
    description:
      'Paste any YouTube playlist link. PlaySync instantly loads it and prepares for synchronized playback.',
  },
  {
    number: '03',
    icon: Radio,
    title: 'Sync & Listen',
    description:
      'Share the room link with friends. Everyone joins, and playback syncs automatically. That is it!',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#121212] to-[#0f0f0f]"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get started in{' '}
            <span className="text-[#1DB954]">three simple steps</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            No downloads, no hassle. Just instant synchronized listening.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1DB954]/30 to-transparent" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#1DB954]/50 transition-all duration-300 h-full flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0f0f0f] border-2 border-[#1DB954] rounded-full flex items-center justify-center text-[#1DB954] font-bold z-10">
                  {index + 1}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/0 to-[#1DB954]/0 group-hover:from-[#1DB954]/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />

                <div className="relative space-y-6 flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mx-auto md:mx-0 mt-6">
                    <step.icon className="w-8 h-8 text-[#1DB954]" />
                  </div>

                  <div className="text-center md:text-left space-y-3 flex-1">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="text-6xl font-bold text-[#1DB954]/10 text-center md:text-right">
                    {step.number}
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-[#1DB954]/5 rounded-full blur-2xl group-hover:bg-[#1DB954]/10 transition-all duration-300" />
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-6 w-12 h-12 z-20">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-[#1DB954]/30 transform rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 bg-[#1E1E1E]/50 backdrop-blur-sm rounded-2xl border border-[#2A2A2A]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-full flex items-center justify-center">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Ready in under 30 seconds</div>
                <div className="text-sm text-gray-400">
                  From room creation to first sync
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
