import { Box, HStack, Text, Circle, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
const NavItem = ({ icon, text, url }) => {
  return (
    <NextLink href={url} passHref>
      <Link w="80%">
        <Box p="12" bg="white" borderRadius="15px" className="shd" my="12">
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
