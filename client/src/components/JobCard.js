import NextLink from "next/link";
import {
  Box,
  VStack,
  Flex,
  Stack,
  Text,
  Button,
  Link,
  HStack,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { IoCalendarNumber, IoLocation, IoBriefcase } from "react-icons/io5";
import { useAppContext } from "../context/contextApp";
import moment from "moment";
import JobContents from "./JobContents";
import JobStatus from "./JobStatus";

const JobCard = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");

  return (
    <Box
      bg="color.900"
      display="flex"
      flexDir="column"
      borderRadius="2xl"
      boxShadow="lg"
    >
      <Box borderBottom="1px" borderColor="color.300">
        <HStack padding="1rem">
          <Center
            h="40px"
            w="40px"
            bg="color.100"
            color="color.900"
            borderRadius="lg"
          >
            {company.charAt(0)}
          </Center>

          <VStack lineHeight="15px" textTransform="capitalize">
            <Text fontWeight="bold">{position}</Text>
            <Text color="color.600" fontWeight="light">
              {company}
            </Text>
          </VStack>
        </HStack>
      </Box>
      <Box padding="1rem">
        <Box>
          <Flex>
            {" "}
            <JobContents icon={<IoLocation />} text={jobLocation} />
            <Spacer />
            <JobContents icon={<IoCalendarNumber />} text={date} />
          </Flex>
          <Flex mt="1rem">
            {" "}
            <JobContents icon={<IoBriefcase />} text={jobType} />
            <Spacer />
            <JobStatus status={status} />
          </Flex>
        </Box>
        <HStack>
          <JobContents />
          <Box></Box>
        </HStack>
      </Box>
      <Stack spacing={6} direction={"row"} padding="1rem" color="white">
        <NextLink href={"/dashboard/saveJob"} passHref>
          <Link _hover={{ textDecoration: "none" }} passHref>
            <Button
              rounded={"lg"}
              px={6}
              bg={"color.200"}
              _hover={{ bg: "color.700" }}
              onClick={() => setEditJob(_id)}
            >
              Edit
            </Button>
          </Link>
        </NextLink>
        <Button
          rounded={"lg"}
          px={6}
          bg={"color.500"}
          _hover={{ bg: "color.400" }}
          onClick={() => deleteJob(_id)}
        >
          Delete
        </Button>
      </Stack>{" "}
    </Box>
  );
};
export default JobCard;
