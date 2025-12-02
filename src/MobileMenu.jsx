// src/components/MobileMenu.jsx (Corrected Implementation)

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link as ChakraLink,
  Button,
  useColorModeValue, // 👈 HOOK
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const navItems = ["About", "Services", "Industries", "Case Studies", "Clients"];

const MobileMenu = ({ isOpen, onClose }) => {
  // 🟢 FIX: Define Hooks at the Top Level!
  const linkColor = useColorModeValue("sgg.900", "sgg.100");
  const bg = useColorModeValue("sgg.100", "sgg.900");

  // 🟢 Pre-calculate dynamic hover styles once
  const hoverBg = useColorModeValue("gray.50", "sgg.700");

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={bg}>
        <DrawerCloseButton />

        <DrawerBody mt={8}>
          <VStack spacing={6} align="stretch">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <ChakraLink
                key={item}
                as={ReactRouterLink}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                fontSize="xl"
                fontWeight="bold"
                color={linkColor}
                py={2}
                onClick={onClose}
                _hover={{
                  color: "sgg.500",
                  bg: hoverBg, // 👈 Use the pre-calculated value
                }}
              >
                {item}
              </ChakraLink>
            ))}

            {/* CTA Button */}
            <Button
              as={ReactRouterLink}
              to="/contact"
              variant="solid"
              size="lg"
              mt={6}
              rightIcon={<FiArrowRight size={20} />}
              onClick={onClose}
            >
              Go to Contact
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
