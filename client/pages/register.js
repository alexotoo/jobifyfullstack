import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  color,
  Center,
} from "@chakra-ui/react";
import FormRow from "../src/components/FormRow";
import ShowAlert from "../src/components/ShowAlert";
import { useAppContext } from "../src/context/contextApp";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: false,
};
//app starts here
const register = () => {
  const router = useRouter();
  const [values, setValues] = useState(initialState);
  const [labelTitle, setLabelTitle] = useState("");

  const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
    useAppContext();

  console.log(user, isLoading, showAlert);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, isMember } = values;
    if (
      !email ||
      !password ||
      (!isMember && !name) ||
      (!isMember && !confirmPassword)
    ) {
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
        router.push("/dashboard");
      }, 3000);
    }
  }, [user]);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"color.800"}>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        color="color.600"
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

              {!values.isMember && (
                <FormRow
                  labelText="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  handleChange={handleChange}
                />
              )}

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color="color.700">Forgot password?</Link>
                </Stack>

                <Button
                  bg="color.600"
                  color={"white"}
                  disabled={isLoading}
                  _hover={{
                    bg: "color.700",
                  }}
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
      {/* {isLoggedIn === false ? <Register /> : <Login />} */}
    </Flex>
  );
};
export default register;
