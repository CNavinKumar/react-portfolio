import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaJava, FaBrain } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPython } from 'react-icons/si';
import './Projects.css';

const getTechIcon = (techName) => {
  switch (techName.toLowerCase()) {
    case 'java': return <FaJava />;
    case 'spring boot': return <SiSpringboot />;
    case 'mysql': return <SiMysql />;
    case 'python': return <SiPython />;
    case 'yolov8': return <FaBrain />;
    default: return null;
  }
};

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Personal Finance Tracker',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      features: [
        'User registration and login',
        'Income and expense management',
        'Transaction history',
        'Monthly summaries'
      ],
      github: 'https://github.com'
    },
    {
      id: 2,
      title: 'Hotel Room Booking System',
      technologies: ['Java', 'MySQL'],
      features: [
        'User authentication',
        'Room booking',
        'Booking management',
        'Cancellation system'
      ],
      github: 'https://github.com'
    
    },
    {
      id: 4,
      title: 'Plastic Waste Detection System',
      technologies: ['Python', 'YOLOv8'],
      features: [
        'Object detection',
        'Plastic type classification',
        'Image processing'
      ],
      github: 'https://github.com'
  
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-premium">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of systems and applications I've developed</p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card glass-card"
              variants={cardVariants}
            >
              <div className="project-content-wrap">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <div className="project-body">
                  <ul className="project-features">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="project-details-footer">
                <div className="project-tech-badges">
                  {project.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="badge skill-badge-with-icon">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
