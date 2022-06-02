import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    color: {
      100: "#5223D0",
      200: "#8281E6",
      300: "#ACA4DA",
      400: "#D363C4",
      500: "#EC615B",
      600: "#274371",
      700: "#4F5389",
      800: "#d1c4e9",
      900: "#ffffff",
    },
  },
});

export default theme;
