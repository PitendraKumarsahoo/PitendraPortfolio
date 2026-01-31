import { motion } from "framer-motion";
import { Code2, Database, Cloud, Cpu, Sparkles, Rocket, Globe, Zap } from "lucide-react";

const floatingIcons = [
  { Icon: Code2, delay: 0, x: "10%", y: "20%" },
  { Icon: Database, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Cloud, delay: 1, x: "5%", y: "60%" },
  { Icon: Cpu, delay: 1.5, x: "90%", y: "55%" },
  { Icon: Sparkles, delay: 2, x: "15%", y: "80%" },
  { Icon: Rocket, delay: 2.5, x: "80%", y: "75%" },
  { Icon: Globe, delay: 3, x: "25%", y: "10%" },
  { Icon: Zap, delay: 3.5, x: "75%", y: "85%" },
];

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="p-3 rounded-xl glass opacity-60">
            <Icon className="w-5 h-5 text-primary/60" />
          </div>
        </motion.div>
      ))}

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          left: "70%",
          top: "30%",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          left: "20%",
          top: "60%",
          background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
