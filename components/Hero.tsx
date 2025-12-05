'use client';

import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1DB954]/10 via-transparent to-transparent pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#1DB954]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E1E1E] rounded-full text-sm border border-[#2A2A2A] mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse" />
              <span className="text-gray-300">Now in early access</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Sync playlists.
              <br />
              <span className="text-[#1DB954]">Listen together</span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                — in perfect time.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Create rooms, add YouTube playlists, and enjoy perfectly synced
              playback with friends — low-latency and cross-device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToWaitlist}
                className="group bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] shadow-lg shadow-[#1DB954]/30 flex items-center justify-center gap-2"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="group border-2 border-[#2A2A2A] hover:border-[#1DB954] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-[#0f0f0f] flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                How it Works
              </button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-400 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1DB954] to-[#1ed760] border-2 border-[#0f0f0f]" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-[#0f0f0f]" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-[#0f0f0f]" />
                </div>
                <span>500+ early users</span>
              </div>
              <div className="h-4 w-px bg-[#2A2A2A]" />
              <div>Zero lag sync</div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-delayed">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954]/20 to-transparent rounded-3xl blur-3xl" />

              <div className="relative bg-gradient-to-br from-[#1E1E1E] to-[#121212] rounded-3xl p-6 sm:p-8 border border-[#2A2A2A] shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-xl flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Room: Study Session</div>
                        <div className="text-sm text-gray-400">3 listeners</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse" />
                      <span className="text-sm text-gray-400">Live</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: 'Lofi Hip Hop Mix', duration: '2:34:12', active: true },
                      { title: 'Study Beats Collection', duration: '1:45:23', active: false },
                      { title: 'Chill Vibes Playlist', duration: '3:12:45', active: false },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                          item.active
                            ? 'bg-[#1DB954]/10 border border-[#1DB954]/30'
                            : 'bg-[#1E1E1E] border border-transparent hover:border-[#2A2A2A]'
                        }`}
                      >
                        <div className={`w-16 h-16 rounded-lg ${
                          item.active
                            ? 'bg-gradient-to-br from-[#1DB954] to-[#1ed760]'
                            : 'bg-[#2A2A2A]'
                        } flex items-center justify-center`}>
                          {item.active ? (
                            <div className="flex gap-1">
                              <div className="w-1 bg-white rounded-full h-6 animate-sound-wave" />
                              <div className="w-1 bg-white rounded-full h-4 animate-sound-wave delay-75" />
                              <div className="w-1 bg-white rounded-full h-5 animate-sound-wave delay-150" />
                            </div>
                          ) : (
                            <Play className="w-6 h-6 text-gray-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#2A2A2A]">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Synced playback</span>
                      <span className="text-[#1DB954] font-semibold">0ms lag</span>
                    </div>
                    <div className="mt-2 h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-[#1DB954] to-[#1ed760] animate-progress" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1DB954]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1DB954]/10 rounded-full blur-2xl animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
