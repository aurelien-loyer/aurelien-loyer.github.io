// pages/Contact.js
import React, { useState, useRef } from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Nettoyer l'erreur lorsque l'utilisateur modifie le champ
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Votre nom est requis';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Votre e-mail est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Veuillez entrer une adresse e-mail valide';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Votre message est requis';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Votre message doit contenir au moins 10 caractères';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Simuler l'envoi du formulaire
      setTimeout(() => {
        setFormSubmitted(true);
        setSubmitting(false);
        
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="section">
      <div className="container">
        <SectionHeader subtitle="Me joindre" title="Contact" />
        
        <motion.div 
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-card-content">
                <h3>Localisation</h3>
                <p>Saint-Denis, La Réunion</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-card-content">
                <h3>Email</h3>
                <p>aurelien.loyer@epitech.eu</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-card-content">
                <h3>Téléphone</h3>
                <p>+262 6XX XXX XXX</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Retrouvez-moi sur</h3>
              <div className="social-links">
                <a href="https://github.com/aurelien-loyer" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/aurelien-loyer-epi/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="contact-form-container" variants={itemVariants}>
            {formSubmitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Message envoyé avec succès !</h3>
                <p>Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setFormSubmitted(false)}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <div className="input-wrapper">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className={formErrors.name ? 'error' : ''}
                    />
                  </div>
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Adresse e-mail</label>
                  <div className="input-wrapper">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre e-mail"
                      className={formErrors.email ? 'error' : ''}
                    />
                  </div>
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <div className="input-wrapper">
                    <i className="fas fa-bookmark"></i>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      className={formErrors.subject ? 'error' : ''}
                    />
                  </div>
                  {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <div className="textarea-wrapper">
                    <i className="fas fa-comment-alt"></i>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message"
                      rows="5"
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                  </div>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn" 
                  disabled={submitting}
                >
                  {submitting ? (
                    <span><i className="fas fa-spinner fa-spin"></i> Envoi en cours...</span>
                  ) : (
                    <span>Envoyer le message <i className="fas fa-paper-plane"></i></span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="map-container"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="map-placeholder">
            <img src="/api/placeholder/1200/400" alt="Map" />
            <div className="map-overlay">
              <p>Carte interactive de localisation</p>
              <p>(Simulation d'une carte Google Maps)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;