import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link as ChakraLink,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

// Define the nav items type structure for clarity (moved from Header)
// const navItems = ['About', 'Services', 'Industries', 'Case Studies', 'Clients'];

const MobileMenu = ({ isOpen, onClose, navItems, handleScrollToSection }) => {
  // Define Hooks at the Top Level!
  const linkColor = useColorModeValue("sgg.900", "sgg.100");
  const bg = useColorModeValue("sgg.100", "sgg.900");
  const hoverBg = useColorModeValue("gray.50", "sgg.700");

  // Combined click handler for navigation links
  const handleNavLinkClick = (e, id) => {
    handleScrollToSection(e, id); // Scroll to the section
    onClose(); // Close the drawer
  };

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
                key={item.id}
                href={`#${item.id}`} // Use standard href with ID
                onClick={(e) => handleNavLinkClick(e, item.id)} // 💡 Use the new handler
                fontSize="xl"
                fontWeight="bold"
                color={linkColor}
                py={2}
                _hover={{
                  color: "sgg.500",
                  bg: hoverBg,
                }}
              >
                {item.name}
              </ChakraLink>
            ))}

            {/* CTA Button: Scroll to Contact Section */}
            <Button
              as={ChakraLink} // Use ChakraLink to accept href and onClick
              href="#contact"
              variant="solid"
              size="lg"
              mt={6}
              rightIcon={<FiArrowRight size={20} />}
              // 💡 Handle scroll and close when CTA is clicked
              onClick={(e) => handleNavLinkClick(e, "contact")}
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
