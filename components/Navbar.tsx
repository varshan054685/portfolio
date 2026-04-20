'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { personalData } from '@/lib/data';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? isDark
                  ? 'glass-dark shadow-glass'
                  : 'glass bg-white/80 shadow-lg'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-bold tracking-tighter"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <span className="gradient-text">V</span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>K</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-400'
                      : isDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Resume Download */}
              <motion.a
                href={personalData.resumeLink}
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className={`absolute top-20 left-4 right-4 p-6 rounded-2xl ${
                isDark ? 'glass-dark' : 'glass bg-white/80'
              }`}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
                        : isDark
                        ? 'text-white/70 hover:bg-white/10 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href={personalData.resumeLink}
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
