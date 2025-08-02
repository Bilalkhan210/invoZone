import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiBookOpen, FiBriefcase, FiHeart, FiHome, FiServer } from 'react-icons/fi';

const Industries = () => {
  const industries = [
    { icon: FiShoppingCart, title: 'eCommerce', description: 'Build powerful online shopping experiences with scalable and secure solutions.' },
    { icon: FiBookOpen, title: 'Education', description: 'Transform learning with interactive and engaging educational platforms.' },
    { icon: FiBriefcase, title: 'Business', description: 'Empower your business operations with custom software tailored to your needs.' },
    { icon: FiHeart, title: 'Healthcare', description: 'Enhance patient care with innovative healthcare technology solutions.' },
    { icon: FiHome, title: 'Real Estate', description: 'Leverage technology to enhance property management and client engagement.' },
    { icon: FiServer, title: 'IT & Networking', description: 'Optimize your IT infrastructure with efficient and scalable solutions.' }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="section-padding bg-white" id="industries">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Industries
          </span>
          <h2 className="heading-lg mb-6">
            Our Industry 
            <span className="text-blue-600"> Expertise</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            We provide tailored solutions across various industries, enabling innovation and growth with cutting-edge technology.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <industry.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;

