import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Calendar, Award } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "7.9", label: "CGPA" },
    { value: "15+", label: "Certifications" },
    { value: "1.4K+", label: "LinkedIn Followers" },
    { value: "2+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Passionate Developer & Innovator
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a first-year B.Tech CSE student at GIET University Gunupur, passionate about 
              developing innovative solutions for real-world problems. I have experience in 
              <span className="text-foreground font-medium"> web development</span>, 
              <span className="text-foreground font-medium"> data analysis</span>, and 
              <span className="text-foreground font-medium"> machine learning</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I have participated in several hackathons and coding competitions, winning awards 
              for my projects. As a NASA Citizen Scientist, I contribute to real astronomical 
              research. I am always eager to learn new skills and explore emerging technologies.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Education</p>
                  <p className="text-muted-foreground text-xs">B.Tech CSE, GIET University</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-muted-foreground text-xs">Odisha, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Batch</p>
                  <p className="text-muted-foreground text-xs">2023 - 2027</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Achievements</p>
                  <p className="text-muted-foreground text-xs">Hackathon Winner</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl glass text-center hover-lift"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
