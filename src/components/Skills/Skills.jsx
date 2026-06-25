import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, FaHtml5, FaReact, FaServer, FaDatabase, FaTools, 
  FaJava, FaCss3Alt, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiPython, SiJavascript, SiVite, SiTailwindcss, SiFlask, 
  SiFastapi, SiExpress, SiSpringboot, SiMysql, SiMongodb, 
  SiPostman 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './Skills.css';

const getSkillIcon = (skillName) => {
  switch (skillName.toLowerCase()) {
    case 'python': return <SiPython />;
    case 'java': return <FaJava />;
    case 'javascript': return <SiJavascript />;
    case 'html5': return <FaHtml5 />;
    case 'css3': return <FaCss3Alt />;
    case 'react.js': return <FaReact />;
    case 'vite': return <SiVite />;
    case 'tailwind css': return <SiTailwindcss />;
    case 'flask': return <SiFlask />;
    case 'fastapi': return <SiFastapi />;
    case 'express.js': return <SiExpress />;
    case 'spring boot': return <SiSpringboot />;
    case 'mysql': return <SiMysql />;
    case 'mongodb': return <SiMongodb />;
    case 'git': return <FaGitAlt />;
    case 'github': return <FaGithub />;
    case 'vs code': return <VscCode />;
    case 'postman': return <SiPostman />;
    default: return null;
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaLaptopCode />,
      skills: ['Python', 'Java', 'JavaScript']
    },
    {
      title: 'Frontend Technologies',
      icon: <FaHtml5 />,
      skills: ['HTML5', 'CSS3']
    },
    {
      title: 'Frontend Frameworks & Libraries',
      icon: <FaReact />,
      skills: ['React.js', 'Vite', 'Tailwind CSS']
    },
    {
      title: 'Backend Frameworks',
      icon: <FaServer />,
      skills: ['Flask', 'FastAPI', 'Express.js', 'Spring Boot']
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-premium">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">My professional capabilities categorized by domains</p>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skills-card glass-card"
              variants={cardVariants}
            >
              <div className="skills-card-header">
                <span className="skills-category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-badges">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="badge skill-badge-with-icon">
                    {getSkillIcon(skill)}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
