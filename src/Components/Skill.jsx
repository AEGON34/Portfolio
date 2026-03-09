import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaPalette } from 'react-icons/fa';
import '../styles/Skill.css';

function Skill() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: FaPalette,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      category: 'Backend',
      icon: FaNode,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'NextAuth.js', level: 80 },
        { name: 'REST APIs', level: 80 },
      ]
    },
    {
      category: 'Database',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'Firebase', level: 75 },
      ]
    },
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <section id="skills" className="py-12 px-4 sm:py-16 md:py-20 lg:py-24 relative z-10 overflow-hidden">
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
              Technologies & Tools
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Expertise & Skills
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies, frameworks, and tools I've mastered 
            to build modern, scalable web applications and developer-focused solutions.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                className="group"
              >
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80 hover:shadow-[0_8px_32px_rgba(34,211,238,0.15)]">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition-colors">
                      <CategoryIcon className="text-cyan-400 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills in Category */}
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.15 + idx * 0.08 }}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-end">
                            <p className="text-sm font-semibold text-slate-200">
                              {skill.name}
                            </p>
                            <span className="text-xs font-bold text-cyan-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: catIndex * 0.15 + idx * 0.08 }}
                              viewport={{ once: false, amount: 0.2 }}
                              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All Skills Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-8 backdrop-blur-xl"
        >
          <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
            All Skills
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full text-sm font-medium text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 hover:border-cyan-400/60 hover:bg-cyan-400/20 transition-all duration-300 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

       
      </div>
    </section>
  );
}

export default Skill;
