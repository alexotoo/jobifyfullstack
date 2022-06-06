import { Box, Container } from "@chakra-ui/react";
import DashboardLayout from "../../src/components/DashboardLayout";

function jobs() {
  return (
    <Box bg={"color.500"} minH={"1200%"} px="2rem" pt="8rem">
      {/* <Navbar /> */}
      hellooo jobs
    </Box>
  );
}

jobs.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default jobs;
