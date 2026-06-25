import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <motion.div
          className="loader-spinner"
          animate={{
            rotate: 360,
            borderRadius: ["20%", "50%", "50%", "20%"],
            scale: [1, 1.2, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="loader-text"
        >
          Navin's<span className="dot">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="loader-subtitle"
        >
          Portfolio Loading
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
