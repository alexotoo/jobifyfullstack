import { Button, Box, Text, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppContext } from "../context/contextApp";
import StatsAreaChart from "./StatsAreaChart";
import StatsBarChart from "./StatsBarChart";

const StatsChartContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();

  return (
    <Box mt="3rem">
      <Text textAlign={"center"} color="color.100" fontWeight="bold" mb="1rem">
        Monthly Applications
      </Text>
      <Center>
        <Button
          type="button"
          onClick={() => setBarChart(!barChart)}
          bg="color.100"
          color="color.200"
        >
          {barChart ? "Area Chart" : "Bar Chart"}
        </Button>
      </Center>
      {barChart ? (
        <StatsBarChart data={data} />
      ) : (
        <StatsAreaChart data={data} />
      )}
    </Box>
  );
};
export default StatsChartContainer;
