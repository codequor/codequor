// src/components/ConsultQuote.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "axios";

const ConsultQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const services = [
    "Custom Web App",
    "Mobile App",
    "Website Design",
    "API Integration",
    "Digital Marketing",
    "Consultancy"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/quote`, formData);
      toast.success("Quote request sent! We'll contact you in 24hrs.");
      setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    } catch {
      toast.error("Failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20  text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Get Your <span className="text-yellow-300">Free Quote</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg mb-12 opacity-90"
        >
          Tell us about your project. Get a detailed quote in 24 hours.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-xl placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-xl placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-xl placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            >
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s} value={s} className="text-gray-900">{s}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Budget Range (e.g. ₦500k - ₦2M)"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-xl placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="md:col-span-2 w-full p-4 bg-white/20 border border-white/30 rounded-xl placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-yellow-400 text-[#1065c0] py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 shadow-lg"
          >
            {loading ? "Sending..." : (
              <>
                Request Quote <FaPaperPlane />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ConsultQuote;