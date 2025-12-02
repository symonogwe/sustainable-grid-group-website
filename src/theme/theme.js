import { extendTheme } from "@chakra-ui/react";

// --- Configuration ---
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// --- Colors: Sustainable Grid Group Palette ---
const colors = {
  sgg: {
    900: "#004D40", // Deep Teal/Corporate Navy
    700: "#38514A", // Mid-tone for dark mode/hovers
    500: "#8BC34A", // Accent - Earthy/Mint Green
    100: "#F7FAFC", // Very Light Cool Gray
  },
  accent: {
    yellow: "#FFC107",
  },
  navbar: {
    light: "rgba(247, 250, 252, 0.92)",
    dark: "rgba(0, 77, 64, 0.9)",
  },
};

// --- Fonts ---
const fonts = {
  heading: `'Sora', sans-serif`,
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
        bg: props.colorMode === "dark" ? "sgg.900" : "sgg.100",
        color: props.colorMode === "dark" ? "sgg.100" : "sgg.900",
      },
      a: {
        color: props.colorMode === "dark" ? "sgg.500" : "sgg.900",
        _hover: {
          textDecoration: "underline",
        },
      },
    }),
  },
  // Component Overrides
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontWeight: "bold", // Added for better legibility
      },
      variants: {
        solid: () => ({
          bg: "sgg.500",
          color: "sgg.900",
          _hover: {
            bg: "sgg.700",
            color: "white", // 🟢 FIX: Text turns white on dark hover
            textDecoration: "none",
            transform: "translateY(-2px)", // subtle lift effect
            boxShadow: "lg",
          },
        }),
        // Added 'outline' variant just in case you use it for the secondary button
        outline: (props) => ({
          borderColor: props.colorMode === "dark" ? "sgg.100" : "sgg.900",
          color: props.colorMode === "dark" ? "sgg.100" : "sgg.900",
          _hover: {
            bg: "sgg.700",
            color: "white",
            borderColor: "sgg.700",
          },
        }),
      },
    },
  },
});

export default theme;
