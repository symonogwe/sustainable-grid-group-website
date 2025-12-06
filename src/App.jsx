import { Box } from "@chakra-ui/react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import StatsBar from "./StatsBar";
import ServicesSection from "./ServiceSection";
import IndustriesSection from "./IndustriesSection";

function App() {
  return (
    <Box>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <IndustriesSection />
      </main>
    </Box>
  );
}
export default App;
