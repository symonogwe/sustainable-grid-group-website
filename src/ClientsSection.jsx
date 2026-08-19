// src/components/ClientsSection.jsx

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const clients = [
  { name: "Ezeetec Limited", src: "/clients/ezeetec.png" },
  { name: "Grow Bright Future Africa", src: "/clients/grow-bright.png" },
  {
    name: "Kilifi Climate Change and Governance Platform",
    src: "/clients/kilifi-ccgp.png",
  },
  { name: "Equity Afya", src: "/clients/equity-afya.png" },
  { name: "Stable Health Foundation", src: "/clients/stable-health.png" },
  { name: "Quality Care Trainers Limited", src: "/clients/quality-care.png" },
];

// Logos rendered twice back-to-back so the track can loop seamlessly at -50%.
const marqueeLogos = [...clients, ...clients];

const ClientsSection = () => {
  // 🟢 All hooks defined at the top level of the component
  const bgColor = useColorModeValue("sgg.100", "sgg.900");
  const headingColor = useColorModeValue("sgg.900", "sgg.100");

  return (
    <Box
      id="our-clients"
      bg={bgColor}
      py={{ base: 12, md: 16 }}
      px={{ base: 4, md: 8 }}
      overflow="hidden"
    >
      <Container maxW="7xl">
        <Heading
          as="h2"
          size="xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={4}
          color={headingColor}
        >
          Our Trusted Clients
        </Heading>

        <Text textAlign="center" maxW="3xl" mx="auto" mb={12} fontSize="lg" color="sgg.500">
          Proud to partner with organizations delivering meaningful impact
          across sectors.
        </Text>
      </Container>

      {/* Full-width marquee, deliberately outside Container so it bleeds edge-to-edge */}
      <Box
        aria-label="Our clients"
        role="region"
        overflow="hidden"
        width="100%"
        _hover={{ ".clients-marquee-track": { animationPlayState: "paused" } }}
      >
        <Flex
          className="clients-marquee-track"
          width="max-content"
          sx={{
            animation: "clients-marquee 40s linear infinite",
            "@keyframes clients-marquee": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          {marqueeLogos.map((client, index) => (
            <Box key={`${client.name}-${index}`} minW="auto" flexShrink={0}>
              <Image
                src={client.src}
                alt={client.name}
                h={{ base: "56px", md: "80px" }}
                objectFit="contain"
                mx={{ base: 8, md: 14 }}
                opacity={0.75}
                transition="opacity 0.2s"
                _hover={{ opacity: 1 }}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ClientsSection;
