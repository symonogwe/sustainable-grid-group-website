// src/components/IndustriesSection.jsx

import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import IndustryCard from "./IndustryCard";
import AnimateOnScroll from "./MotionBox";

// Import domain-specific icons
import {
  FiBriefcase,
  FiGlobe,
  FiDollarSign,
  FiSettings,
  FiZap,
  FiHeart,
} from "react-icons/fi";

const industriesData = [
  { icon: FiBriefcase, label: "Corporate" },
  { icon: FiGlobe, label: "Public Sector" },
  { icon: FiDollarSign, label: "NGOs" },
  { icon: FiSettings, label: "Manufacturing" },
  { icon: FiZap, label: "Energy" },
  { icon: FiHeart, label: "Healthcare" },
];

const IndustriesSection = () => {
  const headingColor = useColorModeValue("sgg.900", "sgg.100");

  return (
    <Box id="industries" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Container maxW={"6xl"}>
        {/* Section Header */}
        <Heading
          as="h2"
          size="xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={4}
          color={headingColor}
        >
          Industries We Serve
        </Heading>

        <Text
          textAlign="center"
          maxW="3xl"
          mx="auto"
          mb={12}
          fontSize="lg"
          color={useColorModeValue("gray.600", "sgg.100")}
        >
          Our expertise spans across diverse sectors, delivering tailored ESG
          solutions.
        </Text>

        {/* Industries Grid */}
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 6 }} // 2 on mobile, 3 on tablet, 6 on PC
          spacing={{ base: 6, md: 10 }}
        >
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              label={industry.label}
              // Stagger the animation for a sequential float-in effect
              delay={0.1 + index * 0.05}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default IndustriesSection;
