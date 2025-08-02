import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLayers, 
  FiSmartphone, 
  FiDatabase, 
  FiCloud 
} from 'react-icons/fi';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: FiLayers },
    { id: 'backend', label: 'Backend', icon: FiDatabase },
    { id: 'mobile', label: 'Mobile', icon: FiSmartphone },
    { id: 'cloud', label: 'Cloud & DevOps', icon: FiCloud }
  ];

  const technologies = {
    frontend: [
      { name: 'React', logo: '⚛️', description: 'Modern UI library for building interactive interfaces' },
      { name: 'Vue.js', logo: '🟢', description: 'Progressive framework for building user interfaces' },
      { name: 'Angular', logo: '🔴', description: 'Platform for building mobile and desktop web applications' },
      { name: 'Next.js', logo: '⚡', description: 'React framework for production-grade applications' },
      { name: 'TypeScript', logo: '🔷', description: 'Typed superset of JavaScript' },
      { name: 'Tailwind CSS', logo: '🎨', description: 'Utility-first CSS framework' }
    ],
    backend: [
      { name: 'Node.js', logo: '🟢', description: 'JavaScript runtime for server-side development' },
      { name: 'Python', logo: '🐍', description: 'Versatile programming language for web development' },
      { name: 'Java', logo: '☕', description: 'Enterprise-grade programming language' },
      { name: 'Go', logo: '🐹', description: 'Fast and efficient programming language' },
      { name: 'PostgreSQL', logo: '🐘', description: 'Advanced open-source relational database' },
      { name: 'MongoDB', logo: '🍃', description: 'Document-based NoSQL database' }
    ],
    mobile: [
      { name: 'React Native', logo: '📱', description: 'Cross-platform mobile app framework' },
      { name: 'Flutter', logo: '🦋', description: 'UI toolkit for building natively compiled applications' },
      { name: 'Swift', logo: '🍎', description: 'Programming language for iOS development' },
      { name: 'Kotlin', logo: '🤖', description: 'Modern programming language for Android development' },
      { name: 'Xamarin', logo: '🔷', description: 'Cross-platform mobile development platform' },
      { name: 'Ionic', logo: '⚡', description: 'Cross-platform mobile app development framework' }
    ],
    cloud: [
      { name: 'AWS', logo: '☁️', description: 'Comprehensive cloud computing platform' },
      { name: 'Azure', logo: '🔵', description: 'Microsoft cloud computing service' },
      { name: 'Google Cloud', logo: '🌩️', description: 'Google cloud computing platform' },
      { name: 'Docker', logo: '🐳', description: 'Containerization platform' },
      { name: 'Kubernetes', logo: '☸️', description: 'Container orchestration platform' },
      { name: 'Terraform', logo: '🏗️', description: 'Infrastructure as Code tool' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="section-padding bg-gray-50" id="tech-stack">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Technology Stack
          </span>
          <h2 className="heading-lg mb-6">
            Technologies We <span className="text-purple-600">Master</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            We work with cutting-edge technologies to deliver robust, scalable, and efficient solutions for your business needs.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 shadow-md'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies[activeTab].map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{tech.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-gray-600 mb-6">
            Looking for a specific technology not listed here? We're always learning and adapting.
          </p>
          <button className="btn-primary">
            Discuss Your Tech Requirements
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
