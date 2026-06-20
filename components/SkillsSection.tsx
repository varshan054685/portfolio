'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skills } from '@/lib/data';

// Marquee row — infinite horizontal scroll
function MarqueeRow({
    items,
    direction = 1,
    speed = 30,
}: {
    items: { name: string; icon: string; color: string }[];
    direction?: 1 | -1;
    speed?: number;
}) {
    // Triplicate so the loop is seamless regardless of screen width
    const tripled = [...items, ...items, ...items];
    // Start the reverse-direction rows at the middle copy so items are always visible
    const startX = direction === 1 ? '0%' : '-33.33%';
    const endX = direction === 1 ? '-33.33%' : '0%';

    return (
        <div className="relative overflow-hidden py-2" aria-hidden>
            <motion.div
                className="flex gap-4 w-max"
                initial={{ x: startX }}
                animate={{ x: endX }}
                transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
            >
                {tripled.map((skill, i) => (
                    <div
                        key={`${skill.name}-${i}`}
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-dark group hover:border-white/20 transition-all cursor-default flex-shrink-0"
                        style={{ borderColor: `${skill.color}20` }}
                    >
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center p-1.5 transition-transform group-hover:scale-110"
                            style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-5 h-5 object-contain"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
                            {skill.name}
                        </span>
                        <span
                            className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: skill.color }}
                        />
                    </div>
                ))}
            </motion.div>
            {/* Wider edge fades so nothing clips on any screen width */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        </div>
    );
}

const SPEEDS = [28, 22, 34, 26, 20];

export default function SkillsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section id="skills" ref={ref} className="relative py-32 overflow-hidden" aria-label="Skills">
            {/* Ambient */}
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-5"
                style={{ background: 'radial-gradient(ellipse, #bc13fe 0%, transparent 70%)', filter: 'blur(80px)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase">02 — Skills</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-400/40 to-transparent" />
                </motion.div>

                <motion.div style={{ y: headerY, opacity: headerOpacity }}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        The <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl">
                        Technologies I use to bring ideas from concept to production.
                    </p>
                </motion.div>
            </div>

            {/* Marquee rows — one per category */}
            <div className="space-y-4">
                {skills.categories.map((cat, i) => (
                    <div key={cat.title}>
                        {/* Category label */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-xs font-mono text-white/20 tracking-widest uppercase"
                            >
                                {cat.title}
                            </motion.span>
                        </div>
                        <MarqueeRow
                            items={cat.skills}
                            direction={i % 2 === 0 ? 1 : -1}
                            speed={SPEEDS[i] ?? 30}
                        />
                    </div>
                ))}
            </div>

            {/* Approach row */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {skills.workApproach.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-2xl glass-dark group cursor-default"
                        >
                            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                                <span className="text-purple-400 font-mono text-xs">0{i + 1}</span>
                            </div>
                            <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
