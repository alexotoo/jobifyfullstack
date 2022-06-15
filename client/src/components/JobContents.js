import { Center, HStack, Text } from "@chakra-ui/react";

const JobContents = ({ text, icon }) => {
  return (
    <HStack>
      <Center color="color.600">{icon}</Center>
      <Text>{text}</Text>
    </HStack>
  );
};
export default JobContents;
