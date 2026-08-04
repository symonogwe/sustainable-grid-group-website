import { Box } from "@chakra-ui/react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import StatsBar from "./StatsBar";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServiceSection";
import IndustriesSection from "./IndustriesSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import TeamSection from "./TeamSection";

function App() {
  return (
    <Box>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </main>
    </Box>
  );
}
export default App;
