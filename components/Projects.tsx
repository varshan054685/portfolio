'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import { Github, ExternalLink, X, ChevronRight, Code2 } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

// Gradient configurations for each project
const projectGradients = [
  { from: '#3b82f6', to: '#7c3aed', letter: 'A' }, // AI Chatbot - blue to purple
  { from: '#10b981', to: '#059669', letter: 'E' }, // E-commerce - green
  { from: '#f97316', to: '#dc2626', letter: 'E' }, // Event Registration - orange to red
  { from: '#ec4899', to: '#be123c', letter: 'A' }, // Time-Table Scheduler - pink to rose
  { from: '#6366f1', to: '#a855f7', letter: 'P' }, // Portfolio Website - indigo to purple
];

export default function Projects({ isDark }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openModal = (project: (typeof projects)[0], index: number) => {
    setSelectedProject(project);
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section
      id="projects"
      className={`relative py-24 md:py-32 ${isDark ? 'bg-[#0a0a1a]' : 'bg-gray-50'}`}
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
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const gradient = projectGradients[index];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-xl overflow-hidden cursor-pointer border ${
                  isDark ? 'border-gray-800 bg-[#0f0f1a]' : 'border-gray-200 bg-white'
                }`}
                onClick={() => openModal(project, index)}
              >
                {/* Gradient Header with Letter */}
                <div
                  className="relative h-40 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                  }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                  
                  {/* Large Letter */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/20 select-none">
                      {gradient.letter}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Tech Stack - Pill Style */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${
                          isDark
                            ? 'bg-gray-800 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400 transition-colors">
                    <span>View Details</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${
                isDark ? 'bg-[#0f0f1a]' : 'bg-white'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X size={18} className="text-white/80" />
              </button>

              {/* Modal Gradient Header */}
              <div
                className="relative h-44 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${projectGradients[selectedIndex].from}, ${projectGradients[selectedIndex].to})`,
                }}
              >
                {/* Large Letter */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-9xl font-bold text-white/20 select-none">
                    {projectGradients[selectedIndex].letter}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProject.title}
                </h3>
                
                <p className={`mb-6 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-xs rounded-full ${
                          isDark
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {selectedProject.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isDark
                          ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
                      }`}
                    >
                      <Code2 size={16} />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <span className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm cursor-not-allowed ${
                      isDark ? 'bg-gray-800/50 text-gray-500' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Code2 size={16} />
                      <span>Private</span>
                    </span>
                  )}
                  
                  {selectedProject.live ? (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90"
                      style={{
                        background: `linear-gradient(135deg, ${projectGradients[selectedIndex].from}, ${projectGradients[selectedIndex].to})`,
                      }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm cursor-not-allowed ${
                      isDark ? 'bg-gray-800/50 text-gray-500' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <ExternalLink size={16} />
                      <span>No Demo</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
