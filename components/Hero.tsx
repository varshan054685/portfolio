'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { personalData } from '@/lib/data';
import dynamic from 'next/dynamic';

const LineWaves = dynamic(() => import('./LineWaves'), { ssr: false });

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const fullText = personalData.title;
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;
    const startTyping = setTimeout(() => {
      interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, 1400);

    return () => {
      clearTimeout(startTyping);
      clearInterval(interval);
    };
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* LineWaves WebGL background (React Bits) */}
      <div className="absolute inset-0 z-0 min-h-screen bg-black overflow-hidden">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.2}
          color1="#ffffff"
          color2="#ffffff"
          color3="#ffffff"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>

      {/* Light vignette so hero text stays readable */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4"
        >
          <span className="gradient-text">{personalData.name.split(' ')[0]}</span>
          <span className={isDark ? 'text-white' : 'text-gray-900'}>
            {' '}{personalData.name.split(' ')[1]}
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
          className="mb-6"
        >
          <p className={`text-xl sm:text-2xl md:text-3xl font-light font-mono ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {displayText}
            <span
              className={`inline-block w-0.5 h-6 sm:h-8 ml-1 bg-cyan-400 transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0, ease: 'easeOut' }}
          className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-white/90' : 'text-gray-700'}`}
        >
          {personalData.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowDown size={18} />
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8, ease: 'easeOut' }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: personalData.github, label: 'GitHub' },
            { icon: Linkedin, href: personalData.linkedin, label: 'LinkedIn' },
            { icon: Instagram, href: personalData.instagram, label: 'Instagram' },
            { icon: TbBrandWhatsapp, href: personalData.whatsapp, label: 'WhatsApp' },
            { icon: Mail, href: `mailto:${personalData.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${isDark ? 'glass text-white/70' : 'glass bg-white/50 text-gray-600'} hover:text-cyan-400 hover:border-cyan-400/50`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={handleScrollDown}
          className={`p-3 rounded-full transition-colors cursor-pointer ${isDark ? 'glass text-white/50' : 'glass bg-white/50 text-gray-500'} hover:text-cyan-400`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>

    </motion.section>
  );
}
