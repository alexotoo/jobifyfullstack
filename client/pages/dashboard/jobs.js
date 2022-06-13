import { Box, Container } from "@chakra-ui/react";
import DashboardLayout from "../../src/components/DashboardLayout";

function jobs() {
  return <Box>hellooo jobs</Box>;
}

jobs.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default jobs;
