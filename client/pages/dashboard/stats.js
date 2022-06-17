import { Center, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import DashboardLayout from "../../src/components/DashboardLayout";
import StatsCard from "../../src/components/StatsCard.js";

import { useAppContext } from "../../src/context/contextApp";

const stats = () => {
  const { showStats, isLoading, monthlyApplications, stats } = useAppContext();
  console.log("stats page", isLoading, monthlyApplications, stats);

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

      {/* {monthlyApplications.length > 0 && <StatsCard />} */}
    </>
  );
};

stats.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default stats;
