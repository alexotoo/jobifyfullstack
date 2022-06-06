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
  const { user } = useAppContext();
  const router = useRouter();
  const userName = user.name;
  const formatUserName = (profile) => {
    return userName.charAt(0).toUpperCase() + userName.slice(1);
  };
  console.log(user);
  console.log(router.pathname);
  return (
    <Flex
      px={4}
      borderRadius={"10px"}
      position="fixed"
      w="70%"
      my={"20px"}
      h="6rem"
      padding="10px"
      className="blur"
      // backdropFilter="auto"
      // backdropBlur="18px"
      ml="2rem"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <HStack>
        <Text>{router.pathname}</Text>
      </HStack>
      <Flex w="270px" alignItems="center" justifyContent={"space-between"}>
        <DashboardNavDrawer />

        <Menu>
          <MenuButton
            as={Button}
            colorScheme="pink"
            leftIcon={<IoPersonSharp />}
          >
            {userName.charAt(0).toUpperCase()}
          </MenuButton>
          <MenuList borderRadius={"15px"}>
            <MenuGroup title={formatUserName(userName)}>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
