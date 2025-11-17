/* eslint-disable no-unused-vars */




// src/components/ServicesSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaLink, 
  FaHandshake, 
  FaPalette,
  FaCalendarAlt,
  FaDigitalTachograph,
  FaDigitalOcean
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import bluewave from "../assets/bluewave2.png"
import academy from "../assets/footballAcedemy2.png"
import weeltin from "../assets/weeltin2.png"
import weeltin2 from "../assets/weeltin.png"
import bluewave2 from "../assets/bluewave.png"
import  football2 from "../assets/footbal Acedemy.png"
const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);

  const services = [
    {
      icon: <FaLaptopCode className="text-5xl text-[#1065c0]" />,
      title: "Custom Web Applications",
      description: "We build powerful, scalable, and user-centric web platforms that streamline operations, boost engagement, and drive revenue growth for businesses of all sizes.",
      features: [
        "Admin dashboards & CRM systems",
        "SaaS platforms & internal tools",
        "Real-time collaboration apps",
        "E-commerce & booking systems"
      ],
      link: "#"
    },
    {
      icon: <FaPalette className="text-5xl text-[#1065c0]" />,
      title: "Professional Website Design",
      description: "Stunning, conversion-focused websites that reflect your brand identity and turn visitors into loyal customers with pixel-perfect design and seamless UX.",
      features: [
        "Corporate & portfolio sites",
        "Landing pages that convert",
        "Brand-consistent visual identity",
        "Fast, SEO-optimized & mobile-first"
      ],
      link: "#"
    },
    {
      icon: <FaMobileAlt className="text-5xl text-[#1065c0]" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver flawless performance, intuitive interfaces, and offline functionality to keep your users engaged anytime, anywhere.",
      features: [
        "iOS & Android native apps",
        "Cross-platform (React Native)",
        "Push notifications & in-app chat",
        "Secure payment & user auth"
      ],
      link: "#"
    },
    {
      icon: <FaLink className="text-5xl text-[#1065c0]" />,
      title: "API Integration & Development",
      description: "Seamless connection between your systems and third-party services — payment gateways, CRMs, ERPs, social platforms — ensuring smooth data flow and automation.",
      features: [
        "Payment gateway integration",
        "CRM & ERP connectivity",
        "RESTful & GraphQL APIs",
        "Webhook & real-time sync"
      ],
      link: "#"
    },
    {
      icon: <FaHandshake className="text-5xl text-[#1065c0]" />,
      title: "Technical Consultancy",
      description: "Expert guidance from ideation to deployment. We help you choose the right tech stack, scale efficiently, reduce costs, and future-proof your digital strategy.",
      features: [
        "Tech stack evaluation",
        "Architecture & scalability planning",
        "Code audit & optimization",
        "Team training & knowledge transfer"
      ],
      link: "#"
    },
   {
   icon: <FaDigitalOcean className="text-5xl text-[#1065c0]" />,
   title: "Digital Marketing",
   description: "Grow your brand online with targeted campaigns, SEO mastery, and data-driven strategies that drive traffic, generate leads, and boost conversions.",
   features: [
     "Google & Meta Ads Management",
     "SEO & Content Strategy",
     "Social Media Growth",
     "Email Marketing Automation"
   ],
   link: "/services/digital-marketing"
 },
  ];

  const projects = [
    {
      title: "EduLearn – Online Learning Platform",
      client: "EduTech Nigeria",
      result: "Increased student enrollment by 180% in 6 months",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2b0d23?w=600&h=400&fit=crop"
    },
    {
      title: "ShopFast – E-commerce Marketplace",
      client: "Retail Giant Ltd",
      result: "Processed ₦120M+ in transactions in first quarter",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "HealthTrack – Patient Management System",
      client: "MedCare Hospitals",
      result: "Reduced admin workload by 65% with automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
  ];

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, date, phone } = formData;
    if (!name || !email || !date || !phone) {
      toast.error("All fields required");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/bookings`, {
        name, email, message: formData.message, date, phone
      });
      toast.success("Booking confirmed! We'll get in touch with you.");
      setShowModal(false);
      setFormData({ name: "", email: "", message: "", date: "", phone: "" });
      setShowCalendar(false);
      setShowPhone(false);
    } catch {
      toast.error("Failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { y: -16, scale: 1.05, boxShadow: "0 25px 50px rgba(16, 101, 192, 0.2)", transition: { duration: 0.3 } },
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#1065c0]">Services</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver digital excellence through custom software solutions that grow with your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants} whileHover="hover" className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1065c0] to-[#0e55a0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1065c0] transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#1065c0] rounded-full mr-2"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
                {/* <Link to={service.link} className="inline-flex items-center text-[#1065c0] font-semibold hover:text-[#0e55a0] transition-colors">
                  Explore Service
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link> */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1065c0]/5 to-[#0e55a0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Projects */}
               {/* Featured Projects */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Projects That <span className="text-[#1065c0]">Deliver Results</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
              {/* Project 1: BlueWave */}
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={bluewave}
                    alt="BlueWave Travel Platform"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <img
                    src={bluewave2}
                    alt="BlueWave Dashboard"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">BlueWave – Smart Travel Agency Platform</h3>
                  <p className="text-sm text-gray-600 mb-3">Travel Tech Solutions Ltd</p>
                  <p className="text-[#1065c0] font-semibold text-sm leading-relaxed">
                    A full-stack travel booking system with real-time flight, hotel, and tour management. Enabled 300+ agents to process bookings 4× faster with automated invoicing and CRM.
                  </p>
                  {/* <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">React + Node.js</span>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">Stripe & Paystack</span>
                  </div> */}
                </div>
              </motion.div>

              {/* Project 2: Weeltin */}
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={weeltin}
                    alt="Weeltin Auto Marketplace"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <img
                    src={weeltin2}
                    alt="Weeltin Client Dashboard"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Weeltin – UK Auto Specialist Network</h3>
                  <p className="text-sm text-gray-600 mb-3">AutoConnect UK</p>
                  <p className="text-[#1065c0] font-semibold text-sm leading-relaxed">
                    A B2B marketplace connecting vehicle owners with verified mechanics across the UK(United Kingdom). Features smart matching, live quotes, and secure payments — now serving 12,000+ users.
                  </p>
                  {/* <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">Next.js + Supabase</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full">Google Maps API</span>
                  </div> */}
                </div>
              </motion.div>

              {/* Project 3: Football Academy */}
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={academy}
                    alt="Football Academy Website"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <img
                    src={football2}
                    alt="Academy Training Dashboard"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Elite Football Academy – Player Management</h3>
                  <p className="text-sm text-gray-600 mb-3">ProKick Academy</p>
                  <p className="text-[#1065c0] font-semibold text-sm leading-relaxed">
                    A modern academy portal for scouting, training schedules, performance tracking, and parent communication. Reduced admin time by 70% and increased enrollment by 42%.
                  </p>
                  {/* <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">React + Firebase</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full">Video Analysis</span>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* CTA */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="text-center mt-20">
            <p className="text-gray-700 mb-6 text-lg">
              Ready to build something extraordinary together?
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block bg-[#1065c0] text-[#fff] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0e55a0] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* MODAL - FULLY OPAQUE, SHORT, STEP-BY-STEP */}
      {showModal && (
        <div className="fixed inset-0 bg-[#fff]/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
          >
            <button
              onClick={() => {
                setShowModal(false);
                setShowCalendar(false);
                setShowPhone(false);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-5">
              <FaCalendarAlt className="text-4xl text-[#1065c0] mx-auto mb-2" />
              <h3 className="text-xl font-bold text-gray-900">Book a Free Consultation</h3>
            </div>

            {/* Step 1: Name & Email */}
            {!showCalendar && (
              <form onSubmit={(e) => { e.preventDefault(); setShowCalendar(true); }} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1065c0]"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1065c0]"
                  required
                />
                <button type="submit" className="w-full bg-[#1065c0] text-[#fff] py-3 rounded-full font-semibold hover:bg-[#0e55a0] transition">
                  Next: Schedule with Calendar
                </button>
              </form>
            )}

            {/* Step 2: Calendar */}
            {showCalendar && !showPhone && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 text-center">Select your preferred date & time</p>
                <input
                  type="datetime-local"
                  value={formData.date}
                  onChange={(e) => {
                    setFormData({ ...formData, date: e.target.value });
                    setShowPhone(true);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1065c0]"
                  min={new Date().toISOString().slice(0, 16)}
                  required
                />
                  <button
                  onClick={() => {
                    if (!formData.date) {
                      toast.error("Please select a date and time");
                      return;
                    }
                    setShowPhone(true);
                  }}
                  className="w-full bg-[#1065c0] text-white py-3 rounded-full font-semibold hover:bg-[#0e55a0] transition"
                >
                  Next: Enter Phone
                </button>
              </div>
            )}

            {/* Step 3: Phone + Submit */}
            {showPhone && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="tel"
                  placeholder="Your Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1065c0]"
                  required
                />
                <textarea
                  placeholder="Quick note about your project (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={2}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1065c0] resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1065c0] text-[#fff]  py-3 rounded-full font-semibold hover:bg-[#0e55a0] transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;


























