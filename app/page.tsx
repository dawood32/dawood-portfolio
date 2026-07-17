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
    "React Native",
    "React",
    "Redux",
    "Firebase",
    "Push Notification",
    "Socket.io",
    "Android Studio",
    "Xcode",
    "Postman",
    "Git",
    "Figma",
    "Clickup",
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Custom App Development",
      description:
        "I specialize in building high-performance, scalable, and cross-platform mobile applications using React Native. Whether you need an MVP for your startup or a full-fledged mobile app, I ensure seamless UI/UX, smooth functionality, and integration with third-party services.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "UI Design Implementation",
      description:
        "Have a Figma design and need it transformed into a fully functional mobile app? I bring your UI/UX designs to life with pixel-perfect implementation. I ensure responsiveness across all devices, optimize performance, and integrate necessary logic.",
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: "App Performance Optimization",
      description:
        "A well-performing app is key to user satisfaction. I provide ongoing support, bug fixes, and performance optimization to keep your React Native app running smoothly. Whether it's reducing load time, fixing crashes, or enhancing UI responsiveness.",
    },
  ];

  const projects = [
    {
      title: "DealersHive",
      category: "E-commerce App",
      gradient: "from-blue-600/20 to-purple-600/20",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "VetPet Central",
      category: "Veterinary Appointment Booking",
      gradient: "from-emerald-600/20 to-teal-600/20",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "DVMCentral",
      category: "E-commerce App",
      gradient: "from-orange-600/20 to-red-600/20",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Acron.vet",
      category: "Veterinary Platform",
      gradient: "from-cyan-600/20 to-blue-600/20",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "VetRep Finder",
      category: "Veterinary Directory",
      gradient: "from-indigo-600/20 to-purple-600/20",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "PetVet Shop",
      category: "E-commerce App",
      gradient: "from-fuchsia-600/20 to-pink-600/20",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Dawood Zia
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
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
              className="md:hidden bg-[#0a0a0a] border-b border-white/5"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-400 hover:text-white transition-colors"
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
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-blue-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Mobile App Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting seamless <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                mobile experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              I build cross-platform mobile applications for optimal performance on iOS and Android using React Native.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-slate-200 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-slate-900 border border-white/10 relative">
                {/* Fallback image style since actual image is local and might not exist */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800"
                  alt="Dawood Zia"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Skilled React Native developer adept at crafting cross-platform solutions for optimal performance on iOS and Android. Proficient in integrating libraries, APIs, and third-party services. Well-versed in Redux for streamlined data flow and Firebase for robust user authentication and real-time database integration.
              </p>

              {/* Tabs */}
              <div className="flex space-x-6 mb-8 border-b border-white/10 pb-4">
                {["skills", "experience", "education"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`capitalize font-medium transition-colors relative ${
                      activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[250px]">
                <AnimatePresence mode="wait">
                  {activeTab === "skills" && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-wrap gap-3"
                    >
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "experience" && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5" />
                        <h3 className="text-white font-medium text-lg">React Native Developer</h3>
                        <p className="text-blue-400 text-sm mb-3">Gtech Sources, Lahore, Pakistan</p>
                        <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                          <li>Developed cross-platform mobile applications using React Native, specializing in Firebase, S3 bucket integration.</li>
                          <li>Integrated third-party services, APIs, and libraries.</li>
                          <li>Collaborated on seamless user experiences, implemented responsive interfaces.</li>
                          <li>Managed and led a team in handling diverse scenarios.</li>
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
                    >
                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5" />
                        <h3 className="text-white font-medium text-lg">B.Sc Electrical Engineering</h3>
                        <p className="text-purple-400 text-sm">University of Engineering and Technology Lahore</p>
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
      <section id="services" className="py-24 relative border-t border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Delivering high-quality solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A showcase of applications I've built and contributed to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-80"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-blue-400 text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <ChevronRight className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative border-t border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-slate-400 mb-12 leading-relaxed">
              I'm currently available for freelance work and open to new opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <a href="mailto:dawoodzia711@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                dawoodzia711@gmail.com
              </a>
              <a href="tel:923023269189" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                +92 302 3269189
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/dawoodzia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="/DawoodziaResume.pdf" 
                download 
                className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-slate-200 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Dawood Zia. All rights reserved.</p>
      </footer>
    </div>
  );
}
