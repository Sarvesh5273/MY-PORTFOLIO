import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react"; // Import useEffect and useRef
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navLinks = ["Projects", "Skills"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- START: Add Refs ---
  const menuRef = useRef(null); // Ref for the mobile menu
  const buttonRef = useRef(null); // Ref for the hamburger button
  // --- END: Add Refs ---

  // --- START: Add Click Outside Logic ---
  useEffect(() => {
    // Only add listener if menu is open
    if (!isMobileMenuOpen) return;

    function handleClickOutside(event) {
      // Check if click is outside the menu AND outside the button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Dependency array: only re-run if isMobileMenuOpen changes
  // --- END: Add Click Outside Logic ---


  const linkVariants = {
    initial: {
      borderColor: "rgba(255, 255, 255, 0)",
      scale: 1,
    },
    hover: {
      borderColor: "rgba(255, 255, 255, 1)",
      scale: 0.9,
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <motion.div
        className="fixed top-6 left-0 right-0 z-50 flex justify-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
            <div className="hidden md:flex items-center gap-2 p-2 bg-black/20 backdrop-blur-lg rounded-full border-2 border-gray-800">          
            <motion.a href="#home"
            className="text-white text-sm font-medium px-4 py-2 rounded-full border-2"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </motion.a>

          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white text-sm font-medium px-4 py-2 rounded-full border-2"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="relative flex items-center justify-center rounded-full bg-white overflow-hidden px-5 py-2 border-2 border-white"
            style={{ width: 130 }}
            whileHover="hover"
            initial="rest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute inset-0 bg-black"
              variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.span
              className="relative whitespace-nowrap"
              variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Contact Me
            </motion.span>
          </motion.a>
        </div>
      </motion.div>

      {/* --- MOBILE MENU BUTTON --- */}
      <motion.button
        ref={buttonRef} // Add ref to the button
        className="fixed top-6 right-6 z-[60] text-white md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={menuRef} // Add ref to the menu container
            className="fixed inset-x-0 top-0 z-50 p-6 pt-24 bg-black shadow-lg md:hidden" // Made bg solid black and removed blur
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.a
                href="#home"
                className="text-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </motion.a>
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="text-lg font-medium rounded-full bg-white text-black px-6 py-2" // Removed mt-4
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}