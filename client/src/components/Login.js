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
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} color="color.600">
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Login</Heading>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
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
              _hover={{
                bg: "color.700",
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
export default Login;
