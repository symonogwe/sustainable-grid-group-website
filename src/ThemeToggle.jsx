// src/components/ThemeToggle.jsx

import { useColorMode, IconButton } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
      // Use the opposite color for the icon button for visibility
      color={colorMode === "light" ? "sgg.900" : "sgg.100"}
    />
  );
};

export default ThemeToggle;
