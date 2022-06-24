import React from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

import DashboardLayout from "../../src/components/DashboardLayout";
import { useAppContext } from "../../src/context/contextApp";
import FormRow from "../../src/components/FormRow";
import ShowAlert from "../../src/components/ShowAlert";
import FormRowOptions from "../../src/components/FormRowOptions";

const SaveJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Box
      padding="20px"
      bg="color.900"
      w="100%"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="sm"
    >
      {showAlert && <ShowAlert />}
      <form onSubmit={handleSubmit}>
        <Text fontSize="4xl" fontWeight="bold">
          {isEditing ? "edit job" : "add job"}
        </Text>
        <Flex gap="1rem" flexDir={{ base: "column", md: "row" }}>
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
        </Flex>
        <Flex gap="1rem" mt="1.5rem" flexDir={{ base: "column", md: "row" }}>
          <FormRowOptions
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
            flexBasis="100%"
          />
          <FormRowOptions
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
            flexBasis="100%"
          />
          <Flex gap="1rem" flexBasis="100%">
            <Button
              mt="2rem"
              color="color.900"
              bg={"color.200"}
              _hover={{ bg: "color.100", textDecoration: "none" }}
              flexBasis="100%"
              onClick={handleSubmit}
              isLoading={isLoading}
            >
              {" "}
              Submit
            </Button>
            <Button
              mt="2rem"
              bg="color.500"
              color={"white"}
              _hover={{
                bg: "color.400",
              }}
              flexBasis="100%"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              {" "}
              Clear
            </Button>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

SaveJob.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default SaveJob;
