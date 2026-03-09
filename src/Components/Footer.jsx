import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

const socialLinks = [
  { href: 'https://github.com/AEGON34', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/md-rejwan-/', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://www.instagram.com/mdrejwan34/', label: 'Instagram', icon: FaInstagram },
  { href: 'https://www.facebook.com/md.rejwan.353803', label: 'Facebook', icon: FaFacebook },
  { href: 'mailto:rejwan7010@gmail.com', label: 'Email', icon: FaEnvelope },
];

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-14 text-slate-300"
    >
      <div className="w-full px-2 sm:px-3 md:px-4">
        <div className="rounded-2xl sm:rounded-[28px] border border-slate-800/80 bg-slate-900/65 px-4 py-8 sm:px-6 md:px-10 md:py-12 shadow-[0_24px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl">

          {/* Top: tagline + back to top */}
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Available for Work
              </span>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
                Let&apos;s build something sharp, modern, and useful.
              </h3>
              <p className="text-sm leading-6 text-slate-400 sm:text-base">
                I focus on clean developer portfolios and modern web interfaces with polished visuals, thoughtful interactions, and strong frontend structure.
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="mx-auto w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-3 text-xs sm:text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-800 lg:mx-0"
            >
              <FaArrowUp className="text-cyan-300" />
              Back to Top
            </button>
          </div>

          {/* Main grid: Send Message | Quick Links | Connect */}
          <div className="grid gap-10 border-t border-slate-800/80 pt-10 grid-cols-1 md:grid-cols-[1.6fr_0.7fr_1fr]">

            {/* Send Message form */}
            <div>
              <h4 className="mb-5 text-lg font-semibold text-slate-100">Send a Message</h4>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name" type="text" value={form.name} onChange={handleChange}
                    placeholder="Your name" required
                    className="rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20"
                  />
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com" required
                    className="rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20"
                  />
                </div>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or idea..." required rows="4"
                  className="rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 resize-none"
                />
                <button
                  type="submit" disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(56,189,248,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(56,189,248,0.35)] disabled:opacity-60"
                >
                  {loading ? (
                    <><span className="ct-spinner" /> Sending…</>
                  ) : (
                    <><FaPaperPlane className="text-xs" /> Send Message</>
                  )}
                </button>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-400"
                  >
                    <FaCheckCircle /> Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-slate-100">Quick Links</h4>
              <div className="flex flex-col gap-2.5 text-sm text-slate-400">
                {quickLinks.map((link) => (
                  <a key={link.label} href={link.href} className="transition-colors duration-300 hover:text-cyan-300">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-slate-100">Connect</h4>
              <div className="flex flex-col gap-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    whileHover={{ x: 4 }}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    <Icon className="text-base text-cyan-400" />
                    <span>{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col gap-3 border-t border-slate-800/80 pt-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
            <p>&copy; {new Date().getFullYear()} MD Rejwan. All rights reserved.</p>
            <p className="text-slate-600">Crafted with React, motion, and a clean dark aesthetic.</p>
          </div>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
