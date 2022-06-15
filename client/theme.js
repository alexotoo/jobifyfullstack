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
      400: "#D363C4",
      500: "#EC615B",
      600: "#274371",
      700: "#4F5389",
      800: "#F4F7FE",
      900: "#ffffff",
    },
  },
});

export default theme;
