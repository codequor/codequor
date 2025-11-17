// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaRocket, FaShieldAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: <FaRocket />, value: "150+", label: "Projects Delivered" },
    { icon: <FaUsers />, value: "50+", label: "Happy Clients" },
    { icon: <FaShieldAlt />, value: "99%", label: "Uptime SLA" },
    { icon: <FaHeart />, value: "100%", label: "Client Love" },
  ];

  const team = [
    { name: "Alex Johnson", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sarah Kim", role: "Lead Developer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Mike Chen", role: "Creative Director", img: "https://randomuser.me/api/portraits/men/86.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            We Are <span className="text-[#1065c0]">CodeQuor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A passionate team of innovators turning bold ideas into digital realities. We don’t just build software — we build growth.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge technology that drives real results. We combine creativity, strategy, and code to deliver solutions that scale, perform, and inspire.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1065c0] to-[#0e55a0] rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#fff] mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3 text-[#fff]">
                    <li>✔ Tailored Solutions</li>
                    <li>✔ On-Time Delivery</li>
                    <li>✔ 24/7 Support</li>
                    <li>✔ Transparent Pricing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-[#1065c0] to-[#0e55a0] text-[#fff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-5xl">{stat.icon}</div>
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Meet Our <span className="text-[#1065c0]">Team</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={member.img} alt={member.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start?</h2>
          <Link
            to="/consult"
            className="inline-block bg-[#1065c0] text-[#fff] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0e55a0] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;