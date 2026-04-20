import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Varshan K | Front-End Developer & B.Com (IT) Student',
  description: 'Portfolio of Varshan K, a passionate front-end developer specializing in React.js, MERN/PERN stack, and creating human-centered web solutions.',
  keywords: ['Varshan K', 'front-end developer', 'React.js', 'Next.js', 'TailwindCSS', 'MERN stack', 'portfolio', 'web developer'],
  authors: [{ name: 'Varshan K' }],
  openGraph: {
    title: 'Varshan K | Front-End Developer',
    description: 'Passionate front-end developer creating human-centered web experiences',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varshan K | Front-End Developer',
    description: 'Passionate front-end developer creating human-centered web experiences',
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
