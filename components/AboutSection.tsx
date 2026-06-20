'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalData } from '@/lib/data';
import { Code2, Palette, Lightbulb, Heart } from 'lucide-react';

const highlights = [
    { icon: Code2, title: 'Clean Code', description: 'Maintainable, efficient, and well-documented code that scales.' },
    { icon: Palette, title: 'Modern Design', description: 'Beautiful, responsive interfaces built with user experience first.' },
    { icon: Lightbulb, title: 'Problem Solver', description: 'Finding creative solutions to complex engineering challenges.' },
    { icon: Heart, title: 'User Focused', description: 'Building with empathy — because software is ultimately for people.' },
];

const words = [
    "I'm a",
    'Full Stack Developer',
    'with a passion for',
    'front-end craftsmanship',
    'and human-centered design.',
    'I build things that',
    'feel great',
    'to use.',
];

export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="relative py-32 md:py-40" aria-label="About">
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10"
                style={{
                    background: 'radial-gradient(ellipse, #00f3ff 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Chapter label */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase">01 — About</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left — large word-by-word reveal */}
                    <div ref={ref}>
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-10">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                    className={`inline-block mr-3 mb-1 ${word === 'Full Stack Developer' || word === 'feel great'
                                            ? 'gradient-text'
                                            : word === 'human-centered design.' || word === 'front-end craftsmanship'
                                                ? 'text-purple-400'
                                                : 'text-white'
                                        }`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>

                        {/* Bio lines */}
                        {[
                            'I believe in creating simple, human-centered designs that solve real problems and make a positive impact.',
                            "When I'm not coding, I'm competing in hackathons, exploring new tech, or collaborating with like-minded developers.",
                        ].map((line, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                                className="text-white/50 text-lg leading-relaxed mb-4"
                            >
                                {line}
                            </motion.p>
                        ))}

                        {/* Quick stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex gap-8 mt-10"
                        >
                            {[
                                { value: '6+', label: 'Projects Built' },
                                { value: '2', label: 'Hackathons Won' },
                                { value: '10+', label: 'Technologies' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="text-3xl font-bold gradient-text">{s.value}</div>
                                    <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — avatar + highlights */}
                    <div className="space-y-5">
                        {/* Avatar card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative p-8 rounded-3xl glass-dark flex items-center gap-6 overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at 0% 50%, #00f3ff 0%, transparent 60%)' }}
                            />
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-0.5 flex-shrink-0">
                                <div className="w-full h-full rounded-2xl bg-dark-300 flex items-center justify-center">
                                    <span className="text-2xl font-bold gradient-text">VK</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl">{personalData.name}</h3>
                                <p className="text-cyan-400 text-sm">{personalData.title}</p>
                                <p className="text-white/40 text-xs mt-1">{personalData.location}</p>
                            </div>
                        </motion.div>

                        {/* Highlight cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="p-5 rounded-2xl glass-dark group hover:border-cyan-400/30 transition-all cursor-default"
                                >
                                    <item.icon className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                                    <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
