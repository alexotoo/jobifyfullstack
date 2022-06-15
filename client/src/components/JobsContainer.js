import { useEffect } from "react";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/contextApp";
import JobCard from "./JobCard";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, searchType, sort]);

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
  if (jobs.length === 0) {
    return (
      <Box>
        <h2>No jobs to display...</h2>
      </Box>
    );
  }
  return (
    <Box>
      <Text fontSize="1.5rem" fontWeight="bold" py="1rem">
        {totalJobs} job application{jobs.length > 1 && "s"} found
      </Text>
      <div className="grid_jobs">
        {jobs.map((job) => {
          return <JobCard Job key={job._id} {...job} />;
        })}
      </div>
    </Box>
  );
};
export default JobsContainer;
