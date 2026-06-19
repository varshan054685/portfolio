'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import {
  Code2,
  Palette,
  FileJson,
  Atom,
  Server,
  Database,
  Globe,
  Wind,
  GitBranch,
  Users,
  Handshake,
  Clock,
  Heart,
  Lightbulb,
  TrendingUp,
  Layout,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Palette,
  FileJson,
  Atom,
  Server,
  Database,
  Globe,
  Wind,
  GitBranch,
  Users,
  Handshake,
  Clock,
  Heart,
  Lightbulb,
  TrendingUp,
  Layout,
};

export default function Skills({ isDark }: SkillsProps) {
  return (
    <section
      id="skills"
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 mb-4">
            Expertise
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & <span className="gradient-text">Approach</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills Categorized */}
        <div className="space-y-16 mb-24">
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-sm">
                  0{catIndex + 1}
                </span>
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => {
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      whileHover={{ y: -5 }}
                      className={`p-6 rounded-2xl border ${
                        isDark
                          ? 'bg-white/5 border-white/10 hover:border-cyan-500/50'
                          : 'bg-gray-50 border-gray-200 hover:border-cyan-500/50'
                      } transition-all group`}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 p-2.5 relative overflow-hidden"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: skill.color }}
                        />
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-9 h-9 object-contain z-10 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                          }}
                        />
                      </div>
                      <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {skill.name}
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skill.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Approach */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Work Approach
            </h3>
            <div className="space-y-4">
              {skills.workApproach.map((item, index) => {
                const Icon = iconMap[item.icon] || CheckCircle2;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className={`p-5 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.title}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tech Growth / Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tech Growth
            </h3>
            <div className={`p-8 rounded-2xl border ${
              isDark ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border-white/10' : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`mb-6 italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                "The beautiful thing about learning is that no one can take it away from you."
              </p>
              <h4 className={`font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Currently Learning
              </h4>
              <ul className="space-y-4">
                {skills.currentlyLearning.map((item, index) => {
                  const Icon = iconMap[item.icon] || Code2;
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isDark ? 'bg-white/10' : 'bg-white shadow-sm'
                      }`}>
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto text-gray-500 opacity-50" />
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-10 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-xs text-cyan-400 font-medium uppercase tracking-wider mb-2">Learning Philosophy</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Focusing on mastering the fundamentals while exploring modern patterns to build scalable and efficient systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
