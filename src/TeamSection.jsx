import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Avatar,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Smith Orwa",
    role: "Chief Sustainability Officer",
    initials: "SO",
    // 💡 Assigned brand-aligned colors to each member
    colorScheme: "teal",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of ESG Strategy",
    initials: "SJ",
    colorScheme: "blue",
  },
  {
    name: "Marcus Chen",
    role: "Environmental Compliance Lead",
    initials: "MC",
    colorScheme: "cyan",
  },
  {
    name: "Elena Rodriguez",
    role: "Social Impact Director",
    initials: "ER",
    colorScheme: "orange",
  },
];

const TeamSection = () => {
  // 🟢 SENIOR DEV FIX: Define hooks at the top level
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const bgColor = useColorModeValue("white", "sgg.900");
  const roleColor = useColorModeValue("sgg.600", "sgg.400");
  const subTextColor = useColorModeValue("gray.600", "gray.400");
  const avatarBorder = useColorModeValue("sgg.50", "sgg.800");

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

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 10, md: 8 }}
        >
          {teamMembers.map((member, index) => (
            <VStack
              key={index}
              spacing={4}
              p={6}
              borderRadius="xl"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-10px)" }}
            >
              <Avatar
                size="2xl"
                name={member.name}
                // 💡 Using colorScheme makes it "Pop" based on the data
                colorScheme={member.colorScheme}
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
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TeamSection;
