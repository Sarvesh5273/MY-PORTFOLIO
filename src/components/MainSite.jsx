import { motion } from "framer-motion";

export default function MainSite() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }} // Fade in over 1.2 seconds
    >
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm Sarvesh
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          A passionate developer building modern web experiences.
        </p>
        <a
          href="#projects"
          className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors"
        >
          View My Work
        </a>
      </div>
    </motion.div>
  );
}