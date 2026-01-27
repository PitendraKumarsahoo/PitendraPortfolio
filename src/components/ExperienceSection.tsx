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

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-primary to-accent/30" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center glow-primary">
                <exp.icon className="w-3 h-3 text-primary-foreground" />
              </div>

              <div className="p-6 rounded-2xl glass hover-lift ml-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                    exp.type === "work" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    {exp.type === "work" ? "Experience" : "Education"}
                  </span>
                  <span className="text-muted-foreground text-sm">{exp.period}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-primary font-medium text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-xs mb-3">{exp.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
