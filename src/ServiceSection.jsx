// src/components/ServicesSection.jsx

import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import {
  FiCheckCircle,
  FiShield,
  FiBriefcase,
  FiZap,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

const servicesData = [
  {
    icon: FiBriefcase,
    title: "ESG Advisory",
    description:
      "Integrate ESG factors into core strategy for long-term value creation.",
  },
  {
    icon: FiShield,
    title: "Competence & Risk",
    description:
      "Equip leadership with tools to safeguard corporate resilience and integrity.",
  },
  {
    icon: FiCheckCircle,
    title: "Government Support",
    description: "Navigate complex regulations to ensure successful projects.",
  },
  {
    icon: FiTarget,
    title: "Community Impact",
    description:
      "Designing and managing engagement strategies to optimize local value.",
  },
  {
    icon: FiZap,
    title: "ESG Certification",
    description:
      "Expert support for achieving industry-specific ESG standards.",
  },
  {
    icon: FiBarChart2,
    title: "Reporting & Analytics",
    description:
      "Comprehensive new analysis and reporting to improve data accuracy.",
  },
];

const ServicesSection = () => {
  const headingColor = useColorModeValue("sgg.900", "sgg.100");

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 8 }}>
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
          Our Core Services
        </Heading>

        <Text
          textAlign="center"
          maxW="2xl"
          mx="auto"
          mb={12}
          fontSize="lg"
          color={useColorModeValue("gray.600", "sgg.100")}
        >
          We offer a comprehensive suite of services designed to address your
          unique requirements across the environmental, social, and governance
          spectrum.
        </Text>

        {/* Services Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }} // 1 on mobile, 2 on tablet, 3 on desktop
          spacing={8}
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              // Stagger the animation timing for a very neat entrance effect
              delay={0.1 + index * 0.1}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
