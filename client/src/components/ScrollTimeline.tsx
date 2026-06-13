import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Vertical Timeline Line */}
      <motion.div
        className="fixed left-8 top-0 w-1 h-full bg-gradient-to-b from-accent via-purple-500 to-accent/30 z-30 hidden lg:block"
        style={{
          scaleY: scrollProgress / 100,
          transformOrigin: "top",
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed left-8 top-0 w-1 h-full bg-gradient-to-b from-accent via-purple-500 to-accent/30 z-30 hidden lg:block blur-md opacity-50"
        style={{
          scaleY: scrollProgress / 100,
          transformOrigin: "top",
        }}
      />

      {/* Progress Circle */}
      <motion.div
        className="fixed left-4 z-30 hidden lg:flex w-8 h-8 rounded-full bg-accent border-4 border-background shadow-lg items-center justify-center"
        style={{
          top: `${scrollProgress}%`,
          transform: "translateY(-50%)",
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-background"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </>
  );
}
