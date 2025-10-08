import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { Suspense, useRef } from "react";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function MainSite() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rafRef = useRef(null);

  const moveX = useTransform(x, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-10, 10]);
  const moveY = useTransform(y, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-10, 10]);

  const handleMouseMove = (event) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      x.set(event.clientX);
      y.set(event.clientY);
    });
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center p-8 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute top-0 -right-[15%] w-[100%] h-full md:w-[80%] z-0"
        style={{
          x: moveX,
          y: moveY,
          willChange: "transform"
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/hBa1HietV6xNSj2q/scene.splinecode" />
        </Suspense>
      </motion.div>
      <div className="flex w-full max-w-7xl mx-auto">
        <motion.div
          className="relative z-10 text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Highlighted Hero Info */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Sarvesh</span>
              <span
                className="absolute left-0 bottom-2 w-full h-3 bg-yellow-300 rounded-md opacity-60 -z-10"
                style={{ transform: "translateY(0.3em)" }}
              ></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-gray-300">
            <span className="relative inline-block">
              <span className="relative z-10">
                2nd Year Computer Science (AI) Student
              </span>
              <span
                className="absolute left-0 bottom-1 w-full h-3 bg-yellow-300 rounded-md opacity-60 -z-10"
                style={{ transform: "translateY(0.3em)" }}
              ></span>
            </span>{" "}
            at VIT Pune
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Passionate about building{" "}
            <span className="relative inline-block">
              <span className="relative z-10">modern web experiences</span>
              <span
                className="absolute left-0 bottom-1 w-full h-3 bg-yellow-300 rounded-md opacity-60 -z-10"
                style={{ transform: "translateY(0.3em)" }}
              ></span>
            </span>
            .
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              className="relative flex items-center justify-center rounded-full bg-white overflow-hidden px-5 py-2 border-2 border-white"
              style={{ width: 150 }}
              whileHover="hover"
              initial="rest"
            >
              <motion.div
                className="absolute inset-0 bg-black"
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="relative whitespace-nowrap font-bold"
                variants={{ rest: { color: "#000000" }, hover: { color: "#FFFFFF" } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                View My Work
              </motion.span>
            </motion.a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
