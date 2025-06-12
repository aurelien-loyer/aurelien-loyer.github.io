import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, Laptop, Download } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, number: '2+', label: 'Langages maîtrisés' },
    { icon: Award, number: '50+', label: 'Projets réalisés' },
    { icon: Laptop, number: '4+', label: 'Technologies' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2 block"
          >
            Découvrez
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            À propos de moi
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="w-80 h-80 mx-auto rounded-3xl shadow-2xl relative overflow-hidden">
                <img 
                  src="https://i.ibb.co/Z6F50WGp/photo-1.jpg" 
                  alt="Aurélien Loyer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Code className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Aurélien Loyer</div>
                        <div className="text-white/80 text-sm">Développeur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border-4 border-blue-100 dark:border-blue-900"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Année d'étude
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Étudiant en informatique à Epitech Réunion
            </h3>
            
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                Bonjour ! Je suis{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Aurélien Loyer
                </span>
                , un passionné d'informatique et de nouvelles technologies. Mon parcours à Epitech m\'a permis de développer une solide base technique et une approche méthodique de résolution de problèmes.
              </p>
              <p>
                Je me spécialise principalement dans la programmation en{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">C</span> et{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Python</span>, tout en explorant continuellement de nouveaux langages et technologies. Mon objectif est de créer des solutions logicielles élégantes et efficaces qui répondent à des besoins concrets.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 py-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-6 group-hover:scale-105 transition-transform">
                    <stat.icon className="text-blue-600 dark:text-blue-400 mx-auto mb-3" size={32} />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/cv_loyeraurelien.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                <span>Télécharger mon CV</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;