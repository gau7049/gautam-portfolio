import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Technical Minimalism with Depth
 * - Dark mode first with vibrant cyan accents
 * - Asymmetric layouts with generous whitespace
 * - Subtle animations that respect motion preferences
 * - Content-first architecture highlighting impact and engineering depth
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663757791145/CBXoJHTXfQBdaeEtUPJt27/logo-mark-DyYmciyGDPi9b6VBAZEVzU.webp"
              alt="Gautam Paliwal"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg">Gautam Paliwal</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663757791145/CBXoJHTXfQBdaeEtUPJt27/hero-gradient-orbs-2sHtqHnr32NNFXpUTc5nMu.webp"
            alt="Hero gradient"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                Full-Stack Engineer
              </span>
            </div>
            <h1 className="mb-6 leading-tight">
              I build products that scale
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Full-stack engineer with 2 years of experience shipping production React applications serving 1 lakh+ users. Obsessed with performance, clean architecture, and measurable impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="mb-4">About</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I'm a full-stack engineer with a passion for building scalable web applications. My focus is on creating clean, maintainable code that delivers measurable business impact. I thrive in fast-paced environments where I can own features end-to-end—from UI architecture and state management to backend APIs and database design.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard label="Active Users" value="1 Lakh+" />
              <MetricCard label="Bug Reduction" value="~30%" />
              <MetricCard label="DSA Problems" value="400+" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-12">
              Experience
            </motion.h2>

            <div className="space-y-8 max-w-3xl">
              <TimelineItem
                role="Associate Software Engineer"
                company="E2logy"
                period="July 2024 – Present"
                location="Ahmedabad, GJ"
                highlights={[
                  "Engineered a role-based web platform (React.js) for 1 lakh+ active users spanning Admin, Host, Provider, and Guest modules—owning end-to-end frontend architecture.",
                  "Led payment module frontend development; integrated RESTful APIs with Redux and React Context, cutting checkout-related bug reports by ~30% through robust state management.",
                  "Boosted render performance by implementing React hooks, memoization (useMemo/useCallback), and component-level code splitting, measurably reducing unnecessary re-renders on high-traffic pages.",
                  "Gained hands-on experience maintaining Laravel backend services including webhooks, cron jobs, schedulers, and async workflows—improving reliability of business-critical operations.",
                ]}
              />

              <TimelineItem
                role="React.js Intern"
                company="Biztechnosys"
                period="April 2024 – July 2024"
                location="Bengaluru, KA"
                highlights={[
                  "Built and styled responsive React.js components following best practices for reusability and maintainability, shipping production-ready UI features across the project lifecycle.",
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-card/30">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-12">
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="ChitChatHub"
                description="Real-time chat application with JWT authentication, Socket.io-powered instant messaging, and live online/offline presence indicators."
                technologies={["React.js", "Node.js", "MongoDB", "Socket.io"]}
                link="https://github.com/gau7049/chat-app"
              />

              <ProjectCard
                title="Delicious Food"
                description="React.js web app with Firebase authentication, dark/light mode toggling, and integrated APIs for accessing recipe instructions with YouTube links."
                technologies={["React.js", "Firebase", "REST APIs"]}
                link="https://github.com/gau7049/delicious-food"
              />

              <ProjectCard
                title="Pure Animal"
                description="Animated website showcasing animal care, purity, and the relationship between humans and animals with engaging visual storytelling."
                technologies={["React.js", "CSS Animations", "HTML5"]}
                link="https://github.com/gau7049/Pure-Animal"
              />

              <ProjectCard
                title="E2logy Platform"
                description="Role-based property management platform serving 1 lakh+ users. Engineered frontend architecture with Redux state management and complex UI logic."
                technologies={["React.js", "Redux", "REST APIs", "Laravel"]}
                link="#"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-12">
              Technical Skills
            </motion.h2>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillGroup
                title="Frontend"
                skills={["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Redux", "React Context"]}
              />
              <SkillGroup
                title="Backend"
                skills={["Node.js", "Express.js", "RESTful APIs", "Webhooks", "JWT Authentication", "Laravel"]}
              />
              <SkillGroup
                title="Database & Tools"
                skills={["MongoDB", "MySQL", "Git", "Agile/Scrum", "Performance Optimization", "Code Reviews"]}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-12">
              Achievements
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 max-w-2xl">
              <AchievementItem
                title="Rising Star Recognition"
                description="Received award from Senior Delivery Manager for proactively owning complex issues and delivering impactful solutions that improved support for the broader engineering team."
              />
              <AchievementItem
                title="LeetCode 100-Day Streak"
                description="Solved 400+ DSA problems on LeetCode in C++ with a 100-day daily coding streak—demonstrating algorithmic depth and disciplined commitment to continuous growth."
              />
              <AchievementItem
                title="B.Tech Computer Engineering"
                description="Gujarat Technological University | CGPA: 8.30 / 10 | 2020 – 2024"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="mb-4">Let's Connect</h2>
              <p className="text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:gautampaliwal.ce@gmail.com"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/gau7049"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
              >
                <Github className="w-5 h-5 text-accent" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gautampaliwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
              >
                <Linkedin className="w-5 h-5 text-accent" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Gautam Paliwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

/* Component: Metric Card */
function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
      whileHover={{ y: -4 }}
    >
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <p className="text-3xl font-bold text-accent">{value}</p>
    </motion.div>
  );
}

/* Component: Timeline Item */
function TimelineItem({
  role,
  company,
  period,
  location,
  highlights,
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}) {
  return (
    <motion.div
      className="relative pl-8 pb-8 border-l-2 border-accent/30 hover:border-accent/60 transition-colors"
      whileHover={{ x: 4 }}
    >
      <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-background" />
      <div className="mb-3">
        <h3 className="text-lg font-semibold">{role}</h3>
        <p className="text-accent text-sm font-medium">{company}</p>
        <p className="text-xs text-muted-foreground">
          {period} • {location}
        </p>
      </div>
      <ul className="space-y-2">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="text-sm text-muted-foreground flex gap-3">
            <span className="text-accent mt-1">→</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* Component: Project Card */
function ProjectCard({
  title,
  description,
  technologies,
  link,
}: {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
          {title}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

/* Component: Skill Group */
function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-card border border-border"
      whileHover={{ y: -4 }}
    >
      <h3 className="font-semibold mb-4 text-accent">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* Component: Achievement Item */
function AchievementItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
      whileHover={{ x: 4 }}
    >
      <h3 className="font-semibold mb-2 text-accent">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
