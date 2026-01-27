import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, BarChart3, ShoppingCart, Activity } from "lucide-react";

const projects = [
  {
    title: "ResumeAI",
    description: "AI-powered web application that helps users instantly generate professional, ATS-friendly resumes with multiple templates and A4 PDF export. Built with Next.js & React.",
    tech: ["Next.js", "React", "Tailwind CSS", "AI", "PDF Generation"],
    liveUrl: "https://resume-ai-demo.vercel.app",
    githubUrl: "https://github.com/PitendraKumarsahoo/studio",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Student Performance Analysis",
    description: "Data analytics project exploring student data to uncover performance trends and visualize insights using Python and Tableau. Completed during CTTC internship.",
    tech: ["Python", "Tableau", "Data Analysis", "Machine Learning"],
    githubUrl: "https://github.com/PitendraKumarsahoo",
    icon: BarChart3,
    featured: false,
  },
  {
    title: "E-Commerce Web App",
    description: "Full-featured e-commerce platform with product listings, cart functionality, and modern UI. Demonstrates full-stack web development skills.",
    tech: ["React", "Node.js", "MySQL", "REST API"],
    githubUrl: "https://github.com/PitendraKumarsahoo/Ecomm-web-app",
    icon: ShoppingCart,
    featured: false,
  },
  {
    title: "HabitPro Tracker",
    description: "Colorful habit tracking application to help users build and maintain positive daily habits with visual progress indicators.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    githubUrl: "https://github.com/PitendraKumarsahoo/habitpro-colorful-tracker",
    icon: Activity,
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-6 rounded-2xl glass hover-lift ${
                project.featured ? "md:col-span-2 gradient-border" : ""
              }`}
            >
              <div className={`${project.featured ? "md:flex md:gap-8 md:items-start" : ""}`}>
                <div className={`${project.featured ? "md:flex-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    {project.featured && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/PitendraKumarsahoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-secondary transition-colors"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
