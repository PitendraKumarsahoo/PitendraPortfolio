import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TechStackMarquee />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CertificationsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
