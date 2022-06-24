import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    color: {
      100: "#4329E9",
      200: "#8281E6",
      300: "#ACA4DA",
      400: "#ffbaba",
      500: "#ff7b7b",
      600: "#7F8487",
      700: "#4F5389",
      800: "#F4F7FE",
      900: "#ffffff",
    },
  },
});

export default theme;
