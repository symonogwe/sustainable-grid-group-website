import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import CaseStudyCard from "./CaseStudyCard";

// 🟢 Standardizing asset paths for production stability
import ssg1 from "../src/assets/ssg1.jpg";
import ssg4 from "../src/assets/ssg4.jpg";
import ssg3 from "../src/assets/ssg3.jpg";

const caseStudiesData = [
  {
    title: "Reduced Carbon Footprint by 30% for EnergyCo",
    impact: "Environmental Impact",
    imageSrc: ssg1,
    fullContent:
      "In partnership with EnergyCo, SGG conducted an end-to-end carbon audit of their supply chain. We identified significant inefficiencies in logistics and aging machinery. By implementing renewable energy microgrids and optimizing route logistics, we achieved a verified 30% reduction in CO2 emissions within 18 months, leading to a direct saving of $1.2M in annual energy costs.",
  },
  {
    title: "Achieved 95% Community Engagement for HealthCorp",
    impact: "Social Impact",
    imageSrc: ssg4,
    fullContent:
      "HealthCorp faced local resistance regarding their new facility expansions. SGG designed a Social Impact Management Plan that included transparent stakeholder forums and a localized recruitment drive. By aligning corporate goals with community needs, we boosted positive brand sentiment and achieved a record 95% engagement rate, ensuring a smooth project rollout without legal delays.",
  },
  {
    title: "Secured ISO 14001 Certification for Koko",
    impact: "Governance & Compliance",
    imageSrc: ssg3,
    fullContent:
      "Koko Limited required international compliance to enter European markets. SGG led a comprehensive Environmental Management System (EMS) overhaul. We streamlined their waste management protocols and internal reporting structures. This transformation not only secured the ISO 14001 certification on the first attempt but also improved operational efficiency by 15% through waste reduction.",
  },
];

const CaseStudiesSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedStudy, setSelectedStudy] = useState(null);

  // 🟢 SENIOR DEV FIX: Define all hooks at the top level of the component
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const bgColor = useColorModeValue("sgg.100", "sgg.900");
  const modalBg = useColorModeValue("white", "sgg.800");
  const subHeaderColor = useColorModeValue("gray.600", "sgg.100");
  const modalBodyTextColor = useColorModeValue("gray.700", "gray.200");

  const handleReadMore = (study) => {
    setSelectedStudy(study);
    onOpen();
  };

  return (
    <Box
      id="case-studies"
      bg={bgColor}
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW={"7xl"}>
        <Heading
          as="h2"
          size="xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={4}
          color={headingColor}
        >
          Our Impact & Case Studies
        </Heading>

        <Text
          textAlign="center"
          maxW="3xl"
          mx="auto"
          mb={12}
          fontSize="lg"
          color={subHeaderColor}
        >
          We deliver measurable impact that drives positive and proactive
          environmental and social outcomes.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 10 }}>
          {caseStudiesData.map((study, index) => (
            <Box
              key={index}
              onClick={() => handleReadMore(study)}
              cursor="pointer"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.02)" }}
            >
              <CaseStudyCard
                title={study.title}
                impact={study.impact}
                imageSrc={study.imageSrc}
                delay={0.1}
              />
            </Box>
          ))}
        </SimpleGrid>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent bg={modalBg} borderRadius="2xl" overflow="hidden">
            {selectedStudy && (
              <>
                <Image
                  src={selectedStudy.imageSrc}
                  alt={selectedStudy.title}
                  h="250px"
                  w="full"
                  objectFit="cover"
                />
                <ModalHeader pt={6}>
                  <Badge colorScheme="green" mb={2}>
                    {selectedStudy.impact}
                  </Badge>
                  <Heading size="md" color={headingColor}>
                    {selectedStudy.title}
                  </Heading>
                </ModalHeader>
                <ModalCloseButton
                  color="white"
                  bg="blackAlpha.500"
                  _hover={{ bg: "blackAlpha.700" }}
                  borderRadius="full"
                />
                <ModalBody pb={8}>
                  <VStack align="start" spacing={4}>
                    <Text
                      color={modalBodyTextColor}
                      lineHeight="tall"
                      fontSize="md"
                    >
                      {selectedStudy.fullContent}
                    </Text>
                  </VStack>
                </ModalBody>
                <ModalFooter borderTopWidth="1px">
                  <Button colorScheme="green" px={8} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default CaseStudiesSection;
