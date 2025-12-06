// src/components/ContactForm.jsx

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const inputBg = useColorModeValue("white", "sgg.700");
  const inputBorder = useColorModeValue("gray.300", "sgg.700");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // TODO: Add actual form submission logic (e.g., Axios POST request)
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={{ base: 4, md: 8 }}
      borderRadius="lg"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* Name Field */}
        <FormControl id="name" isRequired>
          <FormLabel visibility="hidden">Name</FormLabel>
          <Input
            type="text"
            placeholder="Name"
            bg={inputBg}
            borderColor={inputBorder}
            _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
          />
        </FormControl>

        {/* Email Field */}
        <FormControl id="email" isRequired>
          <FormLabel visibility="hidden">Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            bg={inputBg}
            borderColor={inputBorder}
            _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
          />
        </FormControl>
      </SimpleGrid>

      {/* Subject Field */}
      <FormControl id="subject" mt={6}>
        <FormLabel visibility="hidden">Subject</FormLabel>
        <Input
          type="text"
          placeholder="Sustainable Grid Group"
          defaultValue="Sustainable Grid Group"
          bg={inputBg}
          borderColor={inputBorder}
          _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
        />
      </FormControl>

      {/* Message Field */}
      <FormControl id="message" isRequired mt={6}>
        <FormLabel visibility="hidden">Message</FormLabel>
        <Textarea
          placeholder="Send Message..."
          bg={inputBg}
          borderColor={inputBorder}
          rows={5}
          _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
        />
      </FormControl>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="solid"
        size="lg"
        mt={6}
        px={10}
        rightIcon={<FiSend />}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
