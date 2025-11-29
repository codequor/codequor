// WhyChooseUs.jsx — PURE ELEGANCE + HYPER-ATTRACTIVE ANIMATIONS
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, Brain, Trophy, Flame,} from 'lucide-react';
import { Link } from 'react-router-dom';
const reasons = [
  { icon: <Zap />, title: "We Don’t Compete — We Dominate", desc: "While others play the game, we rewrite the rules." },
  { icon: <Shield />, title: "Obsession With Results", desc: "Every decision is engineered for measurable ROI." },
  { icon: <Rocket />, title: "Speed That Breaks Physics", desc: "2-week MVPs. 30-day launches. 90-day transformations." },
  { icon: <Brain />, title: "We Think 5 Moves Ahead", desc: "Strategy isn’t a slide deck. It’s a weapon." },
  { icon: <Trophy />, title: "Built 8-Figure Exits", desc: "Our team has launched, scaled, and sold multiple 8-figure companies." },
  { icon: <Flame />, title: "We’re Addicted to Winning", desc: "Your success is our obsession." },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Deep Blue Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" />
        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#1065c0]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 100, 0], x: [0, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-32 w-80 h-80 bg-[#1065c0]/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title — Subtle & Powerful */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-2xl md:text-2xl lg:text-2xl font-black text-white leading-tight">
            WHY <span className="text-[#1065c0] drop-shadow-2xl">CHOOSE</span> US?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-gray-300 mt-8 font-light tracking-wider max-w-3xl mx-auto"
          >
            Because excellence isn’t a goal. It’s our minimum standard.
          </motion.p>
        </motion.div>

        {/* ULTRA BEAUTIFUL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} />
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-32"
        >
         <Link to="/consult">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#1065c0] hover:bg-[#0d55a0] text-[#fff] text-xl font-semibold rounded-full shadow-2xl transition-all duration-300 border border-white/10"
          >
            Start Your Transformation →
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// GOD-TIER CARD — Floating, Breathing, Glowing
const ReasonCard = ({ reason, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120, rotateY: -60 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.18,
        duration: 1.4,
        type: "spring",
        stiffness: 80,
        damping: 18
      }}
      whileHover={{ 
        y: -25,
        scale: 1.06,
        rotateY: 10
      }}
      animate={{
        y: [0, -12, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative p-10 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        {/* Subtle Inner Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000"
          style={{
            background: "radial-gradient(circle at 50% 50%, #1065c0 0%, transparent 70%)"
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#1065c0] to-blue-900 rounded-full flex items-center justify-center shadow-2xl border border-white/20"
        >
          <div className="text-white">{reason.icon}</div>
        </motion.div>

        <h3 className="text-2xl font-bold text-white text-center mb-4 leading-tight">
          {reason.title}
        </h3>
        <p className="text-gray-300 text-center text-base leading-relaxed">
          {reason.desc}
        </p>

        {/* Outer Glow Ring */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#1065c0]/60 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 rounded-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;