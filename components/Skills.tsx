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
  MessageCircle,
  Users,
  Handshake,
  Clock,
  Heart,
  Lightbulb,
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
  MessageCircle,
  Users,
  Handshake,
  Clock,
  Heart,
  Lightbulb,
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
            My Skills
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Technical Skills
            </h3>
            <div className="space-y-5">
              {skills.technical.map((skill, index) => {
                const Icon = iconMap[skill.icon] || Code2;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-medium flex-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.soft.map((skill, index) => {
                const Icon = iconMap[skill.icon] || Heart;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-5 rounded-xl ${isDark ? 'glass-dark' : 'glass bg-white/50'} group cursor-pointer`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-3 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h4>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-8">
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {['MERN', 'PERN', 'REST APIs', 'Responsive Design', 'Git Workflow', 'UI/UX'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
