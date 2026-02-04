import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const mailtoLink = `mailto:sahoopitendrakumar@gmail.com?subject=${encodeURIComponent("Portfolio Contact – Pitendrakumar Sahoo")}&body=${encodeURIComponent("Hello Pitendrakumar,\n\nI visited your portfolio and would like to connect with you.")}`;

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sahoopitendrakumar@gmail.com",
      href: mailtoLink,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Odisha, India",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "pitendra-kumar-sahoo",
      href: "https://linkedin.com/in/pitendra-kumar-sahoo-1379862a8",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "PitendraKumarsahoo",
      href: "https://github.com/PitendraKumarsahoo",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl font-semibold mb-6">Get in Touch</h3>
            
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={
                  info.href.startsWith("http")
                    ? "_blank"
                    : info.href.startsWith("mailto:")
                      ? "_top"
                      : undefined
                }
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={info.label === "Email" ? "Send Email" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl glass hover-lift group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            <div className="p-6 rounded-2xl glass mt-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-5 h-5 text-primary" />
                <h4 className="font-display font-semibold">Quick Response</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                I typically respond within 24 hours. Feel free to reach out on LinkedIn for faster responses!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass">
              <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
