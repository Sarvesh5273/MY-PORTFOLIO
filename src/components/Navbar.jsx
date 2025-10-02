import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = ["Home", "Projects", "Skills", "Contact"];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 py-3 px-6 bg-white/10 backdrop-blur-lg rounded-full border border-white/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}