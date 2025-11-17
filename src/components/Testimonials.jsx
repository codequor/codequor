// TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow',
      content: 'CodeQuor transformed our legacy system into a modern, scalable platform. Their expertise is unmatched.',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateX',
      content: 'Professional, fast, and innovative. They delivered beyond expectations on time and within budget.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StartUpHub',
      content: 'The best development partner we’ve ever had. Their attention to detail and communication is exceptional.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-[#1065c0]">Love</span>
          </h2>
          <p className="text-lg text-gray-600">Don’t just take our word for it.</p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-5xl text-[#1065c0]/20 mx-auto mb-6" />

              {/* Content */}
              <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 italic">
                "{testimonials[index].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>

              {/* Avatar + Name */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#1065c0]/20 mb-4"
                />
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-gray-600">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'bg-[#1065c0] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;