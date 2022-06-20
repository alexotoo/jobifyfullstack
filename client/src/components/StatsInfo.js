import { Box, Flex, Square, Text } from "@chakra-ui/react";

const StatsInfo = ({ count, title, icon, color, bcg }) => {
  return (
    <Box
      borderTopWidth="3px"
      borderTopColor={color}
      borderRadius="2xl"
      boxShadow="lg"
      h="150px"
    >
      <Box
        borderRadius="lg"
        p="20px"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        h="100%"
      >
        <Flex justifyContent="space-between">
          <Text color={color} fontSize="2rem" fontWeight="bold">
            {" "}
            {count}
          </Text>
          <Square bg={bcg} color={color} w="40px" h="40px" rounded="lg">
            {icon}
          </Square>
        </Flex>
        <Square bg={bcg} color={color} h="40px" rounded="lg">
          <Text textTransform="capitalize" fontWeight="bold">
            {title}
          </Text>
        </Square>
      </Box>
    </Box>
  );
};
export default StatsInfo;
