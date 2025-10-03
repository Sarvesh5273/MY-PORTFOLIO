import { motion } from "framer-motion";

const projects = [
  { title: "Project One", description: "A brief description...", link: "#", liveLink: "#" },
  { title: "Project Two", description: "A brief description...", link: "#", liveLink: "#" },
  { title: "Project Three", description: "A brief description...", link: "#", liveLink: "#" }
];

export default function Projects() {
  return (
    <div id="projects" className="relative min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden">
      <motion.img
        src="/mars.png" // Changed: Use direct path from public folder
        alt="A red planet"
        className="absolute top-[5%] left-[-20%] w-[70%] max-w-4xl opacity-40"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href={project.link} className="text-white font-bold hover:underline">
                View Code →
              </a>
              <a href={project.liveLink} className="text-white font-bold hover:underline">
                View Live →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}