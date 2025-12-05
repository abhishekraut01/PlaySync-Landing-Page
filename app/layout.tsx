import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PlaySync — Listen together. Sync playlists with friends.',
  description: 'Create rooms, add YouTube playlists, and enjoy perfectly synced playback with friends — low-latency and cross-device.',
  keywords: ['playlist sync', 'listen together', 'YouTube sync', 'music rooms', 'synchronized playback'],
  authors: [{ name: 'PlaySync' }],
  openGraph: {
    title: 'PlaySync — Listen together. Sync playlists with friends.',
    description: 'Create rooms, add YouTube playlists, and enjoy perfectly synced playback with friends — low-latency and cross-device.',
    url: 'https://playsync.in',
    siteName: 'PlaySync',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PlaySync - Sync playlists with friends',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlaySync — Listen together. Sync playlists with friends.',
    description: 'Create rooms, add YouTube playlists, and enjoy perfectly synced playback with friends.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0f0f0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
