import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollingRocket() {
  // 1. useScroll tracks the page's scroll progress (from 0 at the top to 1 at the bottom)
  const { scrollYProgress } = useScroll();

  // 2. Define the rocket's non-linear path using waypoints for the X-axis
  // As you scroll, the rocket will move horizontally between these percentage points.
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1], // Scroll positions (0%, 25%, 50%, etc.)
    ["5%", "80%", "20%", "70%", "10%"] // Corresponding X positions
  );

  // 3. Define the vertical path, moving from top to bottom
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "400vh"]);

  // 4. Define the rocket's rotation to make its flight look more realistic
  // The angles will change as it moves along its path.
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [60, 100, 70, 110, 60]
  );

  return (
    <motion.div
      className="fixed top-0 left-0 z-40" // z-40 keeps it above planets but below the navbar (z-50)
      style={{ x, y, rotate }}
    >
      <img src="/rocket.gif" alt="Scrolling Rocket" className="w-20 h-20 md:w-28 md:h-28" />
    </motion.div>
  );
}