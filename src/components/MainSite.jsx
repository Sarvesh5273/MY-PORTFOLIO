import { motion } from "framer-motion";

// The import statement for earthImage has been removed

export default function MainSite() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center p-8 overflow-hidden"
    >
      <motion.img
          src="/earth.png" // Changed: Use direct path from public folder
          alt="The Earth"
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
      <div className="flex w-full max-w-7xl mx-auto">
        <motion.div
          className="relative z-10 text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Hi, I'm Sarvesh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A passionate developer building modern web experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="relative whitespace-nowrap font-bold"
                variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                View My Work
              </motion.span>
            </motion.a>
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