import React from "react";

import { Box, Flex, Container } from "@chakra-ui/react";
import DashboardLayout from "../../src/components/DashboardLayout";
import JobsContainer from "../../src/components/JobsContainer";
import SearchContainer from "../../src/components/SearchContainer";

function Jobs({ data }) {
  return (
    <Flex flexDirection="column">
      <SearchContainer />
      <JobsContainer />
    </Flex>
  );
}

Jobs.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Jobs;
