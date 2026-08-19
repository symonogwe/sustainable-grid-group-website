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
    title: "Grow Bright Future Africa",
    impact: "Environmental Impact",
    imageSrc: ssg1,
    fullContent:
      "SGG partnered with Grow Bright Future Africa to strengthen its environmental, social, and governance (ESG) performance by conducting an Environmental and Social Impact Assessment (ESIA) to identify and manage project risks. We developed a Safeguarding Policy, Grievance Redress Mechanism, ESG policies, a Risk Management Framework, and compliance tools to support responsible project implementation, effective risk management, and sound organizational governance. We also strengthened governance and accountability systems while supporting compliance with donor and government environmental and social requirements. Through targeted capacity-building for board and staff members on transparency, ethics, accountability, and good governance, we helped build a resilient organization equipped to deliver sustainable and responsible development outcomes.",
  },
  {
    title: "Stable Health Foundation",
    impact: "88% Programme Impact",
    imageSrc: ssg4,
    fullContent:
      "SGG helped Stable Health Foundation achieve an 88% overall programme impact score through our monitoring and evaluation assessment, demonstrating strong performance in supporting street-connected children, promoting healthy ageing, and preventing lifestyle-related diseases. Our evaluation strengthened programme accountability, enhanced evidence-based decision-making, and identified opportunities for continuous improvement and long-term sustainability. This partnership advances SDG 3 (Good Health and Well-being), SDG 10 (Reduced Inequalities), and SDG 17 (Partnerships for the Goals), reinforcing our commitment to delivering measurable and sustainable social impact.",
  },
  {
    title: "Kilifi Climate Change & Governance Platform",
    impact: "94% Governance Score",
    imageSrc: ssg3,
    fullContent:
      "Sustainable Grid Group (SGG) partnered with the Kilifi Climate Change and Governance Platform (KCCGP) to strengthen its governance and institutional capacity, achieving a 94% Governance & Compliance Strengthening Score through our assessment and advisory support. Our work included reviewing and strengthening governance structures and Board roles, aligning organizational governance with the Public Benefits Organizations (PBO) Act and other relevant Kenyan legislation, building Board and leadership capacity in ethical governance and fiduciary responsibilities, conducting due diligence for local and international investors, developing robust management systems, and enhancing community feedback and response mechanisms. These interventions improved organizational accountability, transparency, regulatory compliance, and stakeholder confidence, contributing to SDG 16 (Peace, Justice and Strong Institutions) and SDG 17 (Partnerships for the Goals).",
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
