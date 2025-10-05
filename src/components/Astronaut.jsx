import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Astronaut() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollRotation, setScrollRotation] = useState(0);
  const [targetPos, setTargetPos] = useState(null);

  const { scrollYProgress } = useScroll();

  // Find the HTML5 box and store its position
  useEffect(() => {
    const calculatePos = () => {
      const elem = document.getElementById('html5-box');
      if (elem) {
        const rect = elem.getBoundingClientRect();
        // Target the top-left corner, with a slight offset
        setTargetPos({
          x: rect.left + window.scrollX - 40,
          y: rect.top + window.scrollY - 40
        });
      }
    };
    // Calculate position after a short delay to ensure the page has rendered
    setTimeout(calculatePos, 100);
    window.addEventListener('resize', calculatePos);
    return () => window.removeEventListener('resize', calculatePos);
  }, []);

  // Define the path with the dynamic target position
  const pathX = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.7, 1],
    ["20%", "80%", targetPos ? `${targetPos.x}px` : "30%", "80%", "50%"]
  );
  
  const pathY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.7, 1],
    ["-10%", "50vh", targetPos ? `${targetPos.y}px` : "45vh", "65vh", "100vh"]
  );

  // --- All other effects for mouse tracking and scroll direction remain the same ---

  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setScrollRotation(window.scrollY > lastScrollY ? 80 : 0);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.matchMedia("(min-width: 768px)").matches : false
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (!isLargeScreen) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{ x: pathX, y: pathY }}
    >
      <motion.img
        src="/aestronaut.gif"
        alt="Floating astronaut"
        className="w-24 h-24 md:w-32 md:h-32"
        animate={{
          x: mousePosition.x / 40,
          y: mousePosition.y / 40,
          rotate: scrollRotation,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      />
    </motion.div>
  );
}