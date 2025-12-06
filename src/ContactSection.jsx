// src/components/ContactSection.jsx

import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import AnimateOnScroll from "./MotionBox";

const ContactSection = () => {
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const bgColor = useColorModeValue("sgg.100", "sgg.900");

  return (
    <Box
      bg={bgColor}
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
      id="contact"
    >
      <Container maxW={"7xl"}>
        <AnimateOnScroll delay={0.1}>
          {/* Section Header */}
          <Heading
            as="h2"
            size="xl"
            fontWeight="extrabold"
            textAlign="center"
            mb={4}
            color={headingColor}
          >
            Contact Us
          </Heading>

          <Text
            textAlign="center"
            maxW="3xl"
            mx="auto"
            mb={12}
            fontSize="lg"
            color={useColorModeValue("gray.600", "sgg.100")}
          >
            Let's discuss how we can help you achieve your sustainability goals.
          </Text>

          {/* Form and Map Grid */}
          <SimpleGrid
            columns={{ base: 1, lg: 2 }} // Form stacks on mobile, splits 50/50 on PC
            spacing={{ base: 10, lg: 20 }}
          >
            <ContactForm />
            <ContactDetails />
          </SimpleGrid>
        </AnimateOnScroll>
      </Container>
    </Box>
  );
};

export default ContactSection;
