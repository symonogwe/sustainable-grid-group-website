// src/components/ServiceCard.jsx

import { Box, Heading, Text, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import AnimateOnScroll from "./MotionBox";

const ServiceCard = ({ icon, title, description, delay, onClick }) => {
  const bg = useColorModeValue("white", "dark.surface");
  const iconColor = useColorModeValue("sgg.500", "sgg.500"); // Green accent for the icon
  const titleColor = useColorModeValue("sgg.900", "dark.text");
  const descriptionColor = useColorModeValue("gray.600", "dark.text");

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
        display="flex"
        flexDirection="column"
        cursor="pointer"
        onClick={onClick}
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

        <Text fontSize="sm" color={descriptionColor} mb={4}>
          {description}
        </Text>

        {/* Read More affordance — pinned to the bottom of the card */}
        <Flex
          align="center"
          mt="auto"
          fontSize="sm"
          fontWeight="bold"
          color="sgg.500"
        >
          Read More
          <Icon as={FiArrowRight} w={4} h={4} ml={2} />
        </Flex>
      </Box>
    </AnimateOnScroll>
  );
};

export default ServiceCard;
