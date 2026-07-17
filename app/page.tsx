"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Zap,
  Mail,
  Phone,
  Download,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("skills");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    "React Native", "Expo", "TypeScript", "JavaScript",
    "Node.js", "Express.js", "FastAPI",
    "MongoDB", "PostgreSQL", "Firebase",
    "Redux Toolkit", "Redux Saga", "Context API",
    "Cursor", "Claude Code", "OpenAI API", "Meta Llama",
    "Android Studio", "Xcode",
    "Git", "GitHub Actions", "Vercel", "AWS S3", "CI/CD",
    "Jira", "ClickUp", "Bitbucket",
    "REST API", "Mapbox", "Agora", "Native Bridging", "Universal Links"
  ];

  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Custom App Development",
      description:
        "I specialize in building high-performance, scalable, and cross-platform mobile applications using React Native. Whether you need an MVP for your startup or a full-fledged mobile app, I ensure seamless UI/UX, smooth functionality, and integration with third-party services.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: "UI Design Implementation",
      description:
        "Have a Figma design and need it transformed into a fully functional mobile app? I bring your UI/UX designs to life with pixel-perfect implementation. I ensure responsiveness across all devices, optimize performance, and integrate necessary logic.",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "App Performance Optimization",
      description:
        "A well-performing app is key to user satisfaction. I provide ongoing support, bug fixes, and performance optimization to keep your React Native app running smoothly. Whether it's reducing load time, fixing crashes, or enhancing UI responsiveness.",
    },
  ];

  const projects = [
    {
      title: "DealersHive",
      category: "E-commerce App",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "VetPet Central",
      category: "Veterinary Appointment Booking",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "DVMCentral",
      category: "E-commerce App",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Acron.vet",
      category: "Veterinary Platform",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "VetRep Finder",
      category: "Veterinary Directory",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "PetVet Shop",
      category: "E-commerce App",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0f18]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
              Dawood Zia
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0f18] border-b border-white/5"
            >
              <div className="px-6 py-6 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/20 bg-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-blue-400 font-medium tracking-wide uppercase text-xs">
                Senior Software Engineer & Tech Lead
              </p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
              Building scalable <br className="hidden md:block" />
              mobile experiences.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-normal">
              I'm a results-driven software engineer with 4+ years of experience architecting and delivering cross-platform mobile products at scale for iOS and Android.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800"
                  alt="Dawood Zia"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                I specialise in building cross-platform mobile applications with React Native and Expo, with deep expertise in native module bridging, performance optimisation, and scalable architecture. As a Tech Lead, I manage the full mobile engineering lifecycle — from sprint planning and daily standups to cross-functional collaboration with designers and backend engineers.
              </p>

              {/* Tabs */}
              <div className="flex space-x-6 mb-8 border-b border-white/10 pb-4 overflow-x-auto scrollbar-hide">
                {["skills", "experience", "education"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`capitalize font-medium tracking-wide transition-colors relative whitespace-nowrap pb-2 ${
                      activeTab === tab ? "text-blue-400" : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[350px]">
                {activeTab === "skills" && (
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-8">
                    <div className="relative pl-6 border-l border-white/10">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5" />
                      <h3 className="text-white font-semibold text-lg">Senior Software Engineer & Tech Lead</h3>
                      <p className="text-slate-400 text-sm mb-4 mt-1">Gtech Sources | Lahore, Pakistan</p>
                      <ul className="text-slate-400 text-sm space-y-2 list-none">
                        <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full">4+ years building production-grade iOS & Android applications (10+ apps shipped).</li>
                        <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full">Managing and mentoring a team of mobile developers through sprint planning and daily standups.</li>
                        <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full">Focused on performance, clean architecture, offline-first patterns, and CI/CD pipelines.</li>
                        <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full">Integrated AI features including ChatGPT API, Meta Llama, and on-device ML.</li>
                        <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full">Implemented Native Module Bridging, Universal Links, Mapbox, and Real-time Voice/Video Calling.</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "education" && (
                  <div>
                    <div className="relative pl-6 border-l border-white/10">
                      <div className="absolute w-3 h-3 bg-slate-500 rounded-full -left-[6.5px] top-1.5" />
                      <h3 className="text-white font-semibold text-lg">B.Sc Electrical Engineering</h3>
                      <p className="text-slate-400 text-sm mt-1">University of Engineering and Technology, Lahore</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Services</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Delivering high-quality, scalable mobile solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-[#0f1523] border border-white/5 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Selected Work</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              A showcase of mobile applications I've architected, built, and delivered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/5 bg-[#0f1523]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/60 to-transparent opacity-90"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-blue-400 text-xs font-medium mb-1 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Details <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-slate-400 mb-10 text-lg">
              I'm currently open to senior engineering and tech lead roles — remote or hybrid. 
              Feel free to reach out for collaborations or opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href="mailto:dawoodzia711@gmail.com" 
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="font-medium">dawoodzia711@gmail.com</span>
              </a>
              <span className="hidden sm:block text-slate-700">|</span>
              <a 
                href="tel:923023269189" 
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="font-medium">+92 302 3269189</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/dawoodzia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[#0f1523] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://github.com/dawood32" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[#0f1523] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                </svg>
              </a>
              <a 
                href="/DawoodziaResume.pdf" 
                download 
                className="ml-2 flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-600 text-sm bg-[#0a0f18]">
        <p>&copy; {new Date().getFullYear()} Dawood Zia. All rights reserved.</p>
      </footer>
    </div>
  );
}
