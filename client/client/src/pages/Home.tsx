import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import HeroVisualization3D from '@/components/HeroVisualization3D';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, ExternalLink, Code2, Zap, Users, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useScrollAnimations();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero headline animation
    if (heroRef.current) {
      const headline = heroRef.current.querySelector('h1');
      if (headline) {
        const text = headline.textContent || '';
        headline.innerHTML = text
          .split('')
          .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        gsap.fromTo(
          headline.querySelectorAll('span'),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.03,
            delay: 0.2,
          }
        );
      }

      // Hero subtitle animation
      const subtitle = heroRef.current.querySelector('.hero-subtitle');
      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
        );
      }

      // Hero CTA animation
      const cta = heroRef.current.querySelector('.hero-cta');
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 1.2 }
        );
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-white to-[#f9fafb]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-between px-6 md:px-12 py-20 overflow-hidden"
      >
        {/* 3D Visualization */}
        <div className="absolute inset-0 right-0 w-1/2 h-full hidden lg:block">
          <HeroVisualization3D />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
              Full-Stack Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Building Digital Experiences That Matter
          </h1>

          <p className="hero-subtitle text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
            I craft scalable, performant web applications that solve real problems. With expertise in modern
            frontend and backend technologies, I turn complex ideas into elegant solutions.
          </p>

          <div className="hero-cta flex gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
            >
              View My Work
            </Button>
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="scroll-fade-in">
              <div className="text-3xl font-bold text-cyan-600">1L+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-3xl font-bold text-cyan-600">30%</div>
              <div className="text-sm text-gray-600">Performance Gain</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-3xl font-bold text-cyan-600">2+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="scroll-fade-in mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I'm a Full-Stack Software Engineer with a passion for building beautiful, performant web applications.
            Currently at E2logy, I work on products that impact millions of users across the globe.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            My approach combines technical excellence with user-centric design thinking. I believe in writing clean,
            maintainable code and creating experiences that delight users.
          </p>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Showcasing my best work and technical achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="scroll-card group">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">E-Commerce Platform</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Built a scalable e-commerce platform serving 1L+ users with 30% improvement in checkout performance.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">MongoDB</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="scroll-card group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Real-Time Analytics</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Developed real-time analytics dashboard with WebSocket integration for live data updates.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">WebSocket</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">D3.js</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="scroll-fade-in mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
        </div>

        <div className="space-y-8">
          {/* E2logy */}
          <div className="scroll-card">
            <div className="border-l-4 border-cyan-600 pl-8 py-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Full-Stack Software Engineer</h3>
                  <p className="text-lg text-cyan-600 font-medium">E2logy</p>
                </div>
                <span className="text-sm text-gray-500">2022 - Present</span>
              </div>
              <p className="text-gray-600 mb-4">
                Leading development of core platform features, mentoring junior developers, and driving technical
                excellence across the team.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Reduced checkout bugs by 30% through comprehensive testing and optimization</li>
                <li>✓ Built features serving 1L+ active users</li>
                <li>✓ Implemented real-time analytics dashboard</li>
              </ul>
            </div>
          </div>

          {/* Biztechnosys */}
          <div className="scroll-card">
            <div className="border-l-4 border-purple-600 pl-8 py-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Frontend Developer</h3>
                  <p className="text-lg text-purple-600 font-medium">Biztechnosys</p>
                </div>
                <span className="text-sm text-gray-500">2021 - 2022</span>
              </div>
              <p className="text-gray-600 mb-4">
                Developed responsive web applications and contributed to UI/UX improvements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Built multiple React applications from scratch</li>
                <li>✓ Improved application performance by 40%</li>
                <li>✓ Collaborated with design team on user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="scroll-card">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-600" />
                  Frontend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">React</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-600" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">TypeScript</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-600" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Tailwind CSS</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-600" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="scroll-card">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  Backend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Node.js</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Express</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">MongoDB</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="scroll-card">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Tools & Others
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Git & GitHub</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-600" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Docker</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-600" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">AWS</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-600" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="scroll-fade-in mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impact & Achievements</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="scroll-card text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">1L+</div>
            <p className="text-gray-600">Active Users Served</p>
          </div>
          <div className="scroll-card text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
            <p className="text-gray-600">Performance Improvement</p>
          </div>
          <div className="scroll-card text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">400+</div>
            <p className="text-gray-600">DSA Problems Solved</p>
          </div>
          <div className="scroll-card text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">2+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-lg mb-8 opacity-90">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <a
              href="https://github.com/gau7049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 bg-gray-900 text-gray-400 text-center">
        <p>© 2026 Gautam Paliwal. All rights reserved. | Built with React, GSAP, and Three.js</p>
      </footer>
    </div>
  );
}
