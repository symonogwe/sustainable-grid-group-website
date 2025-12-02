// src/components/MotionBox.jsx (Must be created)

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Create a Chakra Box component enhanced with Framer Motion capabilities
const MotionBox = motion(Box);

// Animation configuration for a smooth, bottom-up fade-in
const containerVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen and invisible
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Smooth speed
      ease: [0.4, 0, 0.2, 1], // Easing for a classy feel
    },
  },
};

// Reusable component for animating sections on scroll
const AnimateOnScroll = ({ children, delay = 0.2, ...props }) => {
  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      // Use Framer Motion's whileInView to trigger animation when the component scrolls into view
      whileInView="visible"
      viewport={{ once: true, amount: delay }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default AnimateOnScroll;
