import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Finally! No more 'wait, what second are you at?' PlaySync makes watching music videos with friends seamless.",
    author: 'Priya S.',
    role: 'Early Access User',
    avatar: 'from-blue-500 to-blue-600',
  },
  {
    quote:
      'Game changer for our remote team. We have sync listening sessions during work and it actually stays in sync!',
    author: 'Michael K.',
    role: 'Product Designer',
    avatar: 'from-purple-500 to-purple-600',
  },
  {
    quote:
      'Super lightweight, no installation needed, and it just works. Exactly what I was looking for.',
    author: 'Aditya R.',
    role: 'Software Engineer',
    avatar: 'from-[#1DB954] to-[#1ed760]',
  },
];

export function SocialProof() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E1E1E]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Loved by <span className="text-[#1DB954]">early listeners</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of users who are already syncing their playlists.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-2xl p-8 border border-[#2A2A2A] hover:border-[#1DB954]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/0 to-[#1DB954]/0 group-hover:from-[#1DB954]/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />

              <div className="relative space-y-6">
                <Quote className="w-10 h-10 text-[#1DB954]/30" />

                <p className="text-gray-300 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-[#2A2A2A]">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar} flex items-center justify-center text-white font-bold`}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#1DB954]/5 rounded-full blur-2xl group-hover:bg-[#1DB954]/10 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#1DB954]">
              500+
            </div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#1DB954]">
              1,200+
            </div>
            <div className="text-sm text-gray-400">Rooms Created</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#1DB954]">
              15K+
            </div>
            <div className="text-sm text-gray-400">Songs Synced</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#1DB954]">
              98%
            </div>
            <div className="text-sm text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
