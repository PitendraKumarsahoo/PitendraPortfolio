import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Pitendra demonstrated exceptional problem-solving skills and a deep understanding of AI concepts during our collaboration.",
    author: "NASA Citizen Science Program",
    role: "Research Collaboration",
    rating: 5,
  },
  {
    quote: "Outstanding data analytics skills with a strong grasp of Python, SQL, and visualization tools. A truly dedicated learner.",
    author: "CTTC Bhubaneswar",
    role: "Internship Program",
    rating: 5,
  },
  {
    quote: "Innovative approach to problem-solving and excellent teamwork. His ResumeAI project showcased remarkable technical abilities.",
    author: "Hackathon Jury",
    role: "Competition Feedback",
    rating: 5,
  },
];

const achievements = [
  { title: "NASA Citizen Scientist", subtitle: "Astronomical Research Contributor" },
  { title: "IBM SkillsBuild", subtitle: "AI + Sustainability Certified" },
  { title: "Data Analytics Intern", subtitle: "CTTC Ministry of MSME" },
  { title: "Hackathon Winner", subtitle: "Multiple Competition Awards" },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-secondary/20" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-accent/20 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Recognition</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Feedback & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl glass hover-lift h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 p-2 rounded-full bg-primary glow-primary">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-primary text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl" />
          <div className="relative p-8 rounded-2xl glass overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl gradient-border" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{achievement.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{achievement.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
