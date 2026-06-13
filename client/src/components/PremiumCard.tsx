import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PremiumCard({
  children,
  className = "",
  onClick,
}: PremiumCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const background = useMotionTemplate`radial-gradient(
    200px circle at ${mouseX}px ${mouseY}px,
    rgba(6, 182, 212, 0.15),
    transparent 80%
  )`;

  return (
    <motion.div
      className={`relative p-8 rounded-xl bg-card border border-border overflow-hidden group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Gradient border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)",
          padding: "1px",
          borderRadius: "11px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Animated particles on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 300 - 150,
              y: Math.random() * 300 - 150,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
