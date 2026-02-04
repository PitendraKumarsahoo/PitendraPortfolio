import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Building, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "NASA Citizen Scientist",
    company: "NASA - National Aeronautics and Space Administration",
    period: "Feb 2024 - Present",
    location: "Remote, Washington, USA",
    description: "Contributing to real astronomical research through citizen science programs. Engaged in academic research, astrophysics analysis, and collaborative scientific discovery initiatives.",
    icon: Rocket,
    type: "work",
  },
  {
    title: "Data Analytics Intern",
    company: "CTTC Bhubaneswar (Ministry of MSME)",
    period: "May 2025 - Jun 2025",
    location: "Bhubaneswar, India",
    description: "Completed 1-month internship focused on Python for Data Analysis, SQL/MySQL, Machine Learning, Tableau visualization, and Advanced Excel. Built Student Performance Analysis project.",
    icon: Building,
    type: "work",
  },
  {
    title: "AI + Sustainability Virtual Intern",
    company: "IBM SkillsBuild x 1M1B",
    period: "2025",
    location: "Virtual",
    description: "Explored AI applications for sustainable solutions. Gained hands-on experience with data-driven insights and problem-solving for real-world sustainability challenges.",
    icon: Building,
    type: "work",
  },
  {
    title: "B.Tech Computer Science & Engineering",
    company: "GIET University Gunupur",
    period: "Aug 2023 - Aug 2027",
    location: "Gunupur, Odisha",
    description: "Pursuing undergraduate degree with CGPA 7.9. Active participant in hackathons, coding competitions, and tech workshops. Skills: Web Dev, ML, Data Analysis.",
    icon: GraduationCap,
    type: "education",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Journey</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Experience & Education
          </h2>
        </motion.div>

        {/* Alternating Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary/30 transform -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center mb-8 last:mb-0 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot - Center */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary items-center justify-center glow-primary z-10 border-4 border-background">
                  <exp.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Card */}
                <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="p-6 rounded-2xl glass hover-lift relative group">
                    {/* Arrow pointing to timeline */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-secondary/50 rotate-45 ${
                      isLeft ? "right-[-8px]" : "left-[-8px]"
                    }`} />
                    
                    {/* Mobile icon */}
                    <div className="md:hidden flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center glow-primary">
                        <exp.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground text-sm">{exp.period}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        exp.type === "work" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                      }`}>
                        {exp.type === "work" ? "Experience" : "Education"}
                      </span>
                      <span className="hidden md:inline text-muted-foreground text-sm">{exp.period}</span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-xs mb-3 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      {exp.location}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
