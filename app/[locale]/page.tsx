import WelcomeSection from "@/components/sections/WelcomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import ContactSection from "@/components/sections/ContactSection";
import AdsSection from "@/components/sections/AdsSection";


export default function Home() {
  return (
    <div className="flex flex-col">
      <WelcomeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TemplatesSection />
      <ContactSection />
      <AdsSection />
    </div>
  );
}
