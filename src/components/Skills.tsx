import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Settings, 
  Brain, 
  Github, 
  GitBranch, 
  Terminal, 
  MonitorSpeaker,
  FileCode,
  Container
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const programmingSkills = [
    { name: 'C', percentage: 70, color: 'from-blue-500 to-blue-600' },
    { name: 'Python', percentage: 20, color: 'from-green-500 to-green-600' },
    { name: 'Autres', percentage: 10, color: 'from-purple-500 to-purple-600' },
  ];

  const tools = [
    { icon: GitBranch, name: 'Git' },
    { icon: Github, name: 'GitHub' },
    { icon: Terminal, name: 'Shell' },
    { icon: MonitorSpeaker, name: 'Linux' },
    { icon: FileCode, name: 'VS Code' },
    { icon: Container, name: 'Docker' },
  ];

  const softSkills = [
    t('skills.teamwork'),
    t('skills.problemSolving'),
    t('skills.communication'),
    t('skills.adaptability'),
    t('skills.autonomy'),
    t('skills.timeManagement'),
    t('skills.creativity'),
    t('skills.criticalThinking'),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            {t('skills.assets')}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('skills.title')}
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('skills.programming')}
              </h3>
            </div>

            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl">
                <Settings className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('skills.tools')}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <tool.icon className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-3 transition-colors" size={32} />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {tool.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('skills.soft')}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;