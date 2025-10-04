import { useState } from "react";
import Preloader from "./components/Preloader.jsx";
import MainSite from "./components/MainSite.jsx";
import Navbar from "./components/Navbar.jsx";
import InteractiveStarfield from "./components/InteractiveStarfield.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
// The Cursor import has been removed

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      {/* The Cursor component has been removed from here */}
      <InteractiveStarfield />
      <Navbar />
      <MainSite />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}