import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiCloud, 
  FiCpu, 
  FiLayers,
  FiSettings,
  FiShield,
  FiArrowRight 
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Product Engineering',
      description: 'Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.',
      features: ['Discovery Workshop', 'Custom Software Development', 'Product Management', 'Quality Assurance'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FiLayers,
      title: 'Web App Development',
      description: 'Build scalable, responsive web applications using modern frameworks and cutting-edge technologies.',
      features: ['React/Vue.js Development', 'Progressive Web Apps', 'API Integration', 'Performance Optimization'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences.',
      features: ['iOS & Android Native', 'React Native', 'Flutter Development', 'App Store Optimization'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: FiDatabase,
      title: 'Data & Artificial Intelligence',
      description: 'Harness the power of data and AI to drive intelligent business decisions and automation.',
      features: ['Machine Learning', 'Data Analytics', 'AI Integration', 'Business Intelligence'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: FiCloud,
      title: 'DevOps & CloudOps',
      description: 'Streamline your deployment processes and scale your infrastructure with modern DevOps practices.',
      features: ['CI/CD Pipelines', 'Cloud Migration', 'Infrastructure as Code', 'Monitoring & Logging'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: FiCpu,
      title: 'Emerging Technologies',
      description: 'Stay ahead with cutting-edge technologies including blockchain, IoT, and AR/VR solutions.',
      features: ['Blockchain Development', 'IoT Solutions', 'AR/VR Applications', 'Web3 Integration'],
      color: 'from-purple-500 to-pink-600'
    }
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
    <section className="section-padding bg-gray-50" id="services">
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
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Software Development Services
          </span>
          <h2 className="heading-lg mb-6">
            Forward <span className="text-primary-600">Planners</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            We provide comprehensive software development services that cover every aspect of your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group/cta">
                <span>Learn More</span>
                <FiArrowRight className="ml-2 w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button className="btn-primary">
            View All Services
            <FiArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
