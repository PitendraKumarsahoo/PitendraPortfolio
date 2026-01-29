import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Rocket, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* NASA Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">NASA Citizen Scientist</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Pitendra Kumar Sahoo</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Undergraduate Computer Science & Engineering student passionate about 
            <span className="text-foreground font-medium"> AI</span>,{" "}
            <span className="text-foreground font-medium">Cloud Computing</span>, and{" "}
            <span className="text-foreground font-medium">Innovative Solutions</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover-lift glow-primary"
            >
              View My Work
            </a>
            <a
              href="/Pitendra_Kumar_Sahoo_CV.pdf"
              download="Pitendra_Kumar_Sahoo_CV.pdf"
              className="px-8 py-3 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://linkedin.com/in/pitendra-kumar-sahoo-1379862a8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/PitendraKumarsahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:contact@pitendra.dev"
              className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
