'use client';

import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';
import { Trophy, Medal, Handshake, Globe, GraduationCap, School } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Medal,
  Handshake,
  Globe,
  GraduationCap,
  School,
};

export default function Experience({ isDark }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`relative py-24 md:py-32 ${isDark ? 'bg-dark-200' : 'bg-white'}`}
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 mb-4">
            Achievements
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Awards & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards & Participation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Awards & Participation
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

              <div className="space-y-8">
                {experience.map((item, index) => {
                  const Icon = iconMap[item.icon] || Trophy;
                  const isAward = item.type === 'award';

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        className={`absolute left-3 w-7 h-7 rounded-full flex items-center justify-center ${
                          isAward
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                            : 'bg-gradient-to-br from-cyan-400 to-purple-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </motion.div>

                      {/* Content Card */}
                      <div
                        className={`p-5 rounded-xl ${isDark ? 'glass-dark' : 'glass bg-white/50'} hover:border-cyan-400/30 transition-all`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {item.title}
                          </h4>
                          {isAward && (
                            <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                              {item.year}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-cyan-400 mb-2">{item.organization}</p>
                        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500" />

              <div className="space-y-8">
                {education.map((item, index) => {
                  const Icon = iconMap[item.icon] || GraduationCap;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        className="absolute left-3 w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-500"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </motion.div>

                      {/* Content Card */}
                      <div
                        className={`p-5 rounded-xl ${isDark ? 'glass-dark' : 'glass bg-white/50'} hover:border-cyan-400/30 transition-all`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {item.degree}
                          </h4>
                          <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-sm text-purple-400 mb-1">{item.institution}</p>
                        <p className={`text-sm mb-2 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{item.location}</p>
                        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {[
                { value: '4+', label: 'Projects' },
                { value: '2', label: 'Hackathons' },
                { value: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className={`p-4 rounded-xl text-center ${isDark ? 'glass-dark' : 'glass bg-white/50'}`}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
