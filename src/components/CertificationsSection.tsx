import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp, Star } from "lucide-react";

const certifications = [
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "Aug 2025",
    credentialId: "6636537",
    featured: true,
    description: "Certified expertise in Agentforce platform for building scalable Salesforce solutions.",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "Aug 2025",
    featured: true,
    description: "Foundation in AWS Cloud concepts, core services, security, and pricing.",
  },
  {
    title: "Introduction to Industry 4.0 and IIoT",
    issuer: "NPTEL - IIT Kharagpur",
    date: "Oct 2025",
    description: "12-week course on smart factory architecture, IoT protocols, and Industry 4.0.",
  },
  {
    title: "Hashgraph Developer Certification",
    issuer: "The Hashgraph Association",
    date: "Nov 2025",
    credentialId: "8c1c34d6-a74d-47c2-ad30-2dd08fada76d",
    description: "Expertise in Hedera Hashgraph, smart contracts, and DApp development.",
  },
  {
    title: "AI + Sustainability Virtual Internship",
    issuer: "IBM SkillsBuild x 1M1B",
    date: "2025",
    description: "AI applications for sustainability challenges with data-driven insights.",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "2025",
    description: "Foundation in AI concepts, ML, and ethical AI development.",
  },
  {
    title: "AI for All Program",
    issuer: "Intel x CBSE x Digital India",
    date: "Jan 2026",
    description: "AI Aware and AI Appreciate stages certification.",
  },
  {
    title: "Data Analytics Internship",
    issuer: "CTTC Bhubaneswar (MSME)",
    date: "Jun 2025",
    description: "Python, SQL, ML, Tableau, Excel - Student Performance Analysis project.",
  },
  {
    title: "Infosys Springboard Data Visualization",
    issuer: "Infosys Springboard",
    date: "2025",
    description: "Power BI, Business Intelligence, Agile, Database Management.",
  },
  {
    title: "Blockchain Bootcamp",
    issuer: "IDS Inc x Bharat Blockchain Network",
    date: "Feb 2025",
    description: "Foundation in Blockchain technology and decentralized systems.",
  },
  {
    title: "Django Workshop",
    issuer: "TECHHUB CLUB x ACIC GIETU Foundation",
    date: "Mar 2025",
    description: "3-day intensive hands-on Django workshop.",
  },
  {
    title: "Java Training",
    issuer: "IIT Bombay - Spoken Tutorial",
    date: "Sep 2024",
    description: "Java certification with 70% score.",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON",
    date: "2024",
    description: "Professional skills in communication, presentation, and fundamentals.",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Mar 2025",
    credentialId: "RzKSsgeS9xxd98gtt",
    description: "Data analytics job simulation experience.",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Credentials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {certifications.length}+ professional certifications from leading tech organizations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedCerts.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-5 rounded-2xl glass hover-lift ${
                cert.featured ? "gradient-border" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${cert.featured ? "bg-primary/20" : "bg-secondary"}`}>
                  {cert.featured ? (
                    <Star className="w-4 h-4 text-primary" />
                  ) : (
                    <Award className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-sm leading-tight mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary text-xs font-medium mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs mb-2">{cert.date}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                  {cert.credentialId && (
                    <p className="text-muted-foreground text-xs mt-2">
                      ID: {cert.credentialId.slice(0, 12)}...
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-secondary transition-colors"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View All {certifications.length} Certifications <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
