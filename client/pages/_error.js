import { Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import errorImg from "../public/images/error colored.svg";

const error = () => {
  return (
    <Container>
      <Center minH={"100vh"}>
        <Image alt="logo" src={errorImg} />
      </Center>
    </Container>
  );
};
export default error;
