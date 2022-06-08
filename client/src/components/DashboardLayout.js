import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import { useAppContext } from "../context/contextApp";

function DashboardLayout({ children }) {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
    useAppContext();
  const router = useRouter();
  console.log(user);

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
              <Box bg={"color.800"} minH={"1200%"} px="2rem" pt="8rem">
                {children}
              </Box>
            </Box>
          </VStack>
        </Flex>
      )}
    </div>
  );
}
// export async function getStaticProps() {
//   const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
//     useAppContext();

//   return {
//     props: {
//       user,
//     },
//   };
// }
export default DashboardLayout;
