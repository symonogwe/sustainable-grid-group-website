// // src/components/Header.jsx

// import {
//   Box,
//   Flex,
//   Text,
//   Button,
//   Stack,
//   useColorModeValue,
//   Link as ChakraLink,
// } from "@chakra-ui/react";
// import { FiMenu, FiArrowRight } from "react-icons/fi";
// // We'll assume a local path for navigation
// import { Link as ReactRouterLink } from "react-router-dom";

// import ThemeToggle from "./ThemeToggle"; // Import the new component

// // --- A Simple Logo Component (Placeholder for your import) ---
// const Logo = () => (
//   // Replace this Text with your actual logo component/image later
//   <Text
//     fontSize="xl"
//     fontWeight="extrabold"
//     color={useColorModeValue("sgg.900", "sgg.100")}
//   >
//     Sustainable Grid Group
//   </Text>
// );

// const Header = () => {
//   // Colors from theme.js for sticky navbar effect
//   const bg = useColorModeValue("navbar.light", "navbar.dark");
//   const color = useColorModeValue("sgg.900", "sgg.100");

//   // Navigation Links
//   const navItems = [
//     "About",
//     "Services",
//     "Industries",
//     "Case Studies",
//     "Clients",
//   ];

//   return (
//     <Box
//       bg={bg}
//       px={{ base: 4, md: 8 }}
//       py={4}
//       position="sticky"
//       top="0"
//       zIndex="sticky"
//       shadow="md"
//       backdropFilter="blur(8px)"
//     >
//       <Flex
//         h={16}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         maxW="7xl"
//         mx="auto"
//       >
//         {/* 1. LOGO (FAR LEFT) */}
//         <Logo />

//         {/* 2. DESKTOP NAV LINKS (CENTER) */}
//         {/* Hidden on mobile, shown on desktop */}
//         <Flex display={{ base: "none", lg: "flex" }} ml={10}>
//           <Stack direction={"row"} spacing={6}>
//             {navItems.map((item) => (
//               <ChakraLink
//                 key={item}
//                 as={ReactRouterLink}
//                 to={`/${item.toLowerCase().replace(" ", "-")}`}
//                 p={2}
//                 fontSize={"sm"}
//                 fontWeight={500}
//                 color={color}
//                 _hover={{
//                   textDecoration: "none",
//                   color: "sgg.500",
//                 }}
//               >
//                 {item}
//               </ChakraLink>
//             ))}
//           </Stack>
//         </Flex>

//         {/* 3. CTAs and Theme Toggle (FAR RIGHT) */}
//         <Stack
//           direction={"row"}
//           spacing={{ base: 1, md: 4 }}
//           alignItems={"center"}
//         >
//           {/* Desktop CTA Button: Go to Contact */}
//           <Button
//             as={ReactRouterLink}
//             to="/contact"
//             display={{ base: "none", md: "inline-flex" }}
//             variant="solid"
//             size="sm"
//             rightIcon={<FiArrowRight size={16} />}
//           >
//             Go to Contact
//           </Button>

//           {/* Theme Toggle */}
//           <ThemeToggle />

//           {/* Mobile Menu Icon (Hidden on large screens) */}
//           <Button
//             display={{ base: "inline-flex", lg: "none" }} // Show only on mobile/tablet
//             variant="ghost"
//             aria-label={"Open Menu"}
//             onClick={() => console.log("Open Mobile Menu")}
//             size="md"
//             color={color}
//           >
//             <FiMenu size={20} />
//           </Button>
//         </Stack>
//       </Flex>
//     </Box>
//   );
// };

// export default Header;

// src/components/Header.jsx (Updated)

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Link as ChakraLink,
  useDisclosure, // 👈 New Import for Drawer control
} from "@chakra-ui/react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { Link as ReactRouterLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu"; // 👈 Import the MobileMenu component

// --- A Simple Logo Component --- (Kept for reference)
const Logo = () => (
  <Text
    fontSize="xl"
    fontWeight="extrabold"
    color={useColorModeValue("sgg.900", "sgg.100")}
  >
    Sustainable Grid Group
  </Text>
);

const Header = () => {
  // 💡 Use Chakra UI's useDisclosure hook to manage the Drawer state
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
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="7xl"
        mx="auto"
      >
        {/* 1. LOGO (FAR LEFT) */}
        <Logo />

        {/* 2. DESKTOP NAV LINKS (CENTER) */}
        {/* ... (Desktop links remain the same) ... */}
        <Flex display={{ base: "none", lg: "flex" }} ml={10}>
          <Stack direction={"row"} spacing={6}>
            {navItems.map((item) => (
              <ChakraLink
                key={item}
                as={ReactRouterLink}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={color}
                _hover={{
                  textDecoration: "none",
                  color: "sgg.500",
                }}
              >
                {item}
              </ChakraLink>
            ))}
          </Stack>
        </Flex>

        {/* 3. CTAs and Theme Toggle (FAR RIGHT) */}
        <Stack
          direction={"row"}
          spacing={{ base: 1, md: 4 }}
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

          <ThemeToggle />

          {/* Mobile Menu Icon */}
          <Button
            display={{ base: "inline-flex", lg: "none" }}
            variant="ghost"
            aria-label={"Open Menu"}
            onClick={onOpen} // 👈 This now opens the drawer
            size="md"
            color={color}
          >
            <FiMenu size={20} />
          </Button>
        </Stack>
      </Flex>

      {/* 4. MOBILE MENU DRAWER COMPONENT */}
      <MobileMenu
        isOpen={isOpen} // Pass the current state
        onClose={onClose} // Pass the close handler
      />
    </Box>
  );
};

export default Header;
