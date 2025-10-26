'use client';

import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BotpressChatbot from './components/BotpressChatbot';
import Script from 'next/script';
import { useEffect } from 'react';

// TypeScript interface for Netlify Identity
interface NetlifyIdentity {
  on: (event: string, callback: (user?: unknown) => void) => void;
}

interface WindowWithNetlify extends Window {
  netlifyIdentity?: NetlifyIdentity;
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'system-ui',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Set document title and meta description
    document.title = 'Dr. Noor Academy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Excellence in Education - O Level, A Level, and Medical Career Guidance'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Excellence in Education - O Level, A Level, and Medical Career Guidance';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BotpressChatbot />
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
          onLoad={() => {
            // Initialize only after the widget is loaded
            if ((window as WindowWithNetlify).netlifyIdentity) {
              const netlifyIdentity = (window as WindowWithNetlify)
                .netlifyIdentity!;
              netlifyIdentity.on('init', (user: unknown) => {
                if (!user) {
                  netlifyIdentity.on('login', () => {
                    document.location.href = '/admin/';
                  });
                }
              });
            }
          }}
        />
      </body>
    </html>
  );
}
