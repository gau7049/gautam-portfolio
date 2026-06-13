import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Emotion = "neutral" | "happy" | "sad" | "excited" | "thinking";

interface InteractiveCharacterProps {
  emotion?: Emotion;
}

export function InteractiveCharacter({
  emotion = "neutral",
}: InteractiveCharacterProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = 8;

        setEyePos({
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getMouthPath = () => {
    switch (emotion) {
      case "happy":
        return "M 30 45 Q 40 55 50 45";
      case "sad":
        return "M 30 50 Q 40 40 50 50";
      case "excited":
        return "M 25 45 Q 40 60 55 45";
      case "thinking":
        return "M 30 45 Q 40 50 50 45";
      default:
        return "M 30 48 Q 40 50 50 48";
    }
  };

  const getEyeExpression = () => {
    switch (emotion) {
      case "happy":
        return "M 25 30 Q 30 35 35 30";
      case "sad":
        return "M 25 35 Q 30 30 35 35";
      case "excited":
        return "O";
      default:
        return "M 25 30 L 35 30";
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-12 right-12 z-40 pointer-events-none"
    >
      <motion.div
        className="relative w-32 h-40 flex items-center justify-center"
        animate={{
          y: emotion === "sad" ? 10 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Head */}
        <svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          className="drop-shadow-lg"
        >
          {/* Face background */}
          <ellipse cx="60" cy="60" rx="45" ry="50" fill="#FDB022" />

          {/* Left Eye */}
          <g>
            <circle cx="40" cy="45" r="8" fill="white" />
            <motion.circle
              cx="40"
              cy="45"
              r="5"
              fill="black"
              animate={{
                cx: 40 + eyePos.x,
                cy: 45 + eyePos.y,
              }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
          </g>

          {/* Right Eye */}
          <g>
            <circle cx="80" cy="45" r="8" fill="white" />
            <motion.circle
              cx="80"
              cy="45"
              r="5"
              fill="black"
              animate={{
                cx: 80 + eyePos.x,
                cy: 45 + eyePos.y,
              }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
          </g>

          {/* Mouth */}
          <motion.path
            d={getMouthPath()}
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: getMouthPath(),
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Blush */}
          <motion.circle
            cx="20"
            cy="70"
            r="6"
            fill="rgba(255, 107, 107, 0.4)"
            animate={{
              opacity: emotion === "happy" ? 1 : 0.2,
            }}
          />
          <motion.circle
            cx="100"
            cy="70"
            r="6"
            fill="rgba(255, 107, 107, 0.4)"
            animate={{
              opacity: emotion === "happy" ? 1 : 0.2,
            }}
          />
        </svg>

        {/* Floating animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Thought bubble for thinking state */}
      {emotion === "thinking" && (
        <motion.div
          className="absolute -top-12 right-0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="text-2xl">💭</div>
        </motion.div>
      )}
    </div>
  );
}
