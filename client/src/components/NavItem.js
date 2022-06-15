import { Box, HStack, Text, Circle, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
const NavItem = ({ icon, text, url }) => {
  return (
    <NextLink href={url} passHref>
      <Link w="70%" _hover={{ textDecoration: "none" }}>
        <Box p="2" bg="color.900" borderRadius="2xl" boxShadow={"sm"}>
          <HStack>
            {" "}
            <Circle
              w="40px"
              h="40px"
              bg="color.100"
              color="white"
              borderRadius="lg"
            >
              {icon}
            </Circle>
            <Text pl="10px" fontWeight={"bold"}>
              {text}
            </Text>
          </HStack>
        </Box>
      </Link>
    </NextLink>
  );
};
export default NavItem;
