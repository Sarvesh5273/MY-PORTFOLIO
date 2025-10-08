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
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: false, // Turn off hover interactivity
        },
        onClick: {
          enable: false, // Turn off click interactivity
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        direction: "top", // Particles drift upwards
        enable: true,
        outModes: {
          default: "out",
        },
        random: true, // Movement is randomized for a natural feel
        speed: 0.1,   // Very slow speed for a gentle drift
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 400, // More particles for a dense, galaxy-like feel
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
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
        value: { min: 0.5, max: 1.5 },
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