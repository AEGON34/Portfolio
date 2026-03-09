import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaGitAlt } from 'react-icons/fa';
import HeroIllustration from './HeroIllustration.jsx';
import '../styles/About.css';

function About() {
  const highlights = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code'
    },
    {
      icon: FaRocket,
      title: 'Fast Performance',
      description: 'Optimized applications that load quickly and run smoothly'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: FaGitAlt,
      title: 'Version Control',
      description: 'Proficient with Git and collaborative development workflows'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };


  return (
    <section id="about" className="relative z-10 overflow-hidden py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest text-cyan-300 border border-cyan-400/30 bg-cyan-400/10">
              Who Am I
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            About Me
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate mern-stack developer specializing in creating robust, 
            scalable web applications with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="about-gear-container relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              <HeroIllustration />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-100 mb-3">
                MERN Stack Developer
              </h3>
              <p className="text-cyan-300 font-semibold text-lg">
                Building Modern Web Solutions
              </p>
            </div>

            <div className="space-y-4 text-slate-300/90">
              <p className="leading-relaxed">
                I&apos;m a passionate mern-stack developer with expertise in modern web technologies. 
                I specialize in creating robust APIs, scalable backend solutions, and intuitive frontend experiences.
              </p>
              <p className="leading-relaxed">
                My focus is on writing clean, maintainable code and building applications that solve real-world problems. 
                I love collaborating with teams and continuously learning new technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors">React.js</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors">Node.js</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors">MongoDB</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors">Next.js</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors">Tailwind CSS</span>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full border border-slate-800/60 rounded-xl p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition-colors">
                      <Icon className="text-cyan-400 text-lg" />
                    </div>
                    <h4 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
