import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = ["Projects", "Skills"];

  const linkVariants = {
    initial: {
      borderColor: "rgba(255, 255, 255, 0)", // Transparent border
      scale: 1,
    },
    hover: {
      borderColor: "rgba(255, 255, 255, 1)", // Solid white border
      scale: 1.05,
    },
  };

  return (
    <motion.div
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex items-center gap-2 p-2 bg-black/20 backdrop-blur-lg rounded-full border border-white/10">
        
        {/* Home link with Framer Motion */}
        <motion.a
          href="#home"
          className="text-white text-sm font-medium px-4 py-2 rounded-full border-2"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          Home
        </motion.a>

        {/* Other links with Framer Motion */}
        {navLinks.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white text-sm font-medium px-4 py-2 rounded-full border-2"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {link}
          </motion.a>
        ))}

        {/* Animated Contact Button */}
        <motion.a
          href="#contact"
          className="relative flex items-center justify-center rounded-full bg-white overflow-hidden px-5 py-2 border-2 border-white"
          style={{ width: 130 }}
          whileHover="hover"
          initial="rest"
        >
          <motion.div
            className="absolute inset-0 bg-black"
            variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.span
            className="relative whitespace-nowrap"
            variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Contact Me
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
}