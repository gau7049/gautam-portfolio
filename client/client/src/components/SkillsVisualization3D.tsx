import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

interface SkillsVisualization3DProps {
  categories: SkillCategory[];
}

export function SkillsVisualization3D({
  categories,
}: SkillsVisualization3DProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientY / window.innerHeight) * 30 - 15;
      const y = (e.clientX / window.innerWidth) * 30 - 15;
      setRotation({ x, y });
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-96 flex items-center justify-center perspective">
      <motion.div
        className="relative w-full h-full max-w-2xl"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
        }}
      >
        {/* 3D Skill Sphere */}
        <div className="relative w-full h-full">
          {categories.map((category, catIdx) => {
            const categoryCount = categories.length;
            const angle = (catIdx / categoryCount) * Math.PI * 2;
            const radius = 150;

            return (
              <motion.div
                key={category.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${angle}rad) translateZ(${radius}px)`,
                }}
              >
                {/* Category Cluster */}
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    className="text-center"
                    animate={{
                      rotateY: -angle,
                    }}
                  >
                    <h4 className="font-bold text-lg mb-2 text-foreground">
                      {category.name}
                    </h4>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skill}
                          className="px-4 py-2 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/10 border border-accent/30 text-sm font-semibold text-foreground cursor-pointer"
                          animate={{
                            rotateY: -angle,
                            y: [0, -8, 0],
                          }}
                          transition={{
                            y: {
                              duration: 2 + skillIdx * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }}
                          whileHover={{
                            scale: 1.15,
                            boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
                            backgroundColor: "rgba(6, 182, 212, 0.15)",
                          }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Center Glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-accent to-purple-500 blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>

      {/* Info Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-muted-foreground text-sm">
        Move your mouse to rotate the skill sphere
      </div>
    </div>
  );
}
