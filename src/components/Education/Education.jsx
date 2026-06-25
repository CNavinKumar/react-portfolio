import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-premium">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic foundations in computer science</p>
        </div>

        <div className="education-container">
          <div className="edu-timeline">
            <div className="edu-line"></div>
            
            <motion.div 
              className="edu-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="edu-dot">
                <FaGraduationCap />
              </div>
              
              <div className="edu-card glass-card">
                <div className="edu-duration">
                  <FaCalendarAlt /> 2023 - 2027
                </div>
                <h3 className="edu-degree">Bachelor of Technology in Information Technology</h3>
                
                <div className="edu-institution">
                  <FaUniversity /> Shree Venkateshwara Hi-Tech Engineering College
                </div>
                
                <p className="edu-details">
                  Acquiring deep expertise in fundamental concepts of it including Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), and Full Stack Software Architectures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
