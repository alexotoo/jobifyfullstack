import { Center, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import DashboardLayout from "../../src/components/DashboardLayout";
import StatsCard from "../../src/components/StatsCard.js";
import StatsChartContainer from "../../src/components/StatsChartContainer";

import { useAppContext } from "../../src/context/contextApp";

const stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      <StatsCard />
      {monthlyApplications.length > 0 && <StatsChartContainer />}
    </>
  );
};

stats.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default stats;
