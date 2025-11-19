"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "AES Image Steganography with Fingerprint Auth",
      description: "Built a biometric-secured steganography system integrating fingerprint matching, AES encryption, and image hiding. Implemented comparative analysis of AES, RSA, and Blowfish on encryption time, integrity, and throughput.",
      tags: ["Python", "PyQt5", "AES", "Cryptography", "Biometrics"],
      link: "#",
      image: "/steganography.png"
    },
    {
      title: "Task Management App",
      description: "Built a collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      link: "https://tskmgt-uhle7sb0ag.mgx.world",
      image: "/modern-chat-interface.png",
    },
    {
      title: "Social Media Dashboard",
      description: "Created an analytics dashboard for social media metrics with data visualization and reporting features.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "https://smalytics.lovable.app",
      image: "/analytics-dashboard.png",
    },
  ]

  const skills = [
    { 
      category: "Frontend", 
      items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "GraphQL"] 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express.js", "Django", "Flask", "Python", "RESTful APIs", "GraphQL", "SQL", "NoSQL"] 
    },
    { 
      category: "Cloud & DevOps", 
      items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] 
    },
    {
      category: "Tools",
      items: ["Git", "Jira", "Postman", "VS Code", "Figma"]
    }
  ]
  
  const experience = [
    {
      role: "Full Stack Developer",
      company: "Clipper Ventures Inc.",
      period: "2022 - Present",
      description: "Leading the development of scalable web applications using modern JavaScript frameworks and cloud technologies."
    },
    {
      role: "Software Developer",
      company: "Edmoss Global Ventures",
      period: "2023 - 2024",
      description: "Developed responsive applications and collaborated with cross-functional teams to deliver high-quality products."
    }
  ]
  
  const education = {
    degree: "BSc in Computer Science",
    institution: "Federal University Of Oye-Ekiti",
    period: "2021 - 2025"
  }
  
  const certifications = [
    "Software Developer",
    "Data Analyst"
  ]

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Elon Chuks 
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-sm font-medium hover:text-primary transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Elon Chuks
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
            Software Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            I build exceptional digital experiences with modern web and mobile technologies. data systems and software architectures   
            Currently focused on developing scalable applications with React, Node.js, and cloud platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("projects")} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              View My Work →
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Tech Stack Icons */}
          <div className="mt-16">
            <p className="text-sm text-muted-foreground text-center mb-6">TECH STACK</p>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "⏭️" },
                { name: "TypeScript", icon: "TS" },
                { name: "Node.js", icon: "🔹" },
                { name: "Python", icon: "🐍" },
                { name: "AWS", icon: "☁️" }
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center group">
                  <div className="w-14 h-14 bg-muted/50 hover:bg-muted rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 shadow-sm">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <span className="mt-2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Software Developer with more than 4 years of hands-on experience in web development,
                 backend engineering, data analysis, 
                 and applied machine learning. Skilled in building production-ready systems using HTML, CSS, JavaScript, Node.js, and Python.
                  Strong background in creating dashboards, biometric authentication systems, data-driven applications, and AI-powered solutions.
                   Adept at transforming complex datasets into actionable insights, 
                improving user experience, and building secure, scalable software systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/royChuks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  <span>GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6"></path>
                    <path d="M21 3l-9 9"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/david-chuks-5bab15240" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  <span>LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6"></path>
                    <path d="M21 3l-9 9"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-muted/30 rounded-xl">
                <h3 className="font-medium mb-3">Experience</h3>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-medium">{exp.role}</h4>
                      <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                      <p className="text-sm mt-1 text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-muted/30 rounded-xl">
                <h3 className="font-medium mb-3">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">{education.degree}</h4>
                  <p className="text-sm text-muted-foreground">{education.institution} • {education.period}</p>
                </div>
              </div>
              
              <div className="p-6 bg-muted/30 rounded-xl">
                <h3 className="font-medium mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              My Work
            </span>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="overflow-hidden h-48 bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              My Expertise
            </span>
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of technologies and tools I've worked with throughout my development journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you!
            </p>
          </div>
          
          <div className="bg-card p-8 sm:p-10 rounded-2xl shadow-sm border border-border max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:chuks7061@gmail.com" 
                className="group p-6 bg-muted/30 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Email Me</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  chuks7061@gmail.com
                </p>
              </a>
              
              <a 
                href="tel:+905517946115" 
                className="group p-6 bg-muted/30 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Call Me</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  +234 90 551 794 6115
                </p>
              </a>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h3 className="font-medium mb-4">Or connect with me on</h3>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/royChuks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/david-chuks-5bab15240" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Elon Chuks
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Software Developer passionate about creating exceptional digital experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h3 className="font-medium mb-3">Navigation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#projects" className="hover:text-foreground transition-colors">Projects</a></li>
                  <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
                  <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Connect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a 
                      href="https://github.com/royChuks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span>GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://linkedin.com/in/david-chuks-5bab15240" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span>LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://v0-resume-page-creation-ithics.vercel.app/" 
                      className="hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span>Resume page</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Elon Chuks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
