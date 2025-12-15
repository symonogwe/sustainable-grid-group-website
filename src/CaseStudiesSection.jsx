// src/components/CaseStudiesSection.jsx

import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import CaseStudyCard from "./CaseStudyCard";

const caseStudiesData = [
  {
    title: "Reduced Carbon Footprint by 30% for EnergyCo",
    impact: "Environmental Impact",
    imageSrc: "/src/assets/ssg1.jpg",
  },
  {
    title: "Achieved 95% Community Engagement for HealthCorp",
    impact: "Social Impact",
    imageSrc: "/src/assets/ssg4.jpg",
  },
  {
    title: "Secured ISO 14001 Certification for Jaguar",
    impact: "Governance & Compliance",
    imageSrc: "/src/assets/ssg3.jpg",
  },
];

const CaseStudiesSection = () => {
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const bgColor = useColorModeValue("sgg.100", "sgg.900"); // Use main background color

  return (
    <Box
      id="case-studies"
      bg={bgColor}
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW={"7xl"}>
        {/* Section Header */}
        <Heading
          as="h2"
          size="xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={4}
          color={headingColor}
        >
          Our Impact & Case Studies
        </Heading>

        <Text
          textAlign="center"
          maxW="3xl"
          mx="auto"
          mb={12}
          fontSize="lg"
          color={useColorModeValue("gray.600", "sgg.100")}
        >
          We deliver measurable impact that drives positive and proactive
          environmental and social outcomes.
        </Text>

        {/* Case Studies Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }} // 1 column on mobile, 3 on PC
          spacing={{ base: 8, md: 10 }}
        >
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              impact={study.impact}
              imageSrc={study.imageSrc}
              // Staggered animation
              delay={0.1 + index * 0.15}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CaseStudiesSection;
