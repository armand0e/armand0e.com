import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
// Import other sections here as they are created
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        {/* Placeholder for other sections */}
        {/* <div className="container mx-auto p-4 my-12">
          <div id="contact" className="my-12 h-96 bg-muted rounded-lg flex items-center justify-center">
            <p>Contact Section (Placeholder)</p>
          </div>
        </div> */}
      </main>
    </>
  );
}
