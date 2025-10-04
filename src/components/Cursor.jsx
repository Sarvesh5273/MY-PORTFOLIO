import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8, // Center the dot
      y: mousePosition.y - 8,
      backgroundColor: "#ffffff",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full z-[9999] pointer-events-none"
      variants={variants}
      animate="default"
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}