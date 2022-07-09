import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import FormRow from "../src/components/FormRow";
import ShowAlert from "../src/components/ShowAlert";
import { useAppContext } from "../src/context/contextApp";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};
//app starts here
const Register = () => {
  const router = useRouter();
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
    useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        router.push("/dashboard/jobs");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"color.800"}>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        color="color.100"
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>
            {values.isMember ? "Login" : "Register"}
          </Heading>
          {showAlert && <ShowAlert />}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {!values.isMember && (
                <FormRow
                  labelText="First Name"
                  name="name"
                  type="text"
                  value={values.name}
                  handleChange={handleChange}
                />
              )}

              <FormRow
                labelText="Email Address"
                name="email"
                type="email"
                value={values.email}
                handleChange={handleChange}
              />
              <FormRow
                labelText="Password"
                name="password"
                type="password"
                value={values.password}
                handleChange={handleChange}
              />
              <Stack spacing={2}>
                <Button
                  bg={"color.200"}
                  _hover={{ bg: "color.100", textDecoration: "none" }}
                  color={"white"}
                  disabled={isLoading}
                  type="submit"
                >
                  Submit
                </Button>
                <Center>
                  <Text>
                    {values.isMember
                      ? "Not a member yet?"
                      : "Already a member?"}
                    <Button
                      variant="ghost"
                      _hover={{ bg: "transparent" }}
                      onClick={toggleMember}
                    >
                      {values.isMember ? "Register" : "Login"}
                    </Button>
                  </Text>
                </Center>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
export default Register;
