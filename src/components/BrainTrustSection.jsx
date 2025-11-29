// BrainTrustSection.jsx — GOD MODE ACTIVATED
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useInView as useInViewObserver } from 'react-intersection-observer';

// Team Members (Add your real people)
const team = [
  { name: "Alexandra Voss", role: "Chief Strategy Alchemist", superpower: "Turns chaos into $10M systems", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800" },
  { name: "Marcus Chen", role: "Code Sorcerer", superpower: "Writes code that makes investors cry", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
  { name: "Sofia Nkosi", role: "Growth Warlord", superpower: "Grew 7 startups to 8-figures", img: "https://images.unsplash.com/photo-1580489940927-6d6b8b0c5c7c?w=800" },
  { name: "Diego Rivera", role: "Design Demigod", superpower: "Makes pixels orgasm", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" },
];

const philosophies = [
  { quote: "We don’t do retainers. We do revolutions.", author: "— The Anti-Agency Manifesto" },
  { quote: "Good agencies deliver projects. Great ones deliver unfair advantages.", author: "— Our Religion" },
  { quote: "Your competition is already scared. Let’s make them terrified.", author: "— Our Promise" },
];

const BrainTrustSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden py-32">
      {/* Epic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-red-900/20" />
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-20"
        />
      </div>

      {/* How We Think — Cinematic Title */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none"
        >
          HOW WE <span className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 bg-clip-text text-transparent">THINK</span>
        </motion.h2>

        <div className="mt-20 space-y-16">
          {philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.4, duration: 1.2, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  textShadow: [
                    "0 0 40px rgba(251,146,60,0.8)",
                    "0 0 80px rgba(251,146,60,1)",
                    "0 0 40px rgba(251,146,60,0.8)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-4xl md:text-6xl font-bold text-white italic"
              >
                "{item.quote}"
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.4 + 0.8 }}
                className="text-xl text-orange-400 mt-6 font-light tracking-widest"
              >
                {item.author}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OUR BRAIN TRUST — Dramatic Reveal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="text-center text-6xl md:text-8xl font-black text-white mb-20"
        >
          MEET YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">BRAIN TRUST</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-32"
      >
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 100px rgba(251,146,60,0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="px-16 py-8 bg-gradient-to-r from-orange-500 to-red-600 text-white text-2xl font-bold rounded-full shadow-2xl"
        >
          Let This Team Destroy Your Competition →
        </motion.button>
      </motion.div>
    </section>
  );
};

// Individual Team Card — FLIPS WITH FIRE
const TeamCard = ({ member, index }) => {
  const [ref, inView] = useInViewObserver({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200, rotateY: -180 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ delay: index * 0.3, duration: 1.2, type: "spring", stiffness: 80 }}
      whileHover={{ scale: 1.1, rotateY: 15 }}
      className="relative group cursor-pointer"
    >
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-96"
      >
        {/* Front — Photo */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 p-8 text-white">
            <h3 className="text-3xl font-black">{member.name}</h3>
            <p className="text-orange-400 text-lg">{member.role}</p>
          </div>
        </div>

        {/* Back — Superpower */}
        <div className="absolute inset-0 backface-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-black to-red-900 flex items-center justify-center p-10 text-center" style={{ transform: "rotateY(180deg)" }}>
          <div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-6"
            >
              
            </motion.div>
            <p className="text-2xl font-bold text-white leading-tight">
              "{member.superpower}"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Glowing Border */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default BrainTrustSection;