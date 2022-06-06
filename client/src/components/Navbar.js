import NextLink from "next/link";

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
  VStack,
  HStack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import DashboardNavDrawer from "./DashboardNavDrawer";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      px={4}
      borderRadius={"10px"}
      position="fixed"
      w="70%"
      my={"20px"}
      h="6rem"
      padding="10px"
      // className="blur"
      backdropFilter="auto"
      backdropBlur="18px"
      ml="2rem"
      justifyContent={"space-between"}
    >
      <HStack>
        <Text>pages</Text>
      </HStack>
      <HStack spacing={7}>
        <Spacer />
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
      </HStack>
    </Flex>
  );
}
