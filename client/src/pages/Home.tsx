import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, ArrowRight, Code2, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { FloatingCharacter } from "@/components/FloatingCharacter";
import { ScrollTimeline } from "@/components/ScrollTimeline";
import { ParticleBackground } from "@/components/ParticleBackground";

/**
 * Design Philosophy: Premium SaaS Product Engineering
 * - Light mode first (#FAFAFA background, #FFFFFF cards)
 * - Cyan accents (#06B6D4) with purple secondary (#8B5CF6)
 * - Asymmetric layouts, generous whitespace
 * - Product-first storytelling, not resume-heavy
 * - Smooth animations, micro-interactions, premium feel
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <ParticleBackground />
      <ScrollTimeline />
      <FloatingCharacter state="idle" />
      {/* Header */}
      {!isLoading && (
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white font-bold">
              GP
            </div>
            <span className="font-bold text-lg hidden sm:inline">Gautam</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm hover:text-accent transition-colors">
              Work
            </a>
            <a href="#experience" className="text-sm hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </header>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 pointer-events-none" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </motion.div>
            </div>

            <h1 className="mb-6 leading-tight">
              I build fast,<br />
              <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                scalable products
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Full-stack engineer with 2+ years shipping production React applications serving 1 lakh+ users. Focused on performance, clean architecture, and measurable impact.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
                <p className="text-2xl font-bold text-accent">2+</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold text-accent">1L+</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-2xl font-bold">Ahmedabad</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/gau7049"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/gautampaliwal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:gautampaliwal.ce@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Interactive Visual */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="space-y-4 w-full max-w-xs">
                {/* Animated Tech Stack */}
                {["React", "Node.js", "TypeScript", "MongoDB", "Tailwind"].map((tech, idx) => (
                  <motion.div
                    key={tech}
                    className="p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    <p className="font-semibold text-foreground">{tech}</p>
                    <p className="text-sm text-muted-foreground">Production Ready</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="section-spacing bg-secondary/30">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="mb-4">Featured Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Products I've built that shipped to production and serve real users.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "E2logy Platform",
                  description: "Role-based property management platform serving 1 lakh+ users",
                  impact: "30% bug reduction through performance optimization",
                  tech: ["React", "Redux", "Node.js", "MongoDB"],
                  link: "#",
                },
                {
                  title: "ChitChatHub",
                  description: "Real-time chat application with JWT authentication",
                  impact: "Socket.io-powered instant messaging with presence indicators",
                  tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                  link: "https://github.com/gau7049/chat-app",
                },
              ].map((project, idx) => (
                <motion.a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/50 mb-4">
                    <p className="text-sm font-semibold text-accent">Impact</p>
                    <p className="text-sm text-foreground mt-1">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                    <span className="text-sm font-semibold">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-spacing">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-16">
              Experience
            </motion.h2>

            <div className="space-y-8 max-w-3xl">
              {[
                {
                  role: "Associate Software Engineer",
                  company: "E2logy",
                  period: "July 2024 – Present",
                  location: "Ahmedabad",
                  highlights: [
                    "Engineered role-based web platform for 1 lakh+ users",
                    "Reduced checkout bugs by 30% through state management optimization",
                    "Improved render performance with React hooks and memoization",
                  ],
                },
                {
                  role: "React.js Intern",
                  company: "Biztechnosys",
                  period: "April 2024 – July 2024",
                  location: "Bengaluru",
                  highlights: [
                    "Built responsive React components following best practices",
                    "Shipped production-ready UI features",
                    "Collaborated with design and backend teams",
                  ],
                },
              ].map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="p-8 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
                  variants={itemVariants}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-foreground flex gap-3">
                        <span className="text-accent font-bold">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="section-spacing bg-secondary/30">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-16">
              Technical Expertise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "TypeScript", "Tailwind", "Redux", "Next.js"],
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Express", "REST APIs", "Laravel", "Webhooks"],
                },
                {
                  category: "Database & Tools",
                  skills: ["MongoDB", "MySQL", "Git", "Performance Optimization", "Testing"],
                },
              ].map((group, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <h3 className="text-lg font-bold mb-4 text-accent">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-accent transition-colors cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-16">
              Impact
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, label: "Active Users", value: "1L+" },
                { icon: Zap, label: "Bug Reduction", value: "~30%" },
                { icon: Code2, label: "DSA Problems", value: "400+" },
                { icon: Award, label: "Years Experience", value: "2+" },
              ].map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={idx}
                    className="p-6 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    variants={itemVariants}
                  >
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-secondary/30">
        <div className="container max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-8">
              About Me
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm passionate about building products that scale. My engineering philosophy centers on clean code, measurable impact, and understanding the user experience deeply.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm solving DSA problems, contributing to open source, or exploring new technologies. I believe in continuous learning and shipping real value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section-spacing">
        <div className="container max-w-2xl text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="mb-6">
              Let's build something meaningful
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12">
              I'm always interested in hearing about new projects and opportunities.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:gautampaliwal.ce@gmail.com">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Send me an email
                </Button>
              </a>
              <a href="https://linkedin.com/in/gautampaliwal" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                  Connect on LinkedIn
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Gautam Paliwal. Crafted with care.</p>
        </div>
      </footer>
    </div>
  );
}
