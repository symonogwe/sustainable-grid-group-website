// src/components/TestimonialsSection.jsx

import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    quote:
      "Sustainable Grid Group provided clear, actionable strategy. Their guidance was instrumental in shifting our operations towards carbon neutrality.",
    clientName: "Sarah L., CEO of EkoGrade Corp",
    clientTitle: "Client, Manufacturing Sector",
  },
  {
    quote:
      "Navigating the complexities of ESG made it effortless and helped us identify immediate value chains for growth.",
    clientName: "Michael B., Director at Tech Solutions",
    clientTitle: "Partner, Technology Sector",
  },
  {
    quote:
      "Their innovative improvements gave us 45% reduction in key resource consumption. A professional and highly efficient team.",
    clientName: "James Warner, Operations Head, Choice Logistics",
    clientTitle: "Client, Logistics Sector",
  },
];

const TestimonialsSection = () => {
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const bgColor = useColorModeValue("sgg.100", "sgg.900"); // Background color matches the wireframe (light gray)

  return (
    <Box
      id="clients"
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
          What Our Clients Say
        </Heading>

        <Text
          textAlign="center"
          maxW="3xl"
          mx="auto"
          mb={12}
          fontSize="lg"
          color={useColorModeValue("gray.600", "sgg.100")}
        >
          Building impactful partnerships is at the heart of what we do.
        </Text>

        {/* Testimonials Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }} // Stacks on mobile, 3 columns on PC
          spacing={{ base: 6, md: 10 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              clientName={testimonial.clientName}
              clientTitle={testimonial.clientTitle}
              delay={0.1 + index * 0.1} // Staggered animation
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
