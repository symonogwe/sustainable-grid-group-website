import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import ContactForm from "./ContactForm"; // 💡 Import the functional form

const HeroSection = () => {
  const gradient = "linear(to-br, sgg.900, #006657, #38514A)";
  const textColor = "sgg.100";

  // 💡 Modal Logic
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBg = useColorModeValue("sgg.100", "sgg.900");

  // 💡 Scroll Logic for Case Studies
  const handleScrollToCaseStudies = (e) => {
    e.preventDefault();
    const target = document.getElementById("case-studies");
    if (target) {
      const headerOffset = 90;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box
      bgGradient={gradient}
      py={{ base: 20, md: 32 }}
      px={{ base: 4, md: 8 }}
    >
      <Container
        maxW={"6xl"}
        color={textColor}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", sm: "5xl", lg: "6xl" }}
          fontWeight="extrabold"
          lineHeight="1.1"
          mb={6}
        >
          Driving Sustainable Growth <br />
          Through Expert ESG Consulting
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          mx={{ base: "auto", md: "0" }}
          mb={10}
        >
          We partner with organizations to navigate the complexities of
          environmental, social, and governance factors, building a more
          resilient and ethically conscious enterprise.
        </Text>

        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          align={{ base: "center", md: "flex-start" }}
        >
          {/* CTA 1: Opens the Modal */}
          <Button
            variant="solid"
            size="lg"
            px={8}
            onClick={onOpen} // 💡 Trigger Modal
          >
            Start the Project
          </Button>

          {/* CTA 2: Scrolls to Case Studies */}
          <Button
            variant="outline"
            size="lg"
            color={textColor}
            borderColor={textColor}
            _hover={{ bg: "sgg.700", borderColor: "sgg.500" }}
            rightIcon={<FiArrowRight />}
            onClick={handleScrollToCaseStudies} // 💡 Trigger Scroll
          >
            Case Studies
          </Button>
        </Stack>

        {/* 💡 THE PROJECT MODAL */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
          isCentered
          scrollBehavior="inside"
        >
          <ModalOverlay backdropFilter="blur(4px)" />
          <ModalContent bg={modalBg} borderRadius="2xl" p={2}>
            <ModalHeader color="sgg.500" fontSize="2xl" fontWeight="bold">
              Start Your Journey
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Text
                mb={4}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Fill out the details below, and our team will reach out to
                discuss your project requirements via Email or WhatsApp.
              </Text>
              {/* 💡 Reusing our functional ContactForm */}
              <ContactForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default HeroSection;
