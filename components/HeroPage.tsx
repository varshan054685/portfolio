'use client';

import { useRef, useEffect, useState } from 'react';
import {
    motion,
    useTransform,
    MotionValue,
    Variants,
} from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { personalData } from '@/lib/data';
import dynamic from 'next/dynamic';

const LineWaves = dynamic(() => import('./LineWaves'), { ssr: false });

interface HeroPageProps {
    scrollY: MotionValue<number>;
}

// Parent stagger container — children animate in sequence
const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.5,
        },
    },
};

// Each child slides up and fades in
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

// Name gets a slightly bigger entrance
const nameVariants: Variants = {
    hidden: { opacity: 0, y: 48 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function HeroPage({ scrollY }: HeroPageProps) {
    const ref = useRef<HTMLElement>(null);
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = personalData.title;

    // Scroll-driven exit
    const opacity = useTransform(scrollY, [0, 380], [1, 0]);
    const y = useTransform(scrollY, [0, 380], [0, -70]);
    const scale = useTransform(scrollY, [0, 380], [1, 0.95]);

    // Typewriter — kicks off after stagger settles (~1s in)
    useEffect(() => {
        let index = 0;
        const start = setTimeout(() => {
            const iv = setInterval(() => {
                if (index <= fullText.length) {
                    setDisplayText(fullText.slice(0, index));
                    index++;
                } else {
                    clearInterval(iv);
                }
            }, 60);
            return () => clearInterval(iv);
        }, 1300); // wait for name + badge to finish animating in
        return () => clearTimeout(start);
    }, [fullText]);

    // Cursor blink
    useEffect(() => {
        const iv = setInterval(() => setShowCursor((p) => !p), 530);
        return () => clearInterval(iv);
    }, []);

    const socials = [
        { icon: Github, href: personalData.github, label: 'GitHub' },
        { icon: Linkedin, href: personalData.linkedin, label: 'LinkedIn' },
        { icon: Instagram, href: personalData.instagram, label: 'Instagram' },
        { icon: TbBrandWhatsapp, href: personalData.whatsapp, label: 'WhatsApp' },
        { icon: Mail, href: `mailto:${personalData.email}`, label: 'Email' },
    ];

    return (
        <section
            id="home"
            ref={ref}
            className="relative h-screen flex items-center justify-center overflow-hidden"
            aria-label="Hero"
        >
            {/* WebGL background */}
            <div className="absolute inset-0 z-0 bg-black">
                <LineWaves
                    speed={0.3}
                    innerLineCount={32}
                    outerLineCount={36}
                    warpIntensity={1}
                    rotation={-45}
                    edgeFadeWidth={0}
                    colorCycleSpeed={1}
                    brightness={0.2}
                    color1="#ffffff"
                    color2="#ffffff"
                    color3="#ffffff"
                    enableMouseInteraction
                    mouseInfluence={2}
                />
            </div>

            {/* Vignette */}
            <div
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)',
                }}
            />

            {/* Bottom fade into journey page */}
            <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-[2]"
                style={{ background: 'linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)' }}
            />

            {/* ── Scroll-driven wrapper ── */}
            <motion.div
                className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                style={{ opacity, y, scale }}
            >
                {/* ── Stagger container ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={nameVariants}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-5 leading-none"
                    >
                        <span className="gradient-text">{personalData.name.split(' ')[0]}</span>
                        <span className="text-white"> {personalData.name.split(' ')[1]}</span>
                    </motion.h1>

                    {/* Typewriter row */}
                    <motion.div variants={itemVariants} className="mb-6 h-10 sm:h-12">
                        <p className="text-xl sm:text-2xl md:text-3xl font-light font-mono text-white">
                            {displayText}
                            <span
                                className={`inline-block w-0.5 h-6 sm:h-8 ml-1 bg-cyan-400 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        </p>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-white/75 leading-relaxed"
                    >
                        {personalData.tagline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.button
                            onClick={() =>
                                document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="btn-primary flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Journey
                            <ArrowDown size={18} />
                        </motion.button>
                        <motion.a
                            href={personalData.resumeLink}
                            download
                            className="btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-5"
                    >
                        {socials.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass text-white/60 hover:text-cyan-400 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator — appears after stagger completes */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
                    Scroll
                </span>
                <motion.div
                    className="w-px h-12 bg-gradient-to-b from-cyan-400/60 to-transparent"
                    animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
}
