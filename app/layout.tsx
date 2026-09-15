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
  title: 'Varshan K | Full-Stack Developer & Data Engineer',
  description: 'Portfolio of Varshan K, a Full-Stack Developer and Data Engineering specialist proficient in Python, SQL, MERN & PERN stacks, ETL pipelines, and AI integration.',
  keywords: ['Varshan K', 'Full-Stack Developer', 'Data Engineer', 'Python', 'SQL', 'ETL Pipelines', 'React.js', 'Next.js', 'PostgreSQL', 'MongoDB', 'MERN Stack', 'PERN Stack'],
  authors: [{ name: 'Varshan K' }],
  openGraph: {
    title: 'Varshan K | Full-Stack Developer & Data Engineer',
    description: 'Full-Stack Developer & Data Engineering specialist crafting scalable applications and data architectures.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varshan K | Full-Stack Developer & Data Engineer',
    description: 'Full-Stack Developer & Data Engineering specialist crafting scalable applications and data architectures.',
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
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
