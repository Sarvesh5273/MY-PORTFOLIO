import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaGitAlt />, name: "Git" },
];

export default function Skills() {
  // Create a ref to track the scroll container
  const targetRef = useRef(null);
  
  // useScroll will track the scroll progress within the targetRef element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Start tracking when the top of the element hits the bottom of the viewport
  });

  // Transform the scroll progress (0 to 1) into a scale value (0.5 -> 1 -> 0.5)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.5]);

  return (
    <div ref={targetRef} id="skills" className="relative min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden">
      
      <motion.div
        className="absolute top-[5%] right-[-20%] w-[70%] max-w-4xl h-auto aspect-square z-0"
        style={{ scale }} // Apply the dynamic scale here
      >
        <Spline scene="https://prod.spline.design/LwLNopv4K9vIckN6/scene.splinecode" />
      </motion.div>
      
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            id={skill.name === "HTML5" ? "html5-box" : undefined}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } }}
          >
            <div className="text-6xl text-white mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold text-white">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}