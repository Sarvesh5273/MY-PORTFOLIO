import { useRef, useState, useEffect } from "react"; // Add useState
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { supabase } from '../supabaseClient'; // Import the Supabase client

export default function Contact() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.5]);

  // State for screen size detection
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.matchMedia("(min-width: 768px)").matches : false
  );
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // State for Form Inputs and Submission Status
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Map input IDs to state keys
    const stateKeyMap = {
      'grid-first-name': 'firstName',
      'grid-last-name': 'lastName',
      'email': 'email',
      'message': 'message'
    };
    const key = stateKeyMap[id];
    if (key) {
        setFormData(prevData => ({
            ...prevData,
            [key]: value
        }));
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser submission
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset status

    try {
      // Map state keys to Supabase column names
      const { data, error } = await supabase
        .from('contact_submissions') // Use your table name here
        .insert([
          { 
            first_name: formData.firstName, 
            last_name: formData.lastName, 
            email: formData.email, 
            message: formData.message 
          }
        ])
        .select(); // Add .select() to get the inserted data back if needed

      if (error) {
        throw error;
      }

      // Submission successful
      setSubmitStatus('success');
      // Clear the form
      setFormData({ firstName: '', lastName: '', email: '', message: '' }); 
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Error submitting form:', error.message);
      setSubmitStatus('error');
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div ref={targetRef} id="contact" className="relative min-h-screen flex flex-col justify-center items-center p-8 pt-24 overflow-hidden">
        
        {isLargeScreen && (
          <motion.div
              className="absolute top-[5%] left-[-50%] md:left-[-20%] w-[100%] md:w-[70%] max-w-4xl h-auto aspect-square z-0"
              style={{ scale }}
          >
              <Spline scene="https://prod.spline.design/8oZX4o936TB2FIgY/scene.splinecode" />
          </motion.div>
        )}

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="w-full max-w-lg z-10 bg-white/5 backdrop-blur-md rounded-2xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Update form tag to use onSubmit */}
        <form className="w-full" onSubmit={handleSubmit}> 
          {/* --- Form fields --- */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input 
                className="appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-white transition-colors" 
                id="grid-first-name" 
                type="text" 
                placeholder="Sarvesh" 
                value={formData.firstName} // Bind value to state
                onChange={handleInputChange} // Add onChange handler
                required // Add basic validation
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input 
                className="appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-white transition-colors" 
                id="grid-last-name" 
                type="text" 
                placeholder="Bijawe"
                value={formData.lastName} // Bind value to state
                onChange={handleInputChange} // Add onChange handler
                required // Add basic validation
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input 
                className="appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white transition-colors" 
                id="email" 
                type="email"
                value={formData.email} // Bind value to state
                onChange={handleInputChange} // Add onChange handler
                required // Add basic validation
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="no-resize appearance-none block w-full bg-transparent text-gray-200 border-2 border-gray-500 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-white h-36 resize-none transition-colors" 
                id="message"
                value={formData.message} // Bind value to state
                onChange={handleInputChange} // Add onChange handler
                required // Add basic validation
              ></textarea>
            </div>
          </div>

          {/* --- Submission Status and Button --- */}
          <div className="flex justify-between items-center">
             {/* Area for status messages */}
            <div className="min-h-[20px] text-sm"> 
              {submitStatus === 'success' && <p className="text-green-400">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="text-red-400">Failed to send message. Please try again.</p>}
            </div>
             {/* Submit Button */}
            <motion.button
              className="relative flex items-center justify-center rounded-full bg-white overflow-hidden px-5 py-2 border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed" // Add disabled styles
              style={{ width: 150 }}
              whileHover={!isSubmitting ? "hover" : ""} // Disable hover effect when submitting
              initial="rest"
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
            >
              <motion.div
                className="absolute inset-0 bg-black"
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <motion.span
                className="relative whitespace-nowrap font-bold"
                variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {/* Change button text */}
              </motion.span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}