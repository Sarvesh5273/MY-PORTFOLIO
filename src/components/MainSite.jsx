import { motion } from "framer-motion";

export default function MainSite() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Planet Image */}
      <motion.img
        src="https://www.pngall.com/wp-content/uploads/12/Planet-PNG-Images-HD.png"
        alt="A glowing planet"
        className="absolute bottom-[-20%] right-[-15%] w-3/4 max-w-4xl opacity-50"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Hero Text Content */}
      <motion.div
        className="relative z-10 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Hi, I'm Sarvesh
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          A passionate developer building modern web experiences.
        </p>
        <a
          href="#projects"
          className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors"
        >
          View My Work
        </a>
      </motion.div>
    </div>
  );
}