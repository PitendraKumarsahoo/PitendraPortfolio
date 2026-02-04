import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import profileImage from "@/assets/pitendra-profile-transparent.png";

const mailtoLink = `mailto:sahoopitendrakumar@gmail.com?subject=${encodeURIComponent("Portfolio Contact – Pitendrakumar Sahoo")}&body=${encodeURIComponent("Hello Pitendrakumar,\n\nI visited your portfolio and would like to connect with you.")}`;

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/pitendra-kumar-sahoo-1379862a8",
    label: "LinkedIn",
    delay: 0,
    angle: 220,
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/pitendra21",
    label: "Instagram",
    delay: 0.1,
    angle: 250,
  },
  {
    icon: Mail,
    href: mailtoLink,
    label: "Send Email",
    delay: 0.2,
    angle: 290,
  },
  {
    icon: Github,
    href: "https://github.com/PitendraKumarsahoo",
    label: "GitHub",
    delay: 0.3,
    angle: 320,
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
      <div className="relative group">
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

        {/* Social Icons (circular arc around the photo) */}
        <div className="pointer-events-none absolute inset-0">
          {socialLinks.map((social) => (
            <div
              key={social.label}
              className="pointer-events-auto absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${social.angle}deg) translate(148px) rotate(-${social.angle}deg)`,
              }}
            >
              <motion.a
                href={social.href}
                target={social.href.startsWith("mailto:") ? "_top" : "_blank"}
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
                  scale: 1.15,
                  boxShadow: "0 10px 28px -8px hsl(var(--primary) / 0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative grid place-items-center w-12 h-12 rounded-full bg-background border-2 border-primary/50 shadow-lg hover:border-primary hover:bg-primary/10 transition-colors group/icon"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover/icon:text-primary transition-colors" />

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-foreground text-background rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {social.label}
                </span>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
