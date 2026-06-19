'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className={`bg-gray-950 ${isDark ? 'dark' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <CustomCursor />
          <div className="noise" />
          <Navbar isDark={isDark} />
          <main className={isDark ? 'text-white' : 'text-gray-900'}>
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Skills isDark={isDark} />
            <Projects isDark={isDark} />
            <Experience isDark={isDark} />
            <Contact isDark={isDark} />
            <Footer isDark={isDark} />
          </main>
        </motion.div>
      )}
    </>
  );
}
