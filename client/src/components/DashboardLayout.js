import {
  Box,
  Grid,
  GridItem,
  Link,
  Text,
  Flex,
  Center,
  VStack,
} from "@chakra-ui/react";
import DashboardNavDrawer from "./DashboardNavDrawer";
import Navbar from "./Navbar";

import NavItemBox from "./NavItemBox";

function DashboardLayout({ children }) {
  return (
    <Flex minH="100vh" bg="color.800">
      <Box minW="25%" overflow={"hidden"}>
        <NavItemBox />
      </Box>

      <VStack flex={1}>
        <Box minW="100%" minH="100%">
          <Navbar />
          {children}
        </Box>
      </VStack>
    </Flex>
  );
}
export default DashboardLayout;
