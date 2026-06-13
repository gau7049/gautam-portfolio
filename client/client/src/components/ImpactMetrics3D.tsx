import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, TrendingDown, Code2, Clock } from "lucide-react";

interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

export function ImpactMetrics3D() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const metrics: Metric[] = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "1L+",
      label: "Users Impacted",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      value: "30%",
      label: "Bug Reduction",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      value: "400+",
      label: "DSA Problems",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "2+",
      label: "Years Experience",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {metrics.map((metric, idx) => (
        <motion.div
          key={idx}
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          style={{
            perspective: "1200px",
          }}
        >
          {/* 3D Card Container */}
          <motion.div
            className="relative h-full rounded-2xl bg-gradient-to-br from-card via-card to-secondary/50 border border-accent/20 p-8 overflow-hidden cursor-pointer"
            animate={{
              rotateX: (mousePos.y / 100) * 5,
              rotateY: (mousePos.x / 100) * 5,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)",
              y: -10,
            }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            {/* Floating Icon */}
            <motion.div
              className="relative z-10 mb-6 text-accent"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3 + idx * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {metric.icon}
            </motion.div>

            {/* Value */}
            <motion.div
              className="relative z-10"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                delay: idx * 0.1 + 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              <h3 className="text-4xl font-bold text-accent mb-2">
                {metric.value}
              </h3>
              <p className="text-muted-foreground text-sm">{metric.label}</p>
            </motion.div>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Floating Particles */}
            <motion.div className="absolute inset-0 pointer-events-none">
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
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
