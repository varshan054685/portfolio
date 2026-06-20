'use client';

import { useState } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Download, ArrowUpRight, Instagram } from 'lucide-react';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { personalData } from '@/lib/data';

interface ContactPageProps {
    scrollProgress: MotionValue<number>;
}

const links = [
    {
        icon: Mail,
        label: 'Email',
        value: personalData.email,
        href: `mailto:${personalData.email}`,
        color: '#00f3ff',
        description: 'Drop me a line',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'varshan054685',
        href: personalData.github,
        color: '#ffffff',
        description: 'See my code',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'varshan-k-v005',
        href: personalData.linkedin,
        color: '#0077b5',
        description: 'Connect professionally',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        value: 'im_luffy_56',
        href: personalData.instagram,
        color: '#e1306c',
        description: 'Follow along',
    },
    {
        icon: TbBrandWhatsapp,
        label: 'WhatsApp',
        value: personalData.phone,
        href: personalData.whatsapp,
        color: '#25d366',
        description: 'Chat directly',
    },
];

export default function ContactPage({ scrollProgress }: ContactPageProps) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok || !data.success) throw new Error(data.error || 'Failed to send');
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden"
            aria-label="Contact"
        >
            {/* Atmospheric background — distinct from journey page */}
            <div className="absolute inset-0 bg-[#060606]" />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0,243,255,0.04) 0%, transparent 100%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(188,19,254,0.04) 0%, transparent 100%)
          `,
                }}
            />
            {/* Cinematic horizontal lines */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute left-0 right-0 h-px pointer-events-none"
                    style={{
                        top: `${15 + i * 14}%`,
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.02) 70%, transparent 100%)',
                    }}
                />
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Chapter label */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase">06 — Contact</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
                </motion.div>

                {/* Giant header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-20"
                >
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6">
                        Let&apos;s build<br />
                        <span className="gradient-text">something great.</span>
                    </h2>
                    <p className="text-white/40 text-xl max-w-xl leading-relaxed">
                        Whether it&apos;s a new project, a collaboration, or just saying hi — my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left — links + socials */}
                    <div className="space-y-4">
                        {links.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.label !== 'Email' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ x: 8 }}
                                className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 cursor-pointer"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = `${link.color}30`;
                                    (e.currentTarget as HTMLElement).style.background = `${link.color}06`;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{ background: `${link.color}12`, border: `1px solid ${link.color}25` }}
                                >
                                    <link.icon className="w-5 h-5" style={{ color: link.color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white/30 text-xs mb-0.5">{link.description}</p>
                                    <p className="text-white font-medium text-sm truncate">{link.value}</p>
                                </div>
                                <ArrowUpRight
                                    className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0"
                                />
                            </motion.a>
                        ))}

                        {/* Resume download */}
                        <motion.a
                            href={personalData.resumeLink}
                            download
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: links.length * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-3 w-full p-4 mt-2 rounded-2xl font-semibold text-white transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(0,243,255,0.12) 0%, rgba(188,19,254,0.12) 100%)',
                                border: '1px solid rgba(0,243,255,0.2)',
                            }}
                        >
                            <Download className="w-5 h-5 text-cyan-400" />
                            Download Resume
                        </motion.a>
                    </div>

                    {/* Right — contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div
                            className="p-8 rounded-3xl"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            <h3 className="text-white text-2xl font-bold mb-8">Send a message</h3>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                                >
                                    {error}
                                </motion.div>
                            )}

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16"
                                >
                                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                        <Send className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-white text-xl font-bold mb-2">Sent!</h4>
                                    <p className="text-white/50">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {[
                                        { label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' },
                                        { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                                    ].map(({ label, key, type, placeholder }) => (
                                        <div key={key}>
                                            <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-widest">
                                                {label}
                                            </label>
                                            <input
                                                type={type}
                                                required
                                                value={formData[key as keyof typeof formData]}
                                                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                                                placeholder={placeholder}
                                                className="w-full px-4 py-3 rounded-xl border bg-transparent text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all text-sm"
                                                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                                                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,243,255,0.4)')}
                                                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-widest">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell me about your project or idea..."
                                            className="w-full px-4 py-3 rounded-xl border bg-transparent text-white placeholder-white/20 focus:outline-none transition-all resize-none text-sm"
                                            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                                            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,243,255,0.4)')}
                                            onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                                        style={{
                                            background: 'linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)',
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Footer line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/20 text-xs"
                >
                    <span>© {new Date().getFullYear()} {personalData.name}. Crafted with precision.</span>
                    <span className="font-mono">Full Stack Developer · Coimbatore, India</span>
                </motion.div>
            </div>
        </section>
    );
}
