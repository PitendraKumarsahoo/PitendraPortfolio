import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Users, FolderGit2, Award, Star, Coffee, Code, Rocket } from "lucide-react";

const stats = [
  { 
    icon: Trophy, 
    value: 10, 
    suffix: "+",
    label: "Projects Completed",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    icon: Award, 
    value: 15, 
    suffix: "+",
    label: "Certifications",
    color: "from-primary to-cyan-400"
  },
  { 
    icon: Users, 
    value: 1400, 
    suffix: "+",
    label: "LinkedIn Followers",
    color: "from-blue-500 to-indigo-500"
  },
  { 
    icon: Code, 
    value: 5000, 
    suffix: "+",
    label: "Lines of Code",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: FolderGit2, 
    value: 25, 
    suffix: "+",
    label: "GitHub Repos",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Coffee, 
    value: 500, 
    suffix: "+",
    label: "Cups of Coffee",
    color: "from-amber-500 to-yellow-500"
  },
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Numbers</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            My Journey in <span className="text-gradient">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl glass hover-lift text-center h-full">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>

                {/* Label */}
                <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
