// src/components/CaseStudyCard.jsx

import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Image,
  //   useColorModeValue,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import AnimateOnScroll from "./MotionBox";

// Dummy image source - replace with your actual images later
const DUMMY_IMAGE =
  "https://placehold.co/600x400/38514A/F7FAFC?text=Case+Study";

const CaseStudyCard = ({ title, impact, imageSrc = DUMMY_IMAGE, delay }) => {
  const textColor = "white";
  const overlayBg =
    "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%)";

  return (
    <AnimateOnScroll delay={delay}>
      <Box
        role="group"
        borderRadius="xl"
        overflow="hidden"
        position="relative"
        h="400px" // Fixed height for visual consistency
        shadow="xl"
        transition="all 0.4s ease"
        _hover={{
          transform: "translateY(-6px)",
          shadow: "2xl",
        }}
      >
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={title}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.05)" }} // Zoom on hover
        />

        {/* Dark Overlay for Readability */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg={overlayBg}
        />

        {/* Content (Text and Link) */}
        <VStack
          position="absolute"
          bottom={0}
          left={0}
          p={6}
          w="100%"
          align="start"
          spacing={3}
          color={textColor}
        >
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="sgg.500" // Green accent for the impact statement
            textTransform="uppercase"
          >
            {impact}
          </Text>

          <Heading as="h3" size="md" fontWeight="bold" lineHeight="short">
            {title}
          </Heading>

          <ChakraLink
            href="#"
            fontSize="sm"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none", color: "sgg.500" }}
          >
            Read More <FiArrowRight style={{ marginLeft: "5px" }} />
          </ChakraLink>
        </VStack>
      </Box>
    </AnimateOnScroll>
  );
};

export default CaseStudyCard;
