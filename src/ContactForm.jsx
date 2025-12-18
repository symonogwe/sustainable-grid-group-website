import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Stack,
  useColorModeValue,
  useToast,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiSend,
  FiMessageCircle,
  FiUser,
  FiMail,
  FiEdit3,
} from "react-icons/fi";
import { useState } from "react";

const ContactForm = () => {
  const toast = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Sustainable Grid Group Inquiry",
    message: "",
    _honeypot: "", // 💡 Security: Honeypot field to catch bots
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputBg = useColorModeValue("white", "sgg.700");
  const inputBorder = useColorModeValue("gray.300", "sgg.700");
  const whatsappHoverBg = useColorModeValue("green.600", "green.500");

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  // --- 💡 VALIDATION LOGIC ---
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  // --- EMAIL SUBMISSION ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Bot Check (Security)
    if (formState._honeypot) return;

    // 2. Validation Check
    if (!validateEmail(formState.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@sustainablegridgroup.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formState.name,
            Email: formState.email,
            Subject: formState.subject,
            Message: formState.message,
            _subject: "New Website Inquiry: Sustainable Grid Group", // A clear, static subject
            _template: "table", // Uses a structured table which looks less like a "bot" message
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Email Sent!",
          status: "success",
          position: "top-right",
        });
        setFormState({
          name: "",
          email: "",
          subject: "Sustainable Grid Group Inquiry",
          message: "",
          _honeypot: "",
        });
      }
    } catch (error) {
      // 💡 FIX: We now use the 'error' variable by logging it
      console.error("Form Submission Error:", error);

      toast({
        title: "Submission Failed",
        description: "Please try again later or use the WhatsApp option.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // --- WHATSAPP REDIRECT ---
  const handleWhatsApp = () => {
    if (!formState.name || !formState.message) {
      toast({ title: "Missing Info", status: "warning" });
      return;
    }
    const phoneNumber = "254705976306";
    const text = `*New Inquiry*\n*Name:* ${formState.name}\n*Message:* ${formState.message}`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={{ base: 4, md: 8 }}>
      {/* 💡 SECURITY: Hidden Honeypot Field */}
      <Input
        type="text"
        id="_honeypot"
        display="none"
        value={formState._honeypot}
        onChange={handleChange}
      />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl id="name" isRequired>
          <InputGroup>
            <InputLeftElement children={<FiUser color="gray.500" />} />
            <Input
              placeholder="Full Name"
              bg={inputBg}
              borderColor={inputBorder}
              value={formState.name}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" isRequired>
          <InputGroup>
            <InputLeftElement children={<FiMail color="gray.500" />} />
            <Input
              type="email"
              placeholder="Email Address"
              bg={inputBg}
              borderColor={inputBorder}
              value={formState.email}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
      </SimpleGrid>

      <FormControl id="subject" mt={6}>
        <InputGroup>
          <InputLeftElement children={<FiEdit3 color="gray.500" />} />
          <Input
            placeholder="Subject"
            bg={inputBg}
            borderColor={inputBorder}
            value={formState.subject}
            onChange={handleChange}
          />
        </InputGroup>
      </FormControl>

      <FormControl id="message" isRequired mt={6}>
        <Textarea
          placeholder="Your Message..."
          bg={inputBg}
          borderColor={inputBorder}
          rows={5}
          value={formState.message}
          onChange={handleChange}
        />
      </FormControl>

      <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={8}>
        <Button
          type="submit"
          variant="solid"
          size="lg"
          flex={1}
          rightIcon={<FiSend />}
          isLoading={isLoading}
        >
          Send Email
        </Button>

        <Button
          onClick={handleWhatsApp}
          variant="outline"
          size="lg"
          flex={1}
          // 💡 STYLING FIX: Explicit colors for hover to prevent disappearing text
          borderColor="whatsapp.500"
          color={useColorModeValue("whatsapp.600", "whatsapp.400")}
          leftIcon={<FiMessageCircle />}
          _hover={{
            bg: whatsappHoverBg,
            color: "white",
            borderColor: whatsappHoverBg,
            transform: "translateY(-2px)",
          }}
          transition="all 0.2s"
        >
          Send WhatsApp
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;
