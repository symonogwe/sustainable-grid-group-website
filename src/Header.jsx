import { useState } from "react";
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

const logoSrc = "/src/assets/SGG-logo.svg";

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
        h={{ base: "75px", md: "105px" }}
        objectFit="contain"
      />
    </ChakraLink>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("navbar.light", "navbar.dark");
  const color = useColorModeValue("sgg.900", "sgg.100");

  // ✅ store the section we want to scroll to AFTER drawer closes
  const [pendingScrollId, setPendingScrollId] = useState(null);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Industries", id: "industries" },
    { name: "Case Studies", id: "case-studies" },
    { name: "Clients", id: "clients" },
  ];

  // ✅ pure scroll function (no event dependency)
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 80;

    // More reliable than offsetTop (handles nested layouts better)
    const y =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // ✅ desktop click: scroll immediately
  const handleDesktopNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  // ✅ mobile click: close drawer first (body scroll is locked while drawer open)
  const handleMobileNavClick = (e, id) => {
    e.preventDefault();
    setPendingScrollId(id);
    onClose();
  };

  // ✅ runs when drawer has fully closed
  const handleDrawerClosed = () => {
    if (!pendingScrollId) return;
    scrollToSection(pendingScrollId);
    setPendingScrollId(null);
  };

  return (
    <Box
      bg={bg}
      px={{ base: 2, md: 4 }}
      py={2}
      position="sticky"
      top="0"
      zIndex="sticky"
      shadow="md"
      backdropFilter="blur(8px)"
      transition="background-color 0.2s"
    >
      <Flex
        h={{ base: 16, md: "auto" }}
        py={{ base: 4, md: 2 }}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="7xl"
        mx="auto"
      >
        <Box>
          <Logo />
        </Box>

        {/* DESKTOP NAV LINKS */}
        <Flex display={{ base: "none", lg: "flex" }}>
          <Stack direction={"row"} spacing={8}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleDesktopNavClick(e, item.id)}
                p={2}
                fontSize={"sm"}
                fontWeight={600}
                color={color}
                _hover={{
                  textDecoration: "none",
                  color: "sgg.500",
                }}
              >
                {item.name}
              </ChakraLink>
            ))}
          </Stack>
        </Flex>

        {/* CTAs + Theme Toggle */}
        <Stack
          direction={"row"}
          spacing={{ base: 2, md: 4 }}
          alignItems={"center"}
        >
          {/* Desktop CTA */}
          <Button
            href="#contact"
            onClick={(e) => handleDesktopNavClick(e, "contact")}
            display={{ base: "none", md: "inline-flex" }}
            variant="solid"
            size="sm"
            rightIcon={<FiArrowRight size={16} />}
          >
            Go to Contact
          </Button>

          <ThemeToggle />

          {/* Mobile Menu Icon */}
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

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isOpen}
        onClose={onClose}
        navItems={navItems}
        handleMobileNavClick={handleMobileNavClick}
        onDrawerClosed={handleDrawerClosed}
      />
    </Box>
  );
};

export default Header;
