import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  useColorModeValue,
  useToast, // 💡 New: For user feedback
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import { useState } from "react"; // 💡 New: For managing form state

const ContactForm = () => {
  const toast = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Sustainable Grid Group Inquiry", // Default subject
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputBg = useColorModeValue("white", "sgg.700");
  const inputBorder = useColorModeValue("gray.300", "sgg.700");

  // 1. State Change Handler
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  // 2. Mock Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 💡 Placeholder for actual API call (e.g., using Axios or Fetch)
      // In a real application, this would post to a serverless function (AWS Lambda, Azure, Firebase)
      console.log("Submitting form data:", formState);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 3. Success Feedback
      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. We will respond within 48 hours.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      // Clear the form
      setFormState({
        name: "",
        email: "",
        subject: "Sustainable Grid Group Inquiry",
        message: "",
      });
    } catch (error) {
      // 4. Error Feedback
      console.error("Form Submission Error:", error);
      toast({
        title: "Submission Failed.",
        description:
          "There was an error sending your message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
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
            value={formState.name} // 💡 Controlled Input
            onChange={handleChange} // 💡 State Handler
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
            value={formState.email} // 💡 Controlled Input
            onChange={handleChange} // 💡 State Handler
            _placeholder={{ color: useColorModeValue("gray.500", "gray.400") }}
          />
        </FormControl>
      </SimpleGrid>

      {/* Subject Field (Non-required, default value) */}
      <FormControl id="subject" mt={6}>
        <FormLabel visibility="hidden">Subject</FormLabel>
        <Input
          type="text"
          placeholder="Subject"
          bg={inputBg}
          borderColor={inputBorder}
          value={formState.subject} // 💡 Controlled Input
          onChange={handleChange} // 💡 State Handler
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
          value={formState.message} // 💡 Controlled Input
          onChange={handleChange} // 💡 State Handler
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
        isLoading={isLoading} // 💡 Show spinner while submitting
        loadingText="Sending"
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
