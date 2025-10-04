import { useState } from "react";
import Preloader from "./components/Preloader.jsx";
import MainSite from "./components/MainSite.jsx";
import Navbar from "./components/Navbar.jsx";
import InteractiveStarfield from "./components/InteractiveStarfield.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Cursor from "./components/Cursor.jsx";
import ScrollingRocket from "./components/ScrollingRocket.jsx"; // 1. Import the rocket

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Cursor />
      <InteractiveStarfield />
      <ScrollingRocket /> {/* 2. Add the rocket here */}
      <Navbar />
      <MainSite />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}