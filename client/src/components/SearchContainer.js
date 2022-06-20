import { useAppContext } from "../context/contextApp";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import FormRowOptions from "./FormRowOptions";
import FormRow from "./FormRow";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <Box
      padding="20px"
      bg="color.900"
      w="100%"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="sm"
      mb="2rem"
    >
      <form>
        <Text fontSize="4xl" fontWeight="bold">
          Search Form
        </Text>
        <Flex gap="1rem">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
            flexBasis="100%"
          />
          <FormRowOptions
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
            flexBasis="100%"
          />
          <FormRowOptions
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
            flexBasis="100%"
          />
        </Flex>
        <Flex gap="1rem" mt="1.5rem">
          <FormRowOptions
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            flexBasis="100%"
          />

          <Button
            mt="2rem"
            bg="color.500"
            color="color.400"
            _hover={{
              bg: "color.400",
              color: "color.500",
            }}
            flexBasis="100%"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filter
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
export default SearchContainer;
