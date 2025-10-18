import { motion, useMotionValue, useTransform } from "framer-motion";

// ... projects array ...
const projects = [
  { 
    title: "SkillNova", 
    description: "[In Progress] An AI-powered platform that personalizes learning for every student, helping you master skills, build a standout resume, and land your dream job at your own pace.", 
    link: "https://github.com/Sarvesh5273/SkillNova.git",
    liveLink: "#" 
  },
  { 
    title: "AI Tools Manager", 
    description: "Your all-in-one dashboard to find, manage, and optimize AI tools for every workflow.", 
    link: "https://github.com/Sarvesh5273/AI_Tools_Manager.git",
    liveLink: "#"
  },
];


export default function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const moveX = useTransform(x, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [30, -30]);
  const moveY = useTransform(y, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [30, -30]);

  const handleMouseMove = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  return (
    <div id="projects" className="relative min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden" onMouseMove={handleMouseMove}>
      <motion.img
        src="/mars.png"
        alt="A red planet"
        className="absolute top-[5%] left-[-20%] w-[70%] max-w-4xl opacity-40"
        style={{ x: moveX, y: moveY }}
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      />
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl z-10 w-full justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            // --- UPDATED TRANSITION ---
            transition={{ 
              duration: 0.5, // whileInView
              delay: index * 0.2, // whileInView
              // whileHover: Changed duration to 0.3s and ease to easeInOut
              scale: { type: "tween", duration: 0.3, ease: "easeInOut" },
              y: { type: "tween", duration: 0.3, ease: "easeInOut" }
            }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a 
                href={project.link} 
                className="text-white font-bold hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code →
              </a>
              {project.liveLink && project.liveLink !== "#" && (
                <a 
                  href={project.liveLink} 
                  className="text-white font-bold hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Live →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}