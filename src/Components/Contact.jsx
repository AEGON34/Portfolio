import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const socials = [
    { href: 'https://github.com/AEGON34', icon: FaGithub, label: 'GitHub', sub: 'github.com/AEGON34' },
    { href: 'https://www.linkedin.com/in/md-rejwan-/', icon: FaLinkedin, label: 'LinkedIn', sub: 'md-rejwan' },
    { href: 'https://www.instagram.com/mdrejwan34/', icon: FaInstagram, label: 'Instagram', sub: '@mdrejwan34' },
    { href: 'https://www.facebook.com/md.rejwan.353803', icon: FaFacebook, label: 'Facebook', sub: 'md.rejwan' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' } }),
  };

  return (
    <section className="ct-section" id="contact">
      <div className="ct-container">

        {/* ── Header ── */}
        <motion.div
          className="ct-header"
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="ct-badge">Contact</span>
          <h2 className="ct-title">Let&apos;s Work Together</h2>
          <p className="ct-sub">
            Have a project in mind or want to collaborate? Drop me a message — I typically respond within 24 hours.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="ct-grid">

          {/* LEFT — Info */}
          <motion.div
            className="ct-info-panel"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp} custom={0.1}
          >
            <div className="ct-availability">
              <span className="ct-avail-dot" />
              Available for new projects
            </div>

            <h3 className="ct-info-heading">Get in Touch</h3>
            <p className="ct-info-desc">
              I&apos;m open to freelance opportunities, full-time roles, and interesting collaborations.
              Whether you have a question or just want to say hi — my inbox is always open.
            </p>

            {/* Contact details */}
            <div className="ct-details">
              <a href="mailto:rejwan7010@gmail.com" className="ct-detail-row">
                <div className="ct-detail-icon"><FaEnvelope /></div>
                <div>
                  <p className="ct-detail-label">Email</p>
                  <p className="ct-detail-value">rejwan7010@gmail.com</p>
                </div>
              </a>
              <div className="ct-detail-row">
                <div className="ct-detail-icon"><FaMapMarkerAlt /></div>
                <div>
                  <p className="ct-detail-label">Location</p>
                  <p className="ct-detail-value">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="ct-socials">
              <p className="ct-socials-label">Find me on</p>
              <div className="ct-socials-row">
                {socials.map(({ href, icon: Icon, label, sub }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="ct-social-card">
                    <div className="ct-social-icon"><Icon /></div>
                    <div>
                      <p className="ct-social-name">{label}</p>
                      <p className="ct-social-sub">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            className="ct-form-panel"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp} custom={0.25}
          >
            <form className="ct-form" onSubmit={handleSubmit} noValidate>

              <div className="ct-form-row">
                {/* Name */}
                <div className={`ct-field ${focused === 'name' ? 'ct-field--focus' : ''} ${formData.name ? 'ct-field--filled' : ''}`}>
                  <label className="ct-field-label" htmlFor="name">Full Name</label>
                  <input
                    id="name" name="name" type="text"
                    value={formData.name} onChange={handleChange}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                    placeholder="John Doe" required className="ct-field-input"
                  />
                </div>
                {/* Email */}
                <div className={`ct-field ${focused === 'email' ? 'ct-field--focus' : ''} ${formData.email ? 'ct-field--filled' : ''}`}>
                  <label className="ct-field-label" htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                    placeholder="john@example.com" required className="ct-field-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div className={`ct-field ${focused === 'message' ? 'ct-field--focus' : ''} ${formData.message ? 'ct-field--filled' : ''}`}>
                <label className="ct-field-label" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows="6"
                  value={formData.message} onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  placeholder="Tell me about your project or idea..." required className="ct-field-input ct-field-textarea"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="ct-submit" disabled={loading}>
                {loading ? (
                  <><span className="ct-spinner" /> Sending…</>
                ) : (
                  <><FaPaperPlane className="ct-submit-icon" /> Send Message</>
                )}
              </button>

              {submitted && (
                <motion.div
                  className="ct-success"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle /> Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

