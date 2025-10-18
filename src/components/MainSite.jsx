import { motion } from "framer-motion";
import React, { Suspense, useState, useEffect } from "react"; // Import useState and useEffect
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'; 

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function MainSite() {
  // --- START: Add this logic ---
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.matchMedia("(min-width: 768px)").matches : false
  );
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  // --- END: Add this logic ---

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center p-8 pt-24 overflow-hidden"
    >
      {/* --- SPLINE OBJECT (MODIFIED) --- */}
      <motion.div
        className="absolute top-0 -right-[50%] w-[150%] h-full 
                   md:w-[80%] md:-right-[15%] z-0 globe-container opacity-50 md:opacity-100"
      >
        <Suspense fallback={<div>Loading...</div>}>
          {/* Only render Spline on large screens */}
          {isLargeScreen ? (
            <Spline scene="https://prod.spline.design/hBa1HietV6xNSj2q/scene.splinecode" />
          ) : (
            // Mobile fallback: Show a static image instead
            <img src="/mars.png" alt="Planet" className="w-full h-full object-contain opacity-50" />
          )}
        </Suspense>
      </motion.div>

      {/* --- TEXT & CTA CONTENT --- */}
      <div className="flex w-full max-w-7xl mx-auto">
        <motion.div
          className="relative z-10 text-center w-full md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* ... (rest of the component is the same) ... */}
          
          {/* 1. Typewriter */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-white" style={{ minHeight: '90px' }}>
            <Typewriter
              words={[
                "Hi, I'm Sarvesh",
                "I'm a 2nd year CS (AI) Student at VIT Pune",
                "I build modern web experiences."
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>

          {/* 2. CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center sm:items-stretch">
            <motion.a
              href="#projects"
              className="relative flex items-center justify-center rounded-full bg-white overflow-hidden px-5 py-2 border-2 border-white"
              style={{ width: 150 }} 
              whileHover="hover"
              initial="rest"
            >
              <motion.div
                className="absolute inset-0 bg-black"
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }} 
              />
              <motion.span
                className="relative whitespace-nowrap font-bold"
                variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
                transition={{ duration: 0.4, ease: "easeInOut" }} 
              >
                View My Work
              </motion.span>
            </motion.a> 

            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
          </div>

          {/* 3. Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <motion.a
              href="https://github.com/Sarvesh5273"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sarvesh-bijawe-a0020138b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={30} />
            </motion.a>
          </div>

        </motion.div>
      </div>

      {/* 4. Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }} // Bouncing animation
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a href="#projects" aria-label="Scroll down to projects">
          <FaArrowDown className="text-white text-2xl" />
        </a>
      </motion.div>
    </div>
  );
}