import { Box, Flex, Container } from "@chakra-ui/react";
import DashboardLayout from "../../src/components/DashboardLayout";
import JobsContainer from "../../src/components/JobsContainer";
import SearchContainer from "../../src/components/SearchContainer";

function jobs({ data }) {
  return (
    <Flex flexDirection="column">
      <SearchContainer />
      <JobsContainer />
    </Flex>
  );
}

jobs.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default jobs;
