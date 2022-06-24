import React, { useState } from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

import DashboardLayout from "../../src/components/DashboardLayout";
import { useAppContext } from "../../src/context/contextApp";
import FormRow from "../../src/components/FormRow";
import ShowAlert from "../../src/components/ShowAlert";

const Profile = () => {
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
        <Text fontSize="4xl" fontWeight="bold">
          Profile
        </Text>
        <Flex gap="1rem" flexDir={{ base: "column", md: "row" }}>
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
        <Flex gap="1rem" mt="1.5rem" flexDir={{ base: "column", md: "row" }}>
          <FormRow
            name="location"
            type="text"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
            // w="43.3%"
            w={{ base: "100%", md: "43.3%" }}
          />
          <Button
            mt="2rem"
            w={{ base: "100%", md: "30%" }}
            color="color.900"
            bg={"color.200"}
            _hover={{ bg: "color.100", textDecoration: "none" }}
            type="submit"
            isLoading={isLoading}
          >
            {" "}
            Save Update
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

Profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Profile;
