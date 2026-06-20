'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { skills } from '@/lib/data';
import {
  Code2,
  Atom,
  Server,
  Users,
  Lightbulb,
  TrendingUp,
  Layout,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Database,
  Paintbrush,
  Wrench,
} from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Atom, Server, Users, Lightbulb, TrendingUp, Layout,
};

// Tab config — icon + color per category
const tabConfig: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  glow: string;
  bg: string;
}> = {
  'Frontend Development': {
    icon: Monitor,
    color: '#00f3ff',
    glow: 'rgba(0,243,255,0.4)',
    bg: 'rgba(0,243,255,0.07)',
  },
  'Backend Development': {
    icon: Server,
    color: '#bc13fe',
    glow: 'rgba(188,19,254,0.4)',
    bg: 'rgba(188,19,254,0.07)',
  },
  'Databases': {
    icon: Database,
    color: '#00ff88',
    glow: 'rgba(0,255,136,0.4)',
    bg: 'rgba(0,255,136,0.07)',
  },
  'UI/UX & Styling': {
    icon: Paintbrush,
    color: '#ff00ff',
    glow: 'rgba(255,0,255,0.4)',
    bg: 'rgba(255,0,255,0.07)',
  },
  'Tools & DevOps': {
    icon: Wrench,
    color: '#f7df1e',
    glow: 'rgba(247,223,30,0.4)',
    bg: 'rgba(247,223,30,0.07)',
  },
};

export default function Skills({ isDark }: SkillsProps) {
  const [activeTab, setActiveTab] = useState(skills.categories[0].title);

  const activeCategory = skills.categories.find((c) => c.title === activeTab)!;
  const activeCfg = tabConfig[activeTab];

  // cardVariants kept for reference but not used as Variants type

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

        {/* Tab Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skills.categories.map((cat) => {
            const cfg = tabConfig[cat.title];
            const isActive = activeTab === cat.title;
            const Icon = cfg.icon;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 outline-none"
                style={{
                  background: isActive ? cfg.bg : 'transparent',
                  color: isActive ? cfg.color : isDark ? '#6b7280' : '#9ca3af',
                  border: `1.5px solid ${isActive ? cfg.color + '60' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                  boxShadow: isActive ? `0 0 18px ${cfg.glow}` : 'none',
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{cat.title}</span>
                <span className="sm:hidden">{cat.title.split(' ')[0]}</span>
                {isActive && (
                  <motion.span
                    layoutId="tab-dot"
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                    style={{ background: cfg.color, boxShadow: `0 0 8px ${cfg.glow}` }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Panel header */}
            <div
              className="flex items-center gap-3 mb-8 px-6 py-4 rounded-2xl"
              style={{
                background: activeCfg.bg,
                border: `1px solid ${activeCfg.color}25`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${activeCfg.color}20`, boxShadow: `0 0 12px ${activeCfg.glow}` }}
              >
                <span style={{ color: activeCfg.color }}>
                  <activeCfg.icon className="w-5 h-5" />
                </span>
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {activeCategory.title}
                </h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {activeCategory.skills.length} skill{activeCategory.skills.length > 1 ? 's' : ''} in this category
                </p>
              </div>

            </div>

            {/* Skill Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {activeCategory.skills.map((skill, i) => {
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 18, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative rounded-2xl p-5 overflow-hidden cursor-default"
                    style={{
                      background: isDark ? 'rgba(255,255,255,0.03)' : '#f9fafb',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${activeCfg.color}50`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${activeCfg.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    {/* Subtle top-left glow blob */}
                    <div
                      className="absolute -top-6 -left-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                      style={{ background: activeCfg.color }}
                    />

                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-7 h-7 object-contain"
                          style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.1))' }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                          }}
                        />
                      </div>
                    </div>

                    {/* Name + description */}
                    <h4 className={`font-bold text-base mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {skill.description}
                    </p>


                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom row: Work Approach + Tech Growth */}
        <div className="grid lg:grid-cols-2 gap-12 mt-24">

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
                    className={`p-5 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
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

          {/* Tech Growth */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tech Growth
            </h3>
            <div
              className={`p-8 rounded-2xl border ${isDark
                ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border-white/10'
                : 'bg-gray-50 border-gray-200'
                }`}
            >
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
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-white shadow-sm'
                          }`}
                      >
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto text-gray-500 opacity-50" />
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-10 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-xs text-cyan-400 font-medium uppercase tracking-wider mb-2">
                  Learning Philosophy
                </p>
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
