import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import sections
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Audience from '../components/sections/Audience';
import TechStack from '../components/sections/TechStack';
import Testimonials from '../components/sections/Testimonials';
import Industries from '../components/sections/Industries';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>InvoZone - Software Development and Consulting Company</title>
        <meta name="description" content="Future-Driven Innovations. Fostering Growth For Startups, Enterprises, And Innovators. Expert software development and consulting services." />
        <meta name="keywords" content="software development, web development, mobile apps, consulting, startup, enterprise, AI, blockchain" />
        <meta property="og:title" content="InvoZone - Software Development and Consulting Company" />
        <meta property="og:description" content="Future-Driven Innovations. Fostering Growth For Startups, Enterprises, And Innovators." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* All page sections */}
      <Hero />
      <Services />
      <Audience />
      <TechStack />
      <Testimonials />
      <Industries />
    </>
  );
};

export default Home;
