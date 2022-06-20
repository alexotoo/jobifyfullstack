import { useEffect } from "react";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/contextApp";
import JobCard from "./JobCard";
import PaginatBtnContainer from "./PaginatBtnContainer";

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
    // eslint-disable-next-line
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
        <Text>No jobs to display...</Text>
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

      {numOfPages > 1 && <PaginatBtnContainer />}
    </Box>
  );
};
export default JobsContainer;
