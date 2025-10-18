import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const GalaxyBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 60, // Keep this for performance
    interactivity: {
      events: {
        onHover: {
          enable: false, // Keep interactivity off
        },
        onClick: {
          enable: false,
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        // --- UPDATED ---
        direction: "bottom", // Move stars downwards
        enable: true,
        outModes: {
          default: "out", // Make particles disappear when they go off-screen
        },
        random: false,    // Less random for a more uniform "warp speed" feel
        speed: 2,       // Increased speed
        straight: true,  // Move in straight lines
        // --- END UPDATED ---
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 400, // Keep particle count
      },
      opacity: {
        value: { min: 0.1, max: 0.5 }, // Keep fading effect
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 1.5 }, // Keep size variation
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{ position: 'fixed', zIndex: -10, top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};

export default GalaxyBackground;