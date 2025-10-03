import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
// 1. Import the local saturn image
import saturnImage from '../assets/saturn.png';

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaGitAlt />, name: "Git" },
];

export default function Skills() {
  return (
    // Added overflow-hidden to clip the planet
    <div id="skills" className="relative min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden">
        {/* New Planet Image */}
        <motion.img
            src={saturnImage}
            alt="A planet with rings"
            // This class positions the planet on the right, mirroring the Mars image
            className="absolute top-[5%] right-[-20%] w-[70%] max-w-4xl opacity-30 z-0"
            animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        />
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-6xl text-white mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold text-white">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}