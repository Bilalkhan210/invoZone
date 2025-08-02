import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiTrendingUp, FiLifeBuoy, FiArrowRight } from 'react-icons/fi';

const Audience = () => {
  const audiences = [
    {
      icon: FiActivity,
      title: "I'm A Startup",
      subtitle: "Turn Your Vision Into Reality",
      description: "Remarkable ideas often stall without the right team to bring them to life. We help startups transform innovative concepts into market-ready products.",
      features: [
        "MVP Development",
        "Product Strategy",
        "Technical Co-founder Support",
        "Scalable Architecture"
      ],
      ctaText: "Get Started",
      color: "from-green-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-green-50 to-blue-50",
      borderColor: "border-green-200"
    },
    {
      icon: FiTrendingUp,
      title: "I'm An Enterprise",
      subtitle: "Scale Without Boundaries",
      description: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks. We help enterprises build robust, scalable solutions.",
      features: [
        "Digital Transformation",
        "Legacy System Modernization",
        "Enterprise Architecture",
        "Team Augmentation"
      ],
      ctaText: "Explore More",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: FiLifeBuoy,
      title: "I Need A Rescue",
      subtitle: "Fix What's Broken",
      description: "A messy codebase and tech debt are suffocating your progress. We rescue failing projects and get them back on track.",
      features: [
        "Code Audit & Review",
        "Technical Debt Resolution",
        "Performance Optimization",
        "Project Recovery"
      ],
      ctaText: "Need a Fix",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-white" id="audience">
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
          <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-600 rounded-full text-sm font-semibold mb-4">
            Who We Serve
          </span>
          <h2 className="heading-lg mb-6">
            Backing Your Up At Every Stage Of Your{' '}
            <span className="text-primary-600">Progress</span>
          </h2>
          <p className="text-body max-w-4xl mx-auto">
            From launching startups to expanding enterprises, or recovering from setbacks, 
            we help businesses overcome every challenge on their journey.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden ${audience.bgColor} rounded-2xl border-2 ${audience.borderColor} p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${audience.color} rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500`}></div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {audience.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  {audience.subtitle}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {audience.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {audience.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${audience.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${audience.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center group/cta`}
                >
                  <span>{audience.ctaText}</span>
                  <FiArrowRight className="ml-2 w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl text-white"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="text-2xl font-bold mb-4">
            Got An Idea Or Concerns? Let's Discuss.
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            No matter what stage you're at, we're here to help you succeed. 
            Book a free consultation and let's explore how we can work together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            <span>Book Free Consultation</span>
            <FiArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Audience;
