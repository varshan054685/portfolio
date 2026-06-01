'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const isDark = true;

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Enforce dark theme on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Main Content */}
      <main className={`${isLoading ? 'hidden' : 'block'} ${isDark ? 'dark' : ''}`}>
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Noise Texture Overlay */}
        <div className="noise" />

        {/* Navigation */}
        <Navbar isDark={isDark} />

        {/* Page Sections */}
        <div className={isDark ? 'text-white' : 'text-gray-900'}>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Experience isDark={isDark} />
          <Contact isDark={isDark} />
          <Footer isDark={isDark} />
        </div>
      </main>
    </>
  );
}
