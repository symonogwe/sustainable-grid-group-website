// src/components/ServicesSection.jsx

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
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import {
  FiTrendingUp,
  FiAward,
  FiCheckSquare,
  FiUsers,
  FiShield,
  FiFileText,
  FiGlobe,
  FiBarChart2,
  FiBookOpen,
} from "react-icons/fi";

const servicesData = [
  {
    icon: FiTrendingUp,
    title: "ESG Advisory and Sustainability Strategy",
    description:
      "Integrating sustainability into business strategy through ESG assessments, materiality analysis, sustainability reporting, and performance improvement.",
    fullDescription:
      "Helping organizations integrate sustainability into business strategy through ESG assessments, materiality analysis, sustainability reporting, climate risk advisory, ESG due diligence, and performance improvement.",
    bullets: [],
  },
  {
    icon: FiAward,
    title: "Certification and Sustainability Assurance",
    description:
      "Expert support for globally recognized sustainability certifications, compliance systems, traceability, and due diligence.",
    fullDescription:
      "Supporting organizations to achieve internationally recognized sustainability certifications through advisory, compliance documentation, traceability systems, assurance, and due diligence.",
    bullets: [
      "Organic Certification",
      "FairWild Certification",
      "Fairtrade Certification",
      "Fair for Life",
      "Rainforest Alliance",
      "Sustainability Assurance",
      "Certification Readiness",
      "Traceability Systems",
      "Internal Audits",
      "Compliance Documentation",
      "Supply Chain Due Diligence",
      "Biodiversity Conservation",
      "Sustainable Resource Management",
    ],
  },
  {
    icon: FiCheckSquare,
    title: "ISO Standards & Management Systems",
    description:
      "Designing and implementing internationally recognized management systems for quality, safety, environment, and information security.",
    fullDescription:
      "Designing and implementing internationally recognized management systems tailored to each client's context.",
    bullets: [
      "ISO 9001 — Quality Management",
      "ISO 14001 — Environmental Management",
      "ISO 45001 — Occupational Health & Safety",
      "ISO 22000 — Food Safety",
      "ISO 27001 — Information Security",
      "ISO 50001 — Energy Management",
      "Integrated Management Systems",
      "Internal Audits",
      "Gap Analysis",
      "Certification Preparation",
    ],
  },
  {
    icon: FiUsers,
    title: "Governance and Organizational Development",
    description:
      "Strengthening institutional governance, board effectiveness, policy, and strategic planning.",
    fullDescription:
      "Helping institutions strengthen governance through board effectiveness, organizational assessments, and strategic planning.",
    bullets: [
      "Board Effectiveness",
      "Corporate Governance",
      "Organizational Assessments",
      "Policy Development",
      "Institutional Strengthening",
      "Strategic Planning",
      "Organizational Transformation",
    ],
  },
  {
    icon: FiShield,
    title: "Enterprise Risk Management",
    description:
      "Identifying, assessing, mitigating, and monitoring strategic, operational, financial, environmental, and compliance risks.",
    fullDescription:
      "Helping organizations identify, assess, mitigate, and monitor strategic, operational, financial, environmental, and compliance risks across the enterprise.",
    bullets: [],
  },
  {
    icon: FiFileText,
    title: "Regulatory Compliance",
    description:
      "Meeting national regulations, donor requirements, environmental legislation, and international compliance frameworks.",
    fullDescription:
      "Supporting organizations in meeting national regulations, donor requirements, environmental legislation, occupational safety standards, and international compliance frameworks.",
    bullets: [],
  },
  {
    icon: FiGlobe,
    title: "Environmental and Social Advisory",
    description:
      "ESIAs, climate advisory, biodiversity, and social safeguarding to protect people and planet.",
    fullDescription:
      "Providing environmental and social advisory services across the project lifecycle.",
    bullets: [
      "Environmental and Social Impact Assessments (ESIA)",
      "Climate Change Advisory",
      "Biodiversity Conservation",
      "Environmental Compliance",
      "Social Safeguarding",
      "Stakeholder Engagement",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Monitoring, Evaluation and Learning (MEL)",
    description:
      "Measuring and improving programme performance through robust evaluation and learning systems.",
    fullDescription:
      "Delivering measurable development outcomes through structured monitoring, evaluation, and learning frameworks.",
    bullets: [
      "Baseline Studies",
      "Programme Evaluation",
      "Monitoring Systems",
      "Results Measurement",
      "Learning Frameworks",
      "Impact Assessments",
    ],
  },
  {
    icon: FiBookOpen,
    title: "Capacity Building and Leadership Development",
    description:
      "Empowering teams and boards through targeted training in governance, ESG, ISO, risk, and compliance.",
    fullDescription:
      "Strengthening organizations through structured capacity-building and leadership development programmes.",
    bullets: [
      "Board Training",
      "Executive Coaching",
      "Governance Training",
      "ISO Training",
      "ESG Training",
      "Risk Management Training",
      "Compliance Training",
    ],
  },
];

const ServicesSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);

  // 🟢 All hooks defined at the top level of the component
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const subHeaderColor = useColorModeValue("gray.600", "sgg.100");
  const modalBg = useColorModeValue("white", "sgg.700");
  const modalBodyTextColor = useColorModeValue("gray.700", "gray.200");

  const handleReadMore = (service) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <Box id="services" py={{ base: 12, md: 20 }} px={{ base: 4, md: 8 }}>
      <Container maxW={"6xl"}>
        {/* Section Header */}
        <Heading
          as="h2"
          size="xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={4}
          color={headingColor}
        >
          Our Core Services
        </Heading>

        <Text
          textAlign="center"
          maxW="2xl"
          mx="auto"
          mb={12}
          fontSize="lg"
          color={subHeaderColor}
        >
          We offer a comprehensive suite of services designed to address your
          unique requirements across the environmental, social, and governance
          spectrum.
        </Text>

        {/* Services Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }} // 1 on mobile, 2 on tablet, 3 on desktop
          spacing={8}
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              // Stagger the animation timing for a very neat entrance effect
              delay={0.1 + index * 0.1}
              onClick={() => handleReadMore(service)}
            />
          ))}
        </SimpleGrid>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="xl"
          isCentered
          scrollBehavior="inside"
          motionPreset="slideInBottom"
        >
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent bg={modalBg} borderRadius="2xl" overflow="hidden">
            {selectedService && (
              <>
                <ModalHeader pt={6} color={headingColor}>
                  {selectedService.title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={8}>
                  <VStack align="start" spacing={4}>
                    <Text
                      color={modalBodyTextColor}
                      lineHeight="tall"
                      fontSize="md"
                    >
                      {selectedService.fullDescription}
                    </Text>

                    {selectedService.bullets.length > 0 && (
                      <UnorderedList
                        color={modalBodyTextColor}
                        spacing={2}
                        pl={4}
                      >
                        {selectedService.bullets.map((bullet, index) => (
                          <ListItem key={index}>{bullet}</ListItem>
                        ))}
                      </UnorderedList>
                    )}
                  </VStack>
                </ModalBody>
                <ModalFooter borderTopWidth="1px">
                  <Button variant="solid" px={8} onClick={onClose}>
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

export default ServicesSection;
