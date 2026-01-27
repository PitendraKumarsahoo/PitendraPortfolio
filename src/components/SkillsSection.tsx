import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    title: "Backend & Database",
    skills: ["Django", "Node.js", "MySQL", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Salesforce", "Docker", "Git", "Vercel"],
  },
  {
    title: "AI & Data",
    skills: ["Machine Learning", "Data Analytics", "Tableau", "Power BI", "Excel"],
  },
  {
    title: "Blockchain & IoT",
    skills: ["Hedera Hashgraph", "Smart Contracts", "Industry 4.0", "IIoT"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl glass hover-lift"
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-gradient">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
