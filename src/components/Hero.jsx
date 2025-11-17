
// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { color, motion } from 'framer-motion';
import im from '../assets/picture.png'; // Your image
import im2 from "../assets/pic.png"
// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    color:"white",
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const graphicVariants = {
  float: {
    y: [-10, 10],
    transition: {
      y: { repeat: Infinity, repeatType: 'reverse', duration: 2, ease: 'easeInOut' },
    },
  },
};

const Hero = () => {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      {/* 1. Background Image (UNDERNEATH) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${im})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(2.9) contrast(1.1)', // Optional: make image subtle                                                                                                          
        }}
      />

      {/* 2. Gradient Overlay (ON TOP of image) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(to right, #1065c0, #0e55a0)',
          opacity: 0.9, // Controls how strong the gradient is
        }}
      />

      {/* 3. Light dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Decorative blurred circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>

      {/* Main Content */}
      <div className="max-w-7xl text-white mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          
            <motion.h1
              className="text-4xl sm:text-5xl text-white md:text-6xl font-bold leading-tight"
              variants={childVariants}
            >
              Innovate with CodeQuor
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-100 max-w-lg mx-auto md:mx-0"
              variants={childVariants}
            >
              Transform your business with our expert software consultancy
              services. Build cutting-edge solutions tailored to your needs.
            </motion.p>

            <motion.div variants={childVariants}>
              <Link
                to="/consult"
                as={motion(Link)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block bg-white text-[#1065c0] px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Graphic */}
                
          <motion.div
            className="hidden md:flex justify-center items-center"
            variants={graphicVariants}
            animate="float"
          >
            <div className="relative">
              <img
                src={im2}
                alt="CodeQuor Solutions"
                className="w-full max-w-md h-auto rounded-full border-4 border-[#fff] /30 shadow-2xl object-cover"
                style={{ 
                  width: '320px', 
                  height: '320px', 
                  objectFit: 'cover' 
                }}
              />
              {/* Subtle glow behind */}
              <div className="absolute inset-0 rounded-full bg-white/10 blur-xl -z-10 scale-110"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;