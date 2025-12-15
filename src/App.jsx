import { Box } from "@chakra-ui/react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import StatsBar from "./StatsBar";
import ServicesSection from "./ServiceSection";
import IndustriesSection from "./IndustriesSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function App() {
  return (
    <Box>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </Box>
  );
}
export default App;
