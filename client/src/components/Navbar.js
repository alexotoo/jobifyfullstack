import NextLink from "next/link";
import { IoPersonSharp, IoReorderThreeOutline } from "react-icons/io5";
import { useRouter } from "next/router";

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  VStack,
  HStack,
  Text,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import DashboardNavDrawer from "./DashboardNavDrawer";
import { useAppContext } from "../context/contextApp";
useAppContext;

export default function Navbar() {
  const { user, logoutUser } = useAppContext();
  const router = useRouter();
  const userName = user.name;

  return (
    <Flex
      px={4}
      borderRadius={"10px"}
      position="fixed"
      w={{ base: "91%", md: "70%" }}
      my={"20px"}
      h="6rem"
      padding="10px"
      className="blur"
      ml="2rem"
      justifyContent={"space-between"}
      alignItems="center"
      boxShadow="lg"
      zIndex={"999"}
    >
      <HStack display={{ base: "none", md: "block" }}>
        <Text fontSize="1.5rem" fontWeight="bold">
          Page: {router.pathname}
        </Text>
      </HStack>
      <Flex w="270px" alignItems="center" justifyContent={"space-between"}>
        <DashboardNavDrawer />

        <Menu>
          <MenuButton
            as={Button}
            bg="color.300"
            color="color.100"
            leftIcon={<IoPersonSharp />}
          >
            {userName.charAt(0).toUpperCase()}
          </MenuButton>
          <MenuList borderRadius={"15px"}>
            <MenuGroup
              title={userName.charAt(0).toUpperCase() + userName.slice(1)}
            >
              <MenuItem>My Account</MenuItem>
              <MenuItem onClick={logoutUser}>Log out </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
