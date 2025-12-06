// src/components/ServiceCard.jsx

import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Icon, // Import Icon component
} from "@chakra-ui/react";
// Import icons for placeholders (FiCheckCircle is a clean choice)
import {
  FiCheckCircle,
  FiShield,
  FiBriefcase,
  FiZap,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";
import AnimateOnScroll from "./MotionBox";

const ServiceCard = ({ icon, title, description, delay }) => {
  const bg = useColorModeValue("white", "sgg.700");
  const iconColor = useColorModeValue("sgg.500", "sgg.500"); // Green accent for the icon
  const titleColor = useColorModeValue("sgg.900", "sgg.100");

  return (
    // Use AnimateOnScroll here for a staggered entrance effect!
    <AnimateOnScroll delay={delay}>
      <Box
        p={6}
        bg={bg}
        borderRadius="xl"
        shadow="lg"
        transition="all 0.3s ease"
        h="full"
        // Subtle hover effect
        _hover={{
          transform: "translateY(-4px)",
          shadow: "xl",
          borderLeft: "4px solid",
          borderColor: iconColor,
        }}
      >
        <Icon as={icon} w={8} h={8} color={iconColor} mb={4} />

        <Heading as="h3" size="md" fontWeight="bold" mb={2} color={titleColor}>
          {title}
        </Heading>

        <Text fontSize="sm" color={useColorModeValue("gray.600", "sgg.100")}>
          {description}
        </Text>
      </Box>
    </AnimateOnScroll>
  );
};

export default ServiceCard;
