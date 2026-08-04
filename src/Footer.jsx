// // src/components/Footer.jsx

// import {
//   Box,
//   Container,
//   SimpleGrid,
//   Text,
//   Link as ChakraLink,
//   Stack,
//   Flex,
//   Image,
//   Icon,
// } from "@chakra-ui/react";
// import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
// import { Link as ReactRouterLink } from "react-router-dom";

// import logo from "../src/assets/SGGL-logo.svg";

// const Footer = () => {
//   // Dummy logo source

//   const QuickLinks = [
//     "About Us",
//     "Services",
//     "Case Studies",
//     "ESG Framework",
//     "Careers",
//   ];

//   return (
//     // 🟢 Use tokens directly from the theme
//     <Box bg="sgg.900" color="sgg.100" py={10} px={{ base: 4, md: 8 }}>
//       <Container maxW={"7xl"}>
//         <SimpleGrid
//           columns={{ base: 1, md: 3 }}
//           spacing={8}
//           borderBottom="1px solid"
//           // 🟢 Use token for border color
//           borderColor="sgg.700"
//           pb={8}
//         >
//           {/* 1. Brand Info */}
//           <Stack spacing={4}>
//             <Image
//               src={logo}
//               alt="Sustainable Grid Group"
//               h="150px"
//               w="auto"
//               objectFit="contain"
//             />
//             <Text fontSize="sm" color="gray.400" pt={2}>
//               Driving sustainable and ethical growth for a resilient future.
//             </Text>
//             {/* 🟢 Use token for link color and hover */}
//             <Flex direction="row">
//               <ChakraLink
//                 href="#"
//                 isExternal
//                 color="gray.400"
//                 _hover={{ color: "sgg.500" }}
//               >
//                 <Icon as={FiLinkedin} w={5} h={5} />
//               </ChakraLink>
//               <ChakraLink
//                 href="#"
//                 isExternal
//                 color="gray.400"
//                 _hover={{ color: "sgg.500" }}
//                 ml={3}
//               >
//                 <Icon as={FiTwitter} w={5} h={5} />
//               </ChakraLink>
//               <ChakraLink
//                 href="#"
//                 isExternal
//                 color="gray.400"
//                 _hover={{ color: "sgg.500" }}
//                 ml={3}
//               >
//                 <Icon as={FiFacebook} w={5} h={5} />
//               </ChakraLink>
//             </Flex>
//           </Stack>

//           {/* 2. Quick Links */}
//           <Stack align={{ base: "start", md: "center" }} spacing={3}>
//             <Text fontWeight="bold" fontSize="md" mb={2}>
//               Quick Links
//             </Text>
//             {QuickLinks.map((link) => (
//               <ChakraLink
//                 key={link}
//                 as={ReactRouterLink}
//                 to={`/${link.toLowerCase().replace(" ", "-")}`}
//                 fontSize="sm"
//                 color="gray.400" // 🟢 Use token
//                 _hover={{ color: "sgg.500" }}
//               >
//                 {link}
//               </ChakraLink>
//             ))}
//           </Stack>

//           {/* 3. Contact Info */}
//           <Stack align={{ base: "start", md: "end" }} spacing={3}>
//             <Text fontWeight="bold" fontSize="md" mb={2}>
//               Contact
//             </Text>
//             <Text fontSize="sm" color="gray.400">
//               info@sustainablegrid.com
//             </Text>
//             <Text fontSize="sm" color="gray.400">
//               +254 711 130 179
//             </Text>
//             <Text fontSize="sm" color="gray.400">
//               Riverside Dr, Nairobi, Kenya
//             </Text>
//           </Stack>
//         </SimpleGrid>

//         {/* Copyright and Legal */}
//         <Box pt={8} textAlign="center">
//           <Text fontSize="xs" color="gray.400">
//             &copy; {new Date().getFullYear()} Sustainable Grid Group | All
//             Rights Reserved. |{" "}
//             <ChakraLink href="#" color="gray.400">
//               Privacy Policy
//             </ChakraLink>
//           </Text>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

// src/components/Footer.jsx

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  Stack,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

import logo from "../src/assets/SGGL-logo.svg";

const Footer = () => {
  // Dummy logo source

  // 🟢 FIX: These now point at real in-page section ids (scroll targets)
  // instead of react-router paths that had no matching route. "ESG
  // Framework" and "Careers" were removed — no section exists for either.
  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Case Studies", id: "case-studies" },
  ];

  // 🟢 FIX: Anchor-scroll handler mirroring the Header nav pattern
  // (getElementById + offset-aware scrollTo, accounting for the sticky
  // 90px header) instead of a dead router Link.
  const handleQuickLinkClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 90;
    const y =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    // 🟢 Use tokens directly from the theme
    <Box bg="sgg.900" color="sgg.100" py={10} px={{ base: 4, md: 8 }}>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={8}
          borderBottom="1px solid"
          // 🟢 Use token for border color
          borderColor="sgg.700"
          pb={8}
        >
          {/* 1. Brand Info */}
          <Stack spacing={4}>
            <Image
              src={logo}
              alt="Sustainable Grid Group"
              h="180px" // 🟢 Increased from 150px to 180px
              w="auto"
              objectFit="contain"
            />
            <Text fontSize="sm" color="gray.400" pt={2}>
              Driving sustainable and ethical growth for a resilient future.
            </Text>
            {/* 🟢 Use token for link color and hover */}
            <Flex direction="row">
              <ChakraLink
                href="#"
                isExternal
                color="gray.400"
                _hover={{ color: "sgg.500" }}
              >
                <Icon as={FiLinkedin} w={5} h={5} />
              </ChakraLink>
              <ChakraLink
                href="#"
                isExternal
                color="gray.400"
                _hover={{ color: "sgg.500" }}
                ml={3}
              >
                <Icon as={FiTwitter} w={5} h={5} />
              </ChakraLink>
              <ChakraLink
                href="#"
                isExternal
                color="gray.400"
                _hover={{ color: "sgg.500" }}
                ml={3}
              >
                <Icon as={FiFacebook} w={5} h={5} />
              </ChakraLink>
            </Flex>
          </Stack>

          {/* 2. Quick Links */}
          <Stack align={{ base: "start", md: "center" }} spacing={3}>
            <Text fontWeight="bold" fontSize="md" mb={2}>
              Quick Links
            </Text>
            {quickLinks.map((link) => (
              <ChakraLink
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleQuickLinkClick(e, link.id)}
                fontSize="sm"
                color="gray.400" // 🟢 Use token
                _hover={{ color: "sgg.500" }}
              >
                {link.name}
              </ChakraLink>
            ))}
          </Stack>

          {/* 3. Contact Info */}
          <Stack align={{ base: "start", md: "end" }} spacing={3}>
            <Text fontWeight="bold" fontSize="md" mb={2}>
              Contact
            </Text>
            <Text fontSize="sm" color="gray.400">
              info@sustainablegrid.com
            </Text>
            <Text fontSize="sm" color="gray.400">
              +254 711 130 179
            </Text>
            <Text fontSize="sm" color="gray.400">
              Riverside Dr, Nairobi, Kenya
            </Text>
          </Stack>
        </SimpleGrid>

        {/* Copyright and Legal */}
        <Box pt={8} textAlign="center">
          <Text fontSize="xs" color="gray.400">
            &copy; {new Date().getFullYear()} Sustainable Grid Group | All
            Rights Reserved. |{" "}
            <ChakraLink href="#" color="gray.400">
              Privacy Policy
            </ChakraLink>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
