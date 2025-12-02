// src/components/HeroSection.jsx

import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";

const HeroSection = () => {
  // Use a strong, dark gradient matching the wireframe and our brand palette
  const gradient = "linear(to-br, sgg.900, #006657, #38514A)";
  const textColor = "sgg.100"; // Light text on a dark background

  return (
    // The main container for the Hero section
    <Box
      bgGradient={gradient}
      py={{ base: 20, md: 32 }} // Generous padding for visual impact
      px={{ base: 4, md: 8 }}
    >
      <Container
        maxW={"6xl"}
        color={textColor}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Main Heading */}
        <Heading
          as="h1"
          fontSize={{ base: "3xl", sm: "5xl", lg: "6xl" }}
          fontWeight="extrabold"
          lineHeight="1.1"
          mb={6}
        >
          Driving **Sustainable Growth** <br />
          Through Expert **ESG Consulting**
        </Heading>

        {/* Description Text */}
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          mx={{ base: "auto", md: "0" }}
          mb={10}
        >
          We partner with organizations to navigate the complexities of
          environmental, social, and governance factors, building a more
          resilient and ethically conscious enterprise.
        </Text>

        {/* Call-to-Action Buttons */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          align={{ base: "center", md: "flex-start" }}
        >
          {/* CTA 1: Primary Green Button (Start the Project) */}
          <Button
            as={ReactRouterLink}
            to="/start-project"
            variant="solid"
            size="lg"
            px={8}
            onClick={() => console.log("Navigate to Project Start")}
          >
            Start the Project
          </Button>

          {/* CTA 2: Outline Button (Get to Touch) */}
          <Button
            as={ReactRouterLink}
            to="/contact"
            variant="outline"
            size="lg"
            color={textColor}
            borderColor={textColor}
            _hover={{ bg: "sgg.700", borderColor: "sgg.500" }}
            rightIcon={<FiArrowRight />}
            onClick={() => console.log("Navigate to Contact")}
          >
            Get to Touch
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
