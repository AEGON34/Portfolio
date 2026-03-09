import { motion } from 'framer-motion';
import ProfileOrbit from './ProfileOrbit.jsx';

function Hero() {
  const metrics = [
    { value: '12+', label: 'Core Skills' },
    { value: 'MERN', label: 'Stack Focus' },
    { value: '24/7', label: 'Learning Mode' },
  ];

  return (
    <main id="home" className="relative z-10 mt-12 sm:mt-14 md:mt-16 overflow-hidden px-3 sm:px-4 md:px-8">
      <div className="hero-ambient hero-ambient-left" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-right" aria-hidden="true" />

      <section className="hero-shell mx-auto flex max-w-6xl flex-col items-center justify-between gap-14 lg:flex-row lg:gap-20">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-7 text-center text-slate-50 md:text-left"
        >
          <div className="mt-16 flex items-center justify-center md:justify-start">
            <div className="hero-status-badge">
              <span className="hero-status-dot" />
              SYSTEM STATUS: ONLINE
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-400">
              Frontend Developer (MERN)
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="inline-block bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-200 bg-clip-text text-transparent animate-gradient-x">
                MD REJWAN
              </span>
            </h1>
            <h2 className="max-w-xl text-xl font-semibold leading-relaxed text-slate-100 sm:text-2xl lg:text-3xl">
              Building sleek, responsive web experiences.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base md:mx-0 mx-auto">
            I build modern apps with clean UI, smooth interactions, and reliable code.
          </p>

          <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:w-auto md:justify-start">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="hero-primary-cta"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="hero-secondary-cta"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/uc?export=download&id=17vGDc61n6jpIZjbb2kY4tVALEZHU_UCm"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary-cta"
            >
              Download Resume
            </motion.a>
            <span className="text-center text-xs font-medium uppercase tracking-[0.25em] text-emerald-300/80 sm:text-left">
              AVAILABLE NOW
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -4 }}
                className="hero-metric-card"
              >
                <div className="text-2xl font-bold text-cyan-300">{metric.value}</div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: software + robotics illustration */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-1 justify-center md:mt-0"
        >
          <ProfileOrbit />
        </motion.section>
      </section>
    </main>
  );
}

export default Hero;
