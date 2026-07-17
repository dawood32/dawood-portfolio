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
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: "Custom App Development",
      description:
        "I specialize in building high-performance, scalable, and cross-platform mobile applications using React Native. Whether you need an MVP for your startup or a full-fledged mobile app, I ensure seamless UI/UX, smooth functionality, and integration with third-party services.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
      title: "UI Design Implementation",
      description:
        "Have a Figma design and need it transformed into a fully functional mobile app? I bring your UI/UX designs to life with pixel-perfect implementation. I ensure responsiveness across all devices, optimize performance, and integrate necessary logic.",
    },
    {
      icon: <Zap className="w-8 h-8 text-fuchsia-400" />,
      title: "App Performance Optimization",
      description:
        "A well-performing app is key to user satisfaction. I provide ongoing support, bug fixes, and performance optimization to keep your React Native app running smoothly. Whether it's reducing load time, fixing crashes, or enhancing UI responsiveness.",
    },
  ];

  const projects = [
    {
      title: "DealersHive",
      category: "E-commerce App",
      gradient: "from-blue-600/30 to-indigo-600/30",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "VetPet Central",
      category: "Veterinary Appointment Booking",
      gradient: "from-emerald-600/30 to-teal-600/30",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "DVMCentral",
      category: "E-commerce App",
      gradient: "from-orange-600/30 to-red-600/30",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Acron.vet",
      category: "Veterinary Platform",
      gradient: "from-cyan-600/30 to-blue-600/30",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "VetRep Finder",
      category: "Veterinary Directory",
      gradient: "from-purple-600/30 to-pink-600/30",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "PetVet Shop",
      category: "E-commerce App",
      gradient: "from-fuchsia-600/30 to-rose-600/30",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[150px]"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0D1117]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold tracking-tighter"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Dawood Zia
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
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
              className="md:hidden bg-[#0D1117]/95 backdrop-blur-xl border-b border-white/5"
            >
              <div className="px-6 py-6 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
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
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 z-10"
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
            >
              <p className="text-cyan-400 font-medium tracking-wider uppercase text-xs md:text-sm">
                Senior Software Engineer | Tech Lead
              </p>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Building apps <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
                that scale.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light">
              I'm a results-driven software engineer and tech lead with 4+ years of experience architecting and delivering cross-platform mobile products.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative sticky top-32"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-900 border border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 to-fuchsia-600/30 z-10 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
                <img
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800"
                  alt="Dawood Zia"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light">
                I specialise in building cross-platform mobile applications with React Native and Expo, with deep expertise in native module bridging, performance optimisation, and scalable architecture. As a Tech Lead, I manage the full mobile engineering lifecycle — from sprint planning and daily standups to cross-functional collaboration with designers and backend engineers.
              </p>

              {/* Tabs */}
              <div className="flex space-x-8 mb-8 border-b border-white/10 pb-4 overflow-x-auto scrollbar-hide">
                {["skills", "experience", "education"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`capitalize font-semibold tracking-wide transition-colors relative whitespace-nowrap pb-2 ${
                      activeTab === tab ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[350px]">
                <AnimatePresence mode="wait">
                  {activeTab === "skills" && (
                    <motion.div
                      key="skills"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-wrap gap-3"
                    >
                      {skills.map((skill) => (
                        <motion.span
                          key={skill}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.1)", borderColor: "rgba(34, 211, 238, 0.5)" }}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 font-medium transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "experience" && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div className="relative pl-8 border-l border-white/10 group">
                        <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform" />
                        <h3 className="text-white font-bold text-xl">Senior Software Engineer & Tech Lead</h3>
                        <p className="text-cyan-400 text-sm font-medium mb-4 mt-1">Gtech Sources, Lahore, Pakistan</p>
                        <ul className="text-slate-300 space-y-3 list-none">
                          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-slate-500 before:rounded-full">4+ years building production-grade iOS & Android applications (10+ apps shipped).</li>
                          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-slate-500 before:rounded-full">Managing and mentoring a team of mobile developers through sprint planning and daily standups.</li>
                          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-slate-500 before:rounded-full">Focused on performance, clean architecture, offline-first patterns, and CI/CD pipelines.</li>
                          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-slate-500 before:rounded-full">Integrated AI features including ChatGPT API, Meta Llama, and on-device ML.</li>
                          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-slate-500 before:rounded-full">Implemented Native Module Bridging, Universal Links, Mapbox, and Real-time Voice/Video Calling.</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "education" && (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative pl-8 border-l border-white/10 group">
                        <div className="absolute w-4 h-4 bg-fuchsia-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(217,70,239,0.8)] group-hover:scale-125 transition-transform" />
                        <h3 className="text-white font-bold text-xl">B.Sc Electrical Engineering</h3>
                        <p className="text-fuchsia-400 text-sm font-medium mt-1">University of Engineering and Technology Lahore</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative z-10 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Delivering high-quality, scalable mobile solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A showcase of applications I've architected, built, and delivered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/60 to-transparent opacity-90"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <ChevronRight className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10 border-t border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-slate-400 mb-14 leading-relaxed text-lg font-light">
              I'm currently open to senior IC and tech lead roles — remote or hybrid. 
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="mailto:dawoodzia711@gmail.com" 
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-lg font-medium">dawoodzia711@gmail.com</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="tel:923023269189" 
                className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-lg font-medium">+92 302 3269189</span>
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/dawoodzia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 border border-[#0077b5]/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/dawood32" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 border border-white/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/DawoodziaResume.pdf" 
                download 
                className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all ml-4"
              >
                <Download className="w-6 h-6" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center text-slate-500 text-sm z-10 relative bg-[#0D1117]">
        <p>&copy; {new Date().getFullYear()} Dawood Zia. Built with Next.js, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  );
}
