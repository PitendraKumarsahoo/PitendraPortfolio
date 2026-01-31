import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Python", "Django", "Node.js",
  "Tailwind CSS", "PostgreSQL", "AWS", "Docker", "Git", "Vercel",
  "Machine Learning", "Tableau", "Power BI", "Salesforce", "Hedera",
];

export const TechStackMarquee = () => {
  return (
    <div className="py-8 overflow-hidden bg-secondary/30 border-y border-border/50">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* First Row - Left to Right */}
        <motion.div
          className="flex gap-8 mb-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <span
              key={`row1-${index}`}
              className="flex-shrink-0 px-6 py-2 rounded-full glass text-sm font-medium text-muted-foreground whitespace-nowrap hover:text-primary hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Second Row - Right to Left */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...technologies.reverse(), ...technologies].map((tech, index) => (
            <span
              key={`row2-${index}`}
              className="flex-shrink-0 px-6 py-2 rounded-full glass text-sm font-medium text-muted-foreground whitespace-nowrap hover:text-primary hover:border-primary/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
