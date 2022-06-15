import { Box, Flex, Container } from "@chakra-ui/react";
import DashboardLayout from "../../src/components/DashboardLayout";
import JobsContainer from "../../src/components/JobsContainer";

function jobs({ data }) {
  console.log(data);
  return (
    <Flex flexDirection="column">
      <Box>1</Box>
      <JobsContainer />
    </Flex>
  );
}

jobs.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default jobs;
