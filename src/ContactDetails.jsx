// src/components/ContactDetails.jsx (Corrected)

import { Box, Text, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FiMapPin, FiMail } from "react-icons/fi";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.797499580547!2d36.805550975770934!3d-1.2961195986915635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ea0fbc6043%3A0xf6399b662f6071f8!2s5th%20Avenue%20Suites!5e0!3m2!1sen!2ske!4v1766061281896!5m2!1sen!2ske";

const ContactDetails = () => {
  // 🟢 FIX: mapBorderColor is now used below
  const mapBorderColor = useColorModeValue("gray.300", "sgg.700");
  const iconColor = useColorModeValue("sgg.900", "sgg.500");

  return (
    <Box p={{ base: 4, md: 8 }} borderRadius="lg">
      {/* Actual Map Embed using iframe */}
      <Box
        as="iframe"
        src={MAP_EMBED_URL}
        width="100%"
        height="250px"
        borderRadius="lg"
        // 🟢 FIX: Applied border and borderColor here
        border="2px solid"
        borderColor={mapBorderColor}
        // iframe-specific attributes
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        mb={6}
        boxShadow="md"
      />

      <Flex align="center" mb={2}>
        <Icon as={FiMapPin} w={5} h={5} color={iconColor} mr={3} />
        <Text fontSize="md">5th Avenue Suites,Ngong Rd, Nairobi</Text>
      </Flex>

      <Flex align="center">
        <Icon as={FiMail} w={5} h={5} color={iconColor} mr={3} />
        <Text fontSize="md">info@sustainablegrid.com</Text>
      </Flex>
    </Box>
  );
};

export default ContactDetails;
