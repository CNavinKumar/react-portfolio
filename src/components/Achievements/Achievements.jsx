import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-premium">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones and recognition of my software engineering capabilities</p>
        </div>

        <div className="achievements-container">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="timeline-dot">
                <FaTrophy className="trophy-icon-glow" />
              </div>
              
              <div className="achievement-card glass-card">
                <div className="achievement-badge-top">3rd Prize</div>
                <h3 className="achievement-title">Hackathon Winner</h3>
                <p className="achievement-desc">
                  Won 3rd Prize in a hackathon conducted at Kongu Engineering College. 
                  Designed and built a functional prototype to address real-world problems and pitched it successfully to a panel of expert judges.
                </p>
                
                <div className="achievement-meta">
                  <span className="achievement-date">
                    <FaCalendarAlt /> 2025
                  </span>
                  <span className="achievement-location">
                    <FaMapMarkerAlt /> Kongu Engineering College
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
