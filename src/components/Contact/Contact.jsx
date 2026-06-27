import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Validate the form
  if (!validateForm()) return;

  // Show loading spinner
  setIsSubmitting(true);

  // Create WhatsApp message
  const text = `*New Portfolio Contact*

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}`;

  // Replace with your WhatsApp number
  const phoneNumber = "917708909685"; // <-- Change this to your number

  setTimeout(() => {
    // Stop spinner
    setIsSubmitting(false);

    // Open WhatsApp
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    // Show success popup
    setIsSuccess(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide popup after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);

  }, 1500);
};

  return (
    <section id="contact" className="contact-section">


      <div className="contact-container">
        {/* Info Column */}
        <motion.div
          className="contact-info glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>Contact Info</h3>
          <p className="contact-info-text">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="detail-icon"><FaEnvelope /></div>
              <div className="detail-content">
                <h4>Email</h4>
                <a href="mailto:navinkumarc@hotmail.com">navinkumarc@hotmail.com</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon"><FaGithub /></div>
              <div className="detail-content">
                <h4>GitHub</h4>
                <a href="https://github.com/cnavinkumar" target="_blank" rel="noopener noreferrer">github.com/cnavinkumar</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon"><FaLinkedin /></div>
              <div className="detail-content">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/navinkumarc/" target="_blank" rel="noopener noreferrer">linkedin.com/in/navinkumarc</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          className="contact-form-wrap glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>Send Message</h3>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                placeholder="Your Name"
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                placeholder="Your Email Address"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
                placeholder="Your Message..."
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="btn-spinner"></span>
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {isSuccess && (
              <motion.div
                className="success-popup"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle className="success-icon" />
                <div>
                  <h4>Thank You!</h4>
                  <p>Your message has been sent successfully. I'll get back to you shortly.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
