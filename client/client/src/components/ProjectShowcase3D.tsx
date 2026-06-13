import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  link: string;
}

interface ProjectShowcase3DProps {
  projects: Project[];
}

export function ProjectShowcase3D({ projects }: ProjectShowcase3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, projects.length]);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setAutoRotate(false);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoRotate(false);
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center perspective">
      {/* 3D Carousel Container */}
      <div className="relative w-full h-full" style={{ perspective: "1200px" }}>
        {projects.map((project, idx) => {
          const position = (idx - activeIndex + projects.length) % projects.length;
          const isActive = position === 0;
          const isPrev = position === projects.length - 1;
          const isNext = position === 1;

          let rotateY = 0;
          let translateZ = 0;
          let opacity = 0;
          let scale = 0.8;

          if (isActive) {
            rotateY = 0;
            translateZ = 0;
            opacity = 1;
            scale = 1;
          } else if (isNext) {
            rotateY = -45;
            translateZ = -300;
            opacity = 0.6;
            scale = 0.85;
          } else if (isPrev) {
            rotateY = 45;
            translateZ = -300;
            opacity = 0.6;
            scale = 0.85;
          } else {
            opacity = 0;
            scale = 0.7;
          }

          return (
            <motion.div
              key={idx}
              className="absolute w-full h-full max-w-md"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY,
                translateZ,
                opacity,
                scale,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {/* 3D Card */}
              <motion.div
                className="w-full h-full rounded-2xl bg-gradient-to-br from-card via-card to-secondary/50 border border-accent/20 p-8 shadow-2xl cursor-pointer"
                whileHover={{
                  boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)",
                }}
                onClick={() => {
                  setActiveIndex(idx);
                  setAutoRotate(false);
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.h3
                      className="text-3xl font-bold text-foreground mb-3"
                      animate={{
                        color: isActive ? "#06B6D4" : "#1F2937",
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Impact Box */}
                    <motion.div
                      className="p-4 rounded-lg bg-accent/10 border border-accent/20 mb-4"
                      animate={{
                        borderColor: isActive
                          ? "rgba(6, 182, 212, 0.5)"
                          : "rgba(6, 182, 212, 0.2)",
                      }}
                    >
                      <p className="text-xs font-semibold text-accent">IMPACT</p>
                      <p className="text-sm text-foreground mt-1">
                        {project.impact}
                      </p>
                    </motion.div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <motion.span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(6, 182, 212, 0.2)",
                          }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={prevProject}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 p-3 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ←
      </motion.button>

      <motion.button
        onClick={nextProject}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 p-3 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        →
      </motion.button>

      {/* Indicator Dots */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, idx) => (
          <motion.button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === activeIndex ? "bg-accent w-6" : "bg-accent/30"
            }`}
            onClick={() => {
              setActiveIndex(idx);
              setAutoRotate(false);
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}
