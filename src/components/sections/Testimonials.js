import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      videoThumbnail: '/assets/videos/testimonial1.jpg',
      videoLink: 'https://www.example.com/video1',
      author: 'John Doe',
      quote: "This company transformed our business. Their professionalism and dedication were clear from the start.",
      company: 'Tech Innovators'
    },
    {
      videoThumbnail: '/assets/videos/testimonial2.jpg',
      videoLink: 'https://www.example.com/video2',
      author: 'Jane Smith',
      quote: "Their expert guidance and support turned our project into a success. Highly recommended!",
      company: 'Startup Ventures'
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="heading-lg mb-6">
            Hear From Our <span className="text-purple-600">Clients</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Discover what our clients have to say about us and how we've helped their businesses succeed.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative group">
                <img
                  src={testimonial.videoThumbnail}
                  alt={`Testimonial by ${testimonial.author}`}
                  className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <a
                  href={testimonial.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-black/30 group-hover:bg-black/40 transition-colors duration-300"
                >
                  <FiPlayCircle />
                </a>
              </div>

              {/* Quote and Author */}
              <div className="p-6">
                <blockquote className="text-gray-600 italic mb-4">
                  “{testimonial.quote}”
                </blockquote>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

