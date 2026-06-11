import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Writeflow AI',
      description: 'Writeflow AI is a modern, AI-powered web application designed to streamline content creation workflows. Built with cutting-edge web technologies, it provides a seamless and intuitive environment for users to generate, manage, and edit content using the power of Artificial Intelligence.',
      link: 'https://writeflow-ai-app.vercel.app/',
      category: 'AI Platform',
      impact: 'Streamlines content creation workflows with AI assistance.',
      year: '2026',
      role: 'Full Stack Development',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: 'https://i.ibb.co/gLnMm1N9/Workflow-ai.png'
    },
    {
      id: 2,
      title: 'UIU-ELF',
      description: 'The UIU English Language Forum (UIUELF) Website is a modern web platform created for the English Language Forum of United International University. The website provides information about the club, its activities, events, and updates for students.',
      link: 'https://uiuelf.vercel.app/',
      category: 'Club Platform',
      impact: 'Community-focused event and update experience for students.',
      year: '2026',
      role: 'Full Stack Development',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/elf.png'
    },
    {
      id: 3, 
      title: 'Food Nest',
      description: 'FoodNest is a full-stack web application designed for food enthusiasts who enjoy exploring restaurants, street foods, and homemade dishes. Users can register, post reviews, manage their favorites, and view reviews from others in an engaging and responsive UI.',
      link: 'https://luxury-flan-e90d84.netlify.app/',
      category: 'Review Platform',
      impact: 'Built to make discovery, reviews, and favorites feel seamless.',
      year: '2025',
      role: 'MERN App Design',
      tags: ['MERN', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Style Decor',
      description: 'StyleDecor is a service management platform for home and ceremony decoration businesses. Users can explore decoration services, book consultations or on-site services, make secure payments, and track real-time project status through a role-based dashboard system.',
      link: 'https://stupendous-axolotl-7347a9.netlify.app/',
      category: 'Service Platform',
      impact: 'Combines bookings, payments, and dashboards in one workflow.',
      year: '2025',
      role: 'Dashboard Experience',
      tags: ['React', 'Innovation', 'Apps'],
      image: 'https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      title: 'hero.io',
      description: 'At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.',
      link: 'https://heroi0.netlify.app/',
      category: 'Product Landing',
      impact: 'Concept-driven brand experience with a sharper marketing focus.',
      year: '2025',
      role: 'Product Showcase UI',
      tags: ['React', 'Innovation', 'Apps'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="projects-section overflow-hidden px-4 py-12 sm:py-16 md:py-20 text-slate-100">
      <div className="projects-ambient projects-ambient-left" aria-hidden="true" />
      <div className="projects-ambient projects-ambient-right" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <div className="space-y-5 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              <FaLayerGroup className="text-cyan-400" />
              Featured Work
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight text-slate-100 md:text-5xl text-center">
              Projects built with clean design and practical product thinking.
            </h2>

            <p className="max-w-3xl text-base leading-7 text-slate-400 md:text-lg text-center">
              A selection of modern builds focused on usability, performance, and polished presentation.
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className={`projects-card flex flex-col items-stretch gap-8 rounded-[2rem] p-5 md:p-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="projects-card-glow" aria-hidden="true" />

              {/* Image Section */}
              <div className="group relative w-full overflow-hidden rounded-[1.5rem] lg:w-[52%]">
                <div className="projects-image-shell aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="projects-image-overlay absolute inset-0" />

                  <div className="absolute left-4 top-4 flex items-center gap-3">
                    <span className="rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-md">
                      {`0${project.id}`}
                    </span>
                    <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <p className="max-w-sm text-sm leading-6 text-slate-200/90">
                      {project.impact}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-live-btn"
                    >
                      Live Preview
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex w-full flex-col justify-center space-y-6 text-center lg:w-[48%] lg:text-left">
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="projects-meta-pill">{project.year}</span>
                  <span className="projects-meta-pill">{project.role}</span>
                </div>

                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-base leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="projects-divider" />

                <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-link-primary"
                  >
                    Explore Project
                    <FaArrowRight />
                  </a>
                  <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                    Production-ready concept
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
