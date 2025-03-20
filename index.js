// App.js - Point d'entrée principal
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    // Simule le chargement initial
    setTimeout(() => setLoading(false), 1500);
    
    // Applique le thème
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'sticky' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">AL<span className="dot">.</span></Link>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Changer de thème">
              <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
            <a href="/files/cv_loyeraurelien.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file-alt"></i> Mon CV
            </a>
          </div>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

// components/Loader.js
import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">AL<span className="dot">.</span></Link>
            <p>Développeur passionné</p>
          </div>
          
          <div className="footer-links">
            <h3>Liens rapides</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/skills">Compétences</Link></li>
              <li><Link to="/projects">Projets</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Me suivre</h3>
            <div className="social-icons">
              <a href="https://github.com/aurelien-loyer" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/aurelien-loyer-epi/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:aurelien.loyer@epitech.eu">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aurélien Loyer. Tous droits réservés.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};


// components/TypedText.js
import React, { useState, useEffect } from 'react';
import '../styles/TypedText.css';

const TypedText = ({ strings, typingSpeed = 100, erasingSpeed = 50, delayBetween = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, typingDelay);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingDelay]);

  const tick = () => {
    let i = loopNum % strings.length;
    let fullText = strings[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingDelay(erasingSpeed);
    } else {
      setTypingDelay(typingSpeed);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingDelay(delayBetween);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingDelay(500);
    }
  };

  return (
    <div className="typed-wrapper">
      <span className="typed-text">{text}</span>
      <span className="cursor">&nbsp;</span>
    </div>
  );
};


// components/SectionHeader.js
import React from 'react';
import '../styles/SectionHeader.css';

const SectionHeader2 = ({ subtitle, title }) => {
  return (
    <div className="section-header">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import TypedText from '../components/TypedText';
import '../styles/Home.css';

const Home = () => {
  const typedStrings = [
    "Étudiant à Epitech Réunion",
    "Développeur C/Python",
    "Passionné d'informatique"
  ];

  const handleScroll = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/about';
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-subtitle">Bonjour, je suis</div>
          <h1 className="hero-title">Aurélien <span>Loyer</span></h1>
          <div className="hero-text">
            <TypedText strings={typedStrings} />
          </div>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">Voir mes projets</Link>
            <Link to="/contact" className="btn btn-secondary">Me contacter</Link>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/aurelien-loyer" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aurelien-loyer-epi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:aurelien.loyer@epitech.eu" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <button onClick={handleScroll}>
            <div className="mouse">
              <span></span>
            </div>
            <p>Défiler</p>
          </button>
        </div>
      </div>
    </section>
  );
};

// pages/About.js
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about-section" className="section">
      <div className="container">
        <SectionHeader subtitle="Découvrez" title="À propos de moi" />
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-image" variants={itemVariants}>
            <div className="about-image-wrapper">
              <img src="/api/placeholder/400/400" alt="Aurélien Loyer" />
            </div>
            <div className="experience-card">
              <div className="experience-number">2+</div>
              <div className="experience-text">Années d'études</div>
            </div>
          </motion.div>
          
          <div className="about-text">
            <motion.h3 variants={itemVariants}>Étudiant en informatique à Epitech Réunion</motion.h3>
            <motion.p variants={itemVariants}>
              Bonjour ! Je suis <span className="highlight">Aurélien Loyer</span>, un passionné d'informatique et de nouvelles technologies. Mon parcours à Epitech m'a permis de développer une solide base technique et une approche méthodique de résolution de problèmes.
            </motion.p>
            <motion.p variants={itemVariants}>
              Je me spécialise principalement dans la programmation en <span className="highlight">C</span> et <span className="highlight">Python</span>, tout en explorant continuellement de nouveaux langages et technologies. Mon objectif est de créer des solutions logicielles élégantes et efficaces qui répondent à des besoins concrets.
            </motion.p>
            
            <motion.div className="about-stats" variants={containerVariants}>
              <motion.div className="stat-item" variants={itemVariants}>
                <i className="fas fa-code"></i>
                <div className="stat-info">
                  <h4>3+</h4>
                  <p>Langages maîtrisés</p>
                </div>
              </motion.div>
              <motion.div className="stat-item" variants={itemVariants}>
                <i className="fas fa-project-diagram"></i>
                <div className="stat-info">
                  <h4>4+</h4>
                  <p>Projets réalisés</p>
                </div>
              </motion.div>
              <motion.div className="stat-item" variants={itemVariants}>
                <i className="fas fa-laptop-code"></i>
                <div className="stat-info">
                  <h4>5+</h4>
                  <p>Technologies</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div className="about-cta" variants={itemVariants}>
              <a href="/files/cv_loyeraurelien.pdf" className="btn btn-primary" download>
                <i className="fas fa-download"></i> Télécharger mon CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// pages/Skills.js
import React, { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({ 
      width: `${width}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  const programmingSkills = [
    { name: 'C', percentage: 75 },
    { name: 'Python', percentage: 80 },
    { name: 'HTML/CSS', percentage: 50 }
  ];

  const toolSkills = [
    { name: 'Git', icon: 'fa-git-alt' },
    { name: 'GitHub', icon: 'fa-github' },
    { name: 'Shell', icon: 'fa-terminal' },
    { name: 'Linux', icon: 'fa-linux' },
    { name: 'VS Code', icon: 'fa-code' },
    { name: 'Docker', icon: 'fa-docker' }
  ];

  const softSkills = [
    'Travail d\'équipe',
    'Résolution de problèmes',
    'Communication',
    'Adaptabilité',
    'Autonomie',
    'Gestion du temps',
    'Créativité',
    'Esprit critique'
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader subtitle="Mes atouts" title="Compétences" />
        
        <motion.div 
          ref={ref}
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Programming Skills */}
          <motion.div className="skills-category" variants={itemVariants}>
            <div className="category-header">
              <i className="fas fa-laptop-code"></i>
              <h3>Langages de programmation</h3>
            </div>
            <div className="skills-list">
              {programmingSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      custom={skill.percentage}
                      variants={progressVariants}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools Skills */}
          <motion.div className="skills-category" variants={itemVariants}>
            <div className="category-header">
              <i className="fas fa-tools"></i>
              <h3>Outils et Technologies</h3>
            </div>
            <div className="skills-grid">
              {toolSkills.map((skill, index) => (
                <motion.div 
                  className="skill-card"
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <i className={`fab ${skill.icon}`}></i>
                  <h4>{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div className="skills-category" variants={itemVariants}>
            <div className="category-header">
              <i className="fas fa-brain"></i>
              <h3>Soft Skills</h3>
            </div>
            <div className="skills-tags">
              {softSkills.map((skill, index) => (
                <motion.span 
                  className="skill-tag"
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


// pages/Projects.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Données des projets
  const projects = [
    {
      id: 'mini-shell',
      title: 'Mini Shell',
      description: 'Un shell simplifié capable d\'exécuter des commandes de base et gérer différents Builtin.',
      image: '/api/placeholder/600/400',
      category: 'c',
      tags: ['C', 'Shell'],
      githubUrl: 'https://github.com/aurelien-loyer/mini_shell',
      featured: true
    },
    {
      id: 'my-radar',
      title: 'My Radar',
      description: 'Un simulateur de contrôle aérien utilisant la bibliothèque CSFML avec détection de collisions.',
      image: '/api/placeholder/600/400',
      category: 'csfml',
      tags: ['C', 'CSFML', 'Graphique'],
      githubUrl: 'https://github.com/aurelien-loyer/my_radar',
      featured: true
    },
    {
      id: 'organized',
      title: 'Organized',
      description: 'Un programme pour organiser et trier des données selon des règles prédéfinies.',
      image: '/api/placeholder/600/400',
      category: 'c',
      tags: ['C', 'Algorithmique'],
      githubUrl: 'https://github.com/aurelien-loyer/organized',
      featured: false
    },
    {
      id: '105demography',
      title: '105demography',
      description: 'Un projet d\'analyse démographique utilisant des données statistiques pour prédire l\'évolution de la population.',
      image: '/api/placeholder/600/400',
      category: 'python',
      tags: ['Python', 'Data Analysis'],
      githubUrl: 'https://github.com/aurelien-loyer/105demography',
      featured: false
    }
  ];

  const filterCategories = [
    { value: 'all', label: 'Tous' },
    { value: 'c', label: 'C' },
    { value: 'python', label: 'Python' },
    { value: 'csfml', label: 'CSFML' }
  ];

  // Filtrer les projets
  useEffect(() => {
    let filtered = [...projects];
    
    // Appliquer le filtre de catégorie
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }
    
    // Appliquer la recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="section">
      <div className="container">
        <SectionHeader subtitle="Mon travail" title="Projets récents" />
        
        <div className="projects-controls">
          <div className="projects-filter">
            {filterCategories.map((category) => (
              <button
                key={category.value}
                className={`filter-btn ${activeFilter === category.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="projects-search">
            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchQuery}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  className="project-card"
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="project-img">
                    <img src={project.image} alt={project.title} />
                    <div className="project-links">
                      <Link to={`/projects/${project.id}`} className="project-btn">
                        <i className="fas fa-info-circle"></i>
                      </Link>
                      <a href={project.githubUrl} className="project-btn" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                    {project.featured && <div className="project-badge">Featured</div>}
                  </div>
                  <div className="project-info">
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span className="project-tag" key={index}>{tag}</span>
                      ))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <Link to={`/projects/${project.id}`} className="project-link">
                      Voir les détails <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-projects">
                <i className="fas fa-search"></i>
                <h3>Aucun projet trouvé</h3>
                <p>Essayez de modifier vos critères de recherche</p>
                <button className="btn btn-secondary" onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}>
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};


// pages/ProjectDetail.js (suite)
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Les données détaillées des projets (simulées)
  const projectsData = {
    'mini-shell': {
      title: 'Mini Shell',
      subtitle: 'Un interpréteur de commandes simplifié',
      description: 'Ce projet consiste à créer un shell simplifié capable d\'exécuter des commandes de base et de gérer différents Builtin comme cd, exit, env, setenv et unsetenv. Le shell peut également gérer les pipes et les redirections.',
      technologies: ['C', 'Unix', 'Shell', 'Parsing'],
      features: [
        'Exécution de commandes externes',
        'Gestion des commandes internes (cd, exit, env, etc.)',
        'Support des pipes et redirections',
        'Gestion des variables d\'environnement',
        'Gestion des erreurs'
      ],
      challenges: 'Le plus grand défi de ce projet a été de comprendre parfaitement le fonctionnement des processus sous Unix et de gérer correctement les pipes et les redirections tout en maintenant un code propre et modulaire.',
      images: ['/api/placeholder/800/500', '/api/placeholder/800/500'],
      githubUrl: 'https://github.com/aurelien-loyer/mini_shell',
      year: '2024'
    },
    'my-radar': {
      title: 'My Radar',
      subtitle: 'Simulateur de contrôle aérien',
      description: 'My Radar est un simulateur de contrôle aérien utilisant la bibliothèque CSFML pour l\'affichage graphique. Le programme lit un fichier de configuration décrivant les avions et les tours de contrôle, puis simule le trafic aérien en temps réel en détectant les collisions entre les avions.',
      technologies: ['C', 'CSFML', 'Collision Detection', 'Simulation'],
      features: [
        'Lecture de fichiers de configuration',
        'Affichage graphique des avions et tours de contrôle',
        'Détection de collisions en temps réel',
        'Contrôle de la simulation (pause, vitesse)',
        'Affichage des statistiques'
      ],
      challenges: 'La détection de collision efficace entre de nombreux avions a été un défi majeur, nécessitant l\'implémentation d\'algorithmes optimisés pour maintenir de bonnes performances.',
      images: ['/api/placeholder/800/500', '/api/placeholder/800/500', '/api/placeholder/800/500'],
      githubUrl: 'https://github.com/aurelien-loyer/my_radar',
      year: '2023'
    },
    'organized': {
      title: 'Organized',
      subtitle: 'Outil de tri et d\'organisation de données',
      description: 'Organized est un programme conçu pour trier et organiser des données selon des règles prédéfinies. Il permet de traiter différents types de données et de les organiser de manière efficace.',
      technologies: ['C', 'Algorithms', 'Data Structures'],
      features: [
        'Tri de données selon différents critères',
        'Organisation hiérarchique des informations',
        'Support de différents formats d\'entrée/sortie',
        'Performance optimisée pour de grands ensembles de données'
      ],
      challenges: 'L\'implémentation de structures de données efficaces pour gérer différents types d\'informations tout en maintenant de bonnes performances a été le principal défi de ce projet.',
      images: ['/api/placeholder/800/500'],
      githubUrl: 'https://github.com/aurelien-loyer/organized',
      year: '2023'
    },
    '105demography': {
      title: '105demography',
      subtitle: 'Analyse démographique et prédiction',
      description: 'Ce projet utilise des méthodes statistiques pour analyser des données démographiques et prédire l\'évolution de la population. Il implémente des techniques de régression linéaire pour établir des corrélations et faire des prévisions.',
      technologies: ['Python', 'Statistical Analysis', 'Linear Regression', 'Data Visualization'],
      features: [
        'Importation et nettoyage de données démographiques',
        'Calcul de coefficients de corrélation',
        'Régression linéaire pour la prédiction de tendances',
        'Visualisation graphique des résultats',
        'Analyse de la fiabilité des prédictions'
      ],
      challenges: 'Le principal défi a été d\'implémenter correctement les formules mathématiques de régression linéaire et de s\'assurer de la validité statistique des résultats obtenus.',
      images: ['/api/placeholder/800/500', '/api/placeholder/800/500'],
      githubUrl: 'https://github.com/aurelien-loyer/105demography',
      year: '2022'
    }
  };

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      const projectData = projectsData[projectId];
      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }, 1000);
    
    // Retour en haut de la page lors du chargement
    window.scrollTo(0, 0);
  }, [projectId]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (loading) {
    return (
      <div className="project-loading">
        <div className="spinner"></div>
        <p>Chargement du projet...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Projet non trouvé</h2>
        <p>Le projet que vous recherchez n'existe pas ou a été déplacé.</p>
        <Link to="/projects" className="btn btn-primary">
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="project-navigation">
          <Link to="/projects" className="back-link">
            <i className="fas fa-arrow-left"></i> Retour aux projets
          </Link>
        </div>
        
        <motion.div 
          className="project-detail"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="project-header">
            <h1 className="project-title">{project.title}</h1>
            <h2 className="project-subtitle">{project.subtitle}</h2>
            
            <div className="project-meta">
              <span className="project-year">
                <i className="far fa-calendar-alt"></i> {project.year}
              </span>
              <a 
                href={project.githubUrl} 
                className="project-github" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Voir sur GitHub
              </a>
            </div>
          </div>
          
          <div className="project-gallery">
            {project.images.map((image, index) => (
              <div className="project-image" key={index}>
                <img src={image} alt={`${project.title} - Image ${index + 1}`} />
              </div>
            ))}
          </div>
          
          <div className="project-content">
            <div className="project-description">
              <h3>Description</h3>
              <p>{project.description}</p>
              
              <h3>Fonctionnalités</h3>
              <ul className="project-features">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i> {feature}
                  </li>
                ))}
              </ul>
              
              <h3>Défis techniques</h3>
              <p>{project.challenges}</p>
            </div>
            
            <div className="project-sidebar">
              <div className="project-technologies">
                <h3>Technologies utilisées</h3>
                <div className="technology-tags">
                  {project.technologies.map((tech, index) => (
                    <span className="technology-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.githubUrl} 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Voir le code
                </a>
              </div>
            </div>
          </div>
          
          <div className="project-navigation bottom">
            <Link to="/projects" className="btn btn-outline">
              <i className="fas fa-arrow-left"></i> Tous les projets
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Me contacter <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;
