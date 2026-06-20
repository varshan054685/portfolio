'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroPage from '@/components/HeroPage';
import JourneyPage from '@/components/JourneyPage';
import ContactPage from '@/components/ContactPage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Global scroll progress for hero exit + contact reveal
  const { scrollY, scrollYProgress } = useScroll({
    container: typeof window !== 'undefined' ? undefined : undefined,
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#0a0a0a]"
        >
          {/* Custom cursor */}
          <CustomCursor />

          {/* Noise overlay */}
          <div className="noise" aria-hidden />

          {/* Navbar — always visible, transparent over hero */}
          <Navbar isDark />

          <main>
            {/* PAGE 1 — HERO */}
            <HeroPage scrollY={scrollY} />

            {/* PAGE 2 — JOURNEY (About → Skills → Projects → Education → Achievements) */}
            <JourneyPage />

            {/* PAGE 3 — CONTACT */}
            <ContactPage scrollProgress={scrollYProgress} />
          </main>
        </motion.div>
      )}
    </>
  );
}
