import ContactSection from '@/components/contact-section';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import ResumeSection from '@/components/resume-section';
import ServicesSection from '@/components/services-section';
import StatsSection from '@/components/stats-section';
import ToolsSection from '@/components/tools-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <ToolsSection />
      <ServicesSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
