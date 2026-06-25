import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy } from 'react-icons/fa';
import './About.css';

const CountUp = ({ end, suffix = "", startTrigger = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let start = 0;
    const endValue = parseInt(end);
    if (endValue === 0) return;

    const duration = 1.5; // seconds
    const stepTime = Math.max(Math.floor((duration * 1000) / endValue), 30);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, startTrigger]);

  return <span>{startTrigger ? count : 0}{suffix}</span>;
};

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const stats = [
    { id: 1, label: 'Years of Learning', value: '4', suffix: '', icon: <FaGraduationCap /> },
    { id: 2, label: 'Projects Completed', value: '10', suffix: '+', icon: <FaCode /> },
    { id: 3, label: 'Hackathons Participated', value: '3', suffix: '', icon: <FaTrophy /> },
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-premium">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My journey and achievements in software engineering</p>
        </div>

        <div className="about-container">
          <motion.div
            className="about-bio glass-card"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3>Who I Am</h3>
            <p>
              I am a passionate software developer with experience in frontend and backend development. 
              I enjoy building full-stack applications and solving real-world problems using modern technologies. 
              I am interested in web development, backend development, and AI-based applications.
            </p>
            <p style={{ marginTop: '15px' }}>
              Driven by curiosity, I love writing clean code, designing robust APIs, and exploring machine learning algorithms. 
              My primary stack includes Python, Java, JavaScript, React, Spring Boot, and Flask.
            </p>
          </motion.div>

          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="stat-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h4 className="stat-number">
                  <CountUp end={stat.value} suffix={stat.suffix} startTrigger={inView} />
                </h4>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
