import { useState, Suspense, lazy } from "react";
import Preloader from "./components/Preloader.jsx";
import MainSite from "./components/MainSite.jsx";
import Navbar from "./components/Navbar.jsx";
import GalaxyBackground from "./components/GalaxyBackground.jsx"; // Updated import
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Astronaut from "./components/Astronaut.jsx"; 

// Lazy load the heavy components
const Skills = lazy(() => import("./components/Skills.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Astronaut />
      <GalaxyBackground /> {/* Updated component */}
      <Navbar />
      <MainSite />
      <Projects />
      <Suspense fallback={<div className="text-white text-center p-12">Loading Section...</div>}>
        <Skills />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}