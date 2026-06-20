'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { education, experience } from '@/lib/data';
import { Trophy, Medal, Handshake, Globe, GraduationCap, School } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Trophy, Medal, Handshake, Globe, GraduationCap, School,
};

function TimelineItem({
    index,
    dot,
    year,
    title,
    sub,
    body,
    accent,
    isAward,
}: {
    index: number;
    dot: React.ReactNode;
    year?: string;
    title: string;
    sub: string;
    body: string;
    accent: string;
    isAward?: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-14"
        >
            {/* Dot */}
            <div className="absolute left-3.5 top-0 -translate-x-1/2">{dot}</div>

            <div className="p-5 rounded-2xl glass-dark hover:border-white/15 transition-all group">
                <div className="flex items-start justify-between mb-1.5 gap-2">
                    <h4 className="text-white font-semibold text-sm leading-snug group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h4>
                    {year && (
                        <span
                            className="px-2 py-0.5 text-xs rounded-full flex-shrink-0"
                            style={{ background: `${accent}20`, color: accent }}
                        >
                            {year}
                        </span>
                    )}
                </div>
                <p className="text-sm mb-1" style={{ color: accent }}>{sub}</p>
                <p className="text-white/40 text-xs leading-relaxed">{body}</p>
            </div>
        </motion.div>
    );
}

export default function EducationSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

    return (
        <section id="education" ref={ref} className="relative py-32" aria-label="Education & Achievements">
            {/* Ambient */}
            <div
                className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] opacity-5"
                style={{ background: 'radial-gradient(ellipse, #f7df1e 0%, transparent 70%)', filter: 'blur(80px)' }}
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
                    <span className="text-xs font-mono text-yellow-400 tracking-[0.3em] uppercase">04 — Journey</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/40 to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        Education &<br />
                        <span className="gradient-text">Milestones</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl">
                        The path so far — academic foundations and competitive achievements.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education timeline */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-mono text-white/30 tracking-widest uppercase mb-8"
                        >
                            Academic
                        </motion.p>
                        <div className="relative">
                            {/* Animated vertical line */}
                            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-white/5 overflow-hidden">
                                <motion.div
                                    className="w-full bg-gradient-to-b from-cyan-400 to-purple-500"
                                    style={{ height: lineHeight }}
                                />
                            </div>
                            <div className="space-y-6">
                                {education.map((item, i) => {
                                    const Icon = iconMap[item.icon] || GraduationCap;
                                    return (
                                        <TimelineItem
                                            key={item.id}
                                            index={i}
                                            dot={
                                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                                    <Icon className="w-3.5 h-3.5 text-white" />
                                                </div>
                                            }
                                            year={item.period}
                                            title={item.degree}
                                            sub={`${item.institution} · ${item.location}`}
                                            body={item.description}
                                            accent="#00f3ff"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Achievements timeline */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-mono text-white/30 tracking-widest uppercase mb-8"
                        >
                            Achievements
                        </motion.p>
                        <div className="relative">
                            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-white/5" />
                            <div className="space-y-6">
                                {experience.map((item, i) => {
                                    const Icon = iconMap[item.icon] || Trophy;
                                    const isAward = item.type === 'award';
                                    return (
                                        <TimelineItem
                                            key={item.id}
                                            index={i}
                                            dot={
                                                <div
                                                    className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg ${isAward
                                                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-yellow-500/20'
                                                            : 'bg-gradient-to-br from-cyan-400 to-purple-500 shadow-cyan-500/20'
                                                        }`}
                                                >
                                                    <Icon className="w-3.5 h-3.5 text-white" />
                                                </div>
                                            }
                                            year={item.year}
                                            title={item.title}
                                            sub={item.organization}
                                            body={item.description}
                                            accent={isAward ? '#f7df1e' : '#00f3ff'}
                                            isAward={isAward}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
