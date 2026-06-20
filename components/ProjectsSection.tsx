'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/lib/data';
import { Github, ExternalLink, X, Code2, ArrowUpRight } from 'lucide-react';

const gradients = [
    { from: '#3b82f6', to: '#7c3aed' },
    { from: '#10b981', to: '#059669' },
    { from: '#f97316', to: '#dc2626' },
    { from: '#ec4899', to: '#be123c' },
    { from: '#00f3ff', to: '#bc13fe' },
    { from: '#8b5cf6', to: '#3b82f6' },
];

export default function ProjectsSection() {
    const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const openModal = (p: (typeof projects)[0], i: number) => {
        setSelected(p);
        setSelectedIdx(i);
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        setSelected(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="projects" ref={ref} className="relative py-32" aria-label="Projects">
            {/* Ambient */}
            <div
                className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] opacity-5"
                style={{ background: 'radial-gradient(ellipse, #00f3ff 0%, transparent 70%)', filter: 'blur(80px)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Chapter label */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase">03 — Projects</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        Built <span className="gradient-text">with intent</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl">
                        A selection of projects that pushed me forward — technically and creatively.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => {
                        const grad = gradients[i];
                        return (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8 }}
                                onClick={() => openModal(project, i)}
                                className="group relative rounded-3xl overflow-hidden cursor-pointer glass-dark hover:border-white/20 transition-all duration-300"
                                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                {/* Image / Gradient header */}
                                <div
                                    className="relative h-52 overflow-hidden"
                                    style={{ background: project.image ? '#000' : `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
                                >
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-end p-6">
                                            <span className="text-8xl font-black text-white/10 leading-none">
                                                {project.title.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    {/* View arrow */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </motion.div>
                                    {project.featured && (
                                        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-black/50 text-white/80 backdrop-blur-sm">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    {/* Tech pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/50"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/30">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: `linear-gradient(90deg, ${grad.from}, ${grad.to})` }}
                                />
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 30 }}
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111] border border-white/10 shadow-2xl"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors z-10"
                                aria-label="Close"
                            >
                                <X size={16} className="text-white/80" />
                            </button>

                            {/* Header */}
                            <div
                                className="relative h-64 overflow-hidden rounded-t-3xl"
                                style={{
                                    background: selected.image
                                        ? '#000'
                                        : `linear-gradient(135deg, ${gradients[selectedIdx].from}, ${gradients[selectedIdx].to})`,
                                }}
                            >
                                {selected.image ? (
                                    <Image
                                        src={selected.image}
                                        alt={selected.title}
                                        fill
                                        className="object-cover"
                                        sizes="500px"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-9xl font-black text-white/10">{selected.title.charAt(0)}</span>
                                    </div>
                                )}
                            </div>

                            {/* Body */}
                            <div className="p-7">
                                <h3 className="text-white text-2xl font-bold mb-3">{selected.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-6">{selected.longDescription}</p>

                                <div className="mb-6">
                                    <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selected.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1.5 text-xs rounded-lg text-white/70"
                                                style={{
                                                    background: `${gradients[selectedIdx].from}18`,
                                                    border: `1px solid ${gradients[selectedIdx].from}30`,
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    {selected.github ? (
                                        <a
                                            href={selected.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white/8 text-white hover:bg-white/15 border border-white/10 transition-colors"
                                        >
                                            <Code2 size={15} /> Code
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm bg-white/5 text-white/30 border border-white/5 cursor-not-allowed">
                                            <Code2 size={15} /> Private
                                        </span>
                                    )}
                                    {selected.live ? (
                                        <a
                                            href={selected.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                                            style={{ background: `linear-gradient(135deg, ${gradients[selectedIdx].from}, ${gradients[selectedIdx].to})` }}
                                        >
                                            <ExternalLink size={15} /> Live Demo
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm bg-white/5 text-white/30 border border-white/5 cursor-not-allowed">
                                            <ExternalLink size={15} /> No Demo
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
