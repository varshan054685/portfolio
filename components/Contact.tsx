'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalData.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalData.github,
      color: 'hover:text-purple-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalData.linkedin,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section
      id="contact"
      className={`relative py-24 md:py-32 ${isDark ? 'bg-dark-100' : 'bg-gray-50'}`}
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-400 mb-4">
            Get in Touch
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
            <p className={`mb-8 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 p-4 rounded-xl ${isDark ? 'glass-dark' : 'glass bg-white/50'} group cursor-pointer`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{item.label}</p>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 ml-auto transition-colors ${isDark ? 'text-white/30' : 'text-gray-400'} group-hover:text-cyan-400`} />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 rounded-xl ${isDark ? 'glass-dark' : 'glass bg-white/50'} group ${link.color} transition-colors`}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={`p-8 rounded-2xl ${isDark ? 'glass-dark' : 'glass bg-white/50'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Message Sent!
                  </h4>
                  <p className={isDark ? 'text-white/60' : 'text-gray-600'}>Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        isDark
                          ? 'border-white/10 text-white placeholder-white/30'
                          : 'border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        isDark
                          ? 'border-white/10 text-white placeholder-white/30'
                          : 'border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none ${
                        isDark
                          ? 'border-white/10 text-white placeholder-white/30'
                          : 'border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
      </div>
    </section>
  );
}
