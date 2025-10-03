import { useState, useEffect } from "react";
import "./InteractiveBackground.css";

export default function InteractiveBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="interactive-orb"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}