import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('@/components/AboutSection').then(mod => mod.AboutSection));
const SkillsSection = dynamic(() => import('@/components/SkillsSection').then(mod => mod.SkillsSection));
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection').then(mod => mod.ExperienceSection));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection').then(mod => mod.ProjectsSection));
const EducationSection = dynamic(() => import('@/components/EducationSection').then(mod => mod.EducationSection));
const ContactSection = dynamic(() => import('@/components/ContactSection').then(mod => mod.ContactSection));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        <div id="about" className="section-bg"><AboutSection /></div>
        <div id="skills" className="section-bg"><SkillsSection /></div>
        <div id="projects" className="section-bg"><ProjectsSection /></div>
        <div id="experience" className="section-bg"><ExperienceSection /></div>
        <div id="education" className="section-bg"><EducationSection /></div>
        <div id="contact" className="section-bg"><ContactSection /></div>
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
