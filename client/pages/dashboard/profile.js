import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Center,
  Button,
  HStack,
} from "@chakra-ui/react";

import DashboardLayout from "../../src/components/DashboardLayout";
import { useAppContext } from "../../src/context/contextApp";
import FormRow from "../../src/components/FormRow";
import ShowAlert from "../../src/components/ShowAlert";

const profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
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
        <Flex gap="1rem">
          <FormRow
            labelText="Name"
            name="name"
            type="text"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            labelText="Last Name"
            name="lastName"
            type="text"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            name="email"
            type="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Flex gap="1rem" mt="1.5rem">
          <FormRow
            name="location"
            type="text"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
            w="43.3%"
          />
          {isLoading ? (
            <Button
              mt="2rem"
              w="30%"
              bg="color.600"
              color={"white"}
              _hover={{
                bg: "color.700",
              }}
              type="submit"
              isLoading
            ></Button>
          ) : (
            <Button
              mt="2rem"
              w="30%"
              bg="color.600"
              color={"white"}
              _hover={{
                bg: "color.700",
              }}
              type="submit"
            >
              Save Update
            </Button>
          )}
        </Flex>
      </form>
    </Box>
  );
};

profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default profile;
