import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  useColorModeValue,
  Link as ChakraLink,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const logoSrc = "/src/assets/SGG-Logo.jpeg";

const Logo = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ChakraLink
      as={ReactRouterLink}
      to="/"
      onClick={handleLogoClick}
      _hover={{ opacity: 0.8 }}
      display="flex"
      alignItems="center"
    >
      <Image
        src={logoSrc}
        alt="Sustainable Grid Group"
        h="95px" // Keeps the navbar height consistent
        objectFit="contain"
      />
    </ChakraLink>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("navbar.light", "navbar.dark");
  const color = useColorModeValue("sgg.900", "sgg.100");

  const navItems = [
    "About",
    "Services",
    "Industries",
    "Case Studies",
    "Clients",
  ];

  return (
    <Box
      bg={bg}
      px={{ base: 4, md: 8 }}
      py={4}
      position="sticky"
      top="0"
      zIndex="sticky"
      shadow="md"
      backdropFilter="blur(8px)"
      transition="background-color 0.2s"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"} // This pushes Logo Left and CTAs Right
        maxW="7xl"
        mx="auto"
      >
        <Box>
          <Logo />
        </Box>

        <Flex display={{ base: "none", lg: "flex" }}>
          <Stack direction={"row"} spacing={8}>
            {navItems.map((item) => (
              <ChakraLink
                key={item}
                as={ReactRouterLink}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                p={2}
                fontSize={"sm"}
                fontWeight={600}
                color={color}
                _hover={{
                  textDecoration: "none",
                  color: "sgg.500", // Green accent on hover
                }}
              >
                {item}
              </ChakraLink>
            ))}
          </Stack>
        </Flex>

        <Stack
          direction={"row"}
          spacing={{ base: 2, md: 4 }}
          alignItems={"center"}
        >
          {/* Desktop CTA Button */}
          <Button
            as={ReactRouterLink}
            to="/contact"
            display={{ base: "none", md: "inline-flex" }}
            variant="solid"
            size="sm"
            rightIcon={<FiArrowRight size={16} />}
          >
            Go to Contact
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Icon (Hamburger) */}
          <Button
            display={{ base: "inline-flex", lg: "none" }}
            variant="ghost"
            aria-label={"Open Menu"}
            onClick={onOpen}
            size="md"
            color={color}
          >
            <FiMenu size={24} />
          </Button>
        </Stack>
      </Flex>

      {/* 4. MOBILE MENU DRAWER COMPONENT */}
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
