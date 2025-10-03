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
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <motion.img
      className="fixed top-0 left-0 w-12 h-12 z-[9999] pointer-events-none transform -rotate-45"
      src="/cursor.png"
      alt="Rocket cursor"
      variants={variants}
      animate="default"
      // Changed: Adjusted stiffness and damping for a smoother feel
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    />
  );
}