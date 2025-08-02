import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="pt-16 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          {/* Contact Info */}
          <div>
            <h4 className="heading-lg mb-4 text-primary-600">Get In Touch</h4>
            <p className="text-sm text-gray-400 mb-4">Have questions? We’d love to hear from you. Here’s how you can reach us...</p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Email: </span>info@example.com
            </p>
            <p className="text-sm">
              <span className="font-semibold">Phone: </span>+1 (555) 123-4567
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="heading-lg mb-4 text-primary-600">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-primary-600 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-sm hover:text-primary-600 transition-colors">Careers</a></li>
              <li><a href="#blog" className="text-sm hover:text-primary-600 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-sm hover:text-primary-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-lg mb-4 text-primary-600">Services</h4>
            <ul className="space-y-2">
              <li><a href="#web-development" className="text-sm hover:text-primary-600 transition-colors">Web Development</a></li>
              <li><a href="#mobile-development" className="text-sm hover:text-primary-600 transition-colors">Mobile Apps</a></li>
              <li><a href="#product-engineering" className="text-sm hover:text-primary-600 transition-colors">Product Engineering</a></li>
              <li><a href="#data-ai" className="text-sm hover:text-primary-600 transition-colors">Data & AI</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="heading-lg mb-4 text-primary-600">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors"><FiFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors"><FiTwitter className="w-5 h-5" /></a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors"><FiLinkedin className="w-5 h-5" /></a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors"><FiInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary-600 transition-colors"><FiYoutube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-sm text-gray-600">&copy; {(new Date().getFullYear())} InvoUpdate. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

