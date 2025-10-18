import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Removed unused FaTwitter

export default function Footer() {
  return (
    <motion.footer
      className="relative z-10 bg-black py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {/* GitHub Link */}
          <a
            href="https://github.com/Sarvesh5273"
            className="text-gray-400 hover:text-white"
            target="_blank" // <-- FIX: Opens in new tab
            rel="noopener noreferrer" // <-- FIX: Added for security
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>

          {/* NEW: LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/sarvesh-bijawe-a0020138b/"
            className="text-gray-400 hover:text-white"
            target="_blank" // <-- Opens in new tab
            rel="noopener noreferrer" // <-- Added for security
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; A submission for the DevOne Hack.
        </p>
      </div>
    </motion.footer>
  );
}