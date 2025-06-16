import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.cv': 'Mon CV',
    
    // Hero Section
    'hero.greeting': 'Bonjour, je suis',
    'hero.student': 'Étudiant à Epitech Réunion',
    'hero.developer': 'Développeur C/Python',
    'hero.passionate': 'Passionné d\'informatique',
    'hero.viewProjects': 'Voir mes projets',
    'hero.contactMe': 'Me contacter',
    'hero.scroll': 'Défiler',
    
    // About Section
    'about.discover': 'Découvrez',
    'about.title': 'À propos de moi',
    'about.subtitle': 'Étudiant en informatique à Epitech Réunion',
    'about.description1': 'Bonjour ! Je suis Aurélien Loyer, un passionné d\'informatique et de nouvelles technologies. Mon parcours à Epitech m\'a permis de développer une solide base technique et une approche méthodique de résolution de problèmes.',
    'about.description2': 'Je me spécialise principalement dans la programmation en C et Python, tout en explorant continuellement de nouveaux langages et technologies. Mon objectif est de créer des solutions logicielles élégantes et efficaces qui répondent à des besoins concrets.',
    'about.languages': 'Langages maîtrisés',
    'about.projects': 'Projets réalisés',
    'about.technologies': 'Technologies',
    'about.yearStudy': 'Année d\'étude',
    'about.downloadCV': 'Télécharger mon CV',
    
    // Skills Section
    'skills.assets': 'Mes atouts',
    'skills.title': 'Compétences',
    'skills.programming': 'Langages de programmation',
    'skills.tools': 'Outils et Technologies',
    'skills.soft': 'Soft Skills',
    'skills.teamwork': 'Travail d\'équipe',
    'skills.problemSolving': 'Résolution de problèmes',
    'skills.communication': 'Communication',
    'skills.adaptability': 'Adaptabilité',
    'skills.autonomy': 'Autonomie',
    'skills.timeManagement': 'Gestion du temps',
    'skills.creativity': 'Créativité',
    'skills.criticalThinking': 'Esprit critique',
    
    // Projects Section
    'projects.work': 'Mon travail',
    'projects.title': 'Projets récents',
    'projects.all': 'Tous',
    'projects.details': 'Voir les détails',
    'projects.miniShell.description': 'Un shell simplifié capable d\'exécuter des commandes de base et gérer différents Builtin.',
    'projects.myRadar.description': 'Un simulateur de contrôle aérien utilisant la bibliothèque CSFML avec détection de collisions.',
    'projects.organized.description': 'Un programme pour organiser et trier des données selon des règles prédéfinies.',
    'projects.demography.description': 'Un projet d\'analyse démographique utilisant des données statistiques pour prédire l\'évolution de la population.',
    
    // Contact Section
    'contact.writeMe': 'Écrivez-moi',
    'contact.title': 'Contact',
    'contact.coordinates': 'Mes coordonnées',
    'contact.description': 'Vous pouvez me contacter par l\'un des moyens suivants ou en utilisant le formulaire ci-contre.',
    'contact.sendMessage': 'Envoyez-moi un message',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailPlaceholder': 'Votre email',
    'contact.subjectPlaceholder': 'Sujet du message',
    'contact.messagePlaceholder': 'Votre message',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.sent': 'Message envoyé !',
    
    // Footer
    'footer.developer': 'Développeur passionné, étudiant à Epitech Réunion, spécialisé en programmation C et Python.',
    'footer.quickLinks': 'Liens rapides',
    'footer.followMe': 'Me suivre',
    'footer.rights': '© 2025 Aurélien Loyer. Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'My CV',
    
    // Hero Section
    'hero.greeting': 'Hello, I am',
    'hero.student': 'Student at Epitech Réunion',
    'hero.developer': 'C/Python Developer',
    'hero.passionate': 'Computer Science Enthusiast',
    'hero.viewProjects': 'View my projects',
    'hero.contactMe': 'Contact me',
    'hero.scroll': 'Scroll',
    
    // About Section
    'about.discover': 'Discover',
    'about.title': 'About me',
    'about.subtitle': 'Computer Science Student at Epitech Réunion',
    'about.description1': 'Hello! I am Aurélien Loyer, passionate about computer science and new technologies. My journey at Epitech has allowed me to develop a solid technical foundation and a methodical approach to problem-solving.',
    'about.description2': 'I specialize mainly in C and Python programming, while continuously exploring new languages and technologies. My goal is to create elegant and efficient software solutions that meet concrete needs.',
    'about.languages': 'Mastered Languages',
    'about.projects': 'Completed Projects',
    'about.technologies': 'Technologies',
    'about.yearStudy': 'Year of Study',
    'about.downloadCV': 'Download my CV',
    
    // Skills Section
    'skills.assets': 'My Assets',
    'skills.title': 'Skills',
    'skills.programming': 'Programming Languages',
    'skills.tools': 'Tools & Technologies',
    'skills.soft': 'Soft Skills',
    'skills.teamwork': 'Teamwork',
    'skills.problemSolving': 'Problem Solving',
    'skills.communication': 'Communication',
    'skills.adaptability': 'Adaptability',
    'skills.autonomy': 'Autonomy',
    'skills.timeManagement': 'Time Management',
    'skills.creativity': 'Creativity',
    'skills.criticalThinking': 'Critical Thinking',
    
    // Projects Section
    'projects.work': 'My Work',
    'projects.title': 'Recent Projects',
    'projects.all': 'All',
    'projects.details': 'View details',
    'projects.miniShell.description': 'A simplified shell capable of executing basic commands and managing different Builtins.',
    'projects.myRadar.description': 'An air traffic control simulator using the CSFML library with collision detection.',
    'projects.organized.description': 'A program to organize and sort data according to predefined rules.',
    'projects.demography.description': 'A demographic analysis project using statistical data to predict population evolution.',
    
    // Contact Section
    'contact.writeMe': 'Write to me',
    'contact.title': 'Contact',
    'contact.coordinates': 'My Contact Information',
    'contact.description': 'You can contact me through one of the following means or by using the form opposite.',
    'contact.sendMessage': 'Send me a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'Your email',
    'contact.subjectPlaceholder': 'Message subject',
    'contact.messagePlaceholder': 'Your message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.sent': 'Message sent!',
    
    // Footer
    'footer.developer': 'Passionate developer, student at Epitech Réunion, specialized in C and Python programming.',
    'footer.quickLinks': 'Quick Links',
    'footer.followMe': 'Follow Me',
    'footer.rights': '© 2025 Aurélien Loyer. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};