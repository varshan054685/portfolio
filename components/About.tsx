'use client';

import { motion } from 'framer-motion';
import { personalData } from '@/lib/data';
import { Code2, Palette, Lightbulb, Heart } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, efficient, and well-documented code',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful, responsive, and user-friendly interfaces',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Finding creative solutions to complex challenges',
  },
  {
    icon: Heart,
    title: 'User Focused',
    description: 'Building with empathy and user experience in mind',
  },
];

export default function About({ isDark }: AboutProps) {
  return (
    <section
      id="about"
      className={`relative py-24 md:py-32 ${isDark ? 'bg-dark-100' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 mb-4">
            About Me
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-3" />
                <div className={`relative rounded-3xl p-8 ${isDark ? 'glass-dark' : 'glass bg-white/50'} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1">
                      <div className={`w-full h-full rounded-full flex items-center justify-center ${isDark ? 'bg-dark-200' : 'bg-white'}`}>
                        <span className="text-4xl font-bold gradient-text">VK</span>
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {personalData.name}
                    </h3>
                    <p className="text-cyan-400">{personalData.title}</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className={`absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'glass-dark' : 'glass bg-white/80'} text-cyan-400`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💻 Developer
              </motion.div>
              <motion.div
                className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'glass-dark' : 'glass bg-white/80'} text-purple-400`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                🎨 Designer
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={`space-y-6 text-lg ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              <p>
                I&apos;m a <span className="text-cyan-400 font-medium">B.Com (Information Technology)</span> student with a passion for front-end development and creating user-friendly web experiences. My approach to development combines technical skills with empathy and collaboration.
              </p>
              <p>
                I believe in creating <span className="text-purple-400 font-medium">simple, human-centered designs</span> that solve real problems. I&apos;m eager to contribute to ethical projects that make a positive impact on people&apos;s lives.
              </p>
              <p>
                When I&apos;m not coding, you can find me participating in hackathons, learning new technologies, or collaborating with like-minded developers. I&apos;ve won awards in hackathons and participated in state and national-level competitions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`p-4 rounded-xl ${isDark ? 'glass-dark' : 'glass bg-white/50'} hover:border-cyan-400/50 transition-all cursor-pointer`}
                >
                  <item.icon className="w-6 h-6 text-cyan-400 mb-2" />
                  <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/50">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
