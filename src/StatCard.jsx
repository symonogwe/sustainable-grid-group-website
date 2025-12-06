// src/components/StatCard.jsx (Corrected)

import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import CountUp from "react-countup";

const StatCard = ({ number, suffix = "+", label }) => {
  // Theme colors
  const bg = useColorModeValue("white", "sgg.700");
  const labelColor = useColorModeValue("gray.600", "sgg.100");

  // Gradient text effect for the number
  const gradientText = useColorModeValue(
    "linear(to-r, sgg.900, sgg.500)",
    "linear(to-r, white, sgg.500)"
  );

  return (
    <Box
      p={{ base: 8, md: 10 }}
      bg={bg}
      borderRadius="2xl"
      boxShadow="lg"
      textAlign="center"
      position="relative"
      overflow="hidden"
      transition="all 0.4s ease"
      // 🟢 FIX: Merged the two _hover definitions into one object
      _hover={{
        transform: "translateY(-8px)", // Lift effect
        boxShadow: "2xl",
        borderColor: "sgg.500",

        // Merged the _before pseudo-element styles here
        _before: { opacity: 1 }, // Show the green top bar on hover
      }}
      borderTop="4px solid"
      borderColor="transparent"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        bg: "sgg.500",
        opacity: 0,
        transition: "opacity 0.3s",
      }}
    >
      <Text
        fontSize={{ base: "5xl", md: "6xl" }}
        fontWeight="extrabold"
        bgGradient={gradientText}
        bgClip="text"
        mb={2}
        lineHeight={1}
      >
        <CountUp
          end={number}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
          separator=","
        />
        <span
          style={{ fontSize: "0.6em", verticalAlign: "top", marginLeft: "5px" }}
        >
          {suffix}
        </span>
      </Text>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="bold"
        color={labelColor}
        textTransform="uppercase"
        letterSpacing="wider"
      >
        {label}
      </Text>
    </Box>
  );
};

export default StatCard;
