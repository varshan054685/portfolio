'use client';

import { motion } from 'framer-motion';
import { personalData } from '@/lib/data';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative py-12 ${isDark ? 'bg-dark-200' : 'bg-gray-100'}`}>
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              <span className="gradient-text">V</span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>K</span>
            </a>
            <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm transition-colors hover:text-cyan-400 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: personalData.github, label: 'GitHub' },
              { icon: Linkedin, href: personalData.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalData.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-colors ${
                  isDark
                    ? 'text-white/60 hover:text-cyan-400 hover:bg-white/10'
                    : 'text-gray-600 hover:text-cyan-500 hover:bg-gray-200'
                }`}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={`mt-8 pt-8 border-t text-center text-sm ${
            isDark ? 'border-white/10 text-white/40' : 'border-gray-200 text-gray-500'
          }`}
        >
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind
          </p>
        </motion.div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-colors ${
            isDark
              ? 'bg-dark-100 text-cyan-400 hover:bg-dark-300'
              : 'bg-white text-cyan-500 hover:bg-gray-100'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
