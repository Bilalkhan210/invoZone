import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown,
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiLayers
} from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'What We Do',
      href: '#services',
      dropdown: [
        { title: 'Product Engineering', href: '#product-engineering', icon: FiCode },
        { title: 'Web App Development', href: '#web-development', icon: FiLayers },
        { title: 'Mobile App Development', href: '#mobile-development', icon: FiSmartphone },
        { title: 'Data & AI', href: '#data-ai', icon: FiDatabase },
        { title: 'DevOps & Cloud', href: '#devops', icon: FiCloud },
        { title: 'Emerging Technologies', href: '#emerging-tech', icon: FiCpu },
      ]
    },
    {
      title: 'Who We Serve',
      href: '#audience',
      dropdown: [
        { title: 'Startups', href: '#startups' },
        { title: 'Enterprises', href: '#enterprises' },
        { title: 'Rescue Projects', href: '#rescue' },
      ]
    },
    {
      title: 'How We Engage',
      href: '#engagement',
    },
    {
      title: 'Company',
      href: '#company',
      dropdown: [
        { title: 'About Us', href: '#about' },
        { title: 'Case Studies', href: '#case-studies' },
        { title: 'Blog', href: '#blog' },
        { title: 'Careers', href: '#careers' },
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IZ</span>
            </div>
            <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              InvoZone
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                  }`}
                  onClick={() => item.dropdown && handleDropdownToggle(index)}
                >
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <FiChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                        >
                          {dropdownItem.icon && (
                            <dropdownItem.icon className="w-4 h-4 text-primary-600" />
                          )}
                          <span>{dropdownItem.title}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="#hire-dev"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
              }`}
            >
              Hire Dev
            </Link>
            <Link
              to="#contact"
              className="btn-primary"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <FiMenu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                    {item.dropdown && (
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            {dropdownItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 border-t border-gray-200">
                  <Link
                    to="#hire-dev"
                    className="block w-full text-center py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    Hire Dev
                  </Link>
                  <Link
                    to="#contact"
                    className="block w-full text-center btn-primary mt-2"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
