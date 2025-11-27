/* eslint-disable no-unused-vars */
// ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import bluewave from "../assets/bluewave.png"
import academy from "../assets/sporty.png"
import weeltin from "../assets/weeltins.png"
import weeltin2 from "../assets/weeltin2.png"
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Blue wave travels and tour',
      description: 'A full stack software solution for a travel Agency',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: bluewave,
      live: 'https://bluewavestravelsandtours.com/',
      github: 'https://github.com',
    },
    {
      title: 'Act sport Di oyibo football Academy',
      description: 'A website for a football Academy ',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      image: academy,
      live: 'https://actsportsdoyibo.com/',
      github: 'https://github.com',
    },
    {
      title: 'wheelitin',
      description: 'A UK based software that connects Auto specialists to clients',
      tech: ['React Native', 'Firebase', 'Redux', 'Figma'],
      image: weeltin,
      live: 'https://wheelitin.taskflow.com.ng/',
      github: 'https://github.com',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
    hover: {
      y: -12,
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#1065c0]">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises — we deliver solutions that scale and inspire.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1065c0] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-[#1065c0] bg-[#1065c0]/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#1065c0] hover:text-[#0e55a0] font-medium transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    <FaGithub /> Code
                  </a> */}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1065c0]/5 to-[#0e55a0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;