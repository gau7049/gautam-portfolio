import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CharacterState = "idle" | "happy" | "excited" | "waving" | "thinking";

interface FloatingCharacterProps {
  state?: CharacterState;
}

export function FloatingCharacter({ state = "idle" }: FloatingCharacterProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [charPos, setCharPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax effect - character follows cursor slightly
  useEffect(() => {
    const interval = setInterval(() => {
      setCharPos((prev) => ({
        x: prev.x + (mousePos.x * 0.02 - prev.x) * 0.1,
        y: prev.y + (mousePos.y * 0.02 - prev.y) * 0.1,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [mousePos]);

  const getExpression = () => {
    switch (state) {
      case "happy":
        return "😊";
      case "excited":
        return "🤩";
      case "waving":
        return "👋";
      case "thinking":
        return "🤔";
      default:
        return "👨‍💻";
    }
  };

  const getAnimation = () => {
    switch (state) {
      case "waving":
        return {
          rotate: [0, -20, 20, -20, 0],
          transition: { duration: 0.6, repeat: Infinity },
        };
      case "thinking":
        return {
          y: [0, -8, 0],
          transition: { duration: 2, repeat: Infinity },
        };
      default:
        return {
          y: [0, -12, 0],
          transition: { duration: 3, repeat: Infinity },
        };
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-8 right-8 z-40 pointer-events-none"
      style={{
        transform: `translate(${charPos.x}px, ${charPos.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <motion.div
        className="text-6xl filter drop-shadow-lg"
        animate={getAnimation()}
      >
        {getExpression()}
      </motion.div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 text-6xl blur-xl opacity-40"
        animate={getAnimation()}
      >
        {getExpression()}
      </motion.div>
    </div>
  );
}
