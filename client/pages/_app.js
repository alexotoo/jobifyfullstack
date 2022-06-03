import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "../src/context/contextApp";
import "../styles/index.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </ChakraProvider>
  );
}
export default MyApp;
