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
      {/* Background ambient blobs */}
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>
      <div className="ambient-blob-3"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#00c8ff]/50"></div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#00c8ff] font-dm-sans font-medium">
              Technical Expertise
            </span>
            <div className="h-[1px] w-8 bg-[#00c8ff]/50"></div>
          </div>
          <h2 className="text-[36px] font-extrabold font-syne text-slate-100">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] to-[#0066ff]">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            // Delay staggered animation: 0.05s, 0.12s, 0.19s
            const cardDelay = 0.05 + catIndex * 0.07;
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: cardDelay }}
                viewport={{ once: false, amount: 0.2 }}
                className="glass-card flex flex-col p-6 sm:p-8"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="card-icon-box">
                      <CategoryIcon className="text-[#00c8ff] text-lg" />
                    </div>
                    <h3 className="text-[18px] font-bold font-syne text-slate-100">
                      {category.category}
                    </h3>
                  </div>
                  <span className="card-badge">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills in Category */}
                <div className="space-y-5 flex-grow">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <p className="text-[13px] font-dm-sans text-[rgba(232,244,255,0.85)]">
                          {skill.name}
                        </p>
                        <span className="text-[12px] font-semibold text-[#00c8ff]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="progress-track">
                        <motion.div
                          className="progress-fill"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: cardDelay + 0.25 }}
                          viewport={{ once: false, amount: 0.2 }}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
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
          className="glass-card p-8"
        >
          <h3 className="text-[13px] font-syne font-semibold text-slate-100 mb-6 flex items-center">
            <span className="glowing-dot" />
            All Skills
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: false, amount: 0.2 }}
                className="skill-panel-tag"
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
