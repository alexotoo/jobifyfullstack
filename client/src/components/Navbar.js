import NextLink from "next/link";

import { FiMoon, FiSun } from "react-icons/fi";

import logo from "../../public/images/logo.png";
import Image from "next/image";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import DashboardNavDrawer from "./DashboardNavDrawer";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg="color.800"
      px={4}
      borderRadius={"10px"}
      position="fixed"
      w="70%"
      margin={"20px 0 20px 0"}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Image src={logo} width="150px" height={"50%"} />

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FiSun /> : <FiMoon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
              <NextLink href="/dashboard" passHref>
                <Link>Home</Link>
              </NextLink>
              <NextLink href="/dashboard/jobs" passHref>
                <Link>jobs</Link>
              </NextLink>
              <DashboardNavDrawer />
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
