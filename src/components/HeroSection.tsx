import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Rocket, Download, Star, ArrowRight, Eye } from "lucide-react";
import { FloatingElements } from "./FloatingElements";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
        
        {/* Additional Gradient Layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="flex items-center justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <Star className="w-4 h-4 fill-yellow-500/80 text-yellow-500/80" />
              </motion.div>
            ))}
          </motion.div>

          {/* NASA Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 gradient-border"
          >
            <Rocket className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">NASA Citizen Scientist</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.div>

          {/* Name with Enhanced Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span 
              className="text-gradient relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Pitendra Kumar Sahoo
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </motion.span>
          </motion.h1>

          {/* Title with Typing Effect */}
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

          {/* Animated Tag Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities
            </span>
            <span className="hidden md:block">|</span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to Collaborations
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover-lift glow-primary inline-flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Pitendra_Kumar_Sahoo_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2 gradient-border"
            >
              <Eye className="w-4 h-4" />
              View Resume
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

          {/* Social Links with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="https://linkedin.com/in/pitendra-kumar-sahoo-1379862a8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 transition-all group glow-primary"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com/PitendraKumarsahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:bg-primary/10 transition-all group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:contact@pitendra.dev"
              className="p-3 rounded-xl glass hover:bg-primary/10 transition-all group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
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
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
      <div className="absolute top-20 right-10 w-20 h-20 border-r-2 border-t-2 border-accent/20 rounded-tr-3xl" />
      <div className="absolute bottom-20 left-10 w-20 h-20 border-l-2 border-b-2 border-accent/20 rounded-bl-3xl" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
    </section>
  );
};
