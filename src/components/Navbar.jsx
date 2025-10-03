import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = ["Home", "Projects", "Skills"];

  return (
    <motion.div
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex items-center gap-2 p-2 bg-black/20 backdrop-blur-lg rounded-full border border-white/10">
        {/* Regular Links with Hover Effect */}
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white text-sm font-medium px-4 py-2 rounded-full border-2 border-transparent hover:border-white transition-colors duration-300"
          >
            {link}
          </a>
        ))}

        {/* Animated Contact Button */}
        <motion.a
          href="#contact"
          className="relative flex items-center justify-center rounded-full bg-white overflow-hidden px-5 py-2 border-2 border-white"
          style={{ width: 130 }} // Wider for "Contact Me"
          whileHover="hover"
          initial="rest"
        >
          {/* Black background that slides in */}
          <motion.div
            className="absolute inset-0 bg-black"
            variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />

          {/* Text that changes color and animates */}
          <motion.span
            className="relative whitespace-nowrap"
            variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Contact Me
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
}