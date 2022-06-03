import { Box, HStack, Text, Circle, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
const NavItem = ({ icon, text, url }) => {
  return (
    <NextLink href={url} passHref>
      <Link w="70%">
        <Box p="2" bg="color.900" borderRadius="15px" boxShadow={"lg"}>
          <HStack>
            {" "}
            <Circle
              w="40px"
              h="40px"
              bg="tomato"
              color="white"
              borderRadius="15px"
            >
              {icon}
            </Circle>
            <Text pl="10px">{text}</Text>
          </HStack>
        </Box>
      </Link>
    </NextLink>
  );
};
export default NavItem;
