import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, VStack } from "@chakra-ui/react";
import DashboardNavDrawer from "./DashboardNavDrawer";
import Navbar from "./Navbar";

import NavItemBox from "./NavItemBox";
import { useAppContext } from "../context/contextApp";

function DashboardLayout({ children }) {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
    useAppContext();
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(true);
  }, [user]);

  if (!user && isLogedIn) {
    console.log("object");
    router.push("/");
    // setTimeout(() => {
    //   router.push("/register");
    // }, 3000);

    // return <div>not login yet </div>;
  }

  return (
    <div>
      {user && (
        <Flex minH="100vh" bg="color.800">
          <Box minW="25%">
            <NavItemBox position={"fixed"} />
          </Box>

          <VStack flex={1}>
            <Box minW="100%" minH="100%">
              <Navbar />
              <Box bg={"color.800"} minH={"100%"} px="2rem" pt="8rem">
                {children}
              </Box>
            </Box>
          </VStack>
        </Flex>
      )}
    </div>
  );
}

export default DashboardLayout;
