// // ServicesSection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaCode, FaCloud, FaBrain, FaShieldAlt } from 'react-icons/fa';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
//   },
// };

// const headingVariants = {
//   hidden: { opacity: 0, scale: 0.8, skewX: 10 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     skewX: 0,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50, rotateX: -10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { duration: 0.7, ease: 'easeOut' },
//   },
//   hover: {
//     scale: 1.05,
//     rotateY: 5,
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//     transition: { duration: 0.3, ease: 'easeOut' },
//   },
//   tap: { scale: 0.95 },
// };

// const buttonVariants = {
//   hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } },
//   tap: { scale: 0.9 },
// };

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: <FaCode size={40} />,
//       title: 'Custom Software',
//       description: 'Bespoke software solutions tailored to your business needs.',
//       link: '/services/software',
//     },
//     {
//       icon: <FaCloud size={40} />,
//       title: 'Cloud Solutions',
//       description: 'Scalable, secure cloud infrastructure for your enterprise.',
//       link: '/services/cloud',
//     },
//     {
//       icon: <FaBrain size={40} />,
//       title: 'AI Consulting',
//       description: 'Harness AI to drive innovation and efficiency.',
//       link: '/services/ai',
//     },
//     {
//       icon: <FaShieldAlt size={40} />,
//       title: 'Cybersecurity',
//       description: 'Protect your business with top-tier security solutions.',
//       link: '/services/security',
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-100 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-[#1065c0]/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1065c0]/20 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Heading */}
//         <motion.div
//           className="text-center mb-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h2
//             className="text-4xl sm:text-5xl font-bold text-[#1065c0] mb-4"
//             variants={headingVariants}
//           >
//             Our Services
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600 max-w-2xl mx-auto"
//             variants={headingVariants}
//           >
//             Discover how CodeQuor transforms your business with cutting-edge technology solutions.
//           </motion.p>
//         </motion.div>

//         {/* Service Cards */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-6 text-center hover:bg-gradient-to-br hover:from-[#1065c0] hover:to-[#0e55a0] hover:text-white transition-all duration-300"
//               variants={cardVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <div className="text-[#1065c0] group-hover:text-white mb-4">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600 group-hover:text-gray-200 text-sm mb-4">
//                 {service.description}
//               </p>
//               <Link
//                 to={service.link}
//                 as={motion(Link)}
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className="inline-block bg-[#1065c0] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#0e55a0] transition duration-300"
//               >
//                 Learn More
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;




// ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { color, motion } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaPaintBrush, FaPlug, FaBriefcase, FaDigitalOcean } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8, skewX: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    skewX: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  hover: {
    scale: 1.1,
    rotateY: 10,
    color:"white",
    rotateZ: 2,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  tap: { scale: 0.95 },
};

const buttonVariants = {
  hover: { scale: 1.15, color:"white", transition: { duration: 0.3, yoyo: Infinity } },
  tap: { scale: 0.9 },
};

const backgroundShapeVariants = {
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.3, 0.2],
    transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
  },
};

const ServicesSection = () => {
  const services = [
    {
      icon: <FaMobileAlt size={40} />,
      title: 'Mobile App Development',
      description: 'Build high-performance, user-friendly mobile apps for iOS and Android.',
      link: '/services/mobile-app',
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Web App Development',
      description: 'Create scalable, secure, and modern web applications tailored to your needs.',
      link: '/services/web-app',
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: 'Website Design',
      description: 'Design stunning, responsive websites that captivate and convert.',
      link: '/services/website-design',
    },
    {
      icon: <FaPlug size={40} />,
      title: 'API Integration',
      description: 'Seamlessly connect your systems with robust, custom API solutions.',
      link: '/services/api-integration',
    },
    {
      icon: <FaBriefcase size={40} />,
      title: 'Consultancy',
      description: 'Expert guidance to drive your tech strategy and business growth.',
      link: '/services/consultancy',
    },
{
  icon: <FaDigitalOcean size={40} />,
  title: 'Digital Marketing',
  description: 'Boost your online presence with data-driven campaigns, SEO optimization, targeted ads, and social media strategies that convert visitors into loyal customers.',
  link: '/services/digital-marketing',
},
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#1065c0]/20 rounded-full blur-3xl"
        variants={backgroundShapeVariants}
        animate="pulse"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#1065c0]/20 rounded-full blur-3xl"
        variants={backgroundShapeVariants}
        animate="pulse"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#1065c0] mb-4"
            variants={headingVariants}
          >
            Our Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={headingVariants}
          >
            Power your business with CodeQuor’s innovative software solutions and expert consultancy.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 text-center hover:bg-gradient-to-br hover:from-[#1065c0] hover:to-[#0e55a0] hover:text-white transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="text-[#1065c0] group-hover:text-[#fff] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm mb-4">
                {service.description}
              </p>
              {/* <Link
                to={service.link}
                as={motion(Link)}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block bg-[#1065c0] group-hover:bg-white group-hover:text-[#fff] text-[#fff] px-4 py-2 rounded-full font-semibold transition duration-300"
              >
                Explore
              </Link> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;