import { extendTheme } from "@chakra-ui/react";

// --- Configuration ---
const config = {
  // We'll start in light mode by default
  initialColorMode: "light",
  // Allow user's system preference to override initial setting
  useSystemColorMode: false,
};

// --- Colors: Sustainable Grid Group Palette ---
const colors = {
  // We'll rename 'brand' to 'sgg' (Sustainable Grid Group) for clarity
  sgg: {
    // Primary - Deep Teal/Corporate Navy (Stability, Tech)
    900: "#004D40",
    700: "#38514A", // Mid-tone for dark mode backgrounds/borders
    500: "#8BC34A", // Accent - Earthy/Mint Green (Sustainability, Growth)
    100: "#F7FAFC", // Very Light Cool Gray (Light Mode Background)
  },
  // Add an accent color for CTAs that pops against the green/teal
  accent: {
    yellow: "#FFC107", // Soft Gold/Yellow for critical CTAs (Go to Contact)
  },
  // Navbar transparency for the light and dark modes
  navbar: {
    light: "rgba(247, 250, 252, 0.92)", // sgg.100 with transparency
    dark: "rgba(0, 77, 64, 0.9)", // sgg.900 with transparency
  },
};

// --- Fonts ---
const fonts = {
  // Modern, distinct font for titles
  heading: `'Sora', sans-serif`,
  // Highly readable font for body text
  body: `'Inter', sans-serif`,
};

// --- Extended Theme ---
const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        // Use the SGG palette for backgrounds/text
        bg: props.colorMode === "dark" ? "sgg.900" : "sgg.100",
        color: props.colorMode === "dark" ? "sgg.100" : "sgg.900",
      },
      // Ensure all links inherit brand styling
      a: {
        color: props.colorMode === "dark" ? "sgg.500" : "sgg.900",
        _hover: {
          textDecoration: "underline",
        },
      },
    }),
  },
  // Component Overrides (Example: Button)
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full", // Classy, rounded buttons
      },
      variants: {
        // Removed '(props)' argument since it's not used here
        solid: () => ({
          bg: "sgg.500", // Green accent button
          color: "sgg.900",
          _hover: {
            bg: "sgg.700",
          },
        }),
      },
    },
  },
});

export default theme;
