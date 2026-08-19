import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Avatar,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Collins Otieno",
    role: "Chief Sustainability Officer",
    initials: "CO",
  },
  {
    name: "Yasin Koech",
    role: "Chief Operations Officer",
    initials: "YK",
  },
  {
    name: "Desmond Mandela",
    role: "Chief Strategy Officer",
    initials: "DM",
  },
  {
    name: "Hopline Banda",
    role: "Chief People & Culture Officer",
    initials: "HB",
  },
  {
    name: "Samuel Karuga",
    role: "Chief Legal & Compliance Officer",
    initials: "SK",
  },
];

const TeamSection = () => {
  // 🟢 SENIOR DEV FIX: Define hooks at the top level
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const bgColor = useColorModeValue("white", "sgg.900");
  const roleColor = useColorModeValue("sgg.600", "sgg.400");
  const subTextColor = useColorModeValue("gray.600", "gray.400");
  const avatarBorder = useColorModeValue("sgg.50", "sgg.800");
  const avatarBg = useColorModeValue("sgg.900", "sgg.500");
  const avatarColor = useColorModeValue("sgg.100", "sgg.900");

  return (
    <Box
      id="team"
      bg={bgColor}
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="extrabold"
            color={headingColor}
          >
            Meet Our Leadership
          </Heading>
          <Text fontSize="lg" color={subTextColor} maxW="2xl">
            A multidisciplinary team of experts dedicated to helping
            organizations navigate the future of sustainable growth.
          </Text>
        </VStack>

        {/* Flex + wrap so the 5 cards collapse into a centered executive
            band at lg, instead of leaving an orphaned trailing card the
            way a fixed-column SimpleGrid would at 5 items. Mirrors the
            SUSTAIN band technique in AboutSection.jsx. */}
        <Flex
          wrap="wrap"
          justify="center"
          gap={{ base: 6, md: 8, lg: 6 }}
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              flex={{
                base: "1 1 100%",
                sm: "1 1 calc(50% - 12px)",
                md: "1 1 calc(33.333% - 21.333px)",
                lg: "0 1 calc(20% - 19.2px)",
              }}
            >
              <VStack
                spacing={4}
                p={6}
                borderRadius="xl"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Avatar
                  size="2xl"
                  name={member.name}
                  bg={avatarBg}
                  color={avatarColor}
                  fontWeight="bold"
                  boxShadow="2xl"
                  borderWidth="4px"
                  borderColor={avatarBorder} // 🟢 Using the top-level hook variable here
                />

                <Stack spacing={1} textAlign="center">
                  <Text fontWeight="bold" fontSize="xl" color={headingColor}>
                    {member.name}
                  </Text>
                  <Text
                    fontSize="xs"
                    fontWeight="bold"
                    color={roleColor}
                    textTransform="uppercase"
                    letterSpacing="widest"
                  >
                    {member.role}
                  </Text>
                </Stack>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default TeamSection;
