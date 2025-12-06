// src/components/TestimonialCard.jsx

import {
  Box,
  Text,
  Flex, // Use Flex for vertical stacking
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import AnimateOnScroll from "./MotionBox";
import { FiMessageSquare } from "react-icons/fi";

const TestimonialCard = ({ quote, clientName, clientTitle, delay }) => {
  const bg = useColorModeValue("white", "sgg.700");
  const quoteColor = useColorModeValue("gray.700", "sgg.100");
  const clientColor = useColorModeValue("sgg.900", "sgg.500");

  return (
    <AnimateOnScroll delay={delay}>
      <Box
        p={8}
        bg={bg}
        borderRadius="xl"
        shadow="lg"
        // 🟢 FIX 1: Make the outer Box a Flex container that spans the full height
        h="full"
        display="flex"
        flexDirection="column"
        justifyContent="space-between" // Pushes the bottom content down
        borderLeft="4px solid"
        borderColor="sgg.500"
        transition="all 0.3s ease"
        _hover={{
          shadow: "xl",
          transform: "translateY(-2px)",
        }}
      >
        {/* 1. QUOTE SECTION (Will take up required space) */}
        <Box flexGrow={1} mb={4}>
          <Flex justify="space-between" align="start">
            <Text
              as="blockquote"
              fontSize={{ base: "md", md: "lg" }}
              fontStyle="italic"
              color={quoteColor}
            >
              "{quote}"
            </Text>
            <Icon
              as={FiMessageSquare}
              w={6}
              h={6}
              color="sgg.500"
              opacity={0.2}
              ml={4}
              flexShrink={0}
            />
          </Flex>
        </Box>

        {/* 2. CLIENT DETAILS (Pinned to the bottom) */}
        <Box
          mt={4}
          pt={2}
          borderTop="1px solid"
          borderColor={useColorModeValue("gray.100", "sgg.900")}
        >
          <Text fontWeight="bold" color={clientColor} fontSize="md">
            {clientName}
          </Text>
          <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
            {clientTitle}
          </Text>
        </Box>
      </Box>
    </AnimateOnScroll>
  );
};

export default TestimonialCard;
