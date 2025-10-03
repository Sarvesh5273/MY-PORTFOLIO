import { motion } from "framer-motion";
// Make sure you have the 'earth.png' file in your 'src/assets' folder
import earthImage from '../assets/earth.png';

export default function MainSite() {
  return (
    //  Added overflow-hidden to correctly clip the planet that is off-screen
    <div
      id="home"
      className="relative min-h-screen flex items-center p-8 overflow-hidden"
    >
      {/* Earth Image - Positioned absolutely to mirror the Mars image */}
      <motion.img
          src={earthImage}
          alt="The Earth"
          //  This class positions the Earth like Mars, but on the right
          className="absolute top-[5%] right-[-20%] w-[70%] max-w-4xl opacity-40 z-0"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          }}
      />

      {/* This container ensures the text stays on the left */}
      <div className="flex w-full max-w-7xl mx-auto">
        {/* Hero Text Content (Left Side) */}
        <motion.div
          className="relative z-10 text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Hi, I'm Sarvesh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A passionate developer building modern web experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}