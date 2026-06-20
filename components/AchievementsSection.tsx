'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Star, Zap, Code2 } from 'lucide-react';
import { experience } from '@/lib/data';

// Animated counter hook
function useCounter(target: number, duration: number = 1500) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const iv = setInterval(() => {
            start = Math.min(start + step, target);
            setValue(start);
            if (start >= target) clearInterval(iv);
        }, 16);
        return () => clearInterval(iv);
    }, [isInView, target, duration]);

    return { value, ref };
}

const stats = [
    { icon: Code2, label: 'Projects Built', value: 6, suffix: '+', color: '#00f3ff' },
    { icon: Trophy, label: 'Hackathons Won', value: 1, suffix: 'st', color: '#f7df1e' },
    { icon: Zap, label: 'Technologies', value: 10, suffix: '+', color: '#bc13fe' },
    { icon: Star, label: 'Competitions', value: 4, suffix: '', color: '#ff00ff' },
];

function StatCard({ icon: Icon, label, value, suffix, color }: (typeof stats)[0]) {
    const { value: animated, ref } = useCounter(value, 1200);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="relative p-7 rounded-3xl glass-dark overflow-hidden group cursor-default"
            style={{ border: `1px solid ${color}15` }}
        >
            {/* Glow bg */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 100%, ${color}12 0%, transparent 70%)` }}
            />
            <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
            >
                <Icon className="w-6 h-6" style={{ color }} />
            </div>
            <div
                className="text-5xl font-black mb-1 tabular-nums"
                style={{ color }}
            >
                {animated}
                <span className="text-2xl">{suffix}</span>
            </div>
            <p className="text-white/40 text-sm">{label}</p>
        </motion.div>
    );
}

export default function AchievementsSection() {
    const awards = experience.filter((e) => e.type === 'award');

    return (
        <section id="achievements" className="relative py-20 pb-40" aria-label="Achievements">
            {/* Ambient */}
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-8"
                style={{ background: 'radial-gradient(ellipse, #bc13fe 0%, transparent 70%)', filter: 'blur(100px)' }}
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
                    <span className="text-xs font-mono text-yellow-400 tracking-[0.3em] uppercase">05 — Highlights</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/40 to-transparent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        By the <span className="gradient-text">numbers</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl">
                        A snapshot of the work and impact built over time.
                    </p>
                </motion.div>

                {/* Stat counters */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {stats.map((s) => (
                        <StatCard key={s.label} {...s} />
                    ))}
                </div>

                {/* Award highlight cards */}
                <div className="grid sm:grid-cols-2 gap-5">
                    {awards.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.15 }}
                            className="relative p-7 rounded-3xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(247,223,30,0.06) 0%, rgba(188,19,254,0.04) 100%)',
                                border: '1px solid rgba(247,223,30,0.15)',
                            }}
                        >
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at 0% 0%, rgba(247,223,30,0.08) 0%, transparent 60%)' }}
                            />
                            <div className="flex items-start gap-4 relative">
                                <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                                    <Trophy className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-yellow-400 tracking-widest uppercase mb-2 block">
                                        {item.year} · {item.organization}
                                    </span>
                                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Transition hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex flex-col items-center gap-2 text-white/20"
                    >
                        <span className="text-xs font-mono tracking-widest uppercase">Let&apos;s connect</span>
                        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
