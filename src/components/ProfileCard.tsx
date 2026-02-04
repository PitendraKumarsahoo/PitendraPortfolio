import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import profileImage from "@/assets/pitendra-profile-transparent.png";

const mailtoLink = "mailto:sahoopitendrakumar@gmail.com?subject=Portfolio%20Contact%20%E2%80%93%20Pitendrakumar%20Sahoo&body=Hello%20Pitendrakumar%2C%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/pitendra-kumar-sahoo-1379862a8",
    label: "LinkedIn",
    delay: 0,
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/pitendra21",
    label: "Instagram",
    delay: 0.1,
  },
  {
    icon: Mail,
    href: mailtoLink,
    label: "Send Email",
    delay: 0.2,
  },
  {
    icon: Github,
    href: "https://github.com/PitendraKumarsahoo",
    label: "GitHub",
    delay: 0.3,
  },
];

interface ProfileCardProps {
  isInView: boolean;
}

export const ProfileCard = ({ isInView }: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col items-center"
    >
      {/* Profile Image Container */}
      <div className="relative group mb-6">
        {/* Outer Glow Ring */}
        <motion.div
          className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-md"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Border Ring */}
        <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent p-[3px]">
          <div className="w-full h-full rounded-full bg-background" />
        </div>
        
        {/* Profile Image */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50">
          <img
            src={profileImage}
            alt="Pitendra Kumar Sahoo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Social Icons - Horizontal Row Below Photo */}
      {/* Social Icons - Round buttons below photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center gap-5 mt-2"
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.5 + social.delay,
              type: "spring",
              stiffness: 220,
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0 8px 25px -5px hsl(var(--primary) / 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary shadow-xl hover:border-accent hover:from-primary/30 hover:to-accent/30 transition-all duration-300 group/icon"
          >
            <social.icon className="w-6 h-6 text-primary group-hover/icon:text-accent transition-colors" />

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
              {social.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};
