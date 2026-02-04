import { Github, Linkedin, Mail, Heart } from "lucide-react";

const mailtoLink = `mailto:sahoopitendrakumar@gmail.com?subject=${encodeURIComponent("Portfolio Contact – Pitendrakumar Sahoo")}&body=${encodeURIComponent("Hello Pitendrakumar,\n\nI visited your portfolio and would like to connect with you.")}`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold text-gradient">
              PKS
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © {currentYear} Pitendra Kumar Sahoo. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/pitendra-kumar-sahoo-1379862a8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/PitendraKumarsahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href={mailtoLink}
              target="_top"
              aria-label="Send Email"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Made with love */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};
