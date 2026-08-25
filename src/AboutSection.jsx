// src/components/AboutSection.jsx

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiEye, FiTarget, FiCheckCircle } from "react-icons/fi";
import AnimateOnScroll from "./MotionBox";

// --- Data: Vision & Mission ---
const visionMissionData = [
  {
    icon: FiEye,
    title: "Vision",
    body:
      "To be a globally recognized sustainability and management consulting firm empowering organizations to achieve responsible growth, operational excellence, and lasting impact.",
  },
  {
    icon: FiTarget,
    title: "Mission",
    body:
      "To deliver innovative, evidence-based consulting solutions that enable organizations to achieve sustainable growth, operational excellence, effective governance, and lasting impact through integrity, expertise, and innovation.",
  },
];

// --- Data: Core Values, built around the SUSTAIN acronym ---
const coreValuesData = [
  {
    letter: "S",
    name: "Stewardship",
    description:
      "Protecting people, biodiversity, ecosystems, and natural resources through responsible leadership.",
  },
  {
    letter: "U",
    name: "Unity",
    description:
      "Building trusted partnerships through collaboration, inclusivity, and shared success.",
  },
  {
    letter: "S",
    name: "Sustainability",
    description: "Creating long-term environmental, social, and economic value.",
  },
  {
    letter: "T",
    name: "Transparency",
    description: "Acting with integrity, ethics, honesty, and accountability.",
  },
  {
    letter: "A",
    name: "Accountability",
    description:
      "Delivering measurable results while taking ownership of every commitment.",
  },
  {
    letter: "I",
    name: "Innovation",
    description:
      "Developing practical, forward-looking solutions for complex challenges.",
  },
  {
    letter: "N",
    name: "Nurturing Growth",
    description:
      "Empowering organizations and communities to thrive and achieve lasting success.",
  },
];

// --- Data: Why Sustainable Grid Group ---
const whyUsData = [
  "Multidisciplinary team of experienced professionals",
  "International best practices and standards",
  "Tailored, client-focused solutions",
  "Strong governance and risk management expertise",
  "Extensive certification and sustainability assurance experience",
  "Results-oriented implementation approach",
  "Long-term partnership philosophy",
];

// --- Sub-component: Vision / Mission card ---
const InfoCard = ({ icon, title, body, delay }) => {
  const bg = useColorModeValue("white", "dark.surface");
  const titleColor = useColorModeValue("sgg.900", "dark.text");
  const bodyColor = useColorModeValue("gray.600", "dark.text");

  return (
    <AnimateOnScroll delay={delay}>
      <Box
        p={8}
        bg={bg}
        borderRadius="xl"
        shadow="lg"
        h="full"
        transition="all 0.3s ease"
        _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
      >
        <Icon as={icon} w={10} h={10} color="sgg.500" mb={4} />
        <Heading as="h3" size="md" fontWeight="bold" mb={3} color={titleColor}>
          {title}
        </Heading>
        <Text fontSize="md" color={bodyColor} lineHeight="tall">
          {body}
        </Text>
      </Box>
    </AnimateOnScroll>
  );
};

// --- Sub-component: SUSTAIN core value card ---
const CoreValueCard = ({ letter, name, description, delay }) => {
  const bg = useColorModeValue("white", "dark.surface");
  const nameColor = useColorModeValue("sgg.900", "dark.text");
  const descriptionColor = useColorModeValue("gray.600", "dark.text");

  return (
    <AnimateOnScroll delay={delay}>
      <Box
        p={{ base: 6, lg: 4 }}
        bg={bg}
        borderRadius="xl"
        shadow="lg"
        h="full"
        display="flex"
        flexDirection="column"
        textAlign="center"
        transition="all 0.3s ease"
        _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
      >
        <Text
          fontSize={{ base: "5xl", md: "6xl", lg: "5xl" }}
          fontWeight="extrabold"
          color="sgg.500"
          lineHeight={1}
          mb={2}
        >
          {letter}
        </Text>
        <Heading as="h4" size="sm" fontWeight="bold" mb={2} color={nameColor}>
          {name}
        </Heading>
        <Text fontSize="sm" color={descriptionColor}>
          {description}
        </Text>
      </Box>
    </AnimateOnScroll>
  );
};

const AboutSection = () => {
  // 🟢 All hooks defined at the top level of the component
  const sectionBg = useColorModeValue("white", "dark.canvas");
  const headingColor = useColorModeValue("sgg.900", "dark.text");
  const bodyTextColor = useColorModeValue("gray.600", "dark.text");
  const purposeGradient = useColorModeValue(
    "linear(to-br, sgg.100, white)",
    "linear(to-br, dark.surface, dark.elevated)"
  );

  return (
    <Box id="about" bg={sectionBg} py={{ base: 16, md: 24 }} px={{ base: 4, md: 8 }}>
      <Container maxW="6xl">
        {/* A. Intro heading */}
        <AnimateOnScroll delay={0.1}>
          <Box textAlign="center" mb={14}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              mb={3}
              color={headingColor}
            >
              About Sustainable Grid Group
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              color="sgg.500"
            >
              Creating Sustainable Value Through Excellence
            </Text>
          </Box>
        </AnimateOnScroll>

        {/* B. Narrative */}
        <AnimateOnScroll delay={0.1}>
          <VStack align="start" spacing={5} maxW="4xl" mx="auto" mb={14}>
            <Text fontSize="md" color={bodyTextColor} lineHeight="tall">
              Sustainable Grid Group Limited (SGGL) is a leading
              multidisciplinary sustainability and management consulting firm
              committed to helping organizations build resilient,
              responsible, and future-ready businesses.
            </Text>
            <Text fontSize="md" color={bodyTextColor} lineHeight="tall">
              As organizations face increasing expectations from regulators,
              investors, development partners, customers, and communities,
              sustainability has evolved from a compliance obligation into a
              strategic business imperative. Organizations today require
              trusted advisors who understand governance, sustainability,
              international standards, risk management, and organizational
              transformation.
            </Text>
            <Text fontSize="md" color={bodyTextColor} lineHeight="tall">
              At Sustainable Grid Group, we believe sustainability is not
              merely about compliance; it is about building stronger
              organizations, creating lasting value, and improving lives
              while protecting our planet.
            </Text>
          </VStack>
        </AnimateOnScroll>

        {/* C. Our Purpose callout */}
        <AnimateOnScroll delay={0.1}>
          <Box
            bgGradient={purposeGradient}
            borderLeft="4px solid"
            borderColor="sgg.500"
            borderRadius="xl"
            p={8}
            mb={14}
            shadow="lg"
          >
            <Heading
              as="h3"
              size="md"
              fontWeight="bold"
              mb={3}
              color={headingColor}
            >
              Our Purpose
            </Heading>
            <Text fontSize="md" color={bodyTextColor} lineHeight="tall">
              We exist to help organizations become stronger, more
              resilient, and better prepared for tomorrow by strengthening
              governance, improving management systems, managing risk,
              protecting natural resources, and delivering measurable
              environmental, social, and economic impact.
            </Text>
          </Box>
        </AnimateOnScroll>

        {/* D. Vision + Mission */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={14}>
          {visionMissionData.map((item, index) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              body={item.body}
              delay={0.1 + index * 0.1}
            />
          ))}
        </SimpleGrid>

        {/* E. Core Values — SUSTAIN */}
        <AnimateOnScroll delay={0.1}>
          <Box textAlign="center" mb={10}>
            <Heading
              as="h3"
              size="lg"
              fontWeight="extrabold"
              mb={2}
              color={headingColor}
            >
              Our Core Values
            </Heading>
            <Text fontSize="md" color={bodyTextColor} maxW="2xl" mx="auto">
              Built around SUSTAIN — the principles that guide every
              engagement.
            </Text>
          </Box>
        </AnimateOnScroll>

        {/* Flex + wrap so the 7 cards collapse into a single centered
            SUSTAIN band at lg, instead of leaving an orphaned trailing
            row the way a fixed-column SimpleGrid would at 7 items. */}
        <Flex wrap="wrap" justify="center" gap={{ base: 6, md: 4, lg: 3 }} mb={14}>
          {coreValuesData.map((value, index) => (
            <Box
              key={value.name}
              flex={{
                base: "1 1 100%",
                sm: "1 1 calc(50% - 12px)",
                md: "1 1 calc(25% - 12px)",
                lg: "0 1 calc((100% / 7) - 12px)",
              }}
            >
              <CoreValueCard
                letter={value.letter}
                name={value.name}
                description={value.description}
                delay={0.1 + index * 0.05}
              />
            </Box>
          ))}
        </Flex>

        {/* F. Why Sustainable Grid Group */}
        <AnimateOnScroll delay={0.1}>
          <Box textAlign="center" mb={8}>
            <Heading
              as="h3"
              size="lg"
              fontWeight="extrabold"
              mb={4}
              color={headingColor}
            >
              Why Sustainable Grid Group
            </Heading>
            <Text fontSize="md" color={bodyTextColor} maxW="3xl" mx="auto">
              Organizations choose Sustainable Grid Group because we deliver
              more than consulting; we deliver transformation. Our solutions
              are practical, evidence-based, internationally aligned, and
              designed to generate measurable outcomes.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxW="4xl" mx="auto">
            {whyUsData.map((point) => (
              <HStack key={point} align="start" spacing={3}>
                <Icon
                  as={FiCheckCircle}
                  color="sgg.500"
                  w={5}
                  h={5}
                  mt={1}
                  flexShrink={0}
                />
                <Text fontSize="md" color={bodyTextColor}>
                  {point}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </AnimateOnScroll>
      </Container>
    </Box>
  );
};

export default AboutSection;
