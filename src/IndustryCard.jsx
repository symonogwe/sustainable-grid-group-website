// src/components/IndustryCard.jsx

import { Box, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import AnimateOnScroll from "./MotionBox";

const IndustryCard = ({ icon, label, delay }) => {
  // 🟢 FIX: This hook value is now explicitly used below
  const iconColor = useColorModeValue("sgg.900", "sgg.100"); // Dark on light, Light on dark
  const bgColor = useColorModeValue("white", "sgg.700");

  return (
    <AnimateOnScroll delay={delay}>
      <Box
        p={4}
        textAlign="center"
        transition="all 0.3s"
        h="full"
        // The color for the text/icon is initially set here
        color={iconColor} // 🟢 FIX: Apply the calculated initial color here
        // Subtle hover effect (This handles the color change to green on hover)
        _hover={{
          color: "sgg.500",
          transform: "translateY(-4px)",
        }}
      >
        {/* Icon Circle */}
        <Box
          w={16}
          h={16}
          borderRadius="full"
          bg={bgColor}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          mb={3}
          boxShadow="md"
        >
          <Icon
            as={icon}
            w={8}
            h={8}
            color="inherit" // Inherits color from the parent Box (which is iconColor initially, and sgg.500 on hover)
          />
        </Box>

        {/* Label */}
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="inherit" // Inherits color from parent box
        >
          {label}
        </Text>
      </Box>
    </AnimateOnScroll>
  );
};

export default IndustryCard;
