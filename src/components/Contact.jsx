import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="relative min-h-screen flex flex-col justify-center items-center p-8 pt-24 overflow-hidden">
        <motion.img
            src="/contact-planet.png"
            alt="A purple planet"
            className="absolute top-[5%] left-[-20%] w-[70%] max-w-4xl opacity-40 z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // Removed viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="w-full max-w-lg z-10 bg-white/5 backdrop-blur-md rounded-2xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // Removed viewport={{ once: true }}
      >
        <form className="w-full">
          {/* Input fields remain the same */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-white transition-colors" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-white transition-colors" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input className="appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white transition-colors" id="email" type="email" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="no-resize appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white h-36 resize-none transition-colors" id="message"></textarea>
            </div>
          </div>

          {/* Changed: This is the new animated button */}
          <div className="flex justify-end">
            <motion.button
              className="relative flex items-center justify-center rounded-full bg-white overflow-hidden px-5 py-2 border-2 border-white"
              style={{ width: 150 }} // Slightly wider for "Send Message"
              whileHover="hover"
              initial="rest"
              type="button"
            >
              {/* Black background that slides in */}
              <motion.div
                className="absolute inset-0 bg-black"
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              {/* Text that changes color */}
              <motion.span
                className="relative whitespace-nowrap font-bold"
                variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Send Message
              </motion.span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}