
// // Hero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { color, motion } from 'framer-motion';
// import im from '../assets/picture1.jpeg'; 
// import im2 from '../assets/picture2.jpeg'; 
// import im3 from '../assets/picture3.jpeg'; 
// import im4 from '../assets/picture4.jpeg'; 

// // Animation variants (unchanged)
// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     color:"white",
//     y: 0,
//     transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
//   },
// };

// const childVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const buttonVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
//   hover: { scale: 1.05, transition: { duration: 0.3 } },
//   tap: { scale: 0.95 },
// };

// const graphicVariants = {
//   float: {
//     y: [-10, 10],
//     transition: {
//       y: { repeat: Infinity, repeatType: 'reverse', duration: 2, ease: 'easeInOut' },
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <section className="relative text-white py-20 md:py-32 overflow-hidden">
//       {/* 1. Background Image (UNDERNEATH) */}
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           backgroundImage: `url(${im})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           filter: 'brightness(2.9) contrast(1.1)', // Optional: make image subtle                                                                                                          
//         }}
//       />

//       {/* 2. Gradient Overlay (ON TOP of image) */}
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background: 'linear-gradient(to right, #1065c0, #0e55a0)',
//           opacity: 0.9, // Controls how strong the gradient is
//         }}
//       />

//       {/* 3. Light dark overlay for text readability */}
//       <div className="absolute inset-0 bg-black/20 -z-10"></div>

//       {/* Decorative blurred circles */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>

//       {/* Main Content */}
//       <div className="max-w-7xl text-white mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Text Content */}
//           <motion.div
//             className="space-y-6 text-center md:text-left"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
          
//             <motion.h1
//               className="text-4xl sm:text-5xl text-white md:text-6xl font-bold leading-tight"
//               variants={childVariants}
//             >
//               Innovate with CodeQuor
//             </motion.h1>

//             <motion.p
//               className="text-lg sm:text-xl text-gray-100 max-w-lg mx-auto md:mx-0"
//               variants={childVariants}
//             >
//               Transform your business with our expert software consultancy
//               services. Build cutting-edge solutions tailored to your needs.
//             </motion.p>

//             <motion.div variants={childVariants}>
//               <Link
//                 to="/consult"
//                 as={motion(Link)}
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className="inline-block bg-white text-[#1065c0] px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
//               >
//                 Get Started
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Animated Graphic */}
                
//           <motion.div
//             className="hidden md:flex justify-center items-center"
//             variants={graphicVariants}
//             animate="float"
//           >
//             <div className="relative">
//               <img
//                 src={im2}
//                 alt="CodeQuor Solutions"
//                 className="w-full max-w-md h-auto rounded-full border-4 border-[#fff] /30 shadow-2xl object-cover"
//                 style={{ 
//                   width: '320px', 
//                   height: '320px', 
//                   objectFit: 'cover' 
//                 }}
//               />
//               {/* Subtle glow behind */}
//               <div className="absolute inset-0 rounded-full bg-white/10 blur-xl -z-10 scale-110"></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// // Hero.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import im1 from '../assets/picture1.jpeg';
// import im2 from '../assets/picture2.jpeg';
// import im3 from '../assets/picture3.jpeg';
// import im4 from '../assets/picture4.jpeg';

// const images = [im1, im2, im3, im4];

// const words = ["Innovate", "Transform", "Accelerate"];
// const wordColors = ["text-cyan-400", "text-purple-400", "text-emerald-400"];

// const BackgroundSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute inset-0 -z-20">
//       {images.map((img, index) => (
//         <motion.div
//           key={index}
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${img})` }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: currentIndex === index ? 1 : 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         />
//       ))}

//       {/* Strong Dark + Blue Overlay */}
//       <div className="absolute inset-0 bg-black/65" />
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-black/80 to-purple-950/60" />
//     </div>
//   );
// };

// // Rotating Words Component
// const RotatingWords = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.span
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.6 }}
//       className={`font-extrabold text-6xl sm:text-7xl lg:text-8xl ${wordColors[index]} drop-shadow-2xl`}
//     >
//       {words[index]}
//     </motion.span>
//   );
// };

// const floatVariants = {
//   float: {
//     y: [-15, 15],
//     rotate: [-4, 4],
//     transition: {
//       y: { repeat: Infinity, repeatType: "reverse", duration: 7 },
//       rotate: { repeat: Infinity, repeatType: "reverse", duration: 10 },
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
//       {/* Background Slider */}
//       <BackgroundSlider />

//       {/* Subtle Floating Particles */}
//       <div className="absolute inset-0 -z-10">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/30 rounded-full"
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0, 0.6, 0],
//             }}
//             transition={{
//               duration: 12 + i,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Glowing Orbs */}
//       <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-center lg:text-left space-y-8"
//           >
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
//               <span className="text-white drop-shadow-lg">We Help You</span>
//               <br />
//               <RotatingWords />
//               <br />
//               <span className="text-white text-5xl sm:text-6xl lg:text-7xl drop-shadow-2xl">
//                 Your Future
//               </span>
//             </h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
//             >
//               Expert software consultancy that turns bold ideas into scalable, secure, 
//               and future-ready digital solutions.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1 }}
//               className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6"
//             >
//               <Link to="/consult">
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-9 py-5 bg-white text-blue-950 font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-500/60 transition-all duration-300"
//                 >
//                   Start Your Project
//                 </motion.button>
//               </Link>

//               <Link to="/services">
//                 <motion.button
//                   whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-9 py-5 border-2 border-white/60 text-white font-semibold text-lg rounded-full backdrop-blur-md hover:bg-white/10 transition-all"
//                 >
//                   Explore Services
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Floating Image */}
//           <motion.div
//             variants={floatVariants}
//             animate="float"
//             className="flex justify-center lg:justify-end"
//           >
//             <div className="relative group">
//               <img
//                 src={im2}
//                 alt="CodeQuor Excellence"
//                 className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl object-cover shadow-2xl border-8 border-white/10"
//               />
//               {/* Dynamic Glow */}
//               <motion.div
//                 className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-emerald-500/40 blur-3xl -z-10"
//                 animate={{ 
//                   scale: [1, 1.2, 1],
//                   rotate: [0, 10, 0]
//                 }}
//                 transition={{ duration: 10, repeat: Infinity }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

























// Hero.jsx — FINAL PERFECTION (Copy & Paste)
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import im1 from '../assets/picture1.jpeg';
import im2 from '../assets/picture2.jpeg';
import im3 from '../assets/picture3.jpeg';
import im4 from '../assets/picture2.jpeg';

const images = [im1, im2, im3, im4];

// Glowing Cursor
const GlowingCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 600, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 600, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
      style={{ x: springX, y: springY }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 blur-3xl opacity-70" />
      <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white blur-md text-white" />
    </motion.div>
  );
};

// Darker, Cinematic Background
const BackgroundSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      ))}

      {/* MUCH DARKER OVERLAY — Text now POPS */}
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/95" />
    </div>
  );
};

// 3D Floating Card with Pulse & Glow
const TiltCard = ({ children, delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 1, duration: 1.2, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.12, y: -25 }}
      className="relative group"
    >
      {children}
      {/* Pulsing Glow */}
      <div className="absolute -inset-8 text-white bg-gradient-to-r from-orange-600/50 via-red-600/50 to-pink-600/50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 rounded-3xl animate-pulse" />
    </motion.div>
  );
};

const GlassCard = ({ icon, title, subtitle, delay }) => (
  <TiltCard delay={delay}>
    <div className="p-10 bg-white/8 backdrop-blur-3xl border border-white/30 rounded-3xl shadow-2xl">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-8 shadow-2xl">
        <img src={icon} alt="" className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{subtitle}</p>
    </div>
  </TiltCard>
);

// Smooth CountUp (No Errors)
const CountUp = ({ end, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const timer = setInterval(() => {
        start += end / 80;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  return (
    <>
      <GlowingCursor />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundSlider />

        {/* Floating Particles */}
        <div className="absolute inset-0 -z-10">
          {[...Array(35)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              animate={{ y: [-300, 1300], opacity: [0, 0.8, 0] }}
              transition={{
                duration: 20 + i * 0.6,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.15,
              }}
              style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text — Clean, Elegant, Readable */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              visible= {{color: "white"}}
              transition={{ duration: 1.2 }}
              className="text-center lg:text-left space-y-8"
            >
              <h1 className="text-3xl text-[#fff]  sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                Transforming
                <br />
                Businesses
                <br />
                Through
                <br />
               Digital Solution
              </h1>

           <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
     visible= {{color: "white"}}
  className="text-lg lg:text-xl text-[#fff]  font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
>
  We deliver cutting-edge technology services and products to clients 
  across multiple countries. Accelerate your growth, improve efficiency, 
  and navigate the digital world with confidence.
</motion.p>

              {/* Only ONE Button — Get In Touch */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="pt-6"
              >
                <Link to="/consult">
                  <motion.button
                    whileHover={{ scale: 1.08, boxShadow: "0 0 70px rgba(251,146,60,0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-14 py-6 text-[#fff]  bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-orange-500/70 transition-all duration-300"
                  >
                    Get In Touch →
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 text-[#fff]  gap-12 max-w-2xl mx-auto">
                <div className="space-y-16">
                  <GlassCard
                    icon="https://img.icons8.com/ios-filled/100/ffffff/shield.png"
                    title="Secure"
                    subtitle="Enterprise-grade security"
                    delay={0}
                  />
                  <GlassCard
                    icon="https://img.icons8.com/ios-filled/100/ffffff/globe.png"
                    title="Global"
                    subtitle="Worldwide presence"
                    delay={0.4}
                  />
                </div>
                <div className="space-y-16 pt-32">
                  <GlassCard
                    icon="https://img.icons8.com/ios-filled/100/ffffff/lightning-bolt.png"
                    title="Fast"
                    subtitle="Lightning-speed delivery"
                    delay={0.8}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats — Pure White Text */}
          {/* <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-20 text-white"
          >
            <div className="text-center">
              <div className="text-5xl font-black text-orange-400 drop-shadow-2xl">
                <CountUp end={110} suffix="+" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-400 drop-shadow-2xl">
                <CountUp end={25} suffix="+" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-400 drop-shadow-2xl">
                <CountUp end={500} suffix="+" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-400 drop-shadow-2xl">
                <CountUp end={30} suffix="+" />
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;