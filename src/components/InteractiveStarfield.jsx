import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const InteractiveStarfield = () => {
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
          enable: false,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        direction: "bottom", // Stars will move downwards
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 0.3, // A slow, steady speed
        straight: true, // Move in a straight line
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 150,
      },
      opacity: {
        value: { min: 0.1, max: 0.7 },
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

export default InteractiveStarfield;