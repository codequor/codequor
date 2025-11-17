// WhoWeAre.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaRocket, 
  FaUsers, 
  FaCogs, 
  FaHeart, 
  FaShieldAlt 
} from 'react-icons/fa';

const WhoWeAre = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-4xl text-[#1065c0]" />,
      title: 'Innovation First',
      description: 'We push boundaries with cutting-edge ideas and bold solutions.',
    },
    {
      icon: <FaRocket className="text-4xl text-[#1065c0]" />,
      title: 'Result-Driven',
      description: 'Every line of code is crafted to deliver measurable success.',
    },
    {
      icon: <FaUsers className="text-4xl text-[#1065c0]" />,
      title: 'Client-Centric',
      description: 'Your vision is our mission. We build trust through collaboration.',
    },
    {
      icon: <FaCogs className="text-4xl text-[#1065c0]" />,
      title: 'Excellence in Execution',
      description: 'Precision, scalability, and quality in every project we deliver.',
    },
    {
      icon: <FaHeart className="text-4xl text-[#1065c0]" />,
      title: 'Passion & Purpose',
      description: 'We love what we do — and it shows in every pixel and feature.',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#1065c0]" />,
      title: 'Reliable & Secure',
      description: 'Your data and systems are protected with enterprise-grade security.',
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      boxShadow: '0 20px 40px rgba(16, 101, 192, 0.2)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="text-[#1065c0] font-semibold">CodeQuor</span>, we don’t just write code — 
            we shape the future of digital excellence with passion, precision, and purpose.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              whileTap="tap"
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1065c0] to-[#0e55a0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Icon Container */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1065c0] transition-colors">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>

              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1065c0]/5 to-[#0e55a0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-700 mb-6">
            Ready to build something extraordinary together?
          </p>
          <a
            href="/consult"
            className="inline-block bg-[#1065c0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0e55a0]  text-[#fff] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Let’s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;