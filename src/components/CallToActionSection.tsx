import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink, Sparkles, Brain, Lightbulb, Target } from "lucide-react";

const callToActionItems = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Explore my projects utilizing cutting-edge AI technologies",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Real-world problem solving with modern tech stack",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering impactful and scalable solutions",
  },
];

export const CallToActionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Open to Opportunities</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span> Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether it's a startup idea, a complex technical challenge, or an innovative research project,
              I'm always excited to collaborate and bring ideas to life.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {callToActionItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover-lift inline-flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/pitendra-kumar-sahoo-1379862a8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-border font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              Connect on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
