import { Badge, Center } from "@chakra-ui/react";

const JobStatus = ({ status }) => {
  if (status === "pending") {
    return (
      <Center w="80px" borderRadius="lg" bg="purple.300" color="color.100">
        {status}
      </Center>
    );
  } else if (status === "interview") {
    return (
      <Center w="80px" borderRadius="lg" bg="green.100" color="color.100">
        {status}
      </Center>
    );
  } else if (status === "declined") {
    return (
      <Center w="80px" borderRadius="lg" bg="color.800" color="color.500">
        {status}
      </Center>
    );
  }
};
export default JobStatus;
